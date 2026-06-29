import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-DKMae-Wr.js";import{t as r}from"./jsx-runtime-CaZkqeYb.js";import{t as i}from"./compiler-runtime-vGF-DxYq.js";import{t as ee}from"./ds-icon-DfQmiIla.js";import{t as a}from"./ds-icon-VZzDslgo.js";import{n as o,t as s}from"./ds-typography-Cz--TX8N.js";import{n as te,t as c}from"./ds-button-Cap9oa-m.js";import{r as ne}from"./ds-text-input.types-Cy1VIBYW.js";import{t as re}from"./ds-text-input-BeX-Vbqj.js";import{r as ie}from"./ds-checkbox.types-DU7GOIbR.js";import{t as ae}from"./ds-checkbox-yoXw6mX-.js";import{t as oe}from"./ds-date-input-D-JlOa4u.js";import{t as se}from"./ds-date-input-DwtWuu_z.js";import{n as ce,t as l}from"./ds-comment-card-WZnJDExP.js";import{t as u}from"./ds-drawer-pOwsTzax.js";import{t as le}from"./ds-drawer-B3OSslB7.js";import{t as ue}from"./ds-tag-filter-BKWTQAKr.js";import{t as de}from"./ds-tag-filter-CdV8wUG-.js";import{t as d}from"./ds-modal-C6uFgrO8.js";import{t as fe}from"./ds-modal-DM6GMi7f.js";import{n as f,t as p}from"./ds-tabs-xqB7Nrqa.js";var m,pe,h,me,g,he,_,v,y,b=e((()=>{m=`_headerActions_1m8uy_1`,pe=`_divider_1m8uy_7`,h=`_searchInput_1m8uy_13`,me=`_body_1m8uy_17`,g=`_emptyState_1m8uy_35`,he=`_emptyIcon_1m8uy_48`,_=`_filterTagsToolbar_1m8uy_52`,v=`_tagFilter_1m8uy_57`,y={headerActions:m,divider:pe,searchInput:h,body:me,emptyState:g,emptyIcon:he,filterTagsToolbar:_,tagFilter:v}})),ge,_e,ve,ye,x=e((()=>{ge={authors:[],labels:[],statuses:[]},_e=(e,t,n)=>e.filter(e=>{if(t.statuses.length>0){let r=[];if(e.isResolved?r.push(`resolved`):r.push(`unresolved`),n(e)&&r.push(`action-required`),!t.statuses.some(e=>r.includes(e)))return!1}if(t.authors.length>0&&!t.authors.includes(e.author.id))return!1;if(t.dateFrom){let n=new Date(t.dateFrom);if(e.createdAt<n)return!1}if(t.dateTo){let n=new Date(t.dateTo);if(n.setHours(23,59,59,999),e.createdAt>n)return!1}return!(t.labels.length>0&&(!e.labels||!t.labels.some(t=>e.labels?.includes(t))))}),ve=(e,t)=>{let n=[];if(e.statuses.forEach(e=>{let t=e===`action-required`?`Action required`:e.charAt(0).toUpperCase()+e.slice(1);n.push({id:`status-${e}`,label:`Status: ${t}`,filterId:`statuses`,value:e})}),e.authors.forEach(e=>{let r=t.get(e)||e;n.push({id:`author-${e}`,label:`Author: ${r}`,filterId:`authors`,value:e})}),e.dateFrom||e.dateTo){let t=e.dateFrom||`...`,r=e.dateTo||`...`;n.push({id:`date-range`,label:`Date: ${t} to ${r}`,filterId:`date`,value:`range`})}return e.labels.forEach(e=>{n.push({id:`label-${e}`,label:`Label: ${e}`,filterId:`labels`,value:e})}),n},ye=(e,t)=>{let n={...e};switch(t.filterId){case`statuses`:n.statuses=n.statuses.filter(e=>e!==t.value);break;case`authors`:n.authors=n.authors.filter(e=>e!==t.value);break;case`labels`:n.labels=n.labels.filter(e=>e!==t.value);break;case`date`:n.dateFrom=void 0,n.dateTo=void 0;break}return n}})),S,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L=e((()=>{S=`_modal_1ip1h_1`,C=`_header_1ip1h_5`,w=`_headerLeft_1ip1h_12`,T=`_body_1ip1h_18`,E=`_tabs_1ip1h_24`,D=`_tabList_1ip1h_30`,O=`_tabContent_1ip1h_40`,k=`_badge_1ip1h_52`,A=`_dot_1ip1h_59`,j=`_filterSection_1ip1h_66`,M=`_dateField_1ip1h_72`,N=`_dateLabel_1ip1h_78`,P=`_emptyMessage_1ip1h_82`,F=`_footer_1ip1h_86`,I={modal:S,header:C,headerLeft:w,body:T,tabs:E,tabList:D,tabContent:O,badge:k,dot:A,filterSection:j,dateField:M,dateLabel:N,emptyMessage:P,footer:F}})),R=e((()=>{f()})),be,z,B,V,xe=e((()=>{be=i(),z=t(n(),1),L(),fe(),R(),s(),ae(),c(),a(),se(),B=r(),V=e=>{let t=(0,be.c)(117),{open:n,onOpenChange:r,filters:i,onFiltersChange:a,onApply:s,onClearAll:c,availableAuthors:ne,availableLabels:re}=e,[ae,se]=(0,z.useState)(`statuses`),ce;t[0]!==i||t[1]!==a?(ce=(e,t)=>{a({...i,statuses:t?[...i.statuses,e]:i.statuses.filter(t=>t!==e)})},t[0]=i,t[1]=a,t[2]=ce):ce=t[2];let l=ce,u;t[3]!==i||t[4]!==a?(u=(e,t)=>{a({...i,authors:t?[...i.authors,e]:i.authors.filter(t=>t!==e)})},t[3]=i,t[4]=a,t[5]=u):u=t[5];let le=u,ue;t[6]!==i||t[7]!==a?(ue=(e,t)=>{a({...i,labels:t?[...i.labels,e]:i.labels.filter(t=>t!==e)})},t[6]=i,t[7]=a,t[8]=ue):ue=t[8];let de=ue,fe;t[9]!==i||t[10]!==a?(fe=e=>{a({...i,dateFrom:e})},t[9]=i,t[10]=a,t[11]=fe):fe=t[11];let f=fe,m;t[12]!==i||t[13]!==a?(m=e=>{a({...i,dateTo:e})},t[12]=i,t[13]=a,t[14]=m):m=t[14];let pe=m,h=+!!i.dateFrom+ +!!i.dateTo,me;t[15]!==i.authors.length||t[16]!==i.labels.length||t[17]!==i.statuses.length||t[18]!==h?(me={statuses:i.statuses.length,authors:i.authors.length,dateRange:h,labels:i.labels.length},t[15]=i.authors.length,t[16]=i.labels.length,t[17]=i.statuses.length,t[18]=h,t[19]=me):me=t[19];let g=me,he;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(he=(0,B.jsxs)(d.Header,{className:I.header,children:[(0,B.jsxs)(`div`,{className:I.headerLeft,children:[(0,B.jsx)(ee,{icon:`filter_list`,size:`small`}),(0,B.jsx)(d.Title,{children:`Filters`})]}),(0,B.jsx)(d.CloseTrigger,{})]}),t[20]=he):he=t[20];let _;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(_=e=>{e&&se(e)},t[21]=_):_=t[21];let v;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,B.jsx)(o,{variant:`body-sm-md`,children:`Status`}),t[22]=v):v=t[22];let y;t[23]===g.statuses?y=t[24]:(y=g.statuses>0&&(0,B.jsxs)(`div`,{className:I.badge,children:[(0,B.jsx)(`span`,{className:I.dot}),(0,B.jsx)(o,{variant:`body-sm-reg`,children:g.statuses})]}),t[23]=g.statuses,t[24]=y);let b;t[25]===y?b=t[26]:(b=(0,B.jsxs)(p.Tab,{value:`statuses`,children:[v,y]}),t[25]=y,t[26]=b);let ge;t[27]===Symbol.for(`react.memo_cache_sentinel`)?(ge=(0,B.jsx)(o,{variant:`body-sm-md`,children:`Author`}),t[27]=ge):ge=t[27];let _e;t[28]===g.authors?_e=t[29]:(_e=g.authors>0&&(0,B.jsxs)(`div`,{className:I.badge,children:[(0,B.jsx)(`span`,{className:I.dot}),(0,B.jsx)(o,{variant:`body-sm-reg`,children:g.authors})]}),t[28]=g.authors,t[29]=_e);let ve;t[30]===_e?ve=t[31]:(ve=(0,B.jsxs)(p.Tab,{value:`authors`,children:[ge,_e]}),t[30]=_e,t[31]=ve);let ye;t[32]===Symbol.for(`react.memo_cache_sentinel`)?(ye=(0,B.jsx)(o,{variant:`body-sm-md`,children:`Date range`}),t[32]=ye):ye=t[32];let x;t[33]===g.dateRange?x=t[34]:(x=g.dateRange>0&&(0,B.jsxs)(`div`,{className:I.badge,children:[(0,B.jsx)(`span`,{className:I.dot}),(0,B.jsx)(o,{variant:`body-sm-reg`,children:g.dateRange})]}),t[33]=g.dateRange,t[34]=x);let S;t[35]===x?S=t[36]:(S=(0,B.jsxs)(p.Tab,{value:`dateRange`,children:[ye,x]}),t[35]=x,t[36]=S);let C;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,B.jsx)(o,{variant:`body-sm-md`,children:`Labels`}),t[37]=C):C=t[37];let w;t[38]===g.labels?w=t[39]:(w=g.labels>0&&(0,B.jsxs)(`div`,{className:I.badge,children:[(0,B.jsx)(`span`,{className:I.dot}),(0,B.jsx)(o,{variant:`body-sm-reg`,children:g.labels})]}),t[38]=g.labels,t[39]=w);let T;t[40]===w?T=t[41]:(T=(0,B.jsxs)(p.Tab,{value:`labels`,children:[C,w]}),t[40]=w,t[41]=T);let E;t[42]!==b||t[43]!==ve||t[44]!==S||t[45]!==T?(E=(0,B.jsxs)(p.List,{className:I.tabList,children:[b,ve,S,T]}),t[42]=b,t[43]=ve,t[44]=S,t[45]=T,t[46]=E):E=t[46];let D;t[47]===i.statuses?D=t[48]:(D=i.statuses.includes(`unresolved`),t[47]=i.statuses,t[48]=D);let O;t[49]===l?O=t[50]:(O=e=>l(`unresolved`,e===!0),t[49]=l,t[50]=O);let k;t[51]!==D||t[52]!==O?(k=(0,B.jsx)(ie,{label:`Unresolved`,checked:D,onCheckedChange:O}),t[51]=D,t[52]=O,t[53]=k):k=t[53];let A;t[54]===i.statuses?A=t[55]:(A=i.statuses.includes(`resolved`),t[54]=i.statuses,t[55]=A);let j;t[56]===l?j=t[57]:(j=e=>l(`resolved`,e===!0),t[56]=l,t[57]=j);let M;t[58]!==A||t[59]!==j?(M=(0,B.jsx)(ie,{label:`Resolved`,checked:A,onCheckedChange:j}),t[58]=A,t[59]=j,t[60]=M):M=t[60];let N;t[61]===i.statuses?N=t[62]:(N=i.statuses.includes(`action-required`),t[61]=i.statuses,t[62]=N);let P;t[63]===l?P=t[64]:(P=e=>l(`action-required`,e===!0),t[63]=l,t[64]=P);let F;t[65]!==N||t[66]!==P?(F=(0,B.jsx)(ie,{label:`Action required`,checked:N,onCheckedChange:P}),t[65]=N,t[66]=P,t[67]=F):F=t[67];let L;t[68]!==k||t[69]!==M||t[70]!==F?(L=(0,B.jsx)(p.Content,{value:`statuses`,className:I.tabContent,children:(0,B.jsxs)(`div`,{className:I.filterSection,children:[k,M,F]})}),t[68]=k,t[69]=M,t[70]=F,t[71]=L):L=t[71];let R;t[72]!==ne||t[73]!==i.authors||t[74]!==le?(R=ne.length===0?(0,B.jsx)(o,{variant:`body-sm-reg`,className:I.emptyMessage,children:`No authors available`}):ne.map(e=>(0,B.jsx)(ie,{label:e.name,checked:i.authors.includes(e.id),onCheckedChange:t=>le(e.id,t===!0)},e.id)),t[72]=ne,t[73]=i.authors,t[74]=le,t[75]=R):R=t[75];let V;t[76]===R?V=t[77]:(V=(0,B.jsx)(p.Content,{value:`authors`,className:I.tabContent,children:(0,B.jsx)(`div`,{className:I.filterSection,children:R})}),t[76]=R,t[77]=V);let xe;t[78]===Symbol.for(`react.memo_cache_sentinel`)?(xe=(0,B.jsx)(o,{variant:`body-sm-md`,className:I.dateLabel,children:`From`}),t[78]=xe):xe=t[78];let H;t[79]!==i.dateFrom||t[80]!==i.dateTo||t[81]!==f?(H=(0,B.jsxs)(`div`,{className:I.dateField,children:[xe,(0,B.jsx)(oe,{value:i.dateFrom,onValueChange:f,max:i.dateTo,placeholder:`Select start date`,disablePortal:!0})]}),t[79]=i.dateFrom,t[80]=i.dateTo,t[81]=f,t[82]=H):H=t[82];let Se;t[83]===Symbol.for(`react.memo_cache_sentinel`)?(Se=(0,B.jsx)(o,{variant:`body-sm-md`,className:I.dateLabel,children:`To`}),t[83]=Se):Se=t[83];let Ce;t[84]!==i.dateFrom||t[85]!==i.dateTo||t[86]!==pe?(Ce=(0,B.jsxs)(`div`,{className:I.dateField,children:[Se,(0,B.jsx)(oe,{value:i.dateTo,onValueChange:pe,min:i.dateFrom,placeholder:`Select end date`,disablePortal:!0})]}),t[84]=i.dateFrom,t[85]=i.dateTo,t[86]=pe,t[87]=Ce):Ce=t[87];let we;t[88]!==H||t[89]!==Ce?(we=(0,B.jsx)(p.Content,{value:`dateRange`,className:I.tabContent,children:(0,B.jsxs)(`div`,{className:I.filterSection,children:[H,Ce]})}),t[88]=H,t[89]=Ce,t[90]=we):we=t[90];let Te;t[91]!==re||t[92]!==i.labels||t[93]!==de?(Te=re.length===0?(0,B.jsx)(o,{variant:`body-sm-reg`,className:I.emptyMessage,children:`No labels available`}):re.map(e=>(0,B.jsx)(ie,{label:e,checked:i.labels.includes(e),onCheckedChange:t=>de(e,t===!0)},e)),t[91]=re,t[92]=i.labels,t[93]=de,t[94]=Te):Te=t[94];let Ee;t[95]===Te?Ee=t[96]:(Ee=(0,B.jsx)(p.Content,{value:`labels`,className:I.tabContent,children:(0,B.jsx)(`div`,{className:I.filterSection,children:Te})}),t[95]=Te,t[96]=Ee);let U;t[97]!==ae||t[98]!==E||t[99]!==L||t[100]!==V||t[101]!==we||t[102]!==Ee?(U=(0,B.jsx)(d.Body,{className:I.body,children:(0,B.jsxs)(p.Root,{value:ae,onValueChange:_,orientation:`vertical`,className:I.tabs,children:[E,L,V,we,Ee]})}),t[97]=ae,t[98]=E,t[99]=L,t[100]=V,t[101]=we,t[102]=Ee,t[103]=U):U=t[103];let W;t[104]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,B.jsx)(ee,{icon:`close`,size:`tiny`}),t[104]=W):W=t[104];let G;t[105]===c?G=t[106]:(G=(0,B.jsxs)(te,{design:`v1.2`,variant:`filled`,buttonType:`secondary`,onClick:c,children:[W,`Clear all`]}),t[105]=c,t[106]=G);let K;t[107]===s?K=t[108]:(K=(0,B.jsx)(d.Actions,{children:(0,B.jsx)(te,{design:`v1.2`,variant:`filled`,buttonType:`primary`,onClick:s,children:`Apply`})}),t[107]=s,t[108]=K);let q;t[109]!==G||t[110]!==K?(q=(0,B.jsxs)(d.Footer,{className:I.footer,children:[G,K]}),t[109]=G,t[110]=K,t[111]=q):q=t[111];let J;return t[112]!==r||t[113]!==n||t[114]!==U||t[115]!==q?(J=(0,B.jsxs)(d,{open:n,onOpenChange:r,className:I.modal,children:[he,U,q]}),t[112]=r,t[113]=n,t[114]=U,t[115]=q,t[116]=J):J=t[116],J}})),H=e((()=>{xe()}));function Se(e){let[t,n]=e;return{id:t,name:n}}function Ce(e){return!e.isResolved}function we(e){return e.isActionRequired||!1}function Te(e){return!e.isResolved}function Ee(e){return e.isResolved}var U,W,G,K,q=e((()=>{U=i(),W=t(n(),1),b(),le(),l(),c(),a(),re(),de(),x(),H(),G=r(),K=e=>{let t=(0,U.c)(102),{open:n,onOpenChange:r,comments:i,showResolved:a,onShowResolvedChange:o,searchQuery:s,onSearchChange:c,onCommentClick:re,onResolveComment:ie,onToggleActionRequired:ae,onForward:oe,onMarkUnread:se,onCopyLink:l,onDelete:le,noCommentsMessage:de,className:d,style:fe}=e,f=a===void 0?!1:a,p=s===void 0?``:s,[m,pe]=(0,W.useState)(!1),[h,me]=(0,W.useState)(ge),[g,he]=(0,W.useState)(ge),_,v,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F;if(t[0]!==g||t[1]!==d||t[2]!==i||t[3]!==de||t[4]!==re||t[5]!==l||t[6]!==le||t[7]!==oe||t[8]!==se||t[9]!==r||t[10]!==ie||t[11]!==c||t[12]!==o||t[13]!==ae||t[14]!==n||t[15]!==h||t[16]!==p||t[17]!==f||t[18]!==fe){let e=new Map,a=new Set;i.forEach(t=>{e.set(t.author.id,t.author.name),t.labels?.forEach(e=>a.add(e))}),b=Array.from(e.entries()).map(Se),x=Array.from(a);let s=i;if(f||(s=s.filter(Ce)),s=_e(s,g,we),p){let e=p.toLowerCase();s=s.filter(t=>{let n=t.messages.some(t=>t.content.toLowerCase().includes(e)),r=t.author.name.toLowerCase().includes(e),i=`#${String(t.numericId)}`.includes(e);return n||r||i})}let m;t[37]===i?m=t[38]:(m=i.filter(Te),t[37]=i,t[38]=m);let I=m.length,L;t[39]===i?L=t[40]:(L=i.filter(Ee),t[39]=i,t[40]=L);let R=L.length,be=R>0,z=ve(g,e),B;t[41]!==o||t[42]!==f?(B=()=>{o?.(!f)},t[41]=o,t[42]=f,t[43]=B):B=t[43];let V=B,xe;t[44]===g?xe=t[45]:(xe=()=>{me(g),pe(!0)},t[44]=g,t[45]=xe);let H=xe,U;t[46]===h?U=t[47]:(U=()=>{he(h),pe(!1)},t[46]=h,t[47]=U),S=U;let W;t[48]===Symbol.for(`react.memo_cache_sentinel`)?(W=()=>{me(ge),he(ge),pe(!1)},t[48]=W):W=t[48],C=W;let K;t[49]!==g||t[50]!==z?(K=e=>{let t=z.find(t=>t.id===e.id);t&&he(ye(g,t))},t[49]=g,t[50]=z,t[51]=K):K=t[51];let q=K;v=u,j=n,M=r,N=`start`,P=4,F=d,w=fe;let J;t[52]===I?J=t[53]:(J=(0,G.jsxs)(u.Title,{children:[I,` Comments`]}),t[52]=I,t[53]=J);let De;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,G.jsxs)(`div`,{className:y.headerActions,children:[(0,G.jsx)(te,{design:`v1.2`,buttonType:`tertiary`,size:`small`,"aria-label":`More actions`,children:(0,G.jsx)(ee,{icon:`more_vert`,size:`tiny`})}),(0,G.jsx)(`div`,{className:y.divider}),(0,G.jsx)(u.CloseTrigger,{})]}),t[54]=De):De=t[54],t[55]===J?T=t[56]:(T=(0,G.jsxs)(u.Header,{children:[J,De]}),t[55]=J,t[56]=T);let Oe;t[57]===Symbol.for(`react.memo_cache_sentinel`)?(Oe={startAdornment:(0,G.jsx)(ee,{icon:`search`,size:`tiny`})},t[57]=Oe):Oe=t[57];let ke;t[58]!==c||t[59]!==p?(ke=(0,G.jsx)(ne,{placeholder:`Search`,value:p,onValueChange:c,className:y.searchInput,slots:Oe}),t[58]=c,t[59]=p,t[60]=ke):ke=t[60];let Ae;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=(0,G.jsx)(ee,{icon:`filter_list`,size:`tiny`}),t[61]=Ae):Ae=t[61];let je;t[62]===H?je=t[63]:(je=(0,G.jsx)(te,{design:`v1.2`,buttonType:`tertiary`,size:`small`,"aria-label":`Filter`,onClick:H,children:Ae}),t[62]=H,t[63]=je),t[64]!==ke||t[65]!==je?(E=(0,G.jsxs)(u.Toolbar,{children:[ke,je]}),t[64]=ke,t[65]=je,t[66]=E):E=t[66],t[67]!==V||t[68]!==be||t[69]!==R||t[70]!==f?(D=be&&(0,G.jsx)(u.Toolbar,{children:(0,G.jsxs)(te,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:V,children:[f?`Hide`:`Show`,` resolved (`,R,`)`]})}),t[67]=V,t[68]=be,t[69]=R,t[70]=f,t[71]=D):D=t[71],t[72]!==z||t[73]!==q?(O=z.length>0&&(0,G.jsx)(u.Toolbar,{className:y.filterTagsToolbar,children:(0,G.jsx)(ue,{items:z,onClearAll:C,onItemDelete:q,className:y.tagFilter})}),t[72]=z,t[73]=q,t[74]=O):O=t[74],_=u.Body,k=y.body,A=s.length===0?(0,G.jsx)(`div`,{className:y.emptyState,children:de||(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(ee,{icon:`chat_bubble_outline`,size:`large`,className:y.emptyIcon}),(0,G.jsx)(`span`,{children:`No comments yet`})]})}):s.map(e=>(0,G.jsx)(ce,{comment:e,overflow:`displayed`,onClick:()=>re?.(e),onResolve:()=>ie?.(e.id),onToggleActionRequired:()=>ae?.(e.id),onForward:()=>oe?.(e.id),onMarkUnread:()=>se?.(e.id),onCopyLink:()=>l?.(e.id),onDelete:()=>le?.(e.id)},e.id)),t[0]=g,t[1]=d,t[2]=i,t[3]=de,t[4]=re,t[5]=l,t[6]=le,t[7]=oe,t[8]=se,t[9]=r,t[10]=ie,t[11]=c,t[12]=o,t[13]=ae,t[14]=n,t[15]=h,t[16]=p,t[17]=f,t[18]=fe,t[19]=_,t[20]=v,t[21]=b,t[22]=x,t[23]=S,t[24]=C,t[25]=w,t[26]=T,t[27]=E,t[28]=D,t[29]=O,t[30]=k,t[31]=A,t[32]=j,t[33]=M,t[34]=N,t[35]=P,t[36]=F}else _=t[19],v=t[20],b=t[21],x=t[22],S=t[23],C=t[24],w=t[25],T=t[26],E=t[27],D=t[28],O=t[29],k=t[30],A=t[31],j=t[32],M=t[33],N=t[34],P=t[35],F=t[36];let I;t[75]!==_||t[76]!==k||t[77]!==A?(I=(0,G.jsx)(_,{className:k,children:A}),t[75]=_,t[76]=k,t[77]=A,t[78]=I):I=t[78];let L;t[79]!==v||t[80]!==w||t[81]!==T||t[82]!==E||t[83]!==D||t[84]!==O||t[85]!==I||t[86]!==j||t[87]!==M||t[88]!==N||t[89]!==P||t[90]!==F?(L=(0,G.jsxs)(v,{open:j,onOpenChange:M,position:N,columns:P,className:F,style:w,children:[T,E,D,O,I]}),t[79]=v,t[80]=w,t[81]=T,t[82]=E,t[83]=D,t[84]=O,t[85]=I,t[86]=j,t[87]=M,t[88]=N,t[89]=P,t[90]=F,t[91]=L):L=t[91];let R;t[92]!==b||t[93]!==x||t[94]!==S||t[95]!==C||t[96]!==m||t[97]!==h?(R=(0,G.jsx)(V,{open:m,onOpenChange:pe,filters:h,onFiltersChange:me,onApply:S,onClearAll:C,availableAuthors:b,availableLabels:x}),t[92]=b,t[93]=x,t[94]=S,t[95]=C,t[96]=m,t[97]=h,t[98]=R):R=t[98];let be;return t[99]!==L||t[100]!==R?(be=(0,G.jsxs)(G.Fragment,{children:[L,R]}),t[99]=L,t[100]=R,t[101]=be):be=t[101],be}})),J=e((()=>{})),De=e((()=>{})),Oe=e((()=>{q(),J(),De()})),ke,Ae,je,Me,Ne,Pe,Fe=e((()=>{ke=`_storyWrapper_1vin9_1`,Ae=`_filterDemo_1vin9_9`,je=`_filterDemoTitle_1vin9_14`,Me=`_filterDemoText_1vin9_18`,Ne=`_filterDemoList_1vin9_23`,Pe={storyWrapper:ke,filterDemo:Ae,filterDemoTitle:je,filterDemoText:Me,filterDemoList:Ne}})),Ie,Y,X,Z,Le,Q,$,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze;e((()=>{Ie=t(n(),1),Oe(),c(),Fe(),Y=r(),{expect:X,fn:Z,userEvent:Le,within:Q}=__STORYBOOK_MODULE_TEST__,$=()=>[{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,labels:[`Bug`,`High Priority`],messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Thanks for the feedback!`,createdAt:new Date(Date.now()-720*60*1e3)},{id:`msg-3`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`I agree with this approach.`,createdAt:new Date(Date.now()-360*60*1e3)}]},{id:`comment-2`,numericId:64,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-2880*60*1e3),isResolved:!1,labels:[`Feature Request`],messages:[{id:`msg-4`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Could we add a dark mode feature to the application? This would improve usability for users working in low-light environments.`,createdAt:new Date(Date.now()-2880*60*1e3),isInitialMessage:!0}]},{id:`comment-3`,numericId:65,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},createdAt:new Date(Date.now()-4320*60*1e3),isResolved:!1,labels:[`Documentation`,`Enhancement`],messages:[{id:`msg-5`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`The API documentation needs to be updated to reflect the recent changes we made to the authentication system. This will help developers integrate with our service more easily.`,createdAt:new Date(Date.now()-4320*60*1e3),isInitialMessage:!0},{id:`msg-6`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`Good point!`,createdAt:new Date(Date.now()-3600*60*1e3)},{id:`msg-7`,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},content:`I will look into this.`,createdAt:new Date(Date.now()-2880*60*1e3)},{id:`msg-8`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`Thanks everyone!`,createdAt:new Date(Date.now()-2160*60*1e3)}]},{id:`comment-4`,numericId:66,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},createdAt:new Date(Date.now()-5760*60*1e3),isResolved:!1,labels:[`Question`],messages:[{id:`msg-9`,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},content:`Should we consider migrating to the new version of the framework? It offers better performance and security features that could benefit our application.`,createdAt:new Date(Date.now()-5760*60*1e3),isInitialMessage:!0}]},{id:`comment-5`,numericId:67,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(Date.now()-7200*60*1e3),isResolved:!0,labels:[`Bug`],messages:[{id:`msg-10`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`This has been resolved.`,createdAt:new Date(Date.now()-7200*60*1e3),isInitialMessage:!0}]},{id:`comment-6`,numericId:68,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-8640*60*1e3),isResolved:!0,labels:[`Documentation`],messages:[{id:`msg-11`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Documentation updated.`,createdAt:new Date(Date.now()-8640*60*1e3),isInitialMessage:!0}]}],Re={title:`Components/Comments/CommentsDrawer`,component:K,parameters:{layout:`fullscreen`,docs:{description:{component:`
Side panel for viewing and managing all comments.

