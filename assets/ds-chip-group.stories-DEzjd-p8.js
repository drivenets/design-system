import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-ChlkeYAf.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{n as i,t as a}from"./ds-chip-group-Bl4Vj0x8.js";var o,s,c,l,u,d=t((()=>{o=`_container_z9hxz_1`,s=`_controlsContainer_z9hxz_7`,c=`_addButton_z9hxz_12`,l=`_infoText_z9hxz_20`,u={container:o,controlsContainer:s,addButton:c,infoText:l}})),f,p,m,h,g,_;t((()=>{f=e(n(),1),i(),d(),p=r(),m={title:`Design System/ChipGroup (Deprecated)`,component:a,parameters:{layout:`padded`,docs:{description:{component:"**Deprecated**: This component is deprecated. Please use `DsTagFilter` instead. See the TagGroup stories for the replacement component."}}},tags:[`deprecated`],argTypes:{items:{control:`object`,description:`Array of chip items to display`},onClearAll:{action:`clear-all`,description:`Callback when "Clear all" is clicked`},onItemDelete:{action:`delete-item`,description:`Callback when item is deleted`}}},h=[{id:`1`,label:`Status: Active`},{id:`2`,label:`Running: From 100 to 10,000`},{id:`3`,label:`Completed from 20,000 to 100,000`},{id:`4`,label:`Executor: Category 1, Layer 1 transporter`},{id:`5`,label:`Executor: Category 2, Layer 11 transporter`},{id:`6`,label:`Executor: Category 2, Layer 12 transporter`},{id:`7`,label:`Executor: Category 2, Layer 13 transporter`},{id:`8`,label:`Version: 000.0001-3`},{id:`9`,label:`Version: 000.0001-4`},{id:`10`,label:`Version: 000.0001-5`},{id:`11`,label:`Version: 000.0001-6`},{id:`12`,label:`Last editor: Mary Levin`},{id:`13`,label:`Last editor: Emery Franco`}],g={render:function(){let[e,t]=(0,f.useState)(h);return(0,p.jsxs)(`div`,{className:u.container,children:[(0,p.jsx)(a,{items:e,onClearAll:()=>{t([])},onItemDelete:e=>{t(t=>t.filter(t=>t.id!==e.id))},onItemSelect:e=>{t(t=>t.map(t=>t.id===e.id?{...t,selected:!t.selected}:t))}}),(0,p.jsxs)(`div`,{className:u.controlsContainer,children:[(0,p.jsx)(`button`,{onClick:()=>{let e=`new-${String(Date.now())}`;t(t=>[...t,{id:e,label:`New Filter ${String(t.length+1)}`}])},className:u.addButton,children:`Add Filter`}),(0,p.jsxs)(`p`,{className:u.infoText,children:[`Total filters: `,e.length]}),(0,p.jsxs)(`p`,{className:u.infoText,children:[`Selected filters: [`,e.filter(e=>e.selected).map(e=>`"${e.label}"`).join(`, `),`]`]})]})]})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: function Render() {
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
    const handleFilterDelete = (filter: ChipItem) => {
      setFilters(prev => prev.filter(f => f.id !== filter.id));
    };
    const handleFilterSelect = (filter: ChipItem) => {
      setFilters(prev => prev.map(f => f.id === filter.id ? {
        ...f,
        selected: !f.selected
      } : f));
    };
    return <div className={styles.container}>
                <DsChipGroup items={filters} onClearAll={handleClearAll} onItemDelete={handleFilterDelete} onItemSelect={handleFilterSelect} />
                <div className={styles.controlsContainer}>
                    <button onClick={handleAddFilter} className={styles.addButton}>
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
}`,...g.parameters?.docs?.source}}},_=[`Default`]}))();export{g as Default,_ as __namedExportsOrder,m as default};