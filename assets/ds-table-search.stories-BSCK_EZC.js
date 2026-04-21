import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-9lsRsqru.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./ds-icon-BwTJWP0n.js";import{n as a,t as o}from"./ds-table-sOaYl65W.js";import{n as s,t as c}from"./ds-smart-tabs-DIDD3jTa.js";import{n as l,t as u}from"./ds-table.stories.module-CQzn1mCD.js";import{a as d,c as f,l as p,n as m,o as h,r as g,s as _,t as v}from"./components-QnKHwynB.js";var y=t((()=>{i()})),b=t((()=>{s(),y()})),x,S,C,w,T,E;t((()=>{x=e(n(),1),b(),a(),l(),p(),h(),v(),S=r(),C={title:`Design System/Table/Search and Filtering`,component:o,parameters:{layout:`fullscreen`},args:{columns:_,data:f,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,S.jsx)(m,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[d]},w={name:`With External Global Search`,render:function(e){let[t,n]=(0,x.useState)(``),r=(0,x.useMemo)(()=>{if(!t)return e.data;let n=t.toLowerCase();return e.data.filter(e=>Object.values(e).some(e=>String(e).toLowerCase().includes(n)))},[t,e.data]);return(0,S.jsxs)(`div`,{children:[(0,S.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,S.jsx)(`input`,{type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`Search all columns...`,style:{padding:`0.5rem`,width:`300px`}})}),(0,S.jsx)(o,{...e,data:r})]})}},T={name:`With Tab Filters`,render:function(e){let[t,n]=(0,x.useState)([]),[r,i]=(0,x.useState)(`all`),a=e=>{let t=e;i(t),n(t===`all`?[]:[{id:`status`,value:t}])},s=e=>{switch(e){case`relationship`:return`favorite`;case`complicated`:return`psychology`;default:return`person`}},l={accessorKey:`status`,header:`Status`,cell:e=>{let t=e.getValue();return(0,S.jsx)(g,{icon:s(t),label:t})}},d=e.columns.map(e=>e.accessorKey===`status`?l:e);return(0,S.jsxs)(`div`,{className:u.tableFilterContainer,children:[(0,S.jsxs)(c,{activeTab:r,onTabClick:a,children:[(0,S.jsx)(c.Tab,{label:`All People`,value:`all`,icon:`groups`,color:`dark-blue`,content:f.length}),(0,S.jsx)(c.Tab,{label:`In a Relationship`,value:`relationship`,icon:`favorite`,color:`green`,content:f.filter(e=>e.status===`relationship`).length}),(0,S.jsx)(c.Tab,{label:`It's Complicated`,value:`complicated`,icon:`psychology`,color:`red`,content:f.filter(e=>e.status===`complicated`).length}),(0,S.jsx)(c.Tab,{label:`Single`,value:`single`,icon:`person`,color:`gray`,content:f.filter(e=>e.status===`single`).length})]}),(0,S.jsx)(o,{...e,columns:d,columnFilters:t,onColumnFiltersChange:n})]})}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E=[`AdvancedSearch`,`TabFilters`]}))();export{w as AdvancedSearch,T as TabFilters,E as __namedExportsOrder,C as default};