import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{t as r}from"./classnames-Cm4Wq5Eu.js";import{n as i,t as a}from"./ds-typography-BLoO5j9q.js";var o,s,c,l,u,d,f,p,m,h,g,_=t((()=>{o=`_container_1wxse_1`,s=`_section_1wxse_6`,c=`_sectionWide_1wxse_10`,l=`_sectionExtraWide_1wxse_14`,u=`_scrollableContainer_1wxse_18`,d=`_scrollableContainerTall_1wxse_26`,f=`_contentContainer_1wxse_34`,p=`_contentItem_1wxse_39`,m=`_contentItemHorizontal_1wxse_47`,h=`_wideContent_1wxse_58`,g={container:o,section:s,sectionWide:c,sectionExtraWide:l,scrollableContainer:u,scrollableContainerTall:d,contentContainer:f,contentItem:p,contentItemHorizontal:m,wideContent:h}})),v,y,b,x,S,C,w;t((()=>{v=e(r(),1),a(),_(),y=n(),b={title:`Components/Scrollbars`,parameters:{layout:`padded`,docs:{description:{component:`
All scrollbars are styled automatically by the design system and auto-hide until you hover the scrollable region.
At rest the thumb is subtle (10px); on hover it widens (12px) and darkens for clearer affordance.
You can add a \`.scrollbar-thin\` class to the element in order to make its scrollbar thin.
                `}}}},x={tags:[`!manifest`],render:()=>(0,y.jsxs)(`div`,{className:g.container,children:[(0,y.jsxs)(`div`,{className:g.section,children:[(0,y.jsx)(i,{variant:`heading3`,children:`Vertical Scrollbar (Default)`}),(0,y.jsx)(`div`,{className:g.scrollableContainer,children:(0,y.jsx)(`div`,{children:Array.from({length:20},(e,t)=>(0,y.jsxs)(`div`,{className:g.contentItem,children:[(0,y.jsxs)(i,{variant:`heading3`,children:[`Item `,t+1]}),(0,y.jsxs)(i,{variant:`body-md-reg`,children:[`Content for item `,t+1]})]},t))})})]}),(0,y.jsxs)(`div`,{className:g.sectionWide,children:[(0,y.jsx)(i,{variant:`heading3`,children:`Horizontal Scrollbar (Default)`}),(0,y.jsx)(`div`,{className:g.scrollableContainer,children:(0,y.jsx)(`div`,{className:g.contentContainer,children:Array.from({length:15},(e,t)=>(0,y.jsxs)(`div`,{className:g.contentItemHorizontal,children:[(0,y.jsxs)(i,{variant:`heading3`,children:[`Item `,t+1]}),(0,y.jsxs)(i,{variant:`body-md-reg`,children:[`Content for item `,t+1]})]},t))})})]})]}),parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Default scrollbars for both vertical and horizontal overflow.`}}}},S={tags:[`!manifest`],render:()=>(0,y.jsxs)(`div`,{className:g.container,children:[(0,y.jsxs)(`div`,{className:g.section,children:[(0,y.jsx)(i,{variant:`heading3`,children:`Vertical Scrollbar (Thin)`}),(0,y.jsx)(`div`,{className:(0,v.default)(`scrollbar-thin`,g.scrollableContainer),children:(0,y.jsx)(`div`,{children:Array.from({length:20},(e,t)=>(0,y.jsxs)(`div`,{className:g.contentItem,children:[(0,y.jsxs)(i,{variant:`heading3`,children:[`Item `,t+1]}),(0,y.jsxs)(i,{variant:`body-md-reg`,children:[`Content for item `,t+1]})]},t))})})]}),(0,y.jsxs)(`div`,{className:g.sectionWide,children:[(0,y.jsx)(i,{variant:`heading3`,children:`Horizontal Scrollbar (Thin)`}),(0,y.jsx)(`div`,{className:(0,v.default)(`scrollbar-thin`,g.scrollableContainer),children:(0,y.jsx)(`div`,{className:g.contentContainer,children:Array.from({length:15},(e,t)=>(0,y.jsxs)(`div`,{className:g.contentItemHorizontal,children:[(0,y.jsxs)(i,{variant:`heading3`,children:[`Item `,t+1]}),(0,y.jsxs)(i,{variant:`body-md-reg`,children:[`Content for item `,t+1]})]},t))})})]})]}),parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Small (thin) scrollbars for both vertical and horizontal overflow.`}}}},C={tags:[`!manifest`],render:()=>(0,y.jsxs)(`div`,{className:g.sectionExtraWide,children:[(0,y.jsx)(i,{variant:`heading3`,children:`Combined Example - Both X and Y Overflow`}),(0,y.jsx)(`div`,{className:g.scrollableContainerTall,children:(0,y.jsxs)(`div`,{className:g.wideContent,children:[(0,y.jsx)(i,{variant:`heading2`,children:`Wide Content`}),(0,y.jsx)(i,{variant:`body-md-reg`,children:`This container has both vertical and horizontal overflow, showing both scrollbars.`}),Array.from({length:25},(e,t)=>(0,y.jsx)(`div`,{className:g.contentContainer,children:Array.from({length:25},(e,t)=>(0,y.jsxs)(`div`,{className:g.contentItemHorizontal,children:[(0,y.jsxs)(i,{variant:`heading3`,children:[`Item `,t+1]}),(0,y.jsxs)(i,{variant:`body-md-reg`,children:[`Content for item `,t+1]})]},t))},t))]})})]}),parameters:{docs:{canvas:{sourceState:`none`},description:{story:`Example showing both vertical and horizontal scrollbars on the same container.`}}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => <div className={styles.container}>
            <div className={styles.section}>
                <DsTypography variant="heading3">Vertical Scrollbar (Default)</DsTypography>
                <div className={styles.scrollableContainer}>
                    <div>
                        {Array.from({
            length: 20
          }, (_, i) => <div key={i} className={styles.contentItem}>
                                <DsTypography variant="heading3">Item {i + 1}</DsTypography>
                                <DsTypography variant="body-md-reg">Content for item {i + 1}</DsTypography>
                            </div>)}
                    </div>
                </div>
            </div>

            <div className={styles.sectionWide}>
                <DsTypography variant="heading3">Horizontal Scrollbar (Default)</DsTypography>
                <div className={styles.scrollableContainer}>
                    <div className={styles.contentContainer}>
                        {Array.from({
            length: 15
          }, (_, i) => <div key={i} className={styles.contentItemHorizontal}>
                                <DsTypography variant="heading3">Item {i + 1}</DsTypography>
                                <DsTypography variant="body-md-reg">Content for item {i + 1}</DsTypography>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      description: {
        story: 'Default scrollbars for both vertical and horizontal overflow.'
      }
    }
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => <div className={styles.container}>
            <div className={styles.section}>
                <DsTypography variant="heading3">Vertical Scrollbar (Thin)</DsTypography>
                <div className={classNames('scrollbar-thin', styles.scrollableContainer)}>
                    <div>
                        {Array.from({
            length: 20
          }, (_, i) => <div key={i} className={styles.contentItem}>
                                <DsTypography variant="heading3">Item {i + 1}</DsTypography>
                                <DsTypography variant="body-md-reg">Content for item {i + 1}</DsTypography>
                            </div>)}
                    </div>
                </div>
            </div>

            <div className={styles.sectionWide}>
                <DsTypography variant="heading3">Horizontal Scrollbar (Thin)</DsTypography>
                <div className={classNames('scrollbar-thin', styles.scrollableContainer)}>
                    <div className={styles.contentContainer}>
                        {Array.from({
            length: 15
          }, (_, i) => <div key={i} className={styles.contentItemHorizontal}>
                                <DsTypography variant="heading3">Item {i + 1}</DsTypography>
                                <DsTypography variant="body-md-reg">Content for item {i + 1}</DsTypography>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      description: {
        story: 'Small (thin) scrollbars for both vertical and horizontal overflow.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  render: () => <div className={styles.sectionExtraWide}>
            <DsTypography variant="heading3">Combined Example - Both X and Y Overflow</DsTypography>
            <div className={styles.scrollableContainerTall}>
                <div className={styles.wideContent}>
                    <DsTypography variant="heading2">Wide Content</DsTypography>
                    <DsTypography variant="body-md-reg">
                        This container has both vertical and horizontal overflow, showing both scrollbars.
                    </DsTypography>
                    {Array.from({
          length: 25
        }, (_, i) => <div key={i} className={styles.contentContainer}>
                            {Array.from({
            length: 25
          }, (_, j) => <div key={j} className={styles.contentItemHorizontal}>
                                    <DsTypography variant="heading3">Item {j + 1}</DsTypography>
                                    <DsTypography variant="body-md-reg">Content for item {j + 1}</DsTypography>
                                </div>)}
                        </div>)}
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      },
      description: {
        story: 'Example showing both vertical and horizontal scrollbars on the same container.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w=[`DefaultScrollbar`,`SmallScrollbar`,`CombinedExample`]}))();export{C as CombinedExample,x as DefaultScrollbar,S as SmallScrollbar,w as __namedExportsOrder,b as default};