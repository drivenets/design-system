import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-stack-GU0hZWeR.js";import{n as o,t as s}from"./ds-table-DumaNPZU.js";import{o as c,r as l,t as u}from"./filters-DJnTOOie.js";import{t as d}from"./ds-tag-filter-CQSU7BHE.js";import{t as f}from"./ds-tag-filter-BC1MfmIa.js";import{n as p,t as m}from"./story-decorators-B0BgvTCA.js";var h,g,_,v,y,b,x,S,C,w,T;t((()=>{h=e(n(),1),o(),i(),f(),u(),p(),g=r(),_=[{id:`1`,name:`edge-01`,type:`ME10`,site:`NYC-DC1`,vendor:`Cisco`,status:`active`},{id:`2`,name:`edge-02`,type:`OLT`,site:`NYC-DC1`,vendor:`Cisco`,status:`warning`},{id:`3`,name:`core-01`,type:`PP-LGX`,site:`LON-DC2`,vendor:`Juniper`,status:`active`},{id:`4`,name:`agg-01`,type:`Role-4`,site:`LON-DC2`,vendor:`Nokia`,status:`failed`},{id:`5`,name:`agg-02`,type:`Role-5`,site:`SFO-DC3`,vendor:`Arista`,status:`active`},{id:`6`,name:`agg-03`,type:`Role-6`,site:`SFO-DC3`,vendor:`Arista`,status:`active`},{id:`7`,name:`edge-03`,type:`ME10`,site:`NYC-DC1`,vendor:`Cisco`,status:`active`},{id:`8`,name:`edge-04`,type:`ME10`,site:`LON-DC2`,vendor:`Juniper`,status:`warning`},{id:`9`,name:`core-02`,type:`PP-LGX`,site:`SFO-DC3`,vendor:`Juniper`,status:`active`},{id:`10`,name:`core-03`,type:`PP-LGX`,site:`NYC-DC1`,vendor:`Cisco`,status:`failed`}],v=[c({id:`type`,label:`Type`,items:[{value:`PP-LGX`,label:`PP-LGX`},{value:`ME10`,label:`ME10`},{value:`OLT`,label:`OLT`},{value:`Role-4`,label:`Role-4`},{value:`Role-5`,label:`Role-5`},{value:`Role-6`,label:`Role-6`}],searchable:!0,selectAll:!0,locale:{searchPlaceholder:`Search role`}}),c({id:`site`,label:`Site`,items:[{value:`NYC-DC1`,label:`NYC-DC1`},{value:`LON-DC2`,label:`LON-DC2`},{value:`SFO-DC3`,label:`SFO-DC3`}],searchable:!0,selectAll:!0,locale:{searchPlaceholder:`Search site`}}),c({id:`vendor`,label:`Vendor`,items:[{value:`Cisco`,label:`Cisco`},{value:`Juniper`,label:`Juniper`},{value:`Nokia`,label:`Nokia`},{value:`Arista`,label:`Arista`}],selectAll:!0})],y=[{id:`name`,accessorKey:`name`,header:`Name`,cell:e=>e.getValue()},{id:`type`,accessorKey:`type`,header:`Type`,meta:{filter:{adapterId:`type`}},cell:e=>e.getValue()},{id:`site`,accessorKey:`site`,header:`Site`,meta:{filter:{adapterId:`site`}},cell:e=>e.getValue()},{id:`vendor`,accessorKey:`vendor`,header:`Vendor`,meta:{filter:{adapterId:`vendor`}},cell:e=>e.getValue()},{id:`status`,accessorKey:`status`,header:`Status`,cell:e=>e.getValue()}],b=`import type { ColumnDef } from '@tanstack/react-table';
import {
    DsTable,
    DsTagFilter,
    createCheckboxFilterAdapter,
    useTableFilters,
} from '@drivenets/design-system';

type DeviceRow = {
    id: string;
    name: string;
    type: 'PP-LGX' | 'ME10' | 'OLT';
    site: string;
    status: 'active' | 'warning' | 'failed';
};

const typeOptions = [
    { value: 'PP-LGX' as const, label: 'PP-LGX' },
    { value: 'ME10' as const, label: 'ME10' },
    { value: 'OLT' as const, label: 'OLT' },
];

