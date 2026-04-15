import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-CndErUYW.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./ds-table-WexNstbQ.js";import{n as o,t as s}from"./ds-table.stories.module-BoxNodwB.js";import{a as c,c as l,l as u,n as d,o as f,s as p,t as m}from"./components-rZP1alUc.js";var h,g,_,v,y,b,x;t((()=>{h=e(n(),1),i(),o(),u(),f(),m(),g=r(),{fn:_}=__STORYBOOK_MODULE_TEST__,v={title:`Design System/Table/Expansion`,component:a,parameters:{layout:`fullscreen`},args:{columns:p,data:l,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,g.jsx)(d,{}),onRowClick:_()},decorators:[c]},y={args:{data:l.slice(0,5),expandable:e=>e.firstName!==`Tanner`,renderExpandedRow:e=>(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)(`div`,{className:s.expandedRowDetails,children:[(0,g.jsxs)(`h4`,{children:[`Expanded Details for `,e.firstName]}),(0,g.jsxs)(`p`,{children:[`ID: `,e.id]}),(0,g.jsxs)(`p`,{children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,g.jsxs)(`p`,{children:[`Status: `,e.status]})]}),(0,g.jsx)(a,{columns:[{accessorKey:`id`,header:`ID`},{accessorKey:`firstName`,header:`First Name`},{accessorKey:`lastName`,header:`Last Name`}],data:l.slice(0,3)})]})}},b={args:{data:l.slice(0,5),expandable:e=>e.firstName!==`Tanner`,renderExpandedRow:e=>(0,g.jsxs)(`div`,{className:s.expandedRowDetails,children:[(0,g.jsxs)(`h4`,{children:[`Expanded Details for `,e.firstName]}),(0,g.jsxs)(`p`,{children:[`ID: `,e.id]}),(0,g.jsxs)(`p`,{children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,g.jsxs)(`p`,{children:[`Status: `,e.status]})]})},render:function(e){let t=(0,h.useRef)(null),[n,r]=(0,h.useState)([]),i=e=>{t.current?.expandRow(e),r(t=>t.includes(e)?t:[...t,e])};return(0,g.jsxs)(`div`,{children:[(0,g.jsxs)(`div`,{className:s.programmaticSelectionDemo,children:[(0,g.jsx)(`h4`,{className:s.programmaticSelectionDemo__title,children:`Programmatic Row Expansion Demo`}),(0,g.jsx)(`p`,{className:s.programmaticSelectionDemo__description,children:`Use the buttons below to programmatically control row expansion using TanStack Table v8 APIs.`}),(0,g.jsxs)(`p`,{className:s.programmaticSelectionDemo__selectedRows,children:[`Expanded rows: `,n.length>0?n.join(`, `):`None`]})]}),(0,g.jsxs)(`div`,{className:s.programmaticSelectionControls,children:[(0,g.jsx)(`button`,{onClick:()=>i(`2`),className:s.programmaticSelectionButton,children:`Expand Kevin`}),(0,g.jsx)(`button`,{onClick:()=>i(`3`),className:s.programmaticSelectionButton,children:`Expand John`}),(0,g.jsx)(`button`,{onClick:()=>i(`4`),className:s.programmaticSelectionButton,children:`Expand Jane`}),(0,g.jsx)(`button`,{onClick:()=>{t.current?.expandAllRows(),r(l.slice(0,5).filter(e=>e.firstName!==`Tanner`).map(e=>e.id))},className:s.programmaticSelectionButton,children:`Expand All`}),(0,g.jsx)(`button`,{onClick:()=>{t.current?.collapseAllRows(),r([])},className:s.programmaticSelectionButton,children:`Collapse All`}),(0,g.jsx)(`button`,{onClick:()=>{let e=[`2`,`3`,`4`];t.current?.expandRows(e),r(e)},className:s.programmaticSelectionButton,children:`Expand First 3 Expandable`})]}),(0,g.jsx)(a,{...e,ref:t})]})}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
  }
}`,...b.parameters?.docs?.source}}},x=[`Expandable`,`ProgrammaticExpansion`]}))();export{y as Expandable,b as ProgrammaticExpansion,x as __namedExportsOrder,v as default};