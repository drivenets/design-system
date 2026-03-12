import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as c}from"./iframe-ByIveL06.js";import{D as _}from"./ds-text-input-F3YMAMHD.js";import{D}from"./ds-icon-DbCKjb5T.js";import{c as I}from"./index-Bm4Gdwiw.js";import{m as E}from"./merge-refs-DX9dreSa.js";import{D as C}from"./ds-button-DUJHt8Ia.js";import{t as j}from"./ds-text-input.types-CA2yGyah.js";import"./ds-checkbox-n0LUB8hy.js";import"./range-filter-prcIKh0Q.js";import{D as G}from"./ds-table-MkPnooV2.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-button-legacy-DUBeOvwD.js";import"./ds-button-new-Cc4jcDSd.js";import"./index-xsX5p1nH.js";import"./index-DTZ0pzHf.js";import"./index-DriOsA20.js";import"./index-DzOxUZoY.js";import"./index--PzZISUg.js";import"./ds-typography-Dpk1RlKZ.js";import"./index-DNNzYmse.js";import"./core-table-B5qP2Bla.js";import"./ds-dropdown-menu-BOINDQM9.js";import"./index-BQhE3VxO.js";import"./Combination-B9ybZnw2.js";import"./index-CQ3-Mnt1.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-044-HCAb.js";import"./portal-Bh0Fxmxm.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-q7sJtfgv.js";import"./create-anatomy-Cj7KKSv4.js";import"./use-presence-DVaxF63z.js";import"./set-mK04LDSn.js";import"./raf-CC9hSMXO.js";import"./computed-style-Bp5-x_Zc.js";import"./event-CBXSxTbR.js";import"./index-YSCCa2uU.js";import"./get-styles-CqJxaWY9.js";import"./typeahead-42u2pH_j.js";import"./query-CjgVAlRR.js";import"./initial-focus-COrp_BM5.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-DGkXvxDx.js";import"./navigate-C_lYMLDm.js";const z="_expandableInput_14f8h_1",w="_expanded_14f8h_5",B="_trigger_14f8h_9",k="_clearTrigger_14f8h_28",F="_dirty_14f8h_34",P="_inputExpander_14f8h_38",l={expandableInput:z,expanded:w,trigger:B,clearTrigger:k,dirty:F,inputExpander:P};function y({onClear:e,onExpandChange:s,icon:o,size:n,...a}){const v=!!(a.value??a.defaultValue),[m,T]=c.useState(v),[V,b]=c.useState(v),i=c.useRef(null),S=r=>{T(r),s?.(r),r||b(!1)},N=n==="small"?"tiny":"small";return t.jsx(_,{...a,size:n,ref:E(i,a.ref),tabIndex:m?0:-1,className:I(a.className,l.expandableInput,m&&l.expanded,V&&l.dirty),onChange:r=>{a.onChange?.(r),b(!!r.target.value)},onBlur:r=>{a.onBlur?.(r),(a.value??i.current?.value)||S(!1)},slots:{inputWrapper:R,startAdornment:t.jsx("button",{type:"button",className:l.trigger,"aria-label":"Open text input","aria-hidden":m,tabIndex:m?-1:0,onClick:()=>{a.disabled||(S(!0),i.current?.focus())},children:t.jsx(D,{icon:o,size:"small"})}),endAdornment:t.jsx(C,{design:"v1.2",size:N,buttonType:"tertiary",variant:"filled",className:l.clearTrigger,onClick:()=>{S(!1),i.current&&(i.current.blur(),i.current.value=""),e?.()},children:"Clear"})}})}function R({children:e}){return t.jsx("div",{className:l.inputExpander,children:e})}y.__docgenInfo={description:"",methods:[],displayName:"DsExpandableTextInput",props:{icon:{required:!0,tsType:{name:"union",raw:"IconName | FunctionComponent<SVGProps<SVGSVGElement>>",elements:[{name:"union",raw:"MaterialIconName | CustomIconName",elements:[{name:"unknown"},{name:"unknown"}]},{name:"FunctionComponent",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FunctionComponent<SVGProps<SVGSVGElement>>"}]},description:"The icon to display inside the expandable input trigger button"},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Callback fired when the clear action is triggered"},onExpandChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(expanded: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"expanded"}],return:{name:"void"}}},description:"Callback fired when the expanded state changes"}},composes:["Omit"]};const Be={title:"Design System/ExpandableTextInput",component:y,parameters:{layout:"centered",docs:{description:{component:"An expandable animated text input"}}},argTypes:{size:{control:{type:"select"},options:j,description:"The size of the input field"},onExpandChange:{action:"expand change"},disabled:{control:"boolean",description:"Whether the input is disabled"},placeholder:{control:"text",description:"The placeholder text"}}},p={args:{icon:"search"}},u={args:{icon:"search",size:"small"}},d={args:{icon:"search_insights"}},g={args:{icon:"search",placeholder:"Type to search"}},h={args:{value:"query"},render:function(s){const[o,n]=c.useState(s.value);return t.jsx(y,{icon:"search",value:o,onChange:a=>n(a.target.value),onClear:()=>n("")})}},f={args:{icon:"search",defaultValue:"initial search"}},q=[{accessorKey:"firstName",header:"First Name",cell:e=>e.getValue()},{accessorKey:"lastName",header:"Last Name",cell:e=>e.getValue()},{accessorKey:"age",header:"Age",cell:e=>e.getValue()}],A=[{id:"1",firstName:"Tanner",lastName:"Linsley",age:33},{id:"2",firstName:"Kevin",lastName:"Fine",age:28},{id:"3",firstName:"John",lastName:"Doe",age:45},{id:"4",firstName:"Jane",lastName:"Smith",age:30},{id:"5",firstName:"Peter",lastName:"Jones",age:22}],x={render:function(){const[s,o]=c.useState("");return t.jsxs("div",{style:{width:"500px"},children:[t.jsxs("div",{style:{marginBottom:"20px",display:"flex",justifyContent:"end",gap:"8px"},children:[t.jsx(y,{icon:"search",placeholder:"Type to search...",value:s,onChange:n=>o(n.target.value),onClear:()=>o("")}),t.jsx(C,{size:"small",children:"Click"})]}),t.jsx(G,{columns:q,data:A,columnFilters:[{id:"firstName",value:s}]})]})}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    size: 'small'
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search_insights'
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Type to search'
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'query'
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <DsExpandableTextInput icon="search" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    defaultValue: 'initial search'
  }
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};const ke=["Default","SmallSize","CustomIcon","Placeholder","Controlled","DefaultValue","WithTable"];export{h as Controlled,d as CustomIcon,p as Default,f as DefaultValue,g as Placeholder,u as SmallSize,x as WithTable,ke as __namedExportsOrder,Be as default};
