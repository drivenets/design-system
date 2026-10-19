import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-Q1GcV6wX.js";import{n as r}from"./iframe-CeGZhPoG.js";import{t as i}from"./classnames-S7U-2yfe.js";import{n as a,t as o}from"./ds-checkbox-BTx6zqB_.js";import{n as s,t as c}from"./ds-button-v3-CmvchrpE.js";import{n as l,t as u}from"./ds-stack-CL5M0XwZ.js";import{n as d,t as f}from"./ds-table-BhJHKPs0.js";import{a as p,i as m,n as h,t as g}from"./story-decorators-FuxODzFW.js";import{n as _,r as v,t as y}from"./story-data-CNz-shmS.js";import{i as b,t as x}from"./components-BbclZsrn.js";var S,C,w,T,E,D,O,k,A,j;function M(){return(M=t((()=>{S=n(),C=e(i(),1),s(),o(),l(),d(),p(),v(),h(),x(),w=r(),{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Table/Columns`,tags:[`visual`],component:f,parameters:{layout:`fullscreen`},args:{columns:y,data:_,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:T()},decorators:[g]},D={name:`Progress as Infographic`,args:{columns:y.map(e=>`accessorKey`in e&&e.accessorKey===`progress`?{...e,header:`Profile Progress`,cell:e=>(0,w.jsx)(b,{value:e.getValue()})}:`accessorKey`in e&&e.accessorKey===`status`?{...e,header:`Status`,cell:e=>(0,w.jsx)(`span`,{className:(0,C.default)(m.statusCell,m[`statusCell--${e.getValue()}`]),children:e.getValue()})}:e),data:_}},O={parameters:{docs:{source:{type:`code`}}},render:function(e){let t=[{id:`age`,label:`Age`},{id:`visits`,label:`Visits`},{id:`status`,label:`Status`},{id:`progress`,label:`Profile Progress`}],[n,r]=(0,S.useState)({age:!0,visits:!0,status:!0,progress:!0}),i=e=>{r(t=>({...t,[e]:!t[e]}))};return(0,w.jsxs)(u,{direction:`column`,gap:16,children:[(0,w.jsx)(u,{direction:`row`,gap:16,flexWrap:`wrap`,children:t.map(e=>(0,w.jsx)(a,{label:e.label,checked:n[e.id],onCheckedChange:()=>i(e.id)},e.id))}),(0,w.jsx)(f,{...e,columnVisibility:n,onColumnVisibilityChange:r})]})}},k={args:{columnDisplay:!0}},A={parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,S.useState)({age:!1,visits:!1});return(0,w.jsxs)(u,{direction:`column`,gap:16,children:[(0,w.jsx)(u,{direction:`row`,children:(0,w.jsx)(c,{variant:`secondary`,size:`small`,onClick:()=>n({}),children:`Show all columns`})}),(0,w.jsx)(f,{...e,columnDisplay:!0,columnVisibility:t,onColumnVisibilityChange:n})]})}},j=[`WithProgressInfographic`,`ColumnHiding`,`ColumnDisplay`,`ColumnDisplayControlled`],D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"Show or hide columns dynamically via the controlled `columnVisibility` /\n`onColumnVisibilityChange` props — useful for customizable table views or\nresponsive layouts. Toggle a checkbox to add or remove the matching column.",...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    columnDisplay: true
  }
}`,...k.parameters?.docs?.source},description:{story:`The header ends with a tertiary icon-only Columns button. Its popup lists
every column with a checkbox (checked columns stay visible), a search field
that filters the list, and an "All columns" checkbox that toggles every
column at once.`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:"Control the visible columns from outside with `columnVisibility` and\n`onColumnVisibilityChange`, e.g. to persist the user's choice or reset it.",...A.parameters?.docs?.description}}}})))()}M();export{k as ColumnDisplay,A as ColumnDisplayControlled,O as ColumnHiding,D as WithProgressInfographic,j as __namedExportsOrder,E as default};