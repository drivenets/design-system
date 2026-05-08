import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{t as n}from"./compiler-runtime-B0rLJ6IC.js";import{n as r,t as i}from"./ds-stack-ySMU3PeD.js";var a,o,s,c=e((()=>{a=`_box_1q6tz_1`,o=`_container_1q6tz_13`,s={box:a,container:o}})),l,u,d,f,p,m,h,g,_,v,y;e((()=>{l=n(),r(),c(),u=t(),d=e=>{let t=(0,l.c)(2),{children:n}=e,r;return t[0]===n?r=t[1]:(r=(0,u.jsx)(`div`,{className:s.box,children:n}),t[0]=n,t[1]=r),r},f={title:`Components/Stack`,component:i,parameters:{layout:`centered`},argTypes:{direction:{control:`select`,options:[`row`,`column`,`row-reverse`,`column-reverse`]},gap:{control:`text`},alignItems:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`stretch`,`baseline`]},justifyContent:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`,`space-evenly`]},flexWrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]},width:{control:`text`},flex:{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},p={args:{direction:`column`,gap:8},render:e=>(0,u.jsxs)(i,{...e,children:[(0,u.jsx)(d,{children:`Item 1`}),(0,u.jsx)(d,{children:`Item 2`}),(0,u.jsx)(d,{children:`Item 3`})]})},m={args:{direction:`row`,gap:16,alignItems:`center`},render:e=>(0,u.jsxs)(i,{...e,children:[(0,u.jsx)(d,{children:`Item 1`}),(0,u.jsx)(d,{children:`Item 2`}),(0,u.jsx)(d,{children:`Item 3`})]})},h={args:{direction:{md:`column`,lg:`row`},gap:{md:8,lg:24},alignItems:`center`},render:e=>(0,u.jsxs)(i,{...e,className:s.container,children:[(0,u.jsx)(d,{children:`Item 1`}),(0,u.jsx)(d,{children:`Item 2`}),(0,u.jsx)(d,{children:`Item 3`})]})},g={args:{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`},render:e=>(0,u.jsxs)(i,{...e,className:s.container,children:[(0,u.jsx)(d,{children:`Left`}),(0,u.jsx)(d,{children:`Right`})]})},_={args:{direction:`row`,gap:8,flexWrap:`wrap`},render:e=>(0,u.jsx)(i,{...e,className:s.container,children:Array.from({length:10},(e,t)=>(0,u.jsxs)(d,{children:[`Item `,t+1]},t))})},v={render:()=>(0,u.jsxs)(i,{gap:24,children:[(0,u.jsxs)(i,{direction:`row`,gap:16,alignItems:`center`,children:[(0,u.jsx)(d,{children:`Row 1 - A`}),(0,u.jsx)(d,{children:`Row 1 - B`}),(0,u.jsx)(d,{children:`Row 1 - C`})]}),(0,u.jsxs)(i,{direction:`row`,gap:16,alignItems:`center`,children:[(0,u.jsx)(d,{children:`Row 2 - A`}),(0,u.jsx)(d,{children:`Row 2 - B`})]})]})},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 8
  },
  render: args => <DsStack {...args}>
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
        </DsStack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    gap: 16,
    alignItems: 'center'
  },
  render: args => <DsStack {...args}>
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
        </DsStack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    direction: {
      md: 'column',
      lg: 'row'
    },
    gap: {
      md: 8,
      lg: 24
    },
    alignItems: 'center'
  },
  render: args => <DsStack {...args} className={styles.container}>
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
        </DsStack>
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  render: args => <DsStack {...args} className={styles.container}>
            <Box>Left</Box>
            <Box>Right</Box>
        </DsStack>
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    gap: 8,
    flexWrap: 'wrap'
  },
  render: args => <DsStack {...args} className={styles.container}>
            {Array.from({
      length: 10
    }, (_, i) => <Box key={i}>Item {i + 1}</Box>)}
        </DsStack>
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack gap={24}>
            <DsStack direction="row" gap={16} alignItems="center">
                <Box>Row 1 - A</Box>
                <Box>Row 1 - B</Box>
                <Box>Row 1 - C</Box>
            </DsStack>

            <DsStack direction="row" gap={16} alignItems="center">
                <Box>Row 2 - A</Box>
                <Box>Row 2 - B</Box>
            </DsStack>
        </DsStack>
}`,...v.parameters?.docs?.source}}},y=[`Default`,`Row`,`Responsive`,`SpaceBetween`,`Wrapping`,`Nested`]}))();export{p as Default,v as Nested,h as Responsive,m as Row,g as SpaceBetween,_ as Wrapping,y as __namedExportsOrder,f as default};