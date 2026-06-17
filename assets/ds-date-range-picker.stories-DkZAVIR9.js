import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-C_pJ5ZgX.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{a as i}from"./ds-form-control.types-WsOzNVoV.js";import{t as a}from"./ds-date-picker-BNyoFPIs.js";import{n as o,t as s}from"./ds-date-range-picker-_dt6KaNS.js";import{n as c,r as l,t as u}from"./ds-segment-group-DpkH_JJK.js";var d=e((()=>{c(),l()})),f,p=e((()=>{f=[`horizontal`,`vertical`]})),m,h,g,_,v,y=e((()=>{m=`_container_1g332_1`,h=`_verticalContainer_1g332_8`,g=`_helperText_1g332_12`,_=`_dateOrRangeContainer_1g332_18`,v={container:m,verticalContainer:h,helperText:g,dateOrRangeContainer:_}})),b,x,S,C,w,T,E,D,O,k,A;e((()=>{b=t(n(),1),o(),i(),d(),p(),y(),x=r(),S={title:`Components/DateRangePicker`,component:s,parameters:{layout:`centered`},argTypes:{orientation:{control:`select`,options:f},className:{table:{disable:!0}}}},C={render:function(e){let[t,n]=(0,b.useState)([null,null]);return(0,x.jsx)(s,{...e,className:v.container,value:t,onChange:n})}},w={args:{withTime:!0},render:function(e){let[t,n]=(0,b.useState)([null,null]);return(0,x.jsx)(s,{...e,className:v.container,value:t,onChange:n})}},T={args:{orientation:`vertical`},render:function(e){let[t,n]=(0,b.useState)([null,null]);return(0,x.jsx)(s,{...e,className:v.verticalContainer,value:t,onChange:n})}},E={args:{withTime:!0,min:(()=>{let e=new Date;return new Date(e.getFullYear(),e.getMonth(),1,0,30)})(),max:(()=>{let e=new Date;return new Date(e.getFullYear(),e.getMonth()+2,0,23,20)})()},render:function(e){let[t,n]=(0,b.useState)([null,null]);return(0,x.jsxs)(`div`,{children:[(0,x.jsx)(s,{...e,className:v.container,value:t,onChange:n}),(0,x.jsxs)(`p`,{className:v.helperText,children:[`Allowed: `,e.min?.toLocaleString(),` - `,e.max?.toLocaleString()]})]})}},D={args:{className:v.container,value:[new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)],disabled:!0}},O={args:{hideClearAll:!0},render:function(e){let[t,n]=(0,b.useState)([new Date(`2026-01-10T00:00:00`),new Date(`2026-01-20T00:00:00`)]);return(0,x.jsx)(s,{...e,className:v.container,value:t,onChange:n})}},k={render:function(e){let[t,n]=(0,b.useState)(`date`),[r,i]=(0,b.useState)(null),[o,c]=(0,b.useState)([null,null]);return(0,x.jsxs)(`div`,{className:v.dateOrRangeContainer,children:[(0,x.jsxs)(u.Root,{value:t,onValueChange:e=>n(e??`date`),size:`default`,children:[(0,x.jsx)(u.Item,{value:`date`,label:`Date`}),(0,x.jsx)(u.Item,{value:`range`,label:`Range`})]}),t===`date`?(0,x.jsx)(a,{value:r,onChange:t=>{i(t),e.onChange?.([t,null])},min:e.min,max:e.max,withTime:e.withTime,disabled:e.disabled,readOnly:e.readOnly}):(0,x.jsx)(s,{...e,value:o,onChange:t=>{c(t),e.onChange?.(t)}})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [value, setValue] = useState<DateRangeValue>([null, null]);
    return <DsDateRangePicker {...args} className={styles.container} value={value} onChange={setValue} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true
  },
  render: function Render(args) {
    const [value, setValue] = useState<DateRangeValue>([null, null]);
    return <DsDateRangePicker {...args} className={styles.container} value={value} onChange={setValue} />;
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    orientation: 'vertical'
  },
  render: function Render(args) {
    const [value, setValue] = useState<DateRangeValue>([null, null]);
    return <DsDateRangePicker {...args} className={styles.verticalContainer} value={value} onChange={setValue} />;
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    withTime: true,
    min: (() => {
      const date = new Date();
      return new Date(date.getFullYear(), date.getMonth(), 1, 0, 30);
    })(),
    max: (() => {
      const date = new Date();
      return new Date(date.getFullYear(), date.getMonth() + 2, 0, 23, 20); // last day of next month
    })()
  },
  render: function Render(args) {
    const [value, setValue] = useState<DateRangeValue>([null, null]);
    return <div>
                <DsDateRangePicker {...args} className={styles.container} value={value} onChange={setValue} />
                <p className={styles.helperText}>
                    Allowed: {args.min?.toLocaleString()} - {args.max?.toLocaleString()}
                </p>
            </div>;
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.container,
    value: [new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')],
    disabled: true
  }
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    hideClearAll: true
  },
  render: function Render(args) {
    const [value, setValue] = useState<DateRangeValue>([new Date('2026-01-10T00:00:00'), new Date('2026-01-20T00:00:00')]);
    return <DsDateRangePicker {...args} className={styles.container} value={value} onChange={setValue} />;
  }
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [mode, setMode] = useState('date');
    const [dateValue, setDateValue] = useState<Date | null>(null);
    const [rangeValue, setRangeValue] = useState<DateRangeValue>([null, null]);
    return <div className={styles.dateOrRangeContainer}>
                <DsSegmentGroup.Root value={mode} onValueChange={v => setMode(v ?? 'date')} size="default">
                    <DsSegmentGroup.Item value="date" label="Date" />
                    <DsSegmentGroup.Item value="range" label="Range" />
                </DsSegmentGroup.Root>

                {mode === 'date' ? <DsDatePicker value={dateValue} onChange={v => {
        setDateValue(v);
        args.onChange?.([v, null]);
      }} min={args.min} max={args.max} withTime={args.withTime} disabled={args.disabled} readOnly={args.readOnly} /> : <DsDateRangePicker {...args} value={rangeValue} onChange={v => {
        setRangeValue(v);
        args.onChange?.(v);
      }} />}
            </div>;
  }
}`,...k.parameters?.docs?.source}}},A=[`Default`,`WithTime`,`Vertical`,`WithMinMax`,`Disabled`,`HiddenClearAll`,`DateOrRange`]}))();export{k as DateOrRange,C as Default,D as Disabled,O as HiddenClearAll,T as Vertical,E as WithMinMax,w as WithTime,A as __namedExportsOrder,S as default};