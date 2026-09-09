import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as ee}from"./ds-icon-BRZFUTMz.js";import{i as te}from"./ds-avatar.types-1gr0gATe.js";import{n as a,t as ne}from"./ds-typography-DrL2wWa5.js";import{n as re,t as o}from"./ds-button-v3-mT4iUQLS.js";import{t as ie}from"./ds-avatar-PggleZID.js";import{n as s,t as ae}from"./ds-button-Cokr7gO2.js";import{n as oe,t as c}from"./ds-workspace-layout-Mj1ONUdt.js";import{n as se,r as ce}from"./ds-popover.types-C5jE0nSl.js";import{_ as l,a as le,b as u,c as ue,d as de,f as fe,g as d,h as f,i as p,l as m,m as h,n as g,o as _,p as v,r as y,s as b,t as x,u as pe,x as me,y as he}from"./sample-menu-icons-BGwzm3nF.js";var ge=t((()=>{oe()})),S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{S=`_popoverContent_1b2q2_1`,C=`_statesHint_1b2q2_14`,w=`_sidebarDemo_1b2q2_21`,T=`_sidebar_1b2q2_21`,E=`_anchorPoint_1b2q2_39`,D=`_anchorLabel_1b2q2_49`,O=`_appHeader_1b2q2_55`,k=`_appHeaderLeft_1b2q2_63`,A=`_appHeaderBrand_1b2q2_70`,j=`_appHeaderSeparator_1b2q2_75`,M=`_appHeaderApp_1b2q2_82`,N=`_appStage_1b2q2_87`,P={popoverContent:S,statesHint:C,sidebarDemo:w,sidebar:T,anchorPoint:E,anchorLabel:D,appHeader:O,appHeaderLeft:k,appHeaderBrand:A,appHeaderSeparator:j,appHeaderApp:M,appStage:N}})),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{I=e(n(),1),ie(),ae(),re(),ee(),ne(),ge(),me(),d(),he(),f(),F(),L=r(),R=[{id:`network-visibility`,label:`Network visibility`,icon:`visibility`},{id:`planning`,label:`Planning`,icon:`account_tree`},{id:`configurations`,label:`Configurations`,icon:`tune`},{id:`deployments`,label:`Deployments`,icon:`rocket_launch`},{id:`workflows`,label:`Workflows`,icon:`route`},{id:`packages`,label:`Packages`,icon:`special-packages`},{id:`operations-ai`,label:`AI Ops`,icon:`psychology`},{id:`resource-allocation`,label:`Resource allocation`,icon:`dashboard_customize`},{id:`triggers`,label:`Triggers`,icon:`bolt`},{id:`referential-data`,label:`Referential data`,icon:`table_rows`}],z=[{id:`help-support`,label:`Help & Support`,icon:`contact_support`},{id:`knowledge-center`,label:`Knowledge Center`,icon:`local_library`}],B=[{id:`my-dashboard`,label:`My dashboard`,icon:b},{id:`network-view`,label:`Network view`,icon:m},{id:`inventory`,label:`Inventory`,icon:_},{id:`network-planning`,label:`Network planning`,icon:ue},{id:`configurations`,label:`Configurations`,icon:le},{id:`workflow-automation`,label:`Workflow automation`,icon:h},{id:`software-images`,label:`Software images`,icon:de},{id:`tasks`,label:`Tasks`,icon:fe},{id:`backup-files`,label:`Backup files`,icon:y},{id:`ai-ops`,label:`AI-Ops`,icon:g},{id:`break-glass`,label:`Break glass`,icon:p},{id:`administration`,label:`Administration`,icon:x},{id:`observability`,label:`Observability`,icon:pe},{id:`technician`,label:`Technician`,icon:v}],V={title:`Components/MainMenu`,component:l,parameters:{layout:`centered`},args:{variant:`compact`,items:R,utilityLinks:z,side:`bottom`,align:`start`,gutter:8,"aria-label":`Main menu`},argTypes:{variant:{control:`inline-radio`,options:u},side:{control:`select`,options:ce},align:{control:`select`,options:se},gutter:{control:{type:`number`,min:0,step:1}},selectedId:{control:`select`,options:R.map(e=>e.id)},"aria-label":{control:`text`},items:{table:{disable:!0}},utilityLinks:{table:{disable:!0}},trigger:{table:{disable:!0}},getAnchorElement:{table:{disable:!0}},onItemSelect:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},open:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},render:e=>(0,L.jsx)(l,{...e,trigger:e.trigger??(0,L.jsxs)(s,{schema:`secondary`,children:[(0,L.jsx)(i,{icon:`apps`}),` Open main menu`]})})},H={args:{variant:`compact`,selectedId:`network-visibility`,items:[{id:`network-visibility`,label:`Network visibility`,icon:`visibility`,description:`Monitor live topology, health, and traffic across the fabric.`},{id:`planning`,label:`Planning`,icon:`account_tree`,description:`Model capacity and design topology changes before rollout.`},{id:`configurations`,label:`Configurations`,icon:`tune`,description:`Manage device settings, templates, and intended state.`},{id:`deployments`,label:`Deployments`,icon:`rocket_launch`,description:`Roll out software images and track deployment progress.`},{id:`workflows`,label:`Workflows`,icon:`route`,description:`Automate multi-step operational tasks end to end.`},{id:`packages`,label:`Packages`,icon:`special-packages`,description:`Browse and install optional platform capabilities.`}],utilityLinks:[{id:`help-support`,label:`Help & Support`,icon:`contact_support`},{id:`knowledge-center`,label:`Knowledge Center`,icon:`local_library`}]}},U={args:{items:R,utilityLinks:z,selectedId:`packages`}},W={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,I.useState)(`planning`);return(0,L.jsx)(l,{...e,trigger:e.trigger??(0,L.jsxs)(s,{schema:`secondary`,children:[(0,L.jsx)(i,{icon:`apps`}),` Open main menu`]}),items:R,utilityLinks:z,selectedId:t,onItemSelect:e=>{let t=R.find(t=>t.id===e);t?.state===`disabled`||t?.state===`comingSoon`||n(e)}})}},G={args:{items:[{id:`available`,label:`My Dashboard`,icon:`speed`},{id:`disabled`,label:`My Dashboard`,icon:`speed`,state:`disabled`},{id:`coming-soon`,label:`My Dashboard`,icon:`speed`,state:`comingSoon`}],utilityLinks:[]}},K={args:{items:[{id:`regular`,label:`My Dashboard`,icon:`speed`},{id:`selected`,label:`My Dashboard`,icon:`speed`}],selectedId:`selected`,utilityLinks:[]}},q={args:{items:[{id:`dashboard`,label:`My dashboard`,icon:`speed`,href:`/dashboard`},{id:`inventory`,label:`Inventory`,icon:`inventory_2`,href:`/inventory`},{id:`planning`,label:`Network planning`,icon:`account_tree`,href:`/planning`}],utilityLinks:[{id:`help`,label:`Help & Support`,icon:`contact_support`,href:`/help`},{id:`docs`,label:`Knowledge Center`,icon:`local_library`,href:`/docs`}]}},J={args:{trigger:(0,L.jsx)(s,{variant:`borderless`,"aria-label":`Open applications`,children:(0,L.jsx)(i,{icon:`apps`})}),items:R,utilityLinks:z,selectedId:`network-visibility`}},Y={args:{items:B,utilityLinks:z,selectedId:`my-dashboard`}},X={name:`Custom anchor (sidebar trigger)`,parameters:{docs:{source:{type:`code`}}},render:e=>{let t=(0,I.useRef)(null);return(0,L.jsxs)(`div`,{className:P.sidebarDemo,children:[(0,L.jsx)(`div`,{className:P.sidebar,children:(0,L.jsx)(l,{...e,trigger:e.trigger??(0,L.jsx)(s,{variant:`borderless`,"aria-label":`Open applications`,children:(0,L.jsx)(i,{icon:`apps`})}),items:R,utilityLinks:z,selectedId:`network-visibility`,side:`right`,align:`start`,getAnchorElement:()=>t.current})}),(0,L.jsx)(`div`,{className:P.anchorPoint,ref:t,children:(0,L.jsx)(`p`,{className:P.anchorLabel,children:`Panel anchors here, not to the sidebar trigger.`})})]})}},Z={name:`App switching in workspace header`,parameters:{layout:`fullscreen`,docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,I.useState)(`my-dashboard`),r=B.find(e=>e.id===t);return(0,L.jsxs)(c,{children:[(0,L.jsx)(c.Header,{children:(0,L.jsxs)(`div`,{className:P.appHeader,children:[(0,L.jsxs)(`div`,{className:P.appHeaderLeft,children:[(0,L.jsx)(l,{...e,trigger:e.trigger??(0,L.jsx)(o,{color:`light`,variant:`tertiary`,icon:`apps`,"aria-label":`Switch application`}),items:B,utilityLinks:z,selectedId:t,onItemSelect:e=>n(e)}),(0,L.jsx)(a,{variant:`body-md-semi-bold`,className:P.appHeaderBrand,children:`DriveNets Cloud`}),(0,L.jsx)(`span`,{className:P.appHeaderSeparator,"aria-hidden":`true`}),(0,L.jsx)(a,{variant:`body-md-reg`,className:P.appHeaderApp,children:r?.label})]}),(0,L.jsx)(te,{name:`Ada Lovelace`,size:`sm`})]})}),(0,L.jsx)(c.Content,{children:(0,L.jsxs)(`div`,{className:P.appStage,children:[(0,L.jsx)(a,{variant:`heading2`,children:r?.label}),(0,L.jsx)(a,{variant:`body-md-reg`,color:`secondary`,children:`Open the app switcher in the header to move between applications. The selected app is tracked with local component state — no router involved.`})]})})]})}},Q={name:`Expanded variant`,args:{variant:`expanded`,items:[{id:`my-dashboard`,label:`My dashboard`,icon:`speed`,description:`Track and complete your personal or assigned network tasks.`},{id:`inventory`,label:`Inventory`,icon:`inventory_2`,description:`Browse every managed device, port, and license in one place.`},{id:`planning`,label:`Network planning`,icon:`account_tree`,description:`Model capacity and design topology changes before rollout.`,state:`extend`},{id:`ai-ops`,label:`AI Ops`,icon:`psychology`,description:`Automated anomaly detection and remediation across the fabric.`,state:`comingSoon`},{id:`break-glass`,label:`Break glass`,icon:`lock`,description:`Emergency privileged access — restricted to authorized operators.`,state:`disabled`}],utilityLinks:z,selectedId:`my-dashboard`}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"The default app switcher. Open the menu, then use the Controls panel to change the item\nsize live via `variant` (`compact` square tiles vs `expanded` cards), along with `side`,\n`align`, `gutter`, and `selectedId`. Items carry `description`s so the `expanded` size renders\nfully.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_ITEMS,
    utilityLinks: SAMPLE_UTILITY_LINKS,
    selectedId: 'packages'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <DsButton variant="borderless" aria-label="Open applications">
                <DsIcon icon="apps" />
            </DsButton>,
    items: SAMPLE_ITEMS,
    utilityLinks: SAMPLE_UTILITY_LINKS,
    selectedId: 'network-visibility'
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    items: SAMPLE_SVG_ITEMS,
    utilityLinks: SAMPLE_UTILITY_LINKS,
    selectedId: 'my-dashboard'
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`WithSelection`,`ControlledSelection`,`ItemStates`,`TileInteractionStates`,`WithHrefLinks`,`TriggerIcon`,`WithSvgIcons`,`CustomAnchor`,`InWorkspaceHeader`,`Expanded`]}))();export{W as ControlledSelection,X as CustomAnchor,H as Default,Q as Expanded,Z as InWorkspaceHeader,G as ItemStates,K as TileInteractionStates,J as TriggerIcon,q as WithHrefLinks,U as WithSelection,Y as WithSvgIcons,$ as __namedExportsOrder,V as default};