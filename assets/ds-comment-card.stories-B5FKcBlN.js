import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-typography-CNcYGTxd.js";import{n as i,t as a}from"./ds-stack-GU0hZWeR.js";import{n as o,t as s}from"./ds-comment-card-Utv8XeMl.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{s(),i(),r(),c=t(),{fn:l}=__STORYBOOK_MODULE_TEST__,u={id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},d=(e={})=>({id:`comment-1`,numericId:63,author:u,createdAt:new Date(`2026-02-09T10:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:u,content:`We need to review the resource allocation for this project before the next sprint.`,createdAt:new Date(`2026-02-09T10:00:00Z`),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Thanks for the feedback!`,createdAt:new Date(`2026-02-09T12:00:00Z`)}],...e}),f={title:`Components/Comments/CommentCard`,component:o,parameters:{layout:`centered`},decorators:[e=>(0,c.jsx)(a,{width:`484px`,children:(0,c.jsx)(e,{})})],argTypes:{overflow:{control:`select`,options:[`hidden`,`displayed`]},comment:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{onClick:l(),onResolve:l(),onDelete:l()}},p={args:{comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T10:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project before the next sprint.`,createdAt:new Date(`2026-02-09T10:00:00Z`),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Thanks for the feedback!`,createdAt:new Date(`2026-02-09T12:00:00Z`)}]}}},m={args:{comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T10:00:00Z`),isResolved:!1,isActionRequired:!0,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project before the next sprint.`,createdAt:new Date(`2026-02-09T10:00:00Z`),isInitialMessage:!0}]}}},h={args:{disabled:!0,comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T10:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project before the next sprint.`,createdAt:new Date(`2026-02-09T10:00:00Z`),isInitialMessage:!0}]}}},g={args:{overflow:`displayed`,comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T10:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project. Adjusting the timeline will ensure we have enough resources for the development phase and keep quality high.`,createdAt:new Date(`2026-02-09T10:00:00Z`),isInitialMessage:!0}]}}},_={args:{comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T10:00:00Z`),isResolved:!1,referenceTag:`Resource allocation`,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project before the next sprint.`,createdAt:new Date(`2026-02-09T10:00:00Z`),isInitialMessage:!0}]}}},v={parameters:{docs:{source:{type:`code`}}},render:e=>(0,c.jsx)(o,{...e,comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T10:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project.`,createdAt:new Date(`2026-02-09T10:00:00Z`),isInitialMessage:!0}]},formatTimestamp:e=>e.toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`})})},y={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,c.jsxs)(a,{direction:`column`,gap:`var(--lg)`,width:`484px`,children:[(0,c.jsxs)(a,{direction:`column`,gap:`var(--xs)`,children:[(0,c.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Default`}),(0,c.jsx)(o,{comment:d()})]}),(0,c.jsxs)(a,{direction:`column`,gap:`var(--xs)`,children:[(0,c.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Action required`}),(0,c.jsx)(o,{comment:d({isActionRequired:!0})})]}),(0,c.jsxs)(a,{direction:`column`,gap:`var(--xs)`,children:[(0,c.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Disabled`}),(0,c.jsx)(o,{comment:d(),disabled:!0})]}),(0,c.jsxs)(a,{direction:`column`,gap:`var(--xs)`,children:[(0,c.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Full message`}),(0,c.jsx)(o,{comment:d(),overflow:`displayed`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    comment: {
      id: 'comment-1',
      numericId: 63,
      author: {
        id: 'user-1',
        name: 'Karen J.',
        avatarSrc: 'https://i.pravatar.cc/40?img=1'
      },
      createdAt: new Date('2026-02-09T10:00:00Z'),
      isResolved: false,
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.',
          avatarSrc: 'https://i.pravatar.cc/40?img=1'
        },
        content: 'We need to review the resource allocation for this project before the next sprint.',
        createdAt: new Date('2026-02-09T10:00:00Z'),
        isInitialMessage: true
      }, {
        id: 'msg-2',
        author: {
          id: 'user-2',
          name: 'John D.',
          avatarSrc: 'https://i.pravatar.cc/40?img=2'
        },
        content: 'Thanks for the feedback!',
        createdAt: new Date('2026-02-09T12:00:00Z')
      }]
    }
  }
}`,...p.parameters?.docs?.source},description:{story:`Standard card summarizing a thread: author, relative timestamp, message preview,
and reply count. Long previews truncate by default.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    comment: {
      id: 'comment-1',
      numericId: 63,
      author: {
        id: 'user-1',
        name: 'Karen J.',
        avatarSrc: 'https://i.pravatar.cc/40?img=1'
      },
      createdAt: new Date('2026-02-09T10:00:00Z'),
      isResolved: false,
      isActionRequired: true,
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.',
          avatarSrc: 'https://i.pravatar.cc/40?img=1'
        },
        content: 'We need to review the resource allocation for this project before the next sprint.',
        createdAt: new Date('2026-02-09T10:00:00Z'),
        isInitialMessage: true
      }]
    }
  }
}`,...m.parameters?.docs?.source},description:{story:"Flagged card. Set `isActionRequired` on the comment to surface the action-required\ntreatment so it stands out in a list.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    disabled: true,
    comment: {
      id: 'comment-1',
      numericId: 63,
      author: {
        id: 'user-1',
        name: 'Karen J.',
        avatarSrc: 'https://i.pravatar.cc/40?img=1'
      },
      createdAt: new Date('2026-02-09T10:00:00Z'),
      isResolved: false,
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.',
          avatarSrc: 'https://i.pravatar.cc/40?img=1'
        },
        content: 'We need to review the resource allocation for this project before the next sprint.',
        createdAt: new Date('2026-02-09T10:00:00Z'),
        isInitialMessage: true
      }]
    }
  }
}`,...h.parameters?.docs?.source},description:{story:`Non-interactive card. Use while an operation is in flight or when the thread is
read-only.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    overflow: 'displayed',
    comment: {
      id: 'comment-1',
      numericId: 63,
      author: {
        id: 'user-1',
        name: 'Karen J.',
        avatarSrc: 'https://i.pravatar.cc/40?img=1'
      },
      createdAt: new Date('2026-02-09T10:00:00Z'),
      isResolved: false,
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.',
          avatarSrc: 'https://i.pravatar.cc/40?img=1'
        },
        content: 'We need to review the resource allocation for this project. Adjusting the timeline will ensure we have enough resources for the development phase and keep quality high.',
        createdAt: new Date('2026-02-09T10:00:00Z'),
        isInitialMessage: true
      }]
    }
  }
}`,...g.parameters?.docs?.source},description:{story:'Show the full message body instead of a truncated preview with `overflow="displayed"`.',...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    comment: {
      id: 'comment-1',
      numericId: 63,
      author: {
        id: 'user-1',
        name: 'Karen J.',
        avatarSrc: 'https://i.pravatar.cc/40?img=1'
      },
      createdAt: new Date('2026-02-09T10:00:00Z'),
      isResolved: false,
      referenceTag: 'Resource allocation',
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.',
          avatarSrc: 'https://i.pravatar.cc/40?img=1'
        },
        content: 'We need to review the resource allocation for this project before the next sprint.',
        createdAt: new Date('2026-02-09T10:00:00Z'),
        isInitialMessage: true
      }]
    }
  }
}`,..._.parameters?.docs?.source},description:{story:`A reference chip in the header links the thread back to the entity it annotates.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => <DsCommentCard {...args} comment={{
    id: 'comment-1',
    numericId: 63,
    author: {
      id: 'user-1',
      name: 'Karen J.',
      avatarSrc: 'https://i.pravatar.cc/40?img=1'
    },
    createdAt: new Date('2026-02-09T10:00:00Z'),
    isResolved: false,
    messages: [{
      id: 'msg-1',
      author: {
        id: 'user-1',
        name: 'Karen J.',
        avatarSrc: 'https://i.pravatar.cc/40?img=1'
      },
      content: 'We need to review the resource allocation for this project.',
      createdAt: new Date('2026-02-09T10:00:00Z'),
      isInitialMessage: true
    }]
  }} formatTimestamp={date => date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  })} />
}`,...v.parameters?.docs?.source},description:{story:"Override the default relative time via `formatTimestamp` — here an absolute date.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--lg)" width="484px">
            <DsStack direction="column" gap="var(--xs)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Default
                </DsTypography>
                <DsCommentCard comment={createMockComment()} />
            </DsStack>
            <DsStack direction="column" gap="var(--xs)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Action required
                </DsTypography>
                <DsCommentCard comment={createMockComment({
        isActionRequired: true
      })} />
            </DsStack>
            <DsStack direction="column" gap="var(--xs)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Disabled
                </DsTypography>
                <DsCommentCard comment={createMockComment()} disabled />
            </DsStack>
            <DsStack direction="column" gap="var(--xs)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Full message
                </DsTypography>
                <DsCommentCard comment={createMockComment()} overflow="displayed" />
            </DsStack>
        </DsStack>
}`,...y.parameters?.docs?.source},description:{story:`The main states side by side for visual comparison.`,...y.parameters?.docs?.description}}},b=[`Default`,`ActionRequired`,`Disabled`,`FullMessage`,`WithReferenceTag`,`CustomFormatter`,`AllStates`]}))();export{m as ActionRequired,y as AllStates,v as CustomFormatter,p as Default,h as Disabled,g as FullMessage,_ as WithReferenceTag,b as __namedExportsOrder,f as default};