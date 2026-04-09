import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-Ds2dQwfs.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{i}from"./ds-icon.types-r61yJj8h.js";import{t as a}from"./ds-icon-BzQCRRjG.js";import{t as o}from"./ds-typography-3uEaYfy3.js";import{t as s}from"./ds-typography-C4vbFJJi.js";import{i as c,n as l,r as u,t as d}from"./ds-card-DRXGi06j.js";import{t as f}from"./ds-status-badge-BBlI5o53.js";import{t as p}from"./ds-status-badge-CiwA_zue.js";var m,h,g,_,v,y,b,x,S,C,w,T,E,D=t((()=>{m=`_container_1e3am_1`,h=`_headerRow_1e3am_7`,g=`_statsBlock_1e3am_15`,_=`_dataList_1e3am_21`,v=`_textSecondary_1e3am_30`,y=`_textSuccess_1e3am_34`,b=`_footer_1e3am_38`,x=`_collapsibleButton_1e3am_42`,S=`_collapseHeader_1e3am_46`,C=`_collapseRoot_1e3am_52`,w=`_collapsibleContent_1e3am_56`,T=`_collapsibleContentInner_1e3am_66`,E={container:m,headerRow:h,statsBlock:g,dataList:_,textSecondary:v,textSuccess:y,footer:b,collapsibleButton:x,collapseHeader:S,collapseRoot:C,collapsibleContent:w,collapsibleContentInner:T}})),O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W;t((()=>{O=e(n(),1),d(),u(),p(),s(),a(),D(),k=r(),{expect:A,fn:j,userEvent:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Design System/Card`,component:c.Root,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:l},selectable:{control:`boolean`},selected:{control:`boolean`},highlightSelected:{control:`boolean`},disabled:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},onClick:{table:{disable:!0}},onKeyDown:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}}}},F={parameters:{docs:{description:{story:`Default card is a static display container with no interactions.`}}},args:{size:`medium`},render:e=>(0,k.jsxs)(c.Root,{...e,children:[(0,k.jsx)(c.Header,{children:`Card Title`}),(0,k.jsx)(c.Body,{children:`Card content goes here`})]}),play:async({canvasElement:e})=>{let t=N(e);await A(t.getByText(`Card Title`)).toBeInTheDocument(),await A(t.getByText(`Card content goes here`)).toBeInTheDocument(),await A(t.queryByRole(`button`)).not.toBeInTheDocument()}},I={parameters:{docs:{description:{story:`Card comes in three sizes: small (224px), medium (264px), and large (368px).`}}},render:()=>(0,k.jsxs)(`div`,{className:E.container,children:[(0,k.jsxs)(c.Root,{size:`small`,children:[(0,k.jsx)(c.Header,{children:`Small Card`}),(0,k.jsx)(c.Body,{children:`Small content`})]}),(0,k.jsxs)(c.Root,{size:`medium`,children:[(0,k.jsx)(c.Header,{children:`Medium Card`}),(0,k.jsx)(c.Body,{children:`Medium content`})]}),(0,k.jsxs)(c.Root,{size:`large`,children:[(0,k.jsx)(c.Header,{children:`Large Card`}),(0,k.jsx)(c.Body,{children:`Large content`})]})]}),play:async({canvasElement:e})=>{let t=N(e),n=t.getByText(`Small Card`).closest(`[data-size]`),r=t.getByText(`Medium Card`).closest(`[data-size]`),i=t.getByText(`Large Card`).closest(`[data-size]`);await A(n).toHaveAttribute(`data-size`,`small`),await A(r).toHaveAttribute(`data-size`,`medium`),await A(i).toHaveAttribute(`data-size`,`large`)}},L={parameters:{docs:{description:{story:`Card with header, body, and footer sections.`}}},render:()=>(0,k.jsxs)(c.Root,{size:`large`,children:[(0,k.jsxs)(c.Header,{className:E.headerRow,children:[(0,k.jsx)(o,{variant:`heading3`,children:`Card Title`}),(0,k.jsx)(f,{icon:`check_circle`,status:`active`,ghost:!0})]}),(0,k.jsxs)(c.Body,{className:E.statsBlock,children:[(0,k.jsx)(o,{variant:`body-md-bold`,children:`12 of 12 Devices`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Success 10 | Failed 1 | Skipped 1`})]}),(0,k.jsx)(c.Footer,{className:E.footer,children:(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Last updated: 2 min ago`})})]}),play:async({canvasElement:e})=>{let t=N(e);await A(t.getByText(`Card Title`)).toBeInTheDocument(),await A(t.getByText(`12 of 12 Devices`)).toBeInTheDocument(),await A(t.getByText(`Last updated: 2 min ago`)).toBeInTheDocument()}},R={parameters:{docs:{description:{story:`A realistic step card example showing deployment status with detailed metrics.`}}},render:()=>(0,k.jsxs)(c.Root,{size:`large`,children:[(0,k.jsxs)(c.Header,{className:E.headerRow,children:[(0,k.jsx)(o,{variant:`heading3`,children:`Canary`}),(0,k.jsx)(f,{icon:`check_circle`,status:`active`,label:`Complete`})]}),(0,k.jsxs)(c.Body,{className:E.statsBlock,children:[(0,k.jsx)(o,{variant:`body-md-bold`,children:`12 of 12 Devices`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSecondary,children:`Success 10 | Failed 1 | Skipped 1`})]}),(0,k.jsxs)(c.Body,{className:E.dataList,children:[(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Config Push`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSuccess,children:`Complete`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Dwell Time (60 min.)`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSuccess,children:`Complete`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Failed`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSecondary,children:`1 (8%)`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Failure threshold`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSecondary,children:`5 or 10%`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Threshold state`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSecondary,children:`Normal`})]})]}),play:async({canvasElement:e})=>{let t=N(e);await A(t.getByText(`Canary`)).toBeInTheDocument(),await A(t.getByText(`12 of 12 Devices`)).toBeInTheDocument(),await A(t.getByText(`Config Push`)).toBeInTheDocument()}},z={parameters:{docs:{description:{story:"Selectable cards act as buttons and can be clicked to toggle selection. Use `selectable` prop to enable."}}},args:{selectable:!0,selected:!1,onClick:j()},render:e=>(0,k.jsxs)(c.Root,{...e,children:[(0,k.jsx)(c.Header,{children:`Selectable Card`}),(0,k.jsx)(c.Body,{children:`Click to select this card`})]}),play:async({args:e,canvasElement:t})=>{let n=N(t).getByRole(`button`);await A(n).toBeInTheDocument(),await A(n).toHaveAttribute(`aria-pressed`,`false`),await M.click(n),await A(e.onClick).toHaveBeenCalledTimes(1)}},B={parameters:{docs:{description:{story:"When `highlightSelected` is true, selected cards display a highlighted background color."}}},args:{selectable:!0,selected:!0,highlightSelected:!0},render:e=>(0,k.jsxs)(c.Root,{...e,children:[(0,k.jsx)(c.Header,{children:`Highlighted Card`}),(0,k.jsx)(c.Body,{children:`This card has a highlighted background when selected`})]}),play:async({canvasElement:e})=>{let t=N(e).getByRole(`button`);await A(t).toHaveAttribute(`aria-pressed`,`true`),await A(t).toHaveAttribute(`data-highlight`,`true`),await A(t).toHaveAttribute(`data-selected`,`true`)}},V={parameters:{docs:{description:{story:`Controlled selectable card with state management.`}}},render:function(){let[e,t]=(0,O.useState)(!1);return(0,k.jsxs)(c.Root,{selectable:!0,selected:e,onClick:()=>t(!e),children:[(0,k.jsx)(c.Header,{children:`Controlled Card`}),(0,k.jsx)(c.Body,{children:e?`Selected! Click to deselect.`:`Click to select.`})]})},play:async({canvasElement:e})=>{let t=N(e),n=t.getByRole(`button`);await A(n).toHaveAttribute(`aria-pressed`,`false`),await M.click(n),await A(n).toHaveAttribute(`aria-pressed`,`true`),await A(t.getByText(`Selected! Click to deselect.`)).toBeInTheDocument(),await M.click(n),await A(n).toHaveAttribute(`aria-pressed`,`false`)}},H={parameters:{docs:{description:{story:`Disabled cards cannot be interacted with.`}}},args:{selectable:!0,disabled:!0,onClick:j()},render:e=>(0,k.jsxs)(c.Root,{size:`large`,...e,children:[(0,k.jsxs)(c.Header,{className:E.headerRow,children:[(0,k.jsx)(o,{variant:`heading3`,children:`Canary`}),(0,k.jsx)(f,{icon:`check_circle`,status:`active`,label:`Complete`})]}),(0,k.jsxs)(c.Body,{className:E.statsBlock,children:[(0,k.jsx)(o,{variant:`body-md-bold`,children:`12 of 12 Devices`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSecondary,children:`Success 10 | Failed 1 | Skipped 1`})]}),(0,k.jsxs)(c.Body,{className:E.dataList,children:[(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Config Push`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSuccess,children:`Complete`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Dwell Time (60 min.)`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSuccess,children:`Complete`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Failed`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSecondary,children:`1 (8%)`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Failure threshold`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSecondary,children:`5 or 10%`}),(0,k.jsx)(o,{variant:`body-sm-reg`,children:`Threshold state`}),(0,k.jsx)(o,{variant:`body-sm-reg`,className:E.textSecondary,children:`Normal`})]})]}),play:async({args:e,canvasElement:t})=>{let n=N(t).getByRole(`button`);await A(n).toHaveAttribute(`aria-disabled`,`true`),await A(n).toHaveAttribute(`tabindex`,`-1`),await M.click(n,{pointerEventsCheck:0}),await A(e.onClick).not.toHaveBeenCalled(),n.focus(),await M.keyboard(`{Enter}`),await A(e.onClick).not.toHaveBeenCalled(),await M.keyboard(` `),await A(e.onClick).not.toHaveBeenCalled()}},U={parameters:{docs:{description:{story:`Collapsible card pattern using composition. Click the header to toggle body visibility. This is not built-in functionality - use local state to implement.`}}},render:function(){let[e,t]=(0,O.useState)(!0);return(0,k.jsxs)(c.Root,{size:`large`,className:E.collapseRoot,children:[(0,k.jsxs)(c.Header,{className:E.collapseHeader,children:[(0,k.jsx)(`button`,{type:`button`,className:E.collapsibleButton,onClick:()=>t(!e),"aria-expanded":e,children:(0,k.jsx)(i,{icon:`expand_more`,style:{transform:e?`rotate(180deg)`:`rotate(0deg)`,transition:`transform 150ms ease-in-out`}})}),(0,k.jsx)(o,{variant:`heading3`,children:`Collapsible Card`})]}),(0,k.jsx)(c.Body,{className:E.collapsibleContent,"data-collapsed":!e,children:(0,k.jsx)(`div`,{className:E.collapsibleContentInner,children:(0,k.jsx)(o,{variant:`body-md-reg`,children:`This content can be collapsed by clicking the header. The height animates smoothly using CSS Grid.`})})})]})},play:async({canvasElement:e})=>{let t=N(e).getByRole(`button`);await A(t).toHaveAttribute(`aria-expanded`,`true`),await M.click(t),await A(t).toHaveAttribute(`aria-expanded`,`false`),await M.click(t),await A(t).toHaveAttribute(`aria-expanded`,`true`)}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Default card is a static display container with no interactions.'
      }
    }
  },
  args: {
    size: 'medium'
  },
  render: args => <DsCard.Root {...args}>
            <DsCard.Header>Card Title</DsCard.Header>
            <DsCard.Body>Card content goes here</DsCard.Body>
        </DsCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Card Title')).toBeInTheDocument();
    await expect(canvas.getByText('Card content goes here')).toBeInTheDocument();

    // Default card should not be a button
    await expect(canvas.queryByRole('button')).not.toBeInTheDocument();
  }
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Card comes in three sizes: small (224px), medium (264px), and large (368px).'
      }
    }
  },
  render: () => <div className={styles.container}>
            <DsCard.Root size="small">
                <DsCard.Header>Small Card</DsCard.Header>
                <DsCard.Body>Small content</DsCard.Body>
            </DsCard.Root>

            <DsCard.Root size="medium">
                <DsCard.Header>Medium Card</DsCard.Header>
                <DsCard.Body>Medium content</DsCard.Body>
            </DsCard.Root>

            <DsCard.Root size="large">
                <DsCard.Header>Large Card</DsCard.Header>
                <DsCard.Body>Large content</DsCard.Body>
            </DsCard.Root>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const smallCard = canvas.getByText('Small Card').closest('[data-size]');
    const mediumCard = canvas.getByText('Medium Card').closest('[data-size]');
    const largeCard = canvas.getByText('Large Card').closest('[data-size]');
    await expect(smallCard).toHaveAttribute('data-size', 'small');
    await expect(mediumCard).toHaveAttribute('data-size', 'medium');
    await expect(largeCard).toHaveAttribute('data-size', 'large');
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Card with header, body, and footer sections.'
      }
    }
  },
  render: () => <DsCard.Root size="large">
            <DsCard.Header className={styles.headerRow}>
                <DsTypography variant="heading3">Card Title</DsTypography>
                <DsStatusBadge icon="check_circle" status="active" ghost />
            </DsCard.Header>
            <DsCard.Body className={styles.statsBlock}>
                <DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
                <DsTypography variant="body-sm-reg">Success 10 | Failed 1 | Skipped 1</DsTypography>
            </DsCard.Body>
            <DsCard.Footer className={styles.footer}>
                <DsTypography variant="body-sm-reg">Last updated: 2 min ago</DsTypography>
            </DsCard.Footer>
        </DsCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Card Title')).toBeInTheDocument();
    await expect(canvas.getByText('12 of 12 Devices')).toBeInTheDocument();
    await expect(canvas.getByText('Last updated: 2 min ago')).toBeInTheDocument();
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A realistic step card example showing deployment status with detailed metrics.'
      }
    }
  },
  render: () => <DsCard.Root size="large">
            <DsCard.Header className={styles.headerRow}>
                <DsTypography variant="heading3">Canary</DsTypography>
                <DsStatusBadge icon="check_circle" status="active" label="Complete" />
            </DsCard.Header>
            <DsCard.Body className={styles.statsBlock}>
                <DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSecondary}>
                    Success 10 | Failed 1 | Skipped 1
                </DsTypography>
            </DsCard.Body>
            <DsCard.Body className={styles.dataList}>
                <DsTypography variant="body-sm-reg">Config Push</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSuccess}>
                    Complete
                </DsTypography>
                <DsTypography variant="body-sm-reg">Dwell Time (60 min.)</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSuccess}>
                    Complete
                </DsTypography>
                <DsTypography variant="body-sm-reg">Failed</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSecondary}>
                    1 (8%)
                </DsTypography>
                <DsTypography variant="body-sm-reg">Failure threshold</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSecondary}>
                    5 or 10%
                </DsTypography>
                <DsTypography variant="body-sm-reg">Threshold state</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSecondary}>
                    Normal
                </DsTypography>
            </DsCard.Body>
        </DsCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Canary')).toBeInTheDocument();
    await expect(canvas.getByText('12 of 12 Devices')).toBeInTheDocument();
    await expect(canvas.getByText('Config Push')).toBeInTheDocument();
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Selectable cards act as buttons and can be clicked to toggle selection. Use \`selectable\` prop to enable.'
      }
    }
  },
  args: {
    selectable: true,
    selected: false,
    onClick: fn()
  },
  render: args => <DsCard.Root {...args}>
            <DsCard.Header>Selectable Card</DsCard.Header>
            <DsCard.Body>Click to select this card</DsCard.Body>
        </DsCard.Root>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button');
    await expect(card).toBeInTheDocument();
    await expect(card).toHaveAttribute('aria-pressed', 'false');

    // Click interaction
    await userEvent.click(card);
    await expect(args.onClick).toHaveBeenCalledTimes(1);
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'When \`highlightSelected\` is true, selected cards display a highlighted background color.'
      }
    }
  },
  args: {
    selectable: true,
    selected: true,
    highlightSelected: true
  },
  render: args => <DsCard.Root {...args}>
            <DsCard.Header>Highlighted Card</DsCard.Header>
            <DsCard.Body>This card has a highlighted background when selected</DsCard.Body>
        </DsCard.Root>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button');
    await expect(card).toHaveAttribute('aria-pressed', 'true');
    await expect(card).toHaveAttribute('data-highlight', 'true');
    await expect(card).toHaveAttribute('data-selected', 'true');
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Controlled selectable card with state management.'
      }
    }
  },
  render: function Render() {
    const [selected, setSelected] = useState(false);
    return <DsCard.Root selectable selected={selected} onClick={() => setSelected(!selected)}>
                <DsCard.Header>Controlled Card</DsCard.Header>
                <DsCard.Body>{selected ? 'Selected! Click to deselect.' : 'Click to select.'}</DsCard.Body>
            </DsCard.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button');
    await expect(card).toHaveAttribute('aria-pressed', 'false');
    await userEvent.click(card);
    await expect(card).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByText('Selected! Click to deselect.')).toBeInTheDocument();
    await userEvent.click(card);
    await expect(card).toHaveAttribute('aria-pressed', 'false');
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Disabled cards cannot be interacted with.'
      }
    }
  },
  args: {
    selectable: true,
    disabled: true,
    onClick: fn()
  },
  render: args => <DsCard.Root size="large" {...args}>
            <DsCard.Header className={styles.headerRow}>
                <DsTypography variant="heading3">Canary</DsTypography>
                <DsStatusBadge icon="check_circle" status="active" label="Complete" />
            </DsCard.Header>
            <DsCard.Body className={styles.statsBlock}>
                <DsTypography variant="body-md-bold">12 of 12 Devices</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSecondary}>
                    Success 10 | Failed 1 | Skipped 1
                </DsTypography>
            </DsCard.Body>
            <DsCard.Body className={styles.dataList}>
                <DsTypography variant="body-sm-reg">Config Push</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSuccess}>
                    Complete
                </DsTypography>
                <DsTypography variant="body-sm-reg">Dwell Time (60 min.)</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSuccess}>
                    Complete
                </DsTypography>
                <DsTypography variant="body-sm-reg">Failed</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSecondary}>
                    1 (8%)
                </DsTypography>
                <DsTypography variant="body-sm-reg">Failure threshold</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSecondary}>
                    5 or 10%
                </DsTypography>
                <DsTypography variant="body-sm-reg">Threshold state</DsTypography>
                <DsTypography variant="body-sm-reg" className={styles.textSecondary}>
                    Normal
                </DsTypography>
            </DsCard.Body>
        </DsCard.Root>,
  play: async ({
    args,
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getByRole('button');
    await expect(card).toHaveAttribute('aria-disabled', 'true');
    await expect(card).toHaveAttribute('tabindex', '-1');
    await userEvent.click(card, {
      pointerEventsCheck: 0
    });
    await expect(args.onClick).not.toHaveBeenCalled();
    card.focus();
    await userEvent.keyboard('{Enter}');
    await expect(args.onClick).not.toHaveBeenCalled();
    await userEvent.keyboard(' ');
    await expect(args.onClick).not.toHaveBeenCalled();
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Collapsible card pattern using composition. Click the header to toggle body visibility. This is not built-in functionality - use local state to implement.'
      }
    }
  },
  render: function Render() {
    const [expanded, setExpanded] = useState(true);
    return <DsCard.Root size="large" className={styles.collapseRoot}>
                <DsCard.Header className={styles.collapseHeader}>
                    <button type="button" className={styles.collapsibleButton} onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                        <DsIcon icon="expand_more" style={{
            transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 150ms ease-in-out'
          }} />
                    </button>
                    <DsTypography variant="heading3">Collapsible Card</DsTypography>
                </DsCard.Header>
                <DsCard.Body className={styles.collapsibleContent} data-collapsed={!expanded}>
                    <div className={styles.collapsibleContentInner}>
                        <DsTypography variant="body-md-reg">
                            This content can be collapsed by clicking the header. The height animates smoothly using CSS
                            Grid.
                        </DsTypography>
                    </div>
                </DsCard.Body>
            </DsCard.Root>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole('button');

    // Initially expanded
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    // Click to collapse
    await userEvent.click(toggleButton);
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    // Click to expand again
    await userEvent.click(toggleButton);
    await expect(toggleButton).toHaveAttribute('aria-expanded', 'true');
  }
}`,...U.parameters?.docs?.source}}},W=[`Default`,`Sizes`,`WithHeaderAndFooter`,`StepCard`,`Selectable`,`HighlightSelected`,`SelectableControlled`,`Disabled`,`Collapsible`]}))();export{U as Collapsible,F as Default,H as Disabled,B as HighlightSelected,z as Selectable,V as SelectableControlled,I as Sizes,R as StepCard,L as WithHeaderAndFooter,W as __namedExportsOrder,P as default};