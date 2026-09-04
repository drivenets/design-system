import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-typography-BLoO5j9q.js";import{n as i,t as a}from"./ds-stack-GU0hZWeR.js";import{n as o,t as s}from"./ds-status-badge-Dkq1BIx-.js";var c,l,u=e((()=>{c=[`active`,`running`,`pending`,`draft`,`inactive`,`warning`,`failed`],l=[`medium`,`small`]})),d,f,p,m,h,g,_;e((()=>{s(),u(),i(),r(),d=t(),f={title:`Components/StatusBadge`,component:o,parameters:{layout:`centered`},argTypes:{icon:{control:`text`,description:`Icon to display in the badge`},status:{control:`select`,options:c,description:`Status type of the badge`},label:{control:`text`,description:`Optional label to display instead of the default status text`},ghost:{control:`boolean`,description:`Whether the badge should use ghost style (light background)`},size:{control:`select`,options:l,description:`Size of the status badge`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},p={args:{icon:`check_circle`,status:`active`}},m={args:{icon:`check_circle`,status:`active`,ghost:!0}},h={args:{icon:`check_circle`,status:`active`,size:`small`}},g={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>{let e={active:`check_circle`,running:`change_circle`,pending:`pause_circle`,draft:`stylus_note`,inactive:`stop_circle`,warning:`warning`,failed:`cancel`};return(0,d.jsxs)(a,{direction:`column`,gap:`var(--xl)`,children:[(0,d.jsxs)(a,{direction:`row`,gap:`var(--3xl)`,children:[(0,d.jsxs)(a,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Filled`}),(0,d.jsx)(a,{direction:`column`,gap:`var(--xs)`,alignItems:`flex-start`,children:c.map(t=>(0,d.jsx)(o,{icon:e[t],status:t},`filled-${t}`))})]}),(0,d.jsxs)(a,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Ghost`}),(0,d.jsx)(a,{direction:`column`,gap:`var(--xs)`,alignItems:`flex-start`,children:c.map(t=>(0,d.jsx)(o,{icon:e[t],status:t,ghost:!0},`ghost-${t}`))})]})]}),(0,d.jsxs)(a,{direction:`row`,gap:`var(--3xl)`,children:[(0,d.jsxs)(a,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Filled — Small`}),(0,d.jsx)(a,{direction:`column`,gap:`var(--xs)`,alignItems:`flex-start`,children:c.map(t=>(0,d.jsx)(o,{icon:e[t],status:t,size:`small`},`filled-small-${t}`))})]}),(0,d.jsxs)(a,{direction:`column`,gap:`var(--sm)`,children:[(0,d.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Ghost — Small`}),(0,d.jsx)(a,{direction:`column`,gap:`var(--xs)`,alignItems:`flex-start`,children:c.map(t=>(0,d.jsx)(o,{icon:e[t],status:t,ghost:!0,size:`small`},`ghost-small-${t}`))})]})]})]})}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'check_circle',
    status: 'active'
  }
}`,...p.parameters?.docs?.source},description:{story:`Standard filled badge — pair a status with a matching icon.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'check_circle',
    status: 'active',
    ghost: true
  }
}`,...m.parameters?.docs?.source},description:{story:`Ghost style uses a light background for lower-emphasis contexts like dense tables.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'check_circle',
    status: 'active',
    size: 'small'
  }
}`,...h.parameters?.docs?.source},description:{story:`Small size for compact rows and tight layouts.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => {
    const iconForStatus: Record<DsStatus, IconType> = {
      active: 'check_circle',
      running: 'change_circle',
      pending: 'pause_circle',
      draft: 'stylus_note',
      inactive: 'stop_circle',
      warning: 'warning',
      failed: 'cancel'
    };
    return <DsStack direction="column" gap="var(--xl)">
                <DsStack direction="row" gap="var(--3xl)">
                    <DsStack direction="column" gap="var(--sm)">
                        <DsTypography variant="body-sm-md" color="secondary">
                            Filled
                        </DsTypography>
                        <DsStack direction="column" gap="var(--xs)" alignItems="flex-start">
                            {dsStatuses.map(status => <DsStatusBadge key={\`filled-\${status}\`} icon={iconForStatus[status]} status={status} />)}
                        </DsStack>
                    </DsStack>

                    <DsStack direction="column" gap="var(--sm)">
                        <DsTypography variant="body-sm-md" color="secondary">
                            Ghost
                        </DsTypography>
                        <DsStack direction="column" gap="var(--xs)" alignItems="flex-start">
                            {dsStatuses.map(status => <DsStatusBadge key={\`ghost-\${status}\`} icon={iconForStatus[status]} status={status} ghost />)}
                        </DsStack>
                    </DsStack>
                </DsStack>

                <DsStack direction="row" gap="var(--3xl)">
                    <DsStack direction="column" gap="var(--sm)">
                        <DsTypography variant="body-sm-md" color="secondary">
                            Filled — Small
                        </DsTypography>
                        <DsStack direction="column" gap="var(--xs)" alignItems="flex-start">
                            {dsStatuses.map(status => <DsStatusBadge key={\`filled-small-\${status}\`} icon={iconForStatus[status]} status={status} size="small" />)}
                        </DsStack>
                    </DsStack>

                    <DsStack direction="column" gap="var(--sm)">
                        <DsTypography variant="body-sm-md" color="secondary">
                            Ghost — Small
                        </DsTypography>
                        <DsStack direction="column" gap="var(--xs)" alignItems="flex-start">
                            {dsStatuses.map(status => <DsStatusBadge key={\`ghost-small-\${status}\`} icon={iconForStatus[status]} status={status} ghost size="small" />)}
                        </DsStack>
                    </DsStack>
                </DsStack>
            </DsStack>;
  }
}`,...g.parameters?.docs?.source},description:{story:`Every status across filled/ghost styles and both sizes, for visual comparison.`,...g.parameters?.docs?.description}}},_=[`Default`,`Ghost`,`Small`,`All`]}))();export{g as All,p as Default,m as Ghost,h as Small,_ as __namedExportsOrder,f as default};