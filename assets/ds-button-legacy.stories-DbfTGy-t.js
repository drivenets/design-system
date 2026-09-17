var e=document.createElement(`style`);e.textContent=`._row_c8evy_1{align-items:center;gap:20px;padding-bottom:20px;display:flex}._combinationsContainer_c8evy_8{flex-direction:column;gap:20px;margin:20px;display:flex}._schemaContainer_c8evy_15{border-bottom:1px solid #eaeaea;gap:20px;display:flex}._iconButton-small_c8evy_21{width:26px;height:26px}._iconButton-medium_c8evy_26{width:42px;height:42px}._iconButton-large_c8evy_31{width:56px;height:56px}._schemaTitle_c8evy_36{text-transform:capitalize;align-self:center;min-width:150px;margin:0;padding-bottom:8px;font-size:20px;font-weight:600}._variantContainer_c8evy_46{flex-direction:column;gap:16px;display:flex}._variantTitle_c8evy_52{color:#666;text-transform:capitalize;margin:0;font-size:16px;font-weight:500}._buttonShowcase_c8evy_60{text-transform:capitalize}
/*$vite$:1*/`,document.head.appendChild(e);import{a as t,n}from"./rolldown-runtime-DkW27tQK.js";import{n as r}from"./iframe-CXNbvdbt.js";import{t as i}from"./classnames-DavMFNTn.js";import{n as a,t as o}from"./ds-icon-CzachMSt.js";import{n as s,t as c}from"./ds-button-legacy-Di5NEkQM.js";var l,u,d,f,p,m,h,g;function _(){return(_=n((()=>{l=`_row_c8evy_1`,u=`_combinationsContainer_c8evy_8`,d=`_schemaContainer_c8evy_15`,f=`_schemaTitle_c8evy_36`,p=`_variantContainer_c8evy_46`,m=`_variantTitle_c8evy_52`,h=`_buttonShowcase_c8evy_60`,g={row:l,combinationsContainer:u,schemaContainer:d,"iconButton-small":`_iconButton-small_c8evy_21`,"iconButton-medium":`_iconButton-medium_c8evy_26`,"iconButton-large":`_iconButton-large_c8evy_31`,schemaTitle:f,variantContainer:p,variantTitle:m,buttonShowcase:h}})))()}var v,y,b;function x(){return(x=n((()=>{v=[`primary`,`secondary`,`error`],y=[`filled`,`ghost`,`borderless`,`round`,`dashed`],b=[`large`,`medium`,`small`]})))()}var S,C,w,T,E,D,O,k,A,j,M;function N(){return(N=n((()=>{S=t(i(),1),o(),_(),s(),x(),C=r(),{expect:w,fn:T,userEvent:E,within:D}=__STORYBOOK_MODULE_TEST__,O={title:`Components/ButtonLegacy (Deprecated)`,component:c,parameters:{layout:`centered`},tags:[`deprecated`],argTypes:{schema:{control:{type:`select`},options:v,description:`Button color schema`,table:{defaultValue:{summary:`primary`}}},variant:{control:{type:`select`},options:y,table:{defaultValue:{summary:`filled`}}},size:{control:{type:`select`},options:b,table:{defaultValue:{summary:`medium`}}}},args:{onClick:T()}},k=`Button Text`,A={args:{schema:`primary`,variant:`filled`,disabled:!1,children:k},play:async({canvasElement:e})=>{let t=D(e).getByRole(`button`,{name:k});await E.click(t),await w(t).toBeInTheDocument()}},j={parameters:{layout:`fullscreen`},render:function(){let e=(e,t,n,r,i)=>(0,C.jsx)(`div`,{className:(0,S.default)(g.row),children:b.map(o=>(0,C.jsxs)(c,{className:(0,S.default)(g.buttonShowcase,{[g[`iconButton-${o}`]]:!i}),schema:e,variant:t,size:o,disabled:n,children:[r&&(0,C.jsx)(a,{icon:`add`,size:o},o),i&&(0,C.jsxs)(`span`,{children:[o,` Button`]})]},`${e}-${t}-${o}`))}),t=(t,n,r,i)=>(0,C.jsxs)(`div`,{className:(0,S.default)(g.variantContainer),children:[i&&(0,C.jsx)(`div`,{className:(0,S.default)(g.row),children:(0,C.jsx)(`h4`,{className:(0,S.default)(g.variantTitle),children:n})}),e(t,n,r,!1,!0),e(t,n,r,!0,!1),e(t,n,r,!0,!0)]},t+n);return(0,C.jsxs)(`div`,{className:(0,S.default)(g.combinationsContainer),children:[v.map(e=>(0,C.jsxs)(`div`,{className:(0,S.default)(g.schemaContainer),children:[(0,C.jsx)(`h3`,{className:(0,S.default)(g.schemaTitle),children:e}),y.map(n=>t(e,n,!1,e===`primary`))]},e)),(0,C.jsxs)(`div`,{className:(0,S.default)(g.schemaContainer),children:[(0,C.jsx)(`h3`,{className:(0,S.default)(g.schemaTitle),children:`Disabled`}),y.map(e=>t(`primary`,e,!0))]})]})}},M=[`DefaultButton`,`Showcase`],A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}}})))()}N();export{A as DefaultButton,j as Showcase,M as __namedExportsOrder,O as default};