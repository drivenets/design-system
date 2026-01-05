import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-RxI9bAYy.js";import"./preload-helper-PPVm8Dsz.js";const h="_container_1wxse_1",m="_section_1wxse_6",v="_sectionWide_1wxse_10",b="_sectionExtraWide_1wxse_14",x="_scrollableContainer_1wxse_18",p="_scrollableContainerTall_1wxse_26",C="_contentContainer_1wxse_34",_="_contentItem_1wxse_39",y="_contentItemHorizontal_1wxse_47",N="_wideContent_1wxse_58",n={container:h,section:m,sectionWide:v,sectionExtraWide:b,scrollableContainer:x,scrollableContainerTall:p,contentContainer:C,contentItem:_,contentItemHorizontal:y,wideContent:N},z={title:"Design System/Scrollbars",parameters:{layout:"padded",docs:{description:{component:`
All scrollbars are styled automatically by the design system.
You can add a \`.scrollbar-thin\` class to the element in order to make its scrollbar thin.
                `}}},tags:["autodocs"]},r=(i,t)=>{const c=Array.from({length:i},(f,l)=>e.jsxs("div",{className:t==="horizontal"?n.contentItemHorizontal:n.contentItem,children:[e.jsxs("h3",{children:["Item ",l+1]}),e.jsxs("p",{children:["Content for item ",l+1]})]},l));return e.jsx("div",{className:t==="horizontal"?n.contentContainer:void 0,children:c})},s={render:()=>e.jsxs("div",{className:n.container,children:[e.jsxs("div",{className:n.section,children:[e.jsx("h3",{children:"Vertical Scrollbar (Default)"}),e.jsx("div",{className:n.scrollableContainer,children:r(20,"vertical")})]}),e.jsxs("div",{className:n.sectionWide,children:[e.jsx("h3",{children:"Horizontal Scrollbar (Default)"}),e.jsx("div",{className:n.scrollableContainer,children:r(15,"horizontal")})]})]}),parameters:{docs:{description:{story:"Default scrollbars for both vertical and horizontal overflow."}}}},o={render:()=>e.jsxs("div",{className:n.container,children:[e.jsxs("div",{className:n.section,children:[e.jsx("h3",{children:"Vertical Scrollbar (Thin)"}),e.jsx("div",{className:`scrollbar-thin ${n.scrollableContainer}`,children:r(20,"vertical")})]}),e.jsxs("div",{className:n.sectionWide,children:[e.jsx("h3",{children:"Horizontal Scrollbar (Thin)"}),e.jsx("div",{className:`scrollbar-thin ${n.scrollableContainer}`,children:r(15,"horizontal")})]})]}),parameters:{docs:{description:{story:"Small (thin) scrollbars for both vertical and horizontal overflow."}}}},a={render:()=>e.jsxs("div",{className:n.sectionExtraWide,children:[e.jsx("h3",{children:"Combined Example - Both X and Y Overflow"}),e.jsx("div",{className:n.scrollableContainerTall,children:e.jsxs("div",{className:n.wideContent,children:[e.jsx("h2",{children:"Wide Content"}),e.jsx("p",{children:"This container has both vertical and horizontal overflow, showing both scrollbars."}),Array.from({length:25},(i,t)=>e.jsx(d.Fragment,{children:r(25,"horizontal")},t))]})})]}),parameters:{docs:{description:{story:"Example showing both vertical and horizontal scrollbars on the same container."}}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.container}>
            <div className={styles.section}>
                <h3>Vertical Scrollbar (Thin)</h3>
                <div className={\`scrollbar-thin \${styles.scrollableContainer}\`}>
                    {generateContent(20, 'vertical')}
                </div>
            </div>

            <div className={styles.sectionWide}>
                <h3>Horizontal Scrollbar (Thin)</h3>
                <div className={\`scrollbar-thin \${styles.scrollableContainer}\`}>
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
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};const g=["DefaultScrollbar","SmallScrollbar","CombinedExample"];export{a as CombinedExample,s as DefaultScrollbar,o as SmallScrollbar,g as __namedExportsOrder,z as default};
