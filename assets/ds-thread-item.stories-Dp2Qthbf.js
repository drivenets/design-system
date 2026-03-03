import{j as c}from"./jsx-runtime-u17CrQMm.js";import{r as N}from"./iframe-BoKmvYv-.js";import{D as b}from"./ds-thread-item-7iR7Krb4.js";import{D as S}from"./ds-button-UVtd0uEP.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CQxKMm9n.js";import"./ds-avatar-DCFc9oFb.js";import"./ds-tooltip-Bve_TEie.js";import"./index-HiBacBF2.js";import"./index-DZ5cWofW.js";import"./index-B1dMH4YE.js";import"./index-lBGmboyd.js";import"./index-DPLUjSXI.js";import"./index-dy1XgbzE.js";import"./index-B4iKbFNO.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-QRQYV_UP.js";import"./ds-typography-BbZy79HU.js";import"./index-BPH9PuD6.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DtKV6khj.js";import"./create-anatomy-DYeRuyqI.js";import"./mutation-observer-Cu1ou0At.js";import"./raf-CC9hSMXO.js";import"./ds-icon-D1-ehgnw.js";import"./ds-dropdown-menu-R9Ndvanp.js";import"./Combination-DMypGHMT.js";import"./ds-text-input-CKTiM9wQ.js";import"./portal-myaOKRbh.js";import"./use-presence-BKCn59TT.js";import"./set-MtMu4WSO.js";import"./computed-style-eGdZx9o3.js";import"./event-CBXSxTbR.js";import"./index-BfV29z6k.js";import"./get-styles-CPcykbyT.js";import"./typeahead-BvX4mKnc.js";import"./query-CjgVAlRR.js";import"./initial-focus-B6vDCZoJ.js";import"./equal-DfFTejAs.js";import"./dismissable-layer-DheLzH4x.js";import"./navigate-CKgLE_xz.js";import"./ds-textarea-BnjMTjGL.js";import"./format-relative-time-B216dNqo.js";import"./ds-button-legacy-CA6yrf7Y.js";import"./ds-button-new-BGNBJxa3.js";const{fn:r,expect:n,screen:l,userEvent:s,waitFor:U,within:o}=__STORYBOOK_MODULE_TEST__,ke={title:"Design System/Comments/Thread Item",component:b,parameters:{layout:"padded",docs:{description:{component:`
Individual message item within a comment thread.
Displays the author, timestamp, message content, and action buttons.
                `}}},tags:["autodocs"],argTypes:{id:{control:"text",description:"Unique identifier for the message"},author:{control:"object",description:"Message author information (name, avatar)"},content:{control:"text",description:"Message content text"},createdAt:{control:"date",description:"When the message was created"},isCommentAuthorMessage:{control:"boolean",description:"Whether this message is from the comment author (left-aligned)"},canModify:{control:"boolean",description:"Whether the current user can modify this message"},onEdit:{description:"Callback when message is edited"},onDelete:{description:"Callback when message is deleted"},onMarkUnread:{description:"Callback for mark as unread action"},onResolved:{description:"Callback for resolved action (check circle)"}}},M={id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/150?img=1"},m="Initial message content.",d="Content updated from outside.",i={id:"msg-1",author:M,content:"This is a sample message in the comment thread.",createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:r(),onDelete:r(),onMarkUnread:r(),onResolved:r()},g={args:i,play:async({canvasElement:t})=>{const e=o(t);await n(e.getByText("Karen J.")).toBeInTheDocument(),await n(e.getByText("This is a sample message in the comment thread.")).toBeInTheDocument();const a=e.getByText(/ago/i);await n(a).toBeInTheDocument()}},p={args:{...i,id:"msg-2",isCommentAuthorMessage:!1,canModify:!1,content:"This is my message, so it appears aligned to the right."},play:async({canvasElement:t})=>{const e=o(t);await n(e.getByText("This is my message, so it appears aligned to the right.")).toBeInTheDocument()}},v={args:{...i,id:"msg-3",content:"I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements."},play:async({canvasElement:t})=>{const e=o(t);await n(e.getByText(/adjusting the timeline/i)).toBeInTheDocument()}},y={args:{...i,id:"msg-4",author:{id:"user-2",name:"John Doe",avatarSrc:void 0},content:"Message from a user without an avatar."},play:async({canvasElement:t})=>{const e=o(t);await n(e.getByText("JD")).toBeInTheDocument(),await n(e.getByText("John Doe")).toBeInTheDocument()}},h={args:{...i,id:"msg-5",createdAt:new Date(Date.now()-3e4),content:"Just posted this message."},play:async({canvasElement:t})=>{const a=o(t).getByText(/just now|ago/i);await n(a).toBeInTheDocument()}},w={args:{...i,id:"msg-6",createdAt:new Date(Date.now()-864e5*3),content:"This message was posted a few days ago."},play:async({canvasElement:t})=>{const a=o(t).getByText(/\d+d ago/i);await n(a).toBeInTheDocument()}},B={args:{...i,id:"msg-7",content:`Line 1: First line of the message
Line 2: Second line with more details
Line 3: Final line with conclusion`},play:async({canvasElement:t})=>{const e=o(t);await n(e.getByText(/Line 1: First line/i)).toBeInTheDocument()}},x={args:i,play:async({canvasElement:t,args:e})=>{const a=o(t);await s.click(a.getByRole("button",{name:/more actions/i})),await s.click(l.getByRole("menuitem",{name:/edit/i}));const u=a.getByRole("textbox");await n(u).toHaveValue("This is a sample message in the comment thread."),await s.clear(u),await s.type(u,"Updated message content"),await s.click(a.getByRole("button",{name:/save/i})),await n(e.onEdit).toHaveBeenCalledWith("msg-1","Updated message content")}},T={args:i,play:async({canvasElement:t})=>{const e=o(t);await s.click(e.getByRole("button",{name:/more actions/i})),await s.click(l.getByRole("menuitem",{name:/edit/i}));const a=e.getByRole("textbox");await s.clear(a);const u=e.getByRole("button",{name:/save/i});await n(u).toBeDisabled()}},D={args:i,play:async({canvasElement:t})=>{const e=o(t);await s.click(e.getByRole("button",{name:/more actions/i})),await s.click(l.getByRole("menuitem",{name:/edit/i}));const a=e.getByRole("button",{name:/save/i});await n(a).toBeDisabled()}},E={args:i,play:async({canvasElement:t,args:e})=>{const a=o(t);await s.click(a.getByRole("button",{name:/more actions/i})),await s.click(l.getByRole("menuitem",{name:/delete/i})),await n(e.onDelete).toHaveBeenCalledWith("msg-1")}},R={args:i,play:async({canvasElement:t,args:e})=>{const a=o(t);await s.click(a.getByRole("button",{name:/more actions/i})),await s.click(l.getByRole("menuitem",{name:/mark as/i})),await n(e.onMarkUnread).toHaveBeenCalledWith("msg-1")}},f={args:i,play:async({canvasElement:t,args:e})=>{const u=o(t).getByRole("button",{name:/mark message as resolved/i});await s.click(u),await n(e.onResolved).toHaveBeenCalledWith("msg-1")}},k={args:{...i,canModify:!1,onEdit:void 0,onDelete:void 0,onMarkUnread:void 0,onResolved:void 0},play:async({canvasElement:t})=>{const e=o(t);await n(e.queryByRole("button",{name:/more actions/i})).not.toBeInTheDocument(),await n(e.queryByRole("button",{name:/mark message as resolved/i})).not.toBeInTheDocument()}},C={render:function(){const[e,a]=N.useState(m);return c.jsxs(c.Fragment,{children:[c.jsx(b,{id:"msg-ext-1",author:M,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:r(),onDelete:r()}),c.jsx(S,{design:"v1.2",size:"small",onClick:()=>a(d),children:"Simulate external update"})]})},play:async({canvasElement:t})=>{const e=o(t);await n(e.getByText(m)).toBeInTheDocument(),await s.click(e.getByRole("button",{name:/simulate external update/i})),await n(e.getByText(d)).toBeInTheDocument(),await n(e.queryByText(m)).not.toBeInTheDocument(),await s.click(e.getByRole("button",{name:/more actions/i})),await s.click(l.getByRole("menuitem",{name:/edit/i}));const a=e.getByRole("textbox");await n(a).toHaveValue(d)}},I={render:function(){const[e,a]=N.useState(m);return c.jsxs(c.Fragment,{children:[c.jsx(b,{id:"msg-ext-2",author:M,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:r(),onDelete:r()}),c.jsx(S,{design:"v1.2",size:"small",onClick:()=>a(d),children:"Simulate external update"})]})},play:async({canvasElement:t})=>{const e=o(t);await n(e.getByText(m)).toBeInTheDocument(),await s.click(e.getByRole("button",{name:/more actions/i})),await s.click(l.getByRole("menuitem",{name:/edit/i}));const a=e.getByRole("textbox");await n(a).toHaveValue(m),await s.clear(a),await s.type(a,"My custom edit"),await n(a).toHaveValue("My custom edit"),await s.click(e.getByRole("button",{name:/simulate external update/i})),await n(a).toHaveValue("My custom edit")}},A={render:function(){const[e,a]=N.useState(m);return c.jsxs(c.Fragment,{children:[c.jsx(b,{id:"msg-ext-3",author:M,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:r(),onDelete:r()}),c.jsx(S,{design:"v1.2",size:"small",onClick:()=>a(d),children:"Simulate external update"})]})},play:async({canvasElement:t})=>{const e=o(t);await s.click(e.getByRole("button",{name:/more actions/i})),await s.click(l.getByRole("menuitem",{name:/edit/i}));const a=e.getByRole("textbox");await s.clear(a),await s.type(a,"My custom edit"),await s.click(e.getByRole("button",{name:/simulate external update/i})),await n(a).toHaveValue("My custom edit"),await s.click(e.getByRole("button",{name:/cancel/i})),await U(async()=>{await n(e.getByText(d)).toBeInTheDocument()}),await n(e.queryByText(m)).not.toBeInTheDocument()}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /more actions/i
    }));
    await userEvent.click(screen.getByRole('menuitem', {
      name: /edit/i
    }));
    const textarea = canvas.getByRole('textbox');
    await expect(textarea).toHaveValue('This is a sample message in the comment thread.');
    await userEvent.clear(textarea);
    await userEvent.type(textarea, 'Updated message content');
    await userEvent.click(canvas.getByRole('button', {
      name: /save/i
    }));
    await expect(args.onEdit).toHaveBeenCalledWith('msg-1', 'Updated message content');
  }
}`,...x.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
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
    const saveButton = canvas.getByRole('button', {
      name: /save/i
    });
    await expect(saveButton).toBeDisabled();
  }
}`,...T.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
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
    const saveButton = canvas.getByRole('button', {
      name: /save/i
    });
    await expect(saveButton).toBeDisabled();
  }
}`,...D.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /more actions/i
    }));
    await userEvent.click(screen.getByRole('menuitem', {
      name: /delete/i
    }));
    await expect(args.onDelete).toHaveBeenCalledWith('msg-1');
  }
}`,...E.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('button', {
      name: /more actions/i
    }));
    await userEvent.click(screen.getByRole('menuitem', {
      name: /mark as/i
    }));
    await expect(args.onMarkUnread).toHaveBeenCalledWith('msg-1');
  }
}`,...R.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: defaultArgs,
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const resolvedButton = canvas.getByRole('button', {
      name: /mark message as resolved/i
    });
    await userEvent.click(resolvedButton);
    await expect(args.onResolved).toHaveBeenCalledWith('msg-1');
  }
}`,...f.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    ...defaultArgs,
    canModify: false,
    onEdit: undefined,
    onDelete: undefined,
    onMarkUnread: undefined,
    onResolved: undefined
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button', {
      name: /more actions/i
    })).not.toBeInTheDocument();
    await expect(canvas.queryByRole('button', {
      name: /mark message as resolved/i
    })).not.toBeInTheDocument();
  }
}`,...k.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}};const Ce=["Default","CurrentUserMessage","LongMessage","NoAvatar","RecentMessage","OldMessage","MultilineMessage","EditAndSave","EditSaveDisabledWhenEmpty","EditSaveDisabledWhenUnchanged","DeleteAction","MarkUnreadAction","ResolvedAction","NoActionsWhenCannotModify","ContentChangeWhileNotEditing","ContentChangeWhileEditing","ContentChangeWhileEditingThenCancel"];export{I as ContentChangeWhileEditing,A as ContentChangeWhileEditingThenCancel,C as ContentChangeWhileNotEditing,p as CurrentUserMessage,g as Default,E as DeleteAction,x as EditAndSave,T as EditSaveDisabledWhenEmpty,D as EditSaveDisabledWhenUnchanged,v as LongMessage,R as MarkUnreadAction,B as MultilineMessage,k as NoActionsWhenCannotModify,y as NoAvatar,w as OldMessage,h as RecentMessage,f as ResolvedAction,Ce as __namedExportsOrder,ke as default};
