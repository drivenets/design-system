import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./classnames-Cm4Wq5Eu.js";import{n as a,t as o}from"./ds-icon-BRZFUTMz.js";import{l as s,t as c}from"./dist-D0pUbhFh.js";import{n as l,t as u}from"./ds-typography-BLoO5j9q.js";import{n as d,t as f}from"./ds-stack-GU0hZWeR.js";import{n as p,t as m}from"./numbers-6rstj9CL.js";var h,g,_,v,y,b,x,S,C,w,T,E,D,O=t((()=>{h=`_root_vnq48_1`,g=`_small_vnq48_5`,_=`_medium_vnq48_10`,v=`_circle_vnq48_15`,y=`_track_vnq48_20`,b=`_range_vnq48_25`,x=`_success_vnq48_34`,S=`_error_vnq48_39`,C=`_center_vnq48_43`,w=`_iconSuccess_vnq48_51`,T=`_iconError_vnq48_55`,E=`_iconMediumSize_vnq48_59`,D={root:h,small:g,medium:_,circle:v,track:y,range:b,default:`_default_vnq48_30`,success:x,error:S,center:C,iconSuccess:w,iconError:T,iconMediumSize:E}})),k=t((()=>{p()})),A,j,M,N,P,F,I=t((()=>{A=r(),c(),j=e(i(),1),o(),u(),O(),k(),M=n(),N=Object.freeze({small:D.small,medium:D.medium}),P=Object.freeze({default:D.default,success:D.success,error:D.error}),F=e=>{let t=(0,A.c)(26),{value:n,size:r,variant:i,children:o,className:c,style:u,ref:d}=e,f=n===void 0?0:n,p=r===void 0?`medium`:r,h=i===void 0?`default`:i,g;t[0]!==f||t[1]!==h?(g=h===`success`?100:m(f),t[0]=f,t[1]=h,t[2]=g):g=t[2];let _=g,v;t[3]===p?v=t[4]:(v=(e,t)=>(0,M.jsx)(a,{variant:`rounded`,icon:e,size:`large`,className:(0,j.default)({[D.iconMediumSize]:p===`medium`},t)}),t[3]=p,t[4]=v);let y=v,b;t[5]!==o||t[6]!==_||t[7]!==y||t[8]!==p||t[9]!==h?(b=()=>o||(h===`success`?y(`check`,D.iconSuccess):h===`error`?y(`close`,D.iconError):(0,M.jsx)(l,{variant:p===`medium`?`heading3`:`body-md-md`,asChild:!0,children:(0,M.jsxs)(`span`,{children:[_,`%`]})})),t[5]=o,t[6]=_,t[7]=y,t[8]=p,t[9]=h,t[10]=b):b=t[10];let x=b,S=d,C=N[p],w=P[h],T;t[11]!==c||t[12]!==C||t[13]!==w?(T=(0,j.default)(D.root,C,w,c),t[11]=c,t[12]=C,t[13]=w,t[14]=T):T=t[14];let E;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,M.jsxs)(s.Circle,{className:D.circle,children:[(0,M.jsx)(s.CircleTrack,{className:D.track}),(0,M.jsx)(s.CircleRange,{className:D.range})]}),t[15]=E):E=t[15];let O;t[16]===x?O=t[17]:(O=x(),t[16]=x,t[17]=O);let k;t[18]===O?k=t[19]:(k=(0,M.jsx)(`div`,{className:D.center,children:O}),t[18]=O,t[19]=k);let F;return t[20]!==_||t[21]!==u||t[22]!==T||t[23]!==k||t[24]!==S?(F=(0,M.jsxs)(s.Root,{ref:S,value:_,className:T,style:u,children:[E,k]}),t[20]=_,t[21]=u,t[22]=T,t[23]=k,t[24]=S,t[25]=F):F=t[25],F},F.displayName=`DsProgressDonut`})),L,R,z=t((()=>{L=[`small`,`medium`],R=[`default`,`success`,`error`]})),B=t((()=>{I(),z()})),V,H,U,W,G,K,q,J,Y,X,Z;t((()=>{o(),d(),u(),B(),V=n(),H={title:`Components/ProgressDonut`,component:F,parameters:{layout:`centered`},argTypes:{value:{control:{type:`range`,min:0,max:100,step:1}},size:{control:{type:`select`},options:L},variant:{control:{type:`select`},options:R},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},U={args:{value:50}},W={args:{variant:`success`}},G={args:{variant:`error`,value:50}},K={args:{value:80,children:(0,V.jsx)(a,{icon:`warning`,size:`small`})}},q={args:{value:0}},J={args:{value:100}},Y={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,V.jsx)(f,{direction:`column`,gap:`var(--xl)`,children:L.map(e=>(0,V.jsx)(f,{direction:`row`,gap:`var(--xl)`,alignItems:`center`,children:R.map(t=>(0,V.jsxs)(f,{direction:`column`,gap:`var(--xs)`,alignItems:`center`,children:[(0,V.jsx)(F,{size:e,variant:t,value:50}),(0,V.jsxs)(l,{variant:`body-sm-reg`,color:`secondary`,children:[e,` / `,t]})]},t))},e))})},X={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,V.jsx)(f,{direction:`row`,gap:`var(--xl)`,alignItems:`center`,children:L.map(e=>(0,V.jsxs)(f,{direction:`column`,gap:`var(--xs)`,alignItems:`center`,children:[(0,V.jsx)(F,{size:e,value:75}),(0,V.jsx)(l,{variant:`body-sm-reg`,color:`secondary`,children:e})]},e))})},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...U.parameters?.docs?.source},description:{story:`Default donut showing an in-progress percentage in the center.`,...U.parameters?.docs?.description}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...W.parameters?.docs?.source},description:{story:`Success state fills the donut and swaps the center label for a check icon.`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    value: 50
  }
}`,...G.parameters?.docs?.source},description:{story:`Error state renders the error color and a close icon over the current value.`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    children: <DsIcon icon="warning" size="small" />
  }
}`,...K.parameters?.docs?.source},description:{story:`Override the center content with your own icon instead of the percentage label.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...q.parameters?.docs?.source},description:{story:`Empty state at the start of a task.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...J.parameters?.docs?.source},description:{story:`Completed state without the success variant styling.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Showcase of every variant across both sizes.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Side-by-side comparison of the available sizes.`,...X.parameters?.docs?.description}}},Z=[`Default`,`Success`,`Error`,`CustomIcon`,`ZeroProgress`,`FullProgress`,`AllVariants`,`Sizes`]}))();export{Y as AllVariants,K as CustomIcon,U as Default,G as Error,J as FullProgress,X as Sizes,W as Success,q as ZeroProgress,Z as __namedExportsOrder,H as default};