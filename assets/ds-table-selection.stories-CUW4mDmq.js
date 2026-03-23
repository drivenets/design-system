import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Cvn64zKl.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./ds-table-b-GeZA2j.js";import{n as o,t as s}from"./ds-table.stories.module-BQO6U9br.js";import{c,l,n as u,o as d,s as f,t as p,u as m}from"./components-DvoQfwmr.js";var h,g,_,v,y,b,x,S,C,w;t((()=>{h=e(n(),1),i(),o(),m(),f(),p(),g=r(),{expect:_,fn:v,userEvent:y}=__STORYBOOK_MODULE_TEST__,b={title:`Design System/Table/Selection`,component:a,parameters:{layout:`fullscreen`},args:{columns:c,data:l,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,g.jsx)(u,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[d]},x={args:{selectable:!0,onSelectionChange:v()},play:async({args:e,canvas:t})=>{let n=t.getAllByRole(`checkbox`),r=n[0];await _(r).not.toBeChecked();let i=n[1];await y.click(i),await _(i).toBeChecked(),await _(e.onSelectionChange).toHaveBeenCalled(),await y.click(r);let a=t.getAllByRole(`checkbox`).slice(1);for(let e of a)await _(e).toBeChecked();await y.click(r);let o=t.getAllByRole(`checkbox`).slice(1);for(let e of o)await _(e).not.toBeChecked()}},S={args:{selectable:!0,showSelectAllCheckbox:!1,stickyHeader:!0,onSelectionChange:e=>console.log(`Selected rows:`,e)},render:function(e){let t=(0,h.useRef)(null),[n,r]=(0,h.useState)([]),i=e=>{t.current?.selectRow(e)},o=()=>{t.current?.selectAllRows()},c=()=>{t.current?.deselectAllRows()},l=()=>{t.current?.selectRows([`1`,`2`,`3`])},u=e=>{r(Object.keys(e))};return(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{className:s.programmaticSelectionDemo,children:[(0,g.jsx)(`h4`,{className:s.programmaticSelectionDemo__title,children:`Programmatic Row Selection Demo`}),(0,g.jsx)(`p`,{className:s.programmaticSelectionDemo__description,children:`Use the buttons below to programmatically control row selection using TanStack Table v8 APIs.`}),(0,g.jsxs)(`p`,{className:s.programmaticSelectionDemo__selectedRows,children:[`Selected rows: `,n.length>0?n.join(`, `):`None`]})]}),(0,g.jsxs)(`div`,{className:s.programmaticSelectionControls,children:[(0,g.jsx)(`button`,{onClick:()=>i(`1`),className:s.programmaticSelectionButton,children:`Select Row 1`}),(0,g.jsx)(`button`,{onClick:()=>i(`2`),className:s.programmaticSelectionButton,children:`Select Row 2`}),(0,g.jsx)(`button`,{onClick:()=>i(`3`),className:s.programmaticSelectionButton,children:`Select Row 3`}),(0,g.jsx)(`button`,{onClick:o,className:s.programmaticSelectionButton,children:`Select All`}),(0,g.jsx)(`button`,{onClick:c,className:s.programmaticSelectionButton,children:`Deselect All`}),(0,g.jsx)(`button`,{onClick:l,className:s.programmaticSelectionButton,children:`Select First 3 Rows`})]}),(0,g.jsx)(a,{...e,ref:t,onSelectionChange:u})]})},play:async({canvas:e})=>{await _(e.getByText(/selected rows: none/i)).toBeInTheDocument(),await y.click(e.getByRole(`button`,{name:/select row 1/i})),await _(e.getByText((e,t)=>t?.textContent===`Selected rows: 1`)).toBeInTheDocument(),await y.click(e.getByRole(`button`,{name:/^select all$/i}));let t=e.getAllByRole(`checkbox`);for(let e of t)await _(e).toBeChecked();await y.click(e.getByRole(`button`,{name:/deselect all/i})),await _(e.getByText(/selected rows: none/i)).toBeInTheDocument(),await y.click(e.getByRole(`button`,{name:/select first 3 rows/i}));let n=e.getAllByRole(`checkbox`).filter(e=>e.checked||e.getAttribute(`data-state`)===`checked`).length;await _(n).toBe(3)}},C={name:`Max N Selections`,args:{showSelectAllCheckbox:!1,onSelectionChange:v()},render:function(e){let[t,n]=(0,h.useState)({}),r=Object.keys(t).filter(e=>t[e]).length,i=t=>{n(t),e.onSelectionChange?.(t)};return(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{className:s.programmaticSelectionDemo,children:[(0,g.jsx)(`h4`,{className:s.programmaticSelectionDemo__title,children:`Max Selection Limit Demo`}),(0,g.jsxs)(`p`,{className:s.programmaticSelectionDemo__description,children:[`You can select at most `,2,` rows. Once the limit is reached, checkboxes for other rows are disabled.`]}),(0,g.jsxs)(`p`,{className:s.programmaticSelectionDemo__selectedRows,children:[`Selected: `,r,` / `,2]})]}),(0,g.jsx)(a,{...e,onSelectionChange:i,selectable:e=>t[e.id]||r<2})]})},play:async({canvas:e})=>{await _(e.getByText(/selected: 0 \/ 2/i)).toBeInTheDocument();let t=e.getAllByRole(`checkbox`),n=t[0],r=t[1],i=t[2];await y.click(n),await _(e.getByText(/selected: 1 \/ 2/i)).toBeInTheDocument(),await y.click(r),await _(e.getByText(/selected: 2 \/ 2/i)).toBeInTheDocument(),await _(i).toBeDisabled(),await y.click(n),await _(e.getByText(/selected: 1 \/ 2/i)).toBeInTheDocument();let a=e.getAllByRole(`checkbox`)[2];await _(a).not.toBeDisabled()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Selectable`,`ProgrammaticRowSelection`,`MaxSelectionLimit`]}))();export{C as MaxSelectionLimit,S as ProgrammaticRowSelection,x as Selectable,w as __namedExportsOrder,b as default};