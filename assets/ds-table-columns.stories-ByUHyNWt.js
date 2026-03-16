import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BtUy5DzV.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{r as a}from"./ds-checkbox.types-C_AW-a3-.js";import{t as o}from"./ds-checkbox-D6U5WokY.js";import{n as s,t as c}from"./ds-table-CFswuBdQ.js";import{n as l,t as u}from"./ds-table.stories.module-hrO-tFWF.js";import{a as d,c as f,l as p,n as m,o as h,s as g,t as _,u as v}from"./components-LDPsn63U.js";import{n as y,t as b}from"./story-test-helpers-wdfDd2bq.js";var x,S,C,w,T,E,D,O,k,A;t((()=>{x=e(n(),1),S=e(i(),1),o(),s(),l(),v(),g(),y(),_(),C=r(),{expect:w,userEvent:T,within:E}=__STORYBOOK_MODULE_TEST__,D={title:`Design System/Table/Columns`,component:c,parameters:{layout:`fullscreen`},args:{columns:f,data:p,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,C.jsx)(m,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[h]},O={name:`Progress as Infographic`,args:{columns:f.map(e=>`accessorKey`in e&&e.accessorKey===`progress`?{...e,header:`Profile Progress`,cell:e=>(0,C.jsx)(d,{value:e.getValue()})}:`accessorKey`in e&&e.accessorKey===`status`?{...e,header:`Status`,cell:e=>(0,C.jsx)(`span`,{className:(0,S.default)(u.statusCell,u[`statusCell--${e.getValue()}`]),children:e.getValue()})}:e),data:p},play:async({canvas:e})=>{await w(b(e)).toHaveLength(15),await w(e.getByText(`75%`)).toBeInTheDocument(),await w(e.getAllByText(`single`).length).toBeGreaterThan(0)}},k={render:function(e){let t=[{id:`age`,label:`Age`},{id:`visits`,label:`Visits`},{id:`status`,label:`Status`},{id:`progress`,label:`Profile Progress`}],[n,r]=(0,x.useState)({age:!0,visits:!0,status:!0,progress:!0}),i=e=>{r(t=>({...t,[e]:!t[e]}))};return(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`div`,{className:u.programmaticSelectionDemo,children:[(0,C.jsx)(`h4`,{className:u.programmaticSelectionDemo__title,children:`Column Hiding Demo`}),(0,C.jsx)(`p`,{className:u.programmaticSelectionDemo__description,children:`Use the checkboxes below to show or hide specific columns dynamically. This is useful for customizable table views or responsive layouts.`})]}),(0,C.jsx)(`div`,{className:u.programmaticSelectionControls,children:t.map(e=>(0,C.jsx)(a,{label:e.label,checked:n[e.id],onCheckedChange:()=>i(e.id)},e.id))}),(0,C.jsx)(c,{...e,columnVisibility:n,onColumnVisibilityChange:r})]})},args:{},play:async({canvasElement:e})=>{let t=E(e);await w(t.getByRole(`columnheader`,{name:/^age$/i})).toBeInTheDocument(),await w(t.getByRole(`columnheader`,{name:/visits/i})).toBeInTheDocument();let n=t.getByRole(`checkbox`,{name:/^age$/i});await T.click(n),await w(t.queryByRole(`columnheader`,{name:/^age$/i})).not.toBeInTheDocument(),await w(t.getByRole(`columnheader`,{name:/first name/i})).toBeInTheDocument(),await w(t.getByRole(`columnheader`,{name:/visits/i})).toBeInTheDocument(),await T.click(n),await w(t.getByRole(`columnheader`,{name:/^age$/i})).toBeInTheDocument()}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
  },
  play: async ({
    canvas
  }) => {
    await expect(getDataRows(canvas)).toHaveLength(15);
    await expect(canvas.getByText('75%')).toBeInTheDocument();
    await expect(canvas.getAllByText('single').length).toBeGreaterThan(0);
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
  },
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('columnheader', {
      name: /^age$/i
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: /visits/i
    })).toBeInTheDocument();
    const ageCheckbox = canvas.getByRole('checkbox', {
      name: /^age$/i
    });
    await userEvent.click(ageCheckbox);
    await expect(canvas.queryByRole('columnheader', {
      name: /^age$/i
    })).not.toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: /first name/i
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: /visits/i
    })).toBeInTheDocument();
    await userEvent.click(ageCheckbox);
    await expect(canvas.getByRole('columnheader', {
      name: /^age$/i
    })).toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}},A=[`WithProgressInfographic`,`ColumnHiding`]}))();export{k as ColumnHiding,O as WithProgressInfographic,A as __namedExportsOrder,D as default};