import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as i}from"./index-DK2miGf9.js";import{T as m,a as u,b as p,c as T}from"./tabs-root-DHayZWNx.js";const d="_tabList_1cr5j_1",D="_tabItem_1cr5j_14",r={tabList:d,tabItem:D},n=({value:a,onValueChange:e,className:s,style:l,children:o})=>{const c=b=>{e?.(b.value)};return t.jsx(m,{orientation:"vertical",value:a,onValueChange:c,className:s,style:l,children:o})},V=({className:a,children:e})=>t.jsx(u,{className:i(r.tabList,a),children:e}),C=({value:a,disabled:e,className:s,children:l})=>t.jsx(p,{value:a,disabled:e,className:i(r.tabItem,s),children:l}),g=({value:a,className:e,children:s})=>t.jsx(T,{value:a,className:e,children:s});n.List=V;n.Tab=C;n.Content=g;n.__docgenInfo={description:`Design system vertical tabs component - compound component for flexible vertical navigation

@example
\`\`\`tsx
<DsVerticalTabs value={selected} onValueChange={handleChange}>
  <DsVerticalTabs.List>
    <DsVerticalTabs.Tab value="status">
      <span>Status</span>
      <span className={styles.badge}>5</span>
    </DsVerticalTabs.Tab>
    <DsVerticalTabs.Tab value="date">Date</DsVerticalTabs.Tab>
  </DsVerticalTabs.List>
  <DsVerticalTabs.Content value="status">Status filters...</DsVerticalTabs.Content>
  <DsVerticalTabs.Content value="date">Date filters...</DsVerticalTabs.Content>
</DsVerticalTabs>
\`\`\``,methods:[{name:"List",docblock:null,modifiers:["static"],params:[{name:"{ className, children }: DsVerticalTabsListProps",optional:!1,type:{name:"DsVerticalTabsListProps",alias:"DsVerticalTabsListProps"}}],returns:null},{name:"Tab",docblock:null,modifiers:["static"],params:[{name:"{ value, disabled, className, children }: DsVerticalTabsTabProps",optional:!1,type:{name:"DsVerticalTabsTabProps",alias:"DsVerticalTabsTabProps"}}],returns:null},{name:"Content",docblock:null,modifiers:["static"],params:[{name:"{ value, className, children }: DsVerticalTabsContentProps",optional:!1,type:{name:"DsVerticalTabsContentProps",alias:"DsVerticalTabsContentProps"}}],returns:null}],displayName:"DsVerticalTabs",props:{value:{required:!1,tsType:{name:"string"},description:"Currently selected tab value"},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | null) => void",signature:{arguments:[{type:{name:"union",raw:"string | null",elements:[{name:"string"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:"Callback when selected tab changes"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Optional inline styles"},children:{required:!0,tsType:{name:"ReactNode"},description:"Child components (DsVerticalTabs.List, etc.)"}}};export{n as D};
