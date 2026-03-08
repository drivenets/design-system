import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table--4qMN5TM.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-Db89TKPO.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-DmYLyLTN.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CugPKDsx.js";import"./core-table-2TdfRUtO.js";import"./ds-button-DpHGY1Ws.js";import"./ds-button-legacy-CZQInbOy.js";import"./ds-button-new-CzFSZDrJ.js";import"./ds-icon-Kmq8JTbB.js";import"./ds-typography-CZRiq4H-.js";import"./index-Bfdnd1nG.js";import"./index-Dbk4JI6D.js";import"./ds-checkbox-cawDuIwP.js";import"./index-YxUKf_MR.js";import"./index-DiNV2lQk.js";import"./index-BIDqSjes.js";import"./index-D7178L9p.js";import"./ds-dropdown-menu-CSDt9pI2.js";import"./index-vXg57-TO.js";import"./Combination-Tvv0HaLj.js";import"./index-BNbs5gKs.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-B6Cjpejj.js";import"./ds-text-input-C-j8r8Fa.js";import"./portal-3JzZZLHx.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DH1NeGFr.js";import"./create-anatomy-niJzF2E9.js";import"./use-presence-uVF3T3rq.js";import"./set-CrkoBcD2.js";import"./raf-CC9hSMXO.js";import"./computed-style-CPsepoiY.js";import"./event-CBXSxTbR.js";import"./index-CNZHQ5zb.js";import"./get-styles-CSWiJIy8.js";import"./typeahead-B5Qn_ApW.js";import"./query-CjgVAlRR.js";import"./initial-focus-DTgb15y0.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-v3kAfdyH.js";import"./navigate-BV7D0A1S.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
