import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-Bi7R3Gi2.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-BpFF9DKI.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-DgcHsVlP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BR8FvmX8.js";import"./core-table-C-nCi8_o.js";import"./ds-button-DM7MP3KQ.js";import"./ds-button-legacy-CQi4N2_R.js";import"./ds-button-new-B983F6cH.js";import"./ds-icon-B3lZEtKg.js";import"./ds-typography-By_uor2z.js";import"./index-Dv_rP5y3.js";import"./index-BOsPfo-f.js";import"./ds-checkbox-Bg_t2OyN.js";import"./index-HIiRB1lq.js";import"./index-t-Kfj9fc.js";import"./index-Bl6FkOfk.js";import"./index-CXuhJget.js";import"./ds-dropdown-menu-CKkkmpEA.js";import"./index-DFKMvtUw.js";import"./Combination-DpBZTEJo.js";import"./index-BXuIXuDD.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-0_hCIA38.js";import"./ds-text-input-8bPTrpgw.js";import"./portal-rdb4QJid.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DuuBKTIn.js";import"./create-anatomy-Z-S6lVO3.js";import"./use-presence-BCMMgZAH.js";import"./set-DPCYxM8_.js";import"./raf-CC9hSMXO.js";import"./event-CBXSxTbR.js";import"./index-CAjq3moY.js";import"./get-styles-LLSO7fpL.js";import"./typeahead-BBI1Bz_z.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-TfhJM1ba.js";import"./navigate-DzHPwbsr.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,ce={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},n={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},r={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...n.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...s.parameters?.docs?.source}}};const pe=["Default","Sortable","EmptyState","NoBorder"];export{o as Default,r as EmptyState,s as NoBorder,n as Sortable,pe as __namedExportsOrder,ce as default};
