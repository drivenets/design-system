import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-DfRKKCEu.js";import{t as i}from"./classnames-BngcLiyu.js";import{n as a,t as o}from"./ds-checkbox-BOTfVRp2.js";import{n as s,t as c}from"./ds-button-v3-DPWsNP05.js";import{n as l,t as u}from"./ds-stack-VMj_lO3f.js";import{n as d,t as f}from"./ds-table-CI7qnNJi.js";import{a as p,i as m,n as h,o as g,s as _,t as v}from"./story-decorators-Bruq-xDg.js";import{n as y,r as b,t as x}from"./story-data-UTijnOh6.js";import{i as S,t as C}from"./components-DFRqGjvk.js";var w,T,E,D,O,k,A,j,M,N,P,F,I,L;function R(){return(R=t((()=>{w=n(),T=e(i(),1),s(),o(),l(),d(),_(),b(),h(),C(),E=r(),{fn:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/Table/Columns`,tags:[`visual`],component:f,parameters:{layout:`fullscreen`},args:{columns:x,data:y,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:D()},decorators:[v]},k={name:`Progress as Infographic`,args:{columns:x.map(e=>`accessorKey`in e&&e.accessorKey===`progress`?{...e,header:`Profile Progress`,cell:e=>(0,E.jsx)(S,{value:e.getValue()})}:`accessorKey`in e&&e.accessorKey===`status`?{...e,header:`Status`,cell:e=>(0,E.jsx)(`span`,{className:(0,T.default)(g.statusCell,g[`statusCell--${e.getValue()}`]),children:e.getValue()})}:e),data:y}},A={parameters:{docs:{source:{type:`code`}}},render:function(e){let t=[{id:`age`,label:`Age`},{id:`visits`,label:`Visits`},{id:`status`,label:`Status`},{id:`progress`,label:`Profile Progress`}],[n,r]=(0,w.useState)({age:!0,visits:!0,status:!0,progress:!0}),i=e=>{r(t=>({...t,[e]:!t[e]}))};return(0,E.jsxs)(u,{direction:`column`,gap:16,children:[(0,E.jsx)(u,{direction:`row`,gap:16,flexWrap:`wrap`,children:t.map(e=>(0,E.jsx)(a,{label:e.label,checked:n[e.id],onCheckedChange:()=>i(e.id)},e.id))}),(0,E.jsx)(f,{...e,columnVisibility:n,onColumnVisibilityChange:r})]})}},j={args:{columnDisplay:!0}},M={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,w.useState)({age:!1,visits:!1});return(0,E.jsxs)(u,{direction:`column`,gap:16,children:[(0,E.jsx)(u,{direction:`row`,children:(0,E.jsx)(c,{variant:`secondary`,size:`small`,onClick:()=>n({}),children:`Show all columns`})}),(0,E.jsx)(f,{...e,columnDisplay:!0,columnVisibility:t,onColumnVisibilityChange:n})]})}},N={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,w.useState)([]),[r,i]=(0,w.useState)({left:[`identity`]}),[a]=(0,w.useState)(()=>[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,enableHiding:!1},{accessorKey:`lastName`,header:`Last Name`}]},{id:`activity`,header:`Activity`,columns:[{id:`engagement`,header:`Engagement`,columns:[{accessorKey:`visits`,header:`Visits`},{accessorKey:`progress`,header:`Profile Progress`}]},{accessorKey:`status`,header:`Status`}]},{accessorKey:`age`,header:`Age`}]);return(0,E.jsxs)(u,{direction:`column`,gap:16,children:[(0,E.jsx)(u,{direction:`row`,children:(0,E.jsx)(c,{variant:`secondary`,size:`small`,onClick:()=>n([]),children:`Reset column order`})}),(0,E.jsx)(f,{...e,columns:a,columnDisplay:!0,reorderableColumns:!0,columnOrder:t,onColumnOrderChange:n,stickyColumns:r,onStickyColumnsChange:i})]})}},P={name:`Column reorder basic`,tags:[`!visual`],args:{columnDisplay:!0,reorderableColumns:!0}},F={name:`Column reorder, popover open`,tags:[`!manifest`,`!autodocs`],decorators:[m],parameters:{chromatic:{delay:500}},render:N.render},I={name:`Column display, search applied`,tags:[`!manifest`,`!autodocs`],decorators:[p(`pro`)],parameters:{chromatic:{delay:500}},render:N.render},L=[`WithProgressInfographic`,`ColumnHiding`,`ColumnDisplay`,`ColumnDisplayControlled`,`ColumnReorder`,`ColumnReorderBasic`,`ColumnReorderPopoverOpen`,`ColumnDisplaySearch`],k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  name: 'Progress as Infographic',
  args: {
    columns: columns.map(col => {
      if ('accessorKey' in col && col.accessorKey === 'progress') {
        return {
          ...col,
          header: 'Profile Progress',
          cell: info => <ProgressInfographic value={info.getValue() as number} />
        };
      } else if ('accessorKey' in col && col.accessorKey === 'status') {
        return {
          ...col,
          header: 'Status',
          cell: info => <span className={classnames(styles.statusCell, styles[\`statusCell--\${info.getValue() as Status}\`])}>
                            {info.getValue() as string}
                        </span>
        };
      }
      return col;
    }),
    data: defaultData
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const columnsToToggle = [{
      id: 'age',
      label: 'Age'
    }, {
      id: 'visits',
      label: 'Visits'
    }, {
      id: 'status',
      label: 'Status'
    }, {
      id: 'progress',
      label: 'Profile Progress'
    }];
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
      age: true,
      visits: true,
      status: true,
      progress: true
    });
    const toggleColumn = (columnId: string) => {
      setColumnVisibility(prev => ({
        ...prev,
        [columnId]: !prev[columnId]
      }));
    };
    return <DsStack direction="column" gap={16}>
                <DsStack direction="row" gap={16} flexWrap="wrap">
                    {columnsToToggle.map(column => <DsCheckbox key={column.id} label={column.label} checked={columnVisibility[column.id]} onCheckedChange={() => toggleColumn(column.id)} />)}
                </DsStack>

                <DsTable {...args} columnVisibility={columnVisibility} onColumnVisibilityChange={setColumnVisibility} />
            </DsStack>;
  }
}`,...A.parameters?.docs?.source},description:{story:"Show or hide columns dynamically via the controlled `columnVisibility` /\n`onColumnVisibilityChange` props — useful for customizable table views or\nresponsive layouts. Toggle a checkbox to add or remove the matching column.",...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    columnDisplay: true
  }
}`,...j.parameters?.docs?.source},description:{story:`The header ends with a tertiary icon-only Columns button. Its popup lists
every column with a checkbox (checked columns stay visible) and an "All
columns" checkbox that toggles every column at once.`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
      age: false,
      visits: false
    });
    return <DsStack direction="column" gap={16}>
                <DsStack direction="row">
                    <DsButtonV3 variant="secondary" size="small" onClick={() => setColumnVisibility({})}>
                        Show all columns
                    </DsButtonV3>
                </DsStack>

                <DsTable {...args} columnDisplay columnVisibility={columnVisibility} onColumnVisibilityChange={setColumnVisibility} />
            </DsStack>;
  }
}`,...M.parameters?.docs?.source},description:{story:"Control the visible columns from outside with `columnVisibility` and\n`onColumnVisibilityChange`, e.g. to persist the user's choice or reset it.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [columnOrder, setColumnOrder] = useState<string[]>([]);
    const [stickyColumns, setStickyColumns] = useState<DsTableStickyColumns>({
      left: ['identity']
    });
    const [reorderColumns] = useState<ColumnDef<Person>[]>(() => [{
      id: 'identity',
      header: 'Identity',
      columns: [{
        accessorKey: 'firstName',
        header: 'First Name',
        enableHiding: false
      }, {
        accessorKey: 'lastName',
        header: 'Last Name'
      }]
    }, {
      id: 'activity',
      header: 'Activity',
      columns: [{
        id: 'engagement',
        header: 'Engagement',
        columns: [{
          accessorKey: 'visits',
          header: 'Visits'
        }, {
          accessorKey: 'progress',
          header: 'Profile Progress'
        }]
      }, {
        accessorKey: 'status',
        header: 'Status'
      }]
    }, {
      accessorKey: 'age',
      header: 'Age'
    }]);
    return <DsStack direction="column" gap={16}>
                <DsStack direction="row">
                    <DsButtonV3 variant="secondary" size="small" onClick={() => setColumnOrder([])}>
                        Reset column order
                    </DsButtonV3>
                </DsStack>

                <DsTable {...args} columns={reorderColumns} columnDisplay reorderableColumns columnOrder={columnOrder} onColumnOrderChange={setColumnOrder} stickyColumns={stickyColumns} onStickyColumnsChange={setStickyColumns} />
            </DsStack>;
  }
}`,...N.parameters?.docs?.source},description:{story:"Add `reorderableColumns` to let users drag columns by their handle in the\nColumns popup. Columns move within their own group, and groups (with all\ntheir columns) and top-level columns among themselves. Sticky columns are\nlisted first and reorder only among themselves; making a column sticky moves\nit to the end of that block, and right-sticky columns stay at the right edge.\nLocked columns (`enableHiding: false`) can still be reordered. Store\n`columnOrder` from `onColumnOrderChange` to persist the order; columns missing\nfrom it later stay inside their group, and an empty array restores the\n`columns` order.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Column reorder basic',
  // The popover starts closed, so its screenshot would repeat Column Display's
  tags: ['!visual'],
  args: {
    columnDisplay: true,
    reorderableColumns: true
  }
}`,...P.parameters?.docs?.source},description:{story:"The minimal opt-in: `columnDisplay` adds the Columns popup and `reorderableColumns`\na drag handle to each of its rows.",...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Column reorder, popover open',
  tags: ['!manifest', '!autodocs'],
  decorators: [openColumnDisplayDecorator],
  parameters: {
    chromatic: {
      delay: 500
    }
  },
  render: ColumnReorder.render
}`,...F.parameters?.docs?.source},description:{story:`The Columns popover of the reorder story, open, for its visual test.`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Column display, search applied',
  tags: ['!manifest', '!autodocs'],
  decorators: [searchColumnDisplayDecorator('pro')],
  parameters: {
    chromatic: {
      delay: 500
    }
  },
  render: ColumnReorder.render
}`,...I.parameters?.docs?.source},description:{story:`The Columns popover of the reorder story, searched for "pro", for its visual test: the matching
column is highlighted, and the groups above it show greyed out as read-only context.`,...I.parameters?.docs?.description}}}})))()}R();export{j as ColumnDisplay,M as ColumnDisplayControlled,I as ColumnDisplaySearch,A as ColumnHiding,N as ColumnReorder,P as ColumnReorderBasic,F as ColumnReorderPopoverOpen,k as WithProgressInfographic,L as __namedExportsOrder,O as default};