import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-6sF1Ejqi.js";import{n,t as r}from"./ds-table-BYtkhBN7.js";import{c as i,l as a,n as o,o as s,s as c,t as l,u}from"./components-CCtvZcwS.js";import{n as d,t as f}from"./story-test-helpers-DDaaSV4v.js";var p,m,h,g,_,v,y,b,x,S;e((()=>{n(),u(),c(),d(),l(),p=t(),{expect:m,fn:h,userEvent:g}=__STORYBOOK_MODULE_TEST__,_={title:`Design System/Table`,component:r,parameters:{layout:`fullscreen`},args:{columns:i,data:a,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,p.jsx)(o,{}),onRowClick:h()},decorators:[s]},v={play:async({args:e,canvas:t})=>{await m(f(t)).toHaveLength(15),await m(t.getByRole(`columnheader`,{name:/first name/i})).toBeInTheDocument(),await m(t.getByRole(`columnheader`,{name:/last name/i})).toBeInTheDocument(),await m(t.getByRole(`columnheader`,{name:/^age$/i})).toBeInTheDocument(),await m(t.getByRole(`columnheader`,{name:/visits/i})).toBeInTheDocument(),await m(t.getByRole(`columnheader`,{name:/status/i})).toBeInTheDocument(),await m(t.getByRole(`columnheader`,{name:/profile progress/i})).toBeInTheDocument();let n=f(t)[0];await g.click(n),await m(e.onRowClick).toHaveBeenCalled()}},y={play:async({canvas:e})=>{let t=e.getByRole(`columnheader`,{name:/first name/i});await g.click(t),await m(f(e)[0]).toHaveTextContent(`Daniel`),await g.click(t),await m(f(e)[0]).toHaveTextContent(`Tanner`)}},b={args:{data:[]},play:async({canvas:e})=>{await m(e.getByText(/no matching records found/i)).toBeInTheDocument()}},x={args:{bordered:!1}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  },
  play: async ({
    canvas
  }) => {
    await expect(canvas.getByText(/no matching records found/i)).toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    bordered: false
  }
}`,...x.parameters?.docs?.source}}},S=[`Default`,`Sortable`,`EmptyState`,`NoBorder`]}))();export{v as Default,b as EmptyState,x as NoBorder,y as Sortable,S as __namedExportsOrder,_ as default};