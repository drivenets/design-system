import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as s}from"./ds-dropdown-menu-CFP6TXyK.js";/* empty css                                 */import{D as l}from"./ds-icon-BXqTlSpy.js";import"./iframe-ydeDy3a4.js";import"./preload-helper-PPVm8Dsz.js";import"./index-wFdSHzjg.js";import"./index-DhxXYvas.js";import"./index-B3kgrI0X.js";import"./index-BDXkW_AX.js";import"./index-BKHHjEjK.js";import"./Combination-BFsxzmOk.js";import"./index-c9IRRYRE.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-2PI0c2SK.js";import"./index-D0swLP46.js";import"./index-DuqpJObf.js";import"./ds-typography-DEFceX3j.js";import"./index-DkaAwSXg.js";import"./ds-text-input-CY6SO7fz.js";import"./portal-BRmUN8-Z.js";import"./create-split-props-u5h9OPvL.js";import"./index-DTOIAMB7.js";import"./use-locale-context-BrLQPF0D.js";import"./use-presence-c0DQqOt_.js";import"./index-CqdSLIvK.js";import"./index-TQ5hpPIL.js";import"./index-CEUVOLFt.js";const{expect:e,screen:t,userEvent:o,within:m}=__STORYBOOK_MODULE_TEST__,H={title:"Design System/DropdownMenu (Legacy)",component:s,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"Content to display inside the component"},contentGap:{control:"number",description:"The gap between the trigger and dropdown content in pixels"}}},i={parameters:{docs:{description:{story:"Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled."}}},args:{options:[{label:"Edit",icon:"edit",onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:"delete",onClick:()=>console.log("Delete clicked")},{label:"Share",icon:"share",onClick:()=>console.log("Share clicked")},{label:"Disabled Option",icon:"block",disabled:!0,onClick:()=>console.log("Disabled clicked")}],contentGap:4},render:function(n){return a.jsx(s,{...n,children:a.jsxs("div",{className:"trigger",role:"button",children:[a.jsx("span",{className:"label",children:"Actions"}),a.jsx(l,{className:"arrow",icon:"more_vert"})]})})},play:async({canvasElement:c})=>{const n=m(c);await e(n.getByText("Actions")).toBeInTheDocument(),await o.click(n.getByText("Actions")),await e(t.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument();const r=t.getByRole("menuitem",{name:/Disabled Option/});await e(r).toHaveAttribute("aria-disabled","true"),await o.click(t.getByRole("menuitem",{name:/Edit/})),await o.keyboard("{Escape}"),await o.click(n.getByText("Actions")),await e(t.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument(),await o.keyboard("{Escape}")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const K=["Default"];export{i as Default,K as __namedExportsOrder,H as default};
