import{j as s}from"./jsx-runtime-u17CrQMm.js";import{g as F,r as D}from"./iframe-BCyGbZD_.js";import{D as w}from"./ds-date-input-CAWfeZ5A.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpBnwYq3.js";import"./ds-icon-D3yceEq8.js";import"./ds-typography-h2IQ5Or0.js";import"./index-B2qal8qf.js";import"./index-CayDF-OW.js";import"./portal-ymrgfuLU.js";import"./create-split-props-u5h9OPvL.js";import"./index-wsDxsJkb.js";import"./index-BkD-BxJw.js";import"./use-locale-context-GaukUVrg.js";import"./create-anatomy--8mTmSpS.js";import"./use-presence-BcyfoOmj.js";import"./set-qYyhtSM1.js";import"./raf-CC9hSMXO.js";import"./computed-style-IANVWBuY.js";import"./event-CBXSxTbR.js";import"./get-styles-CuVWlqT2.js";import"./floating-ui.dom-o9At5h4Q.js";import"./query-CjgVAlRR.js";import"./memo-BRlFl984.js";import"./equal-DfFTejAs.js";import"./number-Bu-e0fmS.js";import"./form-2dkRZeVb.js";import"./dismissable-layer-6sW9qQ30.js";var O={exports:{}},U=O.exports,J;function W(){return J||(J=1,(function(d,t){(function(e,a){a(t)})(U,(function(e){var a=function(i,l){return a=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(c,B){c.__proto__=B}||function(c,B){for(var v in B)Object.prototype.hasOwnProperty.call(B,v)&&(c[v]=B[v])},a(i,l)};function p(i,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");a(i,l);function c(){this.constructor=i}i.prototype=l===null?Object.create(l):(c.prototype=l.prototype,new c)}var o=Date,y=null,m=(function(i){p(l,i);function l(c,B,v,H,I,A,N){i.call(this);var C;switch(arguments.length){case 0:y!==null?C=new o(y.valueOf()):C=new o;break;case 1:C=new o(c);break;default:v=typeof v>"u"?1:v,H=H||0,I=I||0,A=A||0,N=N||0,C=new o(c,B,v,H,I,A,N);break}return C}return l})(o);m.prototype=o.prototype,m.UTC=o.UTC,m.now=function(){return new m().valueOf()},m.parse=function(i){return o.parse(i)},m.toString=function(){return o.toString()};function h(i){var l=new Date(i.valueOf());if(isNaN(l.getTime()))throw new TypeError("mockdate: The time set is an invalid date: "+i);Date=m,y=l.valueOf()}function f(){Date=o}var _={set:h,reset:f};e.default=_,e.reset=f,e.set=h,Object.defineProperty(e,"__esModule",{value:!0})}))})(O,O.exports)),O.exports}var z=W();const P=F(z),L="_containerSingle_zeasa_1",K="_containerRange_zeasa_5",G="_helperText_zeasa_9",Q="_infoContainer_zeasa_21",X="_buttonContainer_zeasa_27",u={containerSingle:L,containerRange:K,helperText:G,infoContainer:Q,buttonContainer:X},{expect:n,screen:g,userEvent:r,waitFor:Z,within:q}=__STORYBOOK_MODULE_TEST__,$=new Date("2026-01-15T12:00:00"),je={title:"Design System/DateInput",component:w,parameters:{layout:"centered"},beforeEach:()=>(P.set($),()=>{P.reset()})},x={render:function(){const[t,e]=D.useState();return s.jsx(w,{className:u.containerSingle,value:t,onValueChange:e})},play:async({canvasElement:d})=>{const t=q(d),e=t.getByPlaceholderText("MM/DD/YYYY"),a=t.getByRole("button",{name:/open calendar/i});await r.click(a);const p=g.getByRole("button",{name:/Choose.*January 15, 2026/i});await r.click(p),await n(e).toHaveValue("01/15/2026"),await r.click(a);const o=g.queryByRole("gridcell",{selected:!0});await n(o).toBeInTheDocument(),await n(o).toHaveAttribute("data-value","2026-01-15"),await r.clear(e),await r.type(e,"01/16/2026"),await n(e).toHaveValue("01/16/2026");const y=g.queryByRole("gridcell",{selected:!0});await n(y).toBeInTheDocument(),await n(y).toHaveAttribute("data-value","2026-01-16");const m=g.getByRole("button",{name:/Choose.*January 17, 2026/i});await r.click(m),await n(e).toHaveValue("01/17/2026");const h=t.getByRole("button",{name:/clear date/i});await r.click(h),await n(e).toHaveValue("");const f=t.queryByRole("button",{name:/clear date/i});await n(f).not.toBeInTheDocument(),await r.keyboard("{Escape}")}},b={render:function(){const[t,e]=D.useState();return s.jsx(w,{className:u.containerRange,value:t,onValueChange:e,range:!0})},play:async({canvasElement:d})=>{const t=q(d),e=t.getByPlaceholderText("MM/DD/YYYY - MM/DD/YYYY"),a=t.getByRole("button",{name:/open calendar/i});await r.click(a),await Z(()=>n(g.getByRole("application",{name:"calendar"})).toBeVisible());const p=g.getByRole("button",{name:/January 15, 2026/i});await r.click(p);const o=g.getByRole("button",{name:/January 17, 2026/i});await r.click(o);const y=g.queryAllByRole("gridcell"),m=y.find(c=>c.getAttribute("data-value")==="2026-01-15"),h=y.find(c=>c.getAttribute("data-value")==="2026-01-17");await n(m).toBeInTheDocument(),await n(h).toBeInTheDocument(),await n(m).toHaveAttribute("aria-selected","true"),await n(h).toHaveAttribute("aria-selected","true"),await n(e).toHaveValue("01/15/2026 - 01/17/2026"),await r.clear(e),await r.type(e,"01/14/2026 - 01/18/2026"),await r.click(e),await r.type(e,"{Escape}"),await n(e).toHaveValue("01/14/2026 - 01/18/2026"),await r.click(a);const f=y.find(c=>c.getAttribute("data-value")==="2026-01-14"),_=y.find(c=>c.getAttribute("data-value")==="2026-01-18");await n(f).toBeInTheDocument(),await n(_).toBeInTheDocument(),await n(f).toHaveAttribute("aria-selected","true"),await n(_).toHaveAttribute("aria-selected","true");const i=t.getByRole("button",{name:/clear date/i});await r.click(i),await n(e).toHaveValue("");const l=t.queryByRole("button",{name:/clear date/i});await n(l).not.toBeInTheDocument(),await r.keyboard("{Escape}")}},V={args:{className:u.containerSingle,defaultValue:"2024-12-25"}},R={args:{className:u.containerRange,defaultValue:["2024-12-01","2024-12-31"],range:!0}},S={render:function(){const[t,e]=D.useState(),a=new Date,p=new Date(a.getFullYear(),a.getMonth(),1).toISOString().split("T")[0],o=new Date(a.getFullYear(),a.getMonth()+3,0).toISOString().split("T")[0];return s.jsxs("div",{className:u.containerSingle,children:[s.jsx(w,{value:t,onValueChange:e,placeholder:"MM/DD/YYYY",min:p,max:o}),s.jsx("p",{className:u.helperText,children:"Allowed: Current month to next 3 months only"})]})}},j={args:{className:u.containerSingle,value:"2024-12-25",disabled:!0}},T={args:{className:u.containerSingle,value:"2024-12-25",readOnly:!0}},k={render:function(){const[t,e]=D.useState();return s.jsx(w,{className:u.containerSingle,value:t,onValueChange:e,hideClearButton:!0})},play:async({canvasElement:d})=>{const t=q(d),e=t.getByRole("button",{name:/open calendar/i});await r.click(e);const a=g.getByRole("button",{name:/Choose.*January 15, 2026/i});await r.click(a);const p=t.getByPlaceholderText("MM/DD/YYYY");await n(p).toHaveValue("01/15/2026");const o=t.queryByRole("button",{name:/clear date/i});await n(o).not.toBeInTheDocument()}},E={render:function(){const[t,e]=D.useState(),[a,p]=D.useState(!1);return s.jsxs("div",{className:u.containerSingle,children:[s.jsx("div",{className:u.buttonContainer,children:s.jsxs("button",{onClick:()=>p(!a),children:[a?"Close":"Open"," Calendar"]})}),s.jsx(w,{value:t,onValueChange:e,open:a,onOpenChange:p})]})}},Y={render:function(){return s.jsx("div",{className:u.containerSingle,children:s.jsx(w,{defaultValue:"2024-12-25"})})}},M={render:function(){const[t,e]=D.useState();return s.jsxs("div",{className:u.containerRange,children:[s.jsx(w,{value:t,onValueChange:e,range:!0}),s.jsxs("div",{className:u.infoContainer,children:[s.jsx("p",{children:'Try typing: "12/01/2024 - 12/31/2024"'}),s.jsx("p",{children:"Validation happens on blur"}),s.jsx("p",{children:"Invalid format resets to empty"}),s.jsxs("p",{children:["Current value: ",JSON.stringify(t)]})]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Date range input - unified input field for start and end dates",...b.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    defaultValue: '2024-12-25'
  }
}`,...V.parameters?.docs?.source},description:{story:"Single date input with pre-filled value",...V.parameters?.docs?.description}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerRange,
    defaultValue: ['2024-12-01', '2024-12-31'],
    range: true
  }
}`,...R.parameters?.docs?.source},description:{story:"Range input with pre-filled values",...R.parameters?.docs?.description}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
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
}`,...S.parameters?.docs?.source},description:{story:"Date input with min and max constraints",...S.parameters?.docs?.description}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    disabled: true
  }
}`,...j.parameters?.docs?.source},description:{story:"Disabled date input",...j.parameters?.docs?.description}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    readOnly: true
  }
}`,...T.parameters?.docs?.source},description:{story:"Read-only date input",...T.parameters?.docs?.description}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source},description:{story:"Date input with hidden clear button",...k.parameters?.docs?.description}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:"Controlled open state",...E.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className={styles.containerSingle}>
                <DsDateInput defaultValue="2024-12-25" />
            </div>;
  }
}`,...Y.parameters?.docs?.source},description:{story:"Uncontrolled with defaultValue",...Y.parameters?.docs?.description}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source},description:{story:"Manual typing demonstration",...M.parameters?.docs?.description}}};const Te=["Default","RangeMode","WithDefaultValue","RangeWithDefaultValue","WithMinMax","Disabled","ReadOnly","HideClearButton","ControlledOpen","Uncontrolled","ManualTyping"];export{E as ControlledOpen,x as Default,j as Disabled,k as HideClearButton,M as ManualTyping,b as RangeMode,R as RangeWithDefaultValue,T as ReadOnly,Y as Uncontrolled,V as WithDefaultValue,S as WithMinMax,Te as __namedExportsOrder,je as default};
