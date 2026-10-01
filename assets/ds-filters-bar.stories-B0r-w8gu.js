import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-BNlqrnyR.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-icon-BS2iUZrs.js";import{n as c,t as l}from"./ds-checkbox-DeKyAYGM.js";import{t as u}from"./ds-select-BoRqqdjD.js";import{n as d,t as f}from"./ds-typography-DFIypulc.js";import{n as p,t as m}from"./ds-button-v3-Bcgf5YPg.js";import{n as h,t as g}from"./ds-stack-a-MODuRY.js";import{t as _}from"./ds-text-input-DiLoHrF6.js";import{t as v}from"./ds-text-input-BLpuISzp.js";import{n as y,t as b}from"./use-controlled-CNEmuIQZ.js";import{t as x}from"./ds-select-CTi3DWCR.js";import{t as S}from"./ds-popover-BKv2YdzT.js";import{t as C}from"./ds-popover-PfvyynkM.js";import{t as w}from"./ds-form-control-BAA89pRD.js";import{t as T}from"./ds-form-control-BvMW2TTU.js";import{n as E,t as D}from"./ds-pin-toggle-HwwGcxD4.js";import{t as O}from"./ds-modal-XSY0YqXf.js";import{t as k}from"./ds-modal-Ct-TXJrv.js";import{t as A}from"./ds-vertical-tabs-2tMfHlg2.js";import{t as j}from"./ds-vertical-tabs-C8Tv1RzK.js";var M,N,P;function F(){return(F=t((()=>{M=n(),N=(0,M.createContext)(null),P=()=>{let e=(0,M.useContext)(N);if(!e)throw Error(`DsFiltersBar compound components must be used within DsFiltersBar.Root`);return e}})))()}var I;function L(){return(L=t((()=>{F(),I=()=>(P(),null),I.displayName=`DsFiltersBar.ClearAll`})))()}var R,z,B;function V(){return(V=t((()=>{F(),R=()=>(P(),null),R.displayName=`DsFiltersBar.Pinned`,z=()=>(P(),null),z.displayName=`DsFiltersBar.PinnedGroup`,B=()=>(P(),null),B.displayName=`DsFiltersBar.PinnedToggle`})))()}var H,ee;function te(){return(te=t((()=>{F(),H=()=>(P(),null),H.displayName=`DsFiltersBar.SavedFilters`,ee=()=>(P(),null),ee.displayName=`DsFiltersBar.SaveFilter`})))()}var U;function ne(){return(ne=t((()=>{F(),U=()=>(P(),null),U.displayName=`DsFiltersBar.Search`})))()}var W;function G(){return(G=t((()=>{F(),W=()=>(P(),null),W.displayName=`DsFiltersBar.Summary`})))()}var re,ie,ae,oe;function K(){return(K=t((()=>{re=`_root_17ue5_1`,ie=`_toolbar_17ue5_9`,ae=`_conditions_17ue5_17`,oe={root:re,toolbar:ie,conditions:ae}})))()}var se,ce,le,q;function ue(){return(ue=t((()=>{se=i(),ce=e(a(),1),F(),K(),le=r(),q=e=>{let t=(0,se.c)(7),{className:n,style:r,children:i}=e,{expanded:a,toolbarId:o}=P();if(!a)return null;let s;t[0]===n?s=t[1]:(s=(0,ce.default)(oe.toolbar,n),t[0]=n,t[1]=s);let c;return t[2]!==i||t[3]!==r||t[4]!==s||t[5]!==o?(c=(0,le.jsx)(`div`,{id:o,className:s,style:r,children:i}),t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=c):c=t[6],c},q.displayName=`DsFiltersBar.Toolbar`})))()}var de;function fe(){return(fe=t((()=>{F(),de=e=>{let{value:t,children:n}=e,{view:r}=P();return r===t?n:null},de.displayName=`DsFiltersBar.View`})))()}var pe;function me(){return(me=t((()=>{F(),pe=()=>(P(),null),pe.displayName=`DsFiltersBar.ViewSwitch`})))()}var he;function ge(){return(ge=t((()=>{F(),he=()=>(P(),null),he.displayName=`DsFiltersBar.Builder`})))()}function _e(){return(_e=t((()=>{ge()})))()}var ve,ye,be,xe;function Se(){return(Se=t((()=>{ve=[`=`,`!=`,`>`,`>=`,`<`,`<=`,`IN`,`NOT IN`,`~`,`!~`],ye=[`=`,`!=`,`IN`,`NOT IN`],be=[`filters`,`builder`,`advanced`],xe=Object.freeze({label:`Filters`,expand:`Show filters`,collapse:`Hide filters`}),Object.freeze({resultCount:e=>`${String(e)} results`,activeSavedFilter:`Filter`,emptyLabel:`View`,emptyValue:`All`}),Object.freeze({label:`Search`,placeholder:`Type ‘/’ to search`}),Object.freeze({label:`Filter view`,views:Object.freeze({filters:`Filters`,builder:`Query builder`,advanced:`Advanced query`}),lockedView:`Clear the advanced query to switch views`}),Object.freeze({label:`Clear all`}),Object.freeze({label:`Pinned`})})))()}var Ce,we,Te,Ee,De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze;function Be(){return(Be=t((()=>{Se(),Ce=2,we=16,Te=Object.freeze([`filters`,`builder`]),Ee=Object.freeze([]),De=e=>e?.trim()?e:null,Oe=e=>e===null?Ee:Te,ke=()=>{let e=crypto.getRandomValues(new Uint32Array(Ce));return`condition-${Array.from(e,e=>e.toString(we)).join(``)}`},Ae=(e,t)=>[...e,t],je=(e,t)=>e.map(e=>e.id===t.id?t:e),Me=(e,t)=>e.filter(e=>e.id!==t),Ne=e=>e.filter(e=>e.type===`enum`&&e.options.length>0),Pe=Object.freeze([]),Fe=e=>ye.includes(e),Ie=(e,t)=>e.kind===`field`&&e.field===t&&!e.subfield&&Fe(e.operator)&&Array.isArray(e.value),Le=(e,t,n)=>Ne(e).flatMap(e=>{let r=t.find(t=>Ie(t,e.id)),i=n.filter(t=>t.field===e.id).map(e=>e.value);return!r&&!i.length?[]:[{field:e.id,operator:r?.operator??e.operators[0]?.value??`=`,selected:r?.value??Pe,pinned:i}]}),Re=(e,t)=>({kind:`field`,id:t,field:e.field,operator:e.operator,value:e.selected}),ze=(e,t,n,r)=>{let i=Ne(e),a=i.flatMap(e=>r.find(t=>t.field===e.id)??[]),o=new Map(a.filter(e=>e.selected.length).map(e=>[e.field,e])),s=new Set,c=t.flatMap(e=>{let t=i.find(t=>Ie(e,t.id));if(!t)return[e];let n=o.get(t.id);return!n||s.has(t.id)?[]:(s.add(t.id),[Re(n,e.id)])}),l=[...o.values()].filter(e=>!s.has(e.field)).map(e=>Re(e,ke())),u=new Map(a.map(e=>[e.field,e.pinned])),d=e=>i.some(t=>t.id===e),f=n.filter(e=>!d(e.field)||!!u.get(e.field)?.includes(e.value)),p=a.flatMap(e=>e.pinned.filter(t=>!f.some(n=>n.field===e.field&&n.value===t)).map(t=>({field:e.field,value:t})));return{conditions:[...c,...l],pins:[...f,...p]}}})))()}var Ve;function He(){return(He=t((()=>{Ve=Object.freeze({title:`Filters`,save:`Save filters`,close:`Close`,operator:`Operator`,operatorOption:(e,t)=>`${e} ${t.symbol??t.value} (${t.label})`,search:e=>`Search ${e}`,searchPlaceholder:e=>`Search ${e}`,selectedCount:e=>`${String(e)} selected`,pinned:`Pinned`})})))()}var Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,J;function st(){return(st=t((()=>{Ue=`_dialog_1s2lk_5`,We=`_header_1s2lk_9`,Ge=`_footer_1s2lk_10`,Ke=`_body_1s2lk_13`,qe=`_tabs_1s2lk_20`,Je=`_tabList_1s2lk_26`,Ye=`_tab_1s2lk_20`,Xe=`_tabLabel_1s2lk_52`,Ze=`_counter_1s2lk_60`,Qe=`_counterDot_1s2lk_68`,$e=`_tabPin_1s2lk_75`,et=`_panel_1s2lk_81`,tt=`_panelHeader_1s2lk_88`,nt=`_control_1s2lk_97`,rt=`_options_1s2lk_101`,it=`_option_1s2lk_101`,at=`_optionPin_1s2lk_115`,ot=`_visuallyHidden_1s2lk_123`,J={dialog:Ue,header:We,footer:Ge,body:Ke,tabs:qe,tabList:Je,tab:Ye,tabLabel:Xe,counter:Ze,counterDot:Qe,tabPin:$e,panel:et,panelHeader:tt,control:nt,options:rt,option:it,optionPin:at,visuallyHidden:ot}})))()}var ct,lt,ut,Y,dt,ft,pt,mt,ht,gt;function _t(){return(_t=t((()=>{ct=i(),lt=n(),ut=e(a(),1),p(),l(),s(),k(),D(),x(),v(),f(),j(),He(),st(),Y=r(),dt=(e,t)=>e.find(e=>e.field===t.id)??{field:t.id,operator:t.operators[0]?.value??`=`,selected:[],pinned:[]},ft=(e,t)=>e.some(e=>e.field===t.field)?e.map(e=>e.field===t.field?t:e):[...e,t],pt=(e,t,n)=>n?e.includes(t)?e:[...e,t]:e.filter(e=>e!==t),mt=e=>{let t=(0,ct.c)(12),{field:n,entry:r,locale:i}=e,a=r.selected.length,s=r.pinned.length>0,c;t[0]===n.label?c=t[1]:(c=(0,Y.jsx)(d,{variant:`body-sm-reg`,className:J.tabLabel,children:n.label}),t[0]=n.label,t[1]=c);let l;t[2]!==a||t[3]!==i?(l=a>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(`span`,{className:J.counter,"aria-hidden":!0,children:[(0,Y.jsx)(`span`,{className:J.counterDot}),(0,Y.jsx)(d,{variant:`body-xs-semi-bold`,children:a})]}),(0,Y.jsx)(`span`,{className:J.visuallyHidden,children:i.selectedCount(a)})]}),t[2]=a,t[3]=i,t[4]=l):l=t[4];let u;t[5]!==s||t[6]!==i?(u=s&&(0,Y.jsx)(`span`,{className:J.tabPin,role:`img`,"aria-label":i.pinned,children:(0,Y.jsx)(o,{icon:`keep`,size:`tiny`,filled:!0,"aria-hidden":!0})}),t[5]=s,t[6]=i,t[7]=u):u=t[7];let f;return t[8]!==c||t[9]!==l||t[10]!==u?(f=(0,Y.jsxs)(Y.Fragment,{children:[c,l,u]}),t[8]=c,t[9]=l,t[10]=u,t[11]=f):f=t[11],f},ht=e=>{let t=(0,ct.c)(65),{field:n,entry:r,search:i,locale:a,onSearchChange:s,onEntryChange:l}=e,d=(0,lt.useId)(),f=(0,lt.useId)(),p,m,h,g,v;if(t[0]!==r||t[1]!==n.label||t[2]!==n.operators||t[3]!==n.options||t[4]!==a||t[5]!==l||t[6]!==s||t[7]!==d||t[8]!==i||t[9]!==f){let e=i.trim().toLowerCase(),y=n.options.filter(t=>t.label.toLowerCase().includes(e)),b;if(t[15]!==n.label||t[16]!==n.operators||t[17]!==a){let e;t[19]!==n.label||t[20]!==a?(e=e=>({value:e.value,label:a.operatorOption(n.label,e)}),t[19]=n.label,t[20]=a,t[21]=e):e=t[21],b=n.operators.map(e),t[15]=n.label,t[16]=n.operators,t[17]=a,t[18]=b}else b=t[18];let x=b,S;t[22]!==r||t[23]!==n.operators||t[24]!==l?(S=e=>{let t=n.operators.find(t=>t.value===e)?.value;t&&t!==r.operator&&l({...r,operator:t})},t[22]=r,t[23]=n.operators,t[24]=l,t[25]=S):S=t[25];let C=S,w;t[26]!==a.operator||t[27]!==d?(w=(0,Y.jsx)(`label`,{htmlFor:d,className:J.visuallyHidden,children:a.operator}),t[26]=a.operator,t[27]=d,t[28]=w):w=t[28];let T;t[29]!==r.operator||t[30]!==C||t[31]!==d||t[32]!==x?(T=(0,Y.jsx)(u,{id:d,className:J.control,options:x,value:r.operator,onValueChange:C}),t[29]=r.operator,t[30]=C,t[31]=d,t[32]=x,t[33]=T):T=t[33];let D;t[34]!==n.label||t[35]!==a?(D=a.search(n.label),t[34]=n.label,t[35]=a,t[36]=D):D=t[36];let O;t[37]!==f||t[38]!==D?(O=(0,Y.jsx)(`label`,{htmlFor:f,className:J.visuallyHidden,children:D}),t[37]=f,t[38]=D,t[39]=O):O=t[39];let k;t[40]!==n.label||t[41]!==a?(k=a.searchPlaceholder(n.label),t[40]=n.label,t[41]=a,t[42]=k):k=t[42];let A;t[43]===Symbol.for(`react.memo_cache_sentinel`)?(A={startAdornment:(0,Y.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0})},t[43]=A):A=t[43];let j;t[44]!==s||t[45]!==i||t[46]!==f||t[47]!==k?(j=(0,Y.jsx)(_,{id:f,className:J.control,value:i,placeholder:k,slots:A,onValueChange:s}),t[44]=s,t[45]=i,t[46]=f,t[47]=k,t[48]=j):j=t[48],t[49]!==O||t[50]!==j||t[51]!==w||t[52]!==T?(v=(0,Y.jsxs)(`div`,{className:J.panelHeader,children:[w,T,O,j]}),t[49]=O,t[50]=j,t[51]=w,t[52]=T,t[53]=v):v=t[53],p=J.options,m=`group`,h=n.label;let M;t[54]!==r||t[55]!==l?(M=e=>{let t=r.pinned.includes(e.value);return(0,Y.jsx)(c,{size:`large`,className:J.option,label:e.label,checked:r.selected.includes(e.value),actions:(0,Y.jsx)(E,{className:J.optionPin,itemLabel:e.label,pinned:t,onPinnedChange:t=>l({...r,pinned:pt(r.pinned,e.value,t)})}),onCheckedChange:t=>l({...r,selected:pt(r.selected,e.value,t===!0)})},e.value)},t[54]=r,t[55]=l,t[56]=M):M=t[56],g=y.map(M),t[0]=r,t[1]=n.label,t[2]=n.operators,t[3]=n.options,t[4]=a,t[5]=l,t[6]=s,t[7]=d,t[8]=i,t[9]=f,t[10]=p,t[11]=m,t[12]=h,t[13]=g,t[14]=v}else p=t[10],m=t[11],h=t[12],g=t[13],v=t[14];let y;t[57]!==p||t[58]!==m||t[59]!==h||t[60]!==g?(y=(0,Y.jsx)(`div`,{className:p,role:m,"aria-label":h,children:g}),t[57]=p,t[58]=m,t[59]=h,t[60]=g,t[61]=y):y=t[61];let b;return t[62]!==v||t[63]!==y?(b=(0,Y.jsxs)(Y.Fragment,{children:[v,y]}),t[62]=v,t[63]=y,t[64]=b):b=t[64],b},gt=e=>{let t=(0,ct.c)(57),{open:n,fields:r,value:i,locale:a,className:o,style:s,onOpenChange:c,onChange:l,onSave:u}=e,d;t[0]===a?d=t[1]:(d={...Ve,...a},t[0]=a,t[1]=d);let f=d,[p,h]=(0,lt.useState)(r[0]?.id??``),[g,_]=(0,lt.useState)(``),[v,y]=(0,lt.useState)(n);n!==v&&(y(n),n&&(h(r[0]?.id??``),_(``)));let b;t[2]!==r||t[3]!==p?(b=r.find(e=>e.id===p)??r[0],t[2]=r,t[3]=p,t[4]=b):b=t[4];let x=b,S;t[5]===x?.id?S=t[6]:(S=e=>{e&&e!==x?.id&&(h(e),_(``))},t[5]=x?.id,t[6]=S);let C=S,w;t[7]!==l||t[8]!==i?(w=e=>{l(e,ft(i,e))},t[7]=l,t[8]=i,t[9]=w):w=t[9];let T=w,E;t[10]!==c||t[11]!==u||t[12]!==i?(E=()=>{u(i),c(!1)},t[10]=c,t[11]=u,t[12]=i,t[13]=E):E=t[13];let D=E,k;t[14]===o?k=t[15]:(k=(0,ut.default)(J.dialog,o),t[14]=o,t[15]=k);let j;t[16]===f.title?j=t[17]:(j=(0,Y.jsx)(O.Title,{children:f.title}),t[16]=f.title,t[17]=j);let M;t[18]===c?M=t[19]:(M=()=>c(!1),t[18]=c,t[19]=M);let N;t[20]!==f.close||t[21]!==M?(N=(0,Y.jsx)(m,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":f.close,onClick:M}),t[20]=f.close,t[21]=M,t[22]=N):N=t[22];let P;t[23]!==j||t[24]!==N?(P=(0,Y.jsxs)(O.Header,{className:J.header,children:[j,N]}),t[23]=j,t[24]=N,t[25]=P):P=t[25];let F=x?.id,I;if(t[26]!==r||t[27]!==f||t[28]!==i){let e;t[30]!==f||t[31]!==i?(e=e=>(0,Y.jsx)(A.Tab,{value:e.id,className:J.tab,children:(0,Y.jsx)(mt,{field:e,entry:dt(i,e),locale:f})},e.id),t[30]=f,t[31]=i,t[32]=e):e=t[32],I=r.map(e),t[26]=r,t[27]=f,t[28]=i,t[29]=I}else I=t[29];let L;t[33]===I?L=t[34]:(L=(0,Y.jsx)(A.List,{className:J.tabList,children:I}),t[33]=I,t[34]=L);let R;t[35]!==x||t[36]!==T||t[37]!==f||t[38]!==g||t[39]!==i?(R=x&&(0,Y.jsx)(A.Content,{value:x.id,className:J.panel,children:(0,Y.jsx)(ht,{field:x,entry:dt(i,x),search:g,locale:f,onSearchChange:_,onEntryChange:T})}),t[35]=x,t[36]=T,t[37]=f,t[38]=g,t[39]=i,t[40]=R):R=t[40];let z;t[41]!==C||t[42]!==F||t[43]!==L||t[44]!==R?(z=(0,Y.jsx)(O.Body,{className:J.body,children:(0,Y.jsxs)(A,{className:J.tabs,value:F,onValueChange:C,children:[L,R]})}),t[41]=C,t[42]=F,t[43]=L,t[44]=R,t[45]=z):z=t[45];let B;t[46]!==D||t[47]!==f.save?(B=(0,Y.jsx)(O.Footer,{className:J.footer,children:(0,Y.jsx)(O.Actions,{children:(0,Y.jsx)(m,{variant:`primary`,size:`medium`,onClick:D,children:f.save})})}),t[46]=D,t[47]=f.save,t[48]=B):B=t[48];let V;return t[49]!==c||t[50]!==n||t[51]!==s||t[52]!==P||t[53]!==z||t[54]!==B||t[55]!==k?(V=(0,Y.jsxs)(O,{open:n,dividers:!0,closeOnInteractOutside:!0,className:k,style:s,onOpenChange:c,children:[P,z,B]}),t[49]=c,t[50]=n,t[51]=s,t[52]=P,t[53]=z,t[54]=B,t[55]=k,t[56]=V):V=t[56],V},gt.displayName=`DsFiltersBar.FiltersDialog`})))()}function vt(){return(vt=t((()=>{_t()})))()}var yt;function bt(){return(bt=t((()=>{yt=Object.freeze({addFilter:`Add filter`,removeCondition:e=>`Remove filter: ${e}`,filtersDialogTitle:`Filters`,saveFilters:`Save filters`,filtersDialog:Object.freeze({})})})))()}var xt,St,Ct,wt,Tt,Et;function Dt(){return(Dt=t((()=>{xt=i(),St=e(a(),1),Ct=n(),p(),F(),K(),Be(),vt(),bt(),wt=r(),Tt=Object.freeze([]),Et=e=>{let t=(0,xt.c)(35),{locale:n,className:r,style:i}=e,{fields:a,conditions:o,pins:s,setConditions:c,setPins:l}=P(),u;t[0]===n?u=t[1]:(u={...yt,...n},t[0]=n,t[1]=u);let d=u,[f,p]=(0,Ct.useState)(!1),[h,g]=(0,Ct.useState)(Tt),_;t[2]!==o||t[3]!==a||t[4]!==s?(_=()=>{g(Le(a,o,s)),p(!0)},t[2]=o,t[3]=a,t[4]=s,t[5]=_):_=t[5];let v=_,y;t[6]!==o||t[7]!==a||t[8]!==s||t[9]!==c||t[10]!==l?(y=e=>{let t=ze(a,o,s,e);c(t.conditions),l(t.pins)},t[6]=o,t[7]=a,t[8]=s,t[9]=c,t[10]=l,t[11]=y):y=t[11];let b=y,x;t[12]===r?x=t[13]:(x=(0,St.default)(oe.conditions,r),t[12]=r,t[13]=x);let S;t[14]!==v||t[15]!==d.addFilter?(S=(0,wt.jsx)(m,{variant:`secondary`,color:`default`,size:`small`,icon:`add`,"aria-label":d.addFilter,onClick:v}),t[14]=v,t[15]=d.addFilter,t[16]=S):S=t[16];let C;t[17]===a?C=t[18]:(C=Ne(a),t[17]=a,t[18]=C);let w;t[19]!==d.filtersDialog||t[20]!==d.filtersDialogTitle||t[21]!==d.saveFilters?(w={...d.filtersDialog,title:d.filtersDialogTitle,save:d.saveFilters},t[19]=d.filtersDialog,t[20]=d.filtersDialogTitle,t[21]=d.saveFilters,t[22]=w):w=t[22];let T;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(T=(e,t)=>g(t),t[23]=T):T=t[23];let E;t[24]!==h||t[25]!==b||t[26]!==f||t[27]!==C||t[28]!==w?(E=(0,wt.jsx)(gt,{open:f,fields:C,value:h,locale:w,onOpenChange:p,onChange:T,onSave:b}),t[24]=h,t[25]=b,t[26]=f,t[27]=C,t[28]=w,t[29]=E):E=t[29];let D;return t[30]!==i||t[31]!==x||t[32]!==S||t[33]!==E?(D=(0,wt.jsxs)(`div`,{className:x,style:i,children:[S,E]}),t[30]=i,t[31]=x,t[32]=S,t[33]=E,t[34]=D):D=t[34],D},Et.displayName=`DsFiltersBar.Conditions`})))()}function Ot(){return(Ot=t((()=>{Dt()})))()}var kt;function At(){return(At=t((()=>{kt=class extends Error{error;constructor(e,t,n,r,i){super(t),this.error={code:t,from:n,to:r,text:i??e.slice(n,r)}}}})))()}var jt,Mt,Nt,Pt,Ft,It;function Lt(){return(Lt=t((()=>{Be(),jt=e=>e.kind===`clause`||e.kind===`search`,Mt=e=>jt(e)?[e]:e.kind===`and`&&e.children.every(jt)?e.children.filter(jt):null,Nt=e=>typeof e==`object`&&`from`in e?[e.from,e.to]:e,Pt=e=>JSON.stringify(e.kind===`search`?[e.kind,e.text]:[e.kind,e.field,e.subfield??null,e.operator,Nt(e.value)]),Ft=(e,t)=>e.kind===`search`?{kind:`search`,id:t,text:e.text}:{kind:`field`,id:t,field:e.field,...e.subfield&&{subfield:e.subfield},operator:e.operator,value:e.value},It=(e,t)=>{let n=Mt(e);if(!n)return null;let r=new Map;for(let e of t){let t=Pt(e);r.set(t,[...r.get(t)??[],e.id])}return n.map(e=>{let t=Ft(e,``),n=r.get(Pt(t))?.shift();return{...t,id:n??ke()}})}})))()}var Rt,zt,Bt,Vt,Ht,Ut,Wt,Gt,Kt,qt,Jt;function Yt(){return(Yt=t((()=>{Rt=`"`,zt=`\\`,Bt=/\s/,Vt=/[\s()",=!<>~]/,Ht=Object.freeze({"(":`openParen`,")":`closeParen`,",":`comma`}),Ut=Object.freeze([`!=`,`!~`,`>=`,`<=`,`=`,`>`,`<`,`~`]),Wt=(e,t)=>{let n=``,r=t+1;for(;r<e.length;){let i=e.charAt(r);if(i===zt&&r+1<e.length){n+=e.charAt(r+1),r+=2;continue}if(i===Rt)return{kind:`string`,value:n,from:t,to:r+1};n+=i,r+=1}return{kind:`unterminated`,value:n,from:t,to:e.length}},Gt=(e,t)=>{let n=t;for(;n<e.length&&!Vt.test(e.charAt(n));)n+=1;return{kind:`word`,value:e.slice(t,n),from:t,to:n}},Kt=(e,t)=>{let n=t;for(;n<e.length&&Bt.test(e.charAt(n));)n+=1;return n},qt=(e,t)=>{let n=t.value.toUpperCase();if(n===`AND`||n===`OR`)return{...t,kind:n===`AND`?`and`:`or`,value:n};if(n===`IN`)return{...t,kind:`operator`,value:`IN`};if(n!==`NOT`)return t;let r=Gt(e,Kt(e,t.to));return r.value.toUpperCase()===`IN`?{kind:`operator`,value:`NOT IN`,from:t.from,to:r.to}:{...t,kind:`not`,value:n}},Jt=e=>{let t=[],n=Kt(e,0);for(;n<e.length;){let r=e.charAt(n),i=Ht[r],a=Ut.find(t=>e.startsWith(t,n)),o;o=i?{kind:i,value:r,from:n,to:n+1}:r===Rt?Wt(e,n):a?{kind:`operator`,value:a,from:n,to:n+a.length}:Vt.test(r)?{kind:`unknown`,value:r,from:n,to:n+1}:qt(e,Gt(e,n)),t.push(o),n=Kt(e,o.to)}return t}})))()}var Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn;function cn(){return(cn=t((()=>{At(),Xt=`.`,Zt=/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/,Qt=/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/,$t=(e,t)=>e.toLowerCase()===t.toLowerCase(),en=(e,t)=>e.find(e=>$t(e.value,t))??e.find(e=>$t(e.label,t)),tn=10,nn=e=>{if(!Qt.test(e)||Number.isNaN(Date.parse(e)))return!1;let t=e.slice(0,tn);return new Date(`${t}T00:00:00Z`).toISOString().startsWith(t)},rn=Object.freeze({IN:`=`,"NOT IN":`!=`,">=":`=`,"<=":`=`}),an=(e,t)=>{let n=rn[t],r=t===`IN`||t===`NOT IN`?e.type===`enum`:e.type===`number`||e.type===`date`;return n&&r&&e.operators.some(e=>e.value===n)?n:null},on=(e,t)=>e!==`>=`&&e!==`<=`?t:typeof t==`number`||typeof t==`string`?(e===`>=`?`from`:`to`)==`from`?{from:t,to:null}:{from:null,to:t}:t,sn=(e,t,n)=>{let r=(t,n)=>{throw new kt(e,t,n.from,n.to,n.text)},i=e=>{let t=n.find(t=>$t(t.id,e.text));if(t?.type===`compound`)return r(`subfieldRequired`,e);if(t)return{field:t.id,scalar:t};let i=e.text.indexOf(Xt),a=i===-1?void 0:n.find(t=>$t(t.id,e.text.slice(0,i)));if(!a)return r(`unknownField`,e);let o={text:e.text.slice(i+1),from:e.from+i+1,to:e.to},s=a.type===`compound`?a.subfields.find(e=>$t(e.id,o.text)):void 0;return s?{field:a.id,subfield:s.id,scalar:s}:r(`unknownSubfield`,o)},a=(e,t)=>{let[n]=t.values;switch(e.type){case`enum`:return t.values.map(t=>en(e.options,t.text)?.value??r(`unknownOption`,t));case`number`:{let e=Number(n.text);return Zt.test(n.text)&&Number.isFinite(e)?e:r(`notANumber`,n)}case`date`:{let t=en(e.presets??[],n.text);return t?t.value:nn(n.text)?n.text:r(`invalidDate`,n)}default:return n.text}},o=e=>{let{field:t,subfield:n,scalar:o}=i(e.field),s=e.operator.text;e.list&&o.type!==`enum`&&r(`operatorNotAllowed`,e.operator);let c=o.operators.some(e=>e.value===s),l=c?s:an(o,s)??r(`operatorNotAllowed`,e.operator),u=a(o,e);return!c&&(s===`>=`||s===`<=`)&&typeof u==`string`&&!nn(u)&&r(`operatorNotAllowed`,e.operator),{kind:`clause`,field:t,...n&&{subfield:n},operator:l,value:c?u:on(s,u),from:e.from,to:e.to}},s=e=>{switch(e.kind){case`clause`:return o(e);case`search`:return e;case`group`:return{kind:`group`,child:s(e.child)};default:return{kind:e.kind,children:e.children.map(s)}}};return s(t)}})))()}var ln,un,dn,fn,pn;function mn(){return(mn=t((()=>{Se(),At(),Lt(),Yt(),cn(),ln=Object.freeze([`IN`,`NOT IN`]),un=e=>ve.some(t=>t===e),dn=e=>({text:e.value,from:e.from,to:e.to}),fn=(e,t)=>{let n=0,r=(t,n)=>{throw new kt(e,t,n.from,n.to)},i=()=>t[n],a=e=>r(e.kind===`unterminated`?`unterminatedString`:`unexpectedToken`,e),o=()=>i()??r(`unexpectedEnd`,{from:e.length,to:e.length}),s=e=>{let t=o();return t.kind!==e&&a(t),n+=1,t},c=()=>{let e=o();return e.kind!==`string`&&e.kind!==`word`?a(e):(n+=1,dn(e))},l=()=>{let e=o();e.kind!==`openParen`&&r(`listExpected`,e),n+=1;let t=i();t?.kind===`closeParen`&&r(`emptyList`,{from:e.from,to:t.to});let a=c(),l=[];for(;i()?.kind===`comma`;)n+=1,l.push(c());return{values:[a,...l],to:s(`closeParen`).to}},u=()=>{let e=c();return{values:[e],to:e.to}},d=()=>{let e=s(`word`),t=s(`operator`),n=t.value;if(!un(n))return a(t);let r=ln.includes(n),{values:i,to:o}=r?l():u();return{kind:`clause`,field:dn(e),operator:{...dn(t),text:n},values:i,list:r,from:e.from,to:o}},f=()=>{let e=o();if(e.kind===`openParen`){n+=1;let e=h();return s(`closeParen`),{kind:`group`,child:e}}return e.kind===`string`?(n+=1,{kind:`search`,text:e.value,from:e.from,to:e.to}):e.kind===`word`?d():a(e)},p=(e,t)=>{let r=t(),a=[];for(;i()?.kind===e;)n+=1,a.push(t());return a.length?{kind:e,children:[r,...a]}:r},m=()=>p(`and`,f);function h(){return p(`or`,m)}if(!t.length)return{kind:`and`,children:[]};let g=h(),_=i();return _&&a(_),g},pn=(e,t,n=[])=>{try{let r=sn(e,fn(e,Jt(e)),t);return{ok:!0,node:r,conditions:It(r,n)}}catch(e){if(e instanceof kt)return{ok:!1,error:e.error};throw e}}})))()}var hn,gn,_n,vn,yn,bn;function xn(){return(xn=t((()=>{hn=` AND `,gn=e=>`"${e.replace(/[\\"]/g,e=>`\\${e}`)}"`,_n=e=>typeof e==`number`?String(e):gn(e),vn=e=>typeof e==`object`&&`from`in e,yn=e=>{let{value:t,operator:n}=e,r=e.subfield?`${e.field}.${e.subfield}`:e.field;if(vn(t))return t.from===null&&t.to===null?`${r} = ()`:[t.from===null?``:`${r} >= ${_n(t.from)}`,t.to===null?``:`${r} <= ${_n(t.to)}`].filter(Boolean).join(hn);if(typeof t!=`object`)return`${r} ${n} ${_n(t)}`;let[i,...a]=t,o=n===`!=`||n===`NOT IN`;return t.length?i!==void 0&&!a.length&&(n===`=`||n===`!=`)?`${r} ${n} ${_n(i)}`:`${r} ${o?`NOT IN`:`IN`} (${t.map(_n).join(`, `)})`:`${r} ${o?`NOT IN`:`IN`} ()`},bn=e=>e.map(e=>e.kind===`search`?gn(e.text):yn(e)).filter(Boolean).join(hn)})))()}function Sn(){return(Sn=t((()=>{mn(),xn()})))()}var Cn,wn;function Tn(){return(Tn=t((()=>{Cn=`_root_1mpdz_1`,wn={root:Cn}})))()}var En;function Dn(){return(Dn=t((()=>{En=Object.freeze({label:`Advanced query`,placeholder:`status = "Active" AND trigger = "Scheduled"`,searchPlaceholder:`Search in query`,errors:Object.freeze({unexpectedToken:e=>`Unexpected “${e}”`,unexpectedEnd:()=>`The query is incomplete`,unterminatedString:()=>`Close the quoted value with "`,unknownField:e=>`Unknown field “${e}”`,unknownSubfield:e=>`Unknown subfield “${e}”`,subfieldRequired:e=>`Name a subfield of “${e}” after a dot`,operatorNotAllowed:e=>`“${e}” can’t be used with this field`,unknownOption:e=>`“${e}” is not a value of this field`,notANumber:e=>`“${e}” is not a number`,invalidDate:e=>`“${e}” is not a date or a date preset`,listExpected:()=>`Put the values in parentheses, as in IN ("a", "b")`,emptyList:()=>`Add at least one value to the list`}),help:`Query syntax`,helpOperators:`Operators`,helpCombine:`Join clauses with AND or OR, and group them with parentheses. OR and parentheses lock the filters and builder views.`,helpSearch:`A quoted value on its own searches all text, as in "timeout".`,helpExample:`Example`,operators:Object.freeze({"=":`equals`,"!=":`not equals`,">":`greater than`,">=":`greater than or equals`,"<":`less than`,"<=":`less than or equals`,IN:`is one of`,"NOT IN":`is none of`,"~":`contains`,"!~":`does not contain`})})})))()}var On,kn,An,jn;function Mn(){return(Mn=t((()=>{On=`_operators_2muaf_5`,kn=`_operator_2muaf_5`,An=`_example_2muaf_27`,jn={operators:On,operator:kn,example:An}})))()}var Nn,Pn,Fn,In,Ln,Rn,zn;function Bn(){return(Bn=t((()=>{Sn(),Nn=2,Pn=10,Fn=`2026-01-01`,In=`value`,Ln=`"timeout"`,Rn=e=>{switch(e.type){case`enum`:return e.options.slice(0,1).map(e=>e.value);case`number`:return Pn;case`date`:return e.presets?.[0]?.value??Fn;default:return In}},zn=e=>{let t=e.slice(0,Nn).flatMap(e=>{let t=e.type===`compound`?e.subfields[0]:void 0,n=e.type===`compound`?t:e,r=n?.operators[0];return!n||!r?[]:[{kind:`field`,id:e.id,field:e.id,...t&&{subfield:t.id},operator:r.value,value:Rn(n)}]});return bn(t)||Ln}})))()}function Vn(e){e.preventDefault()}function Hn(e){e.preventDefault()}var Un,X,Wn,Gn;function Kn(){return(Kn=t((()=>{Un=i(),p(),C(),h(),f(),Se(),Mn(),Bn(),X=r(),Wn=360,Gn=e=>{let t=(0,Un.c)(17),{fields:n,locale:r,content:i}=e,a;t[0]===r.help?a=t[1]:(a=(0,X.jsx)(S.Trigger,{children:(0,X.jsx)(m,{variant:`tertiary`,size:`small`,icon:`help`,"aria-label":r.help,onPointerDown:Hn})}),t[0]=r.help,t[1]=a);let o;t[2]!==i||t[3]!==n||t[4]!==r.help||t[5]!==r.helpCombine||t[6]!==r.helpExample||t[7]!==r.helpOperators||t[8]!==r.helpSearch||t[9]!==r.operators?(o=i??(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(S.Header,{children:r.help}),(0,X.jsx)(S.Content,{children:(0,X.jsxs)(g,{direction:`column`,gap:`var(--sm)`,children:[(0,X.jsxs)(g,{direction:`column`,gap:`var(--xs)`,children:[(0,X.jsx)(d,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpOperators}),(0,X.jsx)(`dl`,{className:jn.operators,children:ve.map(e=>(0,X.jsxs)(`div`,{className:jn.operator,children:[(0,X.jsx)(`dt`,{children:(0,X.jsx)(d,{variant:`code-sm-reg`,color:`main`,children:e})}),(0,X.jsx)(`dd`,{children:r.operators[e]})]},e))})]}),(0,X.jsx)(d,{variant:`body-sm-reg`,color:`secondary`,children:r.helpCombine}),(0,X.jsx)(d,{variant:`body-sm-reg`,color:`secondary`,children:r.helpSearch}),(0,X.jsxs)(g,{direction:`column`,gap:`var(--xs)`,children:[(0,X.jsx)(d,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpExample}),(0,X.jsx)(d,{variant:`code-sm-reg`,color:`main`,className:jn.example,children:zn(n)})]})]})})]}),t[2]=i,t[3]=n,t[4]=r.help,t[5]=r.helpCombine,t[6]=r.helpExample,t[7]=r.helpOperators,t[8]=r.helpSearch,t[9]=r.operators,t[10]=o):o=t[10];let s;t[11]!==r.help||t[12]!==o?(s=(0,X.jsx)(S.Panel,{width:Wn,"aria-label":r.help,children:o}),t[11]=r.help,t[12]=o,t[13]=s):s=t[13];let c;return t[14]!==a||t[15]!==s?(c=(0,X.jsxs)(S.Root,{side:`bottom`,align:`end`,onOpenAutoFocus:Vn,children:[a,s]}),t[14]=a,t[15]=s,t[16]=c):c=t[16],c}})))()}function qn(){return(qn=t((()=>{Kn()})))()}var Jn,Yn,Xn,Zn,Qn,$n,er;function tr(){return(tr=t((()=>{Jn=i(),Yn=n(),Xn=e(a(),1),T(),F(),Sn(),Tn(),Dn(),qn(),Zn=r(),Qn=300,$n=e=>{let t=(0,Jn.c)(16),{disabled:n,locale:r,slots:i,className:a,style:o}=e,s=n!==void 0&&n,c=P(),l={...En,...r,errors:{...En.errors,...r?.errors},operators:{...En.operators,...r?.operators}},[u,d]=(0,Yn.useState)(null),[f,p]=(0,Yn.useState)(null),[m,h]=(0,Yn.useState)(!1),g=(0,Yn.useRef)(void 0),_=(0,Yn.useRef)(c),v;t[0]===c?v=t[1]:(v=()=>{_.current=c},t[0]=c,t[1]=v),(0,Yn.useEffect)(v);let y,b;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(y=()=>()=>clearTimeout(g.current),b=[],t[2]=y,t[3]=b):(y=t[2],b=t[3]),(0,Yn.useEffect)(y,b);let x=u&&(m||u.base===c.queryText)?u:null,S=x?f:null,C;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(C=e=>{let t=_.current,n=pn(e,t.fields,t.conditions);if(!n.ok)return p(n.error),!1;p(null);let{conditions:r}=n;r?(r.length===t.conditions.length&&r.every((e,n)=>e.id===t.conditions[n]?.id)||t.setConditions(r),t.query!==null&&t.setQuery(null)):t.query!==e&&t.setQuery(e);let i=r?bn(r):e;return d(t=>t?.text===e?{text:e,base:i}:t),!0},t[4]=C):C=t[4];let T=C,E;t[5]!==x?.base||t[6]!==c.queryText?(E=e=>{d({text:e,base:x?.base??c.queryText}),clearTimeout(g.current),g.current=setTimeout(()=>{g.current=void 0,T(e)},Qn)},t[5]=x?.base,t[6]=c.queryText,t[7]=E):E=t[7];let D=E,O;t[8]!==x||t[9]!==u?(O=()=>{h(!0),u&&!x&&(d(null),p(null))},t[8]=x,t[9]=u,t[10]=O):O=t[10];let k=O,A;t[11]!==x||t[12]!==f?(A=()=>{if(h(!1),!x)return;let e=g.current!==void 0;clearTimeout(g.current),g.current=void 0,(e?T(x.text):f===null)&&d(null)},t[11]=x,t[12]=f,t[13]=A):A=t[13];let j=A,M=l.label,N;return t[14]===a?N=t[15]:(N=(0,Xn.default)(wn.root,a),t[14]=a,t[15]=N),(0,Zn.jsx)(w,{label:M,hideLabel:!0,status:S?`error`:void 0,message:S?l.errors[S.code](S.text):void 0,messageIcon:`error`,className:N,style:o,children:(0,Zn.jsx)(w.CodeInput,{value:x?.text??c.queryText,placeholder:l.placeholder,disabled:s,invalid:S!==null,locale:{searchPlaceholder:l.searchPlaceholder,codeLabel:l.label},slots:{endAdornment:(0,Zn.jsx)(Gn,{fields:c.fields,locale:l,content:i?.help})},onValueChange:D,onFocus:k,onBlur:j})})},er=e=>{let t=(0,Jn.c)(3),{resetRevision:n}=P(),r;return t[0]!==e||t[1]!==n?(r=(0,Zn.jsx)($n,{...e},n),t[0]=e,t[1]=n,t[2]=r):r=t[2],r},er.displayName=`DsFiltersBar.Query`})))()}function nr(){return(nr=t((()=>{tr()})))()}function rr(){return(rr=t((()=>{L(),V(),te(),ne(),G(),ue(),fe(),me(),_e(),Ot(),nr()})))()}function ir(e){return e+1}var ar,or,sr,cr,lr,ur,dr,fr,pr,Z;function mr(){return(mr=t((()=>{ar=i(),or=e(a(),1),sr=n(),b(),rr(),F(),K(),Se(),Be(),Sn(),cr=r(),lr=Object.freeze([]),ur=Object.freeze([]),dr=Object.freeze([]),fr=(e,t,n)=>{let r=(0,ar.c)(7),[i,a]=y(e,t,n),o;r[0]!==t||r[1]!==a||r[2]!==e?(o=n=>{a(n),e===void 0&&t?.(n)},r[0]=t,r[1]=a,r[2]=e,r[3]=o):o=r[3];let s=o,c;return r[4]!==i||r[5]!==s?(c=[i,s],r[4]=i,r[5]=s,r[6]=c):c=r[6],c},pr=e=>{let t=(0,ar.c)(50),{fields:n,conditions:r,defaultConditions:i,query:a,defaultQuery:o,pins:s,defaultPins:c,expanded:l,defaultExpanded:u,view:d,defaultView:f,locale:p,ref:m,className:h,style:g,children:_,onConditionsChange:v,onQueryChange:y,onPinsChange:b,onExpandedChange:x,onViewChange:S}=e,C=n===void 0?lr:n,w=i===void 0?ur:i,T=o===void 0?null:o,E=c===void 0?dr:c,D=u!==void 0&&u,O=f===void 0?`filters`:f,[k,A]=fr(r,v,w),[j,M]=fr(a,y,T),[P,F]=fr(s,b,E),[I,L]=fr(l,x,D),[R,z]=fr(d,S,O),B=(0,sr.useId)(),V;t[0]===p?V=t[1]:(V={...xe,...p},t[0]=p,t[1]=V);let H=V,[ee,te]=(0,sr.useState)(0),U;t[2]!==k||t[3]!==j?(U=j??bn(k),t[2]=k,t[3]=j,t[4]=U):U=t[4];let ne=j===null&&k.length===0,W;t[5]===j?W=t[6]:(W=Oe(j),t[5]=j,t[6]=W);let G,re,ie;t[7]!==k||t[8]!==A?(G=e=>A(Ae(k,e)),re=e=>A(je(k,e)),ie=e=>A(Me(k,e)),t[7]=k,t[8]=A,t[9]=G,t[10]=re,t[11]=ie):(G=t[9],re=t[10],ie=t[11]);let ae;t[12]===M?ae=t[13]:(ae=e=>M(De(e)),t[12]=M,t[13]=ae);let K;t[14]!==A||t[15]!==M?(K=()=>{te(ir),A(ur),M(null)},t[14]=A,t[15]=M,t[16]=K):K=t[16];let se;t[17]!==k||t[18]!==I||t[19]!==C||t[20]!==H||t[21]!==P||t[22]!==j||t[23]!==ee||t[24]!==A||t[25]!==L||t[26]!==F||t[27]!==z||t[28]!==W||t[29]!==G||t[30]!==re||t[31]!==ie||t[32]!==ae||t[33]!==K||t[34]!==U||t[35]!==ne||t[36]!==B||t[37]!==R?(se={fields:C,conditions:k,query:j,queryText:U,resetRevision:ee,pins:P,isEmpty:ne,lockedViews:W,expanded:I,view:R,toolbarId:B,locale:H,setConditions:A,addCondition:G,updateCondition:re,removeCondition:ie,setQuery:ae,setPins:F,clear:K,setExpanded:L,setView:z},t[17]=k,t[18]=I,t[19]=C,t[20]=H,t[21]=P,t[22]=j,t[23]=ee,t[24]=A,t[25]=L,t[26]=F,t[27]=z,t[28]=W,t[29]=G,t[30]=re,t[31]=ie,t[32]=ae,t[33]=K,t[34]=U,t[35]=ne,t[36]=B,t[37]=R,t[38]=se):se=t[38];let ce=H.label,le;t[39]===h?le=t[40]:(le=(0,or.default)(oe.root,h),t[39]=h,t[40]=le);let q;t[41]!==_||t[42]!==H.label||t[43]!==m||t[44]!==g||t[45]!==le?(q=(0,cr.jsx)(`div`,{ref:m,role:`region`,"aria-label":ce,className:le,style:g,children:_}),t[41]=_,t[42]=H.label,t[43]=m,t[44]=g,t[45]=le,t[46]=q):q=t[46];let ue;return t[47]!==se||t[48]!==q?(ue=(0,cr.jsx)(N.Provider,{value:se,children:q}),t[47]=se,t[48]=q,t[49]=ue):ue=t[49],ue},pr.displayName=`DsFiltersBar.Root`,Z={Root:pr,Summary:W,Toolbar:q,SavedFilters:H,SaveFilter:ee,Search:U,ViewSwitch:pe,View:de,Conditions:Et,Builder:he,Query:er,ClearAll:I,Pinned:R,PinnedGroup:z,PinnedToggle:B}})))()}function hr(){return(hr=t((()=>{mr()})))()}var Q,$,gr,_r,vr,yr,br,xr,Sr;function Cr(){return(Cr=t((()=>{hr(),Se(),Q=r(),{fn:$}=__STORYBOOK_MODULE_TEST__,gr={title:`Components/FiltersBar`,component:Z.Root,tags:[`!manifest`],parameters:{layout:`padded`,docs:{description:{component:'\n**Work in progress — the API is wired, but only some parts render.** `Root`, `Toolbar`, the\nadd-filter button with its filters dialog in `Conditions`, and the advanced query view render; the\nother parts render nothing yet. Until `ViewSwitch` renders, the stories place the advanced view\ndirectly under `Root`.\n\n**Internal component.** Not exported from `@drivenets/design-system` while it is being built.\n\nA toolbar above a table or list for narrowing the data with filters, a query builder or an advanced\nquery, with **Saved filters** and a pinned row of quick toggles.\n\n**One filter document.** `Root` owns `conditions` and `query` (controlled or uncontrolled)\nand describes what can be filtered through `fields`. Every view reads and writes that same\ndocument, so a condition built in the query builder shows as a chip in the filters view and in the\ncollapsed summary.\n\n**One query language.** The advanced view writes the conditions as query text and checks what the\nuser types against `fields`: `status IN ("active", "pending") AND input.vendor ~ "cisco"`.\nOnly a valid query reaches the document. One made of clauses joined by `AND` becomes conditions;\none with `OR` or parentheses becomes `query`, the only source, and the filters and builder\nviews lock until it is cleared. Evaluate such a query with `parseFilterQuery(query, fields)`.\n\n**Pins are a user preference,** not part of the document: loading a saved filter or clearing leaves\nthem alone.\n\n**Collapsed shows a summary, expanded shows the toolbar.** `Summary` renders while collapsed,\n`Toolbar` while expanded; `Pinned` renders in both.\n                '}}},argTypes:{expanded:{control:`boolean`},defaultExpanded:{control:`boolean`},view:{control:`select`,options:be},defaultView:{control:`select`,options:be},children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},onConditionsChange:{table:{disable:!0}},onQueryChange:{table:{disable:!0}},onPinsChange:{table:{disable:!0}},onExpandedChange:{table:{disable:!0}},onViewChange:{table:{disable:!0}}},args:{onConditionsChange:$(),onQueryChange:$(),onPinsChange:$(),onExpandedChange:$(),onViewChange:$()}},_r={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]},{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`}]}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`},{kind:`field`,id:`c2`,field:`status`,operator:`!=`,value:[`active`]},{kind:`field`,id:`c3`,field:`input`,subfield:`name`,operator:`~`,value:`WF456`},{kind:`field`,id:`c4`,field:`lastRun`,operator:`=`,value:`last7Days`}],defaultPins:[{field:`status`,value:`active`},{field:`status`,value:`pending`}]},render:e=>(0,Q.jsxs)(Z.Root,{...e,children:[(0,Q.jsx)(Z.Summary,{count:18}),(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.SavedFilters,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onValueChange:$(),onClear:$(),onRename:$(),onDelete:$()}),(0,Q.jsx)(Z.Search,{}),(0,Q.jsx)(Z.ViewSwitch,{}),(0,Q.jsx)(Z.View,{value:`filters`,children:(0,Q.jsx)(Z.Conditions,{})}),(0,Q.jsx)(Z.View,{value:`builder`,children:(0,Q.jsx)(Z.Builder,{suggestedFields:[`input`,`status`]})}),(0,Q.jsx)(Z.SaveFilter,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onUpdate:$(),onSaveAs:$()}),(0,Q.jsx)(Z.ClearAll,{})]}),(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})}),(0,Q.jsx)(Z.Pinned,{children:(0,Q.jsxs)(Z.PinnedGroup,{label:`Status`,children:[(0,Q.jsx)(Z.PinnedToggle,{label:`Active`,count:10,active:!0}),(0,Q.jsx)(Z.PinnedToggle,{label:`Pending`,count:0,active:!1})]})})]})},vr={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`},{value:`draft`,label:`Draft`}]},{type:`enum`,id:`workflow`,label:`Workflow`,operators:[{value:`IN`,label:`is any of`,symbol:`∈`},{value:`NOT IN`,label:`is none of`,symbol:`∉`}],options:[{value:`deploy`,label:`Deploy`},{value:`backup`,label:`Backup`},{value:`upgrade`,label:`Upgrade`},{value:`rollback`,label:`Rollback`},{value:`healthCheck`,label:`Health check`},{value:`provision`,label:`Provision`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`,symbol:`=`}],options:[{value:`manual`,label:`Manual`},{value:`scheduled`,label:`Scheduled`},{value:`api`,label:`API`},{value:`webhook`,label:`Webhook`}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`!=`,value:[`deprecated`,`draft`]},{kind:`field`,id:`c2`,field:`trigger`,operator:`=`,value:[`scheduled`]}],defaultPins:[{field:`status`,value:`active`},{field:`workflow`,value:`deploy`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.Toolbar,{children:(0,Q.jsx)(Z.Conditions,{})})})},yr={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`},{value:`!=`,label:`not equals`},{value:`IN`,label:`is one of`},{value:`NOT IN`,label:`is none of`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`},{value:`<`,label:`less than`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`},{value:`~`,label:`contains`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`IN`,value:[`active`,`pending`]},{kind:`field`,id:`c2`,field:`input`,subfield:`vendor`,operator:`~`,value:`cisco`},{kind:`search`,id:`c3`,text:`timeout`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})})})},br={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`}],options:[{value:`scheduled`,label:`Scheduled`}]}],defaultQuery:`status = "active" OR trigger = "scheduled"`},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})})})},xr={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]}],locale:{label:`Refine results`,expand:`Show refinements`,collapse:`Hide refinements`}},render:e=>(0,Q.jsxs)(Z.Root,{...e,children:[(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.Search,{locale:{label:`Find`,placeholder:`Press ‘/’ to find`}}),(0,Q.jsx)(Z.ViewSwitch,{locale:{views:{filters:`Quick filters`,builder:`Guided query`,advanced:`Query editor`}}}),(0,Q.jsx)(Z.ClearAll,{locale:{label:`Reset`}})]}),(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{locale:{label:`Query editor`,placeholder:`status = "Active"`,help:`Syntax`}})})]})},Sr=[`Default`,`FiltersDialog`,`AdvancedQuery`,`LockedViews`,`Localized`],_r.parameters={..._r.parameters,docs:{..._r.parameters?.docs,source:{originalSource:`{
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
}`,..._r.parameters?.docs?.source},description:{story:"The canonical layout. `fields` describes what can be filtered; `defaultConditions` seeds the\ndocument with a search, an enum, a compound-field and a date-preset condition — one of each shape.\nOnly the advanced query renders for now; the other parts are in progress.",..._r.parameters?.docs?.description}}},vr.parameters={...vr.parameters,docs:{...vr.parameters?.docs,source:{originalSource:`{
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
}`,...vr.parameters?.docs?.source},description:{story:`The "+" button in \`Conditions\` opens the filters dialog: one tab per enum field, with an operator,
an option search, and a checkbox and pin per option. Edits stay a draft until **Save filters**
writes one condition per field with checked options and the pins back to the document; closing any
other way drops the draft. Search and non-enum conditions are left as they are.`,...vr.parameters?.docs?.description}}},yr.parameters={...yr.parameters,docs:{...yr.parameters?.docs,source:{originalSource:`{
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
}`,...yr.parameters?.docs?.source},description:{story:"The advanced view shows the conditions as query text. Edit it: a query joined by `AND` goes back\nto the conditions, and one that breaks the rules shows why under the field.",...yr.parameters?.docs?.description}}},br.parameters={...br.parameters,docs:{...br.parameters?.docs,source:{originalSource:`{
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
}`,...br.parameters?.docs?.source},description:{story:"A query with `OR` or parentheses cannot be shown as conditions, so it becomes the only source:\nthe conditions are ignored and the filters and builder views lock until the query is cleared.",...br.parameters?.docs?.description}}},xr.parameters={...xr.parameters,docs:{...xr.parameters?.docs,source:{originalSource:`{
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
}`,...xr.parameters?.docs?.source},description:{story:"`Root` takes its own strings through `locale`; each part takes its own `locale` too.",...xr.parameters?.docs?.description}}}})))()}Cr();export{yr as AdvancedQuery,_r as Default,vr as FiltersDialog,xr as Localized,br as LockedViews,Sr as __namedExportsOrder,gr as default};