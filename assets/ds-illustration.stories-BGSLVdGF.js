import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-BE6vsRJN.js";import{n,t as r}from"./ds-typography-CBXzX4k5.js";import{n as i,t as a}from"./ds-stack-BCUF7Byn.js";import{n as o,t as s}from"./ds-illustration-BSK-w3Fy.js";var c;function l(){return(l=e((()=>{c=[`configuration`,`device`,`done`,`empty-inbox`,`error`,`go-filter`,`no-connection`,`no-credit-card`,`no-device`,`no-documents`,`no-gps`,`no-images`,`no-items-cart`,`no-messages`,`no-search-result`,`no-tasks`,`site`]})))()}var u,d;function f(){return(f=e((()=>{u=`_showcase_1o2y5_1`,d={showcase:u}})))()}var p,m,h,g,_;function v(){return(v=e((()=>{r(),s(),l(),f(),i(),p=t(),m={title:`Components/Illustration`,component:o,parameters:{layout:`centered`},argTypes:{variant:{control:`select`,options:c},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},"aria-hidden":{table:{disable:!0}},"aria-label":{table:{disable:!0}}}},h={args:{variant:`no-tasks`}},g={tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{canvas:{sourceState:`none`}}},render:()=>(0,p.jsx)(`div`,{className:d.showcase,children:c.map(e=>(0,p.jsxs)(a,{direction:`column`,alignItems:`center`,gap:`var(--xs)`,children:[(0,p.jsx)(o,{variant:e}),(0,p.jsx)(n,{color:`secondary`,variant:`body-sm-reg`,children:e})]},e))})},_=[`Default`,`Showcase`],h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'no-tasks'
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <div className={styles.showcase}>
            {dsIllustrationVariants.map(variant => <DsStack key={variant} direction="column" alignItems="center" gap="var(--xs)">
                    <DsIllustration variant={variant} />
                    <DsTypography color="secondary" variant="body-sm-reg">
                        {variant}
                    </DsTypography>
                </DsStack>)}
        </div>
}`,...g.parameters?.docs?.source},description:{story:"Every published tile. Visual catalog only — pick a `variant` in product code.",...g.parameters?.docs?.description}}}})))()}v();export{h as Default,g as Showcase,_ as __namedExportsOrder,m as default};