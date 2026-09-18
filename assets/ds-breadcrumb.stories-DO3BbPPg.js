import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{n as t}from"./iframe-DVysNJuQ.js";import{a as n,c as r,d as i,f as a,i as o,l as s,n as c,o as l,p as u,r as d,s as f,t as p,u as m}from"./ds-breadcrumb-Conk84Cl.js";var h,g,_,v,y,b,x;function S(){return(S=e((()=>{u(),s(),l(),o(),m(),c(),h=t(),g=(e,t)=>{let i=f({component:()=>(0,h.jsx)(e,{})}),o=r({getParentRoute:()=>i,path:`/`,component:()=>null}),s=r({getParentRoute:()=>i,path:`/inventory`,component:()=>null}),c=r({getParentRoute:()=>i,path:`/inventory/catalog`,component:()=>null}),l=r({getParentRoute:()=>i,path:`/network`,component:()=>null}),u=r({getParentRoute:()=>i,path:`/network/vienna`,component:()=>null}),d=r({getParentRoute:()=>i,path:`/network/paris`,component:()=>null}),p=r({getParentRoute:()=>i,path:`/network/vienna/router-a`,component:()=>null}),m=r({getParentRoute:()=>i,path:`/network/vienna/switch-b`,component:()=>null});return n({routeTree:i.addChildren([o,s,c,l,u,d,p,m]),history:a({initialEntries:[t]})})},_=(e,t)=>{let n=g(e,t);return(0,h.jsx)(d,{router:n})},v={title:`Components/Breadcrumb`,component:p,parameters:{layout:`centered`},argTypes:{items:{control:!1},onSelect:{action:`select`},className:{table:{disable:!0}}}},y={parameters:{docs:{source:{type:`code`}}},decorators:[e=>_(e,`/inventory/catalog`)],render:function(e){let t=i();return(0,h.jsx)(p,{items:[{type:`link`,label:`Home`,href:`/`,icon:`home`},{type:`link`,label:`Inventory`,href:`/inventory`,icon:`settings`},{type:`link`,label:`Catalog`,href:`/inventory/catalog`,icon:`newspaper`}],onSelect:n=>{e.onSelect?.(n),t({to:n})}})}},b={parameters:{docs:{source:{type:`code`}}},decorators:[e=>_(e,`/network/vienna/router-a`)],render:function(e){let t=i();return(0,h.jsx)(p,{items:[{type:`link`,label:`Home`,href:`/`},{type:`link`,label:`Network Visibility`,href:`/network`},{type:`dropdown`,label:`Vienna HQ`,icon:`location_on`,options:[{label:`Vienna HQ`,href:`/network/vienna`},{label:`Paris Office`,href:`/network/paris`}]},{type:`dropdown`,label:`Router A`,icon:`device_hub`,options:[{label:`Router A`,href:`/network/vienna/router-a`},{label:`Switch B`,href:`/network/vienna/switch-b`}]}],onSelect:n=>{e.onSelect?.(n),t({to:n})}})}},x=[`Default`,`WithDropdown`],y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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