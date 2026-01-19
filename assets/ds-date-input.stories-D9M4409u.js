import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-BXAOmh9a.js";import{D as d}from"./ds-date-input-hB16WARl.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D19FLPeo.js";import"./ds-icon-DSSaz8Tl.js";import"./ds-typography-D7IYLqk3.js";import"./index-BDMAP15r.js";import"./index-C19X6qc_.js";import"./portal-CcVK6v-P.js";import"./create-split-props-u5h9OPvL.js";import"./index-i8bkvtfA.js";import"./index-90yLpvKO.js";import"./index-BuW0p8V2.js";import"./use-locale-context-Dq5dQjhb.js";import"./use-presence-HIIT_gMI.js";import"./index-CtLbKKPa.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-VTC5MUn7.js";const A="_containerSingle_zeasa_1",M="_containerRange_zeasa_5",I="_helperText_zeasa_9",H="_infoContainer_zeasa_21",N="_buttonContainer_zeasa_27",s={containerSingle:A,containerRange:M,helperText:I,infoContainer:H,buttonContainer:N},{expect:t,screen:u,userEvent:r,within:E}=__STORYBOOK_MODULE_TEST__,ae={title:"Design System/DateInput",component:d,tags:["autodocs"],parameters:{layout:"centered"}},y={render:function(){const[n,e]=m.useState();return a.jsx(d,{className:s.containerSingle,value:n,onValueChange:e})},play:async({canvasElement:l})=>{const n=E(l),e=n.getByPlaceholderText("MM/DD/YYYY"),o=n.getByRole("button",{name:/open calendar/i});await r.click(o);const c=u.getByRole("button",{name:/Choose.*January 15, 2026/i});await r.click(c),await t(e).toHaveValue("01/15/2026"),await r.click(o);const p=u.queryByRole("gridcell",{selected:!0});await t(p).toBeInTheDocument(),await t(p).toHaveAttribute("data-value","2026-01-15"),await r.clear(e),await r.type(e,"01/16/2026"),await t(e).toHaveValue("01/16/2026");const g=u.queryByRole("gridcell",{selected:!0});await t(g).toBeInTheDocument(),await t(g).toHaveAttribute("data-value","2026-01-16");const R=u.getByRole("button",{name:/Choose.*January 17, 2026/i});await r.click(R),await t(e).toHaveValue("01/17/2026");const V=n.getByRole("button",{name:/clear date/i});await r.click(V),await t(e).toHaveValue("");const S=n.queryByRole("button",{name:/clear date/i});await t(S).not.toBeInTheDocument(),await r.keyboard("{Escape}")}},v={render:function(){const[n,e]=m.useState();return a.jsx(d,{className:s.containerRange,value:n,onValueChange:e,range:!0})},play:async({canvasElement:l})=>{const n=E(l),e=n.getByPlaceholderText("MM/DD/YYYY - MM/DD/YYYY"),o=n.getByRole("button",{name:/open calendar/i});await r.click(o);const c=u.getByRole("button",{name:/Choose.*January 15, 2026/i});await r.click(c);const p=u.getByRole("button",{name:/Choose.*January 17, 2026/i});await r.click(p);const g=u.queryAllByRole("gridcell"),R=g.find(i=>i.getAttribute("data-value")==="2026-01-15"),V=g.find(i=>i.getAttribute("data-value")==="2026-01-17");await t(R).toBeInTheDocument(),await t(V).toBeInTheDocument(),await t(R).toHaveAttribute("aria-selected","true"),await t(V).toHaveAttribute("aria-selected","true"),await t(e).toHaveValue("01/15/2026 - 01/17/2026"),await r.clear(e),await r.type(e,"01/14/2026 - 01/18/2026"),await r.tab(),await t(e).toHaveValue("01/14/2026 - 01/18/2026"),await new Promise(i=>setTimeout(i,100)),await r.click(o);const S=u.queryAllByRole("gridcell"),j=S.find(i=>i.getAttribute("data-value")==="2026-01-14"),T=S.find(i=>i.getAttribute("data-value")==="2026-01-18");await t(j).toBeInTheDocument(),await t(T).toBeInTheDocument(),await t(j).toHaveAttribute("aria-selected","true"),await t(T).toHaveAttribute("aria-selected","true");const Y=n.getByRole("button",{name:/clear date/i});await r.click(Y),await t(e).toHaveValue("");const k=n.queryByRole("button",{name:/clear date/i});await t(k).not.toBeInTheDocument(),await r.keyboard("{Escape}")}},h={args:{className:s.containerSingle,defaultValue:"2024-12-25"}},w={args:{className:s.containerRange,defaultValue:["2024-12-01","2024-12-31"],range:!0}},C={render:function(){const[n,e]=m.useState(),o=new Date,c=new Date(o.getFullYear(),o.getMonth(),1).toISOString().split("T")[0],p=new Date(o.getFullYear(),o.getMonth()+3,0).toISOString().split("T")[0];return a.jsxs("div",{className:s.containerSingle,children:[a.jsx(d,{value:n,onValueChange:e,placeholder:"MM/DD/YYYY",min:c,max:p}),a.jsx("p",{className:s.helperText,children:"Allowed: Current month to next 3 months only"})]})}},B={args:{className:s.containerSingle,value:"2024-12-25",disabled:!0}},f={args:{className:s.containerSingle,value:"2024-12-25",readOnly:!0}},D={render:function(){const[n,e]=m.useState(),[o,c]=m.useState(!1);return a.jsxs("div",{className:s.containerSingle,children:[a.jsx("div",{className:s.buttonContainer,children:a.jsxs("button",{onClick:()=>c(!o),children:[o?"Close":"Open"," Calendar"]})}),a.jsx(d,{value:n,onValueChange:e,open:o,onOpenChange:c})]})}},x={render:function(){return a.jsx("div",{className:s.containerSingle,children:a.jsx(d,{defaultValue:"2024-12-25"})})}},b={render:function(){const[n,e]=m.useState();return a.jsxs("div",{className:s.containerRange,children:[a.jsx(d,{value:n,onValueChange:e,range:!0}),a.jsxs("div",{className:s.infoContainer,children:[a.jsx("p",{children:'Try typing: "12/01/2024 - 12/31/2024"'}),a.jsx("p",{children:"Validation happens on blur"}),a.jsx("p",{children:"Invalid format resets to empty"}),a.jsxs("p",{children:["Current value: ",JSON.stringify(n)]})]})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source},description:{story:"Basic single date input with default configuration",...y.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
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

    // Click start date (01/15/2026)
    const jan15Button = screen.getByRole('button', {
      name: /Choose.*January 15, 2026/i
    });
    await userEvent.click(jan15Button);

    // Click end date (01/17/2026)
    const jan17Button = screen.getByRole('button', {
      name: /Choose.*January 17, 2026/i
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
    await userEvent.tab(); // Trigger blur to validate

    // Verify input updated
    await expect(input).toHaveValue('01/14/2026 - 01/18/2026');

    // Wait a moment for the internal state to sync
    await new Promise(resolve => setTimeout(resolve, 100));

    // 5. Check calendar is updated correctly
    await userEvent.click(calendarButton);

    // Check the new selected dates
    const allTheCells = screen.queryAllByRole('gridcell');
    const jan14Cell = allTheCells.find(cell => cell.getAttribute('data-value') === '2026-01-14');
    const jan18Cell = allTheCells.find(cell => cell.getAttribute('data-value') === '2026-01-18');
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
}`,...v.parameters?.docs?.source},description:{story:"Date range input - unified input field for start and end dates",...v.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    defaultValue: '2024-12-25'
  }
}`,...h.parameters?.docs?.source},description:{story:"Single date input with pre-filled value",...h.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerRange,
    defaultValue: ['2024-12-01', '2024-12-31'],
    range: true
  }
}`,...w.parameters?.docs?.source},description:{story:"Range input with pre-filled values",...w.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source},description:{story:"Date input with min and max constraints",...C.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    disabled: true
  }
}`,...B.parameters?.docs?.source},description:{story:"Disabled date input",...B.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    readOnly: true
  }
}`,...f.parameters?.docs?.source},description:{story:"Read-only date input",...f.parameters?.docs?.description}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:"Controlled open state",...D.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <div className={styles.containerSingle}>
                <DsDateInput defaultValue="2024-12-25" />
            </div>;
  }
}`,...x.parameters?.docs?.source},description:{story:"Uncontrolled with defaultValue",...x.parameters?.docs?.description}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Manual typing demonstration",...b.parameters?.docs?.description}}};const re=["Default","RangeMode","WithDefaultValue","RangeWithDefaultValue","WithMinMax","Disabled","ReadOnly","ControlledOpen","Uncontrolled","ManualTyping"];export{D as ControlledOpen,y as Default,B as Disabled,b as ManualTyping,v as RangeMode,w as RangeWithDefaultValue,f as ReadOnly,x as Uncontrolled,h as WithDefaultValue,C as WithMinMax,re as __namedExportsOrder,ae as default};
