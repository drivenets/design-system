import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i}from"./classnames-Cm4Wq5Eu.js";import{n as a,t as o}from"./ds-icon-BRZFUTMz.js";import{i as s,o as c,r as l,t as u}from"./dist-IFgom-S8.js";import{n as d,t as f}from"./ds-typography-DrL2wWa5.js";import{n as p,t as m}from"./ds-stack-GU0hZWeR.js";import{n as h,t as g}from"./ds-button-Cokr7gO2.js";var _,v,y,b=t((()=>{_=`_actions_hdgi1_44`,v=`_icon_hdgi1_71`,y={"slide-in":`_slide-in_hdgi1_1`,"fade-out":`_fade-out_hdgi1_1`,actions:_,icon:v}}));function x(e){return(0,C.jsx)(T,{...e})}var S,C,w,T,E,D=t((()=>{S=i(),u(),b(),o(),f(),C=r(),w={success:`check_circle`,info:`info`,warning:`error`,error:`cancel`},T=e=>{let t=(0,S.c)(19),{style:n,className:r,variant:i,title:o,description:s,onDismiss:c,actions:u}=e,f=w[i===void 0?`info`:i],p;t[0]===f?p=t[1]:(p=(0,C.jsx)(a,{icon:f,size:`small`,filled:!0,className:y.icon}),t[0]=f,t[1]=p);let m;t[2]===o?m=t[3]:(m=o&&(0,C.jsx)(d,{variant:`body-sm-md`,asChild:!0,children:(0,C.jsx)(l.Title,{children:o})}),t[2]=o,t[3]=m);let h;t[4]===s?h=t[5]:(h=s&&(0,C.jsx)(d,{variant:`body-sm-reg`,asChild:!0,children:(0,C.jsx)(l.Description,{children:s})}),t[4]=s,t[5]=h);let g;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,C.jsx)(a,{icon:`close`,size:`small`}),t[6]=g):g=t[6];let _;t[7]===c?_=t[8]:(_=(0,C.jsx)(l.CloseTrigger,{onClick:c,children:g}),t[7]=c,t[8]=_);let v;t[9]===u?v=t[10]:(v=u&&(0,C.jsx)(`div`,{className:y.actions,children:u}),t[9]=u,t[10]=v);let b;return t[11]!==r||t[12]!==n||t[13]!==p||t[14]!==m||t[15]!==h||t[16]!==_||t[17]!==v?(b=(0,C.jsxs)(l.Root,{style:n,className:r,children:[p,m,h,_,v]}),t[11]=r,t[12]=n,t[13]=p,t[14]=m,t[15]=h,t[16]=_,t[17]=v,t[18]=b):b=t[18],b},E=e=>{let t=(0,S.c)(2),{toaster:n}=e,r;return t[0]===n?r=t[1]:(r=(0,C.jsx)(s,{toaster:n,children:x}),t[0]=n,t[1]=r),r},T.displayName=`DsToast`,E.displayName=`DsToastGroup`})),O,k,A,j,M,N,P,F=t((()=>{O=i(),k=e(n(),1),u(),D(),A=r(),j=(0,k.createContext)(null),M=e=>t=>e.create({...t,type:t.variant,duration:t.persistent?1/0:t.duration||6e3}),N=e=>{let t=(0,O.c)(17),{children:n,max:r}=e,i=r===void 0?3:r,a,o;t[0]===i?(a=t[1],o=t[2]):(o=c({placement:`top`,gap:24,max:i}),a=M(o),t[0]=i,t[1]=a,t[2]=o);let s;t[3]===o?s=t[4]:(s=()=>o.dismiss(),t[3]=o,t[4]=s);let l;t[5]!==a||t[6]!==s||t[7]!==o.dismiss||t[8]!==o.getCount||t[9]!==o.getVisibleToasts?(l={createToast:a,dismissToast:o.dismiss,dismissAllToasts:s,getToasts:o.getVisibleToasts,getToastsCount:o.getCount},t[5]=a,t[6]=s,t[7]=o.dismiss,t[8]=o.getCount,t[9]=o.getVisibleToasts,t[10]=l):l=t[10];let u=l,d;t[11]===o?d=t[12]:(d=(0,A.jsx)(E,{toaster:o}),t[11]=o,t[12]=d);let f;return t[13]!==n||t[14]!==u||t[15]!==d?(f=(0,A.jsxs)(j.Provider,{value:u,children:[n,d]}),t[13]=n,t[14]=u,t[15]=d,t[16]=f):f=t[16],f},P=()=>{let e=(0,k.useContext)(j);if(!e)throw Error(`useToast must be used within a ToastProvider`);return e},N.displayName=`DsToastProvider`})),I,L=t((()=>{I=[`info`,`success`,`warning`,`error`]})),R,z,B,V,H,U,W,G,K,q,J,Y,X;t((()=>{R=i(),D(),F(),L(),g(),p(),z=r(),B={title:`Components/Toast`,component:T,parameters:{layout:`centered`,docs:{description:{component:"Temporary, non-blocking messages surfaced through `DsToastProvider` and the `useToaster` hook. Toasts are created imperatively from an event handler, so every example wraps a trigger in the provider."}}},argTypes:{variant:{control:{type:`select`},options:I}}},V={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(2),{createToast:t}=P(),n;return e[0]===t?n=e[1]:(n=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`success`,title:`Success!`,description:`Your action was completed successfully.`}),children:`Show success toast`}),e[0]=t,e[1]=n),n},{})})},H={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(2),{createToast:t}=P(),n;return e[0]===t?n=e[1]:(n=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Information`,description:`Here is some helpful information for you.`}),children:`Show info toast`}),e[0]=t,e[1]=n),n},{})})},U={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(2),{createToast:t}=P(),n;return e[0]===t?n=e[1]:(n=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Warning`,description:`Please be aware of this important notice.`}),children:`Show warning toast`}),e[0]=t,e[1]=n),n},{})})},W={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(2),{createToast:t}=P(),n;return e[0]===t?n=e[1]:(n=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`,persistent:!0}),children:`Show error toast`}),e[0]=t,e[1]=n),n},{})})},G={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(2),{createToast:t}=P(),n;return e[0]===t?n=e[1]:(n=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,description:`Something went wrong. Please try again.`}),children:`Show toast without title`}),e[0]=t,e[1]=n),n},{})})},K={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(3),{createToast:t,dismissToast:n}=P(),r;return e[0]!==t||e[1]!==n?(r=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:()=>{let e=t({variant:`warning`,title:`File upload failed`,description:`Your file could not be uploaded.`,persistent:!0,actions:(0,z.jsxs)(m,{direction:`row`,gap:`var(--xs)`,justifyContent:`flex-end`,children:[(0,z.jsx)(h,{design:`v1.2`,variant:`ghost`,onClick:()=>n(e),children:`Abort`}),(0,z.jsx)(h,{design:`v1.2`,variant:`danger`,onClick:()=>n(e),children:`Re-try`})]})})},children:`Show toast with actions`}),e[0]=t,e[1]=n,e[2]=r):r=e[2],r},{})})},q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(2),{createToast:t}=P(),n;return e[0]===t?n=e[1]:(n=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`warning`,title:`Important notice`,description:`This is a longer message that demonstrates how the toast handles extended content. The text wraps and stays readable while remaining within the toast boundaries.`}),children:`Show long content toast`}),e[0]=t,e[1]=n),n},{})})},J={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(2),{createToast:t}=P(),n;return e[0]===t?n=e[1]:(n=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:()=>t({variant:`info`,title:`Sync in progress`,description:`This toast stays until you close it.`,persistent:!0}),children:`Show persistent toast`}),e[0]=t,e[1]=n),n},{})})},Y={parameters:{docs:{source:{type:`code`}}},render:()=>(0,z.jsx)(N,{children:(0,z.jsx)(()=>{let e=(0,R.c)(9),{createToast:t,dismissAllToasts:n}=P(),r;e[0]===t?r=e[1]:(r=()=>{t({variant:`success`,title:`First toast`,description:`This is the first message.`}),t({variant:`info`,title:`Second toast`,description:`This is the second message.`}),t({variant:`warning`,title:`Third toast`,description:`This is the third message.`})},e[0]=t,e[1]=r);let i=r,a;e[2]===i?a=e[3]:(a=(0,z.jsx)(h,{design:`v1.2`,variant:`filled`,onClick:i,children:`Show multiple toasts`}),e[2]=i,e[3]=a);let o;e[4]===n?o=e[5]:(o=(0,z.jsx)(h,{design:`v1.2`,variant:`ghost`,onClick:()=>n(),children:`Dismiss all`}),e[4]=n,e[5]=o);let s;return e[6]!==a||e[7]!==o?(s=(0,z.jsxs)(m,{direction:`row`,gap:`var(--xs)`,children:[a,o]}),e[6]=a,e[7]=o,e[8]=s):s=e[8],s},{})})},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'success',
        title: 'Success!',
        description: 'Your action was completed successfully.'
      })}>
                    Show success toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...V.parameters?.docs?.source},description:{story:`Confirms an action completed. Auto-dismisses after the default duration.`,...V.parameters?.docs?.description}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'info',
        title: 'Information',
        description: 'Here is some helpful information for you.'
      })}>
                    Show info toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...H.parameters?.docs?.source},description:{story:`Neutral, informational message.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'warning',
        title: 'Warning',
        description: 'Please be aware of this important notice.'
      })}>
                    Show warning toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...U.parameters?.docs?.source},description:{story:`Draws attention to something that may need action but is not an error.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'error',
        title: 'Error',
        description: 'Something went wrong. Please try again.',
        persistent: true
      })}>
                    Show error toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...W.parameters?.docs?.source},description:{story:`Reports a failure. Errors are usually persistent so the user can read and act on them.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'warning',
        description: 'Something went wrong. Please try again.'
      })}>
                    Show toast without title
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...G.parameters?.docs?.source},description:{story:"Omit `title` for a compact, single-line toast that shows only the description.",...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast,
        dismissToast
      } = useToaster();
      const showToast = () => {
        const id = createToast({
          variant: 'warning',
          title: 'File upload failed',
          description: 'Your file could not be uploaded.',
          persistent: true,
          actions: <DsStack direction="row" gap="var(--xs)" justifyContent="flex-end">
                            <DsButton design="v1.2" variant="ghost" onClick={() => dismissToast(id)}>
                                Abort
                            </DsButton>
                            <DsButton design="v1.2" variant="danger" onClick={() => dismissToast(id)}>
                                Re-try
                            </DsButton>
                        </DsStack>
        });
      };
      return <DsButton design="v1.2" variant="filled" onClick={showToast}>
                    Show toast with actions
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...K.parameters?.docs?.source},description:{story:"Pass `actions` to render buttons inside the toast. Action handlers typically dismiss the\ntoast with `dismissToast(id)` — pair actions with `persistent` so the toast waits for a choice.",...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'warning',
        title: 'Important notice',
        description: 'This is a longer message that demonstrates how the toast handles extended content. ' + 'The text wraps and stays readable while remaining within the toast boundaries.'
      })}>
                    Show long content toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...q.parameters?.docs?.source},description:{story:`Long descriptions wrap and the toast grows to fit while staying within its max width.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast
      } = useToaster();
      return <DsButton design="v1.2" variant="filled" onClick={() => createToast({
        variant: 'info',
        title: 'Sync in progress',
        description: 'This toast stays until you close it.',
        persistent: true
      })}>
                    Show persistent toast
                </DsButton>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...J.parameters?.docs?.source},description:{story:"Set `persistent` to keep a toast open until the user dismisses it. Persistent toasts never\nauto-dismiss, so they cannot also set `duration`.",...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const ToastTrigger = () => {
      const {
        createToast,
        dismissAllToasts
      } = useToaster();
      const showToasts = () => {
        createToast({
          variant: 'success',
          title: 'First toast',
          description: 'This is the first message.'
        });
        createToast({
          variant: 'info',
          title: 'Second toast',
          description: 'This is the second message.'
        });
        createToast({
          variant: 'warning',
          title: 'Third toast',
          description: 'This is the third message.'
        });
      };
      return <DsStack direction="row" gap="var(--xs)">
                    <DsButton design="v1.2" variant="filled" onClick={showToasts}>
                        Show multiple toasts
                    </DsButton>
                    <DsButton design="v1.2" variant="ghost" onClick={() => dismissAllToasts()}>
                        Dismiss all
                    </DsButton>
                </DsStack>;
    };
    return <DsToastProvider>
                <ToastTrigger />
            </DsToastProvider>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Toasts stack up to the provider's `max` (default 3). `dismissAllToasts` clears them at once.",...Y.parameters?.docs?.description}}},X=[`Success`,`Info`,`Warning`,`Error`,`NoTitle`,`WithActions`,`LongContent`,`Persistent`,`MultipleToasts`]}))();export{W as Error,H as Info,q as LongContent,Y as MultipleToasts,G as NoTitle,J as Persistent,V as Success,U as Warning,K as WithActions,X as __namedExportsOrder,B as default};