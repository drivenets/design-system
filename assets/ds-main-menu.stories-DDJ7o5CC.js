import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n}from"./iframe-B3eeVtZZ.js";import{n as r,t as i}from"./ds-icon-C2ZwT67E.js";import{i as ee}from"./ds-avatar.types-BwmAEGpx.js";import{n as a,t as o}from"./ds-typography-CO2hvUIG.js";import{n as te,t as ne}from"./ds-button-v3-CBM588sk.js";import{t as re}from"./ds-avatar-DCN0brCk.js";import{n as s,t as ie}from"./ds-button-BvI5l95e.js";import{i as ae,n as c}from"./ds-popover.types-Ctx0i2ds.js";import{t as l}from"./ds-popover-qmQj5oxo.js";import{n as u,t as d}from"./ds-workspace-layout-D3fINFRI.js";import{_ as f,a as p,b as m,c as h,d as g,f as _,g as v,h as y,i as oe,l as se,m as ce,n as le,o as ue,p as de,r as fe,s as pe,t as me,u as he,y as b}from"./sample-menu-icons-Bfvui5QA.js";function x(){return(x=e((()=>{u()})))()}var S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{S=`_sidebarDemo_1j4lv_1`,C=`_sidebar_1j4lv_1`,w=`_anchorPoint_1j4lv_19`,T=`_anchorLabel_1j4lv_29`,E=`_appHeader_1j4lv_35`,D=`_appHeaderLeft_1j4lv_43`,O=`_appHeaderBrand_1j4lv_50`,k=`_appHeaderSeparator_1j4lv_55`,A=`_appHeaderApp_1j4lv_62`,j=`_appStage_1j4lv_67`,M={sidebarDemo:S,sidebar:C,anchorPoint:w,anchorLabel:T,appHeader:E,appHeaderLeft:D,appHeaderBrand:O,appHeaderSeparator:k,appHeaderApp:A,appStage:j}})))()}var P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=e((()=>{P=t(),re(),ie(),te(),i(),o(),x(),l(),v(),b(),y(),N(),F=n(),I=[{id:`network-visibility`,label:`Network visibility`,icon:`visibility`},{id:`planning`,label:`Planning`,icon:`account_tree`},{id:`configurations`,label:`Configurations`,icon:`tune`},{id:`deployments`,label:`Deployments`,icon:`rocket_launch`},{id:`workflows`,label:`Workflows`,icon:`route`},{id:`packages`,label:`Packages`,icon:`special-packages`},{id:`operations-ai`,label:`AI Ops`,icon:`psychology`},{id:`resource-allocation`,label:`Resource allocation`,icon:`dashboard_customize`},{id:`triggers`,label:`Triggers`,icon:`bolt`},{id:`referential-data`,label:`Referential data`,icon:`table_rows`}],L=[{id:`help-support`,label:`Help & Support`,icon:`contact_support`},{id:`knowledge-center`,label:`Knowledge Center`,icon:`local_library`}],R=[{id:`my-dashboard`,label:`My dashboard`,icon:pe},{id:`network-view`,label:`Network view`,icon:se},{id:`inventory`,label:`Inventory`,icon:ue},{id:`network-planning`,label:`Network planning`,icon:h},{id:`configurations`,label:`Configurations`,icon:p},{id:`workflow-automation`,label:`Workflow automation`,icon:ce},{id:`software-images`,label:`Software images`,icon:g},{id:`tasks`,label:`Tasks`,icon:_},{id:`backup-files`,label:`Backup files`,icon:fe},{id:`ai-ops`,label:`AI-Ops`,icon:le},{id:`break-glass`,label:`Break glass`,icon:oe},{id:`administration`,label:`Administration`,icon:me},{id:`observability`,label:`Observability`,icon:he},{id:`technician`,label:`Technician`,icon:de}],z={title:`Components/MainMenu`,component:f,parameters:{layout:`centered`},args:{variant:`compact`,items:I,utilityLinks:L,side:`bottom`,align:`start`,gutter:8,"aria-label":`Main menu`},argTypes:{variant:{control:`inline-radio`,options:m},side:{control:`select`,options:ae},align:{control:`select`,options:c},gutter:{control:{type:`number`,min:0,step:1}},selectedId:{control:`select`,options:I.map(e=>e.id)},"aria-label":{control:`text`},items:{table:{disable:!0}},utilityLinks:{table:{disable:!0}},trigger:{table:{disable:!0}},getAnchorElement:{table:{disable:!0}},onItemSelect:{table:{disable:!0}},onOpenChange:{table:{disable:!0}},open:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},render:e=>(0,F.jsx)(f,{...e,trigger:e.trigger??(0,F.jsxs)(s,{schema:`secondary`,children:[(0,F.jsx)(r,{icon:`apps`}),` Open main menu`]})})},B={args:{variant:`compact`,selectedId:`network-visibility`,items:[{id:`network-visibility`,label:`Network visibility`,icon:`visibility`,description:`Monitor live topology, health, and traffic across the fabric.`},{id:`planning`,label:`Planning`,icon:`account_tree`,description:`Model capacity and design topology changes before rollout.`},{id:`configurations`,label:`Configurations`,icon:`tune`,description:`Manage device settings, templates, and intended state.`},{id:`deployments`,label:`Deployments`,icon:`rocket_launch`,description:`Roll out software images and track deployment progress.`},{id:`workflows`,label:`Workflows`,icon:`route`,description:`Automate multi-step operational tasks end to end.`},{id:`packages`,label:`Packages`,icon:`special-packages`,description:`Browse and install optional platform capabilities.`}],utilityLinks:[{id:`help-support`,label:`Help & Support`,icon:`contact_support`},{id:`knowledge-center`,label:`Knowledge Center`,icon:`local_library`}]}},V={args:{items:I,utilityLinks:L,selectedId:`packages`}},H={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,P.useState)(`planning`);return(0,F.jsx)(f,{...e,trigger:e.trigger??(0,F.jsxs)(s,{schema:`secondary`,children:[(0,F.jsx)(r,{icon:`apps`}),` Open main menu`]}),items:I,utilityLinks:L,selectedId:t,onItemSelect:e=>{let t=I.find(t=>t.id===e);t?.state!==`disabled`&&t?.state!==`comingSoon`&&n(e)}})}},U={args:{items:[{id:`available`,label:`My Dashboard`,icon:`speed`},{id:`disabled`,label:`My Dashboard`,icon:`speed`,state:`disabled`},{id:`coming-soon`,label:`My Dashboard`,icon:`speed`,state:`comingSoon`}],utilityLinks:[]}},W={args:{items:I.slice(0,3),utilityLinks:[{id:`available`,label:`Knowledge Center`,icon:`local_library`},{id:`disabled`,label:`Release notes`,icon:`description`,state:`disabled`},{id:`coming-soon`,label:`Help & Support`,icon:`contact_support`,state:`comingSoon`},{id:`custom-tooltip`,label:`Community`,icon:`forum`,state:`disabled`,tooltip:`Available in the next release`}]}},G={args:{items:[{id:`regular`,label:`My Dashboard`,icon:`speed`},{id:`selected`,label:`My Dashboard`,icon:`speed`}],selectedId:`selected`,utilityLinks:[]}},K={args:{items:[{id:`dashboard`,label:`My dashboard`,icon:`speed`,href:`/dashboard`},{id:`inventory`,label:`Inventory`,icon:`inventory_2`,href:`/inventory`},{id:`planning`,label:`Network planning`,icon:`account_tree`,href:`/planning`}],utilityLinks:[{id:`help`,label:`Help & Support`,icon:`contact_support`,href:`/help`},{id:`docs`,label:`Knowledge Center`,icon:`local_library`,href:`/docs`}]}},q={args:{trigger:(0,F.jsx)(s,{variant:`borderless`,"aria-label":`Open applications`,children:(0,F.jsx)(r,{icon:`apps`})}),items:I,utilityLinks:L,selectedId:`network-visibility`}},J={args:{items:R,utilityLinks:L,selectedId:`my-dashboard`}},Y={name:`Custom anchor (sidebar trigger)`,parameters:{docs:{source:{type:`code`}}},render:e=>{let t=(0,P.useRef)(null);return(0,F.jsxs)(`div`,{className:M.sidebarDemo,children:[(0,F.jsx)(`div`,{className:M.sidebar,children:(0,F.jsx)(f,{...e,trigger:e.trigger??(0,F.jsx)(s,{variant:`borderless`,"aria-label":`Open applications`,children:(0,F.jsx)(r,{icon:`apps`})}),items:I,utilityLinks:L,selectedId:`network-visibility`,side:`right`,align:`start`,getAnchorElement:()=>t.current})}),(0,F.jsx)(`div`,{className:M.anchorPoint,ref:t,children:(0,F.jsx)(`p`,{className:M.anchorLabel,children:`Panel anchors here, not to the sidebar trigger.`})})]})}},X={name:`App switching in workspace header`,parameters:{layout:`fullscreen`,docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,P.useState)(`my-dashboard`),r=R.find(e=>e.id===t);return(0,F.jsxs)(d,{children:[(0,F.jsx)(d.Header,{children:(0,F.jsxs)(`div`,{className:M.appHeader,children:[(0,F.jsxs)(`div`,{className:M.appHeaderLeft,children:[(0,F.jsx)(f,{...e,trigger:e.trigger??(0,F.jsx)(ne,{color:`light`,variant:`tertiary`,icon:`apps`,"aria-label":`Switch application`}),items:R,utilityLinks:L,selectedId:t,onItemSelect:e=>n(e)}),(0,F.jsx)(a,{variant:`body-md-semi-bold`,className:M.appHeaderBrand,children:`DriveNets Cloud`}),(0,F.jsx)(`span`,{className:M.appHeaderSeparator,"aria-hidden":`true`}),(0,F.jsx)(a,{variant:`body-md-reg`,className:M.appHeaderApp,children:r?.label})]}),(0,F.jsx)(ee,{name:`Ada Lovelace`,size:`sm`})]})}),(0,F.jsx)(d.Content,{children:(0,F.jsxs)(`div`,{className:M.appStage,children:[(0,F.jsx)(a,{variant:`heading2`,children:r?.label}),(0,F.jsx)(a,{variant:`body-md-reg`,color:`secondary`,children:`Open the app switcher in the header to move between applications. The selected app is tracked with local component state — no router involved.`})]})})]})}},Z={name:`Expanded variant`,args:{variant:`expanded`,items:[{id:`my-dashboard`,label:`My dashboard`,icon:`speed`,description:`Track and complete your personal or assigned network tasks.`},{id:`inventory`,label:`Inventory`,icon:`inventory_2`,description:`Browse every managed device, port, and license in one place.`},{id:`planning`,label:`Network planning`,icon:`account_tree`,description:`Model capacity and design topology changes before rollout.`,state:`extend`},{id:`ai-ops`,label:`AI Ops`,icon:`psychology`,description:`Automated anomaly detection and remediation across the fabric.`,state:`comingSoon`},{id:`break-glass`,label:`Break glass`,icon:`lock`,description:`Emergency privileged access — restricted to authorized operators.`,state:`disabled`}],utilityLinks:L,selectedId:`my-dashboard`}},Q=[`Default`,`WithSelection`,`ControlledSelection`,`ItemStates`,`UtilityLinkStates`,`TileInteractionStates`,`WithHrefLinks`,`TriggerIcon`,`WithSvgIcons`,`CustomAnchor`,`InWorkspaceHeader`,`Expanded`],B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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