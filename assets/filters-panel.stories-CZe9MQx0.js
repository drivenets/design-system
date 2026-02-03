import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as k}from"./iframe-DDI3yISY.js";import{D as E}from"./ds-icon-DuIwqTqu.js";import{D as q}from"./ds-table-BHSsrYCf.js";import{D as _}from"./ds-button-BhwpQZM9.js";import{D as j}from"./ds-modal-DWvpiFNz.js";import{D as R}from"./ds-vertical-tabs-C_52aHoP.js";import{D}from"./ds-typography-BYOo5D25.js";import{D as Y}from"./ds-chip-group-C9F0Mqgt.js";import{D as J}from"./ds-status-badge-BLSGdFD3.js";import{D as X}from"./ds-checkbox-BOX-aPLN.js";import{D as S}from"./ds-text-input-x3E3WNCf.js";import{c as Z}from"./index-CrNJhdFw.js";import{s as F}from"./ds-table.stories.module-DepcHETJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-7XehxkZD.js";import"./index-CaQAhqJ6.js";import"./core-table-kFoU2Vt3.js";import"./ds-dropdown-menu-bQa_x5zd.js";import"./index-Do6PxQVK.js";import"./index-DMWY3f1m.js";import"./index-1Uk203GW.js";import"./Combination-BgxE8sOP.js";import"./index-DbIp7eDO.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-CxGySIIX.js";import"./index-D-qVNONF.js";import"./portal-cZEzFh4n.js";import"./create-split-props-u5h9OPvL.js";import"./index-G0tcEFpE.js";import"./use-locale-context-BEbBS7y1.js";import"./use-presence-CyZeoMuJ.js";import"./index-Sy266ej9.js";import"./index-C91md4Pw.js";import"./ds-button-legacy-ZZfLtWBl.js";import"./ds-button-new-CbkPNhdT.js";import"./dialog-title-PhVMPewz.js";import"./render-strategy-BXVnf-9T.js";import"./tabs-root-BphExU2r.js";import"./index-CloTo-u5.js";import"./index-BFzJ1zPD.js";import"./ds-chip-BXO6h93u.js";function ee(e,n){const a=e,o={};a.forEach(m=>{o[m.id]=m.initialValue});const[d,u]=k.useState(o),[f,r]=k.useState([]),[i,l]=k.useState([]),c=m=>d[m],g=a.map(m=>({id:m.id,label:m.label,count:m.getActiveFiltersCount(c(m.id))})),s=n?n.map(m=>{const p=a.find(b=>b.id===m.id);if(p){const b=p.cellRenderer;return{...m,filterFn:p.columnFilterFn,...b&&{cell:N=>b(N.getValue())}}}return m}):[],C=(m,p)=>{u(b=>({...b,[m]:p}))},I=()=>{const m=[],p=[];a.forEach(b=>{const N=c(b.id);b.getActiveFiltersCount(N)>0&&m.push({id:b.id,value:N});const T=b.toChips(N);p.push(...T)}),r(m),l(p)},w=()=>{const m={};a.forEach(p=>{m[p.id]=p.reset()}),u(m),r([]),l([])};return{filterState:d,columnFilters:f,filterChips:i,filterNavItems:g,enhancedColumns:s,handlers:{updateFilter:C,applyFilters:I,clearAll:w,deleteChip:m=>{const p=typeof m.metadata?.key=="string"?m.metadata.key:void 0;if(!p)return;const b=a.find(x=>x.id===p);if(!b)return;const N=c(p),T=b.fromChip(m,N),O=[];if(a.forEach(x=>{const V=x.id===p?T:c(x.id),Q=x.toChips(V);O.push(...Q)}),O.length===0){w();return}u(x=>({...x,[p]:T})),b.getActiveFiltersCount(T)===0?r(x=>x.filter(V=>V.id!==p)):r(x=>x.map(V=>V.id===p?{id:p,value:T}:V)),l(O)}},renderFilterContent:m=>{const p=a.find(T=>T.id===m.id);if(!p)return null;const b=c(p.id),N=T=>C(p.id,T);return p.renderFilter(b,N)}}}function B(e){return{id:e.id,label:e.label,initialValue:e.initialValue,columnFilterFn:e.filterFn,cellRenderer:e.cellRenderer,toChips:e.toChips,fromChip:e.fromChip,getActiveFiltersCount:e.getActiveFiltersCount,reset:()=>e.initialValue,renderFilter:e.renderFilter}}const G=({items:e,renderer:n,selectedItems:a,onSelectionChange:o})=>{const d=(u,f)=>{o(f?[...a,u]:a.filter(r=>r.value!==u.value))};return e.map(u=>{const f=n?n(u):u.label,r=a.findIndex(i=>i.value===u.value)>-1;return t.jsx(X,{label:f,checked:r,onCheckedChange:i=>d(u,i===!0)},JSON.stringify(u.value))})};function te(e){const{id:n,label:a,items:o,renderer:d,chipLabelTemplate:u=i=>`${a}: ${i.label}`,cellRenderer:f,getRowValue:r=i=>i.getValue(n)}=e;return B({id:n,label:a,initialValue:[],filterFn:(i,l,c)=>{if(c.length===0)return!0;const g=r(i);return c.some(s=>s.value===g)},cellRenderer:f,toChips:i=>i.map(l=>({id:`${n}_${String(l.value)}`,label:u(l),metadata:{key:n,value:l.value}})),fromChip:(i,l)=>l.filter(c=>c.value!==i.metadata?.value),getActiveFiltersCount:i=>i.length,renderFilter:(i,l)=>t.jsx(G,{items:o,renderer:d,selectedItems:i,onSelectionChange:l})})}const ne="_container_u6rur_1",se="_header_u6rur_9",ae="_inputs_u6rur_15",le="_inputGroup_u6rur_20",A={container:ne,header:se,inputs:ae,inputGroup:le},W=({label:e,value:n,onChange:a,onClear:o})=>{const[d,u]=k.useState(n.from?.toString()||""),[f,r]=k.useState(n.to?.toString()||""),i=s=>{u(s);const C=s?parseInt(s,10):void 0;a({from:C,to:n.to})},l=s=>{r(s);const C=s?parseInt(s,10):void 0;a({from:n.from,to:C})},c=()=>{u(""),r(""),o&&o()},g=n.from!==void 0||n.to!==void 0;return t.jsxs("div",{className:A.container,children:[t.jsxs("div",{className:A.header,children:[t.jsx(D,{variant:"body-md-md",children:e}),g&&o&&t.jsx(_,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:c,children:"Clear"})]}),t.jsxs("div",{className:A.inputs,children:[t.jsxs("div",{className:A.inputGroup,children:[t.jsx(D,{variant:"body-sm-reg",children:"From"}),t.jsx(S,{type:"number",placeholder:"",value:d,onValueChange:i,size:"default"})]}),t.jsxs("div",{className:A.inputGroup,children:[t.jsx(D,{variant:"body-sm-reg",children:"To"}),t.jsx(S,{type:"number",placeholder:"",value:f,onValueChange:l,size:"default"})]})]})]})};W.__docgenInfo={description:"",methods:[],displayName:"RangeFilter",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"RangeFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: RangeFilterValue) => void",signature:{arguments:[{type:{name:"RangeFilterValue"},name:"value"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function ie(e){const{id:n,label:a,fields:o,formatNumber:d=r=>r.toLocaleString("en-US"),getRowValue:u=r=>r.getValue(n)}=e,f={};return Object.keys(o).forEach(r=>{f[r]={}}),B({id:n,label:a,initialValue:f,filterFn:(r,i,l)=>{const c=u(r);for(const[g,s]of Object.entries(l)){const C=s.from!==void 0||s.to!==void 0,I=c[g];if(C&&I!==void 0){const w=s.from===void 0||I>=s.from,L=s.to===void 0||I<=s.to;if(!w||!L)return!1}}return!0},cellRenderer:void 0,toChips:r=>{const i=[];return Object.entries(r).forEach(([l,c])=>{if(c.from!==void 0||c.to!==void 0){const s=o[l]||l,C=c.from!==void 0?d(c.from):"",I=c.to!==void 0?d(c.to):"";i.push({id:`${n}_${l}`,label:`${s}: From ${C} to ${I}`,metadata:{key:n,field:l,from:c.from,to:c.to}})}}),i},fromChip:(r,i)=>{const l=r.metadata?.field;return l?{...i,[l]:{}}:i},getActiveFiltersCount:r=>{let i=0;return Object.values(r).forEach(l=>{(l.from!==void 0||l.to!==void 0)&&i++}),i},renderFilter:(r,i)=>t.jsx("div",{children:Object.entries(o).map(([l,c])=>t.jsx(W,{label:c,value:r[l]||{},onChange:g=>i({...r,[l]:g}),onClear:()=>i({...r,[l]:{}})},l))})})}const re="_avatar_gwtmy_1",oe="_small_gwtmy_9",de="_medium_gwtmy_13",z={avatar:re,small:oe,medium:de},$=[{bg:"#E3F2FD",text:"#1976D2"},{bg:"#F3E5F5",text:"#7B1FA2"},{bg:"#E8F5E9",text:"#388E3C"}],ce=e=>{const[n,a]=e.trim().split(" ");return n&&a?`${n[0]}${a[0]}`.toUpperCase():e.slice(0,2).toUpperCase()},P=({name:e,size:n="small",colorIndex:a=0})=>{const o=ce(e),d=$[a%$.length];return t.jsx("div",{className:Z(z.avatar,z[n]),style:{backgroundColor:d?.bg,color:d?.text},children:t.jsx(D,{variant:"body-xs-semi-bold",children:o})})};P.__docgenInfo={description:"",methods:[],displayName:"UserAvatar",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const me="_container_sy805_1",ue="_section_sy805_7",pe="_header_sy805_14",he="_searchWrapper_sy805_20",fe="_searchIcon_sy805_26",ge="_searchInput_sy805_36",ye="_editorList_sy805_40",be="_editorItem_sy805_45",ve="_timeRangeOptions_sy805_51",Ce="_radioOption_sy805_57",Fe="_customDateRange_sy805_69",De="_dateInput_sy805_78",v={container:me,section:ue,header:pe,searchWrapper:he,searchIcon:fe,searchInput:ge,editorList:ye,editorItem:be,timeRangeOptions:ve,radioOption:Ce,customDateRange:Fe,dateInput:De},xe=[{value:"24h",label:"24 hours"},{value:"week",label:"Last week"},{value:"month",label:"Last month"},{value:"3months",label:"Last 3 months"},{value:"custom",label:"Custom"}],U=({value:e,onChange:n,availableEditors:a})=>{const[o,d]=k.useState(""),f=a.filter(s=>s.name.toLowerCase().includes(o.toLowerCase())).map(s=>({value:s.name,label:s.name,metadata:{colorIndex:s.colorIndex}})),r=f.filter(s=>e.editors.includes(s.value)),i=s=>{n({...e,editors:s.map(C=>C.value)})},l=s=>{n({...e,timeRange:s,...s!=="custom"&&{customFrom:void 0,customTo:void 0}})},c=()=>{n({...e,editors:[]}),d("")},g=()=>{n({...e,timeRange:null,customFrom:void 0,customTo:void 0})};return t.jsxs("div",{className:v.container,children:[t.jsxs("div",{className:v.section,children:[t.jsxs("div",{className:v.header,children:[t.jsx(D,{variant:"body-md-md",children:"Editor"}),e.editors.length>0&&t.jsx(_,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:c,children:"Clear"})]}),t.jsxs("div",{className:v.searchWrapper,children:[t.jsx("div",{className:v.searchIcon,children:t.jsx(E,{icon:"search",size:"tiny"})}),t.jsx(S,{placeholder:"Search",value:o,onValueChange:d,size:"default",className:v.searchInput})]}),t.jsx("div",{className:v.editorList,children:t.jsx(G,{items:f,selectedItems:r,onSelectionChange:i,renderer:s=>t.jsxs("div",{className:v.editorItem,children:[t.jsx(P,{name:s.label,size:"small",colorIndex:s.metadata?.colorIndex||0}),t.jsx(D,{variant:"body-sm-reg",children:s.label})]})})})]}),t.jsxs("div",{className:v.section,children:[t.jsxs("div",{className:v.header,children:[t.jsx(D,{variant:"body-md-md",children:"Last edited"}),e.timeRange&&t.jsx(_,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:g,children:"Clear"})]}),t.jsx("div",{className:v.timeRangeOptions,children:xe.map(s=>t.jsxs("label",{className:v.radioOption,children:[t.jsx("input",{type:"radio",name:"timeRange",value:s.value,checked:e.timeRange===s.value,onChange:()=>l(s.value)}),t.jsx(D,{variant:"body-sm-reg",children:s.label})]},s.value))}),e.timeRange==="custom"&&t.jsxs("div",{className:v.customDateRange,children:[t.jsxs("div",{className:v.dateInput,children:[t.jsx(D,{variant:"body-sm-reg",children:"From"}),t.jsx(S,{type:"date",value:e.customFrom||"",onValueChange:s=>n({...e,customFrom:s}),size:"default"})]}),t.jsxs("div",{className:v.dateInput,children:[t.jsx(D,{variant:"body-sm-reg",children:"To"}),t.jsx(S,{type:"date",value:e.customTo||"",onValueChange:s=>n({...e,customTo:s}),size:"default"})]})]})]})]})};U.__docgenInfo={description:"",methods:[],displayName:"LastEditedFilter",props:{value:{required:!0,tsType:{name:"LastEditedFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: LastEditedFilterValue) => void",signature:{arguments:[{type:{name:"LastEditedFilterValue"},name:"value"}],return:{name:"void"}}},description:""},availableEditors:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; colorIndex: number }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"colorIndex",value:{name:"number",required:!0}}]}}],raw:"Array<{ name: string; colorIndex: number }>"},description:""}}};const Te="_container_7pp4u_1",Ie={container:Te},K=({editor:e,timestamp:n,colorIndex:a=0})=>t.jsxs("div",{className:Ie.container,children:[t.jsx(P,{name:e,size:"small",colorIndex:a}),t.jsx(D,{variant:"body-sm-reg",children:n})]});K.__docgenInfo={description:"",methods:[],displayName:"LastEditedCell",props:{editor:{required:!0,tsType:{name:"string"},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const Ne=[{value:"active",label:"Active"},{value:"running",label:"Running"},{value:"pending",label:"Pending"},{value:"draft",label:"Draft"},{value:"inactive",label:"Inactive"},{value:"warning",label:"Warning"},{value:"failed",label:"Failed"}],ke={active:"check_circle",running:"change_circle",pending:"pause_circle",draft:"stylus_note",inactive:"stop_circle",warning:"warning",failed:"cancel"},we=e=>ke[e],H=e=>{const n=we(e);return t.jsx(J,{icon:n,status:e,size:"small"})},je=te({id:"status",label:"Status",items:Ne,renderer:e=>H(e.value),chipLabelTemplate:e=>`Status: ${e.label}`,cellRenderer:e=>H(e)}),Ve=ie({id:"runningCompleted",label:"Running/Completed",fields:{running:"Running",completed:"Completed"},formatNumber:e=>e.toLocaleString("en-US"),getRowValue:e=>e.getValue("runningCompleted")}),_e=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Chance Booths",colorIndex:1},{name:"Lindsey Westerner",colorIndex:2},{name:"Ruben Stanton",colorIndex:0},{name:"Erin Vertus",colorIndex:1},{name:"Neil Sims",colorIndex:2}],Ae=(e,n,a)=>{const o=new Date;if(e==="custom")return{from:n?new Date(n):null,to:a?new Date(a):null};if(!e)return{from:null,to:null};const d=new Date;switch(e){case"24h":d.setHours(o.getHours()-24);break;case"week":d.setDate(o.getDate()-7);break;case"month":d.setMonth(o.getMonth()-1);break;case"3months":d.setMonth(o.getMonth()-3);break}return{from:d,to:o}},Se=e=>new Date(e),Le=B({id:"lastEdited",label:"Last edited",initialValue:{editors:[],timeRange:null,customFrom:void 0,customTo:void 0},filterFn:(e,n,a)=>{const o=e.getValue(n),{editors:d,timeRange:u,customFrom:f,customTo:r}=a;let i=!0;d.length>0&&(i=d.includes(o.editor));let l=!0;if(u){const{from:c,to:g}=Ae(u,f,r);if(c||g){const s=Se(o.timestamp);l=(!c||s>=c)&&(!g||s<=g)}}return i&&l},toChips:e=>{const n=[];if(e.editors.forEach(a=>{n.push({id:`editor-${a}`,label:`Editor: ${a}`,metadata:{key:"lastEdited",type:"editor",value:a}})}),e.timeRange){let a="";switch(e.timeRange){case"24h":a="Last edited: Last 24 hours";break;case"week":a="Last edited: Last week";break;case"month":a="Last edited: Last month";break;case"3months":a="Last edited: Last 3 months";break;case"custom":{const o=e.customFrom||"...",d=e.customTo||"...";a=`Last edited: ${o} to ${d}`;break}}n.push({id:"timeRange",label:a,metadata:{key:"lastEdited",type:"timeRange"}})}return n},fromChip:(e,n)=>{const{type:a,value:o}=e.metadata||{};return a==="editor"?{...n,editors:n.editors.filter(d=>d!==o)}:a==="timeRange"?{...n,timeRange:null,customFrom:void 0,customTo:void 0}:n},getActiveFiltersCount:e=>{let n=e.editors.length;return e.timeRange&&(n+=1),n},renderFilter:(e,n)=>t.jsx(U,{value:e,onChange:n,availableEditors:_e}),cellRenderer:e=>t.jsx(K,{editor:e.editor,timestamp:e.timestamp,colorIndex:e.colorIndex})}),Re=[je,Ve,Le],h=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Lindsey Westerner",colorIndex:1},{name:"Neil Sims",colorIndex:2}],Me=[{id:"status",accessorKey:"status",header:"Status",cell:e=>e.getValue()},{id:"name",accessorKey:"name",header:"Name",cell:e=>e.getValue()},{id:"runningCompleted",accessorKey:"runningCompleted",header:"Running/completed",cell:e=>{const n=e.getValue();return`${String(n.running)}/${String(n.completed)}`}},{id:"category",accessorKey:"category",header:"Category",cell:e=>e.getValue()},{id:"version",accessorKey:"version",header:"Version",cell:e=>e.getValue()},{id:"lastEdited",accessorKey:"lastEdited",header:"Last edited"}],Ee=[{id:"1",name:"Scheduled Config Backup",status:"active",runningCompleted:{running:3,completed:41},category:"Network Built",version:"000.0003",lastEdited:{editor:h[0].name,timestamp:"2025-11-26T16:47:00",colorIndex:h[0].colorIndex}},{id:"2",name:"Network Provisioning",status:"running",runningCompleted:{running:8,completed:14},category:"Network Built",version:"000.0002",lastEdited:{editor:h[1].name,timestamp:"2025-11-26T15:32:00",colorIndex:h[1].colorIndex}},{id:"3",name:"Service Provisioning",status:"inactive",runningCompleted:{running:0,completed:243},category:"Network Built",version:"000.0033",lastEdited:{editor:h[2].name,timestamp:"2025-11-25T11:15:00",colorIndex:h[2].colorIndex}},{id:"4",name:"Assign IPv4 Address",status:"active",runningCompleted:{running:14,completed:123},category:"Network Built",version:"000.0001",lastEdited:{editor:h[3].name,timestamp:"2025-11-24T14:20:00",colorIndex:h[3].colorIndex}},{id:"5",name:"Shutdown Decommissioned Device",status:"active",runningCompleted:{running:45,completed:45},category:"Optical Optimization",version:"000.0022",lastEdited:{editor:h[4].name,timestamp:"2025-11-23T13:05:00",colorIndex:h[4].colorIndex}},{id:"6",name:"Optical Power Level Calibration",status:"draft",runningCompleted:{running:99,completed:23},category:"Optical Optimization",version:"000.0001",lastEdited:{editor:h[5].name,timestamp:"2025-11-20T09:30:00",colorIndex:h[5].colorIndex}},{id:"7",name:"Deploy Layer 2 VPN Instance",status:"pending",runningCompleted:{running:49,completed:100},category:"Optical Optimization",version:"000.0012",lastEdited:{editor:h[0].name,timestamp:"2025-11-18T12:45:00",colorIndex:h[0].colorIndex}},{id:"8",name:"Initiate Scheduled Firmware Upgrade",status:"active",runningCompleted:{running:25,completed:75},category:"Service Provisioning",version:"000.0010",lastEdited:{editor:h[1].name,timestamp:"2025-11-15T17:10:00",colorIndex:h[1].colorIndex}},{id:"9",name:"Enable High Availability Mode",status:"running",runningCompleted:{running:77,completed:88},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[2].name,timestamp:"2025-11-10T10:22:00",colorIndex:h[2].colorIndex}},{id:"10",name:"Audit Access Control Policies",status:"active",runningCompleted:{running:65,completed:200},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[3].name,timestamp:"2025-11-05T15:15:00",colorIndex:h[3].colorIndex}},{id:"11",name:"Synchronize NTP Across Network Nodes",status:"warning",runningCompleted:{running:49,completed:142},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[4].name,timestamp:"2025-10-28T08:40:00",colorIndex:h[4].colorIndex}},{id:"12",name:"Validate Optical Link Integrity",status:"failed",runningCompleted:{running:90,completed:300},category:"Network Built",version:"000.0001",lastEdited:{editor:h[5].name,timestamp:"2025-10-15T16:47:00",colorIndex:h[5].colorIndex}}],Nt={title:"Design System/Table/Filters",component:q,parameters:{layout:"fullscreen",docs:{description:{component:`
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
`}}},tags:["autodocs"],args:{columns:Me,data:Ee,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:t.jsx("div",{children:"No data available"}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[e=>t.jsxs("div",{className:F.storyPadding,children:[t.jsx("style",{children:`
            #storybook-root, html, body { height: 100%; }
          `}),t.jsx(e,{})]})]},M={name:"With Filters Panel",parameters:{docs:{description:{story:`
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
`}}},render:function(n){const{columnFilters:a,filterChips:o,filterNavItems:d,enhancedColumns:u,handlers:f,renderFilterContent:r}=ee(Re,n.columns),[i,l]=k.useState(!1),[c,g]=k.useState(d[0]?.id||""),s=y=>{y&&!c&&d.length>0&&g(d[0]?.id||""),l(y)},C=y=>{y&&g(y)},I=()=>{f.applyFilters(),l(!1)},w=()=>{f.clearAll(),l(!1)},L=({item:y})=>t.jsxs(t.Fragment,{children:[t.jsx(D,{variant:"body-sm-md",className:F.filterTabLabel,children:y.label}),!!y.count&&t.jsxs("div",{className:F.filterTabBadge,children:[t.jsx("span",{className:F.filterTabDot}),t.jsx(D,{variant:"body-sm-reg",className:F.filterTabCount,children:y.count})]})]});return t.jsxs("div",{className:F.tableFilterContainer,children:[t.jsx("div",{className:F.toolbar,children:t.jsx(_,{design:"v1.2",buttonType:"secondary",onClick:()=>l(!0),children:t.jsx(E,{size:"tiny",icon:"filter_list"})})}),o.length>0&&t.jsx(Y,{items:o,onClearAll:w,onItemDelete:f.deleteChip}),t.jsx(q,{...n,columns:u,columnFilters:a}),t.jsxs(j,{style:{height:"600px"},open:i,onOpenChange:s,children:[t.jsxs(j.Header,{className:F.filterHeader,children:[t.jsxs("div",{className:F.headerLeft,children:[t.jsx(E,{icon:"filter_list",size:"small"}),t.jsx(j.Title,{children:"Filters"})]}),t.jsx(j.CloseTrigger,{})]}),t.jsx(j.Body,{className:F.filterBody,children:t.jsxs(R,{className:F.filterTabs,value:c,onValueChange:C,children:[t.jsx(R.List,{className:F.filterTabList,children:d.map(y=>t.jsx(R.Tab,{value:y.id,disabled:y.disabled,children:t.jsx(L,{item:y})},y.id))}),d.map(y=>t.jsx(R.Content,{value:y.id,className:F.filterContent,children:r(y)},y.id))]})}),t.jsxs(j.Footer,{className:F.filterFooter,children:[t.jsxs(_,{design:"v1.2",variant:"filled",buttonType:"secondary",onClick:w,children:[t.jsx(E,{icon:"close",size:"tiny"}),"Clear all"]}),t.jsx(j.Actions,{children:t.jsx(_,{design:"v1.2",variant:"filled",buttonType:"primary",onClick:I,children:"Apply"})})]})]})]})},args:{}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
        setSelectedFilterId(filterNavItems[0]?.id || '');
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
}`,...M.parameters?.docs?.source}}};const kt=["FiltersPanel"];export{M as FiltersPanel,kt as __namedExportsOrder,Nt as default};
