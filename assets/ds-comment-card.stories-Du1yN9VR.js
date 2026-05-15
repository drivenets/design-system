import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{n,t as r}from"./ds-comment-card-DP_qCfGQ.js";var i,a,o,s,c,l=e((()=>{i=`_decorator_14akk_1`,a=`_grid_14akk_5`,o=`_column_14akk_12`,s=`_heading_14akk_18`,c={decorator:i,grid:a,column:o,heading:s}})),u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D;e((()=>{r(),l(),u=t(),{expect:d,fn:f,userEvent:p,within:m}=__STORYBOOK_MODULE_TEST__,h=(e={})=>({id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements efficiently.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Thanks for the feedback!`,createdAt:new Date(Date.now()-720*60*1e3)},{id:`msg-3`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`I agree with this approach.`,createdAt:new Date(Date.now()-360*60*1e3)},{id:`msg-4`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`Great, let us proceed then.`,createdAt:new Date(Date.now()-7200*1e3)}],...e}),g={title:`Components/Comments/CommentCard`,component:n,parameters:{layout:`centered`},decorators:[e=>(0,u.jsx)(`div`,{className:c.decorator,children:(0,u.jsx)(e,{})})],argTypes:{comment:{description:`Comment data including author, messages, participants, and metadata`},disabled:{control:`boolean`,description:`Whether the card is disabled`},overflow:{control:`select`,options:[`hidden`,`displayed`],description:`Whether to truncate long messages or show them in full`},onClick:{action:`clicked`,description:`Callback when card is clicked`},onResolve:{action:`resolved`,description:`Callback when resolve button is clicked`},onToggleActionRequired:{action:`toggle-action-required`,description:`Callback when action required is toggled`},onForward:{action:`forward`,description:`Callback when forward action is triggered`},onMarkUnread:{action:`mark-unread`,description:`Callback when mark as unread is triggered`},onCopyLink:{action:`copy-link`,description:`Callback when copy link is triggered`},onDelete:{action:`delete`,description:`Callback when delete is triggered`},formatTimestamp:{description:`Custom formatter for timestamps. Defaults to relative time format (e.g., "2d ago"). Can be overridden for custom formats like absolute dates.`,table:{type:{summary:`(date: Date) => string`},defaultValue:{summary:`formatRelativeTime`}}}},args:{onClick:f(),onResolve:f(),onToggleActionRequired:f(),onForward:f(),onMarkUnread:f(),onCopyLink:f(),onDelete:f()}},_={args:{comment:h(),overflow:`hidden`},play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`button`,{name:/Comment #/i});await d(n).toBeInTheDocument(),await d(n).toHaveAttribute(`aria-label`),await d(t.getByText(/resource allocation/)).toBeInTheDocument(),await d(t.getByText(/3 replies/i)).toBeInTheDocument()}},v={args:{comment:h({isActionRequired:!0}),overflow:`hidden`},play:async({canvasElement:e})=>{await d(m(e).getByRole(`button`,{name:/action required/i})).toBeInTheDocument()}},y={args:{comment:h(),disabled:!0,overflow:`hidden`},play:async({canvasElement:e})=>{let t=m(e).getByRole(`button`,{name:/Comment #/i});await d(t).toBeInTheDocument(),await d(t).toBeDisabled()}},b={args:{comment:h(),overflow:`displayed`},play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`button`),r=t.getByText(/resource allocation/);await d(n).toBeInTheDocument(),await d(r).toBeInTheDocument()}},x={args:{comment:h({messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`This is a short single message comment.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0}]}),overflow:`hidden`},play:async({canvasElement:e})=>{let t=m(e),n=t.getByRole(`button`),r=t.getByText(/This is a short single message comment/);await d(n).toBeInTheDocument(),await d(r).toBeInTheDocument()}},S={render:()=>(0,u.jsxs)(`div`,{className:c.grid,children:[(0,u.jsxs)(`div`,{className:c.column,children:[(0,u.jsx)(`h4`,{className:c.heading,children:`Default`}),(0,u.jsx)(n,{comment:h(),overflow:`hidden`})]}),(0,u.jsxs)(`div`,{className:c.column,children:[(0,u.jsx)(`h4`,{className:c.heading,children:`Action Required`}),(0,u.jsx)(n,{comment:h(),overflow:`hidden`})]}),(0,u.jsxs)(`div`,{className:c.column,children:[(0,u.jsx)(`h4`,{className:c.heading,children:`Disabled`}),(0,u.jsx)(n,{comment:h(),disabled:!0,overflow:`hidden`})]}),(0,u.jsxs)(`div`,{className:c.column,children:[(0,u.jsx)(`h4`,{className:c.heading,children:`Full Message`}),(0,u.jsx)(n,{comment:h(),overflow:`displayed`})]})]}),play:async({canvasElement:e})=>{await d(m(e).getAllByRole(`button`,{name:/Comment #/i}).length).toBeGreaterThan(0)}},C={args:{comment:h({referenceTag:`Resource allocation`}),overflow:`hidden`},play:async({canvasElement:e})=>{await d(m(e).getByText(`Resource allocation`)).toBeInTheDocument()}},w={args:{comment:h(),overflow:`hidden`},play:async({canvasElement:e,args:t})=>{let n=m(e).getByRole(`button`,{name:/Comment #63/i});await p.click(n),await d(t.onClick).toHaveBeenCalledOnce()}},T={args:{comment:h({messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`},content:`Initial message`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`},content:`One reply`,createdAt:new Date(Date.now()-720*60*1e3)}]}),overflow:`hidden`},play:async({canvasElement:e})=>{await d(m(e).getByText(`1 reply`)).toBeInTheDocument()}},E={args:{comment:h(),overflow:`hidden`,formatTimestamp:e=>e.toLocaleDateString(`en-US`,{year:`numeric`,month:`short`,day:`numeric`,hour:`2-digit`,minute:`2-digit`})},play:async({canvasElement:e})=>{let t=m(e).getByRole(`button`,{name:/Comment #/i});await d(t).toBeInTheDocument();let n=t.textContent||``;await d(n).toMatch(/\d{4}/),await d(n).not.toMatch(/ago/i)}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    overflow: 'hidden'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button', {
      name: /Comment #/i
    });
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveAttribute('aria-label');
    const commentText = canvas.getByText(/resource allocation/);
    await expect(commentText).toBeInTheDocument();
    const replyCount = canvas.getByText(/3 replies/i);
    await expect(replyCount).toBeInTheDocument();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment({
      isActionRequired: true
    }),
    overflow: 'hidden'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button', {
      name: /action required/i
    });
    await expect(card).toBeInTheDocument();
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    disabled: true,
    overflow: 'hidden'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button', {
      name: /Comment #/i
    });
    await expect(card).toBeInTheDocument();
    await expect(card).toBeDisabled();
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    overflow: 'displayed'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button');
    const commentText = canvas.getByText(/resource allocation/);
    await expect(card).toBeInTheDocument();
    await expect(commentText).toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment({
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.',
          avatarSrc: 'https://i.pravatar.cc/40?img=1'
        },
        content: 'This is a short single message comment.',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        isInitialMessage: true
      }]
    }),
    overflow: 'hidden'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button');
    const commentText = canvas.getByText(/This is a short single message comment/);
    await expect(card).toBeInTheDocument();
    await expect(commentText).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.grid}>
            <div className={styles.column}>
                <h4 className={styles.heading}>Default</h4>
                <DsCommentCard comment={createMockComment()} overflow="hidden" />
            </div>

            <div className={styles.column}>
                <h4 className={styles.heading}>Action Required</h4>
                <DsCommentCard comment={createMockComment()} overflow="hidden" />
            </div>

            <div className={styles.column}>
                <h4 className={styles.heading}>Disabled</h4>
                <DsCommentCard comment={createMockComment()} disabled={true} overflow="hidden" />
            </div>

            <div className={styles.column}>
                <h4 className={styles.heading}>Full Message</h4>
                <DsCommentCard comment={createMockComment()} overflow="displayed" />
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cards = canvas.getAllByRole('button', {
      name: /Comment #/i
    });
    await expect(cards.length).toBeGreaterThan(0);
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment({
      referenceTag: 'Resource allocation'
    }),
    overflow: 'hidden'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Resource allocation')).toBeInTheDocument();
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    overflow: 'hidden'
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button', {
      name: /Comment #63/i
    });
    await userEvent.click(card);
    await expect(args.onClick).toHaveBeenCalledOnce();
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment({
      messages: [{
        id: 'msg-1',
        author: {
          id: 'user-1',
          name: 'Karen J.'
        },
        content: 'Initial message',
        createdAt: new Date(Date.now() - 24 * 60 * 60 * 1000),
        isInitialMessage: true
      }, {
        id: 'msg-2',
        author: {
          id: 'user-2',
          name: 'John D.'
        },
        content: 'One reply',
        createdAt: new Date(Date.now() - 12 * 60 * 60 * 1000)
      }]
    }),
    overflow: 'hidden'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('1 reply')).toBeInTheDocument();
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    comment: createMockComment(),
    overflow: 'hidden',
    formatTimestamp: (date: Date) => {
      const options: Intl.DateTimeFormatOptions = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      };
      return date.toLocaleDateString('en-US', options);
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button', {
      name: /Comment #/i
    });
    await expect(card).toBeInTheDocument();

    // Verify the formatted timestamp is present (should be in format like "Feb 9, 2026, 05:11 PM")
    // and does not contain "ago"
    const cardText = card.textContent || '';
    await expect(cardText).toMatch(/\\d{4}/); // Should contain year
    await expect(cardText).not.toMatch(/ago/i); // Should not contain "ago"
  }
}`,...E.parameters?.docs?.source}}},D=[`DefaultCard`,`ActionRequired`,`DisabledState`,`FullMessage`,`SingleMessage`,`Default`,`WithReferenceTag`,`WithCallbacks`,`SingleReply`,`CustomFormatter`]}))();export{v as ActionRequired,E as CustomFormatter,S as Default,_ as DefaultCard,y as DisabledState,b as FullMessage,x as SingleMessage,T as SingleReply,w as WithCallbacks,C as WithReferenceTag,D as __namedExportsOrder,g as default};