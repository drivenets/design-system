import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-D2bVo5MX.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-uAXsCssX.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-BCyGbZD_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpBnwYq3.js";import"./core-table-BohargGD.js";import"./ds-button-DP2TgL_c.js";import"./ds-button-legacy-D5HV0FR5.js";import"./ds-button-new-BSrkWmm1.js";import"./ds-icon-D3yceEq8.js";import"./ds-typography-h2IQ5Or0.js";import"./index-B2qal8qf.js";import"./index-CayDF-OW.js";import"./ds-checkbox-Bln5pZKr.js";import"./index-Dr4xyiGj.js";import"./index-wsDxsJkb.js";import"./index-BkD-BxJw.js";import"./index-C0zqCK5j.js";import"./ds-dropdown-menu-DVRssiYy.js";import"./index-pApv1y_-.js";import"./Combination-DP_6TjLH.js";import"./index-D3ZqClI5.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-Bmnqp2a2.js";import"./ds-text-input-CcQI7kX-.js";import"./portal-ymrgfuLU.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-GaukUVrg.js";import"./create-anatomy--8mTmSpS.js";import"./use-presence-BcyfoOmj.js";import"./set-qYyhtSM1.js";import"./raf-CC9hSMXO.js";import"./computed-style-IANVWBuY.js";import"./event-CBXSxTbR.js";import"./index-CZY77q_q.js";import"./get-styles-CuVWlqT2.js";import"./typeahead-DZYdMylq.js";import"./query-CjgVAlRR.js";import"./initial-focus-CSJ0PROt.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-6sW9qQ30.js";import"./navigate-Di50S_xa.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
