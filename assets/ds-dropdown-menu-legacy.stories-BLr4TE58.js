import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./ds-dropdown-menu-R9Ndvanp.js";/* empty css                                 */import{D as m}from"./ds-icon-D1-ehgnw.js";import"./iframe-BoKmvYv-.js";import"./preload-helper-PPVm8Dsz.js";import"./index-HiBacBF2.js";import"./index-DZ5cWofW.js";import"./index-B1dMH4YE.js";import"./index-lBGmboyd.js";import"./index-DPLUjSXI.js";import"./Combination-DMypGHMT.js";import"./index-B4iKbFNO.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-QRQYV_UP.js";import"./index-dy1XgbzE.js";import"./index-CQxKMm9n.js";import"./ds-typography-BbZy79HU.js";import"./index-BPH9PuD6.js";import"./ds-text-input-CKTiM9wQ.js";import"./portal-myaOKRbh.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DtKV6khj.js";import"./create-anatomy-DYeRuyqI.js";import"./use-presence-BKCn59TT.js";import"./set-MtMu4WSO.js";import"./raf-CC9hSMXO.js";import"./computed-style-eGdZx9o3.js";import"./event-CBXSxTbR.js";import"./index-BfV29z6k.js";import"./get-styles-CPcykbyT.js";import"./typeahead-BvX4mKnc.js";import"./query-CjgVAlRR.js";import"./initial-focus-B6vDCZoJ.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-DheLzH4x.js";import"./navigate-CKgLE_xz.js";const{expect:e,screen:t,userEvent:n,within:l}=__STORYBOOK_MODULE_TEST__,V={title:"Design System/DropdownMenu (Legacy)",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{control:"text",description:"Content to display inside the component"},contentGap:{control:"number",description:"The gap between the trigger and dropdown content in pixels"}}},i={parameters:{docs:{description:{story:"Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled."}}},args:{options:[{label:"Edit",icon:"edit",onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:"delete",onClick:()=>console.log("Delete clicked")},{label:"Share",icon:"share",onClick:()=>console.log("Share clicked")},{label:"Disabled Option",icon:"block",disabled:!0,onClick:()=>console.log("Disabled clicked")}],contentGap:4},render:function(o){return a.jsx(r,{...o,children:a.jsxs("div",{className:"trigger",role:"button",children:[a.jsx("span",{className:"label",children:"Actions"}),a.jsx(m,{className:"arrow",icon:"more_vert"})]})})},play:async({canvasElement:c})=>{const o=l(c);await e(o.getByText("Actions")).toBeInTheDocument(),await n.click(o.getByText("Actions")),await e(t.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument();const s=t.getByRole("menuitem",{name:/Disabled Option/});await e(s).toHaveAttribute("aria-disabled","true"),await n.click(t.getByRole("menuitem",{name:/Edit/})),await n.keyboard("{Escape}"),await n.click(o.getByText("Actions")),await e(t.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument(),await n.keyboard("{Escape}")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
