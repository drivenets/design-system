import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{n,t as r}from"./ds-typography-BLoO5j9q.js";import{n as i,t as a}from"./ds-stack-GU0hZWeR.js";import{n as o,t as s}from"./ds-filter-status-icon-CJdlKvYk.js";var c,l=e((()=>{c=[`running`,`warning`,`failed`,`paused`]})),u,d,f,p,m;e((()=>{o(),l(),i(),r(),u=t(),d={title:`Components/FilterStatusIcon`,component:s,parameters:{layout:`centered`},argTypes:{status:{control:`select`,options:c,description:`The filter status type`},active:{control:`boolean`,description:`Whether the status icon is active or non-active`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},f={args:{status:`running`,active:!0}},p={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,u.jsxs)(a,{direction:`column`,gap:`var(--xl)`,children:[(0,u.jsxs)(a,{direction:`column`,gap:`var(--sm)`,children:[(0,u.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Active`}),(0,u.jsx)(a,{direction:`row`,gap:`var(--lg)`,alignItems:`center`,children:c.map(e=>(0,u.jsxs)(a,{direction:`column`,gap:`var(--2xs)`,alignItems:`center`,children:[(0,u.jsx)(s,{status:e,active:!0}),(0,u.jsx)(n,{variant:`body-sm-reg`,color:`secondary`,children:e})]},`active-${e}`))})]}),(0,u.jsxs)(a,{direction:`column`,gap:`var(--sm)`,children:[(0,u.jsx)(n,{variant:`body-sm-md`,color:`secondary`,children:`Non-active`}),(0,u.jsx)(a,{direction:`row`,gap:`var(--lg)`,alignItems:`center`,children:c.map(e=>(0,u.jsxs)(a,{direction:`column`,gap:`var(--2xs)`,alignItems:`center`,children:[(0,u.jsx)(s,{status:e,active:!1}),(0,u.jsx)(n,{variant:`body-sm-reg`,color:`secondary`,children:e})]},`inactive-${e}`))})]})]})},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'running',
    active: true
  }
}`,...f.parameters?.docs?.source},description:{story:`Active running status icon — the default state for a toggled-on filter button.`,...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--xl)">
            <DsStack direction="column" gap="var(--sm)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Active
                </DsTypography>
                <DsStack direction="row" gap="var(--lg)" alignItems="center">
                    {filterStatuses.map(status => <DsStack key={\`active-\${status}\`} direction="column" gap="var(--2xs)" alignItems="center">
                            <DsFilterStatusIcon status={status} active />
                            <DsTypography variant="body-sm-reg" color="secondary">
                                {status}
                            </DsTypography>
                        </DsStack>)}
                </DsStack>
            </DsStack>

            <DsStack direction="column" gap="var(--sm)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Non-active
                </DsTypography>
                <DsStack direction="row" gap="var(--lg)" alignItems="center">
                    {filterStatuses.map(status => <DsStack key={\`inactive-\${status}\`} direction="column" gap="var(--2xs)" alignItems="center">
                            <DsFilterStatusIcon status={status} active={false} />
                            <DsTypography variant="body-sm-reg" color="secondary">
                                {status}
                            </DsTypography>
                        </DsStack>)}
                </DsStack>
            </DsStack>
        </DsStack>
}`,...p.parameters?.docs?.source},description:{story:`Every status in both active and non-active states, side by side for comparison.`,...p.parameters?.docs?.description}}},m=[`Default`,`All`]}))();export{p as All,f as Default,m as __namedExportsOrder,d as default};