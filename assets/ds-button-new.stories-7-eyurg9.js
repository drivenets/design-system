import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-Db8_K9ti.js";import{D as r}from"./ds-icon-B-PQVI_C.js";import{D as C}from"./ds-spinner-DoYXrb4j.js";import{D as h}from"./ds-button-new-CrRLKGi9.js";import"./iframe-Dq56RWbn.js";import"./preload-helper-PPVm8Dsz.js";const x=["primary","secondary","secondary-light","tertiary"],m=["filled","ghost","danger","dark"],b=["large","medium","small","tiny"],z="_showcaseContainer_1rt0z_1",v="_showcaseTable_1rt0z_7",D="_showcaseHeader_1rt0z_12",S="_showcaseCell_1rt0z_18",$="_showcaseCellBold_1rt0z_24",j="_showcaseCellInline_1rt0z_29",B="_showcaseCellDark_1rt0z_33",t={showcaseContainer:z,showcaseTable:v,showcaseHeader:D,showcaseCell:S,showcaseCellBold:$,showcaseCellInline:j,showcaseCellDark:B},{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:"Design System/Button",component:h,parameters:{layout:"centered"},argTypes:{buttonType:{control:{type:"select"},options:x,description:"Button type",table:{defaultValue:{summary:"primary"}}},variant:{control:{type:"select"},options:m,table:{defaultValue:{summary:"filled"}}},size:{control:{type:"select"},options:b,table:{defaultValue:{summary:"medium"}}}},args:{onClick:I()}},p="Button Text",o={args:{buttonType:"primary",variant:"filled",size:"large",disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:"check_circle",size:"tiny","aria-hidden":"true"}),p,e.jsx(r,{icon:"keyboard_arrow_down",size:"tiny","aria-hidden":"true"})]})}},l={args:{buttonType:"primary",variant:"filled",size:"large",disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(C,{}),p,e.jsx(r,{icon:"keyboard_arrow_down",size:"tiny","aria-hidden":"true"})]})}},i={parameters:{layout:"fullscreen"},render:function(){const f=e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:"check_circle",size:"tiny"}),p,e.jsx(r,{icon:"keyboard_arrow_down",size:"tiny"})]}),w=e.jsx(r,{icon:"check_circle",size:"tiny"}),T=["primary-filled","primary-danger","secondary-filled","secondary-ghost","secondary-danger","tertiary-filled","tertiary-ghost","tertiary-danger","tertiary-dark","primary-dark","secondary-dark","secondary-light-dark"],k=(a,n)=>T.includes(`${a}-${n}`),_=[{label:"Primary",buttonType:"primary",icon:!1},{label:"Secondary",buttonType:"secondary",icon:!1},{label:"Secondary-Light",buttonType:"secondary-light",icon:!1,variant:"dark"},{label:"Tertiary",buttonType:"tertiary",icon:!1},{label:"Icon Primary",buttonType:"primary",icon:!0},{label:"Icon Secondary",buttonType:"secondary",icon:!0},{label:"Icon Tertiary",buttonType:"tertiary",icon:!0},{label:"Icon Primary Dark",buttonType:"primary",icon:!0,variant:"dark"},{label:"Icon Secondary Dark",buttonType:"secondary",icon:!0,variant:"dark"},{label:"Icon Tertiary Dark",buttonType:"tertiary",icon:!0,variant:"dark"}],c=m,d=b,y=[!1,!0];return e.jsx("div",{className:t.showcaseContainer,children:e.jsxs("table",{className:t.showcaseTable,children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:t.showcaseHeader}),c.map(a=>e.jsx("th",{colSpan:d.length*y.length,className:t.showcaseHeader,children:a.charAt(0).toUpperCase()+a.slice(1)},a))]}),e.jsxs("tr",{children:[e.jsx("th",{className:t.showcaseHeader}),c.map(a=>d.map(n=>y.map(s=>e.jsx("th",{className:t.showcaseHeader,children:`${n}${s?" (disabled)":""}`},`${a}-${n}-${s?"disabled":"default"}`))))]})]}),e.jsx("tbody",{children:_.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:t.showcaseCellBold,children:a.label}),c.map(n=>d.map(s=>y.map(u=>k(a.buttonType,n)?e.jsx("td",{className:g(t.showcaseCell,{[t.showcaseCellDark]:n==="dark"}),children:e.jsx("div",{className:t.showcaseCellInline,children:e.jsx(h,{buttonType:a.buttonType,variant:n,size:s,disabled:u,children:a.icon?w:f})})},`${a.label}-${n}-${s}-${u?"disabled":"default"}`):e.jsx("td",{className:t.showcaseCell},`${a.label}-${n}-${s}-${u?"disabled":"default"}`)))).flat()]},a.label))})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
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
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const U=["DefaultButton","WithSpinner","Showcase"];export{o as DefaultButton,i as Showcase,l as WithSpinner,U as __namedExportsOrder,L as default};
