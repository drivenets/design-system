import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-Cw9gq7QB.js";import{i as n,n as r,r as i,t as a}from"./ds-typography-BHHjy2eJ.js";var o,s,c,l,u,d,f,p,m,h,g,_,v,y,b,x=e((()=>{o=`_typographyContainer_17a0a_1`,s=`_pageTitle_17a0a_7`,c=`_pageDescription_17a0a_12`,l=`_typographyGrid_17a0a_17`,u=`_typographyItem_17a0a_24`,d=`_typographyInfo_17a0a_31`,f=`_typographyName_17a0a_35`,p=`_typographyDescription_17a0a_40`,m=`_typographyClass_17a0a_45`,h=`_typographyPreview_17a0a_52`,g=`_comparisonSection_17a0a_59`,_=`_sectionTitle_17a0a_63`,v=`_comparisonItem_17a0a_68`,y=`_comparisonLabel_17a0a_77`,b={typographyContainer:o,pageTitle:s,pageDescription:c,typographyGrid:l,typographyItem:u,typographyInfo:d,typographyName:f,typographyDescription:p,typographyClass:m,typographyPreview:h,comparisonSection:g,sectionTitle:_,comparisonItem:v,comparisonLabel:y}})),S,C,w,T,E,D;e((()=>{r(),x(),i(),S=t(),C={title:`Design System/Typography`,component:a,parameters:{layout:`padded`,docs:{description:{component:"\nA flexible typography component that supports both semantic variants and granular customization.\nUses predefined typography combinations (e.g., `body-md-reg`, `code-xs-semi-bold`)\n                "}}},argTypes:{variant:{control:`select`,description:`Predefined typography combination (overrides size/weight/align)`,options:Object.keys(n)},asChild:{control:`boolean`,description:`Use Slot component for composition`},children:{control:`text`,description:`Content to render`},className:{control:`text`,description:`Additional CSS classes`}}},w=`Almost before we knew it, we had left the ground.`,T={args:{variant:`body-md-reg`,children:`Hello world Design System!`}},E={render:function(){let e=[{title:`Headings`,variants:Object.keys(n).filter(e=>e.startsWith(`heading`))},{title:`Body Text`,variants:Object.keys(n).filter(e=>e.startsWith(`body`))},{title:`Code Text`,variants:Object.keys(n).filter(e=>e.startsWith(`code`))}];return(0,S.jsxs)(`div`,{className:b.typographyContainer,children:[(0,S.jsx)(a,{className:b.pageTitle,variant:`heading1`,children:`Typography Design System v1.2`}),(0,S.jsx)(a,{className:b.pageDescription,variant:`body-md-reg`,children:`Predefined variants that match design system typography specifications.`}),e.map(e=>(0,S.jsxs)(`section`,{className:b.comparisonSection,children:[(0,S.jsx)(a,{className:b.sectionTitle,variant:`heading3`,asChild:!0,children:(0,S.jsx)(`h2`,{children:e.title})}),e.variants.map(e=>(0,S.jsxs)(`div`,{className:b.comparisonItem,children:[(0,S.jsx)(a,{className:b.comparisonLabel,variant:`code-sm-reg`,children:e}),(0,S.jsxs)(a,{variant:e,children:[w,` (`,n[e],`)`]})]},e))]},e.title))]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body-md-reg',
    children: 'Hello world Design System!'
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const semanticSections = [{
      title: 'Headings',
      variants: Object.keys(semanticElementMap).filter(key => key.startsWith('heading')) as SemanticVariant[]
    }, {
      title: 'Body Text',
      variants: Object.keys(semanticElementMap).filter(key => key.startsWith('body')) as SemanticVariant[]
    }, {
      title: 'Code Text',
      variants: Object.keys(semanticElementMap).filter(key => key.startsWith('code')) as SemanticVariant[]
    }];
    return <div className={styles.typographyContainer}>
                <DsTypography className={styles.pageTitle} variant="heading1">
                    Typography Design System v1.2
                </DsTypography>
                <DsTypography className={styles.pageDescription} variant="body-md-reg">
                    Predefined variants that match design system typography specifications.
                </DsTypography>

                {semanticSections.map(section => <section key={section.title} className={styles.comparisonSection}>
                        <DsTypography className={styles.sectionTitle} variant="heading3" asChild>
                            <h2>{section.title}</h2>
                        </DsTypography>
                        {section.variants.map((variant: SemanticVariant) => <div key={variant} className={styles.comparisonItem}>
                                <DsTypography className={styles.comparisonLabel} variant="code-sm-reg">
                                    {variant}
                                </DsTypography>
                                <DsTypography variant={variant}>
                                    {sampleText} ({semanticElementMap[variant] as string})
                                </DsTypography>
                            </div>)}
                    </section>)}
            </div>;
  }
}`,...E.parameters?.docs?.source}}},D=[`Default`,`Showcase`]}))();export{T as Default,E as Showcase,D as __namedExportsOrder,C as default};