import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-CkcmUkmg.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-Dgav2w5v.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-D-4vSaFr.js";import"./preload-helper-PPVm8Dsz.js";import"./index-2Q6pcTR2.js";import"./core-table-anRTwA4N.js";import"./ds-button-ANUcYOyR.js";import"./ds-button-legacy-Jnbujn-a.js";import"./ds-button-new-BmtSjXUF.js";import"./ds-icon-CoUTo_ss.js";import"./ds-typography-C4ElP7k-.js";import"./index-BtClwyuJ.js";import"./index-CceALDGK.js";import"./ds-checkbox-BgvM-h7C.js";import"./index-C5pvcz0w.js";import"./index-D-dZNy2i.js";import"./index-Bidm1fEI.js";import"./index-CxtWdGow.js";import"./ds-dropdown-menu-CSpO6tf8.js";import"./index-FM2dvzOp.js";import"./Combination-DTLGsQ9P.js";import"./index-DMyIKgWG.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-BhizaGlZ.js";import"./ds-text-input-llCm_ZQR.js";import"./portal-D6KCU3YG.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DYQmGWOm.js";import"./create-anatomy-D7ed79_G.js";import"./use-presence-D6vIKN0j.js";import"./set-Dhq3r8Kw.js";import"./raf-CC9hSMXO.js";import"./computed-style-BynrRcOx.js";import"./event-CBXSxTbR.js";import"./index-Dc80Z9I6.js";import"./get-styles-B7R5z2IW.js";import"./typeahead-CMsiTBpg.js";import"./query-CjgVAlRR.js";import"./initial-focus--4mxR5s3.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CAkaCBlM.js";import"./navigate-W93orb3j.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
