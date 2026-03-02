import{j as a}from"./jsx-runtime-u17CrQMm.js";import{r as b}from"./iframe-C9HeFeN4.js";import{D as p}from"./ds-smart-tabs-rnWhvRt4.js";import{D as T}from"./ds-table-Bcbq-K_H.js";import{s as C}from"./ds-table.stories.module-D_XXzStM.js";import{f as x,d as c,c as D,T as F,S as R}from"./table-empty-state-CAHMRdfo.js";import{g as r}from"./story-test-helpers-PqH2Bcxs.js";import"./preload-helper-PPVm8Dsz.js";import"./index-D1Jr-yOf.js";import"./ds-icon-qceOxx15.js";import"./core-table-DSBXsNKb.js";import"./ds-button-D-cEgAHJ.js";import"./ds-button-legacy-a8N6Cu5i.js";import"./ds-button-new-C1pZYrFM.js";import"./ds-typography-BoGB02z5.js";import"./index-DacD_HS5.js";import"./index-DqmfwFE4.js";import"./ds-checkbox-DIyS8pzQ.js";import"./index-COYMcdJv.js";import"./index-2OhZl8Tc.js";import"./index-Dp1tOaX-.js";import"./index-BeWXQAI-.js";import"./ds-dropdown-menu-w20UZ6H9.js";import"./index-CxlcXRnu.js";import"./Combination-D0rgt7IN.js";import"./index-CBmF5018.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-CsjcFpeD.js";import"./ds-text-input-BYuh4m6k.js";import"./portal-DeGjqhyD.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DS51nLeU.js";import"./create-anatomy-Cd6VaHaP.js";import"./use-presence-CwUE1V9t.js";import"./set-BXJwmBMb.js";import"./raf-CC9hSMXO.js";import"./event-CBXSxTbR.js";import"./index--zolotfl.js";import"./get-styles-CEbrKovt.js";import"./typeahead-BHrAEzZ0.js";import"./query-CjgVAlRR.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-BemikHtc.js";import"./navigate-CBAkW6Yj.js";import"./merge-refs-DX9dreSa.js";const{expect:n,userEvent:h}=__STORYBOOK_MODULE_TEST__,ft={title:"Design System/Table/Search and Filtering",component:T,parameters:{layout:"fullscreen"},args:{columns:D,data:c,stickyHeader:!0,bordered:!0,fullWidth:!0,expandable:!1,emptyState:a.jsx(F,{}),onRowClick:t=>console.log("Row clicked:",t)},decorators:[x]},g={name:"With External Global Search",render:function(s){const[o,l]=b.useState(""),u=b.useMemo(()=>{if(!o)return s.data;const m=o.toLowerCase();return s.data.filter(v=>Object.values(v).some(w=>String(w).toLowerCase().includes(m)))},[o,s.data]);return a.jsxs("div",{children:[a.jsx("div",{style:{marginBottom:"1rem"},children:a.jsx("input",{type:"text",value:o,onChange:m=>l(m.target.value),placeholder:"Search all columns...",style:{padding:"0.5rem",width:"300px"}})}),a.jsx(T,{...s,data:u})]})},args:{},play:async({canvas:t})=>{await n(r(t)).toHaveLength(15);const s=t.getByPlaceholderText(/search all columns/i);await h.type(s,"Tanner"),await n(r(t)).toHaveLength(1),await n(r(t)[0]).toHaveTextContent("Tanner"),await h.clear(s),await n(r(t)).toHaveLength(15)}},d={name:"With Tab Filters",render:function(s){const[o,l]=b.useState([]),[u,m]=b.useState("all"),v=e=>{const i=e;m(i),l(i==="all"?[]:[{id:"status",value:i}])},w=e=>{switch(e){case"relationship":return"favorite";case"complicated":return"psychology";default:return"person"}},f={accessorKey:"status",header:"Status",cell:e=>{const i=e.getValue(),S=w(i);return a.jsx(R,{icon:S,label:i})}},y=s.columns.map(e=>e.accessorKey==="status"?f:e);return a.jsxs("div",{className:C.tableFilterContainer,children:[a.jsxs(p,{activeTab:u,onTabClick:v,children:[a.jsx(p.Tab,{label:"All People",value:"all",icon:"groups",color:"dark-blue",content:c.length}),a.jsx(p.Tab,{label:"In a Relationship",value:"relationship",icon:"favorite",color:"green",content:c.filter(e=>e.status==="relationship").length}),a.jsx(p.Tab,{label:"It's Complicated",value:"complicated",icon:"psychology",color:"red",content:c.filter(e=>e.status==="complicated").length}),a.jsx(p.Tab,{label:"Single",value:"single",icon:"person",color:"gray",content:c.filter(e=>e.status==="single").length})]}),a.jsx(T,{...s,columns:y,columnFilters:o,onColumnFiltersChange:l})]})},args:{},play:async({canvas:t})=>{await n(r(t)).toHaveLength(15);const s=t.getByRole("button",{name:/single/i});await h.click(s);const o=c.filter(u=>u.status==="single").length;await n(r(t)).toHaveLength(o);const l=t.getByRole("button",{name:/all people/i});await h.click(l),await n(r(t)).toHaveLength(15)}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const yt=["AdvancedSearch","TabFilters"];export{g as AdvancedSearch,d as TabFilters,yt as __namedExportsOrder,ft as default};
