import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DFsJRFlx.js";import{D as v}from"./ds-text-input-CW63Gm57.js";import{D as T}from"./ds-icon-CG8akOCs.js";import{c as N}from"./index-1uylLdSz.js";import{m as _,D as E}from"./ds-table-FnBhwzrz.js";import{D as b}from"./ds-button-BIYnaQ6c.js";import{t as I}from"./ds-text-input.types-CA2yGyah.js";import"./preload-helper-PPVm8Dsz.js";import"./index-b-fAkZh9.js";import"./index-C9golk1h.js";import"./core-table-BPupOUiU.js";import"./ds-typography-Dr08trYh.js";import"./index-bURg9Ua5.js";import"./index-0pRetntD.js";import"./ds-checkbox-DxGKxl7h.js";import"./index-3fyxn1xP.js";import"./index-CBDmAQoI.js";import"./ds-dropdown-menu-BSaABW-G.js";import"./index-DoqLBWPE.js";import"./Combination-Dd_CAp65.js";import"./index-BnMhgcZa.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-CoZ5oa_V.js";import"./portal-BOFLLrhg.js";import"./create-split-props-u5h9OPvL.js";import"./index-DPut8IaU.js";import"./use-locale-context-DisXweXp.js";import"./use-presence-JVP2hp3O.js";import"./index-a__yfbkE.js";import"./index-ChdAtdFv.js";import"./ds-button-legacy-BA3_ViMb.js";import"./ds-button-new-ZrR7NELz.js";const D="_expandableInput_14f8h_1",V="_expanded_14f8h_5",j="_trigger_14f8h_9",G="_clearTrigger_14f8h_28",k="_dirty_14f8h_34",w="_inputExpander_14f8h_38",i={expandableInput:D,expanded:V,trigger:j,clearTrigger:G,dirty:k,inputExpander:w};function x({onClear:e,onExpandChange:s,icon:r,...t}){const[l,S]=c.useState(!1),[y,C]=c.useState(!1),o=c.useRef(null),f=n=>{S(n),s?.(n),n||C(!1)};return a.jsx(v,{...t,ref:_(o,t.ref),tabIndex:l?0:-1,className:N(t.className,i.expandableInput,l&&i.expanded,y&&i.dirty),onChange:n=>{t.onChange?.(n),C(!0)},onBlur:n=>{t.onBlur?.(n),!y&&!o.current?.value&&f(!1)},slots:{inputWrapper:z,startAdornment:a.jsx("button",{type:"button",className:i.trigger,"aria-label":"Open text input","aria-hidden":l,tabIndex:l?-1:0,onClick:()=>{t.disabled||(f(!0),o.current?.focus())},children:a.jsx(T,{icon:r,size:"small"})}),endAdornment:a.jsx(b,{design:"v1.2",size:"small",buttonType:"tertiary",variant:"filled",className:i.clearTrigger,onClick:()=>{f(!1),o.current&&(o.current.blur(),o.current.value=""),e?.()},children:"Clear"})}})}function z({children:e}){return a.jsx("div",{className:i.inputExpander,children:e})}x.__docgenInfo={description:"",methods:[],displayName:"DsExpandableTextInput",props:{icon:{required:!0,tsType:{name:"union",raw:"IconName | FunctionComponent<SVGProps<SVGSVGElement>>",elements:[{name:"union",raw:"MaterialIconName | CustomIconName",elements:[{name:"unknown"},{name:"unknown"}]},{name:"FunctionComponent",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FunctionComponent<SVGProps<SVGSVGElement>>"}]},description:"The icon to display inside the expandable input trigger button"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the clear action is triggered"},onExpandChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback fired when the expanded state changes"}},composes:["Omit"]};const xe={title:"Design System/ExpandableTextInput",component:x,parameters:{layout:"centered",docs:{description:{component:"An expandable animated text input"}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:I,description:"The size of the input field"},disabled:{control:"boolean",description:"Whether the input is disabled"},placeholder:{control:"text",description:"The placeholder text"}}},p={args:{icon:"search"}},d={args:{icon:"search_insights"}},m={args:{icon:"search",placeholder:"Type to search"}},u={args:{icon:"search",placeholder:"Look at the console",onExpandChange:e=>{console.log("Expanded:",e)}}},h={render:function(){const[s,r]=c.useState("");return a.jsx(x,{icon:"search",value:s,onChange:t=>r(t.target.value),onClear:()=>r("")})}},B=[{accessorKey:"firstName",header:"First Name",cell:e=>e.getValue()},{accessorKey:"lastName",header:"Last Name",cell:e=>e.getValue()},{accessorKey:"age",header:"Age",cell:e=>e.getValue()}],F=[{id:"1",firstName:"Tanner",lastName:"Linsley",age:33},{id:"2",firstName:"Kevin",lastName:"Fine",age:28},{id:"3",firstName:"John",lastName:"Doe",age:45},{id:"4",firstName:"Jane",lastName:"Smith",age:30},{id:"5",firstName:"Peter",lastName:"Jones",age:22}],g={render:function(){const[s,r]=c.useState("");return a.jsxs("div",{style:{width:"500px"},children:[a.jsxs("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"end",gap:"8px"},children:[a.jsx(x,{icon:"search",placeholder:"Type to search...",value:s,onChange:t=>r(t.target.value),onClear:()=>r("")}),a.jsx(b,{size:"small",children:"Click"})]}),a.jsx(E,{columns:B,data:F,columnFilters:[{id:"firstName",value:s}]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search_insights'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Type to search'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Look at the console',
    onExpandChange: expanded => {
      console.log('Expanded:', expanded);
    }
  }
}`,...u.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [value, setValue] = useState('');
    return <DsExpandableTextInput icon="search" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};const fe=["Default","CustomIcon","Placeholder","ExpandChange","Controlled","WithTable"];export{h as Controlled,d as CustomIcon,p as Default,u as ExpandChange,m as Placeholder,g as WithTable,fe as __namedExportsOrder,xe as default};
