import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as S}from"./iframe-CElvGea5.js";import{c as D}from"./index-C1hHQqhM.js";import{D as w}from"./ds-status-badge-CuJ-ohS4.js";import{D as o}from"./ds-typography-B325Y5ks.js";import{D as z}from"./ds-icon-Cmuf6_qW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D0OUjGY-.js";import"./index-DD8Vzul0.js";const A="_root_1gah6_1",I="_header_1gah6_27",F="_body_1gah6_28",L="_footer_1gah6_29",T={root:A,header:I,body:F,footer:L},M=({ref:t,size:a="medium",selectable:r=!1,selected:d=!1,highlightSelected:B=!1,disabled:y=!1,className:j,style:k,children:f,onClick:R,onKeyDown:N,..._})=>{const E=r?{role:"button",tabIndex:y?-1:0,"aria-pressed":d,"aria-disabled":y||void 0}:{};return e.jsx("div",{ref:t,..._,...E,onClick:y?void 0:R,onKeyDown:y?void 0:N,"data-size":a,"data-selectable":r||void 0,"data-selected":d||void 0,"data-disabled":y||void 0,"data-highlight":d&&B||void 0,className:D(T.root,j),style:k,children:f})},P=({className:t,children:a,ref:r,...d})=>e.jsx("div",{ref:r,className:D(T.header,t),...d,children:a}),O=({className:t,children:a,ref:r,...d})=>e.jsx("div",{ref:r,className:D(T.body,t),...d,children:a}),W=({className:t,children:a,ref:r,...d})=>e.jsx("div",{ref:r,className:D(T.footer,t),...d,children:a}),s={Root:M,Header:P,Body:O,Footer:W},K=["small","medium","large"],U="_container_1e3am_1",q="_headerRow_1e3am_7",G="_statsBlock_1e3am_15",$="_dataList_1e3am_21",Y="_textSecondary_1e3am_30",J="_textSuccess_1e3am_34",Q="_footer_1e3am_38",V="_collapsibleButton_1e3am_42",X="_collapseHeader_1e3am_46",Z="_collapseRoot_1e3am_52",ee="_collapsibleContent_1e3am_56",ae="_collapsibleContentInner_1e3am_66",c={container:U,headerRow:q,statsBlock:G,dataList:$,textSecondary:Y,textSuccess:J,footer:Q,collapsibleButton:V,collapseHeader:X,collapseRoot:Z,collapsibleContent:ee,collapsibleContentInner:ae},{expect:n,fn:H,userEvent:l,within:i}=__STORYBOOK_MODULE_TEST__,ye={title:"Design System/Card",component:s.Root,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select",options:K},selectable:{control:"boolean"},selected:{control:"boolean"},highlightSelected:{control:"boolean"},disabled:{control:"boolean"},className:{table:{disable:!0}},style:{table:{disable:!0}},onClick:{table:{disable:!0}},onKeyDown:{table:{disable:!0}},onFocus:{table:{disable:!0}},onBlur:{table:{disable:!0}}},args:{}},p={parameters:{docs:{description:{story:"Default card is a static display container with no interactions."}}},args:{size:"medium"},render:t=>e.jsxs(s.Root,{...t,children:[e.jsx(s.Header,{children:"Card Title"}),e.jsx(s.Body,{children:"Card content goes here"})]}),play:async({canvasElement:t})=>{const a=i(t);await n(a.getByText("Card Title")).toBeInTheDocument(),await n(a.getByText("Card content goes here")).toBeInTheDocument(),await n(a.queryByRole("button")).not.toBeInTheDocument()}},m={parameters:{docs:{description:{story:"Card comes in three sizes: small (224px), medium (264px), and large (368px)."}}},render:()=>e.jsxs("div",{className:c.container,children:[e.jsxs(s.Root,{size:"small",children:[e.jsx(s.Header,{children:"Small Card"}),e.jsx(s.Body,{children:"Small content"})]}),e.jsxs(s.Root,{size:"medium",children:[e.jsx(s.Header,{children:"Medium Card"}),e.jsx(s.Body,{children:"Medium content"})]}),e.jsxs(s.Root,{size:"large",children:[e.jsx(s.Header,{children:"Large Card"}),e.jsx(s.Body,{children:"Large content"})]})]}),play:async({canvasElement:t})=>{const a=i(t),r=a.getByText("Small Card").closest("[data-size]"),d=a.getByText("Medium Card").closest("[data-size]"),B=a.getByText("Large Card").closest("[data-size]");await n(r).toHaveAttribute("data-size","small"),await n(d).toHaveAttribute("data-size","medium"),await n(B).toHaveAttribute("data-size","large")}},h={parameters:{docs:{description:{story:"Card with header, body, and footer sections."}}},render:()=>e.jsxs(s.Root,{size:"large",children:[e.jsxs(s.Header,{className:c.headerRow,children:[e.jsx(o,{variant:"heading3",children:"Card Title"}),e.jsx(w,{icon:"check_circle",status:"active",ghost:!0})]}),e.jsxs(s.Body,{className:c.statsBlock,children:[e.jsx(o,{variant:"body-md-bold",children:"12 of 12 Devices"}),e.jsx(o,{variant:"body-sm-reg",children:"Success 10 | Failed 1 | Skipped 1"})]}),e.jsx(s.Footer,{className:c.footer,children:e.jsx(o,{variant:"body-sm-reg",children:"Last updated: 2 min ago"})})]}),play:async({canvasElement:t})=>{const a=i(t);await n(a.getByText("Card Title")).toBeInTheDocument(),await n(a.getByText("12 of 12 Devices")).toBeInTheDocument(),await n(a.getByText("Last updated: 2 min ago")).toBeInTheDocument()}},g={parameters:{docs:{description:{story:"A realistic step card example showing deployment status with detailed metrics."}}},render:()=>e.jsxs(s.Root,{size:"large",children:[e.jsxs(s.Header,{className:c.headerRow,children:[e.jsx(o,{variant:"heading3",children:"Canary"}),e.jsx(w,{icon:"check_circle",status:"active",label:"Complete"})]}),e.jsxs(s.Body,{className:c.statsBlock,children:[e.jsx(o,{variant:"body-md-bold",children:"12 of 12 Devices"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSecondary,children:"Success 10 | Failed 1 | Skipped 1"})]}),e.jsxs(s.Body,{className:c.dataList,children:[e.jsx(o,{variant:"body-sm-reg",children:"Config Push"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSuccess,children:"Complete"}),e.jsx(o,{variant:"body-sm-reg",children:"Dwell Time (60 min.)"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSuccess,children:"Complete"}),e.jsx(o,{variant:"body-sm-reg",children:"Failed"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSecondary,children:"1 (8%)"}),e.jsx(o,{variant:"body-sm-reg",children:"Failure threshold"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSecondary,children:"5 or 10%"}),e.jsx(o,{variant:"body-sm-reg",children:"Threshold state"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSecondary,children:"Normal"})]})]}),play:async({canvasElement:t})=>{const a=i(t);await n(a.getByText("Canary")).toBeInTheDocument(),await n(a.getByText("12 of 12 Devices")).toBeInTheDocument(),await n(a.getByText("Config Push")).toBeInTheDocument()}},u={parameters:{docs:{description:{story:"Selectable cards act as buttons and can be clicked to toggle selection. Use `selectable` prop to enable."}}},args:{selectable:!0,selected:!1,onClick:H()},render:t=>e.jsxs(s.Root,{...t,children:[e.jsx(s.Header,{children:"Selectable Card"}),e.jsx(s.Body,{children:"Click to select this card"})]}),play:async({args:t,canvasElement:a})=>{const d=i(a).getByRole("button");await n(d).toBeInTheDocument(),await n(d).toHaveAttribute("aria-pressed","false"),await l.click(d),await n(t.onClick).toHaveBeenCalledTimes(1)}},b={parameters:{docs:{description:{story:"When `highlightSelected` is true, selected cards display a highlighted background color."}}},args:{selectable:!0,selected:!0,highlightSelected:!0},render:t=>e.jsxs(s.Root,{...t,children:[e.jsx(s.Header,{children:"Highlighted Card"}),e.jsx(s.Body,{children:"This card has a highlighted background when selected"})]}),play:async({canvasElement:t})=>{const r=i(t).getByRole("button");await n(r).toHaveAttribute("aria-pressed","true"),await n(r).toHaveAttribute("data-highlight","true"),await n(r).toHaveAttribute("data-selected","true")}},C={parameters:{docs:{description:{story:"Controlled selectable card with state management."}}},render:function(){const[a,r]=S.useState(!1);return e.jsxs(s.Root,{selectable:!0,selected:a,onClick:()=>r(!a),children:[e.jsx(s.Header,{children:"Controlled Card"}),e.jsx(s.Body,{children:a?"Selected! Click to deselect.":"Click to select."})]})},play:async({canvasElement:t})=>{const a=i(t),r=a.getByRole("button");await n(r).toHaveAttribute("aria-pressed","false"),await l.click(r),await n(r).toHaveAttribute("aria-pressed","true"),await n(a.getByText("Selected! Click to deselect.")).toBeInTheDocument(),await l.click(r),await n(r).toHaveAttribute("aria-pressed","false")}},v={parameters:{docs:{description:{story:"Disabled cards cannot be interacted with."}}},args:{selectable:!0,disabled:!0,onClick:H()},render:t=>e.jsxs(s.Root,{size:"large",...t,children:[e.jsxs(s.Header,{className:c.headerRow,children:[e.jsx(o,{variant:"heading3",children:"Canary"}),e.jsx(w,{icon:"check_circle",status:"active",label:"Complete"})]}),e.jsxs(s.Body,{className:c.statsBlock,children:[e.jsx(o,{variant:"body-md-bold",children:"12 of 12 Devices"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSecondary,children:"Success 10 | Failed 1 | Skipped 1"})]}),e.jsxs(s.Body,{className:c.dataList,children:[e.jsx(o,{variant:"body-sm-reg",children:"Config Push"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSuccess,children:"Complete"}),e.jsx(o,{variant:"body-sm-reg",children:"Dwell Time (60 min.)"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSuccess,children:"Complete"}),e.jsx(o,{variant:"body-sm-reg",children:"Failed"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSecondary,children:"1 (8%)"}),e.jsx(o,{variant:"body-sm-reg",children:"Failure threshold"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSecondary,children:"5 or 10%"}),e.jsx(o,{variant:"body-sm-reg",children:"Threshold state"}),e.jsx(o,{variant:"body-sm-reg",className:c.textSecondary,children:"Normal"})]})]}),play:async({args:t,canvasElement:a})=>{const d=i(a).getByRole("button");await n(d).toHaveAttribute("aria-disabled","true"),await n(d).toHaveAttribute("tabindex","-1"),await l.click(d,{pointerEventsCheck:0}),await n(t.onClick).not.toHaveBeenCalled(),d.focus(),await l.keyboard("{Enter}"),await n(t.onClick).not.toHaveBeenCalled(),await l.keyboard(" "),await n(t.onClick).not.toHaveBeenCalled()}},x={parameters:{docs:{description:{story:"Collapsible card pattern using composition. Click the header to toggle body visibility. This is not built-in functionality - use local state to implement."}}},render:function(){const[a,r]=S.useState(!0);return e.jsxs(s.Root,{size:"large",className:c.collapseRoot,children:[e.jsxs(s.Header,{className:c.collapseHeader,children:[e.jsx("button",{type:"button",className:c.collapsibleButton,onClick:()=>r(!a),"aria-expanded":a,children:e.jsx(z,{icon:"expand_more",style:{transform:a?"rotate(180deg)":"rotate(0deg)",transition:"transform 150ms ease-in-out"}})}),e.jsx(o,{variant:"heading3",children:"Collapsible Card"})]}),e.jsx(s.Body,{className:c.collapsibleContent,"data-collapsed":!a,children:e.jsx("div",{className:c.collapsibleContentInner,children:e.jsx(o,{variant:"body-md-reg",children:"This content can be collapsed by clicking the header. The height animates smoothly using CSS Grid."})})})]})},play:async({canvasElement:t})=>{const r=i(t).getByRole("button");await n(r).toHaveAttribute("aria-expanded","true"),await l.click(r),await n(r).toHaveAttribute("aria-expanded","false"),await l.click(r),await n(r).toHaveAttribute("aria-expanded","true")}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const pe=["Default","Sizes","WithHeaderAndFooter","StepCard","Selectable","HighlightSelected","SelectableControlled","Disabled","Collapsible"];export{x as Collapsible,p as Default,v as Disabled,b as HighlightSelected,u as Selectable,C as SelectableControlled,m as Sizes,g as StepCard,h as WithHeaderAndFooter,pe as __namedExportsOrder,ye as default};
