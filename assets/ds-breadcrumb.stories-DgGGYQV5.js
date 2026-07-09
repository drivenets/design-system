import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-BKcZNyFO.js";import{a as n,c as r,d as i,h as a,m as o,n as s,o as c,r as l,t as u,u as d}from"./ds-breadcrumb-COY_w9mZ.js";var f,p,m,h,g,_,v;e((()=>{l(),s(),f=t(),p=(e,t)=>{let n=d({component:()=>(0,f.jsx)(e,{})}),o=i({getParentRoute:()=>n,path:`/`,component:()=>null}),s=i({getParentRoute:()=>n,path:`/inventory`,component:()=>null}),c=i({getParentRoute:()=>n,path:`/inventory/catalog`,component:()=>null}),l=i({getParentRoute:()=>n,path:`/network`,component:()=>null}),u=i({getParentRoute:()=>n,path:`/network/vienna`,component:()=>null}),p=i({getParentRoute:()=>n,path:`/network/paris`,component:()=>null}),m=i({getParentRoute:()=>n,path:`/network/vienna/router-a`,component:()=>null}),h=i({getParentRoute:()=>n,path:`/network/vienna/switch-b`,component:()=>null});return r({routeTree:n.addChildren([o,s,c,l,u,p,m,h]),history:a({initialEntries:[t]})})},m=(e,t)=>(0,f.jsx)(c,{router:p(e,t)}),h={title:`Components/Breadcrumb`,component:u,parameters:{layout:`centered`},argTypes:{items:{control:!1},onSelect:{action:`select`},className:{table:{disable:!0}}}},g={parameters:{docs:{source:{type:`code`}}},decorators:[e=>m(e,`/inventory/catalog`)],render:function(e){let t=o(),r=n(),i=[{type:`link`,label:`Home`,href:`/`,icon:`home`},{type:`link`,label:`Inventory`,href:`/inventory`,icon:`settings`},{type:`link`,label:`Catalog`,href:`/inventory/catalog`,icon:`newspaper`}],a=r.pathname.split(`/`).filter(Boolean).length;return(0,f.jsx)(u,{items:i.slice(0,a+1),onSelect:n=>{e.onSelect?.(n),t({to:n})}})}},_={parameters:{docs:{source:{type:`code`}}},decorators:[e=>m(e,`/network/vienna/router-a`)],render:function(e){let t=o(),r=n(),i=[{type:`link`,label:`Home`,href:`/`},{type:`link`,label:`Network Visibility`,href:`/network`},{type:`dropdown`,label:`Vienna HQ`,icon:`location_on`,options:[{label:`Vienna HQ`,href:`/network/vienna`},{label:`Paris Office`,href:`/network/paris`}]},{type:`dropdown`,label:`Router A`,icon:`device_hub`,options:[{label:`Router A`,href:`/network/vienna/router-a`},{label:`Switch B`,href:`/network/vienna/switch-b`}]}],a=r.pathname.split(`/`).filter(Boolean).length;return(0,f.jsx)(u,{items:i.slice(0,a+1),onSelect:n=>{e.onSelect?.(n),t({to:n})}})}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
    const location = useLocation();
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
    const depth = location.pathname.split('/').filter(Boolean).length;
    const visibleItems = items.slice(0, depth + 1);
    return <DsBreadcrumb items={visibleItems} onSelect={href => {
      args.onSelect?.(href);
      void navigate({
        to: href
      });
    }} />;
  }
}`,...g.parameters?.docs?.source},description:{story:`A standard link trail where the last segment is the current page. Icons on
earlier segments give quick visual anchors; clicking a parent link shortens
the trail to match the new location.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
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
    const location = useLocation();
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
    const depth = location.pathname.split('/').filter(Boolean).length;
    const visibleItems = items.slice(0, depth + 1);
    return <DsBreadcrumb items={visibleItems} onSelect={href => {
      args.onSelect?.(href);
      void navigate({
        to: href
      });
    }} />;
  }
}`,..._.parameters?.docs?.source},description:{story:`Dropdown segments expose sibling destinations at a given depth — useful when
the user can land on any of several peers (sites, devices, folders) at the
same level. The trigger shows the option matching the current path.`,..._.parameters?.docs?.description}}},v=[`Default`,`WithDropdown`]}))();export{g as Default,_ as WithDropdown,v as __namedExportsOrder,h as default};