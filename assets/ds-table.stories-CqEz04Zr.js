import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./ds-table-BXnqDWjl.js";import{n as i,t as a}from"./ds-table.stories.module-BH4xkOob.js";import{c as o,d as s,f as c,l,n as u,t as d,u as f}from"./components-BeBp9Huo.js";var p,m,h,g,_,v,y,b,x;e((()=>{n(),c(),l(),d(),i(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h=[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:250},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:250},{accessorKey:`age`,header:`Age (years)`,cell:e=>e.getValue(),size:200},{accessorKey:`visits`,header:`Number of Visits`,cell:e=>e.getValue(),size:250},{accessorKey:`status`,header:`Relationship Status`,cell:e=>e.getValue(),size:250},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:250}],g={title:`Components/Table`,component:r,parameters:{layout:`fullscreen`},args:{columns:f,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,p.jsx)(u,{}),onRowClick:m()},decorators:[o]},_={args:{data:s}},v={args:{data:[]}},y={args:{data:s,bordered:!1}},b={parameters:{docs:{description:{story:`When columns are wider than the container, the body and header scroll horizontally together while only the body scrolls vertically. The scrollbars are thin and become visible on hover.`}}},decorators:[e=>(0,p.jsx)(`div`,{className:a.horizontalScrollWrapper,children:(0,p.jsx)(e,{})})],args:{data:s,columns:h}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    bordered: false
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'When columns are wider than the container, the body and header scroll horizontally together while only the body scrolls vertically. The scrollbars are thin and become visible on hover.'
      }
    }
  },
  decorators: [Story => <div className={styles.horizontalScrollWrapper}>
                <Story />
            </div>],
  args: {
    data: defaultData,
    columns: horizontalScrollColumns
  }
}`,...b.parameters?.docs?.source}}},x=[`Default`,`EmptyState`,`NoBorder`,`HorizontalScroll`]}))();export{_ as Default,v as EmptyState,b as HorizontalScroll,y as NoBorder,x as __namedExportsOrder,g as default};