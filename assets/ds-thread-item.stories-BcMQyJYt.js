import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-Dnd3SklO.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./ds-button-D5I4hevQ.js";import{r as o,t as s}from"./ds-thread-item-CsSBdrvN.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R;e((()=>{c=t(n(),1),s(),a(),l=r(),{fn:u,expect:d,screen:f,userEvent:p,waitFor:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/Comments/ThreadItem`,component:o,parameters:{layout:`padded`,docs:{description:{component:`
Individual message item within a comment thread.
Displays the author, timestamp, message content, and action buttons.
                `}}},argTypes:{id:{control:`text`,description:`Unique identifier for the message`},author:{control:`object`,description:`Message author information (name, avatar)`},content:{control:`text`,description:`Message content text`},createdAt:{control:`date`,description:`When the message was created`},isCommentAuthorMessage:{control:`boolean`,description:`Whether this message is from the comment author (left-aligned)`},canModify:{control:`boolean`,description:`Whether the current user can modify this message`},onEdit:{description:`Callback when message is edited`},onDelete:{description:`Callback when message is deleted`},onMarkUnread:{description:`Callback for mark as unread action`},onResolved:{description:`Callback for resolved action (check circle)`}}},_={id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/150?img=1`},v=`Initial message content.`,y=`Content updated from outside.`,b={id:`msg-1`,author:_,content:`This is a sample message in the comment thread.`,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:u(),onDelete:u(),onMarkUnread:u(),onResolved:u()},x={args:b,play:async({canvasElement:e})=>{let t=h(e);await d(t.getByText(`Karen J.`)).toBeInTheDocument(),await d(t.getByText(`This is a sample message in the comment thread.`)).toBeInTheDocument(),await d(t.getByText(/ago/i)).toBeInTheDocument()}},S={args:{...b,id:`msg-2`,isCommentAuthorMessage:!1,canModify:!1,content:`This is my message, so it appears aligned to the right.`},play:async({canvasElement:e})=>{await d(h(e).getByText(`This is my message, so it appears aligned to the right.`)).toBeInTheDocument()}},C={args:{...b,id:`msg-3`,content:`I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements.`},play:async({canvasElement:e})=>{await d(h(e).getByText(/adjusting the timeline/i)).toBeInTheDocument()}},w={args:{...b,id:`msg-4`,author:{id:`user-2`,name:`John Doe`,avatarSrc:void 0},content:`Message from a user without an avatar.`},play:async({canvasElement:e})=>{let t=h(e);await d(t.getByText(`JD`)).toBeInTheDocument(),await d(t.getByText(`John Doe`)).toBeInTheDocument()}},T={args:{...b,id:`msg-5`,createdAt:new Date(Date.now()-3e4),content:`Just posted this message.`},play:async({canvasElement:e})=>{await d(h(e).getByText(/just now|ago/i)).toBeInTheDocument()}},E={args:{...b,id:`msg-6`,createdAt:new Date(Date.now()-864e5*3),content:`This message was posted a few days ago.`},play:async({canvasElement:e})=>{await d(h(e).getByText(/\d+d ago/i)).toBeInTheDocument()}},D={args:{...b,id:`msg-7`,content:`Line 1: First line of the message
Line 2: Second line with more details
Line 3: Final line with conclusion`},play:async({canvasElement:e})=>{await d(h(e).getByText(/Line 1: First line/i)).toBeInTheDocument()}},O={args:b,play:async({canvasElement:e,args:t})=>{let n=h(e);await p.click(n.getByRole(`button`,{name:/more actions/i})),await p.click(f.getByRole(`menuitem`,{name:/edit/i}));let r=n.getByRole(`textbox`);await d(r).toHaveValue(`This is a sample message in the comment thread.`),await p.clear(r),await p.type(r,`Updated message content`),await p.click(n.getByRole(`button`,{name:/save/i})),await d(t.onEdit).toHaveBeenCalledWith(`msg-1`,`Updated message content`)}},k={args:b,play:async({canvasElement:e})=>{let t=h(e);await p.click(t.getByRole(`button`,{name:/more actions/i})),await p.click(f.getByRole(`menuitem`,{name:/edit/i}));let n=t.getByRole(`textbox`);await p.clear(n),await d(t.getByRole(`button`,{name:/save/i})).toBeDisabled()}},A={args:b,play:async({canvasElement:e})=>{let t=h(e);await p.click(t.getByRole(`button`,{name:/more actions/i})),await p.click(f.getByRole(`menuitem`,{name:/edit/i})),await d(t.getByRole(`button`,{name:/save/i})).toBeDisabled()}},j={args:b,play:async({canvasElement:e,args:t})=>{let n=h(e);await p.click(n.getByRole(`button`,{name:/more actions/i})),await p.click(f.getByRole(`menuitem`,{name:/delete/i})),await d(t.onDelete).toHaveBeenCalledWith(`msg-1`)}},M={args:b,play:async({canvasElement:e,args:t})=>{let n=h(e);await p.click(n.getByRole(`button`,{name:/more actions/i})),await p.click(f.getByRole(`menuitem`,{name:/mark as/i})),await d(t.onMarkUnread).toHaveBeenCalledWith(`msg-1`)}},N={args:b,play:async({canvasElement:e,args:t})=>{let n=h(e).getByRole(`button`,{name:/mark message as resolved/i});await p.click(n),await d(t.onResolved).toHaveBeenCalledWith(`msg-1`)}},P={args:{...b,canModify:!1,onEdit:void 0,onDelete:void 0,onMarkUnread:void 0,onResolved:void 0},play:async({canvasElement:e})=>{let t=h(e);await d(t.queryByRole(`button`,{name:/more actions/i})).not.toBeInTheDocument(),await d(t.queryByRole(`button`,{name:/mark message as resolved/i})).not.toBeInTheDocument()}},F={render:function(){let[e,t]=(0,c.useState)(v);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{id:`msg-ext-1`,author:_,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:u(),onDelete:u()}),(0,l.jsx)(i,{design:`v1.2`,size:`small`,onClick:()=>t(y),children:`Simulate external update`})]})},play:async({canvasElement:e})=>{let t=h(e);await d(t.getByText(v)).toBeInTheDocument(),await p.click(t.getByRole(`button`,{name:/simulate external update/i})),await d(t.getByText(y)).toBeInTheDocument(),await d(t.queryByText(v)).not.toBeInTheDocument(),await p.click(t.getByRole(`button`,{name:/more actions/i})),await p.click(f.getByRole(`menuitem`,{name:/edit/i})),await d(t.getByRole(`textbox`)).toHaveValue(y)}},I={render:function(){let[e,t]=(0,c.useState)(v);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{id:`msg-ext-2`,author:_,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:u(),onDelete:u()}),(0,l.jsx)(i,{design:`v1.2`,size:`small`,onClick:()=>t(y),children:`Simulate external update`})]})},play:async({canvasElement:e})=>{let t=h(e);await d(t.getByText(v)).toBeInTheDocument(),await p.click(t.getByRole(`button`,{name:/more actions/i})),await p.click(f.getByRole(`menuitem`,{name:/edit/i}));let n=t.getByRole(`textbox`);await d(n).toHaveValue(v),await p.clear(n),await p.type(n,`My custom edit`),await d(n).toHaveValue(`My custom edit`),await p.click(t.getByRole(`button`,{name:/simulate external update/i})),await d(n).toHaveValue(`My custom edit`)}},L={render:function(){let[e,t]=(0,c.useState)(v);return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{id:`msg-ext-3`,author:_,content:e,createdAt:new Date(Date.now()-36e5),isCommentAuthorMessage:!0,canModify:!0,onEdit:u(),onDelete:u()}),(0,l.jsx)(i,{design:`v1.2`,size:`small`,onClick:()=>t(y),children:`Simulate external update`})]})},play:async({canvasElement:e})=>{let t=h(e);await p.click(t.getByRole(`button`,{name:/more actions/i})),await p.click(f.getByRole(`menuitem`,{name:/edit/i}));let n=t.getByRole(`textbox`);await p.clear(n),await p.type(n,`My custom edit`),await p.click(t.getByRole(`button`,{name:/simulate external update/i})),await d(n).toHaveValue(`My custom edit`),await p.click(t.getByRole(`button`,{name:/cancel/i})),await m(async()=>{await d(t.getByText(y)).toBeInTheDocument()}),await d(t.queryByText(v)).not.toBeInTheDocument()}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R=[`Default`,`CurrentUserMessage`,`LongMessage`,`NoAvatar`,`RecentMessage`,`OldMessage`,`MultilineMessage`,`EditAndSave`,`EditSaveDisabledWhenEmpty`,`EditSaveDisabledWhenUnchanged`,`DeleteAction`,`MarkUnreadAction`,`ResolvedAction`,`NoActionsWhenCannotModify`,`ContentChangeWhileNotEditing`,`ContentChangeWhileEditing`,`ContentChangeWhileEditingThenCancel`]}))();export{I as ContentChangeWhileEditing,L as ContentChangeWhileEditingThenCancel,F as ContentChangeWhileNotEditing,S as CurrentUserMessage,x as Default,j as DeleteAction,O as EditAndSave,k as EditSaveDisabledWhenEmpty,A as EditSaveDisabledWhenUnchanged,C as LongMessage,M as MarkUnreadAction,D as MultilineMessage,P as NoActionsWhenCannotModify,w as NoAvatar,E as OldMessage,T as RecentMessage,N as ResolvedAction,R as __namedExportsOrder,g as default};