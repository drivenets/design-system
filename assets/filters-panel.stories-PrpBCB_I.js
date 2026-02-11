import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-C9N8IAqP.js";import{D as L}from"./ds-icon-CPcERb9y.js";import{D as q}from"./ds-table-Cq2dru0h.js";import{D as A}from"./ds-button-C2Y-KyTd.js";import{D as k}from"./ds-modal-Zc-mygj6.js";import{D as V}from"./ds-vertical-tabs-BKsY-VJm.js";import{D as w}from"./ds-typography-DXlRsXy-.js";import{D as Y}from"./ds-chip-group-B-HCLU_M.js";import{D as le}from"./ds-status-badge-zQ3jUKcZ.js";import{D as ne}from"./ds-checkbox-C8VTEsDS.js";import{D as M}from"./ds-text-input-US5gtbzt.js";import{c as ie}from"./index-D4xqoRYz.js";import{s as g}from"./ds-table.stories.module-D_XXzStM.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BsaFPgnc.js";import"./index-DWLqIjAh.js";import"./core-table-3Gzoa60j.js";import"./ds-dropdown-menu-6nZ1i168.js";import"./index-CS9IDOLY.js";import"./index-BJb9jx-u.js";import"./index-Djre5DEd.js";import"./Combination-DkPv7b8n.js";import"./index-CiJbeP1d.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-mtPNQwrt.js";import"./index-DBJW1xXE.js";import"./portal-DFSmnGkL.js";import"./create-split-props-u5h9OPvL.js";import"./index-DJ3Qh3Vf.js";import"./use-locale-context-QKq51ZmC.js";import"./use-presence-Xn4PJ8X-.js";import"./index-DDoizrR4.js";import"./index-B4KTJTAo.js";import"./ds-button-legacy-CyKiGxDo.js";import"./ds-button-new-D7Qn5FLR.js";import"./dialog-title-BITDmyPh.js";import"./render-strategy-uG0iS5yE.js";import"./tabs-root-DCTQkS-T.js";import"./index-DvLqzCF_.js";import"./index-YenKIIn2.js";import"./ds-chip-CQsf2lzr.js";function Q({filterAdapters:t,baseColumns:a,appliedFilters:l,onFiltersChange:o}){const n=t,u=l!==void 0&&o!==void 0,h=n.reduce((y,p)=>({...y,[p.id]:p.initialValue}),{}),[c,i]=j.useState({}),[r,d]=j.useState({}),m=u?l:c,s=u?o:i,C={...h,...m,...r},B=Object.entries(m).filter(([y])=>{const p=n.find(F=>F.id===y);return p?p.getActiveFiltersCount(m[y])>0:!1}).map(([y,p])=>({id:y,value:p})),R=n.flatMap(y=>{const p=m[y.id];return p!==void 0?y.toChips(p):[]}),S=n.map(y=>({id:y.id,label:y.label,count:y.getActiveFiltersCount(C[y.id])})),b=a?a.map(y=>{const p=n.find(N=>N.id===y.id);if(!p)return y;const F=p.cellRenderer;return{...y,filterFn:p.columnFilterFn,...F&&{cell:N=>F(N.getValue())}}}):[],O=(y,p)=>{d(F=>({...F,[y]:p}))};return{filterState:C,columnFilters:B,filterChips:R,filterNavItems:S,enhancedColumns:b,handlers:{updateFilter:O,applyFilters:()=>{const y=n.reduce((p,F)=>{const N=C[F.id];return F.getActiveFiltersCount(N)>0&&(p[F.id]=N),p},{});s(y),d({})},clearAll:()=>{d({}),s({})},deleteChip:y=>{const p=typeof y.metadata?.key=="string"?y.metadata.key:void 0;if(!p)return;const F=n.find(z=>z.id===p);if(!F)return;const N=m[p];if(N===void 0)return;const E=F.fromChip(y,N),se=F.getActiveFiltersCount(E)===0?Object.fromEntries(Object.entries(m).filter(([z])=>z!==p)):{...m,[p]:E};s(se)}},renderFilterContent:y=>{const p=n.find(E=>E.id===y.id);if(!p)return null;const F=C[p.id],N=E=>O(p.id,E);return p.renderFilter(F,N)}}}function U(t){return{id:t.id,label:t.label,initialValue:t.initialValue,columnFilterFn:t.filterFn,cellRenderer:t.cellRenderer,toChips:t.toChips,fromChip:t.fromChip,getActiveFiltersCount:t.getActiveFiltersCount,reset:()=>t.initialValue,renderFilter:t.renderFilter}}const X=({items:t,renderer:a,selectedItems:l,onSelectionChange:o})=>{const n=(u,h)=>{o(h?[...l,u]:l.filter(c=>c.value!==u.value))};return t.map(u=>{const h=a?a(u):u.label,c=l.findIndex(i=>i.value===u.value)>-1;return e.jsx(ne,{label:h,checked:c,onCheckedChange:i=>n(u,i===!0)},JSON.stringify(u.value))})};function re(t){const{id:a,label:l,items:o,renderer:n,chipLabelTemplate:u=i=>`${l}: ${i.label}`,cellRenderer:h,getRowValue:c=i=>i.getValue(a)}=t;return U({id:a,label:l,initialValue:[],filterFn:(i,r,d)=>{if(d.length===0)return!0;const m=c(i);return d.some(s=>s.value===m)},cellRenderer:h,toChips:i=>i.map(r=>({id:`${a}_${String(r.value)}`,label:u(r),metadata:{key:a,value:r.value}})),fromChip:(i,r)=>r.filter(d=>d.value!==i.metadata?.value),getActiveFiltersCount:i=>i.length,renderFilter:(i,r)=>e.jsx(X,{items:o,renderer:n,selectedItems:i,onSelectionChange:r})})}const oe="_container_u6rur_1",ce="_header_u6rur_9",de="_inputs_u6rur_15",me="_inputGroup_u6rur_20",_={container:oe,header:ce,inputs:de,inputGroup:me},Z=({label:t,value:a,onChange:l,onClear:o})=>{const[n,u]=j.useState(a.from?.toString()||""),[h,c]=j.useState(a.to?.toString()||""),i=s=>{u(s);const C=s?parseInt(s,10):void 0;l({from:C,to:a.to})},r=s=>{c(s);const C=s?parseInt(s,10):void 0;l({from:a.from,to:C})},d=()=>{u(""),c(""),o&&o()},m=a.from!==void 0||a.to!==void 0;return e.jsxs("div",{className:_.container,children:[e.jsxs("div",{className:_.header,children:[e.jsx(w,{variant:"body-md-md",children:t}),m&&o&&e.jsx(A,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:d,children:"Clear"})]}),e.jsxs("div",{className:_.inputs,children:[e.jsxs("div",{className:_.inputGroup,children:[e.jsx(w,{variant:"body-sm-reg",children:"From"}),e.jsx(M,{type:"number",placeholder:"",value:n,onValueChange:i,size:"default"})]}),e.jsxs("div",{className:_.inputGroup,children:[e.jsx(w,{variant:"body-sm-reg",children:"To"}),e.jsx(M,{type:"number",placeholder:"",value:h,onValueChange:r,size:"default"})]})]})]})};Z.__docgenInfo={description:"",methods:[],displayName:"RangeFilter",props:{label:{required:!0,tsType:{name:"string"},description:""},value:{required:!0,tsType:{name:"RangeFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: RangeFilterValue) => void",signature:{arguments:[{type:{name:"RangeFilterValue"},name:"value"}],return:{name:"void"}}},description:""},onClear:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};function ue(t){const{id:a,label:l,fields:o,formatNumber:n=c=>c.toLocaleString("en-US"),getRowValue:u=c=>c.getValue(a)}=t,h={};return Object.keys(o).forEach(c=>{h[c]={}}),U({id:a,label:l,initialValue:h,filterFn:(c,i,r)=>{const d=u(c);for(const[m,s]of Object.entries(r)){const C=s.from!==void 0||s.to!==void 0,B=d[m];if(C&&B!==void 0){const R=s.from===void 0||B>=s.from,S=s.to===void 0||B<=s.to;if(!R||!S)return!1}}return!0},cellRenderer:void 0,toChips:c=>{const i=[];return Object.entries(c).forEach(([r,d])=>{if(d.from!==void 0||d.to!==void 0){const s=o[r]||r,C=d.from!==void 0?n(d.from):"",B=d.to!==void 0?n(d.to):"";i.push({id:`${a}_${r}`,label:`${s}: From ${C} to ${B}`,metadata:{key:a,field:r,from:d.from,to:d.to}})}}),i},fromChip:(c,i)=>{const r=c.metadata?.field;return r?{...i,[r]:{}}:i},getActiveFiltersCount:c=>{let i=0;return Object.values(c).forEach(r=>{(r.from!==void 0||r.to!==void 0)&&i++}),i},renderFilter:(c,i)=>e.jsx("div",{children:Object.entries(o).map(([r,d])=>e.jsx(Z,{label:d,value:c[r]||{},onChange:m=>i({...c,[r]:m}),onClear:()=>i({...c,[r]:{}})},r))})})}const pe="_avatar_gwtmy_1",he="_small_gwtmy_9",ge="_medium_gwtmy_13",W={avatar:pe,small:he,medium:ge},K=[{bg:"#E3F2FD",text:"#1976D2"},{bg:"#F3E5F5",text:"#7B1FA2"},{bg:"#E8F5E9",text:"#388E3C"}],ye=t=>{const[a,l]=t.trim().split(" ");return a&&l?`${a[0]}${l[0]}`.toUpperCase():t.slice(0,2).toUpperCase()},G=({name:t,size:a="small",colorIndex:l=0})=>{const o=ye(t),n=K[l%K.length];return e.jsx("div",{className:ie(W.avatar,W[a]),style:{backgroundColor:n?.bg,color:n?.text},children:e.jsx(w,{variant:"body-xs-semi-bold",children:o})})};G.__docgenInfo={description:"",methods:[],displayName:"UserAvatar",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const fe="_container_sy805_1",be="_section_sy805_7",ve="_header_sy805_14",Ce="_searchWrapper_sy805_20",Te="_searchIcon_sy805_26",xe="_searchInput_sy805_36",Fe="_editorList_sy805_40",De="_editorItem_sy805_45",we="_timeRangeOptions_sy805_51",Ie="_radioOption_sy805_57",ke="_customDateRange_sy805_69",Be="_dateInput_sy805_78",I={container:fe,section:be,header:ve,searchWrapper:Ce,searchIcon:Te,searchInput:xe,editorList:Fe,editorItem:De,timeRangeOptions:we,radioOption:Ie,customDateRange:ke,dateInput:Be},Ne=[{value:"24h",label:"24 hours"},{value:"week",label:"Last week"},{value:"month",label:"Last month"},{value:"3months",label:"Last 3 months"},{value:"custom",label:"Custom"}],ee=({value:t,onChange:a,availableEditors:l})=>{const[o,n]=j.useState(""),h=l.filter(s=>s.name.toLowerCase().includes(o.toLowerCase())).map(s=>({value:s.name,label:s.name,metadata:{colorIndex:s.colorIndex}})),c=h.filter(s=>t.editors.includes(s.value)),i=s=>{a({...t,editors:s.map(C=>C.value)})},r=s=>{a({...t,timeRange:s,...s!=="custom"&&{customFrom:void 0,customTo:void 0}})},d=()=>{a({...t,editors:[]}),n("")},m=()=>{a({...t,timeRange:null,customFrom:void 0,customTo:void 0})};return e.jsxs("div",{className:I.container,children:[e.jsxs("div",{className:I.section,children:[e.jsxs("div",{className:I.header,children:[e.jsx(w,{variant:"body-md-md",children:"Editor"}),t.editors.length>0&&e.jsx(A,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:d,children:"Clear"})]}),e.jsxs("div",{className:I.searchWrapper,children:[e.jsx("div",{className:I.searchIcon,children:e.jsx(L,{icon:"search",size:"tiny"})}),e.jsx(M,{placeholder:"Search",value:o,onValueChange:n,size:"default",className:I.searchInput})]}),e.jsx("div",{className:I.editorList,children:e.jsx(X,{items:h,selectedItems:c,onSelectionChange:i,renderer:s=>e.jsxs("div",{className:I.editorItem,children:[e.jsx(G,{name:s.label,size:"small",colorIndex:s.metadata?.colorIndex||0}),e.jsx(w,{variant:"body-sm-reg",children:s.label})]})})})]}),e.jsxs("div",{className:I.section,children:[e.jsxs("div",{className:I.header,children:[e.jsx(w,{variant:"body-md-md",children:"Last edited"}),t.timeRange&&e.jsx(A,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:m,children:"Clear"})]}),e.jsx("div",{className:I.timeRangeOptions,children:Ne.map(s=>e.jsxs("label",{className:I.radioOption,children:[e.jsx("input",{type:"radio",name:"timeRange",value:s.value,checked:t.timeRange===s.value,onChange:()=>r(s.value)}),e.jsx(w,{variant:"body-sm-reg",children:s.label})]},s.value))}),t.timeRange==="custom"&&e.jsxs("div",{className:I.customDateRange,children:[e.jsxs("div",{className:I.dateInput,children:[e.jsx(w,{variant:"body-sm-reg",children:"From"}),e.jsx(M,{type:"date",value:t.customFrom||"",onValueChange:s=>a({...t,customFrom:s}),size:"default"})]}),e.jsxs("div",{className:I.dateInput,children:[e.jsx(w,{variant:"body-sm-reg",children:"To"}),e.jsx(M,{type:"date",value:t.customTo||"",onValueChange:s=>a({...t,customTo:s}),size:"default"})]})]})]})]})};ee.__docgenInfo={description:"",methods:[],displayName:"LastEditedFilter",props:{value:{required:!0,tsType:{name:"LastEditedFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: LastEditedFilterValue) => void",signature:{arguments:[{type:{name:"LastEditedFilterValue"},name:"value"}],return:{name:"void"}}},description:""},availableEditors:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; colorIndex: number }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"colorIndex",value:{name:"number",required:!0}}]}}],raw:"Array<{ name: string; colorIndex: number }>"},description:""}}};const Re="_container_7pp4u_1",je={container:Re},te=({editor:t,timestamp:a,colorIndex:l=0})=>e.jsxs("div",{className:je.container,children:[e.jsx(G,{name:t,size:"small",colorIndex:l}),e.jsx(w,{variant:"body-sm-reg",children:a})]});te.__docgenInfo={description:"",methods:[],displayName:"LastEditedCell",props:{editor:{required:!0,tsType:{name:"string"},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const Ae=[{value:"active",label:"Active"},{value:"running",label:"Running"},{value:"pending",label:"Pending"},{value:"draft",label:"Draft"},{value:"inactive",label:"Inactive"},{value:"warning",label:"Warning"},{value:"failed",label:"Failed"}],Ve={active:"check_circle",running:"change_circle",pending:"pause_circle",draft:"stylus_note",inactive:"stop_circle",warning:"warning",failed:"cancel"},Se=t=>Ve[t],J=t=>{const a=Se(t);return e.jsx(le,{icon:a,status:t,size:"small"})},Le=re({id:"status",label:"Status",items:Ae,renderer:t=>J(t.value),chipLabelTemplate:t=>`Status: ${t.label}`,cellRenderer:t=>J(t)}),Ee=ue({id:"runningCompleted",label:"Running/Completed",fields:{running:"Running",completed:"Completed"},formatNumber:t=>t.toLocaleString("en-US"),getRowValue:t=>t.getValue("runningCompleted")}),_e=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Chance Booths",colorIndex:1},{name:"Lindsey Westerner",colorIndex:2},{name:"Ruben Stanton",colorIndex:0},{name:"Erin Vertus",colorIndex:1},{name:"Neil Sims",colorIndex:2}],Me=(t,a,l)=>{const o=new Date;if(t==="custom")return{from:a?new Date(a):null,to:l?new Date(l):null};if(!t)return{from:null,to:null};const n=new Date;switch(t){case"24h":n.setHours(o.getHours()-24);break;case"week":n.setDate(o.getDate()-7);break;case"month":n.setMonth(o.getMonth()-1);break;case"3months":n.setMonth(o.getMonth()-3);break}return{from:n,to:o}},Oe=t=>new Date(t),Pe=U({id:"lastEdited",label:"Last edited",initialValue:{editors:[],timeRange:null,customFrom:void 0,customTo:void 0},filterFn:(t,a,l)=>{const o=t.getValue(a),{editors:n,timeRange:u,customFrom:h,customTo:c}=l;let i=!0;n.length>0&&(i=n.includes(o.editor));let r=!0;if(u){const{from:d,to:m}=Me(u,h,c);if(d||m){const s=Oe(o.timestamp);r=(!d||s>=d)&&(!m||s<=m)}}return i&&r},toChips:t=>{const a=[];if(t.editors.forEach(l=>{a.push({id:`editor-${l}`,label:`Editor: ${l}`,metadata:{key:"lastEdited",type:"editor",value:l}})}),t.timeRange){let l="";switch(t.timeRange){case"24h":l="Last edited: Last 24 hours";break;case"week":l="Last edited: Last week";break;case"month":l="Last edited: Last month";break;case"3months":l="Last edited: Last 3 months";break;case"custom":{const o=t.customFrom||"...",n=t.customTo||"...";l=`Last edited: ${o} to ${n}`;break}}a.push({id:"timeRange",label:l,metadata:{key:"lastEdited",type:"timeRange"}})}return a},fromChip:(t,a)=>{const{type:l,value:o}=t.metadata||{};return l==="editor"?{...a,editors:a.editors.filter(n=>n!==o)}:l==="timeRange"?{...a,timeRange:null,customFrom:void 0,customTo:void 0}:a},getActiveFiltersCount:t=>{let a=t.editors.length;return t.timeRange&&(a+=1),a},renderFilter:(t,a)=>e.jsx(ee,{value:t,onChange:a,availableEditors:_e}),cellRenderer:t=>e.jsx(te,{editor:t.editor,timestamp:t.timestamp,colorIndex:t.colorIndex})}),ae=[Le,Ee,Pe],{expect:v,screen:D,userEvent:T,within:H}=__STORYBOOK_MODULE_TEST__,f=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Lindsey Westerner",colorIndex:1},{name:"Neil Sims",colorIndex:2}],$e=[{id:"status",accessorKey:"status",header:"Status",cell:t=>t.getValue()},{id:"name",accessorKey:"name",header:"Name",cell:t=>t.getValue()},{id:"runningCompleted",accessorKey:"runningCompleted",header:"Running/completed",cell:t=>{const a=t.getValue();return`${String(a.running)}/${String(a.completed)}`}},{id:"category",accessorKey:"category",header:"Category",cell:t=>t.getValue()},{id:"version",accessorKey:"version",header:"Version",cell:t=>t.getValue()},{id:"lastEdited",accessorKey:"lastEdited",header:"Last edited"}],ze=[{id:"1",name:"Scheduled Config Backup",status:"active",runningCompleted:{running:3,completed:41},category:"Network Built",version:"000.0003",lastEdited:{editor:f[0].name,timestamp:"2025-11-26T16:47:00",colorIndex:f[0].colorIndex}},{id:"2",name:"Network Provisioning",status:"running",runningCompleted:{running:8,completed:14},category:"Network Built",version:"000.0002",lastEdited:{editor:f[1].name,timestamp:"2025-11-26T15:32:00",colorIndex:f[1].colorIndex}},{id:"3",name:"Service Provisioning",status:"inactive",runningCompleted:{running:0,completed:243},category:"Network Built",version:"000.0033",lastEdited:{editor:f[2].name,timestamp:"2025-11-25T11:15:00",colorIndex:f[2].colorIndex}},{id:"4",name:"Assign IPv4 Address",status:"active",runningCompleted:{running:14,completed:123},category:"Network Built",version:"000.0001",lastEdited:{editor:f[3].name,timestamp:"2025-11-24T14:20:00",colorIndex:f[3].colorIndex}},{id:"5",name:"Shutdown Decommissioned Device",status:"active",runningCompleted:{running:45,completed:45},category:"Optical Optimization",version:"000.0022",lastEdited:{editor:f[4].name,timestamp:"2025-11-23T13:05:00",colorIndex:f[4].colorIndex}},{id:"6",name:"Optical Power Level Calibration",status:"draft",runningCompleted:{running:99,completed:23},category:"Optical Optimization",version:"000.0001",lastEdited:{editor:f[5].name,timestamp:"2025-11-20T09:30:00",colorIndex:f[5].colorIndex}},{id:"7",name:"Deploy Layer 2 VPN Instance",status:"pending",runningCompleted:{running:49,completed:100},category:"Optical Optimization",version:"000.0012",lastEdited:{editor:f[0].name,timestamp:"2025-11-18T12:45:00",colorIndex:f[0].colorIndex}},{id:"8",name:"Initiate Scheduled Firmware Upgrade",status:"active",runningCompleted:{running:25,completed:75},category:"Service Provisioning",version:"000.0010",lastEdited:{editor:f[1].name,timestamp:"2025-11-15T17:10:00",colorIndex:f[1].colorIndex}},{id:"9",name:"Enable High Availability Mode",status:"running",runningCompleted:{running:77,completed:88},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:f[2].name,timestamp:"2025-11-10T10:22:00",colorIndex:f[2].colorIndex}},{id:"10",name:"Audit Access Control Policies",status:"active",runningCompleted:{running:65,completed:200},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:f[3].name,timestamp:"2025-11-05T15:15:00",colorIndex:f[3].colorIndex}},{id:"11",name:"Synchronize NTP Across Network Nodes",status:"warning",runningCompleted:{running:49,completed:142},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:f[4].name,timestamp:"2025-10-28T08:40:00",colorIndex:f[4].colorIndex}},{id:"12",name:"Validate Optical Link Integrity",status:"failed",runningCompleted:{running:90,completed:300},category:"Network Built",version:"000.0001",lastEdited:{editor:f[5].name,timestamp:"2025-10-15T16:47:00",colorIndex:f[5].colorIndex}}],St={title:"Design System/Table/Filters",component:q,parameters:{layout:"fullscreen",docs:{description:{component:`
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
  } = useTableFilters({
    filterAdapters: myFilters,
    baseColumns,
  });

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
`}}},tags:["autodocs"],args:{columns:$e,data:ze,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:e.jsx("div",{children:"No data available"}),onRowClick:t=>console.log("Row clicked:",t)},decorators:[t=>e.jsxs("div",{className:g.storyPadding,children:[e.jsx("style",{children:`
            #storybook-root, html, body { height: 100%; }
          `}),e.jsx(t,{})]})]},P={name:"With Filters Panel",parameters:{docs:{description:{story:`
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
   } = useTableFilters({
     filterAdapters: workflowFilters,
     baseColumns: columns,
   });
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
`}}},render:function(a){const{columnFilters:l,filterChips:o,filterNavItems:n,enhancedColumns:u,handlers:h,renderFilterContent:c}=Q({filterAdapters:ae,baseColumns:a.columns}),[i,r]=j.useState(!1),[d,m]=j.useState(n[0]?.id||""),s=b=>{b&&!d&&n.length>0&&m(n[0]?.id||""),r(b)},C=b=>{b&&m(b)},B=()=>{h.applyFilters(),r(!1)},R=()=>{h.clearAll(),r(!1)},S=({item:b})=>e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"body-sm-md",className:g.filterTabLabel,children:b.label}),!!b.count&&e.jsxs("div",{className:g.filterTabBadge,children:[e.jsx("span",{className:g.filterTabDot}),e.jsx(w,{variant:"body-sm-reg",className:g.filterTabCount,children:b.count})]})]});return e.jsxs("div",{className:g.tableFilterContainer,children:[e.jsx("div",{className:g.toolbar,children:e.jsx(A,{design:"v1.2",buttonType:"secondary",onClick:()=>r(!0),children:e.jsx(L,{size:"tiny",icon:"filter_list"})})}),o.length>0&&e.jsx(Y,{items:o,onClearAll:R,onItemDelete:h.deleteChip}),e.jsx(q,{...a,columns:u,columnFilters:l}),e.jsxs(k,{style:{height:"600px"},open:i,onOpenChange:s,children:[e.jsxs(k.Header,{className:g.filterHeader,children:[e.jsxs("div",{className:g.headerLeft,children:[e.jsx(L,{icon:"filter_list",size:"small"}),e.jsx(k.Title,{children:"Filters"})]}),e.jsx(k.CloseTrigger,{})]}),e.jsx(k.Body,{className:g.filterBody,children:e.jsxs(V,{className:g.filterTabs,value:d,onValueChange:C,children:[e.jsx(V.List,{className:g.filterTabList,children:n.map(b=>e.jsx(V.Tab,{value:b.id,disabled:b.disabled,children:e.jsx(S,{item:b})},b.id))}),n.map(b=>e.jsx(V.Content,{value:b.id,className:g.filterContent,children:c(b)},b.id))]})}),e.jsxs(k.Footer,{className:g.filterFooter,children:[e.jsxs(A,{design:"v1.2",variant:"filled",buttonType:"secondary",onClick:R,children:[e.jsx(L,{icon:"close",size:"tiny"}),"Clear all"]}),e.jsx(k.Actions,{children:e.jsx(A,{design:"v1.2",variant:"filled",buttonType:"primary",onClick:B,children:"Apply"})})]})]})]})},args:{},play:async({canvasElement:t})=>{const a=H(t),l=()=>a.getAllByRole("row").filter(R=>!R.querySelector("th"));await v(l()).toHaveLength(12);const o=a.getByRole("button",{name:/filter/i});await T.click(o);const n=D.getByRole("tab",{name:/status/i}),u=D.getByRole("tab",{name:/running\/completed/i}),h=D.getByRole("tab",{name:/last edited/i});await T.click(n);const c=D.getByRole("checkbox",{name:/^active$/i}),i=D.getByRole("checkbox",{name:/^running$/i});await T.click(c),await T.click(i),await v(c).toBeChecked(),await v(i).toBeChecked(),await T.click(u);const[r,d]=D.getAllByRole("spinbutton");await T.type(r,"0"),await T.type(d,"50"),await T.click(h);const m=D.getByRole("checkbox",{name:/marry levin/i}),s=D.getByRole("radio",{name:/last 3 months/i});await T.click(m),await T.click(s),await v(m).toBeChecked(),await v(s).toBeChecked(),await T.click(D.getByRole("button",{name:/apply/i})),await v(a.getByText(/status: active/i)).toBeInTheDocument(),await v(a.getByText(/status: running/i)).toBeInTheDocument(),await v(a.getByText(/running.*0.*50/i)).toBeInTheDocument(),await v(a.getByText(/editor: marry levin/i)).toBeInTheDocument(),await v(a.getByText(/last 3 months/i)).toBeInTheDocument(),await v(l().length).toBeLessThan(12),await T.click(o),await T.click(D.getByRole("tab",{name:/status/i})),await v(D.getByRole("checkbox",{name:/^active$/i})).toBeChecked(),await v(D.getByRole("checkbox",{name:/^running$/i})).toBeChecked(),await T.click(D.getByRole("button",{name:/apply/i}));const C=a.getByRole("button",{name:/status: active/i}),B=H(C).getByRole("button",{name:/delete/i});await T.click(B),await v(a.queryByRole("button",{name:/status: active/i})).not.toBeInTheDocument(),await T.click(a.getByRole("button",{name:/clear all/i})),await v(a.queryByText(/status:/i)).not.toBeInTheDocument(),await v(l()).toHaveLength(12)}},$={name:"Controlled Mode",parameters:{docs:{description:{story:`
### Controlled Mode Example

