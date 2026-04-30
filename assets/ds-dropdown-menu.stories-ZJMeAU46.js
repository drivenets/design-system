import{a as e,n as t}from"./chunk-BneVvdWh.js";import{S as n}from"./iframe-DjGGxKH_.js";import{t as r}from"./jsx-runtime-D16BNjX-.js";import{t as i}from"./ds-icon-DJDv52TD.js";import{t as a}from"./ds-icon-DLZbh_sL.js";import{n as o,t as s}from"./ds-typography-Clcl076n.js";import{n as c,t as l}from"./ds-button-bewspj1_.js";import{r as u,t as d}from"./ds-dropdown-menu-8yYMmsX7.js";import{r as f}from"./ds-text-input.types-C4dnvvKp.js";import{t as p}from"./ds-text-input-Ca7ogwJL.js";import{r as m}from"./ds-checkbox.types-DO7Ytky2.js";import{t as h}from"./ds-checkbox-BRH6fDFk.js";import{t as g}from"./ds-dropdown-menu.stories-CStr5_Wr.js";import{t as _}from"./ds-radio-group-BacK9gJP.js";import{t as v}from"./ds-radio-group-Cw4TgQeO.js";var y,b,x,S,C,w,T,E,D,O,k;t((()=>{y=e(n(),1),u(),a(),p(),h(),s(),l(),v(),g(),b=r(),{fn:x}=__STORYBOOK_MODULE_TEST__,S={title:`Components/DropdownMenu`,component:d.Root,parameters:{layout:`centered`}},C={parameters:{docs:{description:{story:`A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups.`}}},render:()=>(0,b.jsxs)(d.Root,{children:[(0,b.jsxs)(d.Trigger,{className:`trigger`,children:[(0,b.jsx)(`span`,{children:`Actions`}),(0,b.jsx)(i,{icon:`more_vert`})]}),(0,b.jsxs)(d.Content,{children:[(0,b.jsxs)(d.Item,{value:`edit`,onSelect:()=>console.log(`Edit clicked`),children:[(0,b.jsx)(i,{icon:`edit`}),(0,b.jsx)(`span`,{children:`Edit`})]}),(0,b.jsxs)(d.Item,{value:`duplicate`,onSelect:()=>console.log(`Duplicate clicked`),children:[(0,b.jsx)(i,{icon:`content_copy`}),(0,b.jsx)(`span`,{children:`Duplicate`})]}),(0,b.jsxs)(d.Item,{value:`share`,onSelect:()=>console.log(`Share clicked`),children:[(0,b.jsx)(i,{icon:`share`}),(0,b.jsx)(`span`,{children:`Share`})]}),(0,b.jsx)(d.Separator,{}),(0,b.jsxs)(d.Item,{value:`delete`,onSelect:()=>console.log(`Delete clicked`),className:`danger`,children:[(0,b.jsx)(i,{icon:`delete`}),(0,b.jsx)(`span`,{children:`Delete`})]}),(0,b.jsxs)(d.Item,{value:`disabled`,disabled:!0,children:[(0,b.jsx)(i,{icon:`block`}),(0,b.jsx)(`span`,{children:`Disabled Option`})]})]})]})},w={name:`Selectable List with Search`,parameters:{docs:{description:{story:`Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator.`}}},render:function(){let[e,t]=(0,y.useState)(``),[n,r]=(0,y.useState)(`option1`),a=[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`},{value:`option4`,label:`Option 4`}],o=a.find(e=>e.value===n)?.label,s=a.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()));return(0,b.jsxs)(d.Root,{onSelect:r,positioning:{sameWidth:!0},children:[(0,b.jsxs)(d.Trigger,{className:`trigger fixedWidth`,children:[(0,b.jsx)(`span`,{children:o||`Select an option`}),(0,b.jsx)(i,{icon:`arrow_drop_down`})]}),(0,b.jsxs)(d.Content,{children:[(0,b.jsx)(d.Header,{children:(0,b.jsx)(f,{placeholder:`Search`,value:e,onValueChange:t,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,b.jsx)(i,{icon:`search`,size:`tiny`})}})}),s.map(e=>(0,b.jsxs)(d.Item,{value:e.value,selected:n===e.value,children:[e.label,n===e.value&&(0,b.jsx)(d.ItemIndicator,{})]},e.value))]})]})}},T={name:`Checkbox List with Groups`,parameters:{docs:{description:{story:`Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons.`}}},render:function(){let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(``),[a,s]=(0,y.useState)(new Set([`item1`])),l=[{id:`item1`,label:`Menu text 1`,description:`Info Text`},{id:`item2`,label:`Menu text 2`,description:`Info Text`}],u=[{id:`item3`,label:`Menu text 3`,description:`Info Text`},{id:`item4`,label:`Menu text 4`,description:`Info Text`},{id:`item5`,label:`Menu text 5`,description:`Info Text`},{id:`item6`,label:`Menu text 6`,description:`Info Text`},{id:`item7`,label:`Menu text 7`,description:`Info Text`}],p=l.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())),h=u.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())),g=e=>{let t=new Set(a);t.has(e)?t.delete(e):t.add(e),s(t)};return(0,b.jsxs)(d.Root,{open:e,onOpenChange:t,onSelect:g,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[(0,b.jsxs)(d.Trigger,{className:`trigger fixedWidth`,children:[(0,b.jsxs)(`span`,{children:[`Multi Select (`,a.size,`)`]}),(0,b.jsx)(i,{icon:`arrow_drop_down`})]}),(0,b.jsxs)(d.Content,{children:[(0,b.jsx)(d.Header,{children:(0,b.jsx)(f,{placeholder:`Search`,value:n,onValueChange:r,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,b.jsx)(i,{icon:`search`,size:`tiny`})}})}),p.map(e=>(0,b.jsxs)(d.Item,{value:e.id,children:[(0,b.jsx)(m,{tabIndex:-1,checked:a.has(e.id),onCheckedChange:()=>g(e.id)}),(0,b.jsxs)(`div`,{className:`item-content`,children:[(0,b.jsx)(o,{className:`item-label`,variant:`body-sm-reg`,children:e.label}),(0,b.jsx)(o,{className:`item-description`,variant:`body-xs-reg`,children:e.description})]})]},e.id)),!!h.length&&(0,b.jsxs)(d.ItemGroup,{children:[(0,b.jsx)(d.ItemGroupLabel,{children:`Group Name`}),(0,b.jsx)(d.ItemGroupContent,{children:h.map(e=>(0,b.jsxs)(d.Item,{value:e.id,children:[(0,b.jsx)(m,{tabIndex:-1,checked:a.has(e.id),onCheckedChange:()=>g(e.id)}),(0,b.jsxs)(`div`,{className:`item-content`,children:[(0,b.jsx)(o,{className:`item-label`,variant:`body-sm-reg`,children:e.label}),(0,b.jsx)(o,{className:`item-description`,variant:`body-xs-reg`,children:e.description})]})]},e.id))})]}),(0,b.jsxs)(d.Actions,{children:[(0,b.jsx)(c,{design:`v1.2`,buttonType:`secondary`,size:`small`,onClick:()=>{console.log(`Cancelled`),t(!1),r(``)},children:`Cancel`}),(0,b.jsx)(c,{design:`v1.2`,buttonType:`primary`,size:`small`,onClick:()=>{console.log(`Applied selections:`,Array.from(a))},children:`Apply`})]})]})]})}},E={name:`Collapsible Group (Controlled)`,parameters:{docs:{description:{story:`The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label.`}}},render:function(e){let[t,n]=(0,y.useState)(!1);return(0,b.jsxs)(d.Root,{positioning:{sameWidth:!0},children:[(0,b.jsxs)(d.Trigger,{className:`trigger fixedWidth`,children:[(0,b.jsx)(`span`,{children:`Controlled Group`}),(0,b.jsx)(i,{icon:`arrow_drop_down`})]}),(0,b.jsx)(d.Content,{children:(0,b.jsxs)(d.ItemGroup,{collapsed:t,onCollapsedChange:t=>{n(t),e.onCollapsedChange?.(t)},children:[(0,b.jsx)(d.ItemGroupLabel,{children:`Settings`}),(0,b.jsxs)(d.ItemGroupContent,{children:[(0,b.jsxs)(d.Item,{value:`profile`,children:[(0,b.jsx)(i,{icon:`person`}),(0,b.jsx)(`span`,{children:`Profile`})]}),(0,b.jsxs)(d.Item,{value:`preferences`,children:[(0,b.jsx)(i,{icon:`settings`}),(0,b.jsx)(`span`,{children:`Preferences`})]}),(0,b.jsxs)(d.Item,{value:`notifications`,children:[(0,b.jsx)(i,{icon:`notifications`}),(0,b.jsx)(`span`,{children:`Notifications`})]})]})]})})]})},args:{onCollapsedChange:x()}},D={name:`Radio List with Actions`,parameters:{docs:{description:{story:`Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items.`}}},render:function(){let[e,t]=(0,y.useState)(!1),[n,r]=(0,y.useState)(``),[a,s]=(0,y.useState)(null),l=[{value:`option1`,label:`Menu text 1`,description:`Info Text`},{value:`option2`,label:`Menu text 2`,description:`Info Text`},{value:`option3`,label:`Menu text 3`,description:`Info Text`},{value:`option4`,label:`Menu text 4`,description:`Info Text`}].filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return(0,b.jsxs)(d.Root,{open:e,onOpenChange:t,onSelect:s,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[(0,b.jsxs)(d.Trigger,{className:`trigger fixedWidth`,children:[(0,b.jsx)(`span`,{children:a||`Select an option`}),(0,b.jsx)(i,{icon:`arrow_drop_down`})]}),(0,b.jsxs)(d.Content,{children:[(0,b.jsx)(d.Header,{children:(0,b.jsx)(f,{placeholder:`Search`,value:n,onValueChange:r,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,b.jsx)(i,{icon:`search`,size:`tiny`})}})}),(0,b.jsx)(_.Root,{className:`radio-group`,value:a,onValueChange:s,children:l.map(e=>(0,b.jsxs)(d.Item,{value:e.value,className:a===e.value?`radio-selected`:``,children:[(0,b.jsx)(_.Item,{value:e.value}),(0,b.jsxs)(`div`,{className:`item-content`,children:[(0,b.jsx)(o,{className:`item-label`,variant:`body-sm-reg`,children:e.label}),(0,b.jsx)(o,{className:`item-description`,variant:`body-xs-reg`,children:e.description})]})]},e.value))}),(0,b.jsxs)(d.Actions,{children:[(0,b.jsx)(c,{design:`v1.2`,variant:`danger`,size:`small`,onClick:()=>{console.log(`Reset`),s(``),t(!1),r(``)},children:`Reset`}),(0,b.jsx)(c,{design:`v1.2`,buttonType:`secondary`,size:`small`,onClick:()=>{console.log(`Cancelled`),t(!1),r(``)},children:`Cancel`}),(0,b.jsx)(c,{design:`v1.2`,buttonType:`primary`,size:`small`,onClick:()=>{t(!1),console.log(`Applied: ${JSON.stringify(a)}`)},children:`Apply`})]})]})]})}},O={parameters:{docs:{description:{story:`Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions.`}}},render:()=>(0,b.jsxs)(d.Root,{children:[(0,b.jsx)(d.Trigger,{asChild:!0,children:(0,b.jsx)(c,{design:`v1.2`,buttonType:`secondary`,children:(0,b.jsx)(i,{icon:`more_vert`})})}),(0,b.jsxs)(d.Content,{children:[(0,b.jsxs)(d.Item,{value:`edit`,onSelect:()=>console.log(`Edit clicked`),children:[(0,b.jsx)(i,{icon:`edit`}),(0,b.jsx)(`span`,{children:`Edit`})]}),(0,b.jsxs)(d.Item,{value:`duplicate`,onSelect:()=>console.log(`Duplicate clicked`),children:[(0,b.jsx)(i,{icon:`content_copy`}),(0,b.jsx)(`span`,{children:`Duplicate`})]}),(0,b.jsxs)(d.Root,{positioning:{placement:`right-start`},children:[(0,b.jsxs)(d.TriggerItem,{className:`action-menu-item`,children:[(0,b.jsx)(i,{icon:`share`}),(0,b.jsx)(`span`,{children:`Share`})]}),(0,b.jsxs)(d.Content,{children:[(0,b.jsxs)(d.Item,{value:`share-email`,onSelect:()=>console.log(`Share via Email clicked`),children:[(0,b.jsx)(i,{icon:`mail`}),(0,b.jsx)(`span`,{children:`Email`})]}),(0,b.jsxs)(d.Item,{value:`share-link`,onSelect:()=>console.log(`Copy Link clicked`),children:[(0,b.jsx)(i,{icon:`link`}),(0,b.jsx)(`span`,{children:`Copy Link`})]}),(0,b.jsxs)(d.Item,{value:`share-social`,onSelect:()=>console.log(`Share to Social Media clicked`),children:[(0,b.jsx)(i,{icon:`public`}),(0,b.jsx)(`span`,{children:`Social Media`})]})]})]}),(0,b.jsx)(d.Separator,{}),(0,b.jsxs)(d.Item,{value:`delete`,onSelect:()=>console.log(`Delete item clicked`),className:`danger`,children:[(0,b.jsx)(i,{icon:`delete`}),(0,b.jsx)(`span`,{children:`Delete item`})]})]})]})},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
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
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
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
}`,...D.parameters?.docs?.source}}},O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k=[`Default`,`SelectableList`,`CheckboxList`,`CollapsibleGroupControlled`,`RadioList`,`ActionMenu`]}))();export{O as ActionMenu,T as CheckboxList,E as CollapsibleGroupControlled,C as Default,D as RadioList,w as SelectableList,k as __namedExportsOrder,S as default};