const siteOptions = [
    { value: 'NYC-DC1', label: 'NYC-DC1' },
    { value: 'LON-DC2', label: 'LON-DC2' },
    { value: 'SFO-DC3', label: 'SFO-DC3' },
];

const typeFilter = createCheckboxFilterAdapter<DeviceRow, DeviceRow['type']>({
    id: 'type',
    label: 'Type',
    items: typeOptions,
    searchable: true,
    selectAll: true,
});

const siteFilter = createCheckboxFilterAdapter<DeviceRow>({
    id: 'site',
    label: 'Site',
    items: siteOptions,
    searchable: true,
    selectAll: true,
});

const columns: ColumnDef<DeviceRow>[] = [
    { id: 'name', accessorKey: 'name', header: 'Name' },
    { id: 'type', accessorKey: 'type', header: 'Type', meta: { filter: { adapterId: 'type' } } },
    { id: 'site', accessorKey: 'site', header: 'Site', meta: { filter: { adapterId: 'site' } } },
    { id: 'status', accessorKey: 'status', header: 'Status' },
];

function DevicesTable({ rows }: { rows: DeviceRow[] }) {
    const { columnFilters, filterChips, enhancedColumns, handlers } = useTableFilters({
        filterAdapters: [typeFilter, siteFilter],
        baseColumns: columns,
    });

    return (
        <>
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
                data={rows}
                stickyHeader
                bordered
                fullWidth
            />
        </>
    );
}`,x=`import { useState } from 'react';
import type { ColumnDef } from '@tanstack/react-table';
import {
    DsTable,
    DsTagFilter,
    type CheckboxFilterItem,
    type FilterState,
    createCheckboxFilterAdapter,
    useTableFilters,
} from '@drivenets/design-system';

type DeviceRow = {
    id: string;
    name: string;
    type: 'PP-LGX' | 'ME10' | 'OLT';
    site: string;
};

const typeFilter = createCheckboxFilterAdapter<DeviceRow, DeviceRow['type']>({
    id: 'type',
    label: 'Type',
    items: [
        { value: 'PP-LGX', label: 'PP-LGX' },
        { value: 'ME10', label: 'ME10' },
        { value: 'OLT', label: 'OLT' },
    ],
    searchable: true,
    selectAll: true,
});

const columns: ColumnDef<DeviceRow>[] = [
    { id: 'name', accessorKey: 'name', header: 'Name' },
    { id: 'type', accessorKey: 'type', header: 'Type', meta: { filter: { adapterId: 'type' } } },
    { id: 'site', accessorKey: 'site', header: 'Site' },
];

