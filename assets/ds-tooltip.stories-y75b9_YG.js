import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-B7s6RIoB.js";import{n,t as r}from"./ds-icon-PUaD2-ko.js";import{n as i,r as a}from"./ds-tooltip-Dok6XYd4.js";import{n as o,t as s}from"./ds-typography-BdLOKfGv.js";import{n as c,t as l}from"./ds-button-v3-BQcrZh_I.js";import{n as u,t as d}from"./ds-stack-DbPEq4gn.js";var f;function p(){return(p=e((()=>{f=[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]})))()}var m,h,g,_,v,y,b,x,S,C;function w(){return(w=e((()=>{a(),p(),c(),r(),u(),s(),m=t(),h={title:`Components/Tooltip`,component:i,parameters:{layout:`centered`},argTypes:{content:{control:`text`,description:`Content displayed within the tooltip`},placement:{control:`select`,options:f},disabled:{control:`boolean`},interactive:{control:`boolean`},openDelay:{control:`number`},closeDelay:{control:`number`},children:{control:`object`,description:`Element that triggers the tooltip on hover`}}},g={args:{content:`This is the mouse over tooltip message.`,children:(0,m.jsx)(n,{icon:`info`})}},_={args:{content:`This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.`,children:(0,m.jsx)(n,{icon:`info`})}},v={args:{content:(0,m.jsxs)(d,{direction:`column`,gap:`var(--3xs)`,children:[(0,m.jsx)(o,{variant:`body-sm-md`,children:`Multi-line tooltip with JSX`}),(0,m.jsx)(o,{variant:`body-xs-reg`,children:`No truncation should occur.`})]}),children:(0,m.jsx)(n,{icon:`info`})}},y={args:{content:`Anchored to the end of the trigger.`,placement:`top-end`,children:(0,m.jsx)(n,{icon:`info`})}},b={args:{content:`You should not see this tooltip.`,disabled:!0,children:(0,m.jsx)(n,{icon:`info`})}},x={args:{content:(0,m.jsx)(l,{variant:`tertiary`,color:`light`,size:`tiny`,children:`Open in catalog`}),interactive:!0,closeDelay:150,children:(0,m.jsx)(n,{icon:`info`})}},S={args:{content:`Narrow tooltip with custom max-width and text overflow ellipsis applied via slotProps.`,children:(0,m.jsx)(n,{icon:`info`}),slotProps:{content:{style:{maxWidth:200,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`}}}}},C=[`Default`,`LongText`,`RichContent`,`PlacementEnd`,`Disabled`,`Interactive`,`CustomWidthWithEllipsis`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is the mouse over tooltip message.',
    children: <DsIcon icon="info" />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.',
    children: <DsIcon icon="info" />
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    content: <DsStack direction="column" gap="var(--3xs)">
                <DsTypography variant="body-sm-md">Multi-line tooltip with JSX</DsTypography>
                <DsTypography variant="body-xs-reg">No truncation should occur.</DsTypography>
            </DsStack>,
    children: <DsIcon icon="info" />
  }
}`,...v.parameters?.docs?.source},description:{story:"Tooltips accept rich JSX content, not just strings. Compose `DsStack` and\n`DsTypography` so the layout and text styles inherit the on-dark tooltip palette.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Anchored to the end of the trigger.',
    placement: 'top-end',
    children: <DsIcon icon="info" />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'You should not see this tooltip.',
    disabled: true,
    children: <DsIcon icon="info" />
  }
}`,...b.parameters?.docs?.source}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    content: <DsButtonV3 variant="tertiary" color="light" size="tiny">
                Open in catalog
            </DsButtonV3>,
    interactive: true,
    closeDelay: 150,
    children: <DsIcon icon="info" />
  }
}`,...x.parameters?.docs?.source},description:{story:"Pointer can travel onto the tooltip and use actions inside it. Pair\n`interactive` with a non-zero `closeDelay` so the handoff is not a race.\nActions inside the tooltip should use the light/on-dark palette.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source}}}})))()}w();export{S as CustomWidthWithEllipsis,g as Default,b as Disabled,x as Interactive,_ as LongText,y as PlacementEnd,v as RichContent,C as __namedExportsOrder,h as default};