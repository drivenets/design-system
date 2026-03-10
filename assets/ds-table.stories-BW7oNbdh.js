import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-Dchv7gCx.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-D1zeLCMa.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-DqXDffqa.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CAjgkSpS.js";import"./core-table-5KFk0K6T.js";import"./ds-button-Dq5XbDIq.js";import"./ds-button-legacy-BWsOcf_q.js";import"./ds-button-new-ityBlADU.js";import"./ds-icon-CnIgB9vW.js";import"./ds-typography-DbmtArz4.js";import"./index-CXdJNNcI.js";import"./index-B955zj3j.js";import"./ds-checkbox-CAERozv-.js";import"./index-CZsEDmsN.js";import"./index-CSIYGFIN.js";import"./index-CR_tVwKq.js";import"./index-DADBUCkz.js";import"./ds-dropdown-menu-DMMa9TYb.js";import"./index-D-24R-WC.js";import"./Combination-CGNkEgJp.js";import"./index-Cl02rsvb.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-yA0cQYLJ.js";import"./ds-text-input-DmXkd9FK.js";import"./portal-D4vfPPNn.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BFjg08qZ.js";import"./create-anatomy-BzmhCF0M.js";import"./use-presence-DiNoUmYw.js";import"./set-Dm3oMbeM.js";import"./raf-CC9hSMXO.js";import"./computed-style-BZ9EjscZ.js";import"./event-CBXSxTbR.js";import"./index-CelOZJL-.js";import"./get-styles--oj4Xnc1.js";import"./typeahead-CK7WldbO.js";import"./query-CjgVAlRR.js";import"./initial-focus-Dzo7zCA_.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CVhZDAiu.js";import"./navigate-8IHDWOM4.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
