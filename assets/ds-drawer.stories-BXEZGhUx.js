import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-DeS_gruE.js";import{c as N}from"./index-DK2miGf9.js";import{D as a}from"./ds-drawer-wGJN5lPJ.js";import{D as c}from"./ds-button-BqsT3WzR.js";import{D as w}from"./ds-text-input-D7Vfmgb6.js";import{D as l}from"./ds-icon-DA0v23hH.js";import{D as v}from"./ds-system-status-7vkhQuVT.js";import{D as r}from"./ds-typography-BIpYH5_L.js";import"./preload-helper-PPVm8Dsz.js";import"./portal-Cjn25K-F.js";import"./create-split-props-u5h9OPvL.js";import"./index-DZJWk2CT.js";import"./index-CKsoJxS5.js";import"./index-CVnASS4r.js";import"./use-locale-context-DqliWOM8.js";import"./dialog-title-Cv-2Td0e.js";import"./render-strategy-BRy875SQ.js";import"./use-presence-B_dhhb1y.js";import"./index-CMT5Ps3b.js";import"./ds-button-legacy-CFKnCi_V.js";import"./ds-button-new-BkDVpVwb.js";import"./index-BGhn06NL.js";import"./index-C2qyF9-4.js";const j="_description_2y6uq_1",f="_headerActions_2y6uq_6",C="_expand_2y6uq_10",_="_divider_2y6uq_14",H="_tabs_2y6uq_21",O="_tab_2y6uq_21",S="_selected_2y6uq_40",B="_body_2y6uq_45",A="_bodyGrid_2y6uq_50",F="_section_2y6uq_56",z="_sectionHeader_2y6uq_62",k="_sectionContent_2y6uq_65",I="_storyWrapper_2y6uq_75",s={description:j,headerActions:f,expand:C,divider:_,tabs:H,tab:O,selected:S,body:B,bodyGrid:A,section:F,sectionHeader:z,sectionContent:k,storyWrapper:I},ce={title:"Design System/Drawer",component:a,parameters:{layout:"fullscreen",docs:{description:{component:`
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `}}},tags:["autodocs"],argTypes:{columns:{control:{type:"select"},options:Array(12).fill(0).map((o,t)=>t+1),description:"Number of grid columns (1-12)"},position:{control:{type:"select"},options:["start","end"],description:"Drawer position"},backdrop:{control:"boolean",description:"Show backdrop overlay"},closeOnEscape:{control:"boolean",description:"Close on escape key"},closeOnInteractOutside:{control:"boolean",description:"Close when clicking outside"}}},d=o=>{const[t,i]=u.useState(!1);return e.jsxs("div",{className:s.storyWrapper,children:[e.jsx(c,{onClick:()=>i(!0),children:"Open Drawer"}),e.jsx(a,{...o,open:t,onOpenChange:i,children:o.children})]})},p={render:d,args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsxs(a.Title,{children:["Default Drawer ",e.jsx(v,{status:"healthy",label:"Active"})]}),e.jsxs("div",{className:s.headerActions,children:[e.jsx("button",{className:s.expand,"aria-label":"Expand",children:e.jsx(l,{icon:"open_in_full",size:"tiny"})}),e.jsx("div",{className:s.divider}),e.jsx(a.CloseTrigger,{})]}),e.jsx(r,{className:s.description,variant:"body-xs-reg",children:"This is a description caption under a title."})]}),e.jsxs(a.Toolbar,{children:[e.jsx(w,{placeholder:"Search...",style:{flex:1},slots:{startAdornment:e.jsx(l,{icon:"search",size:"tiny"})}}),e.jsx(l,{icon:"filter_list",size:"tiny"})]}),e.jsxs(a.Body,{className:s.body,children:[e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]}),e.jsx(a.Footer,{children:e.jsxs(a.Actions,{children:[e.jsx(c,{design:"v1.2",buttonType:"tertiary",size:"large",children:"Cancel"}),e.jsx(c,{design:"v1.2",size:"large",children:"Save"})]})})]})}},q=({total:o=4})=>{const[t,i]=u.useState(1);return e.jsx("div",{className:s.tabs,children:Array.from({length:o},(x,n)=>e.jsxs("button",{type:"button",className:N(s.tab,{[s.selected]:t===n}),onClick:()=>i(n),children:["Tab item ",n+1]},n))})},y={render:d,args:{columns:8,children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsxs(a.Title,{children:["Drawer with Tabs ",e.jsx(v,{status:"healthy",label:"Active"})]}),e.jsxs("div",{className:s.headerActions,children:[e.jsx("button",{className:s.expand,"aria-label":"Expand",children:e.jsx(l,{icon:"open_in_full",size:"tiny"})}),e.jsx("div",{className:s.divider}),e.jsx(a.CloseTrigger,{})]}),e.jsx(r,{className:s.description,variant:"body-xs-reg",children:"This is a description caption under a title."})]}),e.jsxs(a.Body,{className:s.body,children:[e.jsx("div",{style:{flex:0},className:s.section,children:e.jsx(q,{})}),e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]}),e.jsx(a.Footer,{children:e.jsxs(a.Actions,{children:[e.jsx(c,{design:"v1.2",buttonType:"tertiary",size:"large",children:"Cancel"}),e.jsx(c,{design:"v1.2",size:"large",children:"Save"})]})})]})}},m={render:d,args:{backdrop:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Basic Drawer"}),e.jsx(a.CloseTrigger,{})]}),e.jsxs(a.Body,{className:s.body,children:[e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{style:{minHeight:"300px"},variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{style:{minHeight:"200px"},variant:"heading2",className:s.sectionContent,children:"Out of scope section"}),e.jsx(r,{style:{minHeight:"500px"},variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]})]})}},h={render:d,args:{position:"start",children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Basic Drawer"}),e.jsx(a.CloseTrigger,{})]}),e.jsxs(a.Body,{className:s.body,children:[e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]})]})}},D={render:d,args:{columns:10,children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Basic Drawer"}),e.jsx(a.CloseTrigger,{})]}),e.jsxs(a.Body,{className:s.bodyGrid,children:[e.jsxs("div",{style:{gridRow:"span 2"},className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]})]})}},g={args:{columns:4},render:function(t){const[i,x]=u.useState(!1),[n,b]=u.useState(!1),T=()=>{b(!n)};return e.jsxs("div",{className:s.storyWrapper,children:[e.jsx(c,{onClick:()=>x(!0),children:"Open Drawer"}),e.jsxs(a,{...t,open:i,onOpenChange:x,columns:n?12:t.columns||4,children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Expandable Drawer"}),e.jsxs("div",{className:s.headerActions,children:[e.jsx("button",{className:s.expand,"aria-label":n?"Collapse":"Expand",onClick:T,children:e.jsx(l,{icon:n?"close_fullscreen":"open_in_full",size:"tiny"})}),e.jsx("div",{className:s.divider}),e.jsx(a.CloseTrigger,{})]})]}),e.jsx(a.Body,{className:s.body,children:e.jsxs("div",{className:s.section,children:[e.jsx(r,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(r,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})})]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
  args: {
    children: <>
                <DsDrawer.Header>
                    <DsDrawer.Title>
                        Default Drawer <DsSystemStatus status="healthy" label="Active" />
                    </DsDrawer.Title>
                    <div className={styles.headerActions}>
                        <button className={styles.expand} aria-label="Expand">
                            <DsIcon icon="open_in_full" size="tiny" />
                        </button>
                        <div className={styles.divider} />
                        <DsDrawer.CloseTrigger />
                    </div>
                    <DsTypography className={styles.description} variant="body-xs-reg">
                        This is a description caption under a title.
                    </DsTypography>
                </DsDrawer.Header>
                <DsDrawer.Toolbar>
                    <DsTextInput placeholder="Search..." style={{
          flex: 1
        }} slots={{
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
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
  args: {
    columns: 8,
    children: <>
                <DsDrawer.Header>
                    <DsDrawer.Title>
                        Drawer with Tabs <DsSystemStatus status="healthy" label="Active" />
                    </DsDrawer.Title>
                    <div className={styles.headerActions}>
                        <button className={styles.expand} aria-label="Expand">
                            <DsIcon icon="open_in_full" size="tiny" />
                        </button>
                        <div className={styles.divider} />
                        <DsDrawer.CloseTrigger />
                    </div>
                    <DsTypography className={styles.description} variant="body-xs-reg">
                        This is a description caption under a title.
                    </DsTypography>
                </DsDrawer.Header>
                <DsDrawer.Body className={styles.body}>
                    <div style={{
          flex: 0
        }} className={styles.section}>
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
}`,...y.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
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
                        <DsTypography style={{
            minHeight: '300px'
          }} variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                    <div className={styles.section}>
                        <DsTypography className={styles.sectionHeader} variant="body-md-semi-bold">
                            Drawer content header
                        </DsTypography>
                        <DsTypography style={{
            minHeight: '200px'
          }} variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                        <DsTypography style={{
            minHeight: '500px'
          }} variant="heading2" className={styles.sectionContent}>
                            Out of scope section
                        </DsTypography>
                    </div>
                </DsDrawer.Body>
            </>
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
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
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: DrawerTemplate,
  args: {
    columns: 10,
    children: <>
                <DsDrawer.Header>
                    <DsDrawer.Title>Basic Drawer</DsDrawer.Title>
                    <DsDrawer.CloseTrigger />
                </DsDrawer.Header>
                <DsDrawer.Body className={styles.bodyGrid}>
                    <div style={{
          gridRow: 'span 2'
        }} className={styles.section}>
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
}`,...D.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: 4
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
                        <div className={styles.headerActions}>
                            <button className={styles.expand} aria-label={isFullScreen ? 'Collapse' : 'Expand'} onClick={toggleFullScreen}>
                                <DsIcon icon={isFullScreen ? 'close_fullscreen' : 'open_in_full'} size="tiny" />
                            </button>
                            <div className={styles.divider} />
                            <DsDrawer.CloseTrigger />
                        </div>
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
}`,...g.parameters?.docs?.source}}};const le=["Default","WithTabs","WithBackdropAndScroll","DockToStart","WithGridContent","ToggleFullSize"];export{p as Default,h as DockToStart,g as ToggleFullSize,m as WithBackdropAndScroll,D as WithGridContent,y as WithTabs,le as __namedExportsOrder,ce as default};
