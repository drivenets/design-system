import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as u}from"./iframe-C3gMQG0U.js";import{D as p}from"./ds-table-D-i4HcR7.js";import{s}from"./ds-table.stories.module-D_XXzStM.js";import{f as C,d as B,c as y,T as f}from"./table-empty-state-Ba9u36Pc.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DnI0hzs-.js";import"./index-CTniaEH1.js";import"./index-DA3TTJQo.js";import"./core-table-CoEY8mPk.js";import"./ds-button-CfQjX_jA.js";import"./ds-button-legacy-1UC2BuXq.js";import"./ds-button-new-Cd9ylpe2.js";import"./ds-icon-B71CCHuR.js";import"./ds-typography-CePlxxxm.js";import"./index-utsX2Owj.js";import"./index-BQsttSH3.js";import"./ds-checkbox-DCgxTFW3.js";import"./index-DMnjmsFH.js";import"./index-cLWytakU.js";import"./ds-dropdown-menu-BrZu8VZD.js";import"./index-CPbSYjfc.js";import"./Combination-BBTimbWL.js";import"./index-CVIUFzGh.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-DgyLDMMI.js";import"./ds-text-input-BHTuRxVh.js";import"./portal-RJS6uyo2.js";import"./create-split-props-u5h9OPvL.js";import"./index-BGvA3V6P.js";import"./use-locale-context-BbVyF5Ga.js";import"./use-presence-BHUhjpJq.js";import"./index-CFiI0jYP.js";import"./index-BZfFtMhG.js";const{expect:n,fn:g,userEvent:m}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table/Selection",component:p,parameters:{layout:"fullscreen"},args:{columns:y,data:B,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:t.jsx(f,{}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[C]},h={args:{selectable:!0,onSelectionChange:g()},play:async({args:e,canvas:l})=>{const o=l.getAllByRole("checkbox"),a=o[0];await n(a).not.toBeChecked();const c=o[1];await m.click(c),await n(c).toBeChecked(),await n(e.onSelectionChange).toHaveBeenCalled(),await m.click(a);const i=l.getAllByRole("checkbox").slice(1);for(const r of i)await n(r).toBeChecked();await m.click(a);const d=l.getAllByRole("checkbox").slice(1);for(const r of d)await n(r).not.toBeChecked()}},w={args:{selectable:!0,showSelectAllCheckbox:!1,stickyHeader:!0,onSelectionChange:e=>console.log("Selected rows:",e)},render:function(l){const o=u.useRef(null),[a,c]=u.useState([]),i=x=>{o.current?.selectRow(x)},d=()=>{o.current?.selectAllRows()},r=()=>{o.current?.deselectAllRows()},k=()=>{o.current?.selectRows(["1","2","3"])},S=x=>{const R=Object.keys(x);c(R)};return t.jsxs("div",{children:[t.jsxs("div",{className:s.programmaticSelectionDemo,children:[t.jsx("h4",{className:s.programmaticSelectionDemo__title,children:"Programmatic Row Selection Demo"}),t.jsx("p",{className:s.programmaticSelectionDemo__description,children:"Use the buttons below to programmatically control row selection using TanStack Table v8 APIs."}),t.jsxs("p",{className:s.programmaticSelectionDemo__selectedRows,children:["Selected rows: ",a.length>0?a.join(", "):"None"]})]}),t.jsxs("div",{className:s.programmaticSelectionControls,children:[t.jsx("button",{onClick:()=>i("1"),className:s.programmaticSelectionButton,children:"Select Row 1"}),t.jsx("button",{onClick:()=>i("2"),className:s.programmaticSelectionButton,children:"Select Row 2"}),t.jsx("button",{onClick:()=>i("3"),className:s.programmaticSelectionButton,children:"Select Row 3"}),t.jsx("button",{onClick:d,className:s.programmaticSelectionButton,children:"Select All"}),t.jsx("button",{onClick:r,className:s.programmaticSelectionButton,children:"Deselect All"}),t.jsx("button",{onClick:k,className:s.programmaticSelectionButton,children:"Select First 3 Rows"})]}),t.jsx(p,{...l,ref:o,onSelectionChange:S})]})},play:async({canvas:e})=>{await n(e.getByText(/selected rows: none/i)).toBeInTheDocument(),await m.click(e.getByRole("button",{name:/select row 1/i})),await n(e.getByText((c,i)=>i?.textContent==="Selected rows: 1")).toBeInTheDocument(),await m.click(e.getByRole("button",{name:/^select all$/i}));const l=e.getAllByRole("checkbox");for(const c of l)await n(c).toBeChecked();await m.click(e.getByRole("button",{name:/deselect all/i})),await n(e.getByText(/selected rows: none/i)).toBeInTheDocument(),await m.click(e.getByRole("button",{name:/select first 3 rows/i}));const a=e.getAllByRole("checkbox").filter(c=>c.checked||c.getAttribute("data-state")==="checked").length;await n(a).toBe(3)}},b={name:"Max N Selections",args:{showSelectAllCheckbox:!1,onSelectionChange:g()},render:function(l){const[o,a]=u.useState({}),c=2,i=Object.keys(o).filter(r=>o[r]).length,d=r=>{a(r),l.onSelectionChange?.(r)};return t.jsxs("div",{children:[t.jsxs("div",{className:s.programmaticSelectionDemo,children:[t.jsx("h4",{className:s.programmaticSelectionDemo__title,children:"Max Selection Limit Demo"}),t.jsxs("p",{className:s.programmaticSelectionDemo__description,children:["You can select at most ",c," rows. Once the limit is reached, checkboxes for other rows are disabled."]}),t.jsxs("p",{className:s.programmaticSelectionDemo__selectedRows,children:["Selected: ",i," / ",c]})]}),t.jsx(p,{...l,onSelectionChange:d,selectable:r=>o[r.id]||i<c})]})},play:async({canvas:e})=>{await n(e.getByText(/selected: 0 \/ 2/i)).toBeInTheDocument();const l=e.getAllByRole("checkbox"),o=l[0],a=l[1],c=l[2];await m.click(o),await n(e.getByText(/selected: 1 \/ 2/i)).toBeInTheDocument(),await m.click(a),await n(e.getByText(/selected: 2 \/ 2/i)).toBeInTheDocument(),await n(c).toBeDisabled(),await m.click(o),await n(e.getByText(/selected: 1 \/ 2/i)).toBeInTheDocument();const i=e.getAllByRole("checkbox")[2];await n(i).not.toBeDisabled()}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    onSelectionChange: fn()
  },
  play: async ({
    args,
    canvas
  }) => {
    const checkboxes = canvas.getAllByRole('checkbox');
    const selectAllCheckbox = checkboxes[0] as HTMLElement;
    await expect(selectAllCheckbox).not.toBeChecked();
    const firstRowCheckbox = checkboxes[1] as HTMLElement;
    await userEvent.click(firstRowCheckbox);
    await expect(firstRowCheckbox).toBeChecked();
    await expect(args.onSelectionChange).toHaveBeenCalled();
    await userEvent.click(selectAllCheckbox);
    const allRowCheckboxes = canvas.getAllByRole('checkbox').slice(1);
    for (const cb of allRowCheckboxes) {
      await expect(cb).toBeChecked();
    }
    await userEvent.click(selectAllCheckbox);
    const allRowCheckboxesAfter = canvas.getAllByRole('checkbox').slice(1);
    for (const cb of allRowCheckboxesAfter) {
      await expect(cb).not.toBeChecked();
    }
  }
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    showSelectAllCheckbox: false,
    stickyHeader: true,
    onSelectionChange: selectedRows => console.log('Selected rows:', selectedRows)
  },
  render: function Render(args) {
    const tableRef = useRef<DsTableApi<Person>>(null);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const selectRow = (rowId: string) => {
      tableRef.current?.selectRow(rowId);
    };
    const selectAllRows = () => {
      tableRef.current?.selectAllRows();
    };
    const deselectAllRows = () => {
      tableRef.current?.deselectAllRows();
    };
    const selectSpecificRows = () => {
      tableRef.current?.selectRows(['1', '2', '3']);
    };
    const handleSelectionChange = (selection: Record<string, boolean>) => {
      const selectedIds = Object.keys(selection);
      setSelectedRows(selectedIds);
    };
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Programmatic Row Selection Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        Use the buttons below to programmatically control row selection using TanStack Table v8 APIs.
                    </p>
                    <p className={styles.programmaticSelectionDemo__selectedRows}>
                        Selected rows: {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}
                    </p>
                </div>

                <div className={styles.programmaticSelectionControls}>
                    <button onClick={() => selectRow('1')} className={styles.programmaticSelectionButton}>
                        Select Row 1
                    </button>
                    <button onClick={() => selectRow('2')} className={styles.programmaticSelectionButton}>
                        Select Row 2
                    </button>
                    <button onClick={() => selectRow('3')} className={styles.programmaticSelectionButton}>
                        Select Row 3
                    </button>
                    <button onClick={selectAllRows} className={styles.programmaticSelectionButton}>
                        Select All
                    </button>
                    <button onClick={deselectAllRows} className={styles.programmaticSelectionButton}>
                        Deselect All
                    </button>
                    <button onClick={selectSpecificRows} className={styles.programmaticSelectionButton}>
                        Select First 3 Rows
                    </button>
                </div>

                <DsTable {...args} ref={tableRef} onSelectionChange={handleSelectionChange} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/selected rows: none/i)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /select row 1/i
    }));
    await expect(canvas.getByText((content, element) => {
      return element?.textContent === 'Selected rows: 1';
    })).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /^select all$/i
    }));
    const allCheckboxes = canvas.getAllByRole('checkbox');
    for (const cb of allCheckboxes) {
      await expect(cb).toBeChecked();
    }
    await userEvent.click(canvas.getByRole('button', {
      name: /deselect all/i
    }));
    await expect(canvas.getByText(/selected rows: none/i)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /select first 3 rows/i
    }));
    const checkboxesAfter = canvas.getAllByRole('checkbox');
    const checkedCount = checkboxesAfter.filter(cb => (cb as HTMLInputElement).checked || cb.getAttribute('data-state') === 'checked').length;
    await expect(checkedCount).toBe(3);
  }
}`,...w.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Max N Selections',
  args: {
    showSelectAllCheckbox: false,
    onSelectionChange: fn()
  },
  render: function Render(args) {
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const maxSelections = 2;
    const selectedCount = Object.keys(rowSelection).filter(id => rowSelection[id]).length;
    const handleSelectionChange = (selection: Record<string, boolean>) => {
      setRowSelection(selection);
      args.onSelectionChange?.(selection);
    };
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Max Selection Limit Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        You can select at most {maxSelections} rows. Once the limit is reached, checkboxes for other rows
                        are disabled.
                    </p>
                    <p className={styles.programmaticSelectionDemo__selectedRows}>
                        Selected: {selectedCount} / {maxSelections}
                    </p>
                </div>

                <DsTable {...args} onSelectionChange={handleSelectionChange} selectable={rowData => {
        return rowSelection[rowData.id] || selectedCount < maxSelections;
      }} />
            </div>;
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/selected: 0 \\/ 2/i)).toBeInTheDocument();
    const checkboxes = canvas.getAllByRole('checkbox');
    const firstCheckbox = checkboxes[0] as HTMLElement;
    const secondCheckbox = checkboxes[1] as HTMLElement;
    const thirdCheckbox = checkboxes[2] as HTMLElement;
    await userEvent.click(firstCheckbox);
    await expect(canvas.getByText(/selected: 1 \\/ 2/i)).toBeInTheDocument();
    await userEvent.click(secondCheckbox);
    await expect(canvas.getByText(/selected: 2 \\/ 2/i)).toBeInTheDocument();
    await expect(thirdCheckbox).toBeDisabled();
    await userEvent.click(firstCheckbox);
    await expect(canvas.getByText(/selected: 1 \\/ 2/i)).toBeInTheDocument();
    const thirdCheckboxAfter = canvas.getAllByRole('checkbox')[2] as HTMLElement;
    await expect(thirdCheckboxAfter).not.toBeDisabled();
  }
}`,...b.parameters?.docs?.source}}};const ae=["Selectable","ProgrammaticRowSelection","MaxSelectionLimit"];export{b as MaxSelectionLimit,w as ProgrammaticRowSelection,h as Selectable,ae as __namedExportsOrder,le as default};
