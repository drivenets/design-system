import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-DrNEocAe.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-icon-CelRWOmr.js";import{t as c}from"./ds-number-input-rJzsUNQc.js";import{t as l}from"./ds-dropdown-menu-quJxTIXc.js";import{n as u,t as d}from"./ds-checkbox-4ePK9goK.js";import{t as f}from"./ds-select-DvLaNc65.js";import{t as p}from"./ds-radio-group-Ccm3i31Y.js";import{a as m,i as h,n as g,t as _}from"./ds-typography-C_suCm9r.js";import{n as v,t as y}from"./ds-button-v3-DIPDZv0a.js";import{n as b,t as x}from"./ds-stack-SKww6dw0.js";import{t as S}from"./ds-text-input-zi20xuGN.js";import{t as C}from"./ds-text-input-BlBaRQbb.js";import{t as w}from"./ds-dropdown-menu-Bhb215bA.js";import{n as T,t as E}from"./use-controlled-CNEmuIQZ.js";import{t as D}from"./ds-select-Dp7Osw53.js";import{t as O}from"./ds-popover-t7YA5_X8.js";import{t as k}from"./ds-popover-Bw7msixb.js";import{r as A,t as j}from"./ds-form-control-BU0J-Wux.js";import{t as M}from"./ds-date-input--_ByLv0F.js";import{t as N}from"./ds-date-input-F8UeRlBh.js";import{t as P}from"./ds-form-control-QY3rOkk6.js";import{n as F,t as I}from"./ds-pin-toggle-BheGd9wp.js";import{t as L}from"./ds-tag-DZeDzq8A.js";import{t as R}from"./ds-tag-D7EatS4f.js";import{t as z}from"./ds-modal-vOAw6d_F.js";import{t as B}from"./ds-modal-CwPFQzPB.js";import{t as V}from"./ds-radio-group-CidxhR3c.js";import{t as H}from"./ds-vertical-tabs-BI1_emlZ.js";import{t as U}from"./ds-vertical-tabs-Di9d5xVr.js";var ee,te,W;function G(){return(G=t((()=>{ee=n(),te=(0,ee.createContext)(null),W=()=>{let e=(0,ee.useContext)(te);if(!e)throw Error(`DsFiltersBar compound components must be used within DsFiltersBar.Root`);return e}})))()}var ne;function re(){return(re=t((()=>{G(),ne=()=>(W(),null),ne.displayName=`DsFiltersBar.ClearAll`})))()}var ie,ae,oe;function se(){return(se=t((()=>{G(),ie=()=>(W(),null),ie.displayName=`DsFiltersBar.Pinned`,ae=()=>(W(),null),ae.displayName=`DsFiltersBar.PinnedGroup`,oe=()=>(W(),null),oe.displayName=`DsFiltersBar.PinnedToggle`})))()}var ce,le;function ue(){return(ue=t((()=>{G(),ce=()=>(W(),null),ce.displayName=`DsFiltersBar.SavedFilters`,le=()=>(W(),null),le.displayName=`DsFiltersBar.SaveFilter`})))()}var de,fe,pe,me,he,ge,_e;function ve(){return(ve=t((()=>{de=`_root_1qkx5_1`,fe=`_toolbar_1qkx5_9`,pe=`_conditions_1qkx5_17`,me=`_search_1qkx5_25`,he=`_operatorTrigger_1qkx5_30`,ge=`_operatorText_1qkx5_51`,_e={root:de,toolbar:fe,conditions:pe,search:me,operatorTrigger:he,operatorText:ge}})))()}var ye,be,xe,Se,Ce,we,Te;function Ee(){return(Ee=t((()=>{ye=[`=`,`!=`,`>`,`>=`,`<`,`<=`,`IN`,`NOT IN`,`~`,`!~`],be=[`=`,`!=`,`IN`,`NOT IN`],xe=[`=`,`!=`,`~`,`!~`],Se=[`=`,`!=`,`>`,`>=`,`<`,`<=`],Ce=[`filters`,`builder`,`advanced`],we=Object.freeze({label:`Filters`,expand:`Show filters`,collapse:`Hide filters`}),Object.freeze({resultCount:e=>`${String(e)} results`,activeSavedFilter:`Filter`,emptyLabel:`View`,emptyValue:`All`}),Te=Object.freeze({label:`Search`,placeholder:`Type ‘/’ to search`,clear:`Clear search`}),Object.freeze({label:`Filter view`,views:Object.freeze({filters:`Filters`,builder:`Query builder`,advanced:`Advanced query`}),lockedView:`Clear the advanced query to switch views`}),Object.freeze({label:`Clear all`}),Object.freeze({label:`Pinned`})})))()}var De,Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re,ze,Be,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe,$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt;function _t(){return(_t=t((()=>{Ee(),De=2,Oe=16,ke=Object.freeze([`filters`,`builder`]),Ae=Object.freeze([]),je=e=>e?.trim()?e:null,Me=e=>e===null?Ae:ke,Ne=()=>{let e=crypto.getRandomValues(new Uint32Array(De));return`condition-${Array.from(e,e=>e.toString(Oe)).join(``)}`},Pe=e=>{let t=e.trim();return t?{kind:`search`,id:Ne(),text:t}:null},Fe=(e,t)=>[...e,t],Ie=(e,t)=>e.map(e=>e.id===t.id?t:e),Le=(e,t)=>e.filter(e=>e.id!==t),Re=` – `,ze=(e,t)=>e.find(e=>e.value===t)?.label??t,Be=e=>typeof e==`object`&&`from`in e,Ve=(e,t)=>{if(Be(e))return[e.from??``,e.to??``].map(String).join(Re).trim();if(typeof e==`object`){let n=t?.type===`enum`?t.options:[];return e.map(e=>ze(n,e)).join(`, `)}return typeof e==`string`&&t?.type===`date`?ze(t.presets??[],e):String(e)},He=(e,t)=>{if(e.kind===`search`)return{fieldPath:[],value:e.text};let n=t.find(t=>t.id===e.field),r=n?.type===`compound`?n.subfields.find(t=>t.id===e.subfield):void 0,i=n?.type===`compound`?r:n,a=i?.operators.find(t=>t.value===e.operator),o=[n?.label??e.field];return e.subfield&&o.push(r?.label??e.subfield),{fieldPath:o,operator:a?.label??e.operator,operatorSymbol:a?.symbol??e.operator,value:Ve(e.value,i)}},Ue=({fieldPath:e,operator:t,value:n})=>[...e,t,n].filter(Boolean).join(` `),We=2,Ge=(e,t)=>{if(Be(e.value))return null;let n=t.find(t=>t.id===e.field),r=n?.type===`compound`?n.subfields.find(t=>t.id===e.subfield):n;return!r||r.operators.length<We?null:r.operators},Ke=`.`,qe=` › `,Je=(e,t)=>e.type===`enum`&&!e.options.length?null:t?{id:`${t.id}${Ke}${e.id}`,field:t.id,subfield:e.id,label:`${t.label}${qe}${e.label}`,schema:e}:{id:e.id,field:e.id,label:e.label,schema:e},Ye=e=>e.flatMap(e=>(e.type===`compound`?e.subfields.map(t=>Je(t,e)):[Je(e)]).filter(e=>e!==null)),Xe=e=>e.schema.type===`enum`&&!e.subfield,Ze=(e,t)=>e.field===t.field&&e.subfield===t.subfield&&e.type===t.schema.type,Qe=(e,t)=>e.includes(t),$e=(e,t)=>{let{value:n,operator:r}=e;return Be(n)?r===`=`&&[n.from,n.to].every(e=>e===null||typeof e===t):typeof n===t&&Qe(Se,r)},et=(e,t)=>e.schema.operators.some(e=>e.value===t),tt=(e,t)=>{if(t.kind!==`field`||t.field!==e.field||t.subfield!==e.subfield||!et(e,t.operator))return!1;switch(e.schema.type){case`enum`:return Qe(be,t.operator)&&Array.isArray(t.value);case`text`:return Qe(xe,t.operator)&&typeof t.value==`string`;case`number`:return $e(t,`number`);case`date`:return $e(t,`string`)}},nt=(e,t)=>Ye(t).find(t=>tt(t,e))?.id,rt=`between`,it=Object.freeze([]),at=Object.freeze({from:null,to:null}),ot=e=>{let t=e.subfield?{field:e.field,subfield:e.subfield}:{field:e.field};switch(e.schema.type){case`enum`:return{...t,type:`enum`,operator:e.schema.operators[0]?.value??`=`,selected:it,pinned:it};case`text`:return{...t,type:`text`,operator:e.schema.operators[0]?.value??`=`,text:``};case`number`:return{...t,type:`number`,operator:e.schema.operators[0]?.value??`=`,value:null,range:at};case`date`:return{...t,type:`date`,operator:e.schema.operators[0]?.value??`=`,preset:null,date:null,range:at}}},st=e=>{let t=e.find(e=>e.operator===`>=`&&!Be(e.value)),n=e.find(e=>e.operator===`<=`&&!Be(e.value));return!t||!n?null:{from:t.value,to:n.value}},ct=(e,t,n)=>{let r=ot(e),[i]=t;if(r.type===`enum`)return i?{...r,operator:i.operator,selected:i.value,pinned:n}:{...r,pinned:n};if(!i)return r;if(r.type===`text`)return{...r,operator:i.operator,text:i.value};let a=et(e,`=`)?st(t)??(Be(i.value)?i.value:null):null;if(r.type===`number`)return a?{...r,operator:rt,range:a}:{...r,operator:i.operator,value:i.value};if(a)return{...r,operator:rt,range:a};let o=i.value,s=e.schema.type===`date`&&!!e.schema.presets?.some(e=>e.value===o);return{...r,operator:i.operator,preset:s?o:null,date:s?null:o}},lt=(e,t,n)=>Ye(e).flatMap(e=>{let r=t.filter(t=>tt(e,t)),i=Xe(e)?n.filter(t=>t.field===e.field).map(e=>e.value):[];return!r.length&&!i.length?[]:[ct(e,r,i)]}),ut=e=>e.from!==null||e.to!==null,dt=e=>{switch(e.type){case`enum`:return e.selected.length?{operator:e.operator,value:e.selected}:null;case`text`:return e.text.trim()?{operator:e.operator,value:e.text.trim()}:null;case`number`:return e.operator===rt?ut(e.range)?{operator:`=`,value:e.range}:null:e.value===null?null:{operator:e.operator,value:e.value};case`date`:{if(e.operator===rt)return ut(e.range)?{operator:`=`,value:e.range}:null;let t=e.preset??e.date;return t===null?null:{operator:e.operator,value:t}}}},ft=e=>dt(e)!==null,pt=(e,t)=>Array.isArray(e)&&Array.isArray(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):Be(e)&&Be(t)?e.from===t.from&&e.to===t.to:e===t,mt=(e,t)=>e===null||t===null?e===t:e.operator===t.operator&&pt(e.value,t.value),ht=(e,t,n)=>({kind:`field`,id:n,field:e.field,...e.subfield?{subfield:e.subfield}:{},...t}),gt=(e,t,n,r)=>{let i=Ye(e),a=i.flatMap(e=>r.find(t=>Ze(t,e))??[]),o=lt(e,t,n),s=(e,t)=>{let n=e.find(e=>Ze(e,t));return n?dt(n):null},c=new Set(i.filter(e=>!mt(s(o,e),s(a,e))).map(e=>e.id)),l=new Map(i.flatMap(e=>{let t=a.find(t=>Ze(t,e)),n=t&&dt(t);return t&&n?[[e.id,{entry:t,saved:n}]]:[]})),u=new Set,d=t.flatMap(e=>{let t=i.find(t=>tt(t,e));if(!t||!c.has(t.id))return[e];let n=l.get(t.id);return!n||u.has(t.id)?[]:(u.add(t.id),[ht(n.entry,n.saved,e.id)])}),f=[...l.entries()].filter(([e])=>c.has(e)&&!u.has(e)).map(([,e])=>ht(e.entry,e.saved,Ne())),p=a.filter(e=>e.type===`enum`&&!e.subfield),m=new Map(p.map(e=>[e.field,e.pinned])),h=e=>i.some(t=>Xe(t)&&t.field===e),g=n.filter(e=>!h(e.field)||!!m.get(e.field)?.includes(e.value)),_=p.flatMap(e=>e.pinned.filter(t=>!g.some(n=>n.field===e.field&&n.value===t)).map(t=>({field:e.field,value:t})));return{conditions:[...d,...f],pins:[...g,..._]}}})))()}var vt,yt;function bt(){return(bt=t((()=>{vt=i(),E(),yt=(e,t,n)=>{let r=(0,vt.c)(7),[i,a]=T(e,t,n),o;r[0]!==t||r[1]!==a||r[2]!==e?(o=n=>{a(n),e===void 0&&t?.(n)},r[0]=t,r[1]=a,r[2]=e,r[3]=o):o=r[3];let s=o,c;return r[4]!==i||r[5]!==s?(c=[i,s],r[4]=i,r[5]=s,r[6]=c):c=r[6],c}})))()}var xt,St,Ct,wt,Tt,Et,Dt,Ot;function kt(){return(kt=t((()=>{xt=i(),St=e(a(),1),Ct=n(),h(),v(),P(),s(),G(),ve(),Ee(),_t(),bt(),wt=r(),Tt=`/`,Et=`input, textarea, select, [contenteditable]:not([contenteditable="false"])`,Dt=e=>!(e instanceof Element&&(e.closest(Et)||e.closest(`[role="dialog"]`))),Ot=e=>{let t=(0,xt.c)(44),{value:n,defaultValue:r,disabled:i,locale:a,ref:s,className:c,style:l,onValueChange:u}=e,d=r===void 0?``:r,f=i!==void 0&&i,{conditions:p,query:h,addCondition:g,registerSearch:_}=W(),v;t[0]===a?v=t[1]:(v={...Te,...a},t[0]=a,t[1]=v);let b=v,[x,S]=yt(n,u,d),C=(0,Ct.useRef)(null),w=f||h!==null,T;t[2]===S?T=t[3]:(T=e=>{S(e),C.current?.focus()},t[2]=S,t[3]=T);let E=T,D=(0,Ct.useRef)(E),O;t[4]===E?O=t[5]:(O=()=>{D.current=E},t[4]=E,t[5]=O),(0,Ct.useLayoutEffect)(O);let k,A;t[6]===_?(k=t[7],A=t[8]):(k=()=>(_({edit:e=>D.current(e)}),()=>_(null)),A=[_],t[6]=_,t[7]=k,t[8]=A),(0,Ct.useEffect)(k,A);let M,N;t[9]===w?(M=t[10],N=t[11]):(M=()=>{if(w)return;let e=e=>{e.key!==Tt||e.defaultPrevented||e.ctrlKey||e.metaKey||e.altKey||!Dt(e.target)||(e.preventDefault(),C.current?.focus())};return document.addEventListener(`keydown`,e),()=>document.removeEventListener(`keydown`,e)},N=[w],t[9]=w,t[10]=M,t[11]=N),(0,Ct.useEffect)(M,N);let P;t[12]!==g||t[13]!==p||t[14]!==S||t[15]!==x?(P=e=>{if(e.key!==`Enter`||e.nativeEvent.isComposing)return;let t=Pe(x);t&&(p.some(e=>e.kind===`search`&&e.text===t.text)||g(t),S(``))},t[12]=g,t[13]=p,t[14]=S,t[15]=x,t[16]=P):P=t[16];let F=P,I;t[17]===S?I=t[18]:(I=()=>{S(``),C.current?.focus()},t[17]=S,t[18]=I);let L=I,R=b.label,z;t[19]===c?z=t[20]:(z=(0,St.default)(_e.search,c),t[19]=c,t[20]=z);let B;t[21]===s?B=t[22]:(B=m(C,s),t[21]=s,t[22]=B);let V;t[23]===Symbol.for(`react.memo_cache_sentinel`)?(V=(0,wt.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0}),t[23]=V):V=t[23];let H;t[24]!==w||t[25]!==L||t[26]!==b.clear||t[27]!==x?(H=x&&!w?(0,wt.jsx)(y,{variant:`tertiary`,color:`default`,size:`tiny`,icon:`close`,"aria-label":b.clear,onClick:L}):void 0,t[24]=w,t[25]=L,t[26]=b.clear,t[27]=x,t[28]=H):H=t[28];let U;t[29]===H?U=t[30]:(U={startAdornment:V,endAdornment:H},t[29]=H,t[30]=U);let ee;t[31]!==w||t[32]!==F||t[33]!==b.placeholder||t[34]!==S||t[35]!==B||t[36]!==U||t[37]!==x?(ee=(0,wt.jsx)(j.TextInput,{ref:B,size:`small`,value:x,placeholder:b.placeholder,disabled:w,slots:U,onValueChange:S,onKeyDown:F}),t[31]=w,t[32]=F,t[33]=b.placeholder,t[34]=S,t[35]=B,t[36]=U,t[37]=x,t[38]=ee):ee=t[38];let te;return t[39]!==b.label||t[40]!==l||t[41]!==z||t[42]!==ee?(te=(0,wt.jsx)(j,{label:R,hideLabel:!0,className:z,style:l,children:ee}),t[39]=b.label,t[40]=l,t[41]=z,t[42]=ee,t[43]=te):te=t[43],te},Ot.displayName=`DsFiltersBar.Search`})))()}var At;function jt(){return(jt=t((()=>{G(),At=()=>(W(),null),At.displayName=`DsFiltersBar.Summary`})))()}var Mt,Nt,Pt,Ft;function It(){return(It=t((()=>{Mt=i(),Nt=e(a(),1),G(),ve(),Pt=r(),Ft=e=>{let t=(0,Mt.c)(7),{className:n,style:r,children:i}=e,{expanded:a,toolbarId:o}=W();if(!a)return null;let s;t[0]===n?s=t[1]:(s=(0,Nt.default)(_e.toolbar,n),t[0]=n,t[1]=s);let c;return t[2]!==i||t[3]!==r||t[4]!==s||t[5]!==o?(c=(0,Pt.jsx)(`div`,{id:o,className:s,style:r,children:i}),t[2]=i,t[3]=r,t[4]=s,t[5]=o,t[6]=c):c=t[6],c},Ft.displayName=`DsFiltersBar.Toolbar`})))()}var Lt;function Rt(){return(Rt=t((()=>{G(),Lt=e=>{let{value:t,children:n}=e,{view:r}=W();return r===t?n:null},Lt.displayName=`DsFiltersBar.View`})))()}var zt;function Bt(){return(Bt=t((()=>{G(),zt=()=>(W(),null),zt.displayName=`DsFiltersBar.ViewSwitch`})))()}var Vt;function Ht(){return(Ht=t((()=>{Vt=Object.freeze({title:`Query builder`,close:`Close`,clear:`Clear selection`,searchField:`Search field`,selectField:`Select a field`,searchSubfield:`Search subfield`,selectSubfield:`Select a subfield`,searchOperator:`Search operator`,selectOperator:`Select an operator`,searchValue:`Search value`,selectValue:`Select a value`,valuePlaceholder:`Value`,save:`Save query`})})))()}var Ut,Wt,Gt,Kt,qt,Jt,Yt,Xt,Zt,Qt,$t,en,tn,nn,rn,an,on,sn,cn,ln;function un(){return(un=t((()=>{Ut=/^-?\d+(\.\d+)?$/,Wt=()=>({fieldId:null,subfieldId:null,operator:null,valueText:``,optionValue:null,query:``}),Gt=e=>e.operators[0]?.value??null,Kt=(e,t)=>{let n=t.trim().toLowerCase();return!n||e.toLowerCase().includes(n)},qt=(e,t)=>{if(!t)return e;let n=new Set;return t.flatMap(t=>{if(n.has(t))return[];n.add(t);let r=e.find(e=>e.id===t);return r?[r]:[]})},Jt=(e,t)=>{let n=e.find(e=>e.id===t.fieldId);return n?n.type===`compound`?{field:n,scalar:n.subfields.find(e=>e.id===t.subfieldId)??null}:{field:n,scalar:n}:null},Yt=(e,t)=>e?e.scalar?e.scalar.type!==`enum`&&!t.operator?`operator`:`value`:`subfield`:`field`,Xt=(e,t)=>{let n=Jt(e,t);return Yt(n,t)===`value`&&n?.scalar?.type!==`enum`},Zt=(e,t,n)=>{let r=t.query.trim();return(r?e:qt(e,n)).filter(e=>Kt(e.label,r)).map(e=>({kind:`field`,id:e.id,label:e.label}))},Qt=(e,t)=>e.field.type===`compound`?e.field.subfields.filter(e=>Kt(e.label,t)).map(e=>({kind:`subfield`,id:e.id,label:e.label})):[],$t=(e,t)=>e.operators.filter(e=>Kt(e.label,t)).map(e=>({kind:`operator`,id:e.value,label:e.label})),en=(e,t)=>e.type===`enum`?e.options.filter(e=>Kt(e.label,t)).map(e=>({kind:`option`,id:e.value,label:e.label})):e.type===`date`?(e.presets??[]).map(e=>({kind:`option`,id:e.value,label:e.label})):[],tn=(e,t)=>{if(!e)return null;if(e.type===`enum`)return e.options.find(e=>e.value===t.optionValue)?.label??null;let n=t.valueText.trim();return n?e.type===`date`?e.presets?.find(e=>e.value===n)?.label??n:n:null},nn=(e,t)=>{if(!e)return[];let n=[{key:`field`,text:e.field.label,emphasized:!1}];if(e.scalar&&e.field.type===`compound`&&n.push({key:`subfield`,text:e.scalar.label,emphasized:!1}),e.scalar&&e.scalar.type!==`enum`&&t.operator){let r=e.scalar.operators.find(e=>e.value===t.operator);n.push({key:`operator`,text:r?.label??t.operator,emphasized:!1})}let r=tn(e.scalar,t);return r&&n.push({key:`value`,text:r,emphasized:!0}),n},rn=(e,t)=>e?e.type===`enum`?t.optionValue:e.type===`date`&&e.presets?.some(e=>e.value===t.valueText)?t.valueText:null:null,an=(e,t,n,r)=>{let i=Jt(e,t),a=Yt(i,t),o=i?.scalar??null;if(a===`field`)return{inputMode:`search`,placeholder:r.searchField,caption:r.selectField,inputValue:t.query,choices:Zt(e,t,n),selectedChoiceId:null,path:[]};if(a===`subfield`&&i)return{inputMode:`search`,placeholder:r.searchSubfield,caption:r.selectSubfield,inputValue:t.query,choices:Qt(i,t.query),selectedChoiceId:null,path:nn(i,t)};if(a===`operator`&&o)return{inputMode:`search`,placeholder:r.searchOperator,caption:r.selectOperator,inputValue:t.query,choices:$t(o,t.query),selectedChoiceId:null,path:nn(i,t)};let s=o?en(o,o.type===`enum`?t.query:``):[],c=o?.type===`enum`,l=o?.type===`date`?o.presets?.find(e=>e.value===t.valueText)?.label:void 0;return{inputMode:c?`search`:`value`,placeholder:c?r.searchValue:r.valuePlaceholder,caption:s.length>0||c?r.selectValue:null,inputValue:c?t.query:l??t.valueText,choices:s,selectedChoiceId:rn(o,t),path:nn(i,t)}},on={valueText:``,optionValue:null,query:``},sn=(e,t,n)=>{if(n.kind===`field`){let r=e.find(e=>e.id===n.id);return r?{...Wt(),fieldId:r.id,operator:r.type===`enum`?Gt(r):null}:t}let r=Jt(e,t);if(!r)return t;if(n.kind===`subfield`&&r.field.type===`compound`){let e=r.field.subfields.find(e=>e.id===n.id);return e?{...t,...on,subfieldId:e.id,operator:e.type===`enum`?Gt(e):null}:t}if(n.kind===`operator`&&r.scalar){let e=r.scalar.operators.find(e=>e.value===n.id);return e?{...t,...on,operator:e.value}:t}if(n.kind===`option`&&r.scalar?.type===`enum`){let e=r.scalar.options.find(e=>e.value===n.id);return e?{...t,query:``,optionValue:e.value}:t}if(n.kind===`option`&&r.scalar?.type===`date`){let e=r.scalar.presets?.find(e=>e.value===n.id);return e?{...t,query:``,valueText:e.value}:t}return t},cn=(e,t,n)=>Xt(e,t)?{...t,valueText:n}:{...t,query:n},ln=(e,t)=>{let n=Jt(e,t);if(!n?.scalar||!t.operator)return null;let{field:r,scalar:i}=n;if(!i.operators.some(e=>e.value===t.operator))return null;let a=r.type===`compound`?i.id:void 0,o={kind:`field`,field:r.id,...a?{subfield:a}:{},operator:t.operator};if(i.type===`enum`)return!t.optionValue||!i.options.some(e=>e.value===t.optionValue)?null:{...o,value:[t.optionValue]};let s=t.valueText.trim();return i.type===`number`?Ut.test(s)?{...o,value:Number(s)}:null:s?{...o,value:s}:null}})))()}var dn,fn,pn,mn,hn,gn,_n,vn,yn,bn,xn,Sn,Cn,wn,Tn,K;function En(){return(En=t((()=>{dn=`_dialog_15rrf_1`,fn=`_header_15rrf_9`,pn=`_footer_15rrf_10`,mn=`_body_15rrf_13`,hn=`_pathRow_15rrf_20`,gn=`_path_15rrf_20`,_n=`_segment_15rrf_31`,vn=`_separator_15rrf_37`,yn=`_pathValue_15rrf_42`,bn=`_search_15rrf_46`,xn=`_input_15rrf_53`,Sn=`_options_15rrf_57`,Cn=`_caption_15rrf_64`,wn=`_choices_15rrf_68`,Tn=`_visuallyHidden_15rrf_74`,K={dialog:dn,header:fn,footer:pn,body:mn,pathRow:hn,path:gn,segment:_n,separator:vn,pathValue:yn,search:bn,input:xn,options:Sn,caption:Cn,choices:wn,visuallyHidden:Tn}})))()}function Dn(e,t){return(0,q.jsxs)(`span`,{className:K.segment,children:[t>0&&(0,q.jsxs)(q.Fragment,{children:[(0,q.jsx)(`span`,{className:K.visuallyHidden,children:`, `}),(0,q.jsx)(o,{icon:`keyboard_arrow_right`,size:`tiny`,"aria-hidden":!0,className:K.separator})]}),(0,q.jsx)(`span`,{className:e.emphasized?K.pathValue:void 0,children:e.text})]},e.key)}var On,kn,An,q,jn,Mn;function Nn(){return(Nn=t((()=>{On=i(),kn=n(),An=e(a(),1),v(),s(),B(),R(),C(),_(),G(),_t(),Ht(),un(),En(),q=r(),jn=e=>{let t=(0,On.c)(10),{segments:n,clearLabel:r,onClear:i}=e;if(n.length===0)return null;let a;t[0]===n?a=t[1]:(a=n.map(Dn),t[0]=n,t[1]=a);let o;t[2]===a?o=t[3]:(o=(0,q.jsx)(`span`,{className:K.path,children:a}),t[2]=a,t[3]=o);let s;t[4]===r?s=t[5]:(s={deleteAriaLabel:r},t[4]=r,t[5]=s);let c;return t[6]!==i||t[7]!==o||t[8]!==s?(c=(0,q.jsx)(`div`,{className:K.pathRow,children:(0,q.jsx)(L,{selected:!0,label:o,locale:s,onDelete:i})}),t[6]=i,t[7]=o,t[8]=s,t[9]=c):c=t[9],c},Mn=e=>{let t=(0,On.c)(46),{suggestedFields:n,locale:r,className:i,style:a}=e,{fields:s,lockedViews:c,addCondition:l,setView:u}=W(),d={...Vt,...r},[f,p]=(0,kn.useState)(Wt),m=(0,kn.useId)(),h=an(s,f,n,d),_;t[0]!==f||t[1]!==s?(_=ln(s,f),t[0]=f,t[1]=s,t[2]=_):_=t[2];let v=_;if(c.includes(`builder`))return null;let b;t[3]===u?b=t[4]:(b=()=>{u(`filters`)},t[3]=u,t[4]=b);let x=b,C;t[5]!==l||t[6]!==v||t[7]!==p?(C=()=>{v&&(l({...v,id:Ne()}),p(Wt()))},t[5]=l,t[6]=v,t[7]=p,t[8]=C):C=t[8];let w=C,T;t[9]!==f||t[10]!==s||t[11]!==p?(T=e=>{p(sn(s,f,e))},t[9]=f,t[10]=s,t[11]=p,t[12]=T):T=t[12];let E=T,D;t[13]!==E||t[14]!==w||t[15]!==h.choices||t[16]!==h.inputMode?(D=e=>{if(e.key!==`Enter`)return;if(e.preventDefault(),h.inputMode===`value`){w();return}let[t]=h.choices;h.choices.length===1&&t&&E(t)},t[13]=E,t[14]=w,t[15]=h.choices,t[16]=h.inputMode,t[17]=D):D=t[17];let O=D,k;t[18]===i?k=t[19]:(k=(0,An.default)(K.dialog,i),t[18]=i,t[19]=k);let A;t[20]===x?A=t[21]:(A=e=>{e||x()},t[20]=x,t[21]=A);let j;t[22]===p?j=t[23]:(j=()=>p(Wt()),t[22]=p,t[23]=j);let M;t[24]!==m||t[25]!==h.placeholder?(M=(0,q.jsx)(`label`,{htmlFor:m,className:K.visuallyHidden,children:h.placeholder}),t[24]=m,t[25]=h.placeholder,t[26]=M):M=t[26];let N;t[27]===Symbol.for(`react.memo_cache_sentinel`)?(N={startAdornment:(0,q.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0})},t[27]=N):N=t[27];let P;t[28]!==f||t[29]!==s||t[30]!==p?(P=e=>p(cn(s,f,e)),t[28]=f,t[29]=s,t[30]=p,t[31]=P):P=t[31];let F;t[32]!==O||t[33]!==m||t[34]!==P||t[35]!==h.inputValue||t[36]!==h.placeholder?(F=(0,q.jsx)(S,{id:m,className:K.input,value:h.inputValue,placeholder:h.placeholder,slots:N,onValueChange:P,onKeyDown:O}),t[32]=O,t[33]=m,t[34]=P,t[35]=h.inputValue,t[36]=h.placeholder,t[37]=F):F=t[37];let I;t[38]!==F||t[39]!==M?(I=(0,q.jsxs)(`div`,{className:K.search,children:[M,F]}),t[38]=F,t[39]=M,t[40]=I):I=t[40];let R;return t[41]!==E||t[42]!==h.caption||t[43]!==h.choices||t[44]!==h.selectedChoiceId?(R=h.caption&&(0,q.jsxs)(`div`,{className:K.options,role:`group`,"aria-label":h.caption,children:[(0,q.jsx)(g,{variant:`body-xs-reg`,className:K.caption,children:h.caption}),(0,q.jsx)(`div`,{className:K.choices,children:h.choices.map(e=>(0,q.jsx)(L,{label:e.label,selected:e.id===h.selectedChoiceId,onClick:()=>E(e)},`${e.kind}-${e.id}`))})]}),t[41]=E,t[42]=h.caption,t[43]=h.choices,t[44]=h.selectedChoiceId,t[45]=R):R=t[45],(0,q.jsxs)(z,{open:!0,dividers:!0,closeOnInteractOutside:!0,className:k,style:a,onOpenChange:A,children:[(0,q.jsxs)(z.Header,{className:K.header,children:[(0,q.jsx)(z.Title,{children:d.title}),(0,q.jsx)(y,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":d.close,onClick:x})]}),(0,q.jsxs)(z.Body,{className:K.body,children:[(0,q.jsx)(jn,{segments:h.path,clearLabel:d.clear,onClear:j}),I,R]}),(0,q.jsx)(z.Footer,{className:K.footer,children:(0,q.jsx)(z.Actions,{children:(0,q.jsx)(y,{variant:`primary`,size:`medium`,disabled:!v,onClick:w,children:d.save})})})]})},Mn.displayName=`DsFiltersBar.Builder`,Mn.__docgenInfo={description:`Builds one condition at a time. Saving appends it to the filter document and clears the draft;
closing returns to the filters view and drops the draft.`,methods:[],displayName:`DsFiltersBar.Builder`}})))()}function Pn(){return(Pn=t((()=>{Nn()})))()}var Fn;function In(){return(In=t((()=>{Fn=Object.freeze({title:`Filters`,save:`Save filters`,close:`Close`,operator:`Operator`,operatorOption:(e,t)=>`${e} ${t.symbol??t.value} (${t.label})`,betweenOption:e=>`${e} (between)`,search:e=>`Search ${e}`,searchPlaceholder:e=>`Search ${e}`,value:e=>`${e} value`,rangeFrom:e=>`${e} from`,rangeTo:e=>`${e} to`,presets:e=>`${e} presets`,selectedCount:e=>`${String(e)} selected`,pinned:`Pinned`})})))()}var Ln,Rn,zn,Bn,Vn,Hn,Un,Wn,Gn,Kn,qn,Jn,Yn,Xn,Zn,Qn,$n,er,tr,J;function nr(){return(nr=t((()=>{Ln=`_dialog_16jv3_5`,Rn=`_header_16jv3_9`,zn=`_footer_16jv3_10`,Bn=`_body_16jv3_13`,Vn=`_tabs_16jv3_20`,Hn=`_tabList_16jv3_26`,Un=`_tab_16jv3_20`,Wn=`_tabLabel_16jv3_52`,Gn=`_counter_16jv3_60`,Kn=`_counterDot_16jv3_68`,qn=`_tabPin_16jv3_75`,Jn=`_panel_16jv3_81`,Yn=`_panelHeader_16jv3_88`,Xn=`_control_16jv3_97`,Zn=`_range_16jv3_101`,Qn=`_options_16jv3_111`,$n=`_option_16jv3_111`,er=`_optionPin_16jv3_125`,tr=`_visuallyHidden_16jv3_133`,J={dialog:Ln,header:Rn,footer:zn,body:Bn,tabs:Vn,tabList:Hn,tab:Un,tabLabel:Wn,counter:Gn,counterDot:Kn,tabPin:qn,panel:Jn,panelHeader:Yn,control:Xn,range:Zn,options:Qn,option:$n,optionPin:er,visuallyHidden:tr}})))()}function rr(e){return e.value===`=`}function ir(e){return e.value===`=`}function ar(e){return(0,Y.jsx)(p.Item,{value:e.value,label:e.label},e.value)}var or,sr,cr,Y,lr,ur,dr,fr,pr,mr,hr,gr,_r,vr,yr,br,xr,Sr,Cr,wr,Tr;function Er(){return(Er=t((()=>{or=i(),sr=n(),cr=e(a(),1),v(),d(),N(),s(),B(),A(),I(),V(),D(),C(),_(),U(),_t(),In(),nr(),Y=r(),lr=`between`,ur=(e,t)=>e.field===t.field&&e.subfield===t.subfield&&e.type===t.schema.type,dr=(e,t)=>e.find(e=>ur(e,t))??ot(t),fr=(e,t)=>e.field===t.field&&e.subfield===t.subfield,pr=(e,t)=>e.some(e=>fr(e,t))?e.map(e=>fr(e,t)?t:e):[...e,t],mr=(e,t,n)=>n?e.includes(t)?e:[...e,t]:e.filter(e=>e!==t),hr=e=>Number.isNaN(e)?null:e,gr=e=>{let t=(0,or.c)(14),{tab:n,entry:r,locale:i}=e,a;t[0]===r?a=t[1]:(a=r.type===`enum`?r.selected.length:Number(ft(r)),t[0]=r,t[1]=a);let s=a,c=r.type===`enum`&&r.pinned.length>0,l;t[2]===n.label?l=t[3]:(l=(0,Y.jsx)(g,{variant:`body-sm-reg`,className:J.tabLabel,children:n.label}),t[2]=n.label,t[3]=l);let u;t[4]!==i||t[5]!==s?(u=s>0&&(0,Y.jsxs)(Y.Fragment,{children:[(0,Y.jsxs)(`span`,{className:J.counter,"aria-hidden":!0,children:[(0,Y.jsx)(`span`,{className:J.counterDot}),(0,Y.jsx)(g,{variant:`body-xs-semi-bold`,children:s})]}),(0,Y.jsx)(`span`,{className:J.visuallyHidden,children:i.selectedCount(s)})]}),t[4]=i,t[5]=s,t[6]=u):u=t[6];let d;t[7]!==c||t[8]!==i?(d=c&&(0,Y.jsx)(`span`,{className:J.tabPin,role:`img`,"aria-label":i.pinned,children:(0,Y.jsx)(o,{icon:`keep`,size:`tiny`,filled:!0,"aria-hidden":!0})}),t[7]=c,t[8]=i,t[9]=d):d=t[9];let f;return t[10]!==l||t[11]!==u||t[12]!==d?(f=(0,Y.jsxs)(Y.Fragment,{children:[l,u,d]}),t[10]=l,t[11]=u,t[12]=d,t[13]=f):f=t[13],f},_r=e=>{let t=(0,or.c)(9),{label:n,children:r}=e,i=(0,sr.useId)(),a;t[0]!==i||t[1]!==n?(a=(0,Y.jsx)(`label`,{htmlFor:i,className:J.visuallyHidden,children:n}),t[0]=i,t[1]=n,t[2]=a):a=t[2];let o;t[3]!==r||t[4]!==i?(o=r(i),t[3]=r,t[4]=i,t[5]=o):o=t[5];let s;return t[6]!==a||t[7]!==o?(s=(0,Y.jsxs)(Y.Fragment,{children:[a,o]}),t[6]=a,t[7]=o,t[8]=s):s=t[8],s},vr=e=>{let t=(0,or.c)(19),{label:n,operators:r,value:i,withBetween:a,locale:o,onValueChange:s}=e,c=a!==void 0&&a,l;if(t[0]!==n||t[1]!==o||t[2]!==r||t[3]!==c){let e;t[5]!==n||t[6]!==o?(e=e=>({value:e.value,label:o.operatorOption(n,e)}),t[5]=n,t[6]=o,t[7]=e):e=t[7],l=r.map(e),c&&r.some(rr)&&l.push({value:lr,label:o.betweenOption(n)}),t[0]=n,t[1]=o,t[2]=r,t[3]=c,t[4]=l}else l=t[4];let u;t[8]!==s||t[9]!==l||t[10]!==i?(u=e=>{let t=l.find(t=>t.value===e);t&&t.value!==i&&s(t.value)},t[8]=s,t[9]=l,t[10]=i,t[11]=u):u=t[11];let d=u,p;t[12]!==d||t[13]!==l||t[14]!==i?(p=e=>(0,Y.jsx)(f,{id:e,className:J.control,options:l,value:i,onValueChange:d}),t[12]=d,t[13]=l,t[14]=i,t[15]=p):p=t[15];let m;return t[16]!==o.operator||t[17]!==p?(m=(0,Y.jsx)(_r,{label:o.operator,children:p}),t[16]=o.operator,t[17]=p,t[18]=m):m=t[18],m},yr=e=>{let t=(0,or.c)(49),{tab:n,entry:r,search:i,locale:a,onSearchChange:s,onEntryChange:c}=e;if(n.schema.type!==`enum`)return null;let l,d,f,p,m;if(t[0]!==r||t[1]!==a||t[2]!==c||t[3]!==s||t[4]!==i||t[5]!==n.label||t[6]!==n.schema.operators||t[7]!==n.schema.options||t[8]!==n.subfield){let e=i.trim().toLowerCase(),h=n.schema.options.filter(t=>t.label.toLowerCase().includes(e)),g=!n.subfield,_;t[14]!==r||t[15]!==c?(_=e=>c({...r,operator:e}),t[14]=r,t[15]=c,t[16]=_):_=t[16];let v;t[17]!==r.operator||t[18]!==a||t[19]!==_||t[20]!==n.label||t[21]!==n.schema.operators?(v=(0,Y.jsx)(vr,{label:n.label,operators:n.schema.operators,value:r.operator,locale:a,onValueChange:_}),t[17]=r.operator,t[18]=a,t[19]=_,t[20]=n.label,t[21]=n.schema.operators,t[22]=v):v=t[22];let y;t[23]!==a||t[24]!==n.label?(y=a.search(n.label),t[23]=a,t[24]=n.label,t[25]=y):y=t[25];let b;t[26]!==a||t[27]!==s||t[28]!==i||t[29]!==n.label?(b=e=>(0,Y.jsx)(S,{id:e,className:J.control,value:i,placeholder:a.searchPlaceholder(n.label),slots:{startAdornment:(0,Y.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0})},onValueChange:s}),t[26]=a,t[27]=s,t[28]=i,t[29]=n.label,t[30]=b):b=t[30];let x;t[31]!==y||t[32]!==b?(x=(0,Y.jsx)(_r,{label:y,children:b}),t[31]=y,t[32]=b,t[33]=x):x=t[33],t[34]!==x||t[35]!==v?(m=(0,Y.jsxs)(`div`,{className:J.panelHeader,children:[v,x]}),t[34]=x,t[35]=v,t[36]=m):m=t[36],l=J.options,d=`group`,f=n.label;let C;t[37]!==g||t[38]!==r||t[39]!==c?(C=e=>(0,Y.jsx)(u,{size:`large`,className:J.option,label:e.label,checked:r.selected.includes(e.value),actions:g&&(0,Y.jsx)(F,{className:J.optionPin,itemLabel:e.label,pinned:r.pinned.includes(e.value),onPinnedChange:t=>c({...r,pinned:mr(r.pinned,e.value,t)})}),onCheckedChange:t=>c({...r,selected:mr(r.selected,e.value,t===!0)})},e.value),t[37]=g,t[38]=r,t[39]=c,t[40]=C):C=t[40],p=h.map(C),t[0]=r,t[1]=a,t[2]=c,t[3]=s,t[4]=i,t[5]=n.label,t[6]=n.schema.operators,t[7]=n.schema.options,t[8]=n.subfield,t[9]=l,t[10]=d,t[11]=f,t[12]=p,t[13]=m}else l=t[9],d=t[10],f=t[11],p=t[12],m=t[13];let h;t[41]!==l||t[42]!==d||t[43]!==f||t[44]!==p?(h=(0,Y.jsx)(`div`,{className:l,role:d,"aria-label":f,children:p}),t[41]=l,t[42]=d,t[43]=f,t[44]=p,t[45]=h):h=t[45];let g;return t[46]!==m||t[47]!==h?(g=(0,Y.jsxs)(Y.Fragment,{children:[m,h]}),t[46]=m,t[47]=h,t[48]=g):g=t[48],g},br=e=>{let t=(0,or.c)(21),{tab:n,entry:r,locale:i,onEntryChange:a}=e;if(n.schema.type!==`text`)return null;let o;t[0]!==r||t[1]!==a?(o=e=>a({...r,operator:e}),t[0]=r,t[1]=a,t[2]=o):o=t[2];let s;t[3]!==r.operator||t[4]!==i||t[5]!==o||t[6]!==n.label||t[7]!==n.schema.operators?(s=(0,Y.jsx)(vr,{label:n.label,operators:n.schema.operators,value:r.operator,locale:i,onValueChange:o}),t[3]=r.operator,t[4]=i,t[5]=o,t[6]=n.label,t[7]=n.schema.operators,t[8]=s):s=t[8];let c;t[9]!==i||t[10]!==n.label?(c=i.value(n.label),t[9]=i,t[10]=n.label,t[11]=c):c=t[11];let l;t[12]!==r||t[13]!==a?(l=e=>(0,Y.jsx)(S,{id:e,className:J.control,value:r.text,onValueChange:e=>a({...r,text:e})}),t[12]=r,t[13]=a,t[14]=l):l=t[14];let u;t[15]!==c||t[16]!==l?(u=(0,Y.jsx)(_r,{label:c,children:l}),t[15]=c,t[16]=l,t[17]=u):u=t[17];let d;return t[18]!==s||t[19]!==u?(d=(0,Y.jsxs)(`div`,{className:J.panelHeader,children:[s,u]}),t[18]=s,t[19]=u,t[20]=d):d=t[20],d},xr=e=>{let t=(0,or.c)(21),{tab:n,entry:r,locale:i,onEntryChange:a}=e;if(n.schema.type!==`number`)return null;let o;t[0]!==r||t[1]!==a?(o=e=>a({...r,range:e}),t[0]=r,t[1]=a,t[2]=o):o=t[2];let s=o,l;t[3]!==r||t[4]!==a?(l=e=>a({...r,operator:e}),t[3]=r,t[4]=a,t[5]=l):l=t[5];let u;t[6]!==r.operator||t[7]!==i||t[8]!==l||t[9]!==n.label||t[10]!==n.schema.operators?(u=(0,Y.jsx)(vr,{label:n.label,operators:n.schema.operators,value:r.operator,withBetween:!0,locale:i,onValueChange:l}),t[6]=r.operator,t[7]=i,t[8]=l,t[9]=n.label,t[10]=n.schema.operators,t[11]=u):u=t[11];let d;t[12]!==r||t[13]!==i||t[14]!==a||t[15]!==s||t[16]!==n.label?(d=r.operator===lr?(0,Y.jsxs)(`div`,{className:J.range,children:[(0,Y.jsx)(_r,{label:i.rangeFrom(n.label),children:e=>(0,Y.jsx)(c,{id:e,className:J.control,value:r.range.from??void 0,onValueChange:e=>s({...r.range,from:hr(e)})})}),(0,Y.jsx)(_r,{label:i.rangeTo(n.label),children:e=>(0,Y.jsx)(c,{id:e,className:J.control,value:r.range.to??void 0,onValueChange:e=>s({...r.range,to:hr(e)})})})]}):(0,Y.jsx)(_r,{label:i.value(n.label),children:e=>(0,Y.jsx)(c,{id:e,className:J.control,value:r.value??void 0,onValueChange:e=>a({...r,value:hr(e)})})}),t[12]=r,t[13]=i,t[14]=a,t[15]=s,t[16]=n.label,t[17]=d):d=t[17];let f;return t[18]!==u||t[19]!==d?(f=(0,Y.jsxs)(`div`,{className:J.panelHeader,children:[u,d]}),t[18]=u,t[19]=d,t[20]=f):f=t[20],f},Sr=Object.freeze({from:null,to:null}),Cr=e=>{let t=(0,or.c)(36),{tab:n,entry:r,locale:i,onEntryChange:a}=e;if(n.schema.type!==`date`)return null;let o;t[0]===n.schema.presets?o=t[1]:(o=n.schema.presets??[],t[0]=n.schema.presets,t[1]=o);let s=o,c;t[2]!==r.operator||t[3]!==n.schema.operators?(c=r.operator===lr?(n.schema.operators.find(ir)??n.schema.operators[0])?.value??`=`:r.operator,t[2]=r.operator,t[3]=n.schema.operators,t[4]=c):c=t[4];let l=c,u;t[5]!==r||t[6]!==a?(u=e=>a({...r,preset:null,range:e}),t[5]=r,t[6]=a,t[7]=u):u=t[7];let d=u,f;t[8]!==r||t[9]!==a?(f=e=>a({...r,operator:e}),t[8]=r,t[9]=a,t[10]=f):f=t[10];let m;t[11]!==r.operator||t[12]!==i||t[13]!==f||t[14]!==n.label||t[15]!==n.schema.operators?(m=(0,Y.jsx)(vr,{label:n.label,operators:n.schema.operators,value:r.operator,withBetween:!0,locale:i,onValueChange:f}),t[11]=r.operator,t[12]=i,t[13]=f,t[14]=n.label,t[15]=n.schema.operators,t[16]=m):m=t[16];let h;t[17]!==r||t[18]!==i||t[19]!==a||t[20]!==d||t[21]!==n.label?(h=r.operator===lr?(0,Y.jsxs)(`div`,{className:J.range,children:[(0,Y.jsx)(_r,{label:i.rangeFrom(n.label),children:e=>(0,Y.jsx)(M,{id:e,className:J.control,value:r.range.from??void 0,onValueChange:e=>d({...r.range,from:e??null})})}),(0,Y.jsx)(_r,{label:i.rangeTo(n.label),children:e=>(0,Y.jsx)(M,{id:e,className:J.control,value:r.range.to??void 0,onValueChange:e=>d({...r.range,to:e??null})})})]}):(0,Y.jsx)(_r,{label:i.value(n.label),children:e=>(0,Y.jsx)(M,{id:e,className:J.control,value:r.date??void 0,onValueChange:e=>a({...r,preset:null,date:e??null})})}),t[17]=r,t[18]=i,t[19]=a,t[20]=d,t[21]=n.label,t[22]=h):h=t[22];let g;t[23]!==m||t[24]!==h?(g=(0,Y.jsxs)(`div`,{className:J.panelHeader,children:[m,h]}),t[23]=m,t[24]=h,t[25]=g):g=t[25];let _;t[26]!==r||t[27]!==i||t[28]!==a||t[29]!==l||t[30]!==s||t[31]!==n.label?(_=s.length>0&&(0,Y.jsx)(`div`,{className:J.options,role:`group`,"aria-label":i.presets(n.label),children:(0,Y.jsx)(p.Root,{value:r.preset,onValueChange:e=>a({...r,operator:l,preset:e,date:null,range:Sr}),children:s.map(ar)})}),t[26]=r,t[27]=i,t[28]=a,t[29]=l,t[30]=s,t[31]=n.label,t[32]=_):_=t[32];let v;return t[33]!==g||t[34]!==_?(v=(0,Y.jsxs)(Y.Fragment,{children:[g,_]}),t[33]=g,t[34]=_,t[35]=v):v=t[35],v},wr=e=>{let t=(0,or.c)(19),n,r,i,a;switch(t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4]):({entry:n,search:a,onSearchChange:r,...i}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a),n.type){case`enum`:{let e;return t[5]!==n||t[6]!==r||t[7]!==i||t[8]!==a?(e=(0,Y.jsx)(yr,{entry:n,search:a,onSearchChange:r,...i}),t[5]=n,t[6]=r,t[7]=i,t[8]=a,t[9]=e):e=t[9],e}case`text`:{let e;return t[10]!==n||t[11]!==i?(e=(0,Y.jsx)(br,{entry:n,...i}),t[10]=n,t[11]=i,t[12]=e):e=t[12],e}case`number`:{let e;return t[13]!==n||t[14]!==i?(e=(0,Y.jsx)(xr,{entry:n,...i}),t[13]=n,t[14]=i,t[15]=e):e=t[15],e}case`date`:{let e;return t[16]!==n||t[17]!==i?(e=(0,Y.jsx)(Cr,{entry:n,...i}),t[16]=n,t[17]=i,t[18]=e):e=t[18],e}}},Tr=e=>{let t=(0,or.c)(57),{open:n,tabs:r,value:i,initialTab:a,locale:o,className:s,style:c,onOpenChange:l,onChange:u,onSave:d}=e,f;t[0]===o?f=t[1]:(f={...Fn,...o},t[0]=o,t[1]=f);let p=f,m=a??r[0]?.id??``,[h,g]=(0,sr.useState)(m),[_,v]=(0,sr.useState)(``),[b,x]=(0,sr.useState)(n);n!==b&&(x(n),n&&(g(m),v(``)));let S;t[2]!==h||t[3]!==r?(S=r.find(e=>e.id===h)??r[0],t[2]=h,t[3]=r,t[4]=S):S=t[4];let C=S,w;t[5]===C?.id?w=t[6]:(w=e=>{e&&e!==C?.id&&(g(e),v(``))},t[5]=C?.id,t[6]=w);let T=w,E;t[7]!==u||t[8]!==i?(E=e=>{u(e,pr(i,e))},t[7]=u,t[8]=i,t[9]=E):E=t[9];let D=E,O;t[10]!==l||t[11]!==d||t[12]!==i?(O=()=>{d(i),l(!1)},t[10]=l,t[11]=d,t[12]=i,t[13]=O):O=t[13];let k=O,A;t[14]===s?A=t[15]:(A=(0,cr.default)(J.dialog,s),t[14]=s,t[15]=A);let j;t[16]===p.title?j=t[17]:(j=(0,Y.jsx)(z.Title,{children:p.title}),t[16]=p.title,t[17]=j);let M;t[18]===l?M=t[19]:(M=()=>l(!1),t[18]=l,t[19]=M);let N;t[20]!==p.close||t[21]!==M?(N=(0,Y.jsx)(y,{variant:`tertiary`,size:`small`,icon:`close`,"aria-label":p.close,onClick:M}),t[20]=p.close,t[21]=M,t[22]=N):N=t[22];let P;t[23]!==j||t[24]!==N?(P=(0,Y.jsxs)(z.Header,{className:J.header,children:[j,N]}),t[23]=j,t[24]=N,t[25]=P):P=t[25];let F=C?.id,I;if(t[26]!==p||t[27]!==r||t[28]!==i){let e;t[30]!==p||t[31]!==i?(e=e=>(0,Y.jsx)(H.Tab,{value:e.id,className:J.tab,children:(0,Y.jsx)(gr,{tab:e,entry:dr(i,e),locale:p})},e.id),t[30]=p,t[31]=i,t[32]=e):e=t[32],I=r.map(e),t[26]=p,t[27]=r,t[28]=i,t[29]=I}else I=t[29];let L;t[33]===I?L=t[34]:(L=(0,Y.jsx)(H.List,{className:J.tabList,children:I}),t[33]=I,t[34]=L);let R;t[35]!==C||t[36]!==D||t[37]!==p||t[38]!==_||t[39]!==i?(R=C&&(0,Y.jsx)(H.Content,{value:C.id,className:J.panel,children:(0,Y.jsx)(wr,{tab:C,entry:dr(i,C),search:_,locale:p,onSearchChange:v,onEntryChange:D},C.id)}),t[35]=C,t[36]=D,t[37]=p,t[38]=_,t[39]=i,t[40]=R):R=t[40];let B;t[41]!==T||t[42]!==F||t[43]!==L||t[44]!==R?(B=(0,Y.jsx)(z.Body,{className:J.body,children:(0,Y.jsxs)(H,{className:J.tabs,value:F,onValueChange:T,children:[L,R]})}),t[41]=T,t[42]=F,t[43]=L,t[44]=R,t[45]=B):B=t[45];let V;t[46]!==k||t[47]!==p.save?(V=(0,Y.jsx)(z.Footer,{className:J.footer,children:(0,Y.jsx)(z.Actions,{children:(0,Y.jsx)(y,{variant:`primary`,size:`medium`,onClick:k,children:p.save})})}),t[46]=k,t[47]=p.save,t[48]=V):V=t[48];let U;return t[49]!==l||t[50]!==n||t[51]!==c||t[52]!==P||t[53]!==B||t[54]!==V||t[55]!==A?(U=(0,Y.jsxs)(z,{open:n,dividers:!0,closeOnInteractOutside:!0,className:A,style:c,onOpenChange:l,children:[P,B,V]}),t[49]=l,t[50]=n,t[51]=c,t[52]=P,t[53]=B,t[54]=V,t[55]=A,t[56]=U):U=t[56],U},Tr.displayName=`DsFiltersBar.FiltersDialog`})))()}function Dr(){return(Dr=t((()=>{Er()})))()}var Or;function kr(){return(kr=t((()=>{Or=Object.freeze({addFilter:`Add filter`,removeCondition:e=>`Remove filter: ${e}`,operator:e=>`${e} operator`,operatorOption:e=>`${e.symbol??e.value} (${e.label})`,filtersDialogTitle:`Filters`,saveFilters:`Save filters`,filtersDialog:Object.freeze({})})})))()}var Ar,jr,Mr,X,Nr,Pr,Fr,Ir,Lr,Rr;function zr(){return(zr=t((()=>{Ar=i(),jr=e(a(),1),Mr=n(),v(),w(),s(),R(),_(),G(),ve(),_t(),Dr(),kr(),X=r(),Nr=Object.freeze([]),Pr=` › `,Fr=e=>{let t=(0,Ar.c)(19),{condition:n,locale:r}=e,{search:i,removeCondition:a}=W(),s;t[0]!==n.id||t[1]!==n.text||t[2]!==a||t[3]!==i?(s=i?()=>{i.edit(n.text),a(n.id)}:void 0,t[0]=n.id,t[1]=n.text,t[2]=a,t[3]=i,t[4]=s):s=t[4];let c=s,l=n.text,u;t[5]!==n.text||t[6]!==r?(u=r.removeCondition(n.text),t[5]=n.text,t[6]=r,t[7]=u):u=t[7];let d;t[8]===u?d=t[9]:(d={deleteAriaLabel:u},t[8]=u,t[9]=d);let f;t[10]===Symbol.for(`react.memo_cache_sentinel`)?(f={icon:(0,X.jsx)(o,{icon:`search`,size:`tiny`,"aria-hidden":!0})},t[10]=f):f=t[10];let p;t[11]!==n.id||t[12]!==a?(p=()=>a(n.id),t[11]=n.id,t[12]=a,t[13]=p):p=t[13];let m;return t[14]!==n.text||t[15]!==c||t[16]!==d||t[17]!==p?(m=(0,X.jsx)(L,{selected:!0,label:l,locale:d,slots:f,onClick:c,onDelete:p}),t[14]=n.text,t[15]=c,t[16]=d,t[17]=p,t[18]=m):m=t[18],m},Ir=e=>{let t=(0,Ar.c)(23),{value:n,symbol:r,operators:i,label:a,locale:s,onValueChange:c}=e,u;t[0]!==c||t[1]!==i||t[2]!==n?(u=e=>{let t=i.find(t=>t.value===e);t&&t.value!==n&&c(t)},t[0]=c,t[1]=i,t[2]=n,t[3]=u):u=t[3];let d=u,f;t[4]===r?f=t[5]:(f=(0,X.jsx)(g,{variant:`body-sm-reg`,children:r}),t[4]=r,t[5]=f);let p;t[6]===Symbol.for(`react.memo_cache_sentinel`)?(p=(0,X.jsx)(o,{icon:`keyboard_arrow_down`,size:`tiny`,"aria-hidden":!0}),t[6]=p):p=t[6];let m;t[7]!==a||t[8]!==f?(m=(0,X.jsxs)(l.Trigger,{className:_e.operatorTrigger,"aria-label":a,children:[f,p]}),t[7]=a,t[8]=f,t[9]=m):m=t[9];let h;if(t[10]!==s||t[11]!==i||t[12]!==n){let e;t[14]!==s||t[15]!==n?(e=e=>(0,X.jsxs)(l.Item,{value:e.value,selected:e.value===n,children:[s.operatorOption(e),e.value===n&&(0,X.jsx)(l.ItemIndicator,{children:(0,X.jsx)(o,{icon:`check`,"aria-hidden":!0})})]},e.value),t[14]=s,t[15]=n,t[16]=e):e=t[16],h=i.map(e),t[10]=s,t[11]=i,t[12]=n,t[13]=h}else h=t[13];let _;t[17]===h?_=t[18]:(_=(0,X.jsx)(l.Content,{children:h}),t[17]=h,t[18]=_);let v;return t[19]!==d||t[20]!==m||t[21]!==_?(v=(0,X.jsxs)(l.Root,{onSelect:d,children:[m,_]}),t[19]=d,t[20]=m,t[21]=_,t[22]=v):v=t[22],v},Lr=e=>{let t=(0,Ar.c)(36),{condition:n,locale:r,onEdit:i}=e,{fields:a,removeCondition:o,updateCondition:s}=W(),c,l,u,d,f,p,m,h;if(t[0]!==n||t[1]!==a||t[2]!==r||t[3]!==s){let e=He(n,a),i;t[12]!==n||t[13]!==a?(i=Ge(n,a),t[12]=n,t[13]=a,t[14]=i):i=t[14];let o=i,_;t[15]!==n||t[16]!==a?(_=nt(n,a),t[15]=n,t[16]=a,t[17]=_):_=t[17],l=_;let v=e.operatorSymbol??n.operator;c=L,d=!0,f=`operator-filter`,p=e.fieldPath.join(Pr),m=e.value,h={deleteAriaLabel:r.removeCondition(Ue(e))},u=(()=>{if(o)return(0,X.jsx)(Ir,{value:n.operator,symbol:v,operators:o,label:r.operator(e.fieldPath.join(` `)),locale:r,onValueChange:e=>s({...n,operator:e.value})});if(!Be(n.value))return(0,X.jsx)(g,{variant:`body-sm-reg`,className:_e.operatorText,children:v})})(),t[0]=n,t[1]=a,t[2]=r,t[3]=s,t[4]=c,t[5]=l,t[6]=u,t[7]=d,t[8]=f,t[9]=p,t[10]=m,t[11]=h}else c=t[4],l=t[5],u=t[6],d=t[7],f=t[8],p=t[9],m=t[10],h=t[11];let _;t[18]===u?_=t[19]:(_={operator:u},t[18]=u,t[19]=_);let v;t[20]!==l||t[21]!==i?(v=l?()=>i(l):void 0,t[20]=l,t[21]=i,t[22]=v):v=t[22];let y;t[23]!==n.id||t[24]!==o?(y=()=>o(n.id),t[23]=n.id,t[24]=o,t[25]=y):y=t[25];let b;return t[26]!==c||t[27]!==d||t[28]!==f||t[29]!==p||t[30]!==m||t[31]!==h||t[32]!==_||t[33]!==v||t[34]!==y?(b=(0,X.jsx)(c,{selected:d,variant:f,label:p,value:m,locale:h,slots:_,onClick:v,onDelete:y}),t[26]=c,t[27]=d,t[28]=f,t[29]=p,t[30]=m,t[31]=h,t[32]=_,t[33]=v,t[34]=y,t[35]=b):b=t[35],b},Rr=e=>{let t=(0,Ar.c)(46),{locale:n,className:r,style:i}=e,{fields:a,conditions:o,query:s,pins:c,setConditions:l,setPins:u}=W(),d;t[0]===n?d=t[1]:(d={...Or,...n},t[0]=n,t[1]=d);let f=d,[p,m]=(0,Mr.useState)(!1),[h,g]=(0,Mr.useState)(Nr),[_,v]=(0,Mr.useState)(void 0);if(s!==null)return p&&m(!1),null;let b;t[2]!==o||t[3]!==a||t[4]!==c?(b=e=>{g(lt(a,o,c)),v(e),m(!0)},t[2]=o,t[3]=a,t[4]=c,t[5]=b):b=t[5];let x=b,S;t[6]!==o||t[7]!==a||t[8]!==c||t[9]!==l||t[10]!==u?(S=e=>{let t=gt(a,o,c,e);l(t.conditions),u(t.pins)},t[6]=o,t[7]=a,t[8]=c,t[9]=l,t[10]=u,t[11]=S):S=t[11];let C=S,w;t[12]===r?w=t[13]:(w=(0,jr.default)(_e.conditions,r),t[12]=r,t[13]=w);let T;t[14]===x?T=t[15]:(T=()=>x(),t[14]=x,t[15]=T);let E;t[16]!==f.addFilter||t[17]!==T?(E=(0,X.jsx)(y,{variant:`secondary`,color:`default`,size:`small`,icon:`add`,"aria-label":f.addFilter,onClick:T}),t[16]=f.addFilter,t[17]=T,t[18]=E):E=t[18];let D;t[19]===a?D=t[20]:(D=Ye(a),t[19]=a,t[20]=D);let O;t[21]!==f.filtersDialog||t[22]!==f.filtersDialogTitle||t[23]!==f.saveFilters?(O={...f.filtersDialog,title:f.filtersDialogTitle,save:f.saveFilters},t[21]=f.filtersDialog,t[22]=f.filtersDialogTitle,t[23]=f.saveFilters,t[24]=O):O=t[24];let k;t[25]===Symbol.for(`react.memo_cache_sentinel`)?(k=(e,t)=>g(t),t[25]=k):k=t[25];let A;t[26]!==h||t[27]!==C||t[28]!==_||t[29]!==p||t[30]!==D||t[31]!==O?(A=(0,X.jsx)(Tr,{open:p,tabs:D,value:h,initialTab:_,locale:O,onOpenChange:m,onChange:k,onSave:C}),t[26]=h,t[27]=C,t[28]=_,t[29]=p,t[30]=D,t[31]=O,t[32]=A):A=t[32];let j;if(t[33]!==o||t[34]!==x||t[35]!==f){let e;t[37]!==x||t[38]!==f?(e=e=>e.kind===`search`?(0,X.jsx)(Fr,{condition:e,locale:f},e.id):(0,X.jsx)(Lr,{condition:e,locale:f,onEdit:x},e.id),t[37]=x,t[38]=f,t[39]=e):e=t[39],j=o.map(e),t[33]=o,t[34]=x,t[35]=f,t[36]=j}else j=t[36];let M;return t[40]!==i||t[41]!==A||t[42]!==j||t[43]!==w||t[44]!==E?(M=(0,X.jsxs)(`div`,{className:w,style:i,children:[E,A,j]}),t[40]=i,t[41]=A,t[42]=j,t[43]=w,t[44]=E,t[45]=M):M=t[45],M},Rr.displayName=`DsFiltersBar.Conditions`})))()}function Br(){return(Br=t((()=>{zr()})))()}var Vr;function Hr(){return(Hr=t((()=>{Vr=class extends Error{error;constructor(e,t,n,r,i){super(t),this.error={code:t,from:n,to:r,text:i??e.slice(n,r)}}}})))()}var Ur,Wr,Gr,Kr,qr,Jr;function Yr(){return(Yr=t((()=>{_t(),Ur=e=>e.kind===`clause`||e.kind===`search`,Wr=e=>Ur(e)?[e]:e.kind===`and`&&e.children.every(Ur)?e.children.filter(Ur):null,Gr=e=>typeof e==`object`&&`from`in e?[e.from,e.to]:e,Kr=e=>JSON.stringify(e.kind===`search`?[e.kind,e.text]:[e.kind,e.field,e.subfield??null,e.operator,Gr(e.value)]),qr=(e,t)=>e.kind===`search`?{kind:`search`,id:t,text:e.text}:{kind:`field`,id:t,field:e.field,...e.subfield&&{subfield:e.subfield},operator:e.operator,value:e.value},Jr=(e,t)=>{let n=Wr(e);if(!n)return null;let r=new Map;for(let e of t){let t=Kr(e);r.set(t,[...r.get(t)??[],e.id])}return n.map(e=>{let t=qr(e,``),n=r.get(Kr(t))?.shift();return{...t,id:n??Ne()}})}})))()}var Xr,Zr,Qr,$r,ei,ti,ni,ri,ii,ai,oi;function si(){return(si=t((()=>{Xr=`"`,Zr=`\\`,Qr=/\s/,$r=/[\s()",=!<>~]/,ei=Object.freeze({"(":`openParen`,")":`closeParen`,",":`comma`}),ti=Object.freeze([`!=`,`!~`,`>=`,`<=`,`=`,`>`,`<`,`~`]),ni=(e,t)=>{let n=``,r=t+1;for(;r<e.length;){let i=e.charAt(r);if(i===Zr&&r+1<e.length){n+=e.charAt(r+1),r+=2;continue}if(i===Xr)return{kind:`string`,value:n,from:t,to:r+1};n+=i,r+=1}return{kind:`unterminated`,value:n,from:t,to:e.length}},ri=(e,t)=>{let n=t;for(;n<e.length&&!$r.test(e.charAt(n));)n+=1;return{kind:`word`,value:e.slice(t,n),from:t,to:n}},ii=(e,t)=>{let n=t;for(;n<e.length&&Qr.test(e.charAt(n));)n+=1;return n},ai=(e,t)=>{let n=t.value.toUpperCase();if(n===`AND`||n===`OR`)return{...t,kind:n===`AND`?`and`:`or`,value:n};if(n===`IN`)return{...t,kind:`operator`,value:`IN`};if(n!==`NOT`)return t;let r=ri(e,ii(e,t.to));return r.value.toUpperCase()===`IN`?{kind:`operator`,value:`NOT IN`,from:t.from,to:r.to}:{...t,kind:`not`,value:n}},oi=e=>{let t=[],n=ii(e,0);for(;n<e.length;){let r=e.charAt(n),i=ei[r],a=ti.find(t=>e.startsWith(t,n)),o;o=i?{kind:i,value:r,from:n,to:n+1}:r===Xr?ni(e,n):a?{kind:`operator`,value:a,from:n,to:n+a.length}:$r.test(r)?{kind:`unknown`,value:r,from:n,to:n+1}:ai(e,ri(e,n)),t.push(o),n=ii(e,o.to)}return t}})))()}var ci,li,ui,di,fi,pi,mi,hi,gi,_i,vi;function yi(){return(yi=t((()=>{Hr(),ci=`.`,li=/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/,ui=/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/,di=(e,t)=>e.toLowerCase()===t.toLowerCase(),fi=(e,t)=>e.find(e=>di(e.value,t))??e.find(e=>di(e.label,t)),pi=10,mi=e=>{if(!ui.test(e)||Number.isNaN(Date.parse(e)))return!1;let t=e.slice(0,pi);return new Date(`${t}T00:00:00Z`).toISOString().startsWith(t)},hi=Object.freeze({IN:`=`,"NOT IN":`!=`,">=":`=`,"<=":`=`}),gi=(e,t)=>{let n=hi[t],r=t===`IN`||t===`NOT IN`?e.type===`enum`:e.type===`number`||e.type===`date`;return n&&r&&e.operators.some(e=>e.value===n)?n:null},_i=(e,t)=>e!==`>=`&&e!==`<=`?t:typeof t==`number`||typeof t==`string`?(e===`>=`?`from`:`to`)==`from`?{from:t,to:null}:{from:null,to:t}:t,vi=(e,t,n)=>{let r=(t,n)=>{throw new Vr(e,t,n.from,n.to,n.text)},i=e=>{let t=n.find(t=>di(t.id,e.text));if(t?.type===`compound`)return r(`subfieldRequired`,e);if(t)return{field:t.id,scalar:t};let i=e.text.indexOf(ci),a=i===-1?void 0:n.find(t=>di(t.id,e.text.slice(0,i)));if(!a)return r(`unknownField`,e);let o={text:e.text.slice(i+1),from:e.from+i+1,to:e.to},s=a.type===`compound`?a.subfields.find(e=>di(e.id,o.text)):void 0;return s?{field:a.id,subfield:s.id,scalar:s}:r(`unknownSubfield`,o)},a=(e,t)=>{let[n]=t.values;switch(e.type){case`enum`:return t.values.map(t=>fi(e.options,t.text)?.value??r(`unknownOption`,t));case`number`:{let e=Number(n.text);return li.test(n.text)&&Number.isFinite(e)?e:r(`notANumber`,n)}case`date`:{let t=fi(e.presets??[],n.text);return t?t.value:mi(n.text)?n.text:r(`invalidDate`,n)}default:return n.text}},o=e=>{let{field:t,subfield:n,scalar:o}=i(e.field),s=e.operator.text;e.list&&o.type!==`enum`&&r(`operatorNotAllowed`,e.operator);let c=o.operators.some(e=>e.value===s),l=c?s:gi(o,s)??r(`operatorNotAllowed`,e.operator),u=a(o,e);return!c&&(s===`>=`||s===`<=`)&&typeof u==`string`&&!mi(u)&&r(`operatorNotAllowed`,e.operator),{kind:`clause`,field:t,...n&&{subfield:n},operator:l,value:c?u:_i(s,u),from:e.from,to:e.to}},s=e=>{switch(e.kind){case`clause`:return o(e);case`search`:return e;case`group`:return{kind:`group`,child:s(e.child)};default:return{kind:e.kind,children:e.children.map(s)}}};return s(t)}})))()}var bi,xi,Si,Ci,wi;function Ti(){return(Ti=t((()=>{Ee(),Hr(),Yr(),si(),yi(),bi=Object.freeze([`IN`,`NOT IN`]),xi=e=>ye.some(t=>t===e),Si=e=>({text:e.value,from:e.from,to:e.to}),Ci=(e,t)=>{let n=0,r=(t,n)=>{throw new Vr(e,t,n.from,n.to)},i=()=>t[n],a=e=>r(e.kind===`unterminated`?`unterminatedString`:`unexpectedToken`,e),o=()=>i()??r(`unexpectedEnd`,{from:e.length,to:e.length}),s=e=>{let t=o();return t.kind!==e&&a(t),n+=1,t},c=()=>{let e=o();return e.kind!==`string`&&e.kind!==`word`?a(e):(n+=1,Si(e))},l=()=>{let e=o();e.kind!==`openParen`&&r(`listExpected`,e),n+=1;let t=i();t?.kind===`closeParen`&&r(`emptyList`,{from:e.from,to:t.to});let a=c(),l=[];for(;i()?.kind===`comma`;)n+=1,l.push(c());return{values:[a,...l],to:s(`closeParen`).to}},u=()=>{let e=c();return{values:[e],to:e.to}},d=()=>{let e=s(`word`),t=s(`operator`),n=t.value;if(!xi(n))return a(t);let r=bi.includes(n),{values:i,to:o}=r?l():u();return{kind:`clause`,field:Si(e),operator:{...Si(t),text:n},values:i,list:r,from:e.from,to:o}},f=()=>{let e=o();if(e.kind===`openParen`){n+=1;let e=h();return s(`closeParen`),{kind:`group`,child:e}}return e.kind===`string`?(n+=1,{kind:`search`,text:e.value,from:e.from,to:e.to}):e.kind===`word`?d():a(e)},p=(e,t)=>{let r=t(),a=[];for(;i()?.kind===e;)n+=1,a.push(t());return a.length?{kind:e,children:[r,...a]}:r},m=()=>p(`and`,f);function h(){return p(`or`,m)}if(!t.length)return{kind:`and`,children:[]};let g=h(),_=i();return _&&a(_),g},wi=(e,t,n=[])=>{try{let r=vi(e,Ci(e,oi(e)),t);return{ok:!0,node:r,conditions:Jr(r,n)}}catch(e){if(e instanceof Vr)return{ok:!1,error:e.error};throw e}}})))()}var Ei,Di,Oi,ki,Ai,ji;function Mi(){return(Mi=t((()=>{Ei=` AND `,Di=e=>`"${e.replace(/[\\"]/g,e=>`\\${e}`)}"`,Oi=e=>typeof e==`number`?String(e):Di(e),ki=e=>typeof e==`object`&&`from`in e,Ai=e=>{let{value:t,operator:n}=e,r=e.subfield?`${e.field}.${e.subfield}`:e.field;if(ki(t))return t.from===null&&t.to===null?`${r} = ()`:[t.from===null?``:`${r} >= ${Oi(t.from)}`,t.to===null?``:`${r} <= ${Oi(t.to)}`].filter(Boolean).join(Ei);if(typeof t!=`object`)return`${r} ${n} ${Oi(t)}`;let[i,...a]=t,o=n===`!=`||n===`NOT IN`;return t.length?i!==void 0&&!a.length&&(n===`=`||n===`!=`)?`${r} ${n} ${Oi(i)}`:`${r} ${o?`NOT IN`:`IN`} (${t.map(Oi).join(`, `)})`:`${r} ${o?`NOT IN`:`IN`} ()`},ji=e=>e.map(e=>e.kind===`search`?Di(e.text):Ai(e)).filter(Boolean).join(Ei)})))()}function Ni(){return(Ni=t((()=>{Ti(),Mi()})))()}var Pi,Fi;function Ii(){return(Ii=t((()=>{Pi=`_root_1mpdz_1`,Fi={root:Pi}})))()}var Li;function Ri(){return(Ri=t((()=>{Li=Object.freeze({label:`Advanced query`,placeholder:`status = "Active" AND trigger = "Scheduled"`,searchPlaceholder:`Search in query`,errors:Object.freeze({unexpectedToken:e=>`Unexpected “${e}”`,unexpectedEnd:()=>`The query is incomplete`,unterminatedString:()=>`Close the quoted value with "`,unknownField:e=>`Unknown field “${e}”`,unknownSubfield:e=>`Unknown subfield “${e}”`,subfieldRequired:e=>`Name a subfield of “${e}” after a dot`,operatorNotAllowed:e=>`“${e}” can’t be used with this field`,unknownOption:e=>`“${e}” is not a value of this field`,notANumber:e=>`“${e}” is not a number`,invalidDate:e=>`“${e}” is not a date or a date preset`,listExpected:()=>`Put the values in parentheses, as in IN ("a", "b")`,emptyList:()=>`Add at least one value to the list`}),help:`Query syntax`,helpOperators:`Operators`,helpCombine:`Join clauses with AND or OR, and group them with parentheses. OR and parentheses lock the filters and builder views.`,helpSearch:`A quoted value on its own searches all text, as in "timeout".`,helpExample:`Example`,operators:Object.freeze({"=":`equals`,"!=":`not equals`,">":`greater than`,">=":`greater than or equals`,"<":`less than`,"<=":`less than or equals`,IN:`is one of`,"NOT IN":`is none of`,"~":`contains`,"!~":`does not contain`})})})))()}var zi,Bi,Vi,Hi;function Ui(){return(Ui=t((()=>{zi=`_operators_2muaf_5`,Bi=`_operator_2muaf_5`,Vi=`_example_2muaf_27`,Hi={operators:zi,operator:Bi,example:Vi}})))()}var Wi,Gi,Ki,qi,Ji,Yi,Xi;function Zi(){return(Zi=t((()=>{Ni(),Wi=2,Gi=10,Ki=`2026-01-01`,qi=`value`,Ji=`"timeout"`,Yi=e=>{switch(e.type){case`enum`:return e.options.slice(0,1).map(e=>e.value);case`number`:return Gi;case`date`:return e.presets?.[0]?.value??Ki;default:return qi}},Xi=e=>{let t=e.slice(0,Wi).flatMap(e=>{let t=e.type===`compound`?e.subfields[0]:void 0,n=e.type===`compound`?t:e,r=n?.operators[0];return!n||!r?[]:[{kind:`field`,id:e.id,field:e.id,...t&&{subfield:t.id},operator:r.value,value:Yi(n)}]});return ji(t)||Ji}})))()}function Qi(e){e.preventDefault()}function $i(e){e.preventDefault()}var ea,Z,ta,na;function ra(){return(ra=t((()=>{ea=i(),v(),k(),b(),_(),Ee(),Ui(),Zi(),Z=r(),ta=360,na=e=>{let t=(0,ea.c)(17),{fields:n,locale:r,content:i}=e,a;t[0]===r.help?a=t[1]:(a=(0,Z.jsx)(O.Trigger,{children:(0,Z.jsx)(y,{variant:`tertiary`,size:`small`,icon:`help`,"aria-label":r.help,onPointerDown:$i})}),t[0]=r.help,t[1]=a);let o;t[2]!==i||t[3]!==n||t[4]!==r.help||t[5]!==r.helpCombine||t[6]!==r.helpExample||t[7]!==r.helpOperators||t[8]!==r.helpSearch||t[9]!==r.operators?(o=i??(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(O.Header,{children:r.help}),(0,Z.jsx)(O.Content,{children:(0,Z.jsxs)(x,{direction:`column`,gap:`var(--sm)`,children:[(0,Z.jsxs)(x,{direction:`column`,gap:`var(--xs)`,children:[(0,Z.jsx)(g,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpOperators}),(0,Z.jsx)(`dl`,{className:Hi.operators,children:ye.map(e=>(0,Z.jsxs)(`div`,{className:Hi.operator,children:[(0,Z.jsx)(`dt`,{children:(0,Z.jsx)(g,{variant:`code-sm-reg`,color:`main`,children:e})}),(0,Z.jsx)(`dd`,{children:r.operators[e]})]},e))})]}),(0,Z.jsx)(g,{variant:`body-sm-reg`,color:`secondary`,children:r.helpCombine}),(0,Z.jsx)(g,{variant:`body-sm-reg`,color:`secondary`,children:r.helpSearch}),(0,Z.jsxs)(x,{direction:`column`,gap:`var(--xs)`,children:[(0,Z.jsx)(g,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpExample}),(0,Z.jsx)(g,{variant:`code-sm-reg`,color:`main`,className:Hi.example,children:Xi(n)})]})]})})]}),t[2]=i,t[3]=n,t[4]=r.help,t[5]=r.helpCombine,t[6]=r.helpExample,t[7]=r.helpOperators,t[8]=r.helpSearch,t[9]=r.operators,t[10]=o):o=t[10];let s;t[11]!==r.help||t[12]!==o?(s=(0,Z.jsx)(O.Panel,{width:ta,"aria-label":r.help,children:o}),t[11]=r.help,t[12]=o,t[13]=s):s=t[13];let c;return t[14]!==a||t[15]!==s?(c=(0,Z.jsxs)(O.Root,{side:`bottom`,align:`end`,onOpenAutoFocus:Qi,children:[a,s]}),t[14]=a,t[15]=s,t[16]=c):c=t[16],c}})))()}function ia(){return(ia=t((()=>{ra()})))()}var aa,oa,sa,ca,la,ua,da;function fa(){return(fa=t((()=>{aa=i(),oa=n(),sa=e(a(),1),P(),G(),Ni(),Ii(),Ri(),ia(),ca=r(),la=300,ua=e=>{let t=(0,aa.c)(16),{disabled:n,locale:r,slots:i,className:a,style:o}=e,s=n!==void 0&&n,c=W(),l={...Li,...r,errors:{...Li.errors,...r?.errors},operators:{...Li.operators,...r?.operators}},[u,d]=(0,oa.useState)(null),[f,p]=(0,oa.useState)(null),[m,h]=(0,oa.useState)(!1),g=(0,oa.useRef)(void 0),_=(0,oa.useRef)(c),v;t[0]===c?v=t[1]:(v=()=>{_.current=c},t[0]=c,t[1]=v),(0,oa.useEffect)(v);let y,b;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(y=()=>()=>clearTimeout(g.current),b=[],t[2]=y,t[3]=b):(y=t[2],b=t[3]),(0,oa.useEffect)(y,b);let x=u&&(m||u.base===c.queryText)?u:null,S=x?f:null,C;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(C=e=>{let t=_.current,n=wi(e,t.fields,t.conditions);if(!n.ok)return p(n.error),!1;p(null);let{conditions:r}=n;r?(r.length===t.conditions.length&&r.every((e,n)=>e.id===t.conditions[n]?.id)||t.setConditions(r),t.query!==null&&t.setQuery(null)):t.query!==e&&t.setQuery(e);let i=r?ji(r):e;return d(t=>t?.text===e?{text:e,base:i}:t),!0},t[4]=C):C=t[4];let w=C,T;t[5]!==x?.base||t[6]!==c.queryText?(T=e=>{d({text:e,base:x?.base??c.queryText}),clearTimeout(g.current),g.current=setTimeout(()=>{g.current=void 0,w(e)},la)},t[5]=x?.base,t[6]=c.queryText,t[7]=T):T=t[7];let E=T,D;t[8]!==x||t[9]!==u?(D=()=>{h(!0),u&&!x&&(d(null),p(null))},t[8]=x,t[9]=u,t[10]=D):D=t[10];let O=D,k;t[11]!==x||t[12]!==f?(k=()=>{if(h(!1),!x)return;let e=g.current!==void 0;clearTimeout(g.current),g.current=void 0,(e?w(x.text):f===null)&&d(null)},t[11]=x,t[12]=f,t[13]=k):k=t[13];let A=k,M=l.label,N;return t[14]===a?N=t[15]:(N=(0,sa.default)(Fi.root,a),t[14]=a,t[15]=N),(0,ca.jsx)(j,{label:M,hideLabel:!0,status:S?`error`:void 0,message:S?l.errors[S.code](S.text):void 0,messageIcon:`error`,className:N,style:o,children:(0,ca.jsx)(j.CodeInput,{value:x?.text??c.queryText,placeholder:l.placeholder,disabled:s,invalid:S!==null,locale:{searchPlaceholder:l.searchPlaceholder,codeLabel:l.label},slots:{endAdornment:(0,ca.jsx)(na,{fields:c.fields,locale:l,content:i?.help})},onValueChange:E,onFocus:O,onBlur:A})})},da=e=>{let t=(0,aa.c)(3),{resetRevision:n}=W(),r;return t[0]!==e||t[1]!==n?(r=(0,ca.jsx)(ua,{...e},n),t[0]=e,t[1]=n,t[2]=r):r=t[2],r},da.displayName=`DsFiltersBar.Query`})))()}function pa(){return(pa=t((()=>{fa()})))()}function ma(){return(ma=t((()=>{re(),se(),ue(),kt(),jt(),It(),Rt(),Bt(),Pn(),Br(),pa()})))()}function ha(e){return e+1}var ga,_a,va,ya,ba,xa,Sa,Ca,Q;function wa(){return(wa=t((()=>{ga=i(),_a=e(a(),1),va=n(),ma(),G(),ve(),Ee(),_t(),Ni(),bt(),ya=r(),ba=Object.freeze([]),xa=Object.freeze([]),Sa=Object.freeze([]),Ca=e=>{let t=(0,ga.c)(51),{fields:n,conditions:r,defaultConditions:i,query:a,defaultQuery:o,pins:s,defaultPins:c,expanded:l,defaultExpanded:u,view:d,defaultView:f,locale:p,ref:m,className:h,style:g,children:_,onConditionsChange:v,onQueryChange:y,onPinsChange:b,onExpandedChange:x,onViewChange:S}=e,C=n===void 0?ba:n,w=i===void 0?xa:i,T=o===void 0?null:o,E=c===void 0?Sa:c,D=u!==void 0&&u,O=f===void 0?`filters`:f,[k,A]=yt(r,v,w),[j,M]=yt(a,y,T),[N,P]=yt(s,b,E),[F,I]=yt(l,x,D),[L,R]=yt(d,S,O),z=(0,va.useId)(),B;t[0]===p?B=t[1]:(B={...we,...p},t[0]=p,t[1]=B);let V=B,[H,U]=(0,va.useState)(0),[ee,W]=(0,va.useState)(null),G;t[2]!==k||t[3]!==j?(G=j??ji(k),t[2]=k,t[3]=j,t[4]=G):G=t[4];let ne=j===null&&k.length===0,re;t[5]===j?re=t[6]:(re=Me(j),t[5]=j,t[6]=re);let ie,ae,oe;t[7]!==k||t[8]!==A?(ie=e=>A(Fe(k,e)),ae=e=>A(Ie(k,e)),oe=e=>A(Le(k,e)),t[7]=k,t[8]=A,t[9]=ie,t[10]=ae,t[11]=oe):(ie=t[9],ae=t[10],oe=t[11]);let se;t[12]===M?se=t[13]:(se=e=>M(je(e)),t[12]=M,t[13]=se);let ce;t[14]!==A||t[15]!==M?(ce=()=>{U(ha),A(xa),M(null)},t[14]=A,t[15]=M,t[16]=ce):ce=t[16];let le;t[17]!==k||t[18]!==F||t[19]!==C||t[20]!==V||t[21]!==N||t[22]!==j||t[23]!==H||t[24]!==ee||t[25]!==A||t[26]!==I||t[27]!==P||t[28]!==R||t[29]!==re||t[30]!==ie||t[31]!==ae||t[32]!==oe||t[33]!==se||t[34]!==ce||t[35]!==G||t[36]!==ne||t[37]!==z||t[38]!==L?(le={fields:C,conditions:k,query:j,queryText:G,resetRevision:H,pins:N,isEmpty:ne,lockedViews:re,expanded:F,view:L,toolbarId:z,locale:V,setConditions:A,addCondition:ie,updateCondition:ae,removeCondition:oe,setQuery:se,setPins:P,clear:ce,setExpanded:I,setView:R,search:ee,registerSearch:W},t[17]=k,t[18]=F,t[19]=C,t[20]=V,t[21]=N,t[22]=j,t[23]=H,t[24]=ee,t[25]=A,t[26]=I,t[27]=P,t[28]=R,t[29]=re,t[30]=ie,t[31]=ae,t[32]=oe,t[33]=se,t[34]=ce,t[35]=G,t[36]=ne,t[37]=z,t[38]=L,t[39]=le):le=t[39];let ue=V.label,de;t[40]===h?de=t[41]:(de=(0,_a.default)(_e.root,h),t[40]=h,t[41]=de);let fe;t[42]!==_||t[43]!==V.label||t[44]!==m||t[45]!==g||t[46]!==de?(fe=(0,ya.jsx)(`div`,{ref:m,role:`region`,"aria-label":ue,className:de,style:g,children:_}),t[42]=_,t[43]=V.label,t[44]=m,t[45]=g,t[46]=de,t[47]=fe):fe=t[47];let pe;return t[48]!==le||t[49]!==fe?(pe=(0,ya.jsx)(te.Provider,{value:le,children:fe}),t[48]=le,t[49]=fe,t[50]=pe):pe=t[50],pe},Ca.displayName=`DsFiltersBar.Root`,Q={Root:Ca,Summary:At,Toolbar:Ft,SavedFilters:ce,SaveFilter:le,Search:Ot,ViewSwitch:zt,View:Lt,Conditions:Rr,Builder:Mn,Query:da,ClearAll:ne,Pinned:ie,PinnedGroup:ae,PinnedToggle:oe}})))()}function Ta(){return(Ta=t((()=>{wa()})))()}var Ea,$,Da,Oa,ka,Aa,ja,Ma,Na,Pa,Fa,Ia,La,Ra;function za(){return(za=t((()=>{Ea=n(),v(),Ta(),Ee(),$=r(),{fn:Da}=__STORYBOOK_MODULE_TEST__,Oa={title:`Components/FiltersBar`,component:Q.Root,tags:[`!manifest`],parameters:{layout:`padded`,docs:{description:{component:'\n**Work in progress — the API is wired, but only some parts render.** `Root`, `Toolbar`,\n`Search`, `Conditions` (the add-filter button with its filters dialog, and a chip per\ncondition), the query builder, and the advanced query view render; the other parts render nothing yet. Until `ViewSwitch` renders, the stories place the advanced view\ndirectly under `Root`.\n\n**Internal component.** Not exported from `@drivenets/design-system` while it is being built.\n\nA toolbar above a table or list for narrowing the data with filters, a query builder or an advanced\nquery, with **Saved filters** and a pinned row of quick toggles.\n\n**One filter document.** `Root` owns `conditions` and `query` (controlled or uncontrolled)\nand describes what can be filtered through `fields`. Every view reads and writes that same\ndocument, so a condition built in the query builder shows as a chip in the filters view and in the\ncollapsed summary.\n\n**One query language.** The advanced view writes the conditions as query text and checks what the\nuser types against `fields`: `status IN ("active", "pending") AND input.vendor ~ "cisco"`.\nOnly a valid query reaches the document. One made of clauses joined by `AND` becomes conditions;\none with `OR` or parentheses becomes `query`, the only source, and the filters and builder\nviews lock until it is cleared. Evaluate such a query with `parseFilterQuery(query, fields)`.\n\n**Pins are a user preference,** not part of the document: loading a saved filter or clearing leaves\nthem alone.\n\n**Collapsed shows a summary, expanded shows the toolbar.** `Summary` renders while collapsed,\n`Toolbar` while expanded; `Pinned` renders in both.\n                '}}},argTypes:{expanded:{control:`boolean`},defaultExpanded:{control:`boolean`},view:{control:`select`,options:Ce},defaultView:{control:`select`,options:Ce},children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},onConditionsChange:{table:{disable:!0}},onQueryChange:{table:{disable:!0}},onPinsChange:{table:{disable:!0}},onExpandedChange:{table:{disable:!0}},onViewChange:{table:{disable:!0}}},args:{onConditionsChange:Da(),onQueryChange:Da(),onPinsChange:Da(),onExpandedChange:Da(),onViewChange:Da()}},ka={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]},{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`}]}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`},{kind:`field`,id:`c2`,field:`status`,operator:`!=`,value:[`active`]},{kind:`field`,id:`c3`,field:`input`,subfield:`name`,operator:`~`,value:`WF456`},{kind:`field`,id:`c4`,field:`lastRun`,operator:`=`,value:`last7Days`}],defaultPins:[{field:`status`,value:`active`},{field:`status`,value:`pending`}]},render:e=>(0,$.jsxs)(Q.Root,{...e,children:[(0,$.jsx)(Q.Summary,{count:18}),(0,$.jsxs)(Q.Toolbar,{children:[(0,$.jsx)(Q.SavedFilters,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onValueChange:Da(),onClear:Da(),onRename:Da(),onDelete:Da()}),(0,$.jsx)(Q.Search,{}),(0,$.jsx)(Q.ViewSwitch,{}),(0,$.jsx)(Q.View,{value:`filters`,children:(0,$.jsx)(Q.Conditions,{})}),(0,$.jsx)(Q.View,{value:`builder`,children:(0,$.jsx)(Q.Builder,{suggestedFields:[`input`,`status`]})}),(0,$.jsx)(Q.SaveFilter,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onUpdate:Da(),onSaveAs:Da()}),(0,$.jsx)(Q.ClearAll,{})]}),(0,$.jsx)(Q.View,{value:`advanced`,children:(0,$.jsx)(Q.Query,{})}),(0,$.jsx)(Q.Pinned,{children:(0,$.jsxs)(Q.PinnedGroup,{label:`Status`,children:[(0,$.jsx)(Q.PinnedToggle,{label:`Active`,count:10,active:!0}),(0,$.jsx)(Q.PinnedToggle,{label:`Pending`,count:0,active:!1})]})})]})},Aa={args:{defaultExpanded:!0,fields:[{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`Contains`},{value:`=`,label:`Equal`},{value:`!=`,label:`Not equal`}]},{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`Equal`}]},{type:`text`,id:`type`,label:`Type`,operators:[{value:`=`,label:`Equal`}]},{type:`text`,id:`version`,label:`Version`,operators:[{value:`=`,label:`Equal`}]}]},{type:`text`,id:`output`,label:`Output`,operators:[{value:`=`,label:`Equal`}]},{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`},{value:`pending`,label:`Pending`}]},{type:`enum`,id:`tag`,label:`Tag`,operators:[{value:`=`,label:`equals`}],options:[{value:`core`,label:`Core`},{value:`edge`,label:`Edge`}]}]},parameters:{docs:{source:{type:`code`},story:{inline:!1,height:`520px`}}},render:e=>{let[t,n]=(0,Ea.useState)(`builder`);return(0,$.jsxs)(Q.Root,{...e,view:t,onViewChange:t=>{n(t),e.onViewChange?.(t)},children:[(0,$.jsxs)(Q.Toolbar,{children:[(0,$.jsx)(y,{variant:`secondary`,size:`medium`,onClick:()=>n(`builder`),children:`Query builder`}),(0,$.jsx)(Q.Search,{}),(0,$.jsx)(Q.View,{value:`filters`,children:(0,$.jsx)(Q.Conditions,{})}),(0,$.jsx)(Q.View,{value:`builder`,children:(0,$.jsx)(Q.Builder,{suggestedFields:[`input`,`output`,`status`,`tag`]})}),(0,$.jsx)(Q.ClearAll,{})]}),(0,$.jsx)(Q.Query,{})]})}},ja={...Aa,render:e=>{let[t,n]=(0,Ea.useState)(`builder`);return(0,$.jsxs)(Q.Root,{...e,view:t,onViewChange:t=>{n(t),e.onViewChange?.(t)},children:[(0,$.jsxs)(Q.Toolbar,{children:[(0,$.jsx)(y,{variant:`secondary`,size:`medium`,onClick:()=>n(`builder`),children:`Query builder`}),(0,$.jsx)(Q.Search,{}),(0,$.jsx)(Q.View,{value:`filters`,children:(0,$.jsx)(Q.Conditions,{})}),(0,$.jsx)(Q.View,{value:`builder`,children:(0,$.jsx)(Q.Builder,{suggestedFields:[`input`,`output`,`status`,`tag`],locale:{title:`Build a condition`,close:`Dismiss`,clear:`Start over`,searchField:`Find a field`,selectField:`Pick a field`,searchSubfield:`Find a part`,selectSubfield:`Pick a part`,searchOperator:`Find an operator`,selectOperator:`Pick an operator`,searchValue:`Find a value`,selectValue:`Pick a value`,valuePlaceholder:`Enter a value`,save:`Add condition`}})}),(0,$.jsx)(Q.ClearAll,{})]}),(0,$.jsx)(Q.Query,{})]})}},Ma={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`inactive`,label:`Inactive`},{value:`pending`,label:`Pending`},{value:`draft`,label:`Draft`}]},{type:`enum`,id:`workflow`,label:`Workflow`,operators:[{value:`IN`,label:`is any of`,symbol:`∈`},{value:`NOT IN`,label:`is none of`,symbol:`∉`}],options:[{value:`deploy`,label:`Deploy`},{value:`backup`,label:`Backup`},{value:`upgrade`,label:`Upgrade`},{value:`rollback`,label:`Rollback`},{value:`healthCheck`,label:`Health check`},{value:`provision`,label:`Provision`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`manual`,label:`Manual`},{value:`scheduled`,label:`Scheduled`},{value:`api`,label:`API`},{value:`webhook`,label:`Webhook`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`!=`,value:[`deprecated`,`draft`]},{kind:`field`,id:`c2`,field:`trigger`,operator:`=`,value:[`scheduled`]},{kind:`field`,id:`c3`,field:`parents`,operator:`=`,value:{from:1,to:5}}],defaultPins:[{field:`status`,value:`active`},{field:`workflow`,value:`deploy`}]},render:e=>(0,$.jsx)(Q.Root,{...e,children:(0,$.jsx)(Q.Toolbar,{children:(0,$.jsx)(Q.Conditions,{})})})},Na={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`}],options:[{value:`active`,label:`Active`},{value:`pending`,label:`Pending`}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`}]},render:e=>(0,$.jsx)(Q.Root,{...e,children:(0,$.jsxs)(Q.Toolbar,{children:[(0,$.jsx)(Q.Search,{}),(0,$.jsx)(Q.View,{value:`filters`,children:(0,$.jsx)(Q.Conditions,{})})]})})},Pa={args:{defaultExpanded:!0,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`enum`,id:`lastRunResult`,label:`Last run result`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`succeeded`,label:`Succeeded`},{value:`failed`,label:`Failed`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`manual`,label:`Manual`},{value:`scheduled`,label:`Scheduled`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`!=`,value:[`active`,`pending`]},{kind:`field`,id:`c2`,field:`lastRunResult`,operator:`!=`,value:[`succeeded`]},{kind:`field`,id:`c3`,field:`trigger`,operator:`=`,value:[`scheduled`]},{kind:`field`,id:`c4`,field:`parents`,operator:`=`,value:{from:1,to:5}},{kind:`field`,id:`c5`,field:`lastRun`,operator:`>`,value:`last7Days`},{kind:`field`,id:`c6`,field:`input`,subfield:`name`,operator:`~`,value:`WF456`},{kind:`search`,id:`c7`,text:`AAA`}]},render:e=>(0,$.jsx)(Q.Root,{...e,children:(0,$.jsxs)(Q.Toolbar,{children:[(0,$.jsx)(Q.Search,{}),(0,$.jsx)(Q.View,{value:`filters`,children:(0,$.jsx)(Q.Conditions,{})})]})})},Fa={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`},{value:`!=`,label:`not equals`},{value:`IN`,label:`is one of`},{value:`NOT IN`,label:`is none of`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`},{value:`<`,label:`less than`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`},{value:`~`,label:`contains`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`IN`,value:[`active`,`pending`]},{kind:`field`,id:`c2`,field:`input`,subfield:`vendor`,operator:`~`,value:`cisco`},{kind:`search`,id:`c3`,text:`timeout`}]},render:e=>(0,$.jsx)(Q.Root,{...e,children:(0,$.jsx)(Q.View,{value:`advanced`,children:(0,$.jsx)(Q.Query,{})})})},Ia={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`}],options:[{value:`scheduled`,label:`Scheduled`}]}],defaultQuery:`status = "active" OR trigger = "scheduled"`},render:e=>(0,$.jsx)(Q.Root,{...e,children:(0,$.jsx)(Q.View,{value:`advanced`,children:(0,$.jsx)(Q.Query,{})})})},La={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]}],locale:{label:`Refine results`,expand:`Show refinements`,collapse:`Hide refinements`}},render:e=>(0,$.jsxs)(Q.Root,{...e,children:[(0,$.jsxs)(Q.Toolbar,{children:[(0,$.jsx)(Q.Search,{locale:{label:`Find`,placeholder:`Press ‘/’ to find`}}),(0,$.jsx)(Q.ViewSwitch,{locale:{views:{filters:`Quick filters`,builder:`Guided query`,advanced:`Query editor`}}}),(0,$.jsx)(Q.ClearAll,{locale:{label:`Reset`}})]}),(0,$.jsx)(Q.View,{value:`advanced`,children:(0,$.jsx)(Q.Query,{locale:{label:`Query editor`,placeholder:`status = "Active"`,help:`Syntax`}})})]})},Ra=[`Default`,`QueryBuilder`,`QueryBuilderLocalized`,`FiltersDialog`,`Search`,`SelectedFilters`,`AdvancedQuery`,`LockedViews`,`Localized`],ka.parameters={...ka.parameters,docs:{...ka.parameters?.docs,source:{originalSource:`{
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
}`,...ka.parameters?.docs?.source},description:{story:"The canonical layout. `fields` describes what can be filtered; `defaultConditions` seeds the\ndocument with a search, an enum, a compound-field and a date-preset condition — one of each shape.\nOnly the advanced query renders for now; the other parts are in progress.",...ka.parameters?.docs?.description}}},Aa.parameters={...Aa.parameters,docs:{...Aa.parameters?.docs,source:{originalSource:`{
  args: {
    defaultExpanded: true,
    fields: [{
      type: 'compound',
      id: 'input',
      label: 'Input',
      subfields: [{
        type: 'text',
        id: 'name',
        label: 'Name',
        operators: [{
          value: '~',
          label: 'Contains'
        }, {
          value: '=',
          label: 'Equal'
        }, {
          value: '!=',
          label: 'Not equal'
        }]
      }, {
        type: 'text',
        id: 'vendor',
        label: 'Vendor',
        operators: [{
          value: '=',
          label: 'Equal'
        }]
      }, {
        type: 'text',
        id: 'type',
        label: 'Type',
        operators: [{
          value: '=',
          label: 'Equal'
        }]
      }, {
        type: 'text',
        id: 'version',
        label: 'Version',
        operators: [{
          value: '=',
          label: 'Equal'
        }]
      }]
    }, {
      type: 'text',
      id: 'output',
      label: 'Output',
      operators: [{
        value: '=',
        label: 'Equal'
      }]
    }, {
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
      }, {
        value: 'pending',
        label: 'Pending'
      }]
    }, {
      type: 'enum',
      id: 'tag',
      label: 'Tag',
      operators: [{
        value: '=',
        label: 'equals'
      }],
      options: [{
        value: 'core',
        label: 'Core'
      }, {
        value: 'edge',
        label: 'Edge'
      }]
    }]
  },
  parameters: {
    docs: {
      source: {
        type: 'code'
      },
      // The dialog is position:fixed. Inline docs share one document, so an open dialog covers
      // the whole page. An iframe keeps it inside this story.
      story: {
        inline: false,
        height: '520px'
      }
    }
  },
  render: args => {
    const [view, setView] = useState<DsFiltersBarView>('builder');
    return <DsFiltersBar.Root {...args} view={view} onViewChange={next => {
      setView(next);
      args.onViewChange?.(next);
    }}>
                <DsFiltersBar.Toolbar>
                    <DsButtonV3 variant="secondary" size="medium" onClick={() => setView('builder')}>
                        Query builder
                    </DsButtonV3>
                    <DsFiltersBar.Search />
                    <DsFiltersBar.View value="filters">
                        <DsFiltersBar.Conditions />
                    </DsFiltersBar.View>
                    <DsFiltersBar.View value="builder">
                        <DsFiltersBar.Builder suggestedFields={['input', 'output', 'status', 'tag']} />
                    </DsFiltersBar.View>
                    <DsFiltersBar.ClearAll />
                </DsFiltersBar.Toolbar>
                <DsFiltersBar.Query />
            </DsFiltersBar.Root>;
  }
}`,...Aa.parameters?.docs?.source},description:{story:`Guided condition: suggested fields, then — depending on the field — a subfield, an operator and a
value. **Save query** appends one condition and clears the draft. Closing returns to the filters
view, and the query text shows the condition. **Query builder** opens the dialog again.
\`ViewSwitch\` does not render yet, so this story opens the builder itself.`,...Aa.parameters?.docs?.description}}},ja.parameters={...ja.parameters,docs:{...ja.parameters?.docs,source:{originalSource:`{
  ...QueryBuilder,
  render: args => {
    const [view, setView] = useState<DsFiltersBarView>('builder');
    return <DsFiltersBar.Root {...args} view={view} onViewChange={next => {
      setView(next);
      args.onViewChange?.(next);
    }}>
                <DsFiltersBar.Toolbar>
                    <DsButtonV3 variant="secondary" size="medium" onClick={() => setView('builder')}>
                        Query builder
                    </DsButtonV3>
                    <DsFiltersBar.Search />
                    <DsFiltersBar.View value="filters">
                        <DsFiltersBar.Conditions />
                    </DsFiltersBar.View>
                    <DsFiltersBar.View value="builder">
                        <DsFiltersBar.Builder suggestedFields={['input', 'output', 'status', 'tag']} locale={{
            title: 'Build a condition',
            close: 'Dismiss',
            clear: 'Start over',
            searchField: 'Find a field',
            selectField: 'Pick a field',
            searchSubfield: 'Find a part',
            selectSubfield: 'Pick a part',
            searchOperator: 'Find an operator',
            selectOperator: 'Pick an operator',
            searchValue: 'Find a value',
            selectValue: 'Pick a value',
            valuePlaceholder: 'Enter a value',
            save: 'Add condition'
          }} />
                    </DsFiltersBar.View>
                    <DsFiltersBar.ClearAll />
                </DsFiltersBar.Toolbar>
                <DsFiltersBar.Query />
            </DsFiltersBar.Root>;
  }
}`,...ja.parameters?.docs?.source},description:{story:`Same dialog with every built-in string replaced.`,...ja.parameters?.docs?.description}}},Ma.parameters={...Ma.parameters,docs:{...Ma.parameters?.docs,source:{originalSource:`{
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
}`,...Ma.parameters?.docs?.source},description:{story:`The "+" button in \`Conditions\` opens the filters dialog, with one tab per field and per compound
subfield. An enum tab has an operator, an option search, and a checkbox and pin per option. Text,
number and date tabs have an operator and a value; number and date tabs add **between** for a
range, and a date tab lists its presets. Edits stay a draft until **Save filters** writes one
condition per tab with a value, and the pins, back to the document; closing any other way drops
the draft. Search conditions are left as they are.`,...Ma.parameters?.docs?.description}}},Na.parameters={...Na.parameters,docs:{...Na.parameters?.docs,source:{originalSource:`{
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
}`,...Na.parameters?.docs?.source},description:{story:`Enter adds the typed text as a search condition, shown as a chip after the "+" button, and clears
the input; the same search is not added twice. \\\`/\\\` focuses the input from anywhere outside a text
field or dialog. Clicking a chip moves its text back into the input for editing; its × removes it.
Search is disabled while an Advanced query is the source.`,...Na.parameters?.docs?.description}}},Pa.parameters={...Pa.parameters,docs:{...Pa.parameters?.docs,source:{originalSource:`{
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
}`,...Pa.parameters?.docs?.source},description:{story:`Every condition shows as a chip after the "+" button: the field, its operator and the value, with
\`Input › Name\` for a compound field's subfield. When the field has more than one operator, the
operator is a menu that switches it in place; a field with one operator shows it as text, and a
range shows none, since it means "within". Clicking a chip opens the filters dialog on that field;
× removes a condition. While an Advanced query is the source, the chips and the "+" button are
hidden.`,...Pa.parameters?.docs?.description}}},Fa.parameters={...Fa.parameters,docs:{...Fa.parameters?.docs,source:{originalSource:`{
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
}`,...Fa.parameters?.docs?.source},description:{story:"The advanced view shows the conditions as query text. Edit it: a query joined by `AND` goes back\nto the conditions, and one that breaks the rules shows why under the field.",...Fa.parameters?.docs?.description}}},Ia.parameters={...Ia.parameters,docs:{...Ia.parameters?.docs,source:{originalSource:`{
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
}`,...Ia.parameters?.docs?.source},description:{story:"A query with `OR` or parentheses cannot be shown as conditions, so it becomes the only source:\nthe conditions are ignored and the filters and builder views lock until the query is cleared.",...Ia.parameters?.docs?.description}}},La.parameters={...La.parameters,docs:{...La.parameters?.docs,source:{originalSource:`{
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
}`,...La.parameters?.docs?.source},description:{story:"`Root` takes its own strings through `locale`; each part takes its own `locale` too.",...La.parameters?.docs?.description}}}})))()}za();export{Fa as AdvancedQuery,ka as Default,Ma as FiltersDialog,La as Localized,Ia as LockedViews,Aa as QueryBuilder,ja as QueryBuilderLocalized,Na as Search,Pa as SelectedFilters,Ra as __namedExportsOrder,Oa as default};