import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-BwCsWwJU.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-s4gdVw6p.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-C6f-ocMF.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CUdr-Bxm.js";import"./core-table-DoVfLO1R.js";import"./ds-button-BgQbhMI2.js";import"./ds-button-legacy-ilS0Kzna.js";import"./ds-button-new-DwcRouZ6.js";import"./ds-icon-CMQ5iV8t.js";import"./ds-typography-CFYklv8R.js";import"./index-CZt3HLRd.js";import"./index-Dcu7xVmh.js";import"./ds-checkbox-Bxj-ucj7.js";import"./index-C5Hb0lGS.js";import"./index-CL-TAQed.js";import"./index-BeNDvfjG.js";import"./index-D400StFl.js";import"./ds-dropdown-menu-CE-OGWJa.js";import"./index-Cx4M4cvz.js";import"./Combination-5MpZbgOz.js";import"./index-BvorY3Z9.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-PJWy9qtM.js";import"./ds-text-input-Cpy3tAuc.js";import"./portal-DAlyNXjk.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-CO-6s7yp.js";import"./create-anatomy-Dsnpn5dh.js";import"./use-presence-D8srFtOb.js";import"./set-CBlY2MCb.js";import"./raf-CC9hSMXO.js";import"./event-CBXSxTbR.js";import"./index-DeggDxwx.js";import"./get-styles-DL0zf9ow.js";import"./typeahead-DuRLcBJM.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-T6IQQ34-.js";import"./navigate-DsSGUNXn.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,ce={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},n={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},r={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
