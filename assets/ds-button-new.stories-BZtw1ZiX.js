import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as o}from"./ds-icon-VNWG3kaI.js";import{D as _}from"./ds-spinner-D6nlj4Uu.js";import{D as w}from"./ds-button-new-T4Kx9VLn.js";import"./index-DJAjyhEV.js";import"./iframe-CfoIKJgh.js";import"./preload-helper-PPVm8Dsz.js";const C=["primary","secondary","secondary-light","tertiary"],D=["filled","ghost","danger","dark"],B=["large","medium","small"],$="_showcaseContainer_yh47x_1",S="_showcaseTable_yh47x_5",z="_showcaseHeader_yh47x_10",j="_showcaseCell_yh47x_16",I="_showcaseCellBold_yh47x_22",N="_showcaseCellInline_yh47x_27",H="_showcaseCellDark_yh47x_31",t={showcaseContainer:$,showcaseTable:S,showcaseHeader:z,showcaseCell:j,showcaseCellBold:I,showcaseCellInline:N,showcaseCellDark:H},{expect:f,fn:E,userEvent:T,within:g}=__STORYBOOK_MODULE_TEST__,A={title:"Design System/Button",component:w,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{buttonType:{control:{type:"select"},options:C,description:"Button type",table:{defaultValue:{summary:"primary"}}},variant:{control:{type:"select"},options:D,table:{defaultValue:{summary:"filled"}}},size:{control:{type:"select"},options:B,table:{defaultValue:{summary:"medium"}}}},args:{onClick:E()}},l="Button Text",c={args:{buttonType:"primary",variant:"filled",size:"large",disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(o,{icon:"check_circle",size:"tiny","aria-hidden":"true"}),l,e.jsx(o,{icon:"keyboard_arrow_down",size:"tiny","aria-hidden":"true"})]})},play:async({canvasElement:i})=>{const s=g(i).getByRole("button",{name:l});await T.click(s),await f(s).toBeInTheDocument()}},d={args:{buttonType:"primary",variant:"filled",size:"large",disabled:!1,children:e.jsxs(e.Fragment,{children:[e.jsx(_,{}),l,e.jsx(o,{icon:"keyboard_arrow_down",size:"tiny","aria-hidden":"true"})]})},play:async({canvasElement:i})=>{const s=g(i).getByRole("button",{name:l});await T.click(s),await f(s).toBeInTheDocument()}},y={parameters:{layout:"fullscreen"},render:function(){const u=e.jsxs(e.Fragment,{children:[e.jsx(o,{icon:"check_circle",size:"tiny"}),l,e.jsx(o,{icon:"keyboard_arrow_down",size:"tiny"})]}),s=e.jsx(o,{icon:"check_circle",size:"tiny"}),k=["primary-filled","primary-danger","secondary-filled","secondary-ghost","secondary-danger","tertiary-filled","tertiary-ghost","tertiary-danger","tertiary-dark","primary-dark","secondary-dark","secondary-light-dark"],v=(a,n)=>k.includes(`${a}-${n}`),x=[{label:"Primary",buttonType:"primary",icon:!1},{label:"Secondary",buttonType:"secondary",icon:!1},{label:"Secondary-Light",buttonType:"secondary-light",icon:!1,variant:"dark"},{label:"Tertiary",buttonType:"tertiary",icon:!1},{label:"Icon Primary",buttonType:"primary",icon:!0},{label:"Icon Secondary",buttonType:"secondary",icon:!0},{label:"Icon Tertiary",buttonType:"tertiary",icon:!0},{label:"Icon Primary Dark",buttonType:"primary",icon:!0,variant:"dark"},{label:"Icon Secondary Dark",buttonType:"secondary",icon:!0,variant:"dark"},{label:"Icon Tertiary Dark",buttonType:"tertiary",icon:!0,variant:"dark"}],p=["filled","ghost","danger","dark"],h=["small","medium","large"],m=[!1,!0];return e.jsx("div",{className:t.showcaseContainer,children:e.jsxs("table",{className:t.showcaseTable,children:[e.jsxs("thead",{children:[e.jsxs("tr",{children:[e.jsx("th",{className:t.showcaseHeader}),p.map(a=>e.jsx("th",{colSpan:h.length*m.length,className:t.showcaseHeader,children:a.charAt(0).toUpperCase()+a.slice(1)},a))]}),e.jsxs("tr",{children:[e.jsx("th",{className:t.showcaseHeader}),p.map(a=>h.map(n=>m.map(r=>e.jsx("th",{className:t.showcaseHeader,children:`${n}${r?" (disabled)":""}`},`${a}-${n}-${r?"disabled":"default"}`))))]})]}),e.jsx("tbody",{children:x.map(a=>e.jsxs("tr",{children:[e.jsx("td",{className:t.showcaseCellBold,children:a.label}),p.map(n=>h.map(r=>m.map(b=>v(a.buttonType,n)?e.jsx("td",{className:`${t.showcaseCell} ${n==="dark"?t.showcaseCellDark:""}`,children:e.jsx("div",{className:t.showcaseCellInline,children:e.jsx(w,{buttonType:a.buttonType,variant:n,size:r,disabled:b,children:a.icon?s:u})})},`${a.label}-${n}-${r}-${b?"disabled":"default"}`):e.jsx("td",{className:t.showcaseCell},`${a.label}-${n}-${r}-${b?"disabled":"default"}`)))).flat()]},a.label))})]})})}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
              return <td key={\`\${row.label}-\${variant}-\${size}-\${disabled ? 'disabled' : 'default'}\`} className={\`\${styles.showcaseCell} \${variant === 'dark' ? styles.showcaseCellDark : ''}\`}>
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
}`,...y.parameters?.docs?.source}}};const W=["DefaultButton","WithSpinner","Showcase"];export{c as DefaultButton,y as Showcase,d as WithSpinner,W as __namedExportsOrder,A as default};
