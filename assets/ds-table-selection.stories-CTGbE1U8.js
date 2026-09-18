import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-typography-Cu_YN1U3.js";import{n as a,t as o}from"./ds-button-v3-B2euxeVc.js";import{n as s,t as c}from"./ds-stack-Dy-M5AZb.js";import{n as l,t as u}from"./ds-table-BJkDgpc4.js";import{n as d,t as f}from"./story-decorators-C_JjURmG.js";import{n as p,r as m,t as h}from"./story-data-CNz-shmS.js";var g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{g=t(),l(),s(),a(),i(),m(),d(),_=n(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Table/Selection`,component:u,parameters:{layout:`fullscreen`},args:{columns:h,data:p,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:v()},decorators:[f]},b={args:{selectable:!0,onSelectionChange:v()}},x={args:{selectable:!0,selectableColumnWidth:48,onSelectionChange:v()}},S={args:{selectable:!0,showSelectAllCheckbox:!1,stickyHeader:!0,onSelectionChange:v()},parameters:{docs:{source:{type:`code`}}},render:function(e){let t=(0,g.useRef)(null),[n,i]=(0,g.useState)([]),a=e=>{i(Object.keys(e))};return(0,_.jsxs)(c,{direction:`column`,gap:16,children:[(0,_.jsxs)(r,{variant:`body-sm-reg`,color:`secondary`,children:[`Selected rows: `,n.length>0?n.join(`, `):`None`]}),(0,_.jsxs)(c,{direction:`row`,gap:8,flexWrap:`wrap`,children:[(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectRow(`1`),children:`Select Row 1`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectRow(`2`),children:`Select Row 2`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectRow(`3`),children:`Select Row 3`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectAllRows(),children:`Select All`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t.current?.deselectAllRows(),children:`Deselect All`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>t.current?.selectRows([`1`,`2`,`3`]),children:`Select First 3 Rows`})]}),(0,_.jsx)(u,{...e,ref:t,onSelectionChange:a})]})}},C={name:`Max N Selections`,args:{showSelectAllCheckbox:!1,onSelectionChange:v()},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,g.useState)({}),i=Object.keys(t).filter(e=>t[e]).length,a=t=>{n(t),e.onSelectionChange?.(t)};return(0,_.jsxs)(c,{direction:`column`,gap:16,children:[(0,_.jsxs)(r,{variant:`body-sm-reg`,color:`secondary`,children:[`Selected: `,i,` / `,2]}),(0,_.jsx)(u,{...e,onSelectionChange:a,selectable:e=>t[e.id]||i<2})]})}},w=[`Selectable`,`CustomSelectColumnWidth`,`ProgrammaticRowSelection`,`MaxSelectionLimit`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    onSelectionChange: fn()
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    selectableColumnWidth: 48,
    onSelectionChange: fn()
  }
}`,...x.parameters?.docs?.source},description:{story:`The select utility column is 36px by default. Pass a pixel width when the
checkbox column needs more (or less) room. It is not user-resizable.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Drive selection imperatively through the table ref. `selectRow`, `selectRows`,\n`selectAllRows`, and `deselectAllRows` on `DsTableApi` let a parent control\nselection from outside the table (toolbars, keyboard shortcuts, bulk flows).",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:`Cap how many rows can be selected at once. Track selection in state and make
\`selectable\` a predicate: a row stays selectable only if it is already
selected or the count is under the limit, so the remaining checkboxes disable
once the cap is reached.`,...C.parameters?.docs?.description}}}})))()}T();export{x as CustomSelectColumnWidth,C as MaxSelectionLimit,S as ProgrammaticRowSelection,b as Selectable,w as __namedExportsOrder,y as default};