Demonstrates using \`useTableFilters\` in **controlled mode** where filter state is managed externally.

This is useful for:
- **URL-driven filtering**: Sync filters with URL params
- **Server-side filtering**: Send filters to API and refetch data
- **Cross-component state**: Share filter state with other components

\`\`\`typescript
const [appliedFilters, setAppliedFilters] = useState({});

const { filterChips, handlers } = useTableFilters({
  filterAdapters: workflowFilters,
  baseColumns: columns,
  appliedFilters,           // External state
  onFiltersChange: setAppliedFilters, // Callback to update state
});
\`\`\`

The debug panel below shows the current filter state as JSON.
`}}},render:function(a){const[l,o]=j.useState({}),{columnFilters:n,filterChips:u,filterNavItems:h,enhancedColumns:c,handlers:i,renderFilterContent:r}=Q({filterAdapters:ae,baseColumns:a.columns,appliedFilters:l,onFiltersChange:o}),[d,m]=j.useState(!1),[s,C]=j.useState(h[0]?.id||""),B=x=>{x&&!s&&h.length>0&&C(h[0]?.id||""),m(x)},R=x=>{x&&C(x)},S=()=>{i.applyFilters(),m(!1)},b=()=>{i.clearAll(),m(!1)},O=({item:x})=>e.jsxs(e.Fragment,{children:[e.jsx(w,{variant:"body-sm-md",className:g.filterTabLabel,children:x.label}),!!x.count&&e.jsxs("div",{className:g.filterTabBadge,children:[e.jsx("span",{className:g.filterTabDot}),e.jsx(w,{variant:"body-sm-reg",className:g.filterTabCount,children:x.count})]})]});return e.jsxs("div",{className:g.tableFilterContainer,children:[e.jsxs("div",{className:g.debugPanel,children:[e.jsx(w,{variant:"body-sm-md",children:"External Filter State (controlled):"}),e.jsx("pre",{className:g.debugCode,children:JSON.stringify(l,null,2)||"{}"})]}),e.jsx("div",{className:g.toolbar,children:e.jsx(A,{design:"v1.2",buttonType:"secondary",onClick:()=>m(!0),children:e.jsx(L,{size:"tiny",icon:"filter_list"})})}),u.length>0&&e.jsx(Y,{items:u,onClearAll:b,onItemDelete:i.deleteChip}),e.jsx(q,{...a,columns:c,columnFilters:n}),e.jsxs(k,{style:{height:"600px"},open:d,onOpenChange:B,children:[e.jsxs(k.Header,{className:g.filterHeader,children:[e.jsxs("div",{className:g.headerLeft,children:[e.jsx(L,{icon:"filter_list",size:"small"}),e.jsx(k.Title,{children:"Filters"})]}),e.jsx(k.CloseTrigger,{})]}),e.jsx(k.Body,{className:g.filterBody,children:e.jsxs(V,{className:g.filterTabs,value:s,onValueChange:R,children:[e.jsx(V.List,{className:g.filterTabList,children:h.map(x=>e.jsx(V.Tab,{value:x.id,disabled:x.disabled,children:e.jsx(O,{item:x})},x.id))}),h.map(x=>e.jsx(V.Content,{value:x.id,className:g.filterContent,children:r(x)},x.id))]})}),e.jsxs(k.Footer,{className:g.filterFooter,children:[e.jsxs(A,{design:"v1.2",variant:"filled",buttonType:"secondary",onClick:b,children:[e.jsx(L,{icon:"close",size:"tiny"}),"Clear all"]}),e.jsx(k.Actions,{children:e.jsx(A,{design:"v1.2",variant:"filled",buttonType:"primary",onClick:S,children:"Apply"})})]})]})]})},args:{},play:async({canvasElement:t})=>{const a=H(t),l=a.getByText("External Filter State (controlled):");await v(l).toBeInTheDocument(),await v(a.getByText("{}")).toBeInTheDocument();const o=a.getByRole("button",{name:/filter/i});await T.click(o);const n=D.getByRole("tab",{name:/status/i});await T.click(n);const u=D.getByRole("checkbox",{name:/^active$/i});await T.click(u),await T.click(D.getByRole("button",{name:/apply/i})),await v(a.getByText(/"status"/)).toBeInTheDocument(),await v(a.getByText(/status: active/i)).toBeInTheDocument(),await T.click(a.getByRole("button",{name:/clear all/i})),await v(a.getByText("{}")).toBeInTheDocument(),await v(a.queryByText(/status: active/i)).not.toBeInTheDocument()}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
   } = useTableFilters({
     filterAdapters: workflowFilters,
     baseColumns: columns,
   });
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
    } = useTableFilters({
      filterAdapters: workflowFilters,
      baseColumns: args.columns
    });
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
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify initial state: table shows all 12 rows
    const getTableRows = () => canvas.getAllByRole('row').filter(row => !row.querySelector('th'));
    await expect(getTableRows()).toHaveLength(12);

    // 1. Open filter modal
    const filterButton = canvas.getByRole('button', {
      name: /filter/i
    });
    await userEvent.click(filterButton);

    // 2. Verify all tabs exist
    const statusTab = screen.getByRole('tab', {
      name: /status/i
    });
    const runningTab = screen.getByRole('tab', {
      name: /running\\/completed/i
    });
    const lastEditedTab = screen.getByRole('tab', {
      name: /last edited/i
    });

    // 3. Status filter - select "Active" and "Running"
    await userEvent.click(statusTab);
    const activeCheckbox = screen.getByRole('checkbox', {
      name: /^active$/i
    });
    const runningCheckbox = screen.getByRole('checkbox', {
      name: /^running$/i
    });
    await userEvent.click(activeCheckbox);
    await userEvent.click(runningCheckbox);
    await expect(activeCheckbox).toBeChecked();
    await expect(runningCheckbox).toBeChecked();

    // 4. Running/Completed filter - set range
    await userEvent.click(runningTab);
    const [runningFrom, runningTo] = screen.getAllByRole('spinbutton');
    await userEvent.type(runningFrom as HTMLElement, '0');
    await userEvent.type(runningTo as HTMLElement, '50');

    // 5. Last edited filter - select editor + time range
    await userEvent.click(lastEditedTab);
    const editorCheckbox = screen.getByRole('checkbox', {
      name: /marry levin/i
    });
    const timeRangeRadio = screen.getByRole('radio', {
      name: /last 3 months/i
    });
    await userEvent.click(editorCheckbox);
    await userEvent.click(timeRangeRadio);
    await expect(editorCheckbox).toBeChecked();
    await expect(timeRangeRadio).toBeChecked();

    // 6. Apply filters
    await userEvent.click(screen.getByRole('button', {
      name: /apply/i
    }));

    // Verify chips appear
    await expect(canvas.getByText(/status: active/i)).toBeInTheDocument();
    await expect(canvas.getByText(/status: running/i)).toBeInTheDocument();
    await expect(canvas.getByText(/running.*0.*50/i)).toBeInTheDocument();
    await expect(canvas.getByText(/editor: marry levin/i)).toBeInTheDocument();
    await expect(canvas.getByText(/last 3 months/i)).toBeInTheDocument();

    // 7. Verify table is filtered
    await expect(getTableRows().length).toBeLessThan(12);

    // 8. Re-open modal - verify filters preserved
    await userEvent.click(filterButton);
    await userEvent.click(screen.getByRole('tab', {
      name: /status/i
    }));
    await expect(screen.getByRole('checkbox', {
      name: /^active$/i
    })).toBeChecked();
    await expect(screen.getByRole('checkbox', {
      name: /^running$/i
    })).toBeChecked();
    await userEvent.click(screen.getByRole('button', {
      name: /apply/i
    }));

    // 9. Delete individual chip
    const activeChip = canvas.getByRole('button', {
      name: /status: active/i
    });
    const deleteButton = within(activeChip).getByRole('button', {
      name: /delete/i
    });
    await userEvent.click(deleteButton);
    await expect(canvas.queryByRole('button', {
      name: /status: active/i
    })).not.toBeInTheDocument();

    // 10. Clear all filters
    await userEvent.click(canvas.getByRole('button', {
      name: /clear all/i
    }));
    await expect(canvas.queryByText(/status:/i)).not.toBeInTheDocument();

    // Verify table shows all rows again
    await expect(getTableRows()).toHaveLength(12);
  }
}`,...P.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Controlled Mode',
  parameters: {
    docs: {
      description: {
        story: \`
### Controlled Mode Example

Demonstrates using \\\`useTableFilters\\\` in **controlled mode** where filter state is managed externally.

This is useful for:
- **URL-driven filtering**: Sync filters with URL params
- **Server-side filtering**: Send filters to API and refetch data
- **Cross-component state**: Share filter state with other components

\\\`\\\`\\\`typescript
const [appliedFilters, setAppliedFilters] = useState({});

const { filterChips, handlers } = useTableFilters({
  filterAdapters: workflowFilters,
  baseColumns: columns,
  appliedFilters,           // External state
  onFiltersChange: setAppliedFilters, // Callback to update state
});
\\\`\\\`\\\`

The debug panel below shows the current filter state as JSON.
\`
      }
    }
  },
  render: function Render(args) {
    // External filter state (controlled mode)
    const [appliedFilters, setAppliedFilters] = useState<Record<string, unknown>>({});
    const {
      columnFilters,
      filterChips,
      filterNavItems,
      enhancedColumns,
      handlers,
      renderFilterContent
    } = useTableFilters({
      filterAdapters: workflowFilters,
      baseColumns: args.columns,
      appliedFilters,
      onFiltersChange: setAppliedFilters
    });
    const [isOpen, setIsOpen] = useState(false);
    const [selectedFilterId, setSelectedFilterId] = useState<string>(filterNavItems[0]?.id || '');
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
                {/* Debug panel showing external state */}
                <div className={styles.debugPanel}>
                    <DsTypography variant="body-sm-md">External Filter State (controlled):</DsTypography>
                    <pre className={styles.debugCode}>{JSON.stringify(appliedFilters, null, 2) || '{}'}</pre>
                </div>

                <div className={styles.toolbar}>
                    <DsButton design="v1.2" buttonType="secondary" onClick={() => setIsOpen(true)}>
                        <DsIcon size="tiny" icon="filter_list" />
                    </DsButton>
                </div>

                {filterChips.length > 0 && <DsChipGroup items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />}

                <DsTable {...args} columns={enhancedColumns} columnFilters={columnFilters} />

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
  args: {},
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify initial state: debug panel shows empty object
    const debugPanel = canvas.getByText('External Filter State (controlled):');
    await expect(debugPanel).toBeInTheDocument();
    await expect(canvas.getByText('{}')).toBeInTheDocument();

    // 1. Open filter modal and apply a filter
    const filterButton = canvas.getByRole('button', {
      name: /filter/i
    });
    await userEvent.click(filterButton);

    // Select Active status
    const statusTab = screen.getByRole('tab', {
      name: /status/i
    });
    await userEvent.click(statusTab);
    const activeCheckbox = screen.getByRole('checkbox', {
      name: /^active$/i
    });
    await userEvent.click(activeCheckbox);

    // Apply
    await userEvent.click(screen.getByRole('button', {
      name: /apply/i
    }));

    // 2. Verify external state is updated (debug panel shows filter)
    await expect(canvas.getByText(/"status"/)).toBeInTheDocument();

    // 3. Verify chip appears
    await expect(canvas.getByText(/status: active/i)).toBeInTheDocument();

    // 4. Clear all and verify state resets
    await userEvent.click(canvas.getByRole('button', {
      name: /clear all/i
    }));
    await expect(canvas.getByText('{}')).toBeInTheDocument();
    await expect(canvas.queryByText(/status: active/i)).not.toBeInTheDocument();
  }
}`,...$.parameters?.docs?.source}}};const Lt=["FiltersPanel","Controlled"];export{$ as Controlled,P as FiltersPanel,Lt as __namedExportsOrder,St as default};
