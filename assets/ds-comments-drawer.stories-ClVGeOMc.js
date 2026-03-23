import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BGohno9G.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./compiler-runtime-B9nYSWdC.js";import{i as ee}from"./ds-icon.types-ChBJvltC.js";import{t as a}from"./ds-icon-CLXmu_5N.js";import{t as o}from"./ds-typography-BJjyIfGm.js";import{t as s}from"./ds-typography-88F3SWpc.js";import{n as te,t as c}from"./ds-button-Bv7DjxuC.js";import{r as ne}from"./ds-text-input.types-BJZObfaA.js";import{t as re}from"./ds-text-input-D_ROgFwl.js";import{r as ie}from"./ds-checkbox.types-Cs_GHBZx.js";import{t as ae}from"./ds-checkbox-ChpkoXry.js";import{n as oe,t as se}from"./ds-comment-card-BfCxMbfk.js";import{t as l}from"./ds-drawer-CKhzBUUL.js";import{t as ce}from"./ds-drawer-DziMzVb0.js";import{n as le,t as ue}from"./ds-tag-filter-Dj58KRj1.js";import{t as u}from"./ds-modal-31vdEgVH.js";import{t as de}from"./ds-modal-D7AitgSi.js";import{n as fe,t as d}from"./ds-tabs-8buT--ec.js";import{t as f}from"./ds-date-input--jpQBIaL.js";import{t as p}from"./ds-date-input-lOzYMCkM.js";var m,pe,h,me,g,he,_,v,y,b=t((()=>{m=`_headerActions_3bq4o_1`,pe=`_divider_3bq4o_7`,h=`_searchInput_3bq4o_13`,me=`_body_3bq4o_17`,g=`_emptyState_3bq4o_35`,he=`_emptyIcon_3bq4o_48`,_=`_filterTagsToolbar_3bq4o_52`,v=`_tagFilter_3bq4o_57`,y={headerActions:m,divider:pe,searchInput:h,body:me,emptyState:g,emptyIcon:he,filterTagsToolbar:_,tagFilter:v}})),x=t((()=>{le()})),S,ge,_e,ve,C=t((()=>{S={authors:[],labels:[],statuses:[]},ge=(e,t,n)=>e.filter(e=>{if(t.statuses.length>0){let r=[];if(e.isResolved?r.push(`resolved`):r.push(`unresolved`),n(e)&&r.push(`action-required`),!t.statuses.some(e=>r.includes(e)))return!1}if(t.authors.length>0&&!t.authors.includes(e.author.id))return!1;if(t.dateFrom){let n=new Date(t.dateFrom);if(e.createdAt<n)return!1}if(t.dateTo){let n=new Date(t.dateTo);if(n.setHours(23,59,59,999),e.createdAt>n)return!1}return!(t.labels.length>0&&(!e.labels||!t.labels.some(t=>e.labels?.includes(t))))}),_e=(e,t)=>{let n=[];if(e.statuses.forEach(e=>{let t=e===`action-required`?`Action required`:e.charAt(0).toUpperCase()+e.slice(1);n.push({id:`status-${e}`,label:`Status: ${t}`,filterId:`statuses`,value:e})}),e.authors.forEach(e=>{let r=t.get(e)||e;n.push({id:`author-${e}`,label:`Author: ${r}`,filterId:`authors`,value:e})}),e.dateFrom||e.dateTo){let t=e.dateFrom||`...`,r=e.dateTo||`...`;n.push({id:`date-range`,label:`Date: ${t} to ${r}`,filterId:`date`,value:`range`})}return e.labels.forEach(e=>{n.push({id:`label-${e}`,label:`Label: ${e}`,filterId:`labels`,value:e})}),n},ve=(e,t)=>{let n={...e};switch(t.filterId){case`statuses`:n.statuses=n.statuses.filter(e=>e!==t.value);break;case`authors`:n.authors=n.authors.filter(e=>e!==t.value);break;case`labels`:n.labels=n.labels.filter(e=>e!==t.value);break;case`date`:n.dateFrom=void 0,n.dateTo=void 0;break}return n}})),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z=t((()=>{w=`_modal_1ht28_1`,T=`_header_1ht28_5`,E=`_headerLeft_1ht28_12`,D=`_body_1ht28_18`,O=`_tabs_1ht28_24`,k=`_tabList_1ht28_30`,A=`_tabContent_1ht28_40`,j=`_badge_1ht28_52`,M=`_dot_1ht28_59`,N=`_filterSection_1ht28_66`,P=`_dateField_1ht28_72`,F=`_dateLabel_1ht28_78`,I=`_emptyMessage_1ht28_82`,L=`_footer_1ht28_86`,R={modal:w,header:T,headerLeft:E,body:D,tabs:O,tabList:k,tabContent:A,badge:j,dot:M,filterSection:N,dateField:P,dateLabel:F,emptyMessage:I,footer:L}})),B=t((()=>{fe()})),ye,be,V,H,U=t((()=>{ye=i(),be=e(n(),1),z(),de(),B(),s(),ae(),c(),a(),p(),V=r(),H=e=>{let t=(0,ye.c)(117),{open:n,onOpenChange:r,filters:i,onFiltersChange:a,onApply:s,onClearAll:c,availableAuthors:ne,availableLabels:re}=e,[ae,oe]=(0,be.useState)(`statuses`),se;t[0]!==i||t[1]!==a?(se=(e,t)=>{a({...i,statuses:t?[...i.statuses,e]:i.statuses.filter(t=>t!==e)})},t[0]=i,t[1]=a,t[2]=se):se=t[2];let l=se,ce;t[3]!==i||t[4]!==a?(ce=(e,t)=>{a({...i,authors:t?[...i.authors,e]:i.authors.filter(t=>t!==e)})},t[3]=i,t[4]=a,t[5]=ce):ce=t[5];let le=ce,ue;t[6]!==i||t[7]!==a?(ue=(e,t)=>{a({...i,labels:t?[...i.labels,e]:i.labels.filter(t=>t!==e)})},t[6]=i,t[7]=a,t[8]=ue):ue=t[8];let de=ue,fe;t[9]!==i||t[10]!==a?(fe=e=>{a({...i,dateFrom:e})},t[9]=i,t[10]=a,t[11]=fe):fe=t[11];let p=fe,m;t[12]!==i||t[13]!==a?(m=e=>{a({...i,dateTo:e})},t[12]=i,t[13]=a,t[14]=m):m=t[14];let pe=m,h=(i.dateFrom?1:0)+(i.dateTo?1:0),me;t[15]!==i.authors.length||t[16]!==i.labels.length||t[17]!==i.statuses.length||t[18]!==h?(me={statuses:i.statuses.length,authors:i.authors.length,dateRange:h,labels:i.labels.length},t[15]=i.authors.length,t[16]=i.labels.length,t[17]=i.statuses.length,t[18]=h,t[19]=me):me=t[19];let g=me,he;t[20]===Symbol.for(`react.memo_cache_sentinel`)?(he=(0,V.jsxs)(u.Header,{className:R.header,children:[(0,V.jsxs)(`div`,{className:R.headerLeft,children:[(0,V.jsx)(ee,{icon:`filter_list`,size:`small`}),(0,V.jsx)(u.Title,{children:`Filters`})]}),(0,V.jsx)(u.CloseTrigger,{})]}),t[20]=he):he=t[20];let _;t[21]===Symbol.for(`react.memo_cache_sentinel`)?(_=e=>{e&&oe(e)},t[21]=_):_=t[21];let v;t[22]===Symbol.for(`react.memo_cache_sentinel`)?(v=(0,V.jsx)(o,{variant:`body-sm-md`,children:`Status`}),t[22]=v):v=t[22];let y;t[23]===g.statuses?y=t[24]:(y=g.statuses>0&&(0,V.jsxs)(`div`,{className:R.badge,children:[(0,V.jsx)(`span`,{className:R.dot}),(0,V.jsx)(o,{variant:`body-sm-reg`,children:g.statuses})]}),t[23]=g.statuses,t[24]=y);let b;t[25]===y?b=t[26]:(b=(0,V.jsxs)(d.Tab,{value:`statuses`,children:[v,y]}),t[25]=y,t[26]=b);let x;t[27]===Symbol.for(`react.memo_cache_sentinel`)?(x=(0,V.jsx)(o,{variant:`body-sm-md`,children:`Author`}),t[27]=x):x=t[27];let S;t[28]===g.authors?S=t[29]:(S=g.authors>0&&(0,V.jsxs)(`div`,{className:R.badge,children:[(0,V.jsx)(`span`,{className:R.dot}),(0,V.jsx)(o,{variant:`body-sm-reg`,children:g.authors})]}),t[28]=g.authors,t[29]=S);let ge;t[30]===S?ge=t[31]:(ge=(0,V.jsxs)(d.Tab,{value:`authors`,children:[x,S]}),t[30]=S,t[31]=ge);let _e;t[32]===Symbol.for(`react.memo_cache_sentinel`)?(_e=(0,V.jsx)(o,{variant:`body-sm-md`,children:`Date range`}),t[32]=_e):_e=t[32];let ve;t[33]===g.dateRange?ve=t[34]:(ve=g.dateRange>0&&(0,V.jsxs)(`div`,{className:R.badge,children:[(0,V.jsx)(`span`,{className:R.dot}),(0,V.jsx)(o,{variant:`body-sm-reg`,children:g.dateRange})]}),t[33]=g.dateRange,t[34]=ve);let C;t[35]===ve?C=t[36]:(C=(0,V.jsxs)(d.Tab,{value:`dateRange`,children:[_e,ve]}),t[35]=ve,t[36]=C);let w;t[37]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,V.jsx)(o,{variant:`body-sm-md`,children:`Labels`}),t[37]=w):w=t[37];let T;t[38]===g.labels?T=t[39]:(T=g.labels>0&&(0,V.jsxs)(`div`,{className:R.badge,children:[(0,V.jsx)(`span`,{className:R.dot}),(0,V.jsx)(o,{variant:`body-sm-reg`,children:g.labels})]}),t[38]=g.labels,t[39]=T);let E;t[40]===T?E=t[41]:(E=(0,V.jsxs)(d.Tab,{value:`labels`,children:[w,T]}),t[40]=T,t[41]=E);let D;t[42]!==b||t[43]!==ge||t[44]!==C||t[45]!==E?(D=(0,V.jsxs)(d.List,{className:R.tabList,children:[b,ge,C,E]}),t[42]=b,t[43]=ge,t[44]=C,t[45]=E,t[46]=D):D=t[46];let O;t[47]===i.statuses?O=t[48]:(O=i.statuses.includes(`unresolved`),t[47]=i.statuses,t[48]=O);let k;t[49]===l?k=t[50]:(k=e=>l(`unresolved`,e===!0),t[49]=l,t[50]=k);let A;t[51]!==O||t[52]!==k?(A=(0,V.jsx)(ie,{label:`Unresolved`,checked:O,onCheckedChange:k}),t[51]=O,t[52]=k,t[53]=A):A=t[53];let j;t[54]===i.statuses?j=t[55]:(j=i.statuses.includes(`resolved`),t[54]=i.statuses,t[55]=j);let M;t[56]===l?M=t[57]:(M=e=>l(`resolved`,e===!0),t[56]=l,t[57]=M);let N;t[58]!==j||t[59]!==M?(N=(0,V.jsx)(ie,{label:`Resolved`,checked:j,onCheckedChange:M}),t[58]=j,t[59]=M,t[60]=N):N=t[60];let P;t[61]===i.statuses?P=t[62]:(P=i.statuses.includes(`action-required`),t[61]=i.statuses,t[62]=P);let F;t[63]===l?F=t[64]:(F=e=>l(`action-required`,e===!0),t[63]=l,t[64]=F);let I;t[65]!==P||t[66]!==F?(I=(0,V.jsx)(ie,{label:`Action required`,checked:P,onCheckedChange:F}),t[65]=P,t[66]=F,t[67]=I):I=t[67];let L;t[68]!==A||t[69]!==N||t[70]!==I?(L=(0,V.jsx)(d.Content,{value:`statuses`,className:R.tabContent,children:(0,V.jsxs)(`div`,{className:R.filterSection,children:[A,N,I]})}),t[68]=A,t[69]=N,t[70]=I,t[71]=L):L=t[71];let z;t[72]!==ne||t[73]!==i.authors||t[74]!==le?(z=ne.length===0?(0,V.jsx)(o,{variant:`body-sm-reg`,className:R.emptyMessage,children:`No authors available`}):ne.map(e=>(0,V.jsx)(ie,{label:e.name,checked:i.authors.includes(e.id),onCheckedChange:t=>le(e.id,t===!0)},e.id)),t[72]=ne,t[73]=i.authors,t[74]=le,t[75]=z):z=t[75];let B;t[76]===z?B=t[77]:(B=(0,V.jsx)(d.Content,{value:`authors`,className:R.tabContent,children:(0,V.jsx)(`div`,{className:R.filterSection,children:z})}),t[76]=z,t[77]=B);let H;t[78]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,V.jsx)(o,{variant:`body-sm-md`,className:R.dateLabel,children:`From`}),t[78]=H):H=t[78];let U;t[79]!==i.dateFrom||t[80]!==i.dateTo||t[81]!==p?(U=(0,V.jsxs)(`div`,{className:R.dateField,children:[H,(0,V.jsx)(f,{value:i.dateFrom,onValueChange:p,max:i.dateTo,placeholder:`Select start date`,disablePortal:!0})]}),t[79]=i.dateFrom,t[80]=i.dateTo,t[81]=p,t[82]=U):U=t[82];let xe;t[83]===Symbol.for(`react.memo_cache_sentinel`)?(xe=(0,V.jsx)(o,{variant:`body-sm-md`,className:R.dateLabel,children:`To`}),t[83]=xe):xe=t[83];let Se;t[84]!==i.dateFrom||t[85]!==i.dateTo||t[86]!==pe?(Se=(0,V.jsxs)(`div`,{className:R.dateField,children:[xe,(0,V.jsx)(f,{value:i.dateTo,onValueChange:pe,min:i.dateFrom,placeholder:`Select end date`,disablePortal:!0})]}),t[84]=i.dateFrom,t[85]=i.dateTo,t[86]=pe,t[87]=Se):Se=t[87];let Ce;t[88]!==U||t[89]!==Se?(Ce=(0,V.jsx)(d.Content,{value:`dateRange`,className:R.tabContent,children:(0,V.jsxs)(`div`,{className:R.filterSection,children:[U,Se]})}),t[88]=U,t[89]=Se,t[90]=Ce):Ce=t[90];let we;t[91]!==re||t[92]!==i.labels||t[93]!==de?(we=re.length===0?(0,V.jsx)(o,{variant:`body-sm-reg`,className:R.emptyMessage,children:`No labels available`}):re.map(e=>(0,V.jsx)(ie,{label:e,checked:i.labels.includes(e),onCheckedChange:t=>de(e,t===!0)},e)),t[91]=re,t[92]=i.labels,t[93]=de,t[94]=we):we=t[94];let Te;t[95]===we?Te=t[96]:(Te=(0,V.jsx)(d.Content,{value:`labels`,className:R.tabContent,children:(0,V.jsx)(`div`,{className:R.filterSection,children:we})}),t[95]=we,t[96]=Te);let Ee;t[97]!==ae||t[98]!==D||t[99]!==L||t[100]!==B||t[101]!==Ce||t[102]!==Te?(Ee=(0,V.jsx)(u.Body,{className:R.body,children:(0,V.jsxs)(d.Root,{value:ae,onValueChange:_,orientation:`vertical`,className:R.tabs,children:[D,L,B,Ce,Te]})}),t[97]=ae,t[98]=D,t[99]=L,t[100]=B,t[101]=Ce,t[102]=Te,t[103]=Ee):Ee=t[103];let W;t[104]===Symbol.for(`react.memo_cache_sentinel`)?(W=(0,V.jsx)(ee,{icon:`close`,size:`tiny`}),t[104]=W):W=t[104];let G;t[105]===c?G=t[106]:(G=(0,V.jsxs)(te,{design:`v1.2`,variant:`filled`,buttonType:`secondary`,onClick:c,children:[W,`Clear all`]}),t[105]=c,t[106]=G);let K;t[107]===s?K=t[108]:(K=(0,V.jsx)(u.Actions,{children:(0,V.jsx)(te,{design:`v1.2`,variant:`filled`,buttonType:`primary`,onClick:s,children:`Apply`})}),t[107]=s,t[108]=K);let q;t[109]!==G||t[110]!==K?(q=(0,V.jsxs)(u.Footer,{className:R.footer,children:[G,K]}),t[109]=G,t[110]=K,t[111]=q):q=t[111];let J;return t[112]!==r||t[113]!==n||t[114]!==Ee||t[115]!==q?(J=(0,V.jsxs)(u,{open:n,onOpenChange:r,className:R.modal,children:[he,Ee,q]}),t[112]=r,t[113]=n,t[114]=Ee,t[115]=q,t[116]=J):J=t[116],J}})),xe=t((()=>{U()}));function Se(e){let[t,n]=e;return{id:t,name:n}}function Ce(e){return!e.isResolved}function we(e){return e.isActionRequired||!1}function Te(e){return!e.isResolved}function Ee(e){return e.isResolved}var W,G,K,q,J=t((()=>{W=i(),G=e(n(),1),b(),ce(),se(),c(),a(),re(),x(),C(),xe(),K=r(),q=e=>{let t=(0,W.c)(102),{open:n,onOpenChange:r,comments:i,showResolved:a,onShowResolvedChange:o,searchQuery:s,onSearchChange:c,onCommentClick:re,onResolveComment:ie,onToggleActionRequired:ae,onForward:se,onMarkUnread:ce,onCopyLink:le,onDelete:u,noCommentsMessage:de,className:fe,style:d}=e,f=a===void 0?!1:a,p=s===void 0?``:s,[m,pe]=(0,G.useState)(!1),[h,me]=(0,G.useState)(S),[g,he]=(0,G.useState)(S),_,v,b,x,C,w,T,E,D,O,k,A,j,M,N,P,F,I;if(t[0]!==g||t[1]!==fe||t[2]!==i||t[3]!==de||t[4]!==re||t[5]!==le||t[6]!==u||t[7]!==se||t[8]!==ce||t[9]!==r||t[10]!==ie||t[11]!==c||t[12]!==o||t[13]!==ae||t[14]!==n||t[15]!==h||t[16]!==p||t[17]!==f||t[18]!==d){let e=new Map,a=new Set;i.forEach(t=>{e.set(t.author.id,t.author.name),t.labels?.forEach(e=>a.add(e))}),b=Array.from(e.entries()).map(Se),x=Array.from(a);let s=i;if(f||(s=s.filter(Ce)),s=ge(s,g,we),p){let e=p.toLowerCase();s=s.filter(t=>{let n=t.messages.some(t=>t.content.toLowerCase().includes(e)),r=t.author.name.toLowerCase().includes(e),i=`#${String(t.numericId)}`.includes(e);return n||r||i})}let m;t[37]===i?m=t[38]:(m=i.filter(Te),t[37]=i,t[38]=m);let L=m.length,R;t[39]===i?R=t[40]:(R=i.filter(Ee),t[39]=i,t[40]=R);let z=R.length,B=z>0,ye=_e(g,e),be;t[41]!==o||t[42]!==f?(be=()=>{o?.(!f)},t[41]=o,t[42]=f,t[43]=be):be=t[43];let V=be,H;t[44]===g?H=t[45]:(H=()=>{me(g),pe(!0)},t[44]=g,t[45]=H);let U=H,xe;t[46]===h?xe=t[47]:(xe=()=>{he(h),pe(!1)},t[46]=h,t[47]=xe),C=xe;let W;t[48]===Symbol.for(`react.memo_cache_sentinel`)?(W=()=>{me(S),he(S),pe(!1)},t[48]=W):W=t[48],w=W;let G;t[49]!==g||t[50]!==ye?(G=e=>{let t=ye.find(t=>t.id===e.id);t&&he(ve(g,t))},t[49]=g,t[50]=ye,t[51]=G):G=t[51];let q=G;v=l,M=n,N=r,P=`start`,F=4,I=fe,T=d;let J;t[52]===L?J=t[53]:(J=(0,K.jsxs)(l.Title,{children:[L,` Comments`]}),t[52]=L,t[53]=J);let De;t[54]===Symbol.for(`react.memo_cache_sentinel`)?(De=(0,K.jsxs)(`div`,{className:y.headerActions,children:[(0,K.jsx)(te,{design:`v1.2`,buttonType:`tertiary`,size:`small`,"aria-label":`More actions`,children:(0,K.jsx)(ee,{icon:`more_vert`,size:`tiny`})}),(0,K.jsx)(`div`,{className:y.divider}),(0,K.jsx)(l.CloseTrigger,{})]}),t[54]=De):De=t[54],t[55]===J?E=t[56]:(E=(0,K.jsxs)(l.Header,{children:[J,De]}),t[55]=J,t[56]=E);let Oe;t[57]===Symbol.for(`react.memo_cache_sentinel`)?(Oe={startAdornment:(0,K.jsx)(ee,{icon:`search`,size:`tiny`})},t[57]=Oe):Oe=t[57];let ke;t[58]!==c||t[59]!==p?(ke=(0,K.jsx)(ne,{placeholder:`Search`,value:p,onValueChange:c,className:y.searchInput,slots:Oe}),t[58]=c,t[59]=p,t[60]=ke):ke=t[60];let Ae;t[61]===Symbol.for(`react.memo_cache_sentinel`)?(Ae=(0,K.jsx)(ee,{icon:`filter_list`,size:`tiny`}),t[61]=Ae):Ae=t[61];let je;t[62]===U?je=t[63]:(je=(0,K.jsx)(te,{design:`v1.2`,buttonType:`tertiary`,size:`small`,"aria-label":`Filter`,onClick:U,children:Ae}),t[62]=U,t[63]=je),t[64]!==ke||t[65]!==je?(D=(0,K.jsxs)(l.Toolbar,{children:[ke,je]}),t[64]=ke,t[65]=je,t[66]=D):D=t[66],t[67]!==V||t[68]!==B||t[69]!==z||t[70]!==f?(O=B&&(0,K.jsx)(l.Toolbar,{children:(0,K.jsxs)(te,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:V,children:[f?`Hide`:`Show`,` resolved (`,z,`)`]})}),t[67]=V,t[68]=B,t[69]=z,t[70]=f,t[71]=O):O=t[71],t[72]!==ye||t[73]!==q?(k=ye.length>0&&(0,K.jsx)(l.Toolbar,{className:y.filterTagsToolbar,children:(0,K.jsx)(ue,{items:ye,onClearAll:w,onItemDelete:q,className:y.tagFilter})}),t[72]=ye,t[73]=q,t[74]=k):k=t[74],_=l.Body,A=y.body,j=s.length===0?(0,K.jsx)(`div`,{className:y.emptyState,children:de||(0,K.jsxs)(K.Fragment,{children:[(0,K.jsx)(ee,{icon:`chat_bubble_outline`,size:`large`,className:y.emptyIcon}),(0,K.jsx)(`span`,{children:`No comments yet`})]})}):s.map(e=>(0,K.jsx)(oe,{comment:e,overflow:`displayed`,onClick:()=>re?.(e),onResolve:()=>ie?.(e.id),onToggleActionRequired:()=>ae?.(e.id),onForward:()=>se?.(e.id),onMarkUnread:()=>ce?.(e.id),onCopyLink:()=>le?.(e.id),onDelete:()=>u?.(e.id)},e.id)),t[0]=g,t[1]=fe,t[2]=i,t[3]=de,t[4]=re,t[5]=le,t[6]=u,t[7]=se,t[8]=ce,t[9]=r,t[10]=ie,t[11]=c,t[12]=o,t[13]=ae,t[14]=n,t[15]=h,t[16]=p,t[17]=f,t[18]=d,t[19]=_,t[20]=v,t[21]=b,t[22]=x,t[23]=C,t[24]=w,t[25]=T,t[26]=E,t[27]=D,t[28]=O,t[29]=k,t[30]=A,t[31]=j,t[32]=M,t[33]=N,t[34]=P,t[35]=F,t[36]=I}else _=t[19],v=t[20],b=t[21],x=t[22],C=t[23],w=t[24],T=t[25],E=t[26],D=t[27],O=t[28],k=t[29],A=t[30],j=t[31],M=t[32],N=t[33],P=t[34],F=t[35],I=t[36];let L;t[75]!==_||t[76]!==A||t[77]!==j?(L=(0,K.jsx)(_,{className:A,children:j}),t[75]=_,t[76]=A,t[77]=j,t[78]=L):L=t[78];let R;t[79]!==v||t[80]!==T||t[81]!==E||t[82]!==D||t[83]!==O||t[84]!==k||t[85]!==L||t[86]!==M||t[87]!==N||t[88]!==P||t[89]!==F||t[90]!==I?(R=(0,K.jsxs)(v,{open:M,onOpenChange:N,position:P,columns:F,className:I,style:T,children:[E,D,O,k,L]}),t[79]=v,t[80]=T,t[81]=E,t[82]=D,t[83]=O,t[84]=k,t[85]=L,t[86]=M,t[87]=N,t[88]=P,t[89]=F,t[90]=I,t[91]=R):R=t[91];let z;t[92]!==b||t[93]!==x||t[94]!==C||t[95]!==w||t[96]!==m||t[97]!==h?(z=(0,K.jsx)(H,{open:m,onOpenChange:pe,filters:h,onFiltersChange:me,onApply:C,onClearAll:w,availableAuthors:b,availableLabels:x}),t[92]=b,t[93]=x,t[94]=C,t[95]=w,t[96]=m,t[97]=h,t[98]=z):z=t[98];let B;return t[99]!==R||t[100]!==z?(B=(0,K.jsxs)(K.Fragment,{children:[R,z]}),t[99]=R,t[100]=z,t[101]=B):B=t[101],B}})),De=t((()=>{})),Oe=t((()=>{})),ke=t((()=>{J(),De(),Oe()})),Ae,je,Me,Ne,Pe,Fe,Ie=t((()=>{Ae=`_storyWrapper_1iwkl_1`,je=`_filterDemo_1iwkl_9`,Me=`_filterDemoTitle_1iwkl_14`,Ne=`_filterDemoText_1iwkl_18`,Pe=`_filterDemoList_1iwkl_23`,Fe={storyWrapper:Ae,filterDemo:je,filterDemoTitle:Me,filterDemoText:Ne,filterDemoList:Pe}})),Le,Y,X,Z,Re,Q,$,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe;t((()=>{Le=e(n(),1),ke(),c(),Ie(),Y=r(),{expect:X,fn:Z,userEvent:Re,within:Q}=__STORYBOOK_MODULE_TEST__,$=()=>[{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,labels:[`Bug`,`High Priority`],messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Thanks for the feedback!`,createdAt:new Date(Date.now()-720*60*1e3)},{id:`msg-3`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`I agree with this approach.`,createdAt:new Date(Date.now()-360*60*1e3)}]},{id:`comment-2`,numericId:64,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-2880*60*1e3),isResolved:!1,labels:[`Feature Request`],messages:[{id:`msg-4`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Could we add a dark mode feature to the application? This would improve usability for users working in low-light environments.`,createdAt:new Date(Date.now()-2880*60*1e3),isInitialMessage:!0}]},{id:`comment-3`,numericId:65,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},createdAt:new Date(Date.now()-4320*60*1e3),isResolved:!1,labels:[`Documentation`,`Enhancement`],messages:[{id:`msg-5`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`The API documentation needs to be updated to reflect the recent changes we made to the authentication system. This will help developers integrate with our service more easily.`,createdAt:new Date(Date.now()-4320*60*1e3),isInitialMessage:!0},{id:`msg-6`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`Good point!`,createdAt:new Date(Date.now()-3600*60*1e3)},{id:`msg-7`,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},content:`I will look into this.`,createdAt:new Date(Date.now()-2880*60*1e3)},{id:`msg-8`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`Thanks everyone!`,createdAt:new Date(Date.now()-2160*60*1e3)}]},{id:`comment-4`,numericId:66,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},createdAt:new Date(Date.now()-5760*60*1e3),isResolved:!1,labels:[`Question`],messages:[{id:`msg-9`,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},content:`Should we consider migrating to the new version of the framework? It offers better performance and security features that could benefit our application.`,createdAt:new Date(Date.now()-5760*60*1e3),isInitialMessage:!0}]},{id:`comment-5`,numericId:67,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(Date.now()-7200*60*1e3),isResolved:!0,labels:[`Bug`],messages:[{id:`msg-10`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`This has been resolved.`,createdAt:new Date(Date.now()-7200*60*1e3),isInitialMessage:!0}]},{id:`comment-6`,numericId:68,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-8640*60*1e3),isResolved:!0,labels:[`Documentation`],messages:[{id:`msg-11`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Documentation updated.`,createdAt:new Date(Date.now()-8640*60*1e3),isInitialMessage:!0}]}],ze={title:`Design System/Comments/CommentsDrawer`,component:q,parameters:{layout:`fullscreen`,docs:{description:{component:`
Side panel for viewing and managing all comments.

