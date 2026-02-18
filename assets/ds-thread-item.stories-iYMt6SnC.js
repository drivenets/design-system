import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as I}from"./iframe-GhvvmIvk.js";import{D}from"./ds-thread-item-DX_avCrZ.js";import{D as C}from"./ds-button-BSRbDzy_.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CFg2X2TO.js";import"./ds-avatar-CbYCFNgR.js";import"./ds-tooltip-B2faYU_J.js";import"./index-DxcPRp5N.js";import"./index-CEuCMGL6.js";import"./index-NLLiC9mu.js";import"./index-CeNUtHxB.js";import"./index-V3APV3sx.js";import"./index-D0squdRH.js";import"./index-ChR1TCUG.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-F-ZmvGfS.js";import"./ds-typography-CR12Hdjh.js";import"./index-DzhYLBvp.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-CO5JyQiY.js";import"./index-1-mst_J2.js";import"./ds-icon-CLW5u7Mu.js";import"./ds-dropdown-menu-DozyBWMo.js";import"./Combination-IiBGZ5kP.js";import"./ds-text-input-Pe-j-GUX.js";import"./portal-BSS_yJhf.js";import"./use-presence-CDlVlhdb.js";import"./index-DCchWidZ.js";import"./index-DG2oXFOr.js";import"./ds-textarea-C9xvFE0J.js";import"./format-relative-time-B216dNqo.js";import"./ds-button-legacy-C5BL7mxE.js";import"./ds-button-new-0DK6HokA.js";const{fn:c,expect:n,screen:f,userEvent:s,waitFor:A,within:i}=__STORYBOOK_MODULE_TEST__,re={title:"Design System/Comments/Thread Item",component:D,parameters:{layout:"padded",docs:{description:{component:`
Individual message item within a comment thread.
Displays the author, timestamp, message content, and action buttons.
                `}}},tags:["autodocs"],argTypes:{id:{control:"text",description:"Unique identifier for the message"},author:{control:"object",description:"Message author information (name, avatar)"},content:{control:"text",description:"Message content text"},createdAt:{control:"date",description:"When the message was created"},isCommentAuthorMessage:{control:"boolean",description:"Whether this message is from the comment author (left-aligned)"},canModify:{control:"boolean",description:"Whether the current user can modify this message"},onEdit:{description:"Callback when message is edited"},onDelete:{description:"Callback when message is deleted"},onMarkUnread:{description:"Callback for mark as unread action"},onResolved:{description:"Callback for resolved action (check circle)"}}},E={id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/150?img=1"},r="Initial message content.",u="Content updated from outside.",m={id:"msg-1",author:E,content:"This is a sample message in the comment thread.",createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:c(),onDelete:c(),onMarkUnread:c(),onResolved:c()},l={args:m,play:async({canvasElement:t})=>{const e=i(t);await n(e.getByText("Karen J.")).toBeInTheDocument(),await n(e.getByText("This is a sample message in the comment thread.")).toBeInTheDocument();const a=e.getByText(/ago/i);await n(a).toBeInTheDocument()}},d={args:{...m,id:"msg-2",isCommentAuthorMessage:!1,canModify:!1,content:"This is my message, so it appears aligned to the right."},play:async({canvasElement:t})=>{const e=i(t);await n(e.getByText("This is my message, so it appears aligned to the right.")).toBeInTheDocument()}},g={args:{...m,id:"msg-3",content:"I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements."},play:async({canvasElement:t})=>{const e=i(t);await n(e.getByText(/adjusting the timeline/i)).toBeInTheDocument()}},p={args:{...m,id:"msg-4",author:{id:"user-2",name:"John Doe",avatarSrc:void 0},content:"Message from a user without an avatar."},play:async({canvasElement:t})=>{const e=i(t);await n(e.getByText("JD")).toBeInTheDocument(),await n(e.getByText("John Doe")).toBeInTheDocument()}},h={args:{...m,id:"msg-5",createdAt:new Date(Date.now()-3e4),content:"Just posted this message."},play:async({canvasElement:t})=>{const a=i(t).getByText(/just now|ago/i);await n(a).toBeInTheDocument()}},y={args:{...m,id:"msg-6",createdAt:new Date(Date.now()-864e5*3),content:"This message was posted a few days ago."},play:async({canvasElement:t})=>{const a=i(t).getByText(/\d+d ago/i);await n(a).toBeInTheDocument()}},T={args:{...m,id:"msg-7",content:`Line 1: First line of the message
Line 2: Second line with more details
Line 3: Final line with conclusion`},play:async({canvasElement:t})=>{const e=i(t);await n(e.getByText(/Line 1: First line/i)).toBeInTheDocument()}},w={args:m,parameters:{docs:{description:{story:"Hover over the message to see the action buttons (More actions menu and Mark button)."}}},play:async({canvasElement:t})=>{const e=i(t);await n(e.getByText("This is a sample message in the comment thread.")).toBeInTheDocument()}},v={render:function(){const[e,a]=I.useState(r);return o.jsxs(o.Fragment,{children:[o.jsx(D,{id:"msg-ext-1",author:E,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:c(),onDelete:c()}),o.jsx(C,{design:"v1.2",size:"small",onClick:()=>a(u),children:"Simulate external update"})]})},play:async({canvasElement:t})=>{const e=i(t);await n(e.getByText(r)).toBeInTheDocument(),await s.click(e.getByRole("button",{name:/simulate external update/i})),await n(e.getByText(u)).toBeInTheDocument(),await n(e.queryByText(r)).not.toBeInTheDocument(),await s.click(e.getByRole("button",{name:/more actions/i})),await s.click(f.getByRole("menuitem",{name:/edit/i}));const a=e.getByRole("textbox");await n(a).toHaveValue(u)}},x={render:function(){const[e,a]=I.useState(r);return o.jsxs(o.Fragment,{children:[o.jsx(D,{id:"msg-ext-2",author:E,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:c(),onDelete:c()}),o.jsx(C,{design:"v1.2",size:"small",onClick:()=>a(u),children:"Simulate external update"})]})},play:async({canvasElement:t})=>{const e=i(t);await n(e.getByText(r)).toBeInTheDocument(),await s.click(e.getByRole("button",{name:/more actions/i})),await s.click(f.getByRole("menuitem",{name:/edit/i}));const a=e.getByRole("textbox");await n(a).toHaveValue(r),await s.clear(a),await s.type(a,"My custom edit"),await n(a).toHaveValue("My custom edit"),await s.click(e.getByRole("button",{name:/simulate external update/i})),await n(a).toHaveValue("My custom edit")}},B={render:function(){const[e,a]=I.useState(r);return o.jsxs(o.Fragment,{children:[o.jsx(D,{id:"msg-ext-3",author:E,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:c(),onDelete:c()}),o.jsx(C,{design:"v1.2",size:"small",onClick:()=>a(u),children:"Simulate external update"})]})},play:async({canvasElement:t})=>{const e=i(t);await s.click(e.getByRole("button",{name:/more actions/i})),await s.click(f.getByRole("menuitem",{name:/edit/i}));const a=e.getByRole("textbox");await s.clear(a),await s.type(a,"My custom edit"),await s.click(e.getByRole("button",{name:/simulate external update/i})),await n(a).toHaveValue("My custom edit"),await s.click(e.getByRole("button",{name:/cancel/i})),await A(async()=>{await n(e.getByText(u)).toBeInTheDocument()}),await n(e.queryByText(r)).not.toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Karen J.')).toBeInTheDocument();
    await expect(canvas.getByText('This is a sample message in the comment thread.')).toBeInTheDocument();
    const timestamp = canvas.getByText(/ago/i);
    await expect(timestamp).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: 'msg-2',
    isCommentAuthorMessage: false,
    canModify: false,
    content: 'This is my message, so it appears aligned to the right.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('This is my message, so it appears aligned to the right.')).toBeInTheDocument();
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: 'msg-3',
    content: 'I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/adjusting the timeline/i)).toBeInTheDocument();
  }
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: 'msg-4',
    author: {
      id: 'user-2',
      name: 'John Doe',
      avatarSrc: undefined
    },
    content: 'Message from a user without an avatar.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('JD')).toBeInTheDocument();
    await expect(canvas.getByText('John Doe')).toBeInTheDocument();
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: 'msg-5',
    createdAt: new Date(Date.now() - 30000),
    content: 'Just posted this message.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const timestamp = canvas.getByText(/just now|ago/i);
    await expect(timestamp).toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: 'msg-6',
    createdAt: new Date(Date.now() - 86400000 * 3),
    content: 'This message was posted a few days ago.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const timestamp = canvas.getByText(/\\d+d ago/i);
    await expect(timestamp).toBeInTheDocument();
  }
}`,...y.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    id: 'msg-7',
    content: \`Line 1: First line of the message
Line 2: Second line with more details
Line 3: Final line with conclusion\`
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(/Line 1: First line/i)).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story: 'Hover over the message to see the action buttons (More actions menu and Mark button).'
      }
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('This is a sample message in the comment thread.')).toBeInTheDocument();
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [content, setContent] = useState(INITIAL_CONTENT);
    return <>
                <DsThreadItem id="msg-ext-1" author={mockAuthor} content={content} createdAt={new Date(Date.now() - 3600000)} isCommentAuthorMessage canModify onEdit={fn()} onDelete={fn()} />

                <DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
                    Simulate external update
                </DsButton>
            </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(INITIAL_CONTENT)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /simulate external update/i
    }));
    await expect(canvas.getByText(UPDATED_CONTENT)).toBeInTheDocument();
    await expect(canvas.queryByText(INITIAL_CONTENT)).not.toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /more actions/i
    }));
    await userEvent.click(screen.getByRole('menuitem', {
      name: /edit/i
    }));
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toHaveValue(UPDATED_CONTENT);
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [content, setContent] = useState(INITIAL_CONTENT);
    return <>
                <DsThreadItem id="msg-ext-2" author={mockAuthor} content={content} createdAt={new Date(Date.now() - 3600000)} isCommentAuthorMessage canModify onEdit={fn()} onDelete={fn()} />

                <DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
                    Simulate external update
                </DsButton>
            </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText(INITIAL_CONTENT)).toBeInTheDocument();
    await userEvent.click(canvas.getByRole('button', {
      name: /more actions/i
    }));
    await userEvent.click(screen.getByRole('menuitem', {
      name: /edit/i
    }));
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toHaveValue(INITIAL_CONTENT);
    await userEvent.clear(textarea);
    await userEvent.type(textarea, 'My custom edit');
    await expect(textarea).toHaveValue('My custom edit');
    await userEvent.click(canvas.getByRole('button', {
      name: /simulate external update/i
    }));
    await expect(textarea).toHaveValue('My custom edit');
  }
}`,...x.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [content, setContent] = useState(INITIAL_CONTENT);
    return <>
                <DsThreadItem id="msg-ext-3" author={mockAuthor} content={content} createdAt={new Date(Date.now() - 3600000)} isCommentAuthorMessage canModify onEdit={fn()} onDelete={fn()} />

                <DsButton design="v1.2" size="small" onClick={() => setContent(UPDATED_CONTENT)}>
                    Simulate external update
                </DsButton>
            </>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /more actions/i
    }));
    await userEvent.click(screen.getByRole('menuitem', {
      name: /edit/i
    }));
    const textarea = canvas.getByRole('textbox');
    await userEvent.clear(textarea);
    await userEvent.type(textarea, 'My custom edit');
    await userEvent.click(canvas.getByRole('button', {
      name: /simulate external update/i
    }));
    await expect(textarea).toHaveValue('My custom edit');
    await userEvent.click(canvas.getByRole('button', {
      name: /cancel/i
    }));
    await waitFor(async () => {
      await expect(canvas.getByText(UPDATED_CONTENT)).toBeInTheDocument();
    });
    await expect(canvas.queryByText(INITIAL_CONTENT)).not.toBeInTheDocument();
  }
}`,...B.parameters?.docs?.source}}};const me=["Default","CurrentUserMessage","LongMessage","NoAvatar","RecentMessage","OldMessage","MultilineMessage","InteractiveActions","ContentChangeWhileNotEditing","ContentChangeWhileEditing","ContentChangeWhileEditingThenCancel"];export{x as ContentChangeWhileEditing,B as ContentChangeWhileEditingThenCancel,v as ContentChangeWhileNotEditing,d as CurrentUserMessage,l as Default,w as InteractiveActions,g as LongMessage,T as MultilineMessage,p as NoAvatar,y as OldMessage,h as RecentMessage,me as __namedExportsOrder,re as default};
