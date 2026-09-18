import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-V7H8WQFa.js";import{n as r,t as ee}from"./ds-icon-CwQK8g81.js";import{t as te}from"./ds-avatar-jOltPbmO.js";import{n as i,t as a}from"./ds-typography-ClnFnIDB.js";import{n as ne,t as re}from"./ds-button-v3-BKgb8QvY.js";import{t as ie}from"./ds-avatar-BmZSyyaA.js";import{n as o,t as ae}from"./ds-button-Bk-M_3kl.js";import{n as oe,t as s}from"./ds-workspace-layout-CqkTGRmz.js";import{i as c,n as l}from"./ds-popover.types-Bd9MSBGn.js";import{_ as u,a as d,b as f,c as p,d as m,f as h,g,h as _,i as v,l as se,m as ce,n as le,o as ue,p as de,r as fe,s as pe,t as me,u as he,x as ge,y}from"./sample-menu-icons-BFCWpIHn.js";function b(){return(b=e((()=>{oe()})))()}var x,S,C,w,T,E,D,O,k,A,j,M,N;function P(){return(P=e((()=>{x=`_popoverContent_1b2q2_1`,S=`_statesHint_1b2q2_14`,C=`_sidebarDemo_1b2q2_21`,w=`_sidebar_1b2q2_21`,T=`_anchorPoint_1b2q2_39`,E=`_anchorLabel_1b2q2_49`,D=`_appHeader_1b2q2_55`,O=`_appHeaderLeft_1b2q2_63`,k=`_appHeaderBrand_1b2q2_70`,A=`_appHeaderSeparator_1b2q2_75`,j=`_appHeaderApp_1b2q2_82`,M=`_appStage_1b2q2_87`,N={popoverContent:x,statesHint:S,sidebarDemo:C,sidebar:w,anchorPoint:T,anchorLabel:E,appHeader:D,appHeaderLeft:O,appHeaderBrand:k,appHeaderSeparator:A,appHeaderApp:j,appStage:M}})))()}var F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{F=t(),ie(),ae(),ne(),ee(),a(),b(),ge(),g(),y(),_(),P(),I=n(),L=[{id:`network-visibility`,label:`Network visibility`,icon:`visibility`},{id:`planning`,label:`Planning`,icon:`account_tree`},{id:`configurations`,label:`Configurations`,icon:`tune`},{id:`deployments`,label:`Deployments`,icon:`rocket_launch`},{id:`workflows`,label:`Workflows`,icon:`route`},{id:`packages`,label:`Packages`,icon:`special-packages`},{id:`operations-ai`,label:`AI Ops`,icon:`psychology`},{id:`resource-allocation`,label:`Resource allocation`,icon:`dashboard_customize`},{id:`triggers`,label:`Triggers`,icon:`bolt`},{id:`referential-data`,label:`Referential data`,icon:`table_rows`}],R=[{id:`help-support`,label:`Help & Support`,icon:`contact_support`},{id:`knowledge-center`,label:`Knowledge Center`,icon:`local_library`}],z=[{id:`my-dashboard`,label:`My dashboard`,icon:pe},{id:`network-view`,label:`Network view`,icon:se},{id:`inventory`,label:`Inventory`,icon:ue},{id:`network-planning`,label:`Network planning`,icon:p},{id:`configurations`,label:`Configurations`,icon:d},{id:`workflow-automation`,label:`Workflow automation`,icon:ce},{id:`software-images`,label:`Software images`,icon:m},{id:`tasks`,label:`Tasks`,icon:h},{id:`backup-files`,label:`Backup files`,icon:fe},{id:`ai-ops`,label:`AI-Ops`,icon:le},{id:`break-glass`,label:`Break glass`,icon:v},{id:`administration`,label:`Administration`,icon:me},{id:`observability`,label:`Observability`,icon:he},{id:`technician`,label:`Technician`,icon:de}],B={title:`Components/MainMenu`,component:u,parameters:{layout:`centered`},args:{variant:`compact`,items:L,utilityLinks:R,side:`bottom`,align:`start`,gutter:8,"aria-label":`Main menu`},argTypes:{variant:{control:`inline-radio`,options:f},side:{control:`select`,options:c},align:{control:`select`,options:l},gutter:{control:{type:`number`,min:0,step:1}},selectedId:{control:`select`,options:L.map(e=>e.id)},"aria-label":{control:`text`},items:{table:{disable:!0}},utilityLinks:{table:{disable:!0}},trigger:{table:{disable:!0}},getAnchorElement:{table:{disable:!0}},onItemSelect:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},open:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},render:e=>(0,I.jsx)(u,{...e,trigger:e.trigger??(0,I.jsxs)(o,{schema:`secondary`,children:[(0,I.jsx)(r,{icon:`apps`}),` Open main menu`]})})},V={args:{variant:`compact`,selectedId:`network-visibility`,items:[{id:`network-visibility`,label:`Network visibility`,icon:`visibility`,description:`Monitor live topology, health, and traffic across the fabric.`},{id:`planning`,label:`Planning`,icon:`account_tree`,description:`Model capacity and design topology changes before rollout.`},{id:`configurations`,label:`Configurations`,icon:`tune`,description:`Manage device settings, templates, and intended state.`},{id:`deployments`,label:`Deployments`,icon:`rocket_launch`,description:`Roll out software images and track deployment progress.`},{id:`workflows`,label:`Workflows`,icon:`route`,description:`Automate multi-step operational tasks end to end.`},{id:`packages`,label:`Packages`,icon:`special-packages`,description:`Browse and install optional platform capabilities.`}],utilityLinks:[{id:`help-support`,label:`Help & Support`,icon:`contact_support`},{id:`knowledge-center`,label:`Knowledge Center`,icon:`local_library`}]}},H={args:{items:L,utilityLinks:R,selectedId:`packages`}},U={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,F.useState)(`planning`);return(0,I.jsx)(u,{...e,trigger:e.trigger??(0,I.jsxs)(o,{schema:`secondary`,children:[(0,I.jsx)(r,{icon:`apps`}),` Open main menu`]}),items:L,utilityLinks:R,selectedId:t,onItemSelect:e=>{let t=L.find(t=>t.id===e);t?.state!==`disabled`&&t?.state!==`comingSoon`&&n(e)}})}},W={args:{items:[{id:`available`,label:`My Dashboard`,icon:`speed`},{id:`disabled`,label:`My Dashboard`,icon:`speed`,state:`disabled`},{id:`coming-soon`,label:`My Dashboard`,icon:`speed`,state:`comingSoon`}],utilityLinks:[]}},G={args:{items:[{id:`regular`,label:`My Dashboard`,icon:`speed`},{id:`selected`,label:`My Dashboard`,icon:`speed`}],selectedId:`selected`,utilityLinks:[]}},K={args:{items:[{id:`dashboard`,label:`My dashboard`,icon:`speed`,href:`/dashboard`},{id:`inventory`,label:`Inventory`,icon:`inventory_2`,href:`/inventory`},{id:`planning`,label:`Network planning`,icon:`account_tree`,href:`/planning`}],utilityLinks:[{id:`help`,label:`Help & Support`,icon:`contact_support`,href:`/help`},{id:`docs`,label:`Knowledge Center`,icon:`local_library`,href:`/docs`}]}},q={args:{trigger:(0,I.jsx)(o,{variant:`borderless`,"aria-label":`Open applications`,children:(0,I.jsx)(r,{icon:`apps`})}),items:L,utilityLinks:R,selectedId:`network-visibility`}},J={args:{items:z,utilityLinks:R,selectedId:`my-dashboard`}},Y={name:`Custom anchor (sidebar trigger)`,parameters:{docs:{source:{type:`code`}}},render:e=>{let t=(0,F.useRef)(null);return(0,I.jsxs)(`div`,{className:N.sidebarDemo,children:[(0,I.jsx)(`div`,{className:N.sidebar,children:(0,I.jsx)(u,{...e,trigger:e.trigger??(0,I.jsx)(o,{variant:`borderless`,"aria-label":`Open applications`,children:(0,I.jsx)(r,{icon:`apps`})}),items:L,utilityLinks:R,selectedId:`network-visibility`,side:`right`,align:`start`,getAnchorElement:()=>t.current})}),(0,I.jsx)(`div`,{className:N.anchorPoint,ref:t,children:(0,I.jsx)(`p`,{className:N.anchorLabel,children:`Panel anchors here, not to the sidebar trigger.`})})]})}},X={name:`App switching in workspace header`,parameters:{layout:`fullscreen`,docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,F.useState)(`my-dashboard`),r=z.find(e=>e.id===t);return(0,I.jsxs)(s,{children:[(0,I.jsx)(s.Header,{children:(0,I.jsxs)(`div`,{className:N.appHeader,children:[(0,I.jsxs)(`div`,{className:N.appHeaderLeft,children:[(0,I.jsx)(u,{...e,trigger:e.trigger??(0,I.jsx)(re,{color:`light`,variant:`tertiary`,icon:`apps`,"aria-label":`Switch application`}),items:z,utilityLinks:R,selectedId:t,onItemSelect:e=>n(e)}),(0,I.jsx)(i,{variant:`body-md-semi-bold`,className:N.appHeaderBrand,children:`DriveNets Cloud`}),(0,I.jsx)(`span`,{className:N.appHeaderSeparator,"aria-hidden":`true`}),(0,I.jsx)(i,{variant:`body-md-reg`,className:N.appHeaderApp,children:r?.label})]}),(0,I.jsx)(te,{name:`Ada Lovelace`,size:`sm`})]})}),(0,I.jsx)(s.Content,{children:(0,I.jsxs)(`div`,{className:N.appStage,children:[(0,I.jsx)(i,{variant:`heading2`,children:r?.label}),(0,I.jsx)(i,{variant:`body-md-reg`,color:`secondary`,children:`Open the app switcher in the header to move between applications. The selected app is tracked with local component state — no router involved.`})]})})]})}},Z={name:`Expanded variant`,args:{variant:`expanded`,items:[{id:`my-dashboard`,label:`My dashboard`,icon:`speed`,description:`Track and complete your personal or assigned network tasks.`},{id:`inventory`,label:`Inventory`,icon:`inventory_2`,description:`Browse every managed device, port, and license in one place.`},{id:`planning`,label:`Network planning`,icon:`account_tree`,description:`Model capacity and design topology changes before rollout.`,state:`extend`},{id:`ai-ops`,label:`AI Ops`,icon:`psychology`,description:`Automated anomaly detection and remediation across the fabric.`,state:`comingSoon`},{id:`break-glass`,label:`Break glass`,icon:`lock`,description:`Emergency privileged access — restricted to authorized operators.`,state:`disabled`}],utilityLinks:R,selectedId:`my-dashboard`}},Q=[`Default`,`WithSelection`,`ControlledSelection`,`ItemStates`,`TileInteractionStates`,`WithHrefLinks`,`TriggerIcon`,`WithSvgIcons`,`CustomAnchor`,`InWorkspaceHeader`,`Expanded`],V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"The default app switcher. Open the menu, then use the Controls panel to change the item\nsize live via `variant` (`compact` square tiles vs `expanded` cards), along with `side`,\n`align`, `gutter`, and `selectedId`. Items carry `description`s so the `expanded` size renders\nfully.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    utilityLinks: SAMPLE_UTILITY_LINKS,
    selectedId: 'packages'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}}})))()}$();export{U as ControlledSelection,Y as CustomAnchor,V as Default,Z as Expanded,X as InWorkspaceHeader,W as ItemStates,G as TileInteractionStates,q as TriggerIcon,K as WithHrefLinks,H as WithSelection,J as WithSvgIcons,Q as __namedExportsOrder,B as default};