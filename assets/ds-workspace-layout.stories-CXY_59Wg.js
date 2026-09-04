import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as ee}from"./ds-icon-BRZFUTMz.js";import{n as a,t as te}from"./ds-typography-BLoO5j9q.js";import{n as o,t as s}from"./ds-button-v3-BnV8s8Ko.js";import{n as ne,t as c}from"./ds-stack-GU0hZWeR.js";import{n as l,t as u}from"./ds-status-badge-Dkq1BIx-.js";import{t as d}from"./ds-drawer-BamIMZ75.js";import{t as re}from"./ds-drawer-D4zwR2Pt.js";import{n as ie,t as f}from"./ds-workspace-layout-Mj1ONUdt.js";import{c as p,i as m,n as h,o as g,t as ae}from"./ds-stepper-D7jEjJqK.js";import{n as oe,t as _}from"./ds-status-badge-v2-XwuwA1aD.js";var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,se=t((()=>{v=`_projectName_xfm68_1`,y=`_lastUpdate_xfm68_5`,b=`_card_xfm68_13`,x=`_fillParentHost_xfm68_21`,S=`_extendedMainContent_xfm68_26`,C=`_footerStepper_xfm68_34`,w=`_sideMenu_xfm68_41`,T=`_sideMenuItem_xfm68_41`,E=`_sideMenuItemLabel_xfm68_44`,D=`_leftPanelContent_xfm68_80`,O=`_leftPanelHeader_xfm68_89`,k=`_leftPanelBody_xfm68_95`,A=`_canvasSurface_xfm68_102`,j=`_workflowInfoPanel_xfm68_110`,M=`_workflowInfoItem_xfm68_120`,N={projectName:v,lastUpdate:y,card:b,fillParentHost:x,extendedMainContent:S,footerStepper:C,sideMenu:w,sideMenuItem:T,sideMenuItemLabel:E,leftPanelContent:D,leftPanelHeader:O,leftPanelBody:k,canvasSurface:A,workflowInfoPanel:j,workflowInfoItem:M}})),P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{P=e(n(),1),ie(),o(),te(),ee(),ne(),u(),oe(),re(),ae(),se(),F=r(),I={title:`Components/WorkspaceLayout`,component:f,parameters:{layout:`fullscreen`,docs:{description:{component:`
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
        `}}},argTypes:{fillParent:{control:`boolean`,description:`Use 100% height (fill parent) instead of 100vh (fill viewport)`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},L=[{label:`Project details`,description:`Enter project name and basic configuration`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}],R={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsx)(f.SubHeader,{children:(0,F.jsxs)(c,{direction:`row`,alignItems:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Dashboard`}),(0,F.jsx)(a,{variant:`body-xs-reg`,children:`Last updated 2 min ago`})]})}),(0,F.jsxs)(f.Content,{children:[(0,F.jsxs)(`div`,{className:N.card,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Welcome`}),(0,F.jsx)(a,{variant:`body-md-reg`,children:`This is the main content area of the workspace.`})]}),(0,F.jsxs)(`div`,{className:N.card,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Section 2`}),(0,F.jsx)(a,{variant:`body-md-reg`,children:`Another content section.`})]})]}),(0,F.jsx)(f.Footer,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`tertiary`,size:`small`,children:`Help`}),(0,F.jsx)(s,{variant:`tertiary`,size:`small`,children:`Feedback`})]})]})})]})},z={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,alignItems:`center`,gap:4,width:`100%`,children:[(0,F.jsx)(c,{direction:`row`,alignItems:`center`,gap:8,children:(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,icon:`close`,children:`Close`})}),(0,F.jsxs)(c,{direction:`row`,flex:1,justifyContent:`center`,alignItems:`center`,gap:8,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project -23-May-2024 04:47 PM`}),(0,F.jsx)(i,{icon:`info`,size:`tiny`}),(0,F.jsx)(_,{phase:`temporary`,label:`Draft`,size:`small`})]}),(0,F.jsxs)(c,{direction:`row`,justifyContent:`flex-end`,alignItems:`center`,gap:8,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`}),(0,F.jsx)(s,{variant:`tertiary`,color:`light`,size:`small`,icon:`more_vert`,"aria-label":`More actions`})]})]})}),(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.card,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Draft header`}),(0,F.jsx)(a,{variant:`body-md-reg`,children:`Brand Refresh draft chrome with Discard and Save project actions.`})]})})]})},B={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,alignItems:`center`,gap:4,width:`100%`,children:[(0,F.jsx)(c,{direction:`row`,alignItems:`center`,gap:8,children:(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,icon:`close`,children:`Close`})}),(0,F.jsxs)(c,{direction:`row`,flex:1,justifyContent:`center`,alignItems:`center`,gap:8,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project -23-May-2024 04:47 PM`}),(0,F.jsx)(i,{icon:`info`,size:`tiny`}),(0,F.jsx)(_,{phase:`pending`,label:`Pending`,size:`small`})]}),(0,F.jsxs)(c,{direction:`row`,justifyContent:`flex-end`,alignItems:`center`,gap:8,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`}),(0,F.jsx)(s,{variant:`tertiary`,color:`light`,size:`small`,icon:`more_vert`,"aria-label":`More actions`})]})]})}),(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.card,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Pending header`}),(0,F.jsx)(a,{variant:`body-md-reg`,children:`Brand Refresh pending chrome with Discard and Save project actions.`})]})})]})},V={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,alignItems:`center`,gap:4,width:`100%`,children:[(0,F.jsxs)(c,{direction:`row`,alignItems:`center`,gap:8,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,icon:`close`,children:`Close`}),(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,icon:`keyboard_double_arrow_left`,children:`Previous`}),(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Next`})]}),(0,F.jsxs)(c,{direction:`row`,flex:1,justifyContent:`center`,alignItems:`center`,gap:8,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project -23-May-2024 04:47 PM`}),(0,F.jsx)(i,{icon:`info`,size:`tiny`}),(0,F.jsx)(_,{phase:`execution`,label:`Running`,size:`small`})]}),(0,F.jsxs)(c,{direction:`row`,justifyContent:`flex-end`,alignItems:`center`,gap:8,children:[(0,F.jsxs)(c,{direction:`row`,alignItems:`center`,gap:8,className:N.lastUpdate,children:[(0,F.jsx)(i,{icon:`history_2`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-reg`,children:`Last update: 2d ago`})]}),(0,F.jsx)(s,{variant:`tertiary`,color:`light`,size:`small`,icon:`more_vert`,"aria-label":`More actions`})]})]})}),(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.card,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Running header`}),(0,F.jsx)(a,{variant:`body-md-reg`,children:`Brand Refresh running chrome with Previous/Next navigation and last-update meta.`})]})})]})},H={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,onClick:()=>t(!0),children:`Save project`})]})]})}),(0,F.jsx)(f.SubHeader,{children:(0,F.jsx)(c,{direction:`row`,alignItems:`center`,gap:12,width:`100%`,children:(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Dashboard`})})}),(0,F.jsxs)(f.Content,{children:[(0,F.jsxs)(`div`,{className:N.card,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Drawer containment`}),(0,F.jsx)(a,{variant:`body-md-reg`,children:`Click "Save project" in the header to open the drawer. It renders inside Content — below the header/subheader and above the footer.`})]}),(0,F.jsxs)(d,{open:e,onOpenChange:t,columns:4,children:[(0,F.jsxs)(d.Header,{children:[(0,F.jsx)(d.Title,{children:`Details`}),(0,F.jsx)(d.CloseTrigger,{})]}),(0,F.jsx)(d.Body,{children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`This drawer is contained within the content area.`})}),(0,F.jsx)(d.Footer,{children:(0,F.jsxs)(d.Actions,{children:[(0,F.jsx)(s,{variant:`tertiary`,size:`large`,onClick:()=>t(!1),children:`Cancel`}),(0,F.jsx)(s,{variant:`primary`,size:`large`,children:`Save`})]})})]})]}),(0,F.jsx)(f.Footer,{children:(0,F.jsx)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:(0,F.jsx)(a,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`})})})]})}},U={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,onClick:()=>t(!0),children:`Save project`})]})]})}),(0,F.jsx)(f.SubHeader,{children:(0,F.jsx)(c,{direction:`row`,alignItems:`center`,gap:12,width:`100%`,children:(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Dashboard`})})}),(0,F.jsxs)(f.Content,{children:[(0,F.jsxs)(`div`,{className:N.card,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Backdrop containment`}),(0,F.jsx)(a,{variant:`body-md-reg`,children:`Click "Save project" to open the drawer. The backdrop only covers the content area, not the header or footer.`})]}),(0,F.jsxs)(d,{open:e,onOpenChange:t,columns:4,backdrop:!0,children:[(0,F.jsxs)(d.Header,{children:[(0,F.jsx)(d.Title,{children:`Modal Drawer`}),(0,F.jsx)(d.CloseTrigger,{})]}),(0,F.jsx)(d.Body,{children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`The backdrop is scoped to the content area.`})})]})]}),(0,F.jsx)(f.Footer,{children:(0,F.jsx)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:(0,F.jsx)(a,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`})})})]})}},W={render:()=>(0,F.jsx)(`div`,{className:N.fillParentHost,children:(0,F.jsxs)(f,{fillParent:!0,children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsx)(f.Content,{children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`This workspace fills its parent container (400px) instead of the viewport.`})}),(0,F.jsx)(f.Footer,{children:(0,F.jsx)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:(0,F.jsx)(a,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`})})})]})})},G={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.card,children:[(0,F.jsx)(a,{variant:`heading3`,children:`No SubHeader or Footer`}),(0,F.jsx)(a,{variant:`body-md-reg`,children:`All sub-components are optional. Use only what you need.`})]})})]})},K={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsx)(f.Body,{children:(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.extendedMainContent,children:[(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(s,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:N.card,children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})}),(0,F.jsx)(f.Footer,{children:(0,F.jsx)(`div`,{className:N.footerStepper,children:(0,F.jsx)(p,{count:L.length,orientation:`horizontal`,actions:(0,F.jsx)(h,{children:`Next`}),children:L.map((e,t)=>(0,F.jsx)(g,{index:t,children:(0,F.jsx)(m,{index:t,label:e.label,description:e.description})},t))})})})]})},q={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsxs)(f.Body,{children:[(0,F.jsx)(f.LeftPanel,{children:(0,F.jsxs)(`div`,{className:N.leftPanelContent,children:[(0,F.jsx)(`div`,{className:N.leftPanelHeader,children:(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Steps`})}),(0,F.jsx)(`div`,{className:N.leftPanelBody,children:(0,F.jsx)(p,{count:L.length,children:L.map((e,t)=>(0,F.jsx)(g,{index:t,children:(0,F.jsx)(m,{index:t,label:e.label,description:e.description,actions:(0,F.jsx)(h,{children:t===L.length-1?`Finish`:`Next`})})},t))})})]})}),(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.extendedMainContent,children:[(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(s,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:N.card,children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})},J={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsxs)(f.Body,{children:[(0,F.jsxs)(f.SideMenu,{pinned:e,onPinnedChange:t,className:N.sideMenu,children:[(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,F.jsx)(i,{icon:`dashboard`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Overview`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Resources`,children:[(0,F.jsx)(i,{icon:`view_list`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Resources`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Settings`,children:[(0,F.jsx)(i,{icon:`settings`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Settings`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Help`,children:[(0,F.jsx)(i,{icon:`help`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Help`})]})]}),(0,F.jsx)(f.LeftPanel,{children:(0,F.jsxs)(`div`,{className:N.leftPanelContent,children:[(0,F.jsx)(`div`,{className:N.leftPanelHeader,children:(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Filters`})}),(0,F.jsx)(`div`,{className:N.leftPanelBody,children:(0,F.jsx)(a,{variant:`body-sm-reg`,children:`Docked panel in the left side panel slot — always visible, no collapse.`})})]})}),(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.extendedMainContent,children:[(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(s,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:N.card,children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})}},Y={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsx)(f.Body,{children:(0,F.jsxs)(f.Content,{children:[(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Network topology`}),(0,F.jsx)(s,{variant:`secondary`,size:`small`,icon:`fullscreen`,children:`Expand`})]}),(0,F.jsx)(`div`,{className:N.canvasSurface,"aria-label":`Canvas`,children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`Map or diagram canvas fills the remaining content area.`})})]})})]})},X={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,P.useState)(!1);return(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsxs)(f.Body,{children:[(0,F.jsxs)(f.SideMenu,{pinned:e,onPinnedChange:t,className:N.sideMenu,children:[(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,F.jsx)(i,{icon:`dashboard`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Overview`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Resources`,children:[(0,F.jsx)(i,{icon:`view_list`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Resources`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Settings`,children:[(0,F.jsx)(i,{icon:`settings`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Settings`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Help`,children:[(0,F.jsx)(i,{icon:`help`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Help`})]})]}),(0,F.jsx)(f.LeftPanel,{children:(0,F.jsxs)(`div`,{className:N.leftPanelContent,children:[(0,F.jsx)(`div`,{className:N.leftPanelHeader,children:(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Section navigation`})}),(0,F.jsx)(`div`,{className:N.leftPanelBody,children:(0,F.jsx)(p,{count:L.length,children:L.map((e,t)=>(0,F.jsx)(g,{index:t,children:(0,F.jsx)(m,{index:t,label:e.label,description:e.description,actions:(0,F.jsx)(h,{children:t===L.length-1?`Finish`:`Next`})})},t))})})]})}),(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.extendedMainContent,children:[(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(s,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:N.card,children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})}},Z={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,P.useState)(!1),[n,r]=(0,P.useState)(!1);return(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,onClick:()=>r(!0),children:`Save project`})]})]})}),(0,F.jsxs)(f.Body,{children:[(0,F.jsxs)(f.SideMenu,{pinned:e,onPinnedChange:t,className:N.sideMenu,children:[(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,F.jsx)(i,{icon:`dashboard`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Overview`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Resources`,children:[(0,F.jsx)(i,{icon:`view_list`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Resources`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Settings`,children:[(0,F.jsx)(i,{icon:`settings`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Settings`})]}),(0,F.jsxs)(`button`,{type:`button`,className:N.sideMenuItem,"aria-label":`Help`,children:[(0,F.jsx)(i,{icon:`help`,size:`small`}),(0,F.jsx)(a,{variant:`body-sm-md`,className:N.sideMenuItemLabel,children:`Help`})]})]}),(0,F.jsx)(f.LeftPanel,{children:(0,F.jsxs)(`div`,{className:N.leftPanelContent,children:[(0,F.jsx)(`div`,{className:N.leftPanelHeader,children:(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Steps`})}),(0,F.jsx)(`div`,{className:N.leftPanelBody,children:(0,F.jsx)(p,{count:L.length,children:L.map((e,t)=>(0,F.jsx)(g,{index:t,children:(0,F.jsx)(m,{index:t,label:e.label,description:e.description,actions:(0,F.jsx)(h,{children:t===L.length-1?`Finish`:`Next`})})},t))})})]})}),(0,F.jsxs)(f.Content,{children:[(0,F.jsxs)(`div`,{className:N.extendedMainContent,children:[(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,F.jsx)(a,{variant:`heading3`,children:`Project workspace`}),(0,F.jsx)(s,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,F.jsx)(`div`,{className:N.card,children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]}),(0,F.jsxs)(d,{open:n,onOpenChange:r,columns:4,backdrop:!0,children:[(0,F.jsxs)(d.Header,{children:[(0,F.jsx)(d.Title,{children:`Comments`}),(0,F.jsx)(d.CloseTrigger,{})]}),(0,F.jsx)(d.Body,{children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`Right drawer scoped to Content.`})})]})]})]}),(0,F.jsx)(f.Footer,{children:(0,F.jsx)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:(0,F.jsx)(a,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`})})})]})}},Q={render:()=>(0,F.jsxs)(f,{children:[(0,F.jsx)(f.Header,{children:(0,F.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,F.jsx)(a,{variant:`body-sm-reg`,className:N.projectName,children:`Untitled Project`}),(0,F.jsxs)(c,{direction:`row`,gap:8,alignItems:`center`,children:[(0,F.jsx)(s,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,F.jsx)(s,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,F.jsx)(f.Body,{children:(0,F.jsx)(f.Content,{children:(0,F.jsxs)(`div`,{className:N.extendedMainContent,children:[(0,F.jsx)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:(0,F.jsx)(a,{variant:`heading3`,children:`Approval workflow`})}),(0,F.jsxs)(`div`,{className:N.workflowInfoPanel,children:[(0,F.jsxs)(`div`,{className:N.workflowInfoItem,children:[(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Status`}),(0,F.jsx)(l,{status:`draft`,size:`small`})]}),(0,F.jsxs)(`div`,{className:N.workflowInfoItem,children:[(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Owner`}),(0,F.jsx)(a,{variant:`body-sm-reg`,children:`Network Operations`})]}),(0,F.jsxs)(`div`,{className:N.workflowInfoItem,children:[(0,F.jsx)(a,{variant:`body-sm-semi-bold`,children:`Last review`}),(0,F.jsx)(a,{variant:`body-sm-reg`,children:`2 days ago`})]})]}),(0,F.jsx)(`div`,{className:N.card,children:(0,F.jsx)(a,{variant:`body-md-reg`,children:`Workflow metadata is consumer markup — not a design-system layout slot.`})})]})})})]})},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <DsTypography variant="body-sm-reg" className={styles.projectName}>
                        Untitled Project
                    </DsTypography>
                    <DsStack direction="row" gap={8} alignItems="center">
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Discard
                        </DsButtonV3>
                        <DsButtonV3 variant="primary" color="light" size="small">
                            Save project
                        </DsButtonV3>
                    </DsStack>
                </DsStack>
            </DsWorkspaceLayout.Header>

            <DsWorkspaceLayout.SubHeader>
                <DsStack direction="row" alignItems="center" gap={12} width="100%">
                    <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    <DsTypography variant="body-xs-reg">Last updated 2 min ago</DsTypography>
                </DsStack>
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
                <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <DsTypography variant="body-xs-reg" color="secondary">
                        v1.2.0
                    </DsTypography>
                    <DsStack direction="row" gap={8} alignItems="center">
                        <DsButtonV3 variant="tertiary" size="small">
                            Help
                        </DsButtonV3>
                        <DsButtonV3 variant="tertiary" size="small">
                            Feedback
                        </DsButtonV3>
                    </DsStack>
                </DsStack>
            </DsWorkspaceLayout.Footer>
        </DsWorkspaceLayout>
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" alignItems="center" gap={4} width="100%">
                    <DsStack direction="row" alignItems="center" gap={8}>
                        <DsButtonV3 variant="secondary" color="light" size="small" icon="close">
                            Close
                        </DsButtonV3>
                    </DsStack>
                    <DsStack direction="row" flex={1} justifyContent="center" alignItems="center" gap={8}>
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project -23-May-2024 04:47 PM
                        </DsTypography>
                        <DsIcon icon="info" size="tiny" />
                        <DsStatusBadgeV2 phase="temporary" label="Draft" size="small" />
                    </DsStack>
                    <DsStack direction="row" justifyContent="flex-end" alignItems="center" gap={8}>
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Discard
                        </DsButtonV3>
                        <DsButtonV3 variant="primary" color="light" size="small">
                            Save project
                        </DsButtonV3>
                        <DsButtonV3 variant="tertiary" color="light" size="small" icon="more_vert" aria-label="More actions" />
                    </DsStack>
                </DsStack>
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
}`,...z.parameters?.docs?.source},description:{story:`Figma Type=draft workspace header composition.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" alignItems="center" gap={4} width="100%">
                    <DsStack direction="row" alignItems="center" gap={8}>
                        <DsButtonV3 variant="secondary" color="light" size="small" icon="close">
                            Close
                        </DsButtonV3>
                    </DsStack>
                    <DsStack direction="row" flex={1} justifyContent="center" alignItems="center" gap={8}>
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project -23-May-2024 04:47 PM
                        </DsTypography>
                        <DsIcon icon="info" size="tiny" />
                        <DsStatusBadgeV2 phase="pending" label="Pending" size="small" />
                    </DsStack>
                    <DsStack direction="row" justifyContent="flex-end" alignItems="center" gap={8}>
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Discard
                        </DsButtonV3>
                        <DsButtonV3 variant="primary" color="light" size="small">
                            Save project
                        </DsButtonV3>
                        <DsButtonV3 variant="tertiary" color="light" size="small" icon="more_vert" aria-label="More actions" />
                    </DsStack>
                </DsStack>
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
}`,...B.parameters?.docs?.source},description:{story:`Figma Type=pending workspace header composition.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" alignItems="center" gap={4} width="100%">
                    <DsStack direction="row" alignItems="center" gap={8}>
                        <DsButtonV3 variant="secondary" color="light" size="small" icon="close">
                            Close
                        </DsButtonV3>
                        <DsButtonV3 variant="secondary" color="light" size="small" icon="keyboard_double_arrow_left">
                            Previous
                        </DsButtonV3>
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Next
                        </DsButtonV3>
                    </DsStack>
                    <DsStack direction="row" flex={1} justifyContent="center" alignItems="center" gap={8}>
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project -23-May-2024 04:47 PM
                        </DsTypography>
                        <DsIcon icon="info" size="tiny" />
                        <DsStatusBadgeV2 phase="execution" label="Running" size="small" />
                    </DsStack>
                    <DsStack direction="row" justifyContent="flex-end" alignItems="center" gap={8}>
                        <DsStack direction="row" alignItems="center" gap={8} className={styles.lastUpdate}>
                            <DsIcon icon="history_2" size="small" />
                            <DsTypography variant="body-sm-reg">Last update: 2d ago</DsTypography>
                        </DsStack>
                        <DsButtonV3 variant="tertiary" color="light" size="small" icon="more_vert" aria-label="More actions" />
                    </DsStack>
                </DsStack>
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
}`,...V.parameters?.docs?.source},description:{story:`Figma Type=running workspace header composition.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project
                        </DsTypography>
                        <DsStack direction="row" gap={8} alignItems="center">
                            <DsButtonV3 variant="secondary" color="light" size="small">
                                Discard
                            </DsButtonV3>
                            <DsButtonV3 variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
                                Save project
                            </DsButtonV3>
                        </DsStack>
                    </DsStack>
                </DsWorkspaceLayout.Header>

                <DsWorkspaceLayout.SubHeader>
                    <DsStack direction="row" alignItems="center" gap={12} width="100%">
                        <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    </DsStack>
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
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-xs-reg" color="secondary">
                            v1.2.0
                        </DsTypography>
                    </DsStack>
                </DsWorkspaceLayout.Footer>
            </DsWorkspaceLayout>;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project
                        </DsTypography>
                        <DsStack direction="row" gap={8} alignItems="center">
                            <DsButtonV3 variant="secondary" color="light" size="small">
                                Discard
                            </DsButtonV3>
                            <DsButtonV3 variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
                                Save project
                            </DsButtonV3>
                        </DsStack>
                    </DsStack>
                </DsWorkspaceLayout.Header>

                <DsWorkspaceLayout.SubHeader>
                    <DsStack direction="row" alignItems="center" gap={12} width="100%">
                        <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    </DsStack>
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
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-xs-reg" color="secondary">
                            v1.2.0
                        </DsTypography>
                    </DsStack>
                </DsWorkspaceLayout.Footer>
            </DsWorkspaceLayout>;
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.fillParentHost}>
            <DsWorkspaceLayout fillParent>
                <DsWorkspaceLayout.Header>
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project
                        </DsTypography>
                        <DsStack direction="row" gap={8} alignItems="center">
                            <DsButtonV3 variant="secondary" color="light" size="small">
                                Discard
                            </DsButtonV3>
                            <DsButtonV3 variant="primary" color="light" size="small">
                                Save project
                            </DsButtonV3>
                        </DsStack>
                    </DsStack>
                </DsWorkspaceLayout.Header>

                <DsWorkspaceLayout.Content>
                    <DsTypography variant="body-md-reg">
                        This workspace fills its parent container (400px) instead of the viewport.
                    </DsTypography>
                </DsWorkspaceLayout.Content>

                <DsWorkspaceLayout.Footer>
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-xs-reg" color="secondary">
                            v1.2.0
                        </DsTypography>
                    </DsStack>
                </DsWorkspaceLayout.Footer>
            </DsWorkspaceLayout>
        </div>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <DsTypography variant="body-sm-reg" className={styles.projectName}>
                        Untitled Project
                    </DsTypography>
                    <DsStack direction="row" gap={8} alignItems="center">
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Discard
                        </DsButtonV3>
                        <DsButtonV3 variant="primary" color="light" size="small">
                            Save project
                        </DsButtonV3>
                    </DsStack>
                </DsStack>
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <DsTypography variant="body-sm-reg" className={styles.projectName}>
                        Untitled Project
                    </DsTypography>
                    <DsStack direction="row" gap={8} alignItems="center">
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Discard
                        </DsButtonV3>
                        <DsButtonV3 variant="primary" color="light" size="small">
                            Save project
                        </DsButtonV3>
                    </DsStack>
                </DsStack>
            </DsWorkspaceLayout.Header>
            <DsWorkspaceLayout.Body>
                <DsWorkspaceLayout.Content>
                    <div className={styles.extendedMainContent}>
                        <DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
                            <DsTypography variant="heading3">Project workspace</DsTypography>
                            <DsButtonV3 variant="secondary" size="small" icon="edit">
                                Edit
                            </DsButtonV3>
                        </DsStack>
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
}`,...K.parameters?.docs?.source},description:{story:`Horizontal stepper band in Footer below the body row.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <DsTypography variant="body-sm-reg" className={styles.projectName}>
                        Untitled Project
                    </DsTypography>
                    <DsStack direction="row" gap={8} alignItems="center">
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Discard
                        </DsButtonV3>
                        <DsButtonV3 variant="primary" color="light" size="small">
                            Save project
                        </DsButtonV3>
                    </DsStack>
                </DsStack>
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
                        <DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
                            <DsTypography variant="heading3">Project workspace</DsTypography>
                            <DsButtonV3 variant="secondary" size="small" icon="edit">
                                Edit
                            </DsButtonV3>
                        </DsStack>
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
}`,...q.parameters?.docs?.source},description:{story:`Vertical stepper in LeftPanel beside Content.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project
                        </DsTypography>
                        <DsStack direction="row" gap={8} alignItems="center">
                            <DsButtonV3 variant="secondary" color="light" size="small">
                                Discard
                            </DsButtonV3>
                            <DsButtonV3 variant="primary" color="light" size="small">
                                Save project
                            </DsButtonV3>
                        </DsStack>
                    </DsStack>
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
                            <DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
                                <DsTypography variant="heading3">Project workspace</DsTypography>
                                <DsButtonV3 variant="secondary" size="small" icon="edit">
                                    Edit
                                </DsButtonV3>
                            </DsStack>
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
}`,...J.parameters?.docs?.source},description:{story:`Side menu rail and docked left panel together.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <DsTypography variant="body-sm-reg" className={styles.projectName}>
                        Untitled Project
                    </DsTypography>
                    <DsStack direction="row" gap={8} alignItems="center">
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Discard
                        </DsButtonV3>
                        <DsButtonV3 variant="primary" color="light" size="small">
                            Save project
                        </DsButtonV3>
                    </DsStack>
                </DsStack>
            </DsWorkspaceLayout.Header>
            <DsWorkspaceLayout.Body>
                <DsWorkspaceLayout.Content>
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
                        <DsTypography variant="heading3">Network topology</DsTypography>
                        <DsButtonV3 variant="secondary" size="small" icon="fullscreen">
                            Expand
                        </DsButtonV3>
                    </DsStack>
                    <div className={styles.canvasSurface} aria-label="Canvas">
                        <DsTypography variant="body-md-reg">
                            Map or diagram canvas fills the remaining content area.
                        </DsTypography>
                    </div>
                </DsWorkspaceLayout.Content>
            </DsWorkspaceLayout.Body>
        </DsWorkspaceLayout>
}`,...Y.parameters?.docs?.source},description:{story:`Full-bleed canvas content inside Content.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [pinned, setPinned] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project
                        </DsTypography>
                        <DsStack direction="row" gap={8} alignItems="center">
                            <DsButtonV3 variant="secondary" color="light" size="small">
                                Discard
                            </DsButtonV3>
                            <DsButtonV3 variant="primary" color="light" size="small">
                                Save project
                            </DsButtonV3>
                        </DsStack>
                    </DsStack>
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
                            <DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
                                <DsTypography variant="heading3">Project workspace</DsTypography>
                                <DsButtonV3 variant="secondary" size="small" icon="edit">
                                    Edit
                                </DsButtonV3>
                            </DsStack>
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
}`,...X.parameters?.docs?.source},description:{story:`Side menu with left panel — navigation rail plus push panel.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [pinned, setPinned] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-sm-reg" className={styles.projectName}>
                            Untitled Project
                        </DsTypography>
                        <DsStack direction="row" gap={8} alignItems="center">
                            <DsButtonV3 variant="secondary" color="light" size="small">
                                Discard
                            </DsButtonV3>
                            <DsButtonV3 variant="primary" color="light" size="small" onClick={() => setDrawerOpen(true)}>
                                Save project
                            </DsButtonV3>
                        </DsStack>
                    </DsStack>
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
                            <DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
                                <DsTypography variant="heading3">Project workspace</DsTypography>
                                <DsButtonV3 variant="secondary" size="small" icon="edit">
                                    Edit
                                </DsButtonV3>
                            </DsStack>
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
                    <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                        <DsTypography variant="body-xs-reg" color="secondary">
                            v1.2.0
                        </DsTypography>
                    </DsStack>
                </DsWorkspaceLayout.Footer>
            </DsWorkspaceLayout>;
  }
}`,...Z.parameters?.docs?.source},description:{story:`Side menu, left panel, and right drawer combined.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspaceLayout>
            <DsWorkspaceLayout.Header>
                <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                    <DsTypography variant="body-sm-reg" className={styles.projectName}>
                        Untitled Project
                    </DsTypography>
                    <DsStack direction="row" gap={8} alignItems="center">
                        <DsButtonV3 variant="secondary" color="light" size="small">
                            Discard
                        </DsButtonV3>
                        <DsButtonV3 variant="primary" color="light" size="small">
                            Save project
                        </DsButtonV3>
                    </DsStack>
                </DsStack>
            </DsWorkspaceLayout.Header>
            <DsWorkspaceLayout.Body>
                <DsWorkspaceLayout.Content>
                    <div className={styles.extendedMainContent}>
                        <DsStack direction="row" justifyContent="space-between" alignItems="center" gap={12} width="100%">
                            <DsTypography variant="heading3">Approval workflow</DsTypography>
                        </DsStack>
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
}`,...Q.parameters?.docs?.source},description:{story:`Illustrative workflow information panel composed in Content.`,...Q.parameters?.docs?.description}}},$=[`Default`,`HeaderDraft`,`HeaderPending`,`HeaderRunning`,`WithDrawer`,`WithDrawerAndBackdrop`,`FillParent`,`HeaderOnly`,`ExtendedStepperBelow`,`ExtendedStepperAside`,`ExtendedSideMenuAndLeftPanel`,`ExtendedWithCanvas`,`ExtendedSideMenuLeftPanel`,`ExtendedCombined`,`ExtendedWorkflowInfoPanel`]}))();export{R as Default,Z as ExtendedCombined,J as ExtendedSideMenuAndLeftPanel,X as ExtendedSideMenuLeftPanel,q as ExtendedStepperAside,K as ExtendedStepperBelow,Y as ExtendedWithCanvas,Q as ExtendedWorkflowInfoPanel,W as FillParent,z as HeaderDraft,G as HeaderOnly,B as HeaderPending,V as HeaderRunning,H as WithDrawer,U as WithDrawerAndBackdrop,$ as __namedExportsOrder,I as default};