**Features:**
- Displays list of comment cards
- Search functionality
- Filter button (integration point)
- Show/hide resolved comments
- Comment count in header
- Click to open comment bubble
- Hover syncs with indicators on screen
        `}}},argTypes:{open:{control:`boolean`,description:`Whether drawer is open`},showResolved:{control:`boolean`,description:`Whether to show resolved comments`},searchQuery:{control:`text`,description:`Search query`}},args:{onOpenChange:Z(),onShowResolvedChange:Z(),onSearchChange:Z(),onCommentClick:Z(),onResolveComment:Z(),onToggleActionRequired:Z(),onForward:Z(),onMarkUnread:Z(),onCopyLink:Z(),onDelete:Z()}},ze={args:{open:!0,comments:$()},play:async({canvasElement:e})=>{await X(Q(e).getByText(/4 Comments/i)).toBeInTheDocument()}},Be={args:{open:!0,comments:$(),searchQuery:`Karen`},play:async({canvasElement:e})=>{await X(Q(e).getByPlaceholderText(/search/i)).toBeInTheDocument()}},Ve={args:{open:!0,comments:[]},play:async({canvasElement:e})=>{await X(Q(e).getByText(/no comments yet/i)).toBeInTheDocument()}},He={args:{open:!0,comments:$(),showResolved:!1},play:async({canvasElement:e,args:t})=>{let n=Q(e).getByRole(`button`,{name:/show resolved/i});await X(n).toBeInTheDocument(),await X(n).toHaveTextContent(/\(2\)/),await Le.click(n),await X(t.onShowResolvedChange).toHaveBeenCalledWith(!0)}},Ue={args:{open:!0,comments:$(),showResolved:!0},play:async({canvasElement:e,args:t})=>{let n=Q(e).getByRole(`button`,{name:/hide resolved/i});await X(n).toBeInTheDocument(),await Le.click(n),await X(t.onShowResolvedChange).toHaveBeenCalledWith(!1)}},We={args:{open:!0,comments:$()},play:async({canvasElement:e,args:t})=>{let n=Q(e).getAllByRole(`button`,{name:/comment #/i}).at(0);await X(n).toBeDefined(),await Le.click(n),await X(t.onCommentClick).toHaveBeenCalledOnce()}},Ge={args:{open:!0,comments:$(),searchQuery:`dark mode`},play:async({canvasElement:e})=>{let t=Q(e);await X(t.getAllByRole(`button`,{name:/comment #/i})).toHaveLength(1),await X(t.getByText(/dark mode/i)).toBeInTheDocument()}},Ke={args:{open:!0,comments:$(),searchQuery:`#65`},play:async({canvasElement:e})=>{await X(Q(e).getAllByRole(`button`,{name:/comment #/i})).toHaveLength(1)}},qe={args:{open:!0,comments:[],noCommentsMessage:`Nothing to see here!`},play:async({canvasElement:e})=>{await X(Q(e).getByText(`Nothing to see here!`)).toBeInTheDocument()}},Je={args:{open:!0,comments:$().filter(e=>!e.isResolved)},play:async({canvasElement:e})=>{await X(Q(e).queryByRole(`button`,{name:/show resolved/i})).not.toBeInTheDocument()}},Ye={render:function(){let[e,t]=(0,Ie.useState)(!1),[n,r]=(0,Ie.useState)(``),[i,ee]=(0,Ie.useState)(!1),[a,o]=(0,Ie.useState)($());return(0,Y.jsxs)(`div`,{className:Pe.storyWrapper,children:[(0,Y.jsx)(te,{onClick:()=>t(!0),children:`Open Comments Drawer`}),(0,Y.jsx)(K,{open:e,onOpenChange:t,comments:a,searchQuery:n,onSearchChange:r,showResolved:i,onShowResolvedChange:ee,onCommentClick:e=>console.log(`Comment clicked:`,e.id),onResolveComment:e=>{o(t=>t.map(t=>t.id===e?{...t,isResolved:!0}:t))},onToggleActionRequired:e=>console.log(`Toggle action required:`,e),onForward:e=>console.log(`Forward:`,e),onMarkUnread:e=>console.log(`Mark unread:`,e),onCopyLink:e=>console.log(`Copy link:`,e),onDelete:e=>console.log(`Delete:`,e)})]})}},Xe={name:`With Filters (Interactive)`,parameters:{docs:{description:{story:`
