import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-DqtPwBoO.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-CDFiuYY-.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-DsnQLiWC.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BvAA-nDw.js";import"./core-table-Dqo1T9ct.js";import"./ds-button-Bwt6ws4g.js";import"./ds-button-legacy-CP0hXOtK.js";import"./ds-button-new-VwCSwywZ.js";import"./ds-icon-Dunph_ZS.js";import"./ds-typography-DLRLNtHB.js";import"./index-BhTUIEbz.js";import"./index-DaJzPJcH.js";import"./ds-checkbox-BSD5d7NV.js";import"./index-gQ9kAjM1.js";import"./index-Cr82C_I1.js";import"./index-Bg1Hw2qV.js";import"./index-Bkd8jp0z.js";import"./ds-dropdown-menu-ChiTTBnU.js";import"./index-B5rEAf7W.js";import"./Combination-i4mIwReh.js";import"./index-AEXP5Thz.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-D0vddlIN.js";import"./ds-text-input-CYjZxfDh.js";import"./portal-CG3_kEMA.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BdGh1Icq.js";import"./create-anatomy-C_nhGgFT.js";import"./use-presence-DEGQjBwp.js";import"./set-DJjWqSVM.js";import"./raf-CC9hSMXO.js";import"./computed-style-CKlfnCUq.js";import"./event-CBXSxTbR.js";import"./index-t9tzm1mX.js";import"./get-styles-B4_D1t5j.js";import"./typeahead-DO0lTJqM.js";import"./query-CjgVAlRR.js";import"./initial-focus-CZCq1paB.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CnfAivJt.js";import"./navigate-pgf63kL7.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...s.parameters?.docs?.source}}};const ue=["Default","Sortable","EmptyState","NoBorder"];export{o as Default,n as EmptyState,s as NoBorder,r as Sortable,ue as __namedExportsOrder,le as default};
