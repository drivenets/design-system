import{j as n}from"./jsx-runtime-u17CrQMm.js";import{D as d}from"./ds-comment-card-D6BRZCyD.js";import"./index-C1hHQqhM.js";import"./iframe-CElvGea5.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-avatar-group-CWPYnDEk.js";import"./ds-avatar-BXc18bBb.js";import"./ds-tooltip-DGMj8-Ue.js";import"./index-nLwn96ba.js";import"./index-Dy3CKhCl.js";import"./index-BjM98C_E.js";import"./index-DD8Vzul0.js";import"./index-dR29_Vmi.js";import"./index-BAGixmve.js";import"./index-1DcmFCGO.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-7ZHx43Ky.js";import"./ds-typography-B325Y5ks.js";import"./index-D0OUjGY-.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-Ce3yrVmV.js";import"./index-Ct7KYQ5y.js";import"./ds-button-ApHgQ92K.js";import"./ds-button-legacy-C-c8ur0G.js";import"./ds-button-new-G3Pz_ZO5.js";import"./ds-icon-Cmuf6_qW.js";import"./ds-tag-5e4Iu0kX.js";import"./ds-dropdown-menu-I0yfuM_V.js";import"./Combination-B8Olf6bx.js";import"./ds-text-input-Cz4ddSKO.js";import"./portal-CjOdhtO-.js";import"./use-presence-DiLPE6Jz.js";import"./index-D07wfhPo.js";import"./index-B0Fukbpw.js";import"./format-relative-time-B216dNqo.js";const D="_decorator_1b20b_1",T="_grid_1b20b_5",x="_column_1b20b_12",f="_heading_1b20b_18",s={decorator:D,grid:T,column:x,heading:f},{expect:o,fn:i,within:m}=__STORYBOOK_MODULE_TEST__,r=(e={})=>({id:"comment-1",numericId:63,author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,messages:[{id:"msg-1",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase. This will help us maintain quality standards and meet all the project requirements efficiently.",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:"msg-2",author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},content:"Thanks for the feedback!",createdAt:new Date(Date.now()-720*60*1e3)},{id:"msg-3",author:{id:"user-3",name:"Jane S.",avatarSrc:"https://i.pravatar.cc/40?img=3"},content:"I agree with this approach.",createdAt:new Date(Date.now()-360*60*1e3)},{id:"msg-4",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"Great, let us proceed then.",createdAt:new Date(Date.now()-7200*1e3)}],...e}),oe={title:"Design System/Comments/CommentCard",component:d,parameters:{layout:"centered"},tags:["autodocs"],decorators:[e=>n.jsx("div",{className:s.decorator,children:n.jsx(e,{})})],argTypes:{comment:{description:"Comment data including author, messages, participants, and metadata"},disabled:{control:"boolean",description:"Whether the card is disabled"},overflow:{control:"select",options:["hidden","displayed"],description:"Whether to truncate long messages or show them in full"},onClick:{action:"clicked",description:"Callback when card is clicked"},onResolve:{action:"resolved",description:"Callback when resolve button is clicked"},onToggleActionRequired:{action:"toggle-action-required",description:"Callback when action required is toggled"},onForward:{action:"forward",description:"Callback when forward action is triggered"},onMarkUnread:{action:"mark-unread",description:"Callback when mark as unread is triggered"},onCopyLink:{action:"copy-link",description:"Callback when copy link is triggered"},onDelete:{action:"delete",description:"Callback when delete is triggered"},formatTimestamp:{description:'Custom formatter for timestamps. Defaults to relative time format (e.g., "2d ago"). Can be overridden for custom formats like absolute dates.',table:{type:{summary:"(date: Date) => string"},defaultValue:{summary:"formatRelativeTime"}}}},args:{onClick:i(),onResolve:i(),onToggleActionRequired:i(),onForward:i(),onMarkUnread:i(),onCopyLink:i(),onDelete:i()}},l={args:{comment:r(),overflow:"hidden"},play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("button",{name:/Comment #/i});await o(t).toBeInTheDocument(),await o(t).toHaveAttribute("aria-label");const c=a.getByText(/resource allocation/);await o(c).toBeInTheDocument();const y=a.getByText(/3 replies/i);await o(y).toBeInTheDocument()}},u={args:{comment:r({isActionRequired:!0}),overflow:"hidden"},play:async({canvasElement:e})=>{const t=m(e).getByRole("button",{name:/action required/i});await o(t).toBeInTheDocument()}},p={args:{comment:r(),disabled:!0,overflow:"hidden"},play:async({canvasElement:e})=>{const t=m(e).getByRole("button",{name:/Comment #/i});await o(t).toBeInTheDocument(),await o(t).toBeDisabled()}},h={args:{comment:r(),overflow:"displayed"},play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("button"),c=a.getByText(/resource allocation/);await o(t).toBeInTheDocument(),await o(c).toBeInTheDocument()}},g={args:{comment:r({messages:[{id:"msg-1",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"This is a short single message comment.",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0}]}),overflow:"hidden"},play:async({canvasElement:e})=>{const a=m(e),t=a.getByRole("button"),c=a.getByText(/This is a short single message comment/);await o(t).toBeInTheDocument(),await o(c).toBeInTheDocument()}},v={render:()=>n.jsxs("div",{className:s.grid,children:[n.jsxs("div",{className:s.column,children:[n.jsx("h4",{className:s.heading,children:"Default"}),n.jsx(d,{comment:r(),overflow:"hidden"})]}),n.jsxs("div",{className:s.column,children:[n.jsx("h4",{className:s.heading,children:"Action Required"}),n.jsx(d,{comment:r(),overflow:"hidden"})]}),n.jsxs("div",{className:s.column,children:[n.jsx("h4",{className:s.heading,children:"Disabled"}),n.jsx(d,{comment:r(),disabled:!0,overflow:"hidden"})]}),n.jsxs("div",{className:s.column,children:[n.jsx("h4",{className:s.heading,children:"Full Message"}),n.jsx(d,{comment:r(),overflow:"displayed"})]})]}),play:async({canvasElement:e})=>{const t=m(e).getAllByRole("button",{name:/Comment #/i});await o(t.length).toBeGreaterThan(0)}},w={args:{comment:r(),overflow:"hidden",formatTimestamp:e=>{const a={year:"numeric",month:"short",day:"numeric",hour:"2-digit",minute:"2-digit"};return e.toLocaleDateString("en-US",a)}},play:async({canvasElement:e})=>{const t=m(e).getByRole("button",{name:/Comment #/i});await o(t).toBeInTheDocument();const c=t.textContent||"";await o(c).toMatch(/\d{4}/),await o(c).not.toMatch(/ago/i)}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};const se=["DefaultCard","ActionRequired","DisabledState","FullMessage","SingleMessage","Default","CustomFormatter"];export{u as ActionRequired,w as CustomFormatter,v as Default,l as DefaultCard,p as DisabledState,h as FullMessage,g as SingleMessage,se as __namedExportsOrder,oe as default};
