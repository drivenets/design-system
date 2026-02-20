import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as B}from"./iframe-CElvGea5.js";import{c as u}from"./index-C1hHQqhM.js";import{D as E}from"./ds-icon-Cmuf6_qW.js";import{u as w,P as I}from"./progress-root-CikHVbGO.js";import{a as T}from"./use-locale-context-Ce3yrVmV.js";import{P as _}from"./index-Ct7KYQ5y.js";import{P as A,a as H}from"./progress-track-atsd_H_2.js";import"./preload-helper-PPVm8Dsz.js";import"./create-split-props-u5h9OPvL.js";import"./index-Dy3CKhCl.js";import"./index-BjM98C_E.js";const z=B.forwardRef((r,a)=>{const i=w(),o=_(i.getLabelProps(),r);return e.jsx(T.label,{...o,ref:a})});z.displayName="ProgressLabel";const F=B.forwardRef((r,a)=>{const{children:i,...o}=r,l=w(),p=_(l.getValueTextProps(),o);return e.jsx(T.span,{...p,ref:a,children:i||l.percentAsString})});F.displayName="ProgressValueText";const k="_root_f11ta_1",N="_sizeSmall_f11ta_6",C="_sizeMedium_f11ta_9",W="_sizeLarge_f11ta_9",q="_header_f11ta_13",M="_label_f11ta_19",O="_valueText_f11ta_30",K="_track_f11ta_42",Y="_trackSmall_f11ta_49",$="_trackMedium_f11ta_53",G="_trackLarge_f11ta_57",J="_range_f11ta_61",Q="_variantProgress_f11ta_67",X="_variantInterrupted_f11ta_71",Z="_variantSuccess_f11ta_75",ee="_variantError_f11ta_79",ae="_caption_f11ta_83",te="_captionDefault_f11ta_96",re="_captionSuccess_f11ta_100",se="_captionError_f11ta_104",ie="_captionInterrupted_f11ta_108",n={root:k,sizeSmall:N,sizeMedium:C,sizeLarge:W,header:q,label:M,valueText:O,track:K,trackSmall:Y,trackMedium:$,trackLarge:G,range:J,variantProgress:Q,variantInterrupted:X,variantSuccess:Z,variantError:ee,caption:ae,captionDefault:te,captionSuccess:re,captionError:se,captionInterrupted:ie};function ne(r,a,i){return i<=a?0:Math.round((r-a)/(i-a)*100)}const oe=Object.freeze({initial:void 0,progress:n.variantProgress,interrupted:n.variantInterrupted,success:n.variantSuccess,error:n.variantError}),le=Object.freeze({initial:n.captionDefault,progress:n.captionDefault,interrupted:n.captionInterrupted,success:n.captionSuccess,error:n.captionError}),ce=Object.freeze({success:"check_circle",error:"cancel",interrupted:"warning"}),pe=Object.freeze({small:n.sizeSmall,medium:n.sizeMedium,large:n.sizeLarge}),de=Object.freeze({small:n.trackSmall,medium:n.trackMedium,large:n.trackLarge}),s=({value:r=0,min:a=0,max:i=100,variant:o="progress",size:l="medium",label:p,showValue:f=!0,caption:L,className:D,style:P,ref:j})=>{const S=p!==void 0||f,h=ce[o],V=ne(r,a,i),R=d=>d===void 0?null:typeof d!="string"?d:e.jsxs("div",{className:u(n.caption,le[o]),children:[h&&e.jsx(E,{icon:h,size:"tiny",filled:!0}),e.jsx("span",{children:d})]});return e.jsxs(I,{ref:j,value:r,min:a,max:i,className:u(n.root,pe[l],D),style:P,children:[S&&e.jsxs("div",{className:n.header,children:[p&&e.jsx(z,{className:n.label,children:p}),f&&e.jsxs(F,{className:n.valueText,children:[V,"%"]})]}),e.jsx(A,{className:u(n.track,de[l]),children:e.jsx(H,{className:u(n.range,oe[o])})}),R(L)]})};s.__docgenInfo={description:"Design system ProgressLinear component",methods:[],displayName:"DsProgressLinear",props:{value:{required:!1,tsType:{name:"number"},description:`The current progress value (0–100)
@default 0`,defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The minimum value
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`The maximum value
@default 100`,defaultValue:{value:"100",computed:!1}},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressLinearVariants)[number]"},description:`The visual variant controlling bar color and caption styling
@default 'progress'`,defaultValue:{value:"'progress'",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressLinearSizes)[number]"},description:`The size of the progress bar track
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label displayed above the progress bar (left side)"},showValue:{required:!1,tsType:{name:"boolean"},description:`Whether to show the percentage value text (right side of label row)
@default true`,defaultValue:{value:"true",computed:!1}},caption:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:`Caption/helper text below the progress bar.
When a string is provided, it is auto-styled with an icon and color based on the variant.
When a ReactNode is provided, it is rendered as-is.`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to apply to the component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref to the root element"}}};const ue=["initial","progress","interrupted","success","error"],ge=["small","medium","large"],me="_grid_t9qzr_1",ve={grid:me},{expect:t,within:c}=__STORYBOOK_MODULE_TEST__,Le={title:"Design System/ProgressLinear",component:s,tags:["autodocs"],parameters:{layout:"centered"},decorators:[r=>e.jsx("div",{className:ve.grid,children:e.jsx(r,{})})],argTypes:{variant:{control:"radio",options:ue},size:{control:"radio",options:ge},value:{control:{type:"range",min:0,max:100,step:1}},showValue:{control:"boolean"}}},g={args:{value:35,label:"File Upload",caption:"Uploading..."},play:async({canvasElement:r})=>{const a=c(r),i=a.getByRole("progressbar");await t(i).toBeInTheDocument(),await t(a.getByText("File Upload")).toBeVisible(),await t(a.getByText("35%")).toBeVisible(),await t(a.getByText("Uploading...")).toBeVisible()}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{variant:"initial",value:0,label:"File Upload",caption:"Waiting to start..."}),e.jsx(s,{variant:"progress",value:35,label:"File Upload",caption:"Uploading..."}),e.jsx(s,{variant:"interrupted",value:35,label:"File Upload",caption:"Upload interrupted."}),e.jsx(s,{variant:"success",value:100,label:"File Upload",caption:"Upload complete."}),e.jsx(s,{variant:"error",value:0,label:"File Upload",caption:"Error: File exceeds size limit."})]}),play:async({canvasElement:r})=>{const a=c(r),i=a.getAllByRole("progressbar");await t(i).toHaveLength(5),await t(a.getByText("Waiting to start...")).toBeVisible(),await t(a.getByText("Uploading...")).toBeVisible(),await t(a.getByText("Upload interrupted.")).toBeVisible(),await t(a.getByText("Upload complete.")).toBeVisible(),await t(a.getByText("Error: File exceeds size limit.")).toBeVisible()}},v={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"small",value:50,label:"File Upload",caption:"Uploading..."}),e.jsx(s,{size:"medium",value:50,label:"File Upload",caption:"Uploading..."}),e.jsx(s,{size:"large",value:50,label:"File Upload",caption:"Uploading..."})]}),play:async({canvasElement:r})=>{const a=c(r),i=a.getAllByRole("progressbar");await t(i).toHaveLength(3);const o=a.getAllByText("File Upload");await t(o).toHaveLength(3);const l=a.getAllByText("50%");await t(l).toHaveLength(3)}},x={args:{value:60,label:"Processing",caption:e.jsxs("span",{children:["Step ",e.jsx("strong",{children:"3"})," of ",e.jsx("strong",{children:"5"})]})},play:async({canvasElement:r})=>{const a=c(r);await t(a.getByRole("progressbar")).toBeInTheDocument(),await t(a.getByText("Processing")).toBeVisible(),await t(a.getByText("3")).toBeInTheDocument(),await t(a.getByText("5")).toBeInTheDocument()}},b={args:{value:70,showValue:!1},play:async({canvasElement:r})=>{const a=c(r),i=a.getByRole("progressbar");await t(i).toBeInTheDocument(),await t(a.queryByText("70%")).not.toBeInTheDocument()}},y={render:r=>{const[a,i]=B.useState(r.value??0);return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"range",min:0,max:100,value:a,onChange:o=>i(Number(o.target.value))}),e.jsx(s,{...r,value:a})]})},args:{label:"File Upload",caption:"Uploading..."},play:async({canvasElement:r})=>{const a=c(r),i=a.getByRole("progressbar");await t(i).toBeInTheDocument();const o=a.getByRole("slider");await t(o).toBeInTheDocument(),await t(a.getByText("0%")).toBeInTheDocument(),await t(i).toHaveAttribute("aria-valuenow","0"),await t(o).toHaveAttribute("min","0"),await t(o).toHaveAttribute("max","100")}},U={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(s,{size:"small",variant:"initial",value:0,label:"File Upload",caption:"Waiting to start..."}),e.jsx(s,{size:"small",variant:"progress",value:35,label:"File Upload",caption:"Uploading..."}),e.jsx(s,{size:"small",variant:"interrupted",value:35,label:"File Upload",caption:"Upload interrupted."}),e.jsx(s,{size:"small",variant:"success",value:100,label:"File Upload",caption:"Upload complete."}),e.jsx(s,{size:"small",variant:"error",value:0,label:"File Upload",caption:"Error: File exceeds size limit."}),e.jsx(s,{size:"medium",variant:"initial",value:0,label:"File Upload",caption:"Waiting to start..."}),e.jsx(s,{size:"medium",variant:"progress",value:35,label:"File Upload",caption:"Uploading..."}),e.jsx(s,{size:"medium",variant:"interrupted",value:35,label:"File Upload",caption:"Upload interrupted."}),e.jsx(s,{size:"medium",variant:"success",value:100,label:"File Upload",caption:"Upload complete."}),e.jsx(s,{size:"medium",variant:"error",value:0,label:"File Upload",caption:"Error: File exceeds size limit."}),e.jsx(s,{size:"large",variant:"initial",value:0,label:"File Upload",caption:"Waiting to start..."}),e.jsx(s,{size:"large",variant:"progress",value:35,label:"File Upload",caption:"Uploading..."}),e.jsx(s,{size:"large",variant:"interrupted",value:35,label:"File Upload",caption:"Upload interrupted."}),e.jsx(s,{size:"large",variant:"success",value:100,label:"File Upload",caption:"Upload complete."}),e.jsx(s,{size:"large",variant:"error",value:0,label:"File Upload",caption:"Error: File exceeds size limit."})]}),play:async({canvasElement:r})=>{const a=c(r),i=a.getAllByRole("progressbar");await t(i).toHaveLength(15);const o=a.getAllByText("File Upload");await t(o).toHaveLength(15),await t(a.getAllByText("Waiting to start...")).toHaveLength(3),await t(a.getAllByText("Upload complete.")).toHaveLength(3)}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    value: 35,
    label: 'File Upload',
    caption: 'Uploading...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressbar = canvas.getByRole('progressbar');
    await expect(progressbar).toBeInTheDocument();
    await expect(canvas.getByText('File Upload')).toBeVisible();
    await expect(canvas.getByText('35%')).toBeVisible();
    await expect(canvas.getByText('Uploading...')).toBeVisible();
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <DsProgressLinear variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
            <DsProgressLinear variant="progress" value={35} label="File Upload" caption="Uploading..." />
            <DsProgressLinear variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
            <DsProgressLinear variant="success" value={100} label="File Upload" caption="Upload complete." />
            <DsProgressLinear variant="error" value={0} label="File Upload" caption="Error: File exceeds size limit." />
        </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBars = canvas.getAllByRole('progressbar');
    await expect(progressBars).toHaveLength(5);
    await expect(canvas.getByText('Waiting to start...')).toBeVisible();
    await expect(canvas.getByText('Uploading...')).toBeVisible();
    await expect(canvas.getByText('Upload interrupted.')).toBeVisible();
    await expect(canvas.getByText('Upload complete.')).toBeVisible();
    await expect(canvas.getByText('Error: File exceeds size limit.')).toBeVisible();
  }
}`,...m.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <DsProgressLinear size="small" value={50} label="File Upload" caption="Uploading..." />
            <DsProgressLinear size="medium" value={50} label="File Upload" caption="Uploading..." />
            <DsProgressLinear size="large" value={50} label="File Upload" caption="Uploading..." />
        </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBars = canvas.getAllByRole('progressbar');
    await expect(progressBars).toHaveLength(3);
    const labels = canvas.getAllByText('File Upload');
    await expect(labels).toHaveLength(3);
    const values = canvas.getAllByText('50%');
    await expect(values).toHaveLength(3);
  }
}`,...v.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: 'Processing',
    caption: <span>
                Step <strong>3</strong> of <strong>5</strong>
            </span>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('progressbar')).toBeInTheDocument();
    await expect(canvas.getByText('Processing')).toBeVisible();

    // Verify custom ReactNode caption renders with strong tags for numbers
    await expect(canvas.getByText('3')).toBeInTheDocument();
    await expect(canvas.getByText('5')).toBeInTheDocument();
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    showValue: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressbar = canvas.getByRole('progressbar');
    await expect(progressbar).toBeInTheDocument();
    await expect(canvas.queryByText('70%')).not.toBeInTheDocument();
  }
}`,...b.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 0);
    return <>
                <input type="range" min={0} max={100} value={value} onChange={e => setValue(Number(e.target.value))} />

                <DsProgressLinear {...args} value={value} />
            </>;
  },
  args: {
    label: 'File Upload',
    caption: 'Uploading...'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressbar = canvas.getByRole('progressbar');
    await expect(progressbar).toBeInTheDocument();
    const slider = canvas.getByRole('slider');
    await expect(slider).toBeInTheDocument();

    // Verify initial state
    await expect(canvas.getByText('0%')).toBeInTheDocument();
    await expect(progressbar).toHaveAttribute('aria-valuenow', '0');

    // Verify the slider and progressbar are connected (both have min/max attributes)
    await expect(slider).toHaveAttribute('min', '0');
    await expect(slider).toHaveAttribute('max', '100');
  }
}`,...y.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => <>
            <DsProgressLinear size="small" variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
            <DsProgressLinear size="small" variant="progress" value={35} label="File Upload" caption="Uploading..." />
            <DsProgressLinear size="small" variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
            <DsProgressLinear size="small" variant="success" value={100} label="File Upload" caption="Upload complete." />
            <DsProgressLinear size="small" variant="error" value={0} label="File Upload" caption="Error: File exceeds size limit." />

            <DsProgressLinear size="medium" variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
            <DsProgressLinear size="medium" variant="progress" value={35} label="File Upload" caption="Uploading..." />
            <DsProgressLinear size="medium" variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
            <DsProgressLinear size="medium" variant="success" value={100} label="File Upload" caption="Upload complete." />
            <DsProgressLinear size="medium" variant="error" value={0} label="File Upload" caption="Error: File exceeds size limit." />

            <DsProgressLinear size="large" variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
            <DsProgressLinear size="large" variant="progress" value={35} label="File Upload" caption="Uploading..." />
            <DsProgressLinear size="large" variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
            <DsProgressLinear size="large" variant="success" value={100} label="File Upload" caption="Upload complete." />
            <DsProgressLinear size="large" variant="error" value={0} label="File Upload" caption="Error: File exceeds size limit." />
        </>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const progressBars = canvas.getAllByRole('progressbar');
    await expect(progressBars).toHaveLength(15);
    const allLabels = canvas.getAllByText('File Upload');
    await expect(allLabels).toHaveLength(15);
    await expect(canvas.getAllByText('Waiting to start...')).toHaveLength(3);
    await expect(canvas.getAllByText('Upload complete.')).toHaveLength(3);
  }
}`,...U.parameters?.docs?.source}}};const De=["Default","AllVariants","Sizes","WithCustomCaption","BarOnly","Controlled","FullMatrix"];export{m as AllVariants,b as BarOnly,y as Controlled,g as Default,U as FullMatrix,v as Sizes,x as WithCustomCaption,De as __namedExportsOrder,Le as default};
