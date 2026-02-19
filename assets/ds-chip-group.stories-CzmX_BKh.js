import{j as n}from"./jsx-runtime-u17CrQMm.js";import{r as f}from"./iframe-DaWFeW3H.js";import{D as a}from"./ds-chip-group-D8sJrSi2.js";import"./preload-helper-PPVm8Dsz.js";import"./index-3Kx36sRo.js";import"./index-CtF7H05h.js";import"./index-Bg5G61Kq.js";import"./index-DCQ4Ts3n.js";import"./index-DXLZwxM6.js";import"./index-CZYKFMEa.js";import"./index-Ctqz558P.js";import"./Combination-rceJihvq.js";import"./index-CNn0cUAd.js";import"./index-BpdsuZ17.js";import"./ds-typography-XNs9d9js.js";import"./ds-chip-5Gg7ZsEU.js";import"./ds-icon-2Kkf3LCh.js";import"./ds-checkbox-BwvtyTkU.js";import"./index-DsBdYlOm.js";import"./ds-button-jTDPKYIv.js";import"./ds-button-legacy-BAo7BAO_.js";import"./ds-button-new-DsvWEHV9.js";const h="_container_z9hxz_1",u="_controlsContainer_z9hxz_7",C="_addButton_z9hxz_12",x="_infoText_z9hxz_20",l={container:h,controlsContainer:u,addButton:C,infoText:x},O={title:"Design System/Chip Group (Deprecated)",component:a,parameters:{layout:"padded",docs:{description:{component:"**Deprecated**: This component is deprecated. Please use `DsTagFilter` instead. See the TagGroup stories for the replacement component."}}},tags:["autodocs","deprecated"],argTypes:{items:{control:"object",description:"Array of chip items to display"},onClearAll:{action:"clear-all",description:'Callback when "Clear all" is clicked'},onItemDelete:{action:"delete-item",description:"Callback when item is deleted"}}},F=[{id:"1",label:"Status: Active"},{id:"2",label:"Running: From 100 to 10,000"},{id:"3",label:"Completed from 20,000 to 100,000"},{id:"4",label:"Executor: Category 1, Layer 1 transporter"},{id:"5",label:"Executor: Category 2, Layer 11 transporter"},{id:"6",label:"Executor: Category 2, Layer 12 transporter"},{id:"7",label:"Executor: Category 2, Layer 13 transporter"},{id:"8",label:"Version: 000.0001-3"},{id:"9",label:"Version: 000.0001-4"},{id:"10",label:"Version: 000.0001-5"},{id:"11",label:"Version: 000.0001-6"},{id:"12",label:"Last editor: Mary Levin"},{id:"13",label:"Last editor: Emery Franco"}],o={render:function(){const[s,i]=f.useState(F),d=()=>{i([])},c=()=>{const e=`new-${String(Date.now())}`;i(t=>[...t,{id:e,label:`New Filter ${String(t.length+1)}`}])},p=e=>{i(t=>t.filter(r=>r.id!==e.id))},m=e=>{i(t=>t.map(r=>r.id===e.id?{...r,selected:!r.selected}:r))};return n.jsxs("div",{className:l.container,children:[n.jsx(a,{items:s,onClearAll:d,onItemDelete:p,onItemSelect:m}),n.jsxs("div",{className:l.controlsContainer,children:[n.jsx("button",{onClick:c,className:l.addButton,children:"Add Filter"}),n.jsxs("p",{className:l.infoText,children:["Total filters: ",s.length]}),n.jsxs("p",{className:l.infoText,children:["Selected filters: [",s.filter(e=>e.selected).map(e=>`"${e.label}"`).join(", "),"]"]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const P=["Default"];export{o as Default,P as __namedExportsOrder,O as default};
