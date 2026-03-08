import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-DV96ciqC.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-DXwXoAK_.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-BSfF28J8.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bf-54wPu.js";import"./core-table-Da6EC8cM.js";import"./ds-button-SSBRyEVn.js";import"./ds-button-legacy-CJoyzBOc.js";import"./ds-button-new-CKdi5Y8l.js";import"./ds-icon-DMTFLbiR.js";import"./ds-typography-TLRViw0O.js";import"./index-BHJELap7.js";import"./index-RsnRcPCc.js";import"./ds-checkbox-DPMpRlms.js";import"./index-sglKFT7D.js";import"./index-BzC6s-iE.js";import"./index-BZ4hDW5j.js";import"./index-7TJoVjK2.js";import"./ds-dropdown-menu-CpWarLNt.js";import"./index-jw_JH4ZJ.js";import"./Combination-b19wmvTx.js";import"./index-CExp2c08.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-BfvkiZt1.js";import"./ds-text-input-Bze-KVQm.js";import"./portal-CqcPpFZT.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BXGYH-G_.js";import"./create-anatomy-DPnaczCP.js";import"./use-presence-GE6cLLPI.js";import"./set-CN0Hvdz-.js";import"./raf-CC9hSMXO.js";import"./computed-style-Dlx_PkG-.js";import"./event-CBXSxTbR.js";import"./index-CazKU5oL.js";import"./get-styles-BOVpeMAL.js";import"./typeahead-CJj2tNF7.js";import"./query-CjgVAlRR.js";import"./initial-focus-CcvO_sI7.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-D3gtpCn3.js";import"./navigate-DKtDux5p.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
