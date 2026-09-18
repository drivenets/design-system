import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{n}from"./iframe-V7H8WQFa.js";import{n as r,t as i}from"./classnames-DavMFNTn.js";import{n as a,t as o}from"./ds-icon-CwQK8g81.js";import{n as s,t as c}from"./progress-B5BfhgT0.js";import{n as l,t as u}from"./ds-typography-ClnFnIDB.js";import{n as d,t as f}from"./ds-stack-DC_qSfFt.js";import{n as p,t as m}from"./numbers-B2IFb9hj.js";var h,g,_,v,y,b,x,S,C,w,T,E,D;function O(){return(O=t((()=>{h=`_root_vnq48_1`,g=`_small_vnq48_5`,_=`_medium_vnq48_10`,v=`_circle_vnq48_15`,y=`_track_vnq48_20`,b=`_range_vnq48_25`,x=`_success_vnq48_34`,S=`_error_vnq48_39`,C=`_center_vnq48_43`,w=`_iconSuccess_vnq48_51`,T=`_iconError_vnq48_55`,E=`_iconMediumSize_vnq48_59`,D={root:h,small:g,medium:_,circle:v,track:y,range:b,default:`_default_vnq48_30`,success:x,error:S,center:C,iconSuccess:w,iconError:T,iconMediumSize:E}})))()}var k,A,j,M,N,P;function F(){return(F=t((()=>{k=r(),c(),A=e(i(),1),o(),u(),O(),p(),j=n(),M=Object.freeze({small:D.small,medium:D.medium}),N=Object.freeze({default:D.default,success:D.success,error:D.error}),P=e=>{let t=(0,k.c)(26),{value:n,size:r,variant:i,children:o,className:c,style:u,ref:d}=e,f=n===void 0?0:n,p=r===void 0?`medium`:r,h=i===void 0?`default`:i,g;t[0]!==f||t[1]!==h?(g=h===`success`?100:m(f),t[0]=f,t[1]=h,t[2]=g):g=t[2];let _=g,v;t[3]===p?v=t[4]:(v=(e,t)=>(0,j.jsx)(a,{variant:`rounded`,icon:e,size:`large`,className:(0,A.default)({[D.iconMediumSize]:p===`medium`},t)}),t[3]=p,t[4]=v);let y=v,b;t[5]!==o||t[6]!==_||t[7]!==y||t[8]!==p||t[9]!==h?(b=()=>o||(h===`success`?y(`check`,D.iconSuccess):h===`error`?y(`close`,D.iconError):(0,j.jsx)(l,{variant:p===`medium`?`heading3`:`body-md-md`,asChild:!0,children:(0,j.jsxs)(`span`,{children:[_,`%`]})})),t[5]=o,t[6]=_,t[7]=y,t[8]=p,t[9]=h,t[10]=b):b=t[10];let x=b,S=d,C=M[p],w=N[h],T;t[11]!==c||t[12]!==C||t[13]!==w?(T=(0,A.default)(D.root,C,w,c),t[11]=c,t[12]=C,t[13]=w,t[14]=T):T=t[14];let E;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,j.jsxs)(s.Circle,{className:D.circle,children:[(0,j.jsx)(s.CircleTrack,{className:D.track}),(0,j.jsx)(s.CircleRange,{className:D.range})]}),t[15]=E):E=t[15];let O;t[16]===x?O=t[17]:(O=x(),t[16]=x,t[17]=O);let P;t[18]===O?P=t[19]:(P=(0,j.jsx)(`div`,{className:D.center,children:O}),t[18]=O,t[19]=P);let F;return t[20]!==_||t[21]!==u||t[22]!==T||t[23]!==P||t[24]!==S?(F=(0,j.jsxs)(s.Root,{ref:S,value:_,className:T,style:u,children:[E,P]}),t[20]=_,t[21]=u,t[22]=T,t[23]=P,t[24]=S,t[25]=F):F=t[25],F},P.displayName=`DsProgressDonut`})))()}var I,L;function R(){return(R=t((()=>{I=[`small`,`medium`],L=[`default`,`success`,`error`]})))()}function z(){return(z=t((()=>{F(),R()})))()}var B,V,H,U,W,G,K,q,J,Y,X;function Z(){return(Z=t((()=>{o(),d(),u(),z(),B=n(),V={title:`Components/ProgressDonut`,component:P,parameters:{layout:`centered`},argTypes:{value:{control:{type:`range`,min:0,max:100,step:1}},size:{control:{type:`select`},options:I},variant:{control:{type:`select`},options:L},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},H={args:{value:50}},U={args:{variant:`success`}},W={args:{variant:`error`,value:50}},G={args:{value:80,children:(0,B.jsx)(a,{icon:`warning`,size:`small`})}},K={args:{value:0}},q={args:{value:100}},J={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,B.jsx)(f,{direction:`column`,gap:`var(--xl)`,children:I.map(e=>(0,B.jsx)(f,{direction:`row`,gap:`var(--xl)`,alignItems:`center`,children:L.map(t=>(0,B.jsxs)(f,{direction:`column`,gap:`var(--xs)`,alignItems:`center`,children:[(0,B.jsx)(P,{size:e,variant:t,value:50}),(0,B.jsxs)(l,{variant:`body-sm-reg`,color:`secondary`,children:[e,` / `,t]})]},t))},e))})},Y={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,B.jsx)(f,{direction:`row`,gap:`var(--xl)`,alignItems:`center`,children:I.map(e=>(0,B.jsxs)(f,{direction:`column`,gap:`var(--xs)`,alignItems:`center`,children:[(0,B.jsx)(P,{size:e,value:75}),(0,B.jsx)(l,{variant:`body-sm-reg`,color:`secondary`,children:e})]},e))})},X=[`Default`,`Success`,`Error`,`CustomIcon`,`ZeroProgress`,`FullProgress`,`AllVariants`,`Sizes`],H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...H.parameters?.docs?.source},description:{story:`Default donut showing an in-progress percentage in the center.`,...H.parameters?.docs?.description}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...U.parameters?.docs?.source},description:{story:`Success state fills the donut and swaps the center label for a check icon.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    value: 50
  }
}`,...W.parameters?.docs?.source},description:{story:`Error state renders the error color and a close icon over the current value.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    children: <DsIcon icon="warning" size="small" />
  }
}`,...G.parameters?.docs?.source},description:{story:`Override the center content with your own icon instead of the percentage label.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...K.parameters?.docs?.source},description:{story:`Empty state at the start of a task.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...q.parameters?.docs?.source},description:{story:`Completed state without the success variant styling.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--xl)">
            {progressDonutSizes.map(size => <DsStack key={size} direction="row" gap="var(--xl)" alignItems="center">
                    {progressDonutVariants.map(variant => <DsStack key={variant} direction="column" gap="var(--xs)" alignItems="center">
                            <DsProgressDonut size={size} variant={variant} value={50} />
                            <DsTypography variant="body-sm-reg" color="secondary">
                                {size} / {variant}
                            </DsTypography>
                        </DsStack>)}
                </DsStack>)}
        </DsStack>
}`,...J.parameters?.docs?.source},description:{story:`Showcase of every variant across both sizes.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="row" gap="var(--xl)" alignItems="center">
            {progressDonutSizes.map(size => <DsStack key={size} direction="column" gap="var(--xs)" alignItems="center">
                    <DsProgressDonut size={size} value={75} />
                    <DsTypography variant="body-sm-reg" color="secondary">
                        {size}
                    </DsTypography>
                </DsStack>)}
        </DsStack>
}`,...Y.parameters?.docs?.source},description:{story:`Side-by-side comparison of the available sizes.`,...Y.parameters?.docs?.description}}}})))()}Z();export{J as AllVariants,G as CustomIcon,H as Default,W as Error,q as FullProgress,Y as Sizes,U as Success,K as ZeroProgress,X as __namedExportsOrder,V as default};