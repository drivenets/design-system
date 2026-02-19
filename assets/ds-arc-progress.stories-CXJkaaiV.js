import{j as s}from"./jsx-runtime-u17CrQMm.js";import{D as z}from"./ds-icon-2Kkf3LCh.js";import{c as B}from"./index-BpdsuZ17.js";import"./iframe-DaWFeW3H.js";import"./preload-helper-PPVm8Dsz.js";const q="_root_1r2xq_1",I="_svg_1r2xq_8",L="_track_1r2xq_13",F="_progress_1r2xq_18",$="_success_1r2xq_26",C="_failed_1r2xq_30",O="_center_1r2xq_34",W="_valueMedium_1r2xq_42",G="_valueSmall_1r2xq_52",U="_iconSuccess_1r2xq_62",Z="_iconFailed_1r2xq_66",K="_iconMediumSize_1r2xq_71",c={root:q,svg:I,track:L,progress:F,default:"_default_1r2xq_22",success:$,failed:C,center:O,valueMedium:W,valueSmall:G,iconSuccess:U,iconFailed:Z,iconMediumSize:K},Y=270,J=360,Q=135,X=Y/J,ee={small:80,medium:120},se={small:4,medium:6},ae=t=>Math.min(100,Math.max(0,t)),te=(t,e)=>t==="success"?100:ae(e),re=t=>{const e=ee[t],a=se[t],m=(e-a)/2,d=2*Math.PI*m,f=X*d,_=e/2;return{containerSize:e,strokeWidth:a,radius:m,circumference:d,arcLength:f,center:_,startRotation:Q}},ne=(t,e)=>`${String(t)} ${String(e)}`,ce=(t,e,a)=>{const m=t/100*e;return`${String(m)} ${String(a)}`},le=Object.freeze({default:c.default,success:c.success,failed:c.failed}),l=({value:t=0,size:e="medium",variant:a="default",children:m,className:d,style:f,ref:_,...E})=>{const{containerSize:u,strokeWidth:N,radius:A,circumference:T,arcLength:D,center:o,startRotation:j}=re(e),S=te(a,t),M=ne(D,T),H=ce(S,D,T),R=(V,k)=>s.jsx(z,{variant:"rounded",icon:V,size:"large",className:B({[c.iconMediumSize]:e==="medium"},k)}),P=()=>m||(a==="success"?R("check",c.iconSuccess):a==="failed"?R("close",c.iconFailed):s.jsxs("span",{className:e==="medium"?c.valueMedium:c.valueSmall,children:[S,"%"]}));return s.jsxs("div",{...E,className:B(c.root,d),style:{width:u,height:u,...f},ref:_,role:"progressbar","aria-valuenow":S,"aria-valuemin":0,"aria-valuemax":100,children:[s.jsxs("svg",{className:c.svg,width:u,height:u,viewBox:`0 0 ${String(u)} ${String(u)}`,children:[s.jsx("circle",{className:c.track,cx:o,cy:o,r:A,fill:"none",strokeWidth:N,strokeDasharray:M,strokeLinecap:"round",transform:`rotate(${String(j)} ${String(o)} ${String(o)})`}),s.jsx("circle",{className:B(c.progress,le[a]),cx:o,cy:o,r:A,fill:"none",strokeWidth:N,strokeDasharray:H,strokeLinecap:"round",transform:`rotate(${String(j)} ${String(o)} ${String(o)})`})]}),s.jsx("div",{className:c.center,children:P()})]})};l.__docgenInfo={description:"",methods:[],displayName:"DsArcProgress",props:{value:{required:!1,tsType:{name:"number"},description:`Progress value between 0 and 100
@default 0`,defaultValue:{value:"0",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof arcProgressSizes)[number]"},description:`Size of the arc progress indicator
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof arcProgressVariants)[number]"},description:`Visual variant of the arc progress indicator
@default 'default'`,defaultValue:{value:"'default'",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Custom content to display in the center of the arc, overriding the default text or icon"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLDivElement"}],raw:"Ref<HTMLDivElement>"},description:"Ref to the root element"}},composes:["ComponentPropsWithoutRef"]};const oe=["small","medium"],ie=["default","success","failed"],me="_grid_1bra3_1",ue="_cell_1bra3_9",de="_label_1bra3_16",pe="_row_1bra3_21",n={grid:me,cell:ue,label:de,row:pe},{expect:r,within:i}=__STORYBOOK_MODULE_TEST__,he={title:"Design System/ArcProgress",component:l,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1}},size:{control:{type:"select"},options:oe},variant:{control:{type:"select"},options:ie}}},p={args:{value:50},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("progressbar");await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("aria-valuenow","50"),await r(a).toHaveAttribute("aria-valuemin","0"),await r(a).toHaveAttribute("aria-valuemax","100"),await r(e.getByText("50%")).toBeVisible()}},v={render:()=>s.jsxs("div",{className:n.grid,children:[s.jsxs("div",{className:n.cell,children:[s.jsx(l,{size:"small",value:50}),s.jsx("span",{className:n.label,children:"Small / Default"})]}),s.jsxs("div",{className:n.cell,children:[s.jsx(l,{size:"small",variant:"success"}),s.jsx("span",{className:n.label,children:"Small / Success"})]}),s.jsxs("div",{className:n.cell,children:[s.jsx(l,{size:"small",variant:"failed",value:50}),s.jsx("span",{className:n.label,children:"Small / Failed"})]}),s.jsxs("div",{className:n.cell,children:[s.jsx(l,{size:"medium",value:50}),s.jsx("span",{className:n.label,children:"Medium / Default"})]}),s.jsxs("div",{className:n.cell,children:[s.jsx(l,{size:"medium",variant:"success"}),s.jsx("span",{className:n.label,children:"Medium / Success"})]}),s.jsxs("div",{className:n.cell,children:[s.jsx(l,{size:"medium",variant:"failed",value:50}),s.jsx("span",{className:n.label,children:"Medium / Failed"})]})]}),play:async({canvasElement:t})=>{const a=i(t).getAllByRole("progressbar");await r(a).toHaveLength(6)}},g={render:()=>s.jsxs("div",{className:n.row,children:[s.jsxs("div",{className:n.cell,children:[s.jsx(l,{size:"small",value:75}),s.jsx("span",{className:n.label,children:"Small"})]}),s.jsxs("div",{className:n.cell,children:[s.jsx(l,{size:"medium",value:75}),s.jsx("span",{className:n.label,children:"Medium"})]})]}),play:async({canvasElement:t})=>{const e=i(t),a=e.getAllByRole("progressbar");await r(a).toHaveLength(2),await r(e.getAllByText("75%")).toHaveLength(2)}},y={args:{variant:"success"},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("progressbar");await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("aria-valuenow","100"),await r(e.getByText("check")).toBeVisible()}},x={args:{variant:"failed",value:50},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("progressbar");await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("aria-valuenow","50"),await r(e.getByText("close")).toBeVisible()}},w={args:{value:80,children:s.jsx(z,{icon:"warning",size:"small"})},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("progressbar");await r(a).toBeInTheDocument(),await r(a).toHaveAttribute("aria-valuenow","80"),await r(e.getByText("warning")).toBeVisible()}},h={args:{value:0},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("progressbar");await r(a).toHaveAttribute("aria-valuenow","0"),await r(e.getByText("0%")).toBeVisible()}},b={args:{value:100},play:async({canvasElement:t})=>{const e=i(t),a=e.getByRole("progressbar");await r(a).toHaveAttribute("aria-valuenow","100"),await r(e.getByText("100%")).toBeVisible()}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
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
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.grid}>
            <div className={styles.cell}>
                <DsArcProgress size="small" value={50} />
                <span className={styles.label}>Small / Default</span>
            </div>
            <div className={styles.cell}>
                <DsArcProgress size="small" variant="success" />
                <span className={styles.label}>Small / Success</span>
            </div>
            <div className={styles.cell}>
                <DsArcProgress size="small" variant="failed" value={50} />
                <span className={styles.label}>Small / Failed</span>
            </div>

            <div className={styles.cell}>
                <DsArcProgress size="medium" value={50} />
                <span className={styles.label}>Medium / Default</span>
            </div>
            <div className={styles.cell}>
                <DsArcProgress size="medium" variant="success" />
                <span className={styles.label}>Medium / Success</span>
            </div>
            <div className={styles.cell}>
                <DsArcProgress size="medium" variant="failed" value={50} />
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
}`,...v.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.row}>
            <div className={styles.cell}>
                <DsArcProgress size="small" value={75} />
                <span className={styles.label}>Small</span>
            </div>
            <div className={styles.cell}>
                <DsArcProgress size="medium" value={75} />
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
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};const be=["Default","AllVariants","Sizes","Success","Failed","CustomIcon","ZeroProgress","FullProgress"];export{v as AllVariants,w as CustomIcon,p as Default,x as Failed,b as FullProgress,g as Sizes,y as Success,h as ZeroProgress,be as __namedExportsOrder,he as default};