**Features:**
- Displays list of comment cards
- Search functionality
- Filter button (integration point)
- Show/hide resolved comments
- Comment count in header
- Click to open comment bubble
- Hover syncs with indicators on screen
        `}}},argTypes:{open:{control:`boolean`,description:`Whether drawer is open`},showResolved:{control:`boolean`,description:`Whether to show resolved comments`},searchQuery:{control:`text`,description:`Search query`}},args:{onOpenChange:Z(),onShowResolvedChange:Z(),onSearchChange:Z(),onCommentClick:Z(),onResolveComment:Z(),onToggleActionRequired:Z(),onForward:Z(),onMarkUnread:Z(),onCopyLink:Z(),onDelete:Z()}},Be={args:{open:!0,comments:$()},play:async({canvasElement:e})=>{await X(Q(e).getByText(/4 Comments/i)).toBeInTheDocument()}},Ve={args:{open:!0,comments:$(),searchQuery:`Karen`},play:async({canvasElement:e})=>{await X(Q(e).getByPlaceholderText(/search/i)).toBeInTheDocument()}},He={args:{open:!0,comments:[]},play:async({canvasElement:e})=>{await X(Q(e).getByText(/no comments yet/i)).toBeInTheDocument()}},Ue={args:{open:!0,comments:$(),showResolved:!1},play:async({canvasElement:e,args:t})=>{let n=Q(e).getByRole(`button`,{name:/show resolved/i});await X(n).toBeInTheDocument(),await X(n).toHaveTextContent(/\(2\)/),await Re.click(n),await X(t.onShowResolvedChange).toHaveBeenCalledWith(!0)}},We={args:{open:!0,comments:$(),showResolved:!0},play:async({canvasElement:e,args:t})=>{let n=Q(e).getByRole(`button`,{name:/hide resolved/i});await X(n).toBeInTheDocument(),await Re.click(n),await X(t.onShowResolvedChange).toHaveBeenCalledWith(!1)}},Ge={args:{open:!0,comments:$()},play:async({canvasElement:e,args:t})=>{let n=Q(e).getAllByRole(`button`,{name:/comment #/i}).at(0);await X(n).toBeDefined(),await Re.click(n),await X(t.onCommentClick).toHaveBeenCalledOnce()}},Ke={args:{open:!0,comments:$(),searchQuery:`dark mode`},play:async({canvasElement:e})=>{let t=Q(e);await X(t.getAllByRole(`button`,{name:/comment #/i})).toHaveLength(1),await X(t.getByText(/dark mode/i)).toBeInTheDocument()}},qe={args:{open:!0,comments:$(),searchQuery:`#65`},play:async({canvasElement:e})=>{await X(Q(e).getAllByRole(`button`,{name:/comment #/i})).toHaveLength(1)}},Je={args:{open:!0,comments:[],noCommentsMessage:`Nothing to see here!`},play:async({canvasElement:e})=>{await X(Q(e).getByText(`Nothing to see here!`)).toBeInTheDocument()}},Ye={args:{open:!0,comments:$().filter(e=>!e.isResolved)},play:async({canvasElement:e})=>{await X(Q(e).queryByRole(`button`,{name:/show resolved/i})).not.toBeInTheDocument()}},Xe={render:function(){let[e,t]=(0,Le.useState)(!1),[n,r]=(0,Le.useState)(``),[i,ee]=(0,Le.useState)(!1),[a,o]=(0,Le.useState)($());return(0,Y.jsxs)(`div`,{className:Fe.storyWrapper,children:[(0,Y.jsx)(te,{onClick:()=>t(!0),children:`Open Comments Drawer`}),(0,Y.jsx)(q,{open:e,onOpenChange:t,comments:a,searchQuery:n,onSearchChange:r,showResolved:i,onShowResolvedChange:ee,onCommentClick:e=>console.log(`Comment clicked:`,e.id),onResolveComment:e=>{o(t=>t.map(t=>t.id===e?{...t,isResolved:!0}:t))},onToggleActionRequired:e=>console.log(`Toggle action required:`,e),onForward:e=>console.log(`Forward:`,e),onMarkUnread:e=>console.log(`Mark unread:`,e),onCopyLink:e=>console.log(`Copy link:`,e),onDelete:e=>console.log(`Delete:`,e)})]})}},Ze={name:`With Filters (Interactive)`,parameters:{docs:{description:{story:`
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
                `}}},render:function(){let[e,t]=(0,Le.useState)(!0),[n,r]=(0,Le.useState)(``),[i,ee]=(0,Le.useState)(!1),[a]=(0,Le.useState)($());return(0,Y.jsxs)(`div`,{className:Fe.storyWrapper,children:[(0,Y.jsxs)(`div`,{className:Fe.filterDemo,children:[(0,Y.jsx)(`h3`,{className:Fe.filterDemoTitle,children:`Filter Demonstration`}),(0,Y.jsx)(`p`,{className:Fe.filterDemoText,children:`The drawer is open by default. Click the filter icon to explore filtering options.`}),(0,Y.jsx)(`p`,{className:Fe.filterDemoText,children:(0,Y.jsx)(`strong`,{children:`Try filtering by:`})}),(0,Y.jsxs)(`ul`,{className:Fe.filterDemoList,children:[(0,Y.jsx)(`li`,{children:`Author: "Karen J." to see 2 comments`}),(0,Y.jsx)(`li`,{children:`Label: "Bug" to see 2 comments`}),(0,Y.jsx)(`li`,{children:`Status: "Action required" to see 1 comment`}),(0,Y.jsx)(`li`,{children:`Multiple filters at once (e.g., Author + Label)`})]})]}),(0,Y.jsx)(q,{open:e,onOpenChange:t,comments:a,searchQuery:n,onSearchChange:r,showResolved:i,onShowResolvedChange:ee,onCommentClick:e=>console.log(`Comment clicked:`,e.id),onResolveComment:e=>console.log(`Resolve:`,e),onToggleActionRequired:e=>console.log(`Toggle action required:`,e),onForward:e=>console.log(`Forward:`,e),onMarkUnread:e=>console.log(`Mark unread:`,e),onCopyLink:e=>console.log(`Copy link:`,e),onDelete:e=>console.log(`Delete:`,e)})]})}},Be.parameters={...Be.parameters,docs:{...Be.parameters?.docs,source:{originalSource:`{
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
}`,...Be.parameters?.docs?.source}}},Ve.parameters={...Ve.parameters,docs:{...Ve.parameters?.docs,source:{originalSource:`{
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
}`,...Ve.parameters?.docs?.source}}},He.parameters={...He.parameters,docs:{...He.parameters?.docs,source:{originalSource:`{
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
}`,...He.parameters?.docs?.source}}},Ue.parameters={...Ue.parameters,docs:{...Ue.parameters?.docs,source:{originalSource:`{
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
}`,...Ue.parameters?.docs?.source}}},We.parameters={...We.parameters,docs:{...We.parameters?.docs,source:{originalSource:`{
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
}`,...We.parameters?.docs?.source}}},Ge.parameters={...Ge.parameters,docs:{...Ge.parameters?.docs,source:{originalSource:`{
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
}`,...Ge.parameters?.docs?.source}}},Ke.parameters={...Ke.parameters,docs:{...Ke.parameters?.docs,source:{originalSource:`{
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
}`,...Ke.parameters?.docs?.source}}},qe.parameters={...qe.parameters,docs:{...qe.parameters?.docs,source:{originalSource:`{
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
}`,...qe.parameters?.docs?.source}}},Je.parameters={...Je.parameters,docs:{...Je.parameters?.docs,source:{originalSource:`{
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
}`,...Je.parameters?.docs?.source}}},Ye.parameters={...Ye.parameters,docs:{...Ye.parameters?.docs,source:{originalSource:`{
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
}`,...Ye.parameters?.docs?.source}}},Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
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
}`,...Xe.parameters?.docs?.source}}},Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`{
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
}`,...Ze.parameters?.docs?.source}}},Qe=[`Default`,`WithSearch`,`Empty`,`ShowResolvedToggle`,`HideResolvedToggle`,`CommentCardClick`,`SearchFiltering`,`SearchById`,`CustomEmptyMessage`,`NoResolvedComments`,`Interactive`,`WithFilters`]}))();export{Ge as CommentCardClick,Je as CustomEmptyMessage,Be as Default,He as Empty,We as HideResolvedToggle,Xe as Interactive,Ye as NoResolvedComments,qe as SearchById,Ke as SearchFiltering,Ue as ShowResolvedToggle,Ze as WithFilters,Ve as WithSearch,Qe as __namedExportsOrder,ze as default};