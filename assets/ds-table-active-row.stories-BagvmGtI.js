import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BtUy5DzV.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{i as a}from"./ds-icon.types-X5ul5i9A.js";import{t as o}from"./ds-icon-BOH4c93P.js";import{t as s}from"./ds-drawer-IIHsSGy1.js";import{t as c}from"./ds-drawer-WGbXBDi7.js";import{n as l,t as u}from"./ds-table-CFswuBdQ.js";import{n as d,t as f}from"./ds-table.stories.module-hrO-tFWF.js";import{a as p,c as m,l as h,n as g,o as _,s as v,t as y,u as b}from"./components-LDPsn63U.js";import{n as x,t as S}from"./story-test-helpers-wdfDd2bq.js";var C,w,T,E,D,O,k,A,j,M;t((()=>{C=e(n(),1),w=e(i(),1),o(),c(),l(),d(),b(),v(),x(),y(),T=r(),{expect:E,screen:D,userEvent:O,waitFor:k}=__STORYBOOK_MODULE_TEST__,A={title:`Design System/Table/Active Row`,component:u,parameters:{layout:`fullscreen`},args:{columns:m,data:h,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,T.jsx)(g,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[_]},j={name:`Active Row with Drawer`,args:{data:h.slice(0,10)},render:function(e){let[t,n]=(0,C.useState)(null),r=t?.id,i=!!r,o=e=>{n(r===e.id?null:e)};return(0,T.jsxs)(`div`,{children:[(0,T.jsxs)(`div`,{className:f.programmaticSelectionDemo,children:[(0,T.jsx)(`h4`,{className:f.programmaticSelectionDemo__title,children:`Active Row with Drawer Demo`}),(0,T.jsx)(`p`,{className:f.programmaticSelectionDemo__description,children:`Click on any row to open a drawer with detailed information. The clicked row will remain highlighted to indicate which record the drawer is displaying.`})]}),(0,T.jsx)(u,{...e,activeRowId:r,onRowClick:o}),(0,T.jsx)(s,{open:i,onOpenChange:e=>{e||n(null)},columns:4,position:`end`,children:t&&(0,T.jsxs)(`div`,{className:f.drawerContent,children:[(0,T.jsxs)(`div`,{className:f.drawerHeader,children:[(0,T.jsx)(`h2`,{className:f.drawerTitle,children:`Person Details`}),(0,T.jsx)(`button`,{onClick:()=>n(null),className:f.drawerCloseButton,"aria-label":`Close drawer`,children:(0,T.jsx)(a,{icon:`close`,size:`medium`})})]}),(0,T.jsxs)(`div`,{className:f.drawerDetails,children:[(0,T.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,T.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Full Name`}),(0,T.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.firstName,` `,t.lastName]})]}),(0,T.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,T.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Age`}),(0,T.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.age,` years old`]})]}),(0,T.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,T.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Visits`}),(0,T.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.visits,` visits`]})]}),(0,T.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,T.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Status`}),(0,T.jsx)(`p`,{className:(0,w.default)(f.drawerDetailValue,f.drawerDetailValueCapitalized),children:t.status})]}),(0,T.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,T.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Profile Progress`}),(0,T.jsx)(`div`,{className:f.drawerProgressContainer,children:(0,T.jsx)(p,{value:t.progress})})]}),(0,T.jsx)(`div`,{className:f.drawerNote,children:(0,T.jsxs)(`p`,{children:[(0,T.jsx)(`strong`,{children:`Note:`}),` The row in the table remains highlighted while this drawer is open, helping you keep track of which record you're viewing.`]})})]})]})})]})},play:async({canvas:e})=>{let t=S(e);await O.click(t[0]),await k(()=>E(D.getByRole(`heading`,{name:/person details/i})).toBeVisible()),await E(D.getByText(/tanner linsley/i)).toBeInTheDocument(),await O.click(D.getByRole(`button`,{name:/close drawer/i})),await k(()=>E(D.queryByRole(`heading`,{name:/person details/i})).not.toBeInTheDocument());let n=S(e);await O.click(n[1]),await k(()=>E(D.getByRole(`heading`,{name:/person details/i})).toBeVisible()),await E(D.getByText(/kevin fine/i)).toBeInTheDocument(),await O.click(n[1]),await k(()=>E(D.queryByRole(`heading`,{name:/person details/i})).not.toBeInTheDocument())}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  name: 'Active Row with Drawer',
  args: {
    data: defaultData.slice(0, 10)
  },
  render: function Render(args) {
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
    const activeRowId = selectedPerson?.id;
    const isDrawerOpen = !!activeRowId;
    const handleRowClick = (person: Person) => {
      const isSameRow = activeRowId === person.id;
      setSelectedPerson(isSameRow ? null : person);
    };
    return <div>
                <div className={styles.programmaticSelectionDemo}>
                    <h4 className={styles.programmaticSelectionDemo__title}>Active Row with Drawer Demo</h4>
                    <p className={styles.programmaticSelectionDemo__description}>
                        Click on any row to open a drawer with detailed information. The clicked row will remain
                        highlighted to indicate which record the drawer is displaying.
                    </p>
                </div>

                <DsTable {...args} activeRowId={activeRowId} onRowClick={handleRowClick} />

                <DsDrawer open={isDrawerOpen} onOpenChange={open => {
        if (!open) {
          setSelectedPerson(null);
        }
      }} columns={4} position="end">
                    {selectedPerson && <div className={styles.drawerContent}>
                            <div className={styles.drawerHeader}>
                                <h2 className={styles.drawerTitle}>Person Details</h2>
                                <button onClick={() => setSelectedPerson(null)} className={styles.drawerCloseButton} aria-label="Close drawer">
                                    <DsIcon icon="close" size="medium" />
                                </button>
                            </div>

                            <div className={styles.drawerDetails}>
                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Full Name</strong>
                                    <p className={styles.drawerDetailValue}>
                                        {selectedPerson.firstName} {selectedPerson.lastName}
                                    </p>
                                </div>

                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Age</strong>
                                    <p className={styles.drawerDetailValue}>{selectedPerson.age} years old</p>
                                </div>

                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Visits</strong>
                                    <p className={styles.drawerDetailValue}>{selectedPerson.visits} visits</p>
                                </div>

                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Status</strong>
                                    <p className={classnames(styles.drawerDetailValue, styles.drawerDetailValueCapitalized)}>
                                        {selectedPerson.status}
                                    </p>
                                </div>

                                <div className={styles.drawerDetailItem}>
                                    <strong className={styles.drawerDetailLabel}>Profile Progress</strong>
                                    <div className={styles.drawerProgressContainer}>
                                        <ProgressInfographic value={selectedPerson.progress} />
                                    </div>
                                </div>

                                <div className={styles.drawerNote}>
                                    <p>
                                        <strong>Note:</strong> The row in the table remains highlighted while this drawer is open,
                                        helping you keep track of which record you&#39;re viewing.
                                    </p>
                                </div>
                            </div>
                        </div>}
                </DsDrawer>
            </div>;
  },
  play: async ({
    canvas
  }) => {
    const dataRows = getDataRows(canvas);
    await userEvent.click(dataRows[0] as HTMLElement);
    await waitFor(() => {
      return expect(screen.getByRole('heading', {
        name: /person details/i
      })).toBeVisible();
    });
    await expect(screen.getByText(/tanner linsley/i)).toBeInTheDocument();
    await userEvent.click(screen.getByRole('button', {
      name: /close drawer/i
    }));
    await waitFor(() => {
      return expect(screen.queryByRole('heading', {
        name: /person details/i
      })).not.toBeInTheDocument();
    });
    const dataRowsAfter = getDataRows(canvas);
    await userEvent.click(dataRowsAfter[1] as HTMLElement);
    await waitFor(() => {
      return expect(screen.getByRole('heading', {
        name: /person details/i
      })).toBeVisible();
    });
    await expect(screen.getByText(/kevin fine/i)).toBeInTheDocument();
    await userEvent.click(dataRowsAfter[1] as HTMLElement);
    await waitFor(() => {
      return expect(screen.queryByRole('heading', {
        name: /person details/i
      })).not.toBeInTheDocument();
    });
  }
}`,...j.parameters?.docs?.source}}},M=[`WithDrawerAndActiveRow`]}))();export{j as WithDrawerAndActiveRow,M as __namedExportsOrder,A as default};