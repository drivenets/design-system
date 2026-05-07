import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-vTeSIeRQ.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{t as a}from"./compiler-runtime-By_6jJKs.js";import{t as o}from"./ds-icon-DvL1_6M3.js";import{t as s}from"./ds-icon-BYblxjEo.js";import{n as c,t as l}from"./ds-typography-CjkZ0uou.js";import{n as u,t as d}from"./ds-button-BQuzUuBT.js";import{r as f}from"./ds-text-input.types-C7D8v6XF.js";import{t as p}from"./ds-text-input-CO0TaIYl.js";import{n as m,t as h}from"./ds-drawer-3eNfStBE.js";import{i as g,r as _,t as v}from"./ds-system-status.types-B9AQfQ0z.js";var y=t((()=>{g(),v()})),b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I=t((()=>{b=`_description_182po_1`,x=`_headerActions_182po_6`,S=`_expand_182po_10`,C=`_divider_182po_14`,w=`_tabs_182po_21`,T=`_tab_182po_21`,E=`_selected_182po_40`,D=`_body_182po_45`,O=`_bodyGrid_182po_50`,k=`_section_182po_56`,A=`_sectionHeader_182po_62`,j=`_sectionContent_182po_65`,M=`_storyWrapper_182po_75`,N=`_responsiveButtons_182po_79`,P=`_contentSection_182po_86`,F={description:b,headerActions:x,expand:S,divider:C,tabs:w,tab:T,selected:E,body:D,bodyGrid:O,section:k,sectionHeader:A,sectionContent:j,storyWrapper:M,responsiveButtons:N,contentSection:P}})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z;t((()=>{L=a(),R=e(n(),1),z=e(i(),1),m(),d(),p(),s(),y(),I(),l(),B=r(),V={title:`Components/Drawer`,component:h,parameters:{layout:`fullscreen`,docs:{description:{component:`
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `}}},argTypes:{columns:{control:{type:`select`},options:Array(12).fill(0).map((e,t)=>t+1),description:`Number of grid columns (1-12)`},position:{control:{type:`select`},options:[`start`,`end`],description:`Drawer position`},backdrop:{control:`boolean`,description:`Show backdrop overlay`},closeOnEscape:{control:`boolean`,description:`Close on escape key`},closeOnInteractOutside:{control:`boolean`,description:`Close when clicking outside`}}},H=e=>{let t=(0,L.c)(4),[n,r]=(0,R.useState)(!1),i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,B.jsx)(u,{onClick:()=>r(!0),children:`Open Drawer`}),t[0]=i):i=t[0];let a;return t[1]!==e||t[2]!==n?(a=(0,B.jsxs)(`div`,{className:F.storyWrapper,children:[i,(0,B.jsx)(h,{...e,open:n,onOpenChange:r,children:e.children})]}),t[1]=e,t[2]=n,t[3]=a):a=t[3],a},U={render:H,args:{children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsxs)(h.Title,{children:[`Default Drawer `,(0,B.jsx)(_,{status:`healthy`,label:`Active`})]}),(0,B.jsxs)(`div`,{className:F.headerActions,children:[(0,B.jsx)(`button`,{className:F.expand,"aria-label":`Expand`,children:(0,B.jsx)(o,{icon:`open_in_full`,size:`tiny`})}),(0,B.jsx)(`div`,{className:F.divider}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsx)(c,{className:F.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,B.jsxs)(h.Toolbar,{children:[(0,B.jsx)(f,{placeholder:`Search...`,style:{flex:1},slots:{startAdornment:(0,B.jsx)(o,{icon:`search`,size:`tiny`})}}),(0,B.jsx)(o,{icon:`filter_list`,size:`tiny`})]}),(0,B.jsxs)(h.Body,{className:F.body,children:[(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]}),(0,B.jsx)(h.Footer,{children:(0,B.jsxs)(h.Actions,{children:[(0,B.jsx)(u,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,B.jsx)(u,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},W=e=>{let t=(0,L.c)(5),{total:n}=e,r=n===void 0?4:n,[i,a]=(0,R.useState)(1),o;if(t[0]!==i||t[1]!==r){let e;t[3]===i?e=t[4]:(e=(e,t)=>(0,B.jsxs)(`button`,{type:`button`,className:(0,z.default)(F.tab,{[F.selected]:i===t}),onClick:()=>a(t),children:[`Tab item `,t+1]},t),t[3]=i,t[4]=e),o=(0,B.jsx)(`div`,{className:F.tabs,children:Array.from({length:r},e)}),t[0]=i,t[1]=r,t[2]=o}else o=t[2];return o},G={render:H,args:{columns:8,children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsxs)(h.Title,{children:[`Drawer with Tabs `,(0,B.jsx)(_,{status:`healthy`,label:`Active`})]}),(0,B.jsxs)(`div`,{className:F.headerActions,children:[(0,B.jsx)(`button`,{className:F.expand,"aria-label":`Expand`,children:(0,B.jsx)(o,{icon:`open_in_full`,size:`tiny`})}),(0,B.jsx)(`div`,{className:F.divider}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsx)(c,{className:F.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,B.jsxs)(h.Body,{className:F.body,children:[(0,B.jsx)(`div`,{style:{flex:0},className:F.section,children:(0,B.jsx)(W,{})}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]}),(0,B.jsx)(h.Footer,{children:(0,B.jsxs)(h.Actions,{children:[(0,B.jsx)(u,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,B.jsx)(u,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},K={render:H,args:{backdrop:!0,children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Basic Drawer`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsxs)(h.Body,{className:F.body,children:[(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{style:{minHeight:`300px`},variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{style:{minHeight:`200px`},variant:`heading2`,className:F.sectionContent,children:`Out of scope section`}),(0,B.jsx)(c,{style:{minHeight:`500px`},variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]})]})}},q={render:H,args:{position:`start`,children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Basic Drawer`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsxs)(h.Body,{className:F.body,children:[(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]})]})}},J={render:H,args:{columns:10,children:(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Basic Drawer`}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsxs)(h.Body,{className:F.bodyGrid,children:[(0,B.jsxs)(`div`,{style:{gridRow:`span 2`},className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]}),(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})]})]})}},Y={render:function(){let[e,t]=(0,R.useState)(null),n=()=>t(null),r=[{label:`3 cols → 4 on md`,columns:{lg:3,md:4}},{label:`4 cols → 6 on md`,columns:{lg:4,md:6}},{label:`5 cols → 6 on md`,columns:{lg:5,md:6}},{label:`6 cols → 10 on md`,columns:{lg:6,md:10}},{label:`8 cols → 10 on md`,columns:{lg:8,md:10}}];return(0,B.jsxs)(`div`,{className:F.storyWrapper,children:[(0,B.jsx)(c,{variant:`body-md-semi-bold`,children:`Resize the window below 1440 px to see the responsive column change.`}),(0,B.jsx)(`div`,{className:F.responsiveButtons,children:r.map(({label:e})=>(0,B.jsx)(u,{onClick:()=>t(e),children:e},e))}),r.map(({label:t,columns:r})=>(0,B.jsxs)(h,{open:e===t,onOpenChange:e=>!e&&n(),columns:r,children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:t}),(0,B.jsx)(h.CloseTrigger,{})]}),(0,B.jsx)(h.Body,{className:F.body,children:(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsxs)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:[`lg: `,r.lg,` columns · md: `,r.md,` columns`]}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Drawer content`})]})})]},t))]})}},X={args:{columns:4},render:function(e){let[t,n]=(0,R.useState)(!1),[r,i]=(0,R.useState)(!1),a=()=>{i(!r)};return(0,B.jsxs)(`div`,{className:F.storyWrapper,children:[(0,B.jsx)(u,{onClick:()=>n(!0),children:`Open Drawer`}),(0,B.jsxs)(h,{...e,open:t,onOpenChange:n,columns:r?12:e.columns||4,children:[(0,B.jsxs)(h.Header,{children:[(0,B.jsx)(h.Title,{children:`Expandable Drawer`}),(0,B.jsxs)(`div`,{className:F.headerActions,children:[(0,B.jsx)(`button`,{className:F.expand,"aria-label":r?`Collapse`:`Expand`,onClick:a,children:(0,B.jsx)(o,{icon:r?`close_fullscreen`:`open_in_full`,size:`tiny`})}),(0,B.jsx)(`div`,{className:F.divider}),(0,B.jsx)(h.CloseTrigger,{})]})]}),(0,B.jsx)(h.Body,{className:F.body,children:(0,B.jsxs)(`div`,{className:F.section,children:[(0,B.jsx)(c,{className:F.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,B.jsx)(c,{variant:`heading2`,className:F.sectionContent,children:`Out of scope section`})]})})]})]})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z=[`Default`,`WithTabs`,`WithBackdropAndScroll`,`DockToStart`,`WithGridContent`,`Responsive`,`ToggleFullSize`]}))();export{U as Default,q as DockToStart,Y as Responsive,X as ToggleFullSize,K as WithBackdropAndScroll,J as WithGridContent,G as WithTabs,Z as __namedExportsOrder,V as default};