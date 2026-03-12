import{j as t}from"./jsx-runtime-u17CrQMm.js";import{D as r}from"./ds-filter-status-icon-D2MlT8qh.js";import"./index-Bm4Gdwiw.js";import"./iframe-ByIveL06.js";import"./preload-helper-PPVm8Dsz.js";import"./ds-icon-DbCKjb5T.js";const l=["running","warning","failed","paused"],T="_storiesContainer_4aby2_1",w="_row_4aby2_8",b="_label_4aby2_15",h="_cell_4aby2_22",n={storiesContainer:T,row:w,label:b,cell:h},{expect:a,within:u}=__STORYBOOK_MODULE_TEST__,L={title:"Design System/FilterStatusIcon",component:r,parameters:{layout:"centered"},argTypes:{status:{control:"select",options:l,description:"The filter status type"},active:{control:"boolean",description:"Whether the status icon is active or non-active"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Inline styles to apply to the component"}}},c={args:{status:"running",active:!0},play:async({canvasElement:e})=>{const i=u(e).getByLabelText(/running status/i);await a(i).toBeInTheDocument(),await a(i).toHaveAccessibleName("running status")}},o={render:()=>t.jsxs("div",{className:n.storiesContainer,children:[t.jsxs("div",{className:n.row,children:[t.jsx("div",{className:n.label}),l.map(e=>t.jsx("div",{className:n.label,children:e},e))]}),t.jsxs("div",{className:n.row,children:[t.jsx("div",{className:n.label,children:"active"}),l.map(e=>t.jsx("div",{className:n.cell,children:t.jsx(r,{status:e,active:!0})},`active-${e}`))]}),t.jsxs("div",{className:n.row,children:[t.jsx("div",{className:n.label,children:"non-active"}),l.map(e=>t.jsx("div",{className:n.cell,children:t.jsx(r,{status:e,active:!1})},`inactive-${e}`))]})]}),play:async({canvasElement:e})=>{const s=u(e),i=s.getByLabelText("running status");await a(i).toBeInTheDocument();const v=s.getByLabelText("warning status");await a(v).toBeInTheDocument();const d=s.getByLabelText("failed status");await a(d).toBeInTheDocument();const m=s.getByLabelText("paused status");await a(m).toBeInTheDocument();const p=s.getByLabelText("running status (inactive)");await a(p).toBeInTheDocument();const g=s.getByLabelText("warning status (inactive)");await a(g).toBeInTheDocument();const y=s.getByLabelText("failed status (inactive)");await a(y).toBeInTheDocument();const x=s.getByLabelText("paused status (inactive)");await a(x).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    status: 'running',
    active: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const icon = canvas.getByLabelText(/running status/i);
    await expect(icon).toBeInTheDocument();
    await expect(icon).toHaveAccessibleName('running status');
  }
}`,...c.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    return <div className={styles.storiesContainer}>
                <div className={styles.row}>
                    <div className={styles.label}></div>
                    {filterStatuses.map(status => <div key={status} className={styles.label}>
                            {status}
                        </div>)}
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>active</div>
                    {filterStatuses.map(status => <div key={\`active-\${status}\`} className={styles.cell}>
                            <DsFilterStatusIcon status={status} active />
                        </div>)}
                </div>

                <div className={styles.row}>
                    <div className={styles.label}>non-active</div>
                    {filterStatuses.map(status => <div key={\`inactive-\${status}\`} className={styles.cell}>
                            <DsFilterStatusIcon status={status} active={false} />
                        </div>)}
                </div>
            </div>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Check active icons
    const runningIcon = canvas.getByLabelText('running status');
    await expect(runningIcon).toBeInTheDocument();
    const warningIcon = canvas.getByLabelText('warning status');
    await expect(warningIcon).toBeInTheDocument();
    const failedIcon = canvas.getByLabelText('failed status');
    await expect(failedIcon).toBeInTheDocument();
    const pausedIcon = canvas.getByLabelText('paused status');
    await expect(pausedIcon).toBeInTheDocument();

    // Check inactive icons
    const inactiveRunning = canvas.getByLabelText('running status (inactive)');
    await expect(inactiveRunning).toBeInTheDocument();
    const inactiveWarning = canvas.getByLabelText('warning status (inactive)');
    await expect(inactiveWarning).toBeInTheDocument();
    const inactiveFailed = canvas.getByLabelText('failed status (inactive)');
    await expect(inactiveFailed).toBeInTheDocument();
    const inactivePaused = canvas.getByLabelText('paused status (inactive)');
    await expect(inactivePaused).toBeInTheDocument();
  }
}`,...o.parameters?.docs?.source}}};const j=["Default","All"];export{o as All,c as Default,j as __namedExportsOrder,L as default};
