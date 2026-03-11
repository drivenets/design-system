import{j as a}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./ds-dropdown-menu-i49sLcEn.js";/* empty css                                 */import{D as m}from"./ds-icon-C6DM5d0h.js";import"./iframe-CvzmvaDp.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DgDHOUSq.js";import"./index-CKYtPUNL.js";import"./index-DoUlMNEi.js";import"./index-MI1g3Cpt.js";import"./index-BsBDKfZg.js";import"./Combination-DfQiJwFZ.js";import"./index-CAEuge_4.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index-BgyAiQwT.js";import"./index-Dhbv7ASr.js";import"./index-nXYkHYRy.js";import"./ds-typography-Cp4NrWwQ.js";import"./index-Cd6p-uYe.js";import"./ds-text-input-D_RI9eUr.js";import"./portal-9CmtnSo3.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-ByBtppFb.js";import"./create-anatomy-DjkqA4Jc.js";import"./use-presence-BjTo9zRr.js";import"./set-BuDbIEI5.js";import"./raf-CC9hSMXO.js";import"./computed-style-0-mpWVgh.js";import"./event-CBXSxTbR.js";import"./index-w5Q59Tbt.js";import"./get-styles-D0vRjxsq.js";import"./typeahead-B6s0bLJD.js";import"./query-CjgVAlRR.js";import"./initial-focus-BmoyP2Fx.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-B7ln1Fj5.js";import"./navigate-Dq8DGBSX.js";const{expect:e,screen:t,userEvent:n,within:l}=__STORYBOOK_MODULE_TEST__,V={title:"Design System/DropdownMenu (Deprecated)",component:r,parameters:{layout:"centered"},tags:["deprecated"],argTypes:{children:{control:"text",description:"Content to display inside the component"},contentGap:{control:"number",description:"The gap between the trigger and dropdown content in pixels"}}},i={parameters:{docs:{description:{story:"Dropdown menu with a custom trigger styled to match the design. The menu items can include icons and can be disabled."}}},args:{options:[{label:"Edit",icon:"edit",onClick:()=>console.log("Edit clicked")},{label:"Delete",icon:"delete",onClick:()=>console.log("Delete clicked")},{label:"Share",icon:"share",onClick:()=>console.log("Share clicked")},{label:"Disabled Option",icon:"block",disabled:!0,onClick:()=>console.log("Disabled clicked")}],contentGap:4},render:function(o){return a.jsx(r,{...o,children:a.jsxs("div",{className:"trigger",role:"button",children:[a.jsx("span",{className:"label",children:"Actions"}),a.jsx(m,{className:"arrow",icon:"more_vert"})]})})},play:async({canvasElement:c})=>{const o=l(c);await e(o.getByText("Actions")).toBeInTheDocument(),await n.click(o.getByText("Actions")),await e(t.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument();const s=t.getByRole("menuitem",{name:/Disabled Option/});await e(s).toHaveAttribute("aria-disabled","true"),await n.click(t.getByRole("menuitem",{name:/Edit/})),await n.keyboard("{Escape}"),await n.click(o.getByText("Actions")),await e(t.getByRole("menuitem",{name:/Edit/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Delete/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Share/})).toBeInTheDocument(),await e(t.getByRole("menuitem",{name:/Disabled Option/})).toBeInTheDocument(),await n.keyboard("{Escape}")}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
