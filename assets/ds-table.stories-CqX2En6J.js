import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-BAeC8xHJ.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-DRc-4Q35.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-BmSPM-Ld.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnMwAcS8.js";import"./core-table-Bj7dW06P.js";import"./ds-button-D04f0NJ8.js";import"./ds-button-legacy-mJDTSJOh.js";import"./ds-button-new-Di2xg-Cn.js";import"./ds-icon-iMJSHCHz.js";import"./ds-typography-CphS93Yt.js";import"./index-BpmvwCao.js";import"./index-DqvjbSet.js";import"./ds-checkbox-BwVS5o0l.js";import"./index-BxkAKOG9.js";import"./index-Dbr3Y_Zx.js";import"./index-D4BidFMr.js";import"./index-CFLp-uFy.js";import"./ds-dropdown-menu-CiPq8KYc.js";import"./index-Bc9e2jvF.js";import"./Combination-DUk5LVq0.js";import"./index-DCJskxEh.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-BitrCCia.js";import"./ds-text-input-BsFy0Af1.js";import"./portal-CHaGvyib.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-CCTw63fm.js";import"./create-anatomy-BCWrtZRX.js";import"./use-presence-CkuG9iLr.js";import"./set-wINjjEke.js";import"./raf-CC9hSMXO.js";import"./computed-style-7Z9WAJuJ.js";import"./event-CBXSxTbR.js";import"./index-Ddmf6tA3.js";import"./get-styles-BCuPNK9_.js";import"./typeahead-DQd88xYC.js";import"./query-CjgVAlRR.js";import"./initial-focus-DAAGySxw.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CZzoYVdC.js";import"./navigate-CTqriKP7.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
