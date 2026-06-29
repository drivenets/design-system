import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-BFhuNZOT.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./compiler-runtime-DinVpujG.js";import{a,c as o,d as s,h as c,m as l,n as u,o as d,r as f,t as p,u as m}from"./ds-breadcrumb-C6gstexg.js";function h(){delete O.resetBreadcrumbItems}var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M;e((()=>{g=i(),_=t(n(),1),f(),u(),v=r(),{expect:y,screen:b,userEvent:x,within:S}=__STORYBOOK_MODULE_TEST__,C=(e,t)=>{let n=m({component:()=>(0,v.jsx)(e,{})}),r=s({getParentRoute:()=>n,path:`/`,component:()=>(0,v.jsx)(`div`,{children:`Home`})}),i=s({getParentRoute:()=>n,path:`/inventory`,component:()=>(0,v.jsx)(`div`,{children:`Inventory`})}),a=s({getParentRoute:()=>n,path:`/inventory/catalog`,component:()=>(0,v.jsx)(`div`,{children:`Catalog`})}),l=s({getParentRoute:()=>n,path:`/network`,component:()=>(0,v.jsx)(`div`,{children:`Network`})}),u=s({getParentRoute:()=>n,path:`/network/vienna`,component:()=>(0,v.jsx)(`div`,{children:`Vienna`})}),d=s({getParentRoute:()=>n,path:`/network/paris`,component:()=>(0,v.jsx)(`div`,{children:`Paris`})}),f=s({getParentRoute:()=>n,path:`/network/vienna/router-a`,component:()=>(0,v.jsx)(`div`,{children:`Router A`})}),p=s({getParentRoute:()=>n,path:`/network/vienna/switch-b`,component:()=>(0,v.jsx)(`div`,{children:`Switch B`})});return o({routeTree:n.addChildren([r,i,a,l,u,d,f,p]),history:c({initialEntries:[t]})})},w=(e,t)=>(0,v.jsx)(d,{router:C(e,t)}),T={title:`Components/Breadcrumb`,component:p,parameters:{layout:`centered`},argTypes:{items:{description:`Array of breadcrumb items, each being a link or a dropdown.`,control:{type:`object`}}}},E=[{type:`link`,label:`Home`,href:`/`,icon:`home`},{type:`link`,label:`Inventory`,href:`/inventory`,icon:`settings`},{type:`link`,label:`Catalog`,href:`/inventory/catalog`,icon:`newspaper`}],D=[{type:`link`,label:`Home`,href:`/`},{type:`link`,label:`Network Visibility`,href:`/network`},{type:`dropdown`,label:`Vienna HQ`,icon:`location_on`,options:[{label:`Vienna HQ`,href:`/network/vienna`},{label:`Paris Office`,href:`/network/paris`}]},{type:`dropdown`,label:`Router A`,icon:`device_hub`,options:[{label:`Router A`,href:`/network/vienna/router-a`},{label:`Switch B`,href:`/network/vienna/switch-b`}]}],O=window,k=e=>{let t=(0,g.c)(15),{items:n}=e,r=l(),i=a(),[o,s]=(0,_.useState)(n),c;t[0]!==n||t[1]!==i.pathname?(c=()=>{let e=i.pathname.split(`/`).filter(Boolean);s(n.slice(0,e.length+1))},t[0]=n,t[1]=i.pathname,t[2]=c):c=t[2];let u;t[3]!==n||t[4]!==i?(u=[i,n],t[3]=n,t[4]=i,t[5]=u):u=t[5],(0,_.useEffect)(c,u);let d,f;t[6]!==n||t[7]!==r?(d=()=>(O.resetBreadcrumbItems=e=>{s(n),r({to:e})},h),f=[n,r],t[6]=n,t[7]=r,t[8]=d,t[9]=f):(d=t[8],f=t[9]),(0,_.useEffect)(d,f);let m;t[10]===r?m=t[11]:(m=e=>{r({to:e})},t[10]=r,t[11]=m);let y;return t[12]!==m||t[13]!==o?(y=(0,v.jsx)(p,{items:o,onSelect:m}),t[12]=m,t[13]=o,t[14]=y):y=t[14],y},A={args:{items:E},decorators:[e=>w(e,`/inventory/catalog`)],render:e=>(0,v.jsx)(k,{items:e.items}),play:async({canvasElement:e,args:{items:t}})=>{let n=S(e),r=t[t.length-1],i=t[t.length-2];if(!r||!i)throw Error(`Items array must have at least 2 elements`);await y(n.getByText(r.label)).toHaveAttribute(`aria-current`,`page`);let a=n.getByText(i.label);await x.click(a),await y(n.getByText(i.label)).toHaveAttribute(`aria-current`,`page`),await y(b.queryByText(r.label)).not.toBeInTheDocument();let o=r.type===`link`?r.href:r.options[0]?.href??``;(0,_.act)(()=>{O.resetBreadcrumbItems?.(o)}),await y(n.getByText(r.label)).toBeInTheDocument()}},j={args:{items:D},decorators:[e=>w(e,`/network/vienna/router-a`)],render:e=>(0,v.jsx)(k,{items:e.items}),play:async({canvasElement:e})=>{let t=S(e);await y(t.getByRole(`button`,{name:/Router A/})).toHaveAttribute(`aria-current`,`page`);let n=t.getByRole(`button`,{name:/Router A/});await x.click(n),await y(S(await b.findByRole(`menuitem`,{name:/Router A/})).getByText(`check`)).toBeInTheDocument();let r=await b.findByRole(`menuitem`,{name:/Switch B/});await x.click(r),await y(t.getByRole(`button`,{name:/Switch B/})).toHaveAttribute(`aria-current`,`page`);let i=t.getByRole(`button`,{name:/Vienna HQ/});await x.click(i);let a=await b.findByRole(`menuitem`,{name:/Paris Office/});await x.click(a),await y(b.queryByRole(`button`,{name:/Switch B/})).not.toBeInTheDocument();let o=t.getByRole(`link`,{name:`Network Visibility`});await x.click(o),await y(b.queryByRole(`button`,{name:/Vienna HQ/})).not.toBeInTheDocument();let s=t.getByRole(`link`,{name:`Home`});await x.click(s),(0,_.act)(()=>{O.resetBreadcrumbItems?.(`/network/vienna/router-a`)}),await y(t.getByRole(`button`,{name:/Router A/})).toBeInTheDocument()}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  args: {
    items: defaultItems
  },
  decorators: [Story => withTanStackRouter(Story, '/inventory/catalog')],
  render: args => <BreadcrumbStory items={args.items} />,
  play: async ({
    canvasElement,
    args: {
      items: initialItems
    }
  }: {
    canvasElement: HTMLElement;
    args: {
      items: DsBreadcrumbItem[];
    };
  }) => {
    const canvas = within(canvasElement);
    const lastItem = initialItems[initialItems.length - 1];
    const previousItem = initialItems[initialItems.length - 2];
    if (!lastItem || !previousItem) {
      throw new Error('Items array must have at least 2 elements');
    }

    // 1. Check last item is selected
    const lastItemElement = canvas.getByText(lastItem.label);
    await expect(lastItemElement).toHaveAttribute('aria-current', 'page');

    // 2. Click on previous item and verify last item is hidden
    const previousItemElement = canvas.getByText(previousItem.label);
    await userEvent.click(previousItemElement);

    // Verify previous item is now last and selected
    const updatedLastItem = canvas.getByText(previousItem.label);
    await expect(updatedLastItem).toHaveAttribute('aria-current', 'page');

    // Verify original last item is not visible
    const originalLastItem = screen.queryByText(lastItem.label);
    await expect(originalLastItem).not.toBeInTheDocument();

    // 3. Reset to initial state
    const lastItemHref = lastItem.type === 'link' ? lastItem.href : lastItem.options[0]?.href ?? '';
    act(() => {
      extendedWindow.resetBreadcrumbItems?.(lastItemHref);
    });

    // Verify we're back to initial state
    const resetLastItem = canvas.getByText(lastItem.label);
    await expect(resetLastItem).toBeInTheDocument();
  }
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  args: {
    items: dropdownItems
  },
  decorators: [Story => withTanStackRouter(Story, '/network/vienna/router-a')],
  render: args => <BreadcrumbStory items={args.items} />,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // 1. Check last item (Router A) is selected
    const lastItem = canvas.getByRole('button', {
      name: /Router A/
    });
    await expect(lastItem).toHaveAttribute('aria-current', 'page');

    // 2. Check Router A is selected in dropdown
    const routerDropdown = canvas.getByRole('button', {
      name: /Router A/
    });
    await userEvent.click(routerDropdown);
    const routerMenuItem = await screen.findByRole('menuitem', {
      name: /Router A/
    });
    const routerIndicator = within(routerMenuItem).getByText('check');
    await expect(routerIndicator).toBeInTheDocument();

    // 3. Select Switch B
    const switchBMenuItem = await screen.findByRole('menuitem', {
      name: /Switch B/
    });
    await userEvent.click(switchBMenuItem);

    // 4. Verify Switch B is now selected
    const updatedLastItem = canvas.getByRole('button', {
      name: /Switch B/
    });
    await expect(updatedLastItem).toHaveAttribute('aria-current', 'page');

    // 5. Click on Vienna HQ dropdown
    const viennaDropdown = canvas.getByRole('button', {
      name: /Vienna HQ/
    });
    await userEvent.click(viennaDropdown);

    // 6. Select Paris Office
    const parisMenuItem = await screen.findByRole('menuitem', {
      name: /Paris Office/
    });
    await userEvent.click(parisMenuItem);

    // 7. Verify Switch B dropdown is gone
    const switchBDropdownAfter = screen.queryByRole('button', {
      name: /Switch B/
    });
    await expect(switchBDropdownAfter).not.toBeInTheDocument();

    // 8. Click Network Visibility
    const networkLink = canvas.getByRole('link', {
      name: 'Network Visibility'
    });
    await userEvent.click(networkLink);

    // 9. Verify Vienna HQ dropdown is gone
    const viennaDropdownAfter = screen.queryByRole('button', {
      name: /Vienna HQ/
    });
    await expect(viennaDropdownAfter).not.toBeInTheDocument();

    // 10. Click Home
    const homeLink = canvas.getByRole('link', {
      name: 'Home'
    });
    await userEvent.click(homeLink);

    // 11. Reset to initial state

    act(() => {
      extendedWindow.resetBreadcrumbItems?.('/network/vienna/router-a');
    });

    // Verify we're back to initial state
    const resetLastItem = canvas.getByRole('button', {
      name: /Router A/
    });
    await expect(resetLastItem).toBeInTheDocument();
  }
}`,...j.parameters?.docs?.source}}},M=[`Default`,`WithDropdown`]}))();export{A as Default,j as WithDropdown,M as __namedExportsOrder,T as default};