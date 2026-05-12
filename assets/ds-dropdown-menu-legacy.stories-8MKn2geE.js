import{n as e}from"./chunk-BneVvdWh.js";import{t}from"./jsx-runtime-D16BNjX-.js";import{t as n}from"./ds-icon-DuD7pscG.js";import{t as r}from"./ds-icon-BPgxPRLA.js";import{n as i,r as a}from"./ds-dropdown-menu-y3_33Yki.js";import{t as o}from"./ds-dropdown-menu.stories-DKZ8I1kK.js";var s,c,l,u,d,f,p,m;e((()=>{a(),o(),r(),s=t(),{expect:c,screen:l,userEvent:u,within:d}=__STORYBOOK_MODULE_TEST__,f={title:`Components/DropdownMenuLegacy (Deprecated)`,component:i,parameters:{layout:`centered`},tags:[`deprecated`],argTypes:{children:{control:`text`,description:`Content to display inside the component`},contentGap:{control:`number`,description:`The gap between the trigger and dropdown content in pixels`}}},p={parameters:{docs:{description:{story:`Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled.`}}},args:{options:[{label:`Edit`,icon:`edit`,onClick:()=>console.log(`Edit clicked`)},{label:`Delete`,icon:`delete`,onClick:()=>console.log(`Delete clicked`)},{label:`Share`,icon:`share`,onClick:()=>console.log(`Share clicked`)},{label:`Disabled Option`,icon:`block`,disabled:!0,onClick:()=>console.log(`Disabled clicked`)}],contentGap:4},render:function(e){return(0,s.jsx)(i,{...e,children:(0,s.jsxs)(`div`,{className:`trigger`,role:`button`,children:[(0,s.jsx)(`span`,{className:`label`,children:`Actions`}),(0,s.jsx)(n,{className:`arrow`,icon:`more_vert`})]})})},play:async({canvasElement:e})=>{let t=d(e);await c(t.getByText(`Actions`)).toBeInTheDocument(),await u.click(t.getByText(`Actions`)),await c(l.getByRole(`menuitem`,{name:/Edit/})).toBeInTheDocument(),await c(l.getByRole(`menuitem`,{name:/Delete/})).toBeInTheDocument(),await c(l.getByRole(`menuitem`,{name:/Share/})).toBeInTheDocument(),await c(l.getByRole(`menuitem`,{name:/Disabled Option/})).toBeInTheDocument(),await c(l.getByRole(`menuitem`,{name:/Disabled Option/})).toHaveAttribute(`aria-disabled`,`true`),await u.click(l.getByRole(`menuitem`,{name:/Edit/})),await u.keyboard(`{Escape}`),await u.click(t.getByText(`Actions`)),await c(l.getByRole(`menuitem`,{name:/Edit/})).toBeInTheDocument(),await c(l.getByRole(`menuitem`,{name:/Delete/})).toBeInTheDocument(),await c(l.getByRole(`menuitem`,{name:/Share/})).toBeInTheDocument(),await c(l.getByRole(`menuitem`,{name:/Disabled Option/})).toBeInTheDocument(),await u.keyboard(`{Escape}`)}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled.'
      }
    }
  },
  args: {
    options: [{
      label: 'Edit',
      icon: 'edit',
      onClick: () => console.log('Edit clicked')
    }, {
      label: 'Delete',
      icon: 'delete',
      onClick: () => console.log('Delete clicked')
    }, {
      label: 'Share',
      icon: 'share',
      onClick: () => console.log('Share clicked')
    }, {
      label: 'Disabled Option',
      icon: 'block',
      disabled: true,
      onClick: () => console.log('Disabled clicked')
    }],
    contentGap: 4
  },
  render: function Render(args) {
    return <DsDropdownMenuLegacy {...args}>
                <div className="trigger" role="button">
                    <span className="label">Actions</span>
                    <DsIcon className="arrow" icon="more_vert" />
                </div>
            </DsDropdownMenuLegacy>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Check initial state
    await expect(canvas.getByText('Actions')).toBeInTheDocument();

    // Open dropdown menu
    await userEvent.click(canvas.getByText('Actions'));

    // Check all menu items are present
    await expect(screen.getByRole('menuitem', {
      name: /Edit/
    })).toBeInTheDocument();
    await expect(screen.getByRole('menuitem', {
      name: /Delete/
    })).toBeInTheDocument();
    await expect(screen.getByRole('menuitem', {
      name: /Share/
    })).toBeInTheDocument();
    await expect(screen.getByRole('menuitem', {
      name: /Disabled Option/
    })).toBeInTheDocument();

    // Check disabled state
    const disabledOption = screen.getByRole('menuitem', {
      name: /Disabled Option/
    });
    await expect(disabledOption).toHaveAttribute('aria-disabled', 'true');

    // Click an option
    await userEvent.click(screen.getByRole('menuitem', {
      name: /Edit/
    }));

    // Close dropdown with Escape key
    await userEvent.keyboard('{Escape}');

    // Open dropdown again
    await userEvent.click(canvas.getByText('Actions'));

    // Check all options are shown again
    await expect(screen.getByRole('menuitem', {
      name: /Edit/
    })).toBeInTheDocument();
    await expect(screen.getByRole('menuitem', {
      name: /Delete/
    })).toBeInTheDocument();
    await expect(screen.getByRole('menuitem', {
      name: /Share/
    })).toBeInTheDocument();
    await expect(screen.getByRole('menuitem', {
      name: /Disabled Option/
    })).toBeInTheDocument();

    // Close dropdown with Escape key
    await userEvent.keyboard('{Escape}');
  }
}`,...p.parameters?.docs?.source}}},m=[`Default`]}))();export{p as Default,m as __namedExportsOrder,f as default};