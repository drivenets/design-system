import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as N}from"./ds-icon-2Kkf3LCh.js";import{c as B}from"./index-BpdsuZ17.js";import{D as V}from"./ds-typography-XNs9d9js.js";import{u as w,P as M}from"./progress-root-BYHj-f7_.js";import{r as b}from"./iframe-DaWFeW3H.js";import{a as f}from"./use-locale-context-CRkuRW1d.js";import{P as j}from"./index-CmxqiR_e.js";import"./index-CNn0cUAd.js";import"./index-DXLZwxM6.js";import"./create-split-props-u5h9OPvL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Bg5G61Kq.js";import"./index-DCQ4Ts3n.js";const D=b.forwardRef((r,a)=>{const s=w(),o=j(s.getCircleProps(),r);return e.jsx(f.svg,{ref:a,...o})});D.displayName="ProgressCircle";const S=b.forwardRef((r,a)=>{const s=w(),o=j(s.getCircleRangeProps(),r);return e.jsx(f.circle,{ref:a,...o})});S.displayName="ProgressCircleRange";const T=b.forwardRef((r,a)=>{const s=w(),o=j(s.getCircleTrackProps(),r);return e.jsx(f.circle,{ref:a,...o})});T.displayName="ProgressCircleTrack";const C="_root_10mjj_1",I="_small_10mjj_5",k="_medium_10mjj_10",F="_circle_10mjj_15",L="_track_10mjj_20",q="_range_10mjj_25",O="_success_10mjj_34",Z="_failed_10mjj_39",K="_center_10mjj_43",U="_iconSuccess_10mjj_51",Y="_iconFailed_10mjj_55",$="_iconMediumSize_10mjj_59",c={root:C,small:I,medium:k,circle:F,track:L,range:q,default:"_default_10mjj_30",success:O,failed:Z,center:K,iconSuccess:U,iconFailed:Y,iconMediumSize:$},G=r=>Math.min(100,Math.max(0,r)),J=Object.freeze({small:c.small,medium:c.medium}),Q=Object.freeze({default:c.default,success:c.success,failed:c.failed}),l=({value:r=0,size:a="medium",variant:s="default",children:o,className:P,style:z,ref:R})=>{const h=s==="success"?100:G(r),_=(H,E)=>e.jsx(N,{variant:"rounded",icon:H,size:"large",className:B({[c.iconMediumSize]:a==="medium"},E)}),A=()=>o||(s==="success"?_("check",c.iconSuccess):s==="failed"?_("close",c.iconFailed):e.jsx(V,{variant:a==="medium"?"heading3":"body-md-md",asChild:!0,children:e.jsxs("span",{children:[h,"%"]})}));return e.jsxs(M,{ref:R,value:h,className:B(c.root,J[a],Q[s],P),style:z,children:[e.jsxs(D,{className:c.circle,children:[e.jsx(T,{className:c.track}),e.jsx(S,{className:c.range})]}),e.jsx("div",{className:c.center,children:A()})]})};l.__docgenInfo={description:"",methods:[],displayName:"DsProgressDonut",props:{value:{required:!1,tsType:{name:"number"},description:`Progress value between 0 and 100
@default 0`,defaultValue:{value:"0",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressDonutSizes)[number]"},description:`Size of the donut progress indicator
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressDonutVariants)[number]"},description:`Visual variant of the donut progress indicator
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom content to display in the center of the donut, overriding the default text or icon"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},description:""}}};const W=["small","medium"],X=["default","success","failed"],ee="_grid_1bra3_1",se="_cell_1bra3_9",ae="_label_1bra3_16",re="_row_1bra3_21",n={grid:ee,cell:se,label:ae,row:re},{expect:t,within:i}=__STORYBOOK_MODULE_TEST__,we={title:"Design System/ProgressDonut",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"select"},options:W},variant:{control:{type:"select"},options:X}}},m={args:{value:50},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("aria-valuenow","50"),await t(s).toHaveAttribute("aria-valuemin","0"),await t(s).toHaveAttribute("aria-valuemax","100"),await t(a.getByText("50%")).toBeVisible()}},u={render:()=>e.jsxs("div",{className:n.grid,children:[e.jsxs("div",{className:n.cell,children:[e.jsx(l,{size:"small",value:50}),e.jsx("span",{className:n.label,children:"Small / Default"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(l,{size:"small",variant:"success"}),e.jsx("span",{className:n.label,children:"Small / Success"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(l,{size:"small",variant:"failed",value:50}),e.jsx("span",{className:n.label,children:"Small / Failed"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(l,{size:"medium",value:50}),e.jsx("span",{className:n.label,children:"Medium / Default"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(l,{size:"medium",variant:"success"}),e.jsx("span",{className:n.label,children:"Medium / Success"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(l,{size:"medium",variant:"failed",value:50}),e.jsx("span",{className:n.label,children:"Medium / Failed"})]})]}),play:async({canvasElement:r})=>{const s=i(r).getAllByRole("progressbar");await t(s).toHaveLength(6)}},p={render:()=>e.jsxs("div",{className:n.row,children:[e.jsxs("div",{className:n.cell,children:[e.jsx(l,{size:"small",value:75}),e.jsx("span",{className:n.label,children:"Small"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(l,{size:"medium",value:75}),e.jsx("span",{className:n.label,children:"Medium"})]})]}),play:async({canvasElement:r})=>{const a=i(r),s=a.getAllByRole("progressbar");await t(s).toHaveLength(2),await t(a.getAllByText("75%")).toHaveLength(2)}},d={args:{variant:"success"},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("aria-valuenow","100"),await t(a.getByText("check")).toBeVisible()}},g={args:{variant:"failed",value:50},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("aria-valuenow","50"),await t(a.getByText("close")).toBeVisible()}},v={args:{value:80,children:e.jsx(N,{icon:"warning",size:"small"})},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("aria-valuenow","80"),await t(a.getByText("warning")).toBeVisible()}},y={args:{value:0},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toHaveAttribute("aria-valuenow","0"),await t(a.getByText("0%")).toBeVisible()}},x={args:{value:100},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toHaveAttribute("aria-valuenow","100"),await t(a.getByText("100%")).toBeVisible()}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
    await expect(progress).toHaveAttribute('aria-valuenow', '50');
    await expect(progress).toHaveAttribute('aria-valuemin', '0');
    await expect(progress).toHaveAttribute('aria-valuemax', '100');
    await expect(canvas.getByText('50%')).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.grid}>
            <div className={styles.cell}>
                <DsProgressDonut size="small" value={50} />
                <span className={styles.label}>Small / Default</span>
            </div>
            <div className={styles.cell}>
                <DsProgressDonut size="small" variant="success" />
                <span className={styles.label}>Small / Success</span>
            </div>
            <div className={styles.cell}>
                <DsProgressDonut size="small" variant="failed" value={50} />
                <span className={styles.label}>Small / Failed</span>
            </div>

            <div className={styles.cell}>
                <DsProgressDonut size="medium" value={50} />
                <span className={styles.label}>Medium / Default</span>
            </div>
            <div className={styles.cell}>
                <DsProgressDonut size="medium" variant="success" />
                <span className={styles.label}>Medium / Success</span>
            </div>
            <div className={styles.cell}>
                <DsProgressDonut size="medium" variant="failed" value={50} />
                <span className={styles.label}>Medium / Failed</span>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBars = canvas.getAllByRole('progressbar');
    await expect(progressBars).toHaveLength(6);
  }
}`,...u.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.row}>
            <div className={styles.cell}>
                <DsProgressDonut size="small" value={75} />
                <span className={styles.label}>Small</span>
            </div>
            <div className={styles.cell}>
                <DsProgressDonut size="medium" value={75} />
                <span className={styles.label}>Medium</span>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBars = canvas.getAllByRole('progressbar');
    await expect(progressBars).toHaveLength(2);
    await expect(canvas.getAllByText('75%')).toHaveLength(2);
  }
}`,...p.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
    await expect(progress).toHaveAttribute('aria-valuenow', '100');
    await expect(canvas.getByText('check')).toBeVisible();
  }
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'failed',
    value: 50
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
    await expect(progress).toHaveAttribute('aria-valuenow', '50');
    await expect(canvas.getByText('close')).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    children: <DsIcon icon="warning" size="small" />
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toBeInTheDocument();
    await expect(progress).toHaveAttribute('aria-valuenow', '80');
    await expect(canvas.getByText('warning')).toBeVisible();
  }
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toHaveAttribute('aria-valuenow', '0');
    await expect(canvas.getByText('0%')).toBeVisible();
  }
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progress = canvas.getByRole('progressbar');
    await expect(progress).toHaveAttribute('aria-valuenow', '100');
    await expect(canvas.getByText('100%')).toBeVisible();
  }
}`,...x.parameters?.docs?.source}}};const be=["Default","AllVariants","Sizes","Success","Failed","CustomIcon","ZeroProgress","FullProgress"];export{u as AllVariants,v as CustomIcon,m as Default,g as Failed,x as FullProgress,p as Sizes,d as Success,y as ZeroProgress,be as __namedExportsOrder,we as default};
