import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-C9HeFeN4.js";import{c as N}from"./index-D1Jr-yOf.js";import{D as x}from"./ds-icon-qceOxx15.js";import{D as R}from"./ds-drawer-CXzsJiAf.js";import{D as h}from"./ds-table-Bcbq-K_H.js";import{s as a}from"./ds-table.stories.module-D_XXzStM.js";import{f,d as u,c as j,P as b,T as B}from"./table-empty-state-CAHMRdfo.js";import{g as p}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-typography-BoGB02z5.js";import"./index-DacD_HS5.js";import"./index-DqmfwFE4.js";import"./portal-DeGjqhyD.js";import"./create-split-props-u5h9OPvL.js";import"./index-2OhZl8Tc.js";import"./index-Dp1tOaX-.js";import"./use-locale-context-DS51nLeU.js";import"./create-anatomy-Cd6VaHaP.js";import"./dialog-title-CNsbW9J9.js";import"./render-strategy-AYXOjW9i.js";import"./use-presence-CwUE1V9t.js";import"./set-BXJwmBMb.js";import"./raf-CC9hSMXO.js";import"./event-CBXSxTbR.js";import"./dismissable-layer-BemikHtc.js";import"./core-table-DSBXsNKb.js";import"./ds-button-D-cEgAHJ.js";import"./ds-button-legacy-a8N6Cu5i.js";import"./ds-button-new-C1pZYrFM.js";import"./ds-checkbox-DIyS8pzQ.js";import"./index-COYMcdJv.js";import"./index-BeWXQAI-.js";import"./ds-dropdown-menu-w20UZ6H9.js";import"./index-CxlcXRnu.js";import"./Combination-D0rgt7IN.js";import"./index-CBmF5018.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-CsjcFpeD.js";import"./ds-text-input-BYuh4m6k.js";import"./index--zolotfl.js";import"./get-styles-CEbrKovt.js";import"./typeahead-BHrAEzZ0.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./navigate-CBAkW6Yj.js";import"./merge-refs-DX9dreSa.js";const{expect:r,screen:t,userEvent:l,waitFor:n}=__STORYBOOK_MODULE_TEST__,xe={title:"Design System/Table/Active Row",component:h,parameters:{layout:"fullscreen"},args:{columns:j,data:u,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:e.jsx(B,{}),onRowClick:i=>console.log("Row clicked:",i)},decorators:[f]},c={name:"Active Row with Drawer",args:{data:u.slice(0,10)},render:function(d){const[s,m]=y.useState(null),w=s?.id,g=!!w,D=o=>{const v=w===o.id;m(v?null:o)};return e.jsxs("div",{children:[e.jsxs("div",{className:a.programmaticSelectionDemo,children:[e.jsx("h4",{className:a.programmaticSelectionDemo__title,children:"Active Row with Drawer Demo"}),e.jsx("p",{className:a.programmaticSelectionDemo__description,children:"Click on any row to open a drawer with detailed information. The clicked row will remain highlighted to indicate which record the drawer is displaying."})]}),e.jsx(h,{...d,activeRowId:w,onRowClick:D}),e.jsx(R,{open:g,onOpenChange:o=>{o||m(null)},columns:4,position:"end",children:s&&e.jsxs("div",{className:a.drawerContent,children:[e.jsxs("div",{className:a.drawerHeader,children:[e.jsx("h2",{className:a.drawerTitle,children:"Person Details"}),e.jsx("button",{onClick:()=>m(null),className:a.drawerCloseButton,"aria-label":"Close drawer",children:e.jsx(x,{icon:"close",size:"medium"})})]}),e.jsxs("div",{className:a.drawerDetails,children:[e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Full Name"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.firstName," ",s.lastName]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Age"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.age," years old"]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Visits"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.visits," visits"]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Status"}),e.jsx("p",{className:N(a.drawerDetailValue,a.drawerDetailValueCapitalized),children:s.status})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Profile Progress"}),e.jsx("div",{className:a.drawerProgressContainer,children:e.jsx(b,{value:s.progress})})]}),e.jsx("div",{className:a.drawerNote,children:e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The row in the table remains highlighted while this drawer is open, helping you keep track of which record you're viewing."]})})]})]})})]})},play:async({canvas:i})=>{const d=p(i);await l.click(d[0]),await n(()=>r(t.getByRole("heading",{name:/person details/i})).toBeVisible()),await r(t.getByText(/tanner linsley/i)).toBeInTheDocument(),await l.click(t.getByRole("button",{name:/close drawer/i})),await n(()=>r(t.queryByRole("heading",{name:/person details/i})).not.toBeInTheDocument());const s=p(i);await l.click(s[1]),await n(()=>r(t.getByRole("heading",{name:/person details/i})).toBeVisible()),await r(t.getByText(/kevin fine/i)).toBeInTheDocument(),await l.click(s[1]),await n(()=>r(t.queryByRole("heading",{name:/person details/i})).not.toBeInTheDocument())}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};const Re=["WithDrawerAndActiveRow"];export{c as WithDrawerAndActiveRow,Re as __namedExportsOrder,xe as default};
