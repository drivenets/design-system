import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-DKMae-Wr.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./ds-table-D3hYsZjD.js";import{l as o,n as s,t as c,u as l}from"./components-BMUnz9T8.js";import{n as u,t as d}from"./story-decorators-9jfApPlh.js";var f,p,m,h,g,_,v,y;e((()=>{f=t(n(),1),i(),l(),u(),c(),p=r(),m=(e=!1)=>[{id:`identity`,header:`Identity`,meta:{group:{collapsible:!0,defaultCollapsed:e}},columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue()}]},{id:`activity`,header:`Activity`,meta:{group:{collapsible:!0}},columns:[{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`}]}],h={title:`Components/Table/Column Groups`,component:a,parameters:{layout:`fullscreen`},args:{columns:m(),data:o,stickyHeader:!0,bordered:!0,fullWidth:!0,selectable:!0,emptyState:(0,p.jsx)(s,{})},decorators:[d]},g={args:{columns:m()}},_={args:{columns:m(!0)}},v={render:function(e){let[t,n]=(0,f.useState)([`activity`]);return(0,p.jsx)(a,{...e,collapsedColumnGroups:t,onCollapsedColumnGroupsChange:n})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns(true)
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [collapsed, setCollapsed] = useState<string[]>(['activity']);
    return <DsTable {...args} collapsedColumnGroups={collapsed} onCollapsedColumnGroupsChange={setCollapsed} />;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`InitiallyCollapsed`,`Controlled`]}))();export{v as Controlled,g as Default,_ as InitiallyCollapsed,y as __namedExportsOrder,h as default};