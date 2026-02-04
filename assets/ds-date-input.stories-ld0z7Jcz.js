import{j as o}from"./jsx-runtime-u17CrQMm.js";import{g as F,r as D}from"./iframe-Bhdmiu3A.js";import{D as B}from"./ds-date-input-D-whglCe.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CTg8sGNP.js";import"./ds-icon-C_aPqn2p.js";import"./ds-typography-DPWIUNz-.js";import"./index-B9VAQMBi.js";import"./index-DpWRtFJc.js";import"./portal-rVIkCr2r.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BM9BBbCC.js";import"./index-Cpzt516F.js";import"./index-eaEaq9f0.js";import"./use-presence-AnVyaIjq.js";import"./index-BOk4HroY.js";import"./floating-ui.utils.dom-DRj6nPCu.js";import"./index-DkkQvAcm.js";var Y={exports:{}},P=Y.exports,H;function U(){return H||(H=1,(function(m,t){(function(e,a){a(t)})(P,(function(e){var a=function(c,l){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(i,h){i.__proto__=h}||function(i,h){for(var y in h)Object.prototype.hasOwnProperty.call(h,y)&&(i[y]=h[y])},a(c,l)};function g(c,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");a(c,l);function i(){this.constructor=c}c.prototype=l===null?Object.create(l):(i.prototype=l.prototype,new i)}var s=Date,p=null,d=(function(c){g(l,c);function l(i,h,y,M,A,I,N){c.call(this);var C;switch(arguments.length){case 0:p!==null?C=new s(p.valueOf()):C=new s;break;case 1:C=new s(i);break;default:y=typeof y>"u"?1:y,M=M||0,A=A||0,I=I||0,N=N||0,C=new s(i,h,y,M,A,I,N);break}return C}return l})(s);d.prototype=s.prototype,d.UTC=s.UTC,d.now=function(){return new d().valueOf()},d.parse=function(c){return s.parse(c)},d.toString=function(){return s.toString()};function w(c){var l=new Date(c.valueOf());if(isNaN(l.getTime()))throw new TypeError("mockdate: The time set is an invalid date: "+c);Date=d,p=l.valueOf()}function f(){Date=s}var _={set:w,reset:f};e.default=_,e.reset=f,e.set=w,Object.defineProperty(e,"__esModule",{value:!0})}))})(Y,Y.exports)),Y.exports}var W=U();const q=F(W),z="_containerSingle_zeasa_1",L="_containerRange_zeasa_5",K="_helperText_zeasa_9",G="_infoContainer_zeasa_21",Q="_buttonContainer_zeasa_27",u={containerSingle:z,containerRange:L,helperText:K,infoContainer:G,buttonContainer:Q},{expect:n,screen:v,userEvent:r,waitFor:X,within:J}=__STORYBOOK_MODULE_TEST__,Z=new Date("2026-01-15T12:00:00"),we={title:"Design System/DateInput",component:B,tags:["autodocs"],parameters:{layout:"centered"},beforeEach:()=>(q.set(Z),()=>{q.reset()})},x={render:function(){const[t,e]=D.useState();return o.jsx(B,{className:u.containerSingle,value:t,onValueChange:e})},play:async({canvasElement:m})=>{const t=J(m),e=t.getByPlaceholderText("MM/DD/YYYY"),a=t.getByRole("button",{name:/open calendar/i});await r.click(a);const g=v.getByRole("button",{name:/Choose.*January 15, 2026/i});await r.click(g),await n(e).toHaveValue("01/15/2026"),await r.click(a);const s=v.queryByRole("gridcell",{selected:!0});await n(s).toBeInTheDocument(),await n(s).toHaveAttribute("data-value","2026-01-15"),await r.clear(e),await r.type(e,"01/16/2026"),await n(e).toHaveValue("01/16/2026");const p=v.queryByRole("gridcell",{selected:!0});await n(p).toBeInTheDocument(),await n(p).toHaveAttribute("data-value","2026-01-16");const d=v.getByRole("button",{name:/Choose.*January 17, 2026/i});await r.click(d),await n(e).toHaveValue("01/17/2026");const w=t.getByRole("button",{name:/clear date/i});await r.click(w),await n(e).toHaveValue("");const f=t.queryByRole("button",{name:/clear date/i});await n(f).not.toBeInTheDocument(),await r.keyboard("{Escape}")}},b={render:function(){const[t,e]=D.useState();return o.jsx(B,{className:u.containerRange,value:t,onValueChange:e,range:!0})},play:async({canvasElement:m})=>{const t=J(m),e=t.getByPlaceholderText("MM/DD/YYYY - MM/DD/YYYY"),a=t.getByRole("button",{name:/open calendar/i});await r.click(a),await X(()=>n(v.getByRole("application",{name:"calendar"})).toBeVisible());const g=v.getByRole("button",{name:/January 15, 2026/i});await r.click(g);const s=v.getByRole("button",{name:/January 17, 2026/i});await r.click(s);const p=v.queryAllByRole("gridcell"),d=p.find(i=>i.getAttribute("data-value")==="2026-01-15"),w=p.find(i=>i.getAttribute("data-value")==="2026-01-17");await n(d).toBeInTheDocument(),await n(w).toBeInTheDocument(),await n(d).toHaveAttribute("aria-selected","true"),await n(w).toHaveAttribute("aria-selected","true"),await n(e).toHaveValue("01/15/2026 - 01/17/2026"),await r.clear(e),await r.type(e,"01/14/2026 - 01/18/2026"),await r.click(e),await r.type(e,"{Escape}"),await n(e).toHaveValue("01/14/2026 - 01/18/2026"),await r.click(a);const f=p.find(i=>i.getAttribute("data-value")==="2026-01-14"),_=p.find(i=>i.getAttribute("data-value")==="2026-01-18");await n(f).toBeInTheDocument(),await n(_).toBeInTheDocument(),await n(f).toHaveAttribute("aria-selected","true"),await n(_).toHaveAttribute("aria-selected","true");const c=t.getByRole("button",{name:/clear date/i});await r.click(c),await n(e).toHaveValue("");const l=t.queryByRole("button",{name:/clear date/i});await n(l).not.toBeInTheDocument(),await r.keyboard("{Escape}")}},S={args:{className:u.containerSingle,defaultValue:"2024-12-25"}},R={args:{className:u.containerRange,defaultValue:["2024-12-01","2024-12-31"],range:!0}},V={render:function(){const[t,e]=D.useState(),a=new Date,g=new Date(a.getFullYear(),a.getMonth(),1).toISOString().split("T")[0],s=new Date(a.getFullYear(),a.getMonth()+3,0).toISOString().split("T")[0];return o.jsxs("div",{className:u.containerSingle,children:[o.jsx(B,{value:t,onValueChange:e,placeholder:"MM/DD/YYYY",min:g,max:s}),o.jsx("p",{className:u.helperText,children:"Allowed: Current month to next 3 months only"})]})}},j={args:{className:u.containerSingle,value:"2024-12-25",disabled:!0}},k={args:{className:u.containerSingle,value:"2024-12-25",readOnly:!0}},T={render:function(){const[t,e]=D.useState(),[a,g]=D.useState(!1);return o.jsxs("div",{className:u.containerSingle,children:[o.jsx("div",{className:u.buttonContainer,children:o.jsxs("button",{onClick:()=>g(!a),children:[a?"Close":"Open"," Calendar"]})}),o.jsx(B,{value:t,onValueChange:e,open:a,onOpenChange:g})]})}},E={render:function(){return o.jsx("div",{className:u.containerSingle,children:o.jsx(B,{defaultValue:"2024-12-25"})})}},O={render:function(){const[t,e]=D.useState();return o.jsxs("div",{className:u.containerRange,children:[o.jsx(B,{value:t,onValueChange:e,range:!0}),o.jsxs("div",{className:u.infoContainer,children:[o.jsx("p",{children:'Try typing: "12/01/2024 - 12/31/2024"'}),o.jsx("p",{children:"Validation happens on blur"}),o.jsx("p",{children:"Invalid format resets to empty"}),o.jsxs("p",{children:["Current value: ",JSON.stringify(t)]})]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source},description:{story:"Basic single date input with default configuration",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Date range input - unified input field for start and end dates",...b.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    defaultValue: '2024-12-25'
  }
}`,...S.parameters?.docs?.source},description:{story:"Single date input with pre-filled value",...S.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerRange,
    defaultValue: ['2024-12-01', '2024-12-31'],
    range: true
  }
}`,...R.parameters?.docs?.source},description:{story:"Range input with pre-filled values",...R.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source},description:{story:"Date input with min and max constraints",...V.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    disabled: true
  }
}`,...j.parameters?.docs?.source},description:{story:"Disabled date input",...j.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    readOnly: true
  }
}`,...k.parameters?.docs?.source},description:{story:"Read-only date input",...k.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:"Controlled open state",...T.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className={styles.containerSingle}>
                <DsDateInput defaultValue="2024-12-25" />
            </div>;
  }
}`,...E.parameters?.docs?.source},description:{story:"Uncontrolled with defaultValue",...E.parameters?.docs?.description}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source},description:{story:"Manual typing demonstration",...O.parameters?.docs?.description}}};const fe=["Default","RangeMode","WithDefaultValue","RangeWithDefaultValue","WithMinMax","Disabled","ReadOnly","ControlledOpen","Uncontrolled","ManualTyping"];export{T as ControlledOpen,x as Default,j as Disabled,O as ManualTyping,b as RangeMode,R as RangeWithDefaultValue,k as ReadOnly,E as Uncontrolled,S as WithDefaultValue,V as WithMinMax,fe as __namedExportsOrder,we as default};
