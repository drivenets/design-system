import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as s,s as i}from"./ds-typography-CGEkpxWa.js";import"./index-Dp9-TG4A.js";import"./iframe-Dd1XyJiR.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Ci-ljsug.js";import"./index-CEcfwOnM.js";const p="_typographyContainer_17a0a_1",m="_pageTitle_17a0a_7",l="_pageDescription_17a0a_12",d="_comparisonSection_17a0a_59",y="_sectionTitle_17a0a_63",g="_comparisonItem_17a0a_68",h="_comparisonLabel_17a0a_77",a={typographyContainer:p,pageTitle:m,pageDescription:l,comparisonSection:d,sectionTitle:y,comparisonItem:g,comparisonLabel:h},v=Object.keys(i),k={title:"Design System/Typography",component:s,parameters:{layout:"padded",docs:{description:{component:"\nA flexible typography component that supports both semantic variants and granular customization.\nUses predefined typography combinations (e.g., `body-md-reg`, `code-xs-semi-bold`)\n                "}}},tags:["autodocs"],argTypes:{variant:{control:"select",description:"Predefined typography combination (overrides size/weight/align)",options:v},asChild:{control:"boolean",description:"Use Slot component for composition"},children:{control:"text",description:"Content to render"},className:{control:"text",description:"Additional CSS classes"}}},T="Almost before we knew it, we had left the ground.",o={args:{variant:"body-md-reg",children:"Hello world Design System!"}},r={render:function(){const c=[{title:"Headings",variants:Object.keys(i).filter(e=>e.startsWith("heading"))},{title:"Body Text",variants:Object.keys(i).filter(e=>e.startsWith("body"))},{title:"Code Text",variants:Object.keys(i).filter(e=>e.startsWith("code"))}];return t.jsxs("div",{className:a.typographyContainer,children:[t.jsx(s,{className:a.pageTitle,variant:"heading1",children:"Typography Design System v1.2"}),t.jsx(s,{className:a.pageDescription,variant:"body-md-reg",children:"Predefined variants that match design system typography specifications."}),c.map(e=>t.jsxs("section",{className:a.comparisonSection,children:[t.jsx(s,{className:a.sectionTitle,variant:"heading3",asChild:!0,children:t.jsx("h2",{children:e.title})}),e.variants.map(n=>t.jsxs("div",{className:a.comparisonItem,children:[t.jsx(s,{className:a.comparisonLabel,variant:"code-sm-reg",children:n}),t.jsxs(s,{variant:n,children:[T," (",i[n],")"]})]},n))]},e.title))]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'body-md-reg',
    children: 'Hello world Design System!'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
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
}`,...r.parameters?.docs?.source}}};const N=["Default","Showcase"];export{o as Default,r as Showcase,N as __namedExportsOrder,k as default};
