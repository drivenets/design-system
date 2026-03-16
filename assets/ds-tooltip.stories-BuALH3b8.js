import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CCq6bv3x.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{i}from"./ds-icon.types-DO-j-_np.js";import{t as a}from"./ds-icon-BdpcGtWb.js";import{n as o,t as s}from"./ds-tooltip-BzCkHkCW.js";import{r as c}from"./ds-checkbox.types-DoaghF72.js";import{t as l}from"./ds-checkbox-Bbd1iUCm.js";var u,d,f,p,m=t((()=>{u=`_storyContainer_g42uk_1`,d=`_controlsContainer_g42uk_8`,f=`_helpText_g42uk_14`,p={storyContainer:u,controlsContainer:d,helpText:f}})),h,g,_,v,y,b,x,S,C,w,T,E,D,O,k;t((()=>{h=e(n(),1),l(),o(),m(),a(),g=r(),{expect:_,screen:v,userEvent:y,within:b}=__STORYBOOK_MODULE_TEST__,x={title:`Design System/Tooltip`,component:s,parameters:{layout:`centered`},argTypes:{content:{control:`text`,description:`Content displayed within the tooltip`},children:{control:`object`,description:`Element that triggers the tooltip on hover`}}},S=async(e,t)=>{let n=await b(e).findByText(/info/i);await y.hover(n),await _(await v.findByRole(`tooltip`,{name:new RegExp(t,`i`)})).toBeVisible(),await y.unhover(n),await _(v.queryByText(new RegExp(t,`i`))).not.toBeInTheDocument()},C=`This is the mouse over tooltip message.`,w={args:{content:C,children:(0,g.jsx)(i,{icon:`info`})},play:async({canvasElement:e})=>{await S(e,C)}},T=`Hey there! This tooltip pops up when you hover over it. If it gets too wordy, it'll split into a couple of lines. But if there's still not enough space, just tweak your text or trim it down with an ellipsis, like this: ‘...’. Remember, tooltips are a great way to provide additional context or guidance without cluttering the ...`,E={args:{content:T,children:(0,g.jsx)(i,{icon:`info`})},play:async({canvasElement:e})=>{await S(e,T)}},D={render:function(){let[e,t]=(0,h.useState)(!1);return(0,g.jsxs)(`div`,{className:p.storyContainer,children:[(0,g.jsx)(s,{content:e?`This tooltip is controlled by the checkbox below`:void 0,children:(0,g.jsx)(i,{icon:`info`})}),(0,g.jsx)(c,{label:`Enable tooltip`,checked:e,onCheckedChange:e=>t(e===!0)})]})},play:async({canvasElement:e})=>{let t=b(e),n=await t.findByText(/info/i);await y.hover(n),await _(v.queryByRole(`tooltip`)).not.toBeInTheDocument(),await y.unhover(n);let r=t.getByRole(`checkbox`);await y.click(r),n=await t.findByText(/info/i),await y.hover(n),await _(await v.findByRole(`tooltip`)).toBeVisible(),await y.unhover(n),await y.click(r),n=await t.findByText(/info/i),await y.hover(n),await _(v.queryByRole(`tooltip`)).not.toBeInTheDocument()}},O={args:{content:(0,g.jsxs)(`div`,{children:[(0,g.jsx)(`strong`,{children:`Multi-line`}),` tooltip with `,(0,g.jsx)(`em`,{children:`JSX`}),(0,g.jsx)(`br`,{}),(0,g.jsx)(`span`,{style:{color:`#9cdcfe`},children:`No truncation should occur.`})]}),children:(0,g.jsx)(i,{icon:`info`})},play:async({canvasElement:e})=>{let t=await b(e).findByText(/info/i);await y.hover(t);let n=await v.findByRole(`tooltip`);await _(n).toBeVisible(),await _(b(n).getByText(/Multi-line/i)).toBeInTheDocument(),await _(b(n).getByText(/JSX/i)).toBeInTheDocument(),await _(b(n).getByText(/No truncation should occur\./i)).toBeInTheDocument(),await y.unhover(t),await _(v.queryByRole(`tooltip`)).not.toBeInTheDocument()}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    content: defaultTooltipText,
    children: <DsIcon icon="info" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement, defaultTooltipText);
  }
}`,...w.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    content: longTooltipText,
    children: <DsIcon icon="info" />
  },
  play: async ({
    canvasElement
  }) => {
    await sanityCheck(canvasElement, longTooltipText);
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`LongText`,`ConditionalOpenWithBoolean`,`RichContent`]}))();export{D as ConditionalOpenWithBoolean,w as Default,E as LongText,O as RichContent,k as __namedExportsOrder,x as default};