import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-B-V3ECTD.js";import{n as r,t as i}from"./ds-typography-BdYyq7Aq.js";import{n as a,t as o}from"./ds-stack-BEmbczvy.js";import{n as s,t as c}from"./ds-comment-bubble-CCDs7AYf.js";var l,u,d,f,p,m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{l=t(),c(),a(),i(),u=n(),{fn:d}=__STORYBOOK_MODULE_TEST__,f={id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},p=(e={})=>({id:`comment-1`,numericId:63,author:f,createdAt:new Date(`2026-02-09T09:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:f,content:`We need to review the resource allocation for this project.`,createdAt:new Date(`2026-02-09T09:00:00Z`),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`That makes sense. I can help coordinate with the team to identify blockers.`,createdAt:new Date(`2026-02-09T11:00:00Z`)}],...e}),m={title:`Components/Comments/CommentBubble`,component:s,parameters:{layout:`centered`},argTypes:{hideActionRequired:{control:`boolean`},actionRequired:{control:`boolean`},value:{control:`text`},comment:{table:{disable:!0}},currentUser:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{referenceTag:`Resource allocation`,onSend:d(),onClose:d(),onValueChange:d(),onActionRequiredChange:d()}},h={args:{value:``}},g={args:{value:`This is a new comment...`}},_={args:{value:`This needs attention!`,actionRequired:!0}},v={args:{value:`This is a new comment...`,hideActionRequired:!0}},y={args:{currentUser:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T09:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project.`,createdAt:new Date(`2026-02-09T09:00:00Z`),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`That makes sense. I can help coordinate with the team to identify blockers.`,createdAt:new Date(`2026-02-09T11:00:00Z`)}]}}},b={args:{actionRequired:!0,currentUser:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},comment:{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(`2026-02-09T09:00:00Z`),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project.`,createdAt:new Date(`2026-02-09T09:00:00Z`),isInitialMessage:!0}]}}},x={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,u.jsxs)(o,{gap:`var(--xl)`,alignItems:`flex-start`,children:[(0,u.jsxs)(o,{direction:`column`,gap:`var(--sm)`,children:[(0,u.jsx)(r,{variant:`body-sm-md`,color:`secondary`,children:`Initial`}),(0,u.jsx)(s,{value:``})]}),(0,u.jsxs)(o,{direction:`column`,gap:`var(--sm)`,children:[(0,u.jsx)(r,{variant:`body-sm-md`,color:`secondary`,children:`Typing`}),(0,u.jsx)(s,{value:`This is a comment...`})]}),(0,u.jsxs)(o,{direction:`column`,gap:`var(--sm)`,children:[(0,u.jsx)(r,{variant:`body-sm-md`,color:`secondary`,children:`Thread`}),(0,u.jsx)(s,{comment:p(),currentUser:f})]})]})},S={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:function(){let[e,t]=(0,l.useState)(``),[n,r]=(0,l.useState)(!1),[i,a]=(0,l.useState)(void 0);return(0,u.jsx)(s,{comment:i,currentUser:f,referenceTag:`Resource allocation`,value:e,onValueChange:t,actionRequired:n,onActionRequiredChange:r,onSend:(e,n)=>{a(t=>{let i={id:`msg-${String(Date.now())}`,author:f,content:e,createdAt:new Date};return t?{...t,messages:[...t.messages,i]}:(r(n),{id:`comment-1`,numericId:63,author:f,createdAt:new Date,isResolved:!1,messages:[{...i,isInitialMessage:!0}]})}),t(``)},onEditMessage:(e,t)=>{a(n=>n&&{...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)})},onDeleteMessage:e=>{a(t=>t&&{...t,messages:t.messages.filter(t=>t.id!==e)})},onMessageMarkUnread:d(),onMessageResolved:d(),onClose:()=>{a(void 0),t(``),r(!1)},onResolve:d(),onToggleActionRequired:d(),onForward:d(),onMarkUnread:d(),onCopyLink:d(),onDelete:d()})}},C=[`Initial`,`Typing`,`TypingWithActionRequired`,`HiddenActionRequired`,`Thread`,`ThreadWithActionRequired`,`AllStates`,`Interactive`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  }
}`,...h.parameters?.docs?.source},description:{story:`Empty bubble for composing a new comment. The send button stays disabled until
the viewer types.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a new comment...'
  }
}`,...g.parameters?.docs?.source},description:{story:`As the viewer types, the bubble expands and reveals the action-required checkbox
and an enabled send button.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This needs attention!',
    actionRequired: true
  }
}`,..._.parameters?.docs?.source},description:{story:`The composer with the action-required flag checked.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a new comment...',
    hideActionRequired: true
  }
}`,...v.parameters?.docs?.source},description:{story:"Hide the action-required affordance entirely with `hideActionRequired` when the\nflow does not use it.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Existing thread view. Pass a `comment` and the `currentUser` to render messages\nwith a reply composer.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`A thread flagged as requiring action shows the action-required treatment in the
header.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`The main bubble states side by side for visual comparison.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:`Fully interactive flow: type to compose, send to create a thread, then add replies
and edit or delete messages.`,...S.parameters?.docs?.description}}}})))()}w();export{x as AllStates,v as HiddenActionRequired,h as Initial,S as Interactive,y as Thread,b as ThreadWithActionRequired,g as Typing,_ as TypingWithActionRequired,C as __namedExportsOrder,m as default};