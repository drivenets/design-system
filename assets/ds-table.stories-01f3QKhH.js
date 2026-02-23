import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as w}from"./ds-table-CUHjYJ6o.js";import{s as h}from"./ds-table.stories.module-D_XXzStM.js";import{f as y,d as u,c as x,T as f}from"./table-empty-state-BDLSVyft.js";import{g as o}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-BK2JHK8_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B8KvXCFR.js";import"./index-CE69kRtu.js";import"./index-B3VZ0eJF.js";import"./core-table-CLa8Is_m.js";import"./ds-button-BuegiTDI.js";import"./ds-button-legacy-D6A_L97N.js";import"./ds-button-new-DNrdk8yT.js";import"./ds-icon-Dl3Ha86c.js";import"./ds-typography-D_YRwJ_7.js";import"./index-CRi3YeMG.js";import"./index-D3IXv-yL.js";import"./ds-checkbox-D559Dw2w.js";import"./index-CY9mQ2Ih.js";import"./index-Cd2yk-pe.js";import"./ds-dropdown-menu-B10KbvLQ.js";import"./index-CZSiwp-I.js";import"./Combination-D_5pXIZi.js";import"./index-DO2UXYTP.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-JzcHnBWp.js";import"./ds-text-input-aUtTiGDm.js";import"./portal-D0PBlHuX.js";import"./create-split-props-u5h9OPvL.js";import"./index-B72GQOki.js";import"./use-locale-context-C0CLl9YV.js";import"./use-presence-fC4jnKkh.js";import"./index-t2rT5KnA.js";import"./index-BJal6161.js";import"./index-CyyU3bJX.js";import"./merge-refs-DX9dreSa.js";const{expect:a,fn:B,userEvent:r}=__STORYBOOK_MODULE_TEST__,oe={title:"Design System/Table",component:w,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:x,data:u,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:n.jsx(f,{}),onRowClick:B()},decorators:[y]},s={play:async({args:e,canvas:t})=>{await a(o(t)).toHaveLength(15),await a(t.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await a(t.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await a(t.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await a(t.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await a(t.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await a(t.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const p=o(t)[0];await r.click(p),await a(e.onRowClick).toHaveBeenCalled()}},i={play:async({canvas:e})=>{const t=e.getByRole("columnheader",{name:/first name/i});await r.click(t);const p=o(e);await a(p[0]).toHaveTextContent("Daniel"),await r.click(t);const g=o(e);await a(g[0]).toHaveTextContent("Tanner")}},c={args:{data:u.slice(0,5),expandable:e=>e.firstName!=="Tanner",renderExpandedRow:e=>n.jsxs(n.Fragment,{children:[n.jsxs("div",{className:h.expandedRowDetails,children:[n.jsxs("h4",{children:["Expanded Details for ",e.firstName]}),n.jsxs("p",{children:["ID: ",e.id]}),n.jsxs("p",{children:["Full Name: ",e.firstName," ",e.lastName]}),n.jsxs("p",{children:["Status: ",e.status]})]}),n.jsx(w,{columns:[{accessorKey:"id",header:"ID"},{accessorKey:"firstName",header:"First Name"},{accessorKey:"lastName",header:"Last Name"}],data:u.slice(0,3)})]})},play:async({canvas:e})=>{await a(o(e)).toHaveLength(5);const t=e.getAllByRole("button",{name:/chevron_right/i});await a(t).toHaveLength(4),await r.click(t[0]),await a(e.getByText(/expanded details for kevin/i)).toBeInTheDocument(),await r.click(t[0]),await a(e.queryByText(/expanded details for kevin/i)).not.toBeInTheDocument()}},m={args:{data:[]},play:async({canvas:e})=>{await a(e.getByText(/no matching records found/i)).toBeInTheDocument()}},l={args:{virtualized:!0,data:[]},play:async({canvas:e})=>{await a(e.getByText(/no matching records found/i)).toBeInTheDocument()}},d={args:{bordered:!1}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
    virtualized: true,
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...d.parameters?.docs?.source}}};const re=["Default","Sortable","Expandable","EmptyState","EmptyStateVirtualized","NoBorder"];export{s as Default,m as EmptyState,l as EmptyStateVirtualized,c as Expandable,d as NoBorder,i as Sortable,re as __namedExportsOrder,oe as default};
