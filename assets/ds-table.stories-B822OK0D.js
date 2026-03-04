import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-BDPK9DtF.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-Dfj0tg5d.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-DBZSe9Ua.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4ULLhwzm.js";import"./core-table-BgZyobrk.js";import"./ds-button-BlsPsfO4.js";import"./ds-button-legacy-D58HAVEm.js";import"./ds-button-new-CvBbVAj1.js";import"./ds-icon-GWJIdMij.js";import"./ds-typography-BfWjwnoV.js";import"./index-Dim58NC3.js";import"./index-GvWsARhA.js";import"./ds-checkbox-Bg0hxMb1.js";import"./index-C8E51ZSe.js";import"./index-B_N646qb.js";import"./index-CmSjiGS4.js";import"./index-DMBvpMRN.js";import"./ds-dropdown-menu-cgYnRdWm.js";import"./index-BVrcr7NP.js";import"./Combination-BOq8z_Cr.js";import"./index-WVv7Gy32.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-DS8gfSPf.js";import"./ds-text-input-BYVgK4_j.js";import"./portal-BVHJgc6R.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DcbFQMjj.js";import"./create-anatomy-BHJMHo9S.js";import"./use-presence-CgEpmGRX.js";import"./set-Cm5F6no6.js";import"./raf-CC9hSMXO.js";import"./computed-style-8P_myl47.js";import"./event-CBXSxTbR.js";import"./index-DvEfVbO5.js";import"./get-styles-CJMTPcpD.js";import"./typeahead-BC5lkw4Z.js";import"./query-CjgVAlRR.js";import"./initial-focus-BQ7aDuf7.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-C6OTJ3pB.js";import"./navigate-yZ8WzvPj.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
