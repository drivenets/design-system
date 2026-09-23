import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B68LYriB.js";import{n as r,t as i}from"./ds-icon-D_FCYbxr.js";import{c as a,i as o,n as s,o as c,t as ee}from"./ds-stepper-CYavJbOL.js";import{n as l,t as te}from"./ds-typography-H8foYEAU.js";import{n as ne,t as u}from"./ds-button-v3-r5RBr4Hk.js";import{n as re,t as d}from"./ds-stack-C03o04TL.js";import{n as ie,t as ae}from"./ds-status-badge-CC7wRloN.js";import{t as f}from"./ds-drawer-CZgCxeLe.js";import{t as p}from"./ds-drawer-C5zQLelv.js";import{n as oe,t as m}from"./ds-workspace-layout-Tsmtj1A_.js";import{n as se,t as h}from"./ds-status-badge-v2-DmuvtLFJ.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j;function M(){return(M=e((()=>{g=`_projectName_xfm68_1`,_=`_lastUpdate_xfm68_5`,v=`_card_xfm68_13`,y=`_fillParentHost_xfm68_21`,b=`_extendedMainContent_xfm68_26`,x=`_footerStepper_xfm68_34`,S=`_sideMenu_xfm68_41`,C=`_sideMenuItem_xfm68_41`,w=`_sideMenuItemLabel_xfm68_44`,T=`_leftPanelContent_xfm68_80`,E=`_leftPanelHeader_xfm68_89`,D=`_leftPanelBody_xfm68_95`,O=`_canvasSurface_xfm68_102`,k=`_workflowInfoPanel_xfm68_110`,A=`_workflowInfoItem_xfm68_120`,j={projectName:g,lastUpdate:_,card:v,fillParentHost:y,extendedMainContent:b,footerStepper:x,sideMenu:S,sideMenuItem:C,sideMenuItemLabel:w,leftPanelContent:T,leftPanelHeader:E,leftPanelBody:D,canvasSurface:O,workflowInfoPanel:k,workflowInfoItem:A}})))()}var N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{N=t(),oe(),ne(),te(),i(),re(),ae(),se(),p(),ee(),M(),P=n(),F={title:`Components/WorkspaceLayout`,component:m,parameters:{layout:`fullscreen`,docs:{description:{component:`
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
        `}}},argTypes:{fillParent:{control:`boolean`,description:`Use 100% height (fill parent) instead of 100vh (fill viewport)`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},I=[{label:`Project details`,description:`Enter project name and basic configuration`},{label:`Select market`,description:`Choose the target market for deployment`},{label:`Design policy`,description:`Define the design constraints and rules`}],L={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsx)(m.SubHeader,{children:(0,P.jsxs)(d,{direction:`row`,alignItems:`center`,gap:12,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Dashboard`}),(0,P.jsx)(l,{variant:`body-xs-reg`,children:`Last updated 2 min ago`})]})}),(0,P.jsxs)(m.Content,{children:[(0,P.jsxs)(`div`,{className:j.card,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Welcome`}),(0,P.jsx)(l,{variant:`body-md-reg`,children:`This is the main content area of the workspace.`})]}),(0,P.jsxs)(`div`,{className:j.card,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Section 2`}),(0,P.jsx)(l,{variant:`body-md-reg`,children:`Another content section.`})]})]}),(0,P.jsx)(m.Footer,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`tertiary`,size:`small`,children:`Help`}),(0,P.jsx)(u,{variant:`tertiary`,size:`small`,children:`Feedback`})]})]})})]})},R={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,alignItems:`center`,gap:4,width:`100%`,children:[(0,P.jsx)(d,{direction:`row`,alignItems:`center`,gap:8,children:(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,icon:`close`,children:`Close`})}),(0,P.jsxs)(d,{direction:`row`,flex:1,justifyContent:`center`,alignItems:`center`,gap:8,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project -23-May-2024 04:47 PM`}),(0,P.jsx)(r,{icon:`info`,size:`tiny`}),(0,P.jsx)(h,{phase:`temporary`,label:`Draft`,size:`small`})]}),(0,P.jsxs)(d,{direction:`row`,justifyContent:`flex-end`,alignItems:`center`,gap:8,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`}),(0,P.jsx)(u,{variant:`tertiary`,color:`light`,size:`small`,icon:`more_vert`,"aria-label":`More actions`})]})]})}),(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.card,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Draft header`}),(0,P.jsx)(l,{variant:`body-md-reg`,children:`Brand Refresh draft chrome with Discard and Save project actions.`})]})})]})},z={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,alignItems:`center`,gap:4,width:`100%`,children:[(0,P.jsx)(d,{direction:`row`,alignItems:`center`,gap:8,children:(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,icon:`close`,children:`Close`})}),(0,P.jsxs)(d,{direction:`row`,flex:1,justifyContent:`center`,alignItems:`center`,gap:8,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project -23-May-2024 04:47 PM`}),(0,P.jsx)(r,{icon:`info`,size:`tiny`}),(0,P.jsx)(h,{phase:`pending`,label:`Pending`,size:`small`})]}),(0,P.jsxs)(d,{direction:`row`,justifyContent:`flex-end`,alignItems:`center`,gap:8,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`}),(0,P.jsx)(u,{variant:`tertiary`,color:`light`,size:`small`,icon:`more_vert`,"aria-label":`More actions`})]})]})}),(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.card,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Pending header`}),(0,P.jsx)(l,{variant:`body-md-reg`,children:`Brand Refresh pending chrome with Discard and Save project actions.`})]})})]})},B={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,alignItems:`center`,gap:4,width:`100%`,children:[(0,P.jsxs)(d,{direction:`row`,alignItems:`center`,gap:8,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,icon:`close`,children:`Close`}),(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,icon:`keyboard_double_arrow_left`,children:`Previous`}),(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Next`})]}),(0,P.jsxs)(d,{direction:`row`,flex:1,justifyContent:`center`,alignItems:`center`,gap:8,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project -23-May-2024 04:47 PM`}),(0,P.jsx)(r,{icon:`info`,size:`tiny`}),(0,P.jsx)(h,{phase:`execution`,label:`Running`,size:`small`})]}),(0,P.jsxs)(d,{direction:`row`,justifyContent:`flex-end`,alignItems:`center`,gap:8,children:[(0,P.jsxs)(d,{direction:`row`,alignItems:`center`,gap:8,className:j.lastUpdate,children:[(0,P.jsx)(r,{icon:`history_2`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-reg`,children:`Last update: 2d ago`})]}),(0,P.jsx)(u,{variant:`tertiary`,color:`light`,size:`small`,icon:`more_vert`,"aria-label":`More actions`})]})]})}),(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.card,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Running header`}),(0,P.jsx)(l,{variant:`body-md-reg`,children:`Brand Refresh running chrome with Previous/Next navigation and last-update meta.`})]})})]})},V={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,N.useState)(!1);return(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,onClick:()=>t(!0),children:`Save project`})]})]})}),(0,P.jsx)(m.SubHeader,{children:(0,P.jsx)(d,{direction:`row`,alignItems:`center`,gap:12,width:`100%`,children:(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Dashboard`})})}),(0,P.jsxs)(m.Content,{children:[(0,P.jsxs)(`div`,{className:j.card,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Drawer containment`}),(0,P.jsx)(l,{variant:`body-md-reg`,children:`Click "Save project" in the header to open the drawer. It renders inside Content — below the header/subheader and above the footer.`})]}),(0,P.jsxs)(f,{open:e,onOpenChange:t,columns:4,children:[(0,P.jsxs)(f.Header,{children:[(0,P.jsx)(f.Title,{children:`Details`}),(0,P.jsx)(f.CloseTrigger,{})]}),(0,P.jsx)(f.Body,{children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`This drawer is contained within the content area.`})}),(0,P.jsx)(f.Footer,{children:(0,P.jsxs)(f.Actions,{children:[(0,P.jsx)(u,{variant:`tertiary`,size:`large`,onClick:()=>t(!1),children:`Cancel`}),(0,P.jsx)(u,{variant:`primary`,size:`large`,children:`Save`})]})})]})]}),(0,P.jsx)(m.Footer,{children:(0,P.jsx)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:(0,P.jsx)(l,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`})})})]})}},H={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,N.useState)(!1);return(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,onClick:()=>t(!0),children:`Save project`})]})]})}),(0,P.jsx)(m.SubHeader,{children:(0,P.jsx)(d,{direction:`row`,alignItems:`center`,gap:12,width:`100%`,children:(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Dashboard`})})}),(0,P.jsxs)(m.Content,{children:[(0,P.jsxs)(`div`,{className:j.card,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Backdrop containment`}),(0,P.jsx)(l,{variant:`body-md-reg`,children:`Click "Save project" to open the drawer. The backdrop only covers the content area, not the header or footer.`})]}),(0,P.jsxs)(f,{open:e,onOpenChange:t,columns:4,backdrop:!0,children:[(0,P.jsxs)(f.Header,{children:[(0,P.jsx)(f.Title,{children:`Modal Drawer`}),(0,P.jsx)(f.CloseTrigger,{})]}),(0,P.jsx)(f.Body,{children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`The backdrop is scoped to the content area.`})})]})]}),(0,P.jsx)(m.Footer,{children:(0,P.jsx)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:(0,P.jsx)(l,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`})})})]})}},U={render:()=>(0,P.jsx)(`div`,{className:j.fillParentHost,children:(0,P.jsxs)(m,{fillParent:!0,children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsx)(m.Content,{children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`This workspace fills its parent container (400px) instead of the viewport.`})}),(0,P.jsx)(m.Footer,{children:(0,P.jsx)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:(0,P.jsx)(l,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`})})})]})})},W={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.card,children:[(0,P.jsx)(l,{variant:`heading3`,children:`No SubHeader or Footer`}),(0,P.jsx)(l,{variant:`body-md-reg`,children:`All sub-components are optional. Use only what you need.`})]})})]})},G={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsx)(m.Body,{children:(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Project workspace`}),(0,P.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,P.jsx)(`div`,{className:j.card,children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})}),(0,P.jsx)(m.Footer,{children:(0,P.jsx)(`div`,{className:j.footerStepper,children:(0,P.jsx)(a,{count:I.length,orientation:`horizontal`,actions:(0,P.jsx)(s,{children:`Next`}),children:I.map((e,t)=>(0,P.jsx)(c,{index:t,children:(0,P.jsx)(o,{index:t,label:e.label,description:e.description})},t))})})})]})},K={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsxs)(m.Body,{children:[(0,P.jsx)(m.LeftPanel,{children:(0,P.jsxs)(`div`,{className:j.leftPanelContent,children:[(0,P.jsx)(`div`,{className:j.leftPanelHeader,children:(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Steps`})}),(0,P.jsx)(`div`,{className:j.leftPanelBody,children:(0,P.jsx)(a,{count:I.length,children:I.map((e,t)=>(0,P.jsx)(c,{index:t,children:(0,P.jsx)(o,{index:t,label:e.label,description:e.description,actions:(0,P.jsx)(s,{children:t===I.length-1?`Finish`:`Next`})})},t))})})]})}),(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Project workspace`}),(0,P.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,P.jsx)(`div`,{className:j.card,children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})},q={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,N.useState)(!1);return(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsxs)(m.Body,{children:[(0,P.jsxs)(m.SideMenu,{pinned:e,onPinnedChange:t,className:j.sideMenu,children:[(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,P.jsx)(r,{icon:`dashboard`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Overview`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Resources`,children:[(0,P.jsx)(r,{icon:`view_list`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Resources`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Settings`,children:[(0,P.jsx)(r,{icon:`settings`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Settings`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Help`,children:[(0,P.jsx)(r,{icon:`help`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Help`})]})]}),(0,P.jsx)(m.LeftPanel,{children:(0,P.jsxs)(`div`,{className:j.leftPanelContent,children:[(0,P.jsx)(`div`,{className:j.leftPanelHeader,children:(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Filters`})}),(0,P.jsx)(`div`,{className:j.leftPanelBody,children:(0,P.jsx)(l,{variant:`body-sm-reg`,children:`Docked panel in the left side panel slot — always visible, no collapse.`})})]})}),(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Project workspace`}),(0,P.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,P.jsx)(`div`,{className:j.card,children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})}},J={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsx)(m.Body,{children:(0,P.jsxs)(m.Content,{children:[(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Network topology`}),(0,P.jsx)(u,{variant:`secondary`,size:`small`,icon:`fullscreen`,children:`Expand`})]}),(0,P.jsx)(`div`,{className:j.canvasSurface,"aria-label":`Canvas`,children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`Map or diagram canvas fills the remaining content area.`})})]})})]})},Y={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,N.useState)(!1);return(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsxs)(m.Body,{children:[(0,P.jsxs)(m.SideMenu,{pinned:e,onPinnedChange:t,className:j.sideMenu,children:[(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,P.jsx)(r,{icon:`dashboard`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Overview`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Resources`,children:[(0,P.jsx)(r,{icon:`view_list`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Resources`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Settings`,children:[(0,P.jsx)(r,{icon:`settings`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Settings`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Help`,children:[(0,P.jsx)(r,{icon:`help`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Help`})]})]}),(0,P.jsx)(m.LeftPanel,{children:(0,P.jsxs)(`div`,{className:j.leftPanelContent,children:[(0,P.jsx)(`div`,{className:j.leftPanelHeader,children:(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Section navigation`})}),(0,P.jsx)(`div`,{className:j.leftPanelBody,children:(0,P.jsx)(a,{count:I.length,children:I.map((e,t)=>(0,P.jsx)(c,{index:t,children:(0,P.jsx)(o,{index:t,label:e.label,description:e.description,actions:(0,P.jsx)(s,{children:t===I.length-1?`Finish`:`Next`})})},t))})})]})}),(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Project workspace`}),(0,P.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,P.jsx)(`div`,{className:j.card,children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]})})]})]})}},X={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,N.useState)(!1),[n,i]=(0,N.useState)(!1);return(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,onClick:()=>i(!0),children:`Save project`})]})]})}),(0,P.jsxs)(m.Body,{children:[(0,P.jsxs)(m.SideMenu,{pinned:e,onPinnedChange:t,className:j.sideMenu,children:[(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Overview`,"aria-current":`page`,"data-selected":!0,children:[(0,P.jsx)(r,{icon:`dashboard`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Overview`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Resources`,children:[(0,P.jsx)(r,{icon:`view_list`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Resources`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Settings`,children:[(0,P.jsx)(r,{icon:`settings`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Settings`})]}),(0,P.jsxs)(`button`,{type:`button`,className:j.sideMenuItem,"aria-label":`Help`,children:[(0,P.jsx)(r,{icon:`help`,size:`small`}),(0,P.jsx)(l,{variant:`body-sm-md`,className:j.sideMenuItemLabel,children:`Help`})]})]}),(0,P.jsx)(m.LeftPanel,{children:(0,P.jsxs)(`div`,{className:j.leftPanelContent,children:[(0,P.jsx)(`div`,{className:j.leftPanelHeader,children:(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Steps`})}),(0,P.jsx)(`div`,{className:j.leftPanelBody,children:(0,P.jsx)(a,{count:I.length,children:I.map((e,t)=>(0,P.jsx)(c,{index:t,children:(0,P.jsx)(o,{index:t,label:e.label,description:e.description,actions:(0,P.jsx)(s,{children:t===I.length-1?`Finish`:`Next`})})},t))})})]})}),(0,P.jsxs)(m.Content,{children:[(0,P.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:[(0,P.jsx)(l,{variant:`heading3`,children:`Project workspace`}),(0,P.jsx)(u,{variant:`secondary`,size:`small`,icon:`edit`,children:`Edit`})]}),(0,P.jsx)(`div`,{className:j.card,children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`Extended shell content area with layout margins applied by WorkspaceLayout.Content inside Body.`})})]}),(0,P.jsxs)(f,{open:n,onOpenChange:i,columns:4,backdrop:!0,children:[(0,P.jsxs)(f.Header,{children:[(0,P.jsx)(f.Title,{children:`Comments`}),(0,P.jsx)(f.CloseTrigger,{})]}),(0,P.jsx)(f.Body,{children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`Right drawer scoped to Content.`})})]})]})]}),(0,P.jsx)(m.Footer,{children:(0,P.jsx)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:(0,P.jsx)(l,{variant:`body-xs-reg`,color:`secondary`,children:`v1.2.0`})})})]})}},Z={render:()=>(0,P.jsxs)(m,{children:[(0,P.jsx)(m.Header,{children:(0,P.jsxs)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,P.jsx)(l,{variant:`body-sm-reg`,className:j.projectName,children:`Untitled Project`}),(0,P.jsxs)(d,{direction:`row`,gap:8,alignItems:`center`,children:[(0,P.jsx)(u,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),(0,P.jsx)(u,{variant:`primary`,color:`light`,size:`small`,children:`Save project`})]})]})}),(0,P.jsx)(m.Body,{children:(0,P.jsx)(m.Content,{children:(0,P.jsxs)(`div`,{className:j.extendedMainContent,children:[(0,P.jsx)(d,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,gap:12,width:`100%`,children:(0,P.jsx)(l,{variant:`heading3`,children:`Approval workflow`})}),(0,P.jsxs)(`div`,{className:j.workflowInfoPanel,children:[(0,P.jsxs)(`div`,{className:j.workflowInfoItem,children:[(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Status`}),(0,P.jsx)(ie,{status:`draft`,size:`small`})]}),(0,P.jsxs)(`div`,{className:j.workflowInfoItem,children:[(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Owner`}),(0,P.jsx)(l,{variant:`body-sm-reg`,children:`Network Operations`})]}),(0,P.jsxs)(`div`,{className:j.workflowInfoItem,children:[(0,P.jsx)(l,{variant:`body-sm-semi-bold`,children:`Last review`}),(0,P.jsx)(l,{variant:`body-sm-reg`,children:`2 days ago`})]})]}),(0,P.jsx)(`div`,{className:j.card,children:(0,P.jsx)(l,{variant:`body-md-reg`,children:`Workflow metadata is consumer markup — not a design-system layout slot.`})})]})})})]})},Q=[`Default`,`HeaderDraft`,`HeaderPending`,`HeaderRunning`,`WithDrawer`,`WithDrawerAndBackdrop`,`FillParent`,`HeaderOnly`,`ExtendedStepperBelow`,`ExtendedStepperAside`,`ExtendedSideMenuAndLeftPanel`,`ExtendedWithCanvas`,`ExtendedSideMenuLeftPanel`,`ExtendedCombined`,`ExtendedWorkflowInfoPanel`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Figma Type=draft workspace header composition.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Figma Type=pending workspace header composition.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Figma Type=running workspace header composition.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Horizontal stepper band in Footer below the body row.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Vertical stepper in LeftPanel beside Content.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Side menu rail and docked left panel together.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Full-bleed canvas content inside Content.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Side menu with left panel — navigation rail plus push panel.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Side menu, left panel, and right drawer combined.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Illustrative workflow information panel composed in Content.`,...Z.parameters?.docs?.description}}}})))()}$();export{L as Default,X as ExtendedCombined,q as ExtendedSideMenuAndLeftPanel,Y as ExtendedSideMenuLeftPanel,K as ExtendedStepperAside,G as ExtendedStepperBelow,J as ExtendedWithCanvas,Z as ExtendedWorkflowInfoPanel,U as FillParent,R as HeaderDraft,W as HeaderOnly,z as HeaderPending,B as HeaderRunning,V as WithDrawer,H as WithDrawerAndBackdrop,Q as __namedExportsOrder,F as default};