import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-C8ygjfaP.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-BdwBCHyd.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-C7eI8nFv.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BzywPLk5.js";import"./core-table-BaTuHCJX.js";import"./ds-button-BoGhsQug.js";import"./ds-button-legacy-DjCIAOAt.js";import"./ds-button-new-D-0rfcAA.js";import"./ds-icon-Bilbo4v7.js";import"./ds-typography-DXHVABbZ.js";import"./index-Bq03zecS.js";import"./index-BA037AD6.js";import"./ds-checkbox-5Sw72Pup.js";import"./index-DrfeNeIp.js";import"./index-Bew6q3n_.js";import"./index-CmuNnD8m.js";import"./index-DhelPSfX.js";import"./ds-dropdown-menu-CtFndDqw.js";import"./index-CtI-_XjJ.js";import"./Combination-meqsQ6Bt.js";import"./index-DZa-kNv-.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-BywFmoFK.js";import"./ds-text-input-8-7tqsVU.js";import"./portal-Dxf8uyQl.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-C_JfCJWL.js";import"./create-anatomy-BBmpFkQ4.js";import"./use-presence-CvTP_-ea.js";import"./set-BaXaFPun.js";import"./raf-CC9hSMXO.js";import"./computed-style-U9YqrQn0.js";import"./event-CBXSxTbR.js";import"./index-vU7I5Bf-.js";import"./get-styles-CPe4pKSW.js";import"./typeahead-BSiGY5Dm.js";import"./query-CjgVAlRR.js";import"./initial-focus-f633omuS.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-DNYfn0Fv.js";import"./navigate-PlN9ut_R.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
