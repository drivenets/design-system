import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./jsx-runtime-cM__dR4X.js";import{n as r,t as i}from"./classnames-Cm4Wq5Eu.js";import{n as ee,t as a}from"./ds-icon-BRZFUTMz.js";import{r as o}from"./ds-tooltip.types-7Q2c6r4V.js";import{n as s,t as c}from"./ds-typography-BLoO5j9q.js";import{t as l}from"./ds-tooltip-DZx4AkAX.js";import{n as u,t as d}from"./ds-stack-GU0hZWeR.js";var f,p,m,h,g,_,v,y,b=t((()=>{f=`_statusIcon_b9gzw_1`,p=`_total_b9gzw_5`,m=`_bar_b9gzw_9`,h=`_segment_b9gzw_19`,g=`_segmentCompleted_b9gzw_26`,_=`_segmentRunning_b9gzw_30`,v=`_segmentFailed_b9gzw_34`,y={statusIcon:f,total:p,bar:m,segment:h,segmentCompleted:g,segmentRunning:_,segmentFailed:v}})),x,S=t((()=>{x=[`completed`,`running`,`failed`]})),C,w,T,E,D,O=t((()=>{C=[{value:1e9,suffix:`B`},{value:1e6,suffix:`M`},{value:1e3,suffix:`K`}],w=1e3,T=10,E=e=>e%1==0?String(e):e.toFixed(1),D=e=>{if(!Number.isFinite(e))return`0`;let t=Math.max(0,Math.round(e));if(t<w)return String(t);let n=C.find(({value:e})=>t>=e);if(n===void 0)return String(t);let r=t/n.value;return r<T?`${E(Math.round(r*10)/10)}${n.suffix}`:`${String(Math.floor(r))}${n.suffix}`}})),k,A,j,M,N,P,F,I,L,R=t((()=>{k=r(),A=e(i(),1),a(),u(),l(),c(),b(),S(),O(),j=n(),M=Object.freeze({completed:`check_circle`,running:`play_circle`,failed:`cancel`}),N=Object.freeze({completed:`success`,running:`action`,failed:`error`}),P=Object.freeze({completed:`success`,running:`action`,failed:`error`}),F=Object.freeze({completed:y.segmentCompleted,running:y.segmentRunning,failed:y.segmentFailed}),I=Object.freeze({completed:`Completed`,running:`Running`,failed:`Failed`,total:e=>`of ${e}`}),L=e=>{let t=(0,k.c)(39),{completed:n,running:r,failed:i,total:a,locale:c,className:l,style:u,ref:f}=e,p=n===void 0?0:n,m=r===void 0?0:r,h=i===void 0?0:i,g=Math.max(0,p),_=Math.max(0,m),v=Math.max(0,h),b,S,C,w,T,E,O,L,R,z,B,V,H,U;if(t[0]!==l||t[1]!==c||t[2]!==f||t[3]!==u||t[4]!==g||t[5]!==_||t[6]!==v||t[7]!==a){let e={completed:g,running:_,failed:v},n=e.completed+e.running+e.failed,r=Math.max(a??n,n),i={...I,...c},p=x.filter(t=>e[t]>0),m=t=>r>0?`${String(e[t]/r*100)}%`:`0%`;b=d,T=f,E=`column`,O=`var(--xs)`,L=`100%`,R=l,z=u,B=(0,j.jsxs)(d,{direction:`row`,alignItems:`center`,justifyContent:`space-between`,children:[(0,j.jsx)(d,{direction:`row`,alignItems:`center`,gap:`var(--3xs)`,children:p.length===0?(0,j.jsx)(s,{variant:`body-xs-reg`,color:`secondary`,children:`0`}):p.map(t=>(0,j.jsxs)(d,{direction:`row`,alignItems:`center`,gap:`var(--4xs)`,children:[(0,j.jsx)(o,{content:i[t],children:(0,j.jsx)(`span`,{className:y.statusIcon,children:(0,j.jsx)(ee,{icon:M[t],size:`tiny`,color:N[t],filled:!0})})}),(0,j.jsx)(s,{variant:`body-xs-reg`,color:P[t],children:D(e[t])})]},t))}),(0,j.jsx)(s,{variant:`body-xs-reg`,color:`secondary`,className:y.total,children:i.total(D(r))})]}),V=y.bar,H=`progressbar`,U=0,S=r,C=n,w=p.map(e=>(0,j.jsx)(o,{content:i[e],children:(0,j.jsx)(`span`,{className:(0,A.default)(y.segment,F[e]),style:{width:m(e)}})},e)),t[0]=l,t[1]=c,t[2]=f,t[3]=u,t[4]=g,t[5]=_,t[6]=v,t[7]=a,t[8]=b,t[9]=S,t[10]=C,t[11]=w,t[12]=T,t[13]=E,t[14]=O,t[15]=L,t[16]=R,t[17]=z,t[18]=B,t[19]=V,t[20]=H,t[21]=U}else b=t[8],S=t[9],C=t[10],w=t[11],T=t[12],E=t[13],O=t[14],L=t[15],R=t[16],z=t[17],B=t[18],V=t[19],H=t[20],U=t[21];let W;t[22]!==S||t[23]!==C||t[24]!==w||t[25]!==V||t[26]!==H||t[27]!==U?(W=(0,j.jsx)(`div`,{className:V,role:H,"aria-valuemin":U,"aria-valuemax":S,"aria-valuenow":C,children:w}),t[22]=S,t[23]=C,t[24]=w,t[25]=V,t[26]=H,t[27]=U,t[28]=W):W=t[28];let G;return t[29]!==b||t[30]!==T||t[31]!==E||t[32]!==O||t[33]!==L||t[34]!==R||t[35]!==z||t[36]!==B||t[37]!==W?(G=(0,j.jsxs)(b,{ref:T,direction:E,gap:O,width:L,className:R,style:z,children:[B,W]}),t[29]=b,t[30]=T,t[31]=E,t[32]=O,t[33]=L,t[34]=R,t[35]=z,t[36]=B,t[37]=W,t[38]=G):G=t[38],G},L.displayName=`DsProgressTaskBar`})),z=t((()=>{R(),S()})),B,V,H=t((()=>{B=`_wrapper_l6yd4_1`,V={wrapper:B}})),U,W,G,K,q,J,Y,X,Z,Q,$,te;t((()=>{z(),H(),U=n(),W={title:`Components/ProgressTaskBar`,component:L,parameters:{layout:`centered`},decorators:[e=>(0,U.jsx)(`div`,{className:V.wrapper,children:(0,U.jsx)(e,{})})],argTypes:{completed:{control:{type:`number`,min:0}},running:{control:{type:`number`,min:0}},failed:{control:{type:`number`,min:0}},total:{control:{type:`number`,min:0}},locale:{control:`object`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},G={args:{completed:300,running:100,failed:100,total:1e3}},K={args:{completed:0,running:0,failed:0,total:999}},q={args:{running:300,total:1e3}},J={args:{completed:300,failed:100,total:1e3}},Y={args:{completed:300,running:100,failed:100,total:1e3}},X={args:{completed:1e3,total:1e3}},Z={args:{running:3,total:999}},Q={args:{completed:1e6,running:125e3,failed:9500,total:14e5}},$={args:{completed:300,running:100,failed:100,total:1e3,locale:{completed:`Terminé`,running:`En cours`,failed:`Échoué`,total:e=>`sur ${e}`}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 300,
    running: 100,
    failed: 100,
    total: 1000
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 0,
    running: 0,
    failed: 0,
    total: 999
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    running: 300,
    total: 1000
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 300,
    failed: 100,
    total: 1000
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 300,
    running: 100,
    failed: 100,
    total: 1000
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 1000,
    total: 1000
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  args: {
    running: 3,
    total: 999
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 1_000_000,
    running: 125_000,
    failed: 9_500,
    total: 1_400_000
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  args: {
    completed: 300,
    running: 100,
    failed: 100,
    total: 1000,
    locale: {
      // cspell:disable-next-line
      completed: 'Terminé',
      // cspell:disable-next-line
      running: 'En cours',
      // cspell:disable-next-line
      failed: 'Échoué',
      total: value => \`sur \${value}\`
    }
  }
}`,...$.parameters?.docs?.source},description:{story:"Status tooltips and the total label are overridable through `locale`.",...$.parameters?.docs?.description}}},te=[`Default`,`Zero`,`RunningOnly`,`CompletedAndFailed`,`AllStatuses`,`FullyDone`,`MinWidth`,`AbbreviatedValues`,`Localized`]}))();export{Q as AbbreviatedValues,Y as AllStatuses,J as CompletedAndFailed,G as Default,X as FullyDone,$ as Localized,Z as MinWidth,q as RunningOnly,K as Zero,te as __namedExportsOrder,W as default};