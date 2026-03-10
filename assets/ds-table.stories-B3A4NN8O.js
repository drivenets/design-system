import{j as l}from"./jsx-runtime-u17CrQMm.js";import{D as u}from"./ds-table-CaJmCG9S.js";import{f as d,d as w,c as g,T as f}from"./table-empty-state-CIWJlAOH.js";import{g as i}from"./story-test-helpers-PqH2Bcxs.js";import"./iframe-C2vEXaZ0.js";import"./preload-helper-PPVm8Dsz.js";import"./index-SNZB44Df.js";import"./core-table-CtfIB9OT.js";import"./ds-button-D9E173xF.js";import"./ds-button-legacy-s_qks40p.js";import"./ds-button-new-DLG4lECv.js";import"./ds-icon-BuyG_NyX.js";import"./ds-typography-D19qwcdq.js";import"./index-Gdkfg0uS.js";import"./index-HZuaK6Wj.js";import"./ds-checkbox-DflX4NOz.js";import"./index-tqkmlqp6.js";import"./index-DTBCzxZX.js";import"./index-DjfZN8i5.js";import"./index-LBWaO-Kt.js";import"./ds-dropdown-menu-Kp_m-Swr.js";import"./index-BWoRMeYk.js";import"./Combination-CtXi1Cv7.js";import"./index-fIG5SGyB.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-me9CeBg_.js";import"./ds-text-input-B__mkfqU.js";import"./portal-DAff8Y5R.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-EAp3VDYF.js";import"./create-anatomy-wahY7-Io.js";import"./use-presence-CxLfYLo3.js";import"./set-D92Yywq1.js";import"./raf-CC9hSMXO.js";import"./computed-style-DL2X0W1r.js";import"./event-CBXSxTbR.js";import"./index-D811zTQa.js";import"./get-styles-Dd5BpE2-.js";import"./typeahead-ChBT5EBe.js";import"./query-CjgVAlRR.js";import"./initial-focus-DsbvvtY5.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-WPLeg3si.js";import"./navigate-DQjvGcLJ.js";import"./merge-refs-DX9dreSa.js";import"./ds-table.stories.module-D_XXzStM.js";const{expect:t,fn:y,userEvent:c}=__STORYBOOK_MODULE_TEST__,le={title:"Design System/Table",component:u,parameters:{layout:"fullscreen"},args:{columns:g,data:w,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:l.jsx(f,{}),onRowClick:y()},decorators:[d]},o={play:async({args:a,canvas:e})=>{await t(i(e)).toHaveLength(15),await t(e.getByRole("columnheader",{name:/first name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/last name/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/^age$/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/visits/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/status/i})).toBeInTheDocument(),await t(e.getByRole("columnheader",{name:/profile progress/i})).toBeInTheDocument();const m=i(e)[0];await c.click(m),await t(a.onRowClick).toHaveBeenCalled()}},r={play:async({canvas:a})=>{const e=a.getByRole("columnheader",{name:/first name/i});await c.click(e);const m=i(a);await t(m[0]).toHaveTextContent("Daniel"),await c.click(e);const p=i(a);await t(p[0]).toHaveTextContent("Tanner")}},n={args:{data:[]},play:async({canvas:a})=>{await t(a.getByText(/no matching records found/i)).toBeInTheDocument()}},s={args:{bordered:!1}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
