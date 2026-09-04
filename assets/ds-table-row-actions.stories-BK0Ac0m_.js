import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-table-DnxMg_IE.js";import{n as i,t as a}from"./ds-table.stories.module-CixZ03cv.js";import{c as o,l as s,n as c,t as l,u}from"./components-BcGR3zID.js";import{n as d,t as f}from"./story-decorators--tHA5VUw.js";var p,m,h,g,_,v,y,b,x,S,C,w;e((()=>{n(),u(),d(),l(),i(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h={title:`Components/Table/Row Actions`,component:r,parameters:{layout:`fullscreen`},args:{columns:o,data:s,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,p.jsx)(c,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[f]},g={args:{data:s.slice(0,5),reorderable:!0,onOrderChange:m()}},_={args:{data:s.slice(0,5),reorderable:!0,reorderableColumnWidth:80,onOrderChange:m()}},v=m(),y=m(),b={args:{onRowClick:m(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:v},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:y}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:a.destructiveAction,onClick:m()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:m()},{icon:`call`,label:e=>`Call ${e.firstName}`,onClick:m()}]}},x={parameters:{docs:{description:{story:"Row actions support a per-row `hidden: (row) => boolean` callback. Menus adapt to row state:\n\n- `single` rows show **Approve** and **Delete**.\n- `relationship` rows show **Archive** (Delete is hidden — cannot delete live records).\n- `complicated` rows hide **Open in New Window**.\n- **Edit** and **Details** are always visible."}}},args:{onRowClick:m(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:m()},{icon:`open_in_new`,label:`Open in New Window`,hidden:e=>e.status===`complicated`,onClick:m()}],secondaryRowActions:[{icon:`check_circle`,label:`Approve`,hidden:e=>e.status!==`single`,onClick:m()},{icon:`inventory_2`,label:`Archive`,hidden:e=>e.status!==`relationship`,onClick:m()},{icon:`delete_outline`,label:`Delete`,hidden:e=>e.status===`relationship`,className:a.destructiveAction,onClick:m()},{icon:`info`,label:`Details`,onClick:m()}]}},S={parameters:{docs:{description:{story:'Row actions support a per-row `disabled: (row) => boolean` callback. Unlike `hidden`, disabled items remain visible but are not interactive:\n\n- `Open in New Window` is disabled on rows where `firstName === "Tanner"`.\n- `Delete` is disabled on rows where `status === "single"`.\n- **Edit** and **Details** are always enabled.\n\nThe kebab trigger remains visible even when every secondary action on a row is disabled.'}}},args:{onRowClick:m(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:m()},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:m()}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:a.destructiveAction,onClick:m()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:m()}]}},C={args:{selectable:!0,actions:[{icon:`alarm`,label:`Notify`,onClick:m()},{icon:`folder_open`,label:`Folder`,onClick:m()},{icon:`delete_outline`,label:`Delete`,onClick:m()}]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    onOrderChange: fn()
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    reorderableColumnWidth: 80,
    onOrderChange: fn()
  }
}`,..._.parameters?.docs?.source},description:{story:`The reorder utility column is 60px by default. Pass a pixel width when the
drag-handle column needs more (or less) room. It is not user-resizable.`,..._.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Reorderable`,`CustomReorderColumnWidth`,`WithRowActions`,`WithConditionallyHiddenActions`,`WithConditionallyDisabledActions`,`WithBulkActions`]}))();export{_ as CustomReorderColumnWidth,g as Reorderable,C as WithBulkActions,S as WithConditionallyDisabledActions,x as WithConditionallyHiddenActions,b as WithRowActions,w as __namedExportsOrder,h as default};