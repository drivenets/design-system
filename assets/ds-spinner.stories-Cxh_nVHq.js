import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-CXNbvdbt.js";import{n,t as r}from"./ds-typography-BQGAhO_3.js";import{n as i,t as a}from"./ds-spinner-C9Z5LkNG.js";import{n as o,t as s}from"./ds-stack-Cfw2JvVZ.js";var c;function l(){return(l=e((()=>{c=[`small`,`medium`,`large`]})))()}var u,d,f;function p(){return(p=e((()=>{u=`_modalOverlay_1gv4l_1`,d=`_modalContent_1gv4l_11`,f={modalOverlay:u,modalContent:d}})))()}var m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{i(),l(),o(),r(),p(),m=t(),h={title:`Components/Spinner`,component:a,parameters:{layout:`centered`},argTypes:{size:{control:{type:`select`},options:c,description:`The size of the spinner`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},g={args:{size:`medium`}},_={args:{size:`small`}},v={args:{size:`large`}},y={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,m.jsxs)(s,{alignItems:`center`,gap:`var(--2xl)`,children:[(0,m.jsxs)(s,{direction:`column`,alignItems:`center`,gap:`var(--xs)`,children:[(0,m.jsx)(a,{size:`small`}),(0,m.jsx)(n,{variant:`body-sm-reg`,color:`secondary`,children:`Small`})]}),(0,m.jsxs)(s,{direction:`column`,alignItems:`center`,gap:`var(--xs)`,children:[(0,m.jsx)(a,{size:`medium`}),(0,m.jsx)(n,{variant:`body-sm-reg`,color:`secondary`,children:`Medium`})]}),(0,m.jsxs)(s,{direction:`column`,alignItems:`center`,gap:`var(--xs)`,children:[(0,m.jsx)(a,{size:`large`}),(0,m.jsx)(n,{variant:`body-sm-reg`,color:`secondary`,children:`Large`})]})]})},b={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,m.jsx)(`div`,{className:f.modalOverlay,children:(0,m.jsxs)(`div`,{className:f.modalContent,children:[(0,m.jsx)(a,{}),(0,m.jsxs)(s,{direction:`column`,alignItems:`center`,gap:`var(--3xs)`,children:[(0,m.jsx)(n,{variant:`body-sm-reg`,children:`Explanation text will describe the process.`}),(0,m.jsx)(n,{variant:`body-xs-reg`,color:`secondary`,children:`Two lines will be aimed for this.`})]})]})})},x=[`Default`,`Small`,`Large`,`AllSizes`,`ModalLoading`],g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium'
  }
}`,...g.parameters?.docs?.source},description:{story:`Default medium spinner for general-purpose loading states.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small'
  }
}`,..._.parameters?.docs?.source},description:{story:`Compact spinner for dense layouts, inline placement, or small containers.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large'
  }
}`,...v.parameters?.docs?.source},description:{story:`Prominent spinner for full-page or large-surface loading states.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack alignItems="center" gap="var(--2xl)">
            <DsStack direction="column" alignItems="center" gap="var(--xs)">
                <DsSpinner size="small" />
                <DsTypography variant="body-sm-reg" color="secondary">
                    Small
                </DsTypography>
            </DsStack>
            <DsStack direction="column" alignItems="center" gap="var(--xs)">
                <DsSpinner size="medium" />
                <DsTypography variant="body-sm-reg" color="secondary">
                    Medium
                </DsTypography>
            </DsStack>
            <DsStack direction="column" alignItems="center" gap="var(--xs)">
                <DsSpinner size="large" />
                <DsTypography variant="body-sm-reg" color="secondary">
                    Large
                </DsTypography>
            </DsStack>
        </DsStack>
}`,...y.parameters?.docs?.source},description:{story:`All spinner sizes side by side for visual comparison.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <DsSpinner />
                <DsStack direction="column" alignItems="center" gap="var(--3xs)">
                    <DsTypography variant="body-sm-reg">Explanation text will describe the process.</DsTypography>
                    <DsTypography variant="body-xs-reg" color="secondary">
                        Two lines will be aimed for this.
                    </DsTypography>
                </DsStack>
            </div>
        </div>
}`,...b.parameters?.docs?.source},description:{story:`Spinner inside a modal overlay with explanatory text describing the process.`,...b.parameters?.docs?.description}}}})))()}S();export{y as AllSizes,g as Default,v as Large,b as ModalLoading,_ as Small,x as __namedExportsOrder,h as default};