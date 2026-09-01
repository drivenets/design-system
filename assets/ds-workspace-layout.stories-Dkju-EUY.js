import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./compiler-runtime-Ct8J1Lnh.js";import{t as a}from"./ds-icon-BW3ZMuEi.js";import{t as o}from"./ds-icon-m9JGPUU6.js";import{n as s,t as c}from"./ds-typography-DvFMkhNF.js";import{n as l,t as u}from"./ds-button-v3-DKBJbP0e.js";import{t as d}from"./ds-status-badge-CCH7b6q6.js";import{t as f}from"./ds-status-badge-CQK4pNDu.js";import{t as p}from"./ds-drawer-JP7RwO6L.js";import{t as m}from"./ds-drawer-C5Tyov_I.js";import{n as h,t as g}from"./ds-workspace-layout-DkYSOLeC.js";import{c as _,i as v,n as y,o as b,t as ee}from"./ds-stepper-DttZuxKx.js";import{n as te,t as ne}from"./ds-status-badge-v2-361x7qNt.js";var re,ie,ae,oe,se,ce,x,S,C,w,T,E,le,ue,de,fe,pe,me,he,D,O,k,A,j,ge=t((()=>{re=`_headerLayout_175a8_1`,ie=`_headerLeft_175a8_8`,ae=`_headerCenter_175a8_15`,oe=`_headerRight_175a8_25`,se=`_projectName_175a8_34`,ce=`_lastUpdate_175a8_38`,x=`_subHeaderContent_175a8_46`,S=`_card_175a8_53`,C=`_footerContent_175a8_61`,w=`_footerActions_175a8_70`,T=`_fillParentHost_175a8_76`,E=`_extendedMainContent_175a8_81`,le=`_extendedTitleRow_175a8_89`,ue=`_footerStepper_175a8_97`,de=`_sideMenu_175a8_104`,fe=`_sideMenuItem_175a8_104`,pe=`_sideMenuItemLabel_175a8_107`,me=`_leftPanelContent_175a8_143`,he=`_leftPanelHeader_175a8_152`,D=`_leftPanelBody_175a8_158`,O=`_canvasSurface_175a8_165`,k=`_workflowInfoPanel_175a8_173`,A=`_workflowInfoItem_175a8_183`,j={headerLayout:re,headerLeft:ie,headerCenter:ae,headerRight:oe,projectName:se,lastUpdate:ce,subHeaderContent:x,card:S,footerContent:C,footerActions:w,fillParentHost:T,extendedMainContent:E,extendedTitleRow:le,footerStepper:ue,sideMenu:de,sideMenuItem:fe,sideMenuItemLabel:pe,leftPanelContent:me,leftPanelHeader:he,leftPanelBody:D,canvasSurface:O,workflowInfoPanel:k,workflowInfoItem:A}}));function M(e){let t=(0,N.c)(20),{type:n,onSaveClick:r}=e,i=n===void 0?`draft`:n,o=L[i],c=i===`running`,l;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(l=(0,F.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,icon:`close`,children:`Close`}),t[0]=l):l=t[0];let d;t[1]===c?d=t[2]:(d=c?(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,icon:`keyboard_double_arrow_left`,children:`Previous`}),(0,F.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Next`})]}):null,t[1]=c,t[2]=d);let f;t[3]===d?f=t[4]:(f=(0,F.jsxs)(`div`,{className:j.headerLeft,children:[l,d]}),t[3]=d,t[4]=f);let p,m;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,F.jsx)(s,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project -23-May-2024 04:47 PM`}),m=(0,F.jsx)(a,{icon:`info`,size:`tiny`}),t[5]=p,t[6]=m):(p=t[5],m=t[6]);let h;t[7]!==o.label||t[8]!==o.phase?(h=(0,F.jsxs)(`div`,{className:j.headerCenter,children:[p,m,(0,F.jsx)(ne,{phase:o.phase,label:o.label,size:`small`})]}),t[7]=o.label,t[8]=o.phase,t[9]=h):h=t[9];let g;t[10]!==c||t[11]!==r?(g=c?(0,F.jsxs)(`div`,{className:j.lastUpdate,children:[(0,F.jsx)(a,{icon:`history_2`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-reg`,children:`Last update: 2d ago`})]}):(0,F.jsxs)(F.Fragment,{children:[(0,F.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(u,{variant:`primary`,color:`light`,size:`small`,onClick:r,children:`Save project`})]}),t[10]=c,t[11]=r,t[12]=g):g=t[12];let _;t[13]===Symbol.for(`react.memo_cache_sentinel`)?(_=(0,F.jsx)(u,{variant:`tertiary`,color:`light`,size:`small`,icon:`more_vert`,"aria-label":`More actions`}),t[13]=_):_=t[13];let v;t[14]===g?v=t[15]:(v=(0,F.jsxs)(`div`,{className:j.headerRight,children:[g,_]}),t[14]=g,t[15]=v);let y;return t[16]!==v||t[17]!==f||t[18]!==h?(y=(0,F.jsxs)(`div`,{className:j.headerLayout,children:[f,h,v]}),t[16]=v,t[17]=f,t[18]=h,t[19]=y):y=t[19],y}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$,_e;t((()=>{N=i(),P=e(n(),1),h(),l(),c(),o(),f(),te(),m(),ee(),ge(),F=r(),I={title:`Components/WorkspaceLayout`,component:g,parameters:{layout:`fullscreen`,docs:{description:{component:`
A compound layout component for composing full-screen workspace views.

