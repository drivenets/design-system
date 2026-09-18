import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-typography-Cu_YN1U3.js";import{n as a,t as o}from"./ds-button-v3-B2euxeVc.js";import{n as s,t as c}from"./ds-stack-Dy-M5AZb.js";import{n as l,t as u}from"./ds-table-BJkDgpc4.js";import{n as d,t as f}from"./story-decorators-C_JjURmG.js";import{n as p,r as m,t as h}from"./story-data-CNz-shmS.js";var g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{g=t(),l(),s(),a(),i(),m(),d(),_=n(),{fn:v}=__STORYBOOK_MODULE_TEST__,y={title:`Components/Table/Expansion`,component:u,parameters:{layout:`fullscreen`},args:{columns:h,data:p,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:v()},decorators:[f]},b={args:{data:p.slice(0,5),expandable:e=>e.firstName!==`Tanner`,renderExpandedRow:e=>(0,_.jsxs)(c,{direction:`column`,gap:8,children:[(0,_.jsxs)(c,{direction:`column`,gap:4,children:[(0,_.jsxs)(r,{variant:`heading4`,children:[`Expanded Details for `,e.firstName]}),(0,_.jsxs)(r,{variant:`body-sm-reg`,children:[`ID: `,e.id]}),(0,_.jsxs)(r,{variant:`body-sm-reg`,children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,_.jsxs)(r,{variant:`body-sm-reg`,children:[`Status: `,e.status]})]}),(0,_.jsx)(u,{columns:[{accessorKey:`id`,header:`ID`},{accessorKey:`firstName`,header:`First Name`},{accessorKey:`lastName`,header:`Last Name`}],data:p.slice(0,3)})]})}},x={args:{data:p.slice(0,5),expandable:!0,expandableColumnWidth:48,renderExpandedRow:e=>(0,_.jsx)(c,{direction:`column`,gap:4,children:(0,_.jsxs)(r,{variant:`body-sm-reg`,children:[`Details for `,e.firstName]})})}},S={args:{data:p.slice(0,5),expandable:e=>e.firstName!==`Tanner`,renderExpandedRow:e=>(0,_.jsxs)(c,{direction:`column`,gap:4,children:[(0,_.jsxs)(r,{variant:`heading4`,children:[`Expanded Details for `,e.firstName]}),(0,_.jsxs)(r,{variant:`body-sm-reg`,children:[`ID: `,e.id]}),(0,_.jsxs)(r,{variant:`body-sm-reg`,children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,_.jsxs)(r,{variant:`body-sm-reg`,children:[`Status: `,e.status]})]})},parameters:{docs:{source:{type:`code`}}},render:function(e){let t=(0,g.useRef)(null),[n,i]=(0,g.useState)([]),a=e=>{t.current?.expandRow(e),i(t=>t.includes(e)?t:[...t,e])};return(0,_.jsxs)(c,{direction:`column`,gap:16,children:[(0,_.jsxs)(r,{variant:`body-sm-reg`,color:`secondary`,children:[`Expanded rows: `,n.length>0?n.join(`, `):`None`]}),(0,_.jsxs)(c,{direction:`row`,gap:8,flexWrap:`wrap`,children:[(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>a(`2`),children:`Expand Kevin`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>a(`3`),children:`Expand John`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>a(`4`),children:`Expand Jane`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>{t.current?.expandAllRows();let e=p.slice(0,5).filter(e=>e.firstName!==`Tanner`).map(e=>e.id);i(e)},children:`Expand All`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>{t.current?.collapseAllRows(),i([])},children:`Collapse All`}),(0,_.jsx)(o,{variant:`secondary`,size:`small`,onClick:()=>{let e=[`2`,`3`,`4`];t.current?.expandRows(e),i(e)},children:`Expand First 3 Expandable`})]}),(0,_.jsx)(u,{...e,ref:t})]})}},C=[`Expandable`,`CustomExpanderColumnWidth`,`ProgrammaticExpansion`],b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    expandable: true,
    expandableColumnWidth: 48,
    renderExpandedRow: row => <DsStack direction="column" gap={4}>
                <DsTypography variant="body-sm-reg">Details for {row.firstName}</DsTypography>
            </DsStack>
  }
}`,...x.parameters?.docs?.source},description:{story:`The expander utility column is 36px by default. Pass a pixel width when the
chevron column needs more (or less) room. It is not user-resizable.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Drive expansion imperatively through the table ref. `expandRow`, `expandRows`,\n`expandAllRows`, and `collapseAllRows` on `DsTableApi` let a parent expand or\ncollapse rows from outside the table.",...S.parameters?.docs?.description}}}})))()}w();export{x as CustomExpanderColumnWidth,b as Expandable,S as ProgrammaticExpansion,C as __namedExportsOrder,y as default};