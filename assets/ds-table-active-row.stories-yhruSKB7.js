import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-typography-Cu_YN1U3.js";import{n as a,t as o}from"./ds-button-v3-B2euxeVc.js";import{n as s,t as c}from"./ds-stack-Dy-M5AZb.js";import{n as l,t as u}from"./ds-table-BJkDgpc4.js";import{t as d}from"./ds-drawer-CVAnUV2a.js";import{t as f}from"./ds-drawer-CX-8geS5.js";import{i as p,n as m,r as h,t as g}from"./story-decorators-C_JjURmG.js";import{n as _,r as v,t as y}from"./story-data-CNz-shmS.js";import{i as b,t as x}from"./components-CyiWy7TT.js";var S,C,w,T,E,D,O;function k(){return(k=e((()=>{S=t(),f(),s(),a(),i(),l(),p(),v(),m(),x(),C=n(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/Table/Active Row`,component:u,parameters:{layout:`fullscreen`},args:{columns:y,data:_,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:w()},decorators:[g]},E={args:{data:_.slice(0,10),activeRowId:`3`}},D={name:`Active Row with Drawer`,args:{data:_.slice(0,10)},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,S.useState)(null),i=t?.id,a=!!i,s=e=>{let t=i===e.id;n(t?null:e)};return(0,C.jsxs)(C.Fragment,{children:[(0,C.jsx)(u,{...e,activeRowId:i,onRowClick:s}),(0,C.jsx)(d,{open:a,onOpenChange:e=>{e||n(null)},columns:4,position:`end`,children:t&&(0,C.jsx)(`div`,{className:h.drawerContent,children:(0,C.jsxs)(c,{direction:`column`,gap:24,children:[(0,C.jsxs)(c,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,children:[(0,C.jsx)(r,{variant:`heading2`,children:`Person Details`}),(0,C.jsx)(o,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":`Close drawer`,onClick:()=>n(null)})]}),(0,C.jsxs)(c,{direction:`column`,gap:16,children:[(0,C.jsxs)(c,{direction:`column`,gap:4,children:[(0,C.jsx)(r,{variant:`body-sm-md`,color:`secondary`,children:`Full Name`}),(0,C.jsxs)(r,{variant:`body-md-reg`,children:[t.firstName,` `,t.lastName]})]}),(0,C.jsxs)(c,{direction:`column`,gap:4,children:[(0,C.jsx)(r,{variant:`body-sm-md`,color:`secondary`,children:`Age`}),(0,C.jsxs)(r,{variant:`body-md-reg`,children:[t.age,` years old`]})]}),(0,C.jsxs)(c,{direction:`column`,gap:4,children:[(0,C.jsx)(r,{variant:`body-sm-md`,color:`secondary`,children:`Visits`}),(0,C.jsxs)(r,{variant:`body-md-reg`,children:[t.visits,` visits`]})]}),(0,C.jsxs)(c,{direction:`column`,gap:4,children:[(0,C.jsx)(r,{variant:`body-sm-md`,color:`secondary`,children:`Status`}),(0,C.jsx)(r,{variant:`body-md-reg`,children:t.status.charAt(0).toUpperCase()+t.status.slice(1)})]}),(0,C.jsxs)(c,{direction:`column`,gap:4,children:[(0,C.jsx)(r,{variant:`body-sm-md`,color:`secondary`,children:`Profile Progress`}),(0,C.jsx)(b,{value:t.progress})]})]})]})})})]})}},O=[`ActiveRow`,`WithDrawerAndActiveRow`],E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 10),
    activeRowId: '3'
  }
}`,...E.parameters?.docs?.source},description:{story:`Pass \`activeRowId\` to highlight a single row independently of selection. The
highlight persists until you change or clear the id — useful for marking the
record a side panel or detail view is currently showing.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Pass `activeRowId` to keep a row highlighted independently of selection —\nideal for a master/detail layout where clicking a row opens a drawer. Track\nthe clicked record in state, derive `activeRowId` from it, and clear it when\nthe drawer closes. Clicking the active row again toggles the drawer shut.",...D.parameters?.docs?.description}}}})))()}k();export{E as ActiveRow,D as WithDrawerAndActiveRow,O as __namedExportsOrder,T as default};