import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-S4OlMruC.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-DIFuotOx.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-BrmpA5kg.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DCPJqruN.js";import"./core-table-8hG_4VyG.js";import"./ds-button-2Zyvz1qg.js";import"./ds-button-legacy-Vk0T0Uzj.js";import"./ds-button-new-BKUT0SSo.js";import"./ds-icon-Dhqlr3Xk.js";import"./ds-typography-D1jhXQ88.js";import"./index-MFth-Fck.js";import"./index-DBYf9_ck.js";import"./ds-checkbox-D2s51Aau.js";import"./index-DOxMwkzA.js";import"./index-k-OvTxYs.js";import"./index-D55BE5u8.js";import"./index-KVz0ROzw.js";import"./ds-dropdown-menu-DIVPa4GU.js";import"./index-BESssNBZ.js";import"./Combination-D4PkTkb9.js";import"./index-0UbMctly.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-CWKFRTKI.js";import"./ds-text-input-XL2RRB64.js";import"./portal-DY_ZBwdQ.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-iI9m4RFB.js";import"./create-anatomy-Dh9pr4Ky.js";import"./use-presence-CurQn60W.js";import"./set-49VG2BVp.js";import"./raf-CC9hSMXO.js";import"./event-CBXSxTbR.js";import"./index-C2l60SR7.js";import"./get-styles-COBKGi-P.js";import"./typeahead-HTTsUn_2.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-Cc718BZr.js";import"./navigate-BI7OQxGk.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,ce={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},n={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},r={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
