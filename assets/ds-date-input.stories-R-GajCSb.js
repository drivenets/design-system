import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as g}from"./iframe-DO3z5i-V.js";import{D as p}from"./ds-date-input-DQt7ngmX.js";import"./preload-helper-PPVm8Dsz.js";import"./index-E4tmssrt.js";import"./ds-icon-BE_tnv_N.js";import"./ds-typography-CPp6yc55.js";import"./index-D-oo-m9x.js";import"./index-CwD1Sy4s.js";import"./portal-B6HiwHsW.js";import"./create-split-props-u5h9OPvL.js";import"./index-j2wvdD5W.js";import"./index-Vdb9JjU3.js";import"./index-DL2jhJwi.js";import"./use-locale-context-aPQTp9FX.js";import"./use-presence-supEY4Jl.js";import"./index-DUZ9greZ.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-DKAFrel9.js";const Y="_containerSingle_zeasa_1",M="_containerRange_zeasa_5",A="_helperText_zeasa_9",I="_infoContainer_zeasa_21",H="_buttonContainer_zeasa_27",s={containerSingle:Y,containerRange:M,helperText:A,infoContainer:I,buttonContainer:H},{expect:t,screen:c,userEvent:a,waitFor:N,within:T}=__STORYBOOK_MODULE_TEST__,ae={title:"Design System/DateInput",component:p,tags:["autodocs"],parameters:{layout:"centered"}},y={render:function(){const[n,e]=g.useState();return r.jsx(p,{className:s.containerSingle,value:n,onValueChange:e})},play:async({canvasElement:l})=>{const n=T(l),e=n.getByPlaceholderText("MM/DD/YYYY"),o=n.getByRole("button",{name:/open calendar/i});await a.click(o);const i=c.getByRole("button",{name:/Choose.*January 15, 2026/i});await a.click(i),await t(e).toHaveValue("01/15/2026"),await a.click(o);const m=c.queryByRole("gridcell",{selected:!0});await t(m).toBeInTheDocument(),await t(m).toHaveAttribute("data-value","2026-01-15"),await a.clear(e),await a.type(e,"01/16/2026"),await t(e).toHaveValue("01/16/2026");const u=c.queryByRole("gridcell",{selected:!0});await t(u).toBeInTheDocument(),await t(u).toHaveAttribute("data-value","2026-01-16");const V=c.getByRole("button",{name:/Choose.*January 17, 2026/i});await a.click(V),await t(e).toHaveValue("01/17/2026");const R=n.getByRole("button",{name:/clear date/i});await a.click(R),await t(e).toHaveValue("");const S=n.queryByRole("button",{name:/clear date/i});await t(S).not.toBeInTheDocument(),await a.keyboard("{Escape}")}},v={render:function(){const[n,e]=g.useState();return r.jsx(p,{className:s.containerRange,value:n,onValueChange:e,range:!0})},play:async({canvasElement:l})=>{const n=T(l),e=n.getByPlaceholderText("MM/DD/YYYY - MM/DD/YYYY"),o=n.getByRole("button",{name:/open calendar/i});await a.click(o),await N(()=>t(c.getByRole("application",{name:"calendar"})).toBeVisible());const i=c.getByRole("button",{name:/January 15, 2026/i});await a.click(i);const m=c.getByRole("button",{name:/January 17, 2026/i});await a.click(m);const u=c.queryAllByRole("gridcell"),V=u.find(d=>d.getAttribute("data-value")==="2026-01-15"),R=u.find(d=>d.getAttribute("data-value")==="2026-01-17");await t(V).toBeInTheDocument(),await t(R).toBeInTheDocument(),await t(V).toHaveAttribute("aria-selected","true"),await t(R).toHaveAttribute("aria-selected","true"),await t(e).toHaveValue("01/15/2026 - 01/17/2026"),await a.clear(e),await a.type(e,"01/14/2026 - 01/18/2026"),await a.click(e),await a.type(e,"{Escape}"),await t(e).toHaveValue("01/14/2026 - 01/18/2026"),await a.click(o);const S=u.find(d=>d.getAttribute("data-value")==="2026-01-14"),j=u.find(d=>d.getAttribute("data-value")==="2026-01-18");await t(S).toBeInTheDocument(),await t(j).toBeInTheDocument(),await t(S).toHaveAttribute("aria-selected","true"),await t(j).toHaveAttribute("aria-selected","true");const E=n.getByRole("button",{name:/clear date/i});await a.click(E),await t(e).toHaveValue("");const k=n.queryByRole("button",{name:/clear date/i});await t(k).not.toBeInTheDocument(),await a.keyboard("{Escape}")}},w={args:{className:s.containerSingle,defaultValue:"2024-12-25"}},h={args:{className:s.containerRange,defaultValue:["2024-12-01","2024-12-31"],range:!0}},B={render:function(){const[n,e]=g.useState(),o=new Date,i=new Date(o.getFullYear(),o.getMonth(),1).toISOString().split("T")[0],m=new Date(o.getFullYear(),o.getMonth()+3,0).toISOString().split("T")[0];return r.jsxs("div",{className:s.containerSingle,children:[r.jsx(p,{value:n,onValueChange:e,placeholder:"MM/DD/YYYY",min:i,max:m}),r.jsx("p",{className:s.helperText,children:"Allowed: Current month to next 3 months only"})]})}},C={args:{className:s.containerSingle,value:"2024-12-25",disabled:!0}},f={args:{className:s.containerSingle,value:"2024-12-25",readOnly:!0}},D={render:function(){const[n,e]=g.useState(),[o,i]=g.useState(!1);return r.jsxs("div",{className:s.containerSingle,children:[r.jsx("div",{className:s.buttonContainer,children:r.jsxs("button",{onClick:()=>i(!o),children:[o?"Close":"Open"," Calendar"]})}),r.jsx(p,{value:n,onValueChange:e,open:o,onOpenChange:i})]})}},x={render:function(){return r.jsx("div",{className:s.containerSingle,children:r.jsx(p,{defaultValue:"2024-12-25"})})}},b={render:function(){const[n,e]=g.useState();return r.jsxs("div",{className:s.containerRange,children:[r.jsx(p,{value:n,onValueChange:e,range:!0}),r.jsxs("div",{className:s.infoContainer,children:[r.jsx("p",{children:'Try typing: "12/01/2024 - 12/31/2024"'}),r.jsx("p",{children:"Validation happens on blur"}),r.jsx("p",{children:"Invalid format resets to empty"}),r.jsxs("p",{children:["Current value: ",JSON.stringify(n)]})]})]})}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...v.parameters?.docs?.source},description:{story:"Date range input - unified input field for start and end dates",...v.parameters?.docs?.description}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    defaultValue: '2024-12-25'
  }
}`,...w.parameters?.docs?.source},description:{story:"Single date input with pre-filled value",...w.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerRange,
    defaultValue: ['2024-12-01', '2024-12-31'],
    range: true
  }
}`,...h.parameters?.docs?.source},description:{story:"Range input with pre-filled values",...h.parameters?.docs?.description}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:"Date input with min and max constraints",...B.parameters?.docs?.description}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  args: {
    className: styles.containerSingle,
    value: '2024-12-25',
    disabled: true
  }
}`,...C.parameters?.docs?.source},description:{story:"Disabled date input",...C.parameters?.docs?.description}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source},description:{story:"Manual typing demonstration",...b.parameters?.docs?.description}}};const re=["Default","RangeMode","WithDefaultValue","RangeWithDefaultValue","WithMinMax","Disabled","ReadOnly","ControlledOpen","Uncontrolled","ManualTyping"];export{D as ControlledOpen,y as Default,C as Disabled,b as ManualTyping,v as RangeMode,h as RangeWithDefaultValue,f as ReadOnly,x as Uncontrolled,w as WithDefaultValue,B as WithMinMax,re as __namedExportsOrder,ae as default};
