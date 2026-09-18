import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-V7H8WQFa.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as ee}from"./ds-icon-CwQK8g81.js";import{n as s,t as te}from"./ds-typography-ClnFnIDB.js";import{n as ne,t as c}from"./ds-button-v3-BKgb8QvY.js";import{n as re,t as l}from"./ds-stack-DC_qSfFt.js";import{t as u}from"./ds-text-input-C10iw8B9.js";import{t as ie}from"./ds-text-input-DM8XpFt9.js";import{n as d,t as ae}from"./ds-button-Bk-M_3kl.js";import{n as oe,t as f}from"./ds-drawer-Ba8YykFa.js";import{t as p}from"./ds-divider-lufLbE9G.js";import{t as m}from"./ds-divider-DtqG_BBf.js";import{n as se,t as h}from"./ds-system-status-DWoZuv1b.js";function g(){return(g=t((()=>{se()})))()}var _,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{_=`_description_9t2ze_1`,v=`_searchInput_9t2ze_6`,y=`_tabs_9t2ze_10`,b=`_tab_9t2ze_10`,x=`_selected_9t2ze_29`,S=`_body_9t2ze_34`,C=`_bodyGrid_9t2ze_39`,w=`_section_9t2ze_45`,T=`_sectionHeader_9t2ze_51`,E=`_sectionContent_9t2ze_54`,D=`_tabsSection_9t2ze_65`,O=`_spanTwoRows_9t2ze_70`,k=`_tall_9t2ze_75`,A=`_taller_9t2ze_79`,j=`_tallest_9t2ze_83`,M=`_storyWrapper_9t2ze_87`,N=`_responsiveButtons_9t2ze_91`,P={description:_,searchInput:v,tabs:y,tab:b,selected:x,body:S,bodyGrid:C,section:w,sectionHeader:T,sectionContent:E,tabsSection:D,spanTwoRows:O,tall:k,taller:A,tallest:j,storyWrapper:M,responsiveButtons:N}})))()}var I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;function $(){return($=t((()=>{I=i(),L=n(),R=e(a(),1),oe(),ae(),ne(),ie(),ee(),m(),re(),g(),F(),te(),z=r(),{fn:B}=__STORYBOOK_MODULE_TEST__,V={title:`Components/Drawer`,component:f,parameters:{layout:`fullscreen`,docs:{description:{component:`
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `}}},argTypes:{columns:{control:{type:`select`},options:Array(12).fill(0).map((e,t)=>t+1),description:`Number of grid columns (1-12)`},position:{control:{type:`select`},options:[`start`,`end`],description:`Drawer position`},backdrop:{control:`boolean`,description:`Show backdrop overlay`},closeOnEscape:{control:`boolean`,description:`Close on escape key`},closeOnInteractOutside:{control:`boolean`,description:`Close when clicking outside`},onOpenAutoFocus:{table:{disable:!0}}}},H=e=>{let t=(0,I.c)(4),[n,r]=(0,L.useState)(!1),i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,z.jsx)(d,{onClick:()=>r(!0),children:`Open Drawer`}),t[0]=i):i=t[0];let a;return t[1]!==e||t[2]!==n?(a=(0,z.jsxs)(`div`,{className:P.storyWrapper,children:[i,(0,z.jsx)(f,{...e,open:n,onOpenChange:r,children:e.children})]}),t[1]=e,t[2]=n,t[3]=a):a=t[3],a},U={render:H,parameters:{docs:{source:{type:`code`}}},args:{children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(f.Header,{children:[(0,z.jsxs)(f.Title,{children:[`Default Drawer `,(0,z.jsx)(h,{status:`healthy`,label:`Active`})]}),(0,z.jsxs)(l,{alignItems:`center`,gap:`var(--xs)`,children:[(0,z.jsx)(c,{variant:`tertiary`,icon:`open_in_full`,size:`tiny`,"aria-label":`Expand`}),(0,z.jsx)(p,{orientation:`vertical`}),(0,z.jsx)(f.CloseTrigger,{})]}),(0,z.jsx)(s,{className:P.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,z.jsxs)(f.Toolbar,{children:[(0,z.jsx)(u,{placeholder:`Search...`,className:P.searchInput,slots:{startAdornment:(0,z.jsx)(o,{icon:`search`,size:`tiny`})}}),(0,z.jsx)(o,{icon:`filter_list`,size:`tiny`})]}),(0,z.jsxs)(f.Body,{className:P.body,children:[(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]}),(0,z.jsx)(f.Footer,{children:(0,z.jsxs)(f.Actions,{children:[(0,z.jsx)(d,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,z.jsx)(d,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},W=e=>{let t=(0,I.c)(5),{total:n}=e,r=n===void 0?4:n,[i,a]=(0,L.useState)(1),o;if(t[0]!==i||t[1]!==r){let e;t[3]===i?e=t[4]:(e=(e,t)=>(0,z.jsxs)(`button`,{type:`button`,className:(0,R.default)(P.tab,{[P.selected]:i===t}),onClick:()=>a(t),children:[`Tab item `,t+1]},t),t[3]=i,t[4]=e),o=(0,z.jsx)(`div`,{className:P.tabs,children:Array.from({length:r},e)}),t[0]=i,t[1]=r,t[2]=o}else o=t[2];return o},G={render:H,parameters:{docs:{source:{type:`code`}}},args:{columns:8,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(f.Header,{children:[(0,z.jsxs)(f.Title,{children:[`Drawer with Tabs `,(0,z.jsx)(h,{status:`healthy`,label:`Active`})]}),(0,z.jsxs)(l,{alignItems:`center`,gap:`var(--xs)`,children:[(0,z.jsx)(c,{variant:`tertiary`,icon:`open_in_full`,size:`tiny`,"aria-label":`Expand`}),(0,z.jsx)(p,{orientation:`vertical`}),(0,z.jsx)(f.CloseTrigger,{})]}),(0,z.jsx)(s,{className:P.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,z.jsxs)(f.Body,{className:P.body,children:[(0,z.jsx)(`div`,{className:(0,R.default)(P.section,P.tabsSection),children:(0,z.jsx)(W,{})}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]}),(0,z.jsx)(f.Footer,{children:(0,z.jsxs)(f.Actions,{children:[(0,z.jsx)(d,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,z.jsx)(d,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},K={render:H,parameters:{docs:{source:{type:`code`}}},args:{backdrop:!0,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(f.Header,{children:[(0,z.jsx)(f.Title,{children:`Basic Drawer`}),(0,z.jsx)(f.CloseTrigger,{})]}),(0,z.jsxs)(f.Body,{className:P.body,children:[(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:(0,R.default)(P.sectionContent,P.taller),children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:(0,R.default)(P.sectionContent,P.tall),children:`Out of scope section`}),(0,z.jsx)(s,{variant:`heading2`,className:(0,R.default)(P.sectionContent,P.tallest),children:`Out of scope section`})]})]})]})}},q={render:H,parameters:{docs:{source:{type:`code`}}},args:{position:`start`,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(f.Header,{children:[(0,z.jsx)(f.Title,{children:`Basic Drawer`}),(0,z.jsx)(f.CloseTrigger,{})]}),(0,z.jsxs)(f.Body,{className:P.body,children:[(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]})]})}},J={render:H,parameters:{docs:{source:{type:`code`}}},args:{columns:10,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(f.Header,{children:[(0,z.jsx)(f.Title,{children:`Basic Drawer`}),(0,z.jsx)(f.CloseTrigger,{})]}),(0,z.jsxs)(f.Body,{className:P.bodyGrid,children:[(0,z.jsxs)(`div`,{className:(0,R.default)(P.section,P.spanTwoRows),children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]})]})}},Y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,L.useState)(null),n=()=>t(null),r=[{label:`3 cols → 4 on md`,columns:{lg:3,md:4}},{label:`4 cols → 6 on md`,columns:{lg:4,md:6}},{label:`5 cols → 6 on md`,columns:{lg:5,md:6}},{label:`6 cols → 10 on md`,columns:{lg:6,md:10}},{label:`8 cols → 10 on md`,columns:{lg:8,md:10}}];return(0,z.jsxs)(`div`,{className:P.storyWrapper,children:[(0,z.jsx)(s,{variant:`body-md-semi-bold`,children:`Resize the window below 1440 px to see the responsive column change.`}),(0,z.jsx)(`div`,{className:P.responsiveButtons,children:r.map(({label:e})=>(0,z.jsx)(d,{onClick:()=>t(e),children:e},e))}),r.map(({label:t,columns:r})=>(0,z.jsxs)(f,{open:e===t,onOpenChange:e=>!e&&n(),columns:r,children:[(0,z.jsxs)(f.Header,{children:[(0,z.jsx)(f.Title,{children:t}),(0,z.jsx)(f.CloseTrigger,{})]}),(0,z.jsx)(f.Body,{className:P.body,children:(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsxs)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:[`lg: `,r.lg,` columns · md: `,r.md,` columns`]}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Drawer content`})]})})]},t))]})}},X={args:{columns:4},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,L.useState)(!1),[r,i]=(0,L.useState)(!1),a=()=>{i(!r)};return(0,z.jsxs)(`div`,{className:P.storyWrapper,children:[(0,z.jsx)(d,{onClick:()=>n(!0),children:`Open Drawer`}),(0,z.jsxs)(f,{...e,open:t,onOpenChange:n,columns:r?12:e.columns||4,children:[(0,z.jsxs)(f.Header,{children:[(0,z.jsx)(f.Title,{children:`Expandable Drawer`}),(0,z.jsxs)(l,{alignItems:`center`,gap:`var(--xs)`,children:[(0,z.jsx)(c,{variant:`tertiary`,icon:r?`close_fullscreen`:`open_in_full`,size:`tiny`,"aria-label":r?`Collapse`:`Expand`,onClick:a}),(0,z.jsx)(p,{orientation:`vertical`}),(0,z.jsx)(f.CloseTrigger,{})]})]}),(0,z.jsx)(f.Body,{className:P.body,children:(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(s,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(s,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})})]})]})}},Z={args:{onOpenAutoFocus:B(e=>e.preventDefault())},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,L.useState)(``);return(0,z.jsxs)(`div`,{className:P.storyWrapper,children:[(0,z.jsx)(u,{placeholder:`Start typing to open the drawer`,value:t,onValueChange:n,slots:{startAdornment:(0,z.jsx)(o,{icon:`search`,size:`tiny`})}}),(0,z.jsxs)(f,{...e,open:t.length>0,onOpenChange:e=>!e&&n(``),children:[(0,z.jsxs)(f.Header,{children:[(0,z.jsx)(f.Title,{children:`Suggestions`}),(0,z.jsx)(f.CloseTrigger,{})]}),(0,z.jsx)(f.Body,{className:P.body,children:(0,z.jsx)(s,{variant:`body-md-reg`,children:`Focus stayed in the input — keep typing without losing your place.`})})]})]})}},Q=[`Default`,`WithTabs`,`WithBackdropAndScroll`,`DockToStart`,`WithGridContent`,`Responsive`,`ToggleFullSize`,`PreventOpenAutoFocus`],U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    children: <>
                <DsDrawer.Header>
                    <DsDrawer.Title>
                        Default Drawer <DsSystemStatus status="healthy" label="Active" />
                    </DsDrawer.Title>
                    <DsStack alignItems="center" gap="var(--xs)">
                        <DsButtonV3 variant="tertiary" icon="open_in_full" size="tiny" aria-label="Expand" />
                        <DsDivider orientation="vertical" />
                        <DsDrawer.CloseTrigger />
                    </DsStack>
                    <DsTypography className={styles.description} variant="body-xs-reg">
                        This is a description caption under a title.
                    </DsTypography>
                </DsDrawer.Header>
                <DsDrawer.Toolbar>
                    <DsTextInput placeholder="Search..." className={styles.searchInput} slots={{
          startAdornment: <DsIcon icon="search" size="tiny" />
        }} />
                    <DsIcon icon="filter_list" size="tiny" />
                </DsDrawer.Toolbar>
                <DsDrawer.Body className={styles.body}>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                </DsDrawer.Body>
                <DsDrawer.Footer>
                    <DsDrawer.Actions>
                        <DsButton design="v1.2" buttonType="tertiary" size="large">
                            Cancel
                        </DsButton>
                        <DsButton design="v1.2" size="large">
                            Save
                        </DsButton>
                    </DsDrawer.Actions>
                </DsDrawer.Footer>
            </>
  }
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    columns: 8,
    children: <>
                <DsDrawer.Header>
                    <DsDrawer.Title>
                        Drawer with Tabs <DsSystemStatus status="healthy" label="Active" />
                    </DsDrawer.Title>
                    <DsStack alignItems="center" gap="var(--xs)">
                        <DsButtonV3 variant="tertiary" icon="open_in_full" size="tiny" aria-label="Expand" />
                        <DsDivider orientation="vertical" />
                        <DsDrawer.CloseTrigger />
                    </DsStack>
                    <DsTypography className={styles.description} variant="body-xs-reg">
                        This is a description caption under a title.
                    </DsTypography>
                </DsDrawer.Header>
                <DsDrawer.Body className={styles.body}>
                    <div className={classNames(styles.section, styles.tabsSection)}>
                        <Tabs />
                    </div>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                </DsDrawer.Body>
                <DsDrawer.Footer>
                    <DsDrawer.Actions>
                        <DsButton design="v1.2" buttonType="tertiary" size="large">
                            Cancel
                        </DsButton>
                        <DsButton design="v1.2" size="large">
                            Save
                        </DsButton>
                    </DsDrawer.Actions>
                </DsDrawer.Footer>
            </>
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    backdrop: true,
    children: <>
                <DsDrawer.Header>
                    <DsDrawer.Title>Basic Drawer</DsDrawer.Title>
                    <DsDrawer.CloseTrigger />
                </DsDrawer.Header>
                <DsDrawer.Body className={styles.body}>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={classNames(styles.sectionContent, styles.taller)}>
                            Out of scope section
                        </DsTypography>
                    </div>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={classNames(styles.sectionContent, styles.tall)}>
                            Out of scope section
                        </DsTypography>
                        <DsTypography variant="heading2" className={classNames(styles.sectionContent, styles.tallest)}>
                            Out of scope section
                        </DsTypography>
                    </div>
                </DsDrawer.Body>
            </>
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    position: 'start',
    children: <>
                <DsDrawer.Header>
                    <DsDrawer.Title>Basic Drawer</DsDrawer.Title>
                    <DsDrawer.CloseTrigger />
                </DsDrawer.Header>
                <DsDrawer.Body className={styles.body}>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                </DsDrawer.Body>
            </>
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    columns: 10,
    children: <>
                <DsDrawer.Header>
                    <DsDrawer.Title>Basic Drawer</DsDrawer.Title>
                    <DsDrawer.CloseTrigger />
                </DsDrawer.Header>
                <DsDrawer.Body className={styles.bodyGrid}>
                    <div className={classNames(styles.section, styles.spanTwoRows)}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                </DsDrawer.Body>
            </>
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [openDrawer, setOpenDrawer] = useState<string | null>(null);
    const close = () => setOpenDrawer(null);
    const variants = [{
      label: '3 cols → 4 on md',
      columns: {
        lg: 3,
        md: 4
      }
    }, {
      label: '4 cols → 6 on md',
      columns: {
        lg: 4,
        md: 6
      }
    }, {
      label: '5 cols → 6 on md',
      columns: {
        lg: 5,
        md: 6
      }
    }, {
      label: '6 cols → 10 on md',
      columns: {
        lg: 6,
        md: 10
      }
    }, {
      label: '8 cols → 10 on md',
      columns: {
        lg: 8,
        md: 10
      }
    }] satisfies Array<{
      label: string;
      columns: ResponsiveValue<DsDrawerColumns>;
    }>;
    return <div className={styles.storyWrapper}>
                <DsTypography variant="body-md-semi-bold">
                    Resize the window below 1440 px to see the responsive column change.
                </DsTypography>

                <div className={styles.responsiveButtons}>
                    {variants.map(({
          label
        }) => <DsButton key={label} onClick={() => setOpenDrawer(label)}>
                            {label}
                        </DsButton>)}
                </div>

                {variants.map(({
        label,
        columns
      }) => <DsDrawer key={label} open={openDrawer === label} onOpenChange={open => !open && close()} columns={columns}>
                        <DsDrawer.Header>
                            <DsDrawer.Title>{label}</DsDrawer.Title>
                            <DsDrawer.CloseTrigger />
                        </DsDrawer.Header>
                        <DsDrawer.Body className={styles.body}>
                            <div className={styles.section}>
                                <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                                    lg: {columns.lg} columns · md: {columns.md} columns
                                </DsTypography>
                                <DsTypography variant="heading2" className={styles.sectionContent}>
                                    Drawer content
                                </DsTypography>
                            </div>
                        </DsDrawer.Body>
                    </DsDrawer>)}
            </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Right drawer responsiveness: the columns prop accepts a responsive value `{ lg, md }`.\nOn screens < 1440px the drawer automatically switches to the `md` column count.\n\nRecommended responsive mappings for end-positioned drawers:\n- 3 cols → `{ lg: 3, md: 4 }`\n- 4–5 cols → `{ lg: 4, md: 6 }` / `{ lg: 5, md: 6 }`\n- 6+ cols → `{ lg: 6, md: 10 }` (up to 10)",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 4
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args: DsDrawerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [isFullScreen, setIsFullScreen] = useState(false);
    const toggleFullScreen = () => {
      setIsFullScreen(!isFullScreen);
    };
    return <div className={styles.storyWrapper}>
                <DsButton onClick={() => setIsOpen(true)}>Open Drawer</DsButton>

                <DsDrawer {...args} open={isOpen} onOpenChange={setIsOpen} columns={isFullScreen ? 12 : args.columns || 4}>
                    <DsDrawer.Header>
                        <DsDrawer.Title>Expandable Drawer</DsDrawer.Title>
                        <DsStack alignItems="center" gap="var(--xs)">
                            <DsButtonV3 variant="tertiary" icon={isFullScreen ? 'close_fullscreen' : 'open_in_full'} size="tiny" aria-label={isFullScreen ? 'Collapse' : 'Expand'} onClick={toggleFullScreen} />
                            <DsDivider orientation="vertical" />
                            <DsDrawer.CloseTrigger />
                        </DsStack>
                    </DsDrawer.Header>
                    <DsDrawer.Body className={styles.body}>
                        <div className={styles.section}>
                            <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                                Drawer content header
                            </DsTypography>
                            <DsTypography variant="heading2" className={styles.sectionContent}>
                                Out of scope section
                            </DsTypography>
                        </div>
                    </DsDrawer.Body>
                </DsDrawer>
            </div>;
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    onOpenAutoFocus: fn((event: Event) => event.preventDefault())
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args: DsDrawerProps) {
    const [query, setQuery] = useState('');
    return <div className={styles.storyWrapper}>
                <DsTextInput placeholder="Start typing to open the drawer" value={query} onValueChange={setQuery} slots={{
        startAdornment: <DsIcon icon="search" size="tiny" />
      }} />

                <DsDrawer {...args} open={query.length > 0} onOpenChange={open => !open && setQuery('')}>
                    <DsDrawer.Header>
                        <DsDrawer.Title>Suggestions</DsDrawer.Title>
                        <DsDrawer.CloseTrigger />
                    </DsDrawer.Header>
                    <DsDrawer.Body className={styles.body}>
                        <DsTypography variant="body-md-reg">
                            Focus stayed in the input — keep typing without losing your place.
                        </DsTypography>
                    </DsDrawer.Body>
                </DsDrawer>
            </div>;
  }
}`,...Z.parameters?.docs?.source},description:{story:"On open the drawer normally focuses its first element. Pass `onOpenAutoFocus`\nand call `event.preventDefault()` to keep the caret in the field that opened the\ndrawer — useful for search / type-ahead patterns where the drawer behaves like a\npopover anchored to an input.",...Z.parameters?.docs?.description}}}})))()}$();export{U as Default,q as DockToStart,Z as PreventOpenAutoFocus,Y as Responsive,X as ToggleFullSize,K as WithBackdropAndScroll,J as WithGridContent,G as WithTabs,Q as __namedExportsOrder,V as default};