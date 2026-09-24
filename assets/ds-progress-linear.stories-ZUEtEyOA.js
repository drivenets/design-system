import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-BeLkEoK-.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as ee,t as o}from"./ds-icon-9oJOi3yZ.js";import{n as s,t as c}from"./progress-Qgd-5lKR.js";import{n as l,t as u}from"./ds-typography-DBrWNC4h.js";import{n as d,t as f}from"./ds-stack-C0edFJ2v.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P;function F(){return(F=t((()=>{p=`_root_17zrq_5`,m=`_sizeSmall_17zrq_10`,h=`_sizeMedium_17zrq_13`,g=`_sizeLarge_17zrq_13`,_=`_header_17zrq_17`,v=`_label_17zrq_23`,y=`_valueText_17zrq_34`,b=`_track_17zrq_46`,x=`_trackSmall_17zrq_53`,S=`_trackMedium_17zrq_57`,C=`_trackLarge_17zrq_61`,w=`_range_17zrq_65`,T=`_variantProgress_17zrq_71`,E=`_variantInterrupted_17zrq_75`,D=`_variantSuccess_17zrq_79`,O=`_variantError_17zrq_83`,k=`_caption_17zrq_87`,A=`_captionDefault_17zrq_100`,j=`_captionSuccess_17zrq_104`,M=`_captionError_17zrq_108`,N=`_captionInterrupted_17zrq_112`,P={root:p,sizeSmall:m,sizeMedium:h,sizeLarge:g,header:_,label:v,valueText:y,track:b,trackSmall:x,trackMedium:S,trackLarge:C,range:w,variantProgress:T,variantInterrupted:E,variantSuccess:D,variantError:O,caption:k,captionDefault:A,captionSuccess:j,captionError:M,captionInterrupted:N}})))()}function te(e,t,n){return n<=t?0:Math.round((e-t)/(n-t)*100)}var I,L,R,z,B,V,H,U,W;function G(){return(G=t((()=>{I=i(),c(),L=e(a(),1),o(),F(),R=r(),z=Object.freeze({initial:void 0,progress:P.variantProgress,interrupted:P.variantInterrupted,success:P.variantSuccess,error:P.variantError}),B=Object.freeze({initial:P.captionDefault,progress:P.captionDefault,interrupted:P.captionInterrupted,success:P.captionSuccess,error:P.captionError}),V=Object.freeze({success:`check_circle`,error:`cancel`,interrupted:`warning`}),H=Object.freeze({small:P.sizeSmall,medium:P.sizeMedium,large:P.sizeLarge}),U=Object.freeze({small:P.trackSmall,medium:P.trackMedium,large:P.trackLarge}),W=e=>{let t=(0,I.c)(37),{value:n,min:r,max:i,variant:a,size:o,label:c,showValue:l,caption:u,className:d,style:f,ref:p}=e,m=n===void 0?0:n,h=r===void 0?0:r,g=i===void 0?100:i,_=a===void 0?`progress`:a,v=o===void 0?`medium`:o,y=l===void 0||l,b=c!==void 0||y,x=V[_],S;t[0]!==g||t[1]!==h||t[2]!==m?(S=te(m,h,g),t[0]=g,t[1]=h,t[2]=m,t[3]=S):S=t[3];let C=S,w;t[4]!==x||t[5]!==_?(w=e=>e===void 0?null:typeof e==`string`?(0,R.jsxs)(`div`,{className:(0,L.default)(P.caption,B[_]),children:[x&&(0,R.jsx)(ee,{icon:x,size:`tiny`,filled:!0}),(0,R.jsx)(`span`,{children:e})]}):e,t[4]=x,t[5]=_,t[6]=w):w=t[6];let T=w,E=H[v],D;t[7]!==d||t[8]!==E?(D=(0,L.default)(P.root,E,d),t[7]=d,t[8]=E,t[9]=D):D=t[9];let O;t[10]!==b||t[11]!==c||t[12]!==C||t[13]!==y?(O=b&&(0,R.jsxs)(`div`,{className:P.header,children:[c&&(0,R.jsx)(s.Label,{className:P.label,children:c}),y&&(0,R.jsxs)(s.ValueText,{className:P.valueText,children:[C,`%`]})]}),t[10]=b,t[11]=c,t[12]=C,t[13]=y,t[14]=O):O=t[14];let k=U[v],A;t[15]===k?A=t[16]:(A=(0,L.default)(P.track,k),t[15]=k,t[16]=A);let j=z[_],M;t[17]===j?M=t[18]:(M=(0,L.default)(P.range,j),t[17]=j,t[18]=M);let N;t[19]===M?N=t[20]:(N=(0,R.jsx)(s.Range,{className:M}),t[19]=M,t[20]=N);let F;t[21]!==A||t[22]!==N?(F=(0,R.jsx)(s.Track,{className:A,children:N}),t[21]=A,t[22]=N,t[23]=F):F=t[23];let W;t[24]!==u||t[25]!==T?(W=T(u),t[24]=u,t[25]=T,t[26]=W):W=t[26];let G;return t[27]!==g||t[28]!==h||t[29]!==p||t[30]!==f||t[31]!==D||t[32]!==O||t[33]!==F||t[34]!==W||t[35]!==m?(G=(0,R.jsxs)(s.Root,{ref:p,value:m,min:h,max:g,className:D,style:f,children:[O,F,W]}),t[27]=g,t[28]=h,t[29]=p,t[30]=f,t[31]=D,t[32]=O,t[33]=F,t[34]=W,t[35]=m,t[36]=G):G=t[36],G},W.displayName=`DsProgressLinear`})))()}var ne,re;function ie(){return(ie=t((()=>{ne=[`initial`,`progress`,`interrupted`,`success`,`error`],re=[`small`,`medium`,`large`]})))()}function ae(){return(ae=t((()=>{G(),ie()})))()}var oe,K,se,q,J,Y,X,Z,Q,$,ce;function le(){return(le=t((()=>{oe=n(),d(),u(),ae(),K=r(),se={title:`Components/ProgressLinear`,component:W,parameters:{layout:`centered`},argTypes:{variant:{control:`radio`,options:ne},size:{control:`radio`,options:re},value:{control:{type:`range`,min:0,max:100,step:1}},showValue:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},q={args:{value:35,label:`File Upload`,caption:`Uploading...`}},J={args:{value:70,showValue:!1}},Y={args:{value:60,label:`Processing`,caption:(0,K.jsx)(l,{variant:`body-sm-reg`,color:`secondary`,children:`Step 3 of 5`})}},X={parameters:{docs:{source:{type:`code`}}},render:()=>{let[e,t]=(0,oe.useState)(35);return(0,K.jsxs)(f,{direction:`column`,gap:`var(--sm)`,width:`600px`,children:[(0,K.jsx)(`input`,{type:`range`,min:0,max:100,value:e,onChange:e=>t(Number(e.target.value))}),(0,K.jsx)(W,{value:e,label:`File Upload`,caption:`Uploading...`})]})}},Z={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,K.jsxs)(f,{direction:`column`,gap:`var(--xl)`,width:`600px`,children:[(0,K.jsx)(W,{variant:`initial`,value:0,label:`File Upload`,caption:`Waiting to start...`}),(0,K.jsx)(W,{variant:`progress`,value:35,label:`File Upload`,caption:`Uploading...`}),(0,K.jsx)(W,{variant:`interrupted`,value:35,label:`File Upload`,caption:`Upload interrupted.`}),(0,K.jsx)(W,{variant:`success`,value:100,label:`File Upload`,caption:`Upload complete.`}),(0,K.jsx)(W,{variant:`error`,value:0,label:`File Upload`,caption:`Error: File exceeds size limit.`})]})},Q={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,K.jsxs)(f,{direction:`column`,gap:`var(--xl)`,width:`600px`,children:[(0,K.jsxs)(f,{direction:`column`,gap:`var(--2xs)`,children:[(0,K.jsx)(l,{variant:`body-sm-md`,color:`secondary`,children:`Small`}),(0,K.jsx)(W,{size:`small`,value:50,label:`File Upload`,caption:`Uploading...`})]}),(0,K.jsxs)(f,{direction:`column`,gap:`var(--2xs)`,children:[(0,K.jsx)(l,{variant:`body-sm-md`,color:`secondary`,children:`Medium`}),(0,K.jsx)(W,{size:`medium`,value:50,label:`File Upload`,caption:`Uploading...`})]}),(0,K.jsxs)(f,{direction:`column`,gap:`var(--2xs)`,children:[(0,K.jsx)(l,{variant:`body-sm-md`,color:`secondary`,children:`Large`}),(0,K.jsx)(W,{size:`large`,value:50,label:`File Upload`,caption:`Uploading...`})]})]})},$={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,K.jsxs)(f,{direction:`column`,gap:`var(--2xl)`,width:`600px`,children:[(0,K.jsxs)(f,{direction:`column`,gap:`var(--sm)`,children:[(0,K.jsx)(l,{variant:`body-sm-semi-bold`,children:`Small`}),(0,K.jsx)(W,{size:`small`,variant:`initial`,value:0,label:`File Upload`,caption:`Waiting to start...`}),(0,K.jsx)(W,{size:`small`,variant:`progress`,value:35,label:`File Upload`,caption:`Uploading...`}),(0,K.jsx)(W,{size:`small`,variant:`interrupted`,value:35,label:`File Upload`,caption:`Upload interrupted.`}),(0,K.jsx)(W,{size:`small`,variant:`success`,value:100,label:`File Upload`,caption:`Upload complete.`}),(0,K.jsx)(W,{size:`small`,variant:`error`,value:0,label:`File Upload`,caption:`Error: File exceeds size limit.`})]}),(0,K.jsxs)(f,{direction:`column`,gap:`var(--sm)`,children:[(0,K.jsx)(l,{variant:`body-sm-semi-bold`,children:`Medium`}),(0,K.jsx)(W,{size:`medium`,variant:`initial`,value:0,label:`File Upload`,caption:`Waiting to start...`}),(0,K.jsx)(W,{size:`medium`,variant:`progress`,value:35,label:`File Upload`,caption:`Uploading...`}),(0,K.jsx)(W,{size:`medium`,variant:`interrupted`,value:35,label:`File Upload`,caption:`Upload interrupted.`}),(0,K.jsx)(W,{size:`medium`,variant:`success`,value:100,label:`File Upload`,caption:`Upload complete.`}),(0,K.jsx)(W,{size:`medium`,variant:`error`,value:0,label:`File Upload`,caption:`Error: File exceeds size limit.`})]}),(0,K.jsxs)(f,{direction:`column`,gap:`var(--sm)`,children:[(0,K.jsx)(l,{variant:`body-sm-semi-bold`,children:`Large`}),(0,K.jsx)(W,{size:`large`,variant:`initial`,value:0,label:`File Upload`,caption:`Waiting to start...`}),(0,K.jsx)(W,{size:`large`,variant:`progress`,value:35,label:`File Upload`,caption:`Uploading...`}),(0,K.jsx)(W,{size:`large`,variant:`interrupted`,value:35,label:`File Upload`,caption:`Upload interrupted.`}),(0,K.jsx)(W,{size:`large`,variant:`success`,value:100,label:`File Upload`,caption:`Upload complete.`}),(0,K.jsx)(W,{size:`large`,variant:`error`,value:0,label:`File Upload`,caption:`Error: File exceeds size limit.`})]})]})},ce=[`Default`,`BarOnly`,`WithCustomCaption`,`Controlled`,`AllVariants`,`Sizes`,`FullMatrix`],q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    value: 35,
    label: 'File Upload',
    caption: 'Uploading...'
  }
}`,...q.parameters?.docs?.source},description:{story:`Standard progress bar with a label, percentage value, and helper caption.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    value: 70,
    showValue: false
  }
}`,...J.parameters?.docs?.source},description:{story:`Bare progress track without the percentage value — use in compact or inline layouts.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 60,
    label: 'Processing',
    caption: <DsTypography variant="body-sm-reg" color="secondary">
                Step 3 of 5
            </DsTypography>
  }
}`,...Y.parameters?.docs?.source},description:{story:`Caption accepts a ReactNode when you need richer helper text than a plain string.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => {
    const [value, setValue] = useState(35);
    return <DsStack direction="column" gap="var(--sm)" width="600px">
                <input type="range" min={0} max={100} value={value} onChange={event => setValue(Number(event.target.value))} />
                <DsProgressLinear value={value} label="File Upload" caption="Uploading..." />
            </DsStack>;
  }
}`,...X.parameters?.docs?.source},description:{story:"Drive `value` from state to reflect live progress, e.g. an upload or long-running task.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--xl)" width="600px">
            <DsProgressLinear variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
            <DsProgressLinear variant="progress" value={35} label="File Upload" caption="Uploading..." />
            <DsProgressLinear variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
            <DsProgressLinear variant="success" value={100} label="File Upload" caption="Upload complete." />
            <DsProgressLinear variant="error" value={0} label="File Upload" caption="Error: File exceeds size limit." />
        </DsStack>
}`,...Z.parameters?.docs?.source},description:{story:`Showcase: every visual variant driving bar color and caption styling.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--xl)" width="600px">
            <DsStack direction="column" gap="var(--2xs)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Small
                </DsTypography>
                <DsProgressLinear size="small" value={50} label="File Upload" caption="Uploading..." />
            </DsStack>
            <DsStack direction="column" gap="var(--2xs)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Medium
                </DsTypography>
                <DsProgressLinear size="medium" value={50} label="File Upload" caption="Uploading..." />
            </DsStack>
            <DsStack direction="column" gap="var(--2xs)">
                <DsTypography variant="body-sm-md" color="secondary">
                    Large
                </DsTypography>
                <DsProgressLinear size="large" value={50} label="File Upload" caption="Uploading..." />
            </DsStack>
        </DsStack>
}`,...Q.parameters?.docs?.source},description:{story:`Showcase: the three track sizes side by side for visual comparison.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--2xl)" width="600px">
            <DsStack direction="column" gap="var(--sm)">
                <DsTypography variant="body-sm-semi-bold">Small</DsTypography>
                <DsProgressLinear size="small" variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
                <DsProgressLinear size="small" variant="progress" value={35} label="File Upload" caption="Uploading..." />
                <DsProgressLinear size="small" variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
                <DsProgressLinear size="small" variant="success" value={100} label="File Upload" caption="Upload complete." />
                <DsProgressLinear size="small" variant="error" value={0} label="File Upload" caption="Error: File exceeds size limit." />
            </DsStack>
            <DsStack direction="column" gap="var(--sm)">
                <DsTypography variant="body-sm-semi-bold">Medium</DsTypography>
                <DsProgressLinear size="medium" variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
                <DsProgressLinear size="medium" variant="progress" value={35} label="File Upload" caption="Uploading..." />
                <DsProgressLinear size="medium" variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
                <DsProgressLinear size="medium" variant="success" value={100} label="File Upload" caption="Upload complete." />
                <DsProgressLinear size="medium" variant="error" value={0} label="File Upload" caption="Error: File exceeds size limit." />
            </DsStack>
            <DsStack direction="column" gap="var(--sm)">
                <DsTypography variant="body-sm-semi-bold">Large</DsTypography>
                <DsProgressLinear size="large" variant="initial" value={0} label="File Upload" caption="Waiting to start..." />
                <DsProgressLinear size="large" variant="progress" value={35} label="File Upload" caption="Uploading..." />
                <DsProgressLinear size="large" variant="interrupted" value={35} label="File Upload" caption="Upload interrupted." />
                <DsProgressLinear size="large" variant="success" value={100} label="File Upload" caption="Upload complete." />
                <DsProgressLinear size="large" variant="error" value={0} label="File Upload" caption="Error: File exceeds size limit." />
            </DsStack>
        </DsStack>
}`,...$.parameters?.docs?.source},description:{story:`Showcase: full size × variant matrix for design review.`,...$.parameters?.docs?.description}}}})))()}le();export{Z as AllVariants,J as BarOnly,X as Controlled,q as Default,$ as FullMatrix,Q as Sizes,Y as WithCustomCaption,ce as __namedExportsOrder,se as default};