import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-D5f9i2KZ.js";import{s as h}from"./ds-table.stories.module-D_XXzStM.js";import{f as g,d,c as x,T as y}from"./table-empty-state-Bo1J5zzb.js";import{g as o}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-BL4EkVfD.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BRTNyK63.js";import"./core-table-B71j-CFc.js";import"./ds-button-BATBrz52.js";import"./ds-button-legacy-DGO8e9G-.js";import"./ds-button-new-1k2Cg-Jt.js";import"./ds-icon-D7KIPxkv.js";import"./ds-typography-CocuM6k2.js";import"./index-BQ3pj3wd.js";import"./index-y6pVhlvX.js";import"./ds-checkbox-D9nShPEf.js";import"./index-vJ6V03-x.js";import"./index-CdnNnBHx.js";import"./index-BFWG_x5j.js";import"./index-5UMpNpdy.js";import"./ds-dropdown-menu-C_7UUcp_.js";import"./index-CjMX53Vl.js";import"./Combination-D4ORdoZn.js";import"./index-BR6s-VNa.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-DH7PB3ib.js";import"./ds-text-input-PbAP_0w4.js";import"./portal-BBohPxSM.js";import"./create-split-props-u5h9OPvL.js";import"./index-DQyNQ_gb.js";import"./use-locale-context-CfK79Gmh.js";import"./use-presence-B1No_FNc.js";import"./index-Bt03mnJC.js";import"./index-DcGZhNWQ.js";import"./index-BFjzaSsA.js";import"./merge-refs-DX9dreSa.js";const{expect:t,fn:f,userEvent:r}=__STORYBOOK_MODULE_TEST__,ne={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:x,data:d,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:n.jsx(y,{}),onRowClick:f()},decorators:[g]},s={play:async({args:e,canvas:a})=>{await t(o(a)).toHaveLength(15),await t(a.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(a.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const p=o(a)[0];await r.click(p),await t(e.onRowClick).toHaveBeenCalled()}},i={play:async({canvas:e})=>{const a=e.getByRole("columnheader",{name:/first name/i});await r.click(a);const p=o(e);await t(p[0]).toHaveTextContent("Daniel"),await r.click(a);const w=o(e);await t(w[0]).toHaveTextContent("Tanner")}},c={args:{data:d.slice(0,5),expandable:e=>e.firstName!=="Tanner",renderExpandedRow:e=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:h.expandedRowDetails,children:[n.jsxs("h4",{children:["Expanded Details for ",e.firstName]}),n.jsxs("p",{children:["ID: ",e.id]}),n.jsxs("p",{children:["Full Name: ",e.firstName," ",e.lastName]}),n.jsxs("p",{children:["Status: ",e.status]})]}),n.jsx(u,{columns:[{accessorKey:"id",header:"ID"},{accessorKey:"firstName",header:"First Name"},{accessorKey:"lastName",header:"Last Name"}],data:d.slice(0,3)})]})},play:async({canvas:e})=>{await t(o(e)).toHaveLength(5);const a=e.getAllByRole("button",{name:/chevron_right/i});await t(a).toHaveLength(4),await r.click(a[0]),await t(e.getByText(/expanded details for kevin/i)).toBeInTheDocument(),await r.click(a[0]),await t(e.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument()}},m={args:{data:[]},play:async({canvas:e})=>{await t(e.getByText(/no matching records found/i)).toBeInTheDocument()}},l={args:{bordered:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};const oe=["Default","Sortable","Expandable","EmptyState","NoBorder"];export{s as Default,m as EmptyState,c as Expandable,l as NoBorder,i as Sortable,oe as __namedExportsOrder,ne as default};
