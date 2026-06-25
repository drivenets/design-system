import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BUxaTXVU.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./classnames-Dm_LJ4P4.js";import{t as a}from"./compiler-runtime-J75ibY1M.js";import{t as o}from"./ds-avatar-DiJZpgeg.js";import{t as s}from"./ds-avatar-CuMtM3I9.js";import{n as c,t as l}from"./ds-comment-bubble-BHlmMriF.js";var u,d,f,p,m,h,g=e((()=>{u=`_indicator_qxksg_1`,d=`_actionRequired_qxksg_19`,f=`_placeholder_qxksg_24`,p=`_plusIcon_qxksg_24`,m=`_avatar_qxksg_44`,h={indicator:u,actionRequired:d,placeholder:f,plusIcon:p,avatar:m}})),_,v,y,b,x=e((()=>{_=a(),v=t(i(),1),g(),s(),y=r(),b=e=>{let t=(0,_.c)(17),{type:n,avatarSrc:r,avatarName:i,onClick:a,ref:s,className:c,style:l}=e,u=n===void 0?`placeholder`:n,d=i===void 0?``:i,f=u===`placeholder`,p=u===`action-required`,m;t[0]===f?m=t[1]:(m=()=>f?`Add comment`:`View comment`,t[0]=f,t[1]=m);let g=m,b;t[2]!==c||t[3]!==p||t[4]!==f?(b=(0,v.default)(h.indicator,{[h.placeholder]:f,[h.actionRequired]:p},c),t[2]=c,t[3]=p,t[4]=f,t[5]=b):b=t[5];let x=g(),S;t[6]!==d||t[7]!==r||t[8]!==f?(S=f?(0,y.jsx)(`span`,{className:h.plusIcon,children:`+`}):(0,y.jsx)(o,{src:r,name:d,size:`sm`,className:h.avatar}),t[6]=d,t[7]=r,t[8]=f,t[9]=S):S=t[9];let C;return t[10]!==a||t[11]!==s||t[12]!==l||t[13]!==b||t[14]!==x||t[15]!==S?(C=(0,y.jsx)(`button`,{ref:s,type:`button`,className:b,style:l,onClick:a,"aria-label":x,children:S}),t[10]=a,t[11]=s,t[12]=l,t[13]=b,t[14]=x,t[15]=S,t[16]=C):C=t[16],C}})),S=e((()=>{})),C=e((()=>{x(),S()})),w,T,E,D,O,k,A,j,M,N,P=e((()=>{w=`_container_fe41t_1`,T=`_header_fe41t_7`,E=`_headerCell_fe41t_16`,D=`_row_fe41t_26`,O=`_labelCell_fe41t_33`,k=`_interactiveContainer_fe41t_49`,A=`_instructions_fe41t_56`,j=`_indicatorWrapper_fe41t_66`,M=`_bubbleWrapper_fe41t_74`,N={container:w,header:T,headerCell:E,row:D,labelCell:O,interactiveContainer:k,instructions:A,indicatorWrapper:j,bubbleWrapper:M}})),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X;e((()=>{F=t(n(),1),C(),l(),P(),I=r(),{expect:L,fn:R,within:z}=__STORYBOOK_MODULE_TEST__,B={title:`Components/Comments/CommentIndicator`,component:b,parameters:{layout:`centered`},argTypes:{type:{control:`select`,options:[`placeholder`,`default`,`action-required`],description:`Type of indicator`},avatarSrc:{control:`text`,description:`Avatar image URL for default/action-required types`},onClick:{action:`clicked`,description:`Click handler`}}},V={args:{type:`placeholder`,onClick:R()},play:async({canvasElement:e})=>{let t=z(e).getByRole(`button`,{name:/add comment/i});await L(t).toBeInTheDocument(),await L(t).toHaveAttribute(`aria-label`,`Add comment`)}},H={args:{type:`default`,avatarSrc:`https://i.pravatar.cc/40?img=1`,onClick:R()},play:async({canvasElement:e})=>{let t=z(e).getByRole(`button`,{name:/view comment/i});await L(t).toBeInTheDocument(),await L(t).toHaveAttribute(`aria-label`,`View comment`)}},U={args:{type:`action-required`,avatarSrc:`https://i.pravatar.cc/40?img=2`,onClick:R()},play:async({canvasElement:e})=>{let t=z(e).getByRole(`button`,{name:/view comment/i});await L(t).toBeInTheDocument(),await L(t).toHaveClass(/actionRequired/)}},W={render:()=>(0,I.jsxs)(`div`,{className:N.container,children:[(0,I.jsxs)(`div`,{className:N.header,children:[(0,I.jsx)(`div`,{className:N.headerCell,children:`Placeholder`}),(0,I.jsx)(`div`,{className:N.headerCell,children:`No action required`}),(0,I.jsx)(`div`,{className:N.headerCell,children:`Action Required`})]}),(0,I.jsxs)(`div`,{className:N.row,children:[(0,I.jsx)(b,{type:`placeholder`,onClick:R()}),(0,I.jsx)(b,{type:`default`,avatarSrc:`https://i.pravatar.cc/40?img=1`,onClick:R()}),(0,I.jsx)(b,{type:`action-required`,avatarSrc:`https://i.pravatar.cc/40?img=2`,onClick:R()})]})]}),play:async({canvasElement:e})=>{let t=z(e).getAllByRole(`button`);await L(t).toHaveLength(3),await L(t[0]).toHaveAttribute(`aria-label`,`Add comment`),await L(t[1]).toHaveAttribute(`aria-label`,`View comment`),await L(t[2]).toHaveAttribute(`aria-label`,`View comment`)}},G={id:`user-1`,name:`You`,avatarSrc:`https://i.pravatar.cc/40?img=1`},K=()=>({id:`comment-1`,numericId:42,author:{id:`user-2`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-2`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`This is the initial comment message.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:G,content:`Thank you for the feedback!`,createdAt:new Date(Date.now()-720*60*1e3)}]}),q={render:function(){let[e,t]=(0,F.useState)(!1),[n,r]=(0,F.useState)(``),[i,a]=(0,F.useState)(!1),[o,s]=(0,F.useState)(void 0);return(0,I.jsxs)(`div`,{className:N.interactiveContainer,children:[(0,I.jsxs)(`p`,{className:N.instructions,children:[`Click the `,(0,I.jsx)(`strong`,{children:`+`}),` icon to open an empty comment bubble, then follow the complete flow:`,(0,I.jsx)(`br`,{}),`1. Type a message → Typing mode appears`,(0,I.jsx)(`br`,{}),`2. Send → Creates thread with your first comment`,(0,I.jsx)(`br`,{}),`3. Add replies → Thread grows with multiple messages`]}),(0,I.jsxs)(`div`,{className:N.indicatorWrapper,children:[(0,I.jsx)(b,{type:`placeholder`,onClick:()=>t(!e)}),e&&(0,I.jsx)(`div`,{className:N.bubbleWrapper,children:(0,I.jsx)(c,{comment:o,currentUser:G,referenceTag:`Resource allocation`,value:n,onValueChange:r,actionRequired:i,onActionRequiredChange:a,onSend:(e,t)=>{if(!o)s({id:`comment-1`,numericId:42,author:G,createdAt:new Date,isResolved:!1,messages:[{id:`msg-1`,author:G,content:e,createdAt:new Date,isInitialMessage:!0}]}),a(t);else{let t={id:`msg-${String(Date.now())}`,author:G,content:e,createdAt:new Date};s(e=>e&&{...e,messages:[...e.messages,t]})}r(``)},onEditMessage:(e,t)=>{o&&s(n=>n&&{...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)})},onDeleteMessage:e=>{o&&s(t=>t&&{...t,messages:t.messages.filter(t=>t.id!==e)})},onMessageMarkUnread:e=>console.log(`Mark unread:`,e),onMessageResolved:e=>console.log(`Resolved:`,e),onClose:o?()=>{s(void 0),r(``),a(!1)}:()=>t(!1),onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})})]})]})}},J={render:function(){let[e,t]=(0,F.useState)(!1),[n,r]=(0,F.useState)(``),[i,a]=(0,F.useState)(!1),[o,s]=(0,F.useState)(K());return(0,I.jsxs)(`div`,{className:N.interactiveContainer,children:[(0,I.jsxs)(`p`,{className:N.instructions,children:[`Click the `,(0,I.jsx)(`strong`,{children:`avatar`}),` to view existing comments and add replies`]}),(0,I.jsxs)(`div`,{className:N.indicatorWrapper,children:[(0,I.jsx)(b,{type:`default`,avatarSrc:o.author.avatarSrc,onClick:()=>t(!e)}),e&&(0,I.jsx)(`div`,{className:N.bubbleWrapper,children:(0,I.jsx)(c,{comment:o,currentUser:G,referenceTag:`Resource allocation`,value:n,onValueChange:r,actionRequired:i,onActionRequiredChange:a,onSend:e=>{let t={id:`msg-${String(Date.now())}`,author:G,content:e,createdAt:new Date};s(e=>({...e,messages:[...e.messages,t]})),r(``)},onEditMessage:(e,t)=>{s(n=>({...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)}))},onDeleteMessage:e=>{s(t=>({...t,messages:t.messages.filter(t=>t.id!==e)}))},onMessageMarkUnread:e=>console.log(`Mark unread:`,e),onMessageResolved:e=>console.log(`Resolved:`,e),onClose:()=>t(!1),onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})})]})]})}},Y={render:function(){let[e,t]=(0,F.useState)(!1),[n,r]=(0,F.useState)(``),[i,a]=(0,F.useState)(!0),[o,s]=(0,F.useState)(K());return(0,I.jsxs)(`div`,{className:N.interactiveContainer,children:[(0,I.jsxs)(`p`,{className:N.instructions,children:[`Click the `,(0,I.jsx)(`strong`,{children:`action required avatar`}),` to view urgent comments`]}),(0,I.jsxs)(`div`,{className:N.indicatorWrapper,children:[(0,I.jsx)(b,{type:`action-required`,avatarSrc:o.author.avatarSrc,onClick:()=>t(!e)}),e&&(0,I.jsx)(`div`,{className:N.bubbleWrapper,children:(0,I.jsx)(c,{comment:o,currentUser:G,referenceTag:`Resource allocation`,value:n,onValueChange:r,actionRequired:i,onActionRequiredChange:a,onSend:e=>{let t={id:`msg-${String(Date.now())}`,author:G,content:e,createdAt:new Date};s(e=>({...e,messages:[...e.messages,t]})),r(``)},onClose:()=>t(!1),onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})})]})]})}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'placeholder',
    onClick: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const indicator = canvas.getByRole('button', {
      name: /add comment/i
    });
    await expect(indicator).toBeInTheDocument();
    await expect(indicator).toHaveAttribute('aria-label', 'Add comment');
  }
}`,...V.parameters?.docs?.source},description:{story:`Placeholder indicator shows a "+" icon for adding new comments.
This appears when hovering over entities that can have comments.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    avatarSrc: 'https://i.pravatar.cc/40?img=1',
    onClick: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const indicator = canvas.getByRole('button', {
      name: /view comment/i
    });
    await expect(indicator).toBeInTheDocument();
    await expect(indicator).toHaveAttribute('aria-label', 'View comment');
  }
}`,...H.parameters?.docs?.source},description:{story:`Default indicator shows the avatar of the comment initiator.
Used when there are comments but no action is required.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'action-required',
    avatarSrc: 'https://i.pravatar.cc/40?img=2',
    onClick: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const indicator = canvas.getByRole('button', {
      name: /view comment/i
    });
    await expect(indicator).toBeInTheDocument();
    await expect(indicator).toHaveClass(/actionRequired/);
  }
}`,...U.parameters?.docs?.source},description:{story:`Action required indicator shows the avatar with an orange/red background.
Used when a comment requires user action or response.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.container}>
            <div className={styles.header}>
                <div className={styles.headerCell}>Placeholder</div>
                <div className={styles.headerCell}>No action required</div>
                <div className={styles.headerCell}>Action Required</div>
            </div>
            <div className={styles.row}>
                <DsCommentIndicator type="placeholder" onClick={fn()} />
                <DsCommentIndicator type="default" avatarSrc="https://i.pravatar.cc/40?img=1" onClick={fn()} />
                <DsCommentIndicator type="action-required" avatarSrc="https://i.pravatar.cc/40?img=2" onClick={fn()} />
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const indicators = canvas.getAllByRole('button');
    await expect(indicators).toHaveLength(3);
    await expect(indicators[0]).toHaveAttribute('aria-label', 'Add comment');
    await expect(indicators[1]).toHaveAttribute('aria-label', 'View comment');
    await expect(indicators[2]).toHaveAttribute('aria-label', 'View comment');
  }
}`,...W.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: function WithEmptyBubbleStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const [actionRequired, setActionRequired] = useState(false);
    const [comment, setComment] = useState<CommentData | undefined>(undefined);
    const handleSend = (content: string, isActionRequired: boolean) => {
      if (!comment) {
        const newComment: CommentData = {
          id: 'comment-1',
          numericId: 42,
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
                    Click the <strong>+</strong> icon to open an empty comment bubble, then follow the complete flow:
                    <br />
                    1. Type a message → Typing mode appears
                    <br />
                    2. Send → Creates thread with your first comment
                    <br />
                    3. Add replies → Thread grows with multiple messages
                </p>

                <div className={styles.indicatorWrapper}>
                    <DsCommentIndicator type="placeholder" onClick={() => setIsOpen(!isOpen)} />

                    {isOpen && <div className={styles.bubbleWrapper}>
                            <DsCommentBubble comment={comment} currentUser={currentUser} referenceTag="Resource allocation" value={value} onValueChange={setValue} actionRequired={actionRequired} onActionRequiredChange={setActionRequired} onSend={handleSend} onEditMessage={handleEditMessage} onDeleteMessage={handleDeleteMessage} onMessageMarkUnread={id => console.log('Mark unread:', id)} onMessageResolved={id => console.log('Resolved:', id)} onClose={comment ? handleClose : () => setIsOpen(false)} onResolve={() => console.log('Resolve clicked')} onToggleActionRequired={() => console.log('Toggle action required')} onForward={() => console.log('Forward')} onMarkUnread={() => console.log('Mark unread')} onCopyLink={() => console.log('Copy link')} onDelete={() => console.log('Delete')} />
                        </div>}
                </div>
            </div>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Interactive story showing a placeholder indicator that opens an empty comment bubble
when clicked. Demonstrates the complete flow from empty bubble to thread with multiple messages.
Click the "+" icon to add a new comment, then add replies to see the full thread.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function WithExistingCommentsStory() {
    const [isOpen, setIsOpen] = useState(false);
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
    return <div className={styles.interactiveContainer}>
                <p className={styles.instructions}>
                    Click the <strong>avatar</strong> to view existing comments and add replies
                </p>

                <div className={styles.indicatorWrapper}>
                    <DsCommentIndicator type="default" avatarSrc={comment.author.avatarSrc} onClick={() => setIsOpen(!isOpen)} />

                    {isOpen && <div className={styles.bubbleWrapper}>
                            <DsCommentBubble comment={comment} currentUser={currentUser} referenceTag="Resource allocation" value={value} onValueChange={setValue} actionRequired={actionRequired} onActionRequiredChange={setActionRequired} onSend={handleSend} onEditMessage={handleEditMessage} onDeleteMessage={handleDeleteMessage} onMessageMarkUnread={id => console.log('Mark unread:', id)} onMessageResolved={id => console.log('Resolved:', id)} onClose={() => setIsOpen(false)} onResolve={() => console.log('Resolve clicked')} onToggleActionRequired={() => console.log('Toggle action required')} onForward={() => console.log('Forward')} onMarkUnread={() => console.log('Mark unread')} onCopyLink={() => console.log('Copy link')} onDelete={() => console.log('Delete')} />
                        </div>}
                </div>
            </div>;
  }
}`,...J.parameters?.docs?.source},description:{story:`Interactive story showing an indicator with an avatar that opens a comment bubble
with existing comments when clicked. The bubble displays a full comment thread.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function WithActionRequiredStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const [actionRequired, setActionRequired] = useState(true);
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
    return <div className={styles.interactiveContainer}>
                <p className={styles.instructions}>
                    Click the <strong>action required avatar</strong> to view urgent comments
                </p>

                <div className={styles.indicatorWrapper}>
                    <DsCommentIndicator type="action-required" avatarSrc={comment.author.avatarSrc} onClick={() => setIsOpen(!isOpen)} />

                    {isOpen && <div className={styles.bubbleWrapper}>
                            <DsCommentBubble comment={comment} currentUser={currentUser} referenceTag="Resource allocation" value={value} onValueChange={setValue} actionRequired={actionRequired} onActionRequiredChange={setActionRequired} onSend={handleSend} onClose={() => setIsOpen(false)} onResolve={() => console.log('Resolve clicked')} onToggleActionRequired={() => console.log('Toggle action required')} onForward={() => console.log('Forward')} onMarkUnread={() => console.log('Mark unread')} onCopyLink={() => console.log('Copy link')} onDelete={() => console.log('Delete')} />
                        </div>}
                </div>
            </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:`Interactive story showing an action-required indicator that opens a comment bubble
with existing comments marked as requiring action.`,...Y.parameters?.docs?.description}}},X=[`Placeholder`,`DefaultIndicator`,`ActionRequired`,`Default`,`WithEmptyBubble`,`WithExistingComments`,`WithActionRequired`]}))();export{U as ActionRequired,W as Default,H as DefaultIndicator,V as Placeholder,Y as WithActionRequired,q as WithEmptyBubble,J as WithExistingComments,X as __namedExportsOrder,B as default};