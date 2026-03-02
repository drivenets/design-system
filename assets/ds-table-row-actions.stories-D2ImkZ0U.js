import{j as f}from"./jsx-runtime-u17CrQMm.js";import{D as k}from"./ds-table-Bcbq-K_H.js";import{f as x,d as h,c as b,T as C}from"./table-empty-state-CAHMRdfo.js";import{g as p}from"./story-test-helpers-PqH2Bcxs.js";import{s as v}from"./ds-table.stories.module-D_XXzStM.js";import"./iframe-C9HeFeN4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1Jr-yOf.js";import"./core-table-DSBXsNKb.js";import"./ds-button-D-cEgAHJ.js";import"./ds-button-legacy-a8N6Cu5i.js";import"./ds-button-new-C1pZYrFM.js";import"./ds-icon-qceOxx15.js";import"./ds-typography-BoGB02z5.js";import"./index-DacD_HS5.js";import"./index-DqmfwFE4.js";import"./ds-checkbox-DIyS8pzQ.js";import"./index-COYMcdJv.js";import"./index-2OhZl8Tc.js";import"./index-Dp1tOaX-.js";import"./index-BeWXQAI-.js";import"./ds-dropdown-menu-w20UZ6H9.js";import"./index-CxlcXRnu.js";import"./Combination-D0rgt7IN.js";import"./index-CBmF5018.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-CsjcFpeD.js";import"./ds-text-input-BYuh4m6k.js";import"./portal-DeGjqhyD.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DS51nLeU.js";import"./create-anatomy-Cd6VaHaP.js";import"./use-presence-CwUE1V9t.js";import"./set-BXJwmBMb.js";import"./raf-CC9hSMXO.js";import"./event-CBXSxTbR.js";import"./index--zolotfl.js";import"./get-styles-CEbrKovt.js";import"./typeahead-BHrAEzZ0.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-BemikHtc.js";import"./navigate-CBAkW6Yj.js";import"./merge-refs-DX9dreSa.js";const{expect:t,fn:o,userEvent:r,waitFor:H,within:s}=__STORYBOOK_MODULE_TEST__,Re={title:"Design System/Table/Row Actions",component:k,parameters:{layout:"fullscreen"},args:{columns:b,data:h,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:f.jsx(C,{}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[x]},d={args:{data:h.slice(0,5),reorderable:!0,onOrderChange:o()},play:async({canvas:e,args:c})=>{await t(p(e)).toHaveLength(5),await t(e.getByRole("columnheader",{name:/order/i})).toBeInTheDocument();const n=p(e),a=s(n[0]).getByText("Tanner"),l=s(n[1]).getByText("Kevin");await t(a).toBeInTheDocument(),await t(l).toBeInTheDocument();const i=s(n[0]).getByText("arrow_downward"),B=s(n[1]).getByText("arrow_downward"),u=R=>{const y=R.getBoundingClientRect();return{x:y.left,y:y.top}};await r.pointer([{keys:"[MouseLeft>]",target:i,coords:u(i)},{coords:u(B)},{keys:"[/MouseLeft]"}]),await t(c.onOrderChange).toHaveBeenCalled();const g=p(e);await t(s(g[0]).getByText("Kevin")).toBeInTheDocument(),await t(s(g[1]).getByText("Tanner")).toBeInTheDocument()}},T=o(),D=o(),w={args:{onRowClick:o(),primaryRowActions:[{icon:"edit",label:"Edit",onClick:T},{icon:"open_in_new",label:"Open in New Window",disabled:e=>e.firstName==="Tanner",onClick:D}],secondaryRowActions:[{icon:"delete_outline",label:"Delete",tooltip:"Delete this row",disabled:e=>e.status==="single",className:v.destructiveAction,onClick:o()},{icon:"info",label:"Details",tooltip:"Show details",onClick:o()},{icon:"call",label:e=>`Call ${e.firstName}`,onClick:o()}]},play:async({canvas:e})=>{const c=p(e);await r.hover(c[1]);const a=s(c[1]).getByRole("button",{name:/^edit$/i});await t(a).toBeInTheDocument(),await r.click(a),await t(T).toHaveBeenCalled(),await r.hover(c[0]);const i=s(c[0]).getByRole("button",{name:/open in new window/i});await t(i).toHaveAttribute("aria-disabled","true")}},m={args:{selectable:!0,actions:[{icon:"alarm",label:"Notify",onClick:o()},{icon:"folder_open",label:"Folder",onClick:o()},{icon:"delete_outline",label:"Delete",onClick:o()}]},play:async({canvasElement:e,args:c})=>{const n=s(e),a=n.getAllByRole("checkbox");await r.click(a[1]),await r.click(a[2]),await t(n.getByText(/items selected/i)).toBeInTheDocument(),await t(n.getByText("2")).toBeInTheDocument();const l=async i=>{await r.click(n.getByText(i.label)),await t(i.onClick).toHaveBeenCalled()};for(const i of c.actions??[])await l(i);await r.click(a[1]),await r.click(a[2]),await H(()=>t(n.queryByText(/items selected/i)).not.toBeInTheDocument(),{timeout:500})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};const fe=["Reorderable","WithRowActions","WithBulkActions"];export{d as Reorderable,m as WithBulkActions,w as WithRowActions,fe as __namedExportsOrder,Re as default};
