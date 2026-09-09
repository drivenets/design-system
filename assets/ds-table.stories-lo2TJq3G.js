import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-button-v3-mT4iUQLS.js";import{n as i,t as a}from"./ds-stack-GU0hZWeR.js";import{n as o,t as s}from"./ds-table-DumaNPZU.js";import{i as c,n as l,r as u,t as d}from"./story-decorators-B0BgvTCA.js";import{n as f,r as p,t as m}from"./story-data-DABjxFNS.js";var h,g,_,v,y,b,x,S,C,w;e((()=>{o(),i(),n(),p(),l(),c(),h=t(),{fn:g}=__STORYBOOK_MODULE_TEST__,_=[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue(),size:250},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue(),size:250},{accessorKey:`age`,header:`Age (years)`,cell:e=>e.getValue(),size:200},{accessorKey:`visits`,header:`Number of Visits`,cell:e=>e.getValue(),size:250},{accessorKey:`status`,header:`Relationship Status`,cell:e=>e.getValue(),size:250},{accessorKey:`progress`,header:`Profile Progress`,cell:e=>`${String(e.getValue())}%`,size:250}],v={title:`Components/Table`,component:s,parameters:{layout:`fullscreen`},args:{columns:m,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:g()},decorators:[d]},y={args:{data:f}},b={args:{data:f,controls:(0,h.jsxs)(a,{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`,children:[(0,h.jsx)(r,{variant:`secondary`,size:`small`,children:`RED version V2`}),(0,h.jsxs)(a,{direction:`row`,gap:8,alignItems:`center`,children:[(0,h.jsx)(r,{variant:`secondary`,size:`small`,children:`Import RED`}),(0,h.jsx)(r,{variant:`secondary`,size:`small`,children:`Export RED`}),(0,h.jsx)(r,{size:`small`,children:`Actions`})]})]})}},x={args:{data:[]}},S={args:{data:f,bordered:!1}},C={parameters:{docs:{description:{story:`When columns are wider than the container, the body and header scroll horizontally together while only the body scrolls vertically. The scrollbars are thin and become visible on hover.`}}},decorators:[e=>(0,h.jsx)(`div`,{className:u.horizontalScrollWrapper,children:(0,h.jsx)(e,{})})],args:{data:f,columns:_}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Pass arbitrary content to the pinned \`controls\` slot rendered above the header.
The consumer owns the layout; here a source selector sits on the left and action
buttons on the right. The controls bar stays fixed while the table scrolls.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    data: []
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    data: defaultData,
    bordered: false
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w=[`Default`,`WithControls`,`EmptyState`,`NoBorder`,`HorizontalScroll`]}))();export{y as Default,x as EmptyState,C as HorizontalScroll,S as NoBorder,b as WithControls,w as __namedExportsOrder,v as default};