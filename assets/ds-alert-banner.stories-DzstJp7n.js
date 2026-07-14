import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Z as n,k as r}from"./iframe-Ba-R9UL9.js";import{t as i}from"./compiler-runtime-pFZSWOm-.js";import{t as a}from"./classnames-Dm_LJ4P4.js";import{t as o}from"./ds-icon-CkRS-0R9.js";import{t as s}from"./ds-icon-BSzT40CK.js";import{n as c,t as l}from"./ds-typography-B5pA-nEq.js";import{n as u,t as d}from"./ds-button-v3-C07gnPAc.js";import{n as f,t as p}from"./ds-stack-k41BDm1T.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,ee=e((()=>{m=`_alertBanner_wpu4d_5`,h=`_inline_wpu4d_5`,g=`_title_wpu4d_17`,_=`_global_wpu4d_20`,v=`_description_wpu4d_30`,y=`_hidden_wpu4d_36`,b=`_icon_wpu4d_39`,x=`_actions_wpu4d_51`,S=`_closeButton_wpu4d_56`,C=`_infoNeutral_wpu4d_61`,w=`_infoBlue_wpu4d_68`,T=`_warning_wpu4d_75`,E=`_error_wpu4d_82`,D=`_success_wpu4d_89`,O={alertBanner:m,inline:h,title:g,global:_,description:v,hidden:y,icon:b,actions:x,closeButton:S,infoNeutral:C,infoBlue:w,warning:T,error:E,success:D}})),k,A,j,M,N,P,F,te=e((()=>{k=i(),A=t(a(),1),ee(),s(),l(),j=r(),M=e=>{let t=(0,k.c)(20),{open:n,onOpenChange:r,inline:i,variant:a,icon:s,closable:c,className:l,style:u,children:d}=e,f=i===void 0?!1:i,p=a===void 0?`info-blue`:a,m=c===void 0?!1:c,h;t[0]===u?h=t[1]:(h=u===void 0?{}:u,t[0]=u,t[1]=h);let g=h,_;if(t[2]!==l||t[3]!==f||t[4]!==n||t[5]!==p){let e={"info-neutral":O.infoNeutral,"info-blue":O.infoBlue,warning:O.warning,error:O.error,success:O.success}[p];_=(0,A.default)(O.alertBanner,f&&O.inline,!f&&O.global,e,{[O.hidden]:!n},l),t[2]=l,t[3]=f,t[4]=n,t[5]=p,t[6]=_}else _=t[6];let v=_,y;t[7]===r?y=t[8]:(y=()=>{r(!1)},t[7]=r,t[8]=y);let b=y;if(!n)return null;let x;t[9]===s?x=t[10]:(x=s&&(0,j.jsx)(o,{className:O.icon,icon:s,size:`small`,filled:!0}),t[9]=s,t[10]=x);let S;t[11]!==m||t[12]!==b?(S=m&&(0,j.jsx)(`button`,{type:`button`,className:O.closeButton,onClick:b,"aria-label":`Close alert`,"data-close":!0,children:(0,j.jsx)(o,{icon:`close`,size:`small`})}),t[11]=m,t[12]=b,t[13]=S):S=t[13];let C;return t[14]!==v||t[15]!==d||t[16]!==g||t[17]!==x||t[18]!==S?(C=(0,j.jsxs)(`div`,{className:v,style:g,children:[x,d,S]}),t[14]=v,t[15]=d,t[16]=g,t[17]=x,t[18]=S,t[19]=C):C=t[19],C},N=e=>{let t=(0,k.c)(6),{style:n,className:r,children:i}=e,a;t[0]===r?a=t[1]:(a=(0,A.default)(O.title,r),t[0]=r,t[1]=a);let o;return t[2]!==i||t[3]!==n||t[4]!==a?(o=(0,j.jsx)(c,{style:n,className:a,variant:`body-md-md`,children:i}),t[2]=i,t[3]=n,t[4]=a,t[5]=o):o=t[5],o},P=e=>{let t=(0,k.c)(6),{style:n,className:r,children:i}=e,a;t[0]===r?a=t[1]:(a=(0,A.default)(O.description,r),t[0]=r,t[1]=a);let o;return t[2]!==i||t[3]!==n||t[4]!==a?(o=(0,j.jsx)(c,{style:n,className:a,variant:`body-sm-reg`,children:i}),t[2]=i,t[3]=n,t[4]=a,t[5]=o):o=t[5],o},F=e=>{let t=(0,k.c)(6),{style:n,className:r,children:i}=e,a;t[0]===r?a=t[1]:(a=(0,A.default)(O.actions,r),t[0]=r,t[1]=a);let o;return t[2]!==i||t[3]!==n||t[4]!==a?(o=(0,j.jsx)(`div`,{style:n,className:a,children:i}),t[2]=i,t[3]=n,t[4]=a,t[5]=o):o=t[5],o},N.displayName=`DsAlertBanner.Title`,P.displayName=`DsAlertBanner.Body`,F.displayName=`DsAlertBanner.Actions`,M.Title=N,M.Body=P,M.Actions=F,M.displayName=`DsAlertBanner`})),I,ne=e((()=>{I=[`info-neutral`,`info-blue`,`warning`,`error`,`success`]})),L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{L=t(n(),1),te(),ne(),u(),f(),R=r(),{fn:z}=__STORYBOOK_MODULE_TEST__,B={title:`Components/AlertBanner`,component:M,parameters:{layout:`padded`},args:{open:!0,onOpenChange:z()},argTypes:{variant:{control:`select`,options:I},inline:{control:`boolean`},closable:{control:`boolean`},open:{control:`boolean`},icon:{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},V={"info-neutral":`info`,"info-blue":`info`,warning:`warning`,error:`error`,success:`check_circle`},H={args:{inline:!0,variant:`info-blue`,icon:`info`},render:e=>(0,R.jsxs)(M,{...e,children:[(0,R.jsx)(M.Title,{children:`Information`}),(0,R.jsx)(M.Body,{children:`This is a blue informational alert message.`})]})},U={args:{inline:!0,variant:`info-neutral`,icon:`info`},render:e=>(0,R.jsxs)(M,{...e,children:[(0,R.jsx)(M.Title,{children:`Information`}),(0,R.jsx)(M.Body,{children:`This is an informational alert message.`})]})},W={args:{inline:!0,variant:`warning`,icon:`warning`},render:e=>(0,R.jsxs)(M,{...e,children:[(0,R.jsx)(M.Title,{children:`Warning`}),(0,R.jsx)(M.Body,{children:`This is a warning alert message. Please pay attention.`})]})},G={args:{inline:!0,variant:`error`,icon:`error`},render:e=>(0,R.jsxs)(M,{...e,children:[(0,R.jsx)(M.Title,{children:`Error`}),(0,R.jsx)(M.Body,{children:`Something went wrong. Please try again.`})]})},K={args:{inline:!0,variant:`success`,icon:`check_circle`},render:e=>(0,R.jsxs)(M,{...e,children:[(0,R.jsx)(M.Title,{children:`Success`}),(0,R.jsx)(M.Body,{children:`Your action was completed successfully!`})]})},q={args:{inline:!1,variant:`info-blue`,icon:`info`,closable:!0},render:e=>(0,R.jsx)(M,{...e,children:(0,R.jsx)(M.Body,{children:`A new version is available. Refresh to update.`})})},J={args:{inline:!0,variant:`info-neutral`,icon:`info`,closable:!0},render:e=>(0,R.jsxs)(M,{...e,children:[(0,R.jsx)(M.Title,{children:`Dismissible`}),(0,R.jsx)(M.Body,{children:`You can close this banner with the button on the right.`})]})},Y={args:{inline:!0,variant:`warning`,icon:`warning`},render:e=>(0,R.jsxs)(M,{...e,children:[(0,R.jsx)(M.Title,{children:`Attention needed`}),(0,R.jsx)(M.Body,{children:`You successfully read this important alert message. Choose how you want to proceed.`}),(0,R.jsxs)(M.Actions,{children:[(0,R.jsx)(d,{color:`error`,variant:`primary`,size:`small`,children:`Proceed`}),(0,R.jsx)(d,{variant:`secondary`,size:`small`,children:`Skip`})]})]})},X={args:{inline:!0,variant:`error`,icon:`error`,closable:!0},render:e=>(0,R.jsx)(M,{...e,children:(0,R.jsx)(M.Body,{children:`Something went wrong. Please try again.`})})},Z={parameters:{docs:{source:{type:`code`}}},render:e=>{let[t,n]=(0,L.useState)(!1);return(0,R.jsxs)(p,{direction:`column`,alignItems:`flex-start`,gap:`var(--standard)`,width:`400px`,children:[(0,R.jsx)(d,{variant:`secondary`,size:`small`,onClick:()=>n(!0),children:`Show alert banner`}),(0,R.jsxs)(M,{...e,open:t,onOpenChange:n,children:[(0,R.jsx)(M.Title,{children:`Attention needed`}),(0,R.jsx)(M.Body,{children:`Close this banner and use the button to bring it back.`})]})]})},args:{inline:!0,variant:`warning`,icon:`warning`,closable:!0}},Q={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},args:{inline:!0,closable:!0},render:e=>(0,R.jsx)(p,{direction:`column`,alignItems:`flex-start`,gap:`var(--standard)`,width:`400px`,children:I.map(t=>(0,R.jsxs)(M,{...e,variant:t,icon:V[t],children:[(0,R.jsx)(M.Title,{children:t}),(0,R.jsxs)(M.Body,{children:[`Alert banner using the `,t,` variant.`]})]},t))})},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    variant: 'info-blue',
    icon: 'info'
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Title>Information</DsAlertBanner.Title>
            <DsAlertBanner.Body>This is a blue informational alert message.</DsAlertBanner.Body>
        </DsAlertBanner>
}`,...H.parameters?.docs?.source},description:{story:"The default inline banner: a bordered card that sits in normal document flow.\nCompose the message from `DsAlertBanner.Title` and `DsAlertBanner.Body`.",...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    variant: 'info-neutral',
    icon: 'info'
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Title>Information</DsAlertBanner.Title>
            <DsAlertBanner.Body>This is an informational alert message.</DsAlertBanner.Body>
        </DsAlertBanner>
}`,...U.parameters?.docs?.source},description:{story:`Low-emphasis informational tone. Use for neutral, non-urgent context that
should not compete with the primary content.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    variant: 'warning',
    icon: 'warning'
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Title>Warning</DsAlertBanner.Title>
            <DsAlertBanner.Body>This is a warning alert message. Please pay attention.</DsAlertBanner.Body>
        </DsAlertBanner>
}`,...W.parameters?.docs?.source},description:{story:`Use to flag something that needs attention but is not yet a failure — for
example an action with side effects or a soon-to-expire state.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    variant: 'error',
    icon: 'error'
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Title>Error</DsAlertBanner.Title>
            <DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
        </DsAlertBanner>
}`,...G.parameters?.docs?.source},description:{story:`Use for failures the user must resolve, such as a rejected submission or a
blocked operation.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    variant: 'success',
    icon: 'check_circle'
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Title>Success</DsAlertBanner.Title>
            <DsAlertBanner.Body>Your action was completed successfully!</DsAlertBanner.Body>
        </DsAlertBanner>
}`,...K.parameters?.docs?.source},description:{story:`Confirms that an action completed. Reserve for positive, terminal feedback so
the success tone stays meaningful.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    inline: false,
    variant: 'info-blue',
    icon: 'info',
    closable: true
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Body>A new version is available. Refresh to update.</DsAlertBanner.Body>
        </DsAlertBanner>
}`,...q.parameters?.docs?.source},description:{story:"Global layout (`inline: false`) is a full-width bar designed for the top of a\npage. The title is hidden and the body truncates, so lead with a concise\n`DsAlertBanner.Body`.",...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    variant: 'info-neutral',
    icon: 'info',
    closable: true
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Title>Dismissible</DsAlertBanner.Title>
            <DsAlertBanner.Body>You can close this banner with the button on the right.</DsAlertBanner.Body>
        </DsAlertBanner>
}`,...J.parameters?.docs?.source},description:{story:"Adding `closable` renders a close button that fires `onOpenChange(false)`.\nDrive the `open` prop from your own state to actually dismiss the banner (see\nthe Controlled story).",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    variant: 'warning',
    icon: 'warning'
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
            <DsAlertBanner.Body>
                You successfully read this important alert message. Choose how you want to proceed.
            </DsAlertBanner.Body>
            <DsAlertBanner.Actions>
                <DsButtonV3 color="error" variant="primary" size="small">
                    Proceed
                </DsButtonV3>
                <DsButtonV3 variant="secondary" size="small">
                    Skip
                </DsButtonV3>
            </DsAlertBanner.Actions>
        </DsAlertBanner>
}`,...Y.parameters?.docs?.source},description:{story:"Attach follow-up actions with `DsAlertBanner.Actions`. Keep the primary action\nfirst and limit the count so the banner stays scannable.",...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    inline: true,
    variant: 'error',
    icon: 'error',
    closable: true
  },
  render: args => <DsAlertBanner {...args}>
            <DsAlertBanner.Body>Something went wrong. Please try again.</DsAlertBanner.Body>
        </DsAlertBanner>
}`,...X.parameters?.docs?.source},description:{story:"Without a `Title`, the inline layout vertically centers the icon against a\nsingle-line body. Use for short, self-explanatory messages.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: args => {
    const [open, setOpen] = useState(false);
    return <DsStack direction="column" alignItems="flex-start" gap="var(--standard)" width="400px">
                <DsButtonV3 variant="secondary" size="small" onClick={() => setOpen(true)}>
                    Show alert banner
                </DsButtonV3>
                <DsAlertBanner {...args} open={open} onOpenChange={setOpen}>
                    <DsAlertBanner.Title>Attention needed</DsAlertBanner.Title>
                    <DsAlertBanner.Body>Close this banner and use the button to bring it back.</DsAlertBanner.Body>
                </DsAlertBanner>
            </DsStack>;
  },
  args: {
    inline: true,
    variant: 'warning',
    icon: 'warning',
    closable: true
  }
}`,...Z.parameters?.docs?.source},description:{story:"`open` / `onOpenChange` form a controlled pair. Wire them to local state so the\nclose button hides the banner and a trigger can bring it back.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  args: {
    inline: true,
    closable: true
  },
  render: args => <DsStack direction="column" alignItems="flex-start" gap="var(--standard)" width="400px">
            {alertBannerVariants.map(variant => <DsAlertBanner key={variant} {...args} variant={variant} icon={variantIcons[variant]}>
                    <DsAlertBanner.Title>{variant}</DsAlertBanner.Title>
                    <DsAlertBanner.Body>Alert banner using the {variant} variant.</DsAlertBanner.Body>
                </DsAlertBanner>)}
        </DsStack>
}`,...Q.parameters?.docs?.source},description:{story:`Visual reference of every variant in the inline layout. Not a usage example —
pick a single variant per banner in product code.`,...Q.parameters?.docs?.description}}},$=[`Default`,`InfoNeutral`,`Warning`,`Error`,`Success`,`Global`,`Closable`,`WithActions`,`WithoutTitle`,`Controlled`,`AllVariants`]}))();export{Q as AllVariants,J as Closable,Z as Controlled,H as Default,G as Error,q as Global,U as InfoNeutral,K as Success,W as Warning,Y as WithActions,X as WithoutTitle,$ as __namedExportsOrder,B as default};