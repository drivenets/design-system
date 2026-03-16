import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-C9uDkflI.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{i as ee}from"./ds-icon.types-Cz-xbgKU.js";import{t as a}from"./ds-icon-TN5Riuhi.js";import{c as te,d as ne,f as re,l as ie,t as o,u as ae}from"./dist-VS33Febj.js";var s,c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,oe=t((()=>{s=`_root_f11ta_1`,c=`_sizeSmall_f11ta_6`,l=`_sizeMedium_f11ta_9`,u=`_sizeLarge_f11ta_9`,d=`_header_f11ta_13`,f=`_label_f11ta_19`,p=`_valueText_f11ta_30`,m=`_track_f11ta_42`,h=`_trackSmall_f11ta_49`,g=`_trackMedium_f11ta_53`,_=`_trackLarge_f11ta_57`,v=`_range_f11ta_61`,y=`_variantProgress_f11ta_67`,b=`_variantInterrupted_f11ta_71`,x=`_variantSuccess_f11ta_75`,S=`_variantError_f11ta_79`,C=`_caption_f11ta_83`,w=`_captionDefault_f11ta_96`,T=`_captionSuccess_f11ta_100`,E=`_captionError_f11ta_104`,D=`_captionInterrupted_f11ta_108`,O={root:s,sizeSmall:c,sizeMedium:l,sizeLarge:u,header:d,label:f,valueText:p,track:m,trackSmall:h,trackMedium:g,trackLarge:_,range:v,variantProgress:y,variantInterrupted:b,variantSuccess:x,variantError:S,caption:C,captionDefault:w,captionSuccess:T,captionError:E,captionInterrupted:D}}));function se(e,t,n){return n<=t?0:Math.round((e-t)/(n-t)*100)}var ce=t((()=>{})),k,A,j,M,N,P,F,I,le=t((()=>{o(),k=e(i(),1),a(),oe(),ce(),A=r(),j=Object.freeze({initial:void 0,progress:O.variantProgress,interrupted:O.variantInterrupted,success:O.variantSuccess,error:O.variantError}),M=Object.freeze({initial:O.captionDefault,progress:O.captionDefault,interrupted:O.captionInterrupted,success:O.captionSuccess,error:O.captionError}),N=Object.freeze({success:`check_circle`,error:`cancel`,interrupted:`warning`}),P=Object.freeze({small:O.sizeSmall,medium:O.sizeMedium,large:O.sizeLarge}),F=Object.freeze({small:O.trackSmall,medium:O.trackMedium,large:O.trackLarge}),I=({value:e=0,min:t=0,max:n=100,variant:r=`progress`,size:i=`medium`,label:a,showValue:o=!0,caption:s,className:c,style:l,ref:u})=>{let d=a!==void 0||o,f=N[r],p=se(e,t,n);return(0,A.jsxs)(ae,{ref:u,value:e,min:t,max:n,className:(0,k.default)(O.root,P[i],c),style:l,children:[d&&(0,A.jsxs)(`div`,{className:O.header,children:[a&&(0,A.jsx)(re,{className:O.label,children:a}),o&&(0,A.jsxs)(te,{className:O.valueText,children:[p,`%`]})]}),(0,A.jsx)(ie,{className:(0,k.default)(O.track,F[i]),children:(0,A.jsx)(ne,{className:(0,k.default)(O.range,j[r])})}),(e=>e===void 0?null:typeof e==`string`?(0,A.jsxs)(`div`,{className:(0,k.default)(O.caption,M[r]),children:[f&&(0,A.jsx)(ee,{icon:f,size:`tiny`,filled:!0}),(0,A.jsx)(`span`,{children:e})]}):e)(s)]})},I.__docgenInfo={description:`Design system ProgressLinear component`,methods:[],displayName:`DsProgressLinear`,props:{value:{required:!1,tsType:{name:`number`},description:`The current progress value (0–100)
@default 0`,defaultValue:{value:`0`,computed:!1}},min:{required:!1,tsType:{name:`number`},description:`The minimum value
@default 0`,defaultValue:{value:`0`,computed:!1}},max:{required:!1,tsType:{name:`number`},description:`The maximum value
@default 100`,defaultValue:{value:`100`,computed:!1}},variant:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof progressLinearVariants)[number]`},description:`The visual variant controlling bar color and caption styling
@default 'progress'`,defaultValue:{value:`'progress'`,computed:!1}},size:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof progressLinearSizes)[number]`},description:`The size of the progress bar track
@default 'medium'`,defaultValue:{value:`'medium'`,computed:!1}},label:{required:!1,tsType:{name:`ReactReactNode`,raw:`React.ReactNode`},description:`Label displayed above the progress bar (left side)`},showValue:{required:!1,tsType:{name:`boolean`},description:`Whether to show the percentage value text (right side of label row)
@default true`,defaultValue:{value:`true`,computed:!1}},caption:{required:!1,tsType:{name:`union`,raw:`React.ReactNode | string`,elements:[{name:`ReactReactNode`,raw:`React.ReactNode`},{name:`string`}]},description:`Caption/helper text below the progress bar.
When a string is provided, it is auto-styled with an icon and color based on the variant.
When a ReactNode is provided, it is rendered as-is.`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Additional styles to apply to the component`},ref:{required:!1,tsType:{name:`ReactRef`,raw:`React.Ref<HTMLDivElement>`,elements:[{name:`HTMLDivElement`}]},description:`Ref to the root element`}}}})),L,R,ue=t((()=>{L=[`initial`,`progress`,`interrupted`,`success`,`error`],R=[`small`,`medium`,`large`]})),de=t((()=>{le(),ue()})),z,B,fe=t((()=>{z=`_grid_t9qzr_1`,B={grid:z}})),V,H,U,W,G,K,q,J,Y,X,Z,Q,$;t((()=>{V=e(n(),1),de(),fe(),H=r(),{expect:U,within:W}=__STORYBOOK_MODULE_TEST__,G={title:`Design System/ProgressLinear`,component:I,parameters:{layout:`centered`},decorators:[e=>(0,H.jsx)(`div`,{className:B.grid,children:(0,H.jsx)(e,{})})],argTypes:{variant:{control:`radio`,options:L},size:{control:`radio`,options:R},value:{control:{type:`range`,min:0,max:100,step:1}},showValue:{control:`boolean`}}},K={args:{value:35,label:`File Upload`,caption:`Uploading...`},play:async({canvasElement:e})=>{let t=W(e);await U(t.getByRole(`progressbar`)).toBeInTheDocument(),await U(t.getByText(`File Upload`)).toBeVisible(),await U(t.getByText(`35%`)).toBeVisible(),await U(t.getByText(`Uploading...`)).toBeVisible()}},q={render:()=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(I,{variant:`initial`,value:0,label:`File Upload`,caption:`Waiting to start...`}),(0,H.jsx)(I,{variant:`progress`,value:35,label:`File Upload`,caption:`Uploading...`}),(0,H.jsx)(I,{variant:`interrupted`,value:35,label:`File Upload`,caption:`Upload interrupted.`}),(0,H.jsx)(I,{variant:`success`,value:100,label:`File Upload`,caption:`Upload complete.`}),(0,H.jsx)(I,{variant:`error`,value:0,label:`File Upload`,caption:`Error: File exceeds size limit.`})]}),play:async({canvasElement:e})=>{let t=W(e);await U(t.getAllByRole(`progressbar`)).toHaveLength(5),await U(t.getByText(`Waiting to start...`)).toBeVisible(),await U(t.getByText(`Uploading...`)).toBeVisible(),await U(t.getByText(`Upload interrupted.`)).toBeVisible(),await U(t.getByText(`Upload complete.`)).toBeVisible(),await U(t.getByText(`Error: File exceeds size limit.`)).toBeVisible()}},J={render:()=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(I,{size:`small`,value:50,label:`File Upload`,caption:`Uploading...`}),(0,H.jsx)(I,{size:`medium`,value:50,label:`File Upload`,caption:`Uploading...`}),(0,H.jsx)(I,{size:`large`,value:50,label:`File Upload`,caption:`Uploading...`})]}),play:async({canvasElement:e})=>{let t=W(e);await U(t.getAllByRole(`progressbar`)).toHaveLength(3),await U(t.getAllByText(`File Upload`)).toHaveLength(3),await U(t.getAllByText(`50%`)).toHaveLength(3)}},Y={args:{value:60,label:`Processing`,caption:(0,H.jsxs)(`span`,{children:[`Step `,(0,H.jsx)(`strong`,{children:`3`}),` of `,(0,H.jsx)(`strong`,{children:`5`})]})},play:async({canvasElement:e})=>{let t=W(e);await U(t.getByRole(`progressbar`)).toBeInTheDocument(),await U(t.getByText(`Processing`)).toBeVisible(),await U(t.getByText(`3`)).toBeInTheDocument(),await U(t.getByText(`5`)).toBeInTheDocument()}},X={args:{value:70,showValue:!1},play:async({canvasElement:e})=>{let t=W(e);await U(t.getByRole(`progressbar`)).toBeInTheDocument(),await U(t.queryByText(`70%`)).not.toBeInTheDocument()}},Z={render:e=>{let[t,n]=(0,V.useState)(e.value??0);return(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(`input`,{type:`range`,min:0,max:100,value:t,onChange:e=>n(Number(e.target.value))}),(0,H.jsx)(I,{...e,value:t})]})},args:{label:`File Upload`,caption:`Uploading...`},play:async({canvasElement:e})=>{let t=W(e),n=t.getByRole(`progressbar`);await U(n).toBeInTheDocument();let r=t.getByRole(`slider`);await U(r).toBeInTheDocument(),await U(t.getByText(`0%`)).toBeInTheDocument(),await U(n).toHaveAttribute(`aria-valuenow`,`0`),await U(r).toHaveAttribute(`min`,`0`),await U(r).toHaveAttribute(`max`,`100`)}},Q={render:()=>(0,H.jsxs)(H.Fragment,{children:[(0,H.jsx)(I,{size:`small`,variant:`initial`,value:0,label:`File Upload`,caption:`Waiting to start...`}),(0,H.jsx)(I,{size:`small`,variant:`progress`,value:35,label:`File Upload`,caption:`Uploading...`}),(0,H.jsx)(I,{size:`small`,variant:`interrupted`,value:35,label:`File Upload`,caption:`Upload interrupted.`}),(0,H.jsx)(I,{size:`small`,variant:`success`,value:100,label:`File Upload`,caption:`Upload complete.`}),(0,H.jsx)(I,{size:`small`,variant:`error`,value:0,label:`File Upload`,caption:`Error: File exceeds size limit.`}),(0,H.jsx)(I,{size:`medium`,variant:`initial`,value:0,label:`File Upload`,caption:`Waiting to start...`}),(0,H.jsx)(I,{size:`medium`,variant:`progress`,value:35,label:`File Upload`,caption:`Uploading...`}),(0,H.jsx)(I,{size:`medium`,variant:`interrupted`,value:35,label:`File Upload`,caption:`Upload interrupted.`}),(0,H.jsx)(I,{size:`medium`,variant:`success`,value:100,label:`File Upload`,caption:`Upload complete.`}),(0,H.jsx)(I,{size:`medium`,variant:`error`,value:0,label:`File Upload`,caption:`Error: File exceeds size limit.`}),(0,H.jsx)(I,{size:`large`,variant:`initial`,value:0,label:`File Upload`,caption:`Waiting to start...`}),(0,H.jsx)(I,{size:`large`,variant:`progress`,value:35,label:`File Upload`,caption:`Uploading...`}),(0,H.jsx)(I,{size:`large`,variant:`interrupted`,value:35,label:`File Upload`,caption:`Upload interrupted.`}),(0,H.jsx)(I,{size:`large`,variant:`success`,value:100,label:`File Upload`,caption:`Upload complete.`}),(0,H.jsx)(I,{size:`large`,variant:`error`,value:0,label:`File Upload`,caption:`Error: File exceeds size limit.`})]}),play:async({canvasElement:e})=>{let t=W(e);await U(t.getAllByRole(`progressbar`)).toHaveLength(15),await U(t.getAllByText(`File Upload`)).toHaveLength(15),await U(t.getAllByText(`Waiting to start...`)).toHaveLength(3),await U(t.getAllByText(`Upload complete.`)).toHaveLength(3)}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`,`AllVariants`,`Sizes`,`WithCustomCaption`,`BarOnly`,`Controlled`,`FullMatrix`]}))();export{q as AllVariants,X as BarOnly,Z as Controlled,K as Default,Q as FullMatrix,J as Sizes,Y as WithCustomCaption,$ as __namedExportsOrder,G as default};