import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-user-card-aK2W_u0s.js";var i,a,o,s,c,l;e((()=>{n(),i=t(),a={title:`Components/UserCard`,component:r,parameters:{layout:`centered`},argTypes:{className:{table:{disable:!0}},style:{table:{disable:!0}}},decorators:[e=>(0,i.jsx)(`div`,{style:{width:280},children:(0,i.jsx)(e,{})})]},o={args:{name:`Mockup Developer`,subtitle:`developer@mock.local`}},s={args:{name:`Jane Smith`,subtitle:`jane.smith@drivenets.com`,src:`https://i.pravatar.cc/150?u=jane`}},c={args:{name:`A very long one. We need to think of some natural text in here.`,subtitle:`A very long one. Maybe a little longer? We need to think of some natural text in here.`}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Mockup Developer',
    subtitle: 'developer@mock.local'
  }
}`,...o.parameters?.docs?.source},description:{story:"The identity header of a user menu: a medium avatar (initials fallback from\n`name`) beside the name and an optional `subtitle` such as an email or role.",...o.parameters?.docs?.description}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith',
    subtitle: 'jane.smith@drivenets.com',
    src: 'https://i.pravatar.cc/150?u=jane'
  }
}`,...s.parameters?.docs?.source},description:{story:"When `src` resolves, the avatar shows the photo instead of initials. The `name`\nis still used for the image alt text and hover tooltip.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'A very long one. We need to think of some natural text in here.',
    subtitle: 'A very long one. Maybe a little longer? We need to think of some natural text in here.'
  }
}`,...c.parameters?.docs?.source},description:{story:`Both rows are single-line and truncate with an ellipsis when they exceed the
available width, keeping the header height stable regardless of content length.`,...c.parameters?.docs?.description}}},l=[`Default`,`WithImage`,`LongTextOverflow`]}))();export{o as Default,c as LongTextOverflow,s as WithImage,l as __namedExportsOrder,a as default};