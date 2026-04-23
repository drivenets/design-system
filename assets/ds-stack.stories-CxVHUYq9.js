import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{t as r}from"./classnames-DN2IqHsz.js";import{t as i}from"./compiler-runtime-CrRAjMXB.js";import{r as a,t as o}from"./responsive-TWyOghVy.js";var s,c,l=t((()=>{s=`_root_mh8ht_1`,c={root:s}})),u,d,f,p,m=t((()=>{u=i(),d=e(r(),1),l(),f=n(),p=e=>{let t=(0,u.c)(16),{direction:n,gap:r,alignItems:i,justifyContent:a,flex:o,flexWrap:s,width:l,children:p,className:m,style:h,ref:g}=e,_;t[0]!==i||t[1]!==n||t[2]!==o||t[3]!==s||t[4]!==r||t[5]!==a||t[6]!==h||t[7]!==l?(_={flexDirection:n,gap:r,alignItems:i,justifyContent:a,flex:o,flexWrap:s,width:l,...h},t[0]=i,t[1]=n,t[2]=o,t[3]=s,t[4]=r,t[5]=a,t[6]=h,t[7]=l,t[8]=_):_=t[8];let v=_,y;t[9]===m?y=t[10]:(y=(0,d.default)(c.root,m),t[9]=m,t[10]=y);let b;return t[11]!==p||t[12]!==v||t[13]!==g||t[14]!==y?(b=(0,f.jsx)(`div`,{ref:g,className:y,style:v,children:p}),t[11]=p,t[12]=v,t[13]=g,t[14]=y,t[15]=b):b=t[15],b}})),h,g=t((()=>{o(),m(),h=a(p,[`direction`,`gap`,`alignItems`,`justifyContent`,`flex`,`flexWrap`,`width`]),h.displayName=`DsStack`})),_,v,y,b=t((()=>{_=`_box_1q6tz_1`,v=`_container_1q6tz_13`,y={box:_,container:v}})),x,S,C,w,T,E,D,O,k,A,j;t((()=>{x=i(),g(),b(),S=n(),C=e=>{let t=(0,x.c)(2),{children:n}=e,r;return t[0]===n?r=t[1]:(r=(0,S.jsx)(`div`,{className:y.box,children:n}),t[0]=n,t[1]=r),r},w={title:`Design System/Stack`,component:h,parameters:{layout:`centered`},argTypes:{direction:{control:`select`,options:[`row`,`column`,`row-reverse`,`column-reverse`]},gap:{control:`text`},alignItems:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`stretch`,`baseline`]},justifyContent:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`,`space-evenly`]},flexWrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]},width:{control:`text`},flex:{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},T={args:{direction:`column`,gap:8},render:e=>(0,S.jsxs)(h,{...e,children:[(0,S.jsx)(C,{children:`Item 1`}),(0,S.jsx)(C,{children:`Item 2`}),(0,S.jsx)(C,{children:`Item 3`})]})},E={args:{direction:`row`,gap:16,alignItems:`center`},render:e=>(0,S.jsxs)(h,{...e,children:[(0,S.jsx)(C,{children:`Item 1`}),(0,S.jsx)(C,{children:`Item 2`}),(0,S.jsx)(C,{children:`Item 3`})]})},D={args:{direction:{md:`column`,lg:`row`},gap:{md:8,lg:24},alignItems:`center`},render:e=>(0,S.jsxs)(h,{...e,className:y.container,children:[(0,S.jsx)(C,{children:`Item 1`}),(0,S.jsx)(C,{children:`Item 2`}),(0,S.jsx)(C,{children:`Item 3`})]})},O={args:{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`},render:e=>(0,S.jsxs)(h,{...e,className:y.container,children:[(0,S.jsx)(C,{children:`Left`}),(0,S.jsx)(C,{children:`Right`})]})},k={args:{direction:`row`,gap:8,flexWrap:`wrap`},render:e=>(0,S.jsx)(h,{...e,className:y.container,children:Array.from({length:10},(e,t)=>(0,S.jsxs)(C,{children:[`Item `,t+1]},t))})},A={render:()=>(0,S.jsxs)(h,{gap:24,children:[(0,S.jsxs)(h,{direction:`row`,gap:16,alignItems:`center`,children:[(0,S.jsx)(C,{children:`Row 1 - A`}),(0,S.jsx)(C,{children:`Row 1 - B`}),(0,S.jsx)(C,{children:`Row 1 - C`})]}),(0,S.jsxs)(h,{direction:`row`,gap:16,alignItems:`center`,children:[(0,S.jsx)(C,{children:`Row 2 - A`}),(0,S.jsx)(C,{children:`Row 2 - B`})]})]})},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 8
  },
  render: args => <DsStack {...args}>
            <Box>Item 1</Box>
            <Box>Item 2</Box>
            <Box>Item 3</Box>
        </DsStack>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j=[`Default`,`Row`,`Responsive`,`SpaceBetween`,`Wrapping`,`Nested`]}))();export{T as Default,A as Nested,D as Responsive,E as Row,O as SpaceBetween,k as Wrapping,j as __namedExportsOrder,w as default};