import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-DZ8rqHcw.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./ds-comment-bubble-iL9AaPYi.js";var o,s,c,l,u,d,f=t((()=>{o=`_grid_pae51_1`,s=`_column_pae51_7`,c=`_heading_pae51_13`,l=`_interactiveContainer_pae51_20`,u=`_instructions_pae51_27`,d={grid:o,column:s,heading:c,interactiveContainer:l,instructions:u}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{p=e(n(),1),a(),f(),m=r(),{fn:h}=__STORYBOOK_MODULE_TEST__,g={id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},_=(e={})=>({id:`comment-1`,numericId:63,author:g,createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:`msg-1`,author:g,content:`We need to review the resource allocation for this project.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:g,content:`I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards.`,createdAt:new Date(Date.now()-1200*60*1e3)},{id:`msg-3`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`That makes sense. I can help coordinate with the team to identify any potential blockers. We should also check with stakeholders about priority.`,createdAt:new Date(Date.now()-960*60*1e3)},{id:`msg-4`,author:g,content:`Great idea. Let me schedule a meeting with the stakeholders for next week. We can discuss the timeline and resource requirements in detail.`,createdAt:new Date(Date.now()-720*60*1e3)},{id:`msg-5`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`I can prepare a summary of our current resource usage and projected needs for the meeting. This will help us make informed decisions.`,createdAt:new Date(Date.now()-480*60*1e3)}],...e}),v={title:`Design System/Comments/CommentBubble`,component:i,parameters:{layout:`centered`,docs:{description:{component:`
Floating bubble component for creating new comments and viewing/replying to existing threads.

**Behavior-driven states:**
- **Initial**: Empty bubble (240px) with placeholder "Add a comment" and disabled send button
- **Typing**: Expands to 320px when user focuses or types, shows footer with action required checkbox
- **Thread**: Full thread view (420px) with messages, header, and reply input

