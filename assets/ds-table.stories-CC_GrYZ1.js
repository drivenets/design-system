import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-button-v3-DKBJbP0e.js";import{n as i,t as a}from"./ds-stack-5oRwpvZl.js";import{n as o,t as s}from"./ds-table-Bx0R5lZB.js";import{n as c,t as l}from"./ds-table.stories.module-CixZ03cv.js";import{c as u,l as d,n as f,t as p,u as m}from"./components-B31jbPMJ.js";import{n as h,t as g}from"./story-decorators--tHA5VUw.js";var _,v,y,b,x,S,C,w,T,E;e((()=>{o(),i(),n(),m(),h(),p(),c(),_=t(),{fn:v}=__STORYBOOK_MODULE_TEST__,y=[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:250},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:250},{accessorKey:`age`,header:`Age (years)`,cell:e=>e.getValue(),size:200},{accessorKey:`visits`,header:`Number of Visits`,cell:e=>e.getValue(),size:250},{accessorKey:`status`,header:`Relationship Status`,cell:e=>e.getValue(),size:250},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:250}],b={title:`Components/Table`,component:s,parameters:{layout:`fullscreen`},args:{columns:u,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,_.jsx)(f,{}),onRowClick:v()},decorators:[g]},x={args:{data:d}},S={args:{data:d,controls:(0,_.jsxs)(a,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,_.jsx)(r,{variant:`secondary`,size:`small`,children:`RED version V2`}),(0,_.jsxs)(a,{direction:`row`,gap:8,alignItems:`center`,children:[(0,_.jsx)(r,{variant:`secondary`,size:`small`,children:`Import RED`}),(0,_.jsx)(r,{variant:`secondary`,size:`small`,children:`Export RED`}),(0,_.jsx)(r,{size:`small`,children:`Actions`})]})]})}},C={args:{data:[]}},w={args:{data:d,bordered:!1}},T={parameters:{docs:{description:{story:`When columns are wider than the container, the body and header scroll horizontally together while only the body scrolls vertically. The scrollbars are thin and become visible on hover.`}}},decorators:[e=>(0,_.jsx)(`div`,{className:l.horizontalScrollWrapper,children:(0,_.jsx)(e,{})})],args:{data:d,columns:y}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    controls: <DsStack direction="row" justifyContent="space-between" alignItems="center" width="100%">
                <DsButtonV3 variant="secondary" size="small">
                    RED version V2
                </DsButtonV3>
                <DsStack direction="row" gap={8} alignItems="center">
                    <DsButtonV3 variant="secondary" size="small">
                        Import RED
                    </DsButtonV3>
                    <DsButtonV3 variant="secondary" size="small">
                        Export RED
                    </DsButtonV3>
                    <DsButtonV3 size="small">Actions</DsButtonV3>
                </DsStack>
            </DsStack>
  }
}`,...S.parameters?.docs?.source},description:{story:`Pass arbitrary content to the pinned \`controls\` slot rendered above the header.
The consumer owns the layout; here a source selector sits on the left and action
buttons on the right. The controls bar stays fixed while the table scrolls.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    bordered: false
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'When columns are wider than the container, the body and header scroll horizontally together while only the body scrolls vertically. The scrollbars are thin and become visible on hover.'
      }
    }
  },
  decorators: [Story => <div className={styles.horizontalScrollWrapper}>
                <Story />
            </div>],
  args: {
    data: defaultData,
    columns: horizontalScrollColumns
  }
}`,...T.parameters?.docs?.source}}},E=[`Default`,`WithControls`,`EmptyState`,`NoBorder`,`HorizontalScroll`]}))();export{x as Default,C as EmptyState,T as HorizontalScroll,w as NoBorder,S as WithControls,E as __namedExportsOrder,b as default};