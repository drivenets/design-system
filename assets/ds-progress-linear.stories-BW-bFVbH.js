import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as B}from"./iframe-B1gKZKuc.js";import{c as u}from"./index-CI5Pb9HH.js";import{D as E}from"./ds-icon-DIuKbzlJ.js";import{u as w,P as I,a as A,b as H}from"./progress-track-CLiNP0PA.js";import{a as T}from"./use-locale-context-DyIBVjNs.js";import{Q as F}from"./index-1kKNXetD.js";import"./preload-helper-PPVm8Dsz.js";import"./create-split-props-u5h9OPvL.js";import"./index-DOIMq0Xz.js";import"./index-CcgyKgzY.js";const _=B.forwardRef((s,a)=>{const i=w(),n=F(i.getLabelProps(),s);return e.jsx(T.label,{...n,ref:a})});_.displayName="ProgressLabel";const z=B.forwardRef((s,a)=>{const{children:i,...n}=s,o=w(),p=F(o.getValueTextProps(),n);return e.jsx(T.span,{...p,ref:a,children:i||o.percentAsString})});z.displayName="ProgressValueText";const k="_root_16du1_1",N="_sizeSmall_16du1_6",C="_sizeMedium_16du1_9",W="_sizeLarge_16du1_9",q="_header_16du1_13",M="_label_16du1_19",O="_valueText_16du1_30",K="_track_16du1_42",Q="_trackSmall_16du1_49",Y="_trackMedium_16du1_53",$="_trackLarge_16du1_57",G="_range_16du1_61",J="_variantProgress_16du1_67",X="_variantInterrupted_16du1_71",Z="_variantSuccess_16du1_75",ee="_variantFailed_16du1_79",ae="_caption_16du1_83",te="_captionDefault_16du1_96",se="_captionSuccess_16du1_100",re="_captionFailed_16du1_104",ie="_captionInterrupted_16du1_108",l={root:k,sizeSmall:N,sizeMedium:C,sizeLarge:W,header:q,label:M,valueText:O,track:K,trackSmall:Q,trackMedium:Y,trackLarge:$,range:G,variantProgress:J,variantInterrupted:X,variantSuccess:Z,variantFailed:ee,caption:ae,captionDefault:te,captionSuccess:se,captionFailed:re,captionInterrupted:ie};function le(s,a,i){return i<=a?0:Math.round((s-a)/(i-a)*100)}const ne=Object.freeze({initial:void 0,progress:l.variantProgress,interrupted:l.variantInterrupted,success:l.variantSuccess,failed:l.variantFailed}),oe=Object.freeze({initial:l.captionDefault,progress:l.captionDefault,interrupted:l.captionInterrupted,success:l.captionSuccess,failed:l.captionFailed}),ce=Object.freeze({success:"check_circle",failed:"cancel",interrupted:"warning"}),pe=Object.freeze({small:l.sizeSmall,medium:l.sizeMedium,large:l.sizeLarge}),de=Object.freeze({small:l.trackSmall,medium:l.trackMedium,large:l.trackLarge}),r=({value:s=0,min:a=0,max:i=100,variant:n="progress",size:o="medium",label:p,showValue:h=!0,caption:L,className:D,style:P,ref:j})=>{const S=p!==void 0||h,f=ce[n],V=le(s,a,i),R=d=>d===void 0?null:typeof d!="string"?d:e.jsxs("div",{className:u(l.caption,oe[n]),children:[f&&e.jsx(E,{icon:f,size:"tiny",filled:!0}),e.jsx("span",{children:d})]});return e.jsxs(I,{ref:j,value:s,min:a,max:i,className:u(l.root,pe[o],D),style:P,children:[S&&e.jsxs("div",{className:l.header,children:[p&&e.jsx(_,{className:l.label,children:p}),h&&e.jsxs(z,{className:l.valueText,children:[V,"%"]})]}),e.jsx(A,{className:u(l.track,de[o]),children:e.jsx(H,{className:u(l.range,ne[n])})}),R(L)]})};r.__docgenInfo={description:"Design system ProgressLinear component",methods:[],displayName:"DsProgressLinear",props:{value:{required:!1,tsType:{name:"number"},description:`The current progress value (0–100)
@default 0`,defaultValue:{value:"0",computed:!1}},min:{required:!1,tsType:{name:"number"},description:`The minimum value
@default 0`,defaultValue:{value:"0",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`The maximum value
@default 100`,defaultValue:{value:"100",computed:!1}},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressLinearVariants)[number]"},description:`The visual variant controlling bar color and caption styling
@default 'progress'`,defaultValue:{value:"'progress'",computed:!1}},size:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof progressLinearSizes)[number]"},description:`The size of the progress bar track
@default 'medium'`,defaultValue:{value:"'medium'",computed:!1}},label:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"Label displayed above the progress bar (left side)"},showValue:{required:!1,tsType:{name:"boolean"},description:`Whether to show the percentage value text (right side of label row)
@default true`,defaultValue:{value:"true",computed:!1}},caption:{required:!1,tsType:{name:"union",raw:"React.ReactNode | string",elements:[{name:"ReactReactNode",raw:"React.ReactNode"},{name:"string"}]},description:`Caption/helper text below the progress bar.
When a string is provided, it is auto-styled with an icon and color based on the variant.
When a ReactNode is provided, it is rendered as-is.`},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to apply to the component"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref to the root element"}}};const ue=["initial","progress","interrupted","success","failed"],ge=["small","medium","large"],me="_grid_t9qzr_1",ve={grid:me},{expect:t,within:c}=__STORYBOOK_MODULE_TEST__,ze={title:"Design System/ProgressLinear",component:r,tags:["autodocs"],parameters:{layout:"centered"},decorators:[s=>e.jsx("div",{className:ve.grid,children:e.jsx(s,{})})],argTypes:{variant:{control:"radio",options:ue},size:{control:"radio",options:ge},value:{control:{type:"range",min:0,max:100,step:1}},showValue:{control:"boolean"}}},g={args:{value:35,label:"File Upload",caption:"Uploading..."},play:async({canvasElement:s})=>{const a=c(s),i=a.getByRole("progressbar");await t(i).toBeInTheDocument(),await t(a.getByText("File Upload")).toBeVisible(),await t(a.getByText("35%")).toBeVisible(),await t(a.getByText("Uploading...")).toBeVisible()}},m={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{variant:"initial",value:0,label:"File Upload",caption:"Waiting to start..."}),e.jsx(r,{variant:"progress",value:35,label:"File Upload",caption:"Uploading..."}),e.jsx(r,{variant:"interrupted",value:35,label:"File Upload",caption:"Upload interrupted."}),e.jsx(r,{variant:"success",value:100,label:"File Upload",caption:"Upload complete."}),e.jsx(r,{variant:"failed",value:0,label:"File Upload",caption:"Error: File exceeds size limit."})]}),play:async({canvasElement:s})=>{const a=c(s),i=a.getAllByRole("progressbar");await t(i).toHaveLength(5),await t(a.getByText("Waiting to start...")).toBeVisible(),await t(a.getByText("Uploading...")).toBeVisible(),await t(a.getByText("Upload interrupted.")).toBeVisible(),await t(a.getByText("Upload complete.")).toBeVisible(),await t(a.getByText("Error: File exceeds size limit.")).toBeVisible()}},v={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"small",value:50,label:"File Upload",caption:"Uploading..."}),e.jsx(r,{size:"medium",value:50,label:"File Upload",caption:"Uploading..."}),e.jsx(r,{size:"large",value:50,label:"File Upload",caption:"Uploading..."})]}),play:async({canvasElement:s})=>{const a=c(s),i=a.getAllByRole("progressbar");await t(i).toHaveLength(3);const n=a.getAllByText("File Upload");await t(n).toHaveLength(3);const o=a.getAllByText("50%");await t(o).toHaveLength(3)}},x={args:{value:60,label:"Processing",caption:e.jsxs("span",{children:["Step ",e.jsx("strong",{children:"3"})," of ",e.jsx("strong",{children:"5"})]})},play:async({canvasElement:s})=>{const a=c(s);await t(a.getByRole("progressbar")).toBeInTheDocument(),await t(a.getByText("Processing")).toBeVisible(),await t(a.getByText("3")).toBeInTheDocument(),await t(a.getByText("5")).toBeInTheDocument()}},b={args:{value:70,showValue:!1},play:async({canvasElement:s})=>{const a=c(s),i=a.getByRole("progressbar");await t(i).toBeInTheDocument(),await t(a.queryByText("70%")).not.toBeInTheDocument()}},y={render:s=>{const[a,i]=B.useState(s.value??0);return e.jsxs(e.Fragment,{children:[e.jsx("input",{type:"range",min:0,max:100,value:a,onChange:n=>i(Number(n.target.value))}),e.jsx(r,{...s,value:a})]})},args:{label:"File Upload",caption:"Uploading..."},play:async({canvasElement:s})=>{const a=c(s),i=a.getByRole("progressbar");await t(i).toBeInTheDocument();const n=a.getByRole("slider");await t(n).toBeInTheDocument(),await t(a.getByText("0%")).toBeInTheDocument(),await t(i).toHaveAttribute("aria-valuenow","0"),await t(n).toHaveAttribute("min","0"),await t(n).toHaveAttribute("max","100")}},U={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{size:"small",variant:"initial",value:0,label:"File Upload",caption:"Waiting to start..."}),e.jsx(r,{size:"small",variant:"progress",value:35,label:"File Upload",caption:"Uploading..."}),e.jsx(r,{size:"small",variant:"interrupted",value:35,label:"File Upload",caption:"Upload interrupted."}),e.jsx(r,{size:"small",variant:"success",value:100,label:"File Upload",caption:"Upload complete."}),e.jsx(r,{size:"small",variant:"failed",value:0,label:"File Upload",caption:"Error: File exceeds size limit."}),e.jsx(r,{size:"medium",variant:"initial",value:0,label:"File Upload",caption:"Waiting to start..."}),e.jsx(r,{size:"medium",variant:"progress",value:35,label:"File Upload",caption:"Uploading..."}),e.jsx(r,{size:"medium",variant:"interrupted",value:35,label:"File Upload",caption:"Upload interrupted."}),e.jsx(r,{size:"medium",variant:"success",value:100,label:"File Upload",caption:"Upload complete."}),e.jsx(r,{size:"medium",variant:"failed",value:0,label:"File Upload",caption:"Error: File exceeds size limit."}),e.jsx(r,{size:"large",variant:"initial",value:0,label:"File Upload",caption:"Waiting to start..."}),e.jsx(r,{size:"large",variant:"progress",value:35,label:"File Upload",caption:"Uploading..."}),e.jsx(r,{size:"large",variant:"interrupted",value:35,label:"File Upload",caption:"Upload interrupted."}),e.jsx(r,{size:"large",variant:"success",value:100,label:"File Upload",caption:"Upload complete."}),e.jsx(r,{size:"large",variant:"failed",value:0,label:"File Upload",caption:"Error: File exceeds size limit."})]}),play:async({canvasElement:s})=>{const a=c(s),i=a.getAllByRole("progressbar");await t(i).toHaveLength(15);const n=a.getAllByText("File Upload");await t(n).toHaveLength(15),await t(a.getAllByText("Waiting to start...")).toHaveLength(3),await t(a.getAllByText("Upload complete.")).toHaveLength(3)}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
            <DsProgressLinear variant="failed" value={0} label="File Upload" caption="Error: File exceeds size limit." />
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
            <DsProgressLinear size="small" variant="failed" value={0} label="File Upload" caption="Error: File exceeds size limit." />

            <DsProgressLinear size="medium" variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
            <DsProgressLinear size="medium" variant="progress" value={35} label="File Upload" caption="Uploading..." />
            <DsProgressLinear size="medium" variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
            <DsProgressLinear size="medium" variant="success" value={100} label="File Upload" caption="Upload complete." />
            <DsProgressLinear size="medium" variant="failed" value={0} label="File Upload" caption="Error: File exceeds size limit." />

            <DsProgressLinear size="large" variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
            <DsProgressLinear size="large" variant="progress" value={35} label="File Upload" caption="Uploading..." />
            <DsProgressLinear size="large" variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
            <DsProgressLinear size="large" variant="success" value={100} label="File Upload" caption="Upload complete." />
            <DsProgressLinear size="large" variant="failed" value={0} label="File Upload" caption="Error: File exceeds size limit." />
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
}`,...U.parameters?.docs?.source}}};const Le=["Default","AllVariants","Sizes","WithCustomCaption","BarOnly","Controlled","FullMatrix"];export{m as AllVariants,b as BarOnly,y as Controlled,g as Default,U as FullMatrix,v as Sizes,x as WithCustomCaption,Le as __namedExportsOrder,ze as default};
