import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./classnames-Cm4Wq5Eu.js";import{r as a,t as o}from"./responsive-DnaQwpSq.js";import{n as s,t as c}from"./ds-button-v3-BnV8s8Ko.js";import{n as l,t as u}from"./ds-stack-GU0hZWeR.js";var d,f,p,m,h=t((()=>{d=e(i(),1),f=r(),p=({children:e,columns:t,rows:n,gutter:r,margin:i,className:a,style:o})=>{let s=(0,d.default)(`ds-grid`,{[`ds-grid-cols-${String(t)}`]:t,[`ds-grid-rows-${String(n)}`]:n},a),c={};return r!==void 0&&(c[`--ds-grid-gutter`]=typeof r==`number`?`${String(r)}px`:r),i!==void 0&&(c[`--ds-grid-margin`]=typeof i==`number`?`${String(i)}px`:i),(0,f.jsx)(`div`,{className:s,style:{...o,...c},children:e})},m=({children:e,colSpan:t,colStart:n,rowSpan:r,rowStart:i,className:a})=>(0,f.jsx)(`div`,{className:(0,d.default)({[`ds-grid-col-span-${String(t)}`]:t,[`ds-grid-col-start-${String(n)}`]:n,[`ds-grid-row-span-${String(r)}`]:r,[`ds-grid-row-start-${String(i)}`]:i},a),children:e}),p.__docgenInfo={description:``,methods:[],displayName:`DsGridBase`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},rows:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 4 | 6 | 8`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`4`},{name:`literal`,value:`6`},{name:`literal`,value:`8`}]},description:`Number of rows in the grid (defaults to 1)`},columns:{required:!1,tsType:{name:`union`,raw:`2 | 4 | 6 | 8 | 10 | 12`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`4`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`},{name:`literal`,value:`12`}]},description:`Number of columns in the grid (defaults to 12)`},gutter:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:'Gap between grid cells.\nA number is treated as px. A string is used as-is (e.g. `"1rem"`, `"var(--grid-gutter)"`).\nCSS default (when omitted): `16px` — set by `$gutter` in `_grid-variables.scss`.'},margin:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:'Padding around the grid container.\nA number is treated as px (uniform). A string is used as-is (e.g. `"16px 20px"`, `"var(--grid-margin)"`).\nCSS default (when omitted): `16px 20px` — set by `$margin-y $margin-x` in `_grid-variables.scss`.'},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},m.__docgenInfo={description:``,methods:[],displayName:`DsGridItemBase`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},colSpan:{required:!1,tsType:{name:`union`,raw:`number | 'full'`,elements:[{name:`number`},{name:`literal`,value:`'full'`}]},description:`Number of columns the item spans (1-12) or 'full'`},colStart:{required:!1,tsType:{name:`number`},description:`Starting column for the item (1-11)`},rowSpan:{required:!1,tsType:{name:`union`,raw:`number | 'full'`,elements:[{name:`number`},{name:`literal`,value:`'full'`}]},description:`Number of rows the item spans (1-8) or 'full'`},rowStart:{required:!1,tsType:{name:`number`},description:`Starting row for the item (1-7)`},className:{required:!1,tsType:{name:`string`},description:``}}}})),g,_,v=t((()=>{o(),h(),g=a(p,[`gutter`,`margin`]),_=a(m,[`colSpan`,`rowSpan`]),g.displayName=`DsGrid`,_.displayName=`DsGridItem`})),y,b,x,S,C,w,T,E,D,O,k,A,j=t((()=>{y=`_myGrid_1w9zq_1`,b=`_card_1w9zq_5`,x=`_navigationGrid_1w9zq_13`,S=`_layout_1w9zq_17`,C=`_header_1w9zq_21`,w=`_logo_1w9zq_25`,T=`_title_1w9zq_30`,E=`_main_1w9zq_35`,D=`_sidebar_1w9zq_39`,O=`_collapsed_1w9zq_45`,k=`_contentWrapper_1w9zq_49`,A={myGrid:y,card:b,navigationGrid:x,layout:S,header:C,logo:w,title:T,main:E,sidebar:D,collapsed:O,contentWrapper:k}})),M,N,P,F,I,L,R,z;t((()=>{M=e(n(),1),N=e(i(),1),v(),s(),l(),j(),P=r(),F={title:`Components/Grid`,component:g,subcomponents:{DsGridItem:_},argTypes:{rows:{control:`select`,description:`Number of rows in the grid. Can be 2, 4, 6, or 8. Defaults to 8 if not specified.`,options:[2,4,6,8]},children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}}},I={args:{className:A.myGrid,rows:6},render:e=>(0,P.jsxs)(g,{...e,children:[(0,P.jsx)(_,{className:A.card,colSpan:4,children:(0,P.jsx)(`div`,{children:`Element 1`})}),(0,P.jsx)(_,{className:A.card,colSpan:4,rowSpan:2,children:(0,P.jsx)(`div`,{children:`Element 2`})}),(0,P.jsx)(_,{className:A.card,colSpan:4,rowSpan:2,children:(0,P.jsx)(`div`,{children:`Element 3`})}),(0,P.jsx)(_,{className:A.card,colSpan:4,rowSpan:2,children:(0,P.jsx)(`div`,{children:`Element 4`})}),(0,P.jsx)(_,{className:A.card,colSpan:4,rowSpan:2,rowStart:5,colStart:2,children:(0,P.jsx)(`div`,{children:`Element 5`})})]})},L={args:{className:A.myGrid,gutter:{lg:16,md:8},margin:{lg:`16px 20px`,md:8},rows:4},render:e=>(0,P.jsxs)(g,{...e,children:[(0,P.jsx)(_,{className:A.card,colSpan:{lg:4,md:6},children:(0,P.jsx)(`div`,{children:`Card 1 — lg:4 md:6`})}),(0,P.jsx)(_,{className:A.card,colSpan:{lg:4,md:6},children:(0,P.jsx)(`div`,{children:`Card 2 — lg:4 md:6`})}),(0,P.jsx)(_,{className:A.card,colSpan:{lg:4,md:12},children:(0,P.jsx)(`div`,{children:`Card 3 — lg:4 md:12`})}),(0,P.jsx)(_,{className:A.card,colSpan:{lg:6,md:12},rowSpan:{lg:2,md:1},children:(0,P.jsx)(`div`,{children:`Card 4 — lg:6×2 md:12×1`})}),(0,P.jsx)(_,{className:A.card,colSpan:{lg:6,md:12},children:(0,P.jsx)(`div`,{children:`Card 5 — lg:6 md:12`})})]})},R={parameters:{docs:{source:{type:`code`}}},args:{className:A.navigationGrid,rows:4},render:function(e){let[t,n]=(0,M.useState)(!1);return(0,P.jsxs)(u,{direction:`column`,className:A.layout,children:[(0,P.jsxs)(u,{direction:`row`,className:A.header,children:[(0,P.jsx)(u,{alignItems:`center`,justifyContent:`center`,className:A.logo,children:(0,P.jsx)(c,{variant:`secondary`,size:`small`,onClick:()=>n(!t),children:`Toggle`})}),(0,P.jsx)(`div`,{className:A.title})]}),(0,P.jsxs)(u,{direction:`row`,className:A.main,children:[(0,P.jsx)(`div`,{className:(0,N.default)(A.sidebar,{[A.collapsed]:t})}),(0,P.jsx)(u,{direction:`column`,className:A.contentWrapper,children:(0,P.jsxs)(g,{...e,children:[(0,P.jsx)(_,{className:A.card,colSpan:4,children:(0,P.jsx)(`div`,{children:`Dashboard Card 1`})}),(0,P.jsx)(_,{className:A.card,colSpan:4,children:(0,P.jsx)(`div`,{children:`Dashboard Card 2`})}),(0,P.jsx)(_,{className:A.card,colSpan:4,children:(0,P.jsx)(`div`,{children:`Dashboard Card 3`})}),(0,P.jsx)(_,{className:A.card,colSpan:6,children:(0,P.jsx)(`div`,{children:`Dashboard Card 4`})}),(0,P.jsx)(_,{className:A.card,colSpan:6,children:(0,P.jsx)(`div`,{children:`Dashboard Card 5`})})]})})]})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.myGrid,
    rows: 6
  },
  render: args => <DsGrid {...args}>
            <DsGridItem className={styles.card} colSpan={4}>
                <div>Element 1</div>
            </DsGridItem>
            <DsGridItem className={styles.card} colSpan={4} rowSpan={2}>
                <div>Element 2</div>
            </DsGridItem>
            <DsGridItem className={styles.card} colSpan={4} rowSpan={2}>
                <div>Element 3</div>
            </DsGridItem>
            <DsGridItem className={styles.card} colSpan={4} rowSpan={2}>
                <div>Element 4</div>
            </DsGridItem>
            <DsGridItem className={styles.card} colSpan={4} rowSpan={2} rowStart={5} colStart={2}>
                <div>Element 5</div>
            </DsGridItem>
        </DsGrid>
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.myGrid,
    gutter: {
      lg: 16,
      md: 8
    },
    margin: {
      lg: '16px 20px',
      md: 8
    },
    rows: 4
  },
  render: args => <DsGrid {...args}>
            <DsGridItem className={styles.card} colSpan={{
      lg: 4,
      md: 6
    }}>
                <div>Card 1 — lg:4 md:6</div>
            </DsGridItem>
            <DsGridItem className={styles.card} colSpan={{
      lg: 4,
      md: 6
    }}>
                <div>Card 2 — lg:4 md:6</div>
            </DsGridItem>
            <DsGridItem className={styles.card} colSpan={{
      lg: 4,
      md: 12
    }}>
                <div>Card 3 — lg:4 md:12</div>
            </DsGridItem>
            <DsGridItem className={styles.card} colSpan={{
      lg: 6,
      md: 12
    }} rowSpan={{
      lg: 2,
      md: 1
    }}>
                <div>Card 4 — lg:6×2 md:12×1</div>
            </DsGridItem>
            <DsGridItem className={styles.card} colSpan={{
      lg: 6,
      md: 12
    }}>
                <div>Card 5 — lg:6 md:12</div>
            </DsGridItem>
        </DsGrid>
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  args: {
    className: styles.navigationGrid,
    rows: 4
  },
  render: function Render(args) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return <DsStack direction="column" className={styles.layout}>
                <DsStack direction="row" className={styles.header}>
                    <DsStack alignItems="center" justifyContent="center" className={styles.logo}>
                        <DsButtonV3 variant="secondary" size="small" onClick={() => setIsCollapsed(!isCollapsed)}>
                            Toggle
                        </DsButtonV3>
                    </DsStack>
                    <div className={styles.title} />
                </DsStack>
                <DsStack direction="row" className={styles.main}>
                    <div className={classNames(styles.sidebar, {
          [styles.collapsed]: isCollapsed
        })} />
                    <DsStack direction="column" className={styles.contentWrapper}>
                        <DsGrid {...args}>
                            <DsGridItem className={styles.card} colSpan={4}>
                                <div>Dashboard Card 1</div>
                            </DsGridItem>
                            <DsGridItem className={styles.card} colSpan={4}>
                                <div>Dashboard Card 2</div>
                            </DsGridItem>
                            <DsGridItem className={styles.card} colSpan={4}>
                                <div>Dashboard Card 3</div>
                            </DsGridItem>
                            <DsGridItem className={styles.card} colSpan={6}>
                                <div>Dashboard Card 4</div>
                            </DsGridItem>
                            <DsGridItem className={styles.card} colSpan={6}>
                                <div>Dashboard Card 5</div>
                            </DsGridItem>
                        </DsGrid>
                    </DsStack>
                </DsStack>
            </DsStack>;
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`Responsive`,`NavigationLayout`]}))();export{I as Default,R as NavigationLayout,L as Responsive,z as __namedExportsOrder,F as default};