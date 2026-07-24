import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Z as n,k as r}from"./iframe-Dirquu7f.js";import{t as i}from"./compiler-runtime-BZcW9aTb.js";import{t as a}from"./classnames-Dm_LJ4P4.js";import{t as o}from"./ds-icon-iSfTA2wU.js";import{t as s}from"./ds-icon-Gd1EqWzn.js";import{n as c,t as ee}from"./ds-typography-BKNO1HgS.js";import{r as l}from"./ds-text-input.types-DWfTbI9_.js";import{t as u}from"./ds-text-input-xf9m7QIp.js";import{n as d,t as f}from"./ds-button-00zxa8gT.js";import{n as p,t as m}from"./ds-drawer-BIxnNb64.js";import{i as te,r as h,t as ne}from"./ds-system-status.types-LabTsWIl.js";var re=e((()=>{te(),ne()})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M=e((()=>{g=`_description_182po_1`,_=`_headerActions_182po_6`,v=`_expand_182po_10`,y=`_divider_182po_14`,b=`_tabs_182po_21`,x=`_tab_182po_21`,S=`_selected_182po_40`,C=`_body_182po_45`,w=`_bodyGrid_182po_50`,T=`_section_182po_56`,E=`_sectionHeader_182po_62`,D=`_sectionContent_182po_65`,O=`_storyWrapper_182po_75`,k=`_responsiveButtons_182po_79`,A=`_contentSection_182po_86`,j={description:g,headerActions:_,expand:v,divider:y,tabs:b,tab:x,selected:S,body:C,bodyGrid:w,section:T,sectionHeader:E,sectionContent:D,storyWrapper:O,responsiveButtons:k,contentSection:A}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{N=i(),P=t(n(),1),F=t(a(),1),p(),f(),u(),s(),re(),M(),ee(),I=r(),{expect:L,fn:R,userEvent:z,waitFor:B,within:V}=__STORYBOOK_MODULE_TEST__,H={title:`Components/Drawer`,component:m,parameters:{layout:`fullscreen`,docs:{description:{component:`
A composable drawer component that supports:
- Grid-based sizing (1-12 columns)
- Start/end positioning
- Optional backdrop
- Flexible content layout (flex or grid)
- Compound components for structured content
        `}}},argTypes:{columns:{control:{type:`select`},options:Array(12).fill(0).map((e,t)=>t+1),description:`Number of grid columns (1-12)`},position:{control:{type:`select`},options:[`start`,`end`],description:`Drawer position`},backdrop:{control:`boolean`,description:`Show backdrop overlay`},closeOnEscape:{control:`boolean`,description:`Close on escape key`},closeOnInteractOutside:{control:`boolean`,description:`Close when clicking outside`},onOpenAutoFocus:{table:{disable:!0}}}},U=e=>{let t=(0,N.c)(4),[n,r]=(0,P.useState)(!1),i;t[0]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,I.jsx)(d,{onClick:()=>r(!0),children:`Open Drawer`}),t[0]=i):i=t[0];let a;return t[1]!==e||t[2]!==n?(a=(0,I.jsxs)(`div`,{className:j.storyWrapper,children:[i,(0,I.jsx)(m,{...e,open:n,onOpenChange:r,children:e.children})]}),t[1]=e,t[2]=n,t[3]=a):a=t[3],a},W={render:U,args:{children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(m.Header,{children:[(0,I.jsxs)(m.Title,{children:[`Default Drawer `,(0,I.jsx)(h,{status:`healthy`,label:`Active`})]}),(0,I.jsxs)(`div`,{className:j.headerActions,children:[(0,I.jsx)(`button`,{className:j.expand,"aria-label":`Expand`,children:(0,I.jsx)(o,{icon:`open_in_full`,size:`tiny`})}),(0,I.jsx)(`div`,{className:j.divider}),(0,I.jsx)(m.CloseTrigger,{})]}),(0,I.jsx)(c,{className:j.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,I.jsxs)(m.Toolbar,{children:[(0,I.jsx)(l,{placeholder:`Search...`,style:{flex:1},slots:{startAdornment:(0,I.jsx)(o,{icon:`search`,size:`tiny`})}}),(0,I.jsx)(o,{icon:`filter_list`,size:`tiny`})]}),(0,I.jsxs)(m.Body,{className:j.body,children:[(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]}),(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]})]}),(0,I.jsx)(m.Footer,{children:(0,I.jsxs)(m.Actions,{children:[(0,I.jsx)(d,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,I.jsx)(d,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},G=e=>{let t=(0,N.c)(5),{total:n}=e,r=n===void 0?4:n,[i,a]=(0,P.useState)(1),o;if(t[0]!==i||t[1]!==r){let e;t[3]===i?e=t[4]:(e=(e,t)=>(0,I.jsxs)(`button`,{type:`button`,className:(0,F.default)(j.tab,{[j.selected]:i===t}),onClick:()=>a(t),children:[`Tab item `,t+1]},t),t[3]=i,t[4]=e),o=(0,I.jsx)(`div`,{className:j.tabs,children:Array.from({length:r},e)}),t[0]=i,t[1]=r,t[2]=o}else o=t[2];return o},K={render:U,args:{columns:8,children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(m.Header,{children:[(0,I.jsxs)(m.Title,{children:[`Drawer with Tabs `,(0,I.jsx)(h,{status:`healthy`,label:`Active`})]}),(0,I.jsxs)(`div`,{className:j.headerActions,children:[(0,I.jsx)(`button`,{className:j.expand,"aria-label":`Expand`,children:(0,I.jsx)(o,{icon:`open_in_full`,size:`tiny`})}),(0,I.jsx)(`div`,{className:j.divider}),(0,I.jsx)(m.CloseTrigger,{})]}),(0,I.jsx)(c,{className:j.description,variant:`body-xs-reg`,children:`This is a description caption under a title.`})]}),(0,I.jsxs)(m.Body,{className:j.body,children:[(0,I.jsx)(`div`,{style:{flex:0},className:j.section,children:(0,I.jsx)(G,{})}),(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]})]}),(0,I.jsx)(m.Footer,{children:(0,I.jsxs)(m.Actions,{children:[(0,I.jsx)(d,{design:`v1.2`,buttonType:`tertiary`,size:`large`,children:`Cancel`}),(0,I.jsx)(d,{design:`v1.2`,size:`large`,children:`Save`})]})})]})}},q={render:U,args:{backdrop:!0,children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(m.Header,{children:[(0,I.jsx)(m.Title,{children:`Basic Drawer`}),(0,I.jsx)(m.CloseTrigger,{})]}),(0,I.jsxs)(m.Body,{className:j.body,children:[(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{style:{minHeight:`300px`},variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]}),(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{style:{minHeight:`200px`},variant:`heading2`,className:j.sectionContent,children:`Out of scope section`}),(0,I.jsx)(c,{style:{minHeight:`500px`},variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]})]})]})}},J={render:U,args:{position:`start`,children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(m.Header,{children:[(0,I.jsx)(m.Title,{children:`Basic Drawer`}),(0,I.jsx)(m.CloseTrigger,{})]}),(0,I.jsxs)(m.Body,{className:j.body,children:[(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]}),(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]})]})]})}},Y={render:U,args:{columns:10,children:(0,I.jsxs)(I.Fragment,{children:[(0,I.jsxs)(m.Header,{children:[(0,I.jsx)(m.Title,{children:`Basic Drawer`}),(0,I.jsx)(m.CloseTrigger,{})]}),(0,I.jsxs)(m.Body,{className:j.bodyGrid,children:[(0,I.jsxs)(`div`,{style:{gridRow:`span 2`},className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]}),(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]}),(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]})]})]})}},X={render:function(){let[e,t]=(0,P.useState)(null),n=()=>t(null),r=[{label:`3 cols → 4 on md`,columns:{lg:3,md:4}},{label:`4 cols → 6 on md`,columns:{lg:4,md:6}},{label:`5 cols → 6 on md`,columns:{lg:5,md:6}},{label:`6 cols → 10 on md`,columns:{lg:6,md:10}},{label:`8 cols → 10 on md`,columns:{lg:8,md:10}}];return(0,I.jsxs)(`div`,{className:j.storyWrapper,children:[(0,I.jsx)(c,{variant:`body-md-semi-bold`,children:`Resize the window below 1440 px to see the responsive column change.`}),(0,I.jsx)(`div`,{className:j.responsiveButtons,children:r.map(({label:e})=>(0,I.jsx)(d,{onClick:()=>t(e),children:e},e))}),r.map(({label:t,columns:r})=>(0,I.jsxs)(m,{open:e===t,onOpenChange:e=>!e&&n(),columns:r,children:[(0,I.jsxs)(m.Header,{children:[(0,I.jsx)(m.Title,{children:t}),(0,I.jsx)(m.CloseTrigger,{})]}),(0,I.jsx)(m.Body,{className:j.body,children:(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsxs)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:[`lg: `,r.lg,` columns · md: `,r.md,` columns`]}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Drawer content`})]})})]},t))]})}},Z={args:{columns:4},render:function(e){let[t,n]=(0,P.useState)(!1),[r,i]=(0,P.useState)(!1),a=()=>{i(!r)};return(0,I.jsxs)(`div`,{className:j.storyWrapper,children:[(0,I.jsx)(d,{onClick:()=>n(!0),children:`Open Drawer`}),(0,I.jsxs)(m,{...e,open:t,onOpenChange:n,columns:r?12:e.columns||4,children:[(0,I.jsxs)(m.Header,{children:[(0,I.jsx)(m.Title,{children:`Expandable Drawer`}),(0,I.jsxs)(`div`,{className:j.headerActions,children:[(0,I.jsx)(`button`,{className:j.expand,"aria-label":r?`Collapse`:`Expand`,onClick:a,children:(0,I.jsx)(o,{icon:r?`close_fullscreen`:`open_in_full`,size:`tiny`})}),(0,I.jsx)(`div`,{className:j.divider}),(0,I.jsx)(m.CloseTrigger,{})]})]}),(0,I.jsx)(m.Body,{className:j.body,children:(0,I.jsxs)(`div`,{className:j.section,children:[(0,I.jsx)(c,{className:j.sectionHeader,variant:`body-md-semi-bold`,children:`Drawer content header`}),(0,I.jsx)(c,{variant:`heading2`,className:j.sectionContent,children:`Out of scope section`})]})})]})]})}},Q={args:{onOpenAutoFocus:R(e=>e.preventDefault())},render:function(e){let[t,n]=(0,P.useState)(``);return(0,I.jsxs)(`div`,{className:j.storyWrapper,children:[(0,I.jsx)(l,{placeholder:`Start typing to open the drawer`,value:t,onValueChange:n,slots:{startAdornment:(0,I.jsx)(o,{icon:`search`,size:`tiny`})}}),(0,I.jsxs)(m,{...e,open:t.length>0,onOpenChange:e=>!e&&n(``),children:[(0,I.jsxs)(m.Header,{children:[(0,I.jsx)(m.Title,{children:`Suggestions`}),(0,I.jsx)(m.CloseTrigger,{})]}),(0,I.jsx)(m.Body,{className:j.body,children:(0,I.jsx)(c,{variant:`body-md-reg`,children:`Focus stayed in the input — keep typing without losing your place.`})})]})]})},play:async({canvasElement:e,args:t})=>{let n=V(e),r=n.getByPlaceholderText(/start typing/i);await z.type(r,`hello`),await B(()=>L(n.getByRole(`dialog`)).toBeVisible()),await B(()=>L(r).toHaveFocus()),await L(t.onOpenAutoFocus).toHaveBeenCalled()}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    onOpenAutoFocus: fn((event: Event) => event.preventDefault())
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
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText(/start typing/i);
    await userEvent.type(input, 'hello');
    await waitFor(() => expect(canvas.getByRole('dialog')).toBeVisible());
    await waitFor(() => expect(input).toHaveFocus());
    await expect(args.onOpenAutoFocus).toHaveBeenCalled();
  }
}`,...Q.parameters?.docs?.source},description:{story:"On open the drawer normally focuses its first element. Pass `onOpenAutoFocus`\nand call `event.preventDefault()` to keep the caret in the field that opened the\ndrawer — useful for search / type-ahead patterns where the drawer behaves like a\npopover anchored to an input.",...Q.parameters?.docs?.description}}},$=[`Default`,`WithTabs`,`WithBackdropAndScroll`,`DockToStart`,`WithGridContent`,`Responsive`,`ToggleFullSize`,`PreventOpenAutoFocus`]}))();export{W as Default,J as DockToStart,Q as PreventOpenAutoFocus,X as Responsive,Z as ToggleFullSize,q as WithBackdropAndScroll,Y as WithGridContent,K as WithTabs,$ as __namedExportsOrder,H as default};