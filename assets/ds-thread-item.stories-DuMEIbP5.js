import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{r as n,t as r}from"./ds-thread-item-CYOr1PM6.js";var i,a,o,s,c,l,u,d,f,p;e((()=>{r(),i=t(),{fn:a}=__STORYBOOK_MODULE_TEST__,o={title:`Components/Comments/ThreadItem`,component:n,parameters:{layout:`padded`},argTypes:{isCommentAuthorMessage:{control:`boolean`},canModify:{control:`boolean`},content:{control:`text`},className:{table:{disable:!0}}},args:{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/150?img=1`},content:`This is a sample message in the comment thread.`,createdAt:new Date(`2026-02-09T09:00:00Z`),isCommentAuthorMessage:!0,canModify:!0,onEdit:a(),onDelete:a(),onMarkUnread:a(),onResolved:a()}},s={args:{isCommentAuthorMessage:!0}},c={args:{id:`msg-2`,isCommentAuthorMessage:!1,content:`This is my reply, so it appears aligned to the right.`}},l={args:{id:`msg-3`,content:`I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements.`}},u={args:{id:`msg-4`,content:`Line 1: First line of the message
Line 2: Second line with more details
Line 3: Final line`}},d={args:{id:`msg-5`,author:{id:`user-2`,name:`John Doe`},content:`Message from a user without an avatar.`}},f={render:()=>(0,i.jsx)(n,{id:`msg-6`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/150?img=2`},content:`A reply the current viewer cannot modify.`,createdAt:new Date(`2026-02-09T09:00:00Z`),isCommentAuthorMessage:!1})},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    isCommentAuthorMessage: true
  }
}`,...s.parameters?.docs?.source},description:{story:"A message from the thread's comment author, left-aligned. With `canModify` the\nviewer sees the more-actions menu and resolve control.",...s.parameters?.docs?.description}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'msg-2',
    isCommentAuthorMessage: false,
    content: 'This is my reply, so it appears aligned to the right.'
  }
}`,...c.parameters?.docs?.source},description:{story:"A message from the current viewer is right-aligned. Set `isCommentAuthorMessage`\nto `false` for replies that are not from the top-level comment author.",...c.parameters?.docs?.description}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'msg-3',
    content: 'I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements.'
  }
}`,...l.parameters?.docs?.source},description:{story:`Long content wraps within the item's width.`,...l.parameters?.docs?.description}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'msg-4',
    content: 'Line 1: First line of the message\\nLine 2: Second line with more details\\nLine 3: Final line'
  }
}`,...u.parameters?.docs?.source},description:{story:`Multi-line content preserves its line breaks.`,...u.parameters?.docs?.description}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    id: 'msg-5',
    author: {
      id: 'user-2',
      name: 'John Doe'
    },
    content: 'Message from a user without an avatar.'
  }
}`,...d.parameters?.docs?.source},description:{story:"When the author has no `avatarSrc`, the avatar falls back to initials derived\nfrom the name.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => <DsThreadItem id="msg-6" author={{
    id: 'user-2',
    name: 'John D.',
    avatarSrc: 'https://i.pravatar.cc/150?img=2'
  }} content="A reply the current viewer cannot modify." createdAt={new Date('2026-02-09T09:00:00Z')} isCommentAuthorMessage={false} />
}`,...f.parameters?.docs?.source},description:{story:"A read-only message: without `canModify` and action callbacks, neither the\nmore-actions menu nor the resolve control is rendered.",...f.parameters?.docs?.description}}},p=[`Default`,`CurrentUserMessage`,`LongMessage`,`MultilineMessage`,`NoAvatar`,`ReadOnly`]}))();export{c as CurrentUserMessage,s as Default,l as LongMessage,u as MultilineMessage,d as NoAvatar,f as ReadOnly,p as __namedExportsOrder,o as default};