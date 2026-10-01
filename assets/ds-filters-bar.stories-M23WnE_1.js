import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-BdwoJ3br.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-icon-DITRiMsv.js";import{n as c,t as l}from"./ds-checkbox-od3Xl_bC.js";import{t as u}from"./ds-select-BwYPIPuT.js";import{a as d,i as f,n as p,t as m}from"./ds-typography-Bws15J96.js";import{n as h,t as g}from"./ds-button-v3-BGLKEp9t.js";import{n as _,t as v}from"./ds-stack-UJfgIaLN.js";import{t as y}from"./ds-text-input-D45LXggx.js";import{t as b}from"./ds-text-input-D2cpBQDi.js";import{n as x,t as S}from"./use-controlled-CNEmuIQZ.js";import{t as C}from"./ds-select-DCp5VY8b.js";import{t as w}from"./ds-popover-BsNkkPtV.js";import{t as T}from"./ds-popover-Dej4r_PG.js";import{t as E}from"./ds-form-control-CuddTjcI.js";import{t as D}from"./ds-form-control-C6jlGK6q.js";import{n as O,t as k}from"./ds-pin-toggle-BRgk4Zfk.js";import{t as A}from"./ds-tag-CQYrPA9d.js";import{t as j}from"./ds-tag-B5Vxsbuj.js";import{t as M}from"./ds-modal-v0v0_G4b.js";import{t as N}from"./ds-modal-HMu5mZQS.js";import{t as P}from"./ds-vertical-tabs-BFjOSZha.js";import{t as F}from"./ds-vertical-tabs-DI1l4S3t.js";var I,L,R;function z(){return(z=t((()=>{I=n(),L=(0,I.createContext)(null),R=()=>{let e=(0,I.useContext)(L);if(!e)throw Error(`DsFiltersBar compound components must be used within DsFiltersBar.Root`);return e}})))()}var B;function V(){return(V=t((()=>{z(),B=()=>(R(),null),B.displayName=`DsFiltersBar.ClearAll`})))()}var H,U,W;function G(){return(G=t((()=>{z(),H=()=>(R(),null),H.displayName=`DsFiltersBar.Pinned`,U=()=>(R(),null),U.displayName=`DsFiltersBar.PinnedGroup`,W=()=>(R(),null),W.displayName=`DsFiltersBar.PinnedToggle`})))()}var ee,te;function ne(){return(ne=t((()=>{z(),ee=()=>(R(),null),ee.displayName=`DsFiltersBar.SavedFilters`,te=()=>(R(),null),te.displayName=`DsFiltersBar.SaveFilter`})))()}var re,ie,ae,oe,se;function K(){return(K=t((()=>{re=`_root_1rsvl_1`,ie=`_toolbar_1rsvl_9`,ae=`_conditions_1rsvl_17`,oe=`_search_1rsvl_25`,se={root:re,toolbar:ie,conditions:ae,search:oe}})))()}var ce,le,ue,de,fe;function q(){return(q=t((()=>{ce=[`=`,`!=`,`>`,`>=`,`<`,`<=`,`IN`,`NOT IN`,`~`,`!~`],le=[`=`,`!=`,`IN`,`NOT IN`],ue=[`filters`,`builder`,`advanced`],de=Object.freeze({label:`Filters`,expand:`Show filters`,collapse:`Hide filters`}),Object.freeze({resultCount:e=>`${String(e)} results`,activeSavedFilter:`Filter`,emptyLabel:`View`,emptyValue:`All`}),fe=Object.freeze({label:`Search`,placeholder:`Type ‘/’ to search`,clear:`Clear search`}),Object.freeze({label:`Filter view`,views:Object.freeze({filters:`Filters`,builder:`Query builder`,advanced:`Advanced query`}),lockedView:`Clear the advanced query to switch views`}),Object.freeze({label:`Clear all`}),Object.freeze({label:`Pinned`})})))()}var pe,me,he,ge,_e,ve,ye,be,xe,Se,Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe;function Ie(){return(Ie=t((()=>{q(),pe=2,me=16,he=Object.freeze([`filters`,`builder`]),ge=Object.freeze([]),_e=e=>e?.trim()?e:null,ve=e=>e===null?ge:he,ye=()=>{let e=crypto.getRandomValues(new Uint32Array(pe));return`condition-${Array.from(e,e=>e.toString(me)).join(``)}`},be=e=>{let t=e.trim();return t?{kind:`search`,id:ye(),text:t}:null},xe=(e,t)=>[...e,t],Se=(e,t)=>e.map(e=>e.id===t.id?t:e),Ce=(e,t)=>e.filter(e=>e.id!==t),we=` – `,Te=(e,t)=>e.find(e=>e.value===t)?.label??t,Ee=e=>typeof e==`object`&&`from`in e,De=(e,t)=>{if(Ee(e))return[e.from??``,e.to??``].map(String).join(we).trim();if(typeof e==`object`){let n=t?.type===`enum`?t.options:[];return e.map(e=>Te(n,e)).join(`, `)}return typeof e==`string`&&t?.type===`date`?Te(t.presets??[],e):String(e)},Oe=(e,t)=>{if(e.kind===`search`)return{fieldPath:[],value:e.text};let n=t.find(t=>t.id===e.field),r=n?.type===`compound`?n.subfields.find(t=>t.id===e.subfield):void 0,i=n?.type===`compound`?r:n,a=i?.operators.find(t=>t.value===e.operator),o=[n?.label??e.field];return e.subfield&&o.push(r?.label??e.subfield),{fieldPath:o,operator:a?.label??e.operator,operatorSymbol:a?.symbol??a?.label??e.operator,value:De(e.value,i)}},ke=e=>e.filter(e=>e.type===`enum`&&e.options.length>0),Ae=Object.freeze([]),je=e=>le.includes(e),Me=(e,t)=>e.kind===`field`&&e.field===t&&!e.subfield&&je(e.operator)&&Array.isArray(e.value),Ne=(e,t,n)=>ke(e).flatMap(e=>{let r=t.find(t=>Me(t,e.id)),i=n.filter(t=>t.field===e.id).map(e=>e.value);return!r&&!i.length?[]:[{field:e.id,operator:r?.operator??e.operators[0]?.value??`=`,selected:r?.value??Ae,pinned:i}]}),Pe=(e,t)=>({kind:`field`,id:t,field:e.field,operator:e.operator,value:e.selected}),Fe=(e,t,n,r)=>{let i=ke(e),a=i.flatMap(e=>r.find(t=>t.field===e.id)??[]),o=new Map(a.filter(e=>e.selected.length).map(e=>[e.field,e])),s=new Set,c=t.flatMap(e=>{let t=i.find(t=>Me(e,t.id));if(!t)return[e];let n=o.get(t.id);return!n||s.has(t.id)?[]:(s.add(t.id),[Pe(n,e.id)])}),l=[...o.values()].filter(e=>!s.has(e.field)).map(e=>Pe(e,ye())),u=new Map(a.map(e=>[e.field,e.pinned])),d=e=>i.some(t=>t.id===e),f=n.filter(e=>!d(e.field)||!!u.get(e.field)?.includes(e.value)),p=a.flatMap(e=>e.pinned.filter(t=>!f.some(n=>n.field===e.field&&n.value===t)).map(t=>({field:e.field,value:t})));return{conditions:[...c,...l],pins:[...f,...p]}}})))()}var Le,Re;function ze(){return(ze=t((()=>{Le=i(),S(),Re=(e,t,n)=>{let r=(0,Le.c)(7),[i,a]=x(e,t,n),o;r[0]!==t||r[1]!==a||r[2]!==e?(o=n=>{a(n),e===void 0&&t?.(n)},r[0]=t,r[1]=a,r[2]=e,r[3]=o):o=r[3];let s=o,c;return r[4]!==i||r[5]!==s?(c=[i,s],r[4]=i,r[5]=s,r[6]=c):c=r[6],c}})))()}var Be,Ve,He,Ue,We,Ge,Ke,qe;function Je(){return(Je=t((()=>{Be=i(),Ve=e(a(),1),He=n(),f(),h(),D(),s(),z(),K(),q(),Ie(),ze(),Ue=r(),We=`/`,Ge=`input, textarea, select, [contenteditable]:not([contenteditable="false"])`,Ke=e=>!(e instanceof Element&&(e.closest(Ge)||e.closest(`[role="dialog"]`))),qe=e=>{let t=(0,Be.c)(44),{value:n,defaultValue:r,disabled:i,locale:a,ref:s,className:c,style:l,onValueChange:u}=e,f=r===void 0?``:r,p=i!==void 0&&i,{conditions:m,query:h,addCondition:_,registerSearch:v}=R(),y;t[0]===a?y=t[1]:(y={...fe,...a},t[0]=a,t[1]=y);let b=y,[x,S]=Re(n,u,f),C=(0,He.useRef)(null),w=p||h!==null,T;t[2]===S?T=t[3]:(T=e=>{S(e),C.current?.focus()},t[2]=S,t[3]=T);let D=T,O=(0,He.useRef)(D),k;t[4]===D?k=t[5]:(k=()=>{O.current=D},t[4]=D,t[5]=k),(0,He.useLayoutEffect)(k);let A,j;t[6]===v?(A=t[7],j=t[8]):(A=()=>(v({edit:e=>O.current(e)}),()=>v(null)),j=[v],t[6]=v,t[7]=A,t[8]=j),(0,He.useEffect)(A,j);let M,N;t[9]===w?(M=t[10],N=t[11]):(M=()=>{if(w)return;let e=e=>{e.key!==We||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey||!Ke(e.target)||(e.preventDefault(),C.current?.focus())};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},N=[w],t[9]=w,t[10]=M,t[11]=N),(0,He.useEffect)(M,N);let P;t[12]!==_||t[13]!==m||t[14]!==S||t[15]!==x?(P=e=>{if(e.key!==`Enter`||e.nativeEvent.isComposing)return;let t=be(x);t&&(m.some(e=>e.kind===`search`&&e.text===t.text)||_(t),S(``))},t[12]=_,t[13]=m,t[14]=S,t[15]=x,t[16]=P):P=t[16];let F=P,I;t[17]===S?I=t[18]:(I=()=>{S(``),C.current?.focus()},t[17]=S,t[18]=I);let L=I,z=b.label,B;t[19]===c?B=t[20]:(B=(0,Ve.default)(se.search,c),t[19]=c,t[20]=B);let V;t[21]===s?V=t[22]:(V=d(C,s),t[21]=s,t[22]=V);let H;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(H=(0,Ue.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0}),t[23]=H):H=t[23];let U;t[24]!==w||t[25]!==L||t[26]!==b.clear||t[27]!==x?(U=x&&!w?(0,Ue.jsx)(g,{variant:`tertiary`,color:`default`,size:`tiny`,icon:`close`,"aria-label":b.clear,onClick:L}):void 0,t[24]=w,t[25]=L,t[26]=b.clear,t[27]=x,t[28]=U):U=t[28];let W;t[29]===U?W=t[30]:(W={startAdornment:H,endAdornment:U},t[29]=U,t[30]=W);let G;t[31]!==w||t[32]!==F||t[33]!==b.placeholder||t[34]!==S||t[35]!==V||t[36]!==W||t[37]!==x?(G=(0,Ue.jsx)(E.TextInput,{ref:V,size:`small`,value:x,placeholder:b.placeholder,disabled:w,slots:W,onValueChange:S,onKeyDown:F}),t[31]=w,t[32]=F,t[33]=b.placeholder,t[34]=S,t[35]=V,t[36]=W,t[37]=x,t[38]=G):G=t[38];let ee;return t[39]!==b.label||t[40]!==l||t[41]!==B||t[42]!==G?(ee=(0,Ue.jsx)(E,{label:z,hideLabel:!0,className:B,style:l,children:G}),t[39]=b.label,t[40]=l,t[41]=B,t[42]=G,t[43]=ee):ee=t[43],ee},qe.displayName=`DsFiltersBar.Search`})))()}var Ye;function Xe(){return(Xe=t((()=>{z(),Ye=()=>(R(),null),Ye.displayName=`DsFiltersBar.Summary`})))()}var Ze,Qe,$e,et;function tt(){return(tt=t((()=>{Ze=i(),Qe=e(a(),1),z(),K(),$e=r(),et=e=>{let t=(0,Ze.c)(7),{className:n,style:r,children:i}=e,{expanded:a,toolbarId:o}=R();if(!a)return null;let s;t[0]===n?s=t[1]:(s=(0,Qe.default)(se.toolbar,n),t[0]=n,t[1]=s);let c;return t[2]!==i||t[3]!==r||t[4]!==s||t[5]!==o?(c=(0,$e.jsx)(`div`,{id:o,className:s,style:r,children:i}),t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=c):c=t[6],c},et.displayName=`DsFiltersBar.Toolbar`})))()}var nt;function rt(){return(rt=t((()=>{z(),nt=e=>{let{value:t,children:n}=e,{view:r}=R();return r===t?n:null},nt.displayName=`DsFiltersBar.View`})))()}var it;function at(){return(at=t((()=>{z(),it=()=>(R(),null),it.displayName=`DsFiltersBar.ViewSwitch`})))()}var ot;function st(){return(st=t((()=>{z(),ot=()=>(R(),null),ot.displayName=`DsFiltersBar.Builder`})))()}function ct(){return(ct=t((()=>{st()})))()}var lt;function ut(){return(ut=t((()=>{lt=Object.freeze({title:`Filters`,save:`Save filters`,close:`Close`,operator:`Operator`,operatorOption:(e,t)=>`${e} ${t.symbol??t.value} (${t.label})`,search:e=>`Search ${e}`,searchPlaceholder:e=>`Search ${e}`,selectedCount:e=>`${String(e)} selected`,pinned:`Pinned`})})))()}var dt,ft,pt,mt,ht,gt,_t,vt,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,J;function kt(){return(kt=t((()=>{dt=`_dialog_1s2lk_5`,ft=`_header_1s2lk_9`,pt=`_footer_1s2lk_10`,mt=`_body_1s2lk_13`,ht=`_tabs_1s2lk_20`,gt=`_tabList_1s2lk_26`,_t=`_tab_1s2lk_20`,vt=`_tabLabel_1s2lk_52`,yt=`_counter_1s2lk_60`,bt=`_counterDot_1s2lk_68`,xt=`_tabPin_1s2lk_75`,St=`_panel_1s2lk_81`,Ct=`_panelHeader_1s2lk_88`,wt=`_control_1s2lk_97`,Tt=`_options_1s2lk_101`,Et=`_option_1s2lk_101`,Dt=`_optionPin_1s2lk_115`,Ot=`_visuallyHidden_1s2lk_123`,J={dialog:dt,header:ft,footer:pt,body:mt,tabs:ht,tabList:gt,tab:_t,tabLabel:vt,counter:yt,counterDot:bt,tabPin:xt,panel:St,panelHeader:Ct,control:wt,options:Tt,option:Et,optionPin:Dt,visuallyHidden:Ot}})))()}var At,jt,Mt,Y,Nt,Pt,Ft,It,Lt,Rt;function zt(){return(zt=t((()=>{At=i(),jt=n(),Mt=e(a(),1),h(),l(),s(),N(),k(),C(),b(),m(),F(),ut(),kt(),Y=r(),Nt=(e,t)=>e.find(e=>e.field===t.id)??{field:t.id,operator:t.operators[0]?.value??`=`,selected:[],pinned:[]},Pt=(e,t)=>e.some(e=>e.field===t.field)?e.map(e=>e.field===t.field?t:e):[...e,t],Ft=(e,t,n)=>n?e.includes(t)?e:[...e,t]:e.filter(e=>e!==t),It=e=>{let t=(0,At.c)(12),{field:n,entry:r,locale:i}=e,a=r.selected.length,s=r.pinned.length>0,c;t[0]===n.label?c=t[1]:(c=(0,Y.jsx)(p,{variant:`body-sm-reg`,className:J.tabLabel,children:n.label}),t[0]=n.label,t[1]=c);let l;t[2]!==a||t[3]!==i?(l=a>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(`span`,{className:J.counter,"aria-hidden":!0,children:[(0,Y.jsx)(`span`,{className:J.counterDot}),(0,Y.jsx)(p,{variant:`body-xs-semi-bold`,children:a})]}),(0,Y.jsx)(`span`,{className:J.visuallyHidden,children:i.selectedCount(a)})]}),t[2]=a,t[3]=i,t[4]=l):l=t[4];let u;t[5]!==s||t[6]!==i?(u=s&&(0,Y.jsx)(`span`,{className:J.tabPin,role:`img`,"aria-label":i.pinned,children:(0,Y.jsx)(o,{icon:`keep`,size:`tiny`,filled:!0,"aria-hidden":!0})}),t[5]=s,t[6]=i,t[7]=u):u=t[7];let d;return t[8]!==c||t[9]!==l||t[10]!==u?(d=(0,Y.jsxs)(Y.Fragment,{children:[c,l,u]}),t[8]=c,t[9]=l,t[10]=u,t[11]=d):d=t[11],d},Lt=e=>{let t=(0,At.c)(65),{field:n,entry:r,search:i,locale:a,onSearchChange:s,onEntryChange:l}=e,d=(0,jt.useId)(),f=(0,jt.useId)(),p,m,h,g,_;if(t[0]!==r||t[1]!==n.label||t[2]!==n.operators||t[3]!==n.options||t[4]!==a||t[5]!==l||t[6]!==s||t[7]!==d||t[8]!==i||t[9]!==f){let e=i.trim().toLowerCase(),v=n.options.filter(t=>t.label.toLowerCase().includes(e)),b;if(t[15]!==n.label||t[16]!==n.operators||t[17]!==a){let e;t[19]!==n.label||t[20]!==a?(e=e=>({value:e.value,label:a.operatorOption(n.label,e)}),t[19]=n.label,t[20]=a,t[21]=e):e=t[21],b=n.operators.map(e),t[15]=n.label,t[16]=n.operators,t[17]=a,t[18]=b}else b=t[18];let x=b,S;t[22]!==r||t[23]!==n.operators||t[24]!==l?(S=e=>{let t=n.operators.find(t=>t.value===e)?.value;t&&t!==r.operator&&l({...r,operator:t})},t[22]=r,t[23]=n.operators,t[24]=l,t[25]=S):S=t[25];let C=S,w;t[26]!==a.operator||t[27]!==d?(w=(0,Y.jsx)(`label`,{htmlFor:d,className:J.visuallyHidden,children:a.operator}),t[26]=a.operator,t[27]=d,t[28]=w):w=t[28];let T;t[29]!==r.operator||t[30]!==C||t[31]!==d||t[32]!==x?(T=(0,Y.jsx)(u,{id:d,className:J.control,options:x,value:r.operator,onValueChange:C}),t[29]=r.operator,t[30]=C,t[31]=d,t[32]=x,t[33]=T):T=t[33];let E;t[34]!==n.label||t[35]!==a?(E=a.search(n.label),t[34]=n.label,t[35]=a,t[36]=E):E=t[36];let D;t[37]!==f||t[38]!==E?(D=(0,Y.jsx)(`label`,{htmlFor:f,className:J.visuallyHidden,children:E}),t[37]=f,t[38]=E,t[39]=D):D=t[39];let k;t[40]!==n.label||t[41]!==a?(k=a.searchPlaceholder(n.label),t[40]=n.label,t[41]=a,t[42]=k):k=t[42];let A;t[43]===Symbol.for(`react.memo_cache_sentinel`)?(A={startAdornment:(0,Y.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0})},t[43]=A):A=t[43];let j;t[44]!==s||t[45]!==i||t[46]!==f||t[47]!==k?(j=(0,Y.jsx)(y,{id:f,className:J.control,value:i,placeholder:k,slots:A,onValueChange:s}),t[44]=s,t[45]=i,t[46]=f,t[47]=k,t[48]=j):j=t[48],t[49]!==D||t[50]!==j||t[51]!==w||t[52]!==T?(_=(0,Y.jsxs)(`div`,{className:J.panelHeader,children:[w,T,D,j]}),t[49]=D,t[50]=j,t[51]=w,t[52]=T,t[53]=_):_=t[53],p=J.options,m=`group`,h=n.label;let M;t[54]!==r||t[55]!==l?(M=e=>{let t=r.pinned.includes(e.value);return(0,Y.jsx)(c,{size:`large`,className:J.option,label:e.label,checked:r.selected.includes(e.value),actions:(0,Y.jsx)(O,{className:J.optionPin,itemLabel:e.label,pinned:t,onPinnedChange:t=>l({...r,pinned:Ft(r.pinned,e.value,t)})}),onCheckedChange:t=>l({...r,selected:Ft(r.selected,e.value,t===!0)})},e.value)},t[54]=r,t[55]=l,t[56]=M):M=t[56],g=v.map(M),t[0]=r,t[1]=n.label,t[2]=n.operators,t[3]=n.options,t[4]=a,t[5]=l,t[6]=s,t[7]=d,t[8]=i,t[9]=f,t[10]=p,t[11]=m,t[12]=h,t[13]=g,t[14]=_}else p=t[10],m=t[11],h=t[12],g=t[13],_=t[14];let v;t[57]!==p||t[58]!==m||t[59]!==h||t[60]!==g?(v=(0,Y.jsx)(`div`,{className:p,role:m,"aria-label":h,children:g}),t[57]=p,t[58]=m,t[59]=h,t[60]=g,t[61]=v):v=t[61];let b;return t[62]!==_||t[63]!==v?(b=(0,Y.jsxs)(Y.Fragment,{children:[_,v]}),t[62]=_,t[63]=v,t[64]=b):b=t[64],b},Rt=e=>{let t=(0,At.c)(57),{open:n,fields:r,value:i,locale:a,className:o,style:s,onOpenChange:c,onChange:l,onSave:u}=e,d;t[0]===a?d=t[1]:(d={...lt,...a},t[0]=a,t[1]=d);let f=d,[p,m]=(0,jt.useState)(r[0]?.id??``),[h,_]=(0,jt.useState)(``),[v,y]=(0,jt.useState)(n);n!==v&&(y(n),n&&(m(r[0]?.id??``),_(``)));let b;t[2]!==r||t[3]!==p?(b=r.find(e=>e.id===p)??r[0],t[2]=r,t[3]=p,t[4]=b):b=t[4];let x=b,S;t[5]===x?.id?S=t[6]:(S=e=>{e&&e!==x?.id&&(m(e),_(``))},t[5]=x?.id,t[6]=S);let C=S,w;t[7]!==l||t[8]!==i?(w=e=>{l(e,Pt(i,e))},t[7]=l,t[8]=i,t[9]=w):w=t[9];let T=w,E;t[10]!==c||t[11]!==u||t[12]!==i?(E=()=>{u(i),c(!1)},t[10]=c,t[11]=u,t[12]=i,t[13]=E):E=t[13];let D=E,O;t[14]===o?O=t[15]:(O=(0,Mt.default)(J.dialog,o),t[14]=o,t[15]=O);let k;t[16]===f.title?k=t[17]:(k=(0,Y.jsx)(M.Title,{children:f.title}),t[16]=f.title,t[17]=k);let A;t[18]===c?A=t[19]:(A=()=>c(!1),t[18]=c,t[19]=A);let j;t[20]!==f.close||t[21]!==A?(j=(0,Y.jsx)(g,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":f.close,onClick:A}),t[20]=f.close,t[21]=A,t[22]=j):j=t[22];let N;t[23]!==k||t[24]!==j?(N=(0,Y.jsxs)(M.Header,{className:J.header,children:[k,j]}),t[23]=k,t[24]=j,t[25]=N):N=t[25];let F=x?.id,I;if(t[26]!==r||t[27]!==f||t[28]!==i){let e;t[30]!==f||t[31]!==i?(e=e=>(0,Y.jsx)(P.Tab,{value:e.id,className:J.tab,children:(0,Y.jsx)(It,{field:e,entry:Nt(i,e),locale:f})},e.id),t[30]=f,t[31]=i,t[32]=e):e=t[32],I=r.map(e),t[26]=r,t[27]=f,t[28]=i,t[29]=I}else I=t[29];let L;t[33]===I?L=t[34]:(L=(0,Y.jsx)(P.List,{className:J.tabList,children:I}),t[33]=I,t[34]=L);let R;t[35]!==x||t[36]!==T||t[37]!==f||t[38]!==h||t[39]!==i?(R=x&&(0,Y.jsx)(P.Content,{value:x.id,className:J.panel,children:(0,Y.jsx)(Lt,{field:x,entry:Nt(i,x),search:h,locale:f,onSearchChange:_,onEntryChange:T})}),t[35]=x,t[36]=T,t[37]=f,t[38]=h,t[39]=i,t[40]=R):R=t[40];let z;t[41]!==C||t[42]!==F||t[43]!==L||t[44]!==R?(z=(0,Y.jsx)(M.Body,{className:J.body,children:(0,Y.jsxs)(P,{className:J.tabs,value:F,onValueChange:C,children:[L,R]})}),t[41]=C,t[42]=F,t[43]=L,t[44]=R,t[45]=z):z=t[45];let B;t[46]!==D||t[47]!==f.save?(B=(0,Y.jsx)(M.Footer,{className:J.footer,children:(0,Y.jsx)(M.Actions,{children:(0,Y.jsx)(g,{variant:`primary`,size:`medium`,onClick:D,children:f.save})})}),t[46]=D,t[47]=f.save,t[48]=B):B=t[48];let V;return t[49]!==c||t[50]!==n||t[51]!==s||t[52]!==N||t[53]!==z||t[54]!==B||t[55]!==O?(V=(0,Y.jsxs)(M,{open:n,dividers:!0,closeOnInteractOutside:!0,className:O,style:s,onOpenChange:c,children:[N,z,B]}),t[49]=c,t[50]=n,t[51]=s,t[52]=N,t[53]=z,t[54]=B,t[55]=O,t[56]=V):V=t[56],V},Rt.displayName=`DsFiltersBar.FiltersDialog`})))()}function Bt(){return(Bt=t((()=>{zt()})))()}var Vt;function Ht(){return(Ht=t((()=>{Vt=Object.freeze({addFilter:`Add filter`,removeCondition:e=>`Remove filter: ${e}`,filtersDialogTitle:`Filters`,saveFilters:`Save filters`,filtersDialog:Object.freeze({})})})))()}var Ut,Wt,Gt,Kt,qt,Jt,Yt;function Xt(){return(Xt=t((()=>{Ut=i(),Wt=e(a(),1),Gt=n(),h(),s(),j(),z(),K(),Ie(),Bt(),Ht(),Kt=r(),qt=Object.freeze([]),Jt=e=>{let t=(0,Ut.c)(28),{condition:n,locale:r}=e,{fields:i,search:a,removeCondition:s}=R();if(n.kind!==`search`)return null;let c,l,u,d,f;if(t[0]!==n||t[1]!==i||t[2]!==r||t[3]!==s||t[4]!==a){let{value:e}=Oe(n,i),o;t[10]!==n.id||t[11]!==n.text||t[12]!==s||t[13]!==a?(o=a?()=>{a.edit(n.text),s(n.id)}:void 0,t[10]=n.id,t[11]=n.text,t[12]=s,t[13]=a,t[14]=o):o=t[14],l=o,c=A,d=!0,f=e,u=r.removeCondition(e),t[0]=n,t[1]=i,t[2]=r,t[3]=s,t[4]=a,t[5]=c,t[6]=l,t[7]=u,t[8]=d,t[9]=f}else c=t[5],l=t[6],u=t[7],d=t[8],f=t[9];let p;t[15]===u?p=t[16]:(p={deleteAriaLabel:u},t[15]=u,t[16]=p);let m;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(m={icon:(0,Kt.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0})},t[17]=m):m=t[17];let h;t[18]!==n.id||t[19]!==s?(h=()=>s(n.id),t[18]=n.id,t[19]=s,t[20]=h):h=t[20];let g;return t[21]!==c||t[22]!==l||t[23]!==d||t[24]!==f||t[25]!==p||t[26]!==h?(g=(0,Kt.jsx)(c,{selected:d,label:f,locale:p,slots:m,onClick:l,onDelete:h}),t[21]=c,t[22]=l,t[23]=d,t[24]=f,t[25]=p,t[26]=h,t[27]=g):g=t[27],g},Yt=e=>{let t=(0,Ut.c)(41),{locale:n,className:r,style:i}=e,{fields:a,conditions:o,pins:s,setConditions:c,setPins:l}=R(),u;t[0]===n?u=t[1]:(u={...Vt,...n},t[0]=n,t[1]=u);let d=u,[f,p]=(0,Gt.useState)(!1),[m,h]=(0,Gt.useState)(qt),_;t[2]!==o||t[3]!==a||t[4]!==s?(_=()=>{h(Ne(a,o,s)),p(!0)},t[2]=o,t[3]=a,t[4]=s,t[5]=_):_=t[5];let v=_,y;t[6]!==o||t[7]!==a||t[8]!==s||t[9]!==c||t[10]!==l?(y=e=>{let t=Fe(a,o,s,e);c(t.conditions),l(t.pins)},t[6]=o,t[7]=a,t[8]=s,t[9]=c,t[10]=l,t[11]=y):y=t[11];let b=y,x;t[12]===r?x=t[13]:(x=(0,Wt.default)(se.conditions,r),t[12]=r,t[13]=x);let S;t[14]!==v||t[15]!==d.addFilter?(S=(0,Kt.jsx)(g,{variant:`secondary`,color:`default`,size:`small`,icon:`add`,"aria-label":d.addFilter,onClick:v}),t[14]=v,t[15]=d.addFilter,t[16]=S):S=t[16];let C;t[17]===a?C=t[18]:(C=ke(a),t[17]=a,t[18]=C);let w;t[19]!==d.filtersDialog||t[20]!==d.filtersDialogTitle||t[21]!==d.saveFilters?(w={...d.filtersDialog,title:d.filtersDialogTitle,save:d.saveFilters},t[19]=d.filtersDialog,t[20]=d.filtersDialogTitle,t[21]=d.saveFilters,t[22]=w):w=t[22];let T;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(T=(e,t)=>h(t),t[23]=T):T=t[23];let E;t[24]!==m||t[25]!==b||t[26]!==f||t[27]!==C||t[28]!==w?(E=(0,Kt.jsx)(Rt,{open:f,fields:C,value:m,locale:w,onOpenChange:p,onChange:T,onSave:b}),t[24]=m,t[25]=b,t[26]=f,t[27]=C,t[28]=w,t[29]=E):E=t[29];let D;if(t[30]!==o||t[31]!==d){let e;t[33]===d?e=t[34]:(e=e=>(0,Kt.jsx)(Jt,{condition:e,locale:d},e.id),t[33]=d,t[34]=e),D=o.map(e),t[30]=o,t[31]=d,t[32]=D}else D=t[32];let O;return t[35]!==i||t[36]!==D||t[37]!==x||t[38]!==S||t[39]!==E?(O=(0,Kt.jsxs)(`div`,{className:x,style:i,children:[S,E,D]}),t[35]=i,t[36]=D,t[37]=x,t[38]=S,t[39]=E,t[40]=O):O=t[40],O},Yt.displayName=`DsFiltersBar.Conditions`})))()}function Zt(){return(Zt=t((()=>{Xt()})))()}var Qt;function $t(){return($t=t((()=>{Qt=class extends Error{error;constructor(e,t,n,r,i){super(t),this.error={code:t,from:n,to:r,text:i??e.slice(n,r)}}}})))()}var en,tn,nn,rn,an,on;function sn(){return(sn=t((()=>{Ie(),en=e=>e.kind===`clause`||e.kind===`search`,tn=e=>en(e)?[e]:e.kind===`and`&&e.children.every(en)?e.children.filter(en):null,nn=e=>typeof e==`object`&&`from`in e?[e.from,e.to]:e,rn=e=>JSON.stringify(e.kind===`search`?[e.kind,e.text]:[e.kind,e.field,e.subfield??null,e.operator,nn(e.value)]),an=(e,t)=>e.kind===`search`?{kind:`search`,id:t,text:e.text}:{kind:`field`,id:t,field:e.field,...e.subfield&&{subfield:e.subfield},operator:e.operator,value:e.value},on=(e,t)=>{let n=tn(e);if(!n)return null;let r=new Map;for(let e of t){let t=rn(e);r.set(t,[...r.get(t)??[],e.id])}return n.map(e=>{let t=an(e,``),n=r.get(rn(t))?.shift();return{...t,id:n??ye()}})}})))()}var cn,ln,un,dn,fn,pn,mn,hn,gn,_n,vn;function yn(){return(yn=t((()=>{cn=`"`,ln=`\\`,un=/\s/,dn=/[\s()",=!<>~]/,fn=Object.freeze({"(":`openParen`,")":`closeParen`,",":`comma`}),pn=Object.freeze([`!=`,`!~`,`>=`,`<=`,`=`,`>`,`<`,`~`]),mn=(e,t)=>{let n=``,r=t+1;for(;r<e.length;){let i=e.charAt(r);if(i===ln&&r+1<e.length){n+=e.charAt(r+1),r+=2;continue}if(i===cn)return{kind:`string`,value:n,from:t,to:r+1};n+=i,r+=1}return{kind:`unterminated`,value:n,from:t,to:e.length}},hn=(e,t)=>{let n=t;for(;n<e.length&&!dn.test(e.charAt(n));)n+=1;return{kind:`word`,value:e.slice(t,n),from:t,to:n}},gn=(e,t)=>{let n=t;for(;n<e.length&&un.test(e.charAt(n));)n+=1;return n},_n=(e,t)=>{let n=t.value.toUpperCase();if(n===`AND`||n===`OR`)return{...t,kind:n===`AND`?`and`:`or`,value:n};if(n===`IN`)return{...t,kind:`operator`,value:`IN`};if(n!==`NOT`)return t;let r=hn(e,gn(e,t.to));return r.value.toUpperCase()===`IN`?{kind:`operator`,value:`NOT IN`,from:t.from,to:r.to}:{...t,kind:`not`,value:n}},vn=e=>{let t=[],n=gn(e,0);for(;n<e.length;){let r=e.charAt(n),i=fn[r],a=pn.find(t=>e.startsWith(t,n)),o;o=i?{kind:i,value:r,from:n,to:n+1}:r===cn?mn(e,n):a?{kind:`operator`,value:a,from:n,to:n+a.length}:dn.test(r)?{kind:`unknown`,value:r,from:n,to:n+1}:_n(e,hn(e,n)),t.push(o),n=gn(e,o.to)}return t}})))()}var bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An;function jn(){return(jn=t((()=>{$t(),bn=`.`,xn=/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/,Sn=/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/,Cn=(e,t)=>e.toLowerCase()===t.toLowerCase(),wn=(e,t)=>e.find(e=>Cn(e.value,t))??e.find(e=>Cn(e.label,t)),Tn=10,En=e=>{if(!Sn.test(e)||Number.isNaN(Date.parse(e)))return!1;let t=e.slice(0,Tn);return new Date(`${t}T00:00:00Z`).toISOString().startsWith(t)},Dn=Object.freeze({IN:`=`,"NOT IN":`!=`,">=":`=`,"<=":`=`}),On=(e,t)=>{let n=Dn[t],r=t===`IN`||t===`NOT IN`?e.type===`enum`:e.type===`number`||e.type===`date`;return n&&r&&e.operators.some(e=>e.value===n)?n:null},kn=(e,t)=>e!==`>=`&&e!==`<=`?t:typeof t==`number`||typeof t==`string`?(e===`>=`?`from`:`to`)==`from`?{from:t,to:null}:{from:null,to:t}:t,An=(e,t,n)=>{let r=(t,n)=>{throw new Qt(e,t,n.from,n.to,n.text)},i=e=>{let t=n.find(t=>Cn(t.id,e.text));if(t?.type===`compound`)return r(`subfieldRequired`,e);if(t)return{field:t.id,scalar:t};let i=e.text.indexOf(bn),a=i===-1?void 0:n.find(t=>Cn(t.id,e.text.slice(0,i)));if(!a)return r(`unknownField`,e);let o={text:e.text.slice(i+1),from:e.from+i+1,to:e.to},s=a.type===`compound`?a.subfields.find(e=>Cn(e.id,o.text)):void 0;return s?{field:a.id,subfield:s.id,scalar:s}:r(`unknownSubfield`,o)},a=(e,t)=>{let[n]=t.values;switch(e.type){case`enum`:return t.values.map(t=>wn(e.options,t.text)?.value??r(`unknownOption`,t));case`number`:{let e=Number(n.text);return xn.test(n.text)&&Number.isFinite(e)?e:r(`notANumber`,n)}case`date`:{let t=wn(e.presets??[],n.text);return t?t.value:En(n.text)?n.text:r(`invalidDate`,n)}default:return n.text}},o=e=>{let{field:t,subfield:n,scalar:o}=i(e.field),s=e.operator.text;e.list&&o.type!==`enum`&&r(`operatorNotAllowed`,e.operator);let c=o.operators.some(e=>e.value===s),l=c?s:On(o,s)??r(`operatorNotAllowed`,e.operator),u=a(o,e);return!c&&(s===`>=`||s===`<=`)&&typeof u==`string`&&!En(u)&&r(`operatorNotAllowed`,e.operator),{kind:`clause`,field:t,...n&&{subfield:n},operator:l,value:c?u:kn(s,u),from:e.from,to:e.to}},s=e=>{switch(e.kind){case`clause`:return o(e);case`search`:return e;case`group`:return{kind:`group`,child:s(e.child)};default:return{kind:e.kind,children:e.children.map(s)}}};return s(t)}})))()}var Mn,Nn,Pn,Fn,In;function Ln(){return(Ln=t((()=>{q(),$t(),sn(),yn(),jn(),Mn=Object.freeze([`IN`,`NOT IN`]),Nn=e=>ce.some(t=>t===e),Pn=e=>({text:e.value,from:e.from,to:e.to}),Fn=(e,t)=>{let n=0,r=(t,n)=>{throw new Qt(e,t,n.from,n.to)},i=()=>t[n],a=e=>r(e.kind===`unterminated`?`unterminatedString`:`unexpectedToken`,e),o=()=>i()??r(`unexpectedEnd`,{from:e.length,to:e.length}),s=e=>{let t=o();return t.kind!==e&&a(t),n+=1,t},c=()=>{let e=o();return e.kind!==`string`&&e.kind!==`word`?a(e):(n+=1,Pn(e))},l=()=>{let e=o();e.kind!==`openParen`&&r(`listExpected`,e),n+=1;let t=i();t?.kind===`closeParen`&&r(`emptyList`,{from:e.from,to:t.to});let a=c(),l=[];for(;i()?.kind===`comma`;)n+=1,l.push(c());return{values:[a,...l],to:s(`closeParen`).to}},u=()=>{let e=c();return{values:[e],to:e.to}},d=()=>{let e=s(`word`),t=s(`operator`),n=t.value;if(!Nn(n))return a(t);let r=Mn.includes(n),{values:i,to:o}=r?l():u();return{kind:`clause`,field:Pn(e),operator:{...Pn(t),text:n},values:i,list:r,from:e.from,to:o}},f=()=>{let e=o();if(e.kind===`openParen`){n+=1;let e=h();return s(`closeParen`),{kind:`group`,child:e}}return e.kind===`string`?(n+=1,{kind:`search`,text:e.value,from:e.from,to:e.to}):e.kind===`word`?d():a(e)},p=(e,t)=>{let r=t(),a=[];for(;i()?.kind===e;)n+=1,a.push(t());return a.length?{kind:e,children:[r,...a]}:r},m=()=>p(`and`,f);function h(){return p(`or`,m)}if(!t.length)return{kind:`and`,children:[]};let g=h(),_=i();return _&&a(_),g},In=(e,t,n=[])=>{try{let r=An(e,Fn(e,vn(e)),t);return{ok:!0,node:r,conditions:on(r,n)}}catch(e){if(e instanceof Qt)return{ok:!1,error:e.error};throw e}}})))()}var Rn,zn,Bn,Vn,Hn,Un;function Wn(){return(Wn=t((()=>{Rn=` AND `,zn=e=>`"${e.replace(/[\\"]/g,e=>`\\${e}`)}"`,Bn=e=>typeof e==`number`?String(e):zn(e),Vn=e=>typeof e==`object`&&`from`in e,Hn=e=>{let{value:t,operator:n}=e,r=e.subfield?`${e.field}.${e.subfield}`:e.field;if(Vn(t))return t.from===null&&t.to===null?`${r} = ()`:[t.from===null?``:`${r} >= ${Bn(t.from)}`,t.to===null?``:`${r} <= ${Bn(t.to)}`].filter(Boolean).join(Rn);if(typeof t!=`object`)return`${r} ${n} ${Bn(t)}`;let[i,...a]=t,o=n===`!=`||n===`NOT IN`;return t.length?i!==void 0&&!a.length&&(n===`=`||n===`!=`)?`${r} ${n} ${Bn(i)}`:`${r} ${o?`NOT IN`:`IN`} (${t.map(Bn).join(`, `)})`:`${r} ${o?`NOT IN`:`IN`} ()`},Un=e=>e.map(e=>e.kind===`search`?zn(e.text):Hn(e)).filter(Boolean).join(Rn)})))()}function Gn(){return(Gn=t((()=>{Ln(),Wn()})))()}var Kn,qn;function Jn(){return(Jn=t((()=>{Kn=`_root_1mpdz_1`,qn={root:Kn}})))()}var Yn;function Xn(){return(Xn=t((()=>{Yn=Object.freeze({label:`Advanced query`,placeholder:`status = "Active" AND trigger = "Scheduled"`,searchPlaceholder:`Search in query`,errors:Object.freeze({unexpectedToken:e=>`Unexpected “${e}”`,unexpectedEnd:()=>`The query is incomplete`,unterminatedString:()=>`Close the quoted value with "`,unknownField:e=>`Unknown field “${e}”`,unknownSubfield:e=>`Unknown subfield “${e}”`,subfieldRequired:e=>`Name a subfield of “${e}” after a dot`,operatorNotAllowed:e=>`“${e}” can’t be used with this field`,unknownOption:e=>`“${e}” is not a value of this field`,notANumber:e=>`“${e}” is not a number`,invalidDate:e=>`“${e}” is not a date or a date preset`,listExpected:()=>`Put the values in parentheses, as in IN ("a", "b")`,emptyList:()=>`Add at least one value to the list`}),help:`Query syntax`,helpOperators:`Operators`,helpCombine:`Join clauses with AND or OR, and group them with parentheses. OR and parentheses lock the filters and builder views.`,helpSearch:`A quoted value on its own searches all text, as in "timeout".`,helpExample:`Example`,operators:Object.freeze({"=":`equals`,"!=":`not equals`,">":`greater than`,">=":`greater than or equals`,"<":`less than`,"<=":`less than or equals`,IN:`is one of`,"NOT IN":`is none of`,"~":`contains`,"!~":`does not contain`})})})))()}var Zn,Qn,$n,er;function tr(){return(tr=t((()=>{Zn=`_operators_2muaf_5`,Qn=`_operator_2muaf_5`,$n=`_example_2muaf_27`,er={operators:Zn,operator:Qn,example:$n}})))()}var nr,rr,ir,ar,or,sr,cr;function lr(){return(lr=t((()=>{Gn(),nr=2,rr=10,ir=`2026-01-01`,ar=`value`,or=`"timeout"`,sr=e=>{switch(e.type){case`enum`:return e.options.slice(0,1).map(e=>e.value);case`number`:return rr;case`date`:return e.presets?.[0]?.value??ir;default:return ar}},cr=e=>{let t=e.slice(0,nr).flatMap(e=>{let t=e.type===`compound`?e.subfields[0]:void 0,n=e.type===`compound`?t:e,r=n?.operators[0];return!n||!r?[]:[{kind:`field`,id:e.id,field:e.id,...t&&{subfield:t.id},operator:r.value,value:sr(n)}]});return Un(t)||or}})))()}function ur(e){e.preventDefault()}function dr(e){e.preventDefault()}var fr,X,pr,mr;function hr(){return(hr=t((()=>{fr=i(),h(),T(),_(),m(),q(),tr(),lr(),X=r(),pr=360,mr=e=>{let t=(0,fr.c)(17),{fields:n,locale:r,content:i}=e,a;t[0]===r.help?a=t[1]:(a=(0,X.jsx)(w.Trigger,{children:(0,X.jsx)(g,{variant:`tertiary`,size:`small`,icon:`help`,"aria-label":r.help,onPointerDown:dr})}),t[0]=r.help,t[1]=a);let o;t[2]!==i||t[3]!==n||t[4]!==r.help||t[5]!==r.helpCombine||t[6]!==r.helpExample||t[7]!==r.helpOperators||t[8]!==r.helpSearch||t[9]!==r.operators?(o=i??(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(w.Header,{children:r.help}),(0,X.jsx)(w.Content,{children:(0,X.jsxs)(v,{direction:`column`,gap:`var(--sm)`,children:[(0,X.jsxs)(v,{direction:`column`,gap:`var(--xs)`,children:[(0,X.jsx)(p,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpOperators}),(0,X.jsx)(`dl`,{className:er.operators,children:ce.map(e=>(0,X.jsxs)(`div`,{className:er.operator,children:[(0,X.jsx)(`dt`,{children:(0,X.jsx)(p,{variant:`code-sm-reg`,color:`main`,children:e})}),(0,X.jsx)(`dd`,{children:r.operators[e]})]},e))})]}),(0,X.jsx)(p,{variant:`body-sm-reg`,color:`secondary`,children:r.helpCombine}),(0,X.jsx)(p,{variant:`body-sm-reg`,color:`secondary`,children:r.helpSearch}),(0,X.jsxs)(v,{direction:`column`,gap:`var(--xs)`,children:[(0,X.jsx)(p,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpExample}),(0,X.jsx)(p,{variant:`code-sm-reg`,color:`main`,className:er.example,children:cr(n)})]})]})})]}),t[2]=i,t[3]=n,t[4]=r.help,t[5]=r.helpCombine,t[6]=r.helpExample,t[7]=r.helpOperators,t[8]=r.helpSearch,t[9]=r.operators,t[10]=o):o=t[10];let s;t[11]!==r.help||t[12]!==o?(s=(0,X.jsx)(w.Panel,{width:pr,"aria-label":r.help,children:o}),t[11]=r.help,t[12]=o,t[13]=s):s=t[13];let c;return t[14]!==a||t[15]!==s?(c=(0,X.jsxs)(w.Root,{side:`bottom`,align:`end`,onOpenAutoFocus:ur,children:[a,s]}),t[14]=a,t[15]=s,t[16]=c):c=t[16],c}})))()}function gr(){return(gr=t((()=>{hr()})))()}var _r,vr,yr,br,xr,Sr,Cr;function wr(){return(wr=t((()=>{_r=i(),vr=n(),yr=e(a(),1),D(),z(),Gn(),Jn(),Xn(),gr(),br=r(),xr=300,Sr=e=>{let t=(0,_r.c)(16),{disabled:n,locale:r,slots:i,className:a,style:o}=e,s=n!==void 0&&n,c=R(),l={...Yn,...r,errors:{...Yn.errors,...r?.errors},operators:{...Yn.operators,...r?.operators}},[u,d]=(0,vr.useState)(null),[f,p]=(0,vr.useState)(null),[m,h]=(0,vr.useState)(!1),g=(0,vr.useRef)(void 0),_=(0,vr.useRef)(c),v;t[0]===c?v=t[1]:(v=()=>{_.current=c},t[0]=c,t[1]=v),(0,vr.useEffect)(v);let y,b;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(y=()=>()=>clearTimeout(g.current),b=[],t[2]=y,t[3]=b):(y=t[2],b=t[3]),(0,vr.useEffect)(y,b);let x=u&&(m||u.base===c.queryText)?u:null,S=x?f:null,C;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(C=e=>{let t=_.current,n=In(e,t.fields,t.conditions);if(!n.ok)return p(n.error),!1;p(null);let{conditions:r}=n;r?(r.length===t.conditions.length&&r.every((e,n)=>e.id===t.conditions[n]?.id)||t.setConditions(r),t.query!==null&&t.setQuery(null)):t.query!==e&&t.setQuery(e);let i=r?Un(r):e;return d(t=>t?.text===e?{text:e,base:i}:t),!0},t[4]=C):C=t[4];let w=C,T;t[5]!==x?.base||t[6]!==c.queryText?(T=e=>{d({text:e,base:x?.base??c.queryText}),clearTimeout(g.current),g.current=setTimeout(()=>{g.current=void 0,w(e)},xr)},t[5]=x?.base,t[6]=c.queryText,t[7]=T):T=t[7];let D=T,O;t[8]!==x||t[9]!==u?(O=()=>{h(!0),u&&!x&&(d(null),p(null))},t[8]=x,t[9]=u,t[10]=O):O=t[10];let k=O,A;t[11]!==x||t[12]!==f?(A=()=>{if(h(!1),!x)return;let e=g.current!==void 0;clearTimeout(g.current),g.current=void 0,(e?w(x.text):f===null)&&d(null)},t[11]=x,t[12]=f,t[13]=A):A=t[13];let j=A,M=l.label,N;return t[14]===a?N=t[15]:(N=(0,yr.default)(qn.root,a),t[14]=a,t[15]=N),(0,br.jsx)(E,{label:M,hideLabel:!0,status:S?`error`:void 0,message:S?l.errors[S.code](S.text):void 0,messageIcon:`error`,className:N,style:o,children:(0,br.jsx)(E.CodeInput,{value:x?.text??c.queryText,placeholder:l.placeholder,disabled:s,invalid:S!==null,locale:{searchPlaceholder:l.searchPlaceholder,codeLabel:l.label},slots:{endAdornment:(0,br.jsx)(mr,{fields:c.fields,locale:l,content:i?.help})},onValueChange:D,onFocus:k,onBlur:j})})},Cr=e=>{let t=(0,_r.c)(3),{resetRevision:n}=R(),r;return t[0]!==e||t[1]!==n?(r=(0,br.jsx)(Sr,{...e},n),t[0]=e,t[1]=n,t[2]=r):r=t[2],r},Cr.displayName=`DsFiltersBar.Query`})))()}function Tr(){return(Tr=t((()=>{wr()})))()}function Er(){return(Er=t((()=>{V(),G(),ne(),Je(),Xe(),tt(),rt(),at(),ct(),Zt(),Tr()})))()}function Dr(e){return e+1}var Or,kr,Ar,jr,Mr,Nr,Pr,Fr,Z;function Ir(){return(Ir=t((()=>{Or=i(),kr=e(a(),1),Ar=n(),Er(),z(),K(),q(),Ie(),Gn(),ze(),jr=r(),Mr=Object.freeze([]),Nr=Object.freeze([]),Pr=Object.freeze([]),Fr=e=>{let t=(0,Or.c)(51),{fields:n,conditions:r,defaultConditions:i,query:a,defaultQuery:o,pins:s,defaultPins:c,expanded:l,defaultExpanded:u,view:d,defaultView:f,locale:p,ref:m,className:h,style:g,children:_,onConditionsChange:v,onQueryChange:y,onPinsChange:b,onExpandedChange:x,onViewChange:S}=e,C=n===void 0?Mr:n,w=i===void 0?Nr:i,T=o===void 0?null:o,E=c===void 0?Pr:c,D=u!==void 0&&u,O=f===void 0?`filters`:f,[k,A]=Re(r,v,w),[j,M]=Re(a,y,T),[N,P]=Re(s,b,E),[F,I]=Re(l,x,D),[R,z]=Re(d,S,O),B=(0,Ar.useId)(),V;t[0]===p?V=t[1]:(V={...de,...p},t[0]=p,t[1]=V);let H=V,[U,W]=(0,Ar.useState)(0),[G,ee]=(0,Ar.useState)(null),te;t[2]!==k||t[3]!==j?(te=j??Un(k),t[2]=k,t[3]=j,t[4]=te):te=t[4];let ne=j===null&&k.length===0,re;t[5]===j?re=t[6]:(re=ve(j),t[5]=j,t[6]=re);let ie,ae,oe;t[7]!==k||t[8]!==A?(ie=e=>A(xe(k,e)),ae=e=>A(Se(k,e)),oe=e=>A(Ce(k,e)),t[7]=k,t[8]=A,t[9]=ie,t[10]=ae,t[11]=oe):(ie=t[9],ae=t[10],oe=t[11]);let K;t[12]===M?K=t[13]:(K=e=>M(_e(e)),t[12]=M,t[13]=K);let ce;t[14]!==A||t[15]!==M?(ce=()=>{W(Dr),A(Nr),M(null)},t[14]=A,t[15]=M,t[16]=ce):ce=t[16];let le;t[17]!==k||t[18]!==F||t[19]!==C||t[20]!==H||t[21]!==N||t[22]!==j||t[23]!==U||t[24]!==G||t[25]!==A||t[26]!==I||t[27]!==P||t[28]!==z||t[29]!==re||t[30]!==ie||t[31]!==ae||t[32]!==oe||t[33]!==K||t[34]!==ce||t[35]!==te||t[36]!==ne||t[37]!==B||t[38]!==R?(le={fields:C,conditions:k,query:j,queryText:te,resetRevision:U,pins:N,isEmpty:ne,lockedViews:re,expanded:F,view:R,toolbarId:B,locale:H,setConditions:A,addCondition:ie,updateCondition:ae,removeCondition:oe,setQuery:K,setPins:P,clear:ce,setExpanded:I,setView:z,search:G,registerSearch:ee},t[17]=k,t[18]=F,t[19]=C,t[20]=H,t[21]=N,t[22]=j,t[23]=U,t[24]=G,t[25]=A,t[26]=I,t[27]=P,t[28]=z,t[29]=re,t[30]=ie,t[31]=ae,t[32]=oe,t[33]=K,t[34]=ce,t[35]=te,t[36]=ne,t[37]=B,t[38]=R,t[39]=le):le=t[39];let ue=H.label,fe;t[40]===h?fe=t[41]:(fe=(0,kr.default)(se.root,h),t[40]=h,t[41]=fe);let q;t[42]!==_||t[43]!==H.label||t[44]!==m||t[45]!==g||t[46]!==fe?(q=(0,jr.jsx)(`div`,{ref:m,role:`region`,"aria-label":ue,className:fe,style:g,children:_}),t[42]=_,t[43]=H.label,t[44]=m,t[45]=g,t[46]=fe,t[47]=q):q=t[47];let pe;return t[48]!==le||t[49]!==q?(pe=(0,jr.jsx)(L.Provider,{value:le,children:q}),t[48]=le,t[49]=q,t[50]=pe):pe=t[50],pe},Fr.displayName=`DsFiltersBar.Root`,Z={Root:Fr,Summary:Ye,Toolbar:et,SavedFilters:ee,SaveFilter:te,Search:qe,ViewSwitch:it,View:nt,Conditions:Yt,Builder:ot,Query:Cr,ClearAll:B,Pinned:H,PinnedGroup:U,PinnedToggle:W}})))()}function Lr(){return(Lr=t((()=>{Ir()})))()}var Q,$,Rr,zr,Br,Vr,Hr,Ur,Wr,Gr;function Kr(){return(Kr=t((()=>{Lr(),q(),Q=r(),{fn:$}=__STORYBOOK_MODULE_TEST__,Rr={title:`Components/FiltersBar`,component:Z.Root,tags:[`!manifest`],parameters:{layout:`padded`,docs:{description:{component:'\n**Work in progress — the API is wired, but only some parts render.** `Root`, `Toolbar`,\n`Search`, the add-filter button with its filters dialog and the search chips in `Conditions`,\nand the advanced query view render; the other parts render nothing yet. Until `ViewSwitch` renders, the stories place the advanced view\ndirectly under `Root`.\n\n**Internal component.** Not exported from `@drivenets/design-system` while it is being built.\n\nA toolbar above a table or list for narrowing the data with filters, a query builder or an advanced\nquery, with **Saved filters** and a pinned row of quick toggles.\n\n**One filter document.** `Root` owns `conditions` and `query` (controlled or uncontrolled)\nand describes what can be filtered through `fields`. Every view reads and writes that same\ndocument, so a condition built in the query builder shows as a chip in the filters view and in the\ncollapsed summary.\n\n**One query language.** The advanced view writes the conditions as query text and checks what the\nuser types against `fields`: `status IN ("active", "pending") AND input.vendor ~ "cisco"`.\nOnly a valid query reaches the document. One made of clauses joined by `AND` becomes conditions;\none with `OR` or parentheses becomes `query`, the only source, and the filters and builder\nviews lock until it is cleared. Evaluate such a query with `parseFilterQuery(query, fields)`.\n\n**Pins are a user preference,** not part of the document: loading a saved filter or clearing leaves\nthem alone.\n\n**Collapsed shows a summary, expanded shows the toolbar.** `Summary` renders while collapsed,\n`Toolbar` while expanded; `Pinned` renders in both.\n                '}}},argTypes:{expanded:{control:`boolean`},defaultExpanded:{control:`boolean`},view:{control:`select`,options:ue},defaultView:{control:`select`,options:ue},children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},onConditionsChange:{table:{disable:!0}},onQueryChange:{table:{disable:!0}},onPinsChange:{table:{disable:!0}},onExpandedChange:{table:{disable:!0}},onViewChange:{table:{disable:!0}}},args:{onConditionsChange:$(),onQueryChange:$(),onPinsChange:$(),onExpandedChange:$(),onViewChange:$()}},zr={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]},{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`}]}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`},{kind:`field`,id:`c2`,field:`status`,operator:`!=`,value:[`active`]},{kind:`field`,id:`c3`,field:`input`,subfield:`name`,operator:`~`,value:`WF456`},{kind:`field`,id:`c4`,field:`lastRun`,operator:`=`,value:`last7Days`}],defaultPins:[{field:`status`,value:`active`},{field:`status`,value:`pending`}]},render:e=>(0,Q.jsxs)(Z.Root,{...e,children:[(0,Q.jsx)(Z.Summary,{count:18}),(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.SavedFilters,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onValueChange:$(),onClear:$(),onRename:$(),onDelete:$()}),(0,Q.jsx)(Z.Search,{}),(0,Q.jsx)(Z.ViewSwitch,{}),(0,Q.jsx)(Z.View,{value:`filters`,children:(0,Q.jsx)(Z.Conditions,{})}),(0,Q.jsx)(Z.View,{value:`builder`,children:(0,Q.jsx)(Z.Builder,{suggestedFields:[`input`,`status`]})}),(0,Q.jsx)(Z.SaveFilter,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onUpdate:$(),onSaveAs:$()}),(0,Q.jsx)(Z.ClearAll,{})]}),(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})}),(0,Q.jsx)(Z.Pinned,{children:(0,Q.jsxs)(Z.PinnedGroup,{label:`Status`,children:[(0,Q.jsx)(Z.PinnedToggle,{label:`Active`,count:10,active:!0}),(0,Q.jsx)(Z.PinnedToggle,{label:`Pending`,count:0,active:!1})]})})]})},Br={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`},{value:`draft`,label:`Draft`}]},{type:`enum`,id:`workflow`,label:`Workflow`,operators:[{value:`IN`,label:`is any of`,symbol:`∈`},{value:`NOT IN`,label:`is none of`,symbol:`∉`}],options:[{value:`deploy`,label:`Deploy`},{value:`backup`,label:`Backup`},{value:`upgrade`,label:`Upgrade`},{value:`rollback`,label:`Rollback`},{value:`healthCheck`,label:`Health check`},{value:`provision`,label:`Provision`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`,symbol:`=`}],options:[{value:`manual`,label:`Manual`},{value:`scheduled`,label:`Scheduled`},{value:`api`,label:`API`},{value:`webhook`,label:`Webhook`}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`!=`,value:[`deprecated`,`draft`]},{kind:`field`,id:`c2`,field:`trigger`,operator:`=`,value:[`scheduled`]}],defaultPins:[{field:`status`,value:`active`},{field:`workflow`,value:`deploy`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.Toolbar,{children:(0,Q.jsx)(Z.Conditions,{})})})},Vr={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`}],options:[{value:`active`,label:`Active`},{value:`pending`,label:`Pending`}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.Search,{}),(0,Q.jsx)(Z.View,{value:`filters`,children:(0,Q.jsx)(Z.Conditions,{})})]})})},Hr={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`},{value:`!=`,label:`not equals`},{value:`IN`,label:`is one of`},{value:`NOT IN`,label:`is none of`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`},{value:`<`,label:`less than`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`},{value:`~`,label:`contains`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`IN`,value:[`active`,`pending`]},{kind:`field`,id:`c2`,field:`input`,subfield:`vendor`,operator:`~`,value:`cisco`},{kind:`search`,id:`c3`,text:`timeout`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})})})},Ur={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`}],options:[{value:`scheduled`,label:`Scheduled`}]}],defaultQuery:`status = "active" OR trigger = "scheduled"`},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})})})},Wr={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]}],locale:{label:`Refine results`,expand:`Show refinements`,collapse:`Hide refinements`}},render:e=>(0,Q.jsxs)(Z.Root,{...e,children:[(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.Search,{locale:{label:`Find`,placeholder:`Press ‘/’ to find`}}),(0,Q.jsx)(Z.ViewSwitch,{locale:{views:{filters:`Quick filters`,builder:`Guided query`,advanced:`Query editor`}}}),(0,Q.jsx)(Z.ClearAll,{locale:{label:`Reset`}})]}),(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{locale:{label:`Query editor`,placeholder:`status = "Active"`,help:`Syntax`}})})]})},Gr=[`Default`,`FiltersDialog`,`Search`,`AdvancedQuery`,`LockedViews`,`Localized`],zr.parameters={...zr.parameters,docs:{...zr.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    defaultView: 'advanced',
    fields: [{
      type: 'enum',
      id: 'status',
      label: 'Status',
      operators: [{
        value: '=',
        label: 'equals',
        symbol: '='
      }, {
        value: '!=',
        label: 'not equals',
        symbol: '≠'
      }],
      options: [{
        value: 'active',
        label: 'Active'
      }, {
        value: 'deprecated',
        label: 'Deprecated'
      }, {
        value: 'pending',
        label: 'Pending'
      }]
    }, {
      type: 'number',
      id: 'parents',
      label: 'Parents',
      operators: [{
        value: '>',
        label: 'greater than',
        symbol: '>'
      }, {
        value: '<',
        label: 'less than',
        symbol: '<'
      }]
    }, {
      type: 'date',
      id: 'lastRun',
      label: 'Last run',
      operators: [{
        value: '=',
        label: 'is',
        symbol: '='
      }, {
        value: '>',
        label: 'after',
        symbol: '>'
      }, {
        value: '<',
        label: 'before',
        symbol: '<'
      }],
      presets: [{
        value: 'today',
        label: 'Today'
      }, {
        value: 'last7Days',
        label: 'Last 7 days'
      }]
    }, {
      type: 'compound',
      id: 'input',
      label: 'Input',
      subfields: [{
        type: 'text',
        id: 'name',
        label: 'Name',
        operators: [{
          value: '~',
          label: 'contains'
        }, {
          value: '!~',
          label: 'does not contain'
        }]
      }, {
        type: 'text',
        id: 'vendor',
        label: 'Vendor',
        operators: [{
          value: '=',
          label: 'equals'
        }]
      }]
    }],
    defaultConditions: [{
      kind: 'search',
      id: 'c1',
      text: 'AAA'
    }, {
      kind: 'field',
      id: 'c2',
      field: 'status',
      operator: '!=',
      value: ['active']
    }, {
      kind: 'field',
      id: 'c3',
      field: 'input',
      subfield: 'name',
      operator: '~',
      value: 'WF456'
    }, {
      kind: 'field',
      id: 'c4',
      field: 'lastRun',
      operator: '=',
      value: 'last7Days'
    }],
    defaultPins: [{
      field: 'status',
      value: 'active'
    }, {
      field: 'status',
      value: 'pending'
    }]
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.Summary count={18} />

            <DsFiltersBar.Toolbar>
                <DsFiltersBar.SavedFilters items={[{
        id: '1',
        name: 'MyFilter_1',
        count: 2
      }, {
        id: '2',
        name: 'MyFilter_2',
        count: 1
      }]} value={null} onValueChange={fn()} onClear={fn()} onRename={fn()} onDelete={fn()} />
                <DsFiltersBar.Search />
                <DsFiltersBar.ViewSwitch />
                <DsFiltersBar.View value="filters">
                    <DsFiltersBar.Conditions />
                </DsFiltersBar.View>
                <DsFiltersBar.View value="builder">
                    <DsFiltersBar.Builder suggestedFields={['input', 'status']} />
                </DsFiltersBar.View>
                <DsFiltersBar.SaveFilter items={[{
        id: '1',
        name: 'MyFilter_1',
        count: 2
      }, {
        id: '2',
        name: 'MyFilter_2',
        count: 1
      }]} value={null} onUpdate={fn()} onSaveAs={fn()} />
                <DsFiltersBar.ClearAll />
            </DsFiltersBar.Toolbar>

            {/* Moves back into Toolbar once Toolbar renders */}
            <DsFiltersBar.View value="advanced">
                <DsFiltersBar.Query />
            </DsFiltersBar.View>

            <DsFiltersBar.Pinned>
                <DsFiltersBar.PinnedGroup label="Status">
                    <DsFiltersBar.PinnedToggle label="Active" count={10} active />
                    <DsFiltersBar.PinnedToggle label="Pending" count={0} active={false} />
                </DsFiltersBar.PinnedGroup>
            </DsFiltersBar.Pinned>
        </DsFiltersBar.Root>
}`,...zr.parameters?.docs?.source},description:{story:"The canonical layout. `fields` describes what can be filtered; `defaultConditions` seeds the\ndocument with a search, an enum, a compound-field and a date-preset condition — one of each shape.\nOnly the advanced query renders for now; the other parts are in progress.",...zr.parameters?.docs?.description}}},Br.parameters={...Br.parameters,docs:{...Br.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    fields: [{
      type: 'enum',
      id: 'status',
      label: 'Status',
      operators: [{
        value: '=',
        label: 'equals',
        symbol: '='
      }, {
        value: '!=',
        label: 'not equals',
        symbol: '≠'
      }],
      options: [{
        value: 'active',
        label: 'Active'
      }, {
        value: 'deprecated',
        label: 'Deprecated'
      }, {
        value: 'inactive',
        label: 'Inactive'
      }, {
        value: 'pending',
        label: 'Pending'
      }, {
        value: 'draft',
        label: 'Draft'
      }]
    }, {
      type: 'enum',
      id: 'workflow',
      label: 'Workflow',
      operators: [{
        value: 'IN',
        label: 'is any of',
        symbol: '∈'
      }, {
        value: 'NOT IN',
        label: 'is none of',
        symbol: '∉'
      }],
      options: [{
        value: 'deploy',
        label: 'Deploy'
      }, {
        value: 'backup',
        label: 'Backup'
      }, {
        value: 'upgrade',
        label: 'Upgrade'
      }, {
        value: 'rollback',
        label: 'Rollback'
      }, {
        value: 'healthCheck',
        label: 'Health check'
      }, {
        value: 'provision',
        label: 'Provision'
      }]
    }, {
      type: 'enum',
      id: 'trigger',
      label: 'Trigger',
      operators: [{
        value: '=',
        label: 'equals',
        symbol: '='
      }],
      options: [{
        value: 'manual',
        label: 'Manual'
      }, {
        value: 'scheduled',
        label: 'Scheduled'
      }, {
        value: 'api',
        label: 'API'
      }, {
        value: 'webhook',
        label: 'Webhook'
      }]
    }],
    defaultConditions: [{
      kind: 'field',
      id: 'c1',
      field: 'status',
      operator: '!=',
      value: ['deprecated', 'draft']
    }, {
      kind: 'field',
      id: 'c2',
      field: 'trigger',
      operator: '=',
      value: ['scheduled']
    }],
    defaultPins: [{
      field: 'status',
      value: 'active'
    }, {
      field: 'workflow',
      value: 'deploy'
    }]
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.Toolbar>
                <DsFiltersBar.Conditions />
            </DsFiltersBar.Toolbar>
        </DsFiltersBar.Root>
}`,...Br.parameters?.docs?.source},description:{story:`The "+" button in \`Conditions\` opens the filters dialog: one tab per enum field, with an operator,
an option search, and a checkbox and pin per option. Edits stay a draft until **Save filters**
writes one condition per field with checked options and the pins back to the document; closing any
other way drops the draft. Search and non-enum conditions are left as they are.`,...Br.parameters?.docs?.description}}},Vr.parameters={...Vr.parameters,docs:{...Vr.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    fields: [{
      type: 'enum',
      id: 'status',
      label: 'Status',
      operators: [{
        value: '=',
        label: 'equals',
        symbol: '='
      }],
      options: [{
        value: 'active',
        label: 'Active'
      }, {
        value: 'pending',
        label: 'Pending'
      }]
    }],
    defaultConditions: [{
      kind: 'search',
      id: 'c1',
      text: 'AAA'
    }]
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.Toolbar>
                <DsFiltersBar.Search />
                <DsFiltersBar.View value="filters">
                    <DsFiltersBar.Conditions />
                </DsFiltersBar.View>
            </DsFiltersBar.Toolbar>
        </DsFiltersBar.Root>
}`,...Vr.parameters?.docs?.source},description:{story:`Enter adds the typed text as a search condition, shown as a chip after the "+" button, and clears
the input; the same search is not added twice. \\\`/\\\` focuses the input from anywhere outside a text
field or dialog. Clicking a chip moves its text back into the input for editing; its × removes it.
Search is disabled while an Advanced query is the source.`,...Vr.parameters?.docs?.description}}},Hr.parameters={...Hr.parameters,docs:{...Hr.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: 'advanced',
    fields: [{
      type: 'enum',
      id: 'status',
      label: 'Status',
      operators: [{
        value: '=',
        label: 'equals'
      }, {
        value: '!=',
        label: 'not equals'
      }, {
        value: 'IN',
        label: 'is one of'
      }, {
        value: 'NOT IN',
        label: 'is none of'
      }],
      options: [{
        value: 'active',
        label: 'Active'
      }, {
        value: 'deprecated',
        label: 'Deprecated'
      }, {
        value: 'pending',
        label: 'Pending'
      }]
    }, {
      type: 'number',
      id: 'parents',
      label: 'Parents',
      operators: [{
        value: '>',
        label: 'greater than'
      }, {
        value: '<',
        label: 'less than'
      }]
    }, {
      type: 'compound',
      id: 'input',
      label: 'Input',
      subfields: [{
        type: 'text',
        id: 'vendor',
        label: 'Vendor',
        operators: [{
          value: '=',
          label: 'equals'
        }, {
          value: '~',
          label: 'contains'
        }]
      }]
    }],
    defaultConditions: [{
      kind: 'field',
      id: 'c1',
      field: 'status',
      operator: 'IN',
      value: ['active', 'pending']
    }, {
      kind: 'field',
      id: 'c2',
      field: 'input',
      subfield: 'vendor',
      operator: '~',
      value: 'cisco'
    }, {
      kind: 'search',
      id: 'c3',
      text: 'timeout'
    }]
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.View value="advanced">
                <DsFiltersBar.Query />
            </DsFiltersBar.View>
        </DsFiltersBar.Root>
}`,...Hr.parameters?.docs?.source},description:{story:"The advanced view shows the conditions as query text. Edit it: a query joined by `AND` goes back\nto the conditions, and one that breaks the rules shows why under the field.",...Hr.parameters?.docs?.description}}},Ur.parameters={...Ur.parameters,docs:{...Ur.parameters?.docs,source:{originalSource:`{
  args: {
    defaultView: 'advanced',
    fields: [{
      type: 'enum',
      id: 'status',
      label: 'Status',
      operators: [{
        value: '=',
        label: 'equals'
      }],
      options: [{
        value: 'active',
        label: 'Active'
      }]
    }, {
      type: 'enum',
      id: 'trigger',
      label: 'Trigger',
      operators: [{
        value: '=',
        label: 'equals'
      }],
      options: [{
        value: 'scheduled',
        label: 'Scheduled'
      }]
    }],
    defaultQuery: 'status = "active" OR trigger = "scheduled"'
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.View value="advanced">
                <DsFiltersBar.Query />
            </DsFiltersBar.View>
        </DsFiltersBar.Root>
}`,...Ur.parameters?.docs?.source},description:{story:"A query with `OR` or parentheses cannot be shown as conditions, so it becomes the only source:\nthe conditions are ignored and the filters and builder views lock until the query is cleared.",...Ur.parameters?.docs?.description}}},Wr.parameters={...Wr.parameters,docs:{...Wr.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    defaultView: 'advanced',
    fields: [{
      type: 'enum',
      id: 'status',
      label: 'Status',
      operators: [{
        value: '=',
        label: 'equals'
      }],
      options: [{
        value: 'active',
        label: 'Active'
      }]
    }],
    locale: {
      label: 'Refine results',
      expand: 'Show refinements',
      collapse: 'Hide refinements'
    }
  },
  render: args => <DsFiltersBar.Root {...args}>
            <DsFiltersBar.Toolbar>
                <DsFiltersBar.Search locale={{
        label: 'Find',
        placeholder: 'Press ‘/’ to find'
      }} />
                <DsFiltersBar.ViewSwitch locale={{
        views: {
          filters: 'Quick filters',
          builder: 'Guided query',
          advanced: 'Query editor'
        }
      }} />
                <DsFiltersBar.ClearAll locale={{
        label: 'Reset'
      }} />
            </DsFiltersBar.Toolbar>

            {/* Moves back into Toolbar once Toolbar renders */}
            <DsFiltersBar.View value="advanced">
                <DsFiltersBar.Query locale={{
        label: 'Query editor',
        placeholder: 'status = "Active"',
        help: 'Syntax'
      }} />
            </DsFiltersBar.View>
        </DsFiltersBar.Root>
}`,...Wr.parameters?.docs?.source},description:{story:"`Root` takes its own strings through `locale`; each part takes its own `locale` too.",...Wr.parameters?.docs?.description}}}})))()}Kr();export{Hr as AdvancedQuery,zr as Default,Br as FiltersDialog,Wr as Localized,Ur as LockedViews,Vr as Search,Gr as __namedExportsOrder,Rr as default};