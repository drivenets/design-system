import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as s}from"./index-Db8_K9ti.js";import{D as _}from"./ds-icon-B-PQVI_C.js";import{D as y}from"./ds-button-legacy-BgKt23x6.js";import"./iframe-Dq56RWbn.js";import"./preload-helper-PPVm8Dsz.js";const b=["primary","secondary","error"],d=["filled","ghost","borderless","round","dashed"],B=["large","medium","small"],N="_row_c8evy_1",f="_combinationsContainer_c8evy_8",w="_schemaContainer_c8evy_15",T="_schemaTitle_c8evy_36",x="_variantContainer_c8evy_46",C="_variantTitle_c8evy_52",S="_buttonShowcase_c8evy_60",t={row:N,combinationsContainer:f,schemaContainer:w,"iconButton-small":"_iconButton-small_c8evy_21","iconButton-medium":"_iconButton-medium_c8evy_26","iconButton-large":"_iconButton-large_c8evy_31",schemaTitle:T,variantContainer:x,variantTitle:C,buttonShowcase:S},{expect:g,fn:D,userEvent:j,within:R}=__STORYBOOK_MODULE_TEST__,O={title:"Design System/Button (Deprecated)",component:y,parameters:{layout:"centered"},tags:["deprecated"],argTypes:{schema:{control:{type:"select"},options:b,description:"Button color schema",table:{defaultValue:{summary:"primary"}}},variant:{control:{type:"select"},options:d,table:{defaultValue:{summary:"filled"}}},size:{control:{type:"select"},options:B,table:{defaultValue:{summary:"medium"}}}},args:{onClick:D()}},p="Button Text",l={args:{schema:"primary",variant:"filled",disabled:!1,children:p},play:async({canvasElement:h})=>{const r=R(h).getByRole("button",{name:p});await j.click(r),await g(r).toBeInTheDocument()}},m={parameters:{layout:"fullscreen"},render:function(){const i=(e,n,c,u,v)=>a.jsx("div",{className:s(t.row),children:B.map(o=>a.jsxs(y,{className:s(t.buttonShowcase,{[t[`iconButton-${o}`]]:!v}),schema:e,variant:n,size:o,disabled:c,children:[u&&a.jsx(_,{icon:"add",size:o},o),v&&a.jsxs("span",{children:[o," Button"]})]},`${e}-${n}-${o}`))}),r=(e,n,c,u)=>a.jsxs("div",{className:s(t.variantContainer),children:[u&&a.jsx("div",{className:s(t.row),children:a.jsx("h4",{className:s(t.variantTitle),children:n})}),i(e,n,c,!1,!0),i(e,n,c,!0,!1),i(e,n,c,!0,!0)]},e+n);return a.jsxs("div",{className:s(t.combinationsContainer),children:[b.map(e=>a.jsxs("div",{className:s(t.schemaContainer),children:[a.jsx("h3",{className:s(t.schemaTitle),children:e}),d.map(n=>r(e,n,!1,e==="primary"))]},e)),a.jsxs("div",{className:s(t.schemaContainer),children:[a.jsx("h3",{className:s(t.schemaTitle),children:"Disabled"}),d.map(e=>r("primary",e,!0))]})]})}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    schema: 'primary',
    variant: 'filled',
    disabled: false,
    children: defaultButtonText
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button', {
      name: defaultButtonText
    });
    await userEvent.click(button);
    await expect(button).toBeInTheDocument();
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: function Render() {
    const renderButtonRow = (schema: ButtonSchema, variant: ButtonVariant, disabled?: boolean, showIcon?: boolean, showTitle?: boolean) => {
      return <div className={classNames(styles.row)}>
                    {buttonSizes.map(size => <DsButtonLegacy className={classNames(styles.buttonShowcase, {
          [styles[\`iconButton-\${size}\`]]: !showTitle
        })} key={\`\${schema}-\${variant}-\${size}\`} schema={schema} variant={variant} size={size} disabled={disabled}>
                            {showIcon && <DsIcon key={size} icon="add" size={size} />}
                            {showTitle && <span>{size} Button</span>}
                        </DsButtonLegacy>)}
                </div>;
    };
    const renderButtonContainer = (schema: ButtonSchema, variant: ButtonVariant, disabled?: boolean, title?: boolean) => {
      return <div className={classNames(styles.variantContainer)} key={schema + variant}>
                    {title && <div className={classNames(styles.row)}>
                            <h4 className={classNames(styles.variantTitle)}>{variant}</h4>
                        </div>}
                    {renderButtonRow(schema, variant, disabled, false, true)}
                    {renderButtonRow(schema, variant, disabled, true, false)}
                    {renderButtonRow(schema, variant, disabled, true, true)}
                </div>;
    };
    return <div className={classNames(styles.combinationsContainer)}>
                {buttonSchemas.map(schema => <div key={schema} className={classNames(styles.schemaContainer)}>
                        <h3 className={classNames(styles.schemaTitle)}>{schema}</h3>

                        {buttonVariants.map(variant => renderButtonContainer(schema, variant, false, schema === 'primary'))}
                    </div>)}
                <div className={classNames(styles.schemaContainer)}>
                    <h3 className={classNames(styles.schemaTitle)}>Disabled</h3>

                    {buttonVariants.map(variant => renderButtonContainer('primary', variant, true))}
                </div>
            </div>;
  }
}`,...m.parameters?.docs?.source}}};const L=["DefaultButton","Showcase"];export{l as DefaultButton,m as Showcase,L as __namedExportsOrder,O as default};
