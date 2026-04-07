import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-DZ8rqHcw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{i as a}from"./ds-icon.types-6edhYDwd.js";import{t as o}from"./ds-icon-DCbuwYQH.js";import{t as s}from"./ds-drawer-BQR3DdNs.js";import{t as c}from"./ds-drawer-CFHsHXkJ.js";import{n as l,t as u}from"./ds-table-N7FtOG7s.js";import{n as d,t as f}from"./ds-table.stories.module-CQzn1mCD.js";import{a as p,c as m,i as h,l as g,n as _,o as v,s as y,t as b}from"./components-glBqYKLr.js";var x,S,C,w,T,E;t((()=>{x=e(n(),1),S=e(i(),1),o(),c(),l(),d(),g(),v(),b(),C=r(),w={title:`Design System/Table/Active Row`,component:u,parameters:{layout:`fullscreen`},args:{columns:y,data:m,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,C.jsx)(_,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[p]},T={name:`Active Row with Drawer`,args:{data:m.slice(0,10)},render:function(e){let[t,n]=(0,x.useState)(null),r=t?.id,i=!!r,o=e=>{n(r===e.id?null:e)};return(0,C.jsxs)(`div`,{children:[(0,C.jsxs)(`div`,{className:f.programmaticSelectionDemo,children:[(0,C.jsx)(`h4`,{className:f.programmaticSelectionDemo__title,children:`Active Row with Drawer Demo`}),(0,C.jsx)(`p`,{className:f.programmaticSelectionDemo__description,children:`Click on any row to open a drawer with detailed information. The clicked row will remain highlighted to indicate which record the drawer is displaying.`})]}),(0,C.jsx)(u,{...e,activeRowId:r,onRowClick:o}),(0,C.jsx)(s,{open:i,onOpenChange:e=>{e||n(null)},columns:4,position:`end`,children:t&&(0,C.jsxs)(`div`,{className:f.drawerContent,children:[(0,C.jsxs)(`div`,{className:f.drawerHeader,children:[(0,C.jsx)(`h2`,{className:f.drawerTitle,children:`Person Details`}),(0,C.jsx)(`button`,{onClick:()=>n(null),className:f.drawerCloseButton,"aria-label":`Close drawer`,children:(0,C.jsx)(a,{icon:`close`,size:`medium`})})]}),(0,C.jsxs)(`div`,{className:f.drawerDetails,children:[(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Full Name`}),(0,C.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.firstName,` `,t.lastName]})]}),(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Age`}),(0,C.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.age,` years old`]})]}),(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Visits`}),(0,C.jsxs)(`p`,{className:f.drawerDetailValue,children:[t.visits,` visits`]})]}),(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Status`}),(0,C.jsx)(`p`,{className:(0,S.default)(f.drawerDetailValue,f.drawerDetailValueCapitalized),children:t.status})]}),(0,C.jsxs)(`div`,{className:f.drawerDetailItem,children:[(0,C.jsx)(`strong`,{className:f.drawerDetailLabel,children:`Profile Progress`}),(0,C.jsx)(`div`,{className:f.drawerProgressContainer,children:(0,C.jsx)(h,{value:t.progress})})]}),(0,C.jsx)(`div`,{className:f.drawerNote,children:(0,C.jsxs)(`p`,{children:[(0,C.jsx)(`strong`,{children:`Note:`}),` The row in the table remains highlighted while this drawer is open, helping you keep track of which record you're viewing.`]})})]})]})})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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