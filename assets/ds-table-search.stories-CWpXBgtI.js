import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-DaWFeW3H.js";import{D as p}from"./ds-smart-tabs-CkgJrGBm.js";import{D as T}from"./ds-table-Bot_KJiN.js";import{s as C}from"./ds-table.stories.module-D_XXzStM.js";import{f as x,d as c,c as D,T as F,S as R}from"./table-empty-state-jFKrsHsP.js";import{g as r}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BpdsuZ17.js";import"./ds-icon-2Kkf3LCh.js";import"./index-Bg5G61Kq.js";import"./index-DCQ4Ts3n.js";import"./core-table-qQnn0MfL.js";import"./ds-button-jTDPKYIv.js";import"./ds-button-legacy-BAo7BAO_.js";import"./ds-button-new-DsvWEHV9.js";import"./ds-typography-XNs9d9js.js";import"./index-CNn0cUAd.js";import"./index-DXLZwxM6.js";import"./ds-checkbox-BwvtyTkU.js";import"./index-CtF7H05h.js";import"./index-DsBdYlOm.js";import"./ds-dropdown-menu-CUExhGOg.js";import"./index-Ctqz558P.js";import"./Combination-rceJihvq.js";import"./index-BR7dmqOs.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-CZYKFMEa.js";import"./ds-text-input-jz3BHRD9.js";import"./portal-CUyOu765.js";import"./create-split-props-u5h9OPvL.js";import"./index-CmxqiR_e.js";import"./use-locale-context-CRkuRW1d.js";import"./use-presence-C4I73DQO.js";import"./index-BXj7y7dq.js";import"./index-BkUmtHXX.js";import"./merge-refs-DX9dreSa.js";const{expect:n,userEvent:h}=__STORYBOOK_MODULE_TEST__,mt={title:"Design System/Table/Search and Filtering",component:T,parameters:{layout:"fullscreen"},args:{columns:D,data:c,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:a.jsx(F,{}),onRowClick:t=>console.log("Row clicked:",t)},decorators:[x]},g={name:"With External Global Search",render:function(s){const[l,o]=b.useState(""),u=b.useMemo(()=>{if(!l)return s.data;const m=l.toLowerCase();return s.data.filter(v=>Object.values(v).some(w=>String(w).toLowerCase().includes(m)))},[l,s.data]);return a.jsxs("div",{children:[a.jsx("div",{style:{marginBottom:"1rem"},children:a.jsx("input",{type:"text",value:l,onChange:m=>o(m.target.value),placeholder:"Search all columns...",style:{padding:"0.5rem",width:"300px"}})}),a.jsx(T,{...s,data:u})]})},args:{},play:async({canvas:t})=>{await n(r(t)).toHaveLength(15);const s=t.getByPlaceholderText(/search all columns/i);await h.type(s,"Tanner"),await n(r(t)).toHaveLength(1),await n(r(t)[0]).toHaveTextContent("Tanner"),await h.clear(s),await n(r(t)).toHaveLength(15)}},d={name:"With Tab Filters",render:function(s){const[l,o]=b.useState([]),[u,m]=b.useState("all"),v=e=>{const i=e;m(i),o(i==="all"?[]:[{id:"status",value:i}])},w=e=>{switch(e){case"relationship":return"favorite";case"complicated":return"psychology";default:return"person"}},f={accessorKey:"status",header:"Status",cell:e=>{const i=e.getValue(),S=w(i);return a.jsx(R,{icon:S,label:i})}},y=s.columns.map(e=>e.accessorKey==="status"?f:e);return a.jsxs("div",{className:C.tableFilterContainer,children:[a.jsxs(p,{activeTab:u,onTabClick:v,children:[a.jsx(p.Tab,{label:"All People",value:"all",icon:"groups",color:"dark-blue",content:c.length}),a.jsx(p.Tab,{label:"In a Relationship",value:"relationship",icon:"favorite",color:"green",content:c.filter(e=>e.status==="relationship").length}),a.jsx(p.Tab,{label:"It's Complicated",value:"complicated",icon:"psychology",color:"red",content:c.filter(e=>e.status==="complicated").length}),a.jsx(p.Tab,{label:"Single",value:"single",icon:"person",color:"gray",content:c.filter(e=>e.status==="single").length})]}),a.jsx(T,{...s,columns:y,columnFilters:l,onColumnFiltersChange:o})]})},args:{},play:async({canvas:t})=>{await n(r(t)).toHaveLength(15);const s=t.getByRole("button",{name:/single/i});await h.click(s);const l=c.filter(u=>u.status==="single").length;await n(r(t)).toHaveLength(l);const o=t.getByRole("button",{name:/all people/i});await h.click(o),await n(r(t)).toHaveLength(15)}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const pt=["AdvancedSearch","TabFilters"];export{g as AdvancedSearch,d as TabFilters,pt as __namedExportsOrder,mt as default};
