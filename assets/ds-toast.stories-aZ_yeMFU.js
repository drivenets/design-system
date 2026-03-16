import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-B5ACH0kz.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{i}from"./ds-icon.types-Syhsfmh_.js";import{t as a}from"./ds-icon-BNbq4lDo.js";import{t as o}from"./ds-typography-CnMX6sfp.js";import{t as s}from"./ds-typography-B9exvWCt.js";import{n as c,t as l}from"./ds-button-Bfai3QYy.js";import{a as u,i as d,n as ee,o as te,r as f,s as p,t as m}from"./dist-DutxWBY1.js";var h,g,_,ne=t((()=>{h=`_actions_1w3ao_44`,g=`_icon_1w3ao_71`,_={"slide-in":`_slide-in_1w3ao_1`,"fade-out":`_fade-out_1w3ao_1`,actions:h,icon:g}})),v,y,b,x,S=t((()=>{m(),ne(),a(),s(),v=r(),y={success:`check_circle`,info:`info`,warning:`error`,error:`cancel`},b=({style:e,className:t,variant:n=`info`,title:r,description:a,onDismiss:s,actions:c})=>(0,v.jsxs)(d,{style:e,className:t,children:[(0,v.jsx)(i,{icon:y[n],size:`small`,filled:!0,className:_.icon}),r&&(0,v.jsx)(o,{variant:`body-sm-md`,asChild:!0,children:(0,v.jsx)(f,{children:r})}),a&&(0,v.jsx)(o,{variant:`body-sm-reg`,asChild:!0,children:(0,v.jsx)(u,{children:a})}),(0,v.jsx)(te,{onClick:s,children:(0,v.jsx)(i,{icon:`close`,size:`small`})}),c&&(0,v.jsx)(`div`,{className:_.actions,children:c})]}),x=({toaster:e})=>(0,v.jsx)(ee,{toaster:e,children:e=>(0,v.jsx)(b,{...e})}),b.__docgenInfo={description:`Design system Toast component
This component is used within the Toaster render function`,methods:[],displayName:`DsToast`,props:{variant:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof toastVariants)[number]`},description:`Toast type that determines styling and icon`,defaultValue:{value:`'info'`,computed:!1}},title:{required:!1,tsType:{name:`ReactNode`},description:`Toast title`},description:{required:!1,tsType:{name:`ReactNode`},description:`Toast description/message`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Additional styles to apply to the component`},actions:{required:!1,tsType:{name:`ReactNode`},description:`Optional action buttons to be rendered inside the component`},onDismiss:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback when toast is dismissed`}}},x.__docgenInfo={description:`Design system Toast Group component that wraps the Toaster`,methods:[],displayName:`DsToastGroup`,props:{toaster:{required:!0,tsType:{name:`CreateToasterReturn`},description:``}}}})),C,w,T,E,D,O,re=t((()=>{C=e(n(),1),m(),S(),w=r(),T=(0,C.createContext)(null),E=e=>t=>e.create({...t,type:t.variant,duration:t.persistent?1/0:t.duration||6e3}),D=({children:e,max:t=3})=>{let n=p({placement:`top`,gap:24,max:t}),r={createToast:E(n),dismissToast:n.dismiss,dismissAllToasts:()=>n.dismiss(),getToasts:n.getVisibleToasts,getToastsCount:n.getCount};return(0,w.jsxs)(T.Provider,{value:r,children:[e,(0,w.jsx)(x,{toaster:n})]})},O=()=>{let e=(0,C.useContext)(T);if(!e)throw Error(`useToast must be used within a ToastProvider`);return e},D.__docgenInfo={description:``,methods:[],displayName:`DsToastProvider`,props:{max:{required:!1,tsType:{name:`number`},description:`The maximum number of toasts to display (recommended 3 - 5)
@default 3`,defaultValue:{value:`3`,computed:!1}},children:{required:!0,tsType:{name:`ReactNode`},description:`The children of the toast provider`}}}})),k,A=t((()=>{k=[`info`,`success`,`warning`,`error`]})),j,M,N,P,ie=t((()=>{j=`_demoContainer_13d69_1`,M=`_actionButtonsContainer_13d69_8`,N=`_buttonGroup_13d69_13`,P={demoContainer:j,actionButtonsContainer:M,buttonGroup:N}})),F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{F=e(n(),1),S(),re(),l(),A(),ie(),I=r(),{expect:L,userEvent:R,waitFor:z,within:B}=__STORYBOOK_MODULE_TEST__,V={title:`Design System/Toast`,component:b,parameters:{layout:`centered`,docs:{description:{component:`A toast component for displaying temporary messages with different variants and actions.`}}},argTypes:{variant:{control:{type:`select`},options:k,description:`The visual variant of the toast`},title:{control:{type:`text`},description:`The title of the toast`},description:{control:{type:`text`},description:`The description text of the toast`},persistent:{control:{type:`boolean`},description:`Whether the toast should persist until manually dismissed`},duration:{control:{type:`number`},description:`Duration in milliseconds before auto-dismiss (ignored if persistent is true)`},onDismiss:{control:!1,description:`Callback function called when the toast is dismissed`}}},H=({variant:e,title:t,description:n,persistent:r,actions:i})=>{let{createToast:a}=O();return(0,I.jsxs)(`div`,{className:P.demoContainer,children:[(0,I.jsxs)(`h3`,{children:[e.charAt(0).toUpperCase()+e.slice(1),` Toast`]}),(0,I.jsxs)(c,{design:`v1.2`,onClick:()=>{a({variant:e,title:t,description:n,persistent:r,actions:i})},variant:`filled`,children:[`Show `,e.charAt(0).toUpperCase()+e.slice(1),` Toast`]})]})},U={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(H,{variant:`success`,title:`Success!`,description:`Your action was completed successfully.`})})},W={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(H,{variant:`info`,title:`Information`,description:`Here is some helpful information for you.`})})},G={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(H,{variant:`warning`,title:`Warning`,description:`Please be aware of this important notice.`})})},K={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(H,{variant:`warning`,description:`Something went wrong. Please try again.`,persistent:!0})})},q={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(H,{variant:`warning`,description:`Something went wrong. Please try again.`,actions:(0,I.jsx)(c,{design:`v1.2`,variant:`danger`,children:`Restart`}),persistent:!0})})},J={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(()=>{let{createToast:e,dismissToast:t}=O(),[n,r]=(0,F.useState)(),i=()=>{let n=e({title:`File upload failed`,description:`Your file could not be uploaded.`,variant:`warning`,actions:(0,I.jsxs)(`div`,{className:P.actionButtonsContainer,children:[(0,I.jsx)(c,{"data-testid":`abort-button`,design:`v1.2`,onClick:()=>{r(`abort`),t(n)},variant:`ghost`,children:`Abort`}),(0,I.jsx)(c,{"data-testid":`retry-button`,design:`v1.2`,onClick:()=>{r(`retry`),t(n)},variant:`danger`,children:`Re-try`})]}),persistent:!0})};return(0,I.jsxs)(`div`,{className:P.demoContainer,children:[(0,I.jsx)(`h3`,{children:`Toast with Action`}),(0,I.jsx)(c,{"data-testid":`show-toast-button`,design:`v1.2`,onClick:i,variant:`filled`,children:`Show Toast with Actions`}),n&&(0,I.jsx)(`p`,{"data-testid":`action-result`,children:n})]})},{})}),play:async({canvasElement:e})=>{let t=B(e);await R.click(t.getByTestId(`show-toast-button`)),await z(async()=>{await L(t.getByText(`File upload failed`)).toBeInTheDocument(),await L(t.getByText(`Your file could not be uploaded.`)).toBeInTheDocument()}),await L(t.getByTestId(`abort-button`)).toBeInTheDocument(),await L(t.getByTestId(`retry-button`)).toBeInTheDocument(),await R.click(t.getByTestId(`abort-button`)),await z(()=>L(t.getByTestId(`action-result`)).toHaveTextContent(`abort`)),await z(()=>L(t.queryByText(`File upload failed`)).not.toBeInTheDocument(),{timeout:1e3})}},Y={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(H,{variant:`error`,title:`Error`,description:`Something went wrong. Please try again.`,persistent:!0})})},X={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(()=>{let{createToast:e}=O();return(0,I.jsxs)(`div`,{className:P.demoContainer,children:[(0,I.jsx)(`h3`,{children:`Long Content Toast`}),(0,I.jsx)(c,{design:`v1.2`,onClick:()=>{e({title:`Important Notice`,description:`This is a longer message that demonstrates how the toast component handles extended content. The text will wrap appropriately and maintain good readability while staying within the toast boundaries.`,variant:`warning`,duration:8e3})},variant:`filled`,children:`Show Long Content Toast`})]})},{})})},Z=()=>{let{createToast:e,dismissAllToasts:t,getToastsCount:n}=O(),[r,i]=(0,F.useState)(n()),a=(t,r=0)=>{setTimeout(()=>{e(t),i(n())},r)},o=()=>{t(),setTimeout(()=>{i(n())},500)},s=()=>{a({variant:`success`,title:`First Toast`,description:`This is the first toast message.`}),a({variant:`info`,title:`Second Toast`,description:`This is the second toast message.`},500),a({variant:`warning`,title:`Third Toast`,description:`This is the third toast message.`},1e3)};return(0,I.jsxs)(`div`,{className:P.demoContainer,children:[(0,I.jsx)(`h3`,{children:`Multiple Toasts Demo`}),(0,I.jsxs)(`div`,{className:P.buttonGroup,children:[(0,I.jsx)(c,{"data-testid":`create-multiple-button`,design:`v1.2`,onClick:s,variant:`filled`,children:`Create Multiple Toasts`}),(0,I.jsx)(c,{design:`v1.2`,onClick:o,variant:`ghost`,"data-testid":`dismiss-all-button`,children:`Dismiss All`})]}),`Count: `,(0,I.jsx)(`span`,{"data-testid":`toast-count`,children:r})]})},Q={render:()=>(0,I.jsx)(D,{children:(0,I.jsx)(Z,{})}),parameters:{docs:{description:{story:`Demo showing multiple toasts stacked together with dismiss all functionality.`}}},play:async({canvasElement:e})=>{let t=B(e);await L(t.getByTestId(`toast-count`)).toHaveTextContent(`0`),await R.click(t.getByTestId(`create-multiple-button`)),await z(()=>L(t.getByText(`First Toast`)).toBeInTheDocument()),await z(()=>L(t.getByText(`Second Toast`)).toBeInTheDocument(),{timeout:1e3}),await z(()=>L(t.getByText(`Third Toast`)).toBeInTheDocument(),{timeout:1500}),await L(t.getByText(`First Toast`)).toBeInTheDocument(),await L(t.getByText(`Second Toast`)).toBeInTheDocument(),await L(t.getByText(`Third Toast`)).toBeInTheDocument(),await L(t.getByTestId(`toast-count`)).toHaveTextContent(`3`),await R.click(t.getByTestId(`dismiss-all-button`)),await z(async()=>{await L(t.queryByText(`First Toast`)).not.toBeInTheDocument(),await L(t.queryByText(`Second Toast`)).not.toBeInTheDocument(),await L(t.queryByText(`Third Toast`)).not.toBeInTheDocument()}),await z(()=>L(t.getByTestId(`toast-count`)).toHaveTextContent(`0`),{timeout:1e3})}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="success" title="Success!" description="Your action was completed successfully." />
        </DsToastProvider>
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="info" title="Information" description="Here is some helpful information for you." />
        </DsToastProvider>
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" title="Warning" description="Please be aware of this important notice." />
        </DsToastProvider>
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" description="Something went wrong. Please try again." persistent />
        </DsToastProvider>
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="warning" description="Something went wrong. Please try again." actions={<DsButton design="v1.2" variant="danger">
                        Restart
                    </DsButton>} persistent></ToastDemo>
        </DsToastProvider>
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <DsToastProvider>
            <ToastDemo variant="error" title="Error" description="Something went wrong. Please try again." persistent // No auto-dismiss
    />
        </DsToastProvider>
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Success`,`Info`,`Warning`,`WarningNoTitle`,`WarningNoTitleAction`,`WarningWithActions`,`Error`,`LongContent`,`MultipleToasts`]}))();export{Y as Error,W as Info,X as LongContent,Q as MultipleToasts,U as Success,G as Warning,K as WarningNoTitle,q as WarningNoTitleAction,J as WarningWithActions,$ as __namedExportsOrder,V as default};