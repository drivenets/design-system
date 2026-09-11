import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./iframe-sRVif9um.js";import{n as i,t as a}from"./ds-typography-DdvxrxrZ.js";import{n as o,t as s}from"./ds-button-v3-JRphN4FE.js";import{n as c,t as l}from"./ds-stack-DEcVNtAa.js";import{n as u,t as d}from"./ds-table-BAFYeeZl.js";import{n as f,t as p}from"./story-decorators-C-UX1RQB.js";import{n as m,r as h,t as g}from"./story-data-DABjxFNS.js";var _,v,y,b,x,S,C,w;t((()=>{_=e(n(),1),u(),c(),o(),a(),h(),f(),v=r(),{fn:y}=__STORYBOOK_MODULE_TEST__,b={title:`Components/Table/Expansion`,component:d,parameters:{layout:`fullscreen`},args:{columns:g,data:m,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:y()},decorators:[p]},x={args:{data:m.slice(0,5),expandable:e=>e.firstName!==`Tanner`,renderExpandedRow:e=>(0,v.jsxs)(l,{direction:`column`,gap:8,children:[(0,v.jsxs)(l,{direction:`column`,gap:4,children:[(0,v.jsxs)(i,{variant:`heading4`,children:[`Expanded Details for `,e.firstName]}),(0,v.jsxs)(i,{variant:`body-sm-reg`,children:[`ID: `,e.id]}),(0,v.jsxs)(i,{variant:`body-sm-reg`,children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,v.jsxs)(i,{variant:`body-sm-reg`,children:[`Status: `,e.status]})]}),(0,v.jsx)(d,{columns:[{accessorKey:`id`,header:`ID`},{accessorKey:`firstName`,header:`First Name`},{accessorKey:`lastName`,header:`Last Name`}],data:m.slice(0,3)})]})}},S={args:{data:m.slice(0,5),expandable:!0,expandableColumnWidth:48,renderExpandedRow:e=>(0,v.jsx)(l,{direction:`column`,gap:4,children:(0,v.jsxs)(i,{variant:`body-sm-reg`,children:[`Details for `,e.firstName]})})}},C={args:{data:m.slice(0,5),expandable:e=>e.firstName!==`Tanner`,renderExpandedRow:e=>(0,v.jsxs)(l,{direction:`column`,gap:4,children:[(0,v.jsxs)(i,{variant:`heading4`,children:[`Expanded Details for `,e.firstName]}),(0,v.jsxs)(i,{variant:`body-sm-reg`,children:[`ID: `,e.id]}),(0,v.jsxs)(i,{variant:`body-sm-reg`,children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,v.jsxs)(i,{variant:`body-sm-reg`,children:[`Status: `,e.status]})]})},parameters:{docs:{source:{type:`code`}}},render:function(e){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)([]),a=e=>{t.current?.expandRow(e),r(t=>t.includes(e)?t:[...t,e])};return(0,v.jsxs)(l,{direction:`column`,gap:16,children:[(0,v.jsxs)(i,{variant:`body-sm-reg`,color:`secondary`,children:[`Expanded rows: `,n.length>0?n.join(`, `):`None`]}),(0,v.jsxs)(l,{direction:`row`,gap:8,flexWrap:`wrap`,children:[(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>a(`2`),children:`Expand Kevin`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>a(`3`),children:`Expand John`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>a(`4`),children:`Expand Jane`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>{t.current?.expandAllRows();let e=m.slice(0,5).filter(e=>e.firstName!==`Tanner`).map(e=>e.id);r(e)},children:`Expand All`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>{t.current?.collapseAllRows(),r([])},children:`Collapse All`}),(0,v.jsx)(s,{variant:`secondary`,size:`small`,onClick:()=>{let e=[`2`,`3`,`4`];t.current?.expandRows(e),r(e)},children:`Expand First 3 Expandable`})]}),(0,v.jsx)(d,{...e,ref:t})]})}},w=[`Expandable`,`CustomExpanderColumnWidth`,`ProgrammaticExpansion`],x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    expandable: row => row.firstName !== 'Tanner',
    renderExpandedRow: row => <DsStack direction="column" gap={8}>
                <DsStack direction="column" gap={4}>
                    <DsTypography variant="heading4">Expanded Details for {row.firstName}</DsTypography>
                    <DsTypography variant="body-sm-reg">ID: {row.id}</DsTypography>
                    <DsTypography variant="body-sm-reg">
                        Full Name: {row.firstName} {row.lastName}
                    </DsTypography>
                    <DsTypography variant="body-sm-reg">Status: {row.status}</DsTypography>
                </DsStack>

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
            </DsStack>
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    expandable: true,
    expandableColumnWidth: 48,
    renderExpandedRow: row => <DsStack direction="column" gap={4}>
                <DsTypography variant="body-sm-reg">Details for {row.firstName}</DsTypography>
            </DsStack>
  }
}`,...S.parameters?.docs?.source},description:{story:`The expander utility column is 36px by default. Pass a pixel width when the
chevron column needs more (or less) room. It is not user-resizable.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    expandable: row => row.firstName !== 'Tanner',
    renderExpandedRow: row => <DsStack direction="column" gap={4}>
                <DsTypography variant="heading4">Expanded Details for {row.firstName}</DsTypography>
                <DsTypography variant="body-sm-reg">ID: {row.id}</DsTypography>
                <DsTypography variant="body-sm-reg">
                    Full Name: {row.firstName} {row.lastName}
                </DsTypography>
                <DsTypography variant="body-sm-reg">Status: {row.status}</DsTypography>
            </DsStack>
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
    return <DsStack direction="column" gap={16}>
                <DsTypography variant="body-sm-reg" color="secondary">
                    Expanded rows: {expandedRows.length > 0 ? expandedRows.join(', ') : 'None'}
                </DsTypography>

                <DsStack direction="row" gap={8} flexWrap="wrap">
                    <DsButtonV3 variant="secondary" size="small" onClick={() => expandRow('2')}>
                        Expand Kevin
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => expandRow('3')}>
                        Expand John
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={() => expandRow('4')}>
                        Expand Jane
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={expandAllRows}>
                        Expand All
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={collapseAllRows}>
                        Collapse All
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small" onClick={expandFirstThreeRows}>
                        Expand First 3 Expandable
                    </DsButtonV3>
                </DsStack>

                <DsTable {...args} ref={tableRef} />
            </DsStack>;
  }
}`,...C.parameters?.docs?.source},description:{story:"Drive expansion imperatively through the table ref. `expandRow`, `expandRows`,\n`expandAllRows`, and `collapseAllRows` on `DsTableApi` let a parent expand or\ncollapse rows from outside the table.",...C.parameters?.docs?.description}}}}))();export{S as CustomExpanderColumnWidth,x as Expandable,C as ProgrammaticExpansion,w as __namedExportsOrder,b as default};