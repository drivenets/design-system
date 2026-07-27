import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{Z as n,k as r}from"./iframe-CFEz-V9V.js";import{t as i}from"./classnames-Dm_LJ4P4.js";import{t as a}from"./ds-icon-B2N08Sw8.js";import{t as o}from"./ds-icon-Dk2vIvHM.js";import{n as s,t as c}from"./ds-typography-BV2vCWbY.js";import{n as l,t as u}from"./ds-button-v3-DqVcCHrs.js";import{r as d}from"./ds-text-input.types-C5sAJBYh.js";import{t as f}from"./ds-text-input-BoojeEC3.js";import{t as p}from"./ds-status-badge-BHKIcUct.js";import{t as m}from"./ds-status-badge-CwekAvo9.js";import{n as h,t as g}from"./ds-button-Bhzc0PrJ.js";import{n as _,t as v}from"./ds-table-Cp3NEG0I.js";import{c as y,d as b,i as ee,l as te,n as ne,o as re,r as ie,t as ae}from"./filters-D01BPRmA.js";import{t as oe}from"./ds-tag-filter-M5Wa-21h.js";import{t as se}from"./ds-tag-filter-CB0ZtGuF.js";import{t as x}from"./ds-modal-Bpg-V1O8.js";import{t as ce}from"./ds-modal-HkOtbfeQ.js";import{n as le,t as S}from"./ds-table.stories.module-BH4xkOob.js";import{n as ue,t as C}from"./ds-vertical-tabs-COcDq-57.js";var de=e((()=>{ue()})),fe,pe,me,w,he=e((()=>{fe=`_avatar_gwtmy_1`,pe=`_small_gwtmy_9`,me=`_medium_gwtmy_13`,w={avatar:fe,small:pe,medium:me}})),T,E,D,ge,O,_e=e((()=>{T=t(i(),1),c(),he(),E=r(),D=[{bg:`#E3F2FD`,text:`#1976D2`},{bg:`#F3E5F5`,text:`#7B1FA2`},{bg:`#E8F5E9`,text:`#388E3C`}],ge=e=>{let[t,n]=e.trim().split(` `);return t&&n?`${t[0]}${n[0]}`.toUpperCase():e.slice(0,2).toUpperCase()},O=({name:e,size:t=`small`,colorIndex:n=0})=>{let r=ge(e),i=D[n%D.length];return(0,E.jsx)(`div`,{className:(0,T.default)(w.avatar,w[t]),style:{backgroundColor:i?.bg,color:i?.text},children:(0,E.jsx)(s,{variant:`body-xs-semi-bold`,children:r})})},O.__docgenInfo={description:``,methods:[],displayName:`UserAvatar`,props:{name:{required:!0,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`}]},description:``,defaultValue:{value:`'small'`,computed:!1}},colorIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}}}}})),ve,ye,be,xe,Se,Ce,k,A,j,M,N,P,F,we=e((()=>{ve=`_container_1xmkv_1`,ye=`_section_1xmkv_7`,be=`_header_1xmkv_14`,xe=`_searchWrapper_1xmkv_20`,Se=`_searchIcon_1xmkv_26`,Ce=`_searchInput_1xmkv_36`,k=`_editorList_1xmkv_40`,A=`_editorItem_1xmkv_45`,j=`_timeRangeOptions_1xmkv_51`,M=`_radioOption_1xmkv_57`,N=`_customDateRange_1xmkv_69`,P=`_dateInput_1xmkv_78`,F={container:ve,section:ye,header:be,searchWrapper:xe,searchIcon:Se,searchInput:Ce,editorList:k,editorItem:A,timeRangeOptions:j,radioOption:M,customDateRange:N,dateInput:P}})),I,L,Te,R,Ee=e((()=>{I=t(n(),1),_e(),y(),we(),c(),g(),o(),f(),L=r(),Te=[{value:`24h`,label:`24 hours`},{value:`week`,label:`Last week`},{value:`month`,label:`Last month`},{value:`3months`,label:`Last 3 months`},{value:`custom`,label:`Custom`}],R=({value:e,onChange:t,availableEditors:n})=>{let[r,i]=(0,I.useState)(``),o=n.filter(e=>e.name.toLowerCase().includes(r.toLowerCase())).map(e=>({value:e.name,label:e.name,metadata:{colorIndex:e.colorIndex}})),c=o.filter(t=>e.editors.includes(t.value)),l=n=>{t({...e,editors:n.map(e=>e.value)})},u=n=>{t({...e,timeRange:n,...n!==`custom`&&{customFrom:void 0,customTo:void 0}})};return(0,L.jsxs)(`div`,{className:F.container,children:[(0,L.jsxs)(`div`,{className:F.section,children:[(0,L.jsxs)(`div`,{className:F.header,children:[(0,L.jsx)(s,{variant:`body-md-md`,children:`Editor`}),e.editors.length>0&&(0,L.jsx)(h,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:()=>{t({...e,editors:[]}),i(``)},children:`Clear`})]}),(0,L.jsxs)(`div`,{className:F.searchWrapper,children:[(0,L.jsx)(`div`,{className:F.searchIcon,children:(0,L.jsx)(a,{icon:`search`,size:`tiny`})}),(0,L.jsx)(d,{placeholder:`Search`,value:r,onValueChange:i,size:`default`,className:F.searchInput})]}),(0,L.jsx)(`div`,{className:F.editorList,children:(0,L.jsx)(te,{items:o,selectedItems:c,onSelectionChange:l,renderer:e=>(0,L.jsxs)(`div`,{className:F.editorItem,children:[(0,L.jsx)(O,{name:e.label,size:`small`,colorIndex:e.metadata?.colorIndex||0}),(0,L.jsx)(s,{variant:`body-sm-reg`,children:e.label})]})})})]}),(0,L.jsxs)(`div`,{className:F.section,children:[(0,L.jsxs)(`div`,{className:F.header,children:[(0,L.jsx)(s,{variant:`body-md-md`,children:`Last edited`}),e.timeRange&&(0,L.jsx)(h,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:()=>{t({...e,timeRange:null,customFrom:void 0,customTo:void 0})},children:`Clear`})]}),(0,L.jsx)(`div`,{className:F.timeRangeOptions,children:Te.map(t=>(0,L.jsxs)(`label`,{className:F.radioOption,children:[(0,L.jsx)(`input`,{type:`radio`,name:`timeRange`,value:t.value,checked:e.timeRange===t.value,onChange:()=>u(t.value)}),(0,L.jsx)(s,{variant:`body-sm-reg`,children:t.label})]},t.value))}),e.timeRange===`custom`&&(0,L.jsxs)(`div`,{className:F.customDateRange,children:[(0,L.jsxs)(`div`,{className:F.dateInput,children:[(0,L.jsx)(s,{variant:`body-sm-reg`,children:`From`}),(0,L.jsx)(d,{type:`date`,value:e.customFrom||``,onValueChange:n=>t({...e,customFrom:n}),size:`default`})]}),(0,L.jsxs)(`div`,{className:F.dateInput,children:[(0,L.jsx)(s,{variant:`body-sm-reg`,children:`To`}),(0,L.jsx)(d,{type:`date`,value:e.customTo||``,onValueChange:n=>t({...e,customTo:n}),size:`default`})]})]})]})]})},R.__docgenInfo={description:``,methods:[],displayName:`LastEditedFilter`,props:{value:{required:!0,tsType:{name:`LastEditedFilterValue`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: LastEditedFilterValue) => void`,signature:{arguments:[{type:{name:`LastEditedFilterValue`},name:`value`}],return:{name:`void`}}},description:``},availableEditors:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ name: string; colorIndex: number }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`colorIndex`,value:{name:`number`,required:!0}}]}}],raw:`Array<{ name: string; colorIndex: number }>`},description:``}}}})),De,Oe,ke=e((()=>{De=`_container_7pp4u_1`,Oe={container:De}})),z,B,Ae=e((()=>{c(),_e(),ke(),z=r(),B=({editor:e,timestamp:t,colorIndex:n=0})=>(0,z.jsxs)(`div`,{className:Oe.container,children:[(0,z.jsx)(O,{name:e,size:`small`,colorIndex:n}),(0,z.jsx)(s,{variant:`body-sm-reg`,children:t})]}),B.__docgenInfo={description:``,methods:[],displayName:`LastEditedCell`,props:{editor:{required:!0,tsType:{name:`string`},description:``},timestamp:{required:!0,tsType:{name:`string`},description:``},colorIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}}}}})),V,je,Me,Ne,H,Pe,Fe,Ie,U,Le,Re,W,ze=e((()=>{m(),o(),ae(),Ee(),Ae(),V=r(),je=[{value:`active`,label:`Active`},{value:`running`,label:`Running`},{value:`pending`,label:`Pending`},{value:`draft`,label:`Draft`},{value:`inactive`,label:`Inactive`},{value:`warning`,label:`Warning`},{value:`failed`,label:`Failed`}],Me={active:`check_circle`,running:`change_circle`,pending:`pause_circle`,draft:`stylus_note`,inactive:`stop_circle`,warning:`warning`,failed:`cancel`},Ne=e=>Me[e],H=e=>(0,V.jsx)(p,{icon:Ne(e),status:e,size:`small`}),Pe=re({id:`status`,label:`Status`,items:je,renderer:e=>H(e.value),chipLabelTemplate:e=>`Status: ${e.label}`,cellRenderer:e=>H(e)}),Fe=ee({id:`runningCompleted`,label:`Running/Completed`,fields:{running:`Running`,completed:`Completed`},formatNumber:e=>e.toLocaleString(`en-US`),getRowValue:e=>e.getValue(`runningCompleted`)}),Ie=[{name:`Marry Levin`,colorIndex:0},{name:`Emery Frank`,colorIndex:1},{name:`Ryan Franco`,colorIndex:2},{name:`Roger Dias`,colorIndex:0},{name:`Chance Booths`,colorIndex:1},{name:`Lindsey Westerner`,colorIndex:2},{name:`Ruben Stanton`,colorIndex:0},{name:`Erin Vertus`,colorIndex:1},{name:`Neil Sims`,colorIndex:2}],U=(e,t,n)=>{let r=new Date;if(e===`custom`)return{from:t?new Date(t):null,to:n?new Date(n):null};if(!e)return{from:null,to:null};let i=new Date;switch(e){case`24h`:i.setHours(r.getHours()-24);break;case`week`:i.setDate(r.getDate()-7);break;case`month`:i.setMonth(r.getMonth()-1);break;case`3months`:i.setMonth(r.getMonth()-3);break}return{from:i,to:r}},Le=e=>new Date(e),Re=b({id:`lastEdited`,label:`Last edited`,initialValue:{editors:[],timeRange:null,customFrom:void 0,customTo:void 0},filterFn:(e,t,n)=>{let r=e.getValue(t),{editors:i,timeRange:a,customFrom:o,customTo:s}=n,c=!0;i.length>0&&(c=i.includes(r.editor));let l=!0;if(a){let{from:e,to:t}=U(a,o,s);if(e||t){let n=Le(r.timestamp);l=(!e||n>=e)&&(!t||n<=t)}}return c&&l},toChips:e=>{let t=[];if(e.editors.forEach(e=>{t.push({id:`editor-${e}`,label:`Editor: ${e}`,metadata:{key:`lastEdited`,type:`editor`,value:e}})}),e.timeRange){let n=``;switch(e.timeRange){case`24h`:n=`Last edited: Last 24 hours`;break;case`week`:n=`Last edited: Last week`;break;case`month`:n=`Last edited: Last month`;break;case`3months`:n=`Last edited: Last 3 months`;break;case`custom`:n=`Last edited: ${e.customFrom||`...`} to ${e.customTo||`...`}`;break}t.push({id:`timeRange`,label:n,metadata:{key:`lastEdited`,type:`timeRange`}})}return t},fromChip:(e,t)=>{let{type:n,value:r}=e.metadata||{};return n===`editor`?{...t,editors:t.editors.filter(e=>e!==r)}:n===`timeRange`?{...t,timeRange:null,customFrom:void 0,customTo:void 0}:t},getActiveFiltersCount:e=>{let t=e.editors.length;return e.timeRange&&(t+=1),t},renderFilter:(e,t)=>(0,V.jsx)(R,{value:e,onChange:t,availableEditors:Ie}),cellRenderer:e=>(0,V.jsx)(B,{editor:e.editor,timestamp:e.timestamp,colorIndex:e.colorIndex})}),W=[Pe,Fe,Re]})),G,K,q,J,Y,X,Z,Be,Q,$,Ve;e((()=>{G=t(n(),1),o(),_(),l(),ce(),de(),c(),se(),ne(),ze(),le(),K=r(),{expect:q,screen:J,userEvent:Y,within:X}=__STORYBOOK_MODULE_TEST__,Z=[{name:`Marry Levin`,colorIndex:0},{name:`Emery Frank`,colorIndex:1},{name:`Ryan Franco`,colorIndex:2},{name:`Roger Dias`,colorIndex:0},{name:`Lindsey Westerner`,colorIndex:1},{name:`Neil Sims`,colorIndex:2}],Be={title:`Components/Table/Filters`,component:v,parameters:{layout:`fullscreen`,docs:{description:{component:`
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
    filterChips,         // For DsTagFilter
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
      <DsButtonV3 variant="secondary" icon="filter_list" onClick={() => setIsModalOpen(true)} />

      {filterChips.length > 0 && (
        <DsTagFilter
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
  toChips: (value) => TagFilterItem[],
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
`}}},args:{columns:[{id:`status`,accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{id:`name`,accessorKey:`name`,header:`Name`,cell:e=>e.getValue()},{id:`runningCompleted`,accessorKey:`runningCompleted`,header:`Running/completed`,cell:e=>{let t=e.getValue();return`${String(t.running)}/${String(t.completed)}`}},{id:`category`,accessorKey:`category`,header:`Category`,cell:e=>e.getValue()},{id:`version`,accessorKey:`version`,header:`Version`,cell:e=>e.getValue()},{id:`lastEdited`,accessorKey:`lastEdited`,header:`Last edited`}],data:[{id:`1`,name:`Scheduled Config Backup`,status:`active`,runningCompleted:{running:3,completed:41},category:`Network Built`,version:`000.0003`,lastEdited:{editor:Z[0].name,timestamp:`2025-11-26T16:47:00`,colorIndex:Z[0].colorIndex}},{id:`2`,name:`Network Provisioning`,status:`running`,runningCompleted:{running:8,completed:14},category:`Network Built`,version:`000.0002`,lastEdited:{editor:Z[1].name,timestamp:`2025-11-26T15:32:00`,colorIndex:Z[1].colorIndex}},{id:`3`,name:`Service Provisioning`,status:`inactive`,runningCompleted:{running:0,completed:243},category:`Network Built`,version:`000.0033`,lastEdited:{editor:Z[2].name,timestamp:`2025-11-25T11:15:00`,colorIndex:Z[2].colorIndex}},{id:`4`,name:`Assign IPv4 Address`,status:`active`,runningCompleted:{running:14,completed:123},category:`Network Built`,version:`000.0001`,lastEdited:{editor:Z[3].name,timestamp:`2025-11-24T14:20:00`,colorIndex:Z[3].colorIndex}},{id:`5`,name:`Shutdown Decommissioned Device`,status:`active`,runningCompleted:{running:45,completed:45},category:`Optical Optimization`,version:`000.0022`,lastEdited:{editor:Z[4].name,timestamp:`2025-11-23T13:05:00`,colorIndex:Z[4].colorIndex}},{id:`6`,name:`Optical Power Level Calibration`,status:`draft`,runningCompleted:{running:99,completed:23},category:`Optical Optimization`,version:`000.0001`,lastEdited:{editor:Z[5].name,timestamp:`2025-11-20T09:30:00`,colorIndex:Z[5].colorIndex}},{id:`7`,name:`Deploy Layer 2 VPN Instance`,status:`pending`,runningCompleted:{running:49,completed:100},category:`Optical Optimization`,version:`000.0012`,lastEdited:{editor:Z[0].name,timestamp:`2025-11-18T12:45:00`,colorIndex:Z[0].colorIndex}},{id:`8`,name:`Initiate Scheduled Firmware Upgrade`,status:`active`,runningCompleted:{running:25,completed:75},category:`Service Provisioning`,version:`000.0010`,lastEdited:{editor:Z[1].name,timestamp:`2025-11-15T17:10:00`,colorIndex:Z[1].colorIndex}},{id:`9`,name:`Enable High Availability Mode`,status:`running`,runningCompleted:{running:77,completed:88},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:Z[2].name,timestamp:`2025-11-10T10:22:00`,colorIndex:Z[2].colorIndex}},{id:`10`,name:`Audit Access Control Policies`,status:`active`,runningCompleted:{running:65,completed:200},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:Z[3].name,timestamp:`2025-11-05T15:15:00`,colorIndex:Z[3].colorIndex}},{id:`11`,name:`Synchronize NTP Across Network Nodes`,status:`warning`,runningCompleted:{running:49,completed:142},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:Z[4].name,timestamp:`2025-10-28T08:40:00`,colorIndex:Z[4].colorIndex}},{id:`12`,name:`Validate Optical Link Integrity`,status:`failed`,runningCompleted:{running:90,completed:300},category:`Network Built`,version:`000.0001`,lastEdited:{editor:Z[5].name,timestamp:`2025-10-15T16:47:00`,colorIndex:Z[5].colorIndex}}],stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,K.jsx)(`div`,{children:`No data available`}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[e=>(0,K.jsxs)(`div`,{className:S.storyPadding,children:[(0,K.jsx)(`style`,{children:`
            #storybook-root, html, body { height: 100%; }
          `}),(0,K.jsx)(e,{})]})]},Q={name:`Toolbar — Filters Panel`,parameters:{docs:{description:{story:`
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
     filterChips,         // Pass to DsTagFilter
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
    <DsButtonV3 variant="secondary" onClick={handleClearAll}>Clear all</DsButtonV3>
    <DsModal.Actions>
      <DsButtonV3 onClick={handleApply}>Apply</DsButtonV3>
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
`}}},render:function(e){let{columnFilters:t,filterChips:n,filterNavItems:r,enhancedColumns:i,handlers:o,renderFilterContent:c}=ie({filterAdapters:W,baseColumns:e.columns}),[l,d]=(0,G.useState)(!1),[f,p]=(0,G.useState)(r[0]?.id||``),m=e=>{e&&!f&&r.length>0&&p(r[0]?.id||``),d(e)},h=e=>{e&&p(e)},g=()=>{o.applyFilters(),d(!1)},_=()=>{o.clearAll(),d(!1)},y=({item:e})=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(s,{variant:`body-sm-md`,className:S.filterTabLabel,children:e.label}),!!e.count&&(0,K.jsxs)(`div`,{className:S.filterTabBadge,children:[(0,K.jsx)(`span`,{className:S.filterTabDot}),(0,K.jsx)(s,{variant:`body-sm-reg`,className:S.filterTabCount,children:e.count})]})]});return(0,K.jsxs)(`div`,{className:S.tableFilterContainer,children:[(0,K.jsx)(`div`,{className:S.toolbar,children:(0,K.jsx)(u,{variant:`secondary`,icon:`filter_list`,"aria-label":`Filter`,onClick:()=>d(!0)})}),n.length>0&&(0,K.jsx)(oe,{items:n,onClearAll:_,onItemDelete:o.deleteChip}),(0,K.jsx)(v,{...e,columns:i,columnFilters:t}),(0,K.jsxs)(x,{style:{height:`600px`},open:l,onOpenChange:m,children:[(0,K.jsxs)(x.Header,{className:S.filterHeader,children:[(0,K.jsxs)(`div`,{className:S.headerLeft,children:[(0,K.jsx)(a,{icon:`filter_list`,size:`small`}),(0,K.jsx)(x.Title,{children:`Filters`})]}),(0,K.jsx)(x.CloseTrigger,{})]}),(0,K.jsx)(x.Body,{className:S.filterBody,children:(0,K.jsxs)(C,{className:S.filterTabs,value:f,onValueChange:h,children:[(0,K.jsx)(C.List,{className:S.filterTabList,children:r.map(e=>(0,K.jsx)(C.Tab,{value:e.id,disabled:e.disabled,children:(0,K.jsx)(y,{item:e})},e.id))}),r.map(e=>(0,K.jsx)(C.Content,{value:e.id,className:S.filterContent,children:c(e)},e.id))]})}),(0,K.jsxs)(x.Footer,{className:S.filterFooter,children:[(0,K.jsx)(u,{variant:`secondary`,icon:`close`,onClick:_,children:`Clear all`}),(0,K.jsx)(x.Actions,{children:(0,K.jsx)(u,{variant:`primary`,onClick:g,children:`Apply`})})]})]})]})},play:async({canvasElement:e})=>{let t=X(e),n=()=>t.getAllByRole(`row`).filter(e=>!e.querySelector(`th`));await q(n()).toHaveLength(12);let r=t.getByRole(`button`,{name:/filter/i});await Y.click(r);let i=J.getByRole(`tab`,{name:/status/i}),a=J.getByRole(`tab`,{name:/running\/completed/i}),o=J.getByRole(`tab`,{name:/last edited/i});await Y.click(i);let s=J.getByRole(`checkbox`,{name:/^active$/i}),c=J.getByRole(`checkbox`,{name:/^running$/i});await Y.click(s),await Y.click(c),await q(s).toBeChecked(),await q(c).toBeChecked(),await Y.click(a);let[l,u]=J.getAllByRole(`spinbutton`);await Y.type(l,`0`),await Y.type(u,`50`),await Y.click(o);let d=J.getByRole(`checkbox`,{name:/marry levin/i}),f=J.getByRole(`radio`,{name:/last 3 months/i});await Y.click(d),await Y.click(f),await q(d).toBeChecked(),await q(f).toBeChecked(),await Y.click(J.getByRole(`button`,{name:/apply/i})),await q(t.getByText(/status: active/i)).toBeInTheDocument(),await q(t.getByText(/status: running/i)).toBeInTheDocument(),await q(t.getByText(/running.*0.*50/i)).toBeInTheDocument(),await q(t.getByText(/editor: marry levin/i)).toBeInTheDocument(),await q(t.getByText(/last 3 months/i)).toBeInTheDocument(),await q(n().length).toBeLessThan(12),await Y.click(r),await Y.click(J.getByRole(`tab`,{name:/status/i})),await q(J.getByRole(`checkbox`,{name:/^active$/i})).toBeChecked(),await q(J.getByRole(`checkbox`,{name:/^running$/i})).toBeChecked(),await Y.click(J.getByRole(`button`,{name:/apply/i}));let p=X(t.getByRole(`button`,{name:/status: active/i})).getByLabelText(/delete tag/i);await Y.click(p),await q(t.queryByRole(`button`,{name:/status: active/i})).not.toBeInTheDocument(),await Y.click(t.getByRole(`button`,{name:/clear all/i})),await q(t.queryByText(/status:/i)).not.toBeInTheDocument(),await q(n()).toHaveLength(12)}},$={name:`Toolbar — Controlled`,parameters:{docs:{description:{story:`
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
`}}},render:function(e){let[t,n]=(0,G.useState)({}),{columnFilters:r,filterChips:i,filterNavItems:o,enhancedColumns:c,handlers:l,renderFilterContent:d}=ie({filterAdapters:W,baseColumns:e.columns,appliedFilters:t,onFiltersChange:n}),[f,p]=(0,G.useState)(!1),[m,h]=(0,G.useState)(o[0]?.id||``),g=e=>{e&&!m&&o.length>0&&h(o[0]?.id||``),p(e)},_=e=>{e&&h(e)},y=()=>{l.applyFilters(),p(!1)},b=()=>{l.clearAll(),p(!1)},ee=({item:e})=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(s,{variant:`body-sm-md`,className:S.filterTabLabel,children:e.label}),!!e.count&&(0,K.jsxs)(`div`,{className:S.filterTabBadge,children:[(0,K.jsx)(`span`,{className:S.filterTabDot}),(0,K.jsx)(s,{variant:`body-sm-reg`,className:S.filterTabCount,children:e.count})]})]});return(0,K.jsxs)(`div`,{className:S.tableFilterContainer,children:[(0,K.jsxs)(`div`,{className:S.debugPanel,children:[(0,K.jsx)(s,{variant:`body-sm-md`,children:`External Filter State (controlled):`}),(0,K.jsx)(`pre`,{className:S.debugCode,children:JSON.stringify(t,null,2)||`{}`})]}),(0,K.jsx)(`div`,{className:S.toolbar,children:(0,K.jsx)(u,{variant:`secondary`,icon:`filter_list`,"aria-label":`Filter`,onClick:()=>p(!0)})}),i.length>0&&(0,K.jsx)(oe,{items:i,onClearAll:b,onItemDelete:l.deleteChip}),(0,K.jsx)(v,{...e,columns:c,columnFilters:r}),(0,K.jsxs)(x,{style:{height:`600px`},open:f,onOpenChange:g,children:[(0,K.jsxs)(x.Header,{className:S.filterHeader,children:[(0,K.jsxs)(`div`,{className:S.headerLeft,children:[(0,K.jsx)(a,{icon:`filter_list`,size:`small`}),(0,K.jsx)(x.Title,{children:`Filters`})]}),(0,K.jsx)(x.CloseTrigger,{})]}),(0,K.jsx)(x.Body,{className:S.filterBody,children:(0,K.jsxs)(C,{className:S.filterTabs,value:m,onValueChange:_,children:[(0,K.jsx)(C.List,{className:S.filterTabList,children:o.map(e=>(0,K.jsx)(C.Tab,{value:e.id,disabled:e.disabled,children:(0,K.jsx)(ee,{item:e})},e.id))}),o.map(e=>(0,K.jsx)(C.Content,{value:e.id,className:S.filterContent,children:d(e)},e.id))]})}),(0,K.jsxs)(x.Footer,{className:S.filterFooter,children:[(0,K.jsx)(u,{variant:`secondary`,icon:`close`,onClick:b,children:`Clear all`}),(0,K.jsx)(x.Actions,{children:(0,K.jsx)(u,{variant:`primary`,onClick:y,children:`Apply`})})]})]})]})},play:async({canvasElement:e})=>{let t=X(e);await q(t.getByText(`External Filter State (controlled):`)).toBeInTheDocument(),await q(t.getByText(`{}`)).toBeInTheDocument();let n=t.getByRole(`button`,{name:/filter/i});await Y.click(n);let r=J.getByRole(`tab`,{name:/status/i});await Y.click(r);let i=J.getByRole(`checkbox`,{name:/^active$/i});await Y.click(i),await Y.click(J.getByRole(`button`,{name:/apply/i})),await q(t.getByText(/"status"/)).toBeInTheDocument(),await q(t.getByText(/status: active/i)).toBeInTheDocument(),await Y.click(t.getByRole(`button`,{name:/clear all/i})),await q(t.getByText(`{}`)).toBeInTheDocument(),await q(t.queryByText(/status: active/i)).not.toBeInTheDocument()}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar — Filters Panel',
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
     filterChips,         // Pass to DsTagFilter
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
    <DsButtonV3 variant="secondary" onClick={handleClearAll}>Clear all</DsButtonV3>
    <DsModal.Actions>
      <DsButtonV3 onClick={handleApply}>Apply</DsButtonV3>
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
    const [selectedFilterId, setSelectedFilterId] = useState(filterNavItems[0]?.id || '');

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
                    <DsButtonV3 variant="secondary" icon="filter_list" aria-label="Filter" onClick={() => setIsOpen(true)} />
                </div>

                {/* Filter chips (automatically generated from filter state) */}
                {filterChips.length > 0 && <DsTagFilter items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />}

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
                        <DsButtonV3 variant="secondary" icon="close" onClick={handleClearAll}>
                            Clear all
                        </DsButtonV3>
                        <DsModal.Actions>
                            <DsButtonV3 variant="primary" onClick={handleApply}>
                                Apply
                            </DsButtonV3>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </div>;
  },
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

    // 9. Delete individual chip. DsTagFilter renders a \`Delete tag\` X inside each
    // chip; the chip itself is also role="button", so the nested button is
    // excluded from the accessibility tree — query by label directly.
    const activeChip = canvas.getByRole('button', {
      name: /status: active/i
    });
    const deleteButton = within(activeChip).getByLabelText(/delete tag/i);
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar — Controlled',
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
    const [selectedFilterId, setSelectedFilterId] = useState(filterNavItems[0]?.id || '');
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
                    <DsButtonV3 variant="secondary" icon="filter_list" aria-label="Filter" onClick={() => setIsOpen(true)} />
                </div>

                {filterChips.length > 0 && <DsTagFilter items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />}

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
                        <DsButtonV3 variant="secondary" icon="close" onClick={handleClearAll}>
                            Clear all
                        </DsButtonV3>
                        <DsModal.Actions>
                            <DsButtonV3 variant="primary" onClick={handleApply}>
                                Apply
                            </DsButtonV3>
                        </DsModal.Actions>
                    </DsModal.Footer>
                </DsModal>
            </div>;
  },
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
}`,...$.parameters?.docs?.source}}},Ve=[`FiltersPanel`,`Controlled`]}))();export{$ as Controlled,Q as FiltersPanel,Ve as __namedExportsOrder,Be as default};