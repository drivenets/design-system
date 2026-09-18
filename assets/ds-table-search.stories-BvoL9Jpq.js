import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-icon-xtF7601f.js";import{n as a,t as o}from"./ds-stack-Dy-M5AZb.js";import{t as s}from"./ds-text-input-Ba6t-N2F.js";import{t as c}from"./ds-text-input-mBw2SaEb.js";import{n as l,t as u}from"./ds-table-BJkDgpc4.js";import{t as d}from"./ds-smart-tabs-MPdo0Mph.js";import{t as f}from"./ds-smart-tabs-BsTJBNQP.js";import{n as p,t as m}from"./story-decorators-C_JjURmG.js";import{n as h,r as g,t as _}from"./story-data-CNz-shmS.js";import{n as v,t as y}from"./components-CyiWy7TT.js";var b,x,S,C,w,T,E;function D(){return(D=e((()=>{b=t(),i(),f(),a(),c(),l(),g(),p(),y(),x=n(),{fn:S}=__STORYBOOK_MODULE_TEST__,C={title:`Components/Table/Search`,component:u,parameters:{layout:`fullscreen`},args:{columns:_,data:h,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:S()},decorators:[m]},w={name:`Search — Global Input`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,b.useState)(``),i=(0,b.useMemo)(()=>{if(!t)return e.data;let n=t.toLowerCase();return e.data.filter(e=>Object.values(e).some(e=>String(e).toLowerCase().includes(n)))},[t,e.data]);return(0,x.jsxs)(o,{direction:`column`,gap:16,children:[(0,x.jsx)(o,{width:`300px`,children:(0,x.jsx)(s,{value:t,onValueChange:n,placeholder:`Search all columns...`,slots:{startAdornment:(0,x.jsx)(r,{icon:`search`,size:`small`})}})}),(0,x.jsx)(u,{...e,data:i})]})}},T={name:`Tabs — Status Filter`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,b.useState)([]),[r,i]=(0,b.useState)(`all`),a=e=>{let t=e;i(t),n(t===`all`?[]:[{id:`status`,value:t}])},s=e=>{switch(e){case`relationship`:return`favorite`;case`complicated`:return`psychology`;default:return`person`}},c={accessorKey:`status`,header:`Status`,cell:e=>{let t=e.getValue(),n=s(t);return(0,x.jsx)(v,{icon:n,label:t})}},l=e.columns.map(e=>e.accessorKey===`status`?c:e);return(0,x.jsxs)(o,{direction:`column`,gap:16,flex:`1`,children:[(0,x.jsxs)(d,{activeTab:r,onTabClick:a,children:[(0,x.jsx)(d.Tab,{label:`All People`,value:`all`,icon:`groups`,color:`dark-blue`,content:h.length}),(0,x.jsx)(d.Tab,{label:`In a Relationship`,value:`relationship`,icon:`favorite`,color:`green`,content:h.filter(e=>e.status===`relationship`).length}),(0,x.jsx)(d.Tab,{label:`It's Complicated`,value:`complicated`,icon:`psychology`,color:`red`,content:h.filter(e=>e.status===`complicated`).length}),(0,x.jsx)(d.Tab,{label:`Single`,value:`single`,icon:`person`,color:`gray`,content:h.filter(e=>e.status===`single`).length})]}),(0,x.jsx)(u,{...e,columns:l,columnFilters:t,onColumnFiltersChange:n})]})}},E=[`AdvancedSearch`,`TabFilters`],w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  name: 'Search — Global Input',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [globalFilter, setGlobalFilter] = useState('');
    const filteredData = useMemo(() => {
      if (!globalFilter) {
        return args.data;
      }
      const lowercasedFilter = globalFilter.toLowerCase();
      return args.data.filter(row => {
        return Object.values(row).some(value => String(value).toLowerCase().includes(lowercasedFilter));
      });
    }, [globalFilter, args.data]);
    return <DsStack direction="column" gap={16}>
                <DsStack width="300px">
                    <DsTextInput value={globalFilter} onValueChange={setGlobalFilter} placeholder="Search all columns..." slots={{
          startAdornment: <DsIcon icon="search" size="small" />
        }} />
                </DsStack>
                <DsTable {...args} data={filteredData} />
            </DsStack>;
  }
}`,...w.parameters?.docs?.source},description:{story:`Global search across every column, owned by the consumer. Keep the query in
state, derive the filtered rows, and pass them to \`data\` — the table stays a
pure presentational view of whatever rows you hand it.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'Tabs — Status Filter',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render(args) {
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
    const [activeTab, setActiveTab] = useState<Status | 'all'>('all');
    const handleTabClick = (tabValue: string) => {
      const typedValue = tabValue as Status | 'all';
      setActiveTab(typedValue);
      if (typedValue === 'all') {
        setColumnFilters([]);
      } else {
        setColumnFilters([{
          id: 'status',
          value: typedValue
        }]);
      }
    };
    const getStatusIcon = (status: Status): IconType => {
      switch (status) {
        case 'relationship':
          return 'favorite';
        case 'complicated':
          return 'psychology';
        default:
          return 'person';
      }
    };
    const statusColumnDef: ColumnDef<Person> = {
      accessorKey: 'status',
      header: 'Status',
      cell: info => {
        const status = info.getValue() as Status;
        const icon = getStatusIcon(status);
        return <StatusItem icon={icon} label={status} />;
      }
    };
    const tableColumns = args.columns.map(col => (col as {
      accessorKey: string;
    }).accessorKey === 'status' ? statusColumnDef : col);
    return <DsStack direction="column" gap={16} flex="1">
                <DsSmartTabs activeTab={activeTab} onTabClick={handleTabClick}>
                    <DsSmartTabs.Tab label="All People" value="all" icon="groups" color="dark-blue" content={defaultData.length} />
                    <DsSmartTabs.Tab label="In a Relationship" value={'relationship'} icon="favorite" color="green" content={defaultData.filter(row => row.status === 'relationship').length} />
                    <DsSmartTabs.Tab label="It's Complicated" value={'complicated'} icon="psychology" color="red" content={defaultData.filter(row => row.status === 'complicated').length} />
                    <DsSmartTabs.Tab label="Single" value={'single'} icon="person" color="gray" content={defaultData.filter(row => row.status === 'single').length} />
                </DsSmartTabs>
                <DsTable {...args} columns={tableColumns} columnFilters={columnFilters} onColumnFiltersChange={setColumnFilters} />
            </DsStack>;
  }
}`,...T.parameters?.docs?.source},description:{story:'Drive a column filter from a tab bar. `DsSmartTabs` owns the active tab; each\ntab maps to a `columnFilters` entry (or clears it for "All"). The table is\ncontrolled via `columnFilters` / `onColumnFiltersChange`.',...T.parameters?.docs?.description}}}})))()}D();export{w as AdvancedSearch,T as TabFilters,E as __namedExportsOrder,C as default};