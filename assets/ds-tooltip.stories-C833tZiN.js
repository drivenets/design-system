import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DrNEocAe.js";import{n as r,t as i}from"./ds-icon-CelRWOmr.js";import{n as a,r as o}from"./ds-tooltip-DqkX5dL0.js";import{n as s,t as c}from"./ds-typography-C_suCm9r.js";import{n as l,t as u}from"./ds-button-v3-DIPDZv0a.js";import{n as d,t as f}from"./ds-stack-SKww6dw0.js";var p;function m(){return(m=e((()=>{p=[`top`,`top-start`,`top-end`,`bottom`,`bottom-start`,`bottom-end`,`left`,`left-start`,`left-end`,`right`,`right-start`,`right-end`]})))()}var h,g,_,v,y,b,x,S,C,w,T,E;function D(){return(D=e((()=>{h=t(),o(),m(),l(),i(),d(),c(),g=n(),_={title:`Components/Tooltip`,component:a,parameters:{layout:`centered`},argTypes:{content:{control:`text`,description:`Content displayed within the tooltip`},placement:{control:`select`,options:p},disabled:{control:`boolean`},interactive:{control:`boolean`},openDelay:{control:`number`},closeDelay:{control:`number`},children:{control:`object`,description:`Element that triggers the tooltip on hover`},open:{table:{disable:!0}},defaultOpen:{control:`boolean`},onOpenChange:{table:{disable:!0}},ref:{table:{disable:!0}}}},v={args:{content:`This is the mouse over tooltip message.`,children:(0,g.jsx)(r,{icon:`info`})}},y={args:{content:`This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.`,children:(0,g.jsx)(r,{icon:`info`})}},b={args:{content:(0,g.jsxs)(f,{direction:`column`,gap:`var(--3xs)`,children:[(0,g.jsx)(s,{variant:`body-sm-md`,children:`Multi-line tooltip with JSX`}),(0,g.jsx)(s,{variant:`body-xs-reg`,children:`No truncation should occur.`})]}),children:(0,g.jsx)(r,{icon:`info`})}},x={args:{content:`Anchored to the end of the trigger.`,placement:`top-end`,children:(0,g.jsx)(r,{icon:`info`})}},S={args:{content:`You should not see this tooltip.`,disabled:!0,children:(0,g.jsx)(r,{icon:`info`})}},C={args:{content:(0,g.jsx)(u,{variant:`tertiary`,color:`light`,size:`tiny`,children:`Open in catalog`}),interactive:!0,closeDelay:150,children:(0,g.jsx)(r,{icon:`info`})}},w={args:{content:`Narrow tooltip with custom max-width and text overflow ellipsis applied via slotProps.`,children:(0,g.jsx)(r,{icon:`info`}),slotProps:{content:{style:{maxWidth:200,overflow:`hidden`,textOverflow:`ellipsis`,whiteSpace:`nowrap`}}}}},T={args:{content:`Opened from outside the trigger.`},parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,h.useState)(!1);return(0,g.jsxs)(f,{direction:`row`,alignItems:`center`,gap:`var(--sm)`,children:[(0,g.jsx)(u,{variant:`secondary`,size:`small`,onClick:()=>n(!t),children:t?`Hide tooltip`:`Show tooltip`}),(0,g.jsx)(a,{...e,open:t,onOpenChange:n,children:(0,g.jsx)(r,{icon:`info`})})]})}},E=[`Default`,`LongText`,`RichContent`,`PlacementEnd`,`Disabled`,`Interactive`,`CustomWidthWithEllipsis`,`Controlled`],v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This is the mouse over tooltip message.',
    children: <DsIcon icon="info" />
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'This tooltip contains a long message that spans multiple lines to verify the content is fully visible without truncation. The tooltip should expand vertically to accommodate all text, regardless of length. Users rely on tooltips to reveal information that may be clipped elsewhere in the interface, so cutting off tooltip content defeats the purpose.',
    children: <DsIcon icon="info" />
  }
}`,...y.parameters?.docs?.source}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    content: <DsStack direction="column" gap="var(--3xs)">
                <DsTypography variant="body-sm-md">Multi-line tooltip with JSX</DsTypography>
                <DsTypography variant="body-xs-reg">No truncation should occur.</DsTypography>
            </DsStack>,
    children: <DsIcon icon="info" />
  }
}`,...b.parameters?.docs?.source},description:{story:"Tooltips accept rich JSX content, not just strings. Compose `DsStack` and\n`DsTypography` so the layout and text styles inherit the on-dark tooltip palette.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Anchored to the end of the trigger.',
    placement: 'top-end',
    children: <DsIcon icon="info" />
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'You should not see this tooltip.',
    disabled: true,
    children: <DsIcon icon="info" />
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    content: <DsButtonV3 variant="tertiary" color="light" size="tiny">
                Open in catalog
            </DsButtonV3>,
    interactive: true,
    closeDelay: 150,
    children: <DsIcon icon="info" />
  }
}`,...C.parameters?.docs?.source},description:{story:"Pointer can travel onto the tooltip and use actions inside it. Pair\n`interactive` with a non-zero `closeDelay` so the handoff is not a race.\nActions inside the tooltip should use the light/on-dark palette.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    content: 'Opened from outside the trigger.'
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [open, setOpen] = useState(false);
    return <DsStack direction="row" alignItems="center" gap="var(--sm)">
                <DsButtonV3 variant="secondary" size="small" onClick={() => setOpen(!open)}>
                    {open ? 'Hide tooltip' : 'Show tooltip'}
                </DsButtonV3>
                <DsTooltip {...args} open={open} onOpenChange={setOpen}>
                    <DsIcon icon="info" />
                </DsTooltip>
            </DsStack>;
  }
}`,...T.parameters?.docs?.source},description:{story:"Drive the tooltip from your own state with `open` + `onOpenChange` — for example to\nreveal it from elsewhere, or to keep it closed while the trigger is being dragged.\nHover and focus still report their intent through `onOpenChange`.",...T.parameters?.docs?.description}}}})))()}D();export{T as Controlled,w as CustomWidthWithEllipsis,v as Default,S as Disabled,C as Interactive,y as LongText,x as PlacementEnd,b as RichContent,E as __namedExportsOrder,_ as default};