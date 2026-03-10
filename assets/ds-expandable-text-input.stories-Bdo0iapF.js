import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as m}from"./iframe-DqXDffqa.js";import{D as H}from"./ds-text-input-DmXkd9FK.js";import{D as S}from"./ds-icon-CnIgB9vW.js";import{c as T}from"./index-CAjgkSpS.js";import{m as _}from"./merge-refs-DX9dreSa.js";import{D as R}from"./ds-button-Dq5XbDIq.js";import{t as D}from"./ds-text-input.types-CA2yGyah.js";import"./ds-checkbox-CAERozv-.js";import"./range-filter-Bltv5tcf.js";import{D as L}from"./ds-table-Dchv7gCx.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-button-legacy-BWsOcf_q.js";import"./ds-button-new-ityBlADU.js";import"./index-B955zj3j.js";import"./index-CZsEDmsN.js";import"./index-CSIYGFIN.js";import"./index-CR_tVwKq.js";import"./index-DADBUCkz.js";import"./ds-typography-DbmtArz4.js";import"./index-CXdJNNcI.js";import"./core-table-5KFk0K6T.js";import"./ds-dropdown-menu-DMMa9TYb.js";import"./index-D-24R-WC.js";import"./Combination-CGNkEgJp.js";import"./index-Cl02rsvb.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-yA0cQYLJ.js";import"./portal-D4vfPPNn.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-BFjg08qZ.js";import"./create-anatomy-BzmhCF0M.js";import"./use-presence-DiNoUmYw.js";import"./set-Dm3oMbeM.js";import"./raf-CC9hSMXO.js";import"./computed-style-BZ9EjscZ.js";import"./event-CBXSxTbR.js";import"./index-CelOZJL-.js";import"./get-styles--oj4Xnc1.js";import"./typeahead-CK7WldbO.js";import"./query-CjgVAlRR.js";import"./initial-focus-Dzo7zCA_.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CVhZDAiu.js";import"./navigate-8IHDWOM4.js";const I="_expandableInput_14f8h_1",N="_expanded_14f8h_5",W="_trigger_14f8h_9",O="_clearTrigger_14f8h_28",j="_dirty_14f8h_34",G="_inputExpander_14f8h_38",u={expandableInput:I,expanded:N,trigger:W,clearTrigger:O,dirty:j,inputExpander:G};function C({onClear:a,onExpandChange:i,icon:n,...e}){const t=!!(e.value??e.defaultValue),[s,V]=m.useState(t),[k,E]=m.useState(t),p=m.useRef(null),f=c=>{V(c),i?.(c),c||E(!1)};return r.jsx(H,{...e,ref:_(p,e.ref),tabIndex:s?0:-1,className:T(e.className,u.expandableInput,s&&u.expanded,k&&u.dirty),onChange:c=>{e.onChange?.(c),E(!!c.target.value)},onBlur:c=>{e.onBlur?.(c),(e.value??p.current?.value)||f(!1)},slots:{inputWrapper:F,startAdornment:r.jsx("button",{type:"button",className:u.trigger,"aria-label":"Open text input","aria-hidden":s,tabIndex:s?-1:0,onClick:()=>{e.disabled||(f(!0),p.current?.focus())},children:r.jsx(S,{icon:n,size:"small"})}),endAdornment:r.jsx(R,{design:"v1.2",size:"small",buttonType:"tertiary",variant:"filled",className:u.clearTrigger,onClick:()=>{f(!1),p.current&&(p.current.blur(),p.current.value=""),a?.()},children:"Clear"})}})}function F({children:a}){return r.jsx("div",{className:u.inputExpander,children:a})}C.__docgenInfo={description:"",methods:[],displayName:"DsExpandableTextInput",props:{icon:{required:!0,tsType:{name:"union",raw:"IconName | FunctionComponent<SVGProps<SVGSVGElement>>",elements:[{name:"union",raw:"MaterialIconName | CustomIconName",elements:[{name:"unknown"},{name:"unknown"}]},{name:"FunctionComponent",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FunctionComponent<SVGProps<SVGSVGElement>>"}]},description:"The icon to display inside the expandable input trigger button"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the clear action is triggered"},onExpandChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback fired when the expanded state changes"}},composes:["Omit"]};const{expect:o,fn:d,userEvent:l,within:b}=__STORYBOOK_MODULE_TEST__,We={title:"Design System/ExpandableTextInput",component:C,parameters:{layout:"centered",docs:{description:{component:"An expandable animated text input"}}},argTypes:{size:{control:{type:"select"},options:D,description:"The size of the input field"},onExpandChange:{action:"expand change"},disabled:{control:"boolean",description:"Whether the input is disabled"},placeholder:{control:"text",description:"The placeholder text"}}},x={args:{icon:"search"},play:async({canvasElement:a})=>{const i=b(a),n=i.getByRole("button",{name:"Open text input"});await o(n).toBeInTheDocument(),await o(n).toHaveAttribute("aria-hidden","false");const e=i.getByRole("textbox");await o(e).toBeInTheDocument()}},g={args:{icon:"search_insights"}},h={args:{icon:"search",placeholder:"Type to search"}},y={args:{icon:"search",placeholder:"Look at the console",onExpandChange:d(),onClear:d()},play:async({args:a,canvasElement:i,step:n})=>{const e=b(i);await n("Expand flow",async()=>{const t=e.getByRole("button",{name:"Open text input"});await l.click(t);const s=e.getByRole("textbox");await o(s).toHaveFocus(),await o(a.onExpandChange).toHaveBeenLastCalledWith(!0)}),await n("Clear flow - with button",async()=>{const t=e.getByRole("textbox");await l.type(t,"test text");const s=e.getByRole("button",{name:"Clear"});await l.click(s),await o(a.onClear).toHaveBeenCalled(),await o(a.onExpandChange).toHaveBeenLastCalledWith(!1),await o(t).toHaveValue("")}),await n("Clear flow - by deleting all text",async()=>{const t=e.getByRole("button",{name:"Open text input"});await l.click(t);const s=e.getByRole("textbox");await l.type(s,"test"),await l.clear(s),await l.click(i),await o(a.onExpandChange).toHaveBeenLastCalledWith(!1)}),await n("Blur without typing",async()=>{const t=e.getByRole("button",{name:"Open text input"});await l.click(t),await l.click(i),await o(a.onExpandChange).toHaveBeenLastCalledWith(!1)}),await n("Blur with value - stays expanded",async()=>{const t=e.getByRole("button",{name:"Open text input"});await l.click(t);const s=e.getByRole("textbox");await l.type(s,"test text"),await l.click(i),await o(a.onExpandChange).toHaveBeenLastCalledWith(!0)})}},w={args:{value:"query",onExpandChange:d(),onClear:d()},render:function(i){const[n,e]=m.useState(i.value);return r.jsx(C,{icon:"search",value:n,onExpandChange:i.onExpandChange,onChange:t=>e(t.target.value),onClear:()=>{e(""),i.onClear?.()}})},play:async({args:a,canvasElement:i,step:n})=>{const e=b(i);await n("Starts expanded with initial value",async()=>{const t=e.getByRole("textbox");await o(t).toHaveValue("query")}),await n("Clear button is visible",async()=>{const t=e.getByRole("button",{name:"Clear"});await o(t).toBeVisible()}),await n("Clear resets value and collapses",async()=>{const t=e.getByRole("button",{name:"Clear"});await l.click(t),await o(a.onClear).toHaveBeenCalled(),await o(a.onExpandChange).toHaveBeenLastCalledWith(!1);const s=e.getByRole("textbox");await o(s).toHaveValue("")}),await n("Re-expand, type, backspace to empty, blur collapses",async()=>{const t=e.getByRole("button",{name:"Open text input"});await l.click(t),await o(a.onExpandChange).toHaveBeenLastCalledWith(!0);const s=e.getByRole("textbox");await l.type(s,"hello"),await l.clear(s),await l.click(i),await o(a.onExpandChange).toHaveBeenLastCalledWith(!1)})}},v={args:{icon:"search",defaultValue:"initial search",onClear:d(),onExpandChange:d()},play:async({args:a,canvasElement:i,step:n})=>{const e=b(i);await n("Starts expanded with defaultValue",async()=>{const t=e.getByRole("textbox");await o(t).toHaveValue("initial search")}),await n("Clear button is visible",async()=>{const t=e.getByRole("button",{name:"Clear"});await o(t).toBeVisible()}),await n("Clear collapses and resets",async()=>{const t=e.getByRole("button",{name:"Clear"});await l.click(t),await o(a.onClear).toHaveBeenCalled(),await o(a.onExpandChange).toHaveBeenLastCalledWith(!1);const s=e.getByRole("textbox");await o(s).toHaveValue("")}),await n("Re-expand, backspace to empty, blur collapses",async()=>{const t=e.getByRole("button",{name:"Open text input"});await l.click(t),await o(a.onExpandChange).toHaveBeenLastCalledWith(!0);const s=e.getByRole("textbox");await l.type(s,"something"),await l.clear(s),await l.click(i),await o(a.onExpandChange).toHaveBeenLastCalledWith(!1)})}},q=[{accessorKey:"firstName",header:"First Name",cell:a=>a.getValue()},{accessorKey:"lastName",header:"Last Name",cell:a=>a.getValue()},{accessorKey:"age",header:"Age",cell:a=>a.getValue()}],z=[{id:"1",firstName:"Tanner",lastName:"Linsley",age:33},{id:"2",firstName:"Kevin",lastName:"Fine",age:28},{id:"3",firstName:"John",lastName:"Doe",age:45},{id:"4",firstName:"Jane",lastName:"Smith",age:30},{id:"5",firstName:"Peter",lastName:"Jones",age:22}],B={render:function(){const[i,n]=m.useState("");return r.jsxs("div",{style:{width:"500px"},children:[r.jsxs("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"end",gap:"8px"},children:[r.jsx(C,{icon:"search",placeholder:"Type to search...",value:i,onChange:e=>n(e.target.value),onClear:()=>n("")}),r.jsx(R,{size:"small",children:"Click"})]}),r.jsx(L,{columns:q,data:z,columnFilters:[{id:"firstName",value:i}]})]})}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search_insights'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Type to search'
  }
}`,...h.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
    await step('Clear flow - by deleting all text', async () => {
      const iconButton = canvas.getByRole('button', {
        name: 'Open text input'
      });
      await userEvent.click(iconButton);
      const input = canvas.getByRole('textbox');
      await userEvent.type(input, 'test');
      await userEvent.clear(input);
      await userEvent.click(canvasElement);
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
    });
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
}`,...y.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'query',
    onExpandChange: fn(),
    onClear: fn()
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <DsExpandableTextInput icon="search" value={value} onExpandChange={args.onExpandChange} onChange={e => setValue(e.target.value)} onClear={() => {
      setValue('');
      args.onClear?.();
    }} />;
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Starts expanded with initial value', async () => {
      const input = canvas.getByRole('textbox');
      await expect(input).toHaveValue('query');
    });
    await step('Clear button is visible', async () => {
      const clearButton = canvas.getByRole('button', {
        name: 'Clear'
      });
      await expect(clearButton).toBeVisible();
    });
    await step('Clear resets value and collapses', async () => {
      const clearButton = canvas.getByRole('button', {
        name: 'Clear'
      });
      await userEvent.click(clearButton);
      await expect(args.onClear).toHaveBeenCalled();
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
      const input = canvas.getByRole('textbox');
      await expect(input).toHaveValue('');
    });
    await step('Re-expand, type, backspace to empty, blur collapses', async () => {
      const iconButton = canvas.getByRole('button', {
        name: 'Open text input'
      });
      await userEvent.click(iconButton);
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(true);
      const input = canvas.getByRole('textbox');
      await userEvent.type(input, 'hello');
      await userEvent.clear(input);
      await userEvent.click(canvasElement);
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
    });
  }
}`,...w.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    defaultValue: 'initial search',
    onClear: fn(),
    onExpandChange: fn()
  },
  play: async ({
    args,
    canvasElement,
    step
  }) => {
    const canvas = within(canvasElement);
    await step('Starts expanded with defaultValue', async () => {
      const input = canvas.getByRole('textbox');
      await expect(input).toHaveValue('initial search');
    });
    await step('Clear button is visible', async () => {
      const clearButton = canvas.getByRole('button', {
        name: 'Clear'
      });
      await expect(clearButton).toBeVisible();
    });
    await step('Clear collapses and resets', async () => {
      const clearButton = canvas.getByRole('button', {
        name: 'Clear'
      });
      await userEvent.click(clearButton);
      await expect(args.onClear).toHaveBeenCalled();
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
      const input = canvas.getByRole('textbox');
      await expect(input).toHaveValue('');
    });
    await step('Re-expand, backspace to empty, blur collapses', async () => {
      const iconButton = canvas.getByRole('button', {
        name: 'Open text input'
      });
      await userEvent.click(iconButton);
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(true);
      const input = canvas.getByRole('textbox');
      await userEvent.type(input, 'something');
      await userEvent.clear(input);
      await userEvent.click(canvasElement);
      await expect(args.onExpandChange).toHaveBeenLastCalledWith(false);
    });
  }
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source}}};const Oe=["Default","CustomIcon","Placeholder","ExpandChange","Controlled","DefaultValue","WithTable"];export{w as Controlled,g as CustomIcon,x as Default,v as DefaultValue,y as ExpandChange,h as Placeholder,B as WithTable,Oe as __namedExportsOrder,We as default};
