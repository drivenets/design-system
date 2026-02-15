import{j as k}from"./jsx-runtime-u17CrQMm.js";import{D as y}from"./ds-table-C-HpnVQ5.js";import{f as g,d as w,c as h,T as B}from"./table-empty-state-DwDvBC42.js";import{g as u}from"./story-test-helpers-PqH2Bcxs.js";import{s as f}from"./ds-table.stories.module-D_XXzStM.js";import"./iframe-DP30Lve1.js";import"./preload-helper-PPVm8Dsz.js";import"./index-lDFFcaH2.js";import"./index-CTVia-IG.js";import"./index-C6HRAoS7.js";import"./core-table-CE8N_C34.js";import"./ds-button-Mfo4wx3H.js";import"./ds-button-legacy-BCGu1BAq.js";import"./ds-button-new-BV6lV-Xb.js";import"./ds-icon-CO0Wg4wL.js";import"./ds-typography-BTCzuXcV.js";import"./index-CzzVvjPy.js";import"./index-BbZlVFbr.js";import"./ds-checkbox-DhCM9a39.js";import"./index-CxKdYMrx.js";import"./index-DFsOz1Nj.js";import"./ds-dropdown-menu-DoIKDPY5.js";import"./index-C0NV22dV.js";import"./Combination-HxgzPzaM.js";import"./index-DRJ_TLQU.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-DNhEy8mT.js";import"./ds-text-input-DAJT-Aoh.js";import"./portal-Qe6uhVbD.js";import"./create-split-props-u5h9OPvL.js";import"./index-CLn1TY-u.js";import"./use-locale-context-BCEL5uZo.js";import"./use-presence-DO6UslAR.js";import"./index-C8uPszPX.js";import"./index-XVaQnHoG.js";const{expect:o,fn:n,userEvent:a,within:s}=__STORYBOOK_MODULE_TEST__,ie={title:"Design System/Table/Row Actions",component:y,parameters:{layout:"fullscreen"},args:{columns:h,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:k.jsx(B,{}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[g]},i={args:{data:w.slice(0,5),reorderable:!0,onOrderChange:e=>console.log("Reordered row:",e)},play:async({canvas:e})=>{await o(u(e)).toHaveLength(5),await o(e.getByRole("columnheader",{name:/order/i})).toBeInTheDocument()}},m=n(),C=n(),l={args:{onRowClick:n(),primaryRowActions:[{icon:"edit",label:"Edit",onClick:m},{icon:"open_in_new",label:"Open in New Window",disabled:e=>e.firstName==="Tanner",onClick:C}],secondaryRowActions:[{icon:"delete_outline",label:"Delete",tooltip:"Delete this row",disabled:e=>e.status==="single",className:f.destructiveAction,onClick:n()},{icon:"info",label:"Details",tooltip:"Show details",onClick:n()},{icon:"call",label:e=>`Call ${e.firstName}`,onClick:n()}]},play:async({canvas:e})=>{const t=u(e);await a.hover(t[1]);const d=s(t[1]).getByRole("button",{name:/^edit$/i});await o(d).toBeInTheDocument(),await a.click(d),await o(m).toHaveBeenCalled(),await a.hover(t[0]);const b=s(t[0]).getByRole("button",{name:/open in new window/i});await o(b).toHaveAttribute("aria-disabled","true")}},p=n(),r={args:{selectable:!0,actions:[{icon:"alarm",label:"Notify",onClick:p},{icon:"folder_open",label:"Folder",onClick:n()},{icon:"delete_outline",label:"Delete",onClick:n()}]},play:async({canvasElement:e})=>{const t=s(e),c=t.getAllByRole("checkbox");await a.click(c[1]),await a.click(c[2]),await o(t.getByText(/items selected/i)).toBeInTheDocument(),await o(t.getByText("2")).toBeInTheDocument(),await a.click(t.getByText(/notify/i)),await o(p).toHaveBeenCalled()}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData.slice(0, 5),
    reorderable: true,
    onOrderChange: rows => console.log('Reordered row:', rows)
  },
  play: async ({
    canvas
  }) => {
    await expect(getDataRows(canvas)).toHaveLength(5);
    await expect(canvas.getByRole('columnheader', {
      name: /order/i
    })).toBeInTheDocument();
  }
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    selectable: true,
    actions: [{
      icon: 'alarm',
      label: 'Notify',
      onClick: notifyClickHandler
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
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkboxes = canvas.getAllByRole('checkbox');
    await userEvent.click(checkboxes[1] as HTMLElement);
    await userEvent.click(checkboxes[2] as HTMLElement);
    await expect(canvas.getByText(/items selected/i)).toBeInTheDocument();
    await expect(canvas.getByText('2')).toBeInTheDocument();
    await userEvent.click(canvas.getByText(/notify/i));
    await expect(notifyClickHandler).toHaveBeenCalled();
  }
}`,...r.parameters?.docs?.source}}};const le=["Reorderable","WithRowActions","WithBulkActions"];export{i as Reorderable,r as WithBulkActions,l as WithRowActions,le as __namedExportsOrder,ie as default};
