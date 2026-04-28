import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-CxQ8jbXj.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./ds-table-CC2GhWeA.js";import{n as o,t as s}from"./ds-table.stories.module-DYozYx3C.js";import{a as c,c as l,l as u,n as d,o as f,s as p,t as m}from"./components-D179vvye.js";var h,g,_,v,y,b,x,S;t((()=>{h=e(n(),1),i(),o(),u(),f(),m(),g=r(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Components/Table/Selection`,component:a,parameters:{layout:`fullscreen`},args:{columns:p,data:l,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,g.jsx)(d,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[c]},y={args:{selectable:!0,onSelectionChange:_()}},b={args:{selectable:!0,showSelectAllCheckbox:!1,stickyHeader:!0,onSelectionChange:e=>console.log(`Selected rows:`,e)},render:function(e){let t=(0,h.useRef)(null),[n,r]=(0,h.useState)([]),i=e=>{t.current?.selectRow(e)},o=()=>{t.current?.selectAllRows()},c=()=>{t.current?.deselectAllRows()},l=()=>{t.current?.selectRows([`1`,`2`,`3`])},u=e=>{r(Object.keys(e))};return(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{className:s.programmaticSelectionDemo,children:[(0,g.jsx)(`h4`,{className:s.programmaticSelectionDemo__title,children:`Programmatic Row Selection Demo`}),(0,g.jsx)(`p`,{className:s.programmaticSelectionDemo__description,children:`Use the buttons below to programmatically control row selection using TanStack Table v8 APIs.`}),(0,g.jsxs)(`p`,{className:s.programmaticSelectionDemo__selectedRows,children:[`Selected rows: `,n.length>0?n.join(`, `):`None`]})]}),(0,g.jsxs)(`div`,{className:s.programmaticSelectionControls,children:[(0,g.jsx)(`button`,{onClick:()=>i(`1`),className:s.programmaticSelectionButton,children:`Select Row 1`}),(0,g.jsx)(`button`,{onClick:()=>i(`2`),className:s.programmaticSelectionButton,children:`Select Row 2`}),(0,g.jsx)(`button`,{onClick:()=>i(`3`),className:s.programmaticSelectionButton,children:`Select Row 3`}),(0,g.jsx)(`button`,{onClick:o,className:s.programmaticSelectionButton,children:`Select All`}),(0,g.jsx)(`button`,{onClick:c,className:s.programmaticSelectionButton,children:`Deselect All`}),(0,g.jsx)(`button`,{onClick:l,className:s.programmaticSelectionButton,children:`Select First 3 Rows`})]}),(0,g.jsx)(a,{...e,ref:t,onSelectionChange:u})]})}},x={name:`Max N Selections`,args:{showSelectAllCheckbox:!1,onSelectionChange:_()},render:function(e){let[t,n]=(0,h.useState)({}),r=Object.keys(t).filter(e=>t[e]).length,i=t=>{n(t),e.onSelectionChange?.(t)};return(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{className:s.programmaticSelectionDemo,children:[(0,g.jsx)(`h4`,{className:s.programmaticSelectionDemo__title,children:`Max Selection Limit Demo`}),(0,g.jsxs)(`p`,{className:s.programmaticSelectionDemo__description,children:[`You can select at most `,2,` rows. Once the limit is reached, checkboxes for other rows are disabled.`]}),(0,g.jsxs)(`p`,{className:s.programmaticSelectionDemo__selectedRows,children:[`Selected: `,r,` / `,2]})]}),(0,g.jsx)(a,{...e,onSelectionChange:i,selectable:e=>t[e.id]||r<2})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    onSelectionChange: fn()
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
  }
}`,...x.parameters?.docs?.source}}},S=[`Selectable`,`ProgrammaticRowSelection`,`MaxSelectionLimit`]}))();export{x as MaxSelectionLimit,b as ProgrammaticRowSelection,y as Selectable,S as __namedExportsOrder,v as default};