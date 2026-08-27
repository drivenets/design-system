import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-button-v3-DKBJbP0e.js";import{n as o,t as s}from"./ds-stack-5oRwpvZl.js";import{n as c,t as l}from"./ds-table-Bx0R5lZB.js";import{l as u,n as d,t as f,u as p}from"./components-B31jbPMJ.js";import{n as m,t as h}from"./story-decorators--tHA5VUw.js";var g,_,v,y,b,x,S,C,w;t((()=>{g=e(n(),1),c(),o(),i(),p(),m(),f(),_=r(),v=(e=!1)=>[{id:`identity`,header:`Identity`,meta:{group:{collapsible:!0,defaultCollapsed:e}},columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue()}]},{id:`activity`,header:`Activity`,meta:{group:{collapsible:!0}},columns:[{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`}]}],y={title:`Components/Table/Column Groups`,component:l,parameters:{layout:`fullscreen`},args:{columns:v(),data:u,stickyHeader:!0,bordered:!0,fullWidth:!0,selectable:!0,emptyState:(0,_.jsx)(d,{})},decorators:[h]},b={args:{columns:v()}},x={args:{columns:v(!0)}},S={render:function(e){let[t,n]=(0,g.useState)([`activity`]);return(0,_.jsx)(l,{...e,collapsedColumnGroups:t,onCollapsedColumnGroupsChange:n})}},C={args:{columns:v(),controls:(0,_.jsxs)(s,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,_.jsx)(a,{variant:`secondary`,size:`small`,children:`RED version V2`}),(0,_.jsxs)(s,{direction:`row`,gap:8,alignItems:`center`,children:[(0,_.jsx)(a,{variant:`secondary`,size:`small`,children:`Import RED`}),(0,_.jsx)(a,{variant:`secondary`,size:`small`,children:`Export RED`}),(0,_.jsx)(a,{size:`small`,children:`Actions`})]})]})}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns(true)
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [collapsed, setCollapsed] = useState<string[]>(['activity']);
    return <DsTable {...args} collapsedColumnGroups={collapsed} onCollapsedColumnGroupsChange={setCollapsed} />;
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"The pinned `controls` slot renders above grouped, collapsible headers, confirming\nthe controls bar coexists with column groups and row selection.",...C.parameters?.docs?.description}}},w=[`Default`,`InitiallyCollapsed`,`Controlled`,`WithControls`]}))();export{S as Controlled,b as Default,x as InitiallyCollapsed,C as WithControls,w as __namedExportsOrder,y as default};