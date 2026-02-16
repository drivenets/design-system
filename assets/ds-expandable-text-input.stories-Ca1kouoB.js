import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as d}from"./iframe-CYjJFujY.js";import{D as S}from"./ds-text-input-D78cMqV7.js";import{D as R}from"./ds-icon-DIkq1sMi.js";import{c as _}from"./index-B4YxvotJ.js";import{m as D}from"./merge-refs-DX9dreSa.js";import{D as E}from"./ds-button-CEMYd-ZE.js";import{t as N}from"./ds-text-input.types-CA2yGyah.js";import{D as I}from"./ds-table-DNU4L4xl.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-button-legacy-DWDTBqFT.js";import"./ds-button-new-DHE429te.js";import"./index-lXO_8P3h.js";import"./index-BG2EI6Zy.js";import"./core-table-2ddyPvAr.js";import"./ds-typography-CsGLi9oh.js";import"./index-CSrhfYAi.js";import"./index-D_tHYuTO.js";import"./ds-checkbox-BSslz69T.js";import"./index-DrmmZOdo.js";import"./index-BjtV422u.js";import"./ds-dropdown-menu-BgDAkaX9.js";import"./index-DsrKG32h.js";import"./Combination-BcoT_00i.js";import"./index-DwHv_gPP.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-nfgU5Fk1.js";import"./portal-CRf1flU4.js";import"./create-split-props-u5h9OPvL.js";import"./index-BgwgYCXy.js";import"./use-locale-context-yKBflJpl.js";import"./use-presence-KEbQceCW.js";import"./index-CjZdluF_.js";import"./index-QN2Gxh6S.js";const k="_expandableInput_14f8h_1",V="_expanded_14f8h_5",O="_trigger_14f8h_9",H="_clearTrigger_14f8h_28",j="_dirty_14f8h_34",L="_inputExpander_14f8h_38",u={expandableInput:k,expanded:V,trigger:O,clearTrigger:H,dirty:j,inputExpander:L};function w({onClear:t,onExpandChange:o,icon:a,...e}){const[n,c]=d.useState(!1),[B,C]=d.useState(!1),p=d.useRef(null),f=l=>{c(l),o?.(l),l||C(!1)};return s.jsx(S,{...e,ref:D(p,e.ref),tabIndex:n?0:-1,className:_(e.className,u.expandableInput,n&&u.expanded,B&&u.dirty),onChange:l=>{e.onChange?.(l),C(!0)},onBlur:l=>{e.onBlur?.(l),!B&&!p.current?.value&&f(!1)},slots:{inputWrapper:W,startAdornment:s.jsx("button",{type:"button",className:u.trigger,"aria-label":"Open text input","aria-hidden":n,tabIndex:n?-1:0,onClick:()=>{e.disabled||(f(!0),p.current?.focus())},children:s.jsx(R,{icon:a,size:"small"})}),endAdornment:s.jsx(E,{design:"v1.2",size:"small",buttonType:"tertiary",variant:"filled",className:u.clearTrigger,onClick:()=>{f(!1),p.current&&(p.current.blur(),p.current.value=""),t?.()},children:"Clear"})}})}function W({children:t}){return s.jsx("div",{className:u.inputExpander,children:t})}w.__docgenInfo={description:"",methods:[],displayName:"DsExpandableTextInput",props:{icon:{required:!0,tsType:{name:"union",raw:"IconName | FunctionComponent<SVGProps<SVGSVGElement>>",elements:[{name:"union",raw:"MaterialIconName | CustomIconName",elements:[{name:"unknown"},{name:"unknown"}]},{name:"FunctionComponent",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FunctionComponent<SVGProps<SVGSVGElement>>"}]},description:"The icon to display inside the expandable input trigger button"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the clear action is triggered"},onExpandChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback fired when the expanded state changes"}},composes:["Omit"]};const{expect:r,fn:b,userEvent:i,within:T}=__STORYBOOK_MODULE_TEST__,Be={title:"Design System/ExpandableTextInput",component:w,parameters:{layout:"centered",docs:{description:{component:"An expandable animated text input"}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:N,description:"The size of the input field"},onExpandChange:{action:"expand change"},disabled:{control:"boolean",description:"Whether the input is disabled"},placeholder:{control:"text",description:"The placeholder text"}}},m={args:{icon:"search"},play:async({canvasElement:t})=>{const o=T(t),a=o.getByRole("button",{name:"Open text input"});await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("aria-hidden","false");const e=o.getByRole("textbox");await r(e).toBeInTheDocument()}},h={args:{icon:"search_insights"}},x={args:{icon:"search",placeholder:"Type to search"}},g={args:{icon:"search",placeholder:"Look at the console",onExpandChange:b(),onClear:b()},play:async({args:t,canvasElement:o,step:a})=>{const e=T(o);await a("Expand flow",async()=>{const n=e.getByRole("button",{name:"Open text input"});await i.click(n);const c=e.getByRole("textbox");await r(c).toHaveFocus(),await r(t.onExpandChange).toHaveBeenLastCalledWith(!0)}),await a("Clear flow - with button",async()=>{const n=e.getByRole("textbox");await i.type(n,"test text");const c=e.getByRole("button",{name:"Clear"});await i.click(c),await r(t.onClear).toHaveBeenCalled(),await r(t.onExpandChange).toHaveBeenLastCalledWith(!1),await r(n).toHaveValue("")}),await a("Blur without typing",async()=>{const n=e.getByRole("button",{name:"Open text input"});await i.click(n),await i.click(o),await r(t.onExpandChange).toHaveBeenLastCalledWith(!1)}),await a("Blur with value - stays expanded",async()=>{const n=e.getByRole("button",{name:"Open text input"});await i.click(n);const c=e.getByRole("textbox");await i.type(c,"test text"),await i.click(o),await r(t.onExpandChange).toHaveBeenLastCalledWith(!0)})}},v={argTypes:{value:{control:"text",description:"The current value"},onChange:{action:"changed"},onClear:{action:"clear"}},args:{value:"query"},render:function(o){const[a,e]=d.useState(o.value);return s.jsx(w,{icon:"search",value:a,onChange:n=>e(n.target.value),onClear:()=>e("")})}},G=[{accessorKey:"firstName",header:"First Name",cell:t=>t.getValue()},{accessorKey:"lastName",header:"Last Name",cell:t=>t.getValue()},{accessorKey:"age",header:"Age",cell:t=>t.getValue()}],F=[{id:"1",firstName:"Tanner",lastName:"Linsley",age:33},{id:"2",firstName:"Kevin",lastName:"Fine",age:28},{id:"3",firstName:"John",lastName:"Doe",age:45},{id:"4",firstName:"Jane",lastName:"Smith",age:30},{id:"5",firstName:"Peter",lastName:"Jones",age:22}],y={render:function(){const[o,a]=d.useState("");return s.jsxs("div",{style:{width:"500px"},children:[s.jsxs("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"end",gap:"8px"},children:[s.jsx(w,{icon:"search",placeholder:"Type to search...",value:o,onChange:e=>a(e.target.value),onClear:()=>a("")}),s.jsx(E,{size:"small",children:"Click"})]}),s.jsx(I,{columns:G,data:F,columnFilters:[{id:"firstName",value:o}]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const iconButton = canvas.getByRole('button', {
      name: 'Open text input'
    });
    await expect(iconButton).toBeInTheDocument();
    await expect(iconButton).toHaveAttribute('aria-hidden', 'false');
    const input = canvas.getByRole('textbox');
    await expect(input).toBeInTheDocument();
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search_insights'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Type to search'
  }
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Look at the console',
    onExpandChange: fn(),
    onClear: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Expand flow', async () => {
      const iconButton = canvas.getByRole('button', {
        name: 'Open text input'
      });
      await userEvent.click(iconButton);
      const input = canvas.getByRole('textbox');
      await expect(input).toHaveFocus();
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(true);
    });
    await step('Clear flow - with button', async () => {
      const input = canvas.getByRole('textbox');
      await userEvent.type(input, 'test text');
      const clearButton = canvas.getByRole('button', {
        name: 'Clear'
      });
      await userEvent.click(clearButton);
      await expect(args.onClear).toHaveBeenCalled();
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
      await expect(input).toHaveValue('');
    });

    // TODO: Fails due to the component bug https://drivenets.atlassian.net/browse/AR-47261.
    // Uncomment when the bug is fixed.
    // await step('Clear flow - by deleting all text', async () => {
    // 	const iconButton = canvas.getByRole('button', { name: 'Open text input' });
    // 	await userEvent.click(iconButton);

    // 	const input = canvas.getByRole('textbox');
    // 	await userEvent.type(input, 'test');
    // 	await userEvent.clear(input);

    // 	await userEvent.click(canvasElement);
    // 	await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
    // });

    await step('Blur without typing', async () => {
      const iconButton = canvas.getByRole('button', {
        name: 'Open text input'
      });
      await userEvent.click(iconButton);
      await userEvent.click(canvasElement);
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
    });
    await step('Blur with value - stays expanded', async () => {
      const iconButton = canvas.getByRole('button', {
        name: 'Open text input'
      });
      await userEvent.click(iconButton);
      const input = canvas.getByRole('textbox');
      await userEvent.type(input, 'test text');
      await userEvent.click(canvasElement);
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(true);
    });
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  argTypes: {
    value: {
      control: 'text',
      description: 'The current value'
    },
    onChange: {
      action: 'changed'
    },
    onClear: {
      action: 'clear'
    }
  },
  args: {
    value: 'query'
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <DsExpandableTextInput icon="search" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
  // TODO: Fails due to the component bug https://drivenets.atlassian.net/browse/AR-47261.
  // Uncomment when the bug is fixed.
  // play: async ({ canvasElement }) => {
  // 	const canvas = within(canvasElement);

  // 	const input = canvas.getByRole('textbox');
  // 	await expect(input).toHaveValue('search');

  // 	const clearButton = canvas.getByRole('button', { name: 'Clear' });
  // 	await expect(clearButton).toBeVisible();
  // },
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [search, setSearch] = useState('');
    return <div style={{
      width: '500px'
    }}>
                <div style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'end',
        gap: '8px'
      }}>
                    <DsExpandableTextInput icon="search" placeholder="Type to search..." value={search} onChange={e => setSearch(e.target.value)} onClear={() => setSearch('')} />

                    <DsButton size="small">Click</DsButton>
                </div>
                <DsTable columns={columns} data={people} columnFilters={[{
        id: 'firstName',
        value: search
      }]} />
            </div>;
  }
}`,...y.parameters?.docs?.source}}};const Ce=["Default","CustomIcon","Placeholder","ExpandChange","Controlled","WithTable"];export{v as Controlled,h as CustomIcon,m as Default,g as ExpandChange,x as Placeholder,y as WithTable,Ce as __namedExportsOrder,Be as default};
