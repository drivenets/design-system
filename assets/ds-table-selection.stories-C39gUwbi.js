import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-typography-CNcYGTxd.js";import{n as o,t as s}from"./ds-button-v3-BnV8s8Ko.js";import{n as c,t as l}from"./ds-stack-GU0hZWeR.js";import{n as u,t as d}from"./ds-table-D8JcB1ey.js";import{n as f,t as p}from"./story-decorators-B0BgvTCA.js";import{n as m,r as h,t as g}from"./story-data-DABjxFNS.js";var _,v,y,b,x,S,C,w,T;t((()=>{_=e(n(),1),u(),c(),o(),a(),h(),f(),v=r(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/Table/Selection`,component:d,parameters:{layout:`fullscreen`},args:{columns:g,data:m,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:y()},decorators:[p]},x={args:{selectable:!0,onSelectionChange:y()}},S={args:{selectable:!0,selectableColumnWidth:48,onSelectionChange:y()}},C={args:{selectable:!0,showSelectAllCheckbox:!1,stickyHeader:!0,onSelectionChange:y()},parameters:{docs:{source:{type:`code`}}},render:function(e){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)([]),a=e=>{r(Object.keys(e))};return(0,v.jsxs)(l,{direction:`column`,gap:16,children:[(0,v.jsxs)(i,{variant:`body-sm-reg`,color:`secondary`,children:[`Selected rows: `,n.length>0?n.join(`, `):`None`]}),(0,v.jsxs)(l,{direction:`row`,gap:8,flexWrap:`wrap`,children:[(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectRow(`1`),children:`Select Row 1`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectRow(`2`),children:`Select Row 2`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectRow(`3`),children:`Select Row 3`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectAllRows(),children:`Select All`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>t.current?.deselectAllRows(),children:`Deselect All`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectRows([`1`,`2`,`3`]),children:`Select First 3 Rows`})]}),(0,v.jsx)(d,{...e,ref:t,onSelectionChange:a})]})}},w={name:`Max N Selections`,args:{showSelectAllCheckbox:!1,onSelectionChange:y()},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,_.useState)({}),r=Object.keys(t).filter(e=>t[e]).length,a=t=>{n(t),e.onSelectionChange?.(t)};return(0,v.jsxs)(l,{direction:`column`,gap:16,children:[(0,v.jsxs)(i,{variant:`body-sm-reg`,color:`secondary`,children:[`Selected: `,r,` / `,2]}),(0,v.jsx)(d,{...e,onSelectionChange:a,selectable:e=>t[e.id]||r<2})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    onSelectionChange: fn()
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    selectableColumnWidth: 48,
    onSelectionChange: fn()
  }
}`,...S.parameters?.docs?.source},description:{story:`The select utility column is 36px by default. Pass a pixel width when the
checkbox column needs more (or less) room. It is not user-resizable.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    showSelectAllCheckbox: false,
    stickyHeader: true,
    onSelectionChange: fn()
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const tableRef = useRef<DsTableApi<Person>>(null);
    const [selectedRows, setSelectedRows] = useState<string[]>([]);
    const handleSelectionChange = (selection: Record<string, boolean>) => {
      setSelectedRows(Object.keys(selection));
    };
    return <DsStack direction="column" gap={16}>
                <DsTypography variant="body-sm-reg" color="secondary">
                    Selected rows: {selectedRows.length > 0 ? selectedRows.join(', ') : 'None'}
                </DsTypography>

                <DsStack direction="row" gap={8} flexWrap="wrap">
                    <DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectRow('1')}>
                        Select Row 1
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectRow('2')}>
                        Select Row 2
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectRow('3')}>
                        Select Row 3
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectAllRows()}>
                        Select All
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.deselectAllRows()}>
                        Deselect All
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => tableRef.current?.selectRows(['1', '2', '3'])}>
                        Select First 3 Rows
                    </DsButtonV3>
                </DsStack>

                <DsTable {...args} ref={tableRef} onSelectionChange={handleSelectionChange} />
            </DsStack>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Drive selection imperatively through the table ref. `selectRow`, `selectRows`,\n`selectAllRows`, and `deselectAllRows` on `DsTableApi` let a parent control\nselection from outside the table (toolbars, keyboard shortcuts, bulk flows).",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Max N Selections',
  args: {
    showSelectAllCheckbox: false,
    onSelectionChange: fn()
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [rowSelection, setRowSelection] = useState<Record<string, boolean>>({});
    const maxSelections = 2;
    const selectedCount = Object.keys(rowSelection).filter(id => rowSelection[id]).length;
    const handleSelectionChange = (selection: Record<string, boolean>) => {
      setRowSelection(selection);
      args.onSelectionChange?.(selection);
    };
    return <DsStack direction="column" gap={16}>
                <DsTypography variant="body-sm-reg" color="secondary">
                    Selected: {selectedCount} / {maxSelections}
                </DsTypography>

                <DsTable {...args} onSelectionChange={handleSelectionChange} selectable={rowData => rowSelection[rowData.id] || selectedCount < maxSelections} />
            </DsStack>;
  }
}`,...w.parameters?.docs?.source},description:{story:`Cap how many rows can be selected at once. Track selection in state and make
\`selectable\` a predicate: a row stays selectable only if it is already
selected or the count is under the limit, so the remaining checkboxes disable
once the cap is reached.`,...w.parameters?.docs?.description}}},T=[`Selectable`,`CustomSelectColumnWidth`,`ProgrammaticRowSelection`,`MaxSelectionLimit`]}))();export{S as CustomSelectColumnWidth,w as MaxSelectionLimit,C as ProgrammaticRowSelection,x as Selectable,T as __namedExportsOrder,b as default};