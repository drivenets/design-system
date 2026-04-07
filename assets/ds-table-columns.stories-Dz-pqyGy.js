import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-XhZZ1OAW.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{r as a}from"./ds-checkbox.types-CdHXp0jT.js";import{t as o}from"./ds-checkbox-CtZB7pCU.js";import{n as s,t as c}from"./ds-table-Xw0fpqIp.js";import{n as l,t as u}from"./ds-table.stories.module-CQzn1mCD.js";import{a as d,c as f,i as p,l as m,n as h,o as g,s as _,t as v}from"./components-B33OsXNO.js";var y,b,x,S,C,w,T;t((()=>{y=e(n(),1),b=e(i(),1),o(),s(),l(),m(),g(),v(),x=r(),S={title:`Design System/Table/Columns`,component:c,parameters:{layout:`fullscreen`},args:{columns:_,data:f,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,x.jsx)(h,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[d]},C={name:`Progress as Infographic`,args:{columns:_.map(e=>`accessorKey`in e&&e.accessorKey===`progress`?{...e,header:`Profile Progress`,cell:e=>(0,x.jsx)(p,{value:e.getValue()})}:`accessorKey`in e&&e.accessorKey===`status`?{...e,header:`Status`,cell:e=>(0,x.jsx)(`span`,{className:(0,b.default)(u.statusCell,u[`statusCell--${e.getValue()}`]),children:e.getValue()})}:e),data:f}},w={render:function(e){let t=[{id:`age`,label:`Age`},{id:`visits`,label:`Visits`},{id:`status`,label:`Status`},{id:`progress`,label:`Profile Progress`}],[n,r]=(0,y.useState)({age:!0,visits:!0,status:!0,progress:!0}),i=e=>{r(t=>({...t,[e]:!t[e]}))};return(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:u.programmaticSelectionDemo,children:[(0,x.jsx)(`h4`,{className:u.programmaticSelectionDemo__title,children:`Column Hiding Demo`}),(0,x.jsx)(`p`,{className:u.programmaticSelectionDemo__description,children:`Use the checkboxes below to show or hide specific columns dynamically. This is useful for customizable table views or responsive layouts.`})]}),(0,x.jsx)(`div`,{className:u.programmaticSelectionControls,children:t.map(e=>(0,x.jsx)(a,{label:e.label,checked:n[e.id],onCheckedChange:()=>i(e.id)},e.id))}),(0,x.jsx)(c,{...e,columnVisibility:n,onColumnVisibilityChange:r})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Progress as Infographic',
  args: {
    columns: columns.map(col => {
      if ('accessorKey' in col && col.accessorKey === 'progress') {
        return {
          ...col,
          header: 'Profile Progress',
          cell: info => <ProgressInfographic value={info.getValue() as number} />
        } as ColumnDef<Person>;
      } else if ('accessorKey' in col && col.accessorKey === 'status') {
        return {
          ...col,
          header: 'Status',
          cell: info => <span className={classnames(styles.statusCell, styles[\`statusCell--\${info.getValue() as Status}\`])}>
                            {info.getValue() as string}
                        </span>
        } as ColumnDef<Person>;
      }
      return col;
    }),
    data: defaultData
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Column Hiding Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        Use the checkboxes below to show or hide specific columns dynamically. This is useful for
                        customizable table views or responsive layouts.
                    </p>
                </div>

                <div className={styles.programmaticSelectionControls}>
                    {columnsToToggle.map(column => <DsCheckbox key={column.id} label={column.label} checked={columnVisibility[column.id]} onCheckedChange={() => toggleColumn(column.id)} />)}
                </div>

                <DsTable {...args} columnVisibility={columnVisibility} onColumnVisibilityChange={setColumnVisibility} />
            </div>;
  }
}`,...w.parameters?.docs?.source}}},T=[`WithProgressInfographic`,`ColumnHiding`]}))();export{w as ColumnHiding,C as WithProgressInfographic,T as __namedExportsOrder,S as default};