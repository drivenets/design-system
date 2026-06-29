import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{t as n}from"./ds-icon-DfQmiIla.js";import{t as r}from"./ds-icon-VZzDslgo.js";import{i,n as a,r as o,t as s}from"./ds-form-control.types-BmOXo7Ku.js";var c,l,u,d,f,p,m,h,g,_,v,y,b;e((()=>{r(),i(),a(),c=t(),l={title:`Components/FormControl/Text`,component:o,parameters:{layout:`centered`},argTypes:{status:{control:{type:`select`},options:s,description:`Form control color status`,table:{defaultValue:{summary:s[0]}}},label:{control:`text`,description:`Label for the form control`},required:{control:`boolean`,description:`Indicates if the field is required`},message:{control:`text`,description:`Message to display below the form control`},messageIcon:{control:`text`,description:`Icon to display in the message`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Additional styles to apply to the component`}}},u={args:{label:`Input label`,required:!0,message:`This is a message`,children:(0,c.jsx)(o.TextInput,{placeholder:`Input`})}},d={args:{label:`Input label`,required:!0,style:{width:`300px`},children:(0,c.jsx)(o.TextInput,{placeholder:`Input with custom width`})}},f={args:{label:`Input label`,required:!0,style:{width:`400px`,padding:`16px`,border:`2px solid #e0e0e0`,borderRadius:`8px`,backgroundColor:`#f9f9f9`},children:(0,c.jsx)(o.TextInput,{placeholder:`Input with custom styling`})}},p={args:{label:`Input label`,required:!0,style:{width:`300px`},children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.Description,{children:[`This is a description text. It's an optional and will not exceeds more than 2 rows. A`,` `,(0,c.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,margin:0,cursor:`pointer`,color:`var(--color-dap-blue-600)`,textDecoration:`underline`,fontSize:`inherit`,fontFamily:`inherit`},onClick:()=>alert(`Learn more clicked!`),children:`Learn more`}),` `,`can be added.`]}),(0,c.jsx)(o.TextInput,{placeholder:`Search`,slots:{startAdornment:(0,c.jsx)(n,{icon:`search`,size:`tiny`})}})]})}},m={args:{label:`Input label`,required:!0,slots:{endAdornment:(0,c.jsx)(`button`,{type:`button`,onClick:()=>alert(`Help clicked!`),"aria-label":`Help`,style:{background:`none`,border:`none`,padding:`4px`,cursor:`pointer`,color:`var(--color-dap-gray-500)`,display:`flex`,alignItems:`center`,justifyContent:`center`,width:`16px`,height:`16px`,borderRadius:`50%`},children:(0,c.jsx)(n,{icon:`info`,size:`small`})})},children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.Description,{children:[`This is a description text. It's an optional and will not exceeds more than 2 rows. A`,` `,(0,c.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,margin:0,cursor:`pointer`,color:`var(--color-dap-blue-600)`,textDecoration:`underline`,fontSize:`inherit`,fontFamily:`inherit`},onClick:()=>alert(`Learn more clicked!`),children:`Learn more`}),` `,`can be added.`]}),(0,c.jsx)(o.TextInput,{placeholder:`Search`,slots:{startAdornment:(0,c.jsx)(n,{icon:`search`,size:`tiny`})}})]})}},h={args:{label:`Input label`,required:!0,message:`This is a message`,children:(0,c.jsx)(o.TextInput,{placeholder:`Input`,slots:{startAdornment:(0,c.jsx)(n,{icon:`call`,size:`tiny`})}})}},g={args:{status:`success`,label:`Input label`,message:`This is a success caption under a text input.`,messageIcon:`check_circle`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.Description,{children:[`This is a description text. It's an optional and will not exceeds more than 2 rows. A`,` `,(0,c.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,margin:0,cursor:`pointer`,color:`var(--color-dap-blue-600)`,textDecoration:`underline`,fontSize:`inherit`,fontFamily:`inherit`},onClick:()=>alert(`Learn more clicked!`),children:`Learn more`}),` `,`can be added.`]}),(0,c.jsx)(o.TextInput,{type:`text`,slots:{endAdornment:(0,c.jsx)(n,{icon:`visibility`,size:`tiny`})}})]})}},_={args:{status:`error`,label:`Input label`,message:`This is an error caption under a text input.`,messageIcon:`error`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.Description,{children:[`This is a description text. It's an optional and will not exceeds more than 2 rows. A`,` `,(0,c.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,margin:0,cursor:`pointer`,color:`var(--color-dap-blue-600)`,textDecoration:`underline`,fontSize:`inherit`,fontFamily:`inherit`},onClick:()=>alert(`Learn more clicked!`),children:`Learn more`}),` `,`can be added.`]}),(0,c.jsx)(o.TextInput,{slots:{startAdornment:(0,c.jsx)(n,{icon:`search`,size:`tiny`}),endAdornment:(0,c.jsx)(n,{icon:`error`,size:`tiny`})}})]})}},v={args:{status:`warning`,label:`Input label`,message:`This is a warning caption under a text input.`,messageIcon:`info`,children:(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(o.Description,{children:[`This is a description text. It's an optional and will not exceeds more than 2 rows. A`,` `,(0,c.jsx)(`button`,{type:`button`,style:{background:`none`,border:`none`,padding:0,margin:0,cursor:`pointer`,color:`var(--color-dap-blue-600)`,textDecoration:`underline`,fontSize:`inherit`,fontFamily:`inherit`},onClick:()=>alert(`Learn more clicked!`),children:`Learn more`}),` `,`can be added.`]}),(0,c.jsx)(o.TextInput,{})]})}},y={args:{label:`Input label`,required:!0,children:(0,c.jsx)(o.TextInput,{placeholder:`Disabled Input`,disabled:!0})}},u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.TextInput placeholder="Input" />
  }
}`,...u.parameters?.docs?.source}}},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '300px'
    },
    children: <DsFormControl.TextInput placeholder="Input with custom width" />
  }
}`,...d.parameters?.docs?.source}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '400px',
      padding: '16px',
      border: '2px solid #e0e0e0',
      borderRadius: '8px',
      backgroundColor: '#f9f9f9'
    },
    children: <DsFormControl.TextInput placeholder="Input with custom styling" />
  }
}`,...f.parameters?.docs?.source}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    style: {
      width: '300px'
    },
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--color-dap-blue-600)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput placeholder="Search" slots={{
        startAdornment: <DsIcon icon="search" size="tiny" />
      }} />
            </>
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    slots: {
      endAdornment: <button type="button" onClick={() => alert('Help clicked!')} aria-label="Help" style={{
        background: 'none',
        border: 'none',
        padding: '4px',
        cursor: 'pointer',
        color: 'var(--color-dap-gray-500)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '16px',
        height: '16px',
        borderRadius: '50%'
      }}>
                    <DsIcon icon="info" size="small" />
                </button>
    },
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--color-dap-blue-600)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput placeholder="Search" slots={{
        startAdornment: <DsIcon icon="search" size="tiny" />
      }} />
            </>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    message: 'This is a message',
    children: <DsFormControl.TextInput placeholder="Input" slots={{
      startAdornment: <DsIcon icon="call" size="tiny" />
    }} />
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'success',
    label: 'Input label',
    message: 'This is a success caption under a text input.',
    messageIcon: 'check_circle',
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--color-dap-blue-600)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput type="text" slots={{
        endAdornment: <DsIcon icon="visibility" size="tiny" />
      }} />
            </>
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Input label',
    message: 'This is an error caption under a text input.',
    messageIcon: 'error',
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--color-dap-blue-600)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput slots={{
        startAdornment: <DsIcon icon="search" size="tiny" />,
        endAdornment: <DsIcon icon="error" size="tiny" />
      }} />
            </>
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'warning',
    label: 'Input label',
    message: 'This is a warning caption under a text input.',
    messageIcon: 'info',
    children: <>
                <DsFormControl.Description>
                    This is a description text. It&apos;s an optional and will not exceeds more than 2 rows. A{' '}
                    <button type="button" style={{
          background: 'none',
          border: 'none',
          padding: 0,
          margin: 0,
          cursor: 'pointer',
          color: 'var(--color-dap-blue-600)',
          textDecoration: 'underline',
          fontSize: 'inherit',
          fontFamily: 'inherit'
        }} onClick={() => alert('Learn more clicked!')}>
                        Learn more
                    </button>{' '}
                    can be added.
                </DsFormControl.Description>
                <DsFormControl.TextInput />
            </>
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Input label',
    required: true,
    children: <DsFormControl.TextInput placeholder="Disabled Input" disabled />
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithCustomWidth`,`WithCustomStyles`,`WithDescription`,`WithHelpIcon`,`WithIcon`,`Success`,`Error`,`Warning`,`Disabled`]}))();export{u as Default,y as Disabled,_ as Error,g as Success,v as Warning,f as WithCustomStyles,d as WithCustomWidth,p as WithDescription,m as WithHelpIcon,h as WithIcon,b as __namedExportsOrder,l as default};