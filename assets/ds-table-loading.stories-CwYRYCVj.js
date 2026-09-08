import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-table-CU6iod-c.js";import{n as i,t as a}from"./ds-skeleton-O8whVVYy.js";import{n as o,t as s}from"./story-decorators-B0BgvTCA.js";import{n as c,r as l,t as u}from"./story-data-DABjxFNS.js";var d,f,p,m,h,g;e((()=>{n(),a(),l(),o(),d=t(),f=u.map((e,t)=>t===0?Object.assign({},e,{loadingCell:()=>(0,d.jsx)(i.Circle,{size:`sm`})}):e),p={title:`Components/Table/Loading`,component:r,parameters:{layout:`fullscreen`},args:{columns:u,data:c,stickyHeader:!0,bordered:!0,fullWidth:!0},decorators:[s]},m={args:{loading:!0}},h={args:{loading:!0,columns:f}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Set `loading` to render skeleton rows. Each cell falls back to a default\nskeleton bar sized to its column.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    columns: loadingColumns
  }
}`,...h.parameters?.docs?.source},description:{story:"Provide a per-column `loadingCell` to control the skeleton shown while\n`loading` is true — here the first column renders a circular skeleton instead\nof the default bar.",...h.parameters?.docs?.description}}},g=[`Loading`,`CustomLoadingCell`]}))();export{h as CustomLoadingCell,m as Loading,g as __namedExportsOrder,p as default};