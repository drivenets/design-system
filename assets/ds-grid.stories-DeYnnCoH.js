import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DjGGxKH_.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./classnames-DN2IqHsz.js";import{n as a,t as o}from"./ds-button-bewspj1_.js";import{r as s,t as c}from"./responsive-BRUB8zlL.js";var l,u,d,f,p=t((()=>{l=e(i(),1),u=r(),d=({children:e,columns:t,rows:n,gutter:r,margin:i,className:a,style:o})=>{let s=(0,l.default)(`ds-grid`,{[`ds-grid-cols-${String(t)}`]:t,[`ds-grid-rows-${String(n)}`]:n},a),c={};return r!==void 0&&(c[`--ds-grid-gutter`]=typeof r==`number`?`${String(r)}px`:r),i!==void 0&&(c[`--ds-grid-margin`]=typeof i==`number`?`${String(i)}px`:i),(0,u.jsx)(`div`,{className:s,style:{...o,...c},children:e})},f=({children:e,colSpan:t,colStart:n,rowSpan:r,rowStart:i,className:a})=>(0,u.jsx)(`div`,{className:(0,l.default)({[`ds-grid-col-span-${String(t)}`]:t,[`ds-grid-col-start-${String(n)}`]:n,[`ds-grid-row-span-${String(r)}`]:r,[`ds-grid-row-start-${String(i)}`]:i},a),children:e}),d.__docgenInfo={description:``,methods:[],displayName:`DsGridBase`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},rows:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 4 | 6 | 8`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`4`},{name:`literal`,value:`6`},{name:`literal`,value:`8`}]},description:`Number of rows in the grid (defaults to 1)`},columns:{required:!1,tsType:{name:`union`,raw:`2 | 4 | 6 | 8 | 10 | 12`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`4`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`},{name:`literal`,value:`12`}]},description:`Number of columns in the grid (defaults to 12)`},gutter:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:'Gap between grid cells.\nA number is treated as px. A string is used as-is (e.g. `"1rem"`, `"var(--grid-gutter)"`).\nCSS default (when omitted): `16px` — set by `$gutter` in `_grid-variables.scss`.'},margin:{required:!1,tsType:{name:`union`,raw:`number | string`,elements:[{name:`number`},{name:`string`}]},description:'Padding around the grid container.\nA number is treated as px (uniform). A string is used as-is (e.g. `"16px 20px"`, `"var(--grid-margin)"`).\nCSS default (when omitted): `16px 20px` — set by `$margin-y $margin-x` in `_grid-variables.scss`.'},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}},f.__docgenInfo={description:``,methods:[],displayName:`DsGridItemBase`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:``},colSpan:{required:!1,tsType:{name:`union`,raw:`number | 'full'`,elements:[{name:`number`},{name:`literal`,value:`'full'`}]},description:`Number of columns the item spans (1-12) or 'full'`},colStart:{required:!1,tsType:{name:`number`},description:`Starting column for the item (1-11)`},rowSpan:{required:!1,tsType:{name:`union`,raw:`number | 'full'`,elements:[{name:`number`},{name:`literal`,value:`'full'`}]},description:`Number of rows the item spans (1-8) or 'full'`},rowStart:{required:!1,tsType:{name:`number`},description:`Starting row for the item (1-7)`},className:{required:!1,tsType:{name:`string`},description:``}}}})),m,h,g=t((()=>{c(),p(),m=s(d,[`gutter`,`margin`]),h=s(f,[`colSpan`,`rowSpan`])})),_=t((()=>{})),v,y,b,x,S,C,w;t((()=>{v=e(n(),1),g(),o(),_(),y=r(),b={title:`Components/Grid`,component:m,subcomponents:{DsGridItem:h},argTypes:{children:{control:`text`,description:`The content to be rendered inside the grid`},rows:{control:`select`,description:`Number of rows in the grid. Can be 2, 4, 6, or 8. Defaults to 8 if not specified.`,options:[2,4,6,8]},className:{control:`text`,description:`Custom class names to apply to the grid container`}}},x={args:{className:`my-grid`,children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{className:`card`,colSpan:4,children:(0,y.jsx)(`div`,{children:`Element 1`})}),(0,y.jsx)(h,{className:`card`,colSpan:4,rowSpan:2,children:(0,y.jsx)(`div`,{children:`Element 2`})}),(0,y.jsx)(h,{className:`card`,colSpan:4,rowSpan:2,children:(0,y.jsx)(`div`,{children:`Element 3`})}),(0,y.jsx)(h,{className:`card`,colSpan:4,rowSpan:2,children:(0,y.jsx)(`div`,{children:`Element 4`})}),(0,y.jsx)(h,{className:`card`,colSpan:4,rowSpan:2,rowStart:5,colStart:2,children:(0,y.jsx)(`div`,{children:`Element 4`})})]}),rows:6}},S={args:{className:`my-grid`,gutter:{lg:16,md:8},margin:{lg:`16px 20px`,md:8},children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{className:`card`,colSpan:{lg:4,md:6},children:(0,y.jsx)(`div`,{children:`Card 1 — lg:4 md:6`})}),(0,y.jsx)(h,{className:`card`,colSpan:{lg:4,md:6},children:(0,y.jsx)(`div`,{children:`Card 2 — lg:4 md:6`})}),(0,y.jsx)(h,{className:`card`,colSpan:{lg:4,md:12},children:(0,y.jsx)(`div`,{children:`Card 3 — lg:4 md:12`})}),(0,y.jsx)(h,{className:`card`,colSpan:{lg:6,md:12},rowSpan:{lg:2,md:1},children:(0,y.jsx)(`div`,{children:`Card 4 — lg:6×2 md:12×1`})}),(0,y.jsx)(h,{className:`card`,colSpan:{lg:6,md:12},children:(0,y.jsx)(`div`,{children:`Card 5 — lg:6 md:12`})})]}),rows:4}},C={args:{className:`navigation-grid`,children:(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(h,{className:`card`,colSpan:4,children:(0,y.jsx)(`div`,{children:`Dashboard Card 1`})}),(0,y.jsx)(h,{className:`card`,colSpan:4,children:(0,y.jsx)(`div`,{children:`Dashboard Card 2`})}),(0,y.jsx)(h,{className:`card`,colSpan:4,children:(0,y.jsx)(`div`,{children:`Dashboard Card 3`})}),(0,y.jsx)(h,{className:`card`,colSpan:6,children:(0,y.jsx)(`div`,{children:`Dashboard Card 4`})}),(0,y.jsx)(h,{className:`card`,colSpan:6,children:(0,y.jsx)(`div`,{children:`Dashboard Card 5`})})]}),rows:4},render:function(e){let[t,n]=(0,v.useState)(!1);return(0,y.jsxs)(`div`,{className:`layout`,children:[(0,y.jsxs)(`div`,{className:`header`,children:[(0,y.jsx)(`div`,{className:`logo`,children:(0,y.jsx)(a,{className:`toggle`,design:`v1.2`,onClick:()=>n(!t),children:`Toggle`})}),(0,y.jsx)(`div`,{className:`title`})]}),(0,y.jsxs)(`div`,{className:`main`,children:[(0,y.jsx)(`div`,{className:`sidebar ${t?`collapsed`:``}`,children:(0,y.jsx)(`div`,{className:`sidebar-content`})}),(0,y.jsx)(`main`,{className:`content-wrapper`,children:(0,y.jsx)(m,{...e})})]})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'my-grid',
    children: <>
                <DsGridItem className="card" colSpan={4}>
                    <div>Element 1</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={4} rowSpan={2}>
                    <div>Element 2</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={4} rowSpan={2}>
                    <div>Element 3</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={4} rowSpan={2}>
                    <div>Element 4</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={4} rowSpan={2} rowStart={5} colStart={2}>
                    <div>Element 4</div>
                </DsGridItem>
            </>,
    rows: 6
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'my-grid',
    gutter: {
      lg: 16,
      md: 8
    },
    margin: {
      lg: '16px 20px',
      md: 8
    },
    children: <>
                <DsGridItem className="card" colSpan={{
        lg: 4,
        md: 6
      }}>
                    <div>Card 1 — lg:4 md:6</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={{
        lg: 4,
        md: 6
      }}>
                    <div>Card 2 — lg:4 md:6</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={{
        lg: 4,
        md: 12
      }}>
                    <div>Card 3 — lg:4 md:12</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={{
        lg: 6,
        md: 12
      }} rowSpan={{
        lg: 2,
        md: 1
      }}>
                    <div>Card 4 — lg:6×2 md:12×1</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={{
        lg: 6,
        md: 12
      }}>
                    <div>Card 5 — lg:6 md:12</div>
                </DsGridItem>
            </>,
    rows: 4
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    className: 'navigation-grid',
    children: <>
                <DsGridItem className="card" colSpan={4}>
                    <div>Dashboard Card 1</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={4}>
                    <div>Dashboard Card 2</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={4}>
                    <div>Dashboard Card 3</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={6}>
                    <div>Dashboard Card 4</div>
                </DsGridItem>
                <DsGridItem className="card" colSpan={6}>
                    <div>Dashboard Card 5</div>
                </DsGridItem>
            </>,
    rows: 4
  },
  render: function Render(args) {
    const [isCollapsed, setIsCollapsed] = useState(false);
    return <div className="layout">
                <div className="header">
                    <div className="logo">
                        <DsButton className="toggle" design="v1.2" onClick={() => setIsCollapsed(!isCollapsed)}>
                            Toggle
                        </DsButton>
                    </div>
                    <div className="title"></div>
                </div>
                <div className="main">
                    <div className={\`sidebar \${isCollapsed ? 'collapsed' : ''}\`}>
                        <div className="sidebar-content"></div>
                    </div>
                    <main className="content-wrapper">
                        <DsGrid {...args} />
                    </main>
                </div>
            </div>;
  }
}`,...C.parameters?.docs?.source}}},w=[`Default`,`Responsive`,`NavigationLayout`]}))();export{x as Default,C as NavigationLayout,S as Responsive,w as __namedExportsOrder,b as default};