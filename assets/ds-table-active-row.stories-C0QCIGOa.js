import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-NTlmxmnx.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./classnames-Dm_LJ4P4.js";import{t as a}from"./ds-icon-DW-rwZsu.js";import{t as o}from"./ds-icon-6Pvx0p4S.js";import{n as s,t as c}from"./ds-table-2-VCwp6x.js";import{t as l}from"./ds-drawer-C9K5lxPz.js";import{t as u}from"./ds-drawer-Bv3G03o4.js";import{n as d,t as f}from"./ds-table.stories.module-BH4xkOob.js";import{c as p,l as m,n as h,o as g,t as _,u as v}from"./components-356DOWOd.js";import{n as y,t as b}from"./story-decorators-9jfApPlh.js";var x,S,C,w,T,E;e((()=>{x=t(n(),1),S=t(i(),1),o(),u(),s(),d(),v(),y(),_(),C=r(),w={title:`Components/Table/Active Row`,component:c,parameters:{layout:`fullscreen`},args:{columns:p,data:m,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,C.jsx)(h,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[b]},T={name:`Active Row with Drawer`,args:{data:m.slice(0,10)},render:function(e){let[t,n]=(0,x.useState)(null),r=t?.id,i=!!r,o=e=>{n(r===e.id?null:e)};return(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`div`,{className:f.programmaticSelectionDemo,children:[(0,C.jsx)(`h4`,{className:f.programmaticSelectionDemo__title,children:`Active Row with Drawer Demo`}),(0,C.jsx)(`p`,{className:f.programmaticSelectionDemo__description,children:`Click on any row to open a drawer with detailed information. The clicked row will remain highlighted to indicate which record the drawer is displaying.`})]}),(0,C.jsx)(c,{...e,activeRowId:r,onRowClick:o}),(0,C.jsx)(l,{open:i,onOpenChange:e=>{e||n(null)},columns:4,position:`end`,children:t&&(0,C.jsxs)(`div`,{className:f.drawerContent,children:[(0,C.jsxs)(`div`,{className:f.drawerHeader,children:[(0,C.jsx)(`h2`,{className:f.drawerTitle,children:`Person Details`}),(0,C.jsx)(`button`,{onClick:()=>n(null),className:f.drawerCloseButton,"aria-label":`Close drawer`,children:(0,C.jsx)(a,{icon:`close`,size:`medium`})})]}),(0,C.jsxs)(`div`,{className:f.drawerDetails,children:[(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Full Name`}),(0,C.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.firstName,` `,t.lastName]})]}),(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Age`}),(0,C.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.age,` years old`]})]}),(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Visits`}),(0,C.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.visits,` visits`]})]}),(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Status`}),(0,C.jsx)(`p`,{className:(0,S.default)(f.drawerDetailValue,f.drawerDetailValueCapitalized),children:t.status})]}),(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Profile Progress`}),(0,C.jsx)(`div`,{className:f.drawerProgressContainer,children:(0,C.jsx)(g,{value:t.progress})})]}),(0,C.jsx)(`div`,{className:f.drawerNote,children:(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`strong`,{children:`Note:`}),` The row in the table remains highlighted while this drawer is open, helping you keep track of which record you're viewing.`]})})]})]})})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
  }
}`,...T.parameters?.docs?.source}}},E=[`WithDrawerAndActiveRow`]}))();export{T as WithDrawerAndActiveRow,E as __namedExportsOrder,w as default};