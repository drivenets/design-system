import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as N}from"./ds-icon-BH94ZUSb.js";import{c as j}from"./index-CMjPrJCW.js";import{D as V}from"./ds-typography-DkXTvhMW.js";import{c as M}from"./numbers-CFgr3u4v.js";import{u as w,P as C}from"./progress-root-DKt63KcV.js";import{r as b}from"./iframe-foGZe_Iu.js";import{a as f}from"./use-locale-context-D3iUicfk.js";import{Q as _}from"./index-YmNYY-wR.js";import"./index-DLoHK7I_.js";import"./index-DetwsqN6.js";import"./create-split-props-u5h9OPvL.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CaLCoC7s.js";import"./index-CptSJxGb.js";const D=b.forwardRef((r,a)=>{const s=w(),l=_(s.getCircleProps(),r);return e.jsx(f.svg,{ref:a,...l})});D.displayName="ProgressCircle";const S=b.forwardRef((r,a)=>{const s=w(),l=_(s.getCircleRangeProps(),r);return e.jsx(f.circle,{ref:a,...l})});S.displayName="ProgressCircleRange";const T=b.forwardRef((r,a)=>{const s=w(),l=_(s.getCircleTrackProps(),r);return e.jsx(f.circle,{ref:a,...l})});T.displayName="ProgressCircleTrack";const I="_root_1jmcy_1",k="_small_1jmcy_5",L="_medium_1jmcy_10",q="_circle_1jmcy_15",O="_track_1jmcy_20",F="_range_1jmcy_25",Z="_success_1jmcy_34",K="_error_1jmcy_39",Q="_center_1jmcy_43",U="_iconSuccess_1jmcy_51",Y="_iconError_1jmcy_55",$="_iconMediumSize_1jmcy_59",c={root:I,small:k,medium:L,circle:q,track:O,range:F,default:"_default_1jmcy_30",success:Z,error:K,center:Q,iconSuccess:U,iconError:Y,iconMediumSize:$},G=Object.freeze({small:c.small,medium:c.medium}),J=Object.freeze({default:c.default,success:c.success,error:c.error}),o=({value:r=0,size:a="medium",variant:s="default",children:l,className:E,style:P,ref:z})=>{const h=s==="success"?100:M(r),B=(A,H)=>e.jsx(N,{variant:"rounded",icon:A,size:"large",className:j({[c.iconMediumSize]:a==="medium"},H)}),R=()=>l||(s==="success"?B("check",c.iconSuccess):s==="error"?B("close",c.iconError):e.jsx(V,{variant:a==="medium"?"heading3":"body-md-md",asChild:!0,children:e.jsxs("span",{children:[h,"%"]})}));return e.jsxs(C,{ref:z,value:h,className:j(c.root,G[a],J[s],E),style:P,children:[e.jsxs(D,{className:c.circle,children:[e.jsx(T,{className:c.track}),e.jsx(S,{className:c.range})]}),e.jsx("div",{className:c.center,children:R()})]})};o.__docgenInfo={description:"",methods:[],displayName:"DsProgressDonut",props:{value:{required:!1,tsType:{name:"number"},description:`Progress value between 0 and 100
@default 0`,defaultValue:{value:"0",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressDonutSizes)[number]"},description:`Size of the donut progress indicator
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressDonutVariants)[number]"},description:`Visual variant of the donut progress indicator
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom content to display in the center of the donut, overriding the default text or icon"},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},description:""}}};const W=["small","medium"],X=["default","success","error"],ee="_grid_1bra3_1",se="_cell_1bra3_9",ae="_label_1bra3_16",re="_row_1bra3_21",n={grid:ee,cell:se,label:ae,row:re},{expect:t,within:i}=__STORYBOOK_MODULE_TEST__,be={title:"Design System/ProgressDonut",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"select"},options:W},variant:{control:{type:"select"},options:X}}},m={args:{value:50},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("aria-valuenow","50"),await t(s).toHaveAttribute("aria-valuemin","0"),await t(s).toHaveAttribute("aria-valuemax","100"),await t(a.getByText("50%")).toBeVisible()}},u={render:()=>e.jsxs("div",{className:n.grid,children:[e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"small",value:50}),e.jsx("span",{className:n.label,children:"Small / Default"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"small",variant:"success"}),e.jsx("span",{className:n.label,children:"Small / Success"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"small",variant:"error",value:50}),e.jsx("span",{className:n.label,children:"Small / Error"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"medium",value:50}),e.jsx("span",{className:n.label,children:"Medium / Default"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"medium",variant:"success"}),e.jsx("span",{className:n.label,children:"Medium / Success"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"medium",variant:"error",value:50}),e.jsx("span",{className:n.label,children:"Medium / Error"})]})]}),play:async({canvasElement:r})=>{const s=i(r).getAllByRole("progressbar");await t(s).toHaveLength(6)}},p={render:()=>e.jsxs("div",{className:n.row,children:[e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"small",value:75}),e.jsx("span",{className:n.label,children:"Small"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"medium",value:75}),e.jsx("span",{className:n.label,children:"Medium"})]})]}),play:async({canvasElement:r})=>{const a=i(r),s=a.getAllByRole("progressbar");await t(s).toHaveLength(2),await t(a.getAllByText("75%")).toHaveLength(2)}},d={args:{variant:"success"},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("aria-valuenow","100"),await t(a.getByText("check")).toBeVisible()}},g={args:{variant:"error",value:50},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("aria-valuenow","50"),await t(a.getByText("close")).toBeVisible()}},v={args:{value:80,children:e.jsx(N,{icon:"warning",size:"small"})},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toBeInTheDocument(),await t(s).toHaveAttribute("aria-valuenow","80"),await t(a.getByText("warning")).toBeVisible()}},y={args:{value:0},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toHaveAttribute("aria-valuenow","0"),await t(a.getByText("0%")).toBeVisible()}},x={args:{value:100},play:async({canvasElement:r})=>{const a=i(r),s=a.getByRole("progressbar");await t(s).toHaveAttribute("aria-valuenow","100"),await t(a.getByText("100%")).toBeVisible()}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
                <DsProgressDonut size="small" variant="error" value={50} />
                <span className={styles.label}>Small / Error</span>
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
                <DsProgressDonut size="medium" variant="error" value={50} />
                <span className={styles.label}>Medium / Error</span>
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
    variant: 'error',
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
}`,...x.parameters?.docs?.source}}};const fe=["Default","AllVariants","Sizes","Success","Error","CustomIcon","ZeroProgress","FullProgress"];export{u as AllVariants,v as CustomIcon,m as Default,g as Error,x as FullProgress,p as Sizes,d as Success,y as ZeroProgress,fe as __namedExportsOrder,be as default};
