import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-QkixVkJV.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{t as a}from"./compiler-runtime-CWmqedMz.js";import{i as o}from"./ds-icon.types-DCAr7wyU.js";import{t as s}from"./ds-icon-ChkUkfY1.js";import{t as c}from"./ds-typography-DFcQY9e9.js";import{t as l}from"./ds-typography-DTfLnt5n.js";import{n as u,t as d}from"./ds-button-BuVBrV5q.js";import{r as f}from"./ds-text-input.types-GZCLTflQ.js";import{t as p}from"./ds-text-input-GS03sGJb.js";import{n as m,t as h}from"./ds-drawer-cd0NXEtS.js";import{i as g,r as _,t as v}from"./ds-system-status.types-GPgSlOAt.js";var y=t((()=>{g(),v()})),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{b=`_description_2y6uq_1`,x=`_headerActions_2y6uq_6`,S=`_expand_2y6uq_10`,C=`_divider_2y6uq_14`,w=`_tabs_2y6uq_21`,T=`_tab_2y6uq_21`,E=`_selected_2y6uq_40`,D=`_body_2y6uq_45`,O=`_bodyGrid_2y6uq_50`,k=`_section_2y6uq_56`,A=`_sectionHeader_2y6uq_62`,j=`_sectionContent_2y6uq_65`,M=`_storyWrapper_2y6uq_75`,N=`_contentSection_2y6uq_79`,P={description:b,headerActions:x,expand:S,divider:C,tabs:w,tab:T,selected:E,body:D,bodyGrid:O,section:k,sectionHeader:A,sectionContent:j,storyWrapper:M,contentSection:N}})),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q;t((()=>{I=a(),L=e(n(),1),R=e(i(),1),m(),d(),p(),s(),y(),F(),l(),z=r(),{expect:B,userEvent:V,within:H}=__STORYBOOK_MODULE_TEST__,U={title:`Design System/Drawer`,component:h,parameters:{layout:`fullscreen`,docs:{description:{component:`
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `}}},argTypes:{columns:{control:{type:`select`},options:Array(12).fill(0).map((e,t)=>t+1),description:`Number of grid columns (1-12)`},position:{control:{type:`select`},options:[`start`,`end`],description:`Drawer position`},backdrop:{control:`boolean`,description:`Show backdrop overlay`},closeOnEscape:{control:`boolean`,description:`Close on escape key`},closeOnInteractOutside:{control:`boolean`,description:`Close when clicking outside`}}},W=e=>{let t=(0,I.c)(4),[n,r]=(0,L.useState)(!1),i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,z.jsx)(u,{onClick:()=>r(!0),children:`Open Drawer`}),t[0]=i):i=t[0];let a;return t[1]!==e||t[2]!==n?(a=(0,z.jsxs)(`div`,{className:P.storyWrapper,children:[i,(0,z.jsx)(h,{...e,open:n,onOpenChange:r,children:e.children})]}),t[1]=e,t[2]=n,t[3]=a):a=t[3],a},G={render:W,args:{children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(h.Header,{children:[(0,z.jsxs)(h.Title,{children:[`Default Drawer `,(0,z.jsx)(_,{status:`healthy`,label:`Active`})]}),(0,z.jsxs)(`div`,{className:P.headerActions,children:[(0,z.jsx)(`button`,{className:P.expand,"aria-label":`Expand`,children:(0,z.jsx)(o,{icon:`open_in_full`,size:`tiny`})}),(0,z.jsx)(`div`,{className:P.divider}),(0,z.jsx)(h.CloseTrigger,{})]}),(0,z.jsx)(c,{className:P.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,z.jsxs)(h.Toolbar,{children:[(0,z.jsx)(f,{placeholder:`Search...`,style:{flex:1},slots:{startAdornment:(0,z.jsx)(o,{icon:`search`,size:`tiny`})}}),(0,z.jsx)(o,{icon:`filter_list`,size:`tiny`})]}),(0,z.jsxs)(h.Body,{className:P.body,children:[(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]}),(0,z.jsx)(h.Footer,{children:(0,z.jsxs)(h.Actions,{children:[(0,z.jsx)(u,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,z.jsx)(u,{design:`v1.2`,size:`large`,children:`Save`})]})})]})},play:async({canvasElement:e})=>{let t=H(e),n=t.getByRole(`button`,{name:/open drawer/i});await V.click(n);let r=await t.findByRole(`dialog`);await B(r).toHaveAttribute(`data-state`,`open`);let i=t.getByRole(`button`,{name:/close/i});await V.click(i),await B(r).toHaveAttribute(`data-state`,`closed`)}},K=e=>{let t=(0,I.c)(5),{total:n}=e,r=n===void 0?4:n,[i,a]=(0,L.useState)(1),o;if(t[0]!==i||t[1]!==r){let e;t[3]===i?e=t[4]:(e=(e,t)=>(0,z.jsxs)(`button`,{type:`button`,className:(0,R.default)(P.tab,{[P.selected]:i===t}),onClick:()=>a(t),children:[`Tab item `,t+1]},t),t[3]=i,t[4]=e),o=(0,z.jsx)(`div`,{className:P.tabs,children:Array.from({length:r},e)}),t[0]=i,t[1]=r,t[2]=o}else o=t[2];return o},q={render:W,args:{columns:8,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(h.Header,{children:[(0,z.jsxs)(h.Title,{children:[`Drawer with Tabs `,(0,z.jsx)(_,{status:`healthy`,label:`Active`})]}),(0,z.jsxs)(`div`,{className:P.headerActions,children:[(0,z.jsx)(`button`,{className:P.expand,"aria-label":`Expand`,children:(0,z.jsx)(o,{icon:`open_in_full`,size:`tiny`})}),(0,z.jsx)(`div`,{className:P.divider}),(0,z.jsx)(h.CloseTrigger,{})]}),(0,z.jsx)(c,{className:P.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,z.jsxs)(h.Body,{className:P.body,children:[(0,z.jsx)(`div`,{style:{flex:0},className:P.section,children:(0,z.jsx)(K,{})}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]}),(0,z.jsx)(h.Footer,{children:(0,z.jsxs)(h.Actions,{children:[(0,z.jsx)(u,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,z.jsx)(u,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},J={render:W,args:{backdrop:!0,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(h.Header,{children:[(0,z.jsx)(h.Title,{children:`Basic Drawer`}),(0,z.jsx)(h.CloseTrigger,{})]}),(0,z.jsxs)(h.Body,{className:P.body,children:[(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{style:{minHeight:`300px`},variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{style:{minHeight:`200px`},variant:`heading2`,className:P.sectionContent,children:`Out of scope section`}),(0,z.jsx)(c,{style:{minHeight:`500px`},variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]})]})},play:async({canvasElement:e})=>{let t=H(e),n=t.getByRole(`button`,{name:/open drawer/i});await V.click(n),await B(await t.findByRole(`dialog`)).toHaveAttribute(`data-state`,`open`);let r=e.querySelector(`[data-part="backdrop"]`);await B(r).toBeInTheDocument(),await B(r).toHaveAttribute(`data-state`,`open`)}},Y={render:W,args:{position:`start`,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(h.Header,{children:[(0,z.jsx)(h.Title,{children:`Basic Drawer`}),(0,z.jsx)(h.CloseTrigger,{})]}),(0,z.jsxs)(h.Body,{className:P.body,children:[(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]})]})}},X={render:W,args:{columns:10,children:(0,z.jsxs)(z.Fragment,{children:[(0,z.jsxs)(h.Header,{children:[(0,z.jsx)(h.Title,{children:`Basic Drawer`}),(0,z.jsx)(h.CloseTrigger,{})]}),(0,z.jsxs)(h.Body,{className:P.bodyGrid,children:[(0,z.jsxs)(`div`,{style:{gridRow:`span 2`},className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]}),(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})]})]})}},Z={args:{columns:4},render:function(e){let[t,n]=(0,L.useState)(!1),[r,i]=(0,L.useState)(!1),a=()=>{i(!r)};return(0,z.jsxs)(`div`,{className:P.storyWrapper,children:[(0,z.jsx)(u,{onClick:()=>n(!0),children:`Open Drawer`}),(0,z.jsxs)(h,{...e,open:t,onOpenChange:n,columns:r?12:e.columns||4,children:[(0,z.jsxs)(h.Header,{children:[(0,z.jsx)(h.Title,{children:`Expandable Drawer`}),(0,z.jsxs)(`div`,{className:P.headerActions,children:[(0,z.jsx)(`button`,{className:P.expand,"aria-label":r?`Collapse`:`Expand`,onClick:a,children:(0,z.jsx)(o,{icon:r?`close_fullscreen`:`open_in_full`,size:`tiny`})}),(0,z.jsx)(`div`,{className:P.divider}),(0,z.jsx)(h.CloseTrigger,{})]})]}),(0,z.jsx)(h.Body,{className:P.body,children:(0,z.jsxs)(`div`,{className:P.section,children:[(0,z.jsx)(c,{className:P.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,z.jsx)(c,{variant:`heading2`,className:P.sectionContent,children:`Out of scope section`})]})})]})]})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q=[`Default`,`WithTabs`,`WithBackdropAndScroll`,`DockToStart`,`WithGridContent`,`ToggleFullSize`]}))();export{G as Default,Y as DockToStart,Z as ToggleFullSize,J as WithBackdropAndScroll,X as WithGridContent,q as WithTabs,Q as __namedExportsOrder,U as default};