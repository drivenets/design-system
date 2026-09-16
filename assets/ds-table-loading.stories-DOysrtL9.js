import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-B7s6RIoB.js";import{n,t as r}from"./ds-table-DmdQYuQf.js";import{n as i,t as a}from"./ds-skeleton-s8zeEnJs.js";import{n as o,t as s}from"./story-decorators-DJ-U09mk.js";import{n as c,r as l,t as u}from"./story-data-CNz-shmS.js";var d,f,p,m,h,g;function _(){return(_=e((()=>{n(),a(),l(),o(),d=t(),f=u.map((e,t)=>t===0?Object.assign({},e,{loadingCell:()=>(0,d.jsx)(i.Circle,{size:`sm`})}):e),p={title:`Components/Table/Loading`,component:r,parameters:{layout:`fullscreen`},args:{columns:u,data:c,stickyHeader:!0,bordered:!0,fullWidth:!0},decorators:[s]},m={args:{loading:!0}},h={args:{loading:!0,columns:f}},g=[`Loading`,`CustomLoadingCell`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true
  }
}`,...m.parameters?.docs?.source},description:{story:"Set `loading` to render skeleton rows. Each cell falls back to a default\nskeleton bar sized to its column.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    loading: true,
    columns: loadingColumns
  }
}`,...h.parameters?.docs?.source},description:{story:"Provide a per-column `loadingCell` to control the skeleton shown while\n`loading` is true — here the first column renders a circular skeleton instead\nof the default bar.",...h.parameters?.docs?.description}}}})))()}_();export{h as CustomLoadingCell,m as Loading,g as __namedExportsOrder,p as default};