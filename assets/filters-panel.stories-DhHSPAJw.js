import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Bowpj2Im.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{i as a}from"./ds-icon.types-CDSzrCw1.js";import{t as o}from"./ds-icon-B9LMLd-3.js";import{t as s}from"./ds-typography-DjAcMKBU.js";import{t as c}from"./ds-typography-CAc8mbMz.js";import{n as l,t as u}from"./ds-button-Clm8l7Dp.js";import{r as d}from"./ds-text-input.types-BSXMVnwB.js";import{t as f}from"./ds-text-input-DZ5vMdBU.js";import{t as p}from"./ds-status-badge-sahMxJZv.js";import{t as m}from"./ds-status-badge-DJ1d4L2J.js";import{n as h,t as ee}from"./ds-chip-group-C4aTe4Md.js";import{t as g}from"./ds-modal-BoF_YgyB.js";import{t as _}from"./ds-modal-BZKSl1gn.js";import{a as v,c as y,i as b,n as te,o as ne,r as re,s as ie,t as ae}from"./filters-DTYgFwiH.js";import{n as oe,t as x}from"./ds-table-CxVFBYtI.js";import{n as se,t as S}from"./ds-table.stories.module-BQO6U9br.js";import{n as ce,t as C}from"./ds-vertical-tabs-B6m7z8Hi.js";var le=t((()=>{ce()})),ue=t((()=>{h()})),de,fe,pe,w,me=t((()=>{de=`_avatar_gwtmy_1`,fe=`_small_gwtmy_9`,pe=`_medium_gwtmy_13`,w={avatar:de,small:fe,medium:pe}})),he,T,E,ge,D,_e=t((()=>{he=e(i(),1),c(),me(),T=r(),E=[{bg:`#E3F2FD`,text:`#1976D2`},{bg:`#F3E5F5`,text:`#7B1FA2`},{bg:`#E8F5E9`,text:`#388E3C`}],ge=e=>{let[t,n]=e.trim().split(` `);return t&&n?`${t[0]}${n[0]}`.toUpperCase():e.slice(0,2).toUpperCase()},D=({name:e,size:t=`small`,colorIndex:n=0})=>{let r=ge(e),i=E[n%E.length];return(0,T.jsx)(`div`,{className:(0,he.default)(w.avatar,w[t]),style:{backgroundColor:i?.bg,color:i?.text},children:(0,T.jsx)(s,{variant:`body-xs-semi-bold`,children:r})})},D.__docgenInfo={description:``,methods:[],displayName:`UserAvatar`,props:{name:{required:!0,tsType:{name:`string`},description:``},size:{required:!1,tsType:{name:`union`,raw:`'small' | 'medium'`,elements:[{name:`literal`,value:`'small'`},{name:`literal`,value:`'medium'`}]},description:``,defaultValue:{value:`'small'`,computed:!1}},colorIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}}}}})),ve,ye,O,k,A,j,M,N,P,F,be,xe,I,Se=t((()=>{ve=`_container_sy805_1`,ye=`_section_sy805_7`,O=`_header_sy805_14`,k=`_searchWrapper_sy805_20`,A=`_searchIcon_sy805_26`,j=`_searchInput_sy805_36`,M=`_editorList_sy805_40`,N=`_editorItem_sy805_45`,P=`_timeRangeOptions_sy805_51`,F=`_radioOption_sy805_57`,be=`_customDateRange_sy805_69`,xe=`_dateInput_sy805_78`,I={container:ve,section:ye,header:O,searchWrapper:k,searchIcon:A,searchInput:j,editorList:M,editorItem:N,timeRangeOptions:P,radioOption:F,customDateRange:be,dateInput:xe}})),Ce,L,we,R,Te=t((()=>{Ce=e(n(),1),_e(),ne(),Se(),c(),u(),o(),f(),L=r(),we=[{value:`24h`,label:`24 hours`},{value:`week`,label:`Last week`},{value:`month`,label:`Last month`},{value:`3months`,label:`Last 3 months`},{value:`custom`,label:`Custom`}],R=({value:e,onChange:t,availableEditors:n})=>{let[r,i]=(0,Ce.useState)(``),o=n.filter(e=>e.name.toLowerCase().includes(r.toLowerCase())).map(e=>({value:e.name,label:e.name,metadata:{colorIndex:e.colorIndex}})),c=o.filter(t=>e.editors.includes(t.value)),u=n=>{t({...e,editors:n.map(e=>e.value)})},f=n=>{t({...e,timeRange:n,...n!==`custom`&&{customFrom:void 0,customTo:void 0}})};return(0,L.jsxs)(`div`,{className:I.container,children:[(0,L.jsxs)(`div`,{className:I.section,children:[(0,L.jsxs)(`div`,{className:I.header,children:[(0,L.jsx)(s,{variant:`body-md-md`,children:`Editor`}),e.editors.length>0&&(0,L.jsx)(l,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:()=>{t({...e,editors:[]}),i(``)},children:`Clear`})]}),(0,L.jsxs)(`div`,{className:I.searchWrapper,children:[(0,L.jsx)(`div`,{className:I.searchIcon,children:(0,L.jsx)(a,{icon:`search`,size:`tiny`})}),(0,L.jsx)(d,{placeholder:`Search`,value:r,onValueChange:i,size:`default`,className:I.searchInput})]}),(0,L.jsx)(`div`,{className:I.editorList,children:(0,L.jsx)(ie,{items:o,selectedItems:c,onSelectionChange:u,renderer:e=>(0,L.jsxs)(`div`,{className:I.editorItem,children:[(0,L.jsx)(D,{name:e.label,size:`small`,colorIndex:e.metadata?.colorIndex||0}),(0,L.jsx)(s,{variant:`body-sm-reg`,children:e.label})]})})})]}),(0,L.jsxs)(`div`,{className:I.section,children:[(0,L.jsxs)(`div`,{className:I.header,children:[(0,L.jsx)(s,{variant:`body-md-md`,children:`Last edited`}),e.timeRange&&(0,L.jsx)(l,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:()=>{t({...e,timeRange:null,customFrom:void 0,customTo:void 0})},children:`Clear`})]}),(0,L.jsx)(`div`,{className:I.timeRangeOptions,children:we.map(t=>(0,L.jsxs)(`label`,{className:I.radioOption,children:[(0,L.jsx)(`input`,{type:`radio`,name:`timeRange`,value:t.value,checked:e.timeRange===t.value,onChange:()=>f(t.value)}),(0,L.jsx)(s,{variant:`body-sm-reg`,children:t.label})]},t.value))}),e.timeRange===`custom`&&(0,L.jsxs)(`div`,{className:I.customDateRange,children:[(0,L.jsxs)(`div`,{className:I.dateInput,children:[(0,L.jsx)(s,{variant:`body-sm-reg`,children:`From`}),(0,L.jsx)(d,{type:`date`,value:e.customFrom||``,onValueChange:n=>t({...e,customFrom:n}),size:`default`})]}),(0,L.jsxs)(`div`,{className:I.dateInput,children:[(0,L.jsx)(s,{variant:`body-sm-reg`,children:`To`}),(0,L.jsx)(d,{type:`date`,value:e.customTo||``,onValueChange:n=>t({...e,customTo:n}),size:`default`})]})]})]})]})},R.__docgenInfo={description:``,methods:[],displayName:`LastEditedFilter`,props:{value:{required:!0,tsType:{name:`LastEditedFilterValue`},description:``},onChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(value: LastEditedFilterValue) => void`,signature:{arguments:[{type:{name:`LastEditedFilterValue`},name:`value`}],return:{name:`void`}}},description:``},availableEditors:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ name: string; colorIndex: number }`,signature:{properties:[{key:`name`,value:{name:`string`,required:!0}},{key:`colorIndex`,value:{name:`number`,required:!0}}]}}],raw:`Array<{ name: string; colorIndex: number }>`},description:``}}}})),Ee,De,Oe=t((()=>{Ee=`_container_7pp4u_1`,De={container:Ee}})),z,B,ke=t((()=>{c(),_e(),Oe(),z=r(),B=({editor:e,timestamp:t,colorIndex:n=0})=>(0,z.jsxs)(`div`,{className:De.container,children:[(0,z.jsx)(D,{name:e,size:`small`,colorIndex:n}),(0,z.jsx)(s,{variant:`body-sm-reg`,children:t})]}),B.__docgenInfo={description:``,methods:[],displayName:`LastEditedCell`,props:{editor:{required:!0,tsType:{name:`string`},description:``},timestamp:{required:!0,tsType:{name:`string`},description:``},colorIndex:{required:!1,tsType:{name:`number`},description:``,defaultValue:{value:`0`,computed:!1}}}}})),V,Ae,je,Me,H,Ne,Pe,Fe,Ie,Le,U,W,Re=t((()=>{m(),o(),ae(),Te(),ke(),V=r(),Ae=[{value:`active`,label:`Active`},{value:`running`,label:`Running`},{value:`pending`,label:`Pending`},{value:`draft`,label:`Draft`},{value:`inactive`,label:`Inactive`},{value:`warning`,label:`Warning`},{value:`failed`,label:`Failed`}],je={active:`check_circle`,running:`change_circle`,pending:`pause_circle`,draft:`stylus_note`,inactive:`stop_circle`,warning:`warning`,failed:`cancel`},Me=e=>je[e],H=e=>(0,V.jsx)(p,{icon:Me(e),status:e,size:`small`}),Ne=v({id:`status`,label:`Status`,items:Ae,renderer:e=>H(e.value),chipLabelTemplate:e=>`Status: ${e.label}`,cellRenderer:e=>H(e)}),Pe=b({id:`runningCompleted`,label:`Running/Completed`,fields:{running:`Running`,completed:`Completed`},formatNumber:e=>e.toLocaleString(`en-US`),getRowValue:e=>e.getValue(`runningCompleted`)}),Fe=[{name:`Marry Levin`,colorIndex:0},{name:`Emery Frank`,colorIndex:1},{name:`Ryan Franco`,colorIndex:2},{name:`Roger Dias`,colorIndex:0},{name:`Chance Booths`,colorIndex:1},{name:`Lindsey Westerner`,colorIndex:2},{name:`Ruben Stanton`,colorIndex:0},{name:`Erin Vertus`,colorIndex:1},{name:`Neil Sims`,colorIndex:2}],Ie=(e,t,n)=>{let r=new Date;if(e===`custom`)return{from:t?new Date(t):null,to:n?new Date(n):null};if(!e)return{from:null,to:null};let i=new Date;switch(e){case`24h`:i.setHours(r.getHours()-24);break;case`week`:i.setDate(r.getDate()-7);break;case`month`:i.setMonth(r.getMonth()-1);break;case`3months`:i.setMonth(r.getMonth()-3);break}return{from:i,to:r}},Le=e=>new Date(e),U=y({id:`lastEdited`,label:`Last edited`,initialValue:{editors:[],timeRange:null,customFrom:void 0,customTo:void 0},filterFn:(e,t,n)=>{let r=e.getValue(t),{editors:i,timeRange:a,customFrom:o,customTo:s}=n,c=!0;i.length>0&&(c=i.includes(r.editor));let l=!0;if(a){let{from:e,to:t}=Ie(a,o,s);if(e||t){let n=Le(r.timestamp);l=(!e||n>=e)&&(!t||n<=t)}}return c&&l},toChips:e=>{let t=[];if(e.editors.forEach(e=>{t.push({id:`editor-${e}`,label:`Editor: ${e}`,metadata:{key:`lastEdited`,type:`editor`,value:e}})}),e.timeRange){let n=``;switch(e.timeRange){case`24h`:n=`Last edited: Last 24 hours`;break;case`week`:n=`Last edited: Last week`;break;case`month`:n=`Last edited: Last month`;break;case`3months`:n=`Last edited: Last 3 months`;break;case`custom`:n=`Last edited: ${e.customFrom||`...`} to ${e.customTo||`...`}`;break}t.push({id:`timeRange`,label:n,metadata:{key:`lastEdited`,type:`timeRange`}})}return t},fromChip:(e,t)=>{let{type:n,value:r}=e.metadata||{};return n===`editor`?{...t,editors:t.editors.filter(e=>e!==r)}:n===`timeRange`?{...t,timeRange:null,customFrom:void 0,customTo:void 0}:t},getActiveFiltersCount:e=>{let t=e.editors.length;return e.timeRange&&(t+=1),t},renderFilter:(e,t)=>(0,V.jsx)(R,{value:e,onChange:t,availableEditors:Fe}),cellRenderer:e=>(0,V.jsx)(B,{editor:e.editor,timestamp:e.timestamp,colorIndex:e.colorIndex})}),W=[Ne,Pe,U]})),G,K,q,J,Y,X,Z,ze,Q,$,Be;t((()=>{G=e(n(),1),o(),oe(),u(),_(),le(),c(),ue(),te(),Re(),se(),K=r(),{expect:q,screen:J,userEvent:Y,within:X}=__STORYBOOK_MODULE_TEST__,Z=[{name:`Marry Levin`,colorIndex:0},{name:`Emery Frank`,colorIndex:1},{name:`Ryan Franco`,colorIndex:2},{name:`Roger Dias`,colorIndex:0},{name:`Lindsey Westerner`,colorIndex:1},{name:`Neil Sims`,colorIndex:2}],ze={title:`Design System/Table/Filters`,component:x,parameters:{layout:`fullscreen`,docs:{description:{component:`
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
`}}},args:{columns:[{id:`status`,accessorKey:`status`,header:`Status`,cell:e=>e.getValue()},{id:`name`,accessorKey:`name`,header:`Name`,cell:e=>e.getValue()},{id:`runningCompleted`,accessorKey:`runningCompleted`,header:`Running/completed`,cell:e=>{let t=e.getValue();return`${String(t.running)}/${String(t.completed)}`}},{id:`category`,accessorKey:`category`,header:`Category`,cell:e=>e.getValue()},{id:`version`,accessorKey:`version`,header:`Version`,cell:e=>e.getValue()},{id:`lastEdited`,accessorKey:`lastEdited`,header:`Last edited`}],data:[{id:`1`,name:`Scheduled Config Backup`,status:`active`,runningCompleted:{running:3,completed:41},category:`Network Built`,version:`000.0003`,lastEdited:{editor:Z[0].name,timestamp:`2025-11-26T16:47:00`,colorIndex:Z[0].colorIndex}},{id:`2`,name:`Network Provisioning`,status:`running`,runningCompleted:{running:8,completed:14},category:`Network Built`,version:`000.0002`,lastEdited:{editor:Z[1].name,timestamp:`2025-11-26T15:32:00`,colorIndex:Z[1].colorIndex}},{id:`3`,name:`Service Provisioning`,status:`inactive`,runningCompleted:{running:0,completed:243},category:`Network Built`,version:`000.0033`,lastEdited:{editor:Z[2].name,timestamp:`2025-11-25T11:15:00`,colorIndex:Z[2].colorIndex}},{id:`4`,name:`Assign IPv4 Address`,status:`active`,runningCompleted:{running:14,completed:123},category:`Network Built`,version:`000.0001`,lastEdited:{editor:Z[3].name,timestamp:`2025-11-24T14:20:00`,colorIndex:Z[3].colorIndex}},{id:`5`,name:`Shutdown Decommissioned Device`,status:`active`,runningCompleted:{running:45,completed:45},category:`Optical Optimization`,version:`000.0022`,lastEdited:{editor:Z[4].name,timestamp:`2025-11-23T13:05:00`,colorIndex:Z[4].colorIndex}},{id:`6`,name:`Optical Power Level Calibration`,status:`draft`,runningCompleted:{running:99,completed:23},category:`Optical Optimization`,version:`000.0001`,lastEdited:{editor:Z[5].name,timestamp:`2025-11-20T09:30:00`,colorIndex:Z[5].colorIndex}},{id:`7`,name:`Deploy Layer 2 VPN Instance`,status:`pending`,runningCompleted:{running:49,completed:100},category:`Optical Optimization`,version:`000.0012`,lastEdited:{editor:Z[0].name,timestamp:`2025-11-18T12:45:00`,colorIndex:Z[0].colorIndex}},{id:`8`,name:`Initiate Scheduled Firmware Upgrade`,status:`active`,runningCompleted:{running:25,completed:75},category:`Service Provisioning`,version:`000.0010`,lastEdited:{editor:Z[1].name,timestamp:`2025-11-15T17:10:00`,colorIndex:Z[1].colorIndex}},{id:`9`,name:`Enable High Availability Mode`,status:`running`,runningCompleted:{running:77,completed:88},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:Z[2].name,timestamp:`2025-11-10T10:22:00`,colorIndex:Z[2].colorIndex}},{id:`10`,name:`Audit Access Control Policies`,status:`active`,runningCompleted:{running:65,completed:200},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:Z[3].name,timestamp:`2025-11-05T15:15:00`,colorIndex:Z[3].colorIndex}},{id:`11`,name:`Synchronize NTP Across Network Nodes`,status:`warning`,runningCompleted:{running:49,completed:142},category:`Service Provisioning`,version:`000.0001`,lastEdited:{editor:Z[4].name,timestamp:`2025-10-28T08:40:00`,colorIndex:Z[4].colorIndex}},{id:`12`,name:`Validate Optical Link Integrity`,status:`failed`,runningCompleted:{running:90,completed:300},category:`Network Built`,version:`000.0001`,lastEdited:{editor:Z[5].name,timestamp:`2025-10-15T16:47:00`,colorIndex:Z[5].colorIndex}}],stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,K.jsx)(`div`,{children:`No data available`}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[e=>(0,K.jsxs)(`div`,{className:S.storyPadding,children:[(0,K.jsx)(`style`,{children:`
            #storybook-root, html, body { height: 100%; }
          `}),(0,K.jsx)(e,{})]})]},Q={name:`With Filters Panel`,parameters:{docs:{description:{story:`
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
`}}},render:function(e){let{columnFilters:t,filterChips:n,filterNavItems:r,enhancedColumns:i,handlers:o,renderFilterContent:c}=re({filterAdapters:W,baseColumns:e.columns}),[u,d]=(0,G.useState)(!1),[f,p]=(0,G.useState)(r[0]?.id||``),m=e=>{e&&!f&&r.length>0&&p(r[0]?.id||``),d(e)},h=e=>{e&&p(e)},_=()=>{o.applyFilters(),d(!1)},v=()=>{o.clearAll(),d(!1)},y=({item:e})=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(s,{variant:`body-sm-md`,className:S.filterTabLabel,children:e.label}),!!e.count&&(0,K.jsxs)(`div`,{className:S.filterTabBadge,children:[(0,K.jsx)(`span`,{className:S.filterTabDot}),(0,K.jsx)(s,{variant:`body-sm-reg`,className:S.filterTabCount,children:e.count})]})]});return(0,K.jsxs)(`div`,{className:S.tableFilterContainer,children:[(0,K.jsx)(`div`,{className:S.toolbar,children:(0,K.jsx)(l,{design:`v1.2`,buttonType:`secondary`,onClick:()=>d(!0),children:(0,K.jsx)(a,{size:`tiny`,icon:`filter_list`})})}),n.length>0&&(0,K.jsx)(ee,{items:n,onClearAll:v,onItemDelete:o.deleteChip}),(0,K.jsx)(x,{...e,columns:i,columnFilters:t}),(0,K.jsxs)(g,{style:{height:`600px`},open:u,onOpenChange:m,children:[(0,K.jsxs)(g.Header,{className:S.filterHeader,children:[(0,K.jsxs)(`div`,{className:S.headerLeft,children:[(0,K.jsx)(a,{icon:`filter_list`,size:`small`}),(0,K.jsx)(g.Title,{children:`Filters`})]}),(0,K.jsx)(g.CloseTrigger,{})]}),(0,K.jsx)(g.Body,{className:S.filterBody,children:(0,K.jsxs)(C,{className:S.filterTabs,value:f,onValueChange:h,children:[(0,K.jsx)(C.List,{className:S.filterTabList,children:r.map(e=>(0,K.jsx)(C.Tab,{value:e.id,disabled:e.disabled,children:(0,K.jsx)(y,{item:e})},e.id))}),r.map(e=>(0,K.jsx)(C.Content,{value:e.id,className:S.filterContent,children:c(e)},e.id))]})}),(0,K.jsxs)(g.Footer,{className:S.filterFooter,children:[(0,K.jsxs)(l,{design:`v1.2`,variant:`filled`,buttonType:`secondary`,onClick:v,children:[(0,K.jsx)(a,{icon:`close`,size:`tiny`}),`Clear all`]}),(0,K.jsx)(g.Actions,{children:(0,K.jsx)(l,{design:`v1.2`,variant:`filled`,buttonType:`primary`,onClick:_,children:`Apply`})})]})]})]})},args:{},play:async({canvasElement:e})=>{let t=X(e),n=()=>t.getAllByRole(`row`).filter(e=>!e.querySelector(`th`));await q(n()).toHaveLength(12);let r=t.getByRole(`button`,{name:/filter/i});await Y.click(r);let i=J.getByRole(`tab`,{name:/status/i}),a=J.getByRole(`tab`,{name:/running\/completed/i}),o=J.getByRole(`tab`,{name:/last edited/i});await Y.click(i);let s=J.getByRole(`checkbox`,{name:/^active$/i}),c=J.getByRole(`checkbox`,{name:/^running$/i});await Y.click(s),await Y.click(c),await q(s).toBeChecked(),await q(c).toBeChecked(),await Y.click(a);let[l,u]=J.getAllByRole(`spinbutton`);await Y.type(l,`0`),await Y.type(u,`50`),await Y.click(o);let d=J.getByRole(`checkbox`,{name:/marry levin/i}),f=J.getByRole(`radio`,{name:/last 3 months/i});await Y.click(d),await Y.click(f),await q(d).toBeChecked(),await q(f).toBeChecked(),await Y.click(J.getByRole(`button`,{name:/apply/i})),await q(t.getByText(/status: active/i)).toBeInTheDocument(),await q(t.getByText(/status: running/i)).toBeInTheDocument(),await q(t.getByText(/running.*0.*50/i)).toBeInTheDocument(),await q(t.getByText(/editor: marry levin/i)).toBeInTheDocument(),await q(t.getByText(/last 3 months/i)).toBeInTheDocument(),await q(n().length).toBeLessThan(12),await Y.click(r),await Y.click(J.getByRole(`tab`,{name:/status/i})),await q(J.getByRole(`checkbox`,{name:/^active$/i})).toBeChecked(),await q(J.getByRole(`checkbox`,{name:/^running$/i})).toBeChecked(),await Y.click(J.getByRole(`button`,{name:/apply/i}));let p=X(t.getByRole(`button`,{name:/status: active/i})).getByRole(`button`,{name:/delete/i});await Y.click(p),await q(t.queryByRole(`button`,{name:/status: active/i})).not.toBeInTheDocument(),await Y.click(t.getByRole(`button`,{name:/clear all/i})),await q(t.queryByText(/status:/i)).not.toBeInTheDocument(),await q(n()).toHaveLength(12)}},$={name:`Controlled Mode`,parameters:{docs:{description:{story:`
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
`}}},render:function(e){let[t,n]=(0,G.useState)({}),{columnFilters:r,filterChips:i,filterNavItems:o,enhancedColumns:c,handlers:u,renderFilterContent:d}=re({filterAdapters:W,baseColumns:e.columns,appliedFilters:t,onFiltersChange:n}),[f,p]=(0,G.useState)(!1),[m,h]=(0,G.useState)(o[0]?.id||``),_=e=>{e&&!m&&o.length>0&&h(o[0]?.id||``),p(e)},v=e=>{e&&h(e)},y=()=>{u.applyFilters(),p(!1)},b=()=>{u.clearAll(),p(!1)},te=({item:e})=>(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(s,{variant:`body-sm-md`,className:S.filterTabLabel,children:e.label}),!!e.count&&(0,K.jsxs)(`div`,{className:S.filterTabBadge,children:[(0,K.jsx)(`span`,{className:S.filterTabDot}),(0,K.jsx)(s,{variant:`body-sm-reg`,className:S.filterTabCount,children:e.count})]})]});return(0,K.jsxs)(`div`,{className:S.tableFilterContainer,children:[(0,K.jsxs)(`div`,{className:S.debugPanel,children:[(0,K.jsx)(s,{variant:`body-sm-md`,children:`External Filter State (controlled):`}),(0,K.jsx)(`pre`,{className:S.debugCode,children:JSON.stringify(t,null,2)||`{}`})]}),(0,K.jsx)(`div`,{className:S.toolbar,children:(0,K.jsx)(l,{design:`v1.2`,buttonType:`secondary`,onClick:()=>p(!0),children:(0,K.jsx)(a,{size:`tiny`,icon:`filter_list`})})}),i.length>0&&(0,K.jsx)(ee,{items:i,onClearAll:b,onItemDelete:u.deleteChip}),(0,K.jsx)(x,{...e,columns:c,columnFilters:r}),(0,K.jsxs)(g,{style:{height:`600px`},open:f,onOpenChange:_,children:[(0,K.jsxs)(g.Header,{className:S.filterHeader,children:[(0,K.jsxs)(`div`,{className:S.headerLeft,children:[(0,K.jsx)(a,{icon:`filter_list`,size:`small`}),(0,K.jsx)(g.Title,{children:`Filters`})]}),(0,K.jsx)(g.CloseTrigger,{})]}),(0,K.jsx)(g.Body,{className:S.filterBody,children:(0,K.jsxs)(C,{className:S.filterTabs,value:m,onValueChange:v,children:[(0,K.jsx)(C.List,{className:S.filterTabList,children:o.map(e=>(0,K.jsx)(C.Tab,{value:e.id,disabled:e.disabled,children:(0,K.jsx)(te,{item:e})},e.id))}),o.map(e=>(0,K.jsx)(C.Content,{value:e.id,className:S.filterContent,children:d(e)},e.id))]})}),(0,K.jsxs)(g.Footer,{className:S.filterFooter,children:[(0,K.jsxs)(l,{design:`v1.2`,variant:`filled`,buttonType:`secondary`,onClick:b,children:[(0,K.jsx)(a,{icon:`close`,size:`tiny`}),`Clear all`]}),(0,K.jsx)(g.Actions,{children:(0,K.jsx)(l,{design:`v1.2`,variant:`filled`,buttonType:`primary`,onClick:y,children:`Apply`})})]})]})]})},args:{},play:async({canvasElement:e})=>{let t=X(e);await q(t.getByText(`External Filter State (controlled):`)).toBeInTheDocument(),await q(t.getByText(`{}`)).toBeInTheDocument();let n=t.getByRole(`button`,{name:/filter/i});await Y.click(n);let r=J.getByRole(`tab`,{name:/status/i});await Y.click(r);let i=J.getByRole(`checkbox`,{name:/^active$/i});await Y.click(i),await Y.click(J.getByRole(`button`,{name:/apply/i})),await q(t.getByText(/"status"/)).toBeInTheDocument(),await q(t.getByText(/status: active/i)).toBeInTheDocument(),await Y.click(t.getByRole(`button`,{name:/clear all/i})),await q(t.getByText(`{}`)).toBeInTheDocument(),await q(t.queryByText(/status: active/i)).not.toBeInTheDocument()}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},Be=[`FiltersPanel`,`Controlled`]}))();export{$ as Controlled,Q as FiltersPanel,Be as __namedExportsOrder,ze as default};