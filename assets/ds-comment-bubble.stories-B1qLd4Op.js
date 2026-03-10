import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as B}from"./iframe-BmSPM-Ld.js";import{D as y}from"./ds-comment-bubble-qB-1UO0Q.js";import"./ds-thread-item-B1J5Z1Ug.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CnMwAcS8.js";import"./ds-button-D04f0NJ8.js";import"./ds-button-legacy-mJDTSJOh.js";import"./ds-button-new-Di2xg-Cn.js";import"./ds-icon-iMJSHCHz.js";import"./ds-checkbox-BwVS5o0l.js";import"./index-DqvjbSet.js";import"./index-BxkAKOG9.js";import"./index-Dbr3Y_Zx.js";import"./index-D4BidFMr.js";import"./index-CFLp-uFy.js";import"./ds-tag-FC3uDTpv.js";import"./ds-typography-CphS93Yt.js";import"./index-BpmvwCao.js";import"./ds-dropdown-menu-CiPq8KYc.js";import"./index-Bc9e2jvF.js";import"./Combination-DUk5LVq0.js";import"./index-DCJskxEh.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-BitrCCia.js";import"./ds-text-input-BsFy0Af1.js";import"./portal-CHaGvyib.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-CCTw63fm.js";import"./create-anatomy-BCWrtZRX.js";import"./use-presence-CkuG9iLr.js";import"./set-wINjjEke.js";import"./raf-CC9hSMXO.js";import"./computed-style-7Z9WAJuJ.js";import"./event-CBXSxTbR.js";import"./index-Ddmf6tA3.js";import"./get-styles-BCuPNK9_.js";import"./typeahead-DQd88xYC.js";import"./query-CjgVAlRR.js";import"./initial-focus-DAAGySxw.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CZzoYVdC.js";import"./navigate-CTqriKP7.js";import"./merge-refs-DX9dreSa.js";import"./ds-avatar-GA77D-H9.js";import"./ds-tooltip-CUwMSuYQ.js";import"./ds-textarea-DIWwviB8.js";import"./format-relative-time-B216dNqo.js";const L="_grid_pae51_1",K="_column_pae51_7",$="_heading_pae51_13",J="_interactiveContainer_pae51_20",z="_instructions_pae51_27",u={grid:L,column:K,heading:$,interactiveContainer:J,instructions:z},{expect:r,fn:m,userEvent:w,within:l}=__STORYBOOK_MODULE_TEST__,o={id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},p=(e={})=>({id:"comment-1",numericId:63,author:o,createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:"msg-1",author:o,content:"We need to review the resource allocation for this project.",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:"msg-2",author:o,content:"I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards.",createdAt:new Date(Date.now()-1200*60*1e3)},{id:"msg-3",author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},content:"That makes sense. I can help coordinate with the team to identify any potential blockers. We should also check with stakeholders about priority.",createdAt:new Date(Date.now()-960*60*1e3)},{id:"msg-4",author:o,content:"Great idea. Let me schedule a meeting with the stakeholders for next week. We can discuss the timeline and resource requirements in detail.",createdAt:new Date(Date.now()-720*60*1e3)},{id:"msg-5",author:{id:"user-3",name:"Jane S.",avatarSrc:"https://i.pravatar.cc/40?img=3"},content:"I can prepare a summary of our current resource usage and projected needs for the meeting. This will help us make informed decisions.",createdAt:new Date(Date.now()-480*60*1e3)}],...e}),Le={title:"Design System/Comments/CommentBubble",component:y,parameters:{layout:"centered",docs:{description:{component:`
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
        `}}},argTypes:{actionRequired:{control:"boolean",description:"Whether action required is checked"},value:{control:"text",description:"Current input value"},comment:{table:{disable:!0}},currentUser:{table:{disable:!0}}},args:{referenceTag:"Resource allocation",onSend:m(),onClose:m(),onResolve:m(),onToggleActionRequired:m(),onForward:m(),onMarkUnread:m(),onCopyLink:m(),onDelete:m(),onActionRequiredChange:m(),onValueChange:m(),onEditMessage:m(),onDeleteMessage:m(),onMessageMarkUnread:m(),onMessageResolved:m()}},b={args:{},play:async({canvasElement:e})=>{const t=l(e).getByRole("textbox",{name:/add a comment/i});await r(t).toBeInTheDocument(),await r(t).toHaveAttribute("placeholder","Add a comment")}},C={args:{value:"This is a new comment..."},play:async({canvasElement:e})=>{const n=l(e),t=n.getByRole("checkbox",{name:/action required/i}),s=n.getByRole("button",{name:/send/i});await r(t).toBeInTheDocument(),await r(s).toBeEnabled()}},T={args:{value:"This needs attention!",actionRequired:!0},play:async({canvasElement:e})=>{const n=l(e),t=n.getByRole("checkbox",{name:/action required/i}),s=n.getByRole("button",{name:/send/i});await r(t).toBeChecked(),await r(s).toBeEnabled()}},k={args:{comment:p(),currentUser:o},play:async({canvasElement:e})=>{const t=l(e).getByRole("dialog",{name:/comment thread #63/i});await r(t).toBeInTheDocument()}},D={args:{comment:p(),actionRequired:!0,currentUser:o},play:async({canvasElement:e})=>{const t=l(e).getByRole("dialog",{name:/comment thread #63/i});await r(t).toBeInTheDocument()}},E={args:{value:"Test message to send"},play:async({canvasElement:e,args:n})=>{const s=l(e).getByRole("button",{name:/send/i});await w.click(s),await r(n.onSend).toHaveBeenCalledWith("Test message to send",!1)}},S={args:{value:"Enter key message"},play:async({canvasElement:e,args:n})=>{const s=l(e).getByRole("textbox");await w.click(s),await w.keyboard("{Enter}"),await r(n.onSend).toHaveBeenCalledWith("Enter key message",!1)}},M={args:{value:""},play:async({canvasElement:e})=>{const t=l(e).getByRole("button",{name:/send/i});await r(t).toBeDisabled()}},f={args:{comment:p(),currentUser:o,value:""},play:async({canvasElement:e})=>{const t=l(e).getByRole("button",{name:/send/i});await r(t).toBeDisabled()}},q={args:{comment:p(),currentUser:o,value:"A reply"},play:async({canvasElement:e,args:n})=>{const s=l(e).getByRole("button",{name:/send/i});await r(s).toBeEnabled(),await w.click(s),await r(n.onSend).toHaveBeenCalledWith("A reply",!1)}},A={args:{comment:p(),currentUser:o},play:async({canvasElement:e,args:n})=>{const s=l(e).getByRole("button",{name:/close/i});await w.click(s),await r(n.onClose).toHaveBeenCalledOnce()}},I={args:{comment:p(),currentUser:o},play:async({canvasElement:e,args:n})=>{const s=l(e).getByRole("button",{name:"Resolve"});await w.click(s),await r(n.onResolve).toHaveBeenCalledOnce()}},U={args:{comment:p(),currentUser:o,value:""},play:async({canvasElement:e,args:n})=>{const s=l(e).getByRole("textbox",{name:/reply/i});await w.type(s,"new text"),await r(n.onValueChange).toHaveBeenCalled()}},j={args:{referenceTag:"My tag"},play:async({canvasElement:e})=>{const t=l(e).getByRole("dialog",{name:/add new comment/i});await r(t).toBeInTheDocument()}},N={args:{comment:p(),currentUser:o,referenceTag:"Resource allocation"},play:async({canvasElement:e})=>{const n=l(e);await r(n.getByText("Resource allocation")).toBeInTheDocument(),await r(n.getByText("#63")).toBeInTheDocument()}},F={render:function(){const[n,t]=B.useState(""),[s,x]=B.useState(!1),[R,h]=B.useState(void 0),V=(c,i)=>{if(!R)h({id:"comment-1",numericId:63,author:o,createdAt:new Date,isResolved:!1,messages:[{id:"msg-1",author:o,content:c,createdAt:new Date,isInitialMessage:!0}]}),x(i);else{const d={id:`msg-${String(Date.now())}`,author:o,content:c,createdAt:new Date};h(v=>v&&{...v,messages:[...v.messages,d]})}t("")},H=(c,i)=>{R&&h(d=>d&&{...d,messages:d.messages.map(v=>v.id===c?{...v,content:i}:v)})},O=c=>{R&&h(i=>i&&{...i,messages:i.messages.filter(d=>d.id!==c)})},g=()=>{h(void 0),t(""),x(!1)};return a.jsxs("div",{className:u.interactiveContainer,children:[a.jsxs("p",{className:u.instructions,children:[a.jsx("strong",{children:"Full Flow Test:"}),a.jsx("br",{}),"1. Start by typing in the bubble - it will expand and show the footer",a.jsx("br",{}),"2. Send your first comment to create a thread",a.jsx("br",{}),"3. Add more replies to see the thread grow",a.jsx("br",{}),"4. Close to reset and start over"]}),a.jsx(y,{comment:R,currentUser:o,referenceTag:"Resource allocation",value:n,onValueChange:t,actionRequired:s,onActionRequiredChange:x,onSend:V,onEditMessage:H,onDeleteMessage:O,onMessageMarkUnread:c=>console.log("Mark unread message:",c),onMessageResolved:c=>console.log("Resolved message:",c),onClose:g,onResolve:()=>console.log("Resolve clicked"),onToggleActionRequired:()=>console.log("Toggle action required"),onForward:()=>console.log("Forward"),onMarkUnread:()=>console.log("Mark unread"),onCopyLink:()=>console.log("Copy link"),onDelete:()=>console.log("Delete")})]})}},W={render:function(){const[n,t]=B.useState(""),[s,x]=B.useState(!1),[R,h]=B.useState(p()),V=g=>{const c={id:`msg-${String(Date.now())}`,author:o,content:g,createdAt:new Date};h(i=>({...i,messages:[...i.messages,c]})),t("")},H=(g,c)=>{h(i=>({...i,messages:i.messages.map(d=>d.id===g?{...d,content:c}:d)}))},O=g=>{h(c=>({...c,messages:c.messages.filter(i=>i.id!==g)}))};return a.jsx(y,{comment:R,currentUser:o,referenceTag:"Resource allocation",value:n,onValueChange:t,actionRequired:s,onActionRequiredChange:x,onSend:V,onEditMessage:H,onDeleteMessage:O,onMessageMarkUnread:g=>console.log("Mark unread message:",g),onMessageResolved:g=>console.log("Resolved message:",g),onClose:()=>console.log("Close clicked"),onResolve:()=>console.log("Resolve clicked"),onToggleActionRequired:()=>console.log("Toggle action required"),onForward:()=>console.log("Forward"),onMarkUnread:()=>console.log("Mark unread"),onCopyLink:()=>console.log("Copy link"),onDelete:()=>console.log("Delete")})}},_={render:()=>a.jsxs("div",{className:u.grid,children:[a.jsxs("div",{className:u.column,children:[a.jsx("h4",{className:u.heading,children:"Initial"}),a.jsx(y,{})]}),a.jsxs("div",{className:u.column,children:[a.jsx("h4",{className:u.heading,children:"Typing"}),a.jsx(y,{value:"This is a comment..."})]}),a.jsxs("div",{className:u.column,children:[a.jsx("h4",{className:u.heading,children:"Typing (Action Required)"}),a.jsx(y,{value:"This needs attention!",actionRequired:!0})]}),a.jsxs("div",{className:u.column,children:[a.jsx("h4",{className:u.heading,children:"Thread"}),a.jsx(y,{comment:p(),currentUser:o})]}),a.jsxs("div",{className:u.column,children:[a.jsx("h4",{className:u.heading,children:"Thread (Action Required)"}),a.jsx(y,{comment:p(),currentUser:o,actionRequired:!0})]})]})};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...f.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};const Ke=["Initial","Typing","TypingWithActionRequired","Thread","ThreadWithActionRequired","SendButtonClick","SendWithEnterKey","SendDisabledWhenEmpty","ThreadSendDisabledWhenEmpty","ThreadSendEnabled","ThreadCloseButton","ThreadResolveButton","TextareaValueChange","InitialWithReferenceTag","ThreadWithReferenceTag","FullInteractiveFlow","InteractiveThread","AllTypes"];export{_ as AllTypes,F as FullInteractiveFlow,b as Initial,j as InitialWithReferenceTag,W as InteractiveThread,E as SendButtonClick,M as SendDisabledWhenEmpty,S as SendWithEnterKey,U as TextareaValueChange,k as Thread,A as ThreadCloseButton,I as ThreadResolveButton,f as ThreadSendDisabledWhenEmpty,q as ThreadSendEnabled,D as ThreadWithActionRequired,N as ThreadWithReferenceTag,C as Typing,T as TypingWithActionRequired,Ke as __namedExportsOrder,Le as default};
