import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n}from"./iframe-BQIZa1P4.js";import{n as r,t as ee}from"./ds-icon-ByyxkR-H.js";import{t as i}from"./ds-avatar-w8ps2929.js";import{n as a,t as te}from"./ds-typography-Dd9tyAB-.js";import{n as o,t as s}from"./ds-button-v3-CPVKC3Vo.js";import{t as c}from"./ds-avatar-CQIMElYo.js";import{n as l,t as ne}from"./ds-button-7r5gnX_v.js";import{i as re,n as ie}from"./ds-popover.types-Bd9MSBGn.js";import{t as ae}from"./ds-popover-ChAnpCon.js";import{n as oe,t as u}from"./ds-workspace-layout-ecnEhLIQ.js";import{_ as d,a as f,b as se,c as ce,d as le,f as ue,g as de,h as fe,i as pe,l as me,m as p,n as m,o as h,p as g,r as _,s as he,t as ge,u as _e,y as v}from"./sample-menu-icons-03oulKmA.js";function y(){return(y=e((()=>{oe()})))()}var b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{b=`_popoverContent_1b2q2_1`,x=`_statesHint_1b2q2_14`,S=`_sidebarDemo_1b2q2_21`,C=`_sidebar_1b2q2_21`,w=`_anchorPoint_1b2q2_39`,T=`_anchorLabel_1b2q2_49`,E=`_appHeader_1b2q2_55`,D=`_appHeaderLeft_1b2q2_63`,O=`_appHeaderBrand_1b2q2_70`,k=`_appHeaderSeparator_1b2q2_75`,A=`_appHeaderApp_1b2q2_82`,j=`_appStage_1b2q2_87`,M={popoverContent:b,statesHint:x,sidebarDemo:S,sidebar:C,anchorPoint:w,anchorLabel:T,appHeader:E,appHeaderLeft:D,appHeaderBrand:O,appHeaderSeparator:k,appHeaderApp:A,appStage:j}})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{P=t(),c(),ne(),o(),ee(),te(),y(),ae(),de(),v(),fe(),N(),F=n(),I=[{id:`network-visibility`,label:`Network visibility`,icon:`visibility`},{id:`planning`,label:`Planning`,icon:`account_tree`},{id:`configurations`,label:`Configurations`,icon:`tune`},{id:`deployments`,label:`Deployments`,icon:`rocket_launch`},{id:`workflows`,label:`Workflows`,icon:`route`},{id:`packages`,label:`Packages`,icon:`special-packages`},{id:`operations-ai`,label:`AI Ops`,icon:`psychology`},{id:`resource-allocation`,label:`Resource allocation`,icon:`dashboard_customize`},{id:`triggers`,label:`Triggers`,icon:`bolt`},{id:`referential-data`,label:`Referential data`,icon:`table_rows`}],L=[{id:`help-support`,label:`Help & Support`,icon:`contact_support`},{id:`knowledge-center`,label:`Knowledge Center`,icon:`local_library`}],R=[{id:`my-dashboard`,label:`My dashboard`,icon:he},{id:`network-view`,label:`Network view`,icon:me},{id:`inventory`,label:`Inventory`,icon:h},{id:`network-planning`,label:`Network planning`,icon:ce},{id:`configurations`,label:`Configurations`,icon:f},{id:`workflow-automation`,label:`Workflow automation`,icon:p},{id:`software-images`,label:`Software images`,icon:le},{id:`tasks`,label:`Tasks`,icon:ue},{id:`backup-files`,label:`Backup files`,icon:_},{id:`ai-ops`,label:`AI-Ops`,icon:m},{id:`break-glass`,label:`Break glass`,icon:pe},{id:`administration`,label:`Administration`,icon:ge},{id:`observability`,label:`Observability`,icon:_e},{id:`technician`,label:`Technician`,icon:g}],z={title:`Components/MainMenu`,component:d,parameters:{layout:`centered`},args:{variant:`compact`,items:I,utilityLinks:L,side:`bottom`,align:`start`,gutter:8,"aria-label":`Main menu`},argTypes:{variant:{control:`inline-radio`,options:se},side:{control:`select`,options:re},align:{control:`select`,options:ie},gutter:{control:{type:`number`,min:0,step:1}},selectedId:{control:`select`,options:I.map(e=>e.id)},"aria-label":{control:`text`},items:{table:{disable:!0}},utilityLinks:{table:{disable:!0}},trigger:{table:{disable:!0}},getAnchorElement:{table:{disable:!0}},onItemSelect:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},open:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},render:e=>(0,F.jsx)(d,{...e,trigger:e.trigger??(0,F.jsxs)(l,{schema:`secondary`,children:[(0,F.jsx)(r,{icon:`apps`}),` Open main menu`]})})},B={args:{variant:`compact`,selectedId:`network-visibility`,items:[{id:`network-visibility`,label:`Network visibility`,icon:`visibility`,description:`Monitor live topology, health, and traffic across the fabric.`},{id:`planning`,label:`Planning`,icon:`account_tree`,description:`Model capacity and design topology changes before rollout.`},{id:`configurations`,label:`Configurations`,icon:`tune`,description:`Manage device settings, templates, and intended state.`},{id:`deployments`,label:`Deployments`,icon:`rocket_launch`,description:`Roll out software images and track deployment progress.`},{id:`workflows`,label:`Workflows`,icon:`route`,description:`Automate multi-step operational tasks end to end.`},{id:`packages`,label:`Packages`,icon:`special-packages`,description:`Browse and install optional platform capabilities.`}],utilityLinks:[{id:`help-support`,label:`Help & Support`,icon:`contact_support`},{id:`knowledge-center`,label:`Knowledge Center`,icon:`local_library`}]}},V={args:{items:I,utilityLinks:L,selectedId:`packages`}},H={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,P.useState)(`planning`);return(0,F.jsx)(d,{...e,trigger:e.trigger??(0,F.jsxs)(l,{schema:`secondary`,children:[(0,F.jsx)(r,{icon:`apps`}),` Open main menu`]}),items:I,utilityLinks:L,selectedId:t,onItemSelect:e=>{let t=I.find(t=>t.id===e);t?.state!==`disabled`&&t?.state!==`comingSoon`&&n(e)}})}},U={args:{items:[{id:`available`,label:`My Dashboard`,icon:`speed`},{id:`disabled`,label:`My Dashboard`,icon:`speed`,state:`disabled`},{id:`coming-soon`,label:`My Dashboard`,icon:`speed`,state:`comingSoon`}],utilityLinks:[]}},W={args:{items:I.slice(0,3),utilityLinks:[{id:`available`,label:`Knowledge Center`,icon:`local_library`},{id:`disabled`,label:`Release notes`,icon:`description`,state:`disabled`},{id:`coming-soon`,label:`Help & Support`,icon:`contact_support`,state:`comingSoon`},{id:`custom-tooltip`,label:`Community`,icon:`forum`,state:`disabled`,tooltip:`Available in the next release`}]}},G={args:{items:[{id:`regular`,label:`My Dashboard`,icon:`speed`},{id:`selected`,label:`My Dashboard`,icon:`speed`}],selectedId:`selected`,utilityLinks:[]}},K={args:{items:[{id:`dashboard`,label:`My dashboard`,icon:`speed`,href:`/dashboard`},{id:`inventory`,label:`Inventory`,icon:`inventory_2`,href:`/inventory`},{id:`planning`,label:`Network planning`,icon:`account_tree`,href:`/planning`}],utilityLinks:[{id:`help`,label:`Help & Support`,icon:`contact_support`,href:`/help`},{id:`docs`,label:`Knowledge Center`,icon:`local_library`,href:`/docs`}]}},q={args:{trigger:(0,F.jsx)(l,{variant:`borderless`,"aria-label":`Open applications`,children:(0,F.jsx)(r,{icon:`apps`})}),items:I,utilityLinks:L,selectedId:`network-visibility`}},J={args:{items:R,utilityLinks:L,selectedId:`my-dashboard`}},Y={name:`Custom anchor (sidebar trigger)`,parameters:{docs:{source:{type:`code`}}},render:e=>{let t=(0,P.useRef)(null);return(0,F.jsxs)(`div`,{className:M.sidebarDemo,children:[(0,F.jsx)(`div`,{className:M.sidebar,children:(0,F.jsx)(d,{...e,trigger:e.trigger??(0,F.jsx)(l,{variant:`borderless`,"aria-label":`Open applications`,children:(0,F.jsx)(r,{icon:`apps`})}),items:I,utilityLinks:L,selectedId:`network-visibility`,side:`right`,align:`start`,getAnchorElement:()=>t.current})}),(0,F.jsx)(`div`,{className:M.anchorPoint,ref:t,children:(0,F.jsx)(`p`,{className:M.anchorLabel,children:`Panel anchors here, not to the sidebar trigger.`})})]})}},X={name:`App switching in workspace header`,parameters:{layout:`fullscreen`,docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,P.useState)(`my-dashboard`),r=R.find(e=>e.id===t);return(0,F.jsxs)(u,{children:[(0,F.jsx)(u.Header,{children:(0,F.jsxs)(`div`,{className:M.appHeader,children:[(0,F.jsxs)(`div`,{className:M.appHeaderLeft,children:[(0,F.jsx)(d,{...e,trigger:e.trigger??(0,F.jsx)(s,{color:`light`,variant:`tertiary`,icon:`apps`,"aria-label":`Switch application`}),items:R,utilityLinks:L,selectedId:t,onItemSelect:e=>n(e)}),(0,F.jsx)(a,{variant:`body-md-semi-bold`,className:M.appHeaderBrand,children:`DriveNets Cloud`}),(0,F.jsx)(`span`,{className:M.appHeaderSeparator,"aria-hidden":`true`}),(0,F.jsx)(a,{variant:`body-md-reg`,className:M.appHeaderApp,children:r?.label})]}),(0,F.jsx)(i,{name:`Ada Lovelace`,size:`sm`})]})}),(0,F.jsx)(u.Content,{children:(0,F.jsxs)(`div`,{className:M.appStage,children:[(0,F.jsx)(a,{variant:`heading2`,children:r?.label}),(0,F.jsx)(a,{variant:`body-md-reg`,color:`secondary`,children:`Open the app switcher in the header to move between applications. The selected app is tracked with local component state — no router involved.`})]})})]})}},Z={name:`Expanded variant`,args:{variant:`expanded`,items:[{id:`my-dashboard`,label:`My dashboard`,icon:`speed`,description:`Track and complete your personal or assigned network tasks.`},{id:`inventory`,label:`Inventory`,icon:`inventory_2`,description:`Browse every managed device, port, and license in one place.`},{id:`planning`,label:`Network planning`,icon:`account_tree`,description:`Model capacity and design topology changes before rollout.`,state:`extend`},{id:`ai-ops`,label:`AI Ops`,icon:`psychology`,description:`Automated anomaly detection and remediation across the fabric.`,state:`comingSoon`},{id:`break-glass`,label:`Break glass`,icon:`lock`,description:`Emergency privileged access — restricted to authorized operators.`,state:`disabled`}],utilityLinks:L,selectedId:`my-dashboard`}},Q=[`Default`,`WithSelection`,`ControlledSelection`,`ItemStates`,`UtilityLinkStates`,`TileInteractionStates`,`WithHrefLinks`,`TriggerIcon`,`WithSvgIcons`,`CustomAnchor`,`InWorkspaceHeader`,`Expanded`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'compact',
    selectedId: 'network-visibility',
    items: [{
      id: 'network-visibility',
      label: 'Network visibility',
      icon: 'visibility',
      description: 'Monitor live topology, health, and traffic across the fabric.'
    }, {
      id: 'planning',
      label: 'Planning',
      icon: 'account_tree',
      description: 'Model capacity and design topology changes before rollout.'
    }, {
      id: 'configurations',
      label: 'Configurations',
      icon: 'tune',
      description: 'Manage device settings, templates, and intended state.'
    }, {
      id: 'deployments',
      label: 'Deployments',
      icon: 'rocket_launch',
      description: 'Roll out software images and track deployment progress.'
    }, {
      id: 'workflows',
      label: 'Workflows',
      icon: 'route',
      description: 'Automate multi-step operational tasks end to end.'
    }, {
      id: 'packages',
      label: 'Packages',
      icon: 'special-packages',
      description: 'Browse and install optional platform capabilities.'
    }],
    utilityLinks: [{
      id: 'help-support',
      label: 'Help & Support',
      icon: 'contact_support'
    }, {
      id: 'knowledge-center',
      label: 'Knowledge Center',
      icon: 'local_library'
    }]
  }
}`,...B.parameters?.docs?.source},description:{story:"The default app switcher. Open the menu, then use the Controls panel to change the item\nsize live via `variant` (`compact` square tiles vs `expanded` cards), along with `side`,\n`align`, `gutter`, and `selectedId`. Items carry `description`s so the `expanded` size renders\nfully.",...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    utilityLinks: SAMPLE_UTILITY_LINKS,
    selectedId: 'packages'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [selectedId, setSelectedId] = useState('planning');
    return <DsMainMenu {...args} trigger={args.trigger ?? <DsButton schema="secondary">
                            <DsIcon icon="apps" /> Open main menu
                        </DsButton>} items={SAMPLE_ITEMS} utilityLinks={SAMPLE_UTILITY_LINKS} selectedId={selectedId} onItemSelect={id => {
      const item = SAMPLE_ITEMS.find(entry => entry.id === id);
      if (item?.state === 'disabled' || item?.state === 'comingSoon') {
        return;
      }
      setSelectedId(id);
    }} />;
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'available',
      label: 'My Dashboard',
      icon: 'speed'
    }, {
      id: 'disabled',
      label: 'My Dashboard',
      icon: 'speed',
      state: 'disabled'
    }, {
      id: 'coming-soon',
      label: 'My Dashboard',
      icon: 'speed',
      state: 'comingSoon'
    }],
    utilityLinks: []
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS.slice(0, 3),
    utilityLinks: [{
      id: 'available',
      label: 'Knowledge Center',
      icon: 'local_library'
    }, {
      id: 'disabled',
      label: 'Release notes',
      icon: 'description',
      state: 'disabled'
    }, {
      id: 'coming-soon',
      label: 'Help & Support',
      icon: 'contact_support',
      state: 'comingSoon'
    }, {
      id: 'custom-tooltip',
      label: 'Community',
      icon: 'forum',
      state: 'disabled',
      tooltip: 'Available in the next release'
    }]
  }
}`,...W.parameters?.docs?.source},description:{story:"Utility links accept the same `state` values as tiles. `disabled` and `comingSoon` links don't\nactivate; `tooltip` overrides the built-in coming-soon message.",...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'regular',
      label: 'My Dashboard',
      icon: 'speed'
    }, {
      id: 'selected',
      label: 'My Dashboard',
      icon: 'speed'
    }],
    selectedId: 'selected',
    utilityLinks: []
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    items: [{
      id: 'dashboard',
      label: 'My dashboard',
      icon: 'speed',
      href: '/dashboard'
    }, {
      id: 'inventory',
      label: 'Inventory',
      icon: 'inventory_2',
      href: '/inventory'
    }, {
      id: 'planning',
      label: 'Network planning',
      icon: 'account_tree',
      href: '/planning'
    }],
    utilityLinks: [{
      id: 'help',
      label: 'Help & Support',
      icon: 'contact_support',
      href: '/help'
    }, {
      id: 'docs',
      label: 'Knowledge Center',
      icon: 'local_library',
      href: '/docs'
    }]
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <DsButton variant="borderless" aria-label="Open applications">
                <DsIcon icon="apps" />
            </DsButton>,
    items: SAMPLE_ITEMS,
    utilityLinks: SAMPLE_UTILITY_LINKS,
    selectedId: 'network-visibility'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_SVG_ITEMS,
    utilityLinks: SAMPLE_UTILITY_LINKS,
    selectedId: 'my-dashboard'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  name: 'Custom anchor (sidebar trigger)',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const anchorRef = useRef<HTMLDivElement>(null);
    return <div className={styles.sidebarDemo}>
                <div className={styles.sidebar}>
                    <DsMainMenu {...args} trigger={args.trigger ?? <DsButton variant="borderless" aria-label="Open applications">
                                    <DsIcon icon="apps" />
                                </DsButton>} items={SAMPLE_ITEMS} utilityLinks={SAMPLE_UTILITY_LINKS} selectedId="network-visibility" side="right" align="start" getAnchorElement={() => anchorRef.current} />
                </div>
                <div className={styles.anchorPoint} ref={anchorRef}>
                    <p className={styles.anchorLabel}>Panel anchors here, not to the sidebar trigger.</p>
                </div>
            </div>;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'App switching in workspace header',
  parameters: {
    layout: 'fullscreen',
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [selectedAppId, setSelectedAppId] = useState('my-dashboard');
    const selectedApp = SAMPLE_SVG_ITEMS.find(app => app.id === selectedAppId);
    return <DsWorkspaceLayout>
                <DsWorkspaceLayout.Header>
                    <div className={styles.appHeader}>
                        <div className={styles.appHeaderLeft}>
                            <DsMainMenu {...args} trigger={args.trigger ?? <DsButtonV3 color="light" variant="tertiary" icon="apps" aria-label="Switch application" />} items={SAMPLE_SVG_ITEMS} utilityLinks={SAMPLE_UTILITY_LINKS} selectedId={selectedAppId} onItemSelect={id => setSelectedAppId(id)} />
                            <DsTypography variant="body-md-semi-bold" className={styles.appHeaderBrand}>
                                DriveNets Cloud
                            </DsTypography>
                            <span className={styles.appHeaderSeparator} aria-hidden="true" />
                            <DsTypography variant="body-md-reg" className={styles.appHeaderApp}>
                                {selectedApp?.label}
                            </DsTypography>
                        </div>
                        <DsAvatar name="Ada Lovelace" size="sm" />
                    </div>
                </DsWorkspaceLayout.Header>

                <DsWorkspaceLayout.Content>
                    <div className={styles.appStage}>
                        <DsTypography variant="heading2">{selectedApp?.label}</DsTypography>
                        <DsTypography variant="body-md-reg" color="secondary">
                            Open the app switcher in the header to move between applications. The selected app is tracked
                            with local component state — no router involved.
                        </DsTypography>
                    </div>
                </DsWorkspaceLayout.Content>
            </DsWorkspaceLayout>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Expanded variant',
  args: {
    variant: 'expanded',
    items: [{
      id: 'my-dashboard',
      label: 'My dashboard',
      icon: 'speed',
      description: 'Track and complete your personal or assigned network tasks.'
    }, {
      id: 'inventory',
      label: 'Inventory',
      icon: 'inventory_2',
      description: 'Browse every managed device, port, and license in one place.'
    }, {
      id: 'planning',
      label: 'Network planning',
      icon: 'account_tree',
      description: 'Model capacity and design topology changes before rollout.',
      state: 'extend'
    }, {
      id: 'ai-ops',
      label: 'AI Ops',
      icon: 'psychology',
      description: 'Automated anomaly detection and remediation across the fabric.',
      state: 'comingSoon'
    }, {
      id: 'break-glass',
      label: 'Break glass',
      icon: 'lock',
      description: 'Emergency privileged access — restricted to authorized operators.',
      state: 'disabled'
    }],
    utilityLinks: SAMPLE_UTILITY_LINKS,
    selectedId: 'my-dashboard'
  }
}`,...Z.parameters?.docs?.source}}}})))()}$();export{H as ControlledSelection,Y as CustomAnchor,B as Default,Z as Expanded,X as InWorkspaceHeader,U as ItemStates,G as TileInteractionStates,q as TriggerIcon,W as UtilityLinkStates,K as WithHrefLinks,V as WithSelection,J as WithSvgIcons,Q as __namedExportsOrder,z as default};