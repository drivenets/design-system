import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-Dq56RWbn.js";import{D as w}from"./ds-table-Cp1F104-.js";import{s as n}from"./ds-table.stories.module-D_XXzStM.js";import{f as B,d as p,c as f,T as b}from"./table-empty-state-CbASKtkr.js";import{g as T}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Db8_K9ti.js";import"./core-table-BAIojIqs.js";import"./ds-button-BNSCCS1o.js";import"./ds-button-legacy-BgKt23x6.js";import"./ds-button-new-CrRLKGi9.js";import"./ds-icon-B-PQVI_C.js";import"./ds-typography-CHqo9kJX.js";import"./index-DqSkZ5Jy.js";import"./index-D6UB9xJB.js";import"./ds-checkbox-Dt4-7IBi.js";import"./index-DloTf3ql.js";import"./index-_MKeDhFA.js";import"./index-CE2WutTF.js";import"./index-c-Cwl3Qk.js";import"./ds-dropdown-menu-BXxDLAgu.js";import"./index-BVhl93ma.js";import"./Combination-NjEQ6LGl.js";import"./index-DxsX7jtf.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-CuI6grRl.js";import"./ds-text-input-BHsAs8eJ.js";import"./portal-DNIosgEX.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-Dp-K3Sjd.js";import"./create-anatomy-DuRcI-Gs.js";import"./use-presence-Dc2IF3V_.js";import"./set-DGrMDL5S.js";import"./raf-CC9hSMXO.js";import"./computed-style-DoNL9F8p.js";import"./event-CBXSxTbR.js";import"./index-CUyXEVDu.js";import"./get-styles-DiNZk02e.js";import"./typeahead-Czqtb0Lm.js";import"./query-CjgVAlRR.js";import"./initial-focus-DVsxzH0c.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-Bq1TYu_q.js";import"./navigate-CZNGs1s9.js";import"./merge-refs-DX9dreSa.js";const{expect:a,fn:N,userEvent:l}=__STORYBOOK_MODULE_TEST__,Re={title:"Design System/Table/Expansion",component:w,parameters:{layout:"fullscreen"},args:{columns:f,data:p,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:t.jsx(b,{}),onRowClick:N()},decorators:[B]},m={args:{data:p.slice(0,5),expandable:e=>e.firstName!=="Tanner",renderExpandedRow:e=>t.jsxs(t.Fragment,{children:[t.jsxs("div",{className:n.expandedRowDetails,children:[t.jsxs("h4",{children:["Expanded Details for ",e.firstName]}),t.jsxs("p",{children:["ID: ",e.id]}),t.jsxs("p",{children:["Full Name: ",e.firstName," ",e.lastName]}),t.jsxs("p",{children:["Status: ",e.status]})]}),t.jsx(w,{columns:[{accessorKey:"id",header:"ID"},{accessorKey:"firstName",header:"First Name"},{accessorKey:"lastName",header:"Last Name"}],data:p.slice(0,3)})]})},play:async({canvas:e})=>{await a(T(e)).toHaveLength(5);const s=e.getAllByRole("button",{name:/chevron_right/i});await a(s).toHaveLength(4),await l.click(s[0]),await a(e.getByText(/expanded details for kevin/i)).toBeInTheDocument(),await l.click(s[0]),await a(e.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument()}},x={args:{data:p.slice(0,5),expandable:e=>e.firstName!=="Tanner",renderExpandedRow:e=>t.jsxs("div",{className:n.expandedRowDetails,children:[t.jsxs("h4",{children:["Expanded Details for ",e.firstName]}),t.jsxs("p",{children:["ID: ",e.id]}),t.jsxs("p",{children:["Full Name: ",e.firstName," ",e.lastName]}),t.jsxs("p",{children:["Status: ",e.status]})]})},render:function(s){const r=g.useRef(null),[c,d]=g.useState([]),u=o=>{r.current?.expandRow(o),d(i=>i.includes(o)?i:[...i,o])},h=()=>{r.current?.expandAllRows();const o=p.slice(0,5).filter(i=>i.firstName!=="Tanner").map(i=>i.id);d(o)},R=()=>{r.current?.collapseAllRows(),d([])},y=()=>{const o=["2","3","4"];r.current?.expandRows(o),d(o)};return t.jsxs("div",{children:[t.jsxs("div",{className:n.programmaticSelectionDemo,children:[t.jsx("h4",{className:n.programmaticSelectionDemo__title,children:"Programmatic Row Expansion Demo"}),t.jsx("p",{className:n.programmaticSelectionDemo__description,children:"Use the buttons below to programmatically control row expansion using TanStack Table v8 APIs."}),t.jsxs("p",{className:n.programmaticSelectionDemo__selectedRows,children:["Expanded rows: ",c.length>0?c.join(", "):"None"]})]}),t.jsxs("div",{className:n.programmaticSelectionControls,children:[t.jsx("button",{onClick:()=>u("2"),className:n.programmaticSelectionButton,children:"Expand Kevin"}),t.jsx("button",{onClick:()=>u("3"),className:n.programmaticSelectionButton,children:"Expand John"}),t.jsx("button",{onClick:()=>u("4"),className:n.programmaticSelectionButton,children:"Expand Jane"}),t.jsx("button",{onClick:h,className:n.programmaticSelectionButton,children:"Expand All"}),t.jsx("button",{onClick:R,className:n.programmaticSelectionButton,children:"Collapse All"}),t.jsx("button",{onClick:y,className:n.programmaticSelectionButton,children:"Expand First 3 Expandable"})]}),t.jsx(w,{...s,ref:r})]})},play:async({canvas:e})=>{await a(e.getByText(/expanded rows: none/i)).toBeInTheDocument(),await l.click(e.getByRole("button",{name:/expand kevin/i})),await a(e.getByText((r,c)=>c?.textContent==="Expanded rows: 2")).toBeInTheDocument(),await a(e.getByText(/expanded details for kevin/i)).toBeInTheDocument(),await l.click(e.getByRole("button",{name:/^expand all$/i}));const s=e.getAllByRole("button",{name:/chevron_right/i});await a(s).toHaveLength(4),await l.click(e.getByRole("button",{name:/collapse all/i})),await a(e.getByText(/expanded rows: none/i)).toBeInTheDocument(),await a(e.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument(),await l.click(e.getByRole("button",{name:/expand first 3 expandable/i})),await a(e.getByText((r,c)=>c?.textContent==="Expanded rows: 2, 3, 4")).toBeInTheDocument(),await l.click(e.getByRole("button",{name:/collapse all/i})),await a(e.getByText(/expanded rows: none/i)).toBeInTheDocument()}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    expandable: row => row.firstName !== 'Tanner',
    renderExpandedRow: row => <>
                <div className={styles.expandedRowDetails}>
                    <h4>Expanded Details for {row.firstName}</h4>
                    <p>ID: {row.id}</p>
                    <p>
                        Full Name: {row.firstName} {row.lastName}
                    </p>
                    <p>Status: {row.status}</p>
                </div>

                <DsTable columns={[{
        accessorKey: 'id',
        header: 'ID'
      }, {
        accessorKey: 'firstName',
        header: 'First Name'
      }, {
        accessorKey: 'lastName',
        header: 'Last Name'
      }]} data={defaultData.slice(0, 3)} />
            </>
  },
  play: async ({
    canvas
  }) => {
    await expect(getDataRows(canvas)).toHaveLength(5);
    const expandButtons = canvas.getAllByRole('button', {
      name: /chevron_right/i
    });
    await expect(expandButtons).toHaveLength(4);
    await userEvent.click(expandButtons[0] as HTMLElement);
    await expect(canvas.getByText(/expanded details for kevin/i)).toBeInTheDocument();
    await userEvent.click(expandButtons[0] as HTMLElement);
    await expect(canvas.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    expandable: row => row.firstName !== 'Tanner',
    renderExpandedRow: row => <div className={styles.expandedRowDetails}>
                <h4>Expanded Details for {row.firstName}</h4>
                <p>ID: {row.id}</p>
                <p>
                    Full Name: {row.firstName} {row.lastName}
                </p>
                <p>Status: {row.status}</p>
            </div>
  },
  render: function Render(args) {
    const tableRef = useRef<DsTableApi<Person>>(null);
    const [expandedRows, setExpandedRows] = useState<string[]>([]);
    const expandRow = (rowId: string) => {
      tableRef.current?.expandRow(rowId);
      setExpandedRows(prev => prev.includes(rowId) ? prev : [...prev, rowId]);
    };
    const expandAllRows = () => {
      tableRef.current?.expandAllRows();
      const expandableRowIds = defaultData.slice(0, 5).filter(row => row.firstName !== 'Tanner').map(row => row.id);
      setExpandedRows(expandableRowIds);
    };
    const collapseAllRows = () => {
      tableRef.current?.collapseAllRows();
      setExpandedRows([]);
    };
    const expandFirstThreeRows = () => {
      const firstThreeIds = ['2', '3', '4'];
      tableRef.current?.expandRows(firstThreeIds);
      setExpandedRows(firstThreeIds);
    };
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Programmatic Row Expansion Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        Use the buttons below to programmatically control row expansion using TanStack Table v8 APIs.
                    </p>
                    <p className={styles.programmaticSelectionDemo__selectedRows}>
                        Expanded rows: {expandedRows.length > 0 ? expandedRows.join(', ') : 'None'}
                    </p>
                </div>

                <div className={styles.programmaticSelectionControls}>
                    <button onClick={() => expandRow('2')} className={styles.programmaticSelectionButton}>
                        Expand Kevin
                    </button>
                    <button onClick={() => expandRow('3')} className={styles.programmaticSelectionButton}>
                        Expand John
                    </button>
                    <button onClick={() => expandRow('4')} className={styles.programmaticSelectionButton}>
                        Expand Jane
                    </button>
                    <button onClick={expandAllRows} className={styles.programmaticSelectionButton}>
                        Expand All
                    </button>
                    <button onClick={collapseAllRows} className={styles.programmaticSelectionButton}>
                        Collapse All
                    </button>
                    <button onClick={expandFirstThreeRows} className={styles.programmaticSelectionButton}>
                        Expand First 3 Expandable
                    </button>
                </div>

                <DsTable {...args} ref={tableRef} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/expanded rows: none/i)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /expand kevin/i
    }));
    await expect(canvas.getByText((_content, element) => {
      return element?.textContent === 'Expanded rows: 2';
    })).toBeInTheDocument();
    await expect(canvas.getByText(/expanded details for kevin/i)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /^expand all$/i
    }));
    const expandButtons = canvas.getAllByRole('button', {
      name: /chevron_right/i
    });
    await expect(expandButtons).toHaveLength(4);
    await userEvent.click(canvas.getByRole('button', {
      name: /collapse all/i
    }));
    await expect(canvas.getByText(/expanded rows: none/i)).toBeInTheDocument();
    await expect(canvas.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /expand first 3 expandable/i
    }));
    await expect(canvas.getByText((_content, element) => {
      return element?.textContent === 'Expanded rows: 2, 3, 4';
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /collapse all/i
    }));
    await expect(canvas.getByText(/expanded rows: none/i)).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}};const ye=["Expandable","ProgrammaticExpansion"];export{m as Expandable,x as ProgrammaticExpansion,ye as __namedExportsOrder,Re as default};
