import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BXdIzCCA.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-chNEfgH2.js";import{t as o}from"./ds-icon-DuD7pscG.js";import{t as s}from"./ds-icon-BPgxPRLA.js";import{n as c,t as l}from"./ds-typography-BPNYwNNz.js";import{n as u,t as d}from"./ds-button-v3-CwpB-bNf.js";import{t as ee}from"./ds-status-badge-Co_Vy77x.js";import{t as f}from"./ds-status-badge-D_IFJz7b.js";import{t as p}from"./ds-drawer-3R_dC-Ft.js";import{t as te}from"./ds-drawer-HJt224YT.js";var m,h,g,_,v,y,b,ne=t((()=>{m=`_root_2li6w_1`,h=`_fillParent_2li6w_17`,g=`_header_2li6w_21`,_=`_subHeader_2li6w_32`,v=`_content_2li6w_41`,y=`_footer_2li6w_47`,b={root:m,fillParent:h,header:g,subHeader:_,content:v,footer:y}})),x,S,C,w,T,E,D,O,k=t((()=>{x=a(),S=e(i(),1),ne(),C=r(),w=e=>{let t=(0,x.c)(10),n,r,i;t[0]===e?(n=t[1],r=t[2],i=t[3]):({className:n,fillParent:i,...r}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i);let a=i===void 0?!1:i,o;t[4]!==n||t[5]!==a?(o=(0,S.default)(b.root,{[b.fillParent]:a},n),t[4]=n,t[5]=a,t[6]=o):o=t[6];let s;return t[7]!==r||t[8]!==o?(s=(0,C.jsx)(`div`,{...r,className:o}),t[7]=r,t[8]=o,t[9]=s):s=t[9],s},T=e=>{let t=(0,x.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=(0,S.default)(b.header,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,C.jsx)(`header`,{...r,className:i}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a},E=e=>{let t=(0,x.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=(0,S.default)(b.subHeader,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,C.jsx)(`div`,{...r,className:i}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a},D=e=>{let t=(0,x.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=(0,S.default)(b.content,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,C.jsx)(`div`,{...r,className:i}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a},O=e=>{let t=(0,x.c)(8),n,r;t[0]===e?(n=t[1],r=t[2]):({className:n,...r}=e,t[0]=e,t[1]=n,t[2]=r);let i;t[3]===n?i=t[4]:(i=(0,S.default)(b.footer,n),t[3]=n,t[4]=i);let a;return t[5]!==r||t[6]!==i?(a=(0,C.jsx)(`footer`,{...r,className:i}),t[5]=r,t[6]=i,t[7]=a):a=t[7],a},w.Header=T,w.SubHeader=E,w.Content=D,w.Footer=O})),A,j,M,N,P,F,I,L,R,z,B,V,H=t((()=>{A=`_headerLayout_p74z5_1`,j=`_headerLeft_p74z5_8`,M=`_headerCenter_p74z5_14`,N=`_headerRight_p74z5_24`,P=`_projectName_p74z5_33`,F=`_lastUpdate_p74z5_37`,I=`_subHeaderContent_p74z5_45`,L=`_mainContent_p74z5_52`,R=`_card_p74z5_56`,z=`_footerContent_p74z5_64`,B=`_footerActions_p74z5_73`,V={headerLayout:A,headerLeft:j,headerCenter:M,headerRight:N,projectName:P,lastUpdate:F,subHeaderContent:I,mainContent:L,card:R,footerContent:z,footerActions:B}})),U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{U=a(),W=e(n(),1),k(),u(),l(),s(),f(),te(),H(),G=r(),K={title:`Components/Workspace`,component:w,parameters:{layout:`fullscreen`,docs:{description:{component:`
A compound layout component for composing full-screen workspace views.

