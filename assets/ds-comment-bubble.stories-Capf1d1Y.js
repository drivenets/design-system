import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as w}from"./iframe-B1gKZKuc.js";import{D as g}from"./ds-comment-bubble-tBJmOZeX.js";import"./ds-thread-item-BzMxhaiT.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CI5Pb9HH.js";import"./ds-button-CtaFLJyF.js";import"./ds-button-legacy-Cer8cJ74.js";import"./ds-button-new-BBUcOz9i.js";import"./ds-icon-DIuKbzlJ.js";import"./ds-checkbox-Bren2DM0.js";import"./index-BhARklHb.js";import"./index-CrebszRC.js";import"./index-DOIMq0Xz.js";import"./index-CcgyKgzY.js";import"./index-D5ZZ1tXY.js";import"./ds-tag-BKLBOGsu.js";import"./ds-typography-BbSFr2sw.js";import"./index-HtJxfs_E.js";import"./ds-dropdown-menu-B3iEF_rC.js";import"./index-BBSc6elT.js";import"./Combination-FapkOjAp.js";import"./index-BQu11pnq.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-C2B67tLG.js";import"./ds-text-input-C8rTfu1S.js";import"./portal-CQe6VJ_y.js";import"./create-split-props-u5h9OPvL.js";import"./index-1kKNXetD.js";import"./use-locale-context-DyIBVjNs.js";import"./use-presence-C-RUHWbh.js";import"./index-BXFvYyHV.js";import"./index-Bs81qYQ6.js";import"./merge-refs-DX9dreSa.js";import"./ds-avatar-BD8RaHnl.js";import"./ds-tooltip-DSmxXcvB.js";import"./ds-textarea-d2P70KWx.js";import"./format-relative-time-B216dNqo.js";const I="_grid_pae51_1",E="_column_pae51_7",j="_heading_pae51_13",U="_interactiveContainer_pae51_20",N="_instructions_pae51_27",c={grid:I,column:E,heading:j,interactiveContainer:U,instructions:N},{expect:h,fn:o,within:b}=__STORYBOOK_MODULE_TEST__,a={id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},R=(r={})=>({id:"comment-1",numericId:63,author:a,createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:"msg-1",author:a,content:"We need to review the resource allocation for this project.",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:"msg-2",author:a,content:"I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards.",createdAt:new Date(Date.now()-1200*60*1e3)},{id:"msg-3",author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},content:"That makes sense. I can help coordinate with the team to identify any potential blockers. We should also check with stakeholders about priority.",createdAt:new Date(Date.now()-960*60*1e3)},{id:"msg-4",author:a,content:"Great idea. Let me schedule a meeting with the stakeholders for next week. We can discuss the timeline and resource requirements in detail.",createdAt:new Date(Date.now()-720*60*1e3)},{id:"msg-5",author:{id:"user-3",name:"Jane S.",avatarSrc:"https://i.pravatar.cc/40?img=3"},content:"I can prepare a summary of our current resource usage and projected needs for the meeting. This will help us make informed decisions.",createdAt:new Date(Date.now()-480*60*1e3)}],...r}),Ce={title:"Design System/Comments/CommentBubble",component:g,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},tags:["autodocs"],argTypes:{actionRequired:{control:"boolean",description:"Whether action required is checked"},value:{control:"text",description:"Current input value"},comment:{table:{disable:!0}},currentUser:{table:{disable:!0}}},args:{referenceTag:"Resource allocation",onSend:o(),onClose:o(),onResolve:o(),onToggleActionRequired:o(),onForward:o(),onMarkUnread:o(),onCopyLink:o(),onDelete:o(),onActionRequiredChange:o(),onValueChange:o(),onEditMessage:o(),onDeleteMessage:o(),onMessageMarkUnread:o(),onMessageResolved:o()}},C={args:{},play:async({canvasElement:r})=>{const n=b(r).getByRole("textbox",{name:/add a comment/i});await h(n).toBeInTheDocument(),await h(n).toHaveAttribute("placeholder","Add a comment")}},x={args:{value:"This is a new comment..."},play:async({canvasElement:r})=>{const l=b(r),n=l.getByRole("checkbox",{name:/action required/i}),p=l.getByRole("button",{name:/send/i});await h(n).toBeInTheDocument(),await h(p).toBeEnabled()}},M={args:{value:"This needs attention!",actionRequired:!0},play:async({canvasElement:r})=>{const l=b(r),n=l.getByRole("checkbox",{name:/action required/i}),p=l.getByRole("button",{name:/send/i});await h(n).toBeChecked(),await h(p).toBeEnabled()}},D={args:{comment:R(),currentUser:a},play:async({canvasElement:r})=>{const n=b(r).getByRole("dialog",{name:/comment thread #63/i});await h(n).toBeInTheDocument()}},T={args:{comment:R(),actionRequired:!0,currentUser:a},play:async({canvasElement:r})=>{const n=b(r).getByRole("dialog",{name:/comment thread #63/i});await h(n).toBeInTheDocument()}},k={render:function(){const[l,n]=w.useState(""),[p,y]=w.useState(!1),[v,m]=w.useState(void 0),A=(t,s)=>{if(!v)m({id:"comment-1",numericId:63,author:a,createdAt:new Date,isResolved:!1,messages:[{id:"msg-1",author:a,content:t,createdAt:new Date,isInitialMessage:!0}]}),y(s);else{const i={id:`msg-${String(Date.now())}`,author:a,content:t,createdAt:new Date};m(u=>u&&{...u,messages:[...u.messages,i]})}n("")},S=(t,s)=>{v&&m(i=>i&&{...i,messages:i.messages.map(u=>u.id===t?{...u,content:s}:u)})},B=t=>{v&&m(s=>s&&{...s,messages:s.messages.filter(i=>i.id!==t)})},d=()=>{m(void 0),n(""),y(!1)};return e.jsxs("div",{className:c.interactiveContainer,children:[e.jsxs("p",{className:c.instructions,children:[e.jsx("strong",{children:"Full Flow Test:"}),e.jsx("br",{}),"1. Start by typing in the bubble - it will expand and show the footer",e.jsx("br",{}),"2. Send your first comment to create a thread",e.jsx("br",{}),"3. Add more replies to see the thread grow",e.jsx("br",{}),"4. Close to reset and start over"]}),e.jsx(g,{comment:v,currentUser:a,referenceTag:"Resource allocation",value:l,onValueChange:n,actionRequired:p,onActionRequiredChange:y,onSend:A,onEditMessage:S,onDeleteMessage:B,onMessageMarkUnread:t=>console.log("Mark unread message:",t),onMessageResolved:t=>console.log("Resolved message:",t),onClose:d,onResolve:()=>console.log("Resolve clicked"),onToggleActionRequired:()=>console.log("Toggle action required"),onForward:()=>console.log("Forward"),onMarkUnread:()=>console.log("Mark unread"),onCopyLink:()=>console.log("Copy link"),onDelete:()=>console.log("Delete")})]})}},f={render:function(){const[l,n]=w.useState(""),[p,y]=w.useState(!1),[v,m]=w.useState(R()),A=d=>{const t={id:`msg-${String(Date.now())}`,author:a,content:d,createdAt:new Date};m(s=>({...s,messages:[...s.messages,t]})),n("")},S=(d,t)=>{m(s=>({...s,messages:s.messages.map(i=>i.id===d?{...i,content:t}:i)}))},B=d=>{m(t=>({...t,messages:t.messages.filter(s=>s.id!==d)}))};return e.jsx(g,{comment:v,currentUser:a,referenceTag:"Resource allocation",value:l,onValueChange:n,actionRequired:p,onActionRequiredChange:y,onSend:A,onEditMessage:S,onDeleteMessage:B,onMessageMarkUnread:d=>console.log("Mark unread message:",d),onMessageResolved:d=>console.log("Resolved message:",d),onClose:()=>console.log("Close clicked"),onResolve:()=>console.log("Resolve clicked"),onToggleActionRequired:()=>console.log("Toggle action required"),onForward:()=>console.log("Forward"),onMarkUnread:()=>console.log("Mark unread"),onCopyLink:()=>console.log("Copy link"),onDelete:()=>console.log("Delete")})}},q={render:()=>e.jsxs("div",{className:c.grid,children:[e.jsxs("div",{className:c.column,children:[e.jsx("h4",{className:c.heading,children:"Initial"}),e.jsx(g,{})]}),e.jsxs("div",{className:c.column,children:[e.jsx("h4",{className:c.heading,children:"Typing"}),e.jsx(g,{value:"This is a comment..."})]}),e.jsxs("div",{className:c.column,children:[e.jsx("h4",{className:c.heading,children:"Typing (Action Required)"}),e.jsx(g,{value:"This needs attention!",actionRequired:!0})]}),e.jsxs("div",{className:c.column,children:[e.jsx("h4",{className:c.heading,children:"Thread"}),e.jsx(g,{comment:R(),currentUser:a})]}),e.jsxs("div",{className:c.column,children:[e.jsx("h4",{className:c.heading,children:"Thread (Action Required)"}),e.jsx(g,{comment:R(),currentUser:a,actionRequired:!0})]})]})};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};const xe=["Initial","Typing","TypingWithActionRequired","Thread","ThreadWithActionRequired","FullInteractiveFlow","InteractiveThread","AllTypes"];export{q as AllTypes,k as FullInteractiveFlow,C as Initial,f as InteractiveThread,D as Thread,T as ThreadWithActionRequired,x as Typing,M as TypingWithActionRequired,xe as __namedExportsOrder,Ce as default};
