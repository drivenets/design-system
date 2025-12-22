import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as a}from"./ds-status-badge-BdSC__Zd.js";import"./index-IbZmGGSG.js";import"./iframe-ubSz-hKO.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-icon-Bi5M0pkR.js";import"./ds-typography-KxBoJcPM.js";import"./index-Cm84ltz4.js";import"./index-BYp9-QE7.js";const n=["active","running","pending","draft","inactive","warning","failed"],r=["medium","small"],d="_storiesContainer_15qm0_1",m="_storiesRow_15qm0_7",u="_sectionTitle_15qm0_12",v="_storiesList_15qm0_17",e={storiesContainer:d,storiesRow:m,sectionTitle:u,storiesList:v},{expect:p,within:h}=__STORYBOOK_MODULE_TEST__,w={title:"Design System/StatusBadge",component:a,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{icon:{control:"text",description:"Icon to display in the badge"},status:{control:"select",options:n,description:"Status type of the badge"},label:{control:"text",description:"Optional label to display instead of the default status text"},ghost:{control:"boolean",description:"Whether the badge should use ghost style (light background)"},size:{control:"select",options:r,description:"Size of the status badge"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Inline styles to apply to the component"}}},o={args:{icon:"check_circle",status:"active"},play:async({canvasElement:i})=>{const l=h(i).getByText("active");await p(l).toBeTruthy()}},c={render:()=>{const i={active:"check_circle",running:"change_circle",pending:"pause_circle",draft:"stylus_note",inactive:"stop_circle",warning:"warning",failed:"cancel"};return s.jsxs("div",{className:e.storiesContainer,children:[s.jsxs("div",{className:e.storiesRow,children:[s.jsxs("div",{className:e.storiesSection,children:[s.jsx("div",{className:e.sectionTitle,children:"Filled"}),s.jsx("div",{className:e.storiesList,children:n.map(t=>s.jsx(a,{icon:i[t],status:t},`filled-24-${t}`))})]}),s.jsxs("div",{className:e.storiesSection,children:[s.jsx("div",{className:e.sectionTitle,children:"Ghost"}),s.jsx("div",{className:e.storiesList,children:n.map(t=>s.jsx(a,{icon:i[t],status:t,ghost:!0},`ghost-24-${t}`))})]})]}),s.jsxs("div",{className:e.storiesRow,children:[s.jsxs("div",{className:e.storiesSection,children:[s.jsx("div",{className:e.sectionTitle,children:"Filled - Small"}),s.jsx("div",{className:e.storiesList,children:n.map(t=>s.jsx(a,{icon:i[t],status:t,size:"small"},`filled-20-${t}`))})]}),s.jsxs("div",{className:e.storiesSection,children:[s.jsx("div",{className:e.sectionTitle,children:"Ghost - Small"}),s.jsx("div",{className:e.storiesList,children:n.map(t=>s.jsx(a,{icon:i[t],status:t,ghost:!0,size:"small"},`ghost-20-${t}`))})]})]})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
                    <div className={styles.storiesSection}>
                        <div className={styles.sectionTitle}>Filled</div>
                        <div className={styles.storiesList}>
                            {dsStatuses.map(status => <DsStatusBadge key={\`filled-24-\${status}\`} icon={statuses[status]} status={status} />)}
                        </div>
                    </div>

                    {/* Ghost variants - Default */}
                    <div className={styles.storiesSection}>
                        <div className={styles.sectionTitle}>Ghost</div>
                        <div className={styles.storiesList}>
                            {dsStatuses.map(status => <DsStatusBadge key={\`ghost-24-\${status}\`} icon={statuses[status]} status={status} ghost={true} />)}
                        </div>
                    </div>
                </div>

                <div className={styles.storiesRow}>
                    {/* Filled variants - Small */}
                    <div className={styles.storiesSection}>
                        <div className={styles.sectionTitle}>Filled - Small</div>
                        <div className={styles.storiesList}>
                            {dsStatuses.map(status => <DsStatusBadge key={\`filled-20-\${status}\`} icon={statuses[status]} status={status} size="small" />)}
                        </div>
                    </div>

                    {/* Ghost variants - Small */}
                    <div className={styles.storiesSection}>
                        <div className={styles.sectionTitle}>Ghost - Small</div>
                        <div className={styles.storiesList}>
                            {dsStatuses.map(status => <DsStatusBadge key={\`ghost-20-\${status}\`} icon={statuses[status]} status={status} ghost={true} size="small" />)}
                        </div>
                    </div>
                </div>
            </div>;
  }
}`,...c.parameters?.docs?.source}}};const D=["Default","All"];export{c as All,o as Default,D as __namedExportsOrder,w as default};
