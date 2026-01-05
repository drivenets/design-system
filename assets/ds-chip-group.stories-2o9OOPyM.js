import{j as r}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-KTy4jNs7.js";import{D as a}from"./ds-chip-group-CW5Y4Qec.js";import"./preload-helper-PPVm8Dsz.js";import"./index-BggpcTxm.js";import"./index-4iRRa5L5.js";import"./index-DItRxoOQ.js";import"./index-C4Upg33n.js";import"./index-zt3JAog0.js";import"./index-BuWAeJx0.js";import"./index-DRFrXRQD.js";import"./Combination-CQ7nDc5O.js";import"./index-8-21fAVn.js";import"./index-Cofx8SB_.js";import"./ds-typography-BUl_sA7Y.js";import"./ds-chip-DCIl9W8U.js";import"./ds-icon-Cy3flkl6.js";import"./ds-checkbox-C8-UJ8gI.js";import"./index-VXtAgUuo.js";import"./ds-button-B2IsILov.js";import"./ds-button-legacy-d3MUrCxT.js";import"./ds-button-new-BLSlaK2H.js";const h="_container_z9hxz_1",u="_controlsContainer_z9hxz_7",C="_addButton_z9hxz_12",x="_infoText_z9hxz_20",n={container:h,controlsContainer:u,addButton:C,infoText:x},O={title:"Design System/Chip Group",component:a,parameters:{layout:"padded"},tags:["autodocs"],argTypes:{items:{control:"object",description:"Array of chip items to display"},onClearAll:{action:"clear-all",description:'Callback when "Clear all" is clicked'},onItemDelete:{action:"delete-item",description:"Callback when item is deleted"}}},b=[{id:"1",label:"Status: Active"},{id:"2",label:"Running: From 100 to 10,000"},{id:"3",label:"Completed from 20,000 to 100,000"},{id:"4",label:"Executor: Category 1, Layer 1 transporter"},{id:"5",label:"Executor: Category 2, Layer 11 transporter"},{id:"6",label:"Executor: Category 2, Layer 12 transporter"},{id:"7",label:"Executor: Category 2, Layer 13 transporter"},{id:"8",label:"Version: 000.0001-3"},{id:"9",label:"Version: 000.0001-4"},{id:"10",label:"Version: 000.0001-5"},{id:"11",label:"Version: 000.0001-6"},{id:"12",label:"Last editor: Mary Levin"},{id:"13",label:"Last editor: Emery Franco"}],o={render:function(){const[s,i]=f.useState(b),d=()=>{i([])},c=()=>{const e=`new-${String(Date.now())}`;i(t=>[...t,{id:e,label:`New Filter ${String(t.length+1)}`}])},p=e=>{i(t=>t.filter(l=>l.id!==e.id))},m=e=>{i(t=>t.map(l=>l.id===e.id?{...l,selected:!l.selected}:l))};return r.jsxs("div",{className:n.container,children:[r.jsx(a,{items:s,onClearAll:d,onItemDelete:p,onItemSelect:m}),r.jsxs("div",{className:n.controlsContainer,children:[r.jsx("button",{onClick:c,className:n.addButton,children:"Add Filter"}),r.jsxs("p",{className:n.infoText,children:["Total filters: ",s.length]}),r.jsxs("p",{className:n.infoText,children:["Selected filters: [",s.filter(e=>e.selected).map(e=>`"${e.label}"`).join(", "),"]"]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [filters, setFilters] = useState<ChipItem[]>(sampleFilters);
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
}`,...o.parameters?.docs?.source}}};const q=["Default"];export{o as Default,q as __namedExportsOrder,O as default};
