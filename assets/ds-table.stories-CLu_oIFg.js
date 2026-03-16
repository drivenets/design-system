import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-DiDtSRg8.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-doSzmN_J.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-Crf9NEZk.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Dsv-xH0q.js";import"./core-table-Dg6NFSRd.js";import"./ds-button-CsPP1wVh.js";import"./ds-button-legacy-ClWrMtPq.js";import"./ds-button-new-DR0OCBpw.js";import"./ds-icon-DTk7dVp_.js";import"./ds-typography-BnllDJO5.js";import"./index-CdgbYAf1.js";import"./index-CblPtlWK.js";import"./ds-checkbox-RJRDZmfG.js";import"./index-DNuA60ou.js";import"./index-Cj2g_A5E.js";import"./index-D7gFnMAt.js";import"./index-C8fyxkYp.js";import"./ds-dropdown-menu-BKMBdtBI.js";import"./index-BgGIDT55.js";import"./Combination-Yz4zBXqZ.js";import"./index-C_mjWQL1.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-Cz8dmuiJ.js";import"./ds-text-input-BVex8KV1.js";import"./portal-CT9I2_7Q.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DK4EzTpk.js";import"./create-anatomy-CqsAeiWh.js";import"./use-presence-BPl5TYEV.js";import"./set-D2ykEYof.js";import"./raf-CC9hSMXO.js";import"./computed-style-BWijvhsi.js";import"./event-CBXSxTbR.js";import"./index-Ds0NUJ34.js";import"./get-styles-BXbfoVE0.js";import"./typeahead-D5Mlip9E.js";import"./query-CjgVAlRR.js";import"./initial-focus-CMxn4K4i.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-DCkj1knG.js";import"./navigate-BI56tYEc.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
