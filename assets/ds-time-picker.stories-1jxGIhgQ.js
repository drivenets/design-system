import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-D-ulRGK2.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{n as i,t as a}from"./ds-time-picker-cHT0bRFY.js";var o,s,c,l=t((()=>{o=`_container_1v7gc_1`,s=`_infoContainer_1v7gc_5`,c={container:o,infoContainer:s}})),u,d,f,p,m,h,g,_,v,y,b;t((()=>{u=e(n(),1),i(),l(),d=r(),f={title:`Design System/TimePicker`,component:a,parameters:{layout:`centered`},argTypes:{className:{table:{disable:!0}},ref:{table:{disable:!0}},slotProps:{table:{disable:!0}}}},p=(e,t)=>{let n=new Date;return n.setHours(e,t,0,0),n},m={render:function(e){let[t,n]=(0,u.useState)();return(0,d.jsx)(a,{...e,className:c.container,value:t,onChange:t=>{n(t),e.onChange?.(t)}})}},h={args:{className:c.container,defaultValue:p(14,30)}},g={render:function(e){let[t,n]=(0,u.useState)(p(9,45));return(0,u.useEffect)(()=>{let e=setInterval(()=>{n(p(Math.floor(Math.random()*24),Math.floor(Math.random()*60)))},5e3);return()=>clearInterval(e)},[]),(0,d.jsxs)(`div`,{children:[(0,d.jsx)(a,{...e,className:c.container,value:t,onChange:t=>{n(t),e.onChange?.(t)}}),(0,d.jsx)(`p`,{className:c.infoContainer,children:`In this example:`}),(0,d.jsx)(`p`,{className:c.infoContainer,children:`Value is randomly changing every 5 seconds. As user is typing the input do not show the new value until input loses focus.`}),(0,d.jsxs)(`p`,{className:c.infoContainer,children:[`Value:`,` `,t?`${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}`:`undefined`]})]})}},_={args:{className:c.container,value:p(14,30),disabled:!0}},v={args:{className:c.container,value:p(14,30),readOnly:!0}},y={args:{min:p(9,30),max:p(17,40)},render:function(e){let[t,n]=(0,u.useState)(p(13,50));return(0,d.jsxs)(`div`,{children:[(0,d.jsx)(a,{...e,className:c.container,value:t,onChange:t=>{n(t),e.onChange?.(t)}}),(0,d.jsxs)(`p`,{className:c.infoContainer,children:[`Value:`,` `,t?`${String(t.getHours()).padStart(2,`0`)}:${String(t.getMinutes()).padStart(2,`0`)}`:`none`]}),(0,d.jsxs)(`p`,{className:c.infoContainer,children:[`Range: `,e.min?.toLocaleTimeString(),` – `,e.max?.toLocaleTimeString()]})]})}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState<Date | null>();
    return <DsTimePicker {...args} className={styles.container} value={value} onChange={v => {
      setValue(v);
      args.onChange?.(v);
    }} />;
  }
}`,...m.parameters?.docs?.source}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.container,
    defaultValue: createTime(14, 30)
  }
}`,...h.parameters?.docs?.source}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const defaultDate = createTime(9, 45);
    const [value, setValue] = useState<Date | null>(defaultDate);
    useEffect(() => {
      const interval = setInterval(() => {
        const date = createTime(Math.floor(Math.random() * 24), Math.floor(Math.random() * 60));
        setValue(date);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
    return <div>
                <DsTimePicker {...args} className={styles.container} value={value} onChange={v => {
        setValue(v);
        args.onChange?.(v);
      }} />
                <p className={styles.infoContainer}>In this example:</p>
                <p className={styles.infoContainer}>
                    Value is randomly changing every 5 seconds. As user is typing the input do not show the new value
                    until input loses focus.
                </p>
                <p className={styles.infoContainer}>
                    Value:{' '}
                    {value ? \`\${String(value.getHours()).padStart(2, '0')}:\${String(value.getMinutes()).padStart(2, '0')}\` : 'undefined'}
                </p>
            </div>;
  }
}`,...g.parameters?.docs?.source}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.container,
    value: createTime(14, 30),
    disabled: true
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.container,
    value: createTime(14, 30),
    readOnly: true
  }
}`,...v.parameters?.docs?.source}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    min: createTime(9, 30),
    max: createTime(17, 40)
  },
  render: function Render(args) {
    const [value, setValue] = useState<Date | null>(createTime(13, 50));
    return <div>
                <DsTimePicker {...args} className={styles.container} value={value} onChange={v => {
        setValue(v);
        args.onChange?.(v);
      }} />
                <p className={styles.infoContainer}>
                    Value:{' '}
                    {value ? \`\${String(value.getHours()).padStart(2, '0')}:\${String(value.getMinutes()).padStart(2, '0')}\` : 'none'}
                </p>
                <p className={styles.infoContainer}>
                    Range: {args.min?.toLocaleTimeString()} – {args.max?.toLocaleTimeString()}
                </p>
            </div>;
  }
}`,...y.parameters?.docs?.source}}},b=[`Default`,`WithDefaultValue`,`Controlled`,`Disabled`,`ReadOnly`,`WithMinMax`]}))();export{g as Controlled,m as Default,_ as Disabled,v as ReadOnly,h as WithDefaultValue,y as WithMinMax,b as __namedExportsOrder,f as default};