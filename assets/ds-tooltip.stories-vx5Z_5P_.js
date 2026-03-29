import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{i as n}from"./ds-icon.types-P5r5SeQG.js";import{t as r}from"./ds-icon-D4qn20Tc.js";import{n as i,t as a}from"./ds-tooltip-DlbZQdg0.js";var o,s,c,l,u,d,f;e((()=>{i(),r(),o=t(),s={title:`Design System/Tooltip`,component:a,parameters:{layout:`centered`},argTypes:{content:{control:`text`,description:`Content displayed within the tooltip`},children:{control:`object`,description:`Element that triggers the tooltip on hover`}}},c={args:{content:`This is the mouse over tooltip message.`,children:(0,o.jsx)(n,{icon:`info`})}},l={args:{content:`This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.`,children:(0,o.jsx)(n,{icon:`info`})}},u={args:{content:(0,o.jsxs)(`div`,{children:[(0,o.jsx)(`strong`,{children:`Multi-line`}),` tooltip with `,(0,o.jsx)(`em`,{children:`JSX`}),(0,o.jsx)(`br`,{}),(0,o.jsx)(`span`,{style:{color:`#9cdcfe`},children:`No truncation should occur.`})]}),children:(0,o.jsx)(n,{icon:`info`})}},d={args:{content:`Narrow tooltip with custom max-width and text overflow ellipsis applied via slotProps.`,children:(0,o.jsx)(n,{icon:`info`}),slotProps:{content:{style:{maxWidth:200,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`}}}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is the mouse over tooltip message.',
    children: <DsIcon icon="info" />
  }
}`,...c.parameters?.docs?.source}}},l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.',
    children: <DsIcon icon="info" />
  }
}`,...l.parameters?.docs?.source}}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}},f=[`Default`,`LongText`,`RichContent`,`CustomWidthWithEllipsis`]}))();export{d as CustomWidthWithEllipsis,c as Default,l as LongText,u as RichContent,f as __namedExportsOrder,s as default};