import{j as o}from"./jsx-runtime-u17CrQMm.js";import{D as d}from"./ds-comment-card-oBe-lxJY.js";import"./index-BR8FvmX8.js";import"./iframe-DgcHsVlP.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-avatar-group-DYFCi9Pq.js";import"./ds-avatar-55UOH5bX.js";import"./ds-tooltip-Cp2jmI_1.js";import"./index-HIiRB1lq.js";import"./index-t-Kfj9fc.js";import"./index-Bl6FkOfk.js";import"./index-BOsPfo-f.js";import"./index-DFKMvtUw.js";import"./index-0_hCIA38.js";import"./index-BXuIXuDD.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-CXuhJget.js";import"./ds-typography-By_uor2z.js";import"./index-Dv_rP5y3.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DuuBKTIn.js";import"./create-anatomy-Z-S6lVO3.js";import"./mutation-observer-Cu1ou0At.js";import"./raf-CC9hSMXO.js";import"./ds-button-DM7MP3KQ.js";import"./ds-button-legacy-CQi4N2_R.js";import"./ds-button-new-B983F6cH.js";import"./ds-icon-B3lZEtKg.js";import"./ds-tag-CZzSPHuf.js";import"./ds-dropdown-menu-CKkkmpEA.js";import"./Combination-DpBZTEJo.js";import"./ds-text-input-8bPTrpgw.js";import"./portal-rdb4QJid.js";import"./use-presence-BCMMgZAH.js";import"./set-DPCYxM8_.js";import"./event-CBXSxTbR.js";import"./index-CAjq3moY.js";import"./get-styles-LLSO7fpL.js";import"./typeahead-BBI1Bz_z.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./dismissable-layer-TfhJM1ba.js";import"./navigate-DzHPwbsr.js";import"./format-relative-time-B216dNqo.js";const f="_decorator_1b20b_1",x="_grid_1b20b_5",B="_column_1b20b_12",b="_heading_1b20b_18",r={decorator:f,grid:x,column:B,heading:b},{expect:a,fn:m,userEvent:k,within:i}=__STORYBOOK_MODULE_TEST__,s=(e={})=>({id:"comment-1",numericId:63,author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:"msg-1",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements efficiently.",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:"msg-2",author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},content:"Thanks for the feedback!",createdAt:new Date(Date.now()-720*60*1e3)},{id:"msg-3",author:{id:"user-3",name:"Jane S.",avatarSrc:"https://i.pravatar.cc/40?img=3"},content:"I agree with this approach.",createdAt:new Date(Date.now()-360*60*1e3)},{id:"msg-4",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"Great, let us proceed then.",createdAt:new Date(Date.now()-7200*1e3)}],...e}),we={title:"Design System/Comments/CommentCard",component:d,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>o.jsx("div",{className:r.decorator,children:o.jsx(e,{})})],argTypes:{comment:{description:"Comment data including author, messages, participants, and metadata"},disabled:{control:"boolean",description:"Whether the card is disabled"},overflow:{control:"select",options:["hidden","displayed"],description:"Whether to truncate long messages or show them in full"},onClick:{action:"clicked",description:"Callback when card is clicked"},onResolve:{action:"resolved",description:"Callback when resolve button is clicked"},onToggleActionRequired:{action:"toggle-action-required",description:"Callback when action required is toggled"},onForward:{action:"forward",description:"Callback when forward action is triggered"},onMarkUnread:{action:"mark-unread",description:"Callback when mark as unread is triggered"},onCopyLink:{action:"copy-link",description:"Callback when copy link is triggered"},onDelete:{action:"delete",description:"Callback when delete is triggered"},formatTimestamp:{description:'Custom formatter for timestamps. Defaults to relative time format (e.g., "2d ago"). Can be overridden for custom formats like absolute dates.',table:{type:{summary:"(date: Date) => string"},defaultValue:{summary:"formatRelativeTime"}}}},args:{onClick:m(),onResolve:m(),onToggleActionRequired:m(),onForward:m(),onMarkUnread:m(),onCopyLink:m(),onDelete:m()}},l={args:{comment:s(),overflow:"hidden"},play:async({canvasElement:e})=>{const t=i(e),n=t.getByRole("button",{name:/Comment #/i});await a(n).toBeInTheDocument(),await a(n).toHaveAttribute("aria-label");const c=t.getByText(/resource allocation/);await a(c).toBeInTheDocument();const C=t.getByText(/3 replies/i);await a(C).toBeInTheDocument()}},p={args:{comment:s({isActionRequired:!0}),overflow:"hidden"},play:async({canvasElement:e})=>{const n=i(e).getByRole("button",{name:/action required/i});await a(n).toBeInTheDocument()}},u={args:{comment:s(),disabled:!0,overflow:"hidden"},play:async({canvasElement:e})=>{const n=i(e).getByRole("button",{name:/Comment #/i});await a(n).toBeInTheDocument(),await a(n).toBeDisabled()}},h={args:{comment:s(),overflow:"displayed"},play:async({canvasElement:e})=>{const t=i(e),n=t.getByRole("button"),c=t.getByText(/resource allocation/);await a(n).toBeInTheDocument(),await a(c).toBeInTheDocument()}},g={args:{comment:s({messages:[{id:"msg-1",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"This is a short single message comment.",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0}]}),overflow:"hidden"},play:async({canvasElement:e})=>{const t=i(e),n=t.getByRole("button"),c=t.getByText(/This is a short single message comment/);await a(n).toBeInTheDocument(),await a(c).toBeInTheDocument()}},v={render:()=>o.jsxs("div",{className:r.grid,children:[o.jsxs("div",{className:r.column,children:[o.jsx("h4",{className:r.heading,children:"Default"}),o.jsx(d,{comment:s(),overflow:"hidden"})]}),o.jsxs("div",{className:r.column,children:[o.jsx("h4",{className:r.heading,children:"Action Required"}),o.jsx(d,{comment:s(),overflow:"hidden"})]}),o.jsxs("div",{className:r.column,children:[o.jsx("h4",{className:r.heading,children:"Disabled"}),o.jsx(d,{comment:s(),disabled:!0,overflow:"hidden"})]}),o.jsxs("div",{className:r.column,children:[o.jsx("h4",{className:r.heading,children:"Full Message"}),o.jsx(d,{comment:s(),overflow:"displayed"})]})]}),play:async({canvasElement:e})=>{const n=i(e).getAllByRole("button",{name:/Comment #/i});await a(n.length).toBeGreaterThan(0)}},w={args:{comment:s({referenceTag:"Resource allocation"}),overflow:"hidden"},play:async({canvasElement:e})=>{const t=i(e);await a(t.getByText("Resource allocation")).toBeInTheDocument()}},y={args:{comment:s(),overflow:"hidden"},play:async({canvasElement:e,args:t})=>{const c=i(e).getByRole("button",{name:/Comment #63/i});await k.click(c),await a(t.onClick).toHaveBeenCalledOnce()}},D={args:{comment:s({messages:[{id:"msg-1",author:{id:"user-1",name:"Karen J."},content:"Initial message",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:"msg-2",author:{id:"user-2",name:"John D."},content:"One reply",createdAt:new Date(Date.now()-720*60*1e3)}]}),overflow:"hidden"},play:async({canvasElement:e})=>{const t=i(e);await a(t.getByText("1 reply")).toBeInTheDocument()}},T={args:{comment:s(),overflow:"hidden",formatTimestamp:e=>{const t={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return e.toLocaleDateString("en-US",t)}},play:async({canvasElement:e})=>{const n=i(e).getByRole("button",{name:/Comment #/i});await a(n).toBeInTheDocument();const c=n.textContent||"";await a(c).toMatch(/\d{4}/),await a(c).not.toMatch(/ago/i)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};const ye=["DefaultCard","ActionRequired","DisabledState","FullMessage","SingleMessage","Default","WithReferenceTag","WithCallbacks","SingleReply","CustomFormatter"];export{p as ActionRequired,T as CustomFormatter,v as Default,l as DefaultCard,u as DisabledState,h as FullMessage,g as SingleMessage,D as SingleReply,y as WithCallbacks,w as WithReferenceTag,ye as __namedExportsOrder,we as default};
