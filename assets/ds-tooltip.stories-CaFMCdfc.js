import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-CYhlqk3g.js";import{t as n}from"./ds-icon-Crxbl2TZ.js";import{t as r}from"./ds-icon-CO0-uRSR.js";import{i,n as a,r as o,t as s}from"./ds-tooltip.types-DrFIxj6B.js";var c,l,u,d,f,p,m,h,g;e((()=>{i(),s(),r(),c=t(),l={title:`Components/Tooltip`,component:o,parameters:{layout:`centered`},argTypes:{content:{control:`text`,description:`Content displayed within the tooltip`},placement:{control:`select`,options:a},disabled:{control:`boolean`},children:{control:`object`,description:`Element that triggers the tooltip on hover`}}},u={args:{content:`This is the mouse over tooltip message.`,children:(0,c.jsx)(n,{icon:`info`})}},d={args:{content:`This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.`,children:(0,c.jsx)(n,{icon:`info`})}},f={args:{content:(0,c.jsxs)(`div`,{children:[(0,c.jsx)(`strong`,{children:`Multi-line`}),` tooltip with `,(0,c.jsx)(`em`,{children:`JSX`}),(0,c.jsx)(`br`,{}),(0,c.jsx)(`span`,{style:{color:`#9cdcfe`},children:`No truncation should occur.`})]}),children:(0,c.jsx)(n,{icon:`info`})}},p={args:{content:`Anchored to the end of the trigger.`,placement:`top-end`,children:(0,c.jsx)(n,{icon:`info`})}},m={args:{content:`You should not see this tooltip.`,disabled:!0,children:(0,c.jsx)(n,{icon:`info`})}},h={args:{content:`Narrow tooltip with custom max-width and text overflow ellipsis applied via slotProps.`,children:(0,c.jsx)(n,{icon:`info`}),slotProps:{content:{style:{maxWidth:200,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`}}}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is the mouse over tooltip message.',
    children: <DsIcon icon="info" />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.',
    children: <DsIcon icon="info" />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: <div>
                <strong>Multi-line</strong> tooltip with <em>JSX</em>
                <br />
                <span style={{
        color: '#9cdcfe'
      }}>No truncation should occur.</span>
            </div>,
    children: <DsIcon icon="info" />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Anchored to the end of the trigger.',
    placement: 'top-end',
    children: <DsIcon icon="info" />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'You should not see this tooltip.',
    disabled: true,
    children: <DsIcon icon="info" />
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Narrow tooltip with custom max-width and text overflow ellipsis applied via slotProps.',
    children: <DsIcon icon="info" />,
    slotProps: {
      content: {
        style: {
          maxWidth: 200,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }
      }
    }
  }
}`,...h.parameters?.docs?.source}}},g=[`Default`,`LongText`,`RichContent`,`PlacementEnd`,`Disabled`,`CustomWidthWithEllipsis`]}))();export{h as CustomWidthWithEllipsis,u as Default,m as Disabled,d as LongText,p as PlacementEnd,f as RichContent,g as __namedExportsOrder,l as default};