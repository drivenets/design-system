import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-table-BI2o0ZVf.js";import{n as i,t as a}from"./ds-skeleton-O8whVVYy.js";import{n as o,t as s}from"./story-decorators-B0BgvTCA.js";import{n as c,r as l,t as u}from"./story-data-DABjxFNS.js";import{n as d,t as f}from"./components-AajuQmct.js";var p,m,h,g,_,v;e((()=>{n(),a(),l(),o(),f(),p=t(),m=u.map((e,t)=>t===0?Object.assign({},e,{loadingCell:()=>(0,p.jsx)(i.Circle,{size:`sm`})}):e),h={title:`Components/Table/Loading`,component:r,parameters:{layout:`fullscreen`},args:{columns:u,data:c,stickyHeader:!0,bordered:!0,fullWidth:!0,emptyState:(0,p.jsx)(d,{})},decorators:[s]},g={args:{loading:!0}},_={args:{loading:!0,columns:m}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...g.parameters?.docs?.source},description:{story:"Set `loading` to render skeleton rows. Each cell falls back to a default\nskeleton bar sized to its column.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    columns: loadingColumns
  }
}`,..._.parameters?.docs?.source},description:{story:"Provide a per-column `loadingCell` to control the skeleton shown while\n`loading` is true — here the first column renders a circular skeleton instead\nof the default bar.",..._.parameters?.docs?.description}}},v=[`Loading`,`CustomLoadingCell`]}))();export{_ as CustomLoadingCell,g as Loading,v as __namedExportsOrder,h as default};