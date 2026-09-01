import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-typography-BLoO5j9q.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{n as c,t as l}from"./ds-time-picker-DE6X8Mta.js";var u,d,f,p,m,h,g,_,v,y,b,x,S;t((()=>{u=e(n(),1),c(),o(),a(),d=r(),f={title:`Components/TimePicker`,component:l,parameters:{layout:`centered`,docs:{description:{component:`A time input with a keyboard-friendly field and a dropdown scroller for hours and minutes. Supports min/max bounds, disabled and read-only states.`}}},decorators:[e=>(0,d.jsx)(s,{width:`17.5rem`,children:(0,d.jsx)(e,{})})],argTypes:{disabled:{control:`boolean`,description:`Whether the time picker is disabled`},readOnly:{control:`boolean`,description:`Whether the time picker is read only`},className:{table:{disable:!0}},ref:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},p=(e,t)=>{let n=new Date(2026,0,1);return n.setHours(e,t,0,0),n},m=e=>e?`${String(e.getHours()).padStart(2,`0`)}:${String(e.getMinutes()).padStart(2,`0`)}`:`none`,h={args:{placeholder:`hh:mm AM/PM`}},g={args:{defaultValue:p(14,30)}},_={args:{value:p(14,30),disabled:!0}},v={args:{value:p(14,30),readOnly:!0}},y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,u.useState)(p(9,45));return(0,d.jsxs)(s,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(l,{value:e,onChange:t}),(0,d.jsxs)(i,{variant:`body-sm-reg`,color:`secondary`,children:[`Value: `,m(e)]})]})}},b={tags:[`!manifest`],parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,u.useState)(p(9,45));return(0,u.useEffect)(()=>{let e=setInterval(()=>{t(p(Math.floor(Math.random()*24),Math.floor(Math.random()*60)))},5e3);return()=>clearInterval(e)},[]),(0,d.jsxs)(s,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(l,{value:e,onChange:t}),(0,d.jsxs)(i,{variant:`body-sm-reg`,color:`secondary`,children:[`Value: `,m(e)]})]})}},x={parameters:{docs:{source:{type:`code`}}},render:function(){let e=p(9,30),t=p(17,40),[n,r]=(0,u.useState)(p(13,50));return(0,d.jsxs)(s,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(l,{min:e,max:t,value:n,onChange:r}),(0,d.jsxs)(i,{variant:`body-sm-reg`,color:`secondary`,children:[`Value: `,m(n)]}),(0,d.jsxs)(i,{variant:`body-sm-reg`,color:`secondary`,children:[`Range: `,m(e),` – `,m(t)]})]})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    placeholder: 'hh:mm AM/PM'
  }
}`,...h.parameters?.docs?.source},description:{story:`The default, uncontrolled time picker. Users can type a time or pick one from
the dropdown scroller.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    defaultValue: createTime(14, 30)
  }
}`,...g.parameters?.docs?.source},description:{story:"Seed an uncontrolled picker with `defaultValue` to show a pre-selected time.",...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    value: createTime(14, 30),
    disabled: true
  }
}`,..._.parameters?.docs?.source},description:{story:`Disabled time picker that cannot be focused, typed into, or opened.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: createTime(14, 30),
    readOnly: true
  }
}`,...v.parameters?.docs?.source},description:{story:`Read-only time picker that displays a value but blocks edits and the dropdown.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Controlled time picker where the parent owns the value via `value`/`onChange`.\nUse this pattern when other UI needs to react to the selected time.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:`Demonstrates external value changes: the value updates from outside every five
seconds. While the user is typing, the field waits until blur before showing
the external value. Excluded from the manifest as it is a Storybook-only demo.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Constrain selectable times with `min` and `max`. Values outside the range are\nclamped, and the scroller only offers times within bounds.",...x.parameters?.docs?.description}}},S=[`Default`,`WithDefaultValue`,`Disabled`,`ReadOnly`,`Controlled`,`ExternalUpdates`,`WithMinMax`]}))();export{y as Controlled,h as Default,_ as Disabled,b as ExternalUpdates,v as ReadOnly,g as WithDefaultValue,x as WithMinMax,S as __namedExportsOrder,f as default};