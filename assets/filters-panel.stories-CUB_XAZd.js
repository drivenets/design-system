import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as I}from"./iframe-CrKoyclE.js";import{D as R}from"./ds-icon-B3VL92JP.js";import{D as $}from"./ds-table-CCd9JXGs.js";import{D as j}from"./ds-button-CJk72Ddc.js";import{D as k}from"./ds-modal-DBe0zw7k.js";import{D as A}from"./ds-vertical-tabs-BVkLxRuP.js";import{D as F}from"./ds-typography-NpA8sy-N.js";import{D as K}from"./ds-chip-group-BcYXRkyH.js";import{D as Q}from"./ds-status-badge-Ds-d8wzl.js";import{D as Y}from"./ds-checkbox-C7M8CFkQ.js";import{D as S}from"./ds-text-input-tm9Sihjv.js";import{s as b}from"./ds-table.stories.module-DepcHETJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-B7MZ7Dst.js";import"./index-zpfBgx4-.js";import"./index-BR9ujVP8.js";import"./ds-dropdown-menu-CY8EQ7mF.js";import"./index-bm4-Gj90.js";import"./index-BpBDy8QV.js";import"./index-Bue7XJyq.js";import"./Combination-BHgmgM-w.js";import"./index-UC1doAsX.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-ok7lY3Kn.js";import"./index-C7FJVLc0.js";import"./portal-DacfcflF.js";import"./create-split-props-u5h9OPvL.js";import"./index-BaVJ3Qd-.js";import"./use-locale-context-DHT2xEWG.js";import"./use-presence-N_OTFOi1.js";import"./index-BibYMVKi.js";import"./index-DuqyvYPX.js";import"./ds-button-legacy-BVY0W3Vi.js";import"./ds-button-new-7hDcZWeC.js";import"./dialog-title-BZZgVYnM.js";import"./render-strategy-DRKZ9tbo.js";import"./index-B5DP01bl.js";import"./index-DmwhOuGH.js";import"./ds-chip-DFETvSom.js";function J(e,n){const l={};e.forEach(u=>{l[u.id]=u.initialValue});const[r,d]=I.useState(l),[f,p]=I.useState([]),[c,i]=I.useState([]),o=e.map(u=>({id:u.id,label:u.label,count:u.getActiveFiltersCount(r[u.id])})),m=n?n.map(u=>{const a=e.find(y=>y.id===u.id);if(a){const y=a.cellRenderer;return{...u,filterFn:a.columnFilterFn,...y&&{cell:T=>y(T.getValue())}}}return u}):[],g=(u,a)=>{d(y=>({...y,[u]:a}))},s=()=>{const u=[],a=[];e.forEach(y=>{const T=r[y.id];y.getActiveFiltersCount(T)>0&&u.push({id:y.id,value:T});const x=y.toChips(T);a.push(...x)}),p(u),i(a)},C=()=>{const u={};e.forEach(a=>{u[a.id]=a.reset()}),d(u),p([]),i([])};return{filterState:r,columnFilters:f,filterChips:c,filterNavItems:o,enhancedColumns:m,handlers:{updateFilter:g,applyFilters:s,clearAll:C,deleteChip:u=>{const a=typeof u.metadata?.key=="string"?u.metadata.key:void 0;if(!a)return;const y=e.find(D=>D.id===a);if(!y)return;const T=r[a],x=y.fromChip(u,T),M=[];if(e.forEach(D=>{const w=D.id===a?x:r[D.id],U=D.toChips(w);M.push(...U)}),M.length===0){C();return}d(D=>({...D,[a]:x})),y.getActiveFiltersCount(x)===0?p(D=>D.filter(w=>w.id!==a)):p(D=>D.map(w=>w.id===a?{id:a,value:x}:w)),i(M)}},renderFilterContent:u=>{const a=e.find(x=>x.id===u.id);if(!a)return null;const y=r[a.id],T=x=>g(a.id,x);return a.renderFilter(y,T)}}}function O(e){return{id:e.id,label:e.label,initialValue:e.initialValue,columnFilterFn:e.filterFn,cellRenderer:e.cellRenderer,toChips:e.toChips,fromChip:e.fromChip,getActiveFiltersCount:e.getActiveFiltersCount,reset:()=>e.initialValue,renderFilter:e.renderFilter}}const H=({items:e,renderer:n,selectedItems:l,onSelectionChange:r})=>{const d=(f,p)=>{r(p?[...l,f]:l.filter(c=>c.value!==f.value))};return e.map(f=>{const p=n?n(f):f.label,c=l.findIndex(i=>i.value===f.value)>-1;return t.jsx(Y,{label:p,checked:c,onCheckedChange:i=>d(f,i===!0)},JSON.stringify(f.value))})};function X(e){const{id:n,label:l,items:r,renderer:d,chipLabelTemplate:f=i=>`${l}: ${i.label}`,cellRenderer:p,getRowValue:c=i=>i.getValue(n)}=e;return O({id:n,label:l,initialValue:[],filterFn:(i,o,m)=>{if(m.length===0)return!0;const g=c(i);return m.some(s=>s.value===g)},cellRenderer:p,toChips:i=>i.map(o=>({id:`${n}_${o.value}`,label:f(o),metadata:{key:n,value:o.value}})),fromChip:(i,o)=>o.filter(m=>m.value!==i.metadata?.value),getActiveFiltersCount:i=>i.length,renderFilter:(i,o)=>t.jsx(H,{items:r,renderer:d,selectedItems:i,onSelectionChange:o})})}const Z="_container_u6rur_1",ee="_header_u6rur_9",te="_inputs_u6rur_15",ne="_inputGroup_u6rur_20",_={container:Z,header:ee,inputs:te,inputGroup:ne},q=({label:e,value:n,onChange:l,onClear:r})=>{const[d,f]=I.useState(n.from?.toString()||""),[p,c]=I.useState(n.to?.toString()||""),i=s=>{f(s);const C=s?parseInt(s,10):void 0;l({from:C,to:n.to})},o=s=>{c(s);const C=s?parseInt(s,10):void 0;l({from:n.from,to:C})},m=()=>{f(""),c(""),r&&r()},g=n.from!==void 0||n.to!==void 0;return t.jsxs("div",{className:_.container,children:[t.jsxs("div",{className:_.header,children:[t.jsx(F,{variant:"body-md-md",children:e}),g&&r&&t.jsx(j,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:m,children:"Clear"})]}),t.jsxs("div",{className:_.inputs,children:[t.jsxs("div",{className:_.inputGroup,children:[t.jsx(F,{variant:"body-sm-reg",children:"From"}),t.jsx(S,{type:"number",placeholder:"",value:d,onValueChange:i,size:"default"})]}),t.jsxs("div",{className:_.inputGroup,children:[t.jsx(F,{variant:"body-sm-reg",children:"To"}),t.jsx(S,{type:"number",placeholder:"",value:p,onValueChange:o,size:"default"})]})]})]})};q.__docgenInfo={description:"",methods:[],displayName:"RangeFilter",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"RangeFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: RangeFilterValue) => void",signature:{arguments:[{type:{name:"RangeFilterValue"},name:"value"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function se(e){const{id:n,label:l,fields:r,formatNumber:d=c=>c.toLocaleString("en-US"),getRowValue:f=c=>c.getValue(n)}=e,p={};return Object.keys(r).forEach(c=>{p[c]={}}),O({id:n,label:l,initialValue:p,filterFn:(c,i,o)=>{const m=f(c);for(const[g,s]of Object.entries(o))if(s.from!==void 0||s.to!==void 0){const N=m[g],V=s.from===void 0||N>=s.from,u=s.to===void 0||N<=s.to;if(!V||!u)return!1}return!0},cellRenderer:void 0,toChips:c=>{const i=[];return Object.entries(c).forEach(([o,m])=>{if(m.from!==void 0||m.to!==void 0){const s=r[o]||o,C=m.from!==void 0?d(m.from):"",N=m.to!==void 0?d(m.to):"";i.push({id:`${n}_${o}`,label:`${s}: From ${C} to ${N}`,metadata:{key:n,field:o,from:m.from,to:m.to}})}}),i},fromChip:(c,i)=>{const o=c.metadata?.field;return o?{...i,[o]:{}}:i},getActiveFiltersCount:c=>{let i=0;return Object.values(c).forEach(o=>{(o.from!==void 0||o.to!==void 0)&&i++}),i},renderFilter:(c,i)=>t.jsx("div",{children:Object.entries(r).map(([o,m])=>t.jsx(q,{label:m,value:c[o]||{},onChange:g=>i({...c,[o]:g}),onClear:()=>i({...c,[o]:{}})},o))})})}const ae="_avatar_gwtmy_1",ie="_small_gwtmy_9",le="_medium_gwtmy_13",B={avatar:ae,small:ie,medium:le},P=[{bg:"#E3F2FD",text:"#1976D2"},{bg:"#F3E5F5",text:"#7B1FA2"},{bg:"#E8F5E9",text:"#388E3C"}],re=e=>{const n=e.trim().split(" ");return n.length>=2?`${n[0][0]}${n[1][0]}`.toUpperCase():e.slice(0,2).toUpperCase()},E=({name:e,size:n="small",colorIndex:l=0})=>{const r=re(e),d=P[l%P.length];return t.jsx("div",{className:`${B.avatar} ${B[n]}`,style:{backgroundColor:d.bg,color:d.text},children:t.jsx(F,{variant:"body-xs-semi-bold",children:r})})};E.__docgenInfo={description:"",methods:[],displayName:"UserAvatar",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const oe="_container_sy805_1",de="_section_sy805_7",ce="_header_sy805_14",me="_searchWrapper_sy805_20",ue="_searchIcon_sy805_26",pe="_searchInput_sy805_36",he="_editorList_sy805_40",fe="_editorItem_sy805_45",ge="_timeRangeOptions_sy805_51",ye="_radioOption_sy805_57",ve="_customDateRange_sy805_69",be="_dateInput_sy805_78",v={container:oe,section:de,header:ce,searchWrapper:me,searchIcon:ue,searchInput:pe,editorList:he,editorItem:fe,timeRangeOptions:ge,radioOption:ye,customDateRange:ve,dateInput:be},Ce=[{value:"24h",label:"24 hours"},{value:"week",label:"Last week"},{value:"month",label:"Last month"},{value:"3months",label:"Last 3 months"},{value:"custom",label:"Custom"}],G=({value:e,onChange:n,availableEditors:l})=>{const[r,d]=I.useState(""),p=l.filter(s=>s.name.toLowerCase().includes(r.toLowerCase())).map(s=>({value:s.name,label:s.name,metadata:{colorIndex:s.colorIndex}})),c=p.filter(s=>e.editors.includes(s.value)),i=s=>{n({...e,editors:s.map(C=>C.value)})},o=s=>{n({...e,timeRange:s,...s!=="custom"&&{customFrom:void 0,customTo:void 0}})},m=()=>{n({...e,editors:[]}),d("")},g=()=>{n({...e,timeRange:null,customFrom:void 0,customTo:void 0})};return t.jsxs("div",{className:v.container,children:[t.jsxs("div",{className:v.section,children:[t.jsxs("div",{className:v.header,children:[t.jsx(F,{variant:"body-md-md",children:"Editor"}),e.editors.length>0&&t.jsx(j,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:m,children:"Clear"})]}),t.jsxs("div",{className:v.searchWrapper,children:[t.jsx("div",{className:v.searchIcon,children:t.jsx(R,{icon:"search",size:"tiny"})}),t.jsx(S,{placeholder:"Search",value:r,onValueChange:d,size:"default",className:v.searchInput})]}),t.jsx("div",{className:v.editorList,children:t.jsx(H,{items:p,selectedItems:c,onSelectionChange:i,renderer:s=>t.jsxs("div",{className:v.editorItem,children:[t.jsx(E,{name:s.label,size:"small",colorIndex:s.metadata?.colorIndex||0}),t.jsx(F,{variant:"body-sm-reg",children:s.label})]})})})]}),t.jsxs("div",{className:v.section,children:[t.jsxs("div",{className:v.header,children:[t.jsx(F,{variant:"body-md-md",children:"Last edited"}),e.timeRange&&t.jsx(j,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:g,children:"Clear"})]}),t.jsx("div",{className:v.timeRangeOptions,children:Ce.map(s=>t.jsxs("label",{className:v.radioOption,children:[t.jsx("input",{type:"radio",name:"timeRange",value:s.value,checked:e.timeRange===s.value,onChange:()=>o(s.value)}),t.jsx(F,{variant:"body-sm-reg",children:s.label})]},s.value))}),e.timeRange==="custom"&&t.jsxs("div",{className:v.customDateRange,children:[t.jsxs("div",{className:v.dateInput,children:[t.jsx(F,{variant:"body-sm-reg",children:"From"}),t.jsx(S,{type:"date",value:e.customFrom||"",onValueChange:s=>n({...e,customFrom:s}),size:"default"})]}),t.jsxs("div",{className:v.dateInput,children:[t.jsx(F,{variant:"body-sm-reg",children:"To"}),t.jsx(S,{type:"date",value:e.customTo||"",onValueChange:s=>n({...e,customTo:s}),size:"default"})]})]})]})]})};G.__docgenInfo={description:"",methods:[],displayName:"LastEditedFilter",props:{value:{required:!0,tsType:{name:"LastEditedFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: LastEditedFilterValue) => void",signature:{arguments:[{type:{name:"LastEditedFilterValue"},name:"value"}],return:{name:"void"}}},description:""},availableEditors:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; colorIndex: number }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"colorIndex",value:{name:"number",required:!0}}]}}],raw:"Array<{ name: string; colorIndex: number }>"},description:""}}};const Fe="_container_7pp4u_1",De={container:Fe},W=({editor:e,timestamp:n,colorIndex:l=0})=>t.jsxs("div",{className:De.container,children:[t.jsx(E,{name:e,size:"small",colorIndex:l}),t.jsx(F,{variant:"body-sm-reg",children:n})]});W.__docgenInfo={description:"",methods:[],displayName:"LastEditedCell",props:{editor:{required:!0,tsType:{name:"string"},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const xe=[{value:"active",label:"Active"},{value:"running",label:"Running"},{value:"pending",label:"Pending"},{value:"draft",label:"Draft"},{value:"inactive",label:"Inactive"},{value:"warning",label:"Warning"},{value:"failed",label:"Failed"}],Te={active:"check_circle",running:"change_circle",pending:"pause_circle",draft:"stylus_note",inactive:"stop_circle",warning:"warning",failed:"cancel"},Ie=e=>Te[e]??"check_circle",z=e=>{const n=Ie(e);return t.jsx(Q,{icon:n,status:e,size:"small"})},Ne=X({id:"status",label:"Status",items:xe,renderer:e=>z(e.value),chipLabelTemplate:e=>`Status: ${e.label}`,cellRenderer:e=>z(e)}),ke=se({id:"runningCompleted",label:"Running/Completed",fields:{running:"Running",completed:"Completed"},formatNumber:e=>e.toLocaleString("en-US"),getRowValue:e=>e.getValue("runningCompleted")}),we=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Chance Booths",colorIndex:1},{name:"Lindsey Westerner",colorIndex:2},{name:"Ruben Stanton",colorIndex:0},{name:"Erin Vertus",colorIndex:1},{name:"Neil Sims",colorIndex:2}],je=(e,n,l)=>{const r=new Date;if(e==="custom")return{from:n?new Date(n):null,to:l?new Date(l):null};if(!e)return{from:null,to:null};const d=new Date;switch(e){case"24h":d.setHours(r.getHours()-24);break;case"week":d.setDate(r.getDate()-7);break;case"month":d.setMonth(r.getMonth()-1);break;case"3months":d.setMonth(r.getMonth()-3);break}return{from:d,to:r}},Ve=e=>new Date(e),_e=O({id:"lastEdited",label:"Last edited",initialValue:{editors:[],timeRange:null,customFrom:void 0,customTo:void 0},filterFn:(e,n,l)=>{const r=e.getValue(n),{editors:d,timeRange:f,customFrom:p,customTo:c}=l;let i=!0;d.length>0&&(i=d.includes(r.editor));let o=!0;if(f){const{from:m,to:g}=je(f,p,c);if(m||g){const s=Ve(r.timestamp);o=(!m||s>=m)&&(!g||s<=g)}}return i&&o},toChips:e=>{const n=[];if(e.editors.forEach(l=>{n.push({id:`editor-${l}`,label:`Editor: ${l}`,metadata:{key:"lastEdited",type:"editor",value:l}})}),e.timeRange){let l="";switch(e.timeRange){case"24h":l="Last edited: Last 24 hours";break;case"week":l="Last edited: Last week";break;case"month":l="Last edited: Last month";break;case"3months":l="Last edited: Last 3 months";break;case"custom":{const r=e.customFrom||"...",d=e.customTo||"...";l=`Last edited: ${r} to ${d}`;break}}n.push({id:"timeRange",label:l,metadata:{key:"lastEdited",type:"timeRange"}})}return n},fromChip:(e,n)=>{const{type:l,value:r}=e.metadata||{};return l==="editor"?{...n,editors:n.editors.filter(d=>d!==r)}:l==="timeRange"?{...n,timeRange:null,customFrom:void 0,customTo:void 0}:n},getActiveFiltersCount:e=>{let n=e.editors.length;return e.timeRange&&(n+=1),n},renderFilter:(e,n)=>t.jsx(G,{value:e,onChange:n,availableEditors:we}),cellRenderer:e=>t.jsx(W,{editor:e.editor,timestamp:e.timestamp,colorIndex:e.colorIndex})}),Se=[Ne,ke,_e];var Ae=(e=>(e.NetworkBuilt="Network Built",e.OpticalOptimization="Optical Optimization",e.ServiceProvisioning="Service Provisioning",e))(Ae||{});const h=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Lindsey Westerner",colorIndex:1},{name:"Neil Sims",colorIndex:2}],Le=[{id:"status",accessorKey:"status",header:"Status",cell:e=>e.getValue()},{id:"name",accessorKey:"name",header:"Name",cell:e=>e.getValue()},{id:"runningCompleted",accessorKey:"runningCompleted",header:"Running/completed",cell:e=>{const n=e.getValue();return`${n.running}/${n.completed}`}},{id:"category",accessorKey:"category",header:"Category",cell:e=>e.getValue()},{id:"version",accessorKey:"version",header:"Version",cell:e=>e.getValue()},{id:"lastEdited",accessorKey:"lastEdited",header:"Last edited"}],Re=[{id:"1",name:"Scheduled Config Backup",status:"active",runningCompleted:{running:3,completed:41},category:"Network Built",version:"000.0003",lastEdited:{editor:h[0].name,timestamp:"2025-11-26T16:47:00",colorIndex:h[0].colorIndex}},{id:"2",name:"Network Provisioning",status:"running",runningCompleted:{running:8,completed:14},category:"Network Built",version:"000.0002",lastEdited:{editor:h[1].name,timestamp:"2025-11-26T15:32:00",colorIndex:h[1].colorIndex}},{id:"3",name:"Service Provisioning",status:"inactive",runningCompleted:{running:0,completed:243},category:"Network Built",version:"000.0033",lastEdited:{editor:h[2].name,timestamp:"2025-11-25T11:15:00",colorIndex:h[2].colorIndex}},{id:"4",name:"Assign IPv4 Address",status:"active",runningCompleted:{running:14,completed:123},category:"Network Built",version:"000.0001",lastEdited:{editor:h[3].name,timestamp:"2025-11-24T14:20:00",colorIndex:h[3].colorIndex}},{id:"5",name:"Shutdown Decommissioned Device",status:"active",runningCompleted:{running:45,completed:45},category:"Optical Optimization",version:"000.0022",lastEdited:{editor:h[4].name,timestamp:"2025-11-23T13:05:00",colorIndex:h[4].colorIndex}},{id:"6",name:"Optical Power Level Calibration",status:"draft",runningCompleted:{running:99,completed:23},category:"Optical Optimization",version:"000.0001",lastEdited:{editor:h[5].name,timestamp:"2025-11-20T09:30:00",colorIndex:h[5].colorIndex}},{id:"7",name:"Deploy Layer 2 VPN Instance",status:"pending",runningCompleted:{running:49,completed:100},category:"Optical Optimization",version:"000.0012",lastEdited:{editor:h[0].name,timestamp:"2025-11-18T12:45:00",colorIndex:h[0].colorIndex}},{id:"8",name:"Initiate Scheduled Firmware Upgrade",status:"active",runningCompleted:{running:25,completed:75},category:"Service Provisioning",version:"000.0010",lastEdited:{editor:h[1].name,timestamp:"2025-11-15T17:10:00",colorIndex:h[1].colorIndex}},{id:"9",name:"Enable High Availability Mode",status:"running",runningCompleted:{running:77,completed:88},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[2].name,timestamp:"2025-11-10T10:22:00",colorIndex:h[2].colorIndex}},{id:"10",name:"Audit Access Control Policies",status:"active",runningCompleted:{running:65,completed:200},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[3].name,timestamp:"2025-11-05T15:15:00",colorIndex:h[3].colorIndex}},{id:"11",name:"Synchronize NTP Across Network Nodes",status:"warning",runningCompleted:{running:49,completed:142},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[4].name,timestamp:"2025-10-28T08:40:00",colorIndex:h[4].colorIndex}},{id:"12",name:"Validate Optical Link Integrity",status:"failed",runningCompleted:{running:90,completed:300},category:"Network Built",version:"000.0001",lastEdited:{editor:h[5].name,timestamp:"2025-10-15T16:47:00",colorIndex:h[5].colorIndex}}],Dt={title:"Design System/Table/Filters",component:$,parameters:{layout:"fullscreen",docs:{description:{component:`
# Table Filters System

A plug-and-play filter system using the **Filter Adapter Pattern** that eliminates boilerplate and centralizes filter logic.

## Features

- **Plug-and-play**: Add filters by adding to config array
- **Type-safe**: Full TypeScript support
- **Automatic**: Chip generation, nav items, column enhancement
- **Reusable**: Generic adapters work across tables
- **Extensible**: Custom adapters for complex scenarios

## Quick Start

### 1. Define Filters (config file)

\`\`\`typescript
// my-filters.config.tsx
import { createCheckboxFilterAdapter, createDualRangeFilterAdapter } from '../filters';

export const statusFilter = createCheckboxFilterAdapter({
  id: 'status',
  label: 'Status',
  items: [
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
  ],
});

export const rangeFilter = createDualRangeFilterAdapter({
  id: 'count',
  label: 'Count',
  fields: { count: 'Count' },
});

export const myFilters = [statusFilter, rangeFilter];
\`\`\`

### 2. Use in Component

\`\`\`typescript
import { useTableFilters } from '../filters/hooks/use-table-filters';
import { myFilters } from './my-filters.config';

function MyTable() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<FilterNavItem>();

  const {
    columnFilters,       // For TanStack Table
    filterChips,         // For DsChipGroup
    filterNavItems,      // For filter navigation (FilterNavItem[])
    enhancedColumns,     // Columns with filters
    handlers,            // { applyFilters, clearAll, deleteChip }
    renderFilterContent, // Render function
  } = useTableFilters(myFilters, baseColumns);

  return (
    <>
      <DsButton onClick={() => setIsModalOpen(true)}>
        <DsIcon icon="filter_list" />
      </DsButton>

      {filterChips.length > 0 && (
        <DsChipGroup
          items={filterChips}
          onClearAll={handlers.clearAll}
          onItemDelete={handlers.deleteChip}
        />
      )}

      <DsTable
        columns={enhancedColumns}
        columnFilters={columnFilters}
        data={myData}
      />

      {/* See "Filter Modal Layout Pattern" section below for complete modal implementation */}
      <DsModal open={isModalOpen} onOpenChange={setIsModalOpen} columns={8}>
        {/* ... two-column layout with DsVerticalTabs ... */}
      </DsModal>
    </>
  );
}
\`\`\`

## Available Filter Types

### Checkbox Filter (Multi-select)
\`\`\`typescript
createCheckboxFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  items: [{ value: 'val1', label: 'Label 1' }],
  renderer?: (item) => <CustomComponent />,      // Optional
  chipLabelTemplate?: (item) => \`\${item.label}\`, // Optional
  cellRenderer?: (value) => <CustomCell />,      // Optional
});
\`\`\`

### Dual-Range Filter (Numeric ranges)
\`\`\`typescript
createDualRangeFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  fields: {
    field1: 'Field 1 Label',
    field2: 'Field 2 Label',
  },
  formatNumber?: (num) => num.toFixed(2),        // Optional
});
\`\`\`

### Custom Filter (Full control)
\`\`\`typescript
createCustomFilterAdapter({
  id: 'columnName',
  label: 'Display Label',
  initialValue: { /* your state */ },
  filterFn: (row, columnId, filterValue) => boolean,
  toChips: (value) => FilterChipItem[],
  fromChip: (chip, currentValue) => newValue,
  getActiveFiltersCount: (value) => number,              // 0 means none active
  renderFilter: (value, onChange) => ReactNode,
  cellRenderer?: (value) => ReactNode,           // Optional
});
\`\`\`

## What You Get Automatically

- Chip generation from filter state
- Filter nav items with active counts
- Column enhancement with filter functions
- State management across all filters
- Type-safe filtering
`}}},tags:["autodocs"],args:{columns:Le,data:Re,stickyHeader:!0,bordered:!0,fullWidth:!0,highlightOnHover:!0,expandable:!1,emptyState:t.jsx("div",{children:"No data available"}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[e=>t.jsxs("div",{className:b.storyPadding,children:[t.jsx("style",{children:`
            #storybook-root, html, body { height: 100%; }
          `}),t.jsx(e,{})]})]},L={name:"With Filters Panel",parameters:{docs:{description:{story:`
### Interactive Filter Example

This story demonstrates the complete filter system with:

- **Status Filter**: Checkbox multi-select with custom rendering (status badges)
- **Running/Completed Filter**: Dual-range numeric filter
- **Category Filter**: Simple checkbox multi-select
- **Version Filter**: Checkbox with custom chip labels

#### Key Implementation Details:

1. **Filter Configuration** (see \`workflow-filters.config.tsx\`):
   - Centralized filter definitions
   - Custom renderers for status badges
   - Format functions for numbers

2. **Hook Usage**:
   \`\`\`typescript
   const {
     columnFilters,       // Pass to DsTable
     filterChips,         // Pass to DsChipGroup
     filterNavItems,      // Pass to DsVerticalTabs in modal
     enhancedColumns,     // Pass to DsTable (includes filter functions)
     handlers,            // { applyFilters, clearAll, deleteChip }
     renderFilterContent, // Render function for modal content
   } = useTableFilters(workflowFilters, columns);
   \`\`\`

3. **What's Handled Automatically**:
   - Filter state management
   - Chip generation and deletion
   - Nav item counts (updates in real-time)
   - Column enhancement with filter functions
   - Type-safe filter values

#### Filter Modal Layout Pattern:

The modal uses a two-column layout with DsModal + DsVerticalTabs:

\`\`\`tsx
// State for selected filter tab
const [selectedFilterId, setSelectedFilterId] = useState<string>(filterNavItems[0]?.id);

const handleValueChange = (value: string | null) => {
  if (value) setSelectedFilterId(value);
};

<DsModal open={open} onOpenChange={setOpen}>
  <DsModal.Header className={styles.filterHeader}>
    <div className={styles.headerLeft}>
      <DsIcon icon="filter_list" />
      <DsModal.Title>Filters</DsModal.Title>
    </div>
    <DsModal.CloseTrigger />
  </DsModal.Header>

  {/* Two-column body: nav (40%) + content (60%) */}
  <DsModal.Body className={styles.filterBody}>
    <DsVerticalTabs value={selectedFilterId} onValueChange={handleValueChange}>
      <DsVerticalTabs.List className={styles.filterNav}>
        {filterNavItems.map((item) => (
          <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
            <DsTypography variant="body-sm-md">{item.label}</DsTypography>
            {!!item.count && (
              <div className={styles.filterTabBadge}>
                <span className={styles.filterTabDot} />
                <DsTypography variant="body-sm-reg">{item.count}</DsTypography>
              </div>
            )}
          </DsVerticalTabs.Tab>
        ))}
      </DsVerticalTabs.List>
      {filterNavItems.map((item) => (
        <DsVerticalTabs.Content key={item.id} value={item.id} className={styles.filterContent}>
          {renderFilterContent({ id: item.id })}
        </DsVerticalTabs.Content>
      ))}
    </DsVerticalTabs>
  </DsModal.Body>

  <DsModal.Footer className={styles.filterFooter}>
    <DsButton onClick={handleClearAll}>Clear all</DsButton>
    <DsModal.Actions>
      <DsButton onClick={handleApply}>Apply</DsButton>
    </DsModal.Actions>
  </DsModal.Footer>
</DsModal>
\`\`\`

**Note**: DsVerticalTabs now uses compound components for maximum flexibility. You can customize tab content with labels, icons, badges, etc.

See the story code for complete implementation with styles.

#### Try It:
1. Click the filter icon to open the modal
2. Select filters in different categories
3. Notice the nav item counts update as you make changes
4. Click "Apply" to see filtered data and chips
5. Delete individual chips or clear all filters

#### Adding More Filters:
To add a new filter, just add one adapter to \`workflowFilters\` array. No other changes needed!
`}}},render:function(n){const{columnFilters:l,filterChips:r,filterNavItems:d,enhancedColumns:f,handlers:p,renderFilterContent:c}=J(Se,n.columns),[i,o]=I.useState(!1),[m,g]=I.useState(d[0]?.id||""),s=a=>{a&&!m&&d.length>0&&g(d[0].id),o(a)},C=a=>{a&&g(a)},N=()=>{p.applyFilters(),o(!1)},V=()=>{p.clearAll(),o(!1)},u=({item:a})=>t.jsxs(t.Fragment,{children:[t.jsx(F,{variant:"body-sm-md",className:b.filterTabLabel,children:a.label}),!!a.count&&t.jsxs("div",{className:b.filterTabBadge,children:[t.jsx("span",{className:b.filterTabDot}),t.jsx(F,{variant:"body-sm-reg",className:b.filterTabCount,children:a.count})]})]});return t.jsxs("div",{className:b.tableFilterContainer,children:[t.jsx("div",{className:b.toolbar,children:t.jsx(j,{design:"v1.2",buttonType:"secondary",onClick:()=>o(!0),children:t.jsx(R,{size:"tiny",icon:"filter_list"})})}),r.length>0&&t.jsx(K,{items:r,onClearAll:V,onItemDelete:p.deleteChip}),t.jsx($,{...n,columns:f,columnFilters:l}),t.jsxs(k,{style:{height:"600px"},open:i,onOpenChange:s,children:[t.jsxs(k.Header,{className:b.filterHeader,children:[t.jsxs("div",{className:b.headerLeft,children:[t.jsx(R,{icon:"filter_list",size:"small"}),t.jsx(k.Title,{children:"Filters"})]}),t.jsx(k.CloseTrigger,{})]}),t.jsx(k.Body,{className:b.filterBody,children:t.jsxs(A,{className:b.filterTabs,value:m,onValueChange:C,children:[t.jsx(A.List,{className:b.filterTabList,children:d.map(a=>t.jsx(A.Tab,{value:a.id,disabled:a.disabled,children:t.jsx(u,{item:a})},a.id))}),d.map(a=>t.jsx(A.Content,{value:a.id,className:b.filterContent,children:c(a)},a.id))]})}),t.jsxs(k.Footer,{className:b.filterFooter,children:[t.jsxs(j,{design:"v1.2",variant:"filled",buttonType:"secondary",onClick:V,children:[t.jsx(R,{icon:"close",size:"tiny"}),"Clear all"]}),t.jsx(k.Actions,{children:t.jsx(j,{design:"v1.2",variant:"filled",buttonType:"primary",onClick:N,children:"Apply"})})]})]})]})},args:{}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'With Filters Panel',
  parameters: {
    docs: {
      description: {
        story: \`
### Interactive Filter Example

This story demonstrates the complete filter system with:

- **Status Filter**: Checkbox multi-select with custom rendering (status badges)
- **Running/Completed Filter**: Dual-range numeric filter
- **Category Filter**: Simple checkbox multi-select
- **Version Filter**: Checkbox with custom chip labels

#### Key Implementation Details:

1. **Filter Configuration** (see \\\`workflow-filters.config.tsx\\\`):
   - Centralized filter definitions
   - Custom renderers for status badges
   - Format functions for numbers

2. **Hook Usage**:
   \\\`\\\`\\\`typescript
   const {
     columnFilters,       // Pass to DsTable
     filterChips,         // Pass to DsChipGroup
     filterNavItems,      // Pass to DsVerticalTabs in modal
     enhancedColumns,     // Pass to DsTable (includes filter functions)
     handlers,            // { applyFilters, clearAll, deleteChip }
     renderFilterContent, // Render function for modal content
   } = useTableFilters(workflowFilters, columns);
   \\\`\\\`\\\`

3. **What's Handled Automatically**:
   - Filter state management
   - Chip generation and deletion
   - Nav item counts (updates in real-time)
   - Column enhancement with filter functions
   - Type-safe filter values

#### Filter Modal Layout Pattern:

The modal uses a two-column layout with DsModal + DsVerticalTabs:

\\\`\\\`\\\`tsx
// State for selected filter tab
const [selectedFilterId, setSelectedFilterId] = useState<string>(filterNavItems[0]?.id);

const handleValueChange = (value: string | null) => {
  if (value) setSelectedFilterId(value);
};

<DsModal open={open} onOpenChange={setOpen}>
  <DsModal.Header className={styles.filterHeader}>
    <div className={styles.headerLeft}>
      <DsIcon icon="filter_list" />
      <DsModal.Title>Filters</DsModal.Title>
    </div>
    <DsModal.CloseTrigger />
  </DsModal.Header>

  {/* Two-column body: nav (40%) + content (60%) */}
  <DsModal.Body className={styles.filterBody}>
    <DsVerticalTabs value={selectedFilterId} onValueChange={handleValueChange}>
      <DsVerticalTabs.List className={styles.filterNav}>
        {filterNavItems.map((item) => (
          <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
            <DsTypography variant="body-sm-md">{item.label}</DsTypography>
            {!!item.count && (
              <div className={styles.filterTabBadge}>
                <span className={styles.filterTabDot} />
                <DsTypography variant="body-sm-reg">{item.count}</DsTypography>
              </div>
            )}
          </DsVerticalTabs.Tab>
        ))}
      </DsVerticalTabs.List>
      {filterNavItems.map((item) => (
        <DsVerticalTabs.Content key={item.id} value={item.id} className={styles.filterContent}>
          {renderFilterContent({ id: item.id })}
        </DsVerticalTabs.Content>
      ))}
    </DsVerticalTabs>
  </DsModal.Body>

  <DsModal.Footer className={styles.filterFooter}>
    <DsButton onClick={handleClearAll}>Clear all</DsButton>
    <DsModal.Actions>
      <DsButton onClick={handleApply}>Apply</DsButton>
    </DsModal.Actions>
  </DsModal.Footer>
</DsModal>
\\\`\\\`\\\`

**Note**: DsVerticalTabs now uses compound components for maximum flexibility. You can customize tab content with labels, icons, badges, etc.

See the story code for complete implementation with styles.

#### Try It:
1. Click the filter icon to open the modal
2. Select filters in different categories
3. Notice the nav item counts update as you make changes
4. Click "Apply" to see filtered data and chips
5. Delete individual chips or clear all filters

#### Adding More Filters:
To add a new filter, just add one adapter to \\\`workflowFilters\\\` array. No other changes needed!
\`
      }
    }
  },
  render: function Render(args) {
    // useTableFilters hook orchestrates all filter logic
    const {
      columnFilters,
      filterChips,
      filterNavItems,
      enhancedColumns,
      handlers,
      renderFilterContent
    } = useTableFilters(workflowFilters, args.columns);
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilterId, setSelectedFilterId] = useState<string>(filterNavItems[0]?.id || '');

    // Set initial selected filter when modal opens
    const handleOpenChange = (open: boolean) => {
      if (open && !selectedFilterId && filterNavItems.length > 0) {
        setSelectedFilterId(filterNavItems[0].id);
      }
      setIsOpen(open);
    };
    const handleValueChange = (value: string | null) => {
      if (value) {
        setSelectedFilterId(value);
      }
    };
    const handleApply = () => {
      handlers.applyFilters();
      setIsOpen(false);
    };
    const handleClearAll = () => {
      handlers.clearAll();
      setIsOpen(false);
    };

    // Helper component for filter tab content (label + count badge)
    const TabLabel = ({
      item
    }: {
      item: FilterNavItem;
    }) => <>
                <DsTypography variant="body-sm-md" className={styles.filterTabLabel}>
                    {item.label}
                </DsTypography>
                {!!item.count && <div className={styles.filterTabBadge}>
                        <span className={styles.filterTabDot} />
                        <DsTypography variant="body-sm-reg" className={styles.filterTabCount}>
                            {item.count}
                        </DsTypography>
                    </div>}
            </>;
    return <div className={styles.tableFilterContainer}>
                {/* Toolbar with filter button */}
                <div className={styles.toolbar}>
                    <DsButton design="v1.2" buttonType="secondary" onClick={() => setIsOpen(true)}>
                        <DsIcon size="tiny" icon="filter_list" />
                    </DsButton>
                </div>

                {/* Filter chips (automatically generated from filter state) */}
                {filterChips.length > 0 && <DsChipGroup items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />}

                {/* Table with enhanced columns (includes filter functions) */}
                <DsTable {...args} columns={enhancedColumns} columnFilters={columnFilters} />

                {/* Filter modal with two-column layout pattern */}
                <DsModal style={{
        height: '600px'
      }} open={isOpen} onOpenChange={handleOpenChange}>
                    <DsModal.Header className={styles.filterHeader}>
                        <div className={styles.headerLeft}>
                            <DsIcon icon="filter_list" size="small" />
                            <DsModal.Title>Filters</DsModal.Title>
                        </div>
                        <DsModal.CloseTrigger />
                    </DsModal.Header>

                    <DsModal.Body className={styles.filterBody}>
                        <DsVerticalTabs className={styles.filterTabs} value={selectedFilterId} onValueChange={handleValueChange}>
                            <DsVerticalTabs.List className={styles.filterTabList}>
                                {filterNavItems.map(item => <DsVerticalTabs.Tab key={item.id} value={item.id} disabled={item.disabled}>
                                        <TabLabel item={item} />
                                    </DsVerticalTabs.Tab>)}
                            </DsVerticalTabs.List>
                            {filterNavItems.map(item => <DsVerticalTabs.Content key={item.id} value={item.id} className={styles.filterContent}>
                                    {renderFilterContent(item)}
                                </DsVerticalTabs.Content>)}
                        </DsVerticalTabs>
                    </DsModal.Body>

                    <DsModal.Footer className={styles.filterFooter}>
                        <DsButton design="v1.2" variant="filled" buttonType="secondary" onClick={handleClearAll}>
                            <DsIcon icon="close" size="tiny" />
                            Clear all
                        </DsButton>
                        <DsModal.Actions>
                            <DsButton design="v1.2" variant="filled" buttonType="primary" onClick={handleApply}>
                                Apply
                            </DsButton>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </div>;
  },
  args: {}
}`,...L.parameters?.docs?.source}}};const xt=["WorkflowCategory","FiltersPanel"];export{L as FiltersPanel,Ae as WorkflowCategory,xt as __namedExportsOrder,Dt as default};
