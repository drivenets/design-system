import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./iframe-sRVif9um.js";import{n as i,t as a}from"./ds-typography-DdvxrxrZ.js";import{n as o,t as s}from"./ds-stack-DEcVNtAa.js";import{n as c,t as l}from"./ds-comment-bubble-UiMyd993.js";var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w;t((()=>{u=e(n(),1),l(),o(),a(),d=r(),{fn:f}=__STORYBOOK_MODULE_TEST__,p={id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},m=(e={})=>({id:`comment-1`,numericId:63,author:p,createdAt:new Date(`2026-02-09T09:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:p,content:`We need to review the resource allocation for this project.`,createdAt:new Date(`2026-02-09T09:00:00Z`),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`That makes sense. I can help coordinate with the team to identify blockers.`,createdAt:new Date(`2026-02-09T11:00:00Z`)}],...e}),h={title:`Components/Comments/CommentBubble`,component:c,parameters:{layout:`centered`},argTypes:{hideActionRequired:{control:`boolean`},actionRequired:{control:`boolean`},value:{control:`text`},comment:{table:{disable:!0}},currentUser:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{referenceTag:`Resource allocation`,onSend:f(),onClose:f(),onValueChange:f(),onActionRequiredChange:f()}},g={args:{value:``}},_={args:{value:`This is a new comment...`}},v={args:{value:`This needs attention!`,actionRequired:!0}},y={args:{value:`This is a new comment...`,hideActionRequired:!0}},b={args:{currentUser:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T09:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project.`,createdAt:new Date(`2026-02-09T09:00:00Z`),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`That makes sense. I can help coordinate with the team to identify blockers.`,createdAt:new Date(`2026-02-09T11:00:00Z`)}]}}},x={args:{actionRequired:!0,currentUser:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T09:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project.`,createdAt:new Date(`2026-02-09T09:00:00Z`),isInitialMessage:!0}]}}},S={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,d.jsxs)(s,{gap:`var(--xl)`,alignItems:`flex-start`,children:[(0,d.jsxs)(s,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(i,{variant:`body-sm-md`,color:`secondary`,children:`Initial`}),(0,d.jsx)(c,{value:``})]}),(0,d.jsxs)(s,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(i,{variant:`body-sm-md`,color:`secondary`,children:`Typing`}),(0,d.jsx)(c,{value:`This is a comment...`})]}),(0,d.jsxs)(s,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(i,{variant:`body-sm-md`,color:`secondary`,children:`Thread`}),(0,d.jsx)(c,{comment:m(),currentUser:p})]})]})},C={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:function(){let[e,t]=(0,u.useState)(``),[n,r]=(0,u.useState)(!1),[i,a]=(0,u.useState)(void 0);return(0,d.jsx)(c,{comment:i,currentUser:p,referenceTag:`Resource allocation`,value:e,onValueChange:t,actionRequired:n,onActionRequiredChange:r,onSend:(e,n)=>{a(t=>{let i={id:`msg-${String(Date.now())}`,author:p,content:e,createdAt:new Date};return t?{...t,messages:[...t.messages,i]}:(r(n),{id:`comment-1`,numericId:63,author:p,createdAt:new Date,isResolved:!1,messages:[{...i,isInitialMessage:!0}]})}),t(``)},onEditMessage:(e,t)=>{a(n=>n&&{...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)})},onDeleteMessage:e=>{a(t=>t&&{...t,messages:t.messages.filter(t=>t.id!==e)})},onMessageMarkUnread:f(),onMessageResolved:f(),onClose:()=>{a(void 0),t(``),r(!1)},onResolve:f(),onToggleActionRequired:f(),onForward:f(),onMarkUnread:f(),onCopyLink:f(),onDelete:f()})}},w=[`Initial`,`Typing`,`TypingWithActionRequired`,`HiddenActionRequired`,`Thread`,`ThreadWithActionRequired`,`AllStates`,`Interactive`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  }
}`,...g.parameters?.docs?.source},description:{story:`Empty bubble for composing a new comment. The send button stays disabled until
the viewer types.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a new comment...'
  }
}`,..._.parameters?.docs?.source},description:{story:`As the viewer types, the bubble expands and reveals the action-required checkbox
and an enabled send button.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This needs attention!',
    actionRequired: true
  }
}`,...v.parameters?.docs?.source},description:{story:`The composer with the action-required flag checked.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a new comment...',
    hideActionRequired: true
  }
}`,...y.parameters?.docs?.source},description:{story:"Hide the action-required affordance entirely with `hideActionRequired` when the\nflow does not use it.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    currentUser: {
      id: 'user-1',
      name: 'Karen J.',
      avatarSrc: 'https://i.pravatar.cc/40?img=1'
    },
    comment: {
      id: 'comment-1',
      numericId: 63,
      author: {
        id: 'user-1',
        name: 'Karen J.',
        avatarSrc: 'https://i.pravatar.cc/40?img=1'
      },
      createdAt: new Date('2026-02-09T09:00:00Z'),
      isResolved: false,
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.',
          avatarSrc: 'https://i.pravatar.cc/40?img=1'
        },
        content: 'We need to review the resource allocation for this project.',
        createdAt: new Date('2026-02-09T09:00:00Z'),
        isInitialMessage: true
      }, {
        id: 'msg-2',
        author: {
          id: 'user-2',
          name: 'John D.',
          avatarSrc: 'https://i.pravatar.cc/40?img=2'
        },
        content: 'That makes sense. I can help coordinate with the team to identify blockers.',
        createdAt: new Date('2026-02-09T11:00:00Z')
      }]
    }
  }
}`,...b.parameters?.docs?.source},description:{story:"Existing thread view. Pass a `comment` and the `currentUser` to render messages\nwith a reply composer.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    actionRequired: true,
    currentUser: {
      id: 'user-1',
      name: 'Karen J.',
      avatarSrc: 'https://i.pravatar.cc/40?img=1'
    },
    comment: {
      id: 'comment-1',
      numericId: 63,
      author: {
        id: 'user-1',
        name: 'Karen J.',
        avatarSrc: 'https://i.pravatar.cc/40?img=1'
      },
      createdAt: new Date('2026-02-09T09:00:00Z'),
      isResolved: false,
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.',
          avatarSrc: 'https://i.pravatar.cc/40?img=1'
        },
        content: 'We need to review the resource allocation for this project.',
        createdAt: new Date('2026-02-09T09:00:00Z'),
        isInitialMessage: true
      }]
    }
  }
}`,...x.parameters?.docs?.source},description:{story:`A thread flagged as requiring action shows the action-required treatment in the
header.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack gap="var(--xl)" alignItems="flex-start">
            <DsStack direction="column" gap="var(--sm)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Initial
                </DsTypography>
                <DsCommentBubble value="" />
            </DsStack>
            <DsStack direction="column" gap="var(--sm)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Typing
                </DsTypography>
                <DsCommentBubble value="This is a comment..." />
            </DsStack>
            <DsStack direction="column" gap="var(--sm)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Thread
                </DsTypography>
                <DsCommentBubble comment={createMockComment()} currentUser={currentUser} />
            </DsStack>
        </DsStack>
}`,...S.parameters?.docs?.source},description:{story:`The main bubble states side by side for visual comparison.`,...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: function InteractiveStory() {
    const [value, setValue] = useState('');
    const [actionRequired, setActionRequired] = useState(false);
    const [comment, setComment] = useState<CommentData | undefined>(undefined);
    const handleSend = (content: string, isActionRequired: boolean) => {
      setComment(prev => {
        const message = {
          id: \`msg-\${String(Date.now())}\`,
          author: currentUser,
          content,
          createdAt: new Date()
        };
        if (!prev) {
          setActionRequired(isActionRequired);
          return {
            id: 'comment-1',
            numericId: 63,
            author: currentUser,
            createdAt: new Date(),
            isResolved: false,
            messages: [{
              ...message,
              isInitialMessage: true
            }]
          };
        }
        return {
          ...prev,
          messages: [...prev.messages, message]
        };
      });
      setValue('');
    };
    const handleEditMessage = (messageId: string, newContent: string) => {
      setComment(prev => prev ? {
        ...prev,
        messages: prev.messages.map(msg => msg.id === messageId ? {
          ...msg,
          content: newContent
        } : msg)
      } : prev);
    };
    const handleDeleteMessage = (messageId: string) => {
      setComment(prev => prev ? {
        ...prev,
        messages: prev.messages.filter(msg => msg.id !== messageId)
      } : prev);
    };
    const handleClose = () => {
      setComment(undefined);
      setValue('');
      setActionRequired(false);
    };
    return <DsCommentBubble comment={comment} currentUser={currentUser} referenceTag="Resource allocation" value={value} onValueChange={setValue} actionRequired={actionRequired} onActionRequiredChange={setActionRequired} onSend={handleSend} onEditMessage={handleEditMessage} onDeleteMessage={handleDeleteMessage} onMessageMarkUnread={fn()} onMessageResolved={fn()} onClose={handleClose} onResolve={fn()} onToggleActionRequired={fn()} onForward={fn()} onMarkUnread={fn()} onCopyLink={fn()} onDelete={fn()} />;
  }
}`,...C.parameters?.docs?.source},description:{story:`Fully interactive flow: type to compose, send to create a thread, then add replies
and edit or delete messages.`,...C.parameters?.docs?.description}}}}))();export{S as AllStates,y as HiddenActionRequired,g as Initial,C as Interactive,b as Thread,x as ThreadWithActionRequired,_ as Typing,v as TypingWithActionRequired,w as __namedExportsOrder,h as default};