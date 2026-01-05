import{j as t}from"./jsx-runtime-u17CrQMm.js";import{r as N}from"./iframe-Cx7uWjAt.js";import{D as M}from"./ds-icon-D1iFRn6A.js";import{D as H}from"./ds-table-DJtOKDgF.js";import{D as j}from"./ds-button-DBzT5Bus.js";import{D as k}from"./ds-modal-Cpq7kWjZ.js";import{D as L}from"./ds-vertical-tabs-BaUa_Nz6.js";import{D as C}from"./ds-typography-DfyWQr7f.js";import{D as Q}from"./ds-chip-group-Ciyoipzv.js";import{D as Y}from"./ds-status-badge-CXpCzzEB.js";import{D as J}from"./ds-checkbox-l9wjkgsP.js";import{D as A}from"./ds-text-input-BslO6kFT.js";import{s as v}from"./ds-table.stories.module-DepcHETJ.js";import"./preload-helper-PPVm8Dsz.js";import"./index-uV057Oo0.js";import"./index-CSR9jzWc.js";import"./index-BAzRuj2w.js";import"./ds-dropdown-menu-C4uaMVdV.js";import"./index-DUmq8kbY.js";import"./index-B5njYntp.js";import"./index-Cts8uUqL.js";import"./Combination-B5p3y8Mb.js";import"./index-DsxK7jhS.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-5yER2RgX.js";import"./index-Bg162Lb_.js";import"./portal-CRKnhrf9.js";import"./create-split-props-u5h9OPvL.js";import"./index-BaP_8QnK.js";import"./use-locale-context-CIbi468e.js";import"./use-presence-BMWLYJYK.js";import"./index-lIa2Tx-M.js";import"./index-sAYndyE8.js";import"./ds-button-legacy-B-4z7xkK.js";import"./ds-button-new-B5t-GLTJ.js";import"./dialog-title-mWl1rVkL.js";import"./render-strategy-BB0sCy-C.js";import"./index-DxXNnvzp.js";import"./index-CQmzlWOx.js";import"./ds-chip-Bx2DaFuU.js";function X(e,n){const a=e,c={};a.forEach(l=>{c[l.id]=l.initialValue});const[o,u]=N.useState(c),[f,d]=N.useState([]),[r,i]=N.useState([]),m=a.map(l=>({id:l.id,label:l.label,count:l.getActiveFiltersCount(o[l.id])})),g=n?n.map(l=>{const p=a.find(y=>y.id===l.id);if(p){const y=p.cellRenderer;return{...l,filterFn:p.columnFilterFn,...y&&{cell:I=>y(I.getValue())}}}return l}):[],s=(l,p)=>{u(y=>({...y,[l]:p}))},F=()=>{const l=[],p=[];a.forEach(y=>{const I=o[y.id];y.getActiveFiltersCount(I)>0&&l.push({id:y.id,value:I});const x=y.toChips(I);p.push(...x)}),d(l),i(p)},T=()=>{const l={};a.forEach(p=>{l[p.id]=p.reset()}),u(l),d([]),i([])};return{filterState:o,columnFilters:f,filterChips:r,filterNavItems:m,enhancedColumns:g,handlers:{updateFilter:s,applyFilters:F,clearAll:T,deleteChip:l=>{const p=typeof l.metadata?.key=="string"?l.metadata.key:void 0;if(!p)return;const y=a.find(D=>D.id===p);if(!y)return;const I=o[p],x=y.fromChip(l,I),E=[];if(a.forEach(D=>{const w=D.id===p?x:o[D.id],K=D.toChips(w);E.push(...K)}),E.length===0){T();return}u(D=>({...D,[p]:x})),y.getActiveFiltersCount(x)===0?d(D=>D.filter(w=>w.id!==p)):d(D=>D.map(w=>w.id===p?{id:p,value:x}:w)),i(E)}},renderFilterContent:l=>{const p=a.find(x=>x.id===l.id);if(!p)return null;const y=o[p.id],I=x=>s(p.id,x);return p.renderFilter(y,I)}}}function O(e){return{id:e.id,label:e.label,initialValue:e.initialValue,columnFilterFn:e.filterFn,cellRenderer:e.cellRenderer,toChips:e.toChips,fromChip:e.fromChip,getActiveFiltersCount:e.getActiveFiltersCount,reset:()=>e.initialValue,renderFilter:e.renderFilter}}const q=({items:e,renderer:n,selectedItems:a,onSelectionChange:c})=>{const o=(u,f)=>{c(f?[...a,u]:a.filter(d=>d.value!==u.value))};return e.map(u=>{const f=n?n(u):u.label,d=a.findIndex(r=>r.value===u.value)>-1;return t.jsx(J,{label:f,checked:d,onCheckedChange:r=>o(u,r===!0)},JSON.stringify(u.value))})};function Z(e){const{id:n,label:a,items:c,renderer:o,chipLabelTemplate:u=r=>`${a}: ${r.label}`,cellRenderer:f,getRowValue:d=r=>r.getValue(n)}=e;return O({id:n,label:a,initialValue:[],filterFn:(r,i,m)=>{if(m.length===0)return!0;const g=d(r);return m.some(s=>s.value===g)},cellRenderer:f,toChips:r=>r.map(i=>({id:`${n}_${String(i.value)}`,label:u(i),metadata:{key:n,value:i.value}})),fromChip:(r,i)=>i.filter(m=>m.value!==r.metadata?.value),getActiveFiltersCount:r=>r.length,renderFilter:(r,i)=>t.jsx(q,{items:c,renderer:o,selectedItems:r,onSelectionChange:i})})}const ee="_container_u6rur_1",te="_header_u6rur_9",ne="_inputs_u6rur_15",se="_inputGroup_u6rur_20",_={container:ee,header:te,inputs:ne,inputGroup:se},G=({label:e,value:n,onChange:a,onClear:c})=>{const[o,u]=N.useState(n.from?.toString()||""),[f,d]=N.useState(n.to?.toString()||""),r=s=>{u(s);const F=s?parseInt(s,10):void 0;a({from:F,to:n.to})},i=s=>{d(s);const F=s?parseInt(s,10):void 0;a({from:n.from,to:F})},m=()=>{u(""),d(""),c&&c()},g=n.from!==void 0||n.to!==void 0;return t.jsxs("div",{className:_.container,children:[t.jsxs("div",{className:_.header,children:[t.jsx(C,{variant:"body-md-md",children:e}),g&&c&&t.jsx(j,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:m,children:"Clear"})]}),t.jsxs("div",{className:_.inputs,children:[t.jsxs("div",{className:_.inputGroup,children:[t.jsx(C,{variant:"body-sm-reg",children:"From"}),t.jsx(A,{type:"number",placeholder:"",value:o,onValueChange:r,size:"default"})]}),t.jsxs("div",{className:_.inputGroup,children:[t.jsx(C,{variant:"body-sm-reg",children:"To"}),t.jsx(A,{type:"number",placeholder:"",value:f,onValueChange:i,size:"default"})]})]})]})};G.__docgenInfo={description:"",methods:[],displayName:"RangeFilter",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"RangeFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: RangeFilterValue) => void",signature:{arguments:[{type:{name:"RangeFilterValue"},name:"value"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function ae(e){const{id:n,label:a,fields:c,formatNumber:o=d=>d.toLocaleString("en-US"),getRowValue:u=d=>d.getValue(n)}=e,f={};return Object.keys(c).forEach(d=>{f[d]={}}),O({id:n,label:a,initialValue:f,filterFn:(d,r,i)=>{const m=u(d);for(const[g,s]of Object.entries(i))if(s.from!==void 0||s.to!==void 0){const T=m[g],V=s.from===void 0||T>=s.from,S=s.to===void 0||T<=s.to;if(!V||!S)return!1}return!0},cellRenderer:void 0,toChips:d=>{const r=[];return Object.entries(d).forEach(([i,m])=>{if(m.from!==void 0||m.to!==void 0){const s=c[i]||i,F=m.from!==void 0?o(m.from):"",T=m.to!==void 0?o(m.to):"";r.push({id:`${n}_${i}`,label:`${s}: From ${F} to ${T}`,metadata:{key:n,field:i,from:m.from,to:m.to}})}}),r},fromChip:(d,r)=>{const i=d.metadata?.field;return i?{...r,[i]:{}}:r},getActiveFiltersCount:d=>{let r=0;return Object.values(d).forEach(i=>{(i.from!==void 0||i.to!==void 0)&&r++}),r},renderFilter:(d,r)=>t.jsx("div",{children:Object.entries(c).map(([i,m])=>t.jsx(G,{label:m,value:d[i]||{},onChange:g=>r({...d,[i]:g}),onClear:()=>r({...d,[i]:{}})},i))})})}const le="_avatar_gwtmy_1",ie="_small_gwtmy_9",re="_medium_gwtmy_13",P={avatar:le,small:ie,medium:re},$=[{bg:"#E3F2FD",text:"#1976D2"},{bg:"#F3E5F5",text:"#7B1FA2"},{bg:"#E8F5E9",text:"#388E3C"}],oe=e=>{const n=e.trim().split(" ");return n.length>=2?`${n[0][0]}${n[1][0]}`.toUpperCase():e.slice(0,2).toUpperCase()},B=({name:e,size:n="small",colorIndex:a=0})=>{const c=oe(e),o=$[a%$.length];return t.jsx("div",{className:`${P.avatar} ${P[n]}`,style:{backgroundColor:o.bg,color:o.text},children:t.jsx(C,{variant:"body-xs-semi-bold",children:c})})};B.__docgenInfo={description:"",methods:[],displayName:"UserAvatar",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const de="_container_sy805_1",ce="_section_sy805_7",me="_header_sy805_14",ue="_searchWrapper_sy805_20",pe="_searchIcon_sy805_26",he="_searchInput_sy805_36",fe="_editorList_sy805_40",ge="_editorItem_sy805_45",ye="_timeRangeOptions_sy805_51",be="_radioOption_sy805_57",ve="_customDateRange_sy805_69",Ce="_dateInput_sy805_78",b={container:de,section:ce,header:me,searchWrapper:ue,searchIcon:pe,searchInput:he,editorList:fe,editorItem:ge,timeRangeOptions:ye,radioOption:be,customDateRange:ve,dateInput:Ce},Fe=[{value:"24h",label:"24 hours"},{value:"week",label:"Last week"},{value:"month",label:"Last month"},{value:"3months",label:"Last 3 months"},{value:"custom",label:"Custom"}],W=({value:e,onChange:n,availableEditors:a})=>{const[c,o]=N.useState(""),f=a.filter(s=>s.name.toLowerCase().includes(c.toLowerCase())).map(s=>({value:s.name,label:s.name,metadata:{colorIndex:s.colorIndex}})),d=f.filter(s=>e.editors.includes(s.value)),r=s=>{n({...e,editors:s.map(F=>F.value)})},i=s=>{n({...e,timeRange:s,...s!=="custom"&&{customFrom:void 0,customTo:void 0}})},m=()=>{n({...e,editors:[]}),o("")},g=()=>{n({...e,timeRange:null,customFrom:void 0,customTo:void 0})};return t.jsxs("div",{className:b.container,children:[t.jsxs("div",{className:b.section,children:[t.jsxs("div",{className:b.header,children:[t.jsx(C,{variant:"body-md-md",children:"Editor"}),e.editors.length>0&&t.jsx(j,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:m,children:"Clear"})]}),t.jsxs("div",{className:b.searchWrapper,children:[t.jsx("div",{className:b.searchIcon,children:t.jsx(M,{icon:"search",size:"tiny"})}),t.jsx(A,{placeholder:"Search",value:c,onValueChange:o,size:"default",className:b.searchInput})]}),t.jsx("div",{className:b.editorList,children:t.jsx(q,{items:f,selectedItems:d,onSelectionChange:r,renderer:s=>t.jsxs("div",{className:b.editorItem,children:[t.jsx(B,{name:s.label,size:"small",colorIndex:s.metadata?.colorIndex||0}),t.jsx(C,{variant:"body-sm-reg",children:s.label})]})})})]}),t.jsxs("div",{className:b.section,children:[t.jsxs("div",{className:b.header,children:[t.jsx(C,{variant:"body-md-md",children:"Last edited"}),e.timeRange&&t.jsx(j,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:g,children:"Clear"})]}),t.jsx("div",{className:b.timeRangeOptions,children:Fe.map(s=>t.jsxs("label",{className:b.radioOption,children:[t.jsx("input",{type:"radio",name:"timeRange",value:s.value,checked:e.timeRange===s.value,onChange:()=>i(s.value)}),t.jsx(C,{variant:"body-sm-reg",children:s.label})]},s.value))}),e.timeRange==="custom"&&t.jsxs("div",{className:b.customDateRange,children:[t.jsxs("div",{className:b.dateInput,children:[t.jsx(C,{variant:"body-sm-reg",children:"From"}),t.jsx(A,{type:"date",value:e.customFrom||"",onValueChange:s=>n({...e,customFrom:s}),size:"default"})]}),t.jsxs("div",{className:b.dateInput,children:[t.jsx(C,{variant:"body-sm-reg",children:"To"}),t.jsx(A,{type:"date",value:e.customTo||"",onValueChange:s=>n({...e,customTo:s}),size:"default"})]})]})]})]})};W.__docgenInfo={description:"",methods:[],displayName:"LastEditedFilter",props:{value:{required:!0,tsType:{name:"LastEditedFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: LastEditedFilterValue) => void",signature:{arguments:[{type:{name:"LastEditedFilterValue"},name:"value"}],return:{name:"void"}}},description:""},availableEditors:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; colorIndex: number }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"colorIndex",value:{name:"number",required:!0}}]}}],raw:"Array<{ name: string; colorIndex: number }>"},description:""}}};const De="_container_7pp4u_1",xe={container:De},U=({editor:e,timestamp:n,colorIndex:a=0})=>t.jsxs("div",{className:xe.container,children:[t.jsx(B,{name:e,size:"small",colorIndex:a}),t.jsx(C,{variant:"body-sm-reg",children:n})]});U.__docgenInfo={description:"",methods:[],displayName:"LastEditedCell",props:{editor:{required:!0,tsType:{name:"string"},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const Te=[{value:"active",label:"Active"},{value:"running",label:"Running"},{value:"pending",label:"Pending"},{value:"draft",label:"Draft"},{value:"inactive",label:"Inactive"},{value:"warning",label:"Warning"},{value:"failed",label:"Failed"}],Ie={active:"check_circle",running:"change_circle",pending:"pause_circle",draft:"stylus_note",inactive:"stop_circle",warning:"warning",failed:"cancel"},Ne=e=>Ie[e],z=e=>{const n=Ne(e);return t.jsx(Y,{icon:n,status:e,size:"small"})},ke=Z({id:"status",label:"Status",items:Te,renderer:e=>z(e.value),chipLabelTemplate:e=>`Status: ${e.label}`,cellRenderer:e=>z(e)}),we=ae({id:"runningCompleted",label:"Running/Completed",fields:{running:"Running",completed:"Completed"},formatNumber:e=>e.toLocaleString("en-US"),getRowValue:e=>e.getValue("runningCompleted")}),je=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Chance Booths",colorIndex:1},{name:"Lindsey Westerner",colorIndex:2},{name:"Ruben Stanton",colorIndex:0},{name:"Erin Vertus",colorIndex:1},{name:"Neil Sims",colorIndex:2}],Ve=(e,n,a)=>{const c=new Date;if(e==="custom")return{from:n?new Date(n):null,to:a?new Date(a):null};if(!e)return{from:null,to:null};const o=new Date;switch(e){case"24h":o.setHours(c.getHours()-24);break;case"week":o.setDate(c.getDate()-7);break;case"month":o.setMonth(c.getMonth()-1);break;case"3months":o.setMonth(c.getMonth()-3);break}return{from:o,to:c}},_e=e=>new Date(e),Ae=O({id:"lastEdited",label:"Last edited",initialValue:{editors:[],timeRange:null,customFrom:void 0,customTo:void 0},filterFn:(e,n,a)=>{const c=e.getValue(n),{editors:o,timeRange:u,customFrom:f,customTo:d}=a;let r=!0;o.length>0&&(r=o.includes(c.editor));let i=!0;if(u){const{from:m,to:g}=Ve(u,f,d);if(m||g){const s=_e(c.timestamp);i=(!m||s>=m)&&(!g||s<=g)}}return r&&i},toChips:e=>{const n=[];if(e.editors.forEach(a=>{n.push({id:`editor-${a}`,label:`Editor: ${a}`,metadata:{key:"lastEdited",type:"editor",value:a}})}),e.timeRange){let a="";switch(e.timeRange){case"24h":a="Last edited: Last 24 hours";break;case"week":a="Last edited: Last week";break;case"month":a="Last edited: Last month";break;case"3months":a="Last edited: Last 3 months";break;case"custom":{const c=e.customFrom||"...",o=e.customTo||"...";a=`Last edited: ${c} to ${o}`;break}}n.push({id:"timeRange",label:a,metadata:{key:"lastEdited",type:"timeRange"}})}return n},fromChip:(e,n)=>{const{type:a,value:c}=e.metadata||{};return a==="editor"?{...n,editors:n.editors.filter(o=>o!==c)}:a==="timeRange"?{...n,timeRange:null,customFrom:void 0,customTo:void 0}:n},getActiveFiltersCount:e=>{let n=e.editors.length;return e.timeRange&&(n+=1),n},renderFilter:(e,n)=>t.jsx(W,{value:e,onChange:n,availableEditors:je}),cellRenderer:e=>t.jsx(U,{editor:e.editor,timestamp:e.timestamp,colorIndex:e.colorIndex})}),Se=[ke,we,Ae],h=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Lindsey Westerner",colorIndex:1},{name:"Neil Sims",colorIndex:2}],Le=[{id:"status",accessorKey:"status",header:"Status",cell:e=>e.getValue()},{id:"name",accessorKey:"name",header:"Name",cell:e=>e.getValue()},{id:"runningCompleted",accessorKey:"runningCompleted",header:"Running/completed",cell:e=>{const n=e.getValue();return`${String(n.running)}/${String(n.completed)}`}},{id:"category",accessorKey:"category",header:"Category",cell:e=>e.getValue()},{id:"version",accessorKey:"version",header:"Version",cell:e=>e.getValue()},{id:"lastEdited",accessorKey:"lastEdited",header:"Last edited"}],Re=[{id:"1",name:"Scheduled Config Backup",status:"active",runningCompleted:{running:3,completed:41},category:"Network Built",version:"000.0003",lastEdited:{editor:h[0].name,timestamp:"2025-11-26T16:47:00",colorIndex:h[0].colorIndex}},{id:"2",name:"Network Provisioning",status:"running",runningCompleted:{running:8,completed:14},category:"Network Built",version:"000.0002",lastEdited:{editor:h[1].name,timestamp:"2025-11-26T15:32:00",colorIndex:h[1].colorIndex}},{id:"3",name:"Service Provisioning",status:"inactive",runningCompleted:{running:0,completed:243},category:"Network Built",version:"000.0033",lastEdited:{editor:h[2].name,timestamp:"2025-11-25T11:15:00",colorIndex:h[2].colorIndex}},{id:"4",name:"Assign IPv4 Address",status:"active",runningCompleted:{running:14,completed:123},category:"Network Built",version:"000.0001",lastEdited:{editor:h[3].name,timestamp:"2025-11-24T14:20:00",colorIndex:h[3].colorIndex}},{id:"5",name:"Shutdown Decommissioned Device",status:"active",runningCompleted:{running:45,completed:45},category:"Optical Optimization",version:"000.0022",lastEdited:{editor:h[4].name,timestamp:"2025-11-23T13:05:00",colorIndex:h[4].colorIndex}},{id:"6",name:"Optical Power Level Calibration",status:"draft",runningCompleted:{running:99,completed:23},category:"Optical Optimization",version:"000.0001",lastEdited:{editor:h[5].name,timestamp:"2025-11-20T09:30:00",colorIndex:h[5].colorIndex}},{id:"7",name:"Deploy Layer 2 VPN Instance",status:"pending",runningCompleted:{running:49,completed:100},category:"Optical Optimization",version:"000.0012",lastEdited:{editor:h[0].name,timestamp:"2025-11-18T12:45:00",colorIndex:h[0].colorIndex}},{id:"8",name:"Initiate Scheduled Firmware Upgrade",status:"active",runningCompleted:{running:25,completed:75},category:"Service Provisioning",version:"000.0010",lastEdited:{editor:h[1].name,timestamp:"2025-11-15T17:10:00",colorIndex:h[1].colorIndex}},{id:"9",name:"Enable High Availability Mode",status:"running",runningCompleted:{running:77,completed:88},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[2].name,timestamp:"2025-11-10T10:22:00",colorIndex:h[2].colorIndex}},{id:"10",name:"Audit Access Control Policies",status:"active",runningCompleted:{running:65,completed:200},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[3].name,timestamp:"2025-11-05T15:15:00",colorIndex:h[3].colorIndex}},{id:"11",name:"Synchronize NTP Across Network Nodes",status:"warning",runningCompleted:{running:49,completed:142},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:h[4].name,timestamp:"2025-10-28T08:40:00",colorIndex:h[4].colorIndex}},{id:"12",name:"Validate Optical Link Integrity",status:"failed",runningCompleted:{running:90,completed:300},category:"Network Built",version:"000.0001",lastEdited:{editor:h[5].name,timestamp:"2025-10-15T16:47:00",colorIndex:h[5].colorIndex}}],Dt={title:"Design System/Table/Filters",component:H,parameters:{layout:"fullscreen",docs:{description:{component:`
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
`}}},tags:["autodocs"],args:{columns:Le,data:Re,stickyHeader:!0,bordered:!0,fullWidth:!0,highlightOnHover:!0,expandable:!1,emptyState:t.jsx("div",{children:"No data available"}),onRowClick:e=>console.log("Row clicked:",e)},decorators:[e=>t.jsxs("div",{className:v.storyPadding,children:[t.jsx("style",{children:`
            #storybook-root, html, body { height: 100%; }
          `}),t.jsx(e,{})]})]},R={name:"With Filters Panel",parameters:{docs:{description:{story:`
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
`}}},render:function(n){const{columnFilters:a,filterChips:c,filterNavItems:o,enhancedColumns:u,handlers:f,renderFilterContent:d}=X(Se,n.columns),[r,i]=N.useState(!1),[m,g]=N.useState(o[0]?.id||""),s=l=>{l&&!m&&o.length>0&&g(o[0].id),i(l)},F=l=>{l&&g(l)},T=()=>{f.applyFilters(),i(!1)},V=()=>{f.clearAll(),i(!1)},S=({item:l})=>t.jsxs(t.Fragment,{children:[t.jsx(C,{variant:"body-sm-md",className:v.filterTabLabel,children:l.label}),!!l.count&&t.jsxs("div",{className:v.filterTabBadge,children:[t.jsx("span",{className:v.filterTabDot}),t.jsx(C,{variant:"body-sm-reg",className:v.filterTabCount,children:l.count})]})]});return t.jsxs("div",{className:v.tableFilterContainer,children:[t.jsx("div",{className:v.toolbar,children:t.jsx(j,{design:"v1.2",buttonType:"secondary",onClick:()=>i(!0),children:t.jsx(M,{size:"tiny",icon:"filter_list"})})}),c.length>0&&t.jsx(Q,{items:c,onClearAll:V,onItemDelete:f.deleteChip}),t.jsx(H,{...n,columns:u,columnFilters:a}),t.jsxs(k,{style:{height:"600px"},open:r,onOpenChange:s,children:[t.jsxs(k.Header,{className:v.filterHeader,children:[t.jsxs("div",{className:v.headerLeft,children:[t.jsx(M,{icon:"filter_list",size:"small"}),t.jsx(k.Title,{children:"Filters"})]}),t.jsx(k.CloseTrigger,{})]}),t.jsx(k.Body,{className:v.filterBody,children:t.jsxs(L,{className:v.filterTabs,value:m,onValueChange:F,children:[t.jsx(L.List,{className:v.filterTabList,children:o.map(l=>t.jsx(L.Tab,{value:l.id,disabled:l.disabled,children:t.jsx(S,{item:l})},l.id))}),o.map(l=>t.jsx(L.Content,{value:l.id,className:v.filterContent,children:d(l)},l.id))]})}),t.jsxs(k.Footer,{className:v.filterFooter,children:[t.jsxs(j,{design:"v1.2",variant:"filled",buttonType:"secondary",onClick:V,children:[t.jsx(M,{icon:"close",size:"tiny"}),"Clear all"]}),t.jsx(k.Actions,{children:t.jsx(j,{design:"v1.2",variant:"filled",buttonType:"primary",onClick:T,children:"Apply"})})]})]})]})},args:{}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};const xt=["FiltersPanel"];export{R as FiltersPanel,xt as __namedExportsOrder,Dt as default};
