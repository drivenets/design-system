import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./iframe-sRVif9um.js";import{n,t as r}from"./ds-button-v3-JRphN4FE.js";import{n as i,t as a}from"./ds-illustration-HJIuqoMw.js";import{a as o,i as s,n as c,t as l}from"./ds-empty-state-DB-ijrQf.js";var u,d,f,p,m,h,g,_;e((()=>{n(),a(),l(),o(),u=t(),d={title:`Components/EmptyState`,component:c,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:s},illustration:{table:{disable:!0}},action:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},f={args:{variant:`noData`}},p={args:{variant:`noMatches`}},m={args:{variant:`noData`},render:e=>(0,u.jsx)(c,{...e,action:(0,u.jsx)(r,{size:`small`,children:`Add`})})},h={args:{variant:`noMatches`,message:`No records match this search.`}},g={args:{variant:`noData`},render:e=>(0,u.jsx)(c,{...e,illustration:(0,u.jsx)(i,{variant:`no-documents`})})},_=[`Default`,`NoMatches`,`WithAction`,`Message`,`CustomIllustration`],f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'noData'
  }
}`,...f.parameters?.docs?.source},description:{story:"Default **no-data** empty state: the collection has no records. Illustration\nand message are bundled; add `action` when the page should offer a create CTA.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'noMatches'
  }
}`,...p.parameters?.docs?.source},description:{story:`**No-matches** empty state: a search or filter yielded zero items. The
collection itself may be non-empty.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'noData'
  },
  render: args => <DsEmptyState {...args} action={<DsButtonV3 size="small">Add</DsButtonV3>} />
}`,...m.parameters?.docs?.source},description:{story:"Pass `action` for a consumer-owned button (create, clear filters, etc.).\nThe inferred table default omits this slot.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'noMatches',
    message: 'No records match this search.'
  }
}`,...h.parameters?.docs?.source},description:{story:`Override the bundled message without replacing the illustration or adding
an action.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'noData'
  },
  render: args => <DsEmptyState {...args} illustration={<DsIllustration variant="no-documents" />} />
}`,...g.parameters?.docs?.source},description:{story:"Replace the bundled art with a custom `DsIllustration`. Variant still\nselects the default message unless `message` is also passed.",...g.parameters?.docs?.description}}}}))();export{g as CustomIllustration,f as Default,h as Message,p as NoMatches,m as WithAction,_ as __namedExportsOrder,d as default};