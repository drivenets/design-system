import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-DLMDGCUl.js";import{c as N}from"./index-CZjfX2qz.js";import{D as x}from"./ds-icon-DahQ-ftt.js";import{D as R}from"./ds-drawer-BzWy4Pha.js";import{D as h}from"./ds-table-ZMndgkff.js";import{s as a}from"./ds-table.stories.module-D_XXzStM.js";import{f,d as u,c as j,P as b,T as B}from"./table-empty-state-Cu00R5L6.js";import{g as p}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-typography-BE9vI6-J.js";import"./index-CCOlAiJE.js";import"./index-H_XcGL9U.js";import"./portal-CwCYN8ZL.js";import"./create-split-props-u5h9OPvL.js";import"./index-BiDlDip1.js";import"./index-_lRCdW41.js";import"./index-CXuil9IB.js";import"./use-locale-context-DHYoAyl8.js";import"./dialog-title-DsOqkrX8.js";import"./render-strategy-DQ2lFtX7.js";import"./use-presence-o92RzSjt.js";import"./index-JG2nMdqM.js";import"./core-table-DqokowRy.js";import"./ds-button-Th9pp1mU.js";import"./ds-button-legacy-8uD__cm1.js";import"./ds-button-new-Cimz2Z-c.js";import"./ds-checkbox-BFxN5nnb.js";import"./index-Ccoi4OM8.js";import"./index-BK68o3fZ.js";import"./ds-dropdown-menu-BO5xW2Ax.js";import"./index-wK_2Xdwh.js";import"./Combination-CHa5CDef.js";import"./index-DU4jNjNk.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-BXejAFVA.js";import"./ds-text-input-CGLbEP-v.js";import"./index-Dg000g9R.js";import"./merge-refs-DX9dreSa.js";const{expect:r,screen:t,userEvent:o,waitFor:n}=__STORYBOOK_MODULE_TEST__,we={title:"Design System/Table/Active Row",component:h,parameters:{layout:"fullscreen"},args:{columns:j,data:u,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:e.jsx(B,{}),onRowClick:i=>console.log("Row clicked:",i)},decorators:[f]},c={name:"Active Row with Drawer",args:{data:u.slice(0,10)},render:function(d){const[s,m]=y.useState(null),w=s?.id,g=!!w,D=l=>{const v=w===l.id;m(v?null:l)};return e.jsxs("div",{children:[e.jsxs("div",{className:a.programmaticSelectionDemo,children:[e.jsx("h4",{className:a.programmaticSelectionDemo__title,children:"Active Row with Drawer Demo"}),e.jsx("p",{className:a.programmaticSelectionDemo__description,children:"Click on any row to open a drawer with detailed information. The clicked row will remain highlighted to indicate which record the drawer is displaying."})]}),e.jsx(h,{...d,activeRowId:w,onRowClick:D}),e.jsx(R,{open:g,onOpenChange:l=>{l||m(null)},columns:4,position:"end",children:s&&e.jsxs("div",{className:a.drawerContent,children:[e.jsxs("div",{className:a.drawerHeader,children:[e.jsx("h2",{className:a.drawerTitle,children:"Person Details"}),e.jsx("button",{onClick:()=>m(null),className:a.drawerCloseButton,"aria-label":"Close drawer",children:e.jsx(x,{icon:"close",size:"medium"})})]}),e.jsxs("div",{className:a.drawerDetails,children:[e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Full Name"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.firstName," ",s.lastName]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Age"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.age," years old"]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Visits"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.visits," visits"]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Status"}),e.jsx("p",{className:N(a.drawerDetailValue,a.drawerDetailValueCapitalized),children:s.status})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Profile Progress"}),e.jsx("div",{className:a.drawerProgressContainer,children:e.jsx(b,{value:s.progress})})]}),e.jsx("div",{className:a.drawerNote,children:e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The row in the table remains highlighted while this drawer is open, helping you keep track of which record you're viewing."]})})]})]})})]})},play:async({canvas:i})=>{const d=p(i);await o.click(d[0]),await n(()=>r(t.getByRole("heading",{name:/person details/i})).toBeVisible()),await r(t.getByText(/tanner linsley/i)).toBeInTheDocument(),await o.click(t.getByRole("button",{name:/close drawer/i})),await n(()=>r(t.queryByRole("heading",{name:/person details/i})).not.toBeInTheDocument());const s=p(i);await o.click(s[1]),await n(()=>r(t.getByRole("heading",{name:/person details/i})).toBeVisible()),await r(t.getByText(/kevin fine/i)).toBeInTheDocument(),await o.click(s[1]),await n(()=>r(t.queryByRole("heading",{name:/person details/i})).not.toBeInTheDocument())}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const pe=["WithDrawerAndActiveRow"];export{c as WithDrawerAndActiveRow,pe as __namedExportsOrder,we as default};
