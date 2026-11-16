import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CpKnXO8S.js";import{_ as n,a as r,c as i,d as a,g as o,l as s,o as c,s as l,u}from"./ds-breadcrumb-U4V5VTy1.js";import{n as d,t as f}from"./ds-breadcrumb-B90miMta.js";var p,m,h,g,_,v,y,b;function x(){return(x=e((()=>{n(),a(),i(),c(),f(),p=t(),{fn:m}=__STORYBOOK_MODULE_TEST__,h=e=>{let t=s({component:()=>(0,p.jsx)(e,{})}),n=u({getParentRoute:()=>t,path:`/inventory`,component:()=>null}),i=u({getParentRoute:()=>t,path:`/inventory/catalog`,component:()=>null}),a=l({routeTree:t.addChildren([n,i]),history:o({initialEntries:[`/inventory/catalog`]}),scrollRestoration:()=>!1});return(0,p.jsx)(r,{router:a})},g={title:`Components/BreadcrumbBack`,component:d,parameters:{layout:`centered`},argTypes:{className:{table:{disable:!0}}}},_={args:{onClick:m()}},v={decorators:[h],args:{href:`/inventory`}},y={args:{locale:{label:`Back to list`}}},b=[`Default`,`Link`,`Localized`],_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    onClick: fn()
  }
}`,..._.parameters?.docs?.source},description:{story:`A standalone back crumb for drawer and modal drill-down headers. It looks like a breadcrumb
item but is not part of a trail.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  decorators: [withTanStackRouter],
  args: {
    href: '/inventory'
  }
}`,...v.parameters?.docs?.source},description:{story:"Pass `href` to render it as a router link to the parent page.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    locale: {
      label: 'Back to list'
    }
  }
}`,...y.parameters?.docs?.source},description:{story:"Translate the label through `locale`; it is also the accessible name.",...y.parameters?.docs?.description}}}})))()}x();export{_ as Default,v as Link,y as Localized,b as __namedExportsOrder,g as default};