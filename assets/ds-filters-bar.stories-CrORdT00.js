import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-3ro52sFA.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-icon-bcfYfeHA.js";import{t as c}from"./ds-number-input-oE0hO_5Z.js";import{t as l}from"./ds-dropdown-menu-D6vjF2GM.js";import{n as u,t as d}from"./ds-checkbox-bgSqAFvE.js";import{t as f}from"./ds-select-B5gw0xuT.js";import{t as p}from"./ds-radio-group-Bs8_Cn3I.js";import{a as m,i as h,n as g,t as _}from"./ds-typography-CnxBP-y_.js";import{n as v,t as y}from"./ds-button-v3-DjVtNDbR.js";import{n as b,t as x}from"./ds-stack-D4yCn6a3.js";import{t as S}from"./ds-text-input-DQOBYqFr.js";import{t as C}from"./ds-text-input-Di69g-Kw.js";import{t as w}from"./ds-dropdown-menu-DhaCCtQd.js";import{n as T,t as E}from"./use-controlled-CNEmuIQZ.js";import{t as D}from"./ds-select-DmqlANBX.js";import{t as O}from"./ds-popover-EvjcIn-r.js";import{t as k}from"./ds-popover-fFRLZvRW.js";import{r as A,t as j}from"./ds-form-control-zEtns110.js";import{t as M}from"./ds-date-input-nlHKeJ5s.js";import{t as N}from"./ds-date-input-DajmKcjC.js";import{t as P}from"./ds-form-control-DPo_fmYB.js";import{n as ee,t as F}from"./ds-pin-toggle-BxUHFhvq.js";import{t as I}from"./ds-tag-P8p4QuZJ.js";import{t as L}from"./ds-tag-D2v9I1fm.js";import{t as R}from"./ds-modal-y5hw6wZ7.js";import{t as z}from"./ds-modal-BYS8Jan9.js";import{t as B}from"./ds-radio-group-BxTbr5L6.js";import{t as V}from"./ds-vertical-tabs-D7u8o4Lo.js";import{t as H}from"./ds-vertical-tabs-shk4j-tG.js";var U,te,W;function G(){return(G=t((()=>{U=n(),te=(0,U.createContext)(null),W=()=>{let e=(0,U.useContext)(te);if(!e)throw Error(`DsFiltersBar compound components must be used within DsFiltersBar.Root`);return e}})))()}var ne;function re(){return(re=t((()=>{G(),ne=()=>(W(),null),ne.displayName=`DsFiltersBar.ClearAll`})))()}var ie,ae,oe;function se(){return(se=t((()=>{G(),ie=()=>(W(),null),ie.displayName=`DsFiltersBar.Pinned`,ae=()=>(W(),null),ae.displayName=`DsFiltersBar.PinnedGroup`,oe=()=>(W(),null),oe.displayName=`DsFiltersBar.PinnedToggle`})))()}var ce,le;function ue(){return(ue=t((()=>{G(),ce=()=>(W(),null),ce.displayName=`DsFiltersBar.SavedFilters`,le=()=>(W(),null),le.displayName=`DsFiltersBar.SaveFilter`})))()}var de,fe,pe,me,he,ge,_e;function ve(){return(ve=t((()=>{de=`_root_1qkx5_1`,fe=`_toolbar_1qkx5_9`,pe=`_conditions_1qkx5_17`,me=`_search_1qkx5_25`,he=`_operatorTrigger_1qkx5_30`,ge=`_operatorText_1qkx5_51`,_e={root:de,toolbar:fe,conditions:pe,search:me,operatorTrigger:he,operatorText:ge}})))()}var ye,be,xe,Se,Ce,we,Te;function Ee(){return(Ee=t((()=>{ye=[`=`,`!=`,`>`,`>=`,`<`,`<=`,`IN`,`NOT IN`,`~`,`!~`],be=[`=`,`!=`,`IN`,`NOT IN`],xe=[`=`,`!=`,`~`,`!~`],Se=[`=`,`!=`,`>`,`>=`,`<`,`<=`],Ce=[`filters`,`builder`,`advanced`],we=Object.freeze({label:`Filters`,expand:`Show filters`,collapse:`Hide filters`}),Object.freeze({resultCount:e=>`${String(e)} results`,activeSavedFilter:`Filter`,emptyLabel:`View`,emptyValue:`All`}),Te=Object.freeze({label:`Search`,placeholder:`Type ‘/’ to search`,clear:`Clear search`}),Object.freeze({label:`Filter view`,views:Object.freeze({filters:`Filters`,builder:`Query builder`,advanced:`Advanced query`}),lockedView:`Clear the advanced query to switch views`}),Object.freeze({label:`Clear all`}),Object.freeze({label:`Pinned`})})))()}var De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,K,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht;function gt(){return(gt=t((()=>{Ee(),De=2,Oe=16,ke=Object.freeze([`filters`,`builder`]),Ae=Object.freeze([]),je=e=>e?.trim()?e:null,Me=e=>e===null?Ae:ke,Ne=()=>{let e=crypto.getRandomValues(new Uint32Array(De));return`condition-${Array.from(e,e=>e.toString(Oe)).join(``)}`},Pe=e=>{let t=e.trim();return t?{kind:`search`,id:Ne(),text:t}:null},Fe=(e,t)=>[...e,t],Ie=(e,t)=>e.map(e=>e.id===t.id?t:e),Le=(e,t)=>e.filter(e=>e.id!==t),Re=` – `,ze=(e,t)=>e.find(e=>e.value===t)?.label??t,K=e=>typeof e==`object`&&`from`in e,Be=(e,t)=>{if(K(e))return[e.from??``,e.to??``].map(String).join(Re).trim();if(typeof e==`object`){let n=t?.type===`enum`?t.options:[];return e.map(e=>ze(n,e)).join(`, `)}return typeof e==`string`&&t?.type===`date`?ze(t.presets??[],e):String(e)},Ve=(e,t)=>{if(e.kind===`search`)return{fieldPath:[],value:e.text};let n=t.find(t=>t.id===e.field),r=n?.type===`compound`?n.subfields.find(t=>t.id===e.subfield):void 0,i=n?.type===`compound`?r:n,a=i?.operators.find(t=>t.value===e.operator),o=[n?.label??e.field];return e.subfield&&o.push(r?.label??e.subfield),{fieldPath:o,operator:a?.label??e.operator,operatorSymbol:a?.symbol??e.operator,value:Be(e.value,i)}},He=({fieldPath:e,operator:t,value:n})=>[...e,t,n].filter(Boolean).join(` `),Ue=2,We=(e,t)=>{if(K(e.value))return null;let n=t.find(t=>t.id===e.field),r=n?.type===`compound`?n.subfields.find(t=>t.id===e.subfield):n;return!r||r.operators.length<Ue?null:r.operators},Ge=`.`,Ke=` › `,qe=(e,t)=>e.type===`enum`&&!e.options.length?null:t?{id:`${t.id}${Ge}${e.id}`,field:t.id,subfield:e.id,label:`${t.label}${Ke}${e.label}`,schema:e}:{id:e.id,field:e.id,label:e.label,schema:e},Je=e=>e.flatMap(e=>(e.type===`compound`?e.subfields.map(t=>qe(t,e)):[qe(e)]).filter(e=>e!==null)),Ye=e=>e.schema.type===`enum`&&!e.subfield,Xe=(e,t)=>e.field===t.field&&e.subfield===t.subfield&&e.type===t.schema.type,Ze=(e,t)=>e.includes(t),Qe=(e,t)=>{let{value:n,operator:r}=e;return K(n)?r===`=`&&[n.from,n.to].every(e=>e===null||typeof e===t):typeof n===t&&Ze(Se,r)},$e=(e,t)=>e.schema.operators.some(e=>e.value===t),et=(e,t)=>{if(t.kind!==`field`||t.field!==e.field||t.subfield!==e.subfield||!$e(e,t.operator))return!1;switch(e.schema.type){case`enum`:return Ze(be,t.operator)&&Array.isArray(t.value);case`text`:return Ze(xe,t.operator)&&typeof t.value==`string`;case`number`:return Qe(t,`number`);case`date`:return Qe(t,`string`)}},tt=(e,t)=>Je(t).find(t=>et(t,e))?.id,nt=`between`,rt=Object.freeze([]),it=Object.freeze({from:null,to:null}),at=e=>{let t=e.subfield?{field:e.field,subfield:e.subfield}:{field:e.field};switch(e.schema.type){case`enum`:return{...t,type:`enum`,operator:e.schema.operators[0]?.value??`=`,selected:rt,pinned:rt};case`text`:return{...t,type:`text`,operator:e.schema.operators[0]?.value??`=`,text:``};case`number`:return{...t,type:`number`,operator:e.schema.operators[0]?.value??`=`,value:null,range:it};case`date`:return{...t,type:`date`,operator:e.schema.operators[0]?.value??`=`,preset:null,date:null,range:it}}},ot=e=>{let t=e.find(e=>e.operator===`>=`&&!K(e.value)),n=e.find(e=>e.operator===`<=`&&!K(e.value));return!t||!n?null:{from:t.value,to:n.value}},st=(e,t,n)=>{let r=at(e),[i]=t;if(r.type===`enum`)return i?{...r,operator:i.operator,selected:i.value,pinned:n}:{...r,pinned:n};if(!i)return r;if(r.type===`text`)return{...r,operator:i.operator,text:i.value};let a=$e(e,`=`)?ot(t)??(K(i.value)?i.value:null):null;if(r.type===`number`)return a?{...r,operator:nt,range:a}:{...r,operator:i.operator,value:i.value};if(a)return{...r,operator:nt,range:a};let o=i.value,s=e.schema.type===`date`&&!!e.schema.presets?.some(e=>e.value===o);return{...r,operator:i.operator,preset:s?o:null,date:s?null:o}},ct=(e,t,n)=>Je(e).flatMap(e=>{let r=t.filter(t=>et(e,t)),i=Ye(e)?n.filter(t=>t.field===e.field).map(e=>e.value):[];return!r.length&&!i.length?[]:[st(e,r,i)]}),lt=e=>e.from!==null||e.to!==null,ut=e=>{switch(e.type){case`enum`:return e.selected.length?{operator:e.operator,value:e.selected}:null;case`text`:return e.text.trim()?{operator:e.operator,value:e.text.trim()}:null;case`number`:return e.operator===nt?lt(e.range)?{operator:`=`,value:e.range}:null:e.value===null?null:{operator:e.operator,value:e.value};case`date`:{if(e.operator===nt)return lt(e.range)?{operator:`=`,value:e.range}:null;let t=e.preset??e.date;return t===null?null:{operator:e.operator,value:t}}}},dt=e=>ut(e)!==null,ft=(e,t)=>Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):K(e)&&K(t)?e.from===t.from&&e.to===t.to:e===t,pt=(e,t)=>e===null||t===null?e===t:e.operator===t.operator&&ft(e.value,t.value),mt=(e,t,n)=>({kind:`field`,id:n,field:e.field,...e.subfield?{subfield:e.subfield}:{},...t}),ht=(e,t,n,r)=>{let i=Je(e),a=i.flatMap(e=>r.find(t=>Xe(t,e))??[]),o=ct(e,t,n),s=(e,t)=>{let n=e.find(e=>Xe(e,t));return n?ut(n):null},c=new Set(i.filter(e=>!pt(s(o,e),s(a,e))).map(e=>e.id)),l=new Map(i.flatMap(e=>{let t=a.find(t=>Xe(t,e)),n=t&&ut(t);return t&&n?[[e.id,{entry:t,saved:n}]]:[]})),u=new Set,d=t.flatMap(e=>{let t=i.find(t=>et(t,e));if(!t||!c.has(t.id))return[e];let n=l.get(t.id);return!n||u.has(t.id)?[]:(u.add(t.id),[mt(n.entry,n.saved,e.id)])}),f=[...l.entries()].filter(([e])=>c.has(e)&&!u.has(e)).map(([,e])=>mt(e.entry,e.saved,Ne())),p=a.filter(e=>e.type===`enum`&&!e.subfield),m=new Map(p.map(e=>[e.field,e.pinned])),h=e=>i.some(t=>Ye(t)&&t.field===e),g=n.filter(e=>!h(e.field)||!!m.get(e.field)?.includes(e.value)),_=p.flatMap(e=>e.pinned.filter(t=>!g.some(n=>n.field===e.field&&n.value===t)).map(t=>({field:e.field,value:t})));return{conditions:[...d,...f],pins:[...g,..._]}}})))()}var _t,vt;function yt(){return(yt=t((()=>{_t=i(),E(),vt=(e,t,n)=>{let r=(0,_t.c)(7),[i,a]=T(e,t,n),o;r[0]!==t||r[1]!==a||r[2]!==e?(o=n=>{a(n),e===void 0&&t?.(n)},r[0]=t,r[1]=a,r[2]=e,r[3]=o):o=r[3];let s=o,c;return r[4]!==i||r[5]!==s?(c=[i,s],r[4]=i,r[5]=s,r[6]=c):c=r[6],c}})))()}var bt,xt,St,Ct,wt,Tt,Et,Dt;function Ot(){return(Ot=t((()=>{bt=i(),xt=e(a(),1),St=n(),h(),v(),P(),s(),G(),ve(),Ee(),gt(),yt(),Ct=r(),wt=`/`,Tt=`input, textarea, select, [contenteditable]:not([contenteditable="false"])`,Et=e=>!(e instanceof Element&&(e.closest(Tt)||e.closest(`[role="dialog"]`))),Dt=e=>{let t=(0,bt.c)(44),{value:n,defaultValue:r,disabled:i,locale:a,ref:s,className:c,style:l,onValueChange:u}=e,d=r===void 0?``:r,f=i!==void 0&&i,{conditions:p,query:h,addCondition:g,registerSearch:_}=W(),v;t[0]===a?v=t[1]:(v={...Te,...a},t[0]=a,t[1]=v);let b=v,[x,S]=vt(n,u,d),C=(0,St.useRef)(null),w=f||h!==null,T;t[2]===S?T=t[3]:(T=e=>{S(e),C.current?.focus()},t[2]=S,t[3]=T);let E=T,D=(0,St.useRef)(E),O;t[4]===E?O=t[5]:(O=()=>{D.current=E},t[4]=E,t[5]=O),(0,St.useLayoutEffect)(O);let k,A;t[6]===_?(k=t[7],A=t[8]):(k=()=>(_({edit:e=>D.current(e)}),()=>_(null)),A=[_],t[6]=_,t[7]=k,t[8]=A),(0,St.useEffect)(k,A);let M,N;t[9]===w?(M=t[10],N=t[11]):(M=()=>{if(w)return;let e=e=>{e.key!==wt||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey||!Et(e.target)||(e.preventDefault(),C.current?.focus())};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},N=[w],t[9]=w,t[10]=M,t[11]=N),(0,St.useEffect)(M,N);let P;t[12]!==g||t[13]!==p||t[14]!==S||t[15]!==x?(P=e=>{if(e.key!==`Enter`||e.nativeEvent.isComposing)return;let t=Pe(x);t&&(p.some(e=>e.kind===`search`&&e.text===t.text)||g(t),S(``))},t[12]=g,t[13]=p,t[14]=S,t[15]=x,t[16]=P):P=t[16];let ee=P,F;t[17]===S?F=t[18]:(F=()=>{S(``),C.current?.focus()},t[17]=S,t[18]=F);let I=F,L=b.label,R;t[19]===c?R=t[20]:(R=(0,xt.default)(_e.search,c),t[19]=c,t[20]=R);let z;t[21]===s?z=t[22]:(z=m(C,s),t[21]=s,t[22]=z);let B;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,Ct.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0}),t[23]=B):B=t[23];let V;t[24]!==w||t[25]!==I||t[26]!==b.clear||t[27]!==x?(V=x&&!w?(0,Ct.jsx)(y,{variant:`tertiary`,color:`default`,size:`tiny`,icon:`close`,"aria-label":b.clear,onClick:I}):void 0,t[24]=w,t[25]=I,t[26]=b.clear,t[27]=x,t[28]=V):V=t[28];let H;t[29]===V?H=t[30]:(H={startAdornment:B,endAdornment:V},t[29]=V,t[30]=H);let U;t[31]!==w||t[32]!==ee||t[33]!==b.placeholder||t[34]!==S||t[35]!==z||t[36]!==H||t[37]!==x?(U=(0,Ct.jsx)(j.TextInput,{ref:z,size:`small`,value:x,placeholder:b.placeholder,disabled:w,slots:H,onValueChange:S,onKeyDown:ee}),t[31]=w,t[32]=ee,t[33]=b.placeholder,t[34]=S,t[35]=z,t[36]=H,t[37]=x,t[38]=U):U=t[38];let te;return t[39]!==b.label||t[40]!==l||t[41]!==R||t[42]!==U?(te=(0,Ct.jsx)(j,{label:L,hideLabel:!0,className:R,style:l,children:U}),t[39]=b.label,t[40]=l,t[41]=R,t[42]=U,t[43]=te):te=t[43],te},Dt.displayName=`DsFiltersBar.Search`})))()}var kt;function At(){return(At=t((()=>{G(),kt=()=>(W(),null),kt.displayName=`DsFiltersBar.Summary`})))()}var jt,Mt,Nt,Pt;function Ft(){return(Ft=t((()=>{jt=i(),Mt=e(a(),1),G(),ve(),Nt=r(),Pt=e=>{let t=(0,jt.c)(7),{className:n,style:r,children:i}=e,{expanded:a,toolbarId:o}=W();if(!a)return null;let s;t[0]===n?s=t[1]:(s=(0,Mt.default)(_e.toolbar,n),t[0]=n,t[1]=s);let c;return t[2]!==i||t[3]!==r||t[4]!==s||t[5]!==o?(c=(0,Nt.jsx)(`div`,{id:o,className:s,style:r,children:i}),t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=c):c=t[6],c},Pt.displayName=`DsFiltersBar.Toolbar`})))()}var It;function Lt(){return(Lt=t((()=>{G(),It=e=>{let{value:t,children:n}=e,{view:r}=W();return r===t?n:null},It.displayName=`DsFiltersBar.View`})))()}var Rt;function zt(){return(zt=t((()=>{G(),Rt=()=>(W(),null),Rt.displayName=`DsFiltersBar.ViewSwitch`})))()}var Bt;function Vt(){return(Vt=t((()=>{G(),Bt=()=>(W(),null),Bt.displayName=`DsFiltersBar.Builder`})))()}function Ht(){return(Ht=t((()=>{Vt()})))()}var Ut;function Wt(){return(Wt=t((()=>{Ut=Object.freeze({title:`Filters`,save:`Save filters`,close:`Close`,operator:`Operator`,operatorOption:(e,t)=>`${e} ${t.symbol??t.value} (${t.label})`,betweenOption:e=>`${e} (between)`,search:e=>`Search ${e}`,searchPlaceholder:e=>`Search ${e}`,value:e=>`${e} value`,rangeFrom:e=>`${e} from`,rangeTo:e=>`${e} to`,presets:e=>`${e} presets`,selectedCount:e=>`${String(e)} selected`,pinned:`Pinned`})})))()}var Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln,un,q;function dn(){return(dn=t((()=>{Gt=`_dialog_16jv3_5`,Kt=`_header_16jv3_9`,qt=`_footer_16jv3_10`,Jt=`_body_16jv3_13`,Yt=`_tabs_16jv3_20`,Xt=`_tabList_16jv3_26`,Zt=`_tab_16jv3_20`,Qt=`_tabLabel_16jv3_52`,$t=`_counter_16jv3_60`,en=`_counterDot_16jv3_68`,tn=`_tabPin_16jv3_75`,nn=`_panel_16jv3_81`,rn=`_panelHeader_16jv3_88`,an=`_control_16jv3_97`,on=`_range_16jv3_101`,sn=`_options_16jv3_111`,cn=`_option_16jv3_111`,ln=`_optionPin_16jv3_125`,un=`_visuallyHidden_16jv3_133`,q={dialog:Gt,header:Kt,footer:qt,body:Jt,tabs:Yt,tabList:Xt,tab:Zt,tabLabel:Qt,counter:$t,counterDot:en,tabPin:tn,panel:nn,panelHeader:rn,control:an,range:on,options:sn,option:cn,optionPin:ln,visuallyHidden:un}})))()}function fn(e){return e.value===`=`}function pn(e){return e.value===`=`}function mn(e){return(0,J.jsx)(p.Item,{value:e.value,label:e.label},e.value)}var hn,gn,_n,J,vn,yn,bn,xn,Sn,Cn,wn,Tn,En,Dn,On,kn,An,jn,Mn,Nn,Pn;function Fn(){return(Fn=t((()=>{hn=i(),gn=n(),_n=e(a(),1),v(),d(),N(),s(),z(),A(),F(),B(),D(),C(),_(),H(),gt(),Wt(),dn(),J=r(),vn=`between`,yn=(e,t)=>e.field===t.field&&e.subfield===t.subfield&&e.type===t.schema.type,bn=(e,t)=>e.find(e=>yn(e,t))??at(t),xn=(e,t)=>e.field===t.field&&e.subfield===t.subfield,Sn=(e,t)=>e.some(e=>xn(e,t))?e.map(e=>xn(e,t)?t:e):[...e,t],Cn=(e,t,n)=>n?e.includes(t)?e:[...e,t]:e.filter(e=>e!==t),wn=e=>Number.isNaN(e)?null:e,Tn=e=>{let t=(0,hn.c)(14),{tab:n,entry:r,locale:i}=e,a;t[0]===r?a=t[1]:(a=r.type===`enum`?r.selected.length:Number(dt(r)),t[0]=r,t[1]=a);let s=a,c=r.type===`enum`&&r.pinned.length>0,l;t[2]===n.label?l=t[3]:(l=(0,J.jsx)(g,{variant:`body-sm-reg`,className:q.tabLabel,children:n.label}),t[2]=n.label,t[3]=l);let u;t[4]!==i||t[5]!==s?(u=s>0&&(0,J.jsxs)(J.Fragment,{children:[(0,J.jsxs)(`span`,{className:q.counter,"aria-hidden":!0,children:[(0,J.jsx)(`span`,{className:q.counterDot}),(0,J.jsx)(g,{variant:`body-xs-semi-bold`,children:s})]}),(0,J.jsx)(`span`,{className:q.visuallyHidden,children:i.selectedCount(s)})]}),t[4]=i,t[5]=s,t[6]=u):u=t[6];let d;t[7]!==c||t[8]!==i?(d=c&&(0,J.jsx)(`span`,{className:q.tabPin,role:`img`,"aria-label":i.pinned,children:(0,J.jsx)(o,{icon:`keep`,size:`tiny`,filled:!0,"aria-hidden":!0})}),t[7]=c,t[8]=i,t[9]=d):d=t[9];let f;return t[10]!==l||t[11]!==u||t[12]!==d?(f=(0,J.jsxs)(J.Fragment,{children:[l,u,d]}),t[10]=l,t[11]=u,t[12]=d,t[13]=f):f=t[13],f},En=e=>{let t=(0,hn.c)(9),{label:n,children:r}=e,i=(0,gn.useId)(),a;t[0]!==i||t[1]!==n?(a=(0,J.jsx)(`label`,{htmlFor:i,className:q.visuallyHidden,children:n}),t[0]=i,t[1]=n,t[2]=a):a=t[2];let o;t[3]!==r||t[4]!==i?(o=r(i),t[3]=r,t[4]=i,t[5]=o):o=t[5];let s;return t[6]!==a||t[7]!==o?(s=(0,J.jsxs)(J.Fragment,{children:[a,o]}),t[6]=a,t[7]=o,t[8]=s):s=t[8],s},Dn=e=>{let t=(0,hn.c)(19),{label:n,operators:r,value:i,withBetween:a,locale:o,onValueChange:s}=e,c=a!==void 0&&a,l;if(t[0]!==n||t[1]!==o||t[2]!==r||t[3]!==c){let e;t[5]!==n||t[6]!==o?(e=e=>({value:e.value,label:o.operatorOption(n,e)}),t[5]=n,t[6]=o,t[7]=e):e=t[7],l=r.map(e),c&&r.some(fn)&&l.push({value:vn,label:o.betweenOption(n)}),t[0]=n,t[1]=o,t[2]=r,t[3]=c,t[4]=l}else l=t[4];let u;t[8]!==s||t[9]!==l||t[10]!==i?(u=e=>{let t=l.find(t=>t.value===e);t&&t.value!==i&&s(t.value)},t[8]=s,t[9]=l,t[10]=i,t[11]=u):u=t[11];let d=u,p;t[12]!==d||t[13]!==l||t[14]!==i?(p=e=>(0,J.jsx)(f,{id:e,className:q.control,options:l,value:i,onValueChange:d}),t[12]=d,t[13]=l,t[14]=i,t[15]=p):p=t[15];let m;return t[16]!==o.operator||t[17]!==p?(m=(0,J.jsx)(En,{label:o.operator,children:p}),t[16]=o.operator,t[17]=p,t[18]=m):m=t[18],m},On=e=>{let t=(0,hn.c)(49),{tab:n,entry:r,search:i,locale:a,onSearchChange:s,onEntryChange:c}=e;if(n.schema.type!==`enum`)return null;let l,d,f,p,m;if(t[0]!==r||t[1]!==a||t[2]!==c||t[3]!==s||t[4]!==i||t[5]!==n.label||t[6]!==n.schema.operators||t[7]!==n.schema.options||t[8]!==n.subfield){let e=i.trim().toLowerCase(),h=n.schema.options.filter(t=>t.label.toLowerCase().includes(e)),g=!n.subfield,_;t[14]!==r||t[15]!==c?(_=e=>c({...r,operator:e}),t[14]=r,t[15]=c,t[16]=_):_=t[16];let v;t[17]!==r.operator||t[18]!==a||t[19]!==_||t[20]!==n.label||t[21]!==n.schema.operators?(v=(0,J.jsx)(Dn,{label:n.label,operators:n.schema.operators,value:r.operator,locale:a,onValueChange:_}),t[17]=r.operator,t[18]=a,t[19]=_,t[20]=n.label,t[21]=n.schema.operators,t[22]=v):v=t[22];let y;t[23]!==a||t[24]!==n.label?(y=a.search(n.label),t[23]=a,t[24]=n.label,t[25]=y):y=t[25];let b;t[26]!==a||t[27]!==s||t[28]!==i||t[29]!==n.label?(b=e=>(0,J.jsx)(S,{id:e,className:q.control,value:i,placeholder:a.searchPlaceholder(n.label),slots:{startAdornment:(0,J.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0})},onValueChange:s}),t[26]=a,t[27]=s,t[28]=i,t[29]=n.label,t[30]=b):b=t[30];let x;t[31]!==y||t[32]!==b?(x=(0,J.jsx)(En,{label:y,children:b}),t[31]=y,t[32]=b,t[33]=x):x=t[33],t[34]!==x||t[35]!==v?(m=(0,J.jsxs)(`div`,{className:q.panelHeader,children:[v,x]}),t[34]=x,t[35]=v,t[36]=m):m=t[36],l=q.options,d=`group`,f=n.label;let C;t[37]!==g||t[38]!==r||t[39]!==c?(C=e=>(0,J.jsx)(u,{size:`large`,className:q.option,label:e.label,checked:r.selected.includes(e.value),actions:g&&(0,J.jsx)(ee,{className:q.optionPin,itemLabel:e.label,pinned:r.pinned.includes(e.value),onPinnedChange:t=>c({...r,pinned:Cn(r.pinned,e.value,t)})}),onCheckedChange:t=>c({...r,selected:Cn(r.selected,e.value,t===!0)})},e.value),t[37]=g,t[38]=r,t[39]=c,t[40]=C):C=t[40],p=h.map(C),t[0]=r,t[1]=a,t[2]=c,t[3]=s,t[4]=i,t[5]=n.label,t[6]=n.schema.operators,t[7]=n.schema.options,t[8]=n.subfield,t[9]=l,t[10]=d,t[11]=f,t[12]=p,t[13]=m}else l=t[9],d=t[10],f=t[11],p=t[12],m=t[13];let h;t[41]!==l||t[42]!==d||t[43]!==f||t[44]!==p?(h=(0,J.jsx)(`div`,{className:l,role:d,"aria-label":f,children:p}),t[41]=l,t[42]=d,t[43]=f,t[44]=p,t[45]=h):h=t[45];let g;return t[46]!==m||t[47]!==h?(g=(0,J.jsxs)(J.Fragment,{children:[m,h]}),t[46]=m,t[47]=h,t[48]=g):g=t[48],g},kn=e=>{let t=(0,hn.c)(21),{tab:n,entry:r,locale:i,onEntryChange:a}=e;if(n.schema.type!==`text`)return null;let o;t[0]!==r||t[1]!==a?(o=e=>a({...r,operator:e}),t[0]=r,t[1]=a,t[2]=o):o=t[2];let s;t[3]!==r.operator||t[4]!==i||t[5]!==o||t[6]!==n.label||t[7]!==n.schema.operators?(s=(0,J.jsx)(Dn,{label:n.label,operators:n.schema.operators,value:r.operator,locale:i,onValueChange:o}),t[3]=r.operator,t[4]=i,t[5]=o,t[6]=n.label,t[7]=n.schema.operators,t[8]=s):s=t[8];let c;t[9]!==i||t[10]!==n.label?(c=i.value(n.label),t[9]=i,t[10]=n.label,t[11]=c):c=t[11];let l;t[12]!==r||t[13]!==a?(l=e=>(0,J.jsx)(S,{id:e,className:q.control,value:r.text,onValueChange:e=>a({...r,text:e})}),t[12]=r,t[13]=a,t[14]=l):l=t[14];let u;t[15]!==c||t[16]!==l?(u=(0,J.jsx)(En,{label:c,children:l}),t[15]=c,t[16]=l,t[17]=u):u=t[17];let d;return t[18]!==s||t[19]!==u?(d=(0,J.jsxs)(`div`,{className:q.panelHeader,children:[s,u]}),t[18]=s,t[19]=u,t[20]=d):d=t[20],d},An=e=>{let t=(0,hn.c)(21),{tab:n,entry:r,locale:i,onEntryChange:a}=e;if(n.schema.type!==`number`)return null;let o;t[0]!==r||t[1]!==a?(o=e=>a({...r,range:e}),t[0]=r,t[1]=a,t[2]=o):o=t[2];let s=o,l;t[3]!==r||t[4]!==a?(l=e=>a({...r,operator:e}),t[3]=r,t[4]=a,t[5]=l):l=t[5];let u;t[6]!==r.operator||t[7]!==i||t[8]!==l||t[9]!==n.label||t[10]!==n.schema.operators?(u=(0,J.jsx)(Dn,{label:n.label,operators:n.schema.operators,value:r.operator,withBetween:!0,locale:i,onValueChange:l}),t[6]=r.operator,t[7]=i,t[8]=l,t[9]=n.label,t[10]=n.schema.operators,t[11]=u):u=t[11];let d;t[12]!==r||t[13]!==i||t[14]!==a||t[15]!==s||t[16]!==n.label?(d=r.operator===vn?(0,J.jsxs)(`div`,{className:q.range,children:[(0,J.jsx)(En,{label:i.rangeFrom(n.label),children:e=>(0,J.jsx)(c,{id:e,className:q.control,value:r.range.from??void 0,onValueChange:e=>s({...r.range,from:wn(e)})})}),(0,J.jsx)(En,{label:i.rangeTo(n.label),children:e=>(0,J.jsx)(c,{id:e,className:q.control,value:r.range.to??void 0,onValueChange:e=>s({...r.range,to:wn(e)})})})]}):(0,J.jsx)(En,{label:i.value(n.label),children:e=>(0,J.jsx)(c,{id:e,className:q.control,value:r.value??void 0,onValueChange:e=>a({...r,value:wn(e)})})}),t[12]=r,t[13]=i,t[14]=a,t[15]=s,t[16]=n.label,t[17]=d):d=t[17];let f;return t[18]!==u||t[19]!==d?(f=(0,J.jsxs)(`div`,{className:q.panelHeader,children:[u,d]}),t[18]=u,t[19]=d,t[20]=f):f=t[20],f},jn=Object.freeze({from:null,to:null}),Mn=e=>{let t=(0,hn.c)(36),{tab:n,entry:r,locale:i,onEntryChange:a}=e;if(n.schema.type!==`date`)return null;let o;t[0]===n.schema.presets?o=t[1]:(o=n.schema.presets??[],t[0]=n.schema.presets,t[1]=o);let s=o,c;t[2]!==r.operator||t[3]!==n.schema.operators?(c=r.operator===vn?(n.schema.operators.find(pn)??n.schema.operators[0])?.value??`=`:r.operator,t[2]=r.operator,t[3]=n.schema.operators,t[4]=c):c=t[4];let l=c,u;t[5]!==r||t[6]!==a?(u=e=>a({...r,preset:null,range:e}),t[5]=r,t[6]=a,t[7]=u):u=t[7];let d=u,f;t[8]!==r||t[9]!==a?(f=e=>a({...r,operator:e}),t[8]=r,t[9]=a,t[10]=f):f=t[10];let m;t[11]!==r.operator||t[12]!==i||t[13]!==f||t[14]!==n.label||t[15]!==n.schema.operators?(m=(0,J.jsx)(Dn,{label:n.label,operators:n.schema.operators,value:r.operator,withBetween:!0,locale:i,onValueChange:f}),t[11]=r.operator,t[12]=i,t[13]=f,t[14]=n.label,t[15]=n.schema.operators,t[16]=m):m=t[16];let h;t[17]!==r||t[18]!==i||t[19]!==a||t[20]!==d||t[21]!==n.label?(h=r.operator===vn?(0,J.jsxs)(`div`,{className:q.range,children:[(0,J.jsx)(En,{label:i.rangeFrom(n.label),children:e=>(0,J.jsx)(M,{id:e,className:q.control,value:r.range.from??void 0,onValueChange:e=>d({...r.range,from:e??null})})}),(0,J.jsx)(En,{label:i.rangeTo(n.label),children:e=>(0,J.jsx)(M,{id:e,className:q.control,value:r.range.to??void 0,onValueChange:e=>d({...r.range,to:e??null})})})]}):(0,J.jsx)(En,{label:i.value(n.label),children:e=>(0,J.jsx)(M,{id:e,className:q.control,value:r.date??void 0,onValueChange:e=>a({...r,preset:null,date:e??null})})}),t[17]=r,t[18]=i,t[19]=a,t[20]=d,t[21]=n.label,t[22]=h):h=t[22];let g;t[23]!==m||t[24]!==h?(g=(0,J.jsxs)(`div`,{className:q.panelHeader,children:[m,h]}),t[23]=m,t[24]=h,t[25]=g):g=t[25];let _;t[26]!==r||t[27]!==i||t[28]!==a||t[29]!==l||t[30]!==s||t[31]!==n.label?(_=s.length>0&&(0,J.jsx)(`div`,{className:q.options,role:`group`,"aria-label":i.presets(n.label),children:(0,J.jsx)(p.Root,{value:r.preset,onValueChange:e=>a({...r,operator:l,preset:e,date:null,range:jn}),children:s.map(mn)})}),t[26]=r,t[27]=i,t[28]=a,t[29]=l,t[30]=s,t[31]=n.label,t[32]=_):_=t[32];let v;return t[33]!==g||t[34]!==_?(v=(0,J.jsxs)(J.Fragment,{children:[g,_]}),t[33]=g,t[34]=_,t[35]=v):v=t[35],v},Nn=e=>{let t=(0,hn.c)(19),n,r,i,a;switch(t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({entry:n,search:a,onSearchChange:r,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a),n.type){case`enum`:{let e;return t[5]!==n||t[6]!==r||t[7]!==i||t[8]!==a?(e=(0,J.jsx)(On,{entry:n,search:a,onSearchChange:r,...i}),t[5]=n,t[6]=r,t[7]=i,t[8]=a,t[9]=e):e=t[9],e}case`text`:{let e;return t[10]!==n||t[11]!==i?(e=(0,J.jsx)(kn,{entry:n,...i}),t[10]=n,t[11]=i,t[12]=e):e=t[12],e}case`number`:{let e;return t[13]!==n||t[14]!==i?(e=(0,J.jsx)(An,{entry:n,...i}),t[13]=n,t[14]=i,t[15]=e):e=t[15],e}case`date`:{let e;return t[16]!==n||t[17]!==i?(e=(0,J.jsx)(Mn,{entry:n,...i}),t[16]=n,t[17]=i,t[18]=e):e=t[18],e}}},Pn=e=>{let t=(0,hn.c)(57),{open:n,tabs:r,value:i,initialTab:a,locale:o,className:s,style:c,onOpenChange:l,onChange:u,onSave:d}=e,f;t[0]===o?f=t[1]:(f={...Ut,...o},t[0]=o,t[1]=f);let p=f,m=a??r[0]?.id??``,[h,g]=(0,gn.useState)(m),[_,v]=(0,gn.useState)(``),[b,x]=(0,gn.useState)(n);n!==b&&(x(n),n&&(g(m),v(``)));let S;t[2]!==h||t[3]!==r?(S=r.find(e=>e.id===h)??r[0],t[2]=h,t[3]=r,t[4]=S):S=t[4];let C=S,w;t[5]===C?.id?w=t[6]:(w=e=>{e&&e!==C?.id&&(g(e),v(``))},t[5]=C?.id,t[6]=w);let T=w,E;t[7]!==u||t[8]!==i?(E=e=>{u(e,Sn(i,e))},t[7]=u,t[8]=i,t[9]=E):E=t[9];let D=E,O;t[10]!==l||t[11]!==d||t[12]!==i?(O=()=>{d(i),l(!1)},t[10]=l,t[11]=d,t[12]=i,t[13]=O):O=t[13];let k=O,A;t[14]===s?A=t[15]:(A=(0,_n.default)(q.dialog,s),t[14]=s,t[15]=A);let j;t[16]===p.title?j=t[17]:(j=(0,J.jsx)(R.Title,{children:p.title}),t[16]=p.title,t[17]=j);let M;t[18]===l?M=t[19]:(M=()=>l(!1),t[18]=l,t[19]=M);let N;t[20]!==p.close||t[21]!==M?(N=(0,J.jsx)(y,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":p.close,onClick:M}),t[20]=p.close,t[21]=M,t[22]=N):N=t[22];let P;t[23]!==j||t[24]!==N?(P=(0,J.jsxs)(R.Header,{className:q.header,children:[j,N]}),t[23]=j,t[24]=N,t[25]=P):P=t[25];let ee=C?.id,F;if(t[26]!==p||t[27]!==r||t[28]!==i){let e;t[30]!==p||t[31]!==i?(e=e=>(0,J.jsx)(V.Tab,{value:e.id,className:q.tab,children:(0,J.jsx)(Tn,{tab:e,entry:bn(i,e),locale:p})},e.id),t[30]=p,t[31]=i,t[32]=e):e=t[32],F=r.map(e),t[26]=p,t[27]=r,t[28]=i,t[29]=F}else F=t[29];let I;t[33]===F?I=t[34]:(I=(0,J.jsx)(V.List,{className:q.tabList,children:F}),t[33]=F,t[34]=I);let L;t[35]!==C||t[36]!==D||t[37]!==p||t[38]!==_||t[39]!==i?(L=C&&(0,J.jsx)(V.Content,{value:C.id,className:q.panel,children:(0,J.jsx)(Nn,{tab:C,entry:bn(i,C),search:_,locale:p,onSearchChange:v,onEntryChange:D},C.id)}),t[35]=C,t[36]=D,t[37]=p,t[38]=_,t[39]=i,t[40]=L):L=t[40];let z;t[41]!==T||t[42]!==ee||t[43]!==I||t[44]!==L?(z=(0,J.jsx)(R.Body,{className:q.body,children:(0,J.jsxs)(V,{className:q.tabs,value:ee,onValueChange:T,children:[I,L]})}),t[41]=T,t[42]=ee,t[43]=I,t[44]=L,t[45]=z):z=t[45];let B;t[46]!==k||t[47]!==p.save?(B=(0,J.jsx)(R.Footer,{className:q.footer,children:(0,J.jsx)(R.Actions,{children:(0,J.jsx)(y,{variant:`primary`,size:`medium`,onClick:k,children:p.save})})}),t[46]=k,t[47]=p.save,t[48]=B):B=t[48];let H;return t[49]!==l||t[50]!==n||t[51]!==c||t[52]!==P||t[53]!==z||t[54]!==B||t[55]!==A?(H=(0,J.jsxs)(R,{open:n,dividers:!0,closeOnInteractOutside:!0,className:A,style:c,onOpenChange:l,children:[P,z,B]}),t[49]=l,t[50]=n,t[51]=c,t[52]=P,t[53]=z,t[54]=B,t[55]=A,t[56]=H):H=t[56],H},Pn.displayName=`DsFiltersBar.FiltersDialog`})))()}function In(){return(In=t((()=>{Fn()})))()}var Ln;function Rn(){return(Rn=t((()=>{Ln=Object.freeze({addFilter:`Add filter`,removeCondition:e=>`Remove filter: ${e}`,operator:e=>`${e} operator`,operatorOption:e=>`${e.symbol??e.value} (${e.label})`,filtersDialogTitle:`Filters`,saveFilters:`Save filters`,filtersDialog:Object.freeze({})})})))()}var zn,Bn,Vn,Y,Hn,Un,Wn,Gn,Kn,qn;function Jn(){return(Jn=t((()=>{zn=i(),Bn=e(a(),1),Vn=n(),v(),w(),s(),L(),_(),G(),ve(),gt(),In(),Rn(),Y=r(),Hn=Object.freeze([]),Un=` › `,Wn=e=>{let t=(0,zn.c)(19),{condition:n,locale:r}=e,{search:i,removeCondition:a}=W(),s;t[0]!==n.id||t[1]!==n.text||t[2]!==a||t[3]!==i?(s=i?()=>{i.edit(n.text),a(n.id)}:void 0,t[0]=n.id,t[1]=n.text,t[2]=a,t[3]=i,t[4]=s):s=t[4];let c=s,l=n.text,u;t[5]!==n.text||t[6]!==r?(u=r.removeCondition(n.text),t[5]=n.text,t[6]=r,t[7]=u):u=t[7];let d;t[8]===u?d=t[9]:(d={deleteAriaLabel:u},t[8]=u,t[9]=d);let f;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(f={icon:(0,Y.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0})},t[10]=f):f=t[10];let p;t[11]!==n.id||t[12]!==a?(p=()=>a(n.id),t[11]=n.id,t[12]=a,t[13]=p):p=t[13];let m;return t[14]!==n.text||t[15]!==c||t[16]!==d||t[17]!==p?(m=(0,Y.jsx)(I,{selected:!0,label:l,locale:d,slots:f,onClick:c,onDelete:p}),t[14]=n.text,t[15]=c,t[16]=d,t[17]=p,t[18]=m):m=t[18],m},Gn=e=>{let t=(0,zn.c)(23),{value:n,symbol:r,operators:i,label:a,locale:s,onValueChange:c}=e,u;t[0]!==c||t[1]!==i||t[2]!==n?(u=e=>{let t=i.find(t=>t.value===e);t&&t.value!==n&&c(t)},t[0]=c,t[1]=i,t[2]=n,t[3]=u):u=t[3];let d=u,f;t[4]===r?f=t[5]:(f=(0,Y.jsx)(g,{variant:`body-sm-reg`,children:r}),t[4]=r,t[5]=f);let p;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,Y.jsx)(o,{icon:`keyboard_arrow_down`,size:`tiny`,"aria-hidden":!0}),t[6]=p):p=t[6];let m;t[7]!==a||t[8]!==f?(m=(0,Y.jsxs)(l.Trigger,{className:_e.operatorTrigger,"aria-label":a,children:[f,p]}),t[7]=a,t[8]=f,t[9]=m):m=t[9];let h;if(t[10]!==s||t[11]!==i||t[12]!==n){let e;t[14]!==s||t[15]!==n?(e=e=>(0,Y.jsxs)(l.Item,{value:e.value,selected:e.value===n,children:[s.operatorOption(e),e.value===n&&(0,Y.jsx)(l.ItemIndicator,{children:(0,Y.jsx)(o,{icon:`check`,"aria-hidden":!0})})]},e.value),t[14]=s,t[15]=n,t[16]=e):e=t[16],h=i.map(e),t[10]=s,t[11]=i,t[12]=n,t[13]=h}else h=t[13];let _;t[17]===h?_=t[18]:(_=(0,Y.jsx)(l.Content,{children:h}),t[17]=h,t[18]=_);let v;return t[19]!==d||t[20]!==m||t[21]!==_?(v=(0,Y.jsxs)(l.Root,{onSelect:d,children:[m,_]}),t[19]=d,t[20]=m,t[21]=_,t[22]=v):v=t[22],v},Kn=e=>{let t=(0,zn.c)(36),{condition:n,locale:r,onEdit:i}=e,{fields:a,removeCondition:o,updateCondition:s}=W(),c,l,u,d,f,p,m,h;if(t[0]!==n||t[1]!==a||t[2]!==r||t[3]!==s){let e=Ve(n,a),i;t[12]!==n||t[13]!==a?(i=We(n,a),t[12]=n,t[13]=a,t[14]=i):i=t[14];let o=i,_;t[15]!==n||t[16]!==a?(_=tt(n,a),t[15]=n,t[16]=a,t[17]=_):_=t[17],l=_;let v=e.operatorSymbol??n.operator;c=I,d=!0,f=`operator-filter`,p=e.fieldPath.join(Un),m=e.value,h={deleteAriaLabel:r.removeCondition(He(e))},u=(()=>{if(o)return(0,Y.jsx)(Gn,{value:n.operator,symbol:v,operators:o,label:r.operator(e.fieldPath.join(` `)),locale:r,onValueChange:e=>s({...n,operator:e.value})});if(!K(n.value))return(0,Y.jsx)(g,{variant:`body-sm-reg`,className:_e.operatorText,children:v})})(),t[0]=n,t[1]=a,t[2]=r,t[3]=s,t[4]=c,t[5]=l,t[6]=u,t[7]=d,t[8]=f,t[9]=p,t[10]=m,t[11]=h}else c=t[4],l=t[5],u=t[6],d=t[7],f=t[8],p=t[9],m=t[10],h=t[11];let _;t[18]===u?_=t[19]:(_={operator:u},t[18]=u,t[19]=_);let v;t[20]!==l||t[21]!==i?(v=l?()=>i(l):void 0,t[20]=l,t[21]=i,t[22]=v):v=t[22];let y;t[23]!==n.id||t[24]!==o?(y=()=>o(n.id),t[23]=n.id,t[24]=o,t[25]=y):y=t[25];let b;return t[26]!==c||t[27]!==d||t[28]!==f||t[29]!==p||t[30]!==m||t[31]!==h||t[32]!==_||t[33]!==v||t[34]!==y?(b=(0,Y.jsx)(c,{selected:d,variant:f,label:p,value:m,locale:h,slots:_,onClick:v,onDelete:y}),t[26]=c,t[27]=d,t[28]=f,t[29]=p,t[30]=m,t[31]=h,t[32]=_,t[33]=v,t[34]=y,t[35]=b):b=t[35],b},qn=e=>{let t=(0,zn.c)(46),{locale:n,className:r,style:i}=e,{fields:a,conditions:o,query:s,pins:c,setConditions:l,setPins:u}=W(),d;t[0]===n?d=t[1]:(d={...Ln,...n},t[0]=n,t[1]=d);let f=d,[p,m]=(0,Vn.useState)(!1),[h,g]=(0,Vn.useState)(Hn),[_,v]=(0,Vn.useState)(void 0);if(s!==null)return p&&m(!1),null;let b;t[2]!==o||t[3]!==a||t[4]!==c?(b=e=>{g(ct(a,o,c)),v(e),m(!0)},t[2]=o,t[3]=a,t[4]=c,t[5]=b):b=t[5];let x=b,S;t[6]!==o||t[7]!==a||t[8]!==c||t[9]!==l||t[10]!==u?(S=e=>{let t=ht(a,o,c,e);l(t.conditions),u(t.pins)},t[6]=o,t[7]=a,t[8]=c,t[9]=l,t[10]=u,t[11]=S):S=t[11];let C=S,w;t[12]===r?w=t[13]:(w=(0,Bn.default)(_e.conditions,r),t[12]=r,t[13]=w);let T;t[14]===x?T=t[15]:(T=()=>x(),t[14]=x,t[15]=T);let E;t[16]!==f.addFilter||t[17]!==T?(E=(0,Y.jsx)(y,{variant:`secondary`,color:`default`,size:`small`,icon:`add`,"aria-label":f.addFilter,onClick:T}),t[16]=f.addFilter,t[17]=T,t[18]=E):E=t[18];let D;t[19]===a?D=t[20]:(D=Je(a),t[19]=a,t[20]=D);let O;t[21]!==f.filtersDialog||t[22]!==f.filtersDialogTitle||t[23]!==f.saveFilters?(O={...f.filtersDialog,title:f.filtersDialogTitle,save:f.saveFilters},t[21]=f.filtersDialog,t[22]=f.filtersDialogTitle,t[23]=f.saveFilters,t[24]=O):O=t[24];let k;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(k=(e,t)=>g(t),t[25]=k):k=t[25];let A;t[26]!==h||t[27]!==C||t[28]!==_||t[29]!==p||t[30]!==D||t[31]!==O?(A=(0,Y.jsx)(Pn,{open:p,tabs:D,value:h,initialTab:_,locale:O,onOpenChange:m,onChange:k,onSave:C}),t[26]=h,t[27]=C,t[28]=_,t[29]=p,t[30]=D,t[31]=O,t[32]=A):A=t[32];let j;if(t[33]!==o||t[34]!==x||t[35]!==f){let e;t[37]!==x||t[38]!==f?(e=e=>e.kind===`search`?(0,Y.jsx)(Wn,{condition:e,locale:f},e.id):(0,Y.jsx)(Kn,{condition:e,locale:f,onEdit:x},e.id),t[37]=x,t[38]=f,t[39]=e):e=t[39],j=o.map(e),t[33]=o,t[34]=x,t[35]=f,t[36]=j}else j=t[36];let M;return t[40]!==i||t[41]!==A||t[42]!==j||t[43]!==w||t[44]!==E?(M=(0,Y.jsxs)(`div`,{className:w,style:i,children:[E,A,j]}),t[40]=i,t[41]=A,t[42]=j,t[43]=w,t[44]=E,t[45]=M):M=t[45],M},qn.displayName=`DsFiltersBar.Conditions`})))()}function Yn(){return(Yn=t((()=>{Jn()})))()}var Xn;function Zn(){return(Zn=t((()=>{Xn=class extends Error{error;constructor(e,t,n,r,i){super(t),this.error={code:t,from:n,to:r,text:i??e.slice(n,r)}}}})))()}var Qn,$n,er,tr,nr,rr;function ir(){return(ir=t((()=>{gt(),Qn=e=>e.kind===`clause`||e.kind===`search`,$n=e=>Qn(e)?[e]:e.kind===`and`&&e.children.every(Qn)?e.children.filter(Qn):null,er=e=>typeof e==`object`&&`from`in e?[e.from,e.to]:e,tr=e=>JSON.stringify(e.kind===`search`?[e.kind,e.text]:[e.kind,e.field,e.subfield??null,e.operator,er(e.value)]),nr=(e,t)=>e.kind===`search`?{kind:`search`,id:t,text:e.text}:{kind:`field`,id:t,field:e.field,...e.subfield&&{subfield:e.subfield},operator:e.operator,value:e.value},rr=(e,t)=>{let n=$n(e);if(!n)return null;let r=new Map;for(let e of t){let t=tr(e);r.set(t,[...r.get(t)??[],e.id])}return n.map(e=>{let t=nr(e,``),n=r.get(tr(t))?.shift();return{...t,id:n??Ne()}})}})))()}var ar,or,sr,cr,lr,ur,dr,fr,pr,mr,hr;function gr(){return(gr=t((()=>{ar=`"`,or=`\\`,sr=/\s/,cr=/[\s()",=!<>~]/,lr=Object.freeze({"(":`openParen`,")":`closeParen`,",":`comma`}),ur=Object.freeze([`!=`,`!~`,`>=`,`<=`,`=`,`>`,`<`,`~`]),dr=(e,t)=>{let n=``,r=t+1;for(;r<e.length;){let i=e.charAt(r);if(i===or&&r+1<e.length){n+=e.charAt(r+1),r+=2;continue}if(i===ar)return{kind:`string`,value:n,from:t,to:r+1};n+=i,r+=1}return{kind:`unterminated`,value:n,from:t,to:e.length}},fr=(e,t)=>{let n=t;for(;n<e.length&&!cr.test(e.charAt(n));)n+=1;return{kind:`word`,value:e.slice(t,n),from:t,to:n}},pr=(e,t)=>{let n=t;for(;n<e.length&&sr.test(e.charAt(n));)n+=1;return n},mr=(e,t)=>{let n=t.value.toUpperCase();if(n===`AND`||n===`OR`)return{...t,kind:n===`AND`?`and`:`or`,value:n};if(n===`IN`)return{...t,kind:`operator`,value:`IN`};if(n!==`NOT`)return t;let r=fr(e,pr(e,t.to));return r.value.toUpperCase()===`IN`?{kind:`operator`,value:`NOT IN`,from:t.from,to:r.to}:{...t,kind:`not`,value:n}},hr=e=>{let t=[],n=pr(e,0);for(;n<e.length;){let r=e.charAt(n),i=lr[r],a=ur.find(t=>e.startsWith(t,n)),o;o=i?{kind:i,value:r,from:n,to:n+1}:r===ar?dr(e,n):a?{kind:`operator`,value:a,from:n,to:n+a.length}:cr.test(r)?{kind:`unknown`,value:r,from:n,to:n+1}:mr(e,fr(e,n)),t.push(o),n=pr(e,o.to)}return t}})))()}var _r,vr,yr,br,xr,Sr,Cr,wr,Tr,Er,Dr;function Or(){return(Or=t((()=>{Zn(),_r=`.`,vr=/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/,yr=/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/,br=(e,t)=>e.toLowerCase()===t.toLowerCase(),xr=(e,t)=>e.find(e=>br(e.value,t))??e.find(e=>br(e.label,t)),Sr=10,Cr=e=>{if(!yr.test(e)||Number.isNaN(Date.parse(e)))return!1;let t=e.slice(0,Sr);return new Date(`${t}T00:00:00Z`).toISOString().startsWith(t)},wr=Object.freeze({IN:`=`,"NOT IN":`!=`,">=":`=`,"<=":`=`}),Tr=(e,t)=>{let n=wr[t],r=t===`IN`||t===`NOT IN`?e.type===`enum`:e.type===`number`||e.type===`date`;return n&&r&&e.operators.some(e=>e.value===n)?n:null},Er=(e,t)=>e!==`>=`&&e!==`<=`?t:typeof t==`number`||typeof t==`string`?(e===`>=`?`from`:`to`)==`from`?{from:t,to:null}:{from:null,to:t}:t,Dr=(e,t,n)=>{let r=(t,n)=>{throw new Xn(e,t,n.from,n.to,n.text)},i=e=>{let t=n.find(t=>br(t.id,e.text));if(t?.type===`compound`)return r(`subfieldRequired`,e);if(t)return{field:t.id,scalar:t};let i=e.text.indexOf(_r),a=i===-1?void 0:n.find(t=>br(t.id,e.text.slice(0,i)));if(!a)return r(`unknownField`,e);let o={text:e.text.slice(i+1),from:e.from+i+1,to:e.to},s=a.type===`compound`?a.subfields.find(e=>br(e.id,o.text)):void 0;return s?{field:a.id,subfield:s.id,scalar:s}:r(`unknownSubfield`,o)},a=(e,t)=>{let[n]=t.values;switch(e.type){case`enum`:return t.values.map(t=>xr(e.options,t.text)?.value??r(`unknownOption`,t));case`number`:{let e=Number(n.text);return vr.test(n.text)&&Number.isFinite(e)?e:r(`notANumber`,n)}case`date`:{let t=xr(e.presets??[],n.text);return t?t.value:Cr(n.text)?n.text:r(`invalidDate`,n)}default:return n.text}},o=e=>{let{field:t,subfield:n,scalar:o}=i(e.field),s=e.operator.text;e.list&&o.type!==`enum`&&r(`operatorNotAllowed`,e.operator);let c=o.operators.some(e=>e.value===s),l=c?s:Tr(o,s)??r(`operatorNotAllowed`,e.operator),u=a(o,e);return!c&&(s===`>=`||s===`<=`)&&typeof u==`string`&&!Cr(u)&&r(`operatorNotAllowed`,e.operator),{kind:`clause`,field:t,...n&&{subfield:n},operator:l,value:c?u:Er(s,u),from:e.from,to:e.to}},s=e=>{switch(e.kind){case`clause`:return o(e);case`search`:return e;case`group`:return{kind:`group`,child:s(e.child)};default:return{kind:e.kind,children:e.children.map(s)}}};return s(t)}})))()}var kr,Ar,jr,Mr,Nr;function Pr(){return(Pr=t((()=>{Ee(),Zn(),ir(),gr(),Or(),kr=Object.freeze([`IN`,`NOT IN`]),Ar=e=>ye.some(t=>t===e),jr=e=>({text:e.value,from:e.from,to:e.to}),Mr=(e,t)=>{let n=0,r=(t,n)=>{throw new Xn(e,t,n.from,n.to)},i=()=>t[n],a=e=>r(e.kind===`unterminated`?`unterminatedString`:`unexpectedToken`,e),o=()=>i()??r(`unexpectedEnd`,{from:e.length,to:e.length}),s=e=>{let t=o();return t.kind!==e&&a(t),n+=1,t},c=()=>{let e=o();return e.kind!==`string`&&e.kind!==`word`?a(e):(n+=1,jr(e))},l=()=>{let e=o();e.kind!==`openParen`&&r(`listExpected`,e),n+=1;let t=i();t?.kind===`closeParen`&&r(`emptyList`,{from:e.from,to:t.to});let a=c(),l=[];for(;i()?.kind===`comma`;)n+=1,l.push(c());return{values:[a,...l],to:s(`closeParen`).to}},u=()=>{let e=c();return{values:[e],to:e.to}},d=()=>{let e=s(`word`),t=s(`operator`),n=t.value;if(!Ar(n))return a(t);let r=kr.includes(n),{values:i,to:o}=r?l():u();return{kind:`clause`,field:jr(e),operator:{...jr(t),text:n},values:i,list:r,from:e.from,to:o}},f=()=>{let e=o();if(e.kind===`openParen`){n+=1;let e=h();return s(`closeParen`),{kind:`group`,child:e}}return e.kind===`string`?(n+=1,{kind:`search`,text:e.value,from:e.from,to:e.to}):e.kind===`word`?d():a(e)},p=(e,t)=>{let r=t(),a=[];for(;i()?.kind===e;)n+=1,a.push(t());return a.length?{kind:e,children:[r,...a]}:r},m=()=>p(`and`,f);function h(){return p(`or`,m)}if(!t.length)return{kind:`and`,children:[]};let g=h(),_=i();return _&&a(_),g},Nr=(e,t,n=[])=>{try{let r=Dr(e,Mr(e,hr(e)),t);return{ok:!0,node:r,conditions:rr(r,n)}}catch(e){if(e instanceof Xn)return{ok:!1,error:e.error};throw e}}})))()}var Fr,Ir,Lr,Rr,zr,Br;function Vr(){return(Vr=t((()=>{Fr=` AND `,Ir=e=>`"${e.replace(/[\\"]/g,e=>`\\${e}`)}"`,Lr=e=>typeof e==`number`?String(e):Ir(e),Rr=e=>typeof e==`object`&&`from`in e,zr=e=>{let{value:t,operator:n}=e,r=e.subfield?`${e.field}.${e.subfield}`:e.field;if(Rr(t))return t.from===null&&t.to===null?`${r} = ()`:[t.from===null?``:`${r} >= ${Lr(t.from)}`,t.to===null?``:`${r} <= ${Lr(t.to)}`].filter(Boolean).join(Fr);if(typeof t!=`object`)return`${r} ${n} ${Lr(t)}`;let[i,...a]=t,o=n===`!=`||n===`NOT IN`;return t.length?i!==void 0&&!a.length&&(n===`=`||n===`!=`)?`${r} ${n} ${Lr(i)}`:`${r} ${o?`NOT IN`:`IN`} (${t.map(Lr).join(`, `)})`:`${r} ${o?`NOT IN`:`IN`} ()`},Br=e=>e.map(e=>e.kind===`search`?Ir(e.text):zr(e)).filter(Boolean).join(Fr)})))()}function Hr(){return(Hr=t((()=>{Pr(),Vr()})))()}var Ur,Wr;function Gr(){return(Gr=t((()=>{Ur=`_root_1mpdz_1`,Wr={root:Ur}})))()}var Kr;function qr(){return(qr=t((()=>{Kr=Object.freeze({label:`Advanced query`,placeholder:`status = "Active" AND trigger = "Scheduled"`,searchPlaceholder:`Search in query`,errors:Object.freeze({unexpectedToken:e=>`Unexpected “${e}”`,unexpectedEnd:()=>`The query is incomplete`,unterminatedString:()=>`Close the quoted value with "`,unknownField:e=>`Unknown field “${e}”`,unknownSubfield:e=>`Unknown subfield “${e}”`,subfieldRequired:e=>`Name a subfield of “${e}” after a dot`,operatorNotAllowed:e=>`“${e}” can’t be used with this field`,unknownOption:e=>`“${e}” is not a value of this field`,notANumber:e=>`“${e}” is not a number`,invalidDate:e=>`“${e}” is not a date or a date preset`,listExpected:()=>`Put the values in parentheses, as in IN ("a", "b")`,emptyList:()=>`Add at least one value to the list`}),help:`Query syntax`,helpOperators:`Operators`,helpCombine:`Join clauses with AND or OR, and group them with parentheses. OR and parentheses lock the filters and builder views.`,helpSearch:`A quoted value on its own searches all text, as in "timeout".`,helpExample:`Example`,operators:Object.freeze({"=":`equals`,"!=":`not equals`,">":`greater than`,">=":`greater than or equals`,"<":`less than`,"<=":`less than or equals`,IN:`is one of`,"NOT IN":`is none of`,"~":`contains`,"!~":`does not contain`})})})))()}var Jr,Yr,Xr,Zr;function Qr(){return(Qr=t((()=>{Jr=`_operators_2muaf_5`,Yr=`_operator_2muaf_5`,Xr=`_example_2muaf_27`,Zr={operators:Jr,operator:Yr,example:Xr}})))()}var $r,ei,ti,ni,ri,ii,ai;function oi(){return(oi=t((()=>{Hr(),$r=2,ei=10,ti=`2026-01-01`,ni=`value`,ri=`"timeout"`,ii=e=>{switch(e.type){case`enum`:return e.options.slice(0,1).map(e=>e.value);case`number`:return ei;case`date`:return e.presets?.[0]?.value??ti;default:return ni}},ai=e=>{let t=e.slice(0,$r).flatMap(e=>{let t=e.type===`compound`?e.subfields[0]:void 0,n=e.type===`compound`?t:e,r=n?.operators[0];return!n||!r?[]:[{kind:`field`,id:e.id,field:e.id,...t&&{subfield:t.id},operator:r.value,value:ii(n)}]});return Br(t)||ri}})))()}function si(e){e.preventDefault()}function ci(e){e.preventDefault()}var li,X,ui,di;function fi(){return(fi=t((()=>{li=i(),v(),k(),b(),_(),Ee(),Qr(),oi(),X=r(),ui=360,di=e=>{let t=(0,li.c)(17),{fields:n,locale:r,content:i}=e,a;t[0]===r.help?a=t[1]:(a=(0,X.jsx)(O.Trigger,{children:(0,X.jsx)(y,{variant:`tertiary`,size:`small`,icon:`help`,"aria-label":r.help,onPointerDown:ci})}),t[0]=r.help,t[1]=a);let o;t[2]!==i||t[3]!==n||t[4]!==r.help||t[5]!==r.helpCombine||t[6]!==r.helpExample||t[7]!==r.helpOperators||t[8]!==r.helpSearch||t[9]!==r.operators?(o=i??(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(O.Header,{children:r.help}),(0,X.jsx)(O.Content,{children:(0,X.jsxs)(x,{direction:`column`,gap:`var(--sm)`,children:[(0,X.jsxs)(x,{direction:`column`,gap:`var(--xs)`,children:[(0,X.jsx)(g,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpOperators}),(0,X.jsx)(`dl`,{className:Zr.operators,children:ye.map(e=>(0,X.jsxs)(`div`,{className:Zr.operator,children:[(0,X.jsx)(`dt`,{children:(0,X.jsx)(g,{variant:`code-sm-reg`,color:`main`,children:e})}),(0,X.jsx)(`dd`,{children:r.operators[e]})]},e))})]}),(0,X.jsx)(g,{variant:`body-sm-reg`,color:`secondary`,children:r.helpCombine}),(0,X.jsx)(g,{variant:`body-sm-reg`,color:`secondary`,children:r.helpSearch}),(0,X.jsxs)(x,{direction:`column`,gap:`var(--xs)`,children:[(0,X.jsx)(g,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpExample}),(0,X.jsx)(g,{variant:`code-sm-reg`,color:`main`,className:Zr.example,children:ai(n)})]})]})})]}),t[2]=i,t[3]=n,t[4]=r.help,t[5]=r.helpCombine,t[6]=r.helpExample,t[7]=r.helpOperators,t[8]=r.helpSearch,t[9]=r.operators,t[10]=o):o=t[10];let s;t[11]!==r.help||t[12]!==o?(s=(0,X.jsx)(O.Panel,{width:ui,"aria-label":r.help,children:o}),t[11]=r.help,t[12]=o,t[13]=s):s=t[13];let c;return t[14]!==a||t[15]!==s?(c=(0,X.jsxs)(O.Root,{side:`bottom`,align:`end`,onOpenAutoFocus:si,children:[a,s]}),t[14]=a,t[15]=s,t[16]=c):c=t[16],c}})))()}function pi(){return(pi=t((()=>{fi()})))()}var mi,hi,gi,_i,vi,yi,bi;function xi(){return(xi=t((()=>{mi=i(),hi=n(),gi=e(a(),1),P(),G(),Hr(),Gr(),qr(),pi(),_i=r(),vi=300,yi=e=>{let t=(0,mi.c)(16),{disabled:n,locale:r,slots:i,className:a,style:o}=e,s=n!==void 0&&n,c=W(),l={...Kr,...r,errors:{...Kr.errors,...r?.errors},operators:{...Kr.operators,...r?.operators}},[u,d]=(0,hi.useState)(null),[f,p]=(0,hi.useState)(null),[m,h]=(0,hi.useState)(!1),g=(0,hi.useRef)(void 0),_=(0,hi.useRef)(c),v;t[0]===c?v=t[1]:(v=()=>{_.current=c},t[0]=c,t[1]=v),(0,hi.useEffect)(v);let y,b;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(y=()=>()=>clearTimeout(g.current),b=[],t[2]=y,t[3]=b):(y=t[2],b=t[3]),(0,hi.useEffect)(y,b);let x=u&&(m||u.base===c.queryText)?u:null,S=x?f:null,C;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(C=e=>{let t=_.current,n=Nr(e,t.fields,t.conditions);if(!n.ok)return p(n.error),!1;p(null);let{conditions:r}=n;r?(r.length===t.conditions.length&&r.every((e,n)=>e.id===t.conditions[n]?.id)||t.setConditions(r),t.query!==null&&t.setQuery(null)):t.query!==e&&t.setQuery(e);let i=r?Br(r):e;return d(t=>t?.text===e?{text:e,base:i}:t),!0},t[4]=C):C=t[4];let w=C,T;t[5]!==x?.base||t[6]!==c.queryText?(T=e=>{d({text:e,base:x?.base??c.queryText}),clearTimeout(g.current),g.current=setTimeout(()=>{g.current=void 0,w(e)},vi)},t[5]=x?.base,t[6]=c.queryText,t[7]=T):T=t[7];let E=T,D;t[8]!==x||t[9]!==u?(D=()=>{h(!0),u&&!x&&(d(null),p(null))},t[8]=x,t[9]=u,t[10]=D):D=t[10];let O=D,k;t[11]!==x||t[12]!==f?(k=()=>{if(h(!1),!x)return;let e=g.current!==void 0;clearTimeout(g.current),g.current=void 0,(e?w(x.text):f===null)&&d(null)},t[11]=x,t[12]=f,t[13]=k):k=t[13];let A=k,M=l.label,N;return t[14]===a?N=t[15]:(N=(0,gi.default)(Wr.root,a),t[14]=a,t[15]=N),(0,_i.jsx)(j,{label:M,hideLabel:!0,status:S?`error`:void 0,message:S?l.errors[S.code](S.text):void 0,messageIcon:`error`,className:N,style:o,children:(0,_i.jsx)(j.CodeInput,{value:x?.text??c.queryText,placeholder:l.placeholder,disabled:s,invalid:S!==null,locale:{searchPlaceholder:l.searchPlaceholder,codeLabel:l.label},slots:{endAdornment:(0,_i.jsx)(di,{fields:c.fields,locale:l,content:i?.help})},onValueChange:E,onFocus:O,onBlur:A})})},bi=e=>{let t=(0,mi.c)(3),{resetRevision:n}=W(),r;return t[0]!==e||t[1]!==n?(r=(0,_i.jsx)(yi,{...e},n),t[0]=e,t[1]=n,t[2]=r):r=t[2],r},bi.displayName=`DsFiltersBar.Query`})))()}function Si(){return(Si=t((()=>{xi()})))()}function Ci(){return(Ci=t((()=>{re(),se(),ue(),Ot(),At(),Ft(),Lt(),zt(),Ht(),Yn(),Si()})))()}function wi(e){return e+1}var Ti,Ei,Di,Oi,ki,Ai,ji,Mi,Z;function Ni(){return(Ni=t((()=>{Ti=i(),Ei=e(a(),1),Di=n(),Ci(),G(),ve(),Ee(),gt(),Hr(),yt(),Oi=r(),ki=Object.freeze([]),Ai=Object.freeze([]),ji=Object.freeze([]),Mi=e=>{let t=(0,Ti.c)(51),{fields:n,conditions:r,defaultConditions:i,query:a,defaultQuery:o,pins:s,defaultPins:c,expanded:l,defaultExpanded:u,view:d,defaultView:f,locale:p,ref:m,className:h,style:g,children:_,onConditionsChange:v,onQueryChange:y,onPinsChange:b,onExpandedChange:x,onViewChange:S}=e,C=n===void 0?ki:n,w=i===void 0?Ai:i,T=o===void 0?null:o,E=c===void 0?ji:c,D=u!==void 0&&u,O=f===void 0?`filters`:f,[k,A]=vt(r,v,w),[j,M]=vt(a,y,T),[N,P]=vt(s,b,E),[ee,F]=vt(l,x,D),[I,L]=vt(d,S,O),R=(0,Di.useId)(),z;t[0]===p?z=t[1]:(z={...we,...p},t[0]=p,t[1]=z);let B=z,[V,H]=(0,Di.useState)(0),[U,W]=(0,Di.useState)(null),G;t[2]!==k||t[3]!==j?(G=j??Br(k),t[2]=k,t[3]=j,t[4]=G):G=t[4];let ne=j===null&&k.length===0,re;t[5]===j?re=t[6]:(re=Me(j),t[5]=j,t[6]=re);let ie,ae,oe;t[7]!==k||t[8]!==A?(ie=e=>A(Fe(k,e)),ae=e=>A(Ie(k,e)),oe=e=>A(Le(k,e)),t[7]=k,t[8]=A,t[9]=ie,t[10]=ae,t[11]=oe):(ie=t[9],ae=t[10],oe=t[11]);let se;t[12]===M?se=t[13]:(se=e=>M(je(e)),t[12]=M,t[13]=se);let ce;t[14]!==A||t[15]!==M?(ce=()=>{H(wi),A(Ai),M(null)},t[14]=A,t[15]=M,t[16]=ce):ce=t[16];let le;t[17]!==k||t[18]!==ee||t[19]!==C||t[20]!==B||t[21]!==N||t[22]!==j||t[23]!==V||t[24]!==U||t[25]!==A||t[26]!==F||t[27]!==P||t[28]!==L||t[29]!==re||t[30]!==ie||t[31]!==ae||t[32]!==oe||t[33]!==se||t[34]!==ce||t[35]!==G||t[36]!==ne||t[37]!==R||t[38]!==I?(le={fields:C,conditions:k,query:j,queryText:G,resetRevision:V,pins:N,isEmpty:ne,lockedViews:re,expanded:ee,view:I,toolbarId:R,locale:B,setConditions:A,addCondition:ie,updateCondition:ae,removeCondition:oe,setQuery:se,setPins:P,clear:ce,setExpanded:F,setView:L,search:U,registerSearch:W},t[17]=k,t[18]=ee,t[19]=C,t[20]=B,t[21]=N,t[22]=j,t[23]=V,t[24]=U,t[25]=A,t[26]=F,t[27]=P,t[28]=L,t[29]=re,t[30]=ie,t[31]=ae,t[32]=oe,t[33]=se,t[34]=ce,t[35]=G,t[36]=ne,t[37]=R,t[38]=I,t[39]=le):le=t[39];let ue=B.label,de;t[40]===h?de=t[41]:(de=(0,Ei.default)(_e.root,h),t[40]=h,t[41]=de);let fe;t[42]!==_||t[43]!==B.label||t[44]!==m||t[45]!==g||t[46]!==de?(fe=(0,Oi.jsx)(`div`,{ref:m,role:`region`,"aria-label":ue,className:de,style:g,children:_}),t[42]=_,t[43]=B.label,t[44]=m,t[45]=g,t[46]=de,t[47]=fe):fe=t[47];let pe;return t[48]!==le||t[49]!==fe?(pe=(0,Oi.jsx)(te.Provider,{value:le,children:fe}),t[48]=le,t[49]=fe,t[50]=pe):pe=t[50],pe},Mi.displayName=`DsFiltersBar.Root`,Z={Root:Mi,Summary:kt,Toolbar:Pt,SavedFilters:ce,SaveFilter:le,Search:Dt,ViewSwitch:Rt,View:It,Conditions:qn,Builder:Bt,Query:bi,ClearAll:ne,Pinned:ie,PinnedGroup:ae,PinnedToggle:oe}})))()}function Pi(){return(Pi=t((()=>{Ni()})))()}var Q,$,Fi,Ii,Li,Ri,zi,Bi,Vi,Hi,Ui;function Wi(){return(Wi=t((()=>{Pi(),Ee(),Q=r(),{fn:$}=__STORYBOOK_MODULE_TEST__,Fi={title:`Components/FiltersBar`,component:Z.Root,tags:[`!manifest`],parameters:{layout:`padded`,docs:{description:{component:'\n**Work in progress — the API is wired, but only some parts render.** `Root`, `Toolbar`,\n`Search`, `Conditions` (the add-filter button with its filters dialog, and a chip per\ncondition) and the advanced query view render; the other parts render nothing yet. Until `ViewSwitch` renders, the stories place the advanced view\ndirectly under `Root`.\n\n**Internal component.** Not exported from `@drivenets/design-system` while it is being built.\n\nA toolbar above a table or list for narrowing the data with filters, a query builder or an advanced\nquery, with **Saved filters** and a pinned row of quick toggles.\n\n**One filter document.** `Root` owns `conditions` and `query` (controlled or uncontrolled)\nand describes what can be filtered through `fields`. Every view reads and writes that same\ndocument, so a condition built in the query builder shows as a chip in the filters view and in the\ncollapsed summary.\n\n**One query language.** The advanced view writes the conditions as query text and checks what the\nuser types against `fields`: `status IN ("active", "pending") AND input.vendor ~ "cisco"`.\nOnly a valid query reaches the document. One made of clauses joined by `AND` becomes conditions;\none with `OR` or parentheses becomes `query`, the only source, and the filters and builder\nviews lock until it is cleared. Evaluate such a query with `parseFilterQuery(query, fields)`.\n\n**Pins are a user preference,** not part of the document: loading a saved filter or clearing leaves\nthem alone.\n\n**Collapsed shows a summary, expanded shows the toolbar.** `Summary` renders while collapsed,\n`Toolbar` while expanded; `Pinned` renders in both.\n                '}}},argTypes:{expanded:{control:`boolean`},defaultExpanded:{control:`boolean`},view:{control:`select`,options:Ce},defaultView:{control:`select`,options:Ce},children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},onConditionsChange:{table:{disable:!0}},onQueryChange:{table:{disable:!0}},onPinsChange:{table:{disable:!0}},onExpandedChange:{table:{disable:!0}},onViewChange:{table:{disable:!0}}},args:{onConditionsChange:$(),onQueryChange:$(),onPinsChange:$(),onExpandedChange:$(),onViewChange:$()}},Ii={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]},{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`}]}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`},{kind:`field`,id:`c2`,field:`status`,operator:`!=`,value:[`active`]},{kind:`field`,id:`c3`,field:`input`,subfield:`name`,operator:`~`,value:`WF456`},{kind:`field`,id:`c4`,field:`lastRun`,operator:`=`,value:`last7Days`}],defaultPins:[{field:`status`,value:`active`},{field:`status`,value:`pending`}]},render:e=>(0,Q.jsxs)(Z.Root,{...e,children:[(0,Q.jsx)(Z.Summary,{count:18}),(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.SavedFilters,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onValueChange:$(),onClear:$(),onRename:$(),onDelete:$()}),(0,Q.jsx)(Z.Search,{}),(0,Q.jsx)(Z.ViewSwitch,{}),(0,Q.jsx)(Z.View,{value:`filters`,children:(0,Q.jsx)(Z.Conditions,{})}),(0,Q.jsx)(Z.View,{value:`builder`,children:(0,Q.jsx)(Z.Builder,{suggestedFields:[`input`,`status`]})}),(0,Q.jsx)(Z.SaveFilter,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onUpdate:$(),onSaveAs:$()}),(0,Q.jsx)(Z.ClearAll,{})]}),(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})}),(0,Q.jsx)(Z.Pinned,{children:(0,Q.jsxs)(Z.PinnedGroup,{label:`Status`,children:[(0,Q.jsx)(Z.PinnedToggle,{label:`Active`,count:10,active:!0}),(0,Q.jsx)(Z.PinnedToggle,{label:`Pending`,count:0,active:!1})]})})]})},Li={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`},{value:`draft`,label:`Draft`}]},{type:`enum`,id:`workflow`,label:`Workflow`,operators:[{value:`IN`,label:`is any of`,symbol:`∈`},{value:`NOT IN`,label:`is none of`,symbol:`∉`}],options:[{value:`deploy`,label:`Deploy`},{value:`backup`,label:`Backup`},{value:`upgrade`,label:`Upgrade`},{value:`rollback`,label:`Rollback`},{value:`healthCheck`,label:`Health check`},{value:`provision`,label:`Provision`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`manual`,label:`Manual`},{value:`scheduled`,label:`Scheduled`},{value:`api`,label:`API`},{value:`webhook`,label:`Webhook`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`!=`,value:[`deprecated`,`draft`]},{kind:`field`,id:`c2`,field:`trigger`,operator:`=`,value:[`scheduled`]},{kind:`field`,id:`c3`,field:`parents`,operator:`=`,value:{from:1,to:5}}],defaultPins:[{field:`status`,value:`active`},{field:`workflow`,value:`deploy`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.Toolbar,{children:(0,Q.jsx)(Z.Conditions,{})})})},Ri={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`}],options:[{value:`active`,label:`Active`},{value:`pending`,label:`Pending`}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.Search,{}),(0,Q.jsx)(Z.View,{value:`filters`,children:(0,Q.jsx)(Z.Conditions,{})})]})})},zi={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`enum`,id:`lastRunResult`,label:`Last run result`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`succeeded`,label:`Succeeded`},{value:`failed`,label:`Failed`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`manual`,label:`Manual`},{value:`scheduled`,label:`Scheduled`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`!=`,value:[`active`,`pending`]},{kind:`field`,id:`c2`,field:`lastRunResult`,operator:`!=`,value:[`succeeded`]},{kind:`field`,id:`c3`,field:`trigger`,operator:`=`,value:[`scheduled`]},{kind:`field`,id:`c4`,field:`parents`,operator:`=`,value:{from:1,to:5}},{kind:`field`,id:`c5`,field:`lastRun`,operator:`>`,value:`last7Days`},{kind:`field`,id:`c6`,field:`input`,subfield:`name`,operator:`~`,value:`WF456`},{kind:`search`,id:`c7`,text:`AAA`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.Search,{}),(0,Q.jsx)(Z.View,{value:`filters`,children:(0,Q.jsx)(Z.Conditions,{})})]})})},Bi={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`},{value:`!=`,label:`not equals`},{value:`IN`,label:`is one of`},{value:`NOT IN`,label:`is none of`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`},{value:`<`,label:`less than`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`},{value:`~`,label:`contains`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`IN`,value:[`active`,`pending`]},{kind:`field`,id:`c2`,field:`input`,subfield:`vendor`,operator:`~`,value:`cisco`},{kind:`search`,id:`c3`,text:`timeout`}]},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})})})},Vi={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`}],options:[{value:`scheduled`,label:`Scheduled`}]}],defaultQuery:`status = "active" OR trigger = "scheduled"`},render:e=>(0,Q.jsx)(Z.Root,{...e,children:(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{})})})},Hi={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]}],locale:{label:`Refine results`,expand:`Show refinements`,collapse:`Hide refinements`}},render:e=>(0,Q.jsxs)(Z.Root,{...e,children:[(0,Q.jsxs)(Z.Toolbar,{children:[(0,Q.jsx)(Z.Search,{locale:{label:`Find`,placeholder:`Press ‘/’ to find`}}),(0,Q.jsx)(Z.ViewSwitch,{locale:{views:{filters:`Quick filters`,builder:`Guided query`,advanced:`Query editor`}}}),(0,Q.jsx)(Z.ClearAll,{locale:{label:`Reset`}})]}),(0,Q.jsx)(Z.View,{value:`advanced`,children:(0,Q.jsx)(Z.Query,{locale:{label:`Query editor`,placeholder:`status = "Active"`,help:`Syntax`}})})]})},Ui=[`Default`,`FiltersDialog`,`Search`,`SelectedFilters`,`AdvancedQuery`,`LockedViews`,`Localized`],Ii.parameters={...Ii.parameters,docs:{...Ii.parameters?.docs,source:{originalSource:`{
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
}`,...Ii.parameters?.docs?.source},description:{story:"The canonical layout. `fields` describes what can be filtered; `defaultConditions` seeds the\ndocument with a search, an enum, a compound-field and a date-preset condition — one of each shape.\nOnly the advanced query renders for now; the other parts are in progress.",...Ii.parameters?.docs?.description}}},Li.parameters={...Li.parameters,docs:{...Li.parameters?.docs,source:{originalSource:`{
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
      }, {
        value: '!=',
        label: 'not equals',
        symbol: '≠'
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
    }, {
      type: 'number',
      id: 'parents',
      label: 'Parents',
      operators: [{
        value: '=',
        label: 'equals',
        symbol: '='
      }, {
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
    }, {
      kind: 'field',
      id: 'c3',
      field: 'parents',
      operator: '=',
      value: {
        from: 1,
        to: 5
      }
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
}`,...Li.parameters?.docs?.source},description:{story:`The "+" button in \`Conditions\` opens the filters dialog, with one tab per field and per compound
subfield. An enum tab has an operator, an option search, and a checkbox and pin per option. Text,
number and date tabs have an operator and a value; number and date tabs add **between** for a
range, and a date tab lists its presets. Edits stay a draft until **Save filters** writes one
condition per tab with a value, and the pins, back to the document; closing any other way drops
the draft. Search conditions are left as they are.`,...Li.parameters?.docs?.description}}},Ri.parameters={...Ri.parameters,docs:{...Ri.parameters?.docs,source:{originalSource:`{
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
}`,...Ri.parameters?.docs?.source},description:{story:`Enter adds the typed text as a search condition, shown as a chip after the "+" button, and clears
the input; the same search is not added twice. \\\`/\\\` focuses the input from anywhere outside a text
field or dialog. Clicking a chip moves its text back into the input for editing; its × removes it.
Search is disabled while an Advanced query is the source.`,...Ri.parameters?.docs?.description}}},zi.parameters={...zi.parameters,docs:{...zi.parameters?.docs,source:{originalSource:`{
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
        value: 'pending',
        label: 'Pending'
      }]
    }, {
      type: 'enum',
      id: 'lastRunResult',
      label: 'Last run result',
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
        value: 'succeeded',
        label: 'Succeeded'
      }, {
        value: 'failed',
        label: 'Failed'
      }]
    }, {
      type: 'enum',
      id: 'trigger',
      label: 'Trigger',
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
        value: 'manual',
        label: 'Manual'
      }, {
        value: 'scheduled',
        label: 'Scheduled'
      }]
    }, {
      type: 'number',
      id: 'parents',
      label: 'Parents',
      operators: [{
        value: '=',
        label: 'equals',
        symbol: '='
      }, {
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
      }]
    }],
    defaultConditions: [{
      kind: 'field',
      id: 'c1',
      field: 'status',
      operator: '!=',
      value: ['active', 'pending']
    }, {
      kind: 'field',
      id: 'c2',
      field: 'lastRunResult',
      operator: '!=',
      value: ['succeeded']
    }, {
      kind: 'field',
      id: 'c3',
      field: 'trigger',
      operator: '=',
      value: ['scheduled']
    }, {
      kind: 'field',
      id: 'c4',
      field: 'parents',
      operator: '=',
      value: {
        from: 1,
        to: 5
      }
    }, {
      kind: 'field',
      id: 'c5',
      field: 'lastRun',
      operator: '>',
      value: 'last7Days'
    }, {
      kind: 'field',
      id: 'c6',
      field: 'input',
      subfield: 'name',
      operator: '~',
      value: 'WF456'
    }, {
      kind: 'search',
      id: 'c7',
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
}`,...zi.parameters?.docs?.source},description:{story:`Every condition shows as a chip after the "+" button: the field, its operator and the value, with
\`Input › Name\` for a compound field's subfield. When the field has more than one operator, the
operator is a menu that switches it in place; a field with one operator shows it as text, and a
range shows none, since it means "within". Clicking a chip opens the filters dialog on that field;
× removes a condition. While an Advanced query is the source, the chips and the "+" button are
hidden.`,...zi.parameters?.docs?.description}}},Bi.parameters={...Bi.parameters,docs:{...Bi.parameters?.docs,source:{originalSource:`{
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
}`,...Bi.parameters?.docs?.source},description:{story:"The advanced view shows the conditions as query text. Edit it: a query joined by `AND` goes back\nto the conditions, and one that breaks the rules shows why under the field.",...Bi.parameters?.docs?.description}}},Vi.parameters={...Vi.parameters,docs:{...Vi.parameters?.docs,source:{originalSource:`{
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
}`,...Vi.parameters?.docs?.source},description:{story:"A query with `OR` or parentheses cannot be shown as conditions, so it becomes the only source:\nthe conditions are ignored and the filters and builder views lock until the query is cleared.",...Vi.parameters?.docs?.description}}},Hi.parameters={...Hi.parameters,docs:{...Hi.parameters?.docs,source:{originalSource:`{
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
}`,...Hi.parameters?.docs?.source},description:{story:"`Root` takes its own strings through `locale`; each part takes its own `locale` too.",...Hi.parameters?.docs?.description}}}})))()}Wi();export{Bi as AdvancedQuery,Ii as Default,Li as FiltersDialog,Hi as Localized,Vi as LockedViews,Ri as Search,zi as SelectedFilters,Ui as __namedExportsOrder,Fi as default};