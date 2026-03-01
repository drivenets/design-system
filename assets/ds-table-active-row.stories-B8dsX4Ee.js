import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-BiS-jv3t.js";import{c as N}from"./index-Dcf9nKpk.js";import{D as x}from"./ds-icon-C6_c7cen.js";import{D as R}from"./ds-drawer-Cx1A4PvY.js";import{D as h}from"./ds-table-I_hb-18R.js";import{s as a}from"./ds-table.stories.module-D_XXzStM.js";import{f,d as u,c as j,P as b,T as B}from"./table-empty-state-BF56D4i9.js";import{g as p}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-typography-BBurbS9a.js";import"./index-ItqqaAbT.js";import"./index-BkQEma7U.js";import"./portal-CLV-NGsi.js";import"./create-split-props-u5h9OPvL.js";import"./index-Du5p6qUX.js";import"./index-B86gb8ra.js";import"./use-locale-context-BRV_gY9N.js";import"./create-anatomy-rI760qwe.js";import"./dialog-title-CPHAFzwQ.js";import"./render-strategy-ylfqd-5X.js";import"./use-presence-CrfHhwjR.js";import"./set-CK6CiRoH.js";import"./raf-CC9hSMXO.js";import"./event-CBXSxTbR.js";import"./dismissable-layer-73PcSIXb.js";import"./core-table-DMR1WUPP.js";import"./ds-button-vZfWUYJV.js";import"./ds-button-legacy-Bn3u2PEj.js";import"./ds-button-new-EwZ5B5rn.js";import"./ds-checkbox-BNhEkuOX.js";import"./index-Ca6npegj.js";import"./index-CFFkCUe2.js";import"./ds-dropdown-menu-DXQJ6g5w.js";import"./index-BvOvFuRs.js";import"./Combination-DQl_Imjx.js";import"./index-w-fLQtbi.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-C2qewpKZ.js";import"./ds-text-input-COOSt4JL.js";import"./index-BknwlxAh.js";import"./get-styles-BMCKPuke.js";import"./typeahead-Dds_o26r.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./navigate-CfwhgLJp.js";import"./merge-refs-DX9dreSa.js";const{expect:r,screen:t,userEvent:l,waitFor:n}=__STORYBOOK_MODULE_TEST__,xe={title:"Design System/Table/Active Row",component:h,parameters:{layout:"fullscreen"},args:{columns:j,data:u,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:e.jsx(B,{}),onRowClick:i=>console.log("Row clicked:",i)},decorators:[f]},c={name:"Active Row with Drawer",args:{data:u.slice(0,10)},render:function(d){const[s,m]=y.useState(null),w=s?.id,g=!!w,D=o=>{const v=w===o.id;m(v?null:o)};return e.jsxs("div",{children:[e.jsxs("div",{className:a.programmaticSelectionDemo,children:[e.jsx("h4",{className:a.programmaticSelectionDemo__title,children:"Active Row with Drawer Demo"}),e.jsx("p",{className:a.programmaticSelectionDemo__description,children:"Click on any row to open a drawer with detailed information. The clicked row will remain highlighted to indicate which record the drawer is displaying."})]}),e.jsx(h,{...d,activeRowId:w,onRowClick:D}),e.jsx(R,{open:g,onOpenChange:o=>{o||m(null)},columns:4,position:"end",children:s&&e.jsxs("div",{className:a.drawerContent,children:[e.jsxs("div",{className:a.drawerHeader,children:[e.jsx("h2",{className:a.drawerTitle,children:"Person Details"}),e.jsx("button",{onClick:()=>m(null),className:a.drawerCloseButton,"aria-label":"Close drawer",children:e.jsx(x,{icon:"close",size:"medium"})})]}),e.jsxs("div",{className:a.drawerDetails,children:[e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Full Name"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.firstName," ",s.lastName]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Age"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.age," years old"]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Visits"}),e.jsxs("p",{className:a.drawerDetailValue,children:[s.visits," visits"]})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Status"}),e.jsx("p",{className:N(a.drawerDetailValue,a.drawerDetailValueCapitalized),children:s.status})]}),e.jsxs("div",{className:a.drawerDetailItem,children:[e.jsx("strong",{className:a.drawerDetailLabel,children:"Profile Progress"}),e.jsx("div",{className:a.drawerProgressContainer,children:e.jsx(b,{value:s.progress})})]}),e.jsx("div",{className:a.drawerNote,children:e.jsxs("p",{children:[e.jsx("strong",{children:"Note:"})," The row in the table remains highlighted while this drawer is open, helping you keep track of which record you're viewing."]})})]})]})})]})},play:async({canvas:i})=>{const d=p(i);await l.click(d[0]),await n(()=>r(t.getByRole("heading",{name:/person details/i})).toBeVisible()),await r(t.getByText(/tanner linsley/i)).toBeInTheDocument(),await l.click(t.getByRole("button",{name:/close drawer/i})),await n(()=>r(t.queryByRole("heading",{name:/person details/i})).not.toBeInTheDocument());const s=p(i);await l.click(s[1]),await n(()=>r(t.getByRole("heading",{name:/person details/i})).toBeVisible()),await r(t.getByText(/kevin fine/i)).toBeInTheDocument(),await l.click(s[1]),await n(()=>r(t.queryByRole("heading",{name:/person details/i})).not.toBeInTheDocument())}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
