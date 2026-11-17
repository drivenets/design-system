import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{t}from"./react-DlPsW1c0.js";import{n}from"./iframe-i6Lwq18V.js";import{n as r,t as i}from"./ds-typography-B-lUhe60.js";import{n as a,t as o}from"./ds-stack-CqmEHAT9.js";import{n as s,t as c}from"./ds-table-Dbq1RAoe.js";import{n as l,t as u}from"./story-decorators-CpU75Wr9.js";import{n as d,r as f}from"./story-data-UTijnOh6.js";import{n as p,t as m}from"./story-data-generator-CIgRJsBw.js";var h,g;function _(){return(_=e((()=>{h=`_wrapper_i6q70_1`,g={wrapper:h}})))()}var v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=e((()=>{v=t(),s(),a(),i(),f(),p(),l(),_(),y=n(),{fn:b}=__STORYBOOK_MODULE_TEST__,x=[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:180},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:180},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:140},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:160},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:200},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue(),size:160}],S={title:`Components/Table/Sticky Columns`,tags:[`visual`],component:c,parameters:{layout:`fullscreen`},args:{columns:x,data:d,onRowClick:b()},decorators:[e=>u(()=>(0,y.jsx)(`div`,{className:g.wrapper,children:(0,y.jsx)(e,{})}))]},C={args:{stickyColumns:{left:[`firstName`],right:[`status`]}}},w={args:{stickyColumns:{left:[`firstName`],right:[`status`]},selectable:!0,primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:b()},{icon:`download`,label:`Download`,onClick:b()}],secondaryRowActions:[{icon:`delete`,label:`Delete`,onClick:b()}]}},T={args:{columnDisplay:!0,primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:b()},{icon:`download`,label:`Download`,onClick:b()}]}},E={args:{columnDisplay:!0,primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:b()},{icon:`download`,label:`Download`,onClick:b()}]},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,v.useState)({lastName:!1}),[r,i]=(0,v.useState)({left:[`firstName`,`lastName`]});return(0,y.jsx)(c,{...e,columnVisibility:t,onColumnVisibilityChange:n,stickyColumns:r,onStickyColumnsChange:i})}},D={args:{columns:[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:160},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:160}]},{id:`activity`,header:`Activity`,columns:[{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:140},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:160},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:200}]},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue(),size:160}],columnDisplay:!0},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,v.useState)({visits:!1}),[r,i]=(0,v.useState)({left:[`identity`]});return(0,y.jsx)(c,{...e,columnVisibility:t,onColumnVisibilityChange:n,stickyColumns:r,onStickyColumnsChange:i})}},O={args:{columns:[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:160},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:160}]},{id:`activity`,header:`Activity`,columns:[{accessorKey:`age`,header:`Age`,cell:e=>e.getValue(),size:140},{accessorKey:`visits`,header:`Visits`,cell:e=>e.getValue(),size:160},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:200}]},{accessorKey:`status`,header:`Status`,cell:e=>e.getValue(),size:160}],stickyColumns:{left:[`identity`]}}},k={args:{resizableColumns:!0,stickyColumns:{left:[`firstName`,`lastName`],right:[`status`]}}},A={args:{virtualized:!0,selectable:!0,stickyColumns:{left:[`firstName`],right:[`status`]}},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t]=(0,v.useState)(()=>m(0,1e3,[]).data);return(0,y.jsx)(c,{...e,data:t})}},j={args:{stickyColumns:{left:[`firstName`]},expandable:!0},parameters:{docs:{source:{type:`code`}}},render:function(e){let t=(0,v.useRef)(null);return(0,v.useEffect)(()=>{t.current?.expandRows([`1`])},[]),(0,y.jsx)(c,{...e,ref:t,renderExpandedRow:e=>(0,y.jsxs)(o,{direction:`column`,gap:`var(--xs)`,children:[(0,y.jsxs)(r,{variant:`body-sm-semi-bold`,children:[`Recent visits for `,e.firstName,` `,e.lastName]}),(0,y.jsx)(c,{columns:[{accessorKey:`firstName`,header:`First Name`,size:180},{accessorKey:`lastName`,header:`Last Name`,size:180},{accessorKey:`age`,header:`Age`,size:140},{accessorKey:`visits`,header:`Visits`,size:160},{accessorKey:`status`,header:`Status`,size:160}],data:d.slice(0,2),stickyColumns:{left:[`firstName`]}})]})})}},M={args:{expandable:!0,secondaryRowActions:[{icon:`delete`,label:`Delete`,onClick:b()}]},parameters:{docs:{source:{type:`code`}}},render:function(e){let t=(0,v.useRef)(null);return(0,v.useEffect)(()=>{t.current?.expandRows([`1`])},[]),(0,y.jsx)(c,{...e,ref:t,renderExpandedRow:()=>(0,y.jsx)(c,{columns:x,data:d.slice(0,2),expandable:!0,renderExpandedRow:()=>null,secondaryRowActions:[{icon:`delete`,label:`Delete`,onClick:b()}],stickyUtilityColumns:{left:!1,right:!1}})})}},N={args:{stickyColumns:{left:[`firstName`]},reorderable:!0,onOrderChange:b()}},P=[`Default`,`WithRowActions`,`ColumnDisplay`,`ColumnDisplayWithSavedState`,`ColumnDisplayWithColumnGroups`,`ColumnGroups`,`Resizable`,`Virtualized`,`Expandable`,`StickyUtilityColumns`,`Reorderable`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    stickyColumns: {
      left: ['firstName'],
      right: ['status']
    }
  }
}`,...C.parameters?.docs?.source},description:{story:"Keep key columns in view while the table scrolls horizontally. `left`\ncolumns stick to the left edge and `right` columns to the right edge, in\narray order. A divider shows on a sticky edge only while content is\nscrolled under it. Passing `stickyColumns` controls the state; omit it to\nlet the table keep its own. Sticky columns wider than the visible width are\nnot supported.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source},description:{story:`Utility columns are sticky by default: selection and expansion stay on the left
before the consumer columns, and row actions stay on the right after them.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`With \`columnDisplay\`, the Columns button in the header lists every column.
Its checkbox shows or hides the column, and the sticky toggle next to it
makes the column sticky on the left. The toggle appears on hover or focus
and stays visible while the column is sticky. A hidden sticky column stays listed in
\`stickyColumns\` and is sticky again once shown.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Pass `columnVisibility` and `stickyColumns` with their callbacks to restore\nand persist the user's choice. Here First Name and Last Name start sticky,\nand Last Name starts hidden, so showing it again makes it sticky right away.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`With column groups, only the top-level rows (a group or an ungrouped
column) have a sticky toggle, because making any leaf sticky makes its whole
top-level group sticky. Here the Identity group starts sticky and Visits
starts hidden.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:`Listing a group id, or any leaf of a group, makes every leaf of that
top-level group sticky. The group header renders once and sticks with its leaves.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    resizableColumns: true,
    stickyColumns: {
      left: ['firstName', 'lastName'],
      right: ['status']
    }
  }
}`,...k.parameters?.docs?.source},description:{story:`Sticky columns stay resizable. Resizing one moves the sticky columns after
it live during the drag.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Sticky columns work with virtualization and infinite scroll. A virtualized
table takes its height from its parent, so the parent needs a bounded
height.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:`Expanded row content stays in the visible area while the table scrolls
horizontally, and its background spans the full row. A nested table fits the
visible width, scrolls on its own and keeps its own sticky columns.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    expandable: true,
    secondaryRowActions: [{
      icon: 'delete',
      label: 'Delete',
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
    const tableRef = useRef<DsTableApi<Person>>(null);
    useEffect(() => {
      tableRef.current?.expandRows(['1']);
    }, []);
    return <DsTable {...args} ref={tableRef} renderExpandedRow={() => <DsTable columns={wideColumns} data={defaultData.slice(0, 2)} expandable renderExpandedRow={() => null} secondaryRowActions={[{
      icon: 'delete',
      label: 'Delete',
      onClick: fn()
    }]} stickyUtilityColumns={{
      left: false,
      right: false
    }} />} />;
  }
}`,...M.parameters?.docs?.source},description:{story:"`stickyUtilityColumns` lets the expander, select and reorder columns (`left`)\nor the row actions column (`right`) scroll with the content. Here a table\nnested in an expanded row turns both off, so its expander and row actions\nscroll with its cells. A side stays sticky while `stickyColumns` has columns\non it.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    stickyColumns: {
      left: ['firstName']
    },
    reorderable: true,
    onOrderChange: fn()
  }
}`,...N.parameters?.docs?.source},description:{story:`Drag-to-reorder keeps working: the drag handle column is sticky left, before
the consumer sticky columns.`,...N.parameters?.docs?.description}}}})))()}F();export{T as ColumnDisplay,D as ColumnDisplayWithColumnGroups,E as ColumnDisplayWithSavedState,O as ColumnGroups,C as Default,j as Expandable,N as Reorderable,k as Resizable,M as StickyUtilityColumns,A as Virtualized,w as WithRowActions,P as __namedExportsOrder,S as default};