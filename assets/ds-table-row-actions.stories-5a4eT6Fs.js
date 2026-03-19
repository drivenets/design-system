import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./ds-table-BYtkhBN7.js";import{n as i,t as a}from"./ds-table.stories.module-CVeCpWMD.js";import{c as o,l as s,n as c,o as l,s as u,t as d,u as f}from"./components-CCtvZcwS.js";import{n as p,t as m}from"./story-test-helpers-DDaaSV4v.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{n(),f(),u(),p(),d(),i(),h=t(),{expect:g,fn:_,userEvent:v,waitFor:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Design System/Table/Row Actions`,component:r,parameters:{layout:`fullscreen`},args:{columns:o,data:s,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,h.jsx)(c,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[l]},S={args:{data:s.slice(0,5),reorderable:!0,onOrderChange:_()},play:async({canvas:e,args:t})=>{await g(m(e)).toHaveLength(5),await g(e.getByRole(`columnheader`,{name:/order/i})).toBeInTheDocument();let n=m(e),r=b(n[0]).getByText(`Tanner`),i=b(n[1]).getByText(`Kevin`);await g(r).toBeInTheDocument(),await g(i).toBeInTheDocument();let a=b(n[0]).getByText(`arrow_downward`),o=b(n[1]).getByText(`arrow_downward`),s=e=>{let t=e.getBoundingClientRect();return{x:t.left,y:t.top}};await v.pointer([{keys:`[MouseLeft>]`,target:a,coords:s(a)},{coords:s(o)},{keys:`[/MouseLeft]`}]),await g(t.onOrderChange).toHaveBeenCalled();let c=m(e);await g(b(c[0]).getByText(`Kevin`)).toBeInTheDocument(),await g(b(c[1]).getByText(`Tanner`)).toBeInTheDocument()}},C=_(),w=_(),T={args:{onRowClick:_(),primaryRowActions:[{icon:`edit`,label:`Edit`,onClick:C},{icon:`open_in_new`,label:`Open in New Window`,disabled:e=>e.firstName===`Tanner`,onClick:w}],secondaryRowActions:[{icon:`delete_outline`,label:`Delete`,tooltip:`Delete this row`,disabled:e=>e.status===`single`,className:a.destructiveAction,onClick:_()},{icon:`info`,label:`Details`,tooltip:`Show details`,onClick:_()},{icon:`call`,label:e=>`Call ${e.firstName}`,onClick:_()}]},play:async({canvas:e})=>{let t=m(e);await v.hover(t[1]);let n=b(t[1]).getByRole(`button`,{name:/^edit$/i});await g(n).toBeInTheDocument(),await v.click(n),await g(C).toHaveBeenCalled(),await v.hover(t[0]),await g(b(t[0]).getByRole(`button`,{name:/open in new window/i})).toHaveAttribute(`aria-disabled`,`true`)}},E={args:{selectable:!0,actions:[{icon:`alarm`,label:`Notify`,onClick:_()},{icon:`folder_open`,label:`Folder`,onClick:_()},{icon:`delete_outline`,label:`Delete`,onClick:_()}]},play:async({canvasElement:e,args:t})=>{let n=b(e),r=n.getAllByRole(`checkbox`);await v.click(r[1]),await v.click(r[2]),await g(n.getByText(/items selected/i)).toBeInTheDocument(),await g(n.getByText(`2`)).toBeInTheDocument();let i=async e=>{await v.click(n.getByText(e.label)),await g(e.onClick).toHaveBeenCalled()};for(let e of t.actions??[])await i(e);await v.click(r[1]),await v.click(r[2]),await y(()=>g(n.queryByText(/items selected/i)).not.toBeInTheDocument(),{timeout:500})}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    onOrderChange: fn()
  },
  play: async ({
    canvas,
    args
  }) => {
    await expect(getDataRows(canvas)).toHaveLength(5);
    await expect(canvas.getByRole('columnheader', {
      name: /order/i
    })).toBeInTheDocument();
    const dataRows = getDataRows(canvas);
    const firstRowInitial = within(dataRows[0] as HTMLElement).getByText('Tanner');
    const secondRowInitial = within(dataRows[1] as HTMLElement).getByText('Kevin');
    await expect(firstRowInitial).toBeInTheDocument();
    await expect(secondRowInitial).toBeInTheDocument();

    // Find drag handles - they are icons in the order column
    const firstRowHandle = within(dataRows[0] as HTMLElement).getByText('arrow_downward');
    const secondRowHandle = within(dataRows[1] as HTMLElement).getByText('arrow_downward');
    const getHandleCoords = (handle: HTMLElement) => {
      const rect = handle.getBoundingClientRect();
      return {
        x: rect.left,
        y: rect.top
      };
    };

    // Perform drag-and-drop to swap first and second row
    await userEvent.pointer([{
      keys: '[MouseLeft>]',
      target: firstRowHandle,
      coords: getHandleCoords(firstRowHandle)
    }, {
      coords: getHandleCoords(secondRowHandle)
    }, {
      keys: '[/MouseLeft]'
    }]);
    await expect(args.onOrderChange).toHaveBeenCalled();
    const dataRowsAfter = getDataRows(canvas);

    // First row should now contain Kevin (originally second row)
    await expect(within(dataRowsAfter[0] as HTMLElement).getByText('Kevin')).toBeInTheDocument();

    // Second row should now contain Tanner (originally first row)
    await expect(within(dataRowsAfter[1] as HTMLElement).getByText('Tanner')).toBeInTheDocument();
  }
}`,...S.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    onRowClick: fn(),
    primaryRowActions: [{
      icon: 'edit',
      label: 'Edit',
      onClick: editClickHandler
    }, {
      icon: 'open_in_new',
      label: 'Open in New Window',
      disabled: data => data.firstName === 'Tanner',
      onClick: openInNewWindowClickHandler
    }],
    secondaryRowActions: [{
      icon: 'delete_outline',
      label: 'Delete',
      tooltip: 'Delete this row',
      disabled: data => data.status === 'single',
      className: styles.destructiveAction,
      onClick: fn()
    }, {
      icon: 'info',
      label: 'Details',
      tooltip: 'Show details',
      onClick: fn()
    }, {
      icon: 'call',
      label: row => \`Call \${row.firstName}\`,
      onClick: fn()
    }]
  },
  play: async ({
    canvas
  }) => {
    const dataRows = getDataRows(canvas);
    await userEvent.hover(dataRows[1] as HTMLElement);
    const row1 = within(dataRows[1] as HTMLElement);
    const editButton = row1.getByRole('button', {
      name: /^edit$/i
    });
    await expect(editButton).toBeInTheDocument();
    await userEvent.click(editButton);
    await expect(editClickHandler).toHaveBeenCalled();
    await userEvent.hover(dataRows[0] as HTMLElement);
    const row0 = within(dataRows[0] as HTMLElement);
    const openButton = row0.getByRole('button', {
      name: /open in new window/i
    });
    await expect(openButton).toHaveAttribute('aria-disabled', 'true');
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    actions: [{
      icon: 'alarm',
      label: 'Notify',
      onClick: fn()
    }, {
      icon: 'folder_open',
      label: 'Folder',
      onClick: fn()
    }, {
      icon: 'delete_outline',
      label: 'Delete',
      onClick: fn()
    }]
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');
    await userEvent.click(checkboxes[1] as HTMLElement);
    await userEvent.click(checkboxes[2] as HTMLElement);
    await expect(canvas.getByText(/items selected/i)).toBeInTheDocument();
    await expect(canvas.getByText('2')).toBeInTheDocument();
    const testActionClick = async (action: Action<Person>) => {
      await userEvent.click(canvas.getByText(action.label));
      await expect(action.onClick).toHaveBeenCalled();
    };
    for (const action of args.actions ?? []) {
      await testActionClick(action);
    }

    // Deselect all rows to verify panel disappears
    await userEvent.click(checkboxes[1] as HTMLElement);
    await userEvent.click(checkboxes[2] as HTMLElement);
    await waitFor(() => {
      return expect(canvas.queryByText(/items selected/i)).not.toBeInTheDocument();
    }, {
      timeout: 500
    });
  }
}`,...E.parameters?.docs?.source}}},D=[`Reorderable`,`WithRowActions`,`WithBulkActions`]}))();export{S as Reorderable,E as WithBulkActions,T as WithRowActions,D as __namedExportsOrder,x as default};