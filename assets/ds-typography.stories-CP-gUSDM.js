import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{c as n,n as r,o as i,s as a,t as o}from"./ds-typography-BLoO5j9q.js";import{n as s,t as c}from"./ds-stack-GU0hZWeR.js";var l,u,d,f=e((()=>{l=`_onDark_f3uze_1`,u=`_truncateBox_f3uze_6`,d={onDark:l,truncateBox:u}})),p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A;e((()=>{s(),o(),i(),f(),p=t(),m=Object.keys(n),h=`The quick brown fox jumps over the lazy dog.`,g=[`on-action`,`on-disabled`,`light-disabled`],_=e=>(0,p.jsx)(`div`,{className:d.truncateBox,children:(0,p.jsx)(e,{})}),v={title:`Components/Typography`,component:r,parameters:{layout:`padded`},argTypes:{variant:{control:`select`,options:m},color:{control:`select`,options:a},asChild:{control:`boolean`},truncate:{control:`select`,options:[`off`,`single`,`2 lines`,`3 lines`],mapping:{off:!1,single:!0,"2 lines":2,"3 lines":3}},tooltip:{control:`boolean`},tooltipContent:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}},args:{variant:`body-md-reg`,children:`The quick brown fox jumps over the lazy dog.`}},y={args:{variant:`body-md-reg`,color:`main`,children:`The quick brown fox jumps over the lazy dog.`}},b={args:{variant:`heading3`,children:`The quick brown fox jumps over the lazy dog.`}},x={args:{variant:`body-md-reg`,color:`secondary`,children:`The quick brown fox jumps over the lazy dog.`}},S={args:{variant:`body-md-reg`,color:`var(--color-dap-purple-600)`,children:`The quick brown fox jumps over the lazy dog.`}},C={parameters:{controls:{disable:!0}},render:()=>(0,p.jsx)(r,{variant:`body-md-link`,asChild:!0,children:(0,p.jsx)(`a`,{href:`https://example.com`,children:`Link rendered via asChild`})})},w={args:{variant:`body-md-reg`,truncate:!0,children:`The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.`},decorators:[_]},T={args:{variant:`body-md-reg`,truncate:2,children:`The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.`},decorators:[_]},E={args:{variant:`body-md-reg`,truncate:!0,tooltip:!0,children:`The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.`},decorators:[_]},D={tags:[`!manifest`],parameters:{controls:{disable:!0},docs:{canvas:{sourceState:`none`}}},render:()=>(0,p.jsx)(c,{direction:`column`,gap:`var(--md)`,children:m.map(e=>(0,p.jsxs)(c,{direction:`column`,gap:`var(--3xs)`,children:[(0,p.jsx)(r,{variant:`code-xs-reg`,color:`secondary`,children:e}),(0,p.jsx)(r,{variant:e,children:h})]},e))})},O={tags:[`!manifest`],parameters:{controls:{disable:!0},docs:{canvas:{sourceState:`none`}}},render:()=>(0,p.jsx)(c,{direction:`column`,gap:`var(--sm)`,children:a.filter(e=>!g.includes(e)).map(e=>(0,p.jsxs)(c,{direction:`column`,gap:`var(--3xs)`,children:[(0,p.jsx)(r,{variant:`code-xs-reg`,color:`secondary`,children:e}),(0,p.jsx)(r,{variant:`body-md-md`,color:e,children:h})]},e))})},k={tags:[`!manifest`],parameters:{controls:{disable:!0},layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,p.jsx)(c,{className:d.onDark,direction:`column`,gap:`var(--sm)`,children:g.map(e=>(0,p.jsxs)(c,{direction:`column`,gap:`var(--3xs)`,children:[(0,p.jsx)(r,{variant:`code-xs-reg`,color:`var(--secondary-300)`,children:e}),(0,p.jsx)(r,{variant:`body-md-md`,color:e,children:h})]},e))})},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body-md-reg',
    color: 'main',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...y.parameters?.docs?.source},description:{story:`Default body text on the main foreground color.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'heading3',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...b.parameters?.docs?.source},description:{story:`Use heading variants for page and section titles.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body-md-reg',
    color: 'secondary',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...x.parameters?.docs?.source},description:{story:"Apply a semantic `color` to convey emphasis or state.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body-md-reg',
    color: 'var(--color-dap-purple-600)',
    children: 'The quick brown fox jumps over the lazy dog.'
  }
}`,...S.parameters?.docs?.source},description:{story:"The `color` prop also accepts raw CSS values (tokens, hex, rgb) as an escape hatch.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    controls: {
      disable: true
    }
  },
  render: () => <DsTypography variant="body-md-link" asChild>
            <a href="https://example.com">Link rendered via asChild</a>
        </DsTypography>
}`,...C.parameters?.docs?.source},description:{story:"Render as a different element while keeping typography styles via `asChild`.",...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body-md-reg',
    truncate: true,
    children: 'The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.'
  },
  decorators: [withTruncateBox]
}`,...w.parameters?.docs?.source},description:{story:`Clamp overflowing text to a single line with an ellipsis. Needs a width-constrained parent.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body-md-reg',
    truncate: 2,
    children: 'The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.'
  },
  decorators: [withTruncateBox]
}`,...T.parameters?.docs?.source},description:{story:`Pass a number to clamp to that many lines.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body-md-reg',
    truncate: true,
    tooltip: true,
    children: 'The quick brown fox jumps over the lazy dog while the sleepy cat watches from the warm windowsill nearby.'
  },
  decorators: [withTruncateBox]
}`,...E.parameters?.docs?.source},description:{story:"Enable `tooltip` to reveal the full text on hover while it stays truncated.",...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--md)">
            {variantOptions.map(variant => <DsStack key={variant} direction="column" gap="var(--3xs)">
                    <DsTypography variant="code-xs-reg" color="secondary">
                        {variant}
                    </DsTypography>
                    <DsTypography variant={variant}>{sample}</DsTypography>
                </DsStack>)}
        </DsStack>
}`,...D.parameters?.docs?.source},description:{story:`Full type scale for visual reference.`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--sm)">
            {typographyColors.filter(color => !onDarkColors.includes(color)).map(color => <DsStack key={color} direction="column" gap="var(--3xs)">
                        <DsTypography variant="code-xs-reg" color="secondary">
                            {color}
                        </DsTypography>
                        <DsTypography variant="body-md-md" color={color}>
                            {sample}
                        </DsTypography>
                    </DsStack>)}
        </DsStack>
}`,...O.parameters?.docs?.source},description:{story:`Semantic text colors on the default background.`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    controls: {
      disable: true
    },
    layout: 'fullscreen',
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack className={storyStyles.onDark} direction="column" gap="var(--sm)">
            {onDarkColors.map(color => <DsStack key={color} direction="column" gap="var(--3xs)">
                    <DsTypography variant="code-xs-reg" color="var(--secondary-300)">
                        {color}
                    </DsTypography>
                    <DsTypography variant="body-md-md" color={color}>
                        {sample}
                    </DsTypography>
                </DsStack>)}
        </DsStack>
}`,...k.parameters?.docs?.source},description:{story:`Colors intended for dark or accent backgrounds.`,...k.parameters?.docs?.description}}},A=[`Default`,`Heading`,`Color`,`CustomColor`,`AsChild`,`Truncate`,`TruncateMultiline`,`TruncateWithTooltip`,`Variants`,`Colors`,`ColorsOnDark`]}))();export{C as AsChild,x as Color,O as Colors,k as ColorsOnDark,S as CustomColor,y as Default,b as Heading,w as Truncate,T as TruncateMultiline,E as TruncateWithTooltip,D as Variants,A as __namedExportsOrder,v as default};