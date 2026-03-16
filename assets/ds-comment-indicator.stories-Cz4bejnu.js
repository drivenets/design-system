import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-B_jYKNIh.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{t as a}from"./ds-avatar-CbU5fyf8.js";import{t as o}from"./ds-avatar-DGz1nX0V.js";import{n as s,t as c}from"./ds-comment-bubble-CvWe-DSx.js";var l,u,d,f,p,m,h=t((()=>{l=`_indicator_mx14w_1`,u=`_actionRequired_mx14w_19`,d=`_placeholder_mx14w_24`,f=`_plusIcon_mx14w_24`,p=`_avatar_mx14w_44`,m={indicator:l,actionRequired:u,placeholder:d,plusIcon:f,avatar:p}})),g,_,v,y=t((()=>{g=e(i(),1),h(),o(),_=r(),v=({type:e=`placeholder`,avatarSrc:t,avatarName:n=``,onClick:r,ref:i,className:o,style:s})=>{let c=e===`placeholder`,l=e===`action-required`,u=()=>c?`Add comment`:`View comment`;return(0,_.jsx)(`button`,{ref:i,type:`button`,className:(0,g.default)(m.indicator,{[m.placeholder]:c,[m.actionRequired]:l},o),style:s,onClick:r,"aria-label":u(),children:c?(0,_.jsx)(`span`,{className:m.plusIcon,children:`+`}):(0,_.jsx)(a,{src:t,name:n,size:`sm`,className:m.avatar})})},v.__docgenInfo={description:``,methods:[],displayName:`DsCommentIndicator`,props:{type:{required:!1,tsType:{name:`union`,raw:`'placeholder' | 'default' | 'action-required'`,elements:[{name:`literal`,value:`'placeholder'`},{name:`literal`,value:`'default'`},{name:`literal`,value:`'action-required'`}]},description:``,defaultValue:{value:`'placeholder'`,computed:!1}},avatarSrc:{required:!1,tsType:{name:`string`},description:``},avatarName:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLButtonElement`}],raw:`Ref<HTMLButtonElement>`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),b=t((()=>{})),x=t((()=>{y(),b()})),S,C,w,T,E,D,O,k,A,j,M=t((()=>{S=`_container_hd0us_1`,C=`_header_hd0us_7`,w=`_headerCell_hd0us_16`,T=`_row_hd0us_26`,E=`_labelCell_hd0us_33`,D=`_interactiveContainer_hd0us_49`,O=`_instructions_hd0us_56`,k=`_indicatorWrapper_hd0us_66`,A=`_bubbleWrapper_hd0us_74`,j={container:S,header:C,headerCell:w,row:T,labelCell:E,interactiveContainer:D,instructions:O,indicatorWrapper:k,bubbleWrapper:A}})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J;t((()=>{N=e(n(),1),x(),c(),M(),P=r(),{expect:F,fn:I,within:L}=__STORYBOOK_MODULE_TEST__,R={title:`Design System/Comments/CommentIndicator`,component:v,parameters:{layout:`centered`},argTypes:{type:{control:`select`,options:[`placeholder`,`default`,`action-required`],description:`Type of indicator`},avatarSrc:{control:`text`,description:`Avatar image URL for default/action-required types`},onClick:{action:`clicked`,description:`Click handler`}}},z={args:{type:`placeholder`,onClick:I()},play:async({canvasElement:e})=>{let t=L(e).getByRole(`button`,{name:/add comment/i});await F(t).toBeInTheDocument(),await F(t).toHaveAttribute(`aria-label`,`Add comment`)}},B={args:{type:`default`,avatarSrc:`https://i.pravatar.cc/40?img=1`,onClick:I()},play:async({canvasElement:e})=>{let t=L(e).getByRole(`button`,{name:/view comment/i});await F(t).toBeInTheDocument(),await F(t).toHaveAttribute(`aria-label`,`View comment`)}},V={args:{type:`action-required`,avatarSrc:`https://i.pravatar.cc/40?img=2`,onClick:I()},play:async({canvasElement:e})=>{let t=L(e).getByRole(`button`,{name:/view comment/i});await F(t).toBeInTheDocument(),await F(t).toHaveClass(/actionRequired/)}},H={render:()=>(0,P.jsxs)(`div`,{className:j.container,children:[(0,P.jsxs)(`div`,{className:j.header,children:[(0,P.jsx)(`div`,{className:j.headerCell,children:`Placeholder`}),(0,P.jsx)(`div`,{className:j.headerCell,children:`No action required`}),(0,P.jsx)(`div`,{className:j.headerCell,children:`Action Required`})]}),(0,P.jsxs)(`div`,{className:j.row,children:[(0,P.jsx)(v,{type:`placeholder`,onClick:I()}),(0,P.jsx)(v,{type:`default`,avatarSrc:`https://i.pravatar.cc/40?img=1`,onClick:I()}),(0,P.jsx)(v,{type:`action-required`,avatarSrc:`https://i.pravatar.cc/40?img=2`,onClick:I()})]})]}),play:async({canvasElement:e})=>{let t=L(e).getAllByRole(`button`);await F(t).toHaveLength(3),await F(t[0]).toHaveAttribute(`aria-label`,`Add comment`),await F(t[1]).toHaveAttribute(`aria-label`,`View comment`),await F(t[2]).toHaveAttribute(`aria-label`,`View comment`)}},U={id:`user-1`,name:`You`,avatarSrc:`https://i.pravatar.cc/40?img=1`},W=()=>({id:`comment-1`,numericId:42,author:{id:`user-2`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-2`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`This is the initial comment message.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:U,content:`Thank you for the feedback!`,createdAt:new Date(Date.now()-720*60*1e3)}]}),G={render:function(){let[e,t]=(0,N.useState)(!1),[n,r]=(0,N.useState)(``),[i,a]=(0,N.useState)(!1),[o,c]=(0,N.useState)(void 0);return(0,P.jsxs)(`div`,{className:j.interactiveContainer,children:[(0,P.jsxs)(`p`,{className:j.instructions,children:[`Click the `,(0,P.jsx)(`strong`,{children:`+`}),` icon to open an empty comment bubble, then follow the complete flow:`,(0,P.jsx)(`br`,{}),`1. Type a message → Typing mode appears`,(0,P.jsx)(`br`,{}),`2. Send → Creates thread with your first comment`,(0,P.jsx)(`br`,{}),`3. Add replies → Thread grows with multiple messages`]}),(0,P.jsxs)(`div`,{className:j.indicatorWrapper,children:[(0,P.jsx)(v,{type:`placeholder`,onClick:()=>t(!e)}),e&&(0,P.jsx)(`div`,{className:j.bubbleWrapper,children:(0,P.jsx)(s,{comment:o,currentUser:U,referenceTag:`Resource allocation`,value:n,onValueChange:r,actionRequired:i,onActionRequiredChange:a,onSend:(e,t)=>{if(!o)c({id:`comment-1`,numericId:42,author:U,createdAt:new Date,isResolved:!1,messages:[{id:`msg-1`,author:U,content:e,createdAt:new Date,isInitialMessage:!0}]}),a(t);else{let t={id:`msg-${String(Date.now())}`,author:U,content:e,createdAt:new Date};c(e=>e&&{...e,messages:[...e.messages,t]})}r(``)},onEditMessage:(e,t)=>{o&&c(n=>n&&{...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)})},onDeleteMessage:e=>{o&&c(t=>t&&{...t,messages:t.messages.filter(t=>t.id!==e)})},onMessageMarkUnread:e=>console.log(`Mark unread:`,e),onMessageResolved:e=>console.log(`Resolved:`,e),onClose:o?()=>{c(void 0),r(``),a(!1)}:()=>t(!1),onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})})]})]})}},K={render:function(){let[e,t]=(0,N.useState)(!1),[n,r]=(0,N.useState)(``),[i,a]=(0,N.useState)(!1),[o,c]=(0,N.useState)(W());return(0,P.jsxs)(`div`,{className:j.interactiveContainer,children:[(0,P.jsxs)(`p`,{className:j.instructions,children:[`Click the `,(0,P.jsx)(`strong`,{children:`avatar`}),` to view existing comments and add replies`]}),(0,P.jsxs)(`div`,{className:j.indicatorWrapper,children:[(0,P.jsx)(v,{type:`default`,avatarSrc:o.author.avatarSrc,onClick:()=>t(!e)}),e&&(0,P.jsx)(`div`,{className:j.bubbleWrapper,children:(0,P.jsx)(s,{comment:o,currentUser:U,referenceTag:`Resource allocation`,value:n,onValueChange:r,actionRequired:i,onActionRequiredChange:a,onSend:e=>{let t={id:`msg-${String(Date.now())}`,author:U,content:e,createdAt:new Date};c(e=>({...e,messages:[...e.messages,t]})),r(``)},onEditMessage:(e,t)=>{c(n=>({...n,messages:n.messages.map(n=>n.id===e?{...n,content:t}:n)}))},onDeleteMessage:e=>{c(t=>({...t,messages:t.messages.filter(t=>t.id!==e)}))},onMessageMarkUnread:e=>console.log(`Mark unread:`,e),onMessageResolved:e=>console.log(`Resolved:`,e),onClose:()=>t(!1),onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})})]})]})}},q={render:function(){let[e,t]=(0,N.useState)(!1),[n,r]=(0,N.useState)(``),[i,a]=(0,N.useState)(!0),[o,c]=(0,N.useState)(W());return(0,P.jsxs)(`div`,{className:j.interactiveContainer,children:[(0,P.jsxs)(`p`,{className:j.instructions,children:[`Click the `,(0,P.jsx)(`strong`,{children:`action required avatar`}),` to view urgent comments`]}),(0,P.jsxs)(`div`,{className:j.indicatorWrapper,children:[(0,P.jsx)(v,{type:`action-required`,avatarSrc:o.author.avatarSrc,onClick:()=>t(!e)}),e&&(0,P.jsx)(`div`,{className:j.bubbleWrapper,children:(0,P.jsx)(s,{comment:o,currentUser:U,referenceTag:`Resource allocation`,value:n,onValueChange:r,actionRequired:i,onActionRequiredChange:a,onSend:e=>{let t={id:`msg-${String(Date.now())}`,author:U,content:e,createdAt:new Date};c(e=>({...e,messages:[...e.messages,t]})),r(``)},onClose:()=>t(!1),onResolve:()=>console.log(`Resolve clicked`),onToggleActionRequired:()=>console.log(`Toggle action required`),onForward:()=>console.log(`Forward`),onMarkUnread:()=>console.log(`Mark unread`),onCopyLink:()=>console.log(`Copy link`),onDelete:()=>console.log(`Delete`)})})]})]})}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Placeholder indicator shows a "+" icon for adding new comments.
This appears when hovering over entities that can have comments.`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Default indicator shows the avatar of the comment initiator.
Used when there are comments but no action is required.`,...B.parameters?.docs?.description}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:`Action required indicator shows the avatar with an orange/red background.
Used when a comment requires user action or response.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Interactive story showing a placeholder indicator that opens an empty comment bubble
when clicked. Demonstrates the complete flow from empty bubble to thread with multiple messages.
Click the "+" icon to add a new comment, then add replies to see the full thread.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Interactive story showing an indicator with an avatar that opens a comment bubble
with existing comments when clicked. The bubble displays a full comment thread.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source},description:{story:`Interactive story showing an action-required indicator that opens a comment bubble
with existing comments marked as requiring action.`,...q.parameters?.docs?.description}}},J=[`Placeholder`,`DefaultIndicator`,`ActionRequired`,`Default`,`WithEmptyBubble`,`WithExistingComments`,`WithActionRequired`]}))();export{V as ActionRequired,H as Default,B as DefaultIndicator,z as Placeholder,q as WithActionRequired,G as WithEmptyBubble,K as WithExistingComments,J as __namedExportsOrder,R as default};