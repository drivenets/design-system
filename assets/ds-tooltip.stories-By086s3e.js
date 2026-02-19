import{j as o}from"./jsx-runtime-u17CrQMm.js";import{r as x}from"./iframe-DaWFeW3H.js";import{D as v}from"./ds-checkbox-BwvtyTkU.js";import{D as y}from"./ds-tooltip-BY93zhXV.js";import{D as d}from"./ds-icon-2Kkf3LCh.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DXLZwxM6.js";import"./index-CtF7H05h.js";import"./index-Bg5G61Kq.js";import"./index-DCQ4Ts3n.js";import"./index-DsBdYlOm.js";import"./index-BpdsuZ17.js";import"./index-Ctqz558P.js";import"./index-CZYKFMEa.js";import"./index-BR7dmqOs.js";import"./floating-ui.dom-BjS6HMTz.js";import"./ds-typography-XNs9d9js.js";import"./index-CNn0cUAd.js";const T="_storyContainer_g42uk_1",f={storyContainer:T},{expect:r,screen:c,userEvent:i,within:s}=__STORYBOOK_MODULE_TEST__,X={title:"Design System/Tooltip",component:y,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{content:{control:"text",description:"Content displayed within the tooltip"},children:{control:"object",description:"Element that triggers the tooltip on hover"}}},g=async(a,n)=>{const e=await s(a).findByText(/info/i);await i.hover(e),await r(await c.findByRole("tooltip",{name:new RegExp(n,"i")})).toBeVisible(),await i.unhover(e),await r(c.queryByText(new RegExp(n,"i"))).not.toBeInTheDocument()},w="This is the mouse over tooltip message.",l={args:{content:w,children:o.jsx(d,{icon:"info"})},play:async({canvasElement:a})=>{await g(a,w)}},m="Hey there! This tooltip pops up when you hover over it. If it gets too wordy, it'll split into a couple of lines. But if there's still not enough space, just tweak your text or trim it down with an ellipsis, like this: ‘...’. Remember, tooltips are a great way to provide additional context or guidance without cluttering the ...",p={args:{content:m,children:o.jsx(d,{icon:"info"})},play:async({canvasElement:a})=>{await g(a,m)}},h={render:function(){const[n,t]=x.useState(!1);return o.jsxs("div",{className:f.storyContainer,children:[o.jsx(y,{content:n?"This tooltip is controlled by the checkbox below":void 0,children:o.jsx(d,{icon:"info"})}),o.jsx(v,{label:"Enable tooltip",checked:n,onCheckedChange:e=>t(e===!0)})]})},play:async({canvasElement:a})=>{const n=s(a);let t=await n.findByText(/info/i);await i.hover(t),await r(c.queryByRole("tooltip")).not.toBeInTheDocument(),await i.unhover(t);const e=n.getByRole("checkbox");await i.click(e),t=await n.findByText(/info/i),await i.hover(t),await r(await c.findByRole("tooltip")).toBeVisible(),await i.unhover(t),await i.click(e),t=await n.findByText(/info/i),await i.hover(t),await r(c.queryByRole("tooltip")).not.toBeInTheDocument()}},u={args:{content:o.jsxs("div",{children:[o.jsx("strong",{children:"Multi-line"})," tooltip with ",o.jsx("em",{children:"JSX"}),o.jsx("br",{}),o.jsx("span",{style:{color:"#9cdcfe"},children:"No truncation should occur."})]}),children:o.jsx(d,{icon:"info"})},play:async({canvasElement:a})=>{const t=await s(a).findByText(/info/i);await i.hover(t);const e=await c.findByRole("tooltip");await r(e).toBeVisible(),await r(s(e).getByText(/Multi-line/i)).toBeInTheDocument(),await r(s(e).getByText(/JSX/i)).toBeInTheDocument(),await r(s(e).getByText(/No truncation should occur\./i)).toBeInTheDocument(),await i.unhover(t),await r(c.queryByRole("tooltip")).not.toBeInTheDocument()}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: defaultTooltipText,
    children: <DsIcon icon="info" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement, defaultTooltipText);
  }
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: longTooltipText,
    children: <DsIcon icon="info" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement, longTooltipText);
  }
}`,...p.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isFeatureEnabled, setFeatureEnabled] = useState(false);
    return <div className={styles.storyContainer}>
                <DsTooltip content={isFeatureEnabled ? 'This tooltip is controlled by the checkbox below' : undefined}>
                    <DsIcon icon="info" />
                </DsTooltip>
                <DsCheckbox label="Enable tooltip" checked={isFeatureEnabled} onCheckedChange={checked => setFeatureEnabled(checked === true)} />
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Initially tooltip should not show (checkbox is unchecked)
    let trigger = await canvas.findByText(/info/i);
    await userEvent.hover(trigger);
    await expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    await userEvent.unhover(trigger);

    // Check the checkbox to enable tooltip
    const checkbox = canvas.getByRole('checkbox');
    await userEvent.click(checkbox);

    // Now tooltip should show
    trigger = await canvas.findByText(/info/i);
    await userEvent.hover(trigger);
    await expect(await screen.findByRole('tooltip')).toBeVisible();
    await userEvent.unhover(trigger);

    // Uncheck the checkbox
    await userEvent.click(checkbox);

    // Tooltip should not show again
    trigger = await canvas.findByText(/info/i);
    await userEvent.hover(trigger);
    await expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  }
}`,...h.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: <div>
                <strong>Multi-line</strong> tooltip with <em>JSX</em>
                <br />
                <span style={{
        color: '#9cdcfe'
      }}>No truncation should occur.</span>
            </div>,
    children: <DsIcon icon="info" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const trigger = await canvas.findByText(/info/i);
    await userEvent.hover(trigger);
    const tooltip = await screen.findByRole('tooltip');
    await expect(tooltip).toBeVisible();
    await expect(within(tooltip).getByText(/Multi-line/i)).toBeInTheDocument();
    await expect(within(tooltip).getByText(/JSX/i)).toBeInTheDocument();
    await expect(within(tooltip).getByText(/No truncation should occur\\./i)).toBeInTheDocument();
    await userEvent.unhover(trigger);
    await expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
  }
}`,...u.parameters?.docs?.source}}};const L=["Default","LongText","ConditionalOpenWithBoolean","RichContent"];export{h as ConditionalOpenWithBoolean,l as Default,p as LongText,u as RichContent,L as __namedExportsOrder,X as default};
