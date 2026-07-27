import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{c as n,f as r,i,l as a,n as o,o as s,p as c,r as l,t as u}from"./ds-breadcrumb-CVUQrK-C.js";var d,f,p,m,h,g,_;e((()=>{l(),o(),d=t(),f=(e,t)=>{let r=n({component:()=>(0,d.jsx)(e,{})}),i=a({getParentRoute:()=>r,path:`/`,component:()=>null}),o=a({getParentRoute:()=>r,path:`/inventory`,component:()=>null}),l=a({getParentRoute:()=>r,path:`/inventory/catalog`,component:()=>null}),u=a({getParentRoute:()=>r,path:`/network`,component:()=>null}),f=a({getParentRoute:()=>r,path:`/network/vienna`,component:()=>null}),p=a({getParentRoute:()=>r,path:`/network/paris`,component:()=>null}),m=a({getParentRoute:()=>r,path:`/network/vienna/router-a`,component:()=>null}),h=a({getParentRoute:()=>r,path:`/network/vienna/switch-b`,component:()=>null});return s({routeTree:r.addChildren([i,o,l,u,f,p,m,h]),history:c({initialEntries:[t]})})},p=(e,t)=>(0,d.jsx)(i,{router:f(e,t)}),m={title:`Components/Breadcrumb`,component:u,parameters:{layout:`centered`},argTypes:{items:{control:!1},onSelect:{action:`select`},className:{table:{disable:!0}}}},h={parameters:{docs:{source:{type:`code`}}},decorators:[e=>p(e,`/inventory/catalog`)],render:function(e){let t=r();return(0,d.jsx)(u,{items:[{type:`link`,label:`Home`,href:`/`,icon:`home`},{type:`link`,label:`Inventory`,href:`/inventory`,icon:`settings`},{type:`link`,label:`Catalog`,href:`/inventory/catalog`,icon:`newspaper`}],onSelect:n=>{e.onSelect?.(n),t({to:n})}})}},g={parameters:{docs:{source:{type:`code`}}},decorators:[e=>p(e,`/network/vienna/router-a`)],render:function(e){let t=r();return(0,d.jsx)(u,{items:[{type:`link`,label:`Home`,href:`/`},{type:`link`,label:`Network Visibility`,href:`/network`},{type:`dropdown`,label:`Vienna HQ`,icon:`location_on`,options:[{label:`Vienna HQ`,href:`/network/vienna`},{label:`Paris Office`,href:`/network/paris`}]},{type:`dropdown`,label:`Router A`,icon:`device_hub`,options:[{label:`Router A`,href:`/network/vienna/router-a`},{label:`Switch B`,href:`/network/vienna/switch-b`}]}],onSelect:n=>{e.onSelect?.(n),t({to:n})}})}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source},description:{story:`A standard link trail where the last segment is the current page. Icons on
earlier segments give quick visual anchors; clicking a parent link shortens
the trail to match the new location.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
}`,...g.parameters?.docs?.source},description:{story:`Dropdown segments expose sibling destinations at a given depth — useful when
the user can land on any of several peers (sites, devices, folders) at the
same level. The trigger shows the option matching the current path.`,...g.parameters?.docs?.description}}},_=[`Default`,`WithDropdown`]}))();export{h as Default,g as WithDropdown,_ as __namedExportsOrder,m as default};