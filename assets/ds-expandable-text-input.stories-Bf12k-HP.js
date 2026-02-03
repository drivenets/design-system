import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-DDI3yISY.js";import{D as v}from"./ds-text-input-x3E3WNCf.js";import{D as T}from"./ds-icon-DuIwqTqu.js";import{c as _}from"./index-CrNJhdFw.js";import{m as E,D as N}from"./ds-table-BHSsrYCf.js";import{D as b}from"./ds-button-BhwpQZM9.js";import{t as D}from"./ds-text-input.types-CA2yGyah.js";import"./preload-helper-PPVm8Dsz.js";import"./index-7XehxkZD.js";import"./index-CaQAhqJ6.js";import"./core-table-kFoU2Vt3.js";import"./ds-typography-BYOo5D25.js";import"./index-CloTo-u5.js";import"./index-DMWY3f1m.js";import"./ds-checkbox-BOX-aPLN.js";import"./index-Do6PxQVK.js";import"./index-CxGySIIX.js";import"./ds-dropdown-menu-bQa_x5zd.js";import"./index-1Uk203GW.js";import"./Combination-BgxE8sOP.js";import"./index-DbIp7eDO.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-D-qVNONF.js";import"./portal-cZEzFh4n.js";import"./create-split-props-u5h9OPvL.js";import"./index-G0tcEFpE.js";import"./use-locale-context-BEbBS7y1.js";import"./use-presence-CyZeoMuJ.js";import"./index-Sy266ej9.js";import"./index-C91md4Pw.js";import"./ds-button-legacy-ZZfLtWBl.js";import"./ds-button-new-CbkPNhdT.js";const I="_expandableInput_14f8h_1",V="_expanded_14f8h_5",j="_trigger_14f8h_9",R="_clearTrigger_14f8h_28",G="_dirty_14f8h_34",k="_inputExpander_14f8h_38",i={expandableInput:I,expanded:V,trigger:j,clearTrigger:R,dirty:G,inputExpander:k};function x({onClear:e,onExpandChange:s,icon:r,...t}){const[l,S]=c.useState(!1),[y,C]=c.useState(!1),o=c.useRef(null),f=n=>{S(n),s?.(n),n||C(!1)};return a.jsx(v,{...t,ref:E(o,t.ref),tabIndex:l?0:-1,className:_(t.className,i.expandableInput,l&&i.expanded,y&&i.dirty),onChange:n=>{t.onChange?.(n),C(!0)},onBlur:n=>{t.onBlur?.(n),!y&&!o.current?.value&&f(!1)},slots:{inputWrapper:w,startAdornment:a.jsx("button",{type:"button",className:i.trigger,"aria-label":"Open text input","aria-hidden":l,tabIndex:l?-1:0,onClick:()=>{t.disabled||(f(!0),o.current?.focus())},children:a.jsx(T,{icon:r,size:"small"})}),endAdornment:a.jsx(b,{design:"v1.2",size:"small",buttonType:"tertiary",variant:"filled",className:i.clearTrigger,onClick:()=>{f(!1),o.current&&(o.current.blur(),o.current.value=""),e?.()},children:"Clear"})}})}function w({children:e}){return a.jsx("div",{className:i.inputExpander,children:e})}x.__docgenInfo={description:"",methods:[],displayName:"DsExpandableTextInput",props:{icon:{required:!0,tsType:{name:"union",raw:"IconName | React.FunctionComponent<React.SVGProps<SVGSVGElement>>",elements:[{name:"unknown"},{name:"ReactFunctionComponent",raw:"React.FunctionComponent<React.SVGProps<SVGSVGElement>>",elements:[{name:"ReactSVGProps",raw:"React.SVGProps<SVGSVGElement>",elements:[{name:"SVGSVGElement"}]}]}]},description:"The icon to display inside the expandable input trigger button"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the clear action is triggered"},onExpandChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback fired when the expanded state changes"}},composes:["Omit"]};const xe={title:"Design System/ExpandableTextInput",component:x,parameters:{layout:"centered",docs:{description:{component:"An expandable animated text input"}}},tags:["autodocs"],argTypes:{size:{control:{type:"select"},options:D,description:"The size of the input field"},disabled:{control:"boolean",description:"Whether the input is disabled"},placeholder:{control:"text",description:"The placeholder text"}}},p={args:{icon:"search"}},d={args:{icon:"search_insights"}},m={args:{icon:"search",placeholder:"Type to search"}},u={args:{icon:"search",placeholder:"Look at the console",onExpandChange:e=>{console.log("Expanded:",e)}}},h={render:function(){const[s,r]=c.useState("");return a.jsx(x,{icon:"search",value:s,onChange:t=>r(t.target.value),onClear:()=>r("")})}},z=[{accessorKey:"firstName",header:"First Name",cell:e=>e.getValue()},{accessorKey:"lastName",header:"Last Name",cell:e=>e.getValue()},{accessorKey:"age",header:"Age",cell:e=>e.getValue()}],B=[{id:"1",firstName:"Tanner",lastName:"Linsley",age:33},{id:"2",firstName:"Kevin",lastName:"Fine",age:28},{id:"3",firstName:"John",lastName:"Doe",age:45},{id:"4",firstName:"Jane",lastName:"Smith",age:30},{id:"5",firstName:"Peter",lastName:"Jones",age:22}],g={render:function(){const[s,r]=c.useState("");return a.jsxs("div",{style:{width:"500px"},children:[a.jsxs("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"end",gap:"8px"},children:[a.jsx(x,{icon:"search",placeholder:"Type to search...",value:s,onChange:t=>r(t.target.value),onClear:()=>r("")}),a.jsx(b,{size:"small",children:"Click"})]}),a.jsx(N,{columns:z,data:B,columnFilters:[{id:"firstName",value:s}]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
