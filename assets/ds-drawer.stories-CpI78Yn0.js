import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-C9N8IAqP.js";import{c as f}from"./index-D4xqoRYz.js";import{D as a}from"./ds-drawer-BeF-t3mt.js";import{D as l}from"./ds-button-C2Y-KyTd.js";import{D as _}from"./ds-text-input-US5gtbzt.js";import{D as d}from"./ds-icon-CPcERb9y.js";import{D as w}from"./ds-system-status-D-nQfZ9y.js";import{D as t}from"./ds-typography-DXlRsXy-.js";import"./preload-helper-PPVm8Dsz.js";import"./portal-DFSmnGkL.js";import"./create-split-props-u5h9OPvL.js";import"./index-DJ3Qh3Vf.js";import"./index-BsaFPgnc.js";import"./index-DWLqIjAh.js";import"./use-locale-context-QKq51ZmC.js";import"./dialog-title-BITDmyPh.js";import"./render-strategy-uG0iS5yE.js";import"./use-presence-Xn4PJ8X-.js";import"./index-B4KTJTAo.js";import"./ds-button-legacy-CyKiGxDo.js";import"./ds-button-new-D7Qn5FLR.js";import"./index-DvLqzCF_.js";import"./index-BJb9jx-u.js";const C="_description_2y6uq_1",B="_headerActions_2y6uq_6",H="_expand_2y6uq_10",O="_divider_2y6uq_14",S="_tabs_2y6uq_21",A="_tab_2y6uq_21",k="_selected_2y6uq_40",F="_body_2y6uq_45",E="_bodyGrid_2y6uq_50",z="_section_2y6uq_56",I="_sectionHeader_2y6uq_62",R="_sectionContent_2y6uq_65",q="_storyWrapper_2y6uq_75",s={description:C,headerActions:B,expand:H,divider:O,tabs:S,tab:A,selected:k,body:F,bodyGrid:E,section:z,sectionHeader:I,sectionContent:R,storyWrapper:q},{expect:p,userEvent:b,within:T}=__STORYBOOK_MODULE_TEST__,pe={title:"Design System/Drawer",component:a,parameters:{layout:"fullscreen",docs:{description:{component:`
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `}}},tags:["autodocs"],argTypes:{columns:{control:{type:"select"},options:Array(12).fill(0).map((o,r)=>r+1),description:"Number of grid columns (1-12)"},position:{control:{type:"select"},options:["start","end"],description:"Drawer position"},backdrop:{control:"boolean",description:"Show backdrop overlay"},closeOnEscape:{control:"boolean",description:"Close on escape key"},closeOnInteractOutside:{control:"boolean",description:"Close when clicking outside"}}},y=o=>{const[r,i]=x.useState(!1);return e.jsxs("div",{className:s.storyWrapper,children:[e.jsx(l,{onClick:()=>i(!0),children:"Open Drawer"}),e.jsx(a,{...o,open:r,onOpenChange:i,children:o.children})]})},m={render:y,args:{children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsxs(a.Title,{children:["Default Drawer ",e.jsx(w,{status:"healthy",label:"Active"})]}),e.jsxs("div",{className:s.headerActions,children:[e.jsx("button",{className:s.expand,"aria-label":"Expand",children:e.jsx(d,{icon:"open_in_full",size:"tiny"})}),e.jsx("div",{className:s.divider}),e.jsx(a.CloseTrigger,{})]}),e.jsx(t,{className:s.description,variant:"body-xs-reg",children:"This is a description caption under a title."})]}),e.jsxs(a.Toolbar,{children:[e.jsx(_,{placeholder:"Search...",style:{flex:1},slots:{startAdornment:e.jsx(d,{icon:"search",size:"tiny"})}}),e.jsx(d,{icon:"filter_list",size:"tiny"})]}),e.jsxs(a.Body,{className:s.body,children:[e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]}),e.jsx(a.Footer,{children:e.jsxs(a.Actions,{children:[e.jsx(l,{design:"v1.2",buttonType:"tertiary",size:"large",children:"Cancel"}),e.jsx(l,{design:"v1.2",size:"large",children:"Save"})]})})]})},play:async({canvasElement:o})=>{const r=T(o),i=r.getByRole("button",{name:/open drawer/i});await b.click(i);const c=await r.findByRole("dialog");await p(c).toHaveAttribute("data-state","open");const n=r.getByRole("button",{name:/close/i});await b.click(n),await p(c).toHaveAttribute("data-state","closed")}},W=({total:o=4})=>{const[r,i]=x.useState(1);return e.jsx("div",{className:s.tabs,children:Array.from({length:o},(c,n)=>e.jsxs("button",{type:"button",className:f(s.tab,{[s.selected]:r===n}),onClick:()=>i(n),children:["Tab item ",n+1]},n))})},h={render:y,args:{columns:8,children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsxs(a.Title,{children:["Drawer with Tabs ",e.jsx(w,{status:"healthy",label:"Active"})]}),e.jsxs("div",{className:s.headerActions,children:[e.jsx("button",{className:s.expand,"aria-label":"Expand",children:e.jsx(d,{icon:"open_in_full",size:"tiny"})}),e.jsx("div",{className:s.divider}),e.jsx(a.CloseTrigger,{})]}),e.jsx(t,{className:s.description,variant:"body-xs-reg",children:"This is a description caption under a title."})]}),e.jsxs(a.Body,{className:s.body,children:[e.jsx("div",{style:{flex:0},className:s.section,children:e.jsx(W,{})}),e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]}),e.jsx(a.Footer,{children:e.jsxs(a.Actions,{children:[e.jsx(l,{design:"v1.2",buttonType:"tertiary",size:"large",children:"Cancel"}),e.jsx(l,{design:"v1.2",size:"large",children:"Save"})]})})]})}},D={render:y,args:{backdrop:!0,children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Basic Drawer"}),e.jsx(a.CloseTrigger,{})]}),e.jsxs(a.Body,{className:s.body,children:[e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{style:{minHeight:"300px"},variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{style:{minHeight:"200px"},variant:"heading2",className:s.sectionContent,children:"Out of scope section"}),e.jsx(t,{style:{minHeight:"500px"},variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]})]})},play:async({canvasElement:o})=>{const r=T(o),i=r.getByRole("button",{name:/open drawer/i});await b.click(i);const c=await r.findByRole("dialog");await p(c).toHaveAttribute("data-state","open");const n=o.querySelector('[data-part="backdrop"]');await p(n).toBeInTheDocument(),await p(n).toHaveAttribute("data-state","open")}},u={render:y,args:{position:"start",children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Basic Drawer"}),e.jsx(a.CloseTrigger,{})]}),e.jsxs(a.Body,{className:s.body,children:[e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]})]})}},g={render:y,args:{columns:10,children:e.jsxs(e.Fragment,{children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Basic Drawer"}),e.jsx(a.CloseTrigger,{})]}),e.jsxs(a.Body,{className:s.bodyGrid,children:[e.jsxs("div",{style:{gridRow:"span 2"},className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]}),e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})]})]})}},v={args:{columns:4},render:function(r){const[i,c]=x.useState(!1),[n,N]=x.useState(!1),j=()=>{N(!n)};return e.jsxs("div",{className:s.storyWrapper,children:[e.jsx(l,{onClick:()=>c(!0),children:"Open Drawer"}),e.jsxs(a,{...r,open:i,onOpenChange:c,columns:n?12:r.columns||4,children:[e.jsxs(a.Header,{children:[e.jsx(a.Title,{children:"Expandable Drawer"}),e.jsxs("div",{className:s.headerActions,children:[e.jsx("button",{className:s.expand,"aria-label":n?"Collapse":"Expand",onClick:j,children:e.jsx(d,{icon:n?"close_fullscreen":"open_in_full",size:"tiny"})}),e.jsx("div",{className:s.divider}),e.jsx(a.CloseTrigger,{})]})]}),e.jsx(a.Body,{className:s.body,children:e.jsxs("div",{className:s.section,children:[e.jsx(t,{className:s.sectionHeader,variant:"body-md-semi-bold",children:"Drawer content header"}),e.jsx(t,{variant:"heading2",className:s.sectionContent,children:"Out of scope section"})]})})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: /open drawer/i
    });
    await userEvent.click(openButton);
    const drawer = await canvas.findByRole('dialog');
    await expect(drawer).toHaveAttribute('data-state', 'open');
    const closeButton = canvas.getByRole('button', {
      name: /close/i
    });
    await userEvent.click(closeButton);
    await expect(drawer).toHaveAttribute('data-state', 'closed');
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const openButton = canvas.getByRole('button', {
      name: /open drawer/i
    });
    await userEvent.click(openButton);
    const drawer = await canvas.findByRole('dialog');
    await expect(drawer).toHaveAttribute('data-state', 'open');
    const backdrop = canvasElement.querySelector('[data-part="backdrop"]');
    await expect(backdrop).toBeInTheDocument();
    await expect(backdrop).toHaveAttribute('data-state', 'open');
  }
}`,...D.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};const ye=["Default","WithTabs","WithBackdropAndScroll","DockToStart","WithGridContent","ToggleFullSize"];export{m as Default,u as DockToStart,v as ToggleFullSize,D as WithBackdropAndScroll,g as WithGridContent,h as WithTabs,ye as __namedExportsOrder,pe as default};
