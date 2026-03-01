import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-I_hb-18R.js";import{s as h}from"./ds-table.stories.module-D_XXzStM.js";import{f as g,d,c as x,T as y}from"./table-empty-state-BF56D4i9.js";import{g as o}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-BiS-jv3t.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dcf9nKpk.js";import"./core-table-DMR1WUPP.js";import"./ds-button-vZfWUYJV.js";import"./ds-button-legacy-Bn3u2PEj.js";import"./ds-button-new-EwZ5B5rn.js";import"./ds-icon-C6_c7cen.js";import"./ds-typography-BBurbS9a.js";import"./index-ItqqaAbT.js";import"./index-BkQEma7U.js";import"./ds-checkbox-BNhEkuOX.js";import"./index-Ca6npegj.js";import"./index-Du5p6qUX.js";import"./index-B86gb8ra.js";import"./index-CFFkCUe2.js";import"./ds-dropdown-menu-DXQJ6g5w.js";import"./index-BvOvFuRs.js";import"./Combination-DQl_Imjx.js";import"./index-w-fLQtbi.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-C2qewpKZ.js";import"./ds-text-input-COOSt4JL.js";import"./portal-CLV-NGsi.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BRV_gY9N.js";import"./create-anatomy-rI760qwe.js";import"./use-presence-CrfHhwjR.js";import"./set-CK6CiRoH.js";import"./raf-CC9hSMXO.js";import"./event-CBXSxTbR.js";import"./index-BknwlxAh.js";import"./get-styles-BMCKPuke.js";import"./typeahead-Dds_o26r.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-73PcSIXb.js";import"./navigate-CfwhgLJp.js";import"./merge-refs-DX9dreSa.js";const{expect:t,fn:f,userEvent:r}=__STORYBOOK_MODULE_TEST__,pe={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:x,data:d,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:n.jsx(y,{}),onRowClick:f()},decorators:[g]},s={play:async({args:e,canvas:a})=>{await t(o(a)).toHaveLength(15),await t(a.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const p=o(a)[0];await r.click(p),await t(e.onRowClick).toHaveBeenCalled()}},i={play:async({canvas:e})=>{const a=e.getByRole("columnheader",{name:/first name/i});await r.click(a);const p=o(e);await t(p[0]).toHaveTextContent("Daniel"),await r.click(a);const w=o(e);await t(w[0]).toHaveTextContent("Tanner")}},c={args:{data:d.slice(0,5),expandable:e=>e.firstName!=="Tanner",renderExpandedRow:e=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:h.expandedRowDetails,children:[n.jsxs("h4",{children:["Expanded Details for ",e.firstName]}),n.jsxs("p",{children:["ID: ",e.id]}),n.jsxs("p",{children:["Full Name: ",e.firstName," ",e.lastName]}),n.jsxs("p",{children:["Status: ",e.status]})]}),n.jsx(u,{columns:[{accessorKey:"id",header:"ID"},{accessorKey:"firstName",header:"First Name"},{accessorKey:"lastName",header:"Last Name"}],data:d.slice(0,3)})]})},play:async({canvas:e})=>{await t(o(e)).toHaveLength(5);const a=e.getAllByRole("button",{name:/chevron_right/i});await t(a).toHaveLength(4),await r.click(a[0]),await t(e.getByText(/expanded details for kevin/i)).toBeInTheDocument(),await r.click(a[0]),await t(e.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument()}},m={args:{data:[]},play:async({canvas:e})=>{await t(e.getByText(/no matching records found/i)).toBeInTheDocument()}},l={args:{bordered:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  play: async ({
    args,
    canvas
  }) => {
    await expect(getDataRows(canvas)).toHaveLength(15);
    await expect(canvas.getByRole('columnheader', {
      name: /first name/i
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: /last name/i
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: /^age$/i
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: /visits/i
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: /status/i
    })).toBeInTheDocument();
    await expect(canvas.getByRole('columnheader', {
      name: /profile progress/i
    })).toBeInTheDocument();
    const firstDataRow = getDataRows(canvas)[0] as HTMLElement;
    await userEvent.click(firstDataRow);
    await expect(args.onRowClick).toHaveBeenCalled();
  }
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  play: async ({
    canvas
  }) => {
    const firstNameHeader = canvas.getByRole('columnheader', {
      name: /first name/i
    });
    await userEvent.click(firstNameHeader);
    const rowsAfterAsc = getDataRows(canvas);
    await expect(rowsAfterAsc[0]).toHaveTextContent('Daniel');
    await userEvent.click(firstNameHeader);
    const rowsAfterDesc = getDataRows(canvas);
    await expect(rowsAfterDesc[0]).toHaveTextContent('Tanner');
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...l.parameters?.docs?.source}}};const de=["Default","Sortable","Expandable","EmptyState","NoBorder"];export{s as Default,m as EmptyState,c as Expandable,l as NoBorder,i as Sortable,de as __namedExportsOrder,pe as default};
