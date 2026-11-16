import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-CpKnXO8S.js";import{_ as n,a as r,c as i,d as a,g as o,h as s,l as c,m as l,n as u,o as d,s as f,t as p,u as m}from"./ds-breadcrumb-U4V5VTy1.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{n(),a(),i(),d(),l(),u(),h=t(),g=(e,t)=>{let n=c({component:()=>(0,h.jsx)(e,{})}),r=m({getParentRoute:()=>n,path:`/`,component:()=>null}),i=m({getParentRoute:()=>n,path:`/inventory`,component:()=>null}),a=m({getParentRoute:()=>n,path:`/inventory/catalog`,component:()=>null}),s=m({getParentRoute:()=>n,path:`/network`,component:()=>null}),l=m({getParentRoute:()=>n,path:`/network/vienna`,component:()=>null}),u=m({getParentRoute:()=>n,path:`/network/paris`,component:()=>null}),d=m({getParentRoute:()=>n,path:`/network/vienna/router-a`,component:()=>null}),p=m({getParentRoute:()=>n,path:`/network/vienna/switch-b`,component:()=>null});return f({routeTree:n.addChildren([r,i,a,s,l,u,d,p]),history:o({initialEntries:[t]}),scrollRestoration:()=>!1})},_=(e,t)=>{let n=g(e,t);return(0,h.jsx)(r,{router:n})},v={title:`Components/Breadcrumb`,component:p,parameters:{layout:`centered`},argTypes:{items:{control:!1},onSelect:{action:`select`},className:{table:{disable:!0}}}},y={parameters:{docs:{source:{type:`code`}}},decorators:[e=>_(e,`/inventory/catalog`)],render:function(e){let t=s();return(0,h.jsx)(p,{items:[{type:`link`,label:`Home`,href:`/`,icon:`home`},{type:`link`,label:`Inventory`,href:`/inventory`,icon:`settings`},{type:`link`,label:`Catalog`,href:`/inventory/catalog`,icon:`newspaper`}],onSelect:n=>{e.onSelect?.(n),t({to:n})}})}},b={parameters:{docs:{source:{type:`code`}}},decorators:[e=>_(e,`/network/vienna/router-a`)],render:function(e){let t=s();return(0,h.jsx)(p,{items:[{type:`link`,label:`Home`,href:`/`},{type:`link`,label:`Network Visibility`,href:`/network`},{type:`dropdown`,label:`Vienna HQ`,icon:`location_on`,options:[{label:`Vienna HQ`,href:`/network/vienna`},{label:`Paris Office`,href:`/network/paris`}]},{type:`dropdown`,label:`Router A`,icon:`device_hub`,options:[{label:`Router A`,href:`/network/vienna/router-a`},{label:`Switch B`,href:`/network/vienna/switch-b`}]}],onSelect:n=>{e.onSelect?.(n),t({to:n})}})}},x=[`Default`,`WithDropdown`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  decorators: [Story => withTanStackRouter(Story, '/inventory/catalog')],
  render: function Render(args) {
    const navigate = useNavigate();
    const items: DsBreadcrumbItem[] = [{
      type: 'link',
      label: 'Home',
      href: '/',
      icon: 'home'
    }, {
      type: 'link',
      label: 'Inventory',
      href: '/inventory',
      icon: 'settings'
    }, {
      type: 'link',
      label: 'Catalog',
      href: '/inventory/catalog',
      icon: 'newspaper'
    }];
    return <DsBreadcrumb items={items} onSelect={href => {
      args.onSelect?.(href);
      void navigate({
        to: href
      });
    }} />;
  }
}`,...y.parameters?.docs?.source},description:{story:`A standard link trail where the last segment is the current page. Icons on
earlier segments give quick visual anchors; clicking a parent link shortens
the trail to match the new location.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  decorators: [Story => withTanStackRouter(Story, '/network/vienna/router-a')],
  render: function Render(args) {
    const navigate = useNavigate();
    const items: DsBreadcrumbItem[] = [{
      type: 'link',
      label: 'Home',
      href: '/'
    }, {
      type: 'link',
      label: 'Network Visibility',
      href: '/network'
    }, {
      type: 'dropdown',
      label: 'Vienna HQ',
      icon: 'location_on',
      options: [{
        label: 'Vienna HQ',
        href: '/network/vienna'
      }, {
        label: 'Paris Office',
        href: '/network/paris'
      }]
    }, {
      type: 'dropdown',
      label: 'Router A',
      icon: 'device_hub',
      options: [{
        label: 'Router A',
        href: '/network/vienna/router-a'
      }, {
        label: 'Switch B',
        href: '/network/vienna/switch-b'
      }]
    }];
    return <DsBreadcrumb items={items} onSelect={href => {
      args.onSelect?.(href);
      void navigate({
        to: href
      });
    }} />;
  }
}`,...b.parameters?.docs?.source},description:{story:`Dropdown segments expose sibling destinations at a given depth — useful when
the user can land on any of several peers (sites, devices, folders) at the
same level. The trigger shows the option matching the current path.`,...b.parameters?.docs?.description}}}})))()}S();export{y as Default,b as WithDropdown,x as __namedExportsOrder,v as default};