import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./classnames-Cm4Wq5Eu.js";import{i as o}from"./ds-avatar.types-1gr0gATe.js";import{n as s,t as c}from"./ds-typography-DrL2wWa5.js";import{n as l,t as u}from"./ds-stack-GU0hZWeR.js";import{t as d}from"./ds-avatar-PggleZID.js";import{n as f,t as p}from"./ds-comment-bubble-CSxzd6Ep.js";var m,h,g,_,v,y,b=t((()=>{m=`_indicator_qxksg_1`,h=`_actionRequired_qxksg_19`,g=`_placeholder_qxksg_24`,_=`_plusIcon_qxksg_24`,v=`_avatar_qxksg_44`,y={indicator:m,actionRequired:h,placeholder:g,plusIcon:_,avatar:v}})),x,S,C,w,T=t((()=>{x=i(),S=e(a(),1),b(),d(),C=r(),w=e=>{let t=(0,x.c)(17),{type:n,avatarSrc:r,avatarName:i,onClick:a,ref:s,className:c,style:l}=e,u=n===void 0?`placeholder`:n,d=i===void 0?``:i,f=u===`placeholder`,p=u===`action-required`,m;t[0]===f?m=t[1]:(m=()=>f?`Add comment`:`View comment`,t[0]=f,t[1]=m);let h=m,g;t[2]!==c||t[3]!==p||t[4]!==f?(g=(0,S.default)(y.indicator,{[y.placeholder]:f,[y.actionRequired]:p},c),t[2]=c,t[3]=p,t[4]=f,t[5]=g):g=t[5];let _=h(),v;t[6]!==d||t[7]!==r||t[8]!==f?(v=f?(0,C.jsx)(`span`,{className:y.plusIcon,children:`+`}):(0,C.jsx)(o,{src:r,name:d,size:`sm`,className:y.avatar}),t[6]=d,t[7]=r,t[8]=f,t[9]=v):v=t[9];let b;return t[10]!==a||t[11]!==s||t[12]!==l||t[13]!==g||t[14]!==_||t[15]!==v?(b=(0,C.jsx)(`button`,{ref:s,type:`button`,className:g,style:l,onClick:a,"aria-label":_,children:v}),t[10]=a,t[11]=s,t[12]=l,t[13]=g,t[14]=_,t[15]=v,t[16]=b):b=t[16],b},w.displayName=`DsCommentIndicator`})),E=t((()=>{})),D=t((()=>{T(),E()})),O,k,A,j=t((()=>{O=`_indicatorWrapper_1keh7_1`,k=`_bubbleWrapper_1keh7_9`,A={indicatorWrapper:O,bubbleWrapper:k}})),M,N,P,F,I,L,R,z,B,V,H,U,W;t((()=>{M=e(n(),1),D(),p(),l(),c(),j(),N=r(),{fn:P}=__STORYBOOK_MODULE_TEST__,F={title:`Components/Comments/CommentIndicator`,component:w,parameters:{layout:`centered`},argTypes:{type:{control:`select`,options:[`placeholder`,`default`,`action-required`]},className:{table:{disable:!0}},style:{table:{disable:!0}}},args:{onClick:P()}},I={args:{type:`default`,avatarSrc:`https://i.pravatar.cc/40?img=1`}},L={args:{type:`placeholder`}},R={args:{type:`action-required`,avatarSrc:`https://i.pravatar.cc/40?img=2`}},z={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,N.jsxs)(u,{gap:`var(--2xl)`,alignItems:`flex-start`,children:[(0,N.jsxs)(u,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,N.jsx)(s,{variant:`body-sm-md`,color:`secondary`,children:`Placeholder`}),(0,N.jsx)(w,{type:`placeholder`,onClick:P()})]}),(0,N.jsxs)(u,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,N.jsx)(s,{variant:`body-sm-md`,color:`secondary`,children:`Default`}),(0,N.jsx)(w,{type:`default`,avatarSrc:`https://i.pravatar.cc/40?img=1`,onClick:P()})]}),(0,N.jsxs)(u,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,children:[(0,N.jsx)(s,{variant:`body-sm-md`,color:`secondary`,children:`Action required`}),(0,N.jsx)(w,{type:`action-required`,avatarSrc:`https://i.pravatar.cc/40?img=2`,onClick:P()})]})]})},B={id:`user-1`,name:`You`,avatarSrc:`https://i.pravatar.cc/40?img=1`},V=()=>({id:`comment-1`,numericId:42,author:{id:`user-2`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-2`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`This is the initial comment message.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:B,content:`Thank you for the feedback!`,createdAt:new Date(Date.now()-720*60*1e3)}]}),H={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:function(){let[e,t]=(0,M.useState)(!1),[n,r]=(0,M.useState)(``),[i,a]=(0,M.useState)(!1),[o,c]=(0,M.useState)(void 0);return(0,N.jsxs)(u,{direction:`column`,gap:`var(--standard)`,alignItems:`center`,children:[(0,N.jsx)(s,{variant:`body-sm-reg`,color:`secondary`,children:`Click the "+" indicator to open an empty bubble, then send a message to create a thread.`}),(0,N.jsxs)(`div`,{className:A.indicatorWrapper,children:[(0,N.jsx)(w,{type:`placeholder`,onClick:()=>t(e=>!e)}),e&&(0,N.jsx)(`div`,{className:A.bubbleWrapper,children:(0,N.jsx)(f,{comment:o,currentUser:B,referenceTag:`Resource allocation`,value:n,onValueChange:r,actionRequired:i,onActionRequiredChange:a,onSend:(e,t)=>{c(n=>{let r={id:`msg-${String(Date.now())}`,author:B,content:e,createdAt:new Date};return n?{...n,messages:[...n.messages,r]}:(a(t),{id:`comment-1`,numericId:42,author:B,createdAt:new Date,isResolved:!1,messages:[{...r,isInitialMessage:!0}]})}),r(``)},onClose:()=>{c(void 0),r(``),a(!1),t(!1)},onResolve:P(),onForward:P(),onMarkUnread:P(),onCopyLink:P(),onDelete:P()})})]})]})}},U={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:function(){let[e,t]=(0,M.useState)(!1),[n,r]=(0,M.useState)(``),[i,a]=(0,M.useState)(!1),[o,c]=(0,M.useState)(V());return(0,N.jsxs)(u,{direction:`column`,gap:`var(--standard)`,alignItems:`center`,children:[(0,N.jsx)(s,{variant:`body-sm-reg`,color:`secondary`,children:`Click the avatar indicator to view the existing thread and add replies.`}),(0,N.jsxs)(`div`,{className:A.indicatorWrapper,children:[(0,N.jsx)(w,{type:`default`,avatarSrc:o.author.avatarSrc,onClick:()=>t(e=>!e)}),e&&(0,N.jsx)(`div`,{className:A.bubbleWrapper,children:(0,N.jsx)(f,{comment:o,currentUser:B,referenceTag:`Resource allocation`,value:n,onValueChange:r,actionRequired:i,onActionRequiredChange:a,onSend:e=>{c(t=>({...t,messages:[...t.messages,{id:`msg-${String(Date.now())}`,author:B,content:e,createdAt:new Date}]})),r(``)},onClose:()=>t(!1),onResolve:P(),onForward:P(),onMarkUnread:P(),onCopyLink:P(),onDelete:P()})})]})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'default',
    avatarSrc: 'https://i.pravatar.cc/40?img=1'
  }
}`,...I.parameters?.docs?.source},description:{story:`Filled pin showing the avatar of an existing comment's author. Use when an entity
already has a comment thread and no action is pending.`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'placeholder'
  }
}`,...L.parameters?.docs?.source},description:{story:`Dashed "+" affordance inviting the user to start a new comment. Typically revealed
on hover over an entity that supports comments.`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'action-required',
    avatarSrc: 'https://i.pravatar.cc/40?img=2'
  }
}`,...R.parameters?.docs?.source},description:{story:`Emphasized pin for comments flagged as requiring action, so they stand out from
regular threads.`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack gap="var(--2xl)" alignItems="flex-start">
            <DsStack direction="column" gap="var(--sm)" alignItems="center">
                <DsTypography variant="body-sm-md" color="secondary">
                    Placeholder
                </DsTypography>
                <DsCommentIndicator type="placeholder" onClick={fn()} />
            </DsStack>
            <DsStack direction="column" gap="var(--sm)" alignItems="center">
                <DsTypography variant="body-sm-md" color="secondary">
                    Default
                </DsTypography>
                <DsCommentIndicator type="default" avatarSrc="https://i.pravatar.cc/40?img=1" onClick={fn()} />
            </DsStack>
            <DsStack direction="column" gap="var(--sm)" alignItems="center">
                <DsTypography variant="body-sm-md" color="secondary">
                    Action required
                </DsTypography>
                <DsCommentIndicator type="action-required" avatarSrc="https://i.pravatar.cc/40?img=2" onClick={fn()} />
            </DsStack>
        </DsStack>
}`,...z.parameters?.docs?.source},description:{story:`All indicator types side by side for visual comparison.`,...z.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: function WithEmptyBubbleStory() {
    const [isOpen, setIsOpen] = useState(false);
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
            numericId: 42,
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
    const handleClose = () => {
      setComment(undefined);
      setValue('');
      setActionRequired(false);
      setIsOpen(false);
    };
    return <DsStack direction="column" gap="var(--standard)" alignItems="center">
                <DsTypography variant="body-sm-reg" color="secondary">
                    {'Click the "+" indicator to open an empty bubble, then send a message to create a thread.'}
                </DsTypography>
                <div className={styles.indicatorWrapper}>
                    <DsCommentIndicator type="placeholder" onClick={() => setIsOpen(open => !open)} />
                    {isOpen && <div className={styles.bubbleWrapper}>
                            <DsCommentBubble comment={comment} currentUser={currentUser} referenceTag="Resource allocation" value={value} onValueChange={setValue} actionRequired={actionRequired} onActionRequiredChange={setActionRequired} onSend={handleSend} onClose={handleClose} onResolve={fn()} onForward={fn()} onMarkUnread={fn()} onCopyLink={fn()} onDelete={fn()} />
                        </div>}
                </div>
            </DsStack>;
  }
}`,...H.parameters?.docs?.source},description:{story:`Integration demo: a placeholder indicator opens an empty bubble on click, then the
bubble transitions from typing to a live thread as messages are sent.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: function WithExistingCommentsStory() {
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');
    const [actionRequired, setActionRequired] = useState(false);
    const [comment, setComment] = useState(createMockComment());
    const handleSend = (content: string) => {
      setComment(prev => ({
        ...prev,
        messages: [...prev.messages, {
          id: \`msg-\${String(Date.now())}\`,
          author: currentUser,
          content,
          createdAt: new Date()
        }]
      }));
      setValue('');
    };
    return <DsStack direction="column" gap="var(--standard)" alignItems="center">
                <DsTypography variant="body-sm-reg" color="secondary">
                    Click the avatar indicator to view the existing thread and add replies.
                </DsTypography>
                <div className={styles.indicatorWrapper}>
                    <DsCommentIndicator type="default" avatarSrc={comment.author.avatarSrc} onClick={() => setIsOpen(open => !open)} />
                    {isOpen && <div className={styles.bubbleWrapper}>
                            <DsCommentBubble comment={comment} currentUser={currentUser} referenceTag="Resource allocation" value={value} onValueChange={setValue} actionRequired={actionRequired} onActionRequiredChange={setActionRequired} onSend={handleSend} onClose={() => setIsOpen(false)} onResolve={fn()} onForward={fn()} onMarkUnread={fn()} onCopyLink={fn()} onDelete={fn()} />
                        </div>}
                </div>
            </DsStack>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Integration demo: a default indicator opens a bubble with an existing thread on
click. Replies append to the thread live.`,...U.parameters?.docs?.description}}},W=[`Default`,`Placeholder`,`ActionRequired`,`AllTypes`,`WithEmptyBubble`,`WithExistingComments`]}))();export{R as ActionRequired,z as AllTypes,I as Default,L as Placeholder,H as WithEmptyBubble,U as WithExistingComments,W as __namedExportsOrder,F as default};