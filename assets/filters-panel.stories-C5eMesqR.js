import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as j}from"./iframe-BmSPM-Ld.js";import{D as E}from"./ds-icon-iMJSHCHz.js";import{D as H}from"./ds-table-BAeC8xHJ.js";import{D as S}from"./ds-button-D04f0NJ8.js";import{D as I}from"./ds-modal-BP-8Fos8.js";import{D as A}from"./ds-vertical-tabs-9vGeySSw.js";import{D as B}from"./ds-typography-CphS93Yt.js";import{D as J}from"./ds-chip-group-Hl_pKKmA.js";import{D as ae}from"./ds-status-badge-DVKM42M0.js";import{D as se}from"./ds-checkbox-BwVS5o0l.js";import{R as le}from"./range-filter-B5uHOomk.js";import{c as ie}from"./index-CnMwAcS8.js";import{D as $}from"./ds-text-input-BsFy0Af1.js";import{s as p}from"./ds-table.stories.module-D_XXzStM.js";import"./preload-helper-PPVm8Dsz.js";import"./core-table-Bj7dW06P.js";import"./index-Dbr3Y_Zx.js";import"./index-D4BidFMr.js";import"./ds-dropdown-menu-CiPq8KYc.js";import"./index-BxkAKOG9.js";import"./index-DqvjbSet.js";import"./index-Bc9e2jvF.js";import"./Combination-DUk5LVq0.js";import"./index-DCJskxEh.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-CFLp-uFy.js";import"./index-BitrCCia.js";import"./portal-CHaGvyib.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-CCTw63fm.js";import"./create-anatomy-BCWrtZRX.js";import"./use-presence-CkuG9iLr.js";import"./set-wINjjEke.js";import"./raf-CC9hSMXO.js";import"./computed-style-7Z9WAJuJ.js";import"./event-CBXSxTbR.js";import"./index-Ddmf6tA3.js";import"./get-styles-BCuPNK9_.js";import"./typeahead-DQd88xYC.js";import"./query-CjgVAlRR.js";import"./initial-focus-DAAGySxw.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-CZzoYVdC.js";import"./navigate-CTqriKP7.js";import"./merge-refs-DX9dreSa.js";import"./ds-button-legacy-mJDTSJOh.js";import"./ds-button-new-Di2xg-Cn.js";import"./dialog-title-DLAdhCbt.js";import"./render-strategy-BHwcdHGl.js";import"./tabs-root-CVOw_NiH.js";import"./number-Bu-e0fmS.js";import"./resize-observer-CNWoMxEF.js";import"./index-BpmvwCao.js";import"./index-D4tTyPA2.js";import"./ds-chip-D9CYJnpH.js";function q(t){return{id:t.id,label:t.label,initialValue:t.initialValue,columnFilterFn:t.filterFn,cellRenderer:t.cellRenderer,toChips:t.toChips,fromChip:t.fromChip,getActiveFiltersCount:t.getActiveFiltersCount,reset:()=>t.initialValue,renderFilter:t.renderFilter}}const Y=({items:t,renderer:a,selectedItems:l,onSelectionChange:o})=>{const i=(h,y)=>{o(y?[...l,h]:l.filter(c=>c.value!==h.value))};return t.map(h=>{const y=a?a(h):h.label,c=l.findIndex(n=>n.value===h.value)>-1;return e.jsx(se,{label:y,checked:c,onCheckedChange:n=>i(h,n===!0)},JSON.stringify(h.value))})};function ne(t){const{id:a,label:l,items:o,renderer:i,chipLabelTemplate:h=n=>`${l}: ${n.label}`,cellRenderer:y,getRowValue:c=n=>n.getValue(a)}=t;return q({id:a,label:l,initialValue:[],filterFn:(n,r,d)=>{if(d.length===0)return!0;const m=c(n);return d.some(s=>s.value===m)},cellRenderer:y,toChips:n=>n.map(r=>({id:`${a}_${String(r.value)}`,label:h(r),metadata:{key:a,value:r.value}})),fromChip:(n,r)=>r.filter(d=>d.value!==n.metadata?.value),getActiveFiltersCount:n=>n.length,renderFilter:(n,r)=>e.jsx(Y,{items:o,renderer:i,selectedItems:n,onSelectionChange:r})})}function re(t){const{id:a,label:l,fields:o,formatNumber:i=c=>c.toLocaleString("en-US"),getRowValue:h=c=>c.getValue(a)}=t,y={};return Object.keys(o).forEach(c=>{y[c]={}}),q({id:a,label:l,initialValue:y,filterFn:(c,n,r)=>{const d=h(c);for(const[m,s]of Object.entries(r)){const x=s.from!==void 0||s.to!==void 0,k=d[m];if(x&&k!==void 0){const R=s.from===void 0||k>=s.from,V=s.to===void 0||k<=s.to;if(!R||!V)return!1}}return!0},cellRenderer:void 0,toChips:c=>{const n=[];return Object.entries(c).forEach(([r,d])=>{if(d.from!==void 0||d.to!==void 0){const s=o[r]||r,x=d.from!==void 0?i(d.from):"",k=d.to!==void 0?i(d.to):"";n.push({id:`${a}_${r}`,label:`${s}: From ${x} to ${k}`,metadata:{key:a,field:r,from:d.from,to:d.to}})}}),n},fromChip:(c,n)=>{const r=c.metadata?.field;return r?{...n,[r]:{}}:n},getActiveFiltersCount:c=>{let n=0;return Object.values(c).forEach(r=>{(r.from!==void 0||r.to!==void 0)&&n++}),n},renderFilter:(c,n)=>e.jsx("div",{children:Object.entries(o).map(([r,d])=>e.jsx(le,{label:d,value:c[r]||{},onChange:m=>n({...c,[r]:m}),onClear:()=>n({...c,[r]:{}})},r))})})}function Q({filterAdapters:t,baseColumns:a,appliedFilters:l,onFiltersChange:o}){const i=t,h=l!==void 0&&o!==void 0,y=i.reduce((g,u)=>({...g,[u.id]:u.initialValue}),{}),[c,n]=j.useState({}),[r,d]=j.useState({}),m=h?l:c,s=h?o:n,x={...y,...m,...r},k=Object.entries(m).filter(([g])=>{const u=i.find(F=>F.id===g);return u?u.getActiveFiltersCount(m[g])>0:!1}).map(([g,u])=>({id:g,value:u})),R=i.flatMap(g=>{const u=m[g.id];return u!==void 0?g.toChips(u):[]}),V=i.map(g=>({id:g.id,label:g.label,count:g.getActiveFiltersCount(x[g.id])})),b=a?a.map(g=>{const u=i.find(N=>N.id===g.id);if(!u)return g;const F=u.cellRenderer;return{...g,filterFn:u.columnFilterFn,...F&&{cell:N=>F(N.getValue())}}}):[],M=(g,u)=>{d(F=>({...F,[g]:u}))};return{filterState:x,columnFilters:k,filterChips:R,filterNavItems:V,enhancedColumns:b,handlers:{updateFilter:M,applyFilters:()=>{const g=i.reduce((u,F)=>{const N=x[F.id];return F.getActiveFiltersCount(N)>0&&(u[F.id]=N),u},{});s(g),d({})},clearAll:()=>{d({}),s({})},deleteChip:g=>{const u=typeof g.metadata?.key=="string"?g.metadata.key:void 0;if(!u)return;const F=i.find(P=>P.id===u);if(!F)return;const N=m[u];if(N===void 0)return;const L=F.fromChip(g,N),te=F.getActiveFiltersCount(L)===0?Object.fromEntries(Object.entries(m).filter(([P])=>P!==u)):{...m,[u]:L};s(te)}},renderFilterContent:g=>{const u=i.find(L=>L.id===g.id);if(!u)return null;const F=x[u.id],N=L=>M(u.id,L);return u.renderFilter(F,N)}}}const oe="_avatar_gwtmy_1",ce="_small_gwtmy_9",de="_medium_gwtmy_13",W={avatar:oe,small:ce,medium:de},G=[{bg:"#E3F2FD",text:"#1976D2"},{bg:"#F3E5F5",text:"#7B1FA2"},{bg:"#E8F5E9",text:"#388E3C"}],me=t=>{const[a,l]=t.trim().split(" ");return a&&l?`${a[0]}${l[0]}`.toUpperCase():t.slice(0,2).toUpperCase()},U=({name:t,size:a="small",colorIndex:l=0})=>{const o=me(t),i=G[l%G.length];return e.jsx("div",{className:ie(W.avatar,W[a]),style:{backgroundColor:i?.bg,color:i?.text},children:e.jsx(B,{variant:"body-xs-semi-bold",children:o})})};U.__docgenInfo={description:"",methods:[],displayName:"UserAvatar",props:{name:{required:!0,tsType:{name:"string"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"",defaultValue:{value:"'small'",computed:!1}},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const ue="_container_sy805_1",pe="_section_sy805_7",he="_header_sy805_14",ge="_searchWrapper_sy805_20",ye="_searchIcon_sy805_26",fe="_searchInput_sy805_36",be="_editorList_sy805_40",ve="_editorItem_sy805_45",Ce="_timeRangeOptions_sy805_51",Te="_radioOption_sy805_57",xe="_customDateRange_sy805_69",Fe="_dateInput_sy805_78",w={container:ue,section:pe,header:he,searchWrapper:ge,searchIcon:ye,searchInput:fe,editorList:be,editorItem:ve,timeRangeOptions:Ce,radioOption:Te,customDateRange:xe,dateInput:Fe},De=[{value:"24h",label:"24 hours"},{value:"week",label:"Last week"},{value:"month",label:"Last month"},{value:"3months",label:"Last 3 months"},{value:"custom",label:"Custom"}],X=({value:t,onChange:a,availableEditors:l})=>{const[o,i]=j.useState(""),y=l.filter(s=>s.name.toLowerCase().includes(o.toLowerCase())).map(s=>({value:s.name,label:s.name,metadata:{colorIndex:s.colorIndex}})),c=y.filter(s=>t.editors.includes(s.value)),n=s=>{a({...t,editors:s.map(x=>x.value)})},r=s=>{a({...t,timeRange:s,...s!=="custom"&&{customFrom:void 0,customTo:void 0}})},d=()=>{a({...t,editors:[]}),i("")},m=()=>{a({...t,timeRange:null,customFrom:void 0,customTo:void 0})};return e.jsxs("div",{className:w.container,children:[e.jsxs("div",{className:w.section,children:[e.jsxs("div",{className:w.header,children:[e.jsx(B,{variant:"body-md-md",children:"Editor"}),t.editors.length>0&&e.jsx(S,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:d,children:"Clear"})]}),e.jsxs("div",{className:w.searchWrapper,children:[e.jsx("div",{className:w.searchIcon,children:e.jsx(E,{icon:"search",size:"tiny"})}),e.jsx($,{placeholder:"Search",value:o,onValueChange:i,size:"default",className:w.searchInput})]}),e.jsx("div",{className:w.editorList,children:e.jsx(Y,{items:y,selectedItems:c,onSelectionChange:n,renderer:s=>e.jsxs("div",{className:w.editorItem,children:[e.jsx(U,{name:s.label,size:"small",colorIndex:s.metadata?.colorIndex||0}),e.jsx(B,{variant:"body-sm-reg",children:s.label})]})})})]}),e.jsxs("div",{className:w.section,children:[e.jsxs("div",{className:w.header,children:[e.jsx(B,{variant:"body-md-md",children:"Last edited"}),t.timeRange&&e.jsx(S,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:m,children:"Clear"})]}),e.jsx("div",{className:w.timeRangeOptions,children:De.map(s=>e.jsxs("label",{className:w.radioOption,children:[e.jsx("input",{type:"radio",name:"timeRange",value:s.value,checked:t.timeRange===s.value,onChange:()=>r(s.value)}),e.jsx(B,{variant:"body-sm-reg",children:s.label})]},s.value))}),t.timeRange==="custom"&&e.jsxs("div",{className:w.customDateRange,children:[e.jsxs("div",{className:w.dateInput,children:[e.jsx(B,{variant:"body-sm-reg",children:"From"}),e.jsx($,{type:"date",value:t.customFrom||"",onValueChange:s=>a({...t,customFrom:s}),size:"default"})]}),e.jsxs("div",{className:w.dateInput,children:[e.jsx(B,{variant:"body-sm-reg",children:"To"}),e.jsx($,{type:"date",value:t.customTo||"",onValueChange:s=>a({...t,customTo:s}),size:"default"})]})]})]})]})};X.__docgenInfo={description:"",methods:[],displayName:"LastEditedFilter",props:{value:{required:!0,tsType:{name:"LastEditedFilterValue"},description:""},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: LastEditedFilterValue) => void",signature:{arguments:[{type:{name:"LastEditedFilterValue"},name:"value"}],return:{name:"void"}}},description:""},availableEditors:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ name: string; colorIndex: number }",signature:{properties:[{key:"name",value:{name:"string",required:!0}},{key:"colorIndex",value:{name:"number",required:!0}}]}}],raw:"Array<{ name: string; colorIndex: number }>"},description:""}}};const we="_container_7pp4u_1",Ie={container:we},Z=({editor:t,timestamp:a,colorIndex:l=0})=>e.jsxs("div",{className:Ie.container,children:[e.jsx(U,{name:t,size:"small",colorIndex:l}),e.jsx(B,{variant:"body-sm-reg",children:a})]});Z.__docgenInfo={description:"",methods:[],displayName:"LastEditedCell",props:{editor:{required:!0,tsType:{name:"string"},description:""},timestamp:{required:!0,tsType:{name:"string"},description:""},colorIndex:{required:!1,tsType:{name:"number"},description:"",defaultValue:{value:"0",computed:!1}}}};const ke=[{value:"active",label:"Active"},{value:"running",label:"Running"},{value:"pending",label:"Pending"},{value:"draft",label:"Draft"},{value:"inactive",label:"Inactive"},{value:"warning",label:"Warning"},{value:"failed",label:"Failed"}],Be={active:"check_circle",running:"change_circle",pending:"pause_circle",draft:"stylus_note",inactive:"stop_circle",warning:"warning",failed:"cancel"},Ne=t=>Be[t],K=t=>{const a=Ne(t);return e.jsx(ae,{icon:a,status:t,size:"small"})},Re=ne({id:"status",label:"Status",items:ke,renderer:t=>K(t.value),chipLabelTemplate:t=>`Status: ${t.label}`,cellRenderer:t=>K(t)}),Ae=re({id:"runningCompleted",label:"Running/Completed",fields:{running:"Running",completed:"Completed"},formatNumber:t=>t.toLocaleString("en-US"),getRowValue:t=>t.getValue("runningCompleted")}),je=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Chance Booths",colorIndex:1},{name:"Lindsey Westerner",colorIndex:2},{name:"Ruben Stanton",colorIndex:0},{name:"Erin Vertus",colorIndex:1},{name:"Neil Sims",colorIndex:2}],Se=(t,a,l)=>{const o=new Date;if(t==="custom")return{from:a?new Date(a):null,to:l?new Date(l):null};if(!t)return{from:null,to:null};const i=new Date;switch(t){case"24h":i.setHours(o.getHours()-24);break;case"week":i.setDate(o.getDate()-7);break;case"month":i.setMonth(o.getMonth()-1);break;case"3months":i.setMonth(o.getMonth()-3);break}return{from:i,to:o}},Ve=t=>new Date(t),Ee=q({id:"lastEdited",label:"Last edited",initialValue:{editors:[],timeRange:null,customFrom:void 0,customTo:void 0},filterFn:(t,a,l)=>{const o=t.getValue(a),{editors:i,timeRange:h,customFrom:y,customTo:c}=l;let n=!0;i.length>0&&(n=i.includes(o.editor));let r=!0;if(h){const{from:d,to:m}=Se(h,y,c);if(d||m){const s=Ve(o.timestamp);r=(!d||s>=d)&&(!m||s<=m)}}return n&&r},toChips:t=>{const a=[];if(t.editors.forEach(l=>{a.push({id:`editor-${l}`,label:`Editor: ${l}`,metadata:{key:"lastEdited",type:"editor",value:l}})}),t.timeRange){let l="";switch(t.timeRange){case"24h":l="Last edited: Last 24 hours";break;case"week":l="Last edited: Last week";break;case"month":l="Last edited: Last month";break;case"3months":l="Last edited: Last 3 months";break;case"custom":{const o=t.customFrom||"...",i=t.customTo||"...";l=`Last edited: ${o} to ${i}`;break}}a.push({id:"timeRange",label:l,metadata:{key:"lastEdited",type:"timeRange"}})}return a},fromChip:(t,a)=>{const{type:l,value:o}=t.metadata||{};return l==="editor"?{...a,editors:a.editors.filter(i=>i!==o)}:l==="timeRange"?{...a,timeRange:null,customFrom:void 0,customTo:void 0}:a},getActiveFiltersCount:t=>{let a=t.editors.length;return t.timeRange&&(a+=1),a},renderFilter:(t,a)=>e.jsx(X,{value:t,onChange:a,availableEditors:je}),cellRenderer:t=>e.jsx(Z,{editor:t.editor,timestamp:t.timestamp,colorIndex:t.colorIndex})}),ee=[Re,Ae,Ee],{expect:v,screen:D,userEvent:C,within:z}=__STORYBOOK_MODULE_TEST__,f=[{name:"Marry Levin",colorIndex:0},{name:"Emery Frank",colorIndex:1},{name:"Ryan Franco",colorIndex:2},{name:"Roger Dias",colorIndex:0},{name:"Lindsey Westerner",colorIndex:1},{name:"Neil Sims",colorIndex:2}],Le=[{id:"status",accessorKey:"status",header:"Status",cell:t=>t.getValue()},{id:"name",accessorKey:"name",header:"Name",cell:t=>t.getValue()},{id:"runningCompleted",accessorKey:"runningCompleted",header:"Running/completed",cell:t=>{const a=t.getValue();return`${String(a.running)}/${String(a.completed)}`}},{id:"category",accessorKey:"category",header:"Category",cell:t=>t.getValue()},{id:"version",accessorKey:"version",header:"Version",cell:t=>t.getValue()},{id:"lastEdited",accessorKey:"lastEdited",header:"Last edited"}],Me=[{id:"1",name:"Scheduled Config Backup",status:"active",runningCompleted:{running:3,completed:41},category:"Network Built",version:"000.0003",lastEdited:{editor:f[0].name,timestamp:"2025-11-26T16:47:00",colorIndex:f[0].colorIndex}},{id:"2",name:"Network Provisioning",status:"running",runningCompleted:{running:8,completed:14},category:"Network Built",version:"000.0002",lastEdited:{editor:f[1].name,timestamp:"2025-11-26T15:32:00",colorIndex:f[1].colorIndex}},{id:"3",name:"Service Provisioning",status:"inactive",runningCompleted:{running:0,completed:243},category:"Network Built",version:"000.0033",lastEdited:{editor:f[2].name,timestamp:"2025-11-25T11:15:00",colorIndex:f[2].colorIndex}},{id:"4",name:"Assign IPv4 Address",status:"active",runningCompleted:{running:14,completed:123},category:"Network Built",version:"000.0001",lastEdited:{editor:f[3].name,timestamp:"2025-11-24T14:20:00",colorIndex:f[3].colorIndex}},{id:"5",name:"Shutdown Decommissioned Device",status:"active",runningCompleted:{running:45,completed:45},category:"Optical Optimization",version:"000.0022",lastEdited:{editor:f[4].name,timestamp:"2025-11-23T13:05:00",colorIndex:f[4].colorIndex}},{id:"6",name:"Optical Power Level Calibration",status:"draft",runningCompleted:{running:99,completed:23},category:"Optical Optimization",version:"000.0001",lastEdited:{editor:f[5].name,timestamp:"2025-11-20T09:30:00",colorIndex:f[5].colorIndex}},{id:"7",name:"Deploy Layer 2 VPN Instance",status:"pending",runningCompleted:{running:49,completed:100},category:"Optical Optimization",version:"000.0012",lastEdited:{editor:f[0].name,timestamp:"2025-11-18T12:45:00",colorIndex:f[0].colorIndex}},{id:"8",name:"Initiate Scheduled Firmware Upgrade",status:"active",runningCompleted:{running:25,completed:75},category:"Service Provisioning",version:"000.0010",lastEdited:{editor:f[1].name,timestamp:"2025-11-15T17:10:00",colorIndex:f[1].colorIndex}},{id:"9",name:"Enable High Availability Mode",status:"running",runningCompleted:{running:77,completed:88},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:f[2].name,timestamp:"2025-11-10T10:22:00",colorIndex:f[2].colorIndex}},{id:"10",name:"Audit Access Control Policies",status:"active",runningCompleted:{running:65,completed:200},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:f[3].name,timestamp:"2025-11-05T15:15:00",colorIndex:f[3].colorIndex}},{id:"11",name:"Synchronize NTP Across Network Nodes",status:"warning",runningCompleted:{running:49,completed:142},category:"Service Provisioning",version:"000.0001",lastEdited:{editor:f[4].name,timestamp:"2025-10-28T08:40:00",colorIndex:f[4].colorIndex}},{id:"12",name:"Validate Optical Link Integrity",status:"failed",runningCompleted:{running:90,completed:300},category:"Network Built",version:"000.0001",lastEdited:{editor:f[5].name,timestamp:"2025-10-15T16:47:00",colorIndex:f[5].colorIndex}}],qt={title:"Design System/Table/Filters",component:H,parameters:{layout:"fullscreen",docs:{description:{component:`
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
`}}},args:{columns:Le,data:Me,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:e.jsx("div",{children:"No data available"}),onRowClick:t=>console.log("Row clicked:",t)},decorators:[t=>e.jsxs("div",{className:p.storyPadding,children:[e.jsx("style",{children:`
            #storybook-root, html, body { height: 100%; }
          `}),e.jsx(t,{})]})]},_={name:"With Filters Panel",parameters:{docs:{description:{story:`
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
`}}},render:function(a){const{columnFilters:l,filterChips:o,filterNavItems:i,enhancedColumns:h,handlers:y,renderFilterContent:c}=Q({filterAdapters:ee,baseColumns:a.columns}),[n,r]=j.useState(!1),[d,m]=j.useState(i[0]?.id||""),s=b=>{b&&!d&&i.length>0&&m(i[0]?.id||""),r(b)},x=b=>{b&&m(b)},k=()=>{y.applyFilters(),r(!1)},R=()=>{y.clearAll(),r(!1)},V=({item:b})=>e.jsxs(e.Fragment,{children:[e.jsx(B,{variant:"body-sm-md",className:p.filterTabLabel,children:b.label}),!!b.count&&e.jsxs("div",{className:p.filterTabBadge,children:[e.jsx("span",{className:p.filterTabDot}),e.jsx(B,{variant:"body-sm-reg",className:p.filterTabCount,children:b.count})]})]});return e.jsxs("div",{className:p.tableFilterContainer,children:[e.jsx("div",{className:p.toolbar,children:e.jsx(S,{design:"v1.2",buttonType:"secondary",onClick:()=>r(!0),children:e.jsx(E,{size:"tiny",icon:"filter_list"})})}),o.length>0&&e.jsx(J,{items:o,onClearAll:R,onItemDelete:y.deleteChip}),e.jsx(H,{...a,columns:h,columnFilters:l}),e.jsxs(I,{style:{height:"600px"},open:n,onOpenChange:s,children:[e.jsxs(I.Header,{className:p.filterHeader,children:[e.jsxs("div",{className:p.headerLeft,children:[e.jsx(E,{icon:"filter_list",size:"small"}),e.jsx(I.Title,{children:"Filters"})]}),e.jsx(I.CloseTrigger,{})]}),e.jsx(I.Body,{className:p.filterBody,children:e.jsxs(A,{className:p.filterTabs,value:d,onValueChange:x,children:[e.jsx(A.List,{className:p.filterTabList,children:i.map(b=>e.jsx(A.Tab,{value:b.id,disabled:b.disabled,children:e.jsx(V,{item:b})},b.id))}),i.map(b=>e.jsx(A.Content,{value:b.id,className:p.filterContent,children:c(b)},b.id))]})}),e.jsxs(I.Footer,{className:p.filterFooter,children:[e.jsxs(S,{design:"v1.2",variant:"filled",buttonType:"secondary",onClick:R,children:[e.jsx(E,{icon:"close",size:"tiny"}),"Clear all"]}),e.jsx(I.Actions,{children:e.jsx(S,{design:"v1.2",variant:"filled",buttonType:"primary",onClick:k,children:"Apply"})})]})]})]})},args:{},play:async({canvasElement:t})=>{const a=z(t),l=()=>a.getAllByRole("row").filter(R=>!R.querySelector("th"));await v(l()).toHaveLength(12);const o=a.getByRole("button",{name:/filter/i});await C.click(o);const i=D.getByRole("tab",{name:/status/i}),h=D.getByRole("tab",{name:/running\/completed/i}),y=D.getByRole("tab",{name:/last edited/i});await C.click(i);const c=D.getByRole("checkbox",{name:/^active$/i}),n=D.getByRole("checkbox",{name:/^running$/i});await C.click(c),await C.click(n),await v(c).toBeChecked(),await v(n).toBeChecked(),await C.click(h);const[r,d]=D.getAllByRole("spinbutton");await C.type(r,"0"),await C.type(d,"50"),await C.click(y);const m=D.getByRole("checkbox",{name:/marry levin/i}),s=D.getByRole("radio",{name:/last 3 months/i});await C.click(m),await C.click(s),await v(m).toBeChecked(),await v(s).toBeChecked(),await C.click(D.getByRole("button",{name:/apply/i})),await v(a.getByText(/status: active/i)).toBeInTheDocument(),await v(a.getByText(/status: running/i)).toBeInTheDocument(),await v(a.getByText(/running.*0.*50/i)).toBeInTheDocument(),await v(a.getByText(/editor: marry levin/i)).toBeInTheDocument(),await v(a.getByText(/last 3 months/i)).toBeInTheDocument(),await v(l().length).toBeLessThan(12),await C.click(o),await C.click(D.getByRole("tab",{name:/status/i})),await v(D.getByRole("checkbox",{name:/^active$/i})).toBeChecked(),await v(D.getByRole("checkbox",{name:/^running$/i})).toBeChecked(),await C.click(D.getByRole("button",{name:/apply/i}));const x=a.getByRole("button",{name:/status: active/i}),k=z(x).getByRole("button",{name:/delete/i});await C.click(k),await v(a.queryByRole("button",{name:/status: active/i})).not.toBeInTheDocument(),await C.click(a.getByRole("button",{name:/clear all/i})),await v(a.queryByText(/status:/i)).not.toBeInTheDocument(),await v(l()).toHaveLength(12)}},O={name:"Controlled Mode",parameters:{docs:{description:{story:`
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
`}}},render:function(a){const[l,o]=j.useState({}),{columnFilters:i,filterChips:h,filterNavItems:y,enhancedColumns:c,handlers:n,renderFilterContent:r}=Q({filterAdapters:ee,baseColumns:a.columns,appliedFilters:l,onFiltersChange:o}),[d,m]=j.useState(!1),[s,x]=j.useState(y[0]?.id||""),k=T=>{T&&!s&&y.length>0&&x(y[0]?.id||""),m(T)},R=T=>{T&&x(T)},V=()=>{n.applyFilters(),m(!1)},b=()=>{n.clearAll(),m(!1)},M=({item:T})=>e.jsxs(e.Fragment,{children:[e.jsx(B,{variant:"body-sm-md",className:p.filterTabLabel,children:T.label}),!!T.count&&e.jsxs("div",{className:p.filterTabBadge,children:[e.jsx("span",{className:p.filterTabDot}),e.jsx(B,{variant:"body-sm-reg",className:p.filterTabCount,children:T.count})]})]});return e.jsxs("div",{className:p.tableFilterContainer,children:[e.jsxs("div",{className:p.debugPanel,children:[e.jsx(B,{variant:"body-sm-md",children:"External Filter State (controlled):"}),e.jsx("pre",{className:p.debugCode,children:JSON.stringify(l,null,2)||"{}"})]}),e.jsx("div",{className:p.toolbar,children:e.jsx(S,{design:"v1.2",buttonType:"secondary",onClick:()=>m(!0),children:e.jsx(E,{size:"tiny",icon:"filter_list"})})}),h.length>0&&e.jsx(J,{items:h,onClearAll:b,onItemDelete:n.deleteChip}),e.jsx(H,{...a,columns:c,columnFilters:i}),e.jsxs(I,{style:{height:"600px"},open:d,onOpenChange:k,children:[e.jsxs(I.Header,{className:p.filterHeader,children:[e.jsxs("div",{className:p.headerLeft,children:[e.jsx(E,{icon:"filter_list",size:"small"}),e.jsx(I.Title,{children:"Filters"})]}),e.jsx(I.CloseTrigger,{})]}),e.jsx(I.Body,{className:p.filterBody,children:e.jsxs(A,{className:p.filterTabs,value:s,onValueChange:R,children:[e.jsx(A.List,{className:p.filterTabList,children:y.map(T=>e.jsx(A.Tab,{value:T.id,disabled:T.disabled,children:e.jsx(M,{item:T})},T.id))}),y.map(T=>e.jsx(A.Content,{value:T.id,className:p.filterContent,children:r(T)},T.id))]})}),e.jsxs(I.Footer,{className:p.filterFooter,children:[e.jsxs(S,{design:"v1.2",variant:"filled",buttonType:"secondary",onClick:b,children:[e.jsx(E,{icon:"close",size:"tiny"}),"Clear all"]}),e.jsx(I.Actions,{children:e.jsx(S,{design:"v1.2",variant:"filled",buttonType:"primary",onClick:V,children:"Apply"})})]})]})]})},args:{},play:async({canvasElement:t})=>{const a=z(t),l=a.getByText("External Filter State (controlled):");await v(l).toBeInTheDocument(),await v(a.getByText("{}")).toBeInTheDocument();const o=a.getByRole("button",{name:/filter/i});await C.click(o);const i=D.getByRole("tab",{name:/status/i});await C.click(i);const h=D.getByRole("checkbox",{name:/^active$/i});await C.click(h),await C.click(D.getByRole("button",{name:/apply/i})),await v(a.getByText(/"status"/)).toBeInTheDocument(),await v(a.getByText(/status: active/i)).toBeInTheDocument(),await C.click(a.getByRole("button",{name:/clear all/i})),await v(a.getByText("{}")).toBeInTheDocument(),await v(a.queryByText(/status: active/i)).not.toBeInTheDocument()}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
}`,..._.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};const Ut=["FiltersPanel","Controlled"];export{O as Controlled,_ as FiltersPanel,Ut as __namedExportsOrder,qt as default};
