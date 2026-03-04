import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-ZkDsxhdx.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-DzTelypV.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-zD3xWcdw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bkff790b.js";import"./core-table-CfB1bO0T.js";import"./ds-button-BdznL9NY.js";import"./ds-button-legacy-CnHe_j44.js";import"./ds-button-new-C28yRHBL.js";import"./ds-icon-BN8hZyrB.js";import"./ds-typography-_LYOBaEj.js";import"./index-CYZU-zwO.js";import"./index-BhXYnqkn.js";import"./ds-checkbox-BbRcjznU.js";import"./index-Lru2z4ct.js";import"./index-pOsGLtSz.js";import"./index-Moyb4GcP.js";import"./index-D6vZ8kzq.js";import"./ds-dropdown-menu-Zgh2Om15.js";import"./index-C1cXfuue.js";import"./Combination-k7ot5OvW.js";import"./index-B28m74jq.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-CsmTiFYQ.js";import"./ds-text-input-BX9iwyT6.js";import"./portal-12HeV4JI.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-1K7Qlzt9.js";import"./create-anatomy-D0xiuNN3.js";import"./use-presence-CE8N0BSk.js";import"./set-V1TTXNUl.js";import"./raf-CC9hSMXO.js";import"./computed-style-CPj1S2On.js";import"./event-CBXSxTbR.js";import"./index-BZXhRXCF.js";import"./get-styles-Bj9uhrHC.js";import"./typeahead-gxZSEoSi.js";import"./query-CjgVAlRR.js";import"./initial-focus-Dp33qkhY.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-BJ3bHEFQ.js";import"./navigate-B9wmqn6f.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
