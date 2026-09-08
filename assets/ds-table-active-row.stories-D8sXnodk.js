import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-typography-CNcYGTxd.js";import{n as o,t as s}from"./ds-button-v3-BnV8s8Ko.js";import{n as c,t as l}from"./ds-stack-GU0hZWeR.js";import{n as u,t as d}from"./ds-table-D8JcB1ey.js";import{t as f}from"./ds-drawer-DmWMFuB2.js";import{t as p}from"./ds-drawer-Dw3XLqRb.js";import{i as m,n as h,r as g,t as _}from"./story-decorators-B0BgvTCA.js";import{n as v,r as y,t as b}from"./story-data-DABjxFNS.js";import{i as x,t as S}from"./components-Ct8k3W1b.js";var C,w,T,E,D,O,k;t((()=>{C=e(n(),1),p(),c(),o(),a(),u(),m(),y(),h(),S(),w=r(),{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Components/Table/Active Row`,component:d,parameters:{layout:`fullscreen`},args:{columns:b,data:v,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:T()},decorators:[_]},D={args:{data:v.slice(0,10),activeRowId:`3`}},O={name:`Active Row with Drawer`,args:{data:v.slice(0,10)},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,C.useState)(null),r=t?.id,a=!!r,o=e=>{let t=r===e.id;n(t?null:e)};return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(d,{...e,activeRowId:r,onRowClick:o}),(0,w.jsx)(f,{open:a,onOpenChange:e=>{e||n(null)},columns:4,position:`end`,children:t&&(0,w.jsx)(`div`,{className:g.drawerContent,children:(0,w.jsxs)(l,{direction:`column`,gap:24,children:[(0,w.jsxs)(l,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,children:[(0,w.jsx)(i,{variant:`heading2`,children:`Person Details`}),(0,w.jsx)(s,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":`Close drawer`,onClick:()=>n(null)})]}),(0,w.jsxs)(l,{direction:`column`,gap:16,children:[(0,w.jsxs)(l,{direction:`column`,gap:4,children:[(0,w.jsx)(i,{variant:`body-sm-md`,color:`secondary`,children:`Full Name`}),(0,w.jsxs)(i,{variant:`body-md-reg`,children:[t.firstName,` `,t.lastName]})]}),(0,w.jsxs)(l,{direction:`column`,gap:4,children:[(0,w.jsx)(i,{variant:`body-sm-md`,color:`secondary`,children:`Age`}),(0,w.jsxs)(i,{variant:`body-md-reg`,children:[t.age,` years old`]})]}),(0,w.jsxs)(l,{direction:`column`,gap:4,children:[(0,w.jsx)(i,{variant:`body-sm-md`,color:`secondary`,children:`Visits`}),(0,w.jsxs)(i,{variant:`body-md-reg`,children:[t.visits,` visits`]})]}),(0,w.jsxs)(l,{direction:`column`,gap:4,children:[(0,w.jsx)(i,{variant:`body-sm-md`,color:`secondary`,children:`Status`}),(0,w.jsx)(i,{variant:`body-md-reg`,children:t.status.charAt(0).toUpperCase()+t.status.slice(1)})]}),(0,w.jsxs)(l,{direction:`column`,gap:4,children:[(0,w.jsx)(i,{variant:`body-sm-md`,color:`secondary`,children:`Profile Progress`}),(0,w.jsx)(x,{value:t.progress})]})]})]})})})]})}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 10),
    activeRowId: '3'
  }
}`,...D.parameters?.docs?.source},description:{story:`Pass \`activeRowId\` to highlight a single row independently of selection. The
highlight persists until you change or clear the id — useful for marking the
record a side panel or detail view is currently showing.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Active Row with Drawer',
  args: {
    data: defaultData.slice(0, 10)
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
    const activeRowId = selectedPerson?.id;
    const isDrawerOpen = !!activeRowId;
    const handleRowClick = (person: Person) => {
      const isSameRow = activeRowId === person.id;
      setSelectedPerson(isSameRow ? null : person);
    };
    return <>
                <DsTable {...args} activeRowId={activeRowId} onRowClick={handleRowClick} />

                <DsDrawer open={isDrawerOpen} onOpenChange={open => {
        if (!open) {
          setSelectedPerson(null);
        }
      }} columns={4} position="end">
                    {selectedPerson && <div className={styles.drawerContent}>
                            <DsStack direction="column" gap={24}>
                                <DsStack direction="row" justifyContent="space-between" alignItems="center">
                                    <DsTypography variant="heading2">Person Details</DsTypography>
                                    <DsButtonV3 variant="tertiary" size="small" icon="close" aria-label="Close drawer" onClick={() => setSelectedPerson(null)} />
                                </DsStack>

                                <DsStack direction="column" gap={16}>
                                    <DsStack direction="column" gap={4}>
                                        <DsTypography variant="body-sm-md" color="secondary">
                                            Full Name
                                        </DsTypography>
                                        <DsTypography variant="body-md-reg">
                                            {selectedPerson.firstName} {selectedPerson.lastName}
                                        </DsTypography>
                                    </DsStack>

                                    <DsStack direction="column" gap={4}>
                                        <DsTypography variant="body-sm-md" color="secondary">
                                            Age
                                        </DsTypography>
                                        <DsTypography variant="body-md-reg">{selectedPerson.age} years old</DsTypography>
                                    </DsStack>

                                    <DsStack direction="column" gap={4}>
                                        <DsTypography variant="body-sm-md" color="secondary">
                                            Visits
                                        </DsTypography>
                                        <DsTypography variant="body-md-reg">{selectedPerson.visits} visits</DsTypography>
                                    </DsStack>

                                    <DsStack direction="column" gap={4}>
                                        <DsTypography variant="body-sm-md" color="secondary">
                                            Status
                                        </DsTypography>
                                        <DsTypography variant="body-md-reg">
                                            {selectedPerson.status.charAt(0).toUpperCase() + selectedPerson.status.slice(1)}
                                        </DsTypography>
                                    </DsStack>

                                    <DsStack direction="column" gap={4}>
                                        <DsTypography variant="body-sm-md" color="secondary">
                                            Profile Progress
                                        </DsTypography>
                                        <ProgressInfographic value={selectedPerson.progress} />
                                    </DsStack>
                                </DsStack>
                            </DsStack>
                        </div>}
                </DsDrawer>
            </>;
  }
}`,...O.parameters?.docs?.source},description:{story:"Pass `activeRowId` to keep a row highlighted independently of selection —\nideal for a master/detail layout where clicking a row opens a drawer. Track\nthe clicked record in state, derive `activeRowId` from it, and clear it when\nthe drawer closes. Clicking the active row again toggles the drawer shut.",...O.parameters?.docs?.description}}},k=[`ActiveRow`,`WithDrawerAndActiveRow`]}))();export{D as ActiveRow,O as WithDrawerAndActiveRow,k as __namedExportsOrder,E as default};