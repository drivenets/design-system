import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-AVKPrxrT.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{n as i,t as a}from"./ds-comment-bubble-5kzY-BeE.js";var o,s,c,l,u,d,f=t((()=>{o=`_grid_pae51_1`,s=`_column_pae51_7`,c=`_heading_pae51_13`,l=`_interactiveContainer_pae51_20`,u=`_instructions_pae51_27`,d={grid:o,column:s,heading:c,interactiveContainer:l,instructions:u}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B;t((()=>{p=e(n(),1),a(),f(),m=r(),{expect:h,fn:g,userEvent:_,within:v}=__STORYBOOK_MODULE_TEST__,y={id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},b=(e={})=>({id:`comment-1`,numericId:63,author:y,createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:`msg-1`,author:y,content:`We need to review the resource allocation for this project.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:y,content:`I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards.`,createdAt:new Date(Date.now()-1200*60*1e3)},{id:`msg-3`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`That makes sense. I can help coordinate with the team to identify any potential blockers. We should also check with stakeholders about priority.`,createdAt:new Date(Date.now()-960*60*1e3)},{id:`msg-4`,author:y,content:`Great idea. Let me schedule a meeting with the stakeholders for next week. We can discuss the timeline and resource requirements in detail.`,createdAt:new Date(Date.now()-720*60*1e3)},{id:`msg-5`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`I can prepare a summary of our current resource usage and projected needs for the meeting. This will help us make informed decisions.`,createdAt:new Date(Date.now()-480*60*1e3)}],...e}),x={title:`Design System/Comments/CommentBubble`,component:i,parameters:{layout:`centered`,docs:{description:{component:`
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
        `}}},argTypes:{actionRequired:{control:`boolean`,description:`Whether action required is checked`},value:{control:`text`,description:`Current input value`},comment:{table:{disable:!0}},currentUser:{table:{disable:!0}}},args:{referenceTag:`Resource allocation`,onSend:g(),onClose:g(),onResolve:g(),onToggleActionRequired:g(),onForward:g(),onMarkUnread:g(),onCopyLink:g(),onDelete:g(),onActionRequiredChange:g(),onValueChange:g(),onEditMessage:g(),onDeleteMessage:g(),onMessageMarkUnread:g(),onMessageResolved:g()}},S={args:{},play:async({canvasElement:e})=>{let t=v(e).getByRole(`textbox`,{name:/add a comment/i});await h(t).toBeInTheDocument(),await h(t).toHaveAttribute(`placeholder`,`Add a comment`)}},C={args:{value:`This is a new comment...`},play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`checkbox`,{name:/action required/i}),r=t.getByRole(`button`,{name:/send/i});await h(n).toBeInTheDocument(),await h(r).toBeEnabled()}},w={args:{value:`This needs attention!`,actionRequired:!0},play:async({canvasElement:e})=>{let t=v(e),n=t.getByRole(`checkbox`,{name:/action required/i}),r=t.getByRole(`button`,{name:/send/i});await h(n).toBeChecked(),await h(r).toBeEnabled()}},T={args:{comment:b(),currentUser:y},play:async({canvasElement:e})=>{await h(v(e).getByRole(`dialog`,{name:/comment thread #63/i})).toBeInTheDocument()}},E={args:{comment:b(),actionRequired:!0,currentUser:y},play:async({canvasElement:e})=>{await h(v(e).getByRole(`dialog`,{name:/comment thread #63/i})).toBeInTheDocument()}},D={args:{value:`Test message to send`},play:async({canvasElement:e,args:t})=>{let n=v(e).getByRole(`button`,{name:/send/i});await _.click(n),await h(t.onSend).toHaveBeenCalledWith(`Test message to send`,!1)}},O={args:{value:`Enter key message`},play:async({canvasElement:e,args:t})=>{let n=v(e).getByRole(`textbox`);await _.click(n),await _.keyboard(`{Enter}`),await h(t.onSend).toHaveBeenCalledWith(`Enter key message`,!1)}},k={args:{value:``},play:async({canvasElement:e})=>{await h(v(e).getByRole(`button`,{name:/send/i})).toBeDisabled()}},A={args:{comment:b(),currentUser:y,value:``},play:async({canvasElement:e})=>{await h(v(e).getByRole(`button`,{name:/send/i})).toBeDisabled()}},j={args:{comment:b(),currentUser:y,value:`A reply`},play:async({canvasElement:e,args:t})=>{let n=v(e).getByRole(`button`,{name:/send/i});await h(n).toBeEnabled(),await _.click(n),await h(t.onSend).toHaveBeenCalledWith(`A reply`,!1)}},M={args:{comment:b(),currentUser:y},play:async({canvasElement:e,args:t})=>{let n=v(e).getByRole(`button`,{name:/close/i});await _.click(n),await h(t.onClose).toHaveBeenCalledOnce()}},N={args:{comment:b(),currentUser:y},play:async({canvasElement:e,args:t})=>{let n=v(e).getByRole(`button`,{name:`Resolve`});await _.click(n),await h(t.onResolve).toHaveBeenCalledOnce()}},P={args:{comment:b(),currentUser:y,value:``},play:async({canvasElement:e,args:t})=>{let n=v(e).getByRole(`textbox`,{name:/reply/i});await _.type(n,`new text`),await h(t.onValueChange).toHaveBeenCalled()}},F={args:{referenceTag:`My tag`},play:async({canvasElement:e})=>{await h(v(e).getByRole(`dialog`,{name:/add new comment/i})).toBeInTheDocument()}},I={args:{comment:b(),currentUser:y,referenceTag:`Resource allocation`},play:async({canvasElement:e})=>{let t=v(e);await h(t.getByText(`Resource allocation`)).toBeInTheDocument(),await h(t.getByText(`#63`)).toBeInTheDocument()}},L={render:function(){let[e,t]=(0,p.useState)(``),[n,r]=(0,p.useState)(!1),[a,o]=(0,p.useState)(void 0);return(0,m.jsxs)(`div`,{className:d.interactiveContainer,children:[(0,m.jsxs)(`p`,{className:d.instructions,children:[(0,m.jsx)(`strong`,{children:`Full Flow Test:`}),(0,m.jsx)(`br`,{}),`1. Start by typing in the bubble - it will expand and show the footer`,(0,m.jsx)(`br`,{}),`2. Send your first comment to create a thread`,(0,m.jsx)(`br`,{}),`3. Add more replies to see the thread grow`,(0,m.jsx)(`br`,{}),`4. Close to reset and start over`]}),(0,m.jsx)(i,{comment:a,currentUser:y,referenceTag:`Resource allocation`,value:e,onValueChange:t,actionRequired:n,onActionRequiredChange:r,onSend:(e,n)=>{if(!a)o({id:`comment-1`,numericId:63,author:y,createdAt:new Date,isResolved:!1,messages:[{id:`msg-1`,author:y,content:e,createdAt:new Date,isInitialMessage:!0}]}),r(n);else{let t={id:`msg-${String(Date.now())}`,author:y,content:e,createdAt:new Date};o(e=>e&&{...e,messages:[...e.messages,t]})}t(``)},onEditMessage:(e,t)=>{a&&o(n=>n&&{...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)})},onDeleteMessage:e=>{a&&o(t=>t&&{...t,messages:t.messages.filter(t=>t.id!==e)})},onMessageMarkUnread:e=>console.log(`Mark unread message:`,e),onMessageResolved:e=>console.log(`Resolved message:`,e),onClose:()=>{o(void 0),t(``),r(!1)},onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})]})}},R={render:function(){let[e,t]=(0,p.useState)(``),[n,r]=(0,p.useState)(!1),[a,o]=(0,p.useState)(b());return(0,m.jsx)(i,{comment:a,currentUser:y,referenceTag:`Resource allocation`,value:e,onValueChange:t,actionRequired:n,onActionRequiredChange:r,onSend:e=>{let n={id:`msg-${String(Date.now())}`,author:y,content:e,createdAt:new Date};o(e=>({...e,messages:[...e.messages,n]})),t(``)},onEditMessage:(e,t)=>{o(n=>({...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)}))},onDeleteMessage:e=>{o(t=>({...t,messages:t.messages.filter(t=>t.id!==e)}))},onMessageMarkUnread:e=>console.log(`Mark unread message:`,e),onMessageResolved:e=>console.log(`Resolved message:`,e),onClose:()=>console.log(`Close clicked`),onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})}},z={render:()=>(0,m.jsxs)(`div`,{className:d.grid,children:[(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Initial`}),(0,m.jsx)(i,{})]}),(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Typing`}),(0,m.jsx)(i,{value:`This is a comment...`})]}),(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Typing (Action Required)`}),(0,m.jsx)(i,{value:`This needs attention!`,actionRequired:!0})]}),(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Thread`}),(0,m.jsx)(i,{comment:b(),currentUser:y})]}),(0,m.jsxs)(`div`,{className:d.column,children:[(0,m.jsx)(`h4`,{className:d.heading,children:`Thread (Action Required)`}),(0,m.jsx)(i,{comment:b(),currentUser:y,actionRequired:!0})]})]})},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: /add a comment/i
    });
    await expect(textarea).toBeInTheDocument();
    await expect(textarea).toHaveAttribute('placeholder', 'Add a comment');
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This is a new comment...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /action required/i
    });
    const sendButton = canvas.getByRole('button', {
      name: /send/i
    });
    await expect(checkbox).toBeInTheDocument();
    await expect(sendButton).toBeEnabled();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'This needs attention!',
    actionRequired: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const checkbox = canvas.getByRole('checkbox', {
      name: /action required/i
    });
    const sendButton = canvas.getByRole('button', {
      name: /send/i
    });
    await expect(checkbox).toBeChecked();
    await expect(sendButton).toBeEnabled();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog', {
      name: /comment thread #63/i
    });
    await expect(dialog).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    actionRequired: true,
    currentUser
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog', {
      name: /comment thread #63/i
    });
    await expect(dialog).toBeInTheDocument();
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Test message to send'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const sendButton = canvas.getByRole('button', {
      name: /send/i
    });
    await userEvent.click(sendButton);
    await expect(args.onSend).toHaveBeenCalledWith('Test message to send', false);
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'Enter key message'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox');
    await userEvent.click(textarea);
    await userEvent.keyboard('{Enter}');
    await expect(args.onSend).toHaveBeenCalledWith('Enter key message', false);
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    value: ''
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sendButton = canvas.getByRole('button', {
      name: /send/i
    });
    await expect(sendButton).toBeDisabled();
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    value: ''
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const sendButton = canvas.getByRole('button', {
      name: /send/i
    });
    await expect(sendButton).toBeDisabled();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    value: 'A reply'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const sendButton = canvas.getByRole('button', {
      name: /send/i
    });
    await expect(sendButton).toBeEnabled();
    await userEvent.click(sendButton);
    await expect(args.onSend).toHaveBeenCalledWith('A reply', false);
  }
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const closeButton = canvas.getByRole('button', {
      name: /close/i
    });
    await userEvent.click(closeButton);
    await expect(args.onClose).toHaveBeenCalledOnce();
  }
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const resolveButton = canvas.getByRole('button', {
      name: 'Resolve'
    });
    await userEvent.click(resolveButton);
    await expect(args.onResolve).toHaveBeenCalledOnce();
  }
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    value: ''
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const textarea = canvas.getByRole('textbox', {
      name: /reply/i
    });
    await userEvent.type(textarea, 'new text');
    await expect(args.onValueChange).toHaveBeenCalled();
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  args: {
    referenceTag: 'My tag'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const dialog = canvas.getByRole('dialog', {
      name: /add new comment/i
    });
    await expect(dialog).toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    currentUser,
    referenceTag: 'Resource allocation'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Resource allocation')).toBeInTheDocument();
    await expect(canvas.getByText('#63')).toBeInTheDocument();
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}},B=[`Initial`,`Typing`,`TypingWithActionRequired`,`Thread`,`ThreadWithActionRequired`,`SendButtonClick`,`SendWithEnterKey`,`SendDisabledWhenEmpty`,`ThreadSendDisabledWhenEmpty`,`ThreadSendEnabled`,`ThreadCloseButton`,`ThreadResolveButton`,`TextareaValueChange`,`InitialWithReferenceTag`,`ThreadWithReferenceTag`,`FullInteractiveFlow`,`InteractiveThread`,`AllTypes`]}))();export{z as AllTypes,L as FullInteractiveFlow,S as Initial,F as InitialWithReferenceTag,R as InteractiveThread,D as SendButtonClick,k as SendDisabledWhenEmpty,O as SendWithEnterKey,P as TextareaValueChange,T as Thread,M as ThreadCloseButton,N as ThreadResolveButton,A as ThreadSendDisabledWhenEmpty,j as ThreadSendEnabled,E as ThreadWithActionRequired,I as ThreadWithReferenceTag,C as Typing,w as TypingWithActionRequired,B as __namedExportsOrder,x as default};