### Simple shell (default)

- **WorkspaceLayout** — full-screen flex-column surface
- **WorkspaceLayout.Header** — top bar using Brand Refresh \`--blue-grad-workspace-header\` (above drawers). App-specific header washes belong in the consuming app — see Guidelines/Colors → Gradients.
- **WorkspaceLayout.SubHeader** — optional top stepper band
- **WorkspaceLayout.Content** — content area: column layout, 24px vertical margins, 16px vertical gap, 40px horizontal margins (24px when \`LeftPanel\` is mounted). Title line and content items are consumer markup inside.
- **WorkspaceLayout.Footer** — optional bottom stepper band

Use \`Content\` for the work area. Nest \`Content\` inside \`Body\` when using \`SideMenu\` or \`LeftPanel\`.

### Extended shell (opt-in)

- **WorkspaceLayout.Body** — horizontal band below header/subheader for side chrome and content column
- **WorkspaceLayout.SideMenu** — optional collapsed rail (60px); hover expands to 256px; pin pushes content
- **WorkspaceLayout.LeftPanel** — optional left side panel; reduces content horizontal margins to 24px

Right-side overlays belong in **Content** (inside **Body**) via \`DsDrawer\` — header and body chrome stay visible.

### Drawer containment

Wrap a \`DsDrawer\` inside \`WorkspaceLayout.Content\` (with \`portal={false}\`) and
the drawer renders below the header/subheader and above the footer automatically.

### Notification z-index

If you render a notification/toast inside the workspace and it gets hidden
behind a modal or dialog, render the toast via a portal or increase its
\`--z-index\` CSS variable.
        `}}},argTypes:{fillParent:{control:`boolean`,description:`Use 100% height (fill parent) instead of 100vh (fill viewport)`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},L={draft:{phase:`temporary`,label:`Draft`},pending:{phase:`pending`,label:`Pending`},running:{phase:`execution`,label:`Running`}},R=[{label:`Project details`,description:`Enter project name and basic configuration`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}],z={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsx)(g.SubHeader,{children:(0,F.jsxs)(`div`,{className:j.subHeaderContent,children:[(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Dashboard`}),(0,F.jsx)(s,{variant:`body-xs-reg`,children:`Last updated 2 min ago`})]})}),(0,F.jsxs)(g.Content,{children:[(0,F.jsxs)(`div`,{className:j.card,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Welcome`}),(0,F.jsx)(s,{variant:`body-md-reg`,children:`This is the main content area of the workspace.`})]}),(0,F.jsxs)(`div`,{className:j.card,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Section 2`}),(0,F.jsx)(s,{variant:`body-md-reg`,children:`Another content section.`})]})]}),(0,F.jsx)(g.Footer,{children:(0,F.jsxs)(`div`,{className:j.footerContent,children:[(0,F.jsx)(`span`,{children:`v1.2.0`}),(0,F.jsxs)(`div`,{className:j.footerActions,children:[(0,F.jsx)(u,{variant:`tertiary`,size:`small`,children:`Help`}),(0,F.jsx)(u,{variant:`tertiary`,size:`small`,children:`Feedback`})]})]})})]})},B={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{type:`draft`})}),(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.card,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Draft header`}),(0,F.jsx)(s,{variant:`body-md-reg`,children:`Brand Refresh draft chrome with Discard and Save project actions.`})]})})]})},V={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{type:`pending`})}),(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.card,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Pending header`}),(0,F.jsx)(s,{variant:`body-md-reg`,children:`Brand Refresh pending chrome with Discard and Save project actions.`})]})})]})},H={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{type:`running`})}),(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.card,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Running header`}),(0,F.jsx)(s,{variant:`body-md-reg`,children:`Brand Refresh running chrome with Previous/Next navigation and last-update meta.`})]})})]})},U={render:()=>{let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{onSaveClick:()=>t(!0)})}),(0,F.jsx)(g.SubHeader,{children:(0,F.jsx)(`div`,{className:j.subHeaderContent,children:(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Dashboard`})})}),(0,F.jsxs)(g.Content,{children:[(0,F.jsxs)(`div`,{className:j.card,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Drawer containment`}),(0,F.jsx)(s,{variant:`body-md-reg`,children:`Click "Save project" in the header to open the drawer. It renders inside Content — below the header/subheader and above the footer.`})]}),(0,F.jsxs)(p,{open:e,onOpenChange:t,columns:4,children:[(0,F.jsxs)(p.Header,{children:[(0,F.jsx)(p.Title,{children:`Details`}),(0,F.jsx)(p.CloseTrigger,{})]}),(0,F.jsx)(p.Body,{children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`This drawer is contained within the content area.`})}),(0,F.jsx)(p.Footer,{children:(0,F.jsxs)(p.Actions,{children:[(0,F.jsx)(u,{variant:`tertiary`,size:`large`,onClick:()=>t(!1),children:`Cancel`}),(0,F.jsx)(u,{variant:`primary`,size:`large`,children:`Save`})]})})]})]}),(0,F.jsx)(g.Footer,{children:(0,F.jsx)(`div`,{className:j.footerContent,children:(0,F.jsx)(`span`,{children:`v1.2.0`})})})]})}},W={render:()=>{let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{onSaveClick:()=>t(!0)})}),(0,F.jsx)(g.SubHeader,{children:(0,F.jsx)(`div`,{className:j.subHeaderContent,children:(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Dashboard`})})}),(0,F.jsxs)(g.Content,{children:[(0,F.jsxs)(`div`,{className:j.card,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Backdrop containment`}),(0,F.jsx)(s,{variant:`body-md-reg`,children:`Click "Save project" to open the drawer. The backdrop only covers the content area, not the header or footer.`})]}),(0,F.jsxs)(p,{open:e,onOpenChange:t,columns:4,backdrop:!0,children:[(0,F.jsxs)(p.Header,{children:[(0,F.jsx)(p.Title,{children:`Modal Drawer`}),(0,F.jsx)(p.CloseTrigger,{})]}),(0,F.jsx)(p.Body,{children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`The backdrop is scoped to the content area.`})})]})]}),(0,F.jsx)(g.Footer,{children:(0,F.jsx)(`div`,{className:j.footerContent,children:(0,F.jsx)(`span`,{children:`v1.2.0`})})})]})}},G={render:()=>(0,F.jsx)(`div`,{className:j.fillParentHost,children:(0,F.jsxs)(g,{fillParent:!0,children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsx)(g.Content,{children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`This workspace fills its parent container (400px) instead of the viewport.`})}),(0,F.jsx)(g.Footer,{children:(0,F.jsx)(`div`,{className:j.footerContent,children:(0,F.jsx)(`span`,{children:`v1.2.0`})})})]})})},K={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.card,children:[(0,F.jsx)(s,{variant:`heading3`,children:`No SubHeader or Footer`}),(0,F.jsx)(s,{variant:`body-md-reg`,children:`All sub-components are optional. Use only what you need.`})]})})]})},q={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsx)(g.Body,{children:(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,F.jsxs)(`div`,{className:j.extendedTitleRow,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:j.card,children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})}),(0,F.jsx)(g.Footer,{children:(0,F.jsx)(`div`,{className:j.footerStepper,children:(0,F.jsx)(_,{count:R.length,orientation:`horizontal`,actions:(0,F.jsx)(y,{children:`Next`}),children:R.map((e,t)=>(0,F.jsx)(b,{index:t,children:(0,F.jsx)(v,{index:t,label:e.label,description:e.description})},t))})})})]})},J={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsxs)(g.Body,{children:[(0,F.jsx)(g.LeftPanel,{children:(0,F.jsxs)(`div`,{className:j.leftPanelContent,children:[(0,F.jsx)(`div`,{className:j.leftPanelHeader,children:(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Steps`})}),(0,F.jsx)(`div`,{className:j.leftPanelBody,children:(0,F.jsx)(_,{count:R.length,children:R.map((e,t)=>(0,F.jsx)(b,{index:t,children:(0,F.jsx)(v,{index:t,label:e.label,description:e.description,actions:(0,F.jsx)(y,{children:t===R.length-1?`Finish`:`Next`})})},t))})})]})}),(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,F.jsxs)(`div`,{className:j.extendedTitleRow,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:j.card,children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})},Y={render:()=>{let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsxs)(g.Body,{children:[(0,F.jsxs)(g.SideMenu,{pinned:e,onPinnedChange:t,className:j.sideMenu,children:[(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,F.jsx)(a,{icon:`dashboard`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Overview`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Resources`,children:[(0,F.jsx)(a,{icon:`view_list`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Resources`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Settings`,children:[(0,F.jsx)(a,{icon:`settings`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Settings`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Help`,children:[(0,F.jsx)(a,{icon:`help`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Help`})]})]}),(0,F.jsx)(g.LeftPanel,{children:(0,F.jsxs)(`div`,{className:j.leftPanelContent,children:[(0,F.jsx)(`div`,{className:j.leftPanelHeader,children:(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Filters`})}),(0,F.jsx)(`div`,{className:j.leftPanelBody,children:(0,F.jsx)(s,{variant:`body-sm-reg`,children:`Docked panel in the left side panel slot — always visible, no collapse.`})})]})}),(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,F.jsxs)(`div`,{className:j.extendedTitleRow,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:j.card,children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})}},X={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsx)(g.Body,{children:(0,F.jsxs)(g.Content,{children:[(0,F.jsxs)(`div`,{className:j.extendedTitleRow,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Network topology`}),(0,F.jsx)(u,{variant:`secondary`,size:`small`,icon:`fullscreen`,children:`Expand`})]}),(0,F.jsx)(`div`,{className:j.canvasSurface,"aria-label":`Canvas`,children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`Map or diagram canvas fills the remaining content area.`})})]})})]})},Z={render:()=>{let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsxs)(g.Body,{children:[(0,F.jsxs)(g.SideMenu,{pinned:e,onPinnedChange:t,className:j.sideMenu,children:[(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,F.jsx)(a,{icon:`dashboard`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Overview`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Resources`,children:[(0,F.jsx)(a,{icon:`view_list`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Resources`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Settings`,children:[(0,F.jsx)(a,{icon:`settings`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Settings`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Help`,children:[(0,F.jsx)(a,{icon:`help`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Help`})]})]}),(0,F.jsx)(g.LeftPanel,{children:(0,F.jsxs)(`div`,{className:j.leftPanelContent,children:[(0,F.jsx)(`div`,{className:j.leftPanelHeader,children:(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Section navigation`})}),(0,F.jsx)(`div`,{className:j.leftPanelBody,children:(0,F.jsx)(_,{count:R.length,children:R.map((e,t)=>(0,F.jsx)(b,{index:t,children:(0,F.jsx)(v,{index:t,label:e.label,description:e.description,actions:(0,F.jsx)(y,{children:t===R.length-1?`Finish`:`Next`})})},t))})})]})}),(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,F.jsxs)(`div`,{className:j.extendedTitleRow,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:j.card,children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})}},Q={render:()=>{let[e,t]=(0,P.useState)(!1),[n,r]=(0,P.useState)(!1);return(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{onSaveClick:()=>r(!0)})}),(0,F.jsxs)(g.Body,{children:[(0,F.jsxs)(g.SideMenu,{pinned:e,onPinnedChange:t,className:j.sideMenu,children:[(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,F.jsx)(a,{icon:`dashboard`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Overview`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Resources`,children:[(0,F.jsx)(a,{icon:`view_list`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Resources`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Settings`,children:[(0,F.jsx)(a,{icon:`settings`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Settings`})]}),(0,F.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Help`,children:[(0,F.jsx)(a,{icon:`help`,size:`small`}),(0,F.jsx)(s,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Help`})]})]}),(0,F.jsx)(g.LeftPanel,{children:(0,F.jsxs)(`div`,{className:j.leftPanelContent,children:[(0,F.jsx)(`div`,{className:j.leftPanelHeader,children:(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Steps`})}),(0,F.jsx)(`div`,{className:j.leftPanelBody,children:(0,F.jsx)(_,{count:R.length,children:R.map((e,t)=>(0,F.jsx)(b,{index:t,children:(0,F.jsx)(v,{index:t,label:e.label,description:e.description,actions:(0,F.jsx)(y,{children:t===R.length-1?`Finish`:`Next`})})},t))})})]})}),(0,F.jsxs)(g.Content,{children:[(0,F.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,F.jsxs)(`div`,{className:j.extendedTitleRow,children:[(0,F.jsx)(s,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:j.card,children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]}),(0,F.jsxs)(p,{open:n,onOpenChange:r,columns:4,backdrop:!0,children:[(0,F.jsxs)(p.Header,{children:[(0,F.jsx)(p.Title,{children:`Comments`}),(0,F.jsx)(p.CloseTrigger,{})]}),(0,F.jsx)(p.Body,{children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`Right drawer scoped to Content.`})})]})]})]}),(0,F.jsx)(g.Footer,{children:(0,F.jsx)(`div`,{className:j.footerContent,children:(0,F.jsx)(`span`,{children:`v1.2.0`})})})]})}},$={render:()=>(0,F.jsxs)(g,{children:[(0,F.jsx)(g.Header,{children:(0,F.jsx)(M,{})}),(0,F.jsx)(g.Body,{children:(0,F.jsx)(g.Content,{children:(0,F.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,F.jsx)(`div`,{className:j.extendedTitleRow,children:(0,F.jsx)(s,{variant:`heading3`,children:`Approval workflow`})}),(0,F.jsxs)(`div`,{className:j.workflowInfoPanel,children:[(0,F.jsxs)(`div`,{className:j.workflowInfoItem,children:[(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Status`}),(0,F.jsx)(d,{status:`draft`,size:`small`})]}),(0,F.jsxs)(`div`,{className:j.workflowInfoItem,children:[(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Owner`}),(0,F.jsx)(s,{variant:`body-sm-reg`,children:`Network Operations`})]}),(0,F.jsxs)(`div`,{className:j.workflowInfoItem,children:[(0,F.jsx)(s,{variant:`body-sm-semi-bold`,children:`Last review`}),(0,F.jsx)(s,{variant:`body-sm-reg`,children:`2 days ago`})]})]}),(0,F.jsx)(`div`,{className:j.card,children:(0,F.jsx)(s,{variant:`body-md-reg`,children:`Workflow metadata is consumer markup — not a design-system layout slot.`})})]})})})]})},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader />
            </DsWorkspaceLayout.Header>

            <DsWorkspaceLayout.SubHeader>
                <div className={styles.subHeaderContent}>
                    <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    <DsTypography variant="body-xs-reg">Last updated 2 min ago</DsTypography>
                </div>
            </DsWorkspaceLayout.SubHeader>

            <DsWorkspaceLayout.Content>
                <div className={styles.card}>
                    <DsTypography variant="heading3">Welcome</DsTypography>
                    <DsTypography variant="body-md-reg">This is the main content area of the workspace.</DsTypography>
                </div>
                <div className={styles.card}>
                    <DsTypography variant="heading3">Section 2</DsTypography>
                    <DsTypography variant="body-md-reg">Another content section.</DsTypography>
                </div>
            </DsWorkspaceLayout.Content>

            <DsWorkspaceLayout.Footer>
                <div className={styles.footerContent}>
                    <span>v1.2.0</span>
                    <div className={styles.footerActions}>
                        <DsButtonV3 variant="tertiary" size="small">
                            Help
                        </DsButtonV3>
                        <DsButtonV3 variant="tertiary" size="small">
                            Feedback
                        </DsButtonV3>
                    </div>
                </div>
            </DsWorkspaceLayout.Footer>
        </DsWorkspaceLayout>
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader type="draft" />
            </DsWorkspaceLayout.Header>

            <DsWorkspaceLayout.Content>
                <div className={styles.card}>
                    <DsTypography variant="heading3">Draft header</DsTypography>
                    <DsTypography variant="body-md-reg">
                        Brand Refresh draft chrome with Discard and Save project actions.
                    </DsTypography>
                </div>
            </DsWorkspaceLayout.Content>
        </DsWorkspaceLayout>
}`,...B.parameters?.docs?.source},description:{story:`Figma Type=draft workspace header composition.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader type="pending" />
            </DsWorkspaceLayout.Header>

            <DsWorkspaceLayout.Content>
                <div className={styles.card}>
                    <DsTypography variant="heading3">Pending header</DsTypography>
                    <DsTypography variant="body-md-reg">
                        Brand Refresh pending chrome with Discard and Save project actions.
                    </DsTypography>
                </div>
            </DsWorkspaceLayout.Content>
        </DsWorkspaceLayout>
}`,...V.parameters?.docs?.source},description:{story:`Figma Type=pending workspace header composition.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader type="running" />
            </DsWorkspaceLayout.Header>

            <DsWorkspaceLayout.Content>
                <div className={styles.card}>
                    <DsTypography variant="heading3">Running header</DsTypography>
                    <DsTypography variant="body-md-reg">
                        Brand Refresh running chrome with Previous/Next navigation and last-update meta.
                    </DsTypography>
                </div>
            </DsWorkspaceLayout.Content>
        </DsWorkspaceLayout>
}`,...H.parameters?.docs?.source},description:{story:`Figma Type=running workspace header composition.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <WorkspaceStoryHeader onSaveClick={() => setDrawerOpen(true)} />
                </DsWorkspaceLayout.Header>

                <DsWorkspaceLayout.SubHeader>
                    <div className={styles.subHeaderContent}>
                        <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    </div>
                </DsWorkspaceLayout.SubHeader>

                <DsWorkspaceLayout.Content>
                    <div className={styles.card}>
                        <DsTypography variant="heading3">Drawer containment</DsTypography>
                        <DsTypography variant="body-md-reg">
                            Click &quot;Save project&quot; in the header to open the drawer. It renders inside Content —
                            below the header/subheader and above the footer.
                        </DsTypography>
                    </div>

                    <DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4}>
                        <DsDrawer.Header>
                            <DsDrawer.Title>Details</DsDrawer.Title>
                            <DsDrawer.CloseTrigger />
                        </DsDrawer.Header>
                        <DsDrawer.Body>
                            <DsTypography variant="body-md-reg">
                                This drawer is contained within the content area.
                            </DsTypography>
                        </DsDrawer.Body>
                        <DsDrawer.Footer>
                            <DsDrawer.Actions>
                                <DsButtonV3 variant="tertiary" size="large" onClick={() => setDrawerOpen(false)}>
                                    Cancel
                                </DsButtonV3>
                                <DsButtonV3 variant="primary" size="large">
                                    Save
                                </DsButtonV3>
                            </DsDrawer.Actions>
                        </DsDrawer.Footer>
                    </DsDrawer>
                </DsWorkspaceLayout.Content>

                <DsWorkspaceLayout.Footer>
                    <div className={styles.footerContent}>
                        <span>v1.2.0</span>
                    </div>
                </DsWorkspaceLayout.Footer>
            </DsWorkspaceLayout>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <WorkspaceStoryHeader onSaveClick={() => setDrawerOpen(true)} />
                </DsWorkspaceLayout.Header>

                <DsWorkspaceLayout.SubHeader>
                    <div className={styles.subHeaderContent}>
                        <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    </div>
                </DsWorkspaceLayout.SubHeader>

                <DsWorkspaceLayout.Content>
                    <div className={styles.card}>
                        <DsTypography variant="heading3">Backdrop containment</DsTypography>
                        <DsTypography variant="body-md-reg">
                            Click &quot;Save project&quot; to open the drawer. The backdrop only covers the content area,
                            not the header or footer.
                        </DsTypography>
                    </div>

                    <DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4} backdrop>
                        <DsDrawer.Header>
                            <DsDrawer.Title>Modal Drawer</DsDrawer.Title>
                            <DsDrawer.CloseTrigger />
                        </DsDrawer.Header>
                        <DsDrawer.Body>
                            <DsTypography variant="body-md-reg">The backdrop is scoped to the content area.</DsTypography>
                        </DsDrawer.Body>
                    </DsDrawer>
                </DsWorkspaceLayout.Content>

                <DsWorkspaceLayout.Footer>
                    <div className={styles.footerContent}>
                        <span>v1.2.0</span>
                    </div>
                </DsWorkspaceLayout.Footer>
            </DsWorkspaceLayout>;
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.fillParentHost}>
            <DsWorkspaceLayout fillParent>
                <DsWorkspaceLayout.Header>
                    <WorkspaceStoryHeader />
                </DsWorkspaceLayout.Header>

                <DsWorkspaceLayout.Content>
                    <DsTypography variant="body-md-reg">
                        This workspace fills its parent container (400px) instead of the viewport.
                    </DsTypography>
                </DsWorkspaceLayout.Content>

                <DsWorkspaceLayout.Footer>
                    <div className={styles.footerContent}>
                        <span>v1.2.0</span>
                    </div>
                </DsWorkspaceLayout.Footer>
            </DsWorkspaceLayout>
        </div>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader />
            </DsWorkspaceLayout.Header>

            <DsWorkspaceLayout.Content>
                <div className={styles.card}>
                    <DsTypography variant="heading3">No SubHeader or Footer</DsTypography>
                    <DsTypography variant="body-md-reg">
                        All sub-components are optional. Use only what you need.
                    </DsTypography>
                </div>
            </DsWorkspaceLayout.Content>
        </DsWorkspaceLayout>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader />
            </DsWorkspaceLayout.Header>
            <DsWorkspaceLayout.Body>
                <DsWorkspaceLayout.Content>
                    <div className={styles.extendedMainContent}>
                        <div className={styles.extendedTitleRow}>
                            <DsTypography variant="heading3">Project workspace</DsTypography>
                            <DsButtonV3 variant="secondary" size="small" icon="edit">
                                Edit
                            </DsButtonV3>
                        </div>
                        <div className={styles.card}>
                            <DsTypography variant="body-md-reg">
                                Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
                                Body.
                            </DsTypography>
                        </div>
                    </div>
                </DsWorkspaceLayout.Content>
            </DsWorkspaceLayout.Body>
            <DsWorkspaceLayout.Footer>
                <div className={styles.footerStepper}>
                    <DsStepper count={workspaceSteps.length} orientation="horizontal" actions={<DsNextStepButton>Next</DsNextStepButton>}>
                        {workspaceSteps.map((step, index) => <DsStep index={index} key={index}>
                                <DsStepContent index={index} label={step.label} description={step.description} />
                            </DsStep>)}
                    </DsStepper>
                </div>
            </DsWorkspaceLayout.Footer>
        </DsWorkspaceLayout>
}`,...q.parameters?.docs?.source},description:{story:`Horizontal stepper band in Footer below the body row.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader />
            </DsWorkspaceLayout.Header>
            <DsWorkspaceLayout.Body>
                <DsWorkspaceLayout.LeftPanel>
                    <div className={styles.leftPanelContent}>
                        <div className={styles.leftPanelHeader}>
                            <DsTypography variant="body-sm-semi-bold">Steps</DsTypography>
                        </div>
                        <div className={styles.leftPanelBody}>
                            <DsStepper count={workspaceSteps.length}>
                                {workspaceSteps.map((step, index) => <DsStep index={index} key={index}>
                                        <DsStepContent index={index} label={step.label} description={step.description} actions={<DsNextStepButton>
                                                    {index === workspaceSteps.length - 1 ? 'Finish' : 'Next'}
                                                </DsNextStepButton>} />
                                    </DsStep>)}
                            </DsStepper>
                        </div>
                    </div>
                </DsWorkspaceLayout.LeftPanel>
                <DsWorkspaceLayout.Content>
                    <div className={styles.extendedMainContent}>
                        <div className={styles.extendedTitleRow}>
                            <DsTypography variant="heading3">Project workspace</DsTypography>
                            <DsButtonV3 variant="secondary" size="small" icon="edit">
                                Edit
                            </DsButtonV3>
                        </div>
                        <div className={styles.card}>
                            <DsTypography variant="body-md-reg">
                                Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
                                Body.
                            </DsTypography>
                        </div>
                    </div>
                </DsWorkspaceLayout.Content>
            </DsWorkspaceLayout.Body>
        </DsWorkspaceLayout>
}`,...J.parameters?.docs?.source},description:{story:`Vertical stepper in LeftPanel beside Content.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <WorkspaceStoryHeader />
                </DsWorkspaceLayout.Header>
                <DsWorkspaceLayout.Body>
                    <DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={styles.sideMenu}>
                        <button type="button" className={styles.sideMenuItem} aria-label="Overview" aria-current="page" data-selected>
                            <DsIcon icon="dashboard" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Overview
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Resources">
                            <DsIcon icon="view_list" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Resources
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Settings">
                            <DsIcon icon="settings" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Settings
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Help">
                            <DsIcon icon="help" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Help
                            </DsTypography>
                        </button>
                    </DsWorkspaceLayout.SideMenu>
                    <DsWorkspaceLayout.LeftPanel>
                        <div className={styles.leftPanelContent}>
                            <div className={styles.leftPanelHeader}>
                                <DsTypography variant="body-sm-semi-bold">Filters</DsTypography>
                            </div>
                            <div className={styles.leftPanelBody}>
                                <DsTypography variant="body-sm-reg">
                                    Docked panel in the left side panel slot — always visible, no collapse.
                                </DsTypography>
                            </div>
                        </div>
                    </DsWorkspaceLayout.LeftPanel>
                    <DsWorkspaceLayout.Content>
                        <div className={styles.extendedMainContent}>
                            <div className={styles.extendedTitleRow}>
                                <DsTypography variant="heading3">Project workspace</DsTypography>
                                <DsButtonV3 variant="secondary" size="small" icon="edit">
                                    Edit
                                </DsButtonV3>
                            </div>
                            <div className={styles.card}>
                                <DsTypography variant="body-md-reg">
                                    Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
                                    Body.
                                </DsTypography>
                            </div>
                        </div>
                    </DsWorkspaceLayout.Content>
                </DsWorkspaceLayout.Body>
            </DsWorkspaceLayout>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Side menu rail and docked left panel together.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader />
            </DsWorkspaceLayout.Header>
            <DsWorkspaceLayout.Body>
                <DsWorkspaceLayout.Content>
                    <div className={styles.extendedTitleRow}>
                        <DsTypography variant="heading3">Network topology</DsTypography>
                        <DsButtonV3 variant="secondary" size="small" icon="fullscreen">
                            Expand
                        </DsButtonV3>
                    </div>
                    <div className={styles.canvasSurface} aria-label="Canvas">
                        <DsTypography variant="body-md-reg">
                            Map or diagram canvas fills the remaining content area.
                        </DsTypography>
                    </div>
                </DsWorkspaceLayout.Content>
            </DsWorkspaceLayout.Body>
        </DsWorkspaceLayout>
}`,...X.parameters?.docs?.source},description:{story:`Full-bleed canvas content inside Content.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <WorkspaceStoryHeader />
                </DsWorkspaceLayout.Header>
                <DsWorkspaceLayout.Body>
                    <DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={styles.sideMenu}>
                        <button type="button" className={styles.sideMenuItem} aria-label="Overview" aria-current="page" data-selected>
                            <DsIcon icon="dashboard" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Overview
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Resources">
                            <DsIcon icon="view_list" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Resources
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Settings">
                            <DsIcon icon="settings" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Settings
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Help">
                            <DsIcon icon="help" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Help
                            </DsTypography>
                        </button>
                    </DsWorkspaceLayout.SideMenu>
                    <DsWorkspaceLayout.LeftPanel>
                        <div className={styles.leftPanelContent}>
                            <div className={styles.leftPanelHeader}>
                                <DsTypography variant="body-sm-semi-bold">Section navigation</DsTypography>
                            </div>
                            <div className={styles.leftPanelBody}>
                                <DsStepper count={workspaceSteps.length}>
                                    {workspaceSteps.map((step, index) => <DsStep index={index} key={index}>
                                            <DsStepContent index={index} label={step.label} description={step.description} actions={<DsNextStepButton>
                                                        {index === workspaceSteps.length - 1 ? 'Finish' : 'Next'}
                                                    </DsNextStepButton>} />
                                        </DsStep>)}
                                </DsStepper>
                            </div>
                        </div>
                    </DsWorkspaceLayout.LeftPanel>
                    <DsWorkspaceLayout.Content>
                        <div className={styles.extendedMainContent}>
                            <div className={styles.extendedTitleRow}>
                                <DsTypography variant="heading3">Project workspace</DsTypography>
                                <DsButtonV3 variant="secondary" size="small" icon="edit">
                                    Edit
                                </DsButtonV3>
                            </div>
                            <div className={styles.card}>
                                <DsTypography variant="body-md-reg">
                                    Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
                                    Body.
                                </DsTypography>
                            </div>
                        </div>
                    </DsWorkspaceLayout.Content>
                </DsWorkspaceLayout.Body>
            </DsWorkspaceLayout>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Side menu with left panel — navigation rail plus push panel.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [pinned, setPinned] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <WorkspaceStoryHeader onSaveClick={() => setDrawerOpen(true)} />
                </DsWorkspaceLayout.Header>
                <DsWorkspaceLayout.Body>
                    <DsWorkspaceLayout.SideMenu pinned={pinned} onPinnedChange={setPinned} className={styles.sideMenu}>
                        <button type="button" className={styles.sideMenuItem} aria-label="Overview" aria-current="page" data-selected>
                            <DsIcon icon="dashboard" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Overview
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Resources">
                            <DsIcon icon="view_list" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Resources
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Settings">
                            <DsIcon icon="settings" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Settings
                            </DsTypography>
                        </button>
                        <button type="button" className={styles.sideMenuItem} aria-label="Help">
                            <DsIcon icon="help" size="small" />
                            <DsTypography variant="body-sm-md" className={styles.sideMenuItemLabel}>
                                Help
                            </DsTypography>
                        </button>
                    </DsWorkspaceLayout.SideMenu>
                    <DsWorkspaceLayout.LeftPanel>
                        <div className={styles.leftPanelContent}>
                            <div className={styles.leftPanelHeader}>
                                <DsTypography variant="body-sm-semi-bold">Steps</DsTypography>
                            </div>
                            <div className={styles.leftPanelBody}>
                                <DsStepper count={workspaceSteps.length}>
                                    {workspaceSteps.map((step, index) => <DsStep index={index} key={index}>
                                            <DsStepContent index={index} label={step.label} description={step.description} actions={<DsNextStepButton>
                                                        {index === workspaceSteps.length - 1 ? 'Finish' : 'Next'}
                                                    </DsNextStepButton>} />
                                        </DsStep>)}
                                </DsStepper>
                            </div>
                        </div>
                    </DsWorkspaceLayout.LeftPanel>
                    <DsWorkspaceLayout.Content>
                        <div className={styles.extendedMainContent}>
                            <div className={styles.extendedTitleRow}>
                                <DsTypography variant="heading3">Project workspace</DsTypography>
                                <DsButtonV3 variant="secondary" size="small" icon="edit">
                                    Edit
                                </DsButtonV3>
                            </div>
                            <div className={styles.card}>
                                <DsTypography variant="body-md-reg">
                                    Extended shell content area with layout margins applied by WorkspaceLayout.Content inside
                                    Body.
                                </DsTypography>
                            </div>
                        </div>
                        <DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4} backdrop>
                            <DsDrawer.Header>
                                <DsDrawer.Title>Comments</DsDrawer.Title>
                                <DsDrawer.CloseTrigger />
                            </DsDrawer.Header>
                            <DsDrawer.Body>
                                <DsTypography variant="body-md-reg">Right drawer scoped to Content.</DsTypography>
                            </DsDrawer.Body>
                        </DsDrawer>
                    </DsWorkspaceLayout.Content>
                </DsWorkspaceLayout.Body>
                <DsWorkspaceLayout.Footer>
                    <div className={styles.footerContent}>
                        <span>v1.2.0</span>
                    </div>
                </DsWorkspaceLayout.Footer>
            </DsWorkspaceLayout>;
  }
}`,...Q.parameters?.docs?.source},description:{story:`Side menu, left panel, and right drawer combined.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <WorkspaceStoryHeader />
            </DsWorkspaceLayout.Header>
            <DsWorkspaceLayout.Body>
                <DsWorkspaceLayout.Content>
                    <div className={styles.extendedMainContent}>
                        <div className={styles.extendedTitleRow}>
                            <DsTypography variant="heading3">Approval workflow</DsTypography>
                        </div>
                        <div className={styles.workflowInfoPanel}>
                            <div className={styles.workflowInfoItem}>
                                <DsTypography variant="body-sm-semi-bold">Status</DsTypography>
                                <DsStatusBadge status="draft" size="small" />
                            </div>
                            <div className={styles.workflowInfoItem}>
                                <DsTypography variant="body-sm-semi-bold">Owner</DsTypography>
                                <DsTypography variant="body-sm-reg">Network Operations</DsTypography>
                            </div>
                            <div className={styles.workflowInfoItem}>
                                <DsTypography variant="body-sm-semi-bold">Last review</DsTypography>
                                <DsTypography variant="body-sm-reg">2 days ago</DsTypography>
                            </div>
                        </div>
                        <div className={styles.card}>
                            <DsTypography variant="body-md-reg">
                                Workflow metadata is consumer markup — not a design-system layout slot.
                            </DsTypography>
                        </div>
                    </div>
                </DsWorkspaceLayout.Content>
            </DsWorkspaceLayout.Body>
        </DsWorkspaceLayout>
}`,...$.parameters?.docs?.source},description:{story:`Illustrative workflow information panel composed in Content.`,...$.parameters?.docs?.description}}},_e=[`Default`,`HeaderDraft`,`HeaderPending`,`HeaderRunning`,`WithDrawer`,`WithDrawerAndBackdrop`,`FillParent`,`HeaderOnly`,`ExtendedStepperBelow`,`ExtendedStepperAside`,`ExtendedSideMenuAndLeftPanel`,`ExtendedWithCanvas`,`ExtendedSideMenuLeftPanel`,`ExtendedCombined`,`ExtendedWorkflowInfoPanel`]}))();export{z as Default,Q as ExtendedCombined,Y as ExtendedSideMenuAndLeftPanel,Z as ExtendedSideMenuLeftPanel,J as ExtendedStepperAside,q as ExtendedStepperBelow,X as ExtendedWithCanvas,$ as ExtendedWorkflowInfoPanel,G as FillParent,B as HeaderDraft,K as HeaderOnly,V as HeaderPending,H as HeaderRunning,U as WithDrawer,W as WithDrawerAndBackdrop,_e as __namedExportsOrder,I as default};