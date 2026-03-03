import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-D1yyj9d7.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-CHJMugYN.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-BoKmvYv-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQxKMm9n.js";import"./core-table-BoI7d0_2.js";import"./ds-button-UVtd0uEP.js";import"./ds-button-legacy-CA6yrf7Y.js";import"./ds-button-new-BGNBJxa3.js";import"./ds-icon-D1-ehgnw.js";import"./ds-typography-BbZy79HU.js";import"./index-BPH9PuD6.js";import"./index-lBGmboyd.js";import"./ds-checkbox-DFOmBuFd.js";import"./index-HiBacBF2.js";import"./index-DZ5cWofW.js";import"./index-B1dMH4YE.js";import"./index-QRQYV_UP.js";import"./ds-dropdown-menu-R9Ndvanp.js";import"./index-DPLUjSXI.js";import"./Combination-DMypGHMT.js";import"./index-B4iKbFNO.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-dy1XgbzE.js";import"./ds-text-input-CKTiM9wQ.js";import"./portal-myaOKRbh.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DtKV6khj.js";import"./create-anatomy-DYeRuyqI.js";import"./use-presence-BKCn59TT.js";import"./set-MtMu4WSO.js";import"./raf-CC9hSMXO.js";import"./computed-style-eGdZx9o3.js";import"./event-CBXSxTbR.js";import"./index-BfV29z6k.js";import"./get-styles-CPcykbyT.js";import"./typeahead-BvX4mKnc.js";import"./query-CjgVAlRR.js";import"./initial-focus-B6vDCZoJ.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-DheLzH4x.js";import"./navigate-CKgLE_xz.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},tags:["autodocs"],args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