**Features:**
- Auto-resizing textarea (min 40px, max 480px)
- Action required checkbox with orange styling
- Thread view with scrollable messages (max 540px)
- Edit/delete message actions on hover
- More actions dropdown menu
- Keyboard support (Enter to send, Shift+Enter for new line)
- Automatic state transitions based on user interaction
        `}}},argTypes:{hideActionRequired:{control:`boolean`,description:`Whether to hide action required controls`},actionRequired:{control:`boolean`,description:`Whether action required is checked`},value:{control:`text`,description:`Current input value`},comment:{table:{disable:!0}},currentUser:{table:{disable:!0}}},args:{referenceTag:`Resource allocation`,onSend:h(),onClose:h(),onResolve:h(),onToggleActionRequired:h(),onForward:h(),onMarkUnread:h(),onCopyLink:h(),onDelete:h(),onActionRequiredChange:h(),onValueChange:h(),onEditMessage:h(),onDeleteMessage:h(),onMessageMarkUnread:h(),onMessageResolved:h()}},y={args:{value:``}},b={args:{value:`This is a new comment...`}},x={args:{value:`This needs attention!`,actionRequired:!0}},S={args:{value:`This is a new comment...`,hideActionRequired:!0}},C={args:{comment:_(),currentUser:g}},w={args:{comment:_(),actionRequired:!0,currentUser:g}},T={args:{comment:_(),currentUser:g,hideActionRequired:!0,actionRequired:!0}},E={args:{value:`Test message to send`}},D={args:{value:`Enter key message`}},O={args:{value:``}},k={args:{comment:_(),currentUser:g,value:``}},A={args:{comment:_(),currentUser:g,value:`A reply`}},j={args:{comment:_(),currentUser:g}},M={args:{comment:_(),currentUser:g}},N={args:{comment:_(),currentUser:g,value:``}},P={args:{referenceTag:`My tag`}},F={args:{comment:_(),currentUser:g,referenceTag:`Resource allocation`}},I={render:function(){let[e,t]=(0,p.useState)(``),[n,r]=(0,p.useState)(!1),[a,o]=(0,p.useState)(void 0);return(0,m.jsxs)(`div`,{className:d.interactiveContainer,children:[(0,m.jsxs)(`p`,{className:d.instructions,children:[(0,m.jsx)(`strong`,{children:`Full Flow Test:`}),(0,m.jsx)(`br`,{}),`1. Start by typing in the bubble - it will expand and show the footer`,(0,m.jsx)(`br`,{}),`2. Send your first comment to create a thread`,(0,m.jsx)(`br`,{}),`3. Add more replies to see the thread grow`,(0,m.jsx)(`br`,{}),`4. Close to reset and start over`]}),(0,m.jsx)(i,{comment:a,currentUser:g,referenceTag:`Resource allocation`,value:e,onValueChange:t,actionRequired:n,onActionRequiredChange:r,onSend:(e,n)=>{if(!a)o({id:`comment-1`,numericId:63,author:g,createdAt:new Date,isResolved:!1,messages:[{id:`msg-1`,author:g,content:e,createdAt:new Date,isInitialMessage:!0}]}),r(n);else{let t={id:`msg-${String(Date.now())}`,author:g,content:e,createdAt:new Date};o(e=>e&&{...e,messages:[...e.messages,t]})}t(``)},onEditMessage:(e,t)=>{a&&o(n=>n&&{...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)})},onDeleteMessage:e=>{a&&o(t=>t&&{...t,messages:t.messages.filter(t=>t.id!==e)})},onMessageMarkUnread:e=>console.log(`Mark unread message:`,e),onMessageResolved:e=>console.log(`Resolved message:`,e),onClose:()=>{o(void 0),t(``),r(!1)},onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})]})}},L={render:function(){let[e,t]=(0,p.useState)(``),[n,r]=(0,p.useState)(!1),[a,o]=(0,p.useState)(_());return(0,m.jsx)(i,{comment:a,currentUser:g,referenceTag:`Resource allocation`,value:e,onValueChange:t,actionRequired:n,onActionRequiredChange:r,onSend:e=>{let n={id:`msg-${String(Date.now())}`,author:g,content:e,createdAt:new Date};o(e=>({...e,messages:[...e.messages,n]})),t(``)},onEditMessage:(e,t)=>{o(n=>({...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)}))},onDeleteMessage:e=>{o(t=>({...t,messages:t.messages.filter(t=>t.id!==e)}))},onMessageMarkUnread:e=>console.log(`Mark unread message:`,e),onMessageResolved:e=>console.log(`Resolved message:`,e),onClose:()=>console.log(`Close clicked`),onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})}},R={render:()=>(0,m.jsxs)(`div`,{className:d.grid,children:[(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Initial`}),(0,m.jsx)(i,{})]}),(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Typing`}),(0,m.jsx)(i,{value:`This is a comment...`})]}),(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Typing (Action Required)`}),(0,m.jsx)(i,{value:`This needs attention!`,actionRequired:!0})]}),(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Thread`}),(0,m.jsx)(i,{comment:_(),currentUser:g})]}),(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Thread (Action Required)`}),(0,m.jsx)(i,{comment:_(),currentUser:g,actionRequired:!0})]})]})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a new comment...'
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This needs attention!',
    actionRequired: true
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a new comment...',
    hideActionRequired: true
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    actionRequired: true,
    currentUser
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    hideActionRequired: true,
    actionRequired: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Test message to send'
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Enter key message'
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    value: ''
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    value: 'A reply'
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    value: ''
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    referenceTag: 'My tag'
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    referenceTag: 'Resource allocation'
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function FullFlowStory() {
    const [value, setValue] = useState('');
    const [actionRequired, setActionRequired] = useState(false);
    const [comment, setComment] = useState<CommentData | undefined>(undefined);
    const handleSend = (content: string, isActionRequired: boolean) => {
      if (!comment) {
        const newComment: CommentData = {
          id: 'comment-1',
          numericId: 63,
          author: currentUser,
          createdAt: new Date(),
          isResolved: false,
          messages: [{
            id: 'msg-1',
            author: currentUser,
            content,
            createdAt: new Date(),
            isInitialMessage: true
          }]
        };
        setComment(newComment);
        setActionRequired(isActionRequired);
      } else {
        const newMessage = {
          id: \`msg-\${String(Date.now())}\`,
          author: currentUser,
          content,
          createdAt: new Date()
        };
        setComment(prev => {
          if (!prev) {
            return prev;
          }
          return {
            ...prev,
            messages: [...prev.messages, newMessage]
          };
        });
      }
      setValue('');
    };
    const handleEditMessage = (messageId: string, newContent: string) => {
      if (!comment) {
        return;
      }
      setComment(prev => {
        if (!prev) {
          return prev;
        }
        return {
          ...prev,
          messages: prev.messages.map(msg => msg.id === messageId ? {
            ...msg,
            content: newContent
          } : msg)
        };
      });
    };
    const handleDeleteMessage = (messageId: string) => {
      if (!comment) {
        return;
      }
      setComment(prev => {
        if (!prev) {
          return prev;
        }
        return {
          ...prev,
          messages: prev.messages.filter(msg => msg.id !== messageId)
        };
      });
    };
    const handleClose = () => {
      setComment(undefined);
      setValue('');
      setActionRequired(false);
    };
    return <div className={styles.interactiveContainer}>
                <p className={styles.instructions}>
                    <strong>Full Flow Test:</strong>
                    <br />
                    1. Start by typing in the bubble - it will expand and show the footer
                    <br />
                    2. Send your first comment to create a thread
                    <br />
                    3. Add more replies to see the thread grow
                    <br />
                    4. Close to reset and start over
                </p>
                <DsCommentBubble comment={comment} currentUser={currentUser} referenceTag="Resource allocation" value={value} onValueChange={setValue} actionRequired={actionRequired} onActionRequiredChange={setActionRequired} onSend={handleSend} onEditMessage={handleEditMessage} onDeleteMessage={handleDeleteMessage} onMessageMarkUnread={id => console.log('Mark unread message:', id)} onMessageResolved={id => console.log('Resolved message:', id)} onClose={handleClose} onResolve={() => console.log('Resolve clicked')} onToggleActionRequired={() => console.log('Toggle action required')} onForward={() => console.log('Forward')} onMarkUnread={() => console.log('Mark unread')} onCopyLink={() => console.log('Copy link')} onDelete={() => console.log('Delete')} />
            </div>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function InteractiveThreadStory() {
    const [value, setValue] = useState('');
    const [actionRequired, setActionRequired] = useState(false);
    const [comment, setComment] = useState(createMockComment());
    const handleSend = (content: string) => {
      const newMessage = {
        id: \`msg-\${String(Date.now())}\`,
        author: currentUser,
        content,
        createdAt: new Date()
      };
      setComment(prev => ({
        ...prev,
        messages: [...prev.messages, newMessage]
      }));
      setValue('');
    };
    const handleEditMessage = (messageId: string, newContent: string) => {
      setComment(prev => ({
        ...prev,
        messages: prev.messages.map(msg => msg.id === messageId ? {
          ...msg,
          content: newContent
        } : msg)
      }));
    };
    const handleDeleteMessage = (messageId: string) => {
      setComment(prev => ({
        ...prev,
        messages: prev.messages.filter(msg => msg.id !== messageId)
      }));
    };
    return <DsCommentBubble comment={comment} currentUser={currentUser} referenceTag="Resource allocation" value={value} onValueChange={setValue} actionRequired={actionRequired} onActionRequiredChange={setActionRequired} onSend={handleSend} onEditMessage={handleEditMessage} onDeleteMessage={handleDeleteMessage} onMessageMarkUnread={id => console.log('Mark unread message:', id)} onMessageResolved={id => console.log('Resolved message:', id)} onClose={() => console.log('Close clicked')} onResolve={() => console.log('Resolve clicked')} onToggleActionRequired={() => console.log('Toggle action required')} onForward={() => console.log('Forward')} onMarkUnread={() => console.log('Mark unread')} onCopyLink={() => console.log('Copy link')} onDelete={() => console.log('Delete')} />;
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.grid}>
            <div className={styles.column}>
                <h4 className={styles.heading}>Initial</h4>
                <DsCommentBubble />
            </div>

            <div className={styles.column}>
                <h4 className={styles.heading}>Typing</h4>
                <DsCommentBubble value="This is a comment..." />
            </div>

            <div className={styles.column}>
                <h4 className={styles.heading}>Typing (Action Required)</h4>
                <DsCommentBubble value="This needs attention!" actionRequired />
            </div>

            <div className={styles.column}>
                <h4 className={styles.heading}>Thread</h4>
                <DsCommentBubble comment={createMockComment()} currentUser={currentUser} />
            </div>

            <div className={styles.column}>
                <h4 className={styles.heading}>Thread (Action Required)</h4>
                <DsCommentBubble comment={createMockComment()} currentUser={currentUser} actionRequired />
            </div>
        </div>
}`,...R.parameters?.docs?.source}}},z=[`Initial`,`Typing`,`TypingWithActionRequired`,`TypingWithoutActionRequired`,`Thread`,`ThreadWithActionRequired`,`ThreadWithoutActionRequired`,`SendButtonClick`,`SendWithEnterKey`,`SendDisabledWhenEmpty`,`ThreadSendDisabledWhenEmpty`,`ThreadSendEnabled`,`ThreadCloseButton`,`ThreadResolveButton`,`TextareaValueChange`,`InitialWithReferenceTag`,`ThreadWithReferenceTag`,`FullInteractiveFlow`,`InteractiveThread`,`AllTypes`]}))();export{R as AllTypes,I as FullInteractiveFlow,y as Initial,P as InitialWithReferenceTag,L as InteractiveThread,E as SendButtonClick,O as SendDisabledWhenEmpty,D as SendWithEnterKey,N as TextareaValueChange,C as Thread,j as ThreadCloseButton,M as ThreadResolveButton,k as ThreadSendDisabledWhenEmpty,A as ThreadSendEnabled,w as ThreadWithActionRequired,F as ThreadWithReferenceTag,T as ThreadWithoutActionRequired,b as Typing,x as TypingWithActionRequired,S as TypingWithoutActionRequired,z as __namedExportsOrder,v as default};