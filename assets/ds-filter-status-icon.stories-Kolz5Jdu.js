import{j as t}from"./jsx-runtime-u17CrQMm.js";import{c as T}from"./index-CBAFNLqb.js";import{D as b}from"./ds-icon-D1s4GG0V.js";import"./iframe-26JMa3UW.js";import"./preload-helper-PPVm8Dsz.js";const h="_running_gj3eg_1",f="_warning_gj3eg_5",I="_failed_gj3eg_9",B="_paused_gj3eg_13",_="_inactive_gj3eg_17",v={running:h,warning:f,failed:I,paused:B,inactive:_},D={running:"special-running",warning:"special-warning",failed:"special-failed",paused:"special-paused"},r=({status:e,active:n=!0,size:i="small",className:u,style:d})=>{const m=n?`${e} status`:`${e} status (inactive)`;return t.jsx(b,{className:T(n?v[e]:v.inactive,u),style:d,icon:D[e],size:i,"aria-label":m})};r.__docgenInfo={description:`Design system Filter Status Icon component
Status icons for toggle filter buttons to help users quickly distinguish states`,methods:[],displayName:"DsFilterStatusIcon",props:{status:{required:!0,tsType:{name:"unknown[number]",raw:"(typeof filterStatuses)[number]"},description:"The filter status type"},active:{required:!1,tsType:{name:"boolean"},description:`Whether the status icon is active or non-active
@default true`,defaultValue:{value:"true",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof iconSizes)[number]"},description:`Icon size
@default 'small'`,defaultValue:{value:"'small'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional styles to apply to the component"}}};const l=["running","warning","failed","paused"],N="_storiesContainer_4aby2_1",S="_row_4aby2_8",j="_label_4aby2_15",L="_cell_4aby2_22",a={storiesContainer:N,row:S,label:j,cell:L},{expect:s,within:p}=__STORYBOOK_MODULE_TEST__,$={title:"Design System/FilterStatusIcon",component:r,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{status:{control:"select",options:l,description:"The filter status type"},active:{control:"boolean",description:"Whether the status icon is active or non-active"},className:{control:"text",description:"Additional CSS class names"},style:{control:"object",description:"Inline styles to apply to the component"}}},c={args:{status:"running",active:!0},play:async({canvasElement:e})=>{const i=p(e).getByLabelText(/running status/i);await s(i).toBeInTheDocument(),await s(i).toHaveAccessibleName("running status")}},o={render:()=>t.jsxs("div",{className:a.storiesContainer,children:[t.jsxs("div",{className:a.row,children:[t.jsx("div",{className:a.label}),l.map(e=>t.jsx("div",{className:a.label,children:e},e))]}),t.jsxs("div",{className:a.row,children:[t.jsx("div",{className:a.label,children:"active"}),l.map(e=>t.jsx("div",{className:a.cell,children:t.jsx(r,{status:e,active:!0})},`active-${e}`))]}),t.jsxs("div",{className:a.row,children:[t.jsx("div",{className:a.label,children:"non-active"}),l.map(e=>t.jsx("div",{className:a.cell,children:t.jsx(r,{status:e,active:!1})},`inactive-${e}`))]})]}),play:async({canvasElement:e})=>{const n=p(e),i=n.getByLabelText("running status");await s(i).toBeInTheDocument();const u=n.getByLabelText("warning status");await s(u).toBeInTheDocument();const d=n.getByLabelText("failed status");await s(d).toBeInTheDocument();const m=n.getByLabelText("paused status");await s(m).toBeInTheDocument();const g=n.getByLabelText("running status (inactive)");await s(g).toBeInTheDocument();const y=n.getByLabelText("warning status (inactive)");await s(y).toBeInTheDocument();const w=n.getByLabelText("failed status (inactive)");await s(w).toBeInTheDocument();const x=n.getByLabelText("paused status (inactive)");await s(x).toBeInTheDocument()}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
}`,...o.parameters?.docs?.source}}};const q=["Default","All"];export{o as All,c as Default,q as __namedExportsOrder,$ as default};
