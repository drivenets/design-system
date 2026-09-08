import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-icon-BRZFUTMz.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{r as c}from"./ds-text-input.types-LoNcVPp4.js";import{t as l}from"./ds-text-input-D0lDEuO4.js";import{n as u,t as d}from"./ds-table-BI2o0ZVf.js";import{t as f}from"./ds-smart-tabs-DQwbDPLZ.js";import{t as p}from"./ds-smart-tabs-BvJmDBXf.js";import{n as m,t as h}from"./story-decorators-B0BgvTCA.js";import{n as g,r as _,t as v}from"./story-data-DABjxFNS.js";import{i as y,n as b,t as x}from"./components-AajuQmct.js";var S,C,w,T,E,D,O;t((()=>{S=e(n(),1),a(),p(),o(),l(),u(),_(),m(),x(),C=r(),{fn:w}=__STORYBOOK_MODULE_TEST__,T={title:`Components/Table/Filters`,component:d,parameters:{layout:`fullscreen`},args:{columns:v,data:g,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,C.jsx)(b,{}),onRowClick:w()},decorators:[h]},E={name:`Search — Global Input`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,S.useState)(``),r=(0,S.useMemo)(()=>{if(!t)return e.data;let n=t.toLowerCase();return e.data.filter(e=>Object.values(e).some(e=>String(e).toLowerCase().includes(n)))},[t,e.data]);return(0,C.jsxs)(s,{direction:`column`,gap:16,children:[(0,C.jsx)(s,{width:`300px`,children:(0,C.jsx)(c,{value:t,onValueChange:n,placeholder:`Search all columns...`,slots:{startAdornment:(0,C.jsx)(i,{icon:`search`,size:`small`})}})}),(0,C.jsx)(d,{...e,data:r})]})}},D={name:`Tabs — Status Filter`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,S.useState)([]),[r,i]=(0,S.useState)(`all`),a=e=>{let t=e;i(t),n(t===`all`?[]:[{id:`status`,value:t}])},o=e=>{switch(e){case`relationship`:return`favorite`;case`complicated`:return`psychology`;default:return`person`}},c={accessorKey:`status`,header:`Status`,cell:e=>{let t=e.getValue();return(0,C.jsx)(y,{icon:o(t),label:t})}},l=e.columns.map(e=>e.accessorKey===`status`?c:e);return(0,C.jsxs)(s,{direction:`column`,gap:16,flex:`1`,children:[(0,C.jsxs)(f,{activeTab:r,onTabClick:a,children:[(0,C.jsx)(f.Tab,{label:`All People`,value:`all`,icon:`groups`,color:`dark-blue`,content:g.length}),(0,C.jsx)(f.Tab,{label:`In a Relationship`,value:`relationship`,icon:`favorite`,color:`green`,content:g.filter(e=>e.status===`relationship`).length}),(0,C.jsx)(f.Tab,{label:`It's Complicated`,value:`complicated`,icon:`psychology`,color:`red`,content:g.filter(e=>e.status===`complicated`).length}),(0,C.jsx)(f.Tab,{label:`Single`,value:`single`,icon:`person`,color:`gray`,content:g.filter(e=>e.status===`single`).length})]}),(0,C.jsx)(d,{...e,columns:l,columnFilters:t,onColumnFiltersChange:n})]})}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:`Global search across every column, owned by the consumer. Keep the query in
state, derive the filtered rows, and pass them to \`data\` — the table stays a
pure presentational view of whatever rows you hand it.`,...E.parameters?.docs?.description}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source},description:{story:'Drive a column filter from a tab bar. `DsSmartTabs` owns the active tab; each\ntab maps to a `columnFilters` entry (or clears it for "All"). The table is\ncontrolled via `columnFilters` / `onColumnFiltersChange`.',...D.parameters?.docs?.description}}},O=[`AdvancedSearch`,`TabFilters`]}))();export{E as AdvancedSearch,D as TabFilters,O as __namedExportsOrder,T as default};