import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as z}from"./ds-icon-BH94ZUSb.js";import{c as S}from"./index-CMjPrJCW.js";import{D as I}from"./ds-typography-DkXTvhMW.js";import{c as L}from"./numbers-CFgr3u4v.js";import"./iframe-foGZe_Iu.js";import"./preload-helper-PPVm8Dsz.js";import"./index-DLoHK7I_.js";import"./index-DetwsqN6.js";const $="_root_1u5sm_1",O="_svg_1u5sm_8",C="_track_1u5sm_13",q="_progress_1u5sm_18",W="_success_1u5sm_26",F="_error_1u5sm_30",G="_center_1u5sm_34",U="_iconSuccess_1u5sm_42",Z="_iconError_1u5sm_46",K="_iconMediumSize_1u5sm_50",c={root:$,svg:O,track:C,progress:q,default:"_default_1u5sm_22",success:W,error:F,center:G,iconSuccess:U,iconError:Z,iconMediumSize:K},Y=270,J=360,Q=135,X=Y/J,ee=Object.freeze({small:80,medium:120}),se=Object.freeze({small:4,medium:6}),ae=r=>{const s=ee[r],a=se[r],m=(s-a)/2,p=2*Math.PI*m,f=X*p,_=s/2;return{containerSize:s,strokeWidth:a,radius:m,circumference:p,arcLength:f,center:_,startRotation:Q}},re=(r,s)=>`${String(r)} ${String(s)}`,te=(r,s,a)=>{const m=r/100*s;return`${String(m)} ${String(a)}`},ne=Object.freeze({default:c.default,success:c.success,error:c.error}),o=({value:r=0,size:s="medium",variant:a="default",children:m,className:p,style:f,ref:_,...R})=>{const{containerSize:u,strokeWidth:N,radius:A,circumference:j,arcLength:T,center:l,startRotation:D}=ae(s),B=a==="success"?100:L(r),H=re(T,j),V=te(B,T,j),E=(P,k)=>e.jsx(z,{variant:"rounded",icon:P,size:"large",className:S({[c.iconMediumSize]:s==="medium"},k)}),M=()=>m||(a==="success"?E("check",c.iconSuccess):a==="error"?E("close",c.iconError):e.jsx(I,{variant:s==="medium"?"heading3":"body-md-md",asChild:!0,children:e.jsxs("span",{children:[B,"%"]})}));return e.jsxs("div",{...R,className:S(c.root,p),style:{width:u,height:u,...f},ref:_,role:"progressbar","aria-valuenow":B,"aria-valuemin":0,"aria-valuemax":100,children:[e.jsxs("svg",{className:c.svg,width:u,height:u,viewBox:`0 0 ${String(u)} ${String(u)}`,children:[e.jsx("circle",{className:c.track,cx:l,cy:l,r:A,fill:"none",strokeWidth:N,strokeDasharray:H,strokeLinecap:"round",transform:`rotate(${String(D)} ${String(l)} ${String(l)})`}),e.jsx("circle",{className:S(c.progress,ne[a]),cx:l,cy:l,r:A,fill:"none",strokeWidth:N,strokeDasharray:V,strokeLinecap:"round",transform:`rotate(${String(D)} ${String(l)} ${String(l)})`})]}),e.jsx("div",{className:c.center,children:M()})]})};o.__docgenInfo={description:"",methods:[],displayName:"DsProgressArc",props:{value:{required:!1,tsType:{name:"number"},description:`Progress value between 0 and 100
@default 0`,defaultValue:{value:"0",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressArcSizes)[number]"},description:`Size of the arc progress indicator
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressArcVariants)[number]"},description:`Visual variant of the arc progress indicator
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom content to display in the center of the arc, overriding the default text or icon"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},description:""}},composes:["ComponentPropsWithoutRef"]};const ce=["small","medium"],oe=["default","success","error"],le="_grid_1bra3_1",ie="_cell_1bra3_9",me="_label_1bra3_16",ue="_row_1bra3_21",n={grid:le,cell:ie,label:me,row:ue},{expect:t,within:i}=__STORYBOOK_MODULE_TEST__,fe={title:"Design System/ProgressArc",component:o,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"select"},options:ce},variant:{control:{type:"select"},options:oe}}},d={args:{value:50},play:async({canvasElement:r})=>{const s=i(r),a=s.getByRole("progressbar");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-valuenow","50"),await t(a).toHaveAttribute("aria-valuemin","0"),await t(a).toHaveAttribute("aria-valuemax","100"),await t(s.getByText("50%")).toBeVisible()}},g={render:()=>e.jsxs("div",{className:n.grid,children:[e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"small",value:50}),e.jsx("span",{className:n.label,children:"Small / Default"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"small",variant:"success"}),e.jsx("span",{className:n.label,children:"Small / Success"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"small",variant:"error",value:50}),e.jsx("span",{className:n.label,children:"Small / Error"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"medium",value:50}),e.jsx("span",{className:n.label,children:"Medium / Default"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"medium",variant:"success"}),e.jsx("span",{className:n.label,children:"Medium / Success"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"medium",variant:"error",value:50}),e.jsx("span",{className:n.label,children:"Medium / Error"})]})]}),play:async({canvasElement:r})=>{const a=i(r).getAllByRole("progressbar");await t(a).toHaveLength(6)}},v={render:()=>e.jsxs("div",{className:n.row,children:[e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"small",value:75}),e.jsx("span",{className:n.label,children:"Small"})]}),e.jsxs("div",{className:n.cell,children:[e.jsx(o,{size:"medium",value:75}),e.jsx("span",{className:n.label,children:"Medium"})]})]}),play:async({canvasElement:r})=>{const s=i(r),a=s.getAllByRole("progressbar");await t(a).toHaveLength(2),await t(s.getAllByText("75%")).toHaveLength(2)}},y={args:{variant:"success"},play:async({canvasElement:r})=>{const s=i(r),a=s.getByRole("progressbar");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-valuenow","100"),await t(s.getByText("check")).toBeVisible()}},x={args:{variant:"error",value:50},play:async({canvasElement:r})=>{const s=i(r),a=s.getByRole("progressbar");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-valuenow","50"),await t(s.getByText("close")).toBeVisible()}},w={args:{value:80,children:e.jsx(z,{icon:"warning",size:"small"})},play:async({canvasElement:r})=>{const s=i(r),a=s.getByRole("progressbar");await t(a).toBeInTheDocument(),await t(a).toHaveAttribute("aria-valuenow","80"),await t(s.getByText("warning")).toBeVisible()}},h={args:{value:0},play:async({canvasElement:r})=>{const s=i(r),a=s.getByRole("progressbar");await t(a).toHaveAttribute("aria-valuenow","0"),await t(s.getByText("0%")).toBeVisible()}},b={args:{value:100},play:async({canvasElement:r})=>{const s=i(r),a=s.getByRole("progressbar");await t(a).toHaveAttribute("aria-valuenow","100"),await t(s.getByText("100%")).toBeVisible()}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.grid}>
            <div className={styles.cell}>
                <DsProgressArc size="small" value={50} />
                <span className={styles.label}>Small / Default</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="small" variant="success" />
                <span className={styles.label}>Small / Success</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="small" variant="error" value={50} />
                <span className={styles.label}>Small / Error</span>
            </div>

            <div className={styles.cell}>
                <DsProgressArc size="medium" value={50} />
                <span className={styles.label}>Medium / Default</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="medium" variant="success" />
                <span className={styles.label}>Medium / Success</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="medium" variant="error" value={50} />
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
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.row}>
            <div className={styles.cell}>
                <DsProgressArc size="small" value={75} />
                <span className={styles.label}>Small</span>
            </div>
            <div className={styles.cell}>
                <DsProgressArc size="medium" value={75} />
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
}`,...v.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...y.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
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
}`,...x.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
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
}`,...w.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const _e=["Default","AllVariants","Sizes","Success","Error","CustomIcon","ZeroProgress","FullProgress"];export{g as AllVariants,w as CustomIcon,d as Default,x as Error,b as FullProgress,v as Sizes,y as Success,h as ZeroProgress,_e as __namedExportsOrder,fe as default};
