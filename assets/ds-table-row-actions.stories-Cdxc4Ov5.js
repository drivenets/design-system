import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ds-table-DYGqpkkd.js";import{a as r,i,n as a,r as o,t as s}from"./story-decorators-BUWsSJAU.js";import{n as c,r as l,t as u}from"./story-data-CNz-shmS.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w,T;function E(){return(E=e((()=>{t(),l(),a(),r(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/Table/Row Actions`,component:n,parameters:{layout:`fullscreen`},args:{columns:u,data:c,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:d()},decorators:[s]},p={args:{data:c.slice(0,5),reorderable:!0,onOrderChange:d()}},m={args:{data:c.slice(0,5),reorderable:!0,reorderableColumnWidth:80,onOrderChange:d()}},h=d(),g=d(),_={args:{onRowClick:d(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:h},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:g}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:i.destructiveAction,onClick:d()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:d()},{icon:`call`,label:e=>`Call ${e.firstName}`,onClick:d()}]}},v={decorators:[o],args:{resizableColumns:!0,columns:[{accessorKey:`id`,header:`Person ID`,size:100},{accessorKey:`firstName`,header:`First Name`,size:140},{accessorKey:`lastName`,header:`Last Name`,size:140},{accessorKey:`age`,header:`Age`},{accessorKey:`visits`,header:`Visits`},{accessorKey:`status`,header:`Status`,size:140},{accessorKey:`progress`,header:`Profile Progress`,size:60}],primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:d()},{icon:`open_in_new`,label:`Open in New Window`,onClick:d()}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,className:i.destructiveAction,onClick:d()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:d()}]}},y={decorators:[o],args:{resizableColumns:!1,columns:[{accessorKey:`id`,header:`Person ID`,size:100},{accessorKey:`firstName`,header:`First Name`,size:140},{accessorKey:`lastName`,header:`Last Name`,size:140},{accessorKey:`age`,header:`Age`},{accessorKey:`visits`,header:`Visits`},{accessorKey:`status`,header:`Status`,size:140},{accessorKey:`progress`,header:`Profile Progress`,size:60}],primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:d()},{icon:`open_in_new`,label:`Open in New Window`,onClick:d()}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,className:i.destructiveAction,onClick:d()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:d()}]}},b={parameters:{docs:{description:{story:"Row actions support a per-row `hidden: (row) => boolean` callback. Menus adapt to row state:\n\n- `single` rows show **Approve** and **Delete**.\n- `relationship` rows show **Archive** (Delete is hidden — cannot delete live records).\n- `complicated` rows hide **Open in New Window**.\n- **Edit** and **Details** are always visible."}}},args:{onRowClick:d(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:d()},{icon:`open_in_new`,label:`Open in New Window`,hidden:e=>e.status===`complicated`,onClick:d()}],secondaryRowActions:[{icon:`check_circle`,label:`Approve`,hidden:e=>e.status!==`single`,onClick:d()},{icon:`inventory_2`,label:`Archive`,hidden:e=>e.status!==`relationship`,onClick:d()},{icon:`delete_outline`,label:`Delete`,hidden:e=>e.status===`relationship`,className:i.destructiveAction,onClick:d()},{icon:`info`,label:`Details`,onClick:d()}]}},x={parameters:{docs:{description:{story:'Row actions support a per-row `disabled: (row) => boolean` callback. Unlike `hidden`, disabled items remain visible but are not interactive:\n\n- `Open in New Window` is disabled on rows where `firstName === "Tanner"`.\n- `Delete` is disabled on rows where `status === "single"`.\n- **Edit** and **Details** are always enabled.\n\nThe kebab trigger remains visible even when every secondary action on a row is disabled.'}}},args:{onRowClick:d(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:d()},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:d()}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:i.destructiveAction,onClick:d()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:d()}]}},S={parameters:{docs:{description:{story:'A secondary action can declare `children` instead of `onClick` to open a cascading submenu. Children support the same `hidden`, `disabled`, `tooltip` and `className` options, and receive the row data in `onClick`:\n\n- `Review PR` opens `Visual` / `Code`.\n- `Filter by workflow` opens the filter scopes; `Custom` is hidden on rows where `status === "single"`.\n\nA parent whose children are all hidden is omitted from the menu.'}}},args:{onRowClick:d(),secondaryRowActions:[{icon:`edit`,label:`Edit`,onClick:d()},{icon:`code`,label:`Review PR`,children:[{label:`Visual`,onClick:d()},{label:`Code`,onClick:d()}]},{icon:`filter_list`,label:`Filter by workflow`,children:[{label:`All versions`,onClick:d()},{label:`Direct parents`,onClick:d()},{label:`All parents`,onClick:d()},{label:`Direct children`,onClick:d()},{label:`All children`,onClick:d()},{label:`Custom`,hidden:e=>e.status===`single`,onClick:d()}]}]}},C={parameters:{docs:{description:{story:'Pair `disabled` with `tooltip` to keep an unauthorized action visible while explaining why it is unavailable. The tooltip is shown on hover even when the item is disabled, and `tooltip` can be resolved per row:\n\n- `Delete` is disabled on rows where `status === "single"`, with a per-row reason.\n- `Review PR` (a submenu) is disabled on Tanner’s row; the submenu does not open.\n- `Details` is always enabled and shows a static tooltip.'}}},args:{onRowClick:d(),secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,disabled:e=>e.status===`single`,tooltip:e=>e.status===`single`?`You don't have permission to delete ${e.firstName}`:void 0,className:i.destructiveAction,onClick:d()},{icon:`code`,label:`Review PR`,disabled:e=>e.firstName===`Tanner`,tooltip:e=>e.firstName===`Tanner`?`No open pull request`:void 0,children:[{label:`Visual`,onClick:d()},{label:`Code`,onClick:d()}]},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:d()}]}},w={args:{selectable:!0,actions:[{icon:`alarm`,label:`Notify`,onClick:d()},{icon:`folder_open`,label:`Folder`,onClick:d()},{icon:`delete_outline`,label:`Delete`,onClick:d()}]}},T=[`Reorderable`,`CustomReorderColumnWidth`,`WithRowActions`,`ResizableColumnsWithRowActions`,`NonResizableColumnsWithRowActions`,`WithConditionallyHiddenActions`,`WithConditionallyDisabledActions`,`WithNestedSecondaryActions`,`WithDisabledActionReasons`,`WithBulkActions`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    onOrderChange: fn()
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    reorderableColumnWidth: 80,
    onOrderChange: fn()
  }
}`,...m.parameters?.docs?.source},description:{story:`The reorder utility column is 60px by default. Pass a pixel width when the
drag-handle column needs more (or less) room. It is not user-resizable.`,...m.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [narrowContainerDecorator],
  args: {
    resizableColumns: true,
    columns: [{
      accessorKey: 'id',
      header: 'Person ID',
      size: 100
    }, {
      accessorKey: 'firstName',
      header: 'First Name',
      size: 140
    }, {
      accessorKey: 'lastName',
      header: 'Last Name',
      size: 140
    }, {
      accessorKey: 'age',
      header: 'Age'
    }, {
      accessorKey: 'visits',
      header: 'Visits'
    }, {
      accessorKey: 'status',
      header: 'Status',
      size: 140
    }, {
      accessorKey: 'progress',
      header: 'Profile Progress',
      size: 60
    }],
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: fn()
    }, {
      icon: 'open_in_new',
      label: 'Open in New Window',
      onClick: fn()
    }],
    secondaryRowActions: [{
      icon: 'delete_outline',
      label: 'Delete',
      tooltip: 'Delete this row',
      className: styles.destructiveAction,
      onClick: fn()
    }, {
      icon: 'info',
      label: 'Details',
      tooltip: 'Show details',
      onClick: fn()
    }]
  }
}`,...v.parameters?.docs?.source},description:{story:`Row actions get their own trailing column sized to the declared actions, so they are never clipped. Drag the last column to its minimum: the actions keep their room.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  decorators: [narrowContainerDecorator],
  args: {
    resizableColumns: false,
    columns: [{
      accessorKey: 'id',
      header: 'Person ID',
      size: 100
    }, {
      accessorKey: 'firstName',
      header: 'First Name',
      size: 140
    }, {
      accessorKey: 'lastName',
      header: 'Last Name',
      size: 140
    }, {
      accessorKey: 'age',
      header: 'Age'
    }, {
      accessorKey: 'visits',
      header: 'Visits'
    }, {
      accessorKey: 'status',
      header: 'Status',
      size: 140
    }, {
      accessorKey: 'progress',
      header: 'Profile Progress',
      size: 60
    }],
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: fn()
    }, {
      icon: 'open_in_new',
      label: 'Open in New Window',
      onClick: fn()
    }],
    secondaryRowActions: [{
      icon: 'delete_outline',
      label: 'Delete',
      tooltip: 'Delete this row',
      className: styles.destructiveAction,
      onClick: fn()
    }, {
      icon: 'info',
      label: 'Details',
      tooltip: 'Show details',
      onClick: fn()
    }]
  }
}`,...y.parameters?.docs?.source},description:{story:`Columns barely fit the container; the table scrolls horizontally instead of squeezing the row actions column.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A secondary action can declare \`children\` instead of \`onClick\` to open a cascading submenu. Children support the same \`hidden\`, \`disabled\`, \`tooltip\` and \`className\` options, and receive the row data in \`onClick\`:\\n\\n' + '- \`Review PR\` opens \`Visual\` / \`Code\`.\\n' + '- \`Filter by workflow\` opens the filter scopes; \`Custom\` is hidden on rows where \`status === "single"\`.\\n\\n' + 'A parent whose children are all hidden is omitted from the menu.'
      }
    }
  },
  args: {
    onRowClick: fn(),
    secondaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: fn()
    }, {
      icon: 'code',
      label: 'Review PR',
      children: [{
        label: 'Visual',
        onClick: fn()
      }, {
        label: 'Code',
        onClick: fn()
      }]
    }, {
      icon: 'filter_list',
      label: 'Filter by workflow',
      children: [{
        label: 'All versions',
        onClick: fn()
      }, {
        label: 'Direct parents',
        onClick: fn()
      }, {
        label: 'All parents',
        onClick: fn()
      }, {
        label: 'Direct children',
        onClick: fn()
      }, {
        label: 'All children',
        onClick: fn()
      }, {
        label: 'Custom',
        hidden: data => data.status === 'single',
        onClick: fn()
      }]
    }]
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Pair \`disabled\` with \`tooltip\` to keep an unauthorized action visible while explaining why it is unavailable. The tooltip is shown on hover even when the item is disabled, and \`tooltip\` can be resolved per row:\\n\\n' + '- \`Delete\` is disabled on rows where \`status === "single"\`, with a per-row reason.\\n' + '- \`Review PR\` (a submenu) is disabled on Tanner’s row; the submenu does not open.\\n' + '- \`Details\` is always enabled and shows a static tooltip.'
      }
    }
  },
  args: {
    onRowClick: fn(),
    secondaryRowActions: [{
      icon: 'delete_outline',
      label: 'Delete',
      disabled: data => data.status === 'single',
      tooltip: data => data.status === 'single' ? \`You don't have permission to delete \${data.firstName}\` : undefined,
      className: styles.destructiveAction,
      onClick: fn()
    }, {
      icon: 'code',
      label: 'Review PR',
      disabled: data => data.firstName === 'Tanner',
      tooltip: data => data.firstName === 'Tanner' ? 'No open pull request' : undefined,
      children: [{
        label: 'Visual',
        onClick: fn()
      }, {
        label: 'Code',
        onClick: fn()
      }]
    }, {
      icon: 'info',
      label: 'Details',
      tooltip: 'Show details',
      onClick: fn()
    }]
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}}})))()}E();export{m as CustomReorderColumnWidth,y as NonResizableColumnsWithRowActions,p as Reorderable,v as ResizableColumnsWithRowActions,w as WithBulkActions,x as WithConditionallyDisabledActions,b as WithConditionallyHiddenActions,C as WithDisabledActionReasons,S as WithNestedSecondaryActions,_ as WithRowActions,T as __namedExportsOrder,f as default};