Interactive story demonstrating the filter functionality. 

**Try these interactions:**
1. Click the **Filter** button to open the filter modal
2. Select filters from different categories:
   - **Status**: Filter by Unresolved, Resolved, or Action required
   - **Author**: Filter by specific comment authors (Karen J., John D., Jane S., Bob M.)
   - **Date range**: Filter by creation date
   - **Labels**: Filter by tags (Bug, High Priority, Feature Request, Documentation, Enhancement, Question)
3. Click **Apply** to see the filtered results
4. Selected filters appear as chips below the toolbar
5. Click on a chip to remove that filter, or use **Clear all** to remove all filters

**Current mock data:**
- 4 unresolved comments with various authors and labels
- 2 resolved comments
- Comment #63 has "Action required" status
                `}}},render:function(){let[e,t]=(0,Ie.useState)(!0),[n,r]=(0,Ie.useState)(``),[i,ee]=(0,Ie.useState)(!1),[a]=(0,Ie.useState)($());return(0,Y.jsxs)(`div`,{className:Pe.storyWrapper,children:[(0,Y.jsxs)(`div`,{className:Pe.filterDemo,children:[(0,Y.jsx)(`h3`,{className:Pe.filterDemoTitle,children:`Filter Demonstration`}),(0,Y.jsx)(`p`,{className:Pe.filterDemoText,children:`The drawer is open by default. Click the filter icon to explore filtering options.`}),(0,Y.jsx)(`p`,{className:Pe.filterDemoText,children:(0,Y.jsx)(`strong`,{children:`Try filtering by:`})}),(0,Y.jsxs)(`ul`,{className:Pe.filterDemoList,children:[(0,Y.jsx)(`li`,{children:`Author: "Karen J." to see 2 comments`}),(0,Y.jsx)(`li`,{children:`Label: "Bug" to see 2 comments`}),(0,Y.jsx)(`li`,{children:`Status: "Action required" to see 1 comment`}),(0,Y.jsx)(`li`,{children:`Multiple filters at once (e.g., Author + Label)`})]})]}),(0,Y.jsx)(K,{open:e,onOpenChange:t,comments:a,searchQuery:n,onSearchChange:r,showResolved:i,onShowResolvedChange:ee,onCommentClick:e=>console.log(`Comment clicked:`,e.id),onResolveComment:e=>console.log(`Resolve:`,e),onToggleActionRequired:e=>console.log(`Toggle action required:`,e),onForward:e=>console.log(`Forward:`,e),onMarkUnread:e=>console.log(`Mark unread:`,e),onCopyLink:e=>console.log(`Copy link:`,e),onDelete:e=>console.log(`Delete:`,e)})]})}},ze.parameters={...ze.parameters,docs:{...ze.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: createMockComments()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const title = canvas.getByText(/4 Comments/i);
    await expect(title).toBeInTheDocument();
  }
}`,...ze.parameters?.docs?.source}}},Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: createMockComments(),
    searchQuery: 'Karen'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const searchInput = canvas.getByPlaceholderText(/search/i);
    await expect(searchInput).toBeInTheDocument();
  }
}`,...Be.parameters?.docs?.source}}},Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: []
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const emptyMessage = canvas.getByText(/no comments yet/i);
    await expect(emptyMessage).toBeInTheDocument();
  }
}`,...Ve.parameters?.docs?.source}}},He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: createMockComments(),
    showResolved: false
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole('button', {
      name: /show resolved/i
    });
    await expect(toggleButton).toBeInTheDocument();
    await expect(toggleButton).toHaveTextContent(/\\(2\\)/);
    await userEvent.click(toggleButton);
    await expect(args.onShowResolvedChange).toHaveBeenCalledWith(true);
  }
}`,...He.parameters?.docs?.source}}},Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: createMockComments(),
    showResolved: true
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const toggleButton = canvas.getByRole('button', {
      name: /hide resolved/i
    });
    await expect(toggleButton).toBeInTheDocument();
    await userEvent.click(toggleButton);
    await expect(args.onShowResolvedChange).toHaveBeenCalledWith(false);
  }
}`,...Ue.parameters?.docs?.source}}},We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: createMockComments()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const card = canvas.getAllByRole('button', {
      name: /comment #/i
    }).at(0);
    await expect(card).toBeDefined();
    await userEvent.click(card as HTMLElement);
    await expect(args.onCommentClick).toHaveBeenCalledOnce();
  }
}`,...We.parameters?.docs?.source}}},Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: createMockComments(),
    searchQuery: 'dark mode'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cards = canvas.getAllByRole('button', {
      name: /comment #/i
    });
    await expect(cards).toHaveLength(1);
    await expect(canvas.getByText(/dark mode/i)).toBeInTheDocument();
  }
}`,...Ge.parameters?.docs?.source}}},Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: createMockComments(),
    searchQuery: '#65'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const cards = canvas.getAllByRole('button', {
      name: /comment #/i
    });
    await expect(cards).toHaveLength(1);
  }
}`,...Ke.parameters?.docs?.source}}},qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: [],
    noCommentsMessage: 'Nothing to see here!'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByText('Nothing to see here!')).toBeInTheDocument();
  }
}`,...qe.parameters?.docs?.source}}},Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`{
  args: {
    open: true,
    comments: createMockComments().filter(c => !c.isResolved)
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.queryByRole('button', {
      name: /show resolved/i
    })).not.toBeInTheDocument();
  }
}`,...Je.parameters?.docs?.source}}},Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`{
  render: function InteractiveStory() {
    const [open, setOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showResolved, setShowResolved] = useState(false);
    const [comments, setComments] = useState(createMockComments());
    const handleResolve = (commentId: string) => {
      setComments(prev => prev.map(c => c.id === commentId ? {
        ...c,
        isResolved: true
      } : c));
    };
    return <div className={styles.storyWrapper}>
                <DsButton onClick={() => setOpen(true)}>Open Comments Drawer</DsButton>

                <DsCommentsDrawer open={open} onOpenChange={setOpen} comments={comments} searchQuery={searchQuery} onSearchChange={setSearchQuery} showResolved={showResolved} onShowResolvedChange={setShowResolved} onCommentClick={comment => console.log('Comment clicked:', comment.id)} onResolveComment={handleResolve} onToggleActionRequired={commentId => console.log('Toggle action required:', commentId)} onForward={commentId => console.log('Forward:', commentId)} onMarkUnread={commentId => console.log('Mark unread:', commentId)} onCopyLink={commentId => console.log('Copy link:', commentId)} onDelete={commentId => console.log('Delete:', commentId)} />
            </div>;
  }
}`,...Ye.parameters?.docs?.source}}},Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
  name: 'With Filters (Interactive)',
  parameters: {
    docs: {
      description: {
        story: \`
Interactive story demonstrating the filter functionality. 

**Try these interactions:**
1. Click the **Filter** button to open the filter modal
2. Select filters from different categories:
   - **Status**: Filter by Unresolved, Resolved, or Action required
   - **Author**: Filter by specific comment authors (Karen J., John D., Jane S., Bob M.)
   - **Date range**: Filter by creation date
   - **Labels**: Filter by tags (Bug, High Priority, Feature Request, Documentation, Enhancement, Question)
3. Click **Apply** to see the filtered results
4. Selected filters appear as chips below the toolbar
5. Click on a chip to remove that filter, or use **Clear all** to remove all filters

**Current mock data:**
- 4 unresolved comments with various authors and labels
- 2 resolved comments
- Comment #63 has "Action required" status
                \`
      }
    }
  },
  render: function WithFiltersStory() {
    const [open, setOpen] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [showResolved, setShowResolved] = useState(false);
    const [comments] = useState(createMockComments());
    return <div className={styles.storyWrapper}>
                <div className={styles.filterDemo}>
                    <h3 className={styles.filterDemoTitle}>Filter Demonstration</h3>
                    <p className={styles.filterDemoText}>
                        The drawer is open by default. Click the filter icon to explore filtering options.
                    </p>
                    <p className={styles.filterDemoText}>
                        <strong>Try filtering by:</strong>
                    </p>
                    <ul className={styles.filterDemoList}>
                        <li>Author: &quot;Karen J.&quot; to see 2 comments</li>
                        <li>Label: &quot;Bug&quot; to see 2 comments</li>
                        <li>Status: &quot;Action required&quot; to see 1 comment</li>
                        <li>Multiple filters at once (e.g., Author + Label)</li>
                    </ul>
                </div>

                <DsCommentsDrawer open={open} onOpenChange={setOpen} comments={comments} searchQuery={searchQuery} onSearchChange={setSearchQuery} showResolved={showResolved} onShowResolvedChange={setShowResolved} onCommentClick={comment => console.log('Comment clicked:', comment.id)} onResolveComment={commentId => console.log('Resolve:', commentId)} onToggleActionRequired={commentId => console.log('Toggle action required:', commentId)} onForward={commentId => console.log('Forward:', commentId)} onMarkUnread={commentId => console.log('Mark unread:', commentId)} onCopyLink={commentId => console.log('Copy link:', commentId)} onDelete={commentId => console.log('Delete:', commentId)} />
            </div>;
  }
}`,...Xe.parameters?.docs?.source}}},Ze=[`Default`,`WithSearch`,`Empty`,`ShowResolvedToggle`,`HideResolvedToggle`,`CommentCardClick`,`SearchFiltering`,`SearchById`,`CustomEmptyMessage`,`NoResolvedComments`,`Interactive`,`WithFilters`]}))();export{We as CommentCardClick,qe as CustomEmptyMessage,ze as Default,Ve as Empty,Ue as HideResolvedToggle,Ye as Interactive,Je as NoResolvedComments,Ke as SearchById,Ge as SearchFiltering,He as ShowResolvedToggle,Xe as WithFilters,Be as WithSearch,Ze as __namedExportsOrder,Re as default};