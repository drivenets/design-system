import{a as e,n as t,t as n}from"./chunk-BneVvdWh.js";import{S as r}from"./iframe-9lsRsqru.js";import{t as i}from"./jsx-runtime-D16BNjX-.js";import{n as a,t as o}from"./ds-date-input-DjAJwdkQ.js";var s=n(((e,t)=>{(function(n,r){typeof e==`object`&&t!==void 0?r(e):typeof define==`function`&&define.amd?define([`exports`],r):(n=typeof globalThis<`u`?globalThis:n||self,r(n.MockDate={}))})(e,(function(e){var t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])},t(e,n)};function n(e,n){if(typeof n!=`function`&&n!==null)throw TypeError(`Class extends value `+String(n)+` is not a constructor or null`);t(e,n);function r(){this.constructor=e}e.prototype=n===null?Object.create(n):(r.prototype=n.prototype,new r)}var r=Date,i=null,a=function(e){n(t,e);function t(t,n,a,o,s,c,l){e.call(this);var u;switch(arguments.length){case 0:u=i===null?new r:new r(i.valueOf());break;case 1:u=new r(t);break;default:a=a===void 0?1:a,o||=0,s||=0,c||=0,l||=0,u=new r(t,n,a,o,s,c,l);break}return u}return t}(r);a.prototype=r.prototype,a.UTC=r.UTC,a.now=function(){return new a().valueOf()},a.parse=function(e){return r.parse(e)},a.toString=function(){return r.toString()};function o(e){var t=new Date(e.valueOf());if(isNaN(t.getTime()))throw TypeError(`mockdate: The time set is an invalid date: `+e);Date=a,i=t.valueOf()}function s(){Date=r}e.default={set:o,reset:s},e.reset=s,e.set=o,Object.defineProperty(e,`__esModule`,{value:!0})}))})),c,l,u,d,f,p,m,h=t((()=>{c=`_containerSingle_zeasa_1`,l=`_containerRange_zeasa_5`,u=`_helperText_zeasa_9`,d=`_errorText_zeasa_15`,f=`_infoContainer_zeasa_21`,p=`_buttonContainer_zeasa_27`,m={containerSingle:c,containerRange:l,helperText:u,errorText:d,infoContainer:f,buttonContainer:p}})),g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L;t((()=>{g=e(r(),1),_=e(s(),1),a(),h(),v=i(),{expect:y,screen:b,userEvent:x,waitFor:S,within:C}=__STORYBOOK_MODULE_TEST__,w=new Date(`2026-01-15T12:00:00`),T={title:`Design System/DateInput (Deprecated)`,component:o,parameters:{layout:`centered`,docs:{description:{component:"**Deprecated**: This component is deprecated. Please use `DsDatePicker` for single date selection or `DsDateRangePicker` for date range selection instead."}}},tags:[`deprecated`],beforeEach:()=>(_.default.set(w),()=>{_.default.reset()})},E={render:function(){let[e,t]=(0,g.useState)();return(0,v.jsx)(o,{className:m.containerSingle,value:e,onValueChange:t})},play:async({canvasElement:e})=>{let t=C(e),n=t.getByPlaceholderText(`MM/DD/YYYY`),r=t.getByRole(`button`,{name:/open calendar/i});await x.click(r);let i=b.getByRole(`button`,{name:/Choose.*January 15, 2026/i});await x.click(i),await y(n).toHaveValue(`01/15/2026`),await x.click(r);let a=b.queryByRole(`gridcell`,{selected:!0});await y(a).toBeInTheDocument(),await y(a).toHaveAttribute(`data-value`,`2026-01-15`),await x.clear(n),await x.type(n,`01/16/2026`),await y(n).toHaveValue(`01/16/2026`);let o=b.queryByRole(`gridcell`,{selected:!0});await y(o).toBeInTheDocument(),await y(o).toHaveAttribute(`data-value`,`2026-01-16`);let s=b.getByRole(`button`,{name:/Choose.*January 17, 2026/i});await x.click(s),await y(n).toHaveValue(`01/17/2026`);let c=t.getByRole(`button`,{name:/clear date/i});await x.click(c),await y(n).toHaveValue(``),await y(t.queryByRole(`button`,{name:/clear date/i})).not.toBeInTheDocument(),await x.keyboard(`{Escape}`)}},D={render:function(){let[e,t]=(0,g.useState)();return(0,v.jsx)(o,{className:m.containerRange,value:e,onValueChange:t,range:!0})},play:async({canvasElement:e})=>{let t=C(e),n=t.getByPlaceholderText(`MM/DD/YYYY - MM/DD/YYYY`),r=t.getByRole(`button`,{name:/open calendar/i});await x.click(r),await S(()=>y(b.getByRole(`application`,{name:`calendar`})).toBeVisible());let i=b.getByRole(`button`,{name:/January 15, 2026/i});await x.click(i);let a=b.getByRole(`button`,{name:/January 17, 2026/i});await x.click(a);let o=b.queryAllByRole(`gridcell`),s=o.find(e=>e.getAttribute(`data-value`)===`2026-01-15`),c=o.find(e=>e.getAttribute(`data-value`)===`2026-01-17`);await y(s).toBeInTheDocument(),await y(c).toBeInTheDocument(),await y(s).toHaveAttribute(`aria-selected`,`true`),await y(c).toHaveAttribute(`aria-selected`,`true`),await y(n).toHaveValue(`01/15/2026 - 01/17/2026`),await x.clear(n),await x.type(n,`01/14/2026 - 01/18/2026`),await x.click(n),await x.type(n,`{Escape}`),await y(n).toHaveValue(`01/14/2026 - 01/18/2026`),await x.click(r);let l=o.find(e=>e.getAttribute(`data-value`)===`2026-01-14`),u=o.find(e=>e.getAttribute(`data-value`)===`2026-01-18`);await y(l).toBeInTheDocument(),await y(u).toBeInTheDocument(),await y(l).toHaveAttribute(`aria-selected`,`true`),await y(u).toHaveAttribute(`aria-selected`,`true`);let d=t.getByRole(`button`,{name:/clear date/i});await x.click(d),await y(n).toHaveValue(``),await y(t.queryByRole(`button`,{name:/clear date/i})).not.toBeInTheDocument(),await x.keyboard(`{Escape}`)}},O={args:{className:m.containerSingle,defaultValue:`2024-12-25`}},k={args:{className:m.containerRange,defaultValue:[`2024-12-01`,`2024-12-31`],range:!0}},A={render:function(){let[e,t]=(0,g.useState)(),n=new Date,r=new Date(n.getFullYear(),n.getMonth(),1).toISOString().split(`T`)[0],i=new Date(n.getFullYear(),n.getMonth()+3,0).toISOString().split(`T`)[0];return(0,v.jsxs)(`div`,{className:m.containerSingle,children:[(0,v.jsx)(o,{value:e,onValueChange:t,placeholder:`MM/DD/YYYY`,min:r,max:i}),(0,v.jsx)(`p`,{className:m.helperText,children:`Allowed: Current month to next 3 months only`})]})}},j={args:{className:m.containerSingle,value:`2024-12-25`,disabled:!0}},M={args:{className:m.containerSingle,value:`2024-12-25`,readOnly:!0}},N={render:function(){let[e,t]=(0,g.useState)();return(0,v.jsx)(o,{className:m.containerSingle,value:e,onValueChange:t,hideClearButton:!0})},play:async({canvasElement:e})=>{let t=C(e),n=t.getByRole(`button`,{name:/open calendar/i});await x.click(n);let r=b.getByRole(`button`,{name:/Choose.*January 15, 2026/i});await x.click(r),await y(t.getByPlaceholderText(`MM/DD/YYYY`)).toHaveValue(`01/15/2026`),await y(t.queryByRole(`button`,{name:/clear date/i})).not.toBeInTheDocument()}},P={render:function(){let[e,t]=(0,g.useState)(),[n,r]=(0,g.useState)(!1);return(0,v.jsxs)(`div`,{className:m.containerSingle,children:[(0,v.jsx)(`div`,{className:m.buttonContainer,children:(0,v.jsxs)(`button`,{onClick:()=>r(!n),children:[n?`Close`:`Open`,` Calendar`]})}),(0,v.jsx)(o,{value:e,onValueChange:t,open:n,onOpenChange:r})]})}},F={render:function(){return(0,v.jsx)(`div`,{className:m.containerSingle,children:(0,v.jsx)(o,{defaultValue:`2024-12-25`})})}},I={render:function(){let[e,t]=(0,g.useState)();return(0,v.jsxs)(`div`,{className:m.containerRange,children:[(0,v.jsx)(o,{value:e,onValueChange:t,range:!0}),(0,v.jsxs)(`div`,{className:m.infoContainer,children:[(0,v.jsx)(`p`,{children:`Try typing: "12/01/2024 - 12/31/2024"`}),(0,v.jsx)(`p`,{children:`Validation happens on blur`}),(0,v.jsx)(`p`,{children:`Invalid format resets to empty`}),(0,v.jsxs)(`p`,{children:[`Current value: `,JSON.stringify(e)]})]})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>();
    return <DsDateInput className={styles.containerSingle} value={value} onValueChange={setValue} />;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('MM/DD/YYYY');
    const calendarButton = canvas.getByRole('button', {
      name: /open calendar/i
    });

    // 1. Open calendar and select a date (01/15/2026)
    await userEvent.click(calendarButton);
    const jan15Button = screen.getByRole('button', {
      name: /Choose.*January 15, 2026/i
    });
    await userEvent.click(jan15Button);

    // Verify input shows selected date
    await expect(input).toHaveValue('01/15/2026');

    // 2. Open calendar again and verify it shows the new date as selected
    await userEvent.click(calendarButton);
    const initialSelectedCell = screen.queryByRole('gridcell', {
      selected: true
    });
    await expect(initialSelectedCell).toBeInTheDocument();
    await expect(initialSelectedCell).toHaveAttribute('data-value', '2026-01-15');

    // 3. Type a different date into the input (01/16/2026)
    await userEvent.clear(input);
    await userEvent.type(input, '01/16/2026');

    // Verify input updated
    await expect(input).toHaveValue('01/16/2026');

    // 4. Verify calendar shows the new date as selected
    const selectedCell = screen.queryByRole('gridcell', {
      selected: true
    });
    await expect(selectedCell).toBeInTheDocument();
    await expect(selectedCell).toHaveAttribute('data-value', '2026-01-16');

    // 5. Select another date (01/17/2026)
    const jan17Button = screen.getByRole('button', {
      name: /Choose.*January 17, 2026/i
    });
    await userEvent.click(jan17Button);

    // 6. Verify input text updated
    await expect(input).toHaveValue('01/17/2026');

    // 7. Click clear button and verify input is cleared
    const clearButton = canvas.getByRole('button', {
      name: /clear date/i
    });
    await userEvent.click(clearButton);
    await expect(input).toHaveValue('');

    // 8. Verify clear button is gone after clearing
    const clearButtonAfter = canvas.queryByRole('button', {
      name: /clear date/i
    });
    await expect(clearButtonAfter).not.toBeInTheDocument();

    // Exit the calendar display
    await userEvent.keyboard('{Escape}');
  }
}`,...E.parameters?.docs?.source},description:{story:`Basic single date input with default configuration`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<[string, string]>();
    return <DsDateInput className={styles.containerRange} value={value} onValueChange={setValue} range />;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByPlaceholderText('MM/DD/YYYY - MM/DD/YYYY');
    const calendarButton = canvas.getByRole('button', {
      name: /open calendar/i
    });

    // 1. Open calendar and select range [01/15/2026 - 01/17/2026]
    await userEvent.click(calendarButton);
    await waitFor(() => {
      return expect(screen.getByRole('application', {
        name: 'calendar'
      })).toBeVisible();
    });

    // Click start date (01/15/2026)
    const jan15Button = screen.getByRole('button', {
      name: /January 15, 2026/i
    });
    await userEvent.click(jan15Button);

    // Click end date (01/17/2026)
    const jan17Button = screen.getByRole('button', {
      name: /January 17, 2026/i
    });
    await userEvent.click(jan17Button);

    // 2. Check calendar shows the selection correctly (both dates marked as selected)
    const allCells = screen.queryAllByRole('gridcell');
    const jan15Cell = allCells.find(cell => cell.getAttribute('data-value') === '2026-01-15');
    const jan17Cell = allCells.find(cell => cell.getAttribute('data-value') === '2026-01-17');
    await expect(jan15Cell).toBeInTheDocument();
    await expect(jan17Cell).toBeInTheDocument();
    await expect(jan15Cell).toHaveAttribute('aria-selected', 'true');
    await expect(jan17Cell).toHaveAttribute('aria-selected', 'true');

    // 3. Check input text is updated correctly
    await expect(input).toHaveValue('01/15/2026 - 01/17/2026');

    // 4. Type a new range [01/14/2026 - 01/18/2026]
    await userEvent.clear(input);
    await userEvent.type(input, '01/14/2026 - 01/18/2026');
    await userEvent.click(input);
    await userEvent.type(input, '{Escape}'); // Trigger parsing.

    // Verify input updated
    await expect(input).toHaveValue('01/14/2026 - 01/18/2026');

    // 5. Check calendar is updated correctly
    await userEvent.click(calendarButton);

    // Check the new selected dates
    const jan14Cell = allCells.find(cell => cell.getAttribute('data-value') === '2026-01-14');
    const jan18Cell = allCells.find(cell => cell.getAttribute('data-value') === '2026-01-18');
    await expect(jan14Cell).toBeInTheDocument();
    await expect(jan18Cell).toBeInTheDocument();
    await expect(jan14Cell).toHaveAttribute('aria-selected', 'true');
    await expect(jan18Cell).toHaveAttribute('aria-selected', 'true');

    // 6. Click clear button and verify input is cleared
    const clearButton = canvas.getByRole('button', {
      name: /clear date/i
    });
    await userEvent.click(clearButton);
    await expect(input).toHaveValue('');

    // Verify clear button is gone after clearing
    const clearButtonAfter = canvas.queryByRole('button', {
      name: /clear date/i
    });
    await expect(clearButtonAfter).not.toBeInTheDocument();

    // Exit the calendar display
    await userEvent.keyboard('{Escape}');
  }
}`,...D.parameters?.docs?.source},description:{story:`Date range input - unified input field for start and end dates`,...D.parameters?.docs?.description}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    defaultValue: '2024-12-25'
  }
}`,...O.parameters?.docs?.source},description:{story:`Single date input with pre-filled value`,...O.parameters?.docs?.description}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerRange,
    defaultValue: ['2024-12-01', '2024-12-31'],
    range: true
  }
}`,...k.parameters?.docs?.source},description:{story:`Range input with pre-filled values`,...k.parameters?.docs?.description}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>();
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1).toISOString().split('T')[0];
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 3, 0).toISOString().split('T')[0];
    return <div className={styles.containerSingle}>
                <DsDateInput value={value} onValueChange={setValue} placeholder="MM/DD/YYYY" min={minDate} max={maxDate} />
                <p className={styles.helperText}>Allowed: Current month to next 3 months only</p>
            </div>;
  }
}`,...A.parameters?.docs?.source},description:{story:`Date input with min and max constraints`,...A.parameters?.docs?.description}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    disabled: true
  }
}`,...j.parameters?.docs?.source},description:{story:`Disabled date input`,...j.parameters?.docs?.description}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    readOnly: true
  }
}`,...M.parameters?.docs?.source},description:{story:`Read-only date input`,...M.parameters?.docs?.description}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>();
    return <DsDateInput className={styles.containerSingle} value={value} onValueChange={setValue} hideClearButton />;
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const calendarButton = canvas.getByRole('button', {
      name: /open calendar/i
    });

    // Select a date
    await userEvent.click(calendarButton);
    const jan15Button = screen.getByRole('button', {
      name: /Choose.*January 15, 2026/i
    });
    await userEvent.click(jan15Button);

    // Verify the date is selected
    const input = canvas.getByPlaceholderText('MM/DD/YYYY');
    await expect(input).toHaveValue('01/15/2026');

    // Verify the clear button is not rendered
    const clearButton = canvas.queryByRole('button', {
      name: /clear date/i
    });
    await expect(clearButton).not.toBeInTheDocument();
  }
}`,...N.parameters?.docs?.source},description:{story:`Date input with hidden clear button`,...N.parameters?.docs?.description}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<string>();
    const [open, setOpen] = useState(false);
    return <div className={styles.containerSingle}>
                <div className={styles.buttonContainer}>
                    <button onClick={() => setOpen(!open)}>{open ? 'Close' : 'Open'} Calendar</button>
                </div>
                <DsDateInput value={value} onValueChange={setValue} open={open} onOpenChange={setOpen} />
            </div>;
  }
}`,...P.parameters?.docs?.source},description:{story:`Controlled open state`,...P.parameters?.docs?.description}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className={styles.containerSingle}>
                <DsDateInput defaultValue="2024-12-25" />
            </div>;
  }
}`,...F.parameters?.docs?.source},description:{story:`Uncontrolled with defaultValue`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState<[string, string]>();
    return <div className={styles.containerRange}>
                <DsDateInput value={value} onValueChange={setValue} range />
                <div className={styles.infoContainer}>
                    <p>Try typing: &#34;12/01/2024 - 12/31/2024&#34;</p>
                    <p>Validation happens on blur</p>
                    <p>Invalid format resets to empty</p>
                    <p>Current value: {JSON.stringify(value)}</p>
                </div>
            </div>;
  }
}`,...I.parameters?.docs?.source},description:{story:`Manual typing demonstration`,...I.parameters?.docs?.description}}},L=[`Default`,`RangeMode`,`WithDefaultValue`,`RangeWithDefaultValue`,`WithMinMax`,`Disabled`,`ReadOnly`,`HideClearButton`,`ControlledOpen`,`Uncontrolled`,`ManualTyping`]}))();export{P as ControlledOpen,E as Default,j as Disabled,N as HideClearButton,I as ManualTyping,D as RangeMode,k as RangeWithDefaultValue,M as ReadOnly,F as Uncontrolled,O as WithDefaultValue,A as WithMinMax,L as __namedExportsOrder,T as default};