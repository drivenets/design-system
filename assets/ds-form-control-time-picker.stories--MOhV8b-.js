import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CIs6Oac1.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{i,n as a,r as o,t as s}from"./ds-form-control.types-r-ExWXQ5.js";import{r as c,t as l}from"./ds-form-control-stories-shared-Wt1nVgea.js";var u,d,f,p,m,h,g,_,v,y;t((()=>{u=e(n(),1),i(),a(),c(),d=r(),f={title:`Design System/FormControl/TimePicker`,component:o,parameters:{layout:`centered`},argTypes:{status:{control:{type:`select`},options:s},label:{control:`text`},required:{control:`boolean`},message:{control:`text`},messageIcon:{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},p={args:{label:`Start Time`,required:!0,message:`Select a time`,style:{width:`300px`},children:(0,d.jsx)(o.TimePicker,{})}},m={args:{label:`Start Time`,required:!0,style:{width:`300px`},children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Description,{children:(0,d.jsx)(l,{})}),(0,d.jsx)(o.TimePicker,{})]})}},h={args:{status:`error`,label:`Start Time`,required:!0,message:`Time is required.`,messageIcon:`error`,style:{width:`300px`},children:(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(o.Description,{children:(0,d.jsx)(l,{})}),(0,d.jsx)(o.TimePicker,{})]})}},g={args:{label:`Start Time`,style:{width:`300px`},children:(0,d.jsx)(o.TimePicker,{disabled:!0})}},_={args:{label:`Business Hours`,message:`Select a time between 9:00 AM and 5:00 PM`,style:{width:`300px`}},render:function(e){let[t,n]=(0,u.useState)(null);return(0,d.jsx)(o,{...e,children:(0,d.jsx)(o.TimePicker,{value:t,onChange:n,min:new Date(`2026-01-15T09:00:00`),max:new Date(`2026-01-15T17:00:00`)})})}},v={render:function(){let[e,t]=(0,u.useState)(null),[n,r]=(0,u.useState)(!1),i=n&&!e?`Time is required`:void 0;return(0,d.jsx)(o,{label:`Start Time`,required:!0,status:i?`error`:void 0,messageIcon:`cancel`,message:i,style:{width:`300px`},children:(0,d.jsx)(o.TimePicker,{value:e,onChange:e=>{t(e),r(!0)}})})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start Time',
    required: true,
    message: 'Select a time',
    style: {
      width: '300px'
    },
    children: <DsFormControl.TimePicker />
  }
}`,...p.parameters?.docs?.source}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start Time',
    required: true,
    style: {
      width: '300px'
    },
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.TimePicker />
            </>
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'error',
    label: 'Start Time',
    required: true,
    message: 'Time is required.',
    messageIcon: 'error',
    style: {
      width: '300px'
    },
    children: <>
                <DsFormControl.Description>
                    <DefaultDescription />
                </DsFormControl.Description>
                <DsFormControl.TimePicker />
            </>
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Start Time',
    style: {
      width: '300px'
    },
    children: <DsFormControl.TimePicker disabled />
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    label: 'Business Hours',
    message: 'Select a time between 9:00 AM and 5:00 PM',
    style: {
      width: '300px'
    }
  },
  render: function Render(args) {
    const [value, setValue] = useState<Date | null>(null);
    return <DsFormControl {...args}>
                <DsFormControl.TimePicker value={value} onChange={setValue} min={new Date('2026-01-15T09:00:00')} max={new Date('2026-01-15T17:00:00')} />
            </DsFormControl>;
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<Date | null>(null);
    const [touched, setTouched] = useState(false);
    const error = touched && !value ? 'Time is required' : undefined;
    return <DsFormControl label="Start Time" required status={error ? 'error' : undefined} messageIcon="cancel" message={error} style={{
      width: '300px'
    }}>
                <DsFormControl.TimePicker value={value} onChange={v => {
        setValue(v);
        setTouched(true);
      }} />
            </DsFormControl>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`WithDescription`,`Error`,`Disabled`,`WithMinMax`,`WithValidation`]}))();export{p as Default,g as Disabled,h as Error,m as WithDescription,_ as WithMinMax,v as WithValidation,y as __namedExportsOrder,f as default};