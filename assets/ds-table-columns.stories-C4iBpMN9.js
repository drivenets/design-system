import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-C3gMQG0U.js";import{c as f}from"./index-DA3TTJQo.js";import{D as v}from"./ds-checkbox-DCgxTFW3.js";import{D as p}from"./ds-table-D-i4HcR7.js";import{s as o}from"./ds-table.stories.module-D_XXzStM.js";import{d,f as x,c as h,P as D,T}from"./table-empty-state-Ba9u36Pc.js";import{g as B}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BQsttSH3.js";import"./index-DMnjmsFH.js";import"./index-DnI0hzs-.js";import"./index-CTniaEH1.js";import"./index-cLWytakU.js";import"./ds-icon-B71CCHuR.js";import"./core-table-CoEY8mPk.js";import"./ds-button-CfQjX_jA.js";import"./ds-button-legacy-1UC2BuXq.js";import"./ds-button-new-Cd9ylpe2.js";import"./ds-typography-CePlxxxm.js";import"./index-utsX2Owj.js";import"./ds-dropdown-menu-BrZu8VZD.js";import"./index-CPbSYjfc.js";import"./Combination-BBTimbWL.js";import"./index-CVIUFzGh.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-DgyLDMMI.js";import"./ds-text-input-BHTuRxVh.js";import"./portal-RJS6uyo2.js";import"./create-split-props-u5h9OPvL.js";import"./index-BGvA3V6P.js";import"./use-locale-context-BbVyF5Ga.js";import"./use-presence-BHUhjpJq.js";import"./index-CFiI0jYP.js";import"./index-BZfFtMhG.js";const{expect:n,userEvent:g,within:C}=__STORYBOOK_MODULE_TEST__,ie={title:"Design System/Table/Columns",component:p,parameters:{layout:"fullscreen"},args:{columns:h,data:d,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:a.jsx(T,{}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[x]},r={name:"Progress as Infographic",args:{columns:h.map(e=>"accessorKey"in e&&e.accessorKey==="progress"?{...e,header:"Profile Progress",cell:t=>a.jsx(D,{value:t.getValue()})}:"accessorKey"in e&&e.accessorKey==="status"?{...e,header:"Status",cell:t=>a.jsx("span",{className:f(o.statusCell,o[`statusCell--${t.getValue()}`]),children:t.getValue()})}:e),data:d},play:async({canvas:e})=>{await n(B(e)).toHaveLength(15),await n(e.getByText("75%")).toBeInTheDocument(),await n(e.getAllByText("single").length).toBeGreaterThan(0)}},l={render:function(t){const i=[{id:"age",label:"Age"},{id:"visits",label:"Visits"},{id:"status",label:"Status"},{id:"progress",label:"Profile Progress"}],[c,m]=b.useState({age:!0,visits:!0,status:!0,progress:!0}),y=s=>{m(u=>({...u,[s]:!u[s]}))};return a.jsxs("div",{children:[a.jsxs("div",{className:o.programmaticSelectionDemo,children:[a.jsx("h4",{className:o.programmaticSelectionDemo__title,children:"Column Hiding Demo"}),a.jsx("p",{className:o.programmaticSelectionDemo__description,children:"Use the checkboxes below to show or hide specific columns dynamically. This is useful for customizable table views or responsive layouts."})]}),a.jsx("div",{className:o.programmaticSelectionControls,children:i.map(s=>a.jsx(v,{label:s.label,checked:c[s.id],onCheckedChange:()=>y(s.id)},s.id))}),a.jsx(p,{...t,columnVisibility:c,onColumnVisibilityChange:m})]})},args:{},play:async({canvasElement:e})=>{const t=C(e);await n(t.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await n(t.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument();const i=t.getByRole("checkbox",{name:/^age$/i});await g.click(i),await n(t.queryByRole("columnheader",{name:/^age$/i})).not.toBeInTheDocument(),await n(t.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await n(t.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await g.click(i),await n(t.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const re=["WithProgressInfographic","ColumnHiding"];export{l as ColumnHiding,r as WithProgressInfographic,re as __namedExportsOrder,ie as default};
