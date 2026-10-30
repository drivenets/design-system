import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-DoK0jQ5C.js";import{t as i}from"./classnames-BngcLiyu.js";import{n as a,t as o}from"./ds-checkbox-3_sGyawU.js";import{n as s,t as c}from"./ds-button-v3-DLpWeL71.js";import{n as l,t as u}from"./ds-stack-P9eTFqTE.js";import{n as d,t as f}from"./ds-table-DJY__gnz.js";import{a as p,i as m,n as h,o as g,t as _}from"./story-decorators-DLqg6IpV.js";import{n as v,r as y,t as b}from"./story-data-UTijnOh6.js";import{i as x,t as S}from"./components-CP4L50sJ.js";var C,w,T,E,D,O,k,A,j,M,N,P,F;function I(){return(I=t((()=>{C=n(),w=e(i(),1),s(),o(),l(),d(),g(),y(),h(),S(),T=r(),{fn:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/Table/Columns`,tags:[`visual`],component:f,parameters:{layout:`fullscreen`},args:{columns:b,data:v,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:E()},decorators:[_]},O={name:`Progress as Infographic`,args:{columns:b.map(e=>`accessorKey`in e&&e.accessorKey===`progress`?{...e,header:`Profile Progress`,cell:e=>(0,T.jsx)(x,{value:e.getValue()})}:`accessorKey`in e&&e.accessorKey===`status`?{...e,header:`Status`,cell:e=>(0,T.jsx)(`span`,{className:(0,w.default)(p.statusCell,p[`statusCell--${e.getValue()}`]),children:e.getValue()})}:e),data:v}},k={parameters:{docs:{source:{type:`code`}}},render:function(e){let t=[{id:`age`,label:`Age`},{id:`visits`,label:`Visits`},{id:`status`,label:`Status`},{id:`progress`,label:`Profile Progress`}],[n,r]=(0,C.useState)({age:!0,visits:!0,status:!0,progress:!0}),i=e=>{r(t=>({...t,[e]:!t[e]}))};return(0,T.jsxs)(u,{direction:`column`,gap:16,children:[(0,T.jsx)(u,{direction:`row`,gap:16,flexWrap:`wrap`,children:t.map(e=>(0,T.jsx)(a,{label:e.label,checked:n[e.id],onCheckedChange:()=>i(e.id)},e.id))}),(0,T.jsx)(f,{...e,columnVisibility:n,onColumnVisibilityChange:r})]})}},A={args:{columnDisplay:!0}},j={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,C.useState)({age:!1,visits:!1});return(0,T.jsxs)(u,{direction:`column`,gap:16,children:[(0,T.jsx)(u,{direction:`row`,children:(0,T.jsx)(c,{variant:`secondary`,size:`small`,onClick:()=>n({}),children:`Show all columns`})}),(0,T.jsx)(f,{...e,columnDisplay:!0,columnVisibility:t,onColumnVisibilityChange:n})]})}},M={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,C.useState)([]),[r,i]=(0,C.useState)({left:[`identity`]}),[a]=(0,C.useState)(()=>[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,enableHiding:!1},{accessorKey:`lastName`,header:`Last Name`}]},{id:`activity`,header:`Activity`,columns:[{id:`engagement`,header:`Engagement`,columns:[{accessorKey:`visits`,header:`Visits`},{accessorKey:`progress`,header:`Profile Progress`}]},{accessorKey:`status`,header:`Status`}]},{accessorKey:`age`,header:`Age`}]);return(0,T.jsxs)(u,{direction:`column`,gap:16,children:[(0,T.jsx)(u,{direction:`row`,children:(0,T.jsx)(c,{variant:`secondary`,size:`small`,onClick:()=>n([]),children:`Reset column order`})}),(0,T.jsx)(f,{...e,columns:a,columnDisplay:!0,reorderableColumns:!0,columnOrder:t,onColumnOrderChange:n,stickyColumns:r,onStickyColumnsChange:i})]})}},N={name:`Column reorder basic`,tags:[`!visual`],args:{columnDisplay:!0,reorderableColumns:!0}},P={name:`Column reorder, popover open`,tags:[`!manifest`,`!autodocs`],decorators:[m],parameters:{chromatic:{delay:500}},render:M.render},F=[`WithProgressInfographic`,`ColumnHiding`,`ColumnDisplay`,`ColumnDisplayControlled`,`ColumnReorder`,`ColumnReorderBasic`,`ColumnReorderPopoverOpen`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Show or hide columns dynamically via the controlled `columnVisibility` /\n`onColumnVisibilityChange` props — useful for customizable table views or\nresponsive layouts. Toggle a checkbox to add or remove the matching column.",...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    columnDisplay: true
  }
}`,...A.parameters?.docs?.source},description:{story:`The header ends with a tertiary icon-only Columns button. Its popup lists
every column with a checkbox (checked columns stay visible) and an "All
columns" checkbox that toggles every column at once.`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source},description:{story:"Control the visible columns from outside with `columnVisibility` and\n`onColumnVisibilityChange`, e.g. to persist the user's choice or reset it.",...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Add `reorderableColumns` to let users drag columns by their handle in the\nColumns popup. Columns move within their own group, and groups (with all\ntheir columns) and top-level columns among themselves. Sticky columns are\nlisted first and reorder only among themselves; making a column sticky moves\nit to the end of that block, and right-sticky columns stay at the right edge.\nLocked columns (`enableHiding: false`) can still be reordered. Store\n`columnOrder` from `onColumnOrderChange` to persist the order; columns missing\nfrom it later stay inside their group, and an empty array restores the\n`columns` order.",...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Column reorder basic',
  // The popover starts closed, so its screenshot would repeat Column Display's
  tags: ['!visual'],
  args: {
    columnDisplay: true,
    reorderableColumns: true
  }
}`,...N.parameters?.docs?.source},description:{story:"The minimal opt-in: `columnDisplay` adds the Columns popup and `reorderableColumns`\na drag handle to each of its rows.",...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Column reorder, popover open',
  tags: ['!manifest', '!autodocs'],
  decorators: [openColumnDisplayDecorator],
  parameters: {
    chromatic: {
      delay: 500
    }
  },
  render: ColumnReorder.render
}`,...P.parameters?.docs?.source},description:{story:`The Columns popover of the reorder story, open, for its visual test.`,...P.parameters?.docs?.description}}}})))()}I();export{A as ColumnDisplay,j as ColumnDisplayControlled,k as ColumnHiding,M as ColumnReorder,N as ColumnReorderBasic,P as ColumnReorderPopoverOpen,O as WithProgressInfographic,F as __namedExportsOrder,D as default};