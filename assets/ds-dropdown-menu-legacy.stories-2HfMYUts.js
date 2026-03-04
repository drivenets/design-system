import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./ds-dropdown-menu-Zgh2Om15.js";/* empty css                                 */import{D as m}from"./ds-icon-BN8hZyrB.js";import"./iframe-zD3xWcdw.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Lru2z4ct.js";import"./index-pOsGLtSz.js";import"./index-Moyb4GcP.js";import"./index-BhXYnqkn.js";import"./index-C1cXfuue.js";import"./Combination-k7ot5OvW.js";import"./index-B28m74jq.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-D6vZ8kzq.js";import"./index-CsmTiFYQ.js";import"./index-Bkff790b.js";import"./ds-typography-_LYOBaEj.js";import"./index-CYZU-zwO.js";import"./ds-text-input-BX9iwyT6.js";import"./portal-12HeV4JI.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-1K7Qlzt9.js";import"./create-anatomy-D0xiuNN3.js";import"./use-presence-CE8N0BSk.js";import"./set-V1TTXNUl.js";import"./raf-CC9hSMXO.js";import"./computed-style-CPj1S2On.js";import"./event-CBXSxTbR.js";import"./index-BZXhRXCF.js";import"./get-styles-Bj9uhrHC.js";import"./typeahead-gxZSEoSi.js";import"./query-CjgVAlRR.js";import"./initial-focus-Dp33qkhY.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-BJ3bHEFQ.js";import"./navigate-B9wmqn6f.js";const{expect:e,screen:t,userEvent:n,within:l}=__STORYBOOK_MODULE_TEST__,V={title:"Design System/DropdownMenu (Legacy)",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"Content to display inside the component"},contentGap:{control:"number",description:"The gap between the trigger and dropdown content in pixels"}}},i={parameters:{docs:{description:{story:"Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled."}}},args:{options:[{label:"Edit",icon:"edit",onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:"delete",onClick:()=>console.log("Delete clicked")},{label:"Share",icon:"share",onClick:()=>console.log("Share clicked")},{label:"Disabled Option",icon:"block",disabled:!0,onClick:()=>console.log("Disabled clicked")}],contentGap:4},render:function(o){return a.jsx(r,{...o,children:a.jsxs("div",{className:"trigger",role:"button",children:[a.jsx("span",{className:"label",children:"Actions"}),a.jsx(m,{className:"arrow",icon:"more_vert"})]})})},play:async({canvasElement:c})=>{const o=l(c);await e(o.getByText("Actions")).toBeInTheDocument(),await n.click(o.getByText("Actions")),await e(t.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument();const s=t.getByRole("menuitem",{name:/Disabled Option/});await e(s).toHaveAttribute("aria-disabled","true"),await n.click(t.getByRole("menuitem",{name:/Edit/})),await n.keyboard("{Escape}"),await n.click(o.getByText("Actions")),await e(t.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument(),await n.keyboard("{Escape}")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};const W=["Default"];export{i as Default,W as __namedExportsOrder,V as default};
