import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-CVToiagn.js";import{t as i}from"./classnames-DavMFNTn.js";import{n as a,t as o}from"./ds-icon-BFd6mDUz.js";import{n as s,t as c}from"./ds-typography-CU7wpsm-.js";import{n as l,t as u}from"./ds-button-v3-6qsOZGyx.js";import{n as d,t as f}from"./ds-stack-CJl_Nl8-.js";import{t as p}from"./ds-text-input-CY-pmJAF.js";import{t as m}from"./ds-text-input-B4aDvQ7w.js";import{n as h,t as g}from"./ds-status-badge-Cu7aaQD9.js";import{n as _,t as v}from"./ds-button-BGiaRJuK.js";import{n as y,t as b}from"./ds-table-BrkvodCS.js";import{c as x,d as ee,i as te,l as ne,n as re,o as ie,r as S,t as ae}from"./filters-y4v9hW0f.js";import{t as C}from"./ds-tag-filter-D0C4e5C4.js";import{t as oe}from"./ds-tag-filter-BpWwUl3G.js";import{t as w}from"./ds-modal-DgeTwxw6.js";import{t as se}from"./ds-modal-C7yICjZe.js";import{t as T}from"./ds-vertical-tabs-Ww_xp6y8.js";import{t as ce}from"./ds-vertical-tabs-DtSdVbfz.js";import{i as le,n as ue,r as E,t as de}from"./story-decorators--lRO_Kn8.js";var fe,pe,me,D;function he(){return(he=t((()=>{fe=`_avatar_gwtmy_1`,pe=`_small_gwtmy_9`,me=`_medium_gwtmy_13`,D={avatar:fe,small:pe,medium:me}})))()}var ge,O,k,A,j;function M(){return(M=t((()=>{ge=e(i(),1),c(),he(),O=r(),k=[{bg:`#E3F2FD`,text:`#1976D2`},{bg:`#F3E5F5`,text:`#7B1FA2`},{bg:`#E8F5E9`,text:`#388E3C`}],A=e=>{let[t,n]=e.trim().split(` `);return t&&n?`${t[0]}${n[0]}`.toUpperCase():e.slice(0,2).toUpperCase()},j=({name:e,size:t=`small`,colorIndex:n=0})=>{let r=A(e),i=k[n%k.length];return(0,O.jsx)(`div`,{className:(0,ge.default)(D.avatar,D[t]),style:{backgroundColor:i?.bg,color:i?.text},children:(0,O.jsx)(s,{variant:`body-xs-semi-bold`,children:r})})},j.__docgenInfo={description:``,methods:[],displayName:`UserAvatar`,props:{name:{required:!0,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`}]},description:``,defaultValue:{value:`'small'`,computed:!1}},colorIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}}}}})))()}var N,P,F,I,L,R,_e,ve,ye,be,z,xe,B;function Se(){return(Se=t((()=>{N=`_container_1xmkv_1`,P=`_section_1xmkv_7`,F=`_header_1xmkv_14`,I=`_searchWrapper_1xmkv_20`,L=`_searchIcon_1xmkv_26`,R=`_searchInput_1xmkv_36`,_e=`_editorList_1xmkv_40`,ve=`_editorItem_1xmkv_45`,ye=`_timeRangeOptions_1xmkv_51`,be=`_radioOption_1xmkv_57`,z=`_customDateRange_1xmkv_69`,xe=`_dateInput_1xmkv_78`,B={container:N,section:P,header:F,searchWrapper:I,searchIcon:L,searchInput:R,editorList:_e,editorItem:ve,timeRangeOptions:ye,radioOption:be,customDateRange:z,dateInput:xe}})))()}var Ce,V,we,H;function Te(){return(Te=t((()=>{Ce=n(),M(),x(),Se(),c(),v(),o(),m(),V=r(),we=[{value:`24h`,label:`24 hours`},{value:`week`,label:`Last week`},{value:`month`,label:`Last month`},{value:`3months`,label:`Last 3 months`},{value:`custom`,label:`Custom`}],H=({value:e,onChange:t,availableEditors:n})=>{let[r,i]=(0,Ce.useState)(``),o=n.filter(e=>e.name.toLowerCase().includes(r.toLowerCase())).map(e=>({value:e.name,label:e.name,metadata:{colorIndex:e.colorIndex}})),c=o.filter(t=>e.editors.includes(t.value)),l=n=>{t({...e,editors:n.map(e=>e.value)})},u=n=>{t({...e,timeRange:n,...n!==`custom`&&{customFrom:void 0,customTo:void 0}})};return(0,V.jsxs)(`div`,{className:B.container,children:[(0,V.jsxs)(`div`,{className:B.section,children:[(0,V.jsxs)(`div`,{className:B.header,children:[(0,V.jsx)(s,{variant:`body-md-md`,children:`Editor`}),e.editors.length>0&&(0,V.jsx)(_,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:()=>{t({...e,editors:[]}),i(``)},children:`Clear`})]}),(0,V.jsxs)(`div`,{className:B.searchWrapper,children:[(0,V.jsx)(`div`,{className:B.searchIcon,children:(0,V.jsx)(a,{icon:`search`,size:`tiny`})}),(0,V.jsx)(p,{placeholder:`Search`,value:r,onValueChange:i,size:`default`,className:B.searchInput})]}),(0,V.jsx)(`div`,{className:B.editorList,children:(0,V.jsx)(ne,{items:o,selectedItems:c,onSelectionChange:l,renderer:e=>(0,V.jsxs)(`div`,{className:B.editorItem,children:[(0,V.jsx)(j,{name:e.label,size:`small`,colorIndex:e.metadata?.colorIndex||0}),(0,V.jsx)(s,{variant:`body-sm-reg`,children:e.label})]})})})]}),(0,V.jsxs)(`div`,{className:B.section,children:[(0,V.jsxs)(`div`,{className:B.header,children:[(0,V.jsx)(s,{variant:`body-md-md`,children:`Last edited`}),e.timeRange&&(0,V.jsx)(_,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:()=>{t({...e,timeRange:null,customFrom:void 0,customTo:void 0})},children:`Clear`})]}),(0,V.jsx)(`div`,{className:B.timeRangeOptions,children:we.map(t=>(0,V.jsxs)(`label`,{className:B.radioOption,children:[(0,V.jsx)(`input`,{type:`radio`,name:`timeRange`,value:t.value,checked:e.timeRange===t.value,onChange:()=>u(t.value)}),(0,V.jsx)(s,{variant:`body-sm-reg`,children:t.label})]},t.value))}),e.timeRange===`custom`&&(0,V.jsxs)(`div`,{className:B.customDateRange,children:[(0,V.jsxs)(`div`,{className:B.dateInput,children:[(0,V.jsx)(s,{variant:`body-sm-reg`,children:`From`}),(0,V.jsx)(p,{type:`date`,value:e.customFrom||``,onValueChange:n=>t({...e,customFrom:n}),size:`default`})]}),(0,V.jsxs)(`div`,{className:B.dateInput,children:[(0,V.jsx)(s,{variant:`body-sm-reg`,children:`To`}),(0,V.jsx)(p,{type:`date`,value:e.customTo||``,onValueChange:n=>t({...e,customTo:n}),size:`default`})]})]})]})]})},H.__docgenInfo={description:``,methods:[],displayName:`LastEditedFilter`,props:{value:{required:!0,tsType:{name:`LastEditedFilterValue`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: LastEditedFilterValue) => void`,signature:{arguments:[{type:{name:`LastEditedFilterValue`},name:`value`}],return:{name:`void`}}},description:``},availableEditors:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ name: string; colorIndex: number }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`colorIndex`,value:{name:`number`,required:!0}}]}}],raw:`Array<{ name: string; colorIndex: number }>`},description:``}}}})))()}var Ee,De;function Oe(){return(Oe=t((()=>{Ee=`_container_7pp4u_1`,De={container:Ee}})))()}var U,W;function ke(){return(ke=t((()=>{c(),M(),Oe(),U=r(),W=({editor:e,timestamp:t,colorIndex:n=0})=>(0,U.jsxs)(`div`,{className:De.container,children:[(0,U.jsx)(j,{name:e,size:`small`,colorIndex:n}),(0,U.jsx)(s,{variant:`body-sm-reg`,children:t})]}),W.__docgenInfo={description:``,methods:[],displayName:`LastEditedCell`,props:{editor:{required:!0,tsType:{name:`string`},description:``},timestamp:{required:!0,tsType:{name:`string`},description:``},colorIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}}}}})))()}var G,Ae,je,Me,K,Ne,Pe,Fe,Ie,Le,Re,q;function ze(){return(ze=t((()=>{g(),o(),ae(),Te(),ke(),G=r(),Ae=[{value:`active`,label:`Active`},{value:`running`,label:`Running`},{value:`pending`,label:`Pending`},{value:`draft`,label:`Draft`},{value:`inactive`,label:`Inactive`},{value:`warning`,label:`Warning`},{value:`failed`,label:`Failed`}],je={active:`check_circle`,running:`change_circle`,pending:`pause_circle`,draft:`stylus_note`,inactive:`stop_circle`,warning:`warning`,failed:`cancel`},Me=e=>je[e],K=e=>{let t=Me(e);return(0,G.jsx)(h,{icon:t,status:e,size:`small`})},Ne=ie({id:`status`,label:`Status`,items:Ae,renderer:e=>K(e.value),chipLabelTemplate:e=>`Status: ${e.label}`,cellRenderer:e=>K(e)}),Pe=te({id:`runningCompleted`,label:`Running/Completed`,fields:{running:`Running`,completed:`Completed`},formatNumber:e=>e.toLocaleString(`en-US`),getRowValue:e=>e.getValue(`runningCompleted`)}),Fe=[{name:`Marry Levin`,colorIndex:0},{name:`Emery Frank`,colorIndex:1},{name:`Ryan Franco`,colorIndex:2},{name:`Roger Dias`,colorIndex:0},{name:`Chance Booths`,colorIndex:1},{name:`Lindsey Westerner`,colorIndex:2},{name:`Ruben Stanton`,colorIndex:0},{name:`Erin Vertus`,colorIndex:1},{name:`Neil Sims`,colorIndex:2}],Ie=(e,t,n)=>{let r=new Date;if(e===`custom`)return{from:t?new Date(t):null,to:n?new Date(n):null};if(!e)return{from:null,to:null};let i=new Date;switch(e){case`24h`:i.setHours(r.getHours()-24);break;case`week`:i.setDate(r.getDate()-7);break;case`month`:i.setMonth(r.getMonth()-1);break;case`3months`:i.setMonth(r.getMonth()-3)}return{from:i,to:r}},Le=e=>new Date(e),Re=ee({id:`lastEdited`,label:`Last edited`,initialValue:{editors:[],timeRange:null,customFrom:void 0,customTo:void 0},filterFn:(e,t,n)=>{let r=e.getValue(t),{editors:i,timeRange:a,customFrom:o,customTo:s}=n,c=!0;i.length>0&&(c=i.includes(r.editor));let l=!0;if(a){let{from:e,to:t}=Ie(a,o,s);if(e||t){let n=Le(r.timestamp);l=(!e||n>=e)&&(!t||n<=t)}}return c&&l},toChips:e=>{let t=[];if(e.editors.forEach(e=>{t.push({id:`editor-${e}`,label:`Editor: ${e}`,metadata:{key:`lastEdited`,type:`editor`,value:e}})}),e.timeRange){let n=``;switch(e.timeRange){case`24h`:n=`Last edited: Last 24 hours`;break;case`week`:n=`Last edited: Last week`;break;case`month`:n=`Last edited: Last month`;break;case`3months`:n=`Last edited: Last 3 months`;break;case`custom`:n=`Last edited: ${e.customFrom||`...`} to ${e.customTo||`...`}`}t.push({id:`timeRange`,label:n,metadata:{key:`lastEdited`,type:`timeRange`}})}return t},fromChip:(e,t)=>{let{type:n,value:r}=e.metadata||{};return n===`editor`?{...t,editors:t.editors.filter(e=>e!==r)}:n===`timeRange`?{...t,timeRange:null,customFrom:void 0,customTo:void 0}:t},getActiveFiltersCount:e=>{let t=e.editors.length;return e.timeRange&&(t+=1),t},renderFilter:(e,t)=>(0,G.jsx)(H,{value:e,onChange:t,availableEditors:Fe}),cellRenderer:e=>(0,G.jsx)(W,{editor:e.editor,timestamp:e.timestamp,colorIndex:e.colorIndex})}),q=[Ne,Pe,Re]})))()}var J,Y,Be,X,Ve,He,Ue,Z,Q,We;function $(){return($=t((()=>{J=n(),o(),y(),l(),se(),d(),ce(),c(),oe(),re(),ze(),ue(),le(),Y=r(),{fn:Be}=__STORYBOOK_MODULE_TEST__,X=[{name:`Marry Levin`,colorIndex:0},{name:`Emery Frank`,colorIndex:1},{name:`Ryan Franco`,colorIndex:2},{name:`Roger Dias`,colorIndex:0},{name:`Lindsey Westerner`,colorIndex:1},{name:`Neil Sims`,colorIndex:2}],Ve=[{id:`status`,accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{id:`name`,accessorKey:`name`,header:`Name`,cell:e=>e.getValue()},{id:`runningCompleted`,accessorKey:`runningCompleted`,header:`Running/completed`,cell:e=>{let t=e.getValue();return`${String(t.running)}/${String(t.completed)}`}},{id:`category`,accessorKey:`category`,header:`Category`,cell:e=>e.getValue()},{id:`version`,accessorKey:`version`,header:`Version`,cell:e=>e.getValue()},{id:`lastEdited`,accessorKey:`lastEdited`,header:`Last edited`}],He=[{id:`1`,name:`Scheduled Config Backup`,status:`active`,runningCompleted:{running:3,completed:41},category:`Network Built`,version:`000.0003`,lastEdited:{editor:X[0].name,timestamp:`2025-11-26T16:47:00`,colorIndex:X[0].colorIndex}},{id:`2`,name:`Network Provisioning`,status:`running`,runningCompleted:{running:8,completed:14},category:`Network Built`,version:`000.0002`,lastEdited:{editor:X[1].name,timestamp:`2025-11-26T15:32:00`,colorIndex:X[1].colorIndex}},{id:`3`,name:`Service Provisioning`,status:`inactive`,runningCompleted:{running:0,completed:243},category:`Network Built`,version:`000.0033`,lastEdited:{editor:X[2].name,timestamp:`2025-11-25T11:15:00`,colorIndex:X[2].colorIndex}},{id:`4`,name:`Assign IPv4 Address`,status:`active`,runningCompleted:{running:14,completed:123},category:`Network Built`,version:`000.0001`,lastEdited:{editor:X[3].name,timestamp:`2025-11-24T14:20:00`,colorIndex:X[3].colorIndex}},{id:`5`,name:`Shutdown Decommissioned Device`,status:`active`,runningCompleted:{running:45,completed:45},category:`Optical Optimization`,version:`000.0022`,lastEdited:{editor:X[4].name,timestamp:`2025-11-23T13:05:00`,colorIndex:X[4].colorIndex}},{id:`6`,name:`Optical Power Level Calibration`,status:`draft`,runningCompleted:{running:99,completed:23},category:`Optical Optimization`,version:`000.0001`,lastEdited:{editor:X[5].name,timestamp:`2025-11-20T09:30:00`,colorIndex:X[5].colorIndex}},{id:`7`,name:`Deploy Layer 2 VPN Instance`,status:`pending`,runningCompleted:{running:49,completed:100},category:`Optical Optimization`,version:`000.0012`,lastEdited:{editor:X[0].name,timestamp:`2025-11-18T12:45:00`,colorIndex:X[0].colorIndex}},{id:`8`,name:`Initiate Scheduled Firmware Upgrade`,status:`active`,runningCompleted:{running:25,completed:75},category:`Service Provisioning`,version:`000.0010`,lastEdited:{editor:X[1].name,timestamp:`2025-11-15T17:10:00`,colorIndex:X[1].colorIndex}},{id:`9`,name:`Enable High Availability Mode`,status:`running`,runningCompleted:{running:77,completed:88},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:X[2].name,timestamp:`2025-11-10T10:22:00`,colorIndex:X[2].colorIndex}},{id:`10`,name:`Audit Access Control Policies`,status:`active`,runningCompleted:{running:65,completed:200},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:X[3].name,timestamp:`2025-11-05T15:15:00`,colorIndex:X[3].colorIndex}},{id:`11`,name:`Synchronize NTP Across Network Nodes`,status:`warning`,runningCompleted:{running:49,completed:142},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:X[4].name,timestamp:`2025-10-28T08:40:00`,colorIndex:X[4].colorIndex}},{id:`12`,name:`Validate Optical Link Integrity`,status:`failed`,runningCompleted:{running:90,completed:300},category:`Network Built`,version:`000.0001`,lastEdited:{editor:X[5].name,timestamp:`2025-10-15T16:47:00`,colorIndex:X[5].colorIndex}}],Ue={title:`Components/Table/Filters Panel`,component:b,tags:[`!manifest`],parameters:{layout:`fullscreen`,docs:{description:{component:`
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
`}}},args:{columns:Ve,data:He,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:Be()},decorators:[de]},Z={name:`Toolbar — Filters Panel`,parameters:{docs:{source:{type:`code`},description:{story:`
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
`}}},render:function(e){let{columnFilters:t,filterChips:n,filterNavItems:r,enhancedColumns:i,handlers:o,renderFilterContent:c}=S({filterAdapters:q,baseColumns:e.columns}),[l,d]=(0,J.useState)(!1),[p,m]=(0,J.useState)(r[0]?.id||``),h=e=>{e&&!p&&r.length>0&&m(r[0]?.id||``),d(e)},g=e=>{e&&m(e)},_=()=>{o.applyFilters(),d(!1)},v=()=>{o.clearAll(),d(!1)},y=({item:e})=>(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(s,{variant:`body-sm-md`,className:E.filterTabLabel,children:e.label}),!!e.count&&(0,Y.jsxs)(f,{direction:`row`,alignItems:`center`,gap:8,children:[(0,Y.jsx)(`span`,{className:E.filterTabDot}),(0,Y.jsx)(s,{variant:`body-sm-reg`,color:`secondary`,children:e.count})]})]});return(0,Y.jsxs)(f,{direction:`column`,gap:16,flex:`1`,children:[(0,Y.jsx)(f,{direction:`row`,justifyContent:`flex-end`,children:(0,Y.jsx)(u,{variant:`secondary`,icon:`filter_list`,"aria-label":`Filter`,onClick:()=>d(!0)})}),n.length>0&&(0,Y.jsx)(C,{items:n,onClearAll:v,onItemDelete:o.deleteChip}),(0,Y.jsx)(b,{...e,columns:i,columnFilters:t}),(0,Y.jsxs)(w,{className:E.filterModal,open:l,onOpenChange:h,children:[(0,Y.jsxs)(w.Header,{className:E.filterHeader,children:[(0,Y.jsxs)(f,{direction:`row`,alignItems:`center`,gap:8,children:[(0,Y.jsx)(a,{icon:`filter_list`,size:`small`}),(0,Y.jsx)(w.Title,{children:`Filters`})]}),(0,Y.jsx)(w.CloseTrigger,{})]}),(0,Y.jsx)(w.Body,{className:E.filterBody,children:(0,Y.jsxs)(T,{className:E.filterTabs,value:p,onValueChange:g,children:[(0,Y.jsx)(T.List,{className:E.filterTabList,children:r.map(e=>(0,Y.jsx)(T.Tab,{value:e.id,disabled:e.disabled,children:(0,Y.jsx)(y,{item:e})},e.id))}),r.map(e=>(0,Y.jsx)(T.Content,{value:e.id,className:E.filterContent,children:c(e)},e.id))]})}),(0,Y.jsxs)(w.Footer,{className:E.filterFooter,children:[(0,Y.jsx)(u,{variant:`secondary`,icon:`close`,onClick:v,children:`Clear all`}),(0,Y.jsx)(w.Actions,{children:(0,Y.jsx)(u,{variant:`primary`,onClick:_,children:`Apply`})})]})]})]})}},Q={name:`Toolbar — Controlled`,parameters:{docs:{source:{type:`code`},description:{story:`
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
`}}},render:function(e){let[t,n]=(0,J.useState)({}),{columnFilters:r,filterChips:i,filterNavItems:o,enhancedColumns:c,handlers:l,renderFilterContent:d}=S({filterAdapters:q,baseColumns:e.columns,appliedFilters:t,onFiltersChange:n}),[p,m]=(0,J.useState)(!1),[h,g]=(0,J.useState)(o[0]?.id||``),_=e=>{e&&!h&&o.length>0&&g(o[0]?.id||``),m(e)},v=e=>{e&&g(e)},y=()=>{l.applyFilters(),m(!1)},x=()=>{l.clearAll(),m(!1)},ee=({item:e})=>(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsx)(s,{variant:`body-sm-md`,className:E.filterTabLabel,children:e.label}),!!e.count&&(0,Y.jsxs)(f,{direction:`row`,alignItems:`center`,gap:8,children:[(0,Y.jsx)(`span`,{className:E.filterTabDot}),(0,Y.jsx)(s,{variant:`body-sm-reg`,color:`secondary`,children:e.count})]})]});return(0,Y.jsxs)(f,{direction:`column`,gap:16,flex:`1`,children:[(0,Y.jsxs)(f,{className:E.debugPanel,direction:`column`,gap:8,children:[(0,Y.jsx)(s,{variant:`body-sm-md`,children:`External Filter State (controlled):`}),(0,Y.jsx)(`pre`,{className:E.debugCode,children:JSON.stringify(t,null,2)||`{}`})]}),(0,Y.jsx)(f,{direction:`row`,justifyContent:`flex-end`,children:(0,Y.jsx)(u,{variant:`secondary`,icon:`filter_list`,"aria-label":`Filter`,onClick:()=>m(!0)})}),i.length>0&&(0,Y.jsx)(C,{items:i,onClearAll:x,onItemDelete:l.deleteChip}),(0,Y.jsx)(b,{...e,columns:c,columnFilters:r}),(0,Y.jsxs)(w,{className:E.filterModal,open:p,onOpenChange:_,children:[(0,Y.jsxs)(w.Header,{className:E.filterHeader,children:[(0,Y.jsxs)(f,{direction:`row`,alignItems:`center`,gap:8,children:[(0,Y.jsx)(a,{icon:`filter_list`,size:`small`}),(0,Y.jsx)(w.Title,{children:`Filters`})]}),(0,Y.jsx)(w.CloseTrigger,{})]}),(0,Y.jsx)(w.Body,{className:E.filterBody,children:(0,Y.jsxs)(T,{className:E.filterTabs,value:h,onValueChange:v,children:[(0,Y.jsx)(T.List,{className:E.filterTabList,children:o.map(e=>(0,Y.jsx)(T.Tab,{value:e.id,disabled:e.disabled,children:(0,Y.jsx)(ee,{item:e})},e.id))}),o.map(e=>(0,Y.jsx)(T.Content,{value:e.id,className:E.filterContent,children:d(e)},e.id))]})}),(0,Y.jsxs)(w.Footer,{className:E.filterFooter,children:[(0,Y.jsx)(u,{variant:`secondary`,icon:`close`,onClick:x,children:`Clear all`}),(0,Y.jsx)(w.Actions,{children:(0,Y.jsx)(u,{variant:`primary`,onClick:y,children:`Apply`})})]})]})]})}},We=[`FiltersPanel`,`Controlled`],Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar — Filters Panel',
  parameters: {
    docs: {
      source: {
        type: 'code'
      },
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
    const TabLabel = ({
      item
    }: {
      item: FilterNavItem;
    }) => <>
                <DsTypography variant="body-sm-md" className={styles.filterTabLabel}>
                    {item.label}
                </DsTypography>
                {!!item.count && <DsStack direction="row" alignItems="center" gap={8}>
                        <span className={styles.filterTabDot} />
                        <DsTypography variant="body-sm-reg" color="secondary">
                            {item.count}
                        </DsTypography>
                    </DsStack>}
            </>;
    return <DsStack direction="column" gap={16} flex="1">
                <DsStack direction="row" justifyContent="flex-end">
                    <DsButtonV3 variant="secondary" icon="filter_list" aria-label="Filter" onClick={() => setIsOpen(true)} />
                </DsStack>

                {filterChips.length > 0 && <DsTagFilter items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />}

                <DsTable {...args} columns={enhancedColumns} columnFilters={columnFilters} />

                <DsModal className={styles.filterModal} open={isOpen} onOpenChange={handleOpenChange}>
                    <DsModal.Header className={styles.filterHeader}>
                        <DsStack direction="row" alignItems="center" gap={8}>
                            <DsIcon icon="filter_list" size="small" />
                            <DsModal.Title>Filters</DsModal.Title>
                        </DsStack>
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
            </DsStack>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Toolbar — Controlled',
  parameters: {
    docs: {
      source: {
        type: 'code'
      },
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
                {!!item.count && <DsStack direction="row" alignItems="center" gap={8}>
                        <span className={styles.filterTabDot} />
                        <DsTypography variant="body-sm-reg" color="secondary">
                            {item.count}
                        </DsTypography>
                    </DsStack>}
            </>;
    return <DsStack direction="column" gap={16} flex="1">
                <DsStack className={styles.debugPanel} direction="column" gap={8}>
                    <DsTypography variant="body-sm-md">External Filter State (controlled):</DsTypography>
                    <pre className={styles.debugCode}>{JSON.stringify(appliedFilters, null, 2) || '{}'}</pre>
                </DsStack>

                <DsStack direction="row" justifyContent="flex-end">
                    <DsButtonV3 variant="secondary" icon="filter_list" aria-label="Filter" onClick={() => setIsOpen(true)} />
                </DsStack>

                {filterChips.length > 0 && <DsTagFilter items={filterChips} onClearAll={handleClearAll} onItemDelete={handlers.deleteChip} />}

                <DsTable {...args} columns={enhancedColumns} columnFilters={columnFilters} />

                <DsModal className={styles.filterModal} open={isOpen} onOpenChange={handleOpenChange}>
                    <DsModal.Header className={styles.filterHeader}>
                        <DsStack direction="row" alignItems="center" gap={8}>
                            <DsIcon icon="filter_list" size="small" />
                            <DsModal.Title>Filters</DsModal.Title>
                        </DsStack>
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
            </DsStack>;
  }
}`,...Q.parameters?.docs?.source}}}})))()}$();export{Q as Controlled,Z as FiltersPanel,We as __namedExportsOrder,Ue as default};