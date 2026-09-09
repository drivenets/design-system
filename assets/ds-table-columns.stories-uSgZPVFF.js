import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./classnames-Cm4Wq5Eu.js";import{i as a,t as o}from"./ds-checkbox-BIcPs-sn.js";import{n as s,t as c}from"./ds-stack-GU0hZWeR.js";import{n as l,t as u}from"./ds-table-DumaNPZU.js";import{i as d,n as f,r as p,t as m}from"./story-decorators-B0BgvTCA.js";import{n as h,r as g,t as _}from"./story-data-DABjxFNS.js";import{i as v,t as y}from"./components-Ct8k3W1b.js";var b,x,S,C,w,T,E,D;t((()=>{b=e(n(),1),x=e(i(),1),o(),s(),l(),d(),g(),f(),y(),S=r(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Table/Columns`,component:u,parameters:{layout:`fullscreen`},args:{columns:_,data:h,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:C()},decorators:[m]},T={name:`Progress as Infographic`,args:{columns:_.map(e=>`accessorKey`in e&&e.accessorKey===`progress`?{...e,header:`Profile Progress`,cell:e=>(0,S.jsx)(v,{value:e.getValue()})}:`accessorKey`in e&&e.accessorKey===`status`?{...e,header:`Status`,cell:e=>(0,S.jsx)(`span`,{className:(0,x.default)(p.statusCell,p[`statusCell--${e.getValue()}`]),children:e.getValue()})}:e),data:h}},E={parameters:{docs:{source:{type:`code`}}},render:function(e){let t=[{id:`age`,label:`Age`},{id:`visits`,label:`Visits`},{id:`status`,label:`Status`},{id:`progress`,label:`Profile Progress`}],[n,r]=(0,b.useState)({age:!0,visits:!0,status:!0,progress:!0}),i=e=>{r(t=>({...t,[e]:!t[e]}))};return(0,S.jsxs)(c,{direction:`column`,gap:16,children:[(0,S.jsx)(c,{direction:`row`,gap:16,flexWrap:`wrap`,children:t.map(e=>(0,S.jsx)(a,{label:e.label,checked:n[e.id],onCheckedChange:()=>i(e.id)},e.id))}),(0,S.jsx)(u,{...e,columnVisibility:n,onColumnVisibilityChange:r})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Show or hide columns dynamically via the controlled `columnVisibility` /\n`onColumnVisibilityChange` props — useful for customizable table views or\nresponsive layouts. Toggle a checkbox to add or remove the matching column.",...E.parameters?.docs?.description}}},D=[`WithProgressInfographic`,`ColumnHiding`]}))();export{E as ColumnHiding,T as WithProgressInfographic,D as __namedExportsOrder,w as default};