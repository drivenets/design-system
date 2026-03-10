import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-ChuU8rq3.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-Ciet4g8S.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-D4dP-uEH.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BDYjqGwS.js";import"./core-table-CpDsPMzE.js";import"./ds-button-JL90ZQg7.js";import"./ds-button-legacy-B-fBAJbC.js";import"./ds-button-new-DSjmdcaJ.js";import"./ds-icon-CLoJ2-MS.js";import"./ds-typography-DPj25c-b.js";import"./index-1kXn5XMG.js";import"./index-CqHMg8Vq.js";import"./ds-checkbox-BOnwMAs5.js";import"./index-DlPpV-dE.js";import"./index-DoJfWbdg.js";import"./index-DgsCoqoV.js";import"./index-BoWFkVm4.js";import"./ds-dropdown-menu-gyxSHEab.js";import"./index-1N71-NYT.js";import"./Combination-b_PdbkS7.js";import"./index-BAk8fA-G.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-Bw2GSEfJ.js";import"./ds-text-input-CV1z4vav.js";import"./portal-Rab8UUwO.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BxlVZCcF.js";import"./create-anatomy-I9uLePv-.js";import"./use-presence-Bl0OPcGS.js";import"./set-Bgaki6gI.js";import"./raf-CC9hSMXO.js";import"./computed-style-BE-z9kxN.js";import"./event-CBXSxTbR.js";import"./index-Dn57QtEY.js";import"./get-styles-BYcONDf1.js";import"./typeahead-D-WeHU6O.js";import"./query-CjgVAlRR.js";import"./initial-focus-Dbo7p9vt.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-s1ARB_oF.js";import"./navigate-CghYtn5a.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
