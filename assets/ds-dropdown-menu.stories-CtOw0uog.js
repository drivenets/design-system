import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-ByIveL06.js";import{a as n}from"./ds-dropdown-menu-BOINDQM9.js";import{D as o}from"./ds-icon-DbCKjb5T.js";import{D as y}from"./ds-text-input-F3YMAMHD.js";import{D as T}from"./ds-checkbox-n0LUB8hy.js";import{D as h}from"./ds-typography-Dpk1RlKZ.js";import{D}from"./ds-button-DUJHt8Ia.js";import{D as k}from"./ds-radio-group-DmTJhCDj.js";/* empty css                                 */import"./preload-helper-PPVm8Dsz.js";import"./index-DTZ0pzHf.js";import"./index-DriOsA20.js";import"./index-DzOxUZoY.js";import"./index-xsX5p1nH.js";import"./index-BQhE3VxO.js";import"./Combination-B9ybZnw2.js";import"./index-CQ3-Mnt1.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index--PzZISUg.js";import"./index-044-HCAb.js";import"./index-Bm4Gdwiw.js";import"./portal-Bh0Fxmxm.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-q7sJtfgv.js";import"./create-anatomy-Cj7KKSv4.js";import"./use-presence-DVaxF63z.js";import"./set-mK04LDSn.js";import"./raf-CC9hSMXO.js";import"./computed-style-Bp5-x_Zc.js";import"./event-CBXSxTbR.js";import"./index-YSCCa2uU.js";import"./get-styles-CqJxaWY9.js";import"./typeahead-42u2pH_j.js";import"./query-CjgVAlRR.js";import"./initial-focus-COrp_BM5.js";import"./equal-DfFTejAs.js";import"./mutation-observer-Cu1ou0At.js";import"./dismissable-layer-DGkXvxDx.js";import"./navigate-C_lYMLDm.js";import"./index-DNNzYmse.js";import"./ds-button-legacy-DUBeOvwD.js";import"./ds-button-new-Cc4jcDSd.js";import"./radio-group.machine-P5JTufHo.js";import"./visually-hidden-BShGFMbX.js";import"./number-Bu-e0fmS.js";import"./form-BVSjJgzu.js";import"./resize-observer-CF1V0LTP.js";const{fn:N}=__STORYBOOK_MODULE_TEST__,je={title:"Design System/DropdownMenu",parameters:{layout:"centered"}},I={parameters:{docs:{description:{story:"A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups."}}},render:()=>{const u=()=>console.log("Edit clicked"),l=()=>console.log("Duplicate clicked"),r=()=>console.log("Share clicked"),a=()=>console.log("Delete clicked");return e.jsxs(n.Root,{children:[e.jsxs(n.Trigger,{className:"trigger",children:[e.jsx("span",{children:"Actions"}),e.jsx(o,{icon:"more_vert"})]}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{value:"edit",onSelect:u,children:[e.jsx(o,{icon:"edit"}),e.jsx("span",{children:"Edit"})]}),e.jsxs(n.Item,{value:"duplicate",onSelect:l,children:[e.jsx(o,{icon:"content_copy"}),e.jsx("span",{children:"Duplicate"})]}),e.jsxs(n.Item,{value:"share",onSelect:r,children:[e.jsx(o,{icon:"share"}),e.jsx("span",{children:"Share"})]}),e.jsx(n.Separator,{}),e.jsxs(n.Item,{value:"delete",onSelect:a,className:"danger",children:[e.jsx(o,{icon:"delete"}),e.jsx("span",{children:"Delete"})]}),e.jsxs(n.Item,{value:"disabled",disabled:!0,children:[e.jsx(o,{icon:"block"}),e.jsx("span",{children:"Disabled Option"})]})]})]})}},b={name:"Selectable List with Search",parameters:{docs:{description:{story:"Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator."}}},render:function(){const[l,r]=p.useState(""),[a,c]=p.useState("option1"),s=[{value:"option1",label:"Option 1"},{value:"option2",label:"Option 2"},{value:"option3",label:"Option 3"},{value:"option4",label:"Option 4"}],m=s.find(i=>i.value===a)?.label,x=s.filter(i=>i.label.toLowerCase().includes(l.toLowerCase()));return e.jsxs(n.Root,{onSelect:c,positioning:{sameWidth:!0},children:[e.jsxs(n.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:m||"Select an option"}),e.jsx(o,{icon:"arrow_drop_down"})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:e.jsx(y,{placeholder:"Search",value:l,onValueChange:r,onKeyDown:i=>i.stopPropagation(),slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})}),x.map(i=>e.jsxs(n.Item,{value:i.value,selected:a===i.value,children:[i.label,a===i.value&&e.jsx(n.ItemIndicator,{})]},i.value))]})]})}},C={name:"Checkbox List with Groups",parameters:{docs:{description:{story:"Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons."}}},render:function(){const[l,r]=p.useState(!1),[a,c]=p.useState(""),[s,m]=p.useState(new Set(["item1"])),x=[{id:"item1",label:"Menu text 1",description:"Info Text"},{id:"item2",label:"Menu text 2",description:"Info Text"}],i=[{id:"item3",label:"Menu text 3",description:"Info Text"},{id:"item4",label:"Menu text 4",description:"Info Text"},{id:"item5",label:"Menu text 5",description:"Info Text"},{id:"item6",label:"Menu text 6",description:"Info Text"},{id:"item7",label:"Menu text 7",description:"Info Text"}],j=x.filter(t=>t.label.toLowerCase().includes(a.toLowerCase())),w=i.filter(t=>t.label.toLowerCase().includes(a.toLowerCase())),g=t=>{const S=new Set(s);S.has(t)?S.delete(t):S.add(t),m(S)},d=()=>{console.log("Applied selections:",Array.from(s))},R=()=>{console.log("Cancelled"),r(!1),c("")};return e.jsxs(n.Root,{open:l,onOpenChange:r,onSelect:g,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[e.jsxs(n.Trigger,{className:"trigger fixedWidth",children:[e.jsxs("span",{children:["Multi Select (",s.size,")"]}),e.jsx(o,{icon:"arrow_drop_down"})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:e.jsx(y,{placeholder:"Search",value:a,onValueChange:c,onKeyDown:t=>t.stopPropagation(),slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})}),j.map(t=>e.jsxs(n.Item,{value:t.id,children:[e.jsx(T,{tabIndex:-1,checked:s.has(t.id),onCheckedChange:()=>g(t.id)}),e.jsxs("div",{className:"item-content",children:[e.jsx(h,{className:"item-label",variant:"body-sm-reg",children:t.label}),e.jsx(h,{className:"item-description",variant:"body-xs-reg",children:t.description})]})]},t.id)),!!w.length&&e.jsxs(n.ItemGroup,{children:[e.jsx(n.ItemGroupLabel,{children:"Group Name"}),e.jsx(n.ItemGroupContent,{children:w.map(t=>e.jsxs(n.Item,{value:t.id,children:[e.jsx(T,{tabIndex:-1,checked:s.has(t.id),onCheckedChange:()=>g(t.id)}),e.jsxs("div",{className:"item-content",children:[e.jsx(h,{className:"item-label",variant:"body-sm-reg",children:t.label}),e.jsx(h,{className:"item-description",variant:"body-xs-reg",children:t.description})]})]},t.id))})]}),e.jsxs(n.Actions,{children:[e.jsx(D,{design:"v1.2",buttonType:"secondary",size:"small",onClick:R,children:"Cancel"}),e.jsx(D,{design:"v1.2",buttonType:"primary",size:"small",onClick:d,children:"Apply"})]})]})]})}},M={name:"Collapsible Group (Controlled)",parameters:{docs:{description:{story:"The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label."}}},render:function(l){const[r,a]=p.useState(!1),c=s=>{a(s),l.onCollapsedChange?.(s)};return e.jsxs(n.Root,{positioning:{sameWidth:!0},children:[e.jsxs(n.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:"Controlled Group"}),e.jsx(o,{icon:"arrow_drop_down"})]}),e.jsx(n.Content,{children:e.jsxs(n.ItemGroup,{collapsed:r,onCollapsedChange:c,children:[e.jsx(n.ItemGroupLabel,{children:"Settings"}),e.jsxs(n.ItemGroupContent,{children:[e.jsxs(n.Item,{value:"profile",children:[e.jsx(o,{icon:"person"}),e.jsx("span",{children:"Profile"})]}),e.jsxs(n.Item,{value:"preferences",children:[e.jsx(o,{icon:"settings"}),e.jsx("span",{children:"Preferences"})]}),e.jsxs(n.Item,{value:"notifications",children:[e.jsx(o,{icon:"notifications"}),e.jsx("span",{children:"Notifications"})]})]})]})})]})},args:{onCollapsedChange:N()}},v={name:"Radio List with Actions",parameters:{docs:{description:{story:"Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items."}}},render:function(){const[l,r]=p.useState(!1),[a,c]=p.useState(""),[s,m]=p.useState(null),i=[{value:"option1",label:"Menu text 1",description:"Info Text"},{value:"option2",label:"Menu text 2",description:"Info Text"},{value:"option3",label:"Menu text 3",description:"Info Text"},{value:"option4",label:"Menu text 4",description:"Info Text"}].filter(d=>d.label.toLowerCase().includes(a.toLowerCase())),j=()=>{r(!1),console.log(`Applied: ${JSON.stringify(s)}`)},w=()=>{console.log("Cancelled"),r(!1),c("")},g=()=>{console.log("Reset"),m(""),r(!1),c("")};return e.jsxs(n.Root,{open:l,onOpenChange:r,onSelect:m,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[e.jsxs(n.Trigger,{className:"trigger fixedWidth",children:[e.jsx("span",{children:s||"Select an option"}),e.jsx(o,{icon:"arrow_drop_down"})]}),e.jsxs(n.Content,{children:[e.jsx(n.Header,{children:e.jsx(y,{placeholder:"Search",value:a,onValueChange:c,onKeyDown:d=>d.stopPropagation(),slots:{startAdornment:e.jsx(o,{icon:"search",size:"tiny"})}})}),e.jsx(k.Root,{className:"radio-group",value:s,onValueChange:m,children:i.map(d=>e.jsxs(n.Item,{value:d.value,className:s===d.value?"radio-selected":"",children:[e.jsx(k.Item,{value:d.value}),e.jsxs("div",{className:"item-content",children:[e.jsx(h,{className:"item-label",variant:"body-sm-reg",children:d.label}),e.jsx(h,{className:"item-description",variant:"body-xs-reg",children:d.description})]})]},d.value))}),e.jsxs(n.Actions,{children:[e.jsx(D,{design:"v1.2",variant:"danger",size:"small",onClick:g,children:"Reset"}),e.jsx(D,{design:"v1.2",buttonType:"secondary",size:"small",onClick:w,children:"Cancel"}),e.jsx(D,{design:"v1.2",buttonType:"primary",size:"small",onClick:j,children:"Apply"})]})]})]})}},f={parameters:{docs:{description:{story:"Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions."}}},render:()=>{const u=()=>console.log("Edit clicked"),l=()=>console.log("Duplicate clicked"),r=()=>console.log("Share via Email clicked"),a=()=>console.log("Copy Link clicked"),c=()=>console.log("Share to Social Media clicked"),s=()=>console.log("Delete item clicked");return e.jsxs(n.Root,{children:[e.jsx(n.Trigger,{asChild:!0,children:e.jsx(D,{design:"v1.2",buttonType:"secondary",children:e.jsx(o,{icon:"more_vert"})})}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{value:"edit",onSelect:u,children:[e.jsx(o,{icon:"edit"}),e.jsx("span",{children:"Edit"})]}),e.jsxs(n.Item,{value:"duplicate",onSelect:l,children:[e.jsx(o,{icon:"content_copy"}),e.jsx("span",{children:"Duplicate"})]}),e.jsxs(n.Root,{positioning:{placement:"right-start"},children:[e.jsxs(n.TriggerItem,{className:"action-menu-item",children:[e.jsx(o,{icon:"share"}),e.jsx("span",{children:"Share"})]}),e.jsxs(n.Content,{children:[e.jsxs(n.Item,{value:"share-email",onSelect:r,children:[e.jsx(o,{icon:"mail"}),e.jsx("span",{children:"Email"})]}),e.jsxs(n.Item,{value:"share-link",onSelect:a,children:[e.jsx(o,{icon:"link"}),e.jsx("span",{children:"Copy Link"})]}),e.jsxs(n.Item,{value:"share-social",onSelect:c,children:[e.jsx(o,{icon:"public"}),e.jsx("span",{children:"Social Media"})]})]})]}),e.jsx(n.Separator,{}),e.jsxs(n.Item,{value:"delete",onSelect:s,className:"danger",children:[e.jsx(o,{icon:"delete"}),e.jsx("span",{children:"Delete item"})]})]})]})}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups.'
      }
    }
  },
  render: () => {
    const handleEdit = () => console.log('Edit clicked');
    const handleDuplicate = () => console.log('Duplicate clicked');
    const handleShare = () => console.log('Share clicked');
    const handleDelete = () => console.log('Delete clicked');
    return <DsDropdownMenu.Root>
                <DsDropdownMenu.Trigger className="trigger">
                    <span>Actions</span>
                    <DsIcon icon="more_vert" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Item value="edit" onSelect={handleEdit}>
                        <DsIcon icon="edit" />
                        <span>Edit</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="duplicate" onSelect={handleDuplicate}>
                        <DsIcon icon="content_copy" />
                        <span>Duplicate</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="share" onSelect={handleShare}>
                        <DsIcon icon="share" />
                        <span>Share</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Separator />
                    <DsDropdownMenu.Item value="delete" onSelect={handleDelete} className="danger">
                        <DsIcon icon="delete" />
                        <span>Delete</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="disabled" disabled>
                        <DsIcon icon="block" />
                        <span>Disabled Option</span>
                    </DsDropdownMenu.Item>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Selectable List with Search',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator.'
      }
    }
  },
  render: function Render() {
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState<string | undefined>('option1');
    const options = [{
      value: 'option1',
      label: 'Option 1'
    }, {
      value: 'option2',
      label: 'Option 2'
    }, {
      value: 'option3',
      label: 'Option 3'
    }, {
      value: 'option4',
      label: 'Option 4'
    }];
    const selectedOption = options.find(opt => opt.value === selected)?.label;
    const filteredOptions = options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()));
    return <DsDropdownMenu.Root onSelect={setSelected} positioning={{
      sameWidth: true
    }}>
                <DsDropdownMenu.Trigger className="trigger fixedWidth">
                    <span>{selectedOption || 'Select an option'}</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Header>
                        <DsTextInput placeholder="Search" value={search} onValueChange={setSearch} onKeyDown={e => e.stopPropagation()} slots={{
            startAdornment: <DsIcon icon="search" size="tiny" />
          }} />
                    </DsDropdownMenu.Header>
                    {filteredOptions.map(option => <DsDropdownMenu.Item key={option.value} value={option.value} selected={selected === option.value}>
                            {option.label}
                            {selected === option.value && <DsDropdownMenu.ItemIndicator />}
                        </DsDropdownMenu.Item>)}
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Checkbox List with Groups',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons.'
      }
    }
  },
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [selected, setSelected] = useState(new Set(['item1']));
    const items = [{
      id: 'item1',
      label: 'Menu text 1',
      description: 'Info Text'
    }, {
      id: 'item2',
      label: 'Menu text 2',
      description: 'Info Text'
    }];
    const groupedItems = [{
      id: 'item3',
      label: 'Menu text 3',
      description: 'Info Text'
    }, {
      id: 'item4',
      label: 'Menu text 4',
      description: 'Info Text'
    }, {
      id: 'item5',
      label: 'Menu text 5',
      description: 'Info Text'
    }, {
      id: 'item6',
      label: 'Menu text 6',
      description: 'Info Text'
    }, {
      id: 'item7',
      label: 'Menu text 7',
      description: 'Info Text'
    }];
    const filteredItems = items.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));
    const filteredGroupedItems = groupedItems.filter(item => item.label.toLowerCase().includes(search.toLowerCase()));
    const toggleSelection = (id: string) => {
      const newSelected = new Set(selected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      setSelected(newSelected);
    };
    const handleApply = () => {
      console.log('Applied selections:', Array.from(selected));
    };
    const handleCancel = () => {
      console.log('Cancelled');
      setOpen(false);
      setSearch('');
    };
    return <DsDropdownMenu.Root open={open} onOpenChange={setOpen} onSelect={toggleSelection} positioning={{
      sameWidth: true
    }} preventCloseOnSelect>
                <DsDropdownMenu.Trigger className="trigger fixedWidth">
                    <span>Multi Select ({selected.size})</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Header>
                        <DsTextInput placeholder="Search" value={search} onValueChange={setSearch} onKeyDown={e => e.stopPropagation()} slots={{
            startAdornment: <DsIcon icon="search" size="tiny" />
          }} />
                    </DsDropdownMenu.Header>
                    {filteredItems.map(item => <DsDropdownMenu.Item key={item.id} value={item.id}>
                            <DsCheckbox tabIndex={-1} checked={selected.has(item.id)} onCheckedChange={() => toggleSelection(item.id)} />
                            <div className="item-content">
                                <DsTypography className="item-label" variant="body-sm-reg">
                                    {item.label}
                                </DsTypography>
                                <DsTypography className="item-description" variant="body-xs-reg">
                                    {item.description}
                                </DsTypography>
                            </div>
                        </DsDropdownMenu.Item>)}
                    {!!filteredGroupedItems.length && <DsDropdownMenu.ItemGroup>
                            <DsDropdownMenu.ItemGroupLabel>Group Name</DsDropdownMenu.ItemGroupLabel>
                            <DsDropdownMenu.ItemGroupContent>
                                {filteredGroupedItems.map(item => <DsDropdownMenu.Item key={item.id} value={item.id}>
                                        <DsCheckbox tabIndex={-1} checked={selected.has(item.id)} onCheckedChange={() => toggleSelection(item.id)} />
                                        <div className="item-content">
                                            <DsTypography className="item-label" variant="body-sm-reg">
                                                {item.label}
                                            </DsTypography>
                                            <DsTypography className="item-description" variant="body-xs-reg">
                                                {item.description}
                                            </DsTypography>
                                        </div>
                                    </DsDropdownMenu.Item>)}
                            </DsDropdownMenu.ItemGroupContent>
                        </DsDropdownMenu.ItemGroup>}
                    <DsDropdownMenu.Actions>
                        <DsButton design="v1.2" buttonType="secondary" size="small" onClick={handleCancel}>
                            Cancel
                        </DsButton>
                        <DsButton design="v1.2" buttonType="primary" size="small" onClick={handleApply}>
                            Apply
                        </DsButton>
                    </DsDropdownMenu.Actions>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...C.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Collapsible Group (Controlled)',
  parameters: {
    docs: {
      description: {
        story: 'The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label.'
      }
    }
  },
  render: function Render(args) {
    const [collapsed, setCollapsed] = useState(false);
    const handleCollapsedChange = (newCollapsed: boolean) => {
      setCollapsed(newCollapsed);
      args.onCollapsedChange?.(newCollapsed);
    };
    return <DsDropdownMenu.Root positioning={{
      sameWidth: true
    }}>
                <DsDropdownMenu.Trigger className="trigger fixedWidth">
                    <span>Controlled Group</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.ItemGroup collapsed={collapsed} onCollapsedChange={handleCollapsedChange}>
                        <DsDropdownMenu.ItemGroupLabel>Settings</DsDropdownMenu.ItemGroupLabel>
                        <DsDropdownMenu.ItemGroupContent>
                            <DsDropdownMenu.Item value="profile">
                                <DsIcon icon="person" />
                                <span>Profile</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Item value="preferences">
                                <DsIcon icon="settings" />
                                <span>Preferences</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Item value="notifications">
                                <DsIcon icon="notifications" />
                                <span>Notifications</span>
                            </DsDropdownMenu.Item>
                        </DsDropdownMenu.ItemGroupContent>
                    </DsDropdownMenu.ItemGroup>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  },
  args: {
    onCollapsedChange: fn()
  }
}`,...M.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Radio List with Actions',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items.'
      }
    }
  },
  render: function Render() {
    const [open, setOpen] = useState(false);
    const [search, setSearch] = useState('');
    const [tempSelected, setTempSelected] = useState<string | null>(null);
    const options = [{
      value: 'option1',
      label: 'Menu text 1',
      description: 'Info Text'
    }, {
      value: 'option2',
      label: 'Menu text 2',
      description: 'Info Text'
    }, {
      value: 'option3',
      label: 'Menu text 3',
      description: 'Info Text'
    }, {
      value: 'option4',
      label: 'Menu text 4',
      description: 'Info Text'
    }];
    const filteredOptions = options.filter(opt => opt.label.toLowerCase().includes(search.toLowerCase()));
    const handleApply = () => {
      setOpen(false);
      console.log(\`Applied: \${JSON.stringify(tempSelected)}\`);
    };
    const handleCancel = () => {
      console.log('Cancelled');
      setOpen(false);
      setSearch('');
    };
    const handleReset = () => {
      console.log('Reset');
      setTempSelected('');
      setOpen(false);
      setSearch('');
    };
    return <DsDropdownMenu.Root open={open} onOpenChange={setOpen} onSelect={setTempSelected} positioning={{
      sameWidth: true
    }} preventCloseOnSelect>
                <DsDropdownMenu.Trigger className="trigger fixedWidth">
                    <span>{tempSelected || 'Select an option'}</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Header>
                        <DsTextInput placeholder="Search" value={search} onValueChange={setSearch} onKeyDown={e => e.stopPropagation()} slots={{
            startAdornment: <DsIcon icon="search" size="tiny" />
          }} />
                    </DsDropdownMenu.Header>
                    <DsRadioGroup.Root className="radio-group" value={tempSelected} onValueChange={setTempSelected}>
                        {filteredOptions.map(option => <DsDropdownMenu.Item key={option.value} value={option.value} className={tempSelected === option.value ? 'radio-selected' : ''}>
                                <DsRadioGroup.Item value={option.value} />
                                <div className="item-content">
                                    <DsTypography className="item-label" variant="body-sm-reg">
                                        {option.label}
                                    </DsTypography>
                                    <DsTypography className="item-description" variant="body-xs-reg">
                                        {option.description}
                                    </DsTypography>
                                </div>
                            </DsDropdownMenu.Item>)}
                    </DsRadioGroup.Root>
                    <DsDropdownMenu.Actions>
                        <DsButton design="v1.2" variant="danger" size="small" onClick={handleReset}>
                            Reset
                        </DsButton>
                        <DsButton design="v1.2" buttonType="secondary" size="small" onClick={handleCancel}>
                            Cancel
                        </DsButton>
                        <DsButton design="v1.2" buttonType="primary" size="small" onClick={handleApply}>
                            Apply
                        </DsButton>
                    </DsDropdownMenu.Actions>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...v.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions.'
      }
    }
  },
  render: () => {
    const handleEdit = () => console.log('Edit clicked');
    const handleDuplicate = () => console.log('Duplicate clicked');
    const handleShareEmail = () => console.log('Share via Email clicked');
    const handleShareLink = () => console.log('Copy Link clicked');
    const handleShareSocial = () => console.log('Share to Social Media clicked');
    const handleDelete = () => console.log('Delete item clicked');
    return <DsDropdownMenu.Root>
                <DsDropdownMenu.Trigger asChild>
                    <DsButton design="v1.2" buttonType="secondary">
                        <DsIcon icon="more_vert" />
                    </DsButton>
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Item value="edit" onSelect={handleEdit}>
                        <DsIcon icon="edit" />
                        <span>Edit</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="duplicate" onSelect={handleDuplicate}>
                        <DsIcon icon="content_copy" />
                        <span>Duplicate</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Root positioning={{
          placement: 'right-start'
        }}>
                        <DsDropdownMenu.TriggerItem className="action-menu-item">
                            <DsIcon icon="share" />
                            <span>Share</span>
                        </DsDropdownMenu.TriggerItem>
                        <DsDropdownMenu.Content>
                            <DsDropdownMenu.Item value="share-email" onSelect={handleShareEmail}>
                                <DsIcon icon="mail" />
                                <span>Email</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Item value="share-link" onSelect={handleShareLink}>
                                <DsIcon icon="link" />
                                <span>Copy Link</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Item value="share-social" onSelect={handleShareSocial}>
                                <DsIcon icon="public" />
                                <span>Social Media</span>
                            </DsDropdownMenu.Item>
                        </DsDropdownMenu.Content>
                    </DsDropdownMenu.Root>
                    <DsDropdownMenu.Separator />
                    <DsDropdownMenu.Item value="delete" onSelect={handleDelete} className="danger">
                        <DsIcon icon="delete" />
                        <span>Delete item</span>
                    </DsDropdownMenu.Item>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...f.parameters?.docs?.source}}};const ye=["Default","SelectableList","CheckboxList","CollapsibleGroupControlled","RadioList","ActionMenu"];export{f as ActionMenu,C as CheckboxList,M as CollapsibleGroupControlled,I as Default,v as RadioList,b as SelectableList,ye as __namedExportsOrder,je as default};
