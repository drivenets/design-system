import{a as e,n as t}from"./rolldown-runtime-sJBDdmOt.js";import{t as n}from"./react-DlPsW1c0.js";import{n as r}from"./iframe-CZ5iBjtE.js";import{t as i}from"./classnames-BngcLiyu.js";import{n as a,t as o}from"./ds-icon-CAoSGd8X.js";import{n as s,t as c}from"./ds-checkbox-DBGT2Tmx.js";import{n as l,t as u}from"./ds-typography-b4feiZEJ.js";import{n as d,t as f}from"./ds-button-v3-CM6CUIid.js";import{n as p,t as m}from"./ds-stack-CPlI5WyV.js";import{n as h,t as g}from"./ds-table-BuCT8KHA.js";import{a as _,i as v,n as y,o as b,s as x,t as S}from"./story-decorators-keMN9NCT.js";import{n as C,r as w,t as T}from"./story-data-UTijnOh6.js";import{i as E,t as D}from"./components-DQnoNP8T.js";var O,k,A;function j(){return(j=t((()=>{O=`_nowrapLabel_1qftv_1`,k=`_iconLabel_1qftv_5`,A={nowrapLabel:O,iconLabel:k}})))()}var M,N,P,F,I,L,R,z,B,V,H,U,W,G,K;function q(){return(q=t((()=>{M=n(),N=e(i(),1),d(),c(),o(),p(),u(),h(),x(),j(),w(),y(),D(),P=r(),{fn:F}=__STORYBOOK_MODULE_TEST__,I={title:`Components/Table/Columns`,tags:[`visual`],component:g,parameters:{layout:`fullscreen`},args:{columns:T,data:C,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:F()},decorators:[S]},L={name:`Progress as Infographic`,args:{columns:T.map(e=>`accessorKey`in e&&e.accessorKey===`progress`?{...e,header:`Profile Progress`,cell:e=>(0,P.jsx)(E,{value:e.getValue()})}:`accessorKey`in e&&e.accessorKey===`status`?{...e,header:`Status`,cell:e=>(0,P.jsx)(`span`,{className:(0,N.default)(b.statusCell,b[`statusCell--${e.getValue()}`]),children:e.getValue()})}:e),data:C}},R={name:`Cell content`,render:()=>(0,P.jsx)(g,{bordered:!0,fullWidth:!0,rowSize:`large`,columns:[{accessorKey:`description`,header:`Plain text`,cell:e=>e.getValue(),size:220},{accessorKey:`owner`,header:`Icon and label`,cell:e=>(0,P.jsxs)(`span`,{className:A.nowrapLabel,children:[(0,P.jsx)(a,{icon:`person`,size:`tiny`}),` `,e.getValue()]}),size:180},{accessorKey:`status`,header:`Flex layout`,cell:e=>(0,P.jsxs)(`div`,{className:A.iconLabel,children:[(0,P.jsx)(a,{icon:`schedule`,size:`small`}),(0,P.jsx)(`span`,{children:e.getValue()})]}),size:200},{accessorKey:`notes`,header:`Clamped typography`,cell:e=>(0,P.jsx)(l,{variant:`body-sm-reg`,truncate:2,children:e.getValue()}),size:220}],data:[{id:`1`,description:`Weekly backup of the core routers, kept for ninety days in the primary data center`,owner:`Network operations center`,status:`Waiting for approval`,notes:`Runs every Sunday at midnight and pauses during maintenance windows announced in advance`},{id:`2`,description:`Firmware rollout`,owner:`Platform team`,status:`Scheduled for the next maintenance window`,notes:`Staged rollout`}]})},z={parameters:{docs:{source:{type:`code`}}},render:function(e){let t=[{id:`age`,label:`Age`},{id:`visits`,label:`Visits`},{id:`status`,label:`Status`},{id:`progress`,label:`Profile Progress`}],[n,r]=(0,M.useState)({age:!0,visits:!0,status:!0,progress:!0}),i=e=>{r(t=>({...t,[e]:!t[e]}))};return(0,P.jsxs)(m,{direction:`column`,gap:16,children:[(0,P.jsx)(m,{direction:`row`,gap:16,flexWrap:`wrap`,children:t.map(e=>(0,P.jsx)(s,{label:e.label,checked:n[e.id],onCheckedChange:()=>i(e.id)},e.id))}),(0,P.jsx)(g,{...e,columnVisibility:n,onColumnVisibilityChange:r})]})}},B={args:{columnDisplay:!0}},V={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,M.useState)({age:!1,visits:!1});return(0,P.jsxs)(m,{direction:`column`,gap:16,children:[(0,P.jsx)(m,{direction:`row`,children:(0,P.jsx)(f,{variant:`secondary`,size:`small`,onClick:()=>n({}),children:`Show all columns`})}),(0,P.jsx)(g,{...e,columnDisplay:!0,columnVisibility:t,onColumnVisibilityChange:n})]})}},H={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,M.useState)([]),[r,i]=(0,M.useState)({left:[`identity`]}),[a]=(0,M.useState)(()=>[{id:`identity`,header:`Identity`,columns:[{accessorKey:`firstName`,header:`First Name`,enableHiding:!1},{accessorKey:`lastName`,header:`Last Name`}]},{id:`activity`,header:`Activity`,columns:[{id:`engagement`,header:`Engagement`,columns:[{accessorKey:`visits`,header:`Visits`},{accessorKey:`progress`,header:`Profile Progress`}]},{accessorKey:`status`,header:`Status`}]},{accessorKey:`age`,header:`Age`}]);return(0,P.jsxs)(m,{direction:`column`,gap:16,children:[(0,P.jsx)(m,{direction:`row`,children:(0,P.jsx)(f,{variant:`secondary`,size:`small`,onClick:()=>n([]),children:`Reset column order`})}),(0,P.jsx)(g,{...e,columns:a,columnDisplay:!0,reorderableColumns:!0,columnOrder:t,onColumnOrderChange:n,stickyColumns:r,onStickyColumnsChange:i})]})}},U={name:`Column reorder basic`,tags:[`!visual`],args:{columnDisplay:!0,reorderableColumns:!0}},W={name:`Column reorder, popover open`,tags:[`!manifest`,`!autodocs`],decorators:[v],parameters:{chromatic:{delay:500}},render:H.render},G={name:`Column display, search applied`,tags:[`!manifest`,`!autodocs`],decorators:[_(`pro`)],parameters:{chromatic:{delay:500}},render:H.render},K=[`WithProgressInfographic`,`CellContent`,`ColumnHiding`,`ColumnDisplay`,`ColumnDisplayControlled`,`ColumnReorder`,`ColumnReorderBasic`,`ColumnReorderPopoverOpen`,`ColumnDisplaySearch`],L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Cell content',
  render: () => <DsTable bordered fullWidth rowSize="large" columns={[{
    accessorKey: 'description',
    header: 'Plain text',
    cell: info => info.getValue(),
    size: 220
  }, {
    accessorKey: 'owner',
    header: 'Icon and label',
    cell: info => <span className={columnsStyles.nowrapLabel}>
                            <DsIcon icon="person" size="tiny" /> {info.getValue<string>()}
                        </span>,
    size: 180
  }, {
    accessorKey: 'status',
    header: 'Flex layout',
    cell: info => <div className={columnsStyles.iconLabel}>
                            <DsIcon icon="schedule" size="small" />
                            <span>{info.getValue<string>()}</span>
                        </div>,
    size: 200
  }, {
    accessorKey: 'notes',
    header: 'Clamped typography',
    cell: info => <DsTypography variant="body-sm-reg" truncate={2}>
                            {info.getValue<string>()}
                        </DsTypography>,
    size: 220
  }]} data={[{
    id: '1',
    description: 'Weekly backup of the core routers, kept for ninety days in the primary data center',
    owner: 'Network operations center',
    status: 'Waiting for approval',
    notes: 'Runs every Sunday at midnight and pauses during maintenance windows announced in advance'
  }, {
    id: '2',
    description: 'Firmware rollout',
    owner: 'Platform team',
    status: 'Scheduled for the next maintenance window',
    notes: 'Staged rollout'
  }]} />
}`,...R.parameters?.docs?.source},description:{story:"Text, spans and links wrap and clamp to two lines with an ellipsis, and inline `nowrap` content\nends in an ellipsis on one line. Cells that render their own block or flex layout don't get the\ntable's clamp, so clamp long text inside them, e.g. with `DsTypography` `truncate`.",...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:"Show or hide columns dynamically via the controlled `columnVisibility` /\n`onColumnVisibilityChange` props — useful for customizable table views or\nresponsive layouts. Toggle a checkbox to add or remove the matching column.",...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    columnDisplay: true
  }
}`,...B.parameters?.docs?.source},description:{story:`The header ends with a tertiary icon-only Columns button. Its popup lists
every column with a checkbox (checked columns stay visible) and an "All
columns" checkbox that toggles every column at once.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"Control the visible columns from outside with `columnVisibility` and\n`onColumnVisibilityChange`, e.g. to persist the user's choice or reset it.",...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source},description:{story:"Add `reorderableColumns` to let users drag columns by their handle in the\nColumns popup. Columns move within their own group, and groups (with all\ntheir columns) and top-level columns among themselves. Sticky columns are\nlisted first and reorder only among themselves; making a column sticky moves\nit to the end of that block, and right-sticky columns stay at the right edge.\nLocked columns (`enableHiding: false`) can still be reordered. Store\n`columnOrder` from `onColumnOrderChange` to persist the order; columns missing\nfrom it later stay inside their group, and an empty array restores the\n`columns` order.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  name: 'Column reorder basic',
  // The popover starts closed, so its screenshot would repeat Column Display's
  tags: ['!visual'],
  args: {
    columnDisplay: true,
    reorderableColumns: true
  }
}`,...U.parameters?.docs?.source},description:{story:"The minimal opt-in: `columnDisplay` adds the Columns popup and `reorderableColumns`\na drag handle to each of its rows.",...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  name: 'Column reorder, popover open',
  tags: ['!manifest', '!autodocs'],
  decorators: [openColumnDisplayDecorator],
  parameters: {
    chromatic: {
      delay: 500
    }
  },
  render: ColumnReorder.render
}`,...W.parameters?.docs?.source},description:{story:`The Columns popover of the reorder story, open, for its visual test.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Column display, search applied',
  tags: ['!manifest', '!autodocs'],
  decorators: [searchColumnDisplayDecorator('pro')],
  parameters: {
    chromatic: {
      delay: 500
    }
  },
  render: ColumnReorder.render
}`,...G.parameters?.docs?.source},description:{story:`The Columns popover of the reorder story, searched for "pro", for its visual test: the matching
column is highlighted, and the groups above it show greyed out as read-only context.`,...G.parameters?.docs?.description}}}})))()}q();export{R as CellContent,B as ColumnDisplay,V as ColumnDisplayControlled,G as ColumnDisplaySearch,z as ColumnHiding,H as ColumnReorder,U as ColumnReorderBasic,W as ColumnReorderPopoverOpen,L as WithProgressInfographic,K as __namedExportsOrder,I as default};