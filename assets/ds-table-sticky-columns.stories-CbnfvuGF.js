import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-Q1GcV6wX.js";import{n}from"./iframe-Dt6rsTnT.js";import{n as r,t as i}from"./ds-typography-D-seURcY.js";import{n as a,t as o}from"./ds-stack-AjFtcsTf.js";import{n as s,t as c}from"./ds-table-CG3Q2KGK.js";import{n as l,t as u}from"./story-decorators-CemtY2wy.js";import{n as d,r as f}from"./story-data-CNz-shmS.js";import{n as p,t as m}from"./story-data-generator-BDuwhn8s.js";var h,g;function _(){return(_=e((()=>{h=`_wrapper_i6q70_1`,g={wrapper:h}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=e((()=>{v=t(),s(),a(),i(),f(),p(),l(),_(),y=n(),{fn:b}=__STORYBOOK_MODULE_TEST__,x={title:`Components/Table/Sticky Columns`,tags:[`visual`],component:c,parameters:{layout:`fullscreen`},args:{columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:180},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:180},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:140},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:160},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:200},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue(),size:160}],data:d,onRowClick:b()},decorators:[e=>u(()=>(0,y.jsx)(`div`,{className:g.wrapper,children:(0,y.jsx)(e,{})}))]},S={args:{stickyColumns:{left:[`firstName`],right:[`status`]}}},C={args:{stickyColumns:{left:[`firstName`],right:[`status`]},selectable:!0,primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:b()},{icon:`download`,label:`Download`,onClick:b()}],secondaryRowActions:[{icon:`delete`,label:`Delete`,onClick:b()}]}},w={args:{columnDisplay:!0,primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:b()},{icon:`download`,label:`Download`,onClick:b()}]}},T={args:{columnDisplay:!0,primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:b()},{icon:`download`,label:`Download`,onClick:b()}]},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,v.useState)({lastName:!1}),[r,i]=(0,v.useState)({left:[`firstName`,`lastName`]});return(0,y.jsx)(c,{...e,columnVisibility:t,onColumnVisibilityChange:n,stickyColumns:r,onStickyColumnsChange:i})}},E={args:{columns:[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:160},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:160}]},{id:`activity`,header:`Activity`,columns:[{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:140},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:160},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:200}]},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue(),size:160}],columnDisplay:!0},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,v.useState)({visits:!1}),[r,i]=(0,v.useState)({left:[`identity`]});return(0,y.jsx)(c,{...e,columnVisibility:t,onColumnVisibilityChange:n,stickyColumns:r,onStickyColumnsChange:i})}},D={args:{columns:[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:160},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:160}]},{id:`activity`,header:`Activity`,columns:[{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:140},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:160},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:200}]},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue(),size:160}],stickyColumns:{left:[`identity`]}}},O={args:{resizableColumns:!0,stickyColumns:{left:[`firstName`,`lastName`],right:[`status`]}}},k={args:{virtualized:!0,selectable:!0,stickyColumns:{left:[`firstName`],right:[`status`]}},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t]=(0,v.useState)(()=>m(0,1e3,[]).data);return(0,y.jsx)(c,{...e,data:t})}},A={args:{stickyColumns:{left:[`firstName`]},expandable:!0},parameters:{docs:{source:{type:`code`}}},render:function(e){let t=(0,v.useRef)(null);return(0,v.useEffect)(()=>{t.current?.expandRows([`1`])},[]),(0,y.jsx)(c,{...e,ref:t,renderExpandedRow:e=>(0,y.jsxs)(o,{direction:`column`,gap:`var(--xs)`,children:[(0,y.jsxs)(r,{variant:`body-sm-semi-bold`,children:[`Recent visits for `,e.firstName,` `,e.lastName]}),(0,y.jsx)(c,{columns:[{accessorKey:`firstName`,header:`First Name`,size:180},{accessorKey:`lastName`,header:`Last Name`,size:180},{accessorKey:`age`,header:`Age`,size:140},{accessorKey:`visits`,header:`Visits`,size:160},{accessorKey:`status`,header:`Status`,size:160}],data:d.slice(0,2),stickyColumns:{left:[`firstName`]}})]})})}},j={args:{stickyColumns:{left:[`firstName`]},reorderable:!0,onOrderChange:b()}},M=[`Default`,`WithRowActions`,`ColumnDisplay`,`ColumnDisplayWithSavedState`,`ColumnDisplayWithColumnGroups`,`ColumnGroups`,`Resizable`,`Virtualized`,`Expandable`,`Reorderable`],S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    stickyColumns: {
      left: ['firstName'],
      right: ['status']
    }
  }
}`,...S.parameters?.docs?.source},description:{story:"Keep key columns in view while the table scrolls horizontally. `left`\ncolumns stick to the left edge and `right` columns to the right edge, in\narray order. A divider shows on a sticky edge only while content is\nscrolled under it. Passing `stickyColumns` controls the state; omit it to\nlet the table keep its own. Sticky columns wider than the visible width are\nnot supported.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    stickyColumns: {
      left: ['firstName'],
      right: ['status']
    },
    selectable: true,
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: fn()
    }, {
      icon: 'download',
      label: 'Download',
      onClick: fn()
    }],
    secondaryRowActions: [{
      icon: 'delete',
      label: 'Delete',
      onClick: fn()
    }]
  }
}`,...C.parameters?.docs?.source},description:{story:`Utility columns are always sticky: selection and expansion stay on the left
before the consumer columns, and row actions stay on the right after them.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    columnDisplay: true,
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: fn()
    }, {
      icon: 'download',
      label: 'Download',
      onClick: fn()
    }]
  }
}`,...w.parameters?.docs?.source},description:{story:`With \`columnDisplay\`, the Columns button in the header lists every column.
Its checkbox shows or hides the column, and the sticky toggle next to it
makes the column sticky on the left. The toggle appears on hover or focus
and stays visible while the column is sticky. A hidden sticky column stays listed in
\`stickyColumns\` and is sticky again once shown.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    columnDisplay: true,
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: fn()
    }, {
      icon: 'download',
      label: 'Download',
      onClick: fn()
    }]
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
      lastName: false
    });
    const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({
      left: ['firstName', 'lastName']
    });
    return <DsTable {...args} columnVisibility={columnVisibility} onColumnVisibilityChange={setColumnVisibility} stickyColumns={stickyColumns} onStickyColumnsChange={setStickyColumns} />;
  }
}`,...T.parameters?.docs?.source},description:{story:"Pass `columnVisibility` and `stickyColumns` with their callbacks to restore\nand persist the user's choice. Here First Name and Last Name start sticky,\nand Last Name starts hidden, so showing it again makes it sticky right away.",...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'identity',
      header: 'Identity',
      columns: [{
        accessorKey: 'firstName',
        header: 'First Name',
        cell: info => info.getValue<string>(),
        size: 160
      }, {
        accessorKey: 'lastName',
        header: 'Last Name',
        cell: info => info.getValue<string>(),
        size: 160
      }]
    }, {
      id: 'activity',
      header: 'Activity',
      columns: [{
        accessorKey: 'age',
        header: 'Age',
        cell: info => info.getValue<number>(),
        size: 140
      }, {
        accessorKey: 'visits',
        header: 'Visits',
        cell: info => info.getValue<number>(),
        size: 160
      }, {
        accessorKey: 'progress',
        header: 'Profile Progress',
        cell: info => \`\${String(info.getValue<number>())}%\`,
        size: 200
      }]
    }, {
      accessorKey: 'status',
      header: 'Status',
      cell: info => info.getValue(),
      size: 160
    }],
    columnDisplay: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
      visits: false
    });
    const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({
      left: ['identity']
    });
    return <DsTable {...args} columnVisibility={columnVisibility} onColumnVisibilityChange={setColumnVisibility} stickyColumns={stickyColumns} onStickyColumnsChange={setStickyColumns} />;
  }
}`,...E.parameters?.docs?.source},description:{story:`With column groups, only the top-level rows (a group or an ungrouped
column) have a sticky toggle, because making any leaf sticky makes its whole
top-level group sticky. Here the Identity group starts sticky and Visits
starts hidden.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    columns: [{
      id: 'identity',
      header: 'Identity',
      columns: [{
        accessorKey: 'firstName',
        header: 'First Name',
        cell: info => info.getValue<string>(),
        size: 160
      }, {
        accessorKey: 'lastName',
        header: 'Last Name',
        cell: info => info.getValue<string>(),
        size: 160
      }]
    }, {
      id: 'activity',
      header: 'Activity',
      columns: [{
        accessorKey: 'age',
        header: 'Age',
        cell: info => info.getValue<number>(),
        size: 140
      }, {
        accessorKey: 'visits',
        header: 'Visits',
        cell: info => info.getValue<number>(),
        size: 160
      }, {
        accessorKey: 'progress',
        header: 'Profile Progress',
        cell: info => \`\${String(info.getValue<number>())}%\`,
        size: 200
      }]
    }, {
      accessorKey: 'status',
      header: 'Status',
      cell: info => info.getValue(),
      size: 160
    }],
    stickyColumns: {
      left: ['identity']
    }
  }
}`,...D.parameters?.docs?.source},description:{story:`Listing a group id, or any leaf of a group, makes every leaf of that
top-level group sticky. The group header renders once and sticks with its leaves.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    resizableColumns: true,
    stickyColumns: {
      left: ['firstName', 'lastName'],
      right: ['status']
    }
  }
}`,...O.parameters?.docs?.source},description:{story:`Sticky columns stay resizable. Resizing one moves the sticky columns after
it live during the drag.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    virtualized: true,
    selectable: true,
    stickyColumns: {
      left: ['firstName'],
      right: ['status']
    }
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [data] = useState(() => generatePersonData(0, 1_000, []).data);
    return <DsTable {...args} data={data} />;
  }
}`,...k.parameters?.docs?.source},description:{story:`Sticky columns work with virtualization and infinite scroll. A virtualized
table takes its height from its parent, so the parent needs a bounded
height.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    stickyColumns: {
      left: ['firstName']
    },
    expandable: true
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const tableRef = useRef<DsTableApi<Person>>(null);
    useEffect(() => {
      tableRef.current?.expandRows(['1']);
    }, []);
    return <DsTable {...args} ref={tableRef} renderExpandedRow={row => <DsStack direction="column" gap="var(--xs)">
                        <DsTypography variant="body-sm-semi-bold">
                            Recent visits for {row.firstName} {row.lastName}
                        </DsTypography>
                        <DsTable columns={[{
        accessorKey: 'firstName',
        header: 'First Name',
        size: 180
      }, {
        accessorKey: 'lastName',
        header: 'Last Name',
        size: 180
      }, {
        accessorKey: 'age',
        header: 'Age',
        size: 140
      }, {
        accessorKey: 'visits',
        header: 'Visits',
        size: 160
      }, {
        accessorKey: 'status',
        header: 'Status',
        size: 160
      }]} data={defaultData.slice(0, 2)} stickyColumns={{
        left: ['firstName']
      }} />
                    </DsStack>} />;
  }
}`,...A.parameters?.docs?.source},description:{story:`Expanded row content stays in the visible area while the table scrolls
horizontally, and its background spans the full row. A nested table fits the
visible width, scrolls on its own and keeps its own sticky columns.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    stickyColumns: {
      left: ['firstName']
    },
    reorderable: true,
    onOrderChange: fn()
  }
}`,...j.parameters?.docs?.source},description:{story:`Drag-to-reorder keeps working: the drag handle column is sticky left, before
the consumer sticky columns.`,...j.parameters?.docs?.description}}}})))()}N();export{w as ColumnDisplay,E as ColumnDisplayWithColumnGroups,T as ColumnDisplayWithSavedState,D as ColumnGroups,S as Default,A as Expandable,j as Reorderable,O as Resizable,k as Virtualized,C as WithRowActions,M as __namedExportsOrder,x as default};