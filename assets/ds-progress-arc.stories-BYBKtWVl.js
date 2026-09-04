import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./classnames-Cm4Wq5Eu.js";import{n as a,t as o}from"./ds-icon-BRZFUTMz.js";import{n as s,t as c}from"./ds-typography-BLoO5j9q.js";import{n as l,t as u}from"./ds-stack-GU0hZWeR.js";import{n as d,t as ee}from"./numbers-6rstj9CL.js";var f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{f=`_root_lqbys_1`,p=`_svg_lqbys_8`,m=`_track_lqbys_13`,h=`_progress_lqbys_18`,g=`_success_lqbys_26`,_=`_error_lqbys_30`,v=`_center_lqbys_34`,y=`_iconSuccess_lqbys_42`,b=`_iconError_lqbys_46`,x=`_iconMediumSize_lqbys_50`,S={root:f,svg:p,track:m,progress:h,default:`_default_lqbys_22`,success:g,error:_,center:v,iconSuccess:y,iconError:b,iconMediumSize:x}})),w,T,E,D,O,k,A,j,M,N=t((()=>{d(),w=270,T=360,E=135,D=w/T,O=Object.freeze({small:80,medium:120}),k=Object.freeze({small:4,medium:6}),A=e=>{let t=O[e],n=k[e],r=(t-n)/2,i=2*Math.PI*r;return{containerSize:t,strokeWidth:n,radius:r,circumference:i,arcLength:D*i,center:t/2,startRotation:E}},j=(e,t)=>`${String(e)} ${String(t)}`,M=(e,t,n)=>{let r=e/100*t;return`${String(r)} ${String(n)}`}})),P,F,I,L,R,z=t((()=>{P=r(),F=e(i(),1),o(),c(),C(),N(),I=n(),L=Object.freeze({default:S.default,success:S.success,error:S.error}),R=e=>{let t=(0,P.c)(65),n,r,i,o,c,l,u,d;t[0]===e?(n=t[1],r=t[2],i=t[3],o=t[4],c=t[5],l=t[6],u=t[7],d=t[8]):({value:l,size:u,variant:d,children:n,className:r,style:c,ref:o,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=o,t[5]=c,t[6]=l,t[7]=u,t[8]=d);let f=l===void 0?0:l,p=u===void 0?`medium`:u,m=d===void 0?`default`:d,h,g,_,v,y,b,x,C;if(t[9]!==p||t[10]!==f||t[11]!==m){let{containerSize:e,strokeWidth:n,radius:r,circumference:i,arcLength:a,center:o,startRotation:s}=A(p);g=e,b=n,v=r,h=o,y=s,_=m===`success`?100:ee(f),C=j(a,i),x=M(_,a,i),t[9]=p,t[10]=f,t[11]=m,t[12]=h,t[13]=g,t[14]=_,t[15]=v,t[16]=y,t[17]=b,t[18]=x,t[19]=C}else h=t[12],g=t[13],_=t[14],v=t[15],y=t[16],b=t[17],x=t[18],C=t[19];let w=x,T;t[20]===p?T=t[21]:(T=(e,t)=>(0,I.jsx)(a,{variant:`rounded`,icon:e,size:`large`,className:(0,F.default)({[S.iconMediumSize]:p===`medium`},t)}),t[20]=p,t[21]=T);let E=T,D;t[22]!==n||t[23]!==_||t[24]!==E||t[25]!==p||t[26]!==m?(D=()=>n||(m===`success`?E(`check`,S.iconSuccess):m===`error`?E(`close`,S.iconError):(0,I.jsx)(s,{variant:p===`medium`?`heading3`:`body-md-md`,asChild:!0,children:(0,I.jsxs)(`span`,{children:[_,`%`]})})),t[22]=n,t[23]=_,t[24]=E,t[25]=p,t[26]=m,t[27]=D):D=t[27];let O=D,k;t[28]===r?k=t[29]:(k=(0,F.default)(S.root,r),t[28]=r,t[29]=k);let N;t[30]!==g||t[31]!==c?(N={width:g,height:g,...c},t[30]=g,t[31]=c,t[32]=N):N=t[32];let R=o,z=`0 0 ${String(g)} ${String(g)}`,B=`rotate(${String(y)} ${String(h)} ${String(h)})`,V;t[33]!==h||t[34]!==v||t[35]!==b||t[36]!==B||t[37]!==C?(V=(0,I.jsx)(`circle`,{className:S.track,cx:h,cy:h,r:v,fill:`none`,strokeWidth:b,strokeDasharray:C,strokeLinecap:`round`,transform:B}),t[33]=h,t[34]=v,t[35]=b,t[36]=B,t[37]=C,t[38]=V):V=t[38];let H=L[m],U;t[39]===H?U=t[40]:(U=(0,F.default)(S.progress,H),t[39]=H,t[40]=U);let W=`rotate(${String(y)} ${String(h)} ${String(h)})`,G;t[41]!==h||t[42]!==w||t[43]!==v||t[44]!==b||t[45]!==U||t[46]!==W?(G=(0,I.jsx)(`circle`,{className:U,cx:h,cy:h,r:v,fill:`none`,strokeWidth:b,strokeDasharray:w,strokeLinecap:`round`,transform:W}),t[41]=h,t[42]=w,t[43]=v,t[44]=b,t[45]=U,t[46]=W,t[47]=G):G=t[47];let K;t[48]!==g||t[49]!==z||t[50]!==V||t[51]!==G?(K=(0,I.jsxs)(`svg`,{className:S.svg,width:g,height:g,viewBox:z,children:[V,G]}),t[48]=g,t[49]=z,t[50]=V,t[51]=G,t[52]=K):K=t[52];let q;t[53]===O?q=t[54]:(q=O(),t[53]=O,t[54]=q);let J;t[55]===q?J=t[56]:(J=(0,I.jsx)(`div`,{className:S.center,children:q}),t[55]=q,t[56]=J);let Y;return t[57]!==_||t[58]!==i||t[59]!==K||t[60]!==J||t[61]!==k||t[62]!==N||t[63]!==R?(Y=(0,I.jsxs)(`div`,{...i,className:k,style:N,ref:R,role:`progressbar`,"aria-valuenow":_,"aria-valuemin":0,"aria-valuemax":100,children:[K,J]}),t[57]=_,t[58]=i,t[59]=K,t[60]=J,t[61]=k,t[62]=N,t[63]=R,t[64]=Y):Y=t[64],Y},R.displayName=`DsProgressArc`})),B,V,H=t((()=>{B=[`small`,`medium`],V=[`default`,`success`,`error`]})),U=t((()=>{z(),H()})),W,G,K,q,J,Y,X,Z,Q,$,te;t((()=>{o(),l(),c(),U(),W=n(),G={title:`Components/ProgressArc`,component:R,parameters:{layout:`centered`},argTypes:{value:{control:{type:`range`,min:0,max:100,step:1}},size:{control:{type:`select`},options:B},variant:{control:{type:`select`},options:V},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},K={args:{value:50}},q={args:{variant:`success`}},J={args:{variant:`error`,value:50}},Y={args:{value:80,children:(0,W.jsx)(a,{icon:`warning`,size:`small`})}},X={args:{value:0}},Z={args:{value:100}},Q={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,W.jsx)(u,{direction:`column`,gap:`var(--xl)`,children:B.map(e=>(0,W.jsx)(u,{direction:`row`,gap:`var(--xl)`,alignItems:`center`,children:V.map(t=>(0,W.jsxs)(u,{direction:`column`,gap:`var(--xs)`,alignItems:`center`,children:[(0,W.jsx)(R,{size:e,variant:t,value:50}),(0,W.jsxs)(s,{variant:`body-sm-reg`,color:`secondary`,children:[e,` / `,t]})]},t))},e))})},$={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,W.jsx)(u,{direction:`row`,gap:`var(--xl)`,alignItems:`center`,children:B.map(e=>(0,W.jsxs)(u,{direction:`column`,gap:`var(--xs)`,alignItems:`center`,children:[(0,W.jsx)(R,{size:e,value:75}),(0,W.jsx)(s,{variant:`body-sm-reg`,color:`secondary`,children:e})]},e))})},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    value: 50
  }
}`,...K.parameters?.docs?.source},description:{story:`Default arc showing an in-progress percentage in the center.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...q.parameters?.docs?.source},description:{story:`Success state fills the arc and swaps the center label for a check icon.`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'error',
    value: 50
  }
}`,...J.parameters?.docs?.source},description:{story:`Error state renders the error color and a close icon over the current value.`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    value: 80,
    children: <DsIcon icon="warning" size="small" />
  }
}`,...Y.parameters?.docs?.source},description:{story:`Override the center content with your own icon instead of the percentage label.`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    value: 0
  }
}`,...X.parameters?.docs?.source},description:{story:`Empty state at the start of a task.`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    value: 100
  }
}`,...Z.parameters?.docs?.source},description:{story:`Completed state without the success variant styling.`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--xl)">
            {progressArcSizes.map(size => <DsStack key={size} direction="row" gap="var(--xl)" alignItems="center">
                    {progressArcVariants.map(variant => <DsStack key={variant} direction="column" gap="var(--xs)" alignItems="center">
                            <DsProgressArc size={size} variant={variant} value={50} />
                            <DsTypography variant="body-sm-reg" color="secondary">
                                {size} / {variant}
                            </DsTypography>
                        </DsStack>)}
                </DsStack>)}
        </DsStack>
}`,...Q.parameters?.docs?.source},description:{story:`Showcase of every variant across both sizes.`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="row" gap="var(--xl)" alignItems="center">
            {progressArcSizes.map(size => <DsStack key={size} direction="column" gap="var(--xs)" alignItems="center">
                    <DsProgressArc size={size} value={75} />
                    <DsTypography variant="body-sm-reg" color="secondary">
                        {size}
                    </DsTypography>
                </DsStack>)}
        </DsStack>
}`,...$.parameters?.docs?.source},description:{story:`Side-by-side comparison of the available sizes.`,...$.parameters?.docs?.description}}},te=[`Default`,`Success`,`Error`,`CustomIcon`,`ZeroProgress`,`FullProgress`,`AllVariants`,`Sizes`]}))();export{Q as AllVariants,Y as CustomIcon,K as Default,J as Error,Z as FullProgress,$ as Sizes,q as Success,X as ZeroProgress,te as __namedExportsOrder,G as default};