import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-stack-GU0hZWeR.js";var i,a,o,s=e((()=>{i=`_box_1q6tz_1`,a=`_container_1q6tz_13`,o={box:i,container:a}})),c,l,u,d,f,p,m,h,g;e((()=>{n(),s(),c=t(),l={title:`Components/Stack`,component:r,parameters:{layout:`centered`},argTypes:{direction:{control:`select`,options:[`row`,`column`,`row-reverse`,`column-reverse`]},gap:{control:`text`},alignItems:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`stretch`,`baseline`]},justifyContent:{control:`select`,options:[`flex-start`,`center`,`flex-end`,`space-between`,`space-around`,`space-evenly`]},flexWrap:{control:`select`,options:[`nowrap`,`wrap`,`wrap-reverse`]},width:{control:`text`},flex:{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},u={args:{direction:`column`,gap:`var(--xs)`},render:e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(`div`,{className:o.box,children:`Item 1`}),(0,c.jsx)(`div`,{className:o.box,children:`Item 2`}),(0,c.jsx)(`div`,{className:o.box,children:`Item 3`})]})},d={args:{direction:`row`,gap:`var(--standard)`,alignItems:`center`},render:e=>(0,c.jsxs)(r,{...e,children:[(0,c.jsx)(`div`,{className:o.box,children:`Item 1`}),(0,c.jsx)(`div`,{className:o.box,children:`Item 2`}),(0,c.jsx)(`div`,{className:o.box,children:`Item 3`})]})},f={args:{direction:{md:`column`,lg:`row`},gap:{md:`var(--xs)`,lg:`var(--lg)`},alignItems:`center`},render:e=>(0,c.jsxs)(r,{...e,className:o.container,children:[(0,c.jsx)(`div`,{className:o.box,children:`Item 1`}),(0,c.jsx)(`div`,{className:o.box,children:`Item 2`}),(0,c.jsx)(`div`,{className:o.box,children:`Item 3`})]})},p={args:{direction:`row`,justifyContent:`space-between`,alignItems:`center`,width:`100%`},render:e=>(0,c.jsxs)(r,{...e,className:o.container,children:[(0,c.jsx)(`div`,{className:o.box,children:`Left`}),(0,c.jsx)(`div`,{className:o.box,children:`Right`})]})},m={args:{direction:`row`,gap:`var(--xs)`,flexWrap:`wrap`},render:e=>(0,c.jsx)(r,{...e,className:o.container,children:Array.from({length:10},(e,t)=>(0,c.jsxs)(`div`,{className:o.box,children:[`Item `,t+1]},t))})},h={render:()=>(0,c.jsxs)(r,{gap:`var(--lg)`,children:[(0,c.jsxs)(r,{direction:`row`,gap:`var(--standard)`,alignItems:`center`,children:[(0,c.jsx)(`div`,{className:o.box,children:`Row 1 - A`}),(0,c.jsx)(`div`,{className:o.box,children:`Row 1 - B`}),(0,c.jsx)(`div`,{className:o.box,children:`Row 1 - C`})]}),(0,c.jsxs)(r,{direction:`row`,gap:`var(--standard)`,alignItems:`center`,children:[(0,c.jsx)(`div`,{className:o.box,children:`Row 2 - A`}),(0,c.jsx)(`div`,{className:o.box,children:`Row 2 - B`})]})]})},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'column',
    gap: 'var(--xs)'
  },
  render: args => <DsStack {...args}>
            <div className={styles.box}>Item 1</div>
            <div className={styles.box}>Item 2</div>
            <div className={styles.box}>Item 3</div>
        </DsStack>
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    gap: 'var(--standard)',
    alignItems: 'center'
  },
  render: args => <DsStack {...args}>
            <div className={styles.box}>Item 1</div>
            <div className={styles.box}>Item 2</div>
            <div className={styles.box}>Item 3</div>
        </DsStack>
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    direction: {
      md: 'column',
      lg: 'row'
    },
    gap: {
      md: 'var(--xs)',
      lg: 'var(--lg)'
    },
    alignItems: 'center'
  },
  render: args => <DsStack {...args} className={styles.container}>
            <div className={styles.box}>Item 1</div>
            <div className={styles.box}>Item 2</div>
            <div className={styles.box}>Item 3</div>
        </DsStack>
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  render: args => <DsStack {...args} className={styles.container}>
            <div className={styles.box}>Left</div>
            <div className={styles.box}>Right</div>
        </DsStack>
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    direction: 'row',
    gap: 'var(--xs)',
    flexWrap: 'wrap'
  },
  render: args => <DsStack {...args} className={styles.container}>
            {Array.from({
      length: 10
    }, (_, i) => <div className={styles.box} key={i}>
                    Item {i + 1}
                </div>)}
        </DsStack>
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <DsStack gap="var(--lg)">
            <DsStack direction="row" gap="var(--standard)" alignItems="center">
                <div className={styles.box}>Row 1 - A</div>
                <div className={styles.box}>Row 1 - B</div>
                <div className={styles.box}>Row 1 - C</div>
            </DsStack>

            <DsStack direction="row" gap="var(--standard)" alignItems="center">
                <div className={styles.box}>Row 2 - A</div>
                <div className={styles.box}>Row 2 - B</div>
            </DsStack>
        </DsStack>
}`,...h.parameters?.docs?.source}}},g=[`Default`,`Row`,`Responsive`,`SpaceBetween`,`Wrapping`,`Nested`]}))();export{u as Default,h as Nested,f as Responsive,d as Row,p as SpaceBetween,m as Wrapping,g as __namedExportsOrder,l as default};