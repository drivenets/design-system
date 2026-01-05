import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-Cx7uWjAt.js";import{c}from"./index-uV057Oo0.js";import{D as v}from"./ds-button-DBzT5Bus.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-button-legacy-B-4z7xkK.js";import"./ds-button-new-B5t-GLTJ.js";import"./ds-icon-D1iFRn6A.js";const o=({children:d,columns:r,rows:a,className:i})=>{const t=c("ds-grid",{[`ds-grid-cols-${String(r)}`]:r,[`ds-grid-rows-${String(a)}`]:a},i);return e.jsx("div",{className:t,children:d})},s=({children:d,colSpan:r,colStart:a,rowSpan:i,rowStart:t,className:m})=>{const p=c({[`ds-grid-col-span-${String(r)}`]:r,[`ds-grid-col-start-${String(a)}`]:a,[`ds-grid-row-span-${String(i)}`]:i,[`ds-grid-row-start-${String(t)}`]:t},m);return e.jsx("div",{className:p,children:d})};o.__docgenInfo={description:"Design system Grid component",methods:[],displayName:"DsGrid",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"The content to be rendered inside the grid"},rows:{required:!1,tsType:{name:"union",raw:"1 | 2 | 4 | 6 | 8",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"}]},description:"Number of rows in the grid (defaults to 1)"},columns:{required:!1,tsType:{name:"union",raw:"2 | 4 | 6 | 8 | 10 | 12",elements:[{name:"literal",value:"2"},{name:"literal",value:"4"},{name:"literal",value:"6"},{name:"literal",value:"8"},{name:"literal",value:"10"},{name:"literal",value:"12"}]},description:"Number of columns in the grid (defaults to 12)"},className:{required:!1,tsType:{name:"string"},description:"Custom class names to apply to the grid"}}};s.__docgenInfo={description:"Design system GridItem component",methods:[],displayName:"DsGridItem",props:{children:{required:!0,tsType:{name:"ReactNode"},description:"The content to be rendered inside the grid item"},colSpan:{required:!1,tsType:{name:"union",raw:"number | 'full'",elements:[{name:"number"},{name:"literal",value:"'full'"}]},description:"Number of columns the item spans (1-12) or 'full'"},colStart:{required:!1,tsType:{name:"number"},description:"Starting column for the item (1-11)"},rowSpan:{required:!1,tsType:{name:"union",raw:"number | 'full'",elements:[{name:"number"},{name:"literal",value:"'full'"}]},description:"Number of rows the item spans (1-8) or 'full'"},rowStart:{required:!1,tsType:{name:"number"},description:"Starting row for the item (1-7)"},className:{required:!1,tsType:{name:"string"},description:"Custom class names to apply to the grid item"}}};const b={title:"Design System/Grid",component:o,subcomponents:{DsGridItem:s},parameters:{},tags:["autodocs"],argTypes:{children:{control:"text",description:"The content to be rendered inside the grid"},rows:{control:"select",description:"Number of rows in the grid. Can be 2, 4, 6, or 8. Defaults to 8 if not specified.",options:[2,4,6,8]},className:{control:"text",description:"Custom class names to apply to the grid container"}}},n={args:{className:"my-grid",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{className:"card",colSpan:4,children:e.jsx("div",{children:"Element 1"})}),e.jsx(s,{className:"card",colSpan:4,rowSpan:2,children:e.jsx("div",{children:"Element 2"})}),e.jsx(s,{className:"card",colSpan:4,rowSpan:2,children:e.jsx("div",{children:"Element 3"})}),e.jsx(s,{className:"card",colSpan:4,rowSpan:2,children:e.jsx("div",{children:"Element 4"})}),e.jsx(s,{className:"card",colSpan:4,rowSpan:2,rowStart:5,colStart:2,children:e.jsx("div",{children:"Element 4"})})]}),rows:6}},l={args:{className:"navigation-grid",children:e.jsxs(e.Fragment,{children:[e.jsx(s,{className:"card",colSpan:4,children:e.jsx("div",{children:"Dashboard Card 1"})}),e.jsx(s,{className:"card",colSpan:4,children:e.jsx("div",{children:"Dashboard Card 2"})}),e.jsx(s,{className:"card",colSpan:4,children:e.jsx("div",{children:"Dashboard Card 3"})}),e.jsx(s,{className:"card",colSpan:6,children:e.jsx("div",{children:"Dashboard Card 4"})}),e.jsx(s,{className:"card",colSpan:6,children:e.jsx("div",{children:"Dashboard Card 5"})})]}),rows:4},render:function(r){const[a,i]=u.useState(!1);return e.jsxs("div",{className:"layout",children:[e.jsxs("div",{className:"header",children:[e.jsx("div",{className:"logo",children:e.jsx(v,{className:"toggle",design:"v1.2",onClick:()=>i(!a),children:"Toggle"})}),e.jsx("div",{className:"title"})]}),e.jsxs("div",{className:"main",children:[e.jsx("div",{className:`sidebar ${a?"collapsed":""}`,children:e.jsx("div",{className:"sidebar-content"})}),e.jsx("main",{className:"content-wrapper",children:e.jsx(o,{...r})})]})]})}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const I=["Default","NavigationLayout"];export{n as Default,l as NavigationLayout,I as __namedExportsOrder,b as default};
