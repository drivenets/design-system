import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./ds-table-DXc2glnh.js";import{n as i,t as a}from"./ds-table.stories.module-CQWBs7I2.js";import{a as o,c as s,l as c,n as l,o as u,s as d,t as f}from"./components-B4RwaoLy.js";var p,m,h,g,_,v,y,b,x;e((()=>{n(),c(),u(),f(),i(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Design System/Table/Row Actions`,component:r,parameters:{layout:`fullscreen`},args:{columns:d,data:s,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,p.jsx)(l,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[o]},g={args:{data:s.slice(0,5),reorderable:!0,onOrderChange:m()}},_=m(),v=m(),y={args:{onRowClick:m(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:_},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:v}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:a.destructiveAction,onClick:m()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:m()},{icon:`call`,label:e=>`Call ${e.firstName}`,onClick:m()}]}},b={args:{selectable:!0,actions:[{icon:`alarm`,label:`Notify`,onClick:m()},{icon:`folder_open`,label:`Folder`,onClick:m()},{icon:`delete_outline`,label:`Delete`,onClick:m()}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    onOrderChange: fn()
  }
}`,...g.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    onRowClick: fn(),
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: editClickHandler
    }, {
      icon: 'open_in_new',
      label: 'Open in New Window',
      disabled: data => data.firstName === 'Tanner',
      onClick: openInNewWindowClickHandler
    }],
    secondaryRowActions: [{
      icon: 'delete_outline',
      label: 'Delete',
      tooltip: 'Delete this row',
      disabled: data => data.status === 'single',
      className: styles.destructiveAction,
      onClick: fn()
    }, {
      icon: 'info',
      label: 'Details',
      tooltip: 'Show details',
      onClick: fn()
    }, {
      icon: 'call',
      label: row => \`Call \${row.firstName}\`,
      onClick: fn()
    }]
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    actions: [{
      icon: 'alarm',
      label: 'Notify',
      onClick: fn()
    }, {
      icon: 'folder_open',
      label: 'Folder',
      onClick: fn()
    }, {
      icon: 'delete_outline',
      label: 'Delete',
      onClick: fn()
    }]
  }
}`,...b.parameters?.docs?.source}}},x=[`Reorderable`,`WithRowActions`,`WithBulkActions`]}))();export{g as Reorderable,b as WithBulkActions,y as WithRowActions,x as __namedExportsOrder,h as default};