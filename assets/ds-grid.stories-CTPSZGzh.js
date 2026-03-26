import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BMCu72D4.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{n as a,t as o}from"./ds-button-CsVOLfYY.js";var s,c,l,u,d=t((()=>{s=e(i(),1),c=r(),l=({children:e,columns:t,rows:n,className:r})=>(0,c.jsx)(`div`,{className:(0,s.default)(`ds-grid`,{[`ds-grid-cols-${String(t)}`]:t,[`ds-grid-rows-${String(n)}`]:n},r),children:e}),u=({children:e,colSpan:t,colStart:n,rowSpan:r,rowStart:i,className:a})=>(0,c.jsx)(`div`,{className:(0,s.default)({[`ds-grid-col-span-${String(t)}`]:t,[`ds-grid-col-start-${String(n)}`]:n,[`ds-grid-row-span-${String(r)}`]:r,[`ds-grid-row-start-${String(i)}`]:i},a),children:e}),l.__docgenInfo={description:`Design system Grid component`,methods:[],displayName:`DsGrid`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`The content to be rendered inside the grid`},rows:{required:!1,tsType:{name:`union`,raw:`1 | 2 | 4 | 6 | 8`,elements:[{name:`literal`,value:`1`},{name:`literal`,value:`2`},{name:`literal`,value:`4`},{name:`literal`,value:`6`},{name:`literal`,value:`8`}]},description:`Number of rows in the grid (defaults to 1)`},columns:{required:!1,tsType:{name:`union`,raw:`2 | 4 | 6 | 8 | 10 | 12`,elements:[{name:`literal`,value:`2`},{name:`literal`,value:`4`},{name:`literal`,value:`6`},{name:`literal`,value:`8`},{name:`literal`,value:`10`},{name:`literal`,value:`12`}]},description:`Number of columns in the grid (defaults to 12)`},className:{required:!1,tsType:{name:`string`},description:`Custom class names to apply to the grid`}}},u.__docgenInfo={description:`Design system GridItem component`,methods:[],displayName:`DsGridItem`,props:{children:{required:!0,tsType:{name:`ReactNode`},description:`The content to be rendered inside the grid item`},colSpan:{required:!1,tsType:{name:`union`,raw:`number | 'full'`,elements:[{name:`number`},{name:`literal`,value:`'full'`}]},description:`Number of columns the item spans (1-12) or 'full'`},colStart:{required:!1,tsType:{name:`number`},description:`Starting column for the item (1-11)`},rowSpan:{required:!1,tsType:{name:`union`,raw:`number | 'full'`,elements:[{name:`number`},{name:`literal`,value:`'full'`}]},description:`Number of rows the item spans (1-8) or 'full'`},rowStart:{required:!1,tsType:{name:`number`},description:`Starting row for the item (1-7)`},className:{required:!1,tsType:{name:`string`},description:`Custom class names to apply to the grid item`}}}})),f=t((()=>{})),p,m,h,g,_,v;t((()=>{p=e(n(),1),d(),o(),f(),m=r(),h={title:`Design System/Grid`,component:l,subcomponents:{DsGridItem:u},parameters:{},argTypes:{children:{control:`text`,description:`The content to be rendered inside the grid`},rows:{control:`select`,description:`Number of rows in the grid. Can be 2, 4, 6, or 8. Defaults to 8 if not specified.`,options:[2,4,6,8]},className:{control:`text`,description:`Custom class names to apply to the grid container`}}},g={args:{className:`my-grid`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{className:`card`,colSpan:4,children:(0,m.jsx)(`div`,{children:`Element 1`})}),(0,m.jsx)(u,{className:`card`,colSpan:4,rowSpan:2,children:(0,m.jsx)(`div`,{children:`Element 2`})}),(0,m.jsx)(u,{className:`card`,colSpan:4,rowSpan:2,children:(0,m.jsx)(`div`,{children:`Element 3`})}),(0,m.jsx)(u,{className:`card`,colSpan:4,rowSpan:2,children:(0,m.jsx)(`div`,{children:`Element 4`})}),(0,m.jsx)(u,{className:`card`,colSpan:4,rowSpan:2,rowStart:5,colStart:2,children:(0,m.jsx)(`div`,{children:`Element 4`})})]}),rows:6}},_={args:{className:`navigation-grid`,children:(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(u,{className:`card`,colSpan:4,children:(0,m.jsx)(`div`,{children:`Dashboard Card 1`})}),(0,m.jsx)(u,{className:`card`,colSpan:4,children:(0,m.jsx)(`div`,{children:`Dashboard Card 2`})}),(0,m.jsx)(u,{className:`card`,colSpan:4,children:(0,m.jsx)(`div`,{children:`Dashboard Card 3`})}),(0,m.jsx)(u,{className:`card`,colSpan:6,children:(0,m.jsx)(`div`,{children:`Dashboard Card 4`})}),(0,m.jsx)(u,{className:`card`,colSpan:6,children:(0,m.jsx)(`div`,{children:`Dashboard Card 5`})})]}),rows:4},render:function(e){let[t,n]=(0,p.useState)(!1);return(0,m.jsxs)(`div`,{className:`layout`,children:[(0,m.jsxs)(`div`,{className:`header`,children:[(0,m.jsx)(`div`,{className:`logo`,children:(0,m.jsx)(a,{className:`toggle`,design:`v1.2`,onClick:()=>n(!t),children:`Toggle`})}),(0,m.jsx)(`div`,{className:`title`})]}),(0,m.jsxs)(`div`,{className:`main`,children:[(0,m.jsx)(`div`,{className:`sidebar ${t?`collapsed`:``}`,children:(0,m.jsx)(`div`,{className:`sidebar-content`})}),(0,m.jsx)(`main`,{className:`content-wrapper`,children:(0,m.jsx)(l,{...e})})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v=[`Default`,`NavigationLayout`]}))();export{g as Default,_ as NavigationLayout,v as __namedExportsOrder,h as default};