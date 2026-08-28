import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{t as n}from"./ds-icon-BW3ZMuEi.js";import{t as r}from"./ds-icon-m9JGPUU6.js";import{i,n as a,r as o,t as s}from"./ds-tooltip.types-CzDZEBFJ.js";import{n as c,t as l}from"./ds-button-v3-DKBJbP0e.js";var u,d,f,p,m,h,g,_,v,y;e((()=>{i(),s(),c(),r(),u=t(),d={title:`Components/Tooltip`,component:o,parameters:{layout:`centered`},argTypes:{content:{control:`text`,description:`Content displayed within the tooltip`},placement:{control:`select`,options:a},disabled:{control:`boolean`},interactive:{control:`boolean`},openDelay:{control:`number`},closeDelay:{control:`number`},children:{control:`object`,description:`Element that triggers the tooltip on hover`}}},f={args:{content:`This is the mouse over tooltip message.`,children:(0,u.jsx)(n,{icon:`info`})}},p={args:{content:`This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.`,children:(0,u.jsx)(n,{icon:`info`})}},m={args:{content:(0,u.jsxs)(`div`,{children:[(0,u.jsx)(`strong`,{children:`Multi-line`}),` tooltip with `,(0,u.jsx)(`em`,{children:`JSX`}),(0,u.jsx)(`br`,{}),(0,u.jsx)(`span`,{style:{color:`#9cdcfe`},children:`No truncation should occur.`})]}),children:(0,u.jsx)(n,{icon:`info`})}},h={args:{content:`Anchored to the end of the trigger.`,placement:`top-end`,children:(0,u.jsx)(n,{icon:`info`})}},g={args:{content:`You should not see this tooltip.`,disabled:!0,children:(0,u.jsx)(n,{icon:`info`})}},_={args:{content:(0,u.jsx)(l,{variant:`tertiary`,color:`light`,size:`tiny`,children:`Open in catalog`}),interactive:!0,closeDelay:150,children:(0,u.jsx)(n,{icon:`info`})}},v={args:{content:`Narrow tooltip with custom max-width and text overflow ellipsis applied via slotProps.`,children:(0,u.jsx)(n,{icon:`info`}),slotProps:{content:{style:{maxWidth:200,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`}}}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is the mouse over tooltip message.',
    children: <DsIcon icon="info" />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.',
    children: <DsIcon icon="info" />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Anchored to the end of the trigger.',
    placement: 'top-end',
    children: <DsIcon icon="info" />
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'You should not see this tooltip.',
    disabled: true,
    children: <DsIcon icon="info" />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    content: <DsButtonV3 variant="tertiary" color="light" size="tiny">
                Open in catalog
            </DsButtonV3>,
    interactive: true,
    closeDelay: 150,
    children: <DsIcon icon="info" />
  }
}`,..._.parameters?.docs?.source},description:{story:"Pointer can travel onto the tooltip and use actions inside it. Pair\n`interactive` with a non-zero `closeDelay` so the handoff is not a race.\nActions inside the tooltip should use the light/on-dark palette.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source}}},y=[`Default`,`LongText`,`RichContent`,`PlacementEnd`,`Disabled`,`Interactive`,`CustomWidthWithEllipsis`]}))();export{v as CustomWidthWithEllipsis,f as Default,g as Disabled,_ as Interactive,p as LongText,h as PlacementEnd,m as RichContent,y as __namedExportsOrder,d as default};