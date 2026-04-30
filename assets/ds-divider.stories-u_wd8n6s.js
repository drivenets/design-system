import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-D16BNjX-.js";import{t as r}from"./classnames-DN2IqHsz.js";import{n as i,t as a}from"./ds-divider-BUrvsQES.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{o=`_showcaseContainer_5q5ai_1`,s=`_showcaseTable_5q5ai_6`,c=`_showcaseHeader_5q5ai_11`,l=`_showcaseCell_5q5ai_17`,u=`_showcaseCellBold_5q5ai_23`,d=`_showcaseCellInline_5q5ai_28`,f=`_showcaseCellDark_5q5ai_32`,p=`_storyContainer_5q5ai_37`,m=`_storyContainerVertical_5q5ai_49`,h=`_storyContent_5q5ai_53`,g=`_storyContentSide_5q5ai_57`,_=`_storyText_5q5ai_62`,v=`_horizontalContainer_5q5ai_66`,y=`_horizontalDividerWrapper_5q5ai_70`,b=`_verticalDividerContainer_5q5ai_74`,x=`_verticalDividerContent_5q5ai_81`,S={showcaseContainer:o,showcaseTable:s,showcaseHeader:c,showcaseCell:l,showcaseCellBold:u,showcaseCellInline:d,showcaseCellDark:f,storyContainer:p,storyContainerVertical:m,storyContent:h,storyContentSide:g,storyText:_,horizontalContainer:v,horizontalDividerWrapper:y,verticalDividerContainer:b,verticalDividerContent:x}})),w,T,E,D,O,k,A,j,M;t((()=>{w=e(r(),1),i(),C(),T=n(),E={title:`Components/Divider`,component:a,parameters:{layout:`centered`},args:{orientation:`horizontal`},argTypes:{orientation:{control:`radio`,options:[`horizontal`,`vertical`],description:`Controls orientation of the divider.`},component:{control:`select`,options:[`(default)`,`hr`,`div`,`span`],mapping:{"(default)":void 0,hr:`hr`,div:`div`,span:`span`},description:`Underlying element/component to render.`},style:{control:!1},className:{control:!1}}},D={render:e=>(0,T.jsx)(`div`,{className:(0,w.default)(S.storyContainer,{[S.storyContainerVertical]:e.orientation===`vertical`}),children:e.orientation===`vertical`?(0,T.jsxs)(T.Fragment,{children:[(0,T.jsx)(`div`,{className:S.storyContentSide,children:`Left content`}),(0,T.jsx)(a,{...e}),(0,T.jsx)(`div`,{className:S.storyContentSide,children:`Right content`})]}):(0,T.jsxs)(`div`,{className:S.storyContent,children:[(0,T.jsx)(`div`,{className:S.storyText,children:`Top content`}),(0,T.jsx)(a,{...e}),(0,T.jsx)(`div`,{className:S.storyText,children:`Bottom content`})]})})},O={render:()=>(0,T.jsx)(`div`,{className:S.showcaseContainer,children:(0,T.jsxs)(`table`,{className:S.showcaseTable,children:[(0,T.jsx)(`thead`,{children:(0,T.jsxs)(`tr`,{children:[(0,T.jsx)(`th`,{className:S.showcaseHeader,children:`Variant`}),(0,T.jsx)(`th`,{className:S.showcaseHeader,children:`Preview`})]})}),(0,T.jsxs)(`tbody`,{children:[(0,T.jsxs)(`tr`,{children:[(0,T.jsxs)(`td`,{className:S.showcaseCell,children:[(0,T.jsx)(`span`,{className:S.showcaseCellBold,children:`Horizontal`}),(0,T.jsx)(`span`,{className:S.showcaseCellInline,children:`default`})]}),(0,T.jsx)(`td`,{className:S.showcaseCell,children:(0,T.jsx)(`div`,{className:S.horizontalDividerWrapper,children:(0,T.jsx)(a,{})})})]}),(0,T.jsxs)(`tr`,{children:[(0,T.jsxs)(`td`,{className:S.showcaseCell,children:[(0,T.jsx)(`span`,{className:S.showcaseCellBold,children:`Vertical`}),(0,T.jsx)(`span`,{className:S.showcaseCellInline,children:`default`})]}),(0,T.jsx)(`td`,{className:S.showcaseCell,children:(0,T.jsxs)(`div`,{className:S.verticalDividerContainer,children:[(0,T.jsx)(`div`,{className:S.verticalDividerContent,children:`Left`}),(0,T.jsx)(a,{orientation:`vertical`}),(0,T.jsx)(`div`,{className:S.verticalDividerContent,children:`Right`})]})})]}),(0,T.jsxs)(`tr`,{children:[(0,T.jsxs)(`td`,{className:S.showcaseCell,children:[(0,T.jsx)(`span`,{className:S.showcaseCellBold,children:`Custom`}),(0,T.jsx)(`span`,{className:S.showcaseCellInline,children:`component="span"`})]}),(0,T.jsx)(`td`,{className:S.showcaseCell,children:(0,T.jsx)(`div`,{className:S.horizontalDividerWrapper,children:(0,T.jsx)(a,{component:`span`})})})]})]})]})})},k={args:{orientation:`horizontal`},render:e=>(0,T.jsxs)(`div`,{className:S.horizontalContainer,children:[(0,T.jsx)(`div`,{className:S.storyText,children:`Above`}),(0,T.jsx)(a,{...e}),(0,T.jsx)(`div`,{className:S.storyText,children:`Below`})]})},A={args:{orientation:`vertical`},render:e=>(0,T.jsxs)(`div`,{className:(0,w.default)(S.storyContainer,S.storyContainerVertical),children:[(0,T.jsx)(`div`,{className:S.storyContentSide,children:`Left`}),(0,T.jsx)(a,{...e}),(0,T.jsx)(`div`,{className:S.storyContentSide,children:`Right`})]})},j={args:{orientation:`horizontal`,component:`span`},render:e=>(0,T.jsxs)(`div`,{className:S.horizontalContainer,children:[(0,T.jsx)(`div`,{className:S.storyText,children:`Above`}),(0,T.jsx)(a,{...e}),(0,T.jsx)(`div`,{className:S.storyText,children:`Below`})]})},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => <div className={classNames(styles.storyContainer, {
    [styles.storyContainerVertical]: args.orientation === 'vertical'
  })}>
            {args.orientation === 'vertical' ? <>
                    <div className={styles.storyContentSide}>Left content</div>
                    <DsDivider {...args} />
                    <div className={styles.storyContentSide}>Right content</div>
                </> : <div className={styles.storyContent}>
                    <div className={styles.storyText}>Top content</div>
                    <DsDivider {...args} />
                    <div className={styles.storyText}>Bottom content</div>
                </div>}
        </div>
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal'
  },
  render: args => <div className={styles.horizontalContainer}>
            <div className={styles.storyText}>Above</div>
            <DsDivider {...args} />
            <div className={styles.storyText}>Below</div>
        </div>
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: args => <div className={classNames(styles.storyContainer, styles.storyContainerVertical)}>
            <div className={styles.storyContentSide}>Left</div>
            <DsDivider {...args} />
            <div className={styles.storyContentSide}>Right</div>
        </div>
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'horizontal',
    component: 'span'
  },
  render: args => <div className={styles.horizontalContainer}>
            <div className={styles.storyText}>Above</div>
            <DsDivider {...args} />
            <div className={styles.storyText}>Below</div>
        </div>
}`,...j.parameters?.docs?.source}}},M=[`Default`,`Showcase`,`Horizontal`,`Vertical`,`WithCustomComponent`]}))();export{D as Default,k as Horizontal,O as Showcase,A as Vertical,j as WithCustomComponent,M as __namedExportsOrder,E as default};