import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-1UwOlSWK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{i as a}from"./ds-icon.types-DfRGdZ8f.js";import{t as o}from"./ds-icon-C6ILb6x3.js";import{t as s}from"./ds-typography-DI6mMftn.js";import{t as c}from"./ds-typography-no8iUrhx.js";import{n as l,t as u}from"./ds-button-BqQXsZ2S.js";import{r as d}from"./ds-text-input.types-B_bl-WkP.js";import{t as f}from"./ds-text-input-CwA2aeIW.js";import{n as p,t as m}from"./ds-drawer-Cu678M3r.js";import{i as h,r as g,t as _}from"./ds-system-status.types-vex3Hda_.js";var v=t((()=>{h(),_()})),y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P=t((()=>{y=`_description_2y6uq_1`,b=`_headerActions_2y6uq_6`,x=`_expand_2y6uq_10`,S=`_divider_2y6uq_14`,C=`_tabs_2y6uq_21`,w=`_tab_2y6uq_21`,T=`_selected_2y6uq_40`,E=`_body_2y6uq_45`,D=`_bodyGrid_2y6uq_50`,O=`_section_2y6uq_56`,k=`_sectionHeader_2y6uq_62`,A=`_sectionContent_2y6uq_65`,j=`_storyWrapper_2y6uq_75`,M=`_contentSection_2y6uq_79`,N={description:y,headerActions:b,expand:x,divider:S,tabs:C,tab:w,selected:T,body:E,bodyGrid:D,section:O,sectionHeader:k,sectionContent:A,storyWrapper:j,contentSection:M}})),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;t((()=>{F=e(n(),1),I=e(i(),1),p(),u(),f(),o(),v(),P(),c(),L=r(),{expect:R,userEvent:z,within:B}=__STORYBOOK_MODULE_TEST__,V={title:`Design System/Drawer`,component:m,parameters:{layout:`fullscreen`,docs:{description:{component:`
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `}}},argTypes:{columns:{control:{type:`select`},options:Array(12).fill(0).map((e,t)=>t+1),description:`Number of grid columns (1-12)`},position:{control:{type:`select`},options:[`start`,`end`],description:`Drawer position`},backdrop:{control:`boolean`,description:`Show backdrop overlay`},closeOnEscape:{control:`boolean`,description:`Close on escape key`},closeOnInteractOutside:{control:`boolean`,description:`Close when clicking outside`}}},H=e=>{let[t,n]=(0,F.useState)(!1);return(0,L.jsxs)(`div`,{className:N.storyWrapper,children:[(0,L.jsx)(l,{onClick:()=>n(!0),children:`Open Drawer`}),(0,L.jsx)(m,{...e,open:t,onOpenChange:n,children:e.children})]})},U={render:H,args:{children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(m.Header,{children:[(0,L.jsxs)(m.Title,{children:[`Default Drawer `,(0,L.jsx)(g,{status:`healthy`,label:`Active`})]}),(0,L.jsxs)(`div`,{className:N.headerActions,children:[(0,L.jsx)(`button`,{className:N.expand,"aria-label":`Expand`,children:(0,L.jsx)(a,{icon:`open_in_full`,size:`tiny`})}),(0,L.jsx)(`div`,{className:N.divider}),(0,L.jsx)(m.CloseTrigger,{})]}),(0,L.jsx)(s,{className:N.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,L.jsxs)(m.Toolbar,{children:[(0,L.jsx)(d,{placeholder:`Search...`,style:{flex:1},slots:{startAdornment:(0,L.jsx)(a,{icon:`search`,size:`tiny`})}}),(0,L.jsx)(a,{icon:`filter_list`,size:`tiny`})]}),(0,L.jsxs)(m.Body,{className:N.body,children:[(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]}),(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]})]}),(0,L.jsx)(m.Footer,{children:(0,L.jsxs)(m.Actions,{children:[(0,L.jsx)(l,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,L.jsx)(l,{design:`v1.2`,size:`large`,children:`Save`})]})})]})},play:async({canvasElement:e})=>{let t=B(e),n=t.getByRole(`button`,{name:/open drawer/i});await z.click(n);let r=await t.findByRole(`dialog`);await R(r).toHaveAttribute(`data-state`,`open`);let i=t.getByRole(`button`,{name:/close/i});await z.click(i),await R(r).toHaveAttribute(`data-state`,`closed`)}},W=({total:e=4})=>{let[t,n]=(0,F.useState)(1);return(0,L.jsx)(`div`,{className:N.tabs,children:Array.from({length:e},(e,r)=>(0,L.jsxs)(`button`,{type:`button`,className:(0,I.default)(N.tab,{[N.selected]:t===r}),onClick:()=>n(r),children:[`Tab item `,r+1]},r))})},G={render:H,args:{columns:8,children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(m.Header,{children:[(0,L.jsxs)(m.Title,{children:[`Drawer with Tabs `,(0,L.jsx)(g,{status:`healthy`,label:`Active`})]}),(0,L.jsxs)(`div`,{className:N.headerActions,children:[(0,L.jsx)(`button`,{className:N.expand,"aria-label":`Expand`,children:(0,L.jsx)(a,{icon:`open_in_full`,size:`tiny`})}),(0,L.jsx)(`div`,{className:N.divider}),(0,L.jsx)(m.CloseTrigger,{})]}),(0,L.jsx)(s,{className:N.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,L.jsxs)(m.Body,{className:N.body,children:[(0,L.jsx)(`div`,{style:{flex:0},className:N.section,children:(0,L.jsx)(W,{})}),(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]})]}),(0,L.jsx)(m.Footer,{children:(0,L.jsxs)(m.Actions,{children:[(0,L.jsx)(l,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,L.jsx)(l,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},K={render:H,args:{backdrop:!0,children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(m.Header,{children:[(0,L.jsx)(m.Title,{children:`Basic Drawer`}),(0,L.jsx)(m.CloseTrigger,{})]}),(0,L.jsxs)(m.Body,{className:N.body,children:[(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{style:{minHeight:`300px`},variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]}),(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{style:{minHeight:`200px`},variant:`heading2`,className:N.sectionContent,children:`Out of scope section`}),(0,L.jsx)(s,{style:{minHeight:`500px`},variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]})]})]})},play:async({canvasElement:e})=>{let t=B(e),n=t.getByRole(`button`,{name:/open drawer/i});await z.click(n),await R(await t.findByRole(`dialog`)).toHaveAttribute(`data-state`,`open`);let r=e.querySelector(`[data-part="backdrop"]`);await R(r).toBeInTheDocument(),await R(r).toHaveAttribute(`data-state`,`open`)}},q={render:H,args:{position:`start`,children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(m.Header,{children:[(0,L.jsx)(m.Title,{children:`Basic Drawer`}),(0,L.jsx)(m.CloseTrigger,{})]}),(0,L.jsxs)(m.Body,{className:N.body,children:[(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]}),(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]})]})]})}},J={render:H,args:{columns:10,children:(0,L.jsxs)(L.Fragment,{children:[(0,L.jsxs)(m.Header,{children:[(0,L.jsx)(m.Title,{children:`Basic Drawer`}),(0,L.jsx)(m.CloseTrigger,{})]}),(0,L.jsxs)(m.Body,{className:N.bodyGrid,children:[(0,L.jsxs)(`div`,{style:{gridRow:`span 2`},className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]}),(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]}),(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]})]})]})}},Y={args:{columns:4},render:function(e){let[t,n]=(0,F.useState)(!1),[r,i]=(0,F.useState)(!1),o=()=>{i(!r)};return(0,L.jsxs)(`div`,{className:N.storyWrapper,children:[(0,L.jsx)(l,{onClick:()=>n(!0),children:`Open Drawer`}),(0,L.jsxs)(m,{...e,open:t,onOpenChange:n,columns:r?12:e.columns||4,children:[(0,L.jsxs)(m.Header,{children:[(0,L.jsx)(m.Title,{children:`Expandable Drawer`}),(0,L.jsxs)(`div`,{className:N.headerActions,children:[(0,L.jsx)(`button`,{className:N.expand,"aria-label":r?`Collapse`:`Expand`,onClick:o,children:(0,L.jsx)(a,{icon:r?`close_fullscreen`:`open_in_full`,size:`tiny`})}),(0,L.jsx)(`div`,{className:N.divider}),(0,L.jsx)(m.CloseTrigger,{})]})]}),(0,L.jsx)(m.Body,{className:N.body,children:(0,L.jsxs)(`div`,{className:N.section,children:[(0,L.jsx)(s,{className:N.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,L.jsx)(s,{variant:`heading2`,className:N.sectionContent,children:`Out of scope section`})]})})]})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X=[`Default`,`WithTabs`,`WithBackdropAndScroll`,`DockToStart`,`WithGridContent`,`ToggleFullSize`]}))();export{U as Default,q as DockToStart,Y as ToggleFullSize,K as WithBackdropAndScroll,J as WithGridContent,G as WithTabs,X as __namedExportsOrder,V as default};