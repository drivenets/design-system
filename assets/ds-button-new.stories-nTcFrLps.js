import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-Cw9gq7QB.js";import{t as r}from"./classnames-BKwtnCRs.js";import{i}from"./ds-icon.types-uxL3NVCO.js";import{t as a}from"./ds-icon-DFxPL3R9.js";import{a as o,i as s,n as c,o as l,r as u,t as d}from"./ds-button-new.types-Ds5VS92V.js";import{r as f}from"./ds-spinner.types-BlbXq-54.js";import{t as p}from"./ds-spinner-otl0JgP3.js";var m,h,g,_,v,y,b,x,S=t((()=>{m=`_showcaseContainer_1rt0z_1`,h=`_showcaseTable_1rt0z_7`,g=`_showcaseHeader_1rt0z_12`,_=`_showcaseCell_1rt0z_18`,v=`_showcaseCellBold_1rt0z_24`,y=`_showcaseCellInline_1rt0z_29`,b=`_showcaseCellDark_1rt0z_33`,x={showcaseContainer:m,showcaseTable:h,showcaseHeader:g,showcaseCell:_,showcaseCellBold:v,showcaseCellInline:y,showcaseCellDark:b}})),C,w,T,E,D,O,k,A,j;t((()=>{C=e(r(),1),a(),p(),l(),s(),S(),w=n(),{fn:T}=__STORYBOOK_MODULE_TEST__,E={title:`Design System/Button`,component:o,parameters:{layout:`centered`},argTypes:{buttonType:{control:{type:`select`},options:c,description:`Button type`,table:{defaultValue:{summary:`primary`}}},variant:{control:{type:`select`},options:u,table:{defaultValue:{summary:`filled`}}},size:{control:{type:`select`},options:d,table:{defaultValue:{summary:`medium`}}}},args:{onClick:T()}},D=`Button Text`,O={args:{buttonType:`primary`,variant:`filled`,size:`large`,disabled:!1,children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{icon:`check_circle`,size:`tiny`,"aria-hidden":`true`}),D,(0,w.jsx)(i,{icon:`keyboard_arrow_down`,size:`tiny`,"aria-hidden":`true`})]})}},k={args:{buttonType:`primary`,variant:`filled`,size:`large`,disabled:!1,children:(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(f,{}),D,(0,w.jsx)(i,{icon:`keyboard_arrow_down`,size:`tiny`,"aria-hidden":`true`})]})}},A={parameters:{layout:`fullscreen`},render:function(){let e=(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(i,{icon:`check_circle`,size:`tiny`}),D,(0,w.jsx)(i,{icon:`keyboard_arrow_down`,size:`tiny`})]}),t=(0,w.jsx)(i,{icon:`check_circle`,size:`tiny`}),n=[`primary-filled`,`primary-danger`,`secondary-filled`,`secondary-ghost`,`secondary-danger`,`tertiary-filled`,`tertiary-ghost`,`tertiary-danger`,`tertiary-dark`,`primary-dark`,`secondary-dark`,`secondary-light-dark`],r=(e,t)=>n.includes(`${e}-${t}`),a=[{label:`Primary`,buttonType:`primary`,icon:!1},{label:`Secondary`,buttonType:`secondary`,icon:!1},{label:`Secondary-Light`,buttonType:`secondary-light`,icon:!1,variant:`dark`},{label:`Tertiary`,buttonType:`tertiary`,icon:!1},{label:`Icon Primary`,buttonType:`primary`,icon:!0},{label:`Icon Secondary`,buttonType:`secondary`,icon:!0},{label:`Icon Tertiary`,buttonType:`tertiary`,icon:!0},{label:`Icon Primary Dark`,buttonType:`primary`,icon:!0,variant:`dark`},{label:`Icon Secondary Dark`,buttonType:`secondary`,icon:!0,variant:`dark`},{label:`Icon Tertiary Dark`,buttonType:`tertiary`,icon:!0,variant:`dark`}],s=u,c=d,l=[!1,!0];return(0,w.jsx)(`div`,{className:x.showcaseContainer,children:(0,w.jsxs)(`table`,{className:x.showcaseTable,children:[(0,w.jsxs)(`thead`,{children:[(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{className:x.showcaseHeader}),s.map(e=>(0,w.jsx)(`th`,{colSpan:c.length*l.length,className:x.showcaseHeader,children:e.charAt(0).toUpperCase()+e.slice(1)},e))]}),(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`th`,{className:x.showcaseHeader}),s.map(e=>c.map(t=>l.map(n=>(0,w.jsx)(`th`,{className:x.showcaseHeader,children:`${t}${n?` (disabled)`:``}`},`${e}-${t}-${n?`disabled`:`default`}`))))]})]}),(0,w.jsx)(`tbody`,{children:a.map(n=>(0,w.jsxs)(`tr`,{children:[(0,w.jsx)(`td`,{className:x.showcaseCellBold,children:n.label}),s.map(i=>c.map(a=>l.map(s=>r(n.buttonType,i)?(0,w.jsx)(`td`,{className:(0,C.default)(x.showcaseCell,{[x.showcaseCellDark]:i===`dark`}),children:(0,w.jsx)(`div`,{className:x.showcaseCellInline,children:(0,w.jsx)(o,{buttonType:n.buttonType,variant:i,size:a,disabled:s,children:n.icon?t:e})})},`${n.label}-${i}-${a}-${s?`disabled`:`default`}`):(0,w.jsx)(`td`,{className:x.showcaseCell},`${n.label}-${i}-${a}-${s?`disabled`:`default`}`)))).flat()]},n.label))})]})})}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    buttonType: 'primary',
    variant: 'filled',
    size: 'large',
    disabled: false,
    children: <>
                <DsIcon icon="check_circle" size="tiny" aria-hidden="true" />
                {defaultButtonText}
                <DsIcon icon="keyboard_arrow_down" size="tiny" aria-hidden="true" />
            </>
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    buttonType: 'primary',
    variant: 'filled',
    size: 'large',
    disabled: false,
    children: <>
                <DsSpinner />
                {defaultButtonText}
                <DsIcon icon="keyboard_arrow_down" size="tiny" aria-hidden="true" />
            </>
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  parameters: {
    layout: 'fullscreen'
  },
  render: function Render() {
    const defaultButtonChildren = <>
                <DsIcon icon="check_circle" size="tiny" />
                {defaultButtonText}
                <DsIcon icon="keyboard_arrow_down" size="tiny" />
            </>;
    const iconButtonChildren = <DsIcon icon="check_circle" size="tiny" />;

    // Helper to check if a buttonType-variant combo is supported (based on SCSS class existence)
    const supportedCombos = ['primary-filled',
    // 'primary-ghost',
    'primary-danger', 'secondary-filled', 'secondary-ghost', 'secondary-danger', 'tertiary-filled', 'tertiary-ghost', 'tertiary-danger', 'tertiary-dark', 'primary-dark', 'secondary-dark', 'secondary-light-dark'];
    const isSupported = (buttonType: string, variant: string) => supportedCombos.includes(\`\${buttonType}-\${variant}\`);
    const rowDefs = [{
      label: 'Primary',
      buttonType: 'primary',
      icon: false
    }, {
      label: 'Secondary',
      buttonType: 'secondary',
      icon: false
    }, {
      label: 'Secondary-Light',
      buttonType: 'secondary-light',
      icon: false,
      variant: 'dark'
    }, {
      label: 'Tertiary',
      buttonType: 'tertiary',
      icon: false
    }, {
      label: 'Icon Primary',
      buttonType: 'primary',
      icon: true
    }, {
      label: 'Icon Secondary',
      buttonType: 'secondary',
      icon: true
    }, {
      label: 'Icon Tertiary',
      buttonType: 'tertiary',
      icon: true
    }, {
      label: 'Icon Primary Dark',
      buttonType: 'primary',
      icon: true,
      variant: 'dark'
    }, {
      label: 'Icon Secondary Dark',
      buttonType: 'secondary',
      icon: true,
      variant: 'dark'
    }, {
      label: 'Icon Tertiary Dark',
      buttonType: 'tertiary',
      icon: true,
      variant: 'dark'
    }];
    const variants = buttonVariants;
    const sizes = buttonSizes;
    const states = [false, true]; // false = default, true = disabled

    return <div className={styles.showcaseContainer}>
                <table className={styles.showcaseTable}>
                    <thead>
                        <tr>
                            <th className={styles.showcaseHeader}></th>
                            {variants.map(variant => <th key={variant} colSpan={sizes.length * states.length} className={styles.showcaseHeader}>
                                    {variant.charAt(0).toUpperCase() + variant.slice(1)}
                                </th>)}
                        </tr>
                        <tr>
                            <th className={styles.showcaseHeader}></th>
                            {variants.map(variant => sizes.map(size => states.map(disabled => <th key={\`\${variant}-\${size}-\${disabled ? 'disabled' : 'default'}\`} className={styles.showcaseHeader}>
                                            {\`\${size}\${disabled ? ' (disabled)' : ''}\`}
                                        </th>)))}
                        </tr>
                    </thead>
                    <tbody>
                        {rowDefs.map(row => <tr key={row.label}>
                                <td className={styles.showcaseCellBold}>{row.label}</td>
                                {variants.map(variant => sizes.map(size => states.map(disabled => {
              if (!isSupported(row.buttonType, variant)) {
                return <td key={\`\${row.label}-\${variant}-\${size}-\${disabled ? 'disabled' : 'default'}\`} className={styles.showcaseCell}></td>;
              }
              return <td key={\`\${row.label}-\${variant}-\${size}-\${disabled ? 'disabled' : 'default'}\`} className={classNames(styles.showcaseCell, {
                [styles.showcaseCellDark]: variant === 'dark'
              })}>
                                                        <div className={styles.showcaseCellInline}>
                                                            <DsButtonNew buttonType={row.buttonType as (typeof buttonTypes)[number]} variant={variant} size={size} disabled={disabled}>
                                                                {row.icon ? iconButtonChildren : defaultButtonChildren}
                                                            </DsButtonNew>
                                                        </div>
                                                    </td>;
            }))).flat()}
                            </tr>)}
                    </tbody>
                </table>
            </div>;
  }
}`,...A.parameters?.docs?.source}}},j=[`DefaultButton`,`WithSpinner`,`Showcase`]}))();export{O as DefaultButton,A as Showcase,k as WithSpinner,j as __namedExportsOrder,E as default};