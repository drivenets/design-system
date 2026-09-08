import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-button-v3-BnV8s8Ko.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{n as c,t as l}from"./ds-table-D8JcB1ey.js";import{n as u,t as d}from"./story-decorators-B0BgvTCA.js";import{n as f,r as p}from"./story-data-DABjxFNS.js";var m,h,g,_,v,y,b,x,S;t((()=>{m=e(n(),1),c(),o(),i(),p(),u(),h=r(),g=(e=!1)=>[{id:`identity`,header:`Identity`,meta:{group:{collapsible:!0,defaultCollapsed:e}},columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue()}]},{id:`activity`,header:`Activity`,meta:{group:{collapsible:!0}},columns:[{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`}]}],_={title:`Components/Table/Column Groups`,component:l,parameters:{layout:`fullscreen`},args:{columns:g(),data:f,stickyHeader:!0,bordered:!0,fullWidth:!0,selectable:!0},decorators:[d]},v={args:{columns:g()}},y={args:{columns:g(!0)}},b={render:function(e){let[t,n]=(0,m.useState)([`activity`]);return(0,h.jsx)(l,{...e,collapsedColumnGroups:t,onCollapsedColumnGroupsChange:n})}},x={args:{columns:g(),controls:(0,h.jsxs)(s,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,h.jsx)(a,{variant:`secondary`,size:`small`,children:`RED version V2`}),(0,h.jsxs)(s,{direction:`row`,gap:8,alignItems:`center`,children:[(0,h.jsx)(a,{variant:`secondary`,size:`small`,children:`Import RED`}),(0,h.jsx)(a,{variant:`secondary`,size:`small`,children:`Export RED`}),(0,h.jsx)(a,{size:`small`,children:`Actions`})]})]})}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns()
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns(true)
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [collapsed, setCollapsed] = useState<string[]>(['activity']);
    return <DsTable {...args} collapsedColumnGroups={collapsed} onCollapsedColumnGroupsChange={setCollapsed} />;
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns(),
    controls: <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                <DsButtonV3 variant="secondary" size="small">
                    RED version V2
                </DsButtonV3>
                <DsStack direction="row" gap={8} alignItems="center">
                    <DsButtonV3 variant="secondary" size="small">
                        Import RED
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small">
                        Export RED
                    </DsButtonV3>
                    <DsButtonV3 size="small">Actions</DsButtonV3>
                </DsStack>
            </DsStack>
  }
}`,...x.parameters?.docs?.source},description:{story:"The pinned `controls` slot renders above grouped, collapsible headers, confirming\nthe controls bar coexists with column groups and row selection.",...x.parameters?.docs?.description}}},S=[`Default`,`InitiallyCollapsed`,`Controlled`,`WithControls`]}))();export{b as Controlled,v as Default,y as InitiallyCollapsed,x as WithControls,S as __namedExportsOrder,_ as default};