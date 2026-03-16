import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-B_jYKNIh.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,t as a}from"./ds-table-BoW0-LVr.js";import{n as o,t as s}from"./ds-table.stories.module-hrO-tFWF.js";import{c,l,n as u,o as d,s as f,t as p,u as m}from"./components-Cx7UpYZr.js";import{n as h,t as g}from"./story-test-helpers-wdfDd2bq.js";var _,v,y,b,x,S,C,w,T;t((()=>{_=e(n(),1),i(),o(),m(),f(),h(),p(),v=r(),{expect:y,fn:b,userEvent:x}=__STORYBOOK_MODULE_TEST__,S={title:`Design System/Table/Expansion`,component:a,parameters:{layout:`fullscreen`},args:{columns:c,data:l,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,v.jsx)(u,{}),onRowClick:b()},decorators:[d]},C={args:{data:l.slice(0,5),expandable:e=>e.firstName!==`Tanner`,renderExpandedRow:e=>(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(`div`,{className:s.expandedRowDetails,children:[(0,v.jsxs)(`h4`,{children:[`Expanded Details for `,e.firstName]}),(0,v.jsxs)(`p`,{children:[`ID: `,e.id]}),(0,v.jsxs)(`p`,{children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,v.jsxs)(`p`,{children:[`Status: `,e.status]})]}),(0,v.jsx)(a,{columns:[{accessorKey:`id`,header:`ID`},{accessorKey:`firstName`,header:`First Name`},{accessorKey:`lastName`,header:`Last Name`}],data:l.slice(0,3)})]})},play:async({canvas:e})=>{await y(g(e)).toHaveLength(5);let t=e.getAllByRole(`button`,{name:/chevron_right/i});await y(t).toHaveLength(4),await x.click(t[0]),await y(e.getByText(/expanded details for kevin/i)).toBeInTheDocument(),await x.click(t[0]),await y(e.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument()}},w={args:{data:l.slice(0,5),expandable:e=>e.firstName!==`Tanner`,renderExpandedRow:e=>(0,v.jsxs)(`div`,{className:s.expandedRowDetails,children:[(0,v.jsxs)(`h4`,{children:[`Expanded Details for `,e.firstName]}),(0,v.jsxs)(`p`,{children:[`ID: `,e.id]}),(0,v.jsxs)(`p`,{children:[`Full Name: `,e.firstName,` `,e.lastName]}),(0,v.jsxs)(`p`,{children:[`Status: `,e.status]})]})},render:function(e){let t=(0,_.useRef)(null),[n,r]=(0,_.useState)([]),i=e=>{t.current?.expandRow(e),r(t=>t.includes(e)?t:[...t,e])};return(0,v.jsxs)(`div`,{children:[(0,v.jsxs)(`div`,{className:s.programmaticSelectionDemo,children:[(0,v.jsx)(`h4`,{className:s.programmaticSelectionDemo__title,children:`Programmatic Row Expansion Demo`}),(0,v.jsx)(`p`,{className:s.programmaticSelectionDemo__description,children:`Use the buttons below to programmatically control row expansion using TanStack Table v8 APIs.`}),(0,v.jsxs)(`p`,{className:s.programmaticSelectionDemo__selectedRows,children:[`Expanded rows: `,n.length>0?n.join(`, `):`None`]})]}),(0,v.jsxs)(`div`,{className:s.programmaticSelectionControls,children:[(0,v.jsx)(`button`,{onClick:()=>i(`2`),className:s.programmaticSelectionButton,children:`Expand Kevin`}),(0,v.jsx)(`button`,{onClick:()=>i(`3`),className:s.programmaticSelectionButton,children:`Expand John`}),(0,v.jsx)(`button`,{onClick:()=>i(`4`),className:s.programmaticSelectionButton,children:`Expand Jane`}),(0,v.jsx)(`button`,{onClick:()=>{t.current?.expandAllRows(),r(l.slice(0,5).filter(e=>e.firstName!==`Tanner`).map(e=>e.id))},className:s.programmaticSelectionButton,children:`Expand All`}),(0,v.jsx)(`button`,{onClick:()=>{t.current?.collapseAllRows(),r([])},className:s.programmaticSelectionButton,children:`Collapse All`}),(0,v.jsx)(`button`,{onClick:()=>{let e=[`2`,`3`,`4`];t.current?.expandRows(e),r(e)},className:s.programmaticSelectionButton,children:`Expand First 3 Expandable`})]}),(0,v.jsx)(a,{...e,ref:t})]})},play:async({canvas:e})=>{await y(e.getByText(/expanded rows: none/i)).toBeInTheDocument(),await x.click(e.getByRole(`button`,{name:/expand kevin/i})),await y(e.getByText((e,t)=>t?.textContent===`Expanded rows: 2`)).toBeInTheDocument(),await y(e.getByText(/expanded details for kevin/i)).toBeInTheDocument(),await x.click(e.getByRole(`button`,{name:/^expand all$/i})),await y(e.getAllByRole(`button`,{name:/chevron_right/i})).toHaveLength(4),await x.click(e.getByRole(`button`,{name:/collapse all/i})),await y(e.getByText(/expanded rows: none/i)).toBeInTheDocument(),await y(e.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument(),await x.click(e.getByRole(`button`,{name:/expand first 3 expandable/i})),await y(e.getByText((e,t)=>t?.textContent===`Expanded rows: 2, 3, 4`)).toBeInTheDocument(),await x.click(e.getByRole(`button`,{name:/collapse all/i})),await y(e.getByText(/expanded rows: none/i)).toBeInTheDocument()}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T=[`Expandable`,`ProgrammaticExpansion`]}))();export{C as Expandable,w as ProgrammaticExpansion,T as __namedExportsOrder,S as default};