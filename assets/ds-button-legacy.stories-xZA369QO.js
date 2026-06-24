var e=document.createElement(`style`);e.textContent=`._row_c8evy_1{align-items:center;gap:20px;padding-bottom:20px;display:flex}._combinationsContainer_c8evy_8{flex-direction:column;gap:20px;margin:20px;display:flex}._schemaContainer_c8evy_15{border-bottom:1px solid #eaeaea;gap:20px;display:flex}._iconButton-small_c8evy_21{width:26px;height:26px}._iconButton-medium_c8evy_26{width:42px;height:42px}._iconButton-large_c8evy_31{width:56px;height:56px}._schemaTitle_c8evy_36{text-transform:capitalize;align-self:center;min-width:150px;margin:0;padding-bottom:8px;font-size:20px;font-weight:600}._variantContainer_c8evy_46{flex-direction:column;gap:16px;display:flex}._variantTitle_c8evy_52{color:#666;text-transform:capitalize;margin:0;font-size:16px;font-weight:500}._buttonShowcase_c8evy_60{text-transform:capitalize}
/*$vite$:1*/`,document.head.appendChild(e);import{i as t,s as n}from"./preload-helper-xPQekRTU.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./classnames-Dm_LJ4P4.js";import{t as a}from"./ds-icon-Bq0P0ipr.js";import{t as o}from"./ds-icon-CEsejKx9.js";import{a as s,i as c,n as l,o as u,r as d,t as f}from"./ds-button-legacy.types-DbFuhWnl.js";var p,m,h,g,_,v,y,b,x=t((()=>{p=`_row_c8evy_1`,m=`_combinationsContainer_c8evy_8`,h=`_schemaContainer_c8evy_15`,g=`_schemaTitle_c8evy_36`,_=`_variantContainer_c8evy_46`,v=`_variantTitle_c8evy_52`,y=`_buttonShowcase_c8evy_60`,b={row:p,combinationsContainer:m,schemaContainer:h,"iconButton-small":`_iconButton-small_c8evy_21`,"iconButton-medium":`_iconButton-medium_c8evy_26`,"iconButton-large":`_iconButton-large_c8evy_31`,schemaTitle:g,variantContainer:_,variantTitle:v,buttonShowcase:y}})),S,C,w,T,E,D,O,k,A,j,M;t((()=>{S=n(i(),1),o(),x(),u(),c(),C=r(),{expect:w,fn:T,userEvent:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/ButtonLegacy (Deprecated)`,component:s,parameters:{layout:`centered`},tags:[`deprecated`],argTypes:{schema:{control:{type:`select`},options:f,description:`Button color schema`,table:{defaultValue:{summary:`primary`}}},variant:{control:{type:`select`},options:d,table:{defaultValue:{summary:`filled`}}},size:{control:{type:`select`},options:l,table:{defaultValue:{summary:`medium`}}}},args:{onClick:T()}},k=`Button Text`,A={args:{schema:`primary`,variant:`filled`,disabled:!1,children:k},play:async({canvasElement:e})=>{let t=D(e).getByRole(`button`,{name:k});await E.click(t),await w(t).toBeInTheDocument()}},j={parameters:{layout:`fullscreen`},render:function(){let e=(e,t,n,r,i)=>(0,C.jsx)(`div`,{className:(0,S.default)(b.row),children:l.map(o=>(0,C.jsxs)(s,{className:(0,S.default)(b.buttonShowcase,{[b[`iconButton-${o}`]]:!i}),schema:e,variant:t,size:o,disabled:n,children:[r&&(0,C.jsx)(a,{icon:`add`,size:o},o),i&&(0,C.jsxs)(`span`,{children:[o,` Button`]})]},`${e}-${t}-${o}`))}),t=(t,n,r,i)=>(0,C.jsxs)(`div`,{className:(0,S.default)(b.variantContainer),children:[i&&(0,C.jsx)(`div`,{className:(0,S.default)(b.row),children:(0,C.jsx)(`h4`,{className:(0,S.default)(b.variantTitle),children:n})}),e(t,n,r,!1,!0),e(t,n,r,!0,!1),e(t,n,r,!0,!0)]},t+n);return(0,C.jsxs)(`div`,{className:(0,S.default)(b.combinationsContainer),children:[f.map(e=>(0,C.jsxs)(`div`,{className:(0,S.default)(b.schemaContainer),children:[(0,C.jsx)(`h3`,{className:(0,S.default)(b.schemaTitle),children:e}),d.map(n=>t(e,n,!1,e===`primary`))]},e)),(0,C.jsxs)(`div`,{className:(0,S.default)(b.schemaContainer),children:[(0,C.jsx)(`h3`,{className:(0,S.default)(b.schemaTitle),children:`Disabled`}),d.map(e=>t(`primary`,e,!0))]})]})}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M=[`DefaultButton`,`Showcase`]}))();export{A as DefaultButton,j as Showcase,M as __namedExportsOrder,O as default};