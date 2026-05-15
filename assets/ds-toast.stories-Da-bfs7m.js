import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-BmCiU32S.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./compiler-runtime-BShUMaY9.js";import{t as a}from"./ds-icon-BlnBCw-h.js";import{t as o}from"./ds-icon-B64iV1-z.js";import{i as s,n as c,r as l,t as u}from"./dist-CBkhwMQ5.js";import{n as d,t as f}from"./ds-typography-D4JcJBSg.js";import{n as p,t as m}from"./ds-button-I-aAoN_p.js";var h,g,_,v=t((()=>{h=`_actions_hdgi1_44`,g=`_icon_hdgi1_71`,_={"slide-in":`_slide-in_hdgi1_1`,"fade-out":`_fade-out_hdgi1_1`,actions:h,icon:g}}));function y(e){return(0,x.jsx)(C,{...e})}var b,x,S,C,w,T=t((()=>{b=i(),u(),v(),o(),f(),x=r(),S={success:`check_circle`,info:`info`,warning:`error`,error:`cancel`},C=e=>{let t=(0,b.c)(19),{style:n,className:r,variant:i,title:o,description:s,onDismiss:l,actions:u}=e,f=S[i===void 0?`info`:i],p;t[0]===f?p=t[1]:(p=(0,x.jsx)(a,{icon:f,size:`small`,filled:!0,className:_.icon}),t[0]=f,t[1]=p);let m;t[2]===o?m=t[3]:(m=o&&(0,x.jsx)(d,{variant:`body-sm-md`,asChild:!0,children:(0,x.jsx)(c.Title,{children:o})}),t[2]=o,t[3]=m);let h;t[4]===s?h=t[5]:(h=s&&(0,x.jsx)(d,{variant:`body-sm-reg`,asChild:!0,children:(0,x.jsx)(c.Description,{children:s})}),t[4]=s,t[5]=h);let g;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(g=(0,x.jsx)(a,{icon:`close`,size:`small`}),t[6]=g):g=t[6];let v;t[7]===l?v=t[8]:(v=(0,x.jsx)(c.CloseTrigger,{onClick:l,children:g}),t[7]=l,t[8]=v);let y;t[9]===u?y=t[10]:(y=u&&(0,x.jsx)(`div`,{className:_.actions,children:u}),t[9]=u,t[10]=y);let C;return t[11]!==r||t[12]!==n||t[13]!==p||t[14]!==m||t[15]!==h||t[16]!==v||t[17]!==y?(C=(0,x.jsxs)(c.Root,{style:n,className:r,children:[p,m,h,v,y]}),t[11]=r,t[12]=n,t[13]=p,t[14]=m,t[15]=h,t[16]=v,t[17]=y,t[18]=C):C=t[18],C},w=e=>{let t=(0,b.c)(2),{toaster:n}=e,r;return t[0]===n?r=t[1]:(r=(0,x.jsx)(l,{toaster:n,children:y}),t[0]=n,t[1]=r),r}})),E,D,O,k,ee,A,j,te=t((()=>{E=i(),D=e(n(),1),u(),T(),O=r(),k=(0,D.createContext)(null),ee=e=>t=>e.create({...t,type:t.variant,duration:t.persistent?1/0:t.duration||6e3}),A=e=>{let t=(0,E.c)(17),{children:n,max:r}=e,i=r===void 0?3:r,a,o;t[0]===i?(a=t[1],o=t[2]):(o=s({placement:`top`,gap:24,max:i}),a=ee(o),t[0]=i,t[1]=a,t[2]=o);let c;t[3]===o?c=t[4]:(c=()=>o.dismiss(),t[3]=o,t[4]=c);let l;t[5]!==a||t[6]!==c||t[7]!==o.dismiss||t[8]!==o.getCount||t[9]!==o.getVisibleToasts?(l={createToast:a,dismissToast:o.dismiss,dismissAllToasts:c,getToasts:o.getVisibleToasts,getToastsCount:o.getCount},t[5]=a,t[6]=c,t[7]=o.dismiss,t[8]=o.getCount,t[9]=o.getVisibleToasts,t[10]=l):l=t[10];let u=l,d;t[11]===o?d=t[12]:(d=(0,O.jsx)(w,{toaster:o}),t[11]=o,t[12]=d);let f;return t[13]!==n||t[14]!==u||t[15]!==d?(f=(0,O.jsxs)(k.Provider,{value:u,children:[n,d]}),t[13]=n,t[14]=u,t[15]=d,t[16]=f):f=t[16],f},j=()=>{let e=(0,D.useContext)(k);if(!e)throw Error(`useToast must be used within a ToastProvider`);return e}})),M,ne=t((()=>{M=[`info`,`success`,`warning`,`error`]})),N,P,re,F,ie=t((()=>{N=`_demoContainer_13d69_1`,P=`_actionButtonsContainer_13d69_8`,re=`_buttonGroup_13d69_13`,F={demoContainer:N,actionButtonsContainer:P,buttonGroup:re}})),I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,ae,$,oe;t((()=>{I=i(),L=e(n(),1),T(),te(),m(),ne(),ie(),R=r(),{expect:z,userEvent:B,waitFor:V,within:H}=__STORYBOOK_MODULE_TEST__,U={title:`Components/Toast`,component:C,parameters:{layout:`centered`,docs:{description:{component:`A toast component for displaying temporary messages with different variants and actions.`}}},argTypes:{variant:{control:{type:`select`},options:M,description:`The visual variant of the toast`},title:{control:{type:`text`},description:`The title of the toast`},description:{control:{type:`text`},description:`The description text of the toast`},persistent:{control:{type:`boolean`},description:`Whether the toast should persist until manually dismissed`},duration:{control:{type:`number`},description:`Duration in milliseconds before auto-dismiss (ignored if persistent is true)`},onDismiss:{control:!1,description:`Callback function called when the toast is dismissed`}}},W=e=>{let t=(0,I.c)(19),{variant:n,title:r,description:i,persistent:a,actions:o}=e,{createToast:s}=j(),c;t[0]!==o||t[1]!==s||t[2]!==i||t[3]!==a||t[4]!==r||t[5]!==n?(c=()=>{s({variant:n,title:r,description:i,persistent:a,actions:o})},t[0]=o,t[1]=s,t[2]=i,t[3]=a,t[4]=r,t[5]=n,t[6]=c):c=t[6];let l=c,u;t[7]===n?u=t[8]:(u=n.charAt(0).toUpperCase(),t[7]=n,t[8]=u);let d=u+n.slice(1),f;t[9]===d?f=t[10]:(f=(0,R.jsxs)(`h3`,{children:[d,` Toast`]}),t[9]=d,t[10]=f);let m;t[11]===n?m=t[12]:(m=n.charAt(0).toUpperCase(),t[11]=n,t[12]=m);let h=m+n.slice(1),g;t[13]!==l||t[14]!==h?(g=(0,R.jsxs)(p,{design:`v1.2`,onClick:l,variant:`filled`,children:[`Show `,h,` Toast`]}),t[13]=l,t[14]=h,t[15]=g):g=t[15];let _;return t[16]!==f||t[17]!==g?(_=(0,R.jsxs)(`div`,{className:F.demoContainer,children:[f,g]}),t[16]=f,t[17]=g,t[18]=_):_=t[18],_},G={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(W,{variant:`success`,title:`Success!`,description:`Your action was completed successfully.`})})},K={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(W,{variant:`info`,title:`Information`,description:`Here is some helpful information for you.`})})},q={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(W,{variant:`warning`,title:`Warning`,description:`Please be aware of this important notice.`})})},J={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(W,{variant:`warning`,description:`Something went wrong. Please try again.`,persistent:!0})})},Y={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(W,{variant:`warning`,description:`Something went wrong. Please try again.`,actions:(0,R.jsx)(p,{design:`v1.2`,variant:`danger`,children:`Restart`}),persistent:!0})})},X={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(()=>{let e=(0,I.c)(11),{createToast:t,dismissToast:n}=j(),[r,i]=(0,L.useState)(),a;e[0]!==t||e[1]!==n?(a=()=>{let e=t({title:`File upload failed`,description:`Your file could not be uploaded.`,variant:`warning`,actions:(0,R.jsxs)(`div`,{className:F.actionButtonsContainer,children:[(0,R.jsx)(p,{"data-testid":`abort-button`,design:`v1.2`,onClick:()=>{i(`abort`),n(e)},variant:`ghost`,children:`Abort`}),(0,R.jsx)(p,{"data-testid":`retry-button`,design:`v1.2`,onClick:()=>{i(`retry`),n(e)},variant:`danger`,children:`Re-try`})]}),persistent:!0})},e[0]=t,e[1]=n,e[2]=a):a=e[2];let o=a,s;e[3]===Symbol.for(`react.memo_cache_sentinel`)?(s=(0,R.jsx)(`h3`,{children:`Toast with Action`}),e[3]=s):s=e[3];let c;e[4]===o?c=e[5]:(c=(0,R.jsx)(p,{"data-testid":`show-toast-button`,design:`v1.2`,onClick:o,variant:`filled`,children:`Show Toast with Actions`}),e[4]=o,e[5]=c);let l;e[6]===r?l=e[7]:(l=r&&(0,R.jsx)(`p`,{"data-testid":`action-result`,children:r}),e[6]=r,e[7]=l);let u;return e[8]!==c||e[9]!==l?(u=(0,R.jsxs)(`div`,{className:F.demoContainer,children:[s,c,l]}),e[8]=c,e[9]=l,e[10]=u):u=e[10],u},{})}),play:async({canvasElement:e})=>{let t=H(e);await B.click(t.getByTestId(`show-toast-button`)),await V(async()=>{await z(t.getByText(`File upload failed`)).toBeInTheDocument(),await z(t.getByText(`Your file could not be uploaded.`)).toBeInTheDocument()}),await z(t.getByTestId(`abort-button`)).toBeInTheDocument(),await z(t.getByTestId(`retry-button`)).toBeInTheDocument(),await B.click(t.getByTestId(`abort-button`)),await V(()=>z(t.getByTestId(`action-result`)).toHaveTextContent(`abort`)),await V(()=>z(t.queryByText(`File upload failed`)).not.toBeInTheDocument(),{timeout:1e3})}},Z={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(W,{variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`,persistent:!0})})},Q={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(()=>{let e=(0,I.c)(5),{createToast:t}=j(),n;e[0]===t?n=e[1]:(n=()=>{t({title:`Important Notice`,description:`This is a longer message that demonstrates how the toast component handles extended content. The text will wrap appropriately and maintain good readability while staying within the toast boundaries.`,variant:`warning`,duration:8e3})},e[0]=t,e[1]=n);let r=n,i;e[2]===Symbol.for(`react.memo_cache_sentinel`)?(i=(0,R.jsx)(`h3`,{children:`Long Content Toast`}),e[2]=i):i=e[2];let a;return e[3]===r?a=e[4]:(a=(0,R.jsxs)(`div`,{className:F.demoContainer,children:[i,(0,R.jsx)(p,{design:`v1.2`,onClick:r,variant:`filled`,children:`Show Long Content Toast`})]}),e[3]=r,e[4]=a),a},{})})},ae=()=>{let e=(0,I.c)(23),{createToast:t,dismissAllToasts:n,getToastsCount:r}=j(),i;e[0]===r?i=e[1]:(i=r(),e[0]=r,e[1]=i);let[a,o]=(0,L.useState)(i),s;e[2]!==t||e[3]!==r?(s=(e,n)=>{setTimeout(()=>{t(e),o(r())},n===void 0?0:n)},e[2]=t,e[3]=r,e[4]=s):s=e[4];let c=s,l;e[5]!==n||e[6]!==r?(l=()=>{n(),setTimeout(()=>{o(r())},500)},e[5]=n,e[6]=r,e[7]=l):l=e[7];let u=l,d;e[8]===c?d=e[9]:(d=()=>{c({variant:`success`,title:`First Toast`,description:`This is the first toast message.`}),c({variant:`info`,title:`Second Toast`,description:`This is the second toast message.`},500),c({variant:`warning`,title:`Third Toast`,description:`This is the third toast message.`},1e3)},e[8]=c,e[9]=d);let f=d,m;e[10]===Symbol.for(`react.memo_cache_sentinel`)?(m=(0,R.jsx)(`h3`,{children:`Multiple Toasts Demo`}),e[10]=m):m=e[10];let h;e[11]===f?h=e[12]:(h=(0,R.jsx)(p,{"data-testid":`create-multiple-button`,design:`v1.2`,onClick:f,variant:`filled`,children:`Create Multiple Toasts`}),e[11]=f,e[12]=h);let g;e[13]===u?g=e[14]:(g=(0,R.jsx)(p,{design:`v1.2`,onClick:u,variant:`ghost`,"data-testid":`dismiss-all-button`,children:`Dismiss All`}),e[13]=u,e[14]=g);let _;e[15]!==h||e[16]!==g?(_=(0,R.jsxs)(`div`,{className:F.buttonGroup,children:[h,g]}),e[15]=h,e[16]=g,e[17]=_):_=e[17];let v;e[18]===a?v=e[19]:(v=(0,R.jsx)(`span`,{"data-testid":`toast-count`,children:a}),e[18]=a,e[19]=v);let y;return e[20]!==_||e[21]!==v?(y=(0,R.jsxs)(`div`,{className:F.demoContainer,children:[m,_,`Count: `,v]}),e[20]=_,e[21]=v,e[22]=y):y=e[22],y},$={render:()=>(0,R.jsx)(A,{children:(0,R.jsx)(ae,{})}),parameters:{docs:{description:{story:`Demo showing multiple toasts stacked together with dismiss all functionality.`}}},play:async({canvasElement:e})=>{let t=H(e);await z(t.getByTestId(`toast-count`)).toHaveTextContent(`0`),await B.click(t.getByTestId(`create-multiple-button`)),await V(()=>z(t.getByText(`First Toast`)).toBeInTheDocument()),await V(()=>z(t.getByText(`Second Toast`)).toBeInTheDocument(),{timeout:1e3}),await V(()=>z(t.getByText(`Third Toast`)).toBeInTheDocument(),{timeout:1500}),await z(t.getByText(`First Toast`)).toBeInTheDocument(),await z(t.getByText(`Second Toast`)).toBeInTheDocument(),await z(t.getByText(`Third Toast`)).toBeInTheDocument(),await z(t.getByTestId(`toast-count`)).toHaveTextContent(`3`),await B.click(t.getByTestId(`dismiss-all-button`)),await V(async()=>{await z(t.queryByText(`First Toast`)).not.toBeInTheDocument(),await z(t.queryByText(`Second Toast`)).not.toBeInTheDocument(),await z(t.queryByText(`Third Toast`)).not.toBeInTheDocument()}),await V(()=>z(t.getByTestId(`toast-count`)).toHaveTextContent(`0`),{timeout:1e3})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="success" title="Success!" description="Your action was completed successfully." />
        </DsToastProvider>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="info" title="Information" description="Here is some helpful information for you." />
        </DsToastProvider>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" title="Warning" description="Please be aware of this important notice." />
        </DsToastProvider>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" description="Something went wrong. Please try again." persistent />
        </DsToastProvider>
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" description="Something went wrong. Please try again." actions={<DsButton design="v1.2" variant="danger">
                        Restart
                    </DsButton>} persistent></ToastDemo>
        </DsToastProvider>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: () => {
    const WithActionsDemo = () => {
      const {
        createToast,
        dismissToast
      } = useToaster();
      const [action, setAction] = useState<string>();
      const showToastWithAction = () => {
        const toastId = createToast({
          title: 'File upload failed',
          description: 'Your file could not be uploaded.',
          variant: 'warning',
          actions: <div className={styles.actionButtonsContainer}>
                            <DsButton data-testid="abort-button" design="v1.2" onClick={() => {
              setAction('abort');
              dismissToast(toastId);
            }} variant="ghost">
                                Abort
                            </DsButton>
                            <DsButton data-testid="retry-button" design="v1.2" onClick={() => {
              setAction('retry');
              dismissToast(toastId);
            }} variant="danger">
                                Re-try
                            </DsButton>
                        </div>,
          persistent: true // No auto-dismiss
        });
      };
      return <div className={styles.demoContainer}>
                    <h3>Toast with Action</h3>
                    <DsButton data-testid="show-toast-button" design="v1.2" onClick={showToastWithAction} variant="filled">
                        Show Toast with Actions
                    </DsButton>
                    {action && <p data-testid="action-result">{action}</p>}
                </div>;
    };
    return <DsToastProvider>
                <WithActionsDemo />
            </DsToastProvider>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Test toast creation with actions
    await userEvent.click(canvas.getByTestId('show-toast-button'));

    // Wait for toast to appear and verify content
    await waitFor(async () => {
      await expect(canvas.getByText('File upload failed')).toBeInTheDocument();
      await expect(canvas.getByText('Your file could not be uploaded.')).toBeInTheDocument();
    });

    // Verify action buttons are present
    await expect(canvas.getByTestId('abort-button')).toBeInTheDocument();
    await expect(canvas.getByTestId('retry-button')).toBeInTheDocument();

    // Test abort button functionality
    await userEvent.click(canvas.getByTestId('abort-button'));

    // Verify toast is dismissed and action is recorded
    await waitFor(() => {
      return expect(canvas.getByTestId('action-result')).toHaveTextContent('abort');
    });

    // Wait a bit to ensure toast is dismissed
    await waitFor(() => {
      return expect(canvas.queryByText('File upload failed')).not.toBeInTheDocument();
    }, {
      timeout: 1000
    });
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="error" title="Error" description="Something went wrong. Please try again." persistent // No auto-dismiss
    />
        </DsToastProvider>
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  render: () => {
    const LongContentDemo = () => {
      const {
        createToast
      } = useToaster();
      const showLongToast = () => {
        createToast({
          title: 'Important Notice',
          description: 'This is a longer message that demonstrates how the toast component handles extended content. The text will wrap appropriately and maintain good readability while staying within the toast boundaries.',
          variant: 'warning',
          duration: 8000
        });
      };
      return <div className={styles.demoContainer}>
                    <h3>Long Content Toast</h3>
                    <DsButton design="v1.2" onClick={showLongToast} variant="filled">
                        Show Long Content Toast
                    </DsButton>
                </div>;
    };
    return <DsToastProvider>
                <LongContentDemo />
            </DsToastProvider>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <MultipleToastsDemo />
        </DsToastProvider>,
  parameters: {
    docs: {
      description: {
        story: 'Demo showing multiple toasts stacked together with dismiss all functionality.'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify initial state
    await expect(canvas.getByTestId('toast-count')).toHaveTextContent('0');

    // Test creating multiple toasts
    await userEvent.click(canvas.getByTestId('create-multiple-button'));

    // First toast should appear immediately
    await waitFor(() => {
      return expect(canvas.getByText('First Toast')).toBeInTheDocument();
    });

    // Wait for second toast (500ms delay)
    await waitFor(() => {
      return expect(canvas.getByText('Second Toast')).toBeInTheDocument();
    }, {
      timeout: 1000
    });

    // Wait for third toast (1000ms delay)
    await waitFor(() => {
      return expect(canvas.getByText('Third Toast')).toBeInTheDocument();
    }, {
      timeout: 1500
    });

    // Verify all toasts are visible
    await expect(canvas.getByText('First Toast')).toBeInTheDocument();
    await expect(canvas.getByText('Second Toast')).toBeInTheDocument();
    await expect(canvas.getByText('Third Toast')).toBeInTheDocument();

    // Verify count shows 3 toasts
    await expect(canvas.getByTestId('toast-count')).toHaveTextContent('3');

    // Test dismiss all functionality
    await userEvent.click(canvas.getByTestId('dismiss-all-button'));

    // Verify all toasts are dismissed
    await waitFor(async () => {
      await expect(canvas.queryByText('First Toast')).not.toBeInTheDocument();
      await expect(canvas.queryByText('Second Toast')).not.toBeInTheDocument();
      await expect(canvas.queryByText('Third Toast')).not.toBeInTheDocument();
    });

    // Verify count is back to 0
    await waitFor(() => {
      return expect(canvas.getByTestId('toast-count')).toHaveTextContent('0');
    }, {
      timeout: 1000
    });
  }
}`,...$.parameters?.docs?.source}}},oe=[`Success`,`Info`,`Warning`,`WarningNoTitle`,`WarningNoTitleAction`,`WarningWithActions`,`Error`,`LongContent`,`MultipleToasts`]}))();export{Z as Error,K as Info,Q as LongContent,$ as MultipleToasts,G as Success,q as Warning,J as WarningNoTitle,Y as WarningNoTitleAction,X as WarningWithActions,oe as __namedExportsOrder,U as default};