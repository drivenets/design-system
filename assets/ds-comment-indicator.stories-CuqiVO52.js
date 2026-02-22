import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-foGZe_Iu.js";import{c as E}from"./index-CMjPrJCW.js";import{D as W}from"./ds-avatar-C54q64_o.js";import{D as N}from"./ds-comment-bubble-HfRqd4zx.js";import"./ds-thread-item-R7yBNuGX.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-tooltip-D0oEWv2E.js";import"./index-CMKhTBOs.js";import"./index-CaLCoC7s.js";import"./index-CptSJxGb.js";import"./index-DetwsqN6.js";import"./index-CU1pRg2l.js";import"./index-DeQ-Flqk.js";import"./index-p4cz4yFz.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-CA2P778B.js";import"./ds-typography-DkXTvhMW.js";import"./index-DLoHK7I_.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-D3iUicfk.js";import"./index-YmNYY-wR.js";import"./ds-button-W10qxW8_.js";import"./ds-button-legacy-Bm8c3XIV.js";import"./ds-button-new-Cv7wMHsa.js";import"./ds-icon-BH94ZUSb.js";import"./ds-checkbox-C67AlrqL.js";import"./ds-tag-BpJ_uizN.js";import"./ds-dropdown-menu-DogCgFyZ.js";import"./Combination-zblhtn0p.js";import"./ds-text-input-x1X5jHFi.js";import"./portal-CNSYYyYC.js";import"./use-presence-Bz0McZqC.js";import"./index-CBZp0MCn.js";import"./index-BEYRoaJb.js";import"./index-uEnwyB5F.js";import"./merge-refs-DX9dreSa.js";import"./ds-textarea-TnrVEc-m.js";import"./format-relative-time-B216dNqo.js";const O="_indicator_mx14w_1",V="_actionRequired_mx14w_19",U="_placeholder_mx14w_24",B="_plusIcon_mx14w_24",H="_avatar_mx14w_44",q={indicator:O,actionRequired:V,placeholder:U,plusIcon:B,avatar:H},w=({type:c="placeholder",avatarSrc:r,avatarName:t="",onClick:C,ref:u,className:y,style:g})=>{const o=c==="placeholder",l=c==="action-required",f=()=>o?"Add comment":"View comment";return e.jsx("button",{ref:u,type:"button",className:E(q.indicator,{[q.placeholder]:o,[q.actionRequired]:l},y),style:g,onClick:C,"aria-label":f(),children:o?e.jsx("span",{className:q.plusIcon,children:"+"}):e.jsx(W,{src:r,name:t,size:"sm",className:q.avatar})})};w.__docgenInfo={description:"",methods:[],displayName:"DsCommentIndicator",props:{type:{required:!1,tsType:{name:"union",raw:"'placeholder' | 'default' | 'action-required'",elements:[{name:"literal",value:"'placeholder'"},{name:"literal",value:"'default'"},{name:"literal",value:"'action-required'"}]},description:"",defaultValue:{value:"'placeholder'",computed:!1}},avatarSrc:{required:!1,tsType:{name:"string"},description:""},avatarName:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const L="_container_hd0us_1",F="_header_hd0us_7",P="_headerCell_hd0us_16",$="_row_hd0us_26",K="_interactiveContainer_hd0us_49",J="_instructions_hd0us_56",Y="_indicatorWrapper_hd0us_66",z="_bubbleWrapper_hd0us_74",a={container:L,header:F,headerCell:P,row:$,interactiveContainer:K,instructions:J,indicatorWrapper:Y,bubbleWrapper:z},{expect:p,fn:b,within:T}=__STORYBOOK_MODULE_TEST__,Ee={title:"Design System/Comments/CommentIndicator",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{type:{control:"select",options:["placeholder","default","action-required"],description:"Type of indicator"},avatarSrc:{control:"text",description:"Avatar image URL for default/action-required types"},onClick:{action:"clicked",description:"Click handler"}}},k={args:{type:"placeholder",onClick:b()},play:async({canvasElement:c})=>{const t=T(c).getByRole("button",{name:/add comment/i});await p(t).toBeInTheDocument(),await p(t).toHaveAttribute("aria-label","Add comment")}},D={args:{type:"default",avatarSrc:"https://i.pravatar.cc/40?img=1",onClick:b()},play:async({canvasElement:c})=>{const t=T(c).getByRole("button",{name:/view comment/i});await p(t).toBeInTheDocument(),await p(t).toHaveAttribute("aria-label","View comment")}},A={args:{type:"action-required",avatarSrc:"https://i.pravatar.cc/40?img=2",onClick:b()},play:async({canvasElement:c})=>{const t=T(c).getByRole("button",{name:/view comment/i});await p(t).toBeInTheDocument(),await p(t).toHaveClass(/actionRequired/)}},_={render:()=>e.jsxs("div",{className:a.container,children:[e.jsxs("div",{className:a.header,children:[e.jsx("div",{className:a.headerCell,children:"Placeholder"}),e.jsx("div",{className:a.headerCell,children:"No action required"}),e.jsx("div",{className:a.headerCell,children:"Action Required"})]}),e.jsxs("div",{className:a.row,children:[e.jsx(w,{type:"placeholder",onClick:b()}),e.jsx(w,{type:"default",avatarSrc:"https://i.pravatar.cc/40?img=1",onClick:b()}),e.jsx(w,{type:"action-required",avatarSrc:"https://i.pravatar.cc/40?img=2",onClick:b()})]})]}),play:async({canvasElement:c})=>{const t=T(c).getAllByRole("button");await p(t).toHaveLength(3),await p(t[0]).toHaveAttribute("aria-label","Add comment"),await p(t[1]).toHaveAttribute("aria-label","View comment"),await p(t[2]).toHaveAttribute("aria-label","View comment")}},h={id:"user-1",name:"You",avatarSrc:"https://i.pravatar.cc/40?img=1"},j=()=>({id:"comment-1",numericId:42,author:{id:"user-2",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=2"},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:"msg-1",author:{id:"user-2",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=2"},content:"This is the initial comment message.",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:"msg-2",author:h,content:"Thank you for the feedback!",createdAt:new Date(Date.now()-720*60*1e3)}]}),x={render:function(){const[r,t]=m.useState(!1),[C,u]=m.useState(""),[y,g]=m.useState(!1),[o,l]=m.useState(void 0),f=(n,s)=>{if(!o)l({id:"comment-1",numericId:42,author:h,createdAt:new Date,isResolved:!1,messages:[{id:"msg-1",author:h,content:n,createdAt:new Date,isInitialMessage:!0}]}),g(s);else{const d={id:`msg-${String(Date.now())}`,author:h,content:n,createdAt:new Date};l(v=>v&&{...v,messages:[...v.messages,d]})}u("")},R=(n,s)=>{o&&l(d=>d&&{...d,messages:d.messages.map(v=>v.id===n?{...v,content:s}:v)})},S=n=>{o&&l(s=>s&&{...s,messages:s.messages.filter(d=>d.id!==n)})},i=()=>{l(void 0),u(""),g(!1)};return e.jsxs("div",{className:a.interactiveContainer,children:[e.jsxs("p",{className:a.instructions,children:["Click the ",e.jsx("strong",{children:"+"})," icon to open an empty comment bubble, then follow the complete flow:",e.jsx("br",{}),"1. Type a message → Typing mode appears",e.jsx("br",{}),"2. Send → Creates thread with your first comment",e.jsx("br",{}),"3. Add replies → Thread grows with multiple messages"]}),e.jsxs("div",{className:a.indicatorWrapper,children:[e.jsx(w,{type:"placeholder",onClick:()=>t(!r)}),r&&e.jsx("div",{className:a.bubbleWrapper,children:e.jsx(N,{comment:o,currentUser:h,referenceTag:"Resource allocation",value:C,onValueChange:u,actionRequired:y,onActionRequiredChange:g,onSend:f,onEditMessage:R,onDeleteMessage:S,onMessageMarkUnread:n=>console.log("Mark unread:",n),onMessageResolved:n=>console.log("Resolved:",n),onClose:o?i:()=>t(!1),onResolve:()=>console.log("Resolve clicked"),onToggleActionRequired:()=>console.log("Toggle action required"),onForward:()=>console.log("Forward"),onMarkUnread:()=>console.log("Mark unread"),onCopyLink:()=>console.log("Copy link"),onDelete:()=>console.log("Delete")})})]})]})}},M={render:function(){const[r,t]=m.useState(!1),[C,u]=m.useState(""),[y,g]=m.useState(!1),[o,l]=m.useState(j()),f=i=>{const n={id:`msg-${String(Date.now())}`,author:h,content:i,createdAt:new Date};l(s=>({...s,messages:[...s.messages,n]})),u("")},R=(i,n)=>{l(s=>({...s,messages:s.messages.map(d=>d.id===i?{...d,content:n}:d)}))},S=i=>{l(n=>({...n,messages:n.messages.filter(s=>s.id!==i)}))};return e.jsxs("div",{className:a.interactiveContainer,children:[e.jsxs("p",{className:a.instructions,children:["Click the ",e.jsx("strong",{children:"avatar"})," to view existing comments and add replies"]}),e.jsxs("div",{className:a.indicatorWrapper,children:[e.jsx(w,{type:"default",avatarSrc:o.author.avatarSrc,onClick:()=>t(!r)}),r&&e.jsx("div",{className:a.bubbleWrapper,children:e.jsx(N,{comment:o,currentUser:h,referenceTag:"Resource allocation",value:C,onValueChange:u,actionRequired:y,onActionRequiredChange:g,onSend:f,onEditMessage:R,onDeleteMessage:S,onMessageMarkUnread:i=>console.log("Mark unread:",i),onMessageResolved:i=>console.log("Resolved:",i),onClose:()=>t(!1),onResolve:()=>console.log("Resolve clicked"),onToggleActionRequired:()=>console.log("Toggle action required"),onForward:()=>console.log("Forward"),onMarkUnread:()=>console.log("Mark unread"),onCopyLink:()=>console.log("Copy link"),onDelete:()=>console.log("Delete")})})]})]})}},I={render:function(){const[r,t]=m.useState(!1),[C,u]=m.useState(""),[y,g]=m.useState(!0),[o,l]=m.useState(j()),f=R=>{const S={id:`msg-${String(Date.now())}`,author:h,content:R,createdAt:new Date};l(i=>({...i,messages:[...i.messages,S]})),u("")};return e.jsxs("div",{className:a.interactiveContainer,children:[e.jsxs("p",{className:a.instructions,children:["Click the ",e.jsx("strong",{children:"action required avatar"})," to view urgent comments"]}),e.jsxs("div",{className:a.indicatorWrapper,children:[e.jsx(w,{type:"action-required",avatarSrc:o.author.avatarSrc,onClick:()=>t(!r)}),r&&e.jsx("div",{className:a.bubbleWrapper,children:e.jsx(N,{comment:o,currentUser:h,referenceTag:"Resource allocation",value:C,onValueChange:u,actionRequired:y,onActionRequiredChange:g,onSend:f,onClose:()=>t(!1),onResolve:()=>console.log("Resolve clicked"),onToggleActionRequired:()=>console.log("Toggle action required"),onForward:()=>console.log("Forward"),onMarkUnread:()=>console.log("Mark unread"),onCopyLink:()=>console.log("Copy link"),onDelete:()=>console.log("Delete")})})]})]})}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:`Placeholder indicator shows a "+" icon for adding new comments.
This appears when hovering over entities that can have comments.`,...k.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:`Default indicator shows the avatar of the comment initiator.
Used when there are comments but no action is required.`,...D.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source},description:{story:`Action required indicator shows the avatar with an orange/red background.
Used when a comment requires user action or response.`,...A.parameters?.docs?.description}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:`Interactive story showing a placeholder indicator that opens an empty comment bubble
when clicked. Demonstrates the complete flow from empty bubble to thread with multiple messages.
Click the "+" icon to add a new comment, then add replies to see the full thread.`,...x.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:`Interactive story showing an indicator with an avatar that opens a comment bubble
with existing comments when clicked. The bubble displays a full comment thread.`,...M.parameters?.docs?.description}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Interactive story showing an action-required indicator that opens a comment bubble
with existing comments marked as requiring action.`,...I.parameters?.docs?.description}}};const We=["Placeholder","DefaultIndicator","ActionRequired","Default","WithEmptyBubble","WithExistingComments","WithActionRequired"];export{A as ActionRequired,_ as Default,D as DefaultIndicator,k as Placeholder,I as WithActionRequired,x as WithEmptyBubble,M as WithExistingComments,We as __namedExportsOrder,Ee as default};
