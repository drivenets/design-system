import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-DQv6WgRH.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./classnames-Dm_LJ4P4.js";var a,o,s,c,l,u,d,f,p,m,h,g=e((()=>{a=`_container_1wxse_1`,o=`_section_1wxse_6`,s=`_sectionWide_1wxse_10`,c=`_sectionExtraWide_1wxse_14`,l=`_scrollableContainer_1wxse_18`,u=`_scrollableContainerTall_1wxse_26`,d=`_contentContainer_1wxse_34`,f=`_contentItem_1wxse_39`,p=`_contentItemHorizontal_1wxse_47`,m=`_wideContent_1wxse_58`,h={container:a,section:o,sectionWide:s,sectionExtraWide:c,scrollableContainer:l,scrollableContainerTall:u,contentContainer:d,contentItem:f,contentItemHorizontal:p,wideContent:m}})),_,v,y,b,x,S,C,w,T;e((()=>{_=t(n(),1),v=t(i(),1),g(),y=r(),b={title:`Components/Scrollbars`,parameters:{layout:`padded`,docs:{description:{component:`
All scrollbars are styled automatically by the design system.
You can add a \`.scrollbar-thin\` class to the element in order to make its scrollbar thin.
                `}}}},x=(e,t)=>{let n=Array.from({length:e},(e,n)=>(0,y.jsxs)(`div`,{className:t===`horizontal`?h.contentItemHorizontal:h.contentItem,children:[(0,y.jsxs)(`h3`,{children:[`Item `,n+1]}),(0,y.jsxs)(`p`,{children:[`Content for item `,n+1]})]},n));return(0,y.jsx)(`div`,{className:t===`horizontal`?h.contentContainer:void 0,children:n})},S={render:()=>(0,y.jsxs)(`div`,{className:h.container,children:[(0,y.jsxs)(`div`,{className:h.section,children:[(0,y.jsx)(`h3`,{children:`Vertical Scrollbar (Default)`}),(0,y.jsx)(`div`,{className:h.scrollableContainer,children:x(20,`vertical`)})]}),(0,y.jsxs)(`div`,{className:h.sectionWide,children:[(0,y.jsx)(`h3`,{children:`Horizontal Scrollbar (Default)`}),(0,y.jsx)(`div`,{className:h.scrollableContainer,children:x(15,`horizontal`)})]})]}),parameters:{docs:{description:{story:`Default scrollbars for both vertical and horizontal overflow.`}}}},C={render:()=>(0,y.jsxs)(`div`,{className:h.container,children:[(0,y.jsxs)(`div`,{className:h.section,children:[(0,y.jsx)(`h3`,{children:`Vertical Scrollbar (Thin)`}),(0,y.jsx)(`div`,{className:(0,v.default)(`scrollbar-thin`,h.scrollableContainer),children:x(20,`vertical`)})]}),(0,y.jsxs)(`div`,{className:h.sectionWide,children:[(0,y.jsx)(`h3`,{children:`Horizontal Scrollbar (Thin)`}),(0,y.jsx)(`div`,{className:(0,v.default)(`scrollbar-thin`,h.scrollableContainer),children:x(15,`horizontal`)})]})]}),parameters:{docs:{description:{story:`Small (thin) scrollbars for both vertical and horizontal overflow.`}}}},w={render:()=>(0,y.jsxs)(`div`,{className:h.sectionExtraWide,children:[(0,y.jsx)(`h3`,{children:`Combined Example - Both X and Y Overflow`}),(0,y.jsx)(`div`,{className:h.scrollableContainerTall,children:(0,y.jsxs)(`div`,{className:h.wideContent,children:[(0,y.jsx)(`h2`,{children:`Wide Content`}),(0,y.jsx)(`p`,{children:`This container has both vertical and horizontal overflow, showing both scrollbars.`}),Array.from({length:25},(e,t)=>(0,y.jsx)(_.Fragment,{children:x(25,`horizontal`)},t))]})})]}),parameters:{docs:{description:{story:`Example showing both vertical and horizontal scrollbars on the same container.`}}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.container}>
            <div className={styles.section}>
                <h3>Vertical Scrollbar (Default)</h3>
                <div className={styles.scrollableContainer}>{generateContent(20, 'vertical')}</div>
            </div>

            <div className={styles.sectionWide}>
                <h3>Horizontal Scrollbar (Default)</h3>
                <div className={styles.scrollableContainer}>{generateContent(15, 'horizontal')}</div>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Default scrollbars for both vertical and horizontal overflow.'
      }
    }
  }
}`,...S.parameters?.docs?.source}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.container}>
            <div className={styles.section}>
                <h3>Vertical Scrollbar (Thin)</h3>
                <div className={classNames('scrollbar-thin', styles.scrollableContainer)}>
                    {generateContent(20, 'vertical')}
                </div>
            </div>

            <div className={styles.sectionWide}>
                <h3>Horizontal Scrollbar (Thin)</h3>
                <div className={classNames('scrollbar-thin', styles.scrollableContainer)}>
                    {generateContent(15, 'horizontal')}
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Small (thin) scrollbars for both vertical and horizontal overflow.'
      }
    }
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.sectionExtraWide}>
            <h3>Combined Example - Both X and Y Overflow</h3>
            <div className={styles.scrollableContainerTall}>
                <div className={styles.wideContent}>
                    <h2>Wide Content</h2>
                    <p>This container has both vertical and horizontal overflow, showing both scrollbars.</p>
                    {Array.from({
          length: 25
        }, (_, i) => <Fragment key={i}>{generateContent(25, 'horizontal')}</Fragment>)}
                </div>
            </div>
        </div>,
  parameters: {
    docs: {
      description: {
        story: 'Example showing both vertical and horizontal scrollbars on the same container.'
      }
    }
  }
}`,...w.parameters?.docs?.source}}},T=[`DefaultScrollbar`,`SmallScrollbar`,`CombinedExample`]}))();export{w as CombinedExample,S as DefaultScrollbar,C as SmallScrollbar,T as __namedExportsOrder,b as default};