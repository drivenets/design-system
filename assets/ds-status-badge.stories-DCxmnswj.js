import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{n,t as r}from"./ds-status-badge-CMvp0Y1t.js";var i,a,o=e((()=>{i=[`active`,`running`,`pending`,`draft`,`inactive`,`warning`,`failed`],a=[`medium`,`small`]})),s,c,l,u,d,f=e((()=>{s=`_storiesContainer_13ll7_1`,c=`_storiesRow_13ll7_7`,l=`_sectionTitle_13ll7_12`,u=`_storiesList_13ll7_17`,d={storiesContainer:s,storiesRow:c,sectionTitle:l,storiesList:u}})),p,m,h,g,_,v,y;e((()=>{n(),o(),f(),p=t(),{expect:m,within:h}=__STORYBOOK_MODULE_TEST__,g={title:`Components/StatusBadge`,component:r,parameters:{layout:`centered`},argTypes:{icon:{control:`text`,description:`Icon to display in the badge`},status:{control:`select`,options:i,description:`Status type of the badge`},label:{control:`text`,description:`Optional label to display instead of the default status text`},ghost:{control:`boolean`,description:`Whether the badge should use ghost style (light background)`},size:{control:`select`,options:a,description:`Size of the status badge`},className:{control:`text`,description:`Additional CSS class names`},style:{control:`object`,description:`Inline styles to apply to the component`}}},_={args:{icon:`check_circle`,status:`active`},play:async({canvasElement:e})=>{await m(h(e).getByText(`active`)).toBeTruthy()}},v={render:()=>{let e={active:`check_circle`,running:`change_circle`,pending:`pause_circle`,draft:`stylus_note`,inactive:`stop_circle`,warning:`warning`,failed:`cancel`};return(0,p.jsxs)(`div`,{className:d.storiesContainer,children:[(0,p.jsxs)(`div`,{className:d.storiesRow,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:d.sectionTitle,children:`Filled`}),(0,p.jsx)(`div`,{className:d.storiesList,children:i.map(t=>(0,p.jsx)(r,{icon:e[t],status:t},`filled-24-${t}`))})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:d.sectionTitle,children:`Ghost`}),(0,p.jsx)(`div`,{className:d.storiesList,children:i.map(t=>(0,p.jsx)(r,{icon:e[t],status:t,ghost:!0},`ghost-24-${t}`))})]})]}),(0,p.jsxs)(`div`,{className:d.storiesRow,children:[(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:d.sectionTitle,children:`Filled - Small`}),(0,p.jsx)(`div`,{className:d.storiesList,children:i.map(t=>(0,p.jsx)(r,{icon:e[t],status:t,size:`small`},`filled-20-${t}`))})]}),(0,p.jsxs)(`div`,{children:[(0,p.jsx)(`div`,{className:d.sectionTitle,children:`Ghost - Small`}),(0,p.jsx)(`div`,{className:d.storiesList,children:i.map(t=>(0,p.jsx)(r,{icon:e[t],status:t,ghost:!0,size:`small`},`ghost-20-${t}`))})]})]})]})}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'check_circle',
    status: 'active'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Verify component renders correctly
    const component = canvas.getByText('active');
    await expect(component).toBeTruthy();
  }
}`,..._.parameters?.docs?.source}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const statuses: Record<DsStatus, IconType> = {
      active: 'check_circle',
      running: 'change_circle',
      pending: 'pause_circle',
      draft: 'stylus_note',
      inactive: 'stop_circle',
      warning: 'warning',
      failed: 'cancel'
    };
    return <div className={styles.storiesContainer}>
                <div className={styles.storiesRow}>
                    {/* Filled variants - Default */}
                    <div>
                        <div className={styles.sectionTitle}>Filled</div>
                        <div className={styles.storiesList}>
                            {dsStatuses.map(status => <DsStatusBadge key={\`filled-24-\${status}\`} icon={statuses[status]} status={status} />)}
                        </div>
                    </div>

                    {/* Ghost variants - Default */}
                    <div>
                        <div className={styles.sectionTitle}>Ghost</div>
                        <div className={styles.storiesList}>
                            {dsStatuses.map(status => <DsStatusBadge key={\`ghost-24-\${status}\`} icon={statuses[status]} status={status} ghost={true} />)}
                        </div>
                    </div>
                </div>

                <div className={styles.storiesRow}>
                    {/* Filled variants - Small */}
                    <div>
                        <div className={styles.sectionTitle}>Filled - Small</div>
                        <div className={styles.storiesList}>
                            {dsStatuses.map(status => <DsStatusBadge key={\`filled-20-\${status}\`} icon={statuses[status]} status={status} size="small" />)}
                        </div>
                    </div>

                    {/* Ghost variants - Small */}
                    <div>
                        <div className={styles.sectionTitle}>Ghost - Small</div>
                        <div className={styles.storiesList}>
                            {dsStatuses.map(status => <DsStatusBadge key={\`ghost-20-\${status}\`} icon={statuses[status]} status={status} ghost={true} size="small" />)}
                        </div>
                    </div>
                </div>
            </div>;
  }
}`,...v.parameters?.docs?.source}}},y=[`Default`,`All`]}))();export{v as All,_ as Default,y as __namedExportsOrder,g as default};