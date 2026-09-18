import{n as e}from"./rolldown-runtime-DkW27tQK.js";import{t}from"./react-BZJXY1be.js";import{n}from"./iframe-DVysNJuQ.js";import{n as r,t as i}from"./ds-icon-xtF7601f.js";import{r as a,t as o}from"./ds-dropdown-menu-DqiG9ImT.js";import{t as s}from"./ds-avatar-DHpdTmWB.js";import{n as c,t as l}from"./ds-checkbox-KvF2uEwN.js";import{t as u}from"./ds-radio-group-CQEtqm9w.js";import{n as d,t as f}from"./ds-typography-Cu_YN1U3.js";import{n as p,t as m}from"./ds-stack-Dy-M5AZb.js";import{t as h}from"./ds-avatar-T4XwrXRQ.js";import{t as g}from"./ds-text-input-Ba6t-N2F.js";import{t as _}from"./ds-text-input-mBw2SaEb.js";import{n as v,t as y}from"./ds-button-3OTm06qP.js";import"./ds-dropdown-menu.stories-CNSs1cEV.js";import{t as b}from"./ds-radio-group-BGH4FgSL.js";import{n as x,t as S}from"./ds-user-card-BWbRt9oM.js";function C(){return(C=e((()=>{x()})))()}var w,T,E,D,O,k,A,j,M,N,P,F,I;function L(){return(L=e((()=>{w=t(),a(),i(),_(),l(),f(),p(),y(),b(),C(),h(),T=n(),{fn:E}=__STORYBOOK_MODULE_TEST__,D={title:`Components/DropdownMenu`,component:o.Root,parameters:{layout:`centered`}},O={parameters:{docs:{description:{story:`A basic dropdown menu with action items. Each item can have an icon and onSelect handler. Items can be disabled. Use separators to divide different action groups.`}}},render:()=>{let e=E(),t=E(),n=E(),i=E();return(0,T.jsxs)(o.Root,{children:[(0,T.jsxs)(o.Trigger,{className:`trigger`,children:[(0,T.jsx)(`span`,{children:`Actions`}),(0,T.jsx)(r,{icon:`more_vert`})]}),(0,T.jsxs)(o.Content,{children:[(0,T.jsxs)(o.Item,{value:`edit`,onSelect:e,children:[(0,T.jsx)(r,{icon:`edit`}),(0,T.jsx)(`span`,{children:`Edit`})]}),(0,T.jsxs)(o.Item,{value:`duplicate`,onSelect:t,children:[(0,T.jsx)(r,{icon:`content_copy`}),(0,T.jsx)(`span`,{children:`Duplicate`})]}),(0,T.jsxs)(o.Item,{value:`share`,onSelect:n,children:[(0,T.jsx)(r,{icon:`share`}),(0,T.jsx)(`span`,{children:`Share`})]}),(0,T.jsx)(o.Separator,{}),(0,T.jsxs)(o.Item,{value:`delete`,onSelect:i,className:`danger`,children:[(0,T.jsx)(r,{icon:`delete`}),(0,T.jsx)(`span`,{children:`Delete`})]}),(0,T.jsxs)(o.Item,{value:`disabled`,disabled:!0,children:[(0,T.jsx)(r,{icon:`block`}),(0,T.jsx)(`span`,{children:`Disabled Option`})]})]})]})}},k={name:`Selectable List with Search`,parameters:{docs:{description:{story:`Dropdown with search functionality and selection tracking. Users can filter items and see which item is selected with a check indicator.`},source:{type:`code`}}},render:function(){let[e,t]=(0,w.useState)(``),[n,i]=(0,w.useState)(`option1`),a=[{value:`option1`,label:`Option 1`},{value:`option2`,label:`Option 2`},{value:`option3`,label:`Option 3`},{value:`option4`,label:`Option 4`}],s=a.find(e=>e.value===n)?.label,c=a.filter(t=>t.label.toLowerCase().includes(e.toLowerCase()));return(0,T.jsxs)(o.Root,{onSelect:i,positioning:{sameWidth:!0},children:[(0,T.jsxs)(o.Trigger,{className:`trigger fixedWidth`,children:[(0,T.jsx)(`span`,{children:s||`Select an option`}),(0,T.jsx)(r,{icon:`arrow_drop_down`})]}),(0,T.jsxs)(o.Content,{children:[(0,T.jsx)(o.Header,{children:(0,T.jsx)(g,{placeholder:`Search`,value:e,onValueChange:t,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,T.jsx)(r,{icon:`search`,size:`tiny`})}})}),c.map(e=>(0,T.jsxs)(o.Item,{value:e.value,selected:n===e.value,children:[e.label,n===e.value&&(0,T.jsx)(o.ItemIndicator,{})]},e.value))]})]})}},A={name:`Checkbox List with Groups`,parameters:{docs:{description:{story:`Dropdown with checkbox items in collapsible groups. Uses DsCheckbox component for each item. Includes search and action buttons.`},source:{type:`code`}}},render:function(){let[e,t]=(0,w.useState)(!1),[n,i]=(0,w.useState)(``),[a,s]=(0,w.useState)(new Set([`item1`])),l=[{id:`item1`,label:`Menu text 1`,description:`Info Text`},{id:`item2`,label:`Menu text 2`,description:`Info Text`},{id:`item-error`,label:`Error item`,description:`Something went wrong`,variant:`error`}],u=[{id:`item3`,label:`Menu text 3`,description:`Info Text`},{id:`item4`,label:`Menu text 4`,description:`Info Text`},{id:`item5`,label:`Menu text 5`,description:`Info Text`},{id:`item6`,label:`Menu text 6`,description:`Info Text`},{id:`item7`,label:`Menu text 7`,description:`Info Text`}],f=l.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())),p=u.filter(e=>e.label.toLowerCase().includes(n.toLowerCase())),h=e=>{let t=new Set(a);t.has(e)?t.delete(e):t.add(e),s(t)},_=E();return(0,T.jsxs)(o.Root,{open:e,onOpenChange:t,onSelect:h,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[(0,T.jsxs)(o.Trigger,{className:`trigger fixedWidth`,children:[(0,T.jsxs)(`span`,{children:[`Multi Select (`,a.size,`)`]}),(0,T.jsx)(r,{icon:`arrow_drop_down`})]}),(0,T.jsxs)(o.Content,{children:[(0,T.jsx)(o.Header,{children:(0,T.jsx)(g,{placeholder:`Search`,value:n,onValueChange:i,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,T.jsx)(r,{icon:`search`,size:`tiny`})}})}),f.map(e=>{let t=`variant`in e&&e.variant===`error`;return(0,T.jsxs)(o.Item,{value:e.id,variant:t?`error`:void 0,children:[t?(0,T.jsx)(r,{icon:`search`,size:`tiny`}):(0,T.jsx)(c,{tabIndex:-1,checked:a.has(e.id),onCheckedChange:()=>h(e.id)}),(0,T.jsxs)(m,{direction:`column`,gap:`var(--3xs)`,children:[(0,T.jsx)(d,{className:`item-label`,variant:`body-sm-reg`,color:t?`error`:void 0,children:e.label}),(0,T.jsx)(d,{className:`item-description`,variant:`body-xs-reg`,color:t?`error`:void 0,children:e.description})]})]},e.id)}),!!p.length&&(0,T.jsxs)(o.ItemGroup,{children:[(0,T.jsx)(o.ItemGroupLabel,{children:`Group Name`}),(0,T.jsx)(o.ItemGroupContent,{children:p.map(e=>(0,T.jsxs)(o.Item,{value:e.id,children:[(0,T.jsx)(c,{tabIndex:-1,checked:a.has(e.id),onCheckedChange:()=>h(e.id)}),(0,T.jsxs)(m,{direction:`column`,gap:`var(--3xs)`,children:[(0,T.jsx)(d,{className:`item-label`,variant:`body-sm-reg`,children:e.label}),(0,T.jsx)(d,{className:`item-description`,variant:`body-xs-reg`,children:e.description})]})]},e.id))})]}),(0,T.jsxs)(o.Actions,{children:[(0,T.jsx)(v,{design:`v1.2`,buttonType:`secondary`,size:`small`,onClick:()=>{t(!1),i(``)},children:`Cancel`}),(0,T.jsx)(v,{design:`v1.2`,buttonType:`primary`,size:`small`,onClick:_,children:`Apply`})]})]})]})}},j={name:`Collapsible Group (Controlled)`,parameters:{docs:{description:{story:`The collapsed state is controlled externally via props, and the onCollapsedChange callback is triggered when the user clicks the group label.`},source:{type:`code`}}},render:function(e){let[t,n]=(0,w.useState)(!1);return(0,T.jsxs)(o.Root,{positioning:{sameWidth:!0},children:[(0,T.jsxs)(o.Trigger,{className:`trigger fixedWidth`,children:[(0,T.jsx)(`span`,{children:`Controlled Group`}),(0,T.jsx)(r,{icon:`arrow_drop_down`})]}),(0,T.jsx)(o.Content,{children:(0,T.jsxs)(o.ItemGroup,{collapsed:t,onCollapsedChange:t=>{n(t),e.onCollapsedChange?.(t)},children:[(0,T.jsx)(o.ItemGroupLabel,{children:`Settings`}),(0,T.jsxs)(o.ItemGroupContent,{children:[(0,T.jsxs)(o.Item,{value:`profile`,children:[(0,T.jsx)(r,{icon:`person`}),(0,T.jsx)(`span`,{children:`Profile`})]}),(0,T.jsxs)(o.Item,{value:`preferences`,children:[(0,T.jsx)(r,{icon:`settings`}),(0,T.jsx)(`span`,{children:`Preferences`})]}),(0,T.jsxs)(o.Item,{value:`notifications`,children:[(0,T.jsx)(r,{icon:`notifications`}),(0,T.jsx)(`span`,{children:`Notifications`})]})]})]})})]})},args:{onCollapsedChange:E()}},M={name:`Radio List with Actions`,parameters:{docs:{description:{story:`Dropdown with radio items using DsRadioGroup. Single selection with search and action buttons. Blue background for selected items.`},source:{type:`code`}}},render:function(){let[e,t]=(0,w.useState)(!1),[n,i]=(0,w.useState)(``),[a,s]=(0,w.useState)(null),c=[{value:`option1`,label:`Menu text 1`,description:`Info Text`},{value:`option2`,label:`Menu text 2`,description:`Info Text`},{value:`option3`,label:`Menu text 3`,description:`Info Text`},{value:`option4`,label:`Menu text 4`,description:`Info Text`}].filter(e=>e.label.toLowerCase().includes(n.toLowerCase()));return(0,T.jsxs)(o.Root,{open:e,onOpenChange:t,onSelect:s,positioning:{sameWidth:!0},preventCloseOnSelect:!0,children:[(0,T.jsxs)(o.Trigger,{className:`trigger fixedWidth`,children:[(0,T.jsx)(`span`,{children:a||`Select an option`}),(0,T.jsx)(r,{icon:`arrow_drop_down`})]}),(0,T.jsxs)(o.Content,{children:[(0,T.jsx)(o.Header,{children:(0,T.jsx)(g,{placeholder:`Search`,value:n,onValueChange:i,onKeyDown:e=>e.stopPropagation(),slots:{startAdornment:(0,T.jsx)(r,{icon:`search`,size:`tiny`})}})}),(0,T.jsx)(u.Root,{className:`radio-group`,value:a,onValueChange:s,children:c.map(e=>(0,T.jsxs)(o.Item,{value:e.value,className:a===e.value?`radio-selected`:``,children:[(0,T.jsx)(u.Item,{value:e.value}),(0,T.jsxs)(m,{direction:`column`,gap:`var(--3xs)`,children:[(0,T.jsx)(d,{className:`item-label`,variant:`body-sm-reg`,children:e.label}),(0,T.jsx)(d,{className:`item-description`,variant:`body-xs-reg`,children:e.description})]})]},e.value))}),(0,T.jsxs)(o.Actions,{children:[(0,T.jsx)(v,{design:`v1.2`,variant:`danger`,size:`small`,onClick:()=>{s(``),t(!1),i(``)},children:`Reset`}),(0,T.jsx)(v,{design:`v1.2`,buttonType:`secondary`,size:`small`,onClick:()=>{t(!1),i(``)},children:`Cancel`}),(0,T.jsx)(v,{design:`v1.2`,buttonType:`primary`,size:`small`,onClick:()=>{t(!1)},children:`Apply`})]})]})]})}},N={parameters:{docs:{description:{story:'The User Menu composed pattern: a `DsUserCard` header identifying the signed-in user, a list of account actions, and a full-width logout action pinned in a sticky `Actions align="stretch"` slot. User Menu is not a component — it is this composition of `DsUserCard`, `DsDropdownMenu.Item`s, and `DsDropdownMenu.Actions`.'}}},render:()=>{let e=E(),t=E(),n=E();return(0,T.jsxs)(o.Root,{positioning:{placement:`bottom-end`},children:[(0,T.jsx)(o.Trigger,{asChild:!0,children:(0,T.jsx)(v,{design:`v1.2`,buttonType:`secondary`,children:(0,T.jsx)(s,{name:`Mockup Developer`,size:`sm`})})}),(0,T.jsxs)(o.Content,{children:[(0,T.jsx)(S,{name:`Mockup Developer`,subtitle:`developer@mock.local`}),(0,T.jsxs)(o.Item,{value:`profile`,onSelect:e,children:[(0,T.jsx)(r,{icon:`person`}),(0,T.jsx)(`span`,{children:`Profile`})]}),(0,T.jsxs)(o.Item,{value:`settings`,onSelect:t,children:[(0,T.jsx)(r,{icon:`settings`}),(0,T.jsx)(`span`,{children:`Settings`})]}),(0,T.jsx)(o.Actions,{align:`stretch`,children:(0,T.jsxs)(o.Item,{value:`logout`,onSelect:n,children:[(0,T.jsx)(r,{icon:`logout`}),(0,T.jsx)(`span`,{children:`Log out`})]})})]})]})}},P={parameters:{docs:{description:{story:`Action Menu pattern from Figma design system demonstrating nested submenus. Features both full-size button and icon button variants. Menu items can trigger submenus using TriggerItem with right arrow indicators. Includes separators and danger-styled items for risky actions.`}}},render:()=>{let e=E(),t=E(),n=E(),i=E(),a=E(),s=E();return(0,T.jsxs)(o.Root,{children:[(0,T.jsx)(o.Trigger,{asChild:!0,children:(0,T.jsx)(v,{design:`v1.2`,buttonType:`secondary`,children:(0,T.jsx)(r,{icon:`more_vert`})})}),(0,T.jsxs)(o.Content,{children:[(0,T.jsxs)(o.Item,{value:`edit`,onSelect:e,children:[(0,T.jsx)(r,{icon:`edit`}),(0,T.jsx)(`span`,{children:`Edit`})]}),(0,T.jsxs)(o.Item,{value:`duplicate`,onSelect:t,children:[(0,T.jsx)(r,{icon:`content_copy`}),(0,T.jsx)(`span`,{children:`Duplicate`})]}),(0,T.jsxs)(o.Root,{positioning:{placement:`right-start`},children:[(0,T.jsxs)(o.TriggerItem,{className:`action-menu-item`,children:[(0,T.jsx)(r,{icon:`share`}),(0,T.jsx)(`span`,{children:`Share`})]}),(0,T.jsxs)(o.Content,{children:[(0,T.jsxs)(o.Item,{value:`share-email`,onSelect:n,children:[(0,T.jsx)(r,{icon:`mail`}),(0,T.jsx)(`span`,{children:`Email`})]}),(0,T.jsxs)(o.Item,{value:`share-link`,onSelect:i,children:[(0,T.jsx)(r,{icon:`link`}),(0,T.jsx)(`span`,{children:`Copy Link`})]}),(0,T.jsxs)(o.Item,{value:`share-social`,onSelect:a,children:[(0,T.jsx)(r,{icon:`public`}),(0,T.jsx)(`span`,{children:`Social Media`})]})]})]}),(0,T.jsx)(o.Separator,{}),(0,T.jsxs)(o.Item,{value:`delete`,onSelect:s,className:`danger`,children:[(0,T.jsx)(r,{icon:`delete`}),(0,T.jsx)(`span`,{children:`Delete item`})]})]})]})}},F={name:`Nested Submenus (3 levels)`,parameters:{docs:{description:{story:'Submenus nest arbitrarily deep by nesting a `Root` + `TriggerItem` + `Content` inside a parent `Content`. Here a top-level "New" item opens a submenu whose "From Template" item opens a third-level submenu. Each nested `Root` needs its own `placement` (`right-start`) so the flyout opens beside its trigger.'}}},render:()=>{let e=E(),t=E(),n=E(),i=E(),a=E();return(0,T.jsxs)(o.Root,{children:[(0,T.jsxs)(o.Trigger,{className:`trigger`,children:[(0,T.jsx)(`span`,{children:`File`}),(0,T.jsx)(r,{icon:`arrow_drop_down`})]}),(0,T.jsxs)(o.Content,{children:[(0,T.jsxs)(o.Root,{positioning:{placement:`right-start`},children:[(0,T.jsxs)(o.TriggerItem,{className:`action-menu-item`,children:[(0,T.jsx)(r,{icon:`note_add`}),(0,T.jsx)(`span`,{children:`New`})]}),(0,T.jsxs)(o.Content,{children:[(0,T.jsxs)(o.Item,{value:`blank`,onSelect:e,children:[(0,T.jsx)(r,{icon:`description`}),(0,T.jsx)(`span`,{children:`Blank Document`})]}),(0,T.jsxs)(o.Root,{positioning:{placement:`right-start`},children:[(0,T.jsxs)(o.TriggerItem,{className:`action-menu-item`,children:[(0,T.jsx)(r,{icon:`dashboard`}),(0,T.jsx)(`span`,{children:`From Template`})]}),(0,T.jsxs)(o.Content,{children:[(0,T.jsx)(o.Item,{value:`template-resume`,onSelect:t,children:(0,T.jsx)(`span`,{children:`Resume`})}),(0,T.jsx)(o.Item,{value:`template-invoice`,onSelect:n,children:(0,T.jsx)(`span`,{children:`Invoice`})}),(0,T.jsx)(o.Item,{value:`template-letter`,onSelect:i,children:(0,T.jsx)(`span`,{children:`Letter`})})]})]})]})]}),(0,T.jsxs)(o.Item,{value:`open`,onSelect:a,children:[(0,T.jsx)(r,{icon:`folder_open`}),(0,T.jsx)(`span`,{children:`Open…`})]})]})]})}},I=[`Default`,`SelectableList`,`CheckboxList`,`CollapsibleGroupControlled`,`RadioList`,`UserMenu`,`ActionMenu`,`NestedSubmenus`],O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}},k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
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
}`,...k.parameters?.docs?.source}}},A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
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
}`,...A.parameters?.docs?.source}}},j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
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
}`,...j.parameters?.docs?.source}}},M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
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
}`,...M.parameters?.docs?.source}}},N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
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
}`,...N.parameters?.docs?.source}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}}})))()}L();export{P as ActionMenu,A as CheckboxList,j as CollapsibleGroupControlled,O as Default,F as NestedSubmenus,M as RadioList,k as SelectableList,N as UserMenu,I as __namedExportsOrder,D as default};