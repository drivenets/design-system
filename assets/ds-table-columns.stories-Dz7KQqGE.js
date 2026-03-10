import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-BmSPM-Ld.js";import{c as f}from"./index-CnMwAcS8.js";import{D as v}from"./ds-checkbox-BwVS5o0l.js";import{D as g}from"./ds-table-BAeC8xHJ.js";import{s}from"./ds-table.stories.module-D_XXzStM.js";import{d,f as x,c as h,P as D,T}from"./table-empty-state-DRc-4Q35.js";import{g as B}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DqvjbSet.js";import"./index-BxkAKOG9.js";import"./index-Dbr3Y_Zx.js";import"./index-D4BidFMr.js";import"./index-CFLp-uFy.js";import"./ds-icon-iMJSHCHz.js";import"./core-table-Bj7dW06P.js";import"./ds-button-D04f0NJ8.js";import"./ds-button-legacy-mJDTSJOh.js";import"./ds-button-new-Di2xg-Cn.js";import"./ds-typography-CphS93Yt.js";import"./index-BpmvwCao.js";import"./ds-dropdown-menu-CiPq8KYc.js";import"./index-Bc9e2jvF.js";import"./Combination-DUk5LVq0.js";import"./index-DCJskxEh.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-BitrCCia.js";import"./ds-text-input-BsFy0Af1.js";import"./portal-CHaGvyib.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-CCTw63fm.js";import"./create-anatomy-BCWrtZRX.js";import"./use-presence-CkuG9iLr.js";import"./set-wINjjEke.js";import"./raf-CC9hSMXO.js";import"./computed-style-7Z9WAJuJ.js";import"./event-CBXSxTbR.js";import"./index-Ddmf6tA3.js";import"./get-styles-BCuPNK9_.js";import"./typeahead-DQd88xYC.js";import"./query-CjgVAlRR.js";import"./initial-focus-DAAGySxw.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CZzoYVdC.js";import"./navigate-CTqriKP7.js";import"./merge-refs-DX9dreSa.js";const{expect:n,userEvent:p,within:C}=__STORYBOOK_MODULE_TEST__,fe={title:"Design System/Table/Columns",component:g,parameters:{layout:"fullscreen"},args:{columns:h,data:d,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:a.jsx(T,{}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[x]},r={name:"Progress as Infographic",args:{columns:h.map(e=>"accessorKey"in e&&e.accessorKey==="progress"?{...e,header:"Profile Progress",cell:t=>a.jsx(D,{value:t.getValue()})}:"accessorKey"in e&&e.accessorKey==="status"?{...e,header:"Status",cell:t=>a.jsx("span",{className:f(s.statusCell,s[`statusCell--${t.getValue()}`]),children:t.getValue()})}:e),data:d},play:async({canvas:e})=>{await n(B(e)).toHaveLength(15),await n(e.getByText("75%")).toBeInTheDocument(),await n(e.getAllByText("single").length).toBeGreaterThan(0)}},l={render:function(t){const i=[{id:"age",label:"Age"},{id:"visits",label:"Visits"},{id:"status",label:"Status"},{id:"progress",label:"Profile Progress"}],[c,m]=b.useState({age:!0,visits:!0,status:!0,progress:!0}),y=o=>{m(u=>({...u,[o]:!u[o]}))};return a.jsxs("div",{children:[a.jsxs("div",{className:s.programmaticSelectionDemo,children:[a.jsx("h4",{className:s.programmaticSelectionDemo__title,children:"Column Hiding Demo"}),a.jsx("p",{className:s.programmaticSelectionDemo__description,children:"Use the checkboxes below to show or hide specific columns dynamically. This is useful for customizable table views or responsive layouts."})]}),a.jsx("div",{className:s.programmaticSelectionControls,children:i.map(o=>a.jsx(v,{label:o.label,checked:c[o.id],onCheckedChange:()=>y(o.id)},o.id))}),a.jsx(g,{...t,columnVisibility:c,onColumnVisibilityChange:m})]})},args:{},play:async({canvasElement:e})=>{const t=C(e);await n(t.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await n(t.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument();const i=t.getByRole("checkbox",{name:/^age$/i});await p.click(i),await n(t.queryByRole("columnheader",{name:/^age$/i})).not.toBeInTheDocument(),await n(t.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await n(t.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await p.click(i),await n(t.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument()}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const ve=["WithProgressInfographic","ColumnHiding"];export{l as ColumnHiding,r as WithProgressInfographic,ve as __namedExportsOrder,fe as default};
