import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Bowpj2Im.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./ds-icon-B9LMLd-3.js";import{n as a,t as o}from"./ds-table-CxVFBYtI.js";import{n as s,t as c}from"./ds-smart-tabs-BMqKWZKd.js";import{n as l,t as u}from"./ds-table.stories.module-BQO6U9br.js";import{c as d,i as f,l as p,n as m,o as h,r as g,s as _,t as v,u as y}from"./components-SbuziaTV.js";import{n as b,t as x}from"./story-test-helpers-mSAzD2Wl.js";var S=t((()=>{i()})),C=t((()=>{s(),S()})),w,T,E,D,O,k,A,j;t((()=>{w=e(n(),1),C(),a(),l(),f(),y(),_(),b(),v(),T=r(),{expect:E,userEvent:D}=__STORYBOOK_MODULE_TEST__,O={title:`Design System/Table/Search and Filtering`,component:o,parameters:{layout:`fullscreen`},args:{columns:d,data:p,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:(0,T.jsx)(m,{}),onRowClick:e=>console.log(`Row clicked:`,e)},decorators:[h]},k={name:`With External Global Search`,render:function(e){let[t,n]=(0,w.useState)(``),r=(0,w.useMemo)(()=>{if(!t)return e.data;let n=t.toLowerCase();return e.data.filter(e=>Object.values(e).some(e=>String(e).toLowerCase().includes(n)))},[t,e.data]);return(0,T.jsxs)(`div`,{children:[(0,T.jsx)(`div`,{style:{marginBottom:`1rem`},children:(0,T.jsx)(`input`,{type:`text`,value:t,onChange:e=>n(e.target.value),placeholder:`Search all columns...`,style:{padding:`0.5rem`,width:`300px`}})}),(0,T.jsx)(o,{...e,data:r})]})},args:{},play:async({canvas:e})=>{await E(x(e)).toHaveLength(15);let t=e.getByPlaceholderText(/search all columns/i);await D.type(t,`Tanner`),await E(x(e)).toHaveLength(1),await E(x(e)[0]).toHaveTextContent(`Tanner`),await D.clear(t),await E(x(e)).toHaveLength(15)}},A={name:`With Tab Filters`,render:function(e){let[t,n]=(0,w.useState)([]),[r,i]=(0,w.useState)(`all`),a=e=>{let t=e;i(t),n(t===`all`?[]:[{id:`status`,value:t}])},s=e=>{switch(e){case`relationship`:return`favorite`;case`complicated`:return`psychology`;default:return`person`}},l={accessorKey:`status`,header:`Status`,cell:e=>{let t=e.getValue();return(0,T.jsx)(g,{icon:s(t),label:t})}},d=e.columns.map(e=>e.accessorKey===`status`?l:e);return(0,T.jsxs)(`div`,{className:u.tableFilterContainer,children:[(0,T.jsxs)(c,{activeTab:r,onTabClick:a,children:[(0,T.jsx)(c.Tab,{label:`All People`,value:`all`,icon:`groups`,color:`dark-blue`,content:p.length}),(0,T.jsx)(c.Tab,{label:`In a Relationship`,value:`relationship`,icon:`favorite`,color:`green`,content:p.filter(e=>e.status===`relationship`).length}),(0,T.jsx)(c.Tab,{label:`It's Complicated`,value:`complicated`,icon:`psychology`,color:`red`,content:p.filter(e=>e.status===`complicated`).length}),(0,T.jsx)(c.Tab,{label:`Single`,value:`single`,icon:`person`,color:`gray`,content:p.filter(e=>e.status===`single`).length})]}),(0,T.jsx)(o,{...e,columns:d,columnFilters:t,onColumnFiltersChange:n})]})},args:{},play:async({canvas:e})=>{await E(x(e)).toHaveLength(15);let t=e.getByRole(`button`,{name:/single/i});await D.click(t);let n=p.filter(e=>e.status===`single`).length;await E(x(e)).toHaveLength(n);let r=e.getByRole(`button`,{name:/all people/i});await D.click(r),await E(x(e)).toHaveLength(15)}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
  },
  args: {},
  play: async ({
    canvas
  }) => {
    await expect(getDataRows(canvas)).toHaveLength(15);
    const searchInput = canvas.getByPlaceholderText(/search all columns/i);
    await userEvent.type(searchInput, 'Tanner');
    await expect(getDataRows(canvas)).toHaveLength(1);
    await expect(getDataRows(canvas)[0]).toHaveTextContent('Tanner');
    await userEvent.clear(searchInput);
    await expect(getDataRows(canvas)).toHaveLength(15);
  }
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
  },
  args: {},
  play: async ({
    canvas
  }) => {
    await expect(getDataRows(canvas)).toHaveLength(15);
    const singleTab = canvas.getByRole('button', {
      name: /single/i
    });
    await userEvent.click(singleTab);
    const singleRowCount = defaultData.filter(row => row.status === 'single').length;
    await expect(getDataRows(canvas)).toHaveLength(singleRowCount);
    const allTab = canvas.getByRole('button', {
      name: /all people/i
    });
    await userEvent.click(allTab);
    await expect(getDataRows(canvas)).toHaveLength(15);
  }
}`,...A.parameters?.docs?.source}}},j=[`AdvancedSearch`,`TabFilters`]}))();export{k as AdvancedSearch,A as TabFilters,j as __namedExportsOrder,O as default};