import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-6sF1Ejqi.js";import{t as r}from"./classnames-Ce489xFf.js";import{i,n as a,o,r as s}from"./tabs-C1SOIqmQ.js";import{t as c}from"./tabs-D7iOfmGy.js";var l,u,d,f,p=t((()=>{l=`_tabList_1cr5j_1`,u=`_tabItem_1cr5j_14`,d=`_selected_1cr5j_31`,f={tabList:l,tabItem:u,selected:d}})),m,h,g,_,v,y,b=t((()=>{m=e(r(),1),c(),p(),h=n(),g=({value:e,onValueChange:t,className:n,style:r,children:i})=>(0,h.jsx)(a,{orientation:`vertical`,value:e,onValueChange:e=>{t?.(e.value)},className:n,style:r,children:i}),_=({className:e,children:t})=>(0,h.jsx)(i,{className:(0,m.default)(f.tabList,e),children:t}),v=({value:e,disabled:t,className:n,children:r})=>(0,h.jsx)(s,{value:e,disabled:t,className:(0,m.default)(f.tabItem,n),children:r}),y=({value:e,className:t,children:n})=>(0,h.jsx)(o,{value:e,className:t,children:n}),g.List=_,g.Tab=v,g.Content=y,g.__docgenInfo={description:`Design system vertical tabs component - compound component for flexible vertical navigation

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
\`\`\``,methods:[{name:`List`,docblock:null,modifiers:[`static`],params:[{name:`{ className, children }: DsVerticalTabsListProps`,optional:!1,type:{name:`DsVerticalTabsListProps`,alias:`DsVerticalTabsListProps`}}],returns:null},{name:`Tab`,docblock:null,modifiers:[`static`],params:[{name:`{ value, disabled, className, children }: DsVerticalTabsTabProps`,optional:!1,type:{name:`DsVerticalTabsTabProps`,alias:`DsVerticalTabsTabProps`}}],returns:null},{name:`Content`,docblock:null,modifiers:[`static`],params:[{name:`{ value, className, children }: DsVerticalTabsContentProps`,optional:!1,type:{name:`DsVerticalTabsContentProps`,alias:`DsVerticalTabsContentProps`}}],returns:null}],displayName:`DsVerticalTabs`,props:{value:{required:!1,tsType:{name:`string`},description:`Currently selected tab value`},onValueChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(value: string | null) => void`,signature:{arguments:[{type:{name:`union`,raw:`string | null`,elements:[{name:`string`},{name:`null`}]},name:`value`}],return:{name:`void`}}},description:`Callback when selected tab changes`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Optional inline styles`},children:{required:!0,tsType:{name:`ReactNode`},description:`Child components (DsVerticalTabs.List, etc.)`}}}}));export{b as n,g as t};