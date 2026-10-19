import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n}from"./iframe-ENCyFx4W.js";import{n as r,t as i}from"./ds-button-v3-C7W92TzU.js";import{n as a,t as o}from"./ds-stack-Dspue5Le.js";import{n as s,t as c}from"./ds-table-DsxuO2DM.js";import{n as l,t as u}from"./story-decorators-CwPOi4yy.js";import{n as d,r as f}from"./story-data-CNz-shmS.js";var p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{p=t(),s(),a(),r(),f(),l(),m=n(),h=(e=!1)=>[{id:`identity`,header:`Identity`,meta:{group:{collapsible:!0,defaultCollapsed:e}},columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue()}]},{id:`activity`,header:`Activity`,meta:{group:{collapsible:!0}},columns:[{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`}]}],g={title:`Components/Table/Column Groups`,tags:[`visual`],component:c,parameters:{layout:`fullscreen`},args:{columns:h(),data:d,stickyHeader:!0,bordered:!0,fullWidth:!0,selectable:!0},decorators:[u]},_={args:{columns:h()}},v={args:{columns:h(!0)}},y={render:function(e){let[t,n]=(0,p.useState)([`activity`]);return(0,m.jsx)(c,{...e,collapsedColumnGroups:t,onCollapsedColumnGroupsChange:n})}},b={args:{columns:h(),controls:(0,m.jsxs)(o,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,m.jsx)(i,{variant:`secondary`,size:`small`,children:`RED version V2`}),(0,m.jsxs)(o,{direction:`row`,gap:8,alignItems:`center`,children:[(0,m.jsx)(i,{variant:`secondary`,size:`small`,children:`Import RED`}),(0,m.jsx)(i,{variant:`secondary`,size:`small`,children:`Export RED`}),(0,m.jsx)(i,{size:`small`,children:`Actions`})]})]})}},x={args:{columnDisplay:!0,columns:[{id:`identity`,header:`Identity`,meta:{group:{collapsible:!0}},columns:[{accessorKey:`firstName`,header:`First Name`,enableHiding:!1,meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`lastName`,header:`Last Name`},{accessorKey:`age`,header:`Age`}]},{id:`activity`,header:`Activity`,meta:{group:{collapsible:!0}},columns:[{accessorKey:`visits`,header:`Visits`,meta:{keepVisibleWhenCollapsed:!0}},{accessorKey:`status`,header:`Status`},{accessorKey:`progress`,header:`Profile Progress`}]}]}},S=[`Default`,`InitiallyCollapsed`,`Controlled`,`WithControls`,`WithColumnDisplay`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns()
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    columns: buildColumns(true)
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [collapsed, setCollapsed] = useState<string[]>(['activity']);
    return <DsTable {...args} collapsedColumnGroups={collapsed} onCollapsedColumnGroupsChange={setCollapsed} />;
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"The pinned `controls` slot renders above grouped, collapsible headers, confirming\nthe controls bar coexists with column groups and row selection.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    columnDisplay: true,
    columns: [{
      id: 'identity',
      header: 'Identity',
      meta: {
        group: {
          collapsible: true
        }
      },
      columns: [{
        accessorKey: 'firstName',
        header: 'First Name',
        enableHiding: false,
        meta: {
          keepVisibleWhenCollapsed: true
        }
      }, {
        accessorKey: 'lastName',
        header: 'Last Name'
      }, {
        accessorKey: 'age',
        header: 'Age'
      }]
    }, {
      id: 'activity',
      header: 'Activity',
      meta: {
        group: {
          collapsible: true
        }
      },
      columns: [{
        accessorKey: 'visits',
        header: 'Visits',
        meta: {
          keepVisibleWhenCollapsed: true
        }
      }, {
        accessorKey: 'status',
        header: 'Status'
      }, {
        accessorKey: 'progress',
        header: 'Profile Progress'
      }]
    }]
  }
}`,...x.parameters?.docs?.source},description:{story:`The Columns button sits at the end of the group headers row. Each group gets
a checkbox that toggles all of its columns and shows a partial state when
only some are visible. Columns with \`enableHiding: false\` are listed as locked.`,...x.parameters?.docs?.description}}}})))()}C();export{y as Controlled,_ as Default,v as InitiallyCollapsed,x as WithColumnDisplay,b as WithControls,S as __namedExportsOrder,g as default};