import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t,t as n}from"./ds-table-CK-ZyhtM.js";import{i as r,n as i,r as a,t as o}from"./story-decorators-DA7-XwDq.js";import{n as s,r as c,t as l}from"./story-data-CNz-shmS.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;function C(){return(C=e((()=>{t(),c(),i(),r(),{fn:u}=__STORYBOOK_MODULE_TEST__,d={title:`Components/Table/Row Actions`,component:n,parameters:{layout:`fullscreen`},args:{columns:l,data:s,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:u()},decorators:[o]},f={args:{data:s.slice(0,5),reorderable:!0,onOrderChange:u()}},p={args:{data:s.slice(0,5),reorderable:!0,reorderableColumnWidth:80,onOrderChange:u()}},m=u(),h=u(),g={args:{onRowClick:u(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:m},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:h}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:a.destructiveAction,onClick:u()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:u()},{icon:`call`,label:e=>`Call ${e.firstName}`,onClick:u()}]}},_={parameters:{docs:{description:{story:"Row actions support a per-row `hidden: (row) => boolean` callback. Menus adapt to row state:\n\n- `single` rows show **Approve** and **Delete**.\n- `relationship` rows show **Archive** (Delete is hidden — cannot delete live records).\n- `complicated` rows hide **Open in New Window**.\n- **Edit** and **Details** are always visible."}}},args:{onRowClick:u(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:u()},{icon:`open_in_new`,label:`Open in New Window`,hidden:e=>e.status===`complicated`,onClick:u()}],secondaryRowActions:[{icon:`check_circle`,label:`Approve`,hidden:e=>e.status!==`single`,onClick:u()},{icon:`inventory_2`,label:`Archive`,hidden:e=>e.status!==`relationship`,onClick:u()},{icon:`delete_outline`,label:`Delete`,hidden:e=>e.status===`relationship`,className:a.destructiveAction,onClick:u()},{icon:`info`,label:`Details`,onClick:u()}]}},v={parameters:{docs:{description:{story:'Row actions support a per-row `disabled: (row) => boolean` callback. Unlike `hidden`, disabled items remain visible but are not interactive:\n\n- `Open in New Window` is disabled on rows where `firstName === "Tanner"`.\n- `Delete` is disabled on rows where `status === "single"`.\n- **Edit** and **Details** are always enabled.\n\nThe kebab trigger remains visible even when every secondary action on a row is disabled.'}}},args:{onRowClick:u(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:u()},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:u()}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:a.destructiveAction,onClick:u()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:u()}]}},y={parameters:{docs:{description:{story:'A secondary action can declare `children` instead of `onClick` to open a cascading submenu. Children support the same `hidden`, `disabled`, `tooltip` and `className` options, and receive the row data in `onClick`:\n\n- `Review PR` opens `Visual` / `Code`.\n- `Filter by workflow` opens the filter scopes; `Custom` is hidden on rows where `status === "single"`.\n\nA parent whose children are all hidden is omitted from the menu.'}}},args:{onRowClick:u(),secondaryRowActions:[{icon:`edit`,label:`Edit`,onClick:u()},{icon:`code`,label:`Review PR`,children:[{label:`Visual`,onClick:u()},{label:`Code`,onClick:u()}]},{icon:`filter_list`,label:`Filter by workflow`,children:[{label:`All versions`,onClick:u()},{label:`Direct parents`,onClick:u()},{label:`All parents`,onClick:u()},{label:`Direct children`,onClick:u()},{label:`All children`,onClick:u()},{label:`Custom`,hidden:e=>e.status===`single`,onClick:u()}]}]}},b={parameters:{docs:{description:{story:'Pair `disabled` with `tooltip` to keep an unauthorized action visible while explaining why it is unavailable. The tooltip is shown on hover even when the item is disabled, and `tooltip` can be resolved per row:\n\n- `Delete` is disabled on rows where `status === "single"`, with a per-row reason.\n- `Review PR` (a submenu) is disabled on Tanner’s row; the submenu does not open.\n- `Details` is always enabled and shows a static tooltip.'}}},args:{onRowClick:u(),secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,disabled:e=>e.status===`single`,tooltip:e=>e.status===`single`?`You don't have permission to delete ${e.firstName}`:void 0,className:a.destructiveAction,onClick:u()},{icon:`code`,label:`Review PR`,disabled:e=>e.firstName===`Tanner`,tooltip:e=>e.firstName===`Tanner`?`No open pull request`:void 0,children:[{label:`Visual`,onClick:u()},{label:`Code`,onClick:u()}]},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:u()}]}},x={args:{selectable:!0,actions:[{icon:`alarm`,label:`Notify`,onClick:u()},{icon:`folder_open`,label:`Folder`,onClick:u()},{icon:`delete_outline`,label:`Delete`,onClick:u()}]}},S=[`Reorderable`,`CustomReorderColumnWidth`,`WithRowActions`,`WithConditionallyHiddenActions`,`WithConditionallyDisabledActions`,`WithNestedSecondaryActions`,`WithDisabledActionReasons`,`WithBulkActions`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}}})))()}C();export{p as CustomReorderColumnWidth,f as Reorderable,x as WithBulkActions,v as WithConditionallyDisabledActions,_ as WithConditionallyHiddenActions,b as WithDisabledActionReasons,y as WithNestedSecondaryActions,g as WithRowActions,S as __namedExportsOrder,d as default};