import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as g}from"./index-CVZjy8fd.js";import{D as r}from"./ds-icon-Bydwx35M.js";import{D as k}from"./ds-spinner-CoXn0m4t.js";import{D as h}from"./ds-button-new-BRMG-mD0.js";import"./iframe-Ca930D_M.js";import"./preload-helper-PPVm8Dsz.js";const _=["primary","secondary","secondary-light","tertiary"],C=["filled","ghost","danger","dark"],x=["large","medium","small"],z="_showcaseContainer_1rt0z_1",v="_showcaseTable_1rt0z_7",D="_showcaseHeader_1rt0z_12",S="_showcaseCell_1rt0z_18",$="_showcaseCellBold_1rt0z_24",j="_showcaseCellInline_1rt0z_29",B="_showcaseCellDark_1rt0z_33",t={showcaseContainer:z,showcaseTable:v,showcaseHeader:D,showcaseCell:S,showcaseCellBold:$,showcaseCellInline:j,showcaseCellDark:B},{fn:I}=__STORYBOOK_MODULE_TEST__,L={title:"Design System/Button",component:h,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{buttonType:{control:{type:"select"},options:_,description:"Button type",table:{defaultValue:{summary:"primary"}}},variant:{control:{type:"select"},options:C,table:{defaultValue:{summary:"filled"}}},size:{control:{type:"select"},options:x,table:{defaultValue:{summary:"medium"}}}},args:{onClick:I()}},p="Button Text",o={args:{buttonType:"primary",variant:"filled",size:"large",disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:"check_circle",size:"tiny","aria-hidden":"true"}),p,e.jsx(r,{icon:"keyboard_arrow_down",size:"tiny","aria-hidden":"true"})]})}},l={args:{buttonType:"primary",variant:"filled",size:"large",disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(k,{}),p,e.jsx(r,{icon:"keyboard_arrow_down",size:"tiny","aria-hidden":"true"})]})}},i={parameters:{layout:"fullscreen"},render:function(){const m=e.jsxs(e.Fragment,{children:[e.jsx(r,{icon:"check_circle",size:"tiny"}),p,e.jsx(r,{icon:"keyboard_arrow_down",size:"tiny"})]}),b=e.jsx(r,{icon:"check_circle",size:"tiny"}),f=["primary-filled","primary-danger","secondary-filled","secondary-ghost","secondary-danger","tertiary-filled","tertiary-ghost","tertiary-danger","tertiary-dark","primary-dark","secondary-dark","secondary-light-dark"],w=(a,n)=>f.includes(`${a}-${n}`),T=[{label:"Primary",buttonType:"primary",icon:!1},{label:"Secondary",buttonType:"secondary",icon:!1},{label:"Secondary-Light",buttonType:"secondary-light",icon:!1,variant:"dark"},{label:"Tertiary",buttonType:"tertiary",icon:!1},{label:"Icon Primary",buttonType:"primary",icon:!0},{label:"Icon Secondary",buttonType:"secondary",icon:!0},{label:"Icon Tertiary",buttonType:"tertiary",icon:!0},{label:"Icon Primary Dark",buttonType:"primary",icon:!0,variant:"dark"},{label:"Icon Secondary Dark",buttonType:"secondary",icon:!0,variant:"dark"},{label:"Icon Tertiary Dark",buttonType:"tertiary",icon:!0,variant:"dark"}],c=["filled","ghost","danger","dark"],d=["small","medium","large"],y=[!1,!0];return e.jsx("div",{className:t.showcaseContainer,children:e.jsxs("table",{className:t.showcaseTable,children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:t.showcaseHeader}),c.map(a=>e.jsx("th",{colSpan:d.length*y.length,className:t.showcaseHeader,children:a.charAt(0).toUpperCase()+a.slice(1)},a))]}),e.jsxs("tr",{children:[e.jsx("th",{className:t.showcaseHeader}),c.map(a=>d.map(n=>y.map(s=>e.jsx("th",{className:t.showcaseHeader,children:`${n}${s?" (disabled)":""}`},`${a}-${n}-${s?"disabled":"default"}`))))]})]}),e.jsx("tbody",{children:T.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:t.showcaseCellBold,children:a.label}),c.map(n=>d.map(s=>y.map(u=>w(a.buttonType,n)?e.jsx("td",{className:g(t.showcaseCell,{[t.showcaseCellDark]:n==="dark"}),children:e.jsx("div",{className:t.showcaseCellInline,children:e.jsx(h,{buttonType:a.buttonType,variant:n,size:s,disabled:u,children:a.icon?b:m})})},`${a.label}-${n}-${s}-${u?"disabled":"default"}`):e.jsx("td",{className:t.showcaseCell},`${a.label}-${n}-${s}-${u?"disabled":"default"}`)))).flat()]},a.label))})]})})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
    const variants = ['filled', 'ghost', 'danger', 'dark'];
    const sizes = ['small', 'medium', 'large'];
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
                                                            <DsButtonNew buttonType={row.buttonType as (typeof buttonTypes)[number]} variant={variant as (typeof buttonVariants)[number]} size={size as (typeof buttonSizes)[number]} disabled={disabled}>
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