- **Workspace** — full-screen flex-column surface
- **Workspace.Header** — top bar with blue gradient (above drawers)
- **Workspace.SubHeader** — secondary bar below header (above drawers)
- **Workspace.Content** — scrollable main area with \`position: relative\`, so non-portal drawers are contained within it
- **Workspace.Footer** — bottom bar (below drawers)

### Drawer containment

Wrap a \`DsDrawer\` inside \`Workspace.Content\` (with \`portal={false}\`) and
the drawer will render below the header/subheader and above the footer
automatically — no z-index overrides needed.

### Notification z-index

If you render a notification/toast inside the workspace and it gets hidden
behind a modal or dialog, render the toast via a portal or increase its
\`--z-index\` CSS variable.
        `}}},argTypes:{fillParent:{control:`boolean`,description:`Use 100% height (fill parent) instead of 100vh (fill viewport)`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},q=e=>{let t=(0,U.c)(9),{onAction:n}=e,r;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(r=(0,G.jsx)(`div`,{className:V.headerLeft,children:(0,G.jsx)(d,{variant:`secondary`,color:`light`,size:`small`,icon:`close`,children:`Close`})}),t[0]=r):r=t[0];let i;t[1]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,G.jsxs)(`div`,{className:V.headerCenter,children:[(0,G.jsx)(c,{variant:`body-sm-reg`,className:V.projectName,children:`Untitled Project -23-May-2024 04:47 PM`}),(0,G.jsx)(o,{icon:`info`,size:`tiny`}),(0,G.jsx)(ee,{status:`draft`,size:`small`})]}),t[1]=i):i=t[1];let a,s;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(a=(0,G.jsxs)(`div`,{className:V.lastUpdate,children:[(0,G.jsx)(o,{icon:`history`,size:`small`}),(0,G.jsx)(c,{variant:`body-sm-reg`,children:`Last update: 2d ago`})]}),s=(0,G.jsx)(d,{variant:`secondary`,color:`light`,size:`small`,children:`Discard`}),t[2]=a,t[3]=s):(a=t[2],s=t[3]);let l;t[4]===n?l=t[5]:(l=(0,G.jsx)(d,{variant:`primary`,color:`light`,size:`small`,onClick:n,children:`Save project`}),t[4]=n,t[5]=l);let u;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(u=(0,G.jsx)(d,{variant:`tertiary`,color:`light`,size:`small`,icon:`more_vert`}),t[6]=u):u=t[6];let f;return t[7]===l?f=t[8]:(f=(0,G.jsxs)(`div`,{className:V.headerLayout,children:[r,i,(0,G.jsxs)(`div`,{className:V.headerRight,children:[a,s,l,u]})]}),t[7]=l,t[8]=f),f},J={render:()=>(0,G.jsxs)(w,{children:[(0,G.jsx)(w.Header,{children:(0,G.jsx)(q,{})}),(0,G.jsx)(w.SubHeader,{children:(0,G.jsxs)(`div`,{className:V.subHeaderContent,children:[(0,G.jsx)(c,{variant:`body-sm-semi-bold`,children:`Dashboard`}),(0,G.jsx)(c,{variant:`body-xs-reg`,children:`Last updated 2 min ago`})]})}),(0,G.jsx)(w.Content,{children:(0,G.jsxs)(`div`,{className:V.mainContent,children:[(0,G.jsxs)(`div`,{className:V.card,children:[(0,G.jsx)(c,{variant:`heading3`,children:`Welcome`}),(0,G.jsx)(c,{variant:`body-md-reg`,children:`This is the main content area of the workspace.`})]}),(0,G.jsxs)(`div`,{className:V.card,children:[(0,G.jsx)(c,{variant:`heading3`,children:`Section 2`}),(0,G.jsx)(c,{variant:`body-md-reg`,children:`Another content section.`})]})]})}),(0,G.jsx)(w.Footer,{children:(0,G.jsxs)(`div`,{className:V.footerContent,children:[(0,G.jsx)(`span`,{children:`v1.2.0`}),(0,G.jsxs)(`div`,{className:V.footerActions,children:[(0,G.jsx)(d,{variant:`tertiary`,size:`small`,children:`Help`}),(0,G.jsx)(d,{variant:`tertiary`,size:`small`,children:`Feedback`})]})]})})]})},Y={render:function(){let[e,t]=(0,W.useState)(!1);return(0,G.jsxs)(w,{children:[(0,G.jsx)(w.Header,{children:(0,G.jsx)(q,{onAction:()=>t(!0)})}),(0,G.jsx)(w.SubHeader,{children:(0,G.jsx)(`div`,{className:V.subHeaderContent,children:(0,G.jsx)(c,{variant:`body-sm-semi-bold`,children:`Dashboard`})})}),(0,G.jsxs)(w.Content,{children:[(0,G.jsx)(`div`,{className:V.mainContent,children:(0,G.jsxs)(`div`,{className:V.card,children:[(0,G.jsx)(c,{variant:`heading3`,children:`Drawer containment`}),(0,G.jsx)(c,{variant:`body-md-reg`,children:`Click "Save project" in the header to open the drawer. It renders inside Content — below the header/subheader and above the footer.`})]})}),(0,G.jsxs)(p,{open:e,onOpenChange:t,columns:4,children:[(0,G.jsxs)(p.Header,{children:[(0,G.jsx)(p.Title,{children:`Details`}),(0,G.jsx)(p.CloseTrigger,{})]}),(0,G.jsx)(p.Body,{children:(0,G.jsx)(`div`,{className:V.mainContent,children:(0,G.jsx)(c,{variant:`body-md-reg`,children:`This drawer is contained within the content area.`})})}),(0,G.jsx)(p.Footer,{children:(0,G.jsxs)(p.Actions,{children:[(0,G.jsx)(d,{variant:`tertiary`,size:`large`,onClick:()=>t(!1),children:`Cancel`}),(0,G.jsx)(d,{variant:`primary`,size:`large`,children:`Save`})]})})]})]}),(0,G.jsx)(w.Footer,{children:(0,G.jsx)(`div`,{className:V.footerContent,children:(0,G.jsx)(`span`,{children:`v1.2.0`})})})]})}},X={render:function(){let[e,t]=(0,W.useState)(!1);return(0,G.jsxs)(w,{children:[(0,G.jsx)(w.Header,{children:(0,G.jsx)(q,{onAction:()=>t(!0)})}),(0,G.jsx)(w.SubHeader,{children:(0,G.jsx)(`div`,{className:V.subHeaderContent,children:(0,G.jsx)(c,{variant:`body-sm-semi-bold`,children:`Dashboard`})})}),(0,G.jsxs)(w.Content,{children:[(0,G.jsx)(`div`,{className:V.mainContent,children:(0,G.jsxs)(`div`,{className:V.card,children:[(0,G.jsx)(c,{variant:`heading3`,children:`Backdrop containment`}),(0,G.jsx)(c,{variant:`body-md-reg`,children:`Click "Save project" to open the drawer. The backdrop only covers the content area, not the header or footer.`})]})}),(0,G.jsxs)(p,{open:e,onOpenChange:t,columns:4,backdrop:!0,children:[(0,G.jsxs)(p.Header,{children:[(0,G.jsx)(p.Title,{children:`Modal Drawer`}),(0,G.jsx)(p.CloseTrigger,{})]}),(0,G.jsx)(p.Body,{children:(0,G.jsx)(`div`,{className:V.mainContent,children:(0,G.jsx)(c,{variant:`body-md-reg`,children:`The backdrop is scoped to the content area.`})})})]})]}),(0,G.jsx)(w.Footer,{children:(0,G.jsx)(`div`,{className:V.footerContent,children:(0,G.jsx)(`span`,{children:`v1.2.0`})})})]})}},Z={render:()=>(0,G.jsx)(`div`,{style:{height:400,border:`2px dashed var(--border)`},children:(0,G.jsxs)(w,{fillParent:!0,children:[(0,G.jsx)(w.Header,{children:(0,G.jsx)(q,{})}),(0,G.jsx)(w.Content,{children:(0,G.jsx)(`div`,{className:V.mainContent,children:(0,G.jsx)(c,{variant:`body-md-reg`,children:`This workspace fills its parent container (400px) instead of the viewport.`})})}),(0,G.jsx)(w.Footer,{children:(0,G.jsx)(`div`,{className:V.footerContent,children:(0,G.jsx)(`span`,{children:`v1.2.0`})})})]})})},Q={render:()=>(0,G.jsxs)(w,{children:[(0,G.jsx)(w.Header,{children:(0,G.jsx)(q,{})}),(0,G.jsx)(w.Content,{children:(0,G.jsx)(`div`,{className:V.mainContent,children:(0,G.jsxs)(`div`,{className:V.card,children:[(0,G.jsx)(c,{variant:`heading3`,children:`No SubHeader or Footer`}),(0,G.jsx)(c,{variant:`body-md-reg`,children:`All sub-components are optional. Use only what you need.`})]})})})]})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspace>
            <DsWorkspace.Header>
                <WorkspaceHeader />
            </DsWorkspace.Header>

            <DsWorkspace.SubHeader>
                <div className={styles.subHeaderContent}>
                    <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    <DsTypography variant="body-xs-reg">Last updated 2 min ago</DsTypography>
                </div>
            </DsWorkspace.SubHeader>

            <DsWorkspace.Content>
                <div className={styles.mainContent}>
                    <div className={styles.card}>
                        <DsTypography variant="heading3">Welcome</DsTypography>
                        <DsTypography variant="body-md-reg">This is the main content area of the workspace.</DsTypography>
                    </div>
                    <div className={styles.card}>
                        <DsTypography variant="heading3">Section 2</DsTypography>
                        <DsTypography variant="body-md-reg">Another content section.</DsTypography>
                    </div>
                </div>
            </DsWorkspace.Content>

            <DsWorkspace.Footer>
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
            </DsWorkspace.Footer>
        </DsWorkspace>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return <DsWorkspace>
                <DsWorkspace.Header>
                    <WorkspaceHeader onAction={() => setDrawerOpen(true)} />
                </DsWorkspace.Header>

                <DsWorkspace.SubHeader>
                    <div className={styles.subHeaderContent}>
                        <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    </div>
                </DsWorkspace.SubHeader>

                <DsWorkspace.Content>
                    <div className={styles.mainContent}>
                        <div className={styles.card}>
                            <DsTypography variant="heading3">Drawer containment</DsTypography>
                            <DsTypography variant="body-md-reg">
                                Click &quot;Save project&quot; in the header to open the drawer. It renders inside Content —
                                below the header/subheader and above the footer.
                            </DsTypography>
                        </div>
                    </div>

                    <DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4}>
                        <DsDrawer.Header>
                            <DsDrawer.Title>Details</DsDrawer.Title>
                            <DsDrawer.CloseTrigger />
                        </DsDrawer.Header>
                        <DsDrawer.Body>
                            <div className={styles.mainContent}>
                                <DsTypography variant="body-md-reg">
                                    This drawer is contained within the content area.
                                </DsTypography>
                            </div>
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
                </DsWorkspace.Content>

                <DsWorkspace.Footer>
                    <div className={styles.footerContent}>
                        <span>v1.2.0</span>
                    </div>
                </DsWorkspace.Footer>
            </DsWorkspace>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [drawerOpen, setDrawerOpen] = useState(false);
    return <DsWorkspace>
                <DsWorkspace.Header>
                    <WorkspaceHeader onAction={() => setDrawerOpen(true)} />
                </DsWorkspace.Header>

                <DsWorkspace.SubHeader>
                    <div className={styles.subHeaderContent}>
                        <DsTypography variant="body-sm-semi-bold">Dashboard</DsTypography>
                    </div>
                </DsWorkspace.SubHeader>

                <DsWorkspace.Content>
                    <div className={styles.mainContent}>
                        <div className={styles.card}>
                            <DsTypography variant="heading3">Backdrop containment</DsTypography>
                            <DsTypography variant="body-md-reg">
                                Click &quot;Save project&quot; to open the drawer. The backdrop only covers the content area,
                                not the header or footer.
                            </DsTypography>
                        </div>
                    </div>

                    <DsDrawer open={drawerOpen} onOpenChange={setDrawerOpen} columns={4} backdrop>
                        <DsDrawer.Header>
                            <DsDrawer.Title>Modal Drawer</DsDrawer.Title>
                            <DsDrawer.CloseTrigger />
                        </DsDrawer.Header>
                        <DsDrawer.Body>
                            <div className={styles.mainContent}>
                                <DsTypography variant="body-md-reg">The backdrop is scoped to the content area.</DsTypography>
                            </div>
                        </DsDrawer.Body>
                    </DsDrawer>
                </DsWorkspace.Content>

                <DsWorkspace.Footer>
                    <div className={styles.footerContent}>
                        <span>v1.2.0</span>
                    </div>
                </DsWorkspace.Footer>
            </DsWorkspace>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    height: 400,
    border: '2px dashed var(--border)'
  }}>
            <DsWorkspace fillParent>
                <DsWorkspace.Header>
                    <WorkspaceHeader />
                </DsWorkspace.Header>

                <DsWorkspace.Content>
                    <div className={styles.mainContent}>
                        <DsTypography variant="body-md-reg">
                            This workspace fills its parent container (400px) instead of the viewport.
                        </DsTypography>
                    </div>
                </DsWorkspace.Content>

                <DsWorkspace.Footer>
                    <div className={styles.footerContent}>
                        <span>v1.2.0</span>
                    </div>
                </DsWorkspace.Footer>
            </DsWorkspace>
        </div>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => <DsWorkspace>
            <DsWorkspace.Header>
                <WorkspaceHeader />
            </DsWorkspace.Header>

            <DsWorkspace.Content>
                <div className={styles.mainContent}>
                    <div className={styles.card}>
                        <DsTypography variant="heading3">No SubHeader or Footer</DsTypography>
                        <DsTypography variant="body-md-reg">
                            All sub-components are optional. Use only what you need.
                        </DsTypography>
                    </div>
                </div>
            </DsWorkspace.Content>
        </DsWorkspace>
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithDrawer`,`WithDrawerAndBackdrop`,`FillParent`,`HeaderOnly`]}))();export{J as Default,Z as FillParent,Q as HeaderOnly,Y as WithDrawer,X as WithDrawerAndBackdrop,$ as __namedExportsOrder,K as default};