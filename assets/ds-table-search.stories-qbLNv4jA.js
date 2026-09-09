import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-icon-BRZFUTMz.js";import{n as o,t as s}from"./ds-stack-GU0hZWeR.js";import{r as c}from"./ds-text-input.types-LoNcVPp4.js";import{t as l}from"./ds-text-input-D0lDEuO4.js";import{n as u,t as d}from"./ds-table-DumaNPZU.js";import{t as f}from"./ds-smart-tabs-DQwbDPLZ.js";import{t as p}from"./ds-smart-tabs-BvJmDBXf.js";import{n as m,t as h}from"./story-decorators-B0BgvTCA.js";import{n as g,r as _,t as v}from"./story-data-DABjxFNS.js";import{n as y,t as b}from"./components-Ct8k3W1b.js";var x,S,C,w,T,E,D;t((()=>{x=e(n(),1),a(),p(),o(),l(),u(),_(),m(),b(),S=r(),{fn:C}=__STORYBOOK_MODULE_TEST__,w={title:`Components/Table/Filters`,component:d,parameters:{layout:`fullscreen`},args:{columns:v,data:g,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,onRowClick:C()},decorators:[h]},T={name:`Search — Global Input`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,x.useState)(``),r=(0,x.useMemo)(()=>{if(!t)return e.data;let n=t.toLowerCase();return e.data.filter(e=>Object.values(e).some(e=>String(e).toLowerCase().includes(n)))},[t,e.data]);return(0,S.jsxs)(s,{direction:`column`,gap:16,children:[(0,S.jsx)(s,{width:`300px`,children:(0,S.jsx)(c,{value:t,onValueChange:n,placeholder:`Search all columns...`,slots:{startAdornment:(0,S.jsx)(i,{icon:`search`,size:`small`})}})}),(0,S.jsx)(d,{...e,data:r})]})}},E={name:`Tabs — Status Filter`,parameters:{docs:{source:{type:`code`}}},render:function(e){let[t,n]=(0,x.useState)([]),[r,i]=(0,x.useState)(`all`),a=e=>{let t=e;i(t),n(t===`all`?[]:[{id:`status`,value:t}])},o=e=>{switch(e){case`relationship`:return`favorite`;case`complicated`:return`psychology`;default:return`person`}},c={accessorKey:`status`,header:`Status`,cell:e=>{let t=e.getValue();return(0,S.jsx)(y,{icon:o(t),label:t})}},l=e.columns.map(e=>e.accessorKey===`status`?c:e);return(0,S.jsxs)(s,{direction:`column`,gap:16,flex:`1`,children:[(0,S.jsxs)(f,{activeTab:r,onTabClick:a,children:[(0,S.jsx)(f.Tab,{label:`All People`,value:`all`,icon:`groups`,color:`dark-blue`,content:g.length}),(0,S.jsx)(f.Tab,{label:`In a Relationship`,value:`relationship`,icon:`favorite`,color:`green`,content:g.filter(e=>e.status===`relationship`).length}),(0,S.jsx)(f.Tab,{label:`It's Complicated`,value:`complicated`,icon:`psychology`,color:`red`,content:g.filter(e=>e.status===`complicated`).length}),(0,S.jsx)(f.Tab,{label:`Single`,value:`single`,icon:`person`,color:`gray`,content:g.filter(e=>e.status===`single`).length})]}),(0,S.jsx)(d,{...e,columns:l,columnFilters:t,onColumnFiltersChange:n})]})}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source},description:{story:`Global search across every column, owned by the consumer. Keep the query in
state, derive the filtered rows, and pass them to \`data\` — the table stays a
pure presentational view of whatever rows you hand it.`,...T.parameters?.docs?.description}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source},description:{story:'Drive a column filter from a tab bar. `DsSmartTabs` owns the active tab; each\ntab maps to a `columnFilters` entry (or clears it for "All"). The table is\ncontrolled via `columnFilters` / `onColumnFiltersChange`.',...E.parameters?.docs?.description}}},D=[`AdvancedSearch`,`TabFilters`]}))();export{T as AdvancedSearch,E as TabFilters,D as __namedExportsOrder,w as default};