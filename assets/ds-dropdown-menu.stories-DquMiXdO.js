import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./ds-icon-BRZFUTMz.js";import{r as o,t as s}from"./ds-dropdown-menu-CnU5rWRR.js";import{i as c}from"./ds-avatar.types-1gr0gATe.js";import{i as l,t as u}from"./ds-checkbox-BIcPs-sn.js";import{t as d}from"./ds-radio-group-RJWf_Td8.js";import{n as f,t as p}from"./ds-typography-DrL2wWa5.js";import{n as m,t as h}from"./ds-stack-GU0hZWeR.js";import{t as g}from"./ds-avatar-PggleZID.js";import{r as _}from"./ds-text-input.types-LoNcVPp4.js";import{t as v}from"./ds-text-input-D0lDEuO4.js";import{n as y,t as b}from"./ds-button-Cokr7gO2.js";import{t as x}from"./ds-dropdown-menu.stories-B_hFqmk1.js";import{t as S}from"./ds-radio-group-BucH4Tny.js";import{n as C,t as w}from"./ds-user-card-wgwkC0H0.js";var T=t((()=>{})),E=t((()=>{C(),T()})),D,O,k,A,j,M,N,P,F,I,L,R,z;t((()=>{D=e(n(),1),o(),a(),v(),u(),p(),m(),b(),S(),E(),g(),x(),O=r(),{fn:k}=__STORYBOOK_MODULE_TEST__,A={title:`Components/DropdownMenu`,component:s.Root,parameters:{layout:`centered`}},j={parameters:{docs:{description:{story:`A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups.`}}},render:()=>{let e=k(),t=k(),n=k(),r=k();return(0,O.jsxs)(s.Root,{children:[(0,O.jsxs)(s.Trigger,{className:`trigger`,children:[(0,O.jsx)(`span`,{children:`Actions`}),(0,O.jsx)(i,{icon:`more_vert`})]}),(0,O.jsxs)(s.Content,{children:[(0,O.jsxs)(s.Item,{value:`edit`,onSelect:e,children:[(0,O.jsx)(i,{icon:`edit`}),(0,O.jsx)(`span`,{children:`Edit`})]}),(0,O.jsxs)(s.Item,{value:`duplicate`,onSelect:t,children:[(0,O.jsx)(i,{icon:`content_copy`}),(0,O.jsx)(`span`,{children:`Duplicate`})]}),(0,O.jsxs)(s.Item,{value:`share`,onSelect:n,children:[(0,O.jsx)(i,{icon:`share`}),(0,O.jsx)(`span`,{children:`Share`})]}),(0,O.jsx)(s.Separator,{}),(0,O.jsxs)(s.Item,{value:`delete`,onSelect:r,className:`danger`,children:[(0,O.jsx)(i,{icon:`delete`}),(0,O.jsx)(`span`,{children:`Delete`})]}),(0,O.jsxs)(s.Item,{value:`disabled`,disabled:!0,children:[(0,O.jsx)(i,{icon:`block`}),(0,O.jsx)(`span`,{children:`Disabled Option`})]})]})]})}},M={name:`Selectable List with Search`,parameters:{docs:{description:{story:`Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator.`},source:{type:`code`}}},render:function(){let[e,t]=(0,D.useState)(``),[n,r]=(0,D.useState)(`option1`),a=[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`},{value:`option4`,label:`Option 4`}],o=a.find(e=>e.value===n)?.label,c=a.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()));return(0,O.jsxs)(s.Root,{onSelect:r,positioning:{sameWidth:!0},children:[(0,O.jsxs)(s.Trigger,{className:`trigger fixedWidth`,children:[(0,O.jsx)(`span`,{children:o||`Select an option`}),(0,O.jsx)(i,{icon:`arrow_drop_down`})]}),(0,O.jsxs)(s.Content,{children:[(0,O.jsx)(s.Header,{children:(0,O.jsx)(_,{placeholder:`Search`,value:e,onValueChange:t,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,O.jsx)(i,{icon:`search`,size:`tiny`})}})}),c.map(e=>(0,O.jsxs)(s.Item,{value:e.value,selected:n===e.value,children:[e.label,n===e.value&&(0,O.jsx)(s.ItemIndicator,{})]},e.value))]})]})}},N={name:`Checkbox List with Groups`,parameters:{docs:{description:{story:`Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons.`},source:{type:`code`}}},render:function(){let[e,t]=(0,D.useState)(!1),[n,r]=(0,D.useState)(``),[a,o]=(0,D.useState)(new Set([`item1`])),c=[{id:`item1`,label:`Menu text 1`,description:`Info Text`},{id:`item2`,label:`Menu text 2`,description:`Info Text`},{id:`item-error`,label:`Error item`,description:`Something went wrong`,variant:`error`}],u=[{id:`item3`,label:`Menu text 3`,description:`Info Text`},{id:`item4`,label:`Menu text 4`,description:`Info Text`},{id:`item5`,label:`Menu text 5`,description:`Info Text`},{id:`item6`,label:`Menu text 6`,description:`Info Text`},{id:`item7`,label:`Menu text 7`,description:`Info Text`}],d=c.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())),p=u.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())),m=e=>{let t=new Set(a);t.has(e)?t.delete(e):t.add(e),o(t)},g=k();return(0,O.jsxs)(s.Root,{open:e,onOpenChange:t,onSelect:m,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[(0,O.jsxs)(s.Trigger,{className:`trigger fixedWidth`,children:[(0,O.jsxs)(`span`,{children:[`Multi Select (`,a.size,`)`]}),(0,O.jsx)(i,{icon:`arrow_drop_down`})]}),(0,O.jsxs)(s.Content,{children:[(0,O.jsx)(s.Header,{children:(0,O.jsx)(_,{placeholder:`Search`,value:n,onValueChange:r,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,O.jsx)(i,{icon:`search`,size:`tiny`})}})}),d.map(e=>{let t=`variant`in e&&e.variant===`error`;return(0,O.jsxs)(s.Item,{value:e.id,variant:t?`error`:void 0,children:[t?(0,O.jsx)(i,{icon:`search`,size:`tiny`}):(0,O.jsx)(l,{tabIndex:-1,checked:a.has(e.id),onCheckedChange:()=>m(e.id)}),(0,O.jsxs)(h,{direction:`column`,gap:`var(--3xs)`,children:[(0,O.jsx)(f,{className:`item-label`,variant:`body-sm-reg`,color:t?`error`:void 0,children:e.label}),(0,O.jsx)(f,{className:`item-description`,variant:`body-xs-reg`,color:t?`error`:void 0,children:e.description})]})]},e.id)}),!!p.length&&(0,O.jsxs)(s.ItemGroup,{children:[(0,O.jsx)(s.ItemGroupLabel,{children:`Group Name`}),(0,O.jsx)(s.ItemGroupContent,{children:p.map(e=>(0,O.jsxs)(s.Item,{value:e.id,children:[(0,O.jsx)(l,{tabIndex:-1,checked:a.has(e.id),onCheckedChange:()=>m(e.id)}),(0,O.jsxs)(h,{direction:`column`,gap:`var(--3xs)`,children:[(0,O.jsx)(f,{className:`item-label`,variant:`body-sm-reg`,children:e.label}),(0,O.jsx)(f,{className:`item-description`,variant:`body-xs-reg`,children:e.description})]})]},e.id))})]}),(0,O.jsxs)(s.Actions,{children:[(0,O.jsx)(y,{design:`v1.2`,buttonType:`secondary`,size:`small`,onClick:()=>{t(!1),r(``)},children:`Cancel`}),(0,O.jsx)(y,{design:`v1.2`,buttonType:`primary`,size:`small`,onClick:g,children:`Apply`})]})]})]})}},P={name:`Collapsible Group (Controlled)`,parameters:{docs:{description:{story:`The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label.`},source:{type:`code`}}},render:function(e){let[t,n]=(0,D.useState)(!1);return(0,O.jsxs)(s.Root,{positioning:{sameWidth:!0},children:[(0,O.jsxs)(s.Trigger,{className:`trigger fixedWidth`,children:[(0,O.jsx)(`span`,{children:`Controlled Group`}),(0,O.jsx)(i,{icon:`arrow_drop_down`})]}),(0,O.jsx)(s.Content,{children:(0,O.jsxs)(s.ItemGroup,{collapsed:t,onCollapsedChange:t=>{n(t),e.onCollapsedChange?.(t)},children:[(0,O.jsx)(s.ItemGroupLabel,{children:`Settings`}),(0,O.jsxs)(s.ItemGroupContent,{children:[(0,O.jsxs)(s.Item,{value:`profile`,children:[(0,O.jsx)(i,{icon:`person`}),(0,O.jsx)(`span`,{children:`Profile`})]}),(0,O.jsxs)(s.Item,{value:`preferences`,children:[(0,O.jsx)(i,{icon:`settings`}),(0,O.jsx)(`span`,{children:`Preferences`})]}),(0,O.jsxs)(s.Item,{value:`notifications`,children:[(0,O.jsx)(i,{icon:`notifications`}),(0,O.jsx)(`span`,{children:`Notifications`})]})]})]})})]})},args:{onCollapsedChange:k()}},F={name:`Radio List with Actions`,parameters:{docs:{description:{story:`Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items.`},source:{type:`code`}}},render:function(){let[e,t]=(0,D.useState)(!1),[n,r]=(0,D.useState)(``),[a,o]=(0,D.useState)(null),c=[{value:`option1`,label:`Menu text 1`,description:`Info Text`},{value:`option2`,label:`Menu text 2`,description:`Info Text`},{value:`option3`,label:`Menu text 3`,description:`Info Text`},{value:`option4`,label:`Menu text 4`,description:`Info Text`}].filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return(0,O.jsxs)(s.Root,{open:e,onOpenChange:t,onSelect:o,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[(0,O.jsxs)(s.Trigger,{className:`trigger fixedWidth`,children:[(0,O.jsx)(`span`,{children:a||`Select an option`}),(0,O.jsx)(i,{icon:`arrow_drop_down`})]}),(0,O.jsxs)(s.Content,{children:[(0,O.jsx)(s.Header,{children:(0,O.jsx)(_,{placeholder:`Search`,value:n,onValueChange:r,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,O.jsx)(i,{icon:`search`,size:`tiny`})}})}),(0,O.jsx)(d.Root,{className:`radio-group`,value:a,onValueChange:o,children:c.map(e=>(0,O.jsxs)(s.Item,{value:e.value,className:a===e.value?`radio-selected`:``,children:[(0,O.jsx)(d.Item,{value:e.value}),(0,O.jsxs)(h,{direction:`column`,gap:`var(--3xs)`,children:[(0,O.jsx)(f,{className:`item-label`,variant:`body-sm-reg`,children:e.label}),(0,O.jsx)(f,{className:`item-description`,variant:`body-xs-reg`,children:e.description})]})]},e.value))}),(0,O.jsxs)(s.Actions,{children:[(0,O.jsx)(y,{design:`v1.2`,variant:`danger`,size:`small`,onClick:()=>{o(``),t(!1),r(``)},children:`Reset`}),(0,O.jsx)(y,{design:`v1.2`,buttonType:`secondary`,size:`small`,onClick:()=>{t(!1),r(``)},children:`Cancel`}),(0,O.jsx)(y,{design:`v1.2`,buttonType:`primary`,size:`small`,onClick:()=>{t(!1)},children:`Apply`})]})]})]})}},I={parameters:{docs:{description:{story:'The User Menu composed pattern: a `DsUserCard` header identifying the signed-in user, a list of account actions, and a full-width logout action pinned in a sticky `Actions align="stretch"` slot. User Menu is not a component — it is this composition of `DsUserCard`, `DsDropdownMenu.Item`s, and `DsDropdownMenu.Actions`.'}}},render:()=>{let e=k(),t=k(),n=k();return(0,O.jsxs)(s.Root,{positioning:{placement:`bottom-end`},children:[(0,O.jsx)(s.Trigger,{asChild:!0,children:(0,O.jsx)(y,{design:`v1.2`,buttonType:`secondary`,children:(0,O.jsx)(c,{name:`Mockup Developer`,size:`sm`})})}),(0,O.jsxs)(s.Content,{children:[(0,O.jsx)(w,{name:`Mockup Developer`,subtitle:`developer@mock.local`}),(0,O.jsxs)(s.Item,{value:`profile`,onSelect:e,children:[(0,O.jsx)(i,{icon:`person`}),(0,O.jsx)(`span`,{children:`Profile`})]}),(0,O.jsxs)(s.Item,{value:`settings`,onSelect:t,children:[(0,O.jsx)(i,{icon:`settings`}),(0,O.jsx)(`span`,{children:`Settings`})]}),(0,O.jsx)(s.Actions,{align:`stretch`,children:(0,O.jsxs)(s.Item,{value:`logout`,onSelect:n,children:[(0,O.jsx)(i,{icon:`logout`}),(0,O.jsx)(`span`,{children:`Log out`})]})})]})]})}},L={parameters:{docs:{description:{story:`Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions.`}}},render:()=>{let e=k(),t=k(),n=k(),r=k(),a=k(),o=k();return(0,O.jsxs)(s.Root,{children:[(0,O.jsx)(s.Trigger,{asChild:!0,children:(0,O.jsx)(y,{design:`v1.2`,buttonType:`secondary`,children:(0,O.jsx)(i,{icon:`more_vert`})})}),(0,O.jsxs)(s.Content,{children:[(0,O.jsxs)(s.Item,{value:`edit`,onSelect:e,children:[(0,O.jsx)(i,{icon:`edit`}),(0,O.jsx)(`span`,{children:`Edit`})]}),(0,O.jsxs)(s.Item,{value:`duplicate`,onSelect:t,children:[(0,O.jsx)(i,{icon:`content_copy`}),(0,O.jsx)(`span`,{children:`Duplicate`})]}),(0,O.jsxs)(s.Root,{positioning:{placement:`right-start`},children:[(0,O.jsxs)(s.TriggerItem,{className:`action-menu-item`,children:[(0,O.jsx)(i,{icon:`share`}),(0,O.jsx)(`span`,{children:`Share`})]}),(0,O.jsxs)(s.Content,{children:[(0,O.jsxs)(s.Item,{value:`share-email`,onSelect:n,children:[(0,O.jsx)(i,{icon:`mail`}),(0,O.jsx)(`span`,{children:`Email`})]}),(0,O.jsxs)(s.Item,{value:`share-link`,onSelect:r,children:[(0,O.jsx)(i,{icon:`link`}),(0,O.jsx)(`span`,{children:`Copy Link`})]}),(0,O.jsxs)(s.Item,{value:`share-social`,onSelect:a,children:[(0,O.jsx)(i,{icon:`public`}),(0,O.jsx)(`span`,{children:`Social Media`})]})]})]}),(0,O.jsx)(s.Separator,{}),(0,O.jsxs)(s.Item,{value:`delete`,onSelect:o,className:`danger`,children:[(0,O.jsx)(i,{icon:`delete`}),(0,O.jsx)(`span`,{children:`Delete item`})]})]})]})}},R={name:`Nested Submenus (3 levels)`,parameters:{docs:{description:{story:'Submenus nest arbitrarily deep by nesting a `Root` + `TriggerItem` + `Content` inside a parent `Content`. Here a top-level "New" item opens a submenu whose "From Template" item opens a third-level submenu. Each nested `Root` needs its own `placement` (`right-start`) so the flyout opens beside its trigger.'}}},render:()=>{let e=k(),t=k(),n=k(),r=k(),a=k();return(0,O.jsxs)(s.Root,{children:[(0,O.jsxs)(s.Trigger,{className:`trigger`,children:[(0,O.jsx)(`span`,{children:`File`}),(0,O.jsx)(i,{icon:`arrow_drop_down`})]}),(0,O.jsxs)(s.Content,{children:[(0,O.jsxs)(s.Root,{positioning:{placement:`right-start`},children:[(0,O.jsxs)(s.TriggerItem,{className:`action-menu-item`,children:[(0,O.jsx)(i,{icon:`note_add`}),(0,O.jsx)(`span`,{children:`New`})]}),(0,O.jsxs)(s.Content,{children:[(0,O.jsxs)(s.Item,{value:`blank`,onSelect:e,children:[(0,O.jsx)(i,{icon:`description`}),(0,O.jsx)(`span`,{children:`Blank Document`})]}),(0,O.jsxs)(s.Root,{positioning:{placement:`right-start`},children:[(0,O.jsxs)(s.TriggerItem,{className:`action-menu-item`,children:[(0,O.jsx)(i,{icon:`dashboard`}),(0,O.jsx)(`span`,{children:`From Template`})]}),(0,O.jsxs)(s.Content,{children:[(0,O.jsx)(s.Item,{value:`template-resume`,onSelect:t,children:(0,O.jsx)(`span`,{children:`Resume`})}),(0,O.jsx)(s.Item,{value:`template-invoice`,onSelect:n,children:(0,O.jsx)(`span`,{children:`Invoice`})}),(0,O.jsx)(s.Item,{value:`template-letter`,onSelect:r,children:(0,O.jsx)(`span`,{children:`Letter`})})]})]})]})]}),(0,O.jsxs)(s.Item,{value:`open`,onSelect:a,children:[(0,O.jsx)(i,{icon:`folder_open`}),(0,O.jsx)(`span`,{children:`Open…`})]})]})]})}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups.'
      }
    }
  },
  render: () => {
    const handleEdit = fn();
    const handleDuplicate = fn();
    const handleShare = fn();
    const handleDelete = fn();
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Selectable List with Search',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator.'
      },
      source: {
        type: 'code'
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Checkbox List with Groups',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons.'
      },
      source: {
        type: 'code'
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
    }, {
      id: 'item-error',
      label: 'Error item',
      description: 'Something went wrong',
      variant: 'error' as const
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
    const handleApply = fn();
    const handleCancel = () => {
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
                    {filteredItems.map(item => {
          const isError = 'variant' in item && item.variant === 'error';
          return <DsDropdownMenu.Item key={item.id} value={item.id} variant={isError ? 'error' : undefined}>
                                {isError ? <DsIcon icon="search" size="tiny" /> : <DsCheckbox tabIndex={-1} checked={selected.has(item.id)} onCheckedChange={() => toggleSelection(item.id)} />}
                                <DsStack direction="column" gap="var(--3xs)">
                                    <DsTypography className="item-label" variant="body-sm-reg" color={isError ? 'error' : undefined}>
                                        {item.label}
                                    </DsTypography>
                                    <DsTypography className="item-description" variant="body-xs-reg" color={isError ? 'error' : undefined}>
                                        {item.description}
                                    </DsTypography>
                                </DsStack>
                            </DsDropdownMenu.Item>;
        })}
                    {!!filteredGroupedItems.length && <DsDropdownMenu.ItemGroup>
                            <DsDropdownMenu.ItemGroupLabel>Group Name</DsDropdownMenu.ItemGroupLabel>
                            <DsDropdownMenu.ItemGroupContent>
                                {filteredGroupedItems.map(item => <DsDropdownMenu.Item key={item.id} value={item.id}>
                                        <DsCheckbox tabIndex={-1} checked={selected.has(item.id)} onCheckedChange={() => toggleSelection(item.id)} />
                                        <DsStack direction="column" gap="var(--3xs)">
                                            <DsTypography className="item-label" variant="body-sm-reg">
                                                {item.label}
                                            </DsTypography>
                                            <DsTypography className="item-description" variant="body-xs-reg">
                                                {item.description}
                                            </DsTypography>
                                        </DsStack>
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Collapsible Group (Controlled)',
  parameters: {
    docs: {
      description: {
        story: 'The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label.'
      },
      source: {
        type: 'code'
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Radio List with Actions',
  parameters: {
    docs: {
      description: {
        story: 'Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items.'
      },
      source: {
        type: 'code'
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
    };
    const handleCancel = () => {
      setOpen(false);
      setSearch('');
    };
    const handleReset = () => {
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
                                <DsStack direction="column" gap="var(--3xs)">
                                    <DsTypography className="item-label" variant="body-sm-reg">
                                        {option.label}
                                    </DsTypography>
                                    <DsTypography className="item-description" variant="body-xs-reg">
                                        {option.description}
                                    </DsTypography>
                                </DsStack>
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'The User Menu composed pattern: a \`DsUserCard\` header identifying the signed-in user, a list of account actions, and a full-width logout action pinned in a sticky \`Actions align="stretch"\` slot. User Menu is not a component — it is this composition of \`DsUserCard\`, \`DsDropdownMenu.Item\`s, and \`DsDropdownMenu.Actions\`.'
      }
    }
  },
  render: () => {
    const handleProfile = fn();
    const handleSettings = fn();
    const handleLogout = fn();
    return <DsDropdownMenu.Root positioning={{
      placement: 'bottom-end'
    }}>
                <DsDropdownMenu.Trigger asChild>
                    <DsButton design="v1.2" buttonType="secondary">
                        <DsAvatar name="Mockup Developer" size="sm" />
                    </DsButton>
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsUserCard name="Mockup Developer" subtitle="developer@mock.local" />
                    <DsDropdownMenu.Item value="profile" onSelect={handleProfile}>
                        <DsIcon icon="person" />
                        <span>Profile</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Item value="settings" onSelect={handleSettings}>
                        <DsIcon icon="settings" />
                        <span>Settings</span>
                    </DsDropdownMenu.Item>
                    <DsDropdownMenu.Actions align="stretch">
                        <DsDropdownMenu.Item value="logout" onSelect={handleLogout}>
                            <DsIcon icon="logout" />
                            <span>Log out</span>
                        </DsDropdownMenu.Item>
                    </DsDropdownMenu.Actions>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      description: {
        story: 'Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions.'
      }
    }
  },
  render: () => {
    const handleEdit = fn();
    const handleDuplicate = fn();
    const handleShareEmail = fn();
    const handleShareLink = fn();
    const handleShareSocial = fn();
    const handleDelete = fn();
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Nested Submenus (3 levels)',
  parameters: {
    docs: {
      description: {
        story: 'Submenus nest arbitrarily deep by nesting a \`Root\` + \`TriggerItem\` + \`Content\` inside a parent \`Content\`. Here a top-level "New" item opens a submenu whose "From Template" item opens a third-level submenu. Each nested \`Root\` needs its own \`placement\` (\`right-start\`) so the flyout opens beside its trigger.'
      }
    }
  },
  render: () => {
    const handleBlank = fn();
    const handleResume = fn();
    const handleInvoice = fn();
    const handleLetter = fn();
    const handleOpen = fn();
    return <DsDropdownMenu.Root>
                <DsDropdownMenu.Trigger className="trigger">
                    <span>File</span>
                    <DsIcon icon="arrow_drop_down" />
                </DsDropdownMenu.Trigger>
                <DsDropdownMenu.Content>
                    <DsDropdownMenu.Root positioning={{
          placement: 'right-start'
        }}>
                        <DsDropdownMenu.TriggerItem className="action-menu-item">
                            <DsIcon icon="note_add" />
                            <span>New</span>
                        </DsDropdownMenu.TriggerItem>
                        <DsDropdownMenu.Content>
                            <DsDropdownMenu.Item value="blank" onSelect={handleBlank}>
                                <DsIcon icon="description" />
                                <span>Blank Document</span>
                            </DsDropdownMenu.Item>
                            <DsDropdownMenu.Root positioning={{
              placement: 'right-start'
            }}>
                                <DsDropdownMenu.TriggerItem className="action-menu-item">
                                    <DsIcon icon="dashboard" />
                                    <span>From Template</span>
                                </DsDropdownMenu.TriggerItem>
                                <DsDropdownMenu.Content>
                                    <DsDropdownMenu.Item value="template-resume" onSelect={handleResume}>
                                        <span>Resume</span>
                                    </DsDropdownMenu.Item>
                                    <DsDropdownMenu.Item value="template-invoice" onSelect={handleInvoice}>
                                        <span>Invoice</span>
                                    </DsDropdownMenu.Item>
                                    <DsDropdownMenu.Item value="template-letter" onSelect={handleLetter}>
                                        <span>Letter</span>
                                    </DsDropdownMenu.Item>
                                </DsDropdownMenu.Content>
                            </DsDropdownMenu.Root>
                        </DsDropdownMenu.Content>
                    </DsDropdownMenu.Root>
                    <DsDropdownMenu.Item value="open" onSelect={handleOpen}>
                        <DsIcon icon="folder_open" />
                        <span>Open…</span>
                    </DsDropdownMenu.Item>
                </DsDropdownMenu.Content>
            </DsDropdownMenu.Root>;
  }
}`,...R.parameters?.docs?.source}}},z=[`Default`,`SelectableList`,`CheckboxList`,`CollapsibleGroupControlled`,`RadioList`,`UserMenu`,`ActionMenu`,`NestedSubmenus`]}))();export{L as ActionMenu,N as CheckboxList,P as CollapsibleGroupControlled,j as Default,R as NestedSubmenus,F as RadioList,M as SelectableList,I as UserMenu,z as __namedExportsOrder,A as default};