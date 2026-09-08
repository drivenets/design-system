import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{n as t,t as n}from"./ds-table-D8JcB1ey.js";import{i as r,n as i,r as a,t as o}from"./story-decorators-B0BgvTCA.js";import{n as s,r as c,t as l}from"./story-data-DABjxFNS.js";var u,d,f,p,m,h,g,_,v,y,b;e((()=>{t(),c(),i(),r(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Table/Row Actions`,component:n,parameters:{layout:`fullscreen`},args:{columns:l,data:s,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:u()},decorators:[o]},f={args:{data:s.slice(0,5),reorderable:!0,onOrderChange:u()}},p={args:{data:s.slice(0,5),reorderable:!0,reorderableColumnWidth:80,onOrderChange:u()}},m=u(),h=u(),g={args:{onRowClick:u(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:m},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:h}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:a.destructiveAction,onClick:u()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:u()},{icon:`call`,label:e=>`Call ${e.firstName}`,onClick:u()}]}},_={parameters:{docs:{description:{story:"Row actions support a per-row `hidden: (row) => boolean` callback. Menus adapt to row state:\n\n- `single` rows show **Approve** and **Delete**.\n- `relationship` rows show **Archive** (Delete is hidden — cannot delete live records).\n- `complicated` rows hide **Open in New Window**.\n- **Edit** and **Details** are always visible."}}},args:{onRowClick:u(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:u()},{icon:`open_in_new`,label:`Open in New Window`,hidden:e=>e.status===`complicated`,onClick:u()}],secondaryRowActions:[{icon:`check_circle`,label:`Approve`,hidden:e=>e.status!==`single`,onClick:u()},{icon:`inventory_2`,label:`Archive`,hidden:e=>e.status!==`relationship`,onClick:u()},{icon:`delete_outline`,label:`Delete`,hidden:e=>e.status===`relationship`,className:a.destructiveAction,onClick:u()},{icon:`info`,label:`Details`,onClick:u()}]}},v={parameters:{docs:{description:{story:'Row actions support a per-row `disabled: (row) => boolean` callback. Unlike `hidden`, disabled items remain visible but are not interactive:\n\n- `Open in New Window` is disabled on rows where `firstName === "Tanner"`.\n- `Delete` is disabled on rows where `status === "single"`.\n- **Edit** and **Details** are always enabled.\n\nThe kebab trigger remains visible even when every secondary action on a row is disabled.'}}},args:{onRowClick:u(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:u()},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:u()}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:a.destructiveAction,onClick:u()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:u()}]}},y={args:{selectable:!0,actions:[{icon:`alarm`,label:`Notify`,onClick:u()},{icon:`folder_open`,label:`Folder`,onClick:u()},{icon:`delete_outline`,label:`Delete`,onClick:u()}]}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    onOrderChange: fn()
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    reorderableColumnWidth: 80,
    onOrderChange: fn()
  }
}`,...p.parameters?.docs?.source},description:{story:`The reorder utility column is 60px by default. Pass a pixel width when the
drag-handle column needs more (or less) room. It is not user-resizable.`,...p.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Row actions support a per-row \`hidden: (row) => boolean\` callback. Menus adapt to row state:\\n\\n' + '- \`single\` rows show **Approve** and **Delete**.\\n' + '- \`relationship\` rows show **Archive** (Delete is hidden — cannot delete live records).\\n' + '- \`complicated\` rows hide **Open in New Window**.\\n' + '- **Edit** and **Details** are always visible.'
      }
    }
  },
  args: {
    onRowClick: fn(),
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: fn()
    }, {
      icon: 'open_in_new',
      label: 'Open in New Window',
      // hidden on 'complicated' rows (e.g. cannot open a record in a bad state)
      hidden: data => data.status === 'complicated',
      onClick: fn()
    }],
    secondaryRowActions: [{
      icon: 'check_circle',
      label: 'Approve',
      // only shown on 'single' rows (pending approval)
      hidden: data => data.status !== 'single',
      onClick: fn()
    }, {
      icon: 'inventory_2',
      label: 'Archive',
      // only shown on 'relationship' rows (live records)
      hidden: data => data.status !== 'relationship',
      onClick: fn()
    }, {
      icon: 'delete_outline',
      label: 'Delete',
      // hidden on 'relationship' rows (cannot delete live records)
      hidden: data => data.status === 'relationship',
      className: styles.destructiveAction,
      onClick: fn()
    }, {
      icon: 'info',
      label: 'Details',
      onClick: fn()
    }]
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Row actions support a per-row \`disabled: (row) => boolean\` callback. Unlike \`hidden\`, disabled items remain visible but are not interactive:\\n\\n' + '- \`Open in New Window\` is disabled on rows where \`firstName === "Tanner"\`.\\n' + '- \`Delete\` is disabled on rows where \`status === "single"\`.\\n' + '- **Edit** and **Details** are always enabled.\\n\\n' + 'The kebab trigger remains visible even when every secondary action on a row is disabled.'
      }
    }
  },
  args: {
    onRowClick: fn(),
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: fn()
    }, {
      icon: 'open_in_new',
      label: 'Open in New Window',
      // disabled on Tanner's row (item stays visible but greyed out)
      disabled: data => data.firstName === 'Tanner',
      onClick: fn()
    }],
    secondaryRowActions: [{
      icon: 'delete_outline',
      label: 'Delete',
      tooltip: 'Delete this row',
      // disabled on 'single' rows (destructive action guarded)
      disabled: data => data.status === 'single',
      className: styles.destructiveAction,
      onClick: fn()
    }, {
      icon: 'info',
      label: 'Details',
      tooltip: 'Show details',
      onClick: fn()
    }]
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b=[`Reorderable`,`CustomReorderColumnWidth`,`WithRowActions`,`WithConditionallyHiddenActions`,`WithConditionallyDisabledActions`,`WithBulkActions`]}))();export{p as CustomReorderColumnWidth,f as Reorderable,y as WithBulkActions,v as WithConditionallyDisabledActions,_ as WithConditionallyHiddenActions,g as WithRowActions,b as __namedExportsOrder,d as default};