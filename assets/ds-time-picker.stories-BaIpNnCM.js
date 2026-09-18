import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-BE6vsRJN.js";import{n as r,t as i}from"./ds-typography-CBXzX4k5.js";import{n as a,t as o}from"./ds-stack-BCUF7Byn.js";import{n as s,t as c}from"./ds-time-picker-BQUFj8tB.js";var l,u,d,f,p,m,h,g,_,v,y,b,x;function S(){return(S=e((()=>{l=t(),s(),a(),i(),u=n(),d={title:`Components/TimePicker`,component:c,parameters:{layout:`centered`,docs:{description:{component:`A time input with a keyboard-friendly field and a dropdown scroller for hours and minutes. Supports min/max bounds, disabled and read-only states.`}}},decorators:[e=>(0,u.jsx)(o,{width:`17.5rem`,children:(0,u.jsx)(e,{})})],argTypes:{disabled:{control:`boolean`,description:`Whether the time picker is disabled`},readOnly:{control:`boolean`,description:`Whether the time picker is read only`},className:{table:{disable:!0}},ref:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},f=(e,t)=>{let n=new Date(2026,0,1);return n.setHours(e,t,0,0),n},p=e=>e?`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`:`none`,m={args:{placeholder:`hh:mm AM/PM`}},h={args:{defaultValue:f(14,30)}},g={args:{value:f(14,30),disabled:!0}},_={args:{value:f(14,30),readOnly:!0}},v={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,l.useState)(f(9,45));return(0,u.jsxs)(o,{direction:`column`,gap:`var(--sm)`,children:[(0,u.jsx)(c,{value:e,onChange:t}),(0,u.jsxs)(r,{variant:`body-sm-reg`,color:`secondary`,children:[`Value: `,p(e)]})]})}},y={tags:[`!manifest`],parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,l.useState)(f(9,45));return(0,l.useEffect)(()=>{let e=setInterval(()=>{t(f(Math.floor(Math.random()*24),Math.floor(Math.random()*60)))},5e3);return()=>clearInterval(e)},[]),(0,u.jsxs)(o,{direction:`column`,gap:`var(--sm)`,children:[(0,u.jsx)(c,{value:e,onChange:t}),(0,u.jsxs)(r,{variant:`body-sm-reg`,color:`secondary`,children:[`Value: `,p(e)]})]})}},b={parameters:{docs:{source:{type:`code`}}},render:function(){let e=f(9,30),t=f(17,40),[n,i]=(0,l.useState)(f(13,50));return(0,u.jsxs)(o,{direction:`column`,gap:`var(--sm)`,children:[(0,u.jsx)(c,{min:e,max:t,value:n,onChange:i}),(0,u.jsxs)(r,{variant:`body-sm-reg`,color:`secondary`,children:[`Value: `,p(n)]}),(0,u.jsxs)(r,{variant:`body-sm-reg`,color:`secondary`,children:[`Range: `,p(e),` – `,p(t)]})]})}},x=[`Default`,`WithDefaultValue`,`Disabled`,`ReadOnly`,`Controlled`,`ExternalUpdates`,`WithMinMax`],m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'hh:mm AM/PM'
  }
}`,...m.parameters?.docs?.source},description:{story:`The default, uncontrolled time picker. Users can type a time or pick one from
the dropdown scroller.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: createTime(14, 30)
  }
}`,...h.parameters?.docs?.source},description:{story:"Seed an uncontrolled picker with `defaultValue` to show a pre-selected time.",...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: createTime(14, 30),
    disabled: true
  }
}`,...g.parameters?.docs?.source},description:{story:`Disabled time picker that cannot be focused, typed into, or opened.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: createTime(14, 30),
    readOnly: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Read-only time picker that displays a value but blocks edits and the dropdown.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<Date | null>(createTime(9, 45));
    return <DsStack direction="column" gap="var(--sm)">
                <DsTimePicker value={value} onChange={setValue} />
                <DsTypography variant="body-sm-reg" color="secondary">
                    Value: {formatTimeLabel(value)}
                </DsTypography>
            </DsStack>;
  }
}`,...v.parameters?.docs?.source},description:{story:"Controlled time picker where the parent owns the value via `value`/`onChange`.\nUse this pattern when other UI needs to react to the selected time.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [value, setValue] = useState<Date | null>(createTime(9, 45));
    useEffect(() => {
      const interval = setInterval(() => {
        setValue(createTime(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60)));
      }, 5000);
      return () => clearInterval(interval);
    }, []);
    return <DsStack direction="column" gap="var(--sm)">
                <DsTimePicker value={value} onChange={setValue} />
                <DsTypography variant="body-sm-reg" color="secondary">
                    Value: {formatTimeLabel(value)}
                </DsTypography>
            </DsStack>;
  }
}`,...y.parameters?.docs?.source},description:{story:`Demonstrates external value changes: the value updates from outside every five
seconds. While the user is typing, the field waits until blur before showing
the external value. Excluded from the manifest as it is a Storybook-only demo.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const min = createTime(9, 30);
    const max = createTime(17, 40);
    const [value, setValue] = useState<Date | null>(createTime(13, 50));
    return <DsStack direction="column" gap="var(--sm)">
                <DsTimePicker min={min} max={max} value={value} onChange={setValue} />
                <DsTypography variant="body-sm-reg" color="secondary">
                    Value: {formatTimeLabel(value)}
                </DsTypography>
                <DsTypography variant="body-sm-reg" color="secondary">
                    Range: {formatTimeLabel(min)} – {formatTimeLabel(max)}
                </DsTypography>
            </DsStack>;
  }
}`,...b.parameters?.docs?.source},description:{story:"Constrain selectable times with `min` and `max`. Values outside the range are\nclamped, and the scroller only offers times within bounds.",...b.parameters?.docs?.description}}}})))()}S();export{v as Controlled,m as Default,g as Disabled,y as ExternalUpdates,_ as ReadOnly,h as WithDefaultValue,b as WithMinMax,x as __namedExportsOrder,d as default};