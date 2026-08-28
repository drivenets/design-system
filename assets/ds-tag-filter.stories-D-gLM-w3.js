import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-tag-filter-CSmJW1F6.js";var o,s,c,l,u,d=t((()=>{o=`_container_z9hxz_1`,s=`_controlsContainer_z9hxz_7`,c=`_addButton_z9hxz_12`,l=`_infoText_z9hxz_20`,u={container:o,controlsContainer:s,addButton:c,infoText:l}})),f,p,m,h,g,_,v,y,b,x,S,C,w,T,E;t((()=>{f=e(n(),1),i(),d(),p=r(),m={title:`Components/TagFilter`,component:a,parameters:{layout:`padded`,docs:{description:{component:`Displays active filters as tags with overflow handling. Tags fill the left of a single row; the actions block (expand/collapse toggle, clear all) is pinned to the top-right and stays aligned with the first tag row when tags wrap.`}}},argTypes:{items:{control:`object`,description:`Array of tag items to display`},locale:{description:`Locale-specific options for customizing text content`,control:`object`},onClearAll:{action:`clear-all`,description:`Callback when "Clear all filters" is clicked`},onItemDelete:{action:`delete-item`,description:`Callback when item is deleted`},onItemSelect:{action:`select-item`,description:`Callback when item is selected`},onExpand:{action:`expand`,description:`Callback when expand/collapse is clicked`}}},h=[{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: From 100 to 10,000`},{id:`3`,label:`Completed from 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1 transporter`},{id:`5`,label:`Executor: Category 2, Layer 11 transporter`},{id:`6`,label:`Executor: Category 2, Layer 12 transporter`},{id:`7`,label:`Executor: Category 2, Layer 13 transporter`},{id:`8`,label:`Version: 000.0001-3`},{id:`9`,label:`Version: 000.0001-4`},{id:`10`,label:`Version: 000.0001-5`},{id:`11`,label:`Version: 000.0001-6`},{id:`12`,label:`Last editor: Kevin Levin`},{id:`13`,label:`Last editor: Emery Dance`}],g={render:function(e){let[t,n]=(0,f.useState)(h),r=()=>{n([])},i=()=>{let e=`new-${String(Date.now())}`;n(t=>[...t,{id:e,label:`New Filter ${String(t.length+1)}`}])},o=e=>{n(t=>t.filter(t=>t.id!==e.id))},s=e=>{n(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))};return(0,p.jsxs)(`div`,{className:u.container,children:[(0,p.jsx)(a,{...e,items:t,onClearAll:r,onItemDelete:o,onItemSelect:s}),(0,p.jsxs)(`div`,{className:u.controlsContainer,children:[(0,p.jsx)(`button`,{type:`button`,onClick:i,className:u.addButton,children:`Add Filter`}),(0,p.jsxs)(`p`,{className:u.infoText,children:[`Total filters: `,t.length]}),(0,p.jsxs)(`p`,{className:u.infoText,children:[`Selected filters: [`,t.filter(e=>e.selected).map(e=>`"${e.label}"`).join(`, `),`]`]})]})]})}},_={render:function(e){let[t,n]=(0,f.useState)([{id:`1`,label:`Status: Active`},{id:`2`,label:`Version: 1.0.0`},{id:`3`,label:`Author: John Doe`}]),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))},o=e=>{n(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))};return(0,p.jsx)(a,{...e,items:t,onClearAll:r,onItemDelete:i,onItemSelect:o})}},v={render:function(e){let[t,n]=(0,f.useState)(h.slice(0,5)),r=e=>{n(t=>t.filter(t=>t.id!==e.id))};return(0,p.jsx)(a,{...e,items:t,onClearAll:void 0,onItemDelete:r})}},y={render:function(e){let t=h.slice(0,5);return(0,p.jsx)(a,{...e,items:t,onClearAll:void 0,onItemDelete:void 0,onItemSelect:void 0})}},b={render:function(e){let[t,n]=(0,f.useState)(h.slice(0,5)),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))};return(0,p.jsx)(a,{...e,items:t,locale:{label:`This heading is ignored`},onClearAll:r,onItemDelete:i})}},x={render:function(e){let[t,n]=(0,f.useState)(h),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))};return(0,p.jsx)(a,{...e,items:t,locale:{clearButton:`Zresetuj`,showMore:`Pokaż więcej`,showLess:`Pokaż mniej`},onClearAll:r,onItemDelete:i})}},S={args:{items:h}},C={render:function(e){let[t,n]=(0,f.useState)(h.slice(0,6).map(e=>({...e,slotProps:{tag:{size:`small`}}}))),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))};return(0,p.jsx)(a,{...e,items:t,onClearAll:r,onItemDelete:i})}},w={render:function(e){let[t,n]=(0,f.useState)([{id:`1`,label:`Status: Active`,selected:!0},{id:`2`,label:`Running: From 100 to 10,000`,selected:!1},{id:`3`,label:`Completed from 20,000 to 100,000`,selected:!0},{id:`4`,label:`Executor: Category 1`,selected:!1},{id:`5`,label:`Version: 1.0.0`,selected:!0}]),r=()=>{n([])},i=e=>{n(t=>t.filter(t=>t.id!==e.id))},o=e=>{n(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))};return(0,p.jsx)(a,{...e,items:t,onClearAll:r,onItemDelete:i,onItemSelect:o})}},T={args:{items:[]}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(sampleFilters);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleAddFilter = () => {
      const newId = \`new-\${String(Date.now())}\`;
      setFilters(prev => [...prev, {
        id: newId,
        label: \`New Filter \${String(prev.length + 1)}\`
      }]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <div className={styles.container}>
                <DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />
                <div className={styles.controlsContainer}>
                    <button type="button" onClick={handleAddFilter} className={styles.addButton}>
                        Add Filter
                    </button>
                    <p className={styles.infoText}>Total filters: {filters.length}</p>
                    <p className={styles.infoText}>
                        Selected filters: [
                        {filters.filter(filter => filter.selected).map(filter => \`"\${filter.label}"\`).join(', ')}
                        ]
                    </p>
                </div>
            </div>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Default story demonstrating the TagFilter component with interactive controls.
Try adding, removing, and selecting filters to see the component in action.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active'
    }, {
      id: '2',
      label: 'Version: 1.0.0'
    }, {
      id: '3',
      label: 'Author: John Doe'
    }]);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`Story showing fewer filters that fit within the visible area without overflow.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(sampleFilters.slice(0, 5));
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };

    // Storybook injects \`onClearAll\` via args by default — pass \`undefined\` explicitly
    // so the component hides the "Clear all" button.
    return <DsTagFilter {...args} items={filters} onClearAll={undefined} onItemDelete={handleFilterDelete} />;
  }
}`,...v.parameters?.docs?.source},description:{story:`Story showing TagFilter without the "Clear all" button.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const filters: TagFilterItem[] = sampleFilters.slice(0, 5);

    // Storybook injects callbacks via args by default — pass \`undefined\` explicitly
    // so the component renders in read-only mode (no clear, delete, or select).
    return <DsTagFilter {...args} items={filters} onClearAll={undefined} onItemDelete={undefined} onItemSelect={undefined} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`Story showing TagFilter without delete functionality (read-only tags).`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(sampleFilters.slice(0, 5));
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter {...args} items={filters} locale={{
      label: 'This heading is ignored'
    }} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />;
  }
}`,...b.parameters?.docs?.source},description:{story:"Story documenting that `locale.label` is deprecated and never rendered.\nWe removed the header label, so any label passed here has no visible effect.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState(sampleFilters);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter {...args} items={filters} locale={{
      // cspell:disable-next-line
      clearButton: 'Zresetuj',
      // cspell:disable-next-line
      showMore: 'Pokaż więcej',
      // cspell:disable-next-line
      showLess: 'Pokaż mniej'
    }} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />;
  }
}`,...x.parameters?.docs?.source},description:{story:"Story demonstrating locale customization of the action buttons (clear, show more,\nshow less). `locale.label` is intentionally omitted — it is deprecated and unused.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    items: sampleFilters
  }
}`,...S.parameters?.docs?.source},description:{story:"Story demonstrating the expand/collapse toggle. The hidden count stays stable\nbetween `Show more (N)` and `Show less (N)`.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const smallFilters: TagFilterItem[] = sampleFilters.slice(0, 6).map(item => ({
      ...item,
      slotProps: {
        tag: {
          size: 'small'
        }
      }
    }));
    const [filters, setFilters] = useState(smallFilters);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    return <DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} />;
  }
}`,...C.parameters?.docs?.source},description:{story:`Story showing TagFilter with small tags via slotProps.tag on each item.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: function Render(args) {
    const [filters, setFilters] = useState<TagFilterItem[]>([{
      id: '1',
      label: 'Status: Active',
      selected: true
    }, {
      id: '2',
      label: 'Running: From 100 to 10,000',
      selected: false
    }, {
      id: '3',
      label: 'Completed from 20,000 to 100,000',
      selected: true
    }, {
      id: '4',
      label: 'Executor: Category 1',
      selected: false
    }, {
      id: '5',
      label: 'Version: 1.0.0',
      selected: true
    }]);
    const handleClearAll = () => {
      setFilters([]);
    };
    const handleFilterDelete = (filter: TagFilterItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: TagFilterItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <DsTagFilter {...args} items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />;
  }
}`,...w.parameters?.docs?.source},description:{story:`Story showing TagFilter with pre-selected items.`,...w.parameters?.docs?.description}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    items: []
  }
}`,...T.parameters?.docs?.source},description:{story:`Story verifying the component renders nothing when items is empty.`,...T.parameters?.docs?.description}}},E=[`Default`,`FewFilters`,`WithoutClearAll`,`ReadOnly`,`DeprecatedLabelIgnored`,`CustomLocale`,`ExpandCollapse`,`SmallSize`,`WithPreSelectedItems`,`EmptyState`]}))();export{x as CustomLocale,g as Default,b as DeprecatedLabelIgnored,T as EmptyState,S as ExpandCollapse,_ as FewFilters,y as ReadOnly,C as SmallSize,w as WithPreSelectedItems,v as WithoutClearAll,E as __namedExportsOrder,m as default};