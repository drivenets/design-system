import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BUxaTXVU.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./classnames-Dm_LJ4P4.js";import{r as a}from"./ds-checkbox.types-BM7g68-p.js";import{t as o}from"./ds-checkbox-fX_owlMx.js";import{n as s,t as c}from"./ds-table-CK5y-Jlq.js";import{n as l,t as u}from"./ds-table.stories.module-BH4xkOob.js";import{c as d,l as f,n as p,o as m,t as h,u as g}from"./components-D9exdW5t.js";import{n as _,t as v}from"./story-decorators-9jfApPlh.js";var y,b,x,S,C,w,T;e((()=>{y=t(n(),1),b=t(i(),1),o(),s(),l(),g(),_(),h(),x=r(),S={title:`Components/Table/Columns`,component:c,parameters:{layout:`fullscreen`},args:{columns:d,data:f,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,x.jsx)(p,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[v]},C={name:`Progress as Infographic`,args:{columns:d.map(e=>`accessorKey`in e&&e.accessorKey===`progress`?{...e,header:`Profile Progress`,cell:e=>(0,x.jsx)(m,{value:e.getValue()})}:`accessorKey`in e&&e.accessorKey===`status`?{...e,header:`Status`,cell:e=>(0,x.jsx)(`span`,{className:(0,b.default)(u.statusCell,u[`statusCell--${e.getValue()}`]),children:e.getValue()})}:e),data:f}},w={render:function(e){let t=[{id:`age`,label:`Age`},{id:`visits`,label:`Visits`},{id:`status`,label:`Status`},{id:`progress`,label:`Profile Progress`}],[n,r]=(0,y.useState)({age:!0,visits:!0,status:!0,progress:!0}),i=e=>{r(t=>({...t,[e]:!t[e]}))};return(0,x.jsxs)(`div`,{children:[(0,x.jsxs)(`div`,{className:u.programmaticSelectionDemo,children:[(0,x.jsx)(`h4`,{className:u.programmaticSelectionDemo__title,children:`Column Hiding Demo`}),(0,x.jsx)(`p`,{className:u.programmaticSelectionDemo__description,children:`Use the checkboxes below to show or hide specific columns dynamically. This is useful for customizable table views or responsive layouts.`})]}),(0,x.jsx)(`div`,{className:u.programmaticSelectionControls,children:t.map(e=>(0,x.jsx)(a,{label:e.label,checked:n[e.id],onCheckedChange:()=>i(e.id)},e.id))}),(0,x.jsx)(c,{...e,columnVisibility:n,onColumnVisibilityChange:r})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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