function ControlledDevicesTable({ rows }: { rows: DeviceRow[] }) {
    // Source of truth lives outside the hook (URL, server, parent store, etc.).
    const [appliedFilters, setAppliedFilters] = useState<FilterState<CheckboxFilterItem[]>>({
        type: [{ value: 'PP-LGX', label: 'PP-LGX' }],
    });

    const { columnFilters, filterChips, enhancedColumns, handlers } = useTableFilters({
        filterAdapters: [typeFilter],
        baseColumns: columns,
        appliedFilters,
        onFiltersChange: setAppliedFilters,
    });

    return (
        <>
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
                data={rows}
                stickyHeader
                bordered
                fullWidth
            />
        </>
    );
}`,S={title:`Components/Table/Filters`,component:s,parameters:{layout:`fullscreen`},decorators:[m]},C={name:`Per-Column — Popover`,parameters:{docs:{description:{story:"\nPer-column filter popover anchored to a header cell. Opt a column in by\nsetting `meta.filter` on its `ColumnDef`, register the matching adapter\nwith `useTableFilters`, and feed the hook's `enhancedColumns` +\n`columnFilters` back into `DsTable`.\n\nThe header renders a ghost filter button that appears on hover; clicking\nopens a popover with the adapter's UI (search + \"All\" + checkbox list when\n`searchable` / `selectAll` are enabled on `createCheckboxFilterAdapter`)\nand a `Clear` / `Save` footer. Clicking outside the popover discards the\ndraft and closes it (same as pressing Escape).\n                "},source:{code:b}}},render:function(){let{columnFilters:e,filterChips:t,enhancedColumns:n,handlers:r}=l({filterAdapters:v,baseColumns:y});return(0,g.jsxs)(a,{direction:`column`,gap:16,flex:`1`,children:[t.length>0&&(0,g.jsx)(d,{items:t,onClearAll:r.clearAll,onItemDelete:r.deleteChip}),(0,g.jsx)(s,{columns:n,columnFilters:e,data:_,stickyHeader:!0,bordered:!0,fullWidth:!0})]})}},w={name:`Per-Column — Controlled`,parameters:{docs:{description:{story:`
Pass \`appliedFilters\` + \`onFiltersChange\` to drive filters from URL or
server state. Per-column Save commits only that column's draft into the
external state, leaving other filters untouched.
                `},source:{code:x}}},render:function(){let[e,t]=(0,h.useState)({type:[{value:`PP-LGX`,label:`PP-LGX`}]}),{columnFilters:n,filterChips:r,enhancedColumns:i,handlers:o}=l({filterAdapters:v,baseColumns:y,appliedFilters:e,onFiltersChange:t});return(0,g.jsxs)(a,{direction:`column`,gap:16,flex:`1`,children:[r.length>0&&(0,g.jsx)(d,{items:r,onClearAll:o.clearAll,onItemDelete:o.deleteChip}),(0,g.jsx)(s,{columns:i,columnFilters:n,data:_,stickyHeader:!0,bordered:!0,fullWidth:!0})]})}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Per-Column — Popover',
  parameters: {
    docs: {
      description: {
        story: \`
Per-column filter popover anchored to a header cell. Opt a column in by
setting \\\`meta.filter\\\` on its \\\`ColumnDef\\\`, register the matching adapter
with \\\`useTableFilters\\\`, and feed the hook's \\\`enhancedColumns\\\` +
\\\`columnFilters\\\` back into \\\`DsTable\\\`.

The header renders a ghost filter button that appears on hover; clicking
opens a popover with the adapter's UI (search + "All" + checkbox list when
\\\`searchable\\\` / \\\`selectAll\\\` are enabled on \\\`createCheckboxFilterAdapter\\\`)
and a \\\`Clear\\\` / \\\`Save\\\` footer. Clicking outside the popover discards the
draft and closes it (same as pressing Escape).
                \`
      },
      source: {
        code: uncontrolledSource
      }
    }
  },
  render: function Render() {
    const {
      columnFilters,
      filterChips,
      enhancedColumns,
      handlers
    } = useTableFilters({
      filterAdapters: adapters,
      baseColumns
    });
    return <DsStack direction="column" gap={16} flex="1">
                {filterChips.length > 0 && <DsTagFilter items={filterChips} onClearAll={handlers.clearAll} onItemDelete={handlers.deleteChip} />}

                <DsTable columns={enhancedColumns} columnFilters={columnFilters} data={rows} stickyHeader bordered fullWidth />
            </DsStack>;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Per-Column — Controlled',
  parameters: {
    docs: {
      description: {
        story: \`
Pass \\\`appliedFilters\\\` + \\\`onFiltersChange\\\` to drive filters from URL or
server state. Per-column Save commits only that column's draft into the
external state, leaving other filters untouched.
                \`
      },
      source: {
        code: controlledSource
      }
    }
  },
  render: function Render() {
    const [appliedFilters, setAppliedFilters] = useState<FilterState<CheckboxFilterItem[]>>({
      type: [{
        value: 'PP-LGX',
        label: 'PP-LGX'
      }]
    });
    const {
      columnFilters,
      filterChips,
      enhancedColumns,
      handlers
    } = useTableFilters({
      filterAdapters: adapters,
      baseColumns,
      appliedFilters,
      onFiltersChange: setAppliedFilters
    });
    return <DsStack direction="column" gap={16} flex="1">
                {filterChips.length > 0 && <DsTagFilter items={filterChips} onClearAll={handlers.clearAll} onItemDelete={handlers.deleteChip} />}

                <DsTable columns={enhancedColumns} columnFilters={columnFilters} data={rows} stickyHeader bordered fullWidth />
            </DsStack>;
  }
}`,...w.parameters?.docs?.source}}},T=[`ColumnFilters`,`ControlledColumnFilters`]}))();export{C as ColumnFilters,w as ControlledColumnFilters,T as __namedExportsOrder,S as default};