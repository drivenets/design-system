import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-typography-BLoO5j9q.js";import{n as i,t as a}from"./ds-stack-GU0hZWeR.js";import{n as o,t as s}from"./ds-divider-sD2vUA4A.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{c=`_showcaseContainer_77ty2_1`,l=`_showcaseTable_77ty2_6`,u=`_showcaseHeader_77ty2_11`,d=`_showcaseCell_77ty2_17`,f=`_showcaseCellBold_77ty2_23`,p=`_showcaseCellInline_77ty2_28`,m=`_showcaseCellDark_77ty2_32`,h=`_horizontalDemo_77ty2_37`,g=`_verticalDemo_77ty2_41`,_=`_horizontalDividerWrapper_77ty2_45`,v=`_verticalDividerContainer_77ty2_49`,y=`_verticalDividerContent_77ty2_56`,b={showcaseContainer:c,showcaseTable:l,showcaseHeader:u,showcaseCell:d,showcaseCellBold:f,showcaseCellInline:p,showcaseCellDark:m,horizontalDemo:h,verticalDemo:g,horizontalDividerWrapper:_,verticalDividerContainer:v,verticalDividerContent:y}})),S,C,w,T,E,D,O,k;e((()=>{o(),i(),r(),x(),S=t(),C={title:`Components/Divider`,component:s,parameters:{layout:`centered`},args:{orientation:`horizontal`},argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`],description:`Controls orientation of the divider.`},component:{control:`select`,options:[`(default)`,`hr`,`div`,`span`],mapping:{"(default)":void 0,hr:`hr`,div:`div`,span:`span`},description:`Underlying element/component to render.`},style:{control:!1},className:{control:!1}}},w={render:e=>e.orientation===`vertical`?(0,S.jsxs)(a,{direction:`row`,gap:`var(--sm)`,alignItems:`center`,className:b.verticalDemo,children:[(0,S.jsx)(n,{variant:`body-md-reg`,children:`Left content`}),(0,S.jsx)(s,{...e}),(0,S.jsx)(n,{variant:`body-md-reg`,children:`Right content`})]}):(0,S.jsxs)(a,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,className:b.horizontalDemo,children:[(0,S.jsx)(n,{variant:`body-md-reg`,children:`Top content`}),(0,S.jsx)(s,{...e}),(0,S.jsx)(n,{variant:`body-md-reg`,children:`Bottom content`})]})},T={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,S.jsx)(`div`,{className:b.showcaseContainer,children:(0,S.jsxs)(`table`,{className:b.showcaseTable,children:[(0,S.jsx)(`thead`,{children:(0,S.jsxs)(`tr`,{children:[(0,S.jsx)(`th`,{className:b.showcaseHeader,children:`Variant`}),(0,S.jsx)(`th`,{className:b.showcaseHeader,children:`Preview`})]})}),(0,S.jsxs)(`tbody`,{children:[(0,S.jsxs)(`tr`,{children:[(0,S.jsxs)(`td`,{className:b.showcaseCell,children:[(0,S.jsx)(`span`,{className:b.showcaseCellBold,children:`Horizontal`}),(0,S.jsx)(`span`,{className:b.showcaseCellInline,children:`default`})]}),(0,S.jsx)(`td`,{className:b.showcaseCell,children:(0,S.jsx)(`div`,{className:b.horizontalDividerWrapper,children:(0,S.jsx)(s,{})})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsxs)(`td`,{className:b.showcaseCell,children:[(0,S.jsx)(`span`,{className:b.showcaseCellBold,children:`Vertical`}),(0,S.jsx)(`span`,{className:b.showcaseCellInline,children:`default`})]}),(0,S.jsx)(`td`,{className:b.showcaseCell,children:(0,S.jsxs)(`div`,{className:b.verticalDividerContainer,children:[(0,S.jsx)(`div`,{className:b.verticalDividerContent,children:`Left`}),(0,S.jsx)(s,{orientation:`vertical`}),(0,S.jsx)(`div`,{className:b.verticalDividerContent,children:`Right`})]})})]}),(0,S.jsxs)(`tr`,{children:[(0,S.jsxs)(`td`,{className:b.showcaseCell,children:[(0,S.jsx)(`span`,{className:b.showcaseCellBold,children:`Custom`}),(0,S.jsx)(`span`,{className:b.showcaseCellInline,children:`component="span"`})]}),(0,S.jsx)(`td`,{className:b.showcaseCell,children:(0,S.jsx)(`div`,{className:b.horizontalDividerWrapper,children:(0,S.jsx)(s,{component:`span`})})})]})]})]})})},E={args:{orientation:`horizontal`},render:e=>(0,S.jsxs)(a,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,className:b.horizontalDemo,children:[(0,S.jsx)(n,{variant:`body-md-reg`,children:`Above`}),(0,S.jsx)(s,{...e}),(0,S.jsx)(n,{variant:`body-md-reg`,children:`Below`})]})},D={args:{orientation:`vertical`},render:e=>(0,S.jsxs)(a,{direction:`row`,gap:`var(--sm)`,alignItems:`center`,className:b.verticalDemo,children:[(0,S.jsx)(n,{variant:`body-md-reg`,children:`Left`}),(0,S.jsx)(s,{...e}),(0,S.jsx)(n,{variant:`body-md-reg`,children:`Right`})]})},O={args:{orientation:`horizontal`,component:`span`},render:e=>(0,S.jsxs)(a,{direction:`column`,gap:`var(--sm)`,alignItems:`center`,className:b.horizontalDemo,children:[(0,S.jsx)(n,{variant:`body-md-reg`,children:`Above`}),(0,S.jsx)(s,{...e}),(0,S.jsx)(n,{variant:`body-md-reg`,children:`Below`})]})},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => args.orientation === 'vertical' ? <DsStack direction="row" gap="var(--sm)" alignItems="center" className={styles.verticalDemo}>
                <DsTypography variant="body-md-reg">Left content</DsTypography>
                <DsDivider {...args} />
                <DsTypography variant="body-md-reg">Right content</DsTypography>
            </DsStack> : <DsStack direction="column" gap="var(--sm)" alignItems="center" className={styles.horizontalDemo}>
                <DsTypography variant="body-md-reg">Top content</DsTypography>
                <DsDivider {...args} />
                <DsTypography variant="body-md-reg">Bottom content</DsTypography>
            </DsStack>
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <div className={styles.showcaseContainer}>
            <table className={styles.showcaseTable}>
                <thead>
                    <tr>
                        <th className={styles.showcaseHeader}>Variant</th>
                        <th className={styles.showcaseHeader}>Preview</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td className={styles.showcaseCell}>
                            <span className={styles.showcaseCellBold}>Horizontal</span>
                            <span className={styles.showcaseCellInline}>default</span>
                        </td>
                        <td className={styles.showcaseCell}>
                            <div className={styles.horizontalDividerWrapper}>
                                <DsDivider />
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className={styles.showcaseCell}>
                            <span className={styles.showcaseCellBold}>Vertical</span>
                            <span className={styles.showcaseCellInline}>default</span>
                        </td>
                        <td className={styles.showcaseCell}>
                            <div className={styles.verticalDividerContainer}>
                                <div className={styles.verticalDividerContent}>Left</div>
                                <DsDivider orientation="vertical" />
                                <div className={styles.verticalDividerContent}>Right</div>
                            </div>
                        </td>
                    </tr>

                    <tr>
                        <td className={styles.showcaseCell}>
                            <span className={styles.showcaseCellBold}>Custom</span>
                            <span className={styles.showcaseCellInline}>component=&quot;span&quot;</span>
                        </td>
                        <td className={styles.showcaseCell}>
                            <div className={styles.horizontalDividerWrapper}>
                                <DsDivider component="span" />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <DsStack direction="column" gap="var(--sm)" alignItems="center" className={styles.horizontalDemo}>
            <DsTypography variant="body-md-reg">Above</DsTypography>
            <DsDivider {...args} />
            <DsTypography variant="body-md-reg">Below</DsTypography>
        </DsStack>
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <DsStack direction="row" gap="var(--sm)" alignItems="center" className={styles.verticalDemo}>
            <DsTypography variant="body-md-reg">Left</DsTypography>
            <DsDivider {...args} />
            <DsTypography variant="body-md-reg">Right</DsTypography>
        </DsStack>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    component: 'span'
  },
  render: args => <DsStack direction="column" gap="var(--sm)" alignItems="center" className={styles.horizontalDemo}>
            <DsTypography variant="body-md-reg">Above</DsTypography>
            <DsDivider {...args} />
            <DsTypography variant="body-md-reg">Below</DsTypography>
        </DsStack>
}`,...O.parameters?.docs?.source}}},k=[`Default`,`Showcase`,`Horizontal`,`Vertical`,`WithCustomComponent`]}))();export{w as Default,E as Horizontal,T as Showcase,D as Vertical,O as WithCustomComponent,k as __namedExportsOrder,C as default};