import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BJfd4buQ.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{n as i,t as a}from"./ds-table-o0yMM2m6.js";import{t as o}from"./ds-smart-tabs-BzefIHje.js";import{t as s}from"./ds-smart-tabs-D8T8A155.js";import{n as c,t as l}from"./ds-table.stories.module-BH4xkOob.js";import{c as u,d,f,i as p,l as m,n as h,t as g,u as _}from"./components-CEV2igVQ.js";var v,y,b,x,S,C;e((()=>{v=t(n(),1),s(),i(),c(),f(),m(),g(),y=r(),b={title:`Components/Table/Search and Filtering`,component:a,parameters:{layout:`fullscreen`},args:{columns:_,data:d,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,y.jsx)(h,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[u]},x={name:`With External Global Search`,render:function(e){let[t,n]=(0,v.useState)(``),r=(0,v.useMemo)(()=>{if(!t)return e.data;let n=t.toLowerCase();return e.data.filter(e=>Object.values(e).some(e=>String(e).toLowerCase().includes(n)))},[t,e.data]);return(0,y.jsxs)(`div`,{children:[(0,y.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,y.jsx)(`input`,{type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`Search all columns...`,style:{padding:`0.5rem`,width:`300px`}})}),(0,y.jsx)(a,{...e,data:r})]})}},S={name:`With Tab Filters`,render:function(e){let[t,n]=(0,v.useState)([]),[r,i]=(0,v.useState)(`all`),s=e=>{let t=e;i(t),n(t===`all`?[]:[{id:`status`,value:t}])},c=e=>{switch(e){case`relationship`:return`favorite`;case`complicated`:return`psychology`;default:return`person`}},u={accessorKey:`status`,header:`Status`,cell:e=>{let t=e.getValue();return(0,y.jsx)(p,{icon:c(t),label:t})}},f=e.columns.map(e=>e.accessorKey===`status`?u:e);return(0,y.jsxs)(`div`,{className:l.tableFilterContainer,children:[(0,y.jsxs)(o,{activeTab:r,onTabClick:s,children:[(0,y.jsx)(o.Tab,{label:`All People`,value:`all`,icon:`groups`,color:`dark-blue`,content:d.length}),(0,y.jsx)(o.Tab,{label:`In a Relationship`,value:`relationship`,icon:`favorite`,color:`green`,content:d.filter(e=>e.status===`relationship`).length}),(0,y.jsx)(o.Tab,{label:`It's Complicated`,value:`complicated`,icon:`psychology`,color:`red`,content:d.filter(e=>e.status===`complicated`).length}),(0,y.jsx)(o.Tab,{label:`Single`,value:`single`,icon:`person`,color:`gray`,content:d.filter(e=>e.status===`single`).length})]}),(0,y.jsx)(a,{...e,columns:f,columnFilters:t,onColumnFiltersChange:n})]})}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  name: 'With External Global Search',
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
    return <div>
                <div style={{
        marginBottom: '1rem'
      }}>
                    <input type="text" value={globalFilter} onChange={e => setGlobalFilter(e.target.value)} placeholder="Search all columns..." style={{
          padding: '0.5rem',
          width: '300px'
        }} />
                </div>
                <DsTable {...args} data={filteredData} />
            </div>;
  }
}`,...x.parameters?.docs?.source}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'With Tab Filters',
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
    return <div className={styles.tableFilterContainer}>
                <DsSmartTabs activeTab={activeTab} onTabClick={handleTabClick}>
                    <DsSmartTabs.Tab label="All People" value="all" icon="groups" color="dark-blue" content={defaultData.length} />
                    <DsSmartTabs.Tab label="In a Relationship" value={'relationship'} icon="favorite" color="green" content={defaultData.filter(row => row.status === 'relationship').length} />
                    <DsSmartTabs.Tab label="It's Complicated" value={'complicated'} icon="psychology" color="red" content={defaultData.filter(row => row.status === 'complicated').length} />
                    <DsSmartTabs.Tab label="Single" value={'single'} icon="person" color="gray" content={defaultData.filter(row => row.status === 'single').length} />
                </DsSmartTabs>
                <DsTable {...args} columns={tableColumns} columnFilters={columnFilters} onColumnFiltersChange={setColumnFilters} />
            </div>;
  }
}`,...S.parameters?.docs?.source}}},C=[`AdvancedSearch`,`TabFilters`]}))();export{x as AdvancedSearch,S as TabFilters,C as __namedExportsOrder,b as default};