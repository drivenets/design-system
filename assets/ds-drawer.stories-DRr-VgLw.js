import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./classnames-Cm4Wq5Eu.js";import{n as o,t as s}from"./ds-icon-BRZFUTMz.js";import{n as c,t as l}from"./ds-typography-DrL2wWa5.js";import{n as ee,t as u}from"./ds-button-v3-mT4iUQLS.js";import{n as d,t as f}from"./ds-stack-GU0hZWeR.js";import{r as p}from"./ds-text-input.types-LoNcVPp4.js";import{t as te}from"./ds-text-input-D0lDEuO4.js";import{n as m,t as ne}from"./ds-button-Cokr7gO2.js";import{n as re,t as h}from"./ds-drawer-CBN9wEaz.js";import{t as g}from"./ds-divider-sD2vUA4A.js";import{t as ie}from"./ds-divider-CSYNvyam.js";import{i as ae,r as _,t as oe}from"./ds-system-status.types-DY1lDSAM.js";var se=t((()=>{ae(),oe()})),v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{v=`_description_9t2ze_1`,y=`_searchInput_9t2ze_6`,b=`_tabs_9t2ze_10`,x=`_tab_9t2ze_10`,S=`_selected_9t2ze_29`,C=`_body_9t2ze_34`,w=`_bodyGrid_9t2ze_39`,T=`_section_9t2ze_45`,E=`_sectionHeader_9t2ze_51`,D=`_sectionContent_9t2ze_54`,O=`_tabsSection_9t2ze_65`,k=`_spanTwoRows_9t2ze_70`,A=`_tall_9t2ze_75`,j=`_taller_9t2ze_79`,M=`_tallest_9t2ze_83`,N=`_storyWrapper_9t2ze_87`,P=`_responsiveButtons_9t2ze_91`,F={description:v,searchInput:y,tabs:b,tab:x,selected:S,body:C,bodyGrid:w,section:T,sectionHeader:E,sectionContent:D,tabsSection:O,spanTwoRows:k,tall:A,taller:j,tallest:M,storyWrapper:N,responsiveButtons:P}})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{L=i(),R=e(n(),1),z=e(a(),1),re(),ne(),ee(),te(),s(),ie(),d(),se(),I(),l(),B=r(),{fn:V}=__STORYBOOK_MODULE_TEST__,H={title:`Components/Drawer`,component:h,parameters:{layout:`fullscreen`,docs:{description:{component:`
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `}}},argTypes:{columns:{control:{type:`select`},options:Array(12).fill(0).map((e,t)=>t+1),description:`Number of grid columns (1-12)`},position:{control:{type:`select`},options:[`start`,`end`],description:`Drawer position`},backdrop:{control:`boolean`,description:`Show backdrop overlay`},closeOnEscape:{control:`boolean`,description:`Close on escape key`},closeOnInteractOutside:{control:`boolean`,description:`Close when clicking outside`},onOpenAutoFocus:{table:{disable:!0}}}},U=e=>{let t=(0,L.c)(4),[n,r]=(0,R.useState)(!1),i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,B.jsx)(m,{onClick:()=>r(!0),children:`Open Drawer`}),t[0]=i):i=t[0];let a;return t[1]!==e||t[2]!==n?(a=(0,B.jsxs)(`div`,{className:F.storyWrapper,children:[i,(0,B.jsx)(h,{...e,open:n,onOpenChange:r,children:e.children})]}),t[1]=e,t[2]=n,t[3]=a):a=t[3],a},W={render:U,parameters:{docs:{source:{type:`code`}}},args:{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsxs)(h.Title,{children:[`Default Drawer `,(0,B.jsx)(_,{status:`healthy`,label:`Active`})]}),(0,B.jsxs)(f,{alignItems:`center`,gap:`var(--xs)`,children:[(0,B.jsx)(u,{variant:`tertiary`,icon:`open_in_full`,size:`tiny`,"aria-label":`Expand`}),(0,B.jsx)(g,{orientation:`vertical`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsx)(c,{className:F.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,B.jsxs)(h.Toolbar,{children:[(0,B.jsx)(p,{placeholder:`Search...`,className:F.searchInput,slots:{startAdornment:(0,B.jsx)(o,{icon:`search`,size:`tiny`})}}),(0,B.jsx)(o,{icon:`filter_list`,size:`tiny`})]}),(0,B.jsxs)(h.Body,{className:F.body,children:[(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]}),(0,B.jsx)(h.Footer,{children:(0,B.jsxs)(h.Actions,{children:[(0,B.jsx)(m,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,B.jsx)(m,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},G=e=>{let t=(0,L.c)(5),{total:n}=e,r=n===void 0?4:n,[i,a]=(0,R.useState)(1),o;if(t[0]!==i||t[1]!==r){let e;t[3]===i?e=t[4]:(e=(e,t)=>(0,B.jsxs)(`button`,{type:`button`,className:(0,z.default)(F.tab,{[F.selected]:i===t}),onClick:()=>a(t),children:[`Tab item `,t+1]},t),t[3]=i,t[4]=e),o=(0,B.jsx)(`div`,{className:F.tabs,children:Array.from({length:r},e)}),t[0]=i,t[1]=r,t[2]=o}else o=t[2];return o},K={render:U,parameters:{docs:{source:{type:`code`}}},args:{columns:8,children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsxs)(h.Title,{children:[`Drawer with Tabs `,(0,B.jsx)(_,{status:`healthy`,label:`Active`})]}),(0,B.jsxs)(f,{alignItems:`center`,gap:`var(--xs)`,children:[(0,B.jsx)(u,{variant:`tertiary`,icon:`open_in_full`,size:`tiny`,"aria-label":`Expand`}),(0,B.jsx)(g,{orientation:`vertical`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsx)(c,{className:F.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,B.jsxs)(h.Body,{className:F.body,children:[(0,B.jsx)(`div`,{className:(0,z.default)(F.section,F.tabsSection),children:(0,B.jsx)(G,{})}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]}),(0,B.jsx)(h.Footer,{children:(0,B.jsxs)(h.Actions,{children:[(0,B.jsx)(m,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,B.jsx)(m,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},q={render:U,parameters:{docs:{source:{type:`code`}}},args:{backdrop:!0,children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Basic Drawer`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsxs)(h.Body,{className:F.body,children:[(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:(0,z.default)(F.sectionContent,F.taller),children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:(0,z.default)(F.sectionContent,F.tall),children:`Out of scope section`}),(0,B.jsx)(c,{variant:`heading2`,className:(0,z.default)(F.sectionContent,F.tallest),children:`Out of scope section`})]})]})]})}},J={render:U,parameters:{docs:{source:{type:`code`}}},args:{position:`start`,children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Basic Drawer`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsxs)(h.Body,{className:F.body,children:[(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]})]})}},Y={render:U,parameters:{docs:{source:{type:`code`}}},args:{columns:10,children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Basic Drawer`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsxs)(h.Body,{className:F.bodyGrid,children:[(0,B.jsxs)(`div`,{className:(0,z.default)(F.section,F.spanTwoRows),children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]})]})}},X={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,R.useState)(null),n=()=>t(null),r=[{label:`3 cols → 4 on md`,columns:{lg:3,md:4}},{label:`4 cols → 6 on md`,columns:{lg:4,md:6}},{label:`5 cols → 6 on md`,columns:{lg:5,md:6}},{label:`6 cols → 10 on md`,columns:{lg:6,md:10}},{label:`8 cols → 10 on md`,columns:{lg:8,md:10}}];return(0,B.jsxs)(`div`,{className:F.storyWrapper,children:[(0,B.jsx)(c,{variant:`body-md-semi-bold`,children:`Resize the window below 1440 px to see the responsive column change.`}),(0,B.jsx)(`div`,{className:F.responsiveButtons,children:r.map(({label:e})=>(0,B.jsx)(m,{onClick:()=>t(e),children:e},e))}),r.map(({label:t,columns:r})=>(0,B.jsxs)(h,{open:e===t,onOpenChange:e=>!e&&n(),columns:r,children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:t}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsx)(h.Body,{className:F.body,children:(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsxs)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:[`lg: `,r.lg,` columns · md: `,r.md,` columns`]}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Drawer content`})]})})]},t))]})}},Z={args:{columns:4},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)(!1),a=()=>{i(!r)};return(0,B.jsxs)(`div`,{className:F.storyWrapper,children:[(0,B.jsx)(m,{onClick:()=>n(!0),children:`Open Drawer`}),(0,B.jsxs)(h,{...e,open:t,onOpenChange:n,columns:r?12:e.columns||4,children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Expandable Drawer`}),(0,B.jsxs)(f,{alignItems:`center`,gap:`var(--xs)`,children:[(0,B.jsx)(u,{variant:`tertiary`,icon:r?`close_fullscreen`:`open_in_full`,size:`tiny`,"aria-label":r?`Collapse`:`Expand`,onClick:a}),(0,B.jsx)(g,{orientation:`vertical`}),(0,B.jsx)(h.CloseTrigger,{})]})]}),(0,B.jsx)(h.Body,{className:F.body,children:(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})})]})]})}},Q={args:{onOpenAutoFocus:V(e=>e.preventDefault())},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,R.useState)(``);return(0,B.jsxs)(`div`,{className:F.storyWrapper,children:[(0,B.jsx)(p,{placeholder:`Start typing to open the drawer`,value:t,onValueChange:n,slots:{startAdornment:(0,B.jsx)(o,{icon:`search`,size:`tiny`})}}),(0,B.jsxs)(h,{...e,open:t.length>0,onOpenChange:e=>!e&&n(``),children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Suggestions`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsx)(h.Body,{className:F.body,children:(0,B.jsx)(c,{variant:`body-md-reg`,children:`Focus stayed in the input — keep typing without losing your place.`})})]})]})}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"Right drawer responsiveness: the columns prop accepts a responsive value `{ lg, md }`.\nOn screens < 1440px the drawer automatically switches to the `md` column count.\n\nRecommended responsive mappings for end-positioned drawers:\n- 3 cols → `{ lg: 3, md: 4 }`\n- 4–5 cols → `{ lg: 4, md: 6 }` / `{ lg: 5, md: 6 }`\n- 6+ cols → `{ lg: 6, md: 10 }` (up to 10)",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"On open the drawer normally focuses its first element. Pass `onOpenAutoFocus`\nand call `event.preventDefault()` to keep the caret in the field that opened the\ndrawer — useful for search / type-ahead patterns where the drawer behaves like a\npopover anchored to an input.",...Q.parameters?.docs?.description}}},$=[`Default`,`WithTabs`,`WithBackdropAndScroll`,`DockToStart`,`WithGridContent`,`Responsive`,`ToggleFullSize`,`PreventOpenAutoFocus`]}))();export{W as Default,J as DockToStart,Q as PreventOpenAutoFocus,X as Responsive,Z as ToggleFullSize,q as WithBackdropAndScroll,Y as WithGridContent,K as WithTabs,$ as __namedExportsOrder,H as default};