import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-DsQ25TO1.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-typography-KRnwJjRT.js";import{n as c,t as l}from"./ds-button-v3-DGHWP9hw.js";import{n as u,t as d}from"./ds-stack-DT-FYiQt.js";import{n as f,t as p}from"./use-controlled-CNEmuIQZ.js";import{t as m}from"./ds-popover-5EwZ-_2E.js";import{t as h}from"./ds-popover-dOnMiqo4.js";import{t as ee}from"./ds-form-control-lEDzzlVl.js";import{t as g}from"./ds-form-control-DkA7V1f-.js";var te,_,v;function y(){return(y=t((()=>{te=n(),_=(0,te.createContext)(null),v=()=>{let e=(0,te.useContext)(_);if(!e)throw Error(`DsFiltersBar compound components must be used within DsFiltersBar.Root`);return e}})))()}var b;function x(){return(x=t((()=>{y(),b=()=>(v(),null),b.displayName=`DsFiltersBar.ClearAll`})))()}var S,C,ne;function w(){return(w=t((()=>{y(),S=()=>(v(),null),S.displayName=`DsFiltersBar.Pinned`,C=()=>(v(),null),C.displayName=`DsFiltersBar.PinnedGroup`,ne=()=>(v(),null),ne.displayName=`DsFiltersBar.PinnedToggle`})))()}var T,E;function D(){return(D=t((()=>{y(),T=()=>(v(),null),T.displayName=`DsFiltersBar.SavedFilters`,E=()=>(v(),null),E.displayName=`DsFiltersBar.SaveFilter`})))()}var O;function k(){return(k=t((()=>{y(),O=()=>(v(),null),O.displayName=`DsFiltersBar.Search`})))()}var A;function j(){return(j=t((()=>{y(),A=()=>(v(),null),A.displayName=`DsFiltersBar.Summary`})))()}var re;function ie(){return(ie=t((()=>{y(),re=()=>(v(),null),re.displayName=`DsFiltersBar.Toolbar`})))()}var ae;function oe(){return(oe=t((()=>{y(),ae=e=>{let{value:t,children:n}=e,{view:r}=v();return r===t?n:null},ae.displayName=`DsFiltersBar.View`})))()}var M;function se(){return(se=t((()=>{y(),M=()=>(v(),null),M.displayName=`DsFiltersBar.ViewSwitch`})))()}var N;function ce(){return(ce=t((()=>{y(),N=()=>(v(),null),N.displayName=`DsFiltersBar.Builder`})))()}function P(){return(P=t((()=>{ce()})))()}var F;function I(){return(I=t((()=>{y(),F=()=>(v(),null),F.displayName=`DsFiltersBar.Conditions`})))()}function L(){return(L=t((()=>{I()})))()}var R,z,le;function B(){return(B=t((()=>{R=[`=`,`!=`,`>`,`>=`,`<`,`<=`,`IN`,`NOT IN`,`~`,`!~`],z=[`filters`,`builder`,`advanced`],le=Object.freeze({label:`Filters`,expand:`Show filters`,collapse:`Hide filters`}),Object.freeze({resultCount:e=>`${String(e)} results`,activeSavedFilter:`Filter`,emptyLabel:`View`,emptyValue:`All`}),Object.freeze({label:`Search`,placeholder:`Type ‘/’ to search`}),Object.freeze({label:`Filter view`,views:Object.freeze({filters:`Filters`,builder:`Query builder`,advanced:`Advanced query`}),lockedView:`Clear the advanced query to switch views`}),Object.freeze({label:`Clear all`}),Object.freeze({label:`Pinned`})})))()}var V;function H(){return(H=t((()=>{V=class extends Error{error;constructor(e,t,n,r,i){super(t),this.error={code:t,from:n,to:r,text:i??e.slice(n,r)}}}})))()}var ue,de,fe,pe,me,he,ge,_e,ve,ye;function be(){return(be=t((()=>{B(),ue=2,de=16,fe=Object.freeze([`filters`,`builder`]),pe=Object.freeze([]),me=e=>e?.trim()?e:null,he=e=>e===null?pe:fe,ge=()=>{let e=crypto.getRandomValues(new Uint32Array(ue));return`condition-${Array.from(e,e=>e.toString(de)).join(``)}`},_e=(e,t)=>[...e,t],ve=(e,t)=>e.map(e=>e.id===t.id?t:e),ye=(e,t)=>e.filter(e=>e.id!==t)})))()}var xe,Se,Ce,we,Te,Ee;function De(){return(De=t((()=>{be(),xe=e=>e.kind===`clause`||e.kind===`search`,Se=e=>xe(e)?[e]:e.kind===`and`&&e.children.every(xe)?e.children.filter(xe):null,Ce=e=>typeof e==`object`&&`from`in e?[e.from,e.to]:e,we=e=>JSON.stringify(e.kind===`search`?[e.kind,e.text]:[e.kind,e.field,e.subfield??null,e.operator,Ce(e.value)]),Te=(e,t)=>e.kind===`search`?{kind:`search`,id:t,text:e.text}:{kind:`field`,id:t,field:e.field,...e.subfield&&{subfield:e.subfield},operator:e.operator,value:e.value},Ee=(e,t)=>{let n=Se(e);if(!n)return null;let r=new Map;for(let e of t){let t=we(e);r.set(t,[...r.get(t)??[],e.id])}return n.map(e=>{let t=Te(e,``),n=r.get(we(t))?.shift();return{...t,id:n??ge()}})}})))()}var Oe,ke,Ae,je,Me,Ne,Pe,Fe,Ie,Le,Re;function ze(){return(ze=t((()=>{Oe=`"`,ke=`\\`,Ae=/\s/,je=/[\s()",=!<>~]/,Me=Object.freeze({"(":`openParen`,")":`closeParen`,",":`comma`}),Ne=Object.freeze([`!=`,`!~`,`>=`,`<=`,`=`,`>`,`<`,`~`]),Pe=(e,t)=>{let n=``,r=t+1;for(;r<e.length;){let i=e.charAt(r);if(i===ke&&r+1<e.length){n+=e.charAt(r+1),r+=2;continue}if(i===Oe)return{kind:`string`,value:n,from:t,to:r+1};n+=i,r+=1}return{kind:`unterminated`,value:n,from:t,to:e.length}},Fe=(e,t)=>{let n=t;for(;n<e.length&&!je.test(e.charAt(n));)n+=1;return{kind:`word`,value:e.slice(t,n),from:t,to:n}},Ie=(e,t)=>{let n=t;for(;n<e.length&&Ae.test(e.charAt(n));)n+=1;return n},Le=(e,t)=>{let n=t.value.toUpperCase();if(n===`AND`||n===`OR`)return{...t,kind:n===`AND`?`and`:`or`,value:n};if(n===`IN`)return{...t,kind:`operator`,value:`IN`};if(n!==`NOT`)return t;let r=Fe(e,Ie(e,t.to));return r.value.toUpperCase()===`IN`?{kind:`operator`,value:`NOT IN`,from:t.from,to:r.to}:{...t,kind:`not`,value:n}},Re=e=>{let t=[],n=Ie(e,0);for(;n<e.length;){let r=e.charAt(n),i=Me[r],a=Ne.find(t=>e.startsWith(t,n)),o;o=i?{kind:i,value:r,from:n,to:n+1}:r===Oe?Pe(e,n):a?{kind:`operator`,value:a,from:n,to:n+a.length}:je.test(r)?{kind:`unknown`,value:r,from:n,to:n+1}:Le(e,Fe(e,n)),t.push(o),n=Ie(e,o.to)}return t}})))()}var Be,Ve,He,U,Ue,We,Ge,Ke,qe,Je,Ye;function Xe(){return(Xe=t((()=>{H(),Be=`.`,Ve=/^-?\d+(\.\d+)?([eE][+-]?\d+)?$/,He=/^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}(:\d{2}(\.\d+)?)?(Z|[+-]\d{2}:\d{2})?)?$/,U=(e,t)=>e.toLowerCase()===t.toLowerCase(),Ue=(e,t)=>e.find(e=>U(e.value,t))??e.find(e=>U(e.label,t)),We=10,Ge=e=>{if(!He.test(e)||Number.isNaN(Date.parse(e)))return!1;let t=e.slice(0,We);return new Date(`${t}T00:00:00Z`).toISOString().startsWith(t)},Ke=Object.freeze({IN:`=`,"NOT IN":`!=`,">=":`=`,"<=":`=`}),qe=(e,t)=>{let n=Ke[t],r=t===`IN`||t===`NOT IN`?e.type===`enum`:e.type===`number`||e.type===`date`;return n&&r&&e.operators.some(e=>e.value===n)?n:null},Je=(e,t)=>e!==`>=`&&e!==`<=`?t:typeof t==`number`||typeof t==`string`?(e===`>=`?`from`:`to`)==`from`?{from:t,to:null}:{from:null,to:t}:t,Ye=(e,t,n)=>{let r=(t,n)=>{throw new V(e,t,n.from,n.to,n.text)},i=e=>{let t=n.find(t=>U(t.id,e.text));if(t?.type===`compound`)return r(`subfieldRequired`,e);if(t)return{field:t.id,scalar:t};let i=e.text.indexOf(Be),a=i===-1?void 0:n.find(t=>U(t.id,e.text.slice(0,i)));if(!a)return r(`unknownField`,e);let o={text:e.text.slice(i+1),from:e.from+i+1,to:e.to},s=a.type===`compound`?a.subfields.find(e=>U(e.id,o.text)):void 0;return s?{field:a.id,subfield:s.id,scalar:s}:r(`unknownSubfield`,o)},a=(e,t)=>{let[n]=t.values;switch(e.type){case`enum`:return t.values.map(t=>Ue(e.options,t.text)?.value??r(`unknownOption`,t));case`number`:{let e=Number(n.text);return Ve.test(n.text)&&Number.isFinite(e)?e:r(`notANumber`,n)}case`date`:{let t=Ue(e.presets??[],n.text);return t?t.value:Ge(n.text)?n.text:r(`invalidDate`,n)}default:return n.text}},o=e=>{let{field:t,subfield:n,scalar:o}=i(e.field),s=e.operator.text;e.list&&o.type!==`enum`&&r(`operatorNotAllowed`,e.operator);let c=o.operators.some(e=>e.value===s),l=c?s:qe(o,s)??r(`operatorNotAllowed`,e.operator),u=a(o,e);return!c&&(s===`>=`||s===`<=`)&&typeof u==`string`&&!Ge(u)&&r(`operatorNotAllowed`,e.operator),{kind:`clause`,field:t,...n&&{subfield:n},operator:l,value:c?u:Je(s,u),from:e.from,to:e.to}},s=e=>{switch(e.kind){case`clause`:return o(e);case`search`:return e;case`group`:return{kind:`group`,child:s(e.child)};default:return{kind:e.kind,children:e.children.map(s)}}};return s(t)}})))()}var Ze,Qe,$e,et,tt;function nt(){return(nt=t((()=>{B(),H(),De(),ze(),Xe(),Ze=Object.freeze([`IN`,`NOT IN`]),Qe=e=>R.some(t=>t===e),$e=e=>({text:e.value,from:e.from,to:e.to}),et=(e,t)=>{let n=0,r=(t,n)=>{throw new V(e,t,n.from,n.to)},i=()=>t[n],a=e=>r(e.kind===`unterminated`?`unterminatedString`:`unexpectedToken`,e),o=()=>i()??r(`unexpectedEnd`,{from:e.length,to:e.length}),s=e=>{let t=o();return t.kind!==e&&a(t),n+=1,t},c=()=>{let e=o();return e.kind!==`string`&&e.kind!==`word`?a(e):(n+=1,$e(e))},l=()=>{let e=o();e.kind!==`openParen`&&r(`listExpected`,e),n+=1;let t=i();t?.kind===`closeParen`&&r(`emptyList`,{from:e.from,to:t.to});let a=c(),l=[];for(;i()?.kind===`comma`;)n+=1,l.push(c());return{values:[a,...l],to:s(`closeParen`).to}},u=()=>{let e=c();return{values:[e],to:e.to}},d=()=>{let e=s(`word`),t=s(`operator`),n=t.value;if(!Qe(n))return a(t);let r=Ze.includes(n),{values:i,to:o}=r?l():u();return{kind:`clause`,field:$e(e),operator:{...$e(t),text:n},values:i,list:r,from:e.from,to:o}},f=()=>{let e=o();if(e.kind===`openParen`){n+=1;let e=h();return s(`closeParen`),{kind:`group`,child:e}}return e.kind===`string`?(n+=1,{kind:`search`,text:e.value,from:e.from,to:e.to}):e.kind===`word`?d():a(e)},p=(e,t)=>{let r=t(),a=[];for(;i()?.kind===e;)n+=1,a.push(t());return a.length?{kind:e,children:[r,...a]}:r},m=()=>p(`and`,f);function h(){return p(`or`,m)}if(!t.length)return{kind:`and`,children:[]};let ee=h(),g=i();return g&&a(g),ee},tt=(e,t,n=[])=>{try{let r=Ye(e,et(e,Re(e)),t);return{ok:!0,node:r,conditions:Ee(r,n)}}catch(e){if(e instanceof V)return{ok:!1,error:e.error};throw e}}})))()}var rt,it,W,at,ot,st;function ct(){return(ct=t((()=>{rt=` AND `,it=e=>`"${e.replace(/[\\"]/g,e=>`\\${e}`)}"`,W=e=>typeof e==`number`?String(e):it(e),at=e=>typeof e==`object`&&`from`in e,ot=e=>{let{value:t,operator:n}=e,r=e.subfield?`${e.field}.${e.subfield}`:e.field;if(at(t))return t.from===null&&t.to===null?`${r} = ()`:[t.from===null?``:`${r} >= ${W(t.from)}`,t.to===null?``:`${r} <= ${W(t.to)}`].filter(Boolean).join(rt);if(typeof t!=`object`)return`${r} ${n} ${W(t)}`;let[i,...a]=t,o=n===`!=`||n===`NOT IN`;return t.length?i!==void 0&&!a.length&&(n===`=`||n===`!=`)?`${r} ${n} ${W(i)}`:`${r} ${o?`NOT IN`:`IN`} (${t.map(W).join(`, `)})`:`${r} ${o?`NOT IN`:`IN`} ()`},st=e=>e.map(e=>e.kind===`search`?it(e.text):ot(e)).filter(Boolean).join(rt)})))()}function lt(){return(lt=t((()=>{nt(),ct()})))()}var ut,dt;function ft(){return(ft=t((()=>{ut=`_root_1mpdz_1`,dt={root:ut}})))()}var pt;function mt(){return(mt=t((()=>{pt=Object.freeze({label:`Advanced query`,placeholder:`status = "Active" AND trigger = "Scheduled"`,searchPlaceholder:`Search in query`,errors:Object.freeze({unexpectedToken:e=>`Unexpected “${e}”`,unexpectedEnd:()=>`The query is incomplete`,unterminatedString:()=>`Close the quoted value with "`,unknownField:e=>`Unknown field “${e}”`,unknownSubfield:e=>`Unknown subfield “${e}”`,subfieldRequired:e=>`Name a subfield of “${e}” after a dot`,operatorNotAllowed:e=>`“${e}” can’t be used with this field`,unknownOption:e=>`“${e}” is not a value of this field`,notANumber:e=>`“${e}” is not a number`,invalidDate:e=>`“${e}” is not a date or a date preset`,listExpected:()=>`Put the values in parentheses, as in IN ("a", "b")`,emptyList:()=>`Add at least one value to the list`}),help:`Query syntax`,helpOperators:`Operators`,helpCombine:`Join clauses with AND or OR, and group them with parentheses. OR and parentheses lock the filters and builder views.`,helpSearch:`A quoted value on its own searches all text, as in "timeout".`,helpExample:`Example`,operators:Object.freeze({"=":`equals`,"!=":`not equals`,">":`greater than`,">=":`greater than or equals`,"<":`less than`,"<=":`less than or equals`,IN:`is one of`,"NOT IN":`is none of`,"~":`contains`,"!~":`does not contain`})})})))()}var ht,gt,_t,vt;function yt(){return(yt=t((()=>{ht=`_operators_2muaf_5`,gt=`_operator_2muaf_5`,_t=`_example_2muaf_27`,vt={operators:ht,operator:gt,example:_t}})))()}var bt,xt,St,Ct,wt,Tt,Et;function Dt(){return(Dt=t((()=>{lt(),bt=2,xt=10,St=`2026-01-01`,Ct=`value`,wt=`"timeout"`,Tt=e=>{switch(e.type){case`enum`:return e.options.slice(0,1).map(e=>e.value);case`number`:return xt;case`date`:return e.presets?.[0]?.value??St;default:return Ct}},Et=e=>{let t=e.slice(0,bt).flatMap(e=>{let t=e.type===`compound`?e.subfields[0]:void 0,n=e.type===`compound`?t:e,r=n?.operators[0];return!n||!r?[]:[{kind:`field`,id:e.id,field:e.id,...t&&{subfield:t.id},operator:r.value,value:Tt(n)}]});return st(t)||wt}})))()}function Ot(e){e.preventDefault()}function kt(e){e.preventDefault()}var At,G,jt,Mt;function Nt(){return(Nt=t((()=>{At=i(),c(),h(),u(),s(),B(),yt(),Dt(),G=r(),jt=360,Mt=e=>{let t=(0,At.c)(17),{fields:n,locale:r,content:i}=e,a;t[0]===r.help?a=t[1]:(a=(0,G.jsx)(m.Trigger,{children:(0,G.jsx)(l,{variant:`tertiary`,size:`small`,icon:`help`,"aria-label":r.help,onPointerDown:kt})}),t[0]=r.help,t[1]=a);let s;t[2]!==i||t[3]!==n||t[4]!==r.help||t[5]!==r.helpCombine||t[6]!==r.helpExample||t[7]!==r.helpOperators||t[8]!==r.helpSearch||t[9]!==r.operators?(s=i??(0,G.jsxs)(G.Fragment,{children:[(0,G.jsx)(m.Header,{children:r.help}),(0,G.jsx)(m.Content,{children:(0,G.jsxs)(d,{direction:`column`,gap:`var(--sm)`,children:[(0,G.jsxs)(d,{direction:`column`,gap:`var(--xs)`,children:[(0,G.jsx)(o,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpOperators}),(0,G.jsx)(`dl`,{className:vt.operators,children:R.map(e=>(0,G.jsxs)(`div`,{className:vt.operator,children:[(0,G.jsx)(`dt`,{children:(0,G.jsx)(o,{variant:`code-sm-reg`,color:`main`,children:e})}),(0,G.jsx)(`dd`,{children:r.operators[e]})]},e))})]}),(0,G.jsx)(o,{variant:`body-sm-reg`,color:`secondary`,children:r.helpCombine}),(0,G.jsx)(o,{variant:`body-sm-reg`,color:`secondary`,children:r.helpSearch}),(0,G.jsxs)(d,{direction:`column`,gap:`var(--xs)`,children:[(0,G.jsx)(o,{variant:`body-sm-semi-bold`,color:`main`,children:r.helpExample}),(0,G.jsx)(o,{variant:`code-sm-reg`,color:`main`,className:vt.example,children:Et(n)})]})]})})]}),t[2]=i,t[3]=n,t[4]=r.help,t[5]=r.helpCombine,t[6]=r.helpExample,t[7]=r.helpOperators,t[8]=r.helpSearch,t[9]=r.operators,t[10]=s):s=t[10];let c;t[11]!==r.help||t[12]!==s?(c=(0,G.jsx)(m.Panel,{width:jt,"aria-label":r.help,children:s}),t[11]=r.help,t[12]=s,t[13]=c):c=t[13];let u;return t[14]!==a||t[15]!==c?(u=(0,G.jsxs)(m.Root,{side:`bottom`,align:`end`,onOpenAutoFocus:Ot,children:[a,c]}),t[14]=a,t[15]=c,t[16]=u):u=t[16],u}})))()}function Pt(){return(Pt=t((()=>{Nt()})))()}var Ft,K,It,Lt,Rt,zt,Bt;function Vt(){return(Vt=t((()=>{Ft=i(),K=n(),It=e(a(),1),g(),y(),lt(),ft(),mt(),Pt(),Lt=r(),Rt=300,zt=e=>{let t=(0,Ft.c)(16),{disabled:n,locale:r,slots:i,className:a,style:o}=e,s=n!==void 0&&n,c=v(),l={...pt,...r,errors:{...pt.errors,...r?.errors},operators:{...pt.operators,...r?.operators}},[u,d]=(0,K.useState)(null),[f,p]=(0,K.useState)(null),[m,h]=(0,K.useState)(!1),g=(0,K.useRef)(void 0),te=(0,K.useRef)(c),_;t[0]===c?_=t[1]:(_=()=>{te.current=c},t[0]=c,t[1]=_),(0,K.useEffect)(_);let y,b;t[2]===Symbol.for(`react.memo_cache_sentinel`)?(y=()=>()=>clearTimeout(g.current),b=[],t[2]=y,t[3]=b):(y=t[2],b=t[3]),(0,K.useEffect)(y,b);let x=u&&(m||u.base===c.queryText)?u:null,S=x?f:null,C;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(C=e=>{let t=te.current,n=tt(e,t.fields,t.conditions);if(!n.ok)return p(n.error),!1;p(null);let{conditions:r}=n;r?(r.length===t.conditions.length&&r.every((e,n)=>e.id===t.conditions[n]?.id)||t.setConditions(r),t.query!==null&&t.setQuery(null)):t.query!==e&&t.setQuery(e);let i=r?st(r):e;return d(t=>t?.text===e?{text:e,base:i}:t),!0},t[4]=C):C=t[4];let ne=C,w;t[5]!==x?.base||t[6]!==c.queryText?(w=e=>{d({text:e,base:x?.base??c.queryText}),clearTimeout(g.current),g.current=setTimeout(()=>{g.current=void 0,ne(e)},Rt)},t[5]=x?.base,t[6]=c.queryText,t[7]=w):w=t[7];let T=w,E;t[8]!==x||t[9]!==u?(E=()=>{h(!0),u&&!x&&(d(null),p(null))},t[8]=x,t[9]=u,t[10]=E):E=t[10];let D=E,O;t[11]!==x||t[12]!==f?(O=()=>{if(h(!1),!x)return;let e=g.current!==void 0;clearTimeout(g.current),g.current=void 0,(e?ne(x.text):f===null)&&d(null)},t[11]=x,t[12]=f,t[13]=O):O=t[13];let k=O,A=l.label,j;return t[14]===a?j=t[15]:(j=(0,It.default)(dt.root,a),t[14]=a,t[15]=j),(0,Lt.jsx)(ee,{label:A,hideLabel:!0,status:S?`error`:void 0,message:S?l.errors[S.code](S.text):void 0,messageIcon:`error`,className:j,style:o,children:(0,Lt.jsx)(ee.CodeInput,{value:x?.text??c.queryText,placeholder:l.placeholder,disabled:s,invalid:S!==null,locale:{searchPlaceholder:l.searchPlaceholder,codeLabel:l.label},slots:{endAdornment:(0,Lt.jsx)(Mt,{fields:c.fields,locale:l,content:i?.help})},onValueChange:T,onFocus:D,onBlur:k})})},Bt=e=>{let t=(0,Ft.c)(3),{resetRevision:n}=v(),r;return t[0]!==e||t[1]!==n?(r=(0,Lt.jsx)(zt,{...e},n),t[0]=e,t[1]=n,t[2]=r):r=t[2],r},Bt.displayName=`DsFiltersBar.Query`})))()}function Ht(){return(Ht=t((()=>{Vt()})))()}function Ut(){return(Ut=t((()=>{x(),w(),D(),k(),j(),ie(),oe(),se(),P(),L(),Ht()})))()}function Wt(e){return e+1}var Gt,Kt,qt,Jt,Yt,Xt,Zt,q;function Qt(){return(Qt=t((()=>{Gt=i(),Kt=n(),p(),Ut(),y(),B(),be(),lt(),qt=r(),Jt=Object.freeze([]),Yt=Object.freeze([]),Xt=Object.freeze([]),Zt=e=>{let t=(0,Gt.c)(42),{fields:n,conditions:r,defaultConditions:i,query:a,defaultQuery:o,pins:s,defaultPins:c,expanded:l,defaultExpanded:u,view:d,defaultView:p,locale:m,children:h,onConditionsChange:ee,onQueryChange:g,onPinsChange:te,onExpandedChange:v,onViewChange:y}=e,b=n===void 0?Jt:n,x=i===void 0?Yt:i,S=o===void 0?null:o,C=c===void 0?Xt:c,ne=u!==void 0&&u,w=p===void 0?`filters`:p,[T,E]=f(r,ee,x),[D,O]=f(a,g,S),[k,A]=f(s,te,C),[j,re]=f(l,v,ne),[ie,ae]=f(d,y,w),oe=(0,Kt.useId)(),[M,se]=(0,Kt.useState)(0),N;t[0]!==T||t[1]!==D?(N=D??st(T),t[0]=T,t[1]=D,t[2]=N):N=t[2];let ce=D===null&&T.length===0,P;t[3]===D?P=t[4]:(P=he(D),t[3]=D,t[4]=P);let F;t[5]===m?F=t[6]:(F={...le,...m},t[5]=m,t[6]=F);let I,L,R;t[7]!==T||t[8]!==E?(I=e=>E(_e(T,e)),L=e=>E(ve(T,e)),R=e=>E(ye(T,e)),t[7]=T,t[8]=E,t[9]=I,t[10]=L,t[11]=R):(I=t[9],L=t[10],R=t[11]);let z;t[12]===O?z=t[13]:(z=e=>O(me(e)),t[12]=O,t[13]=z);let B;t[14]!==E||t[15]!==O?(B=()=>{se(Wt),E(Yt),O(null)},t[14]=E,t[15]=O,t[16]=B):B=t[16];let V;t[17]!==T||t[18]!==j||t[19]!==b||t[20]!==k||t[21]!==D||t[22]!==M||t[23]!==E||t[24]!==re||t[25]!==A||t[26]!==ae||t[27]!==F||t[28]!==I||t[29]!==L||t[30]!==R||t[31]!==z||t[32]!==B||t[33]!==N||t[34]!==ce||t[35]!==P||t[36]!==oe||t[37]!==ie?(V={fields:b,conditions:T,query:D,queryText:N,resetRevision:M,pins:k,isEmpty:ce,lockedViews:P,expanded:j,view:ie,toolbarId:oe,locale:F,setConditions:E,addCondition:I,updateCondition:L,removeCondition:R,setQuery:z,setPins:A,clear:B,setExpanded:re,setView:ae},t[17]=T,t[18]=j,t[19]=b,t[20]=k,t[21]=D,t[22]=M,t[23]=E,t[24]=re,t[25]=A,t[26]=ae,t[27]=F,t[28]=I,t[29]=L,t[30]=R,t[31]=z,t[32]=B,t[33]=N,t[34]=ce,t[35]=P,t[36]=oe,t[37]=ie,t[38]=V):V=t[38];let H;return t[39]!==h||t[40]!==V?(H=(0,qt.jsx)(_.Provider,{value:V,children:h}),t[39]=h,t[40]=V,t[41]=H):H=t[41],H},Zt.displayName=`DsFiltersBar.Root`,q={Root:Zt,Summary:A,Toolbar:re,SavedFilters:T,SaveFilter:E,Search:O,ViewSwitch:M,View:ae,Conditions:F,Builder:N,Query:Bt,ClearAll:b,Pinned:S,PinnedGroup:C,PinnedToggle:ne}})))()}function $t(){return($t=t((()=>{Qt()})))()}var J,Y,en,X,Z,Q,$,tn;function nn(){return(nn=t((()=>{$t(),B(),J=r(),{fn:Y}=__STORYBOOK_MODULE_TEST__,en={title:`Components/FiltersBar`,component:q.Root,tags:[`!manifest`],parameters:{layout:`padded`,docs:{description:{component:'\n**Work in progress — the API is wired; the advanced query view renders, the other parts render\nnothing yet.** Until `Toolbar` renders, the stories place the advanced view directly under `Root`.\n\n**Internal component.** Not exported from `@drivenets/design-system` while it is being built.\n\nA toolbar above a table or list for narrowing the data with filters, a query builder or an advanced\nquery, with **Saved filters** and a pinned row of quick toggles.\n\n**One filter document.** `Root` owns `conditions` and `query` (controlled or uncontrolled)\nand describes what can be filtered through `fields`. Every view reads and writes that same\ndocument, so a condition built in the query builder shows as a chip in the filters view and in the\ncollapsed summary.\n\n**One query language.** The advanced view writes the conditions as query text and checks what the\nuser types against `fields`: `status IN ("active", "pending") AND input.vendor ~ "cisco"`.\nOnly a valid query reaches the document. One made of clauses joined by `AND` becomes conditions;\none with `OR` or parentheses becomes `query`, the only source, and the filters and builder\nviews lock until it is cleared. Evaluate such a query with `parseFilterQuery(query, fields)`.\n\n**Pins are a user preference,** not part of the document: loading a saved filter or clearing leaves\nthem alone.\n\n**Collapsed shows a summary, expanded shows the toolbar.** `Summary` renders while collapsed,\n`Toolbar` while expanded; `Pinned` renders in both.\n                '}}},argTypes:{expanded:{control:`boolean`},defaultExpanded:{control:`boolean`},view:{control:`select`,options:z},defaultView:{control:`select`,options:z},children:{table:{disable:!0}},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},onConditionsChange:{table:{disable:!0}},onQueryChange:{table:{disable:!0}},onPinsChange:{table:{disable:!0}},onExpandedChange:{table:{disable:!0}},onViewChange:{table:{disable:!0}}},args:{onConditionsChange:Y(),onQueryChange:Y(),onPinsChange:Y(),onExpandedChange:Y(),onViewChange:Y()}},X={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`,symbol:`=`},{value:`!=`,label:`not equals`,symbol:`≠`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`,symbol:`>`},{value:`<`,label:`less than`,symbol:`<`}]},{type:`date`,id:`lastRun`,label:`Last run`,operators:[{value:`=`,label:`is`,symbol:`=`},{value:`>`,label:`after`,symbol:`>`},{value:`<`,label:`before`,symbol:`<`}],presets:[{value:`today`,label:`Today`},{value:`last7Days`,label:`Last 7 days`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`name`,label:`Name`,operators:[{value:`~`,label:`contains`},{value:`!~`,label:`does not contain`}]},{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`}]}]}],defaultConditions:[{kind:`search`,id:`c1`,text:`AAA`},{kind:`field`,id:`c2`,field:`status`,operator:`!=`,value:[`active`]},{kind:`field`,id:`c3`,field:`input`,subfield:`name`,operator:`~`,value:`WF456`},{kind:`field`,id:`c4`,field:`lastRun`,operator:`=`,value:`last7Days`}],defaultPins:[{field:`status`,value:`active`},{field:`status`,value:`pending`}]},render:e=>(0,J.jsxs)(q.Root,{...e,children:[(0,J.jsx)(q.Summary,{count:18}),(0,J.jsxs)(q.Toolbar,{children:[(0,J.jsx)(q.SavedFilters,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onValueChange:Y(),onClear:Y(),onRename:Y(),onDelete:Y()}),(0,J.jsx)(q.Search,{}),(0,J.jsx)(q.ViewSwitch,{}),(0,J.jsx)(q.View,{value:`filters`,children:(0,J.jsx)(q.Conditions,{})}),(0,J.jsx)(q.View,{value:`builder`,children:(0,J.jsx)(q.Builder,{suggestedFields:[`input`,`status`]})}),(0,J.jsx)(q.SaveFilter,{items:[{id:`1`,name:`MyFilter_1`,count:2},{id:`2`,name:`MyFilter_2`,count:1}],value:null,onUpdate:Y(),onSaveAs:Y()}),(0,J.jsx)(q.ClearAll,{})]}),(0,J.jsx)(q.View,{value:`advanced`,children:(0,J.jsx)(q.Query,{})}),(0,J.jsx)(q.Pinned,{children:(0,J.jsxs)(q.PinnedGroup,{label:`Status`,children:[(0,J.jsx)(q.PinnedToggle,{label:`Active`,count:10,active:!0}),(0,J.jsx)(q.PinnedToggle,{label:`Pending`,count:0,active:!1})]})})]})},Z={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`},{value:`!=`,label:`not equals`},{value:`IN`,label:`is one of`},{value:`NOT IN`,label:`is none of`}],options:[{value:`active`,label:`Active`},{value:`deprecated`,label:`Deprecated`},{value:`pending`,label:`Pending`}]},{type:`number`,id:`parents`,label:`Parents`,operators:[{value:`>`,label:`greater than`},{value:`<`,label:`less than`}]},{type:`compound`,id:`input`,label:`Input`,subfields:[{type:`text`,id:`vendor`,label:`Vendor`,operators:[{value:`=`,label:`equals`},{value:`~`,label:`contains`}]}]}],defaultConditions:[{kind:`field`,id:`c1`,field:`status`,operator:`IN`,value:[`active`,`pending`]},{kind:`field`,id:`c2`,field:`input`,subfield:`vendor`,operator:`~`,value:`cisco`},{kind:`search`,id:`c3`,text:`timeout`}]},render:e=>(0,J.jsx)(q.Root,{...e,children:(0,J.jsx)(q.View,{value:`advanced`,children:(0,J.jsx)(q.Query,{})})})},Q={args:{defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]},{type:`enum`,id:`trigger`,label:`Trigger`,operators:[{value:`=`,label:`equals`}],options:[{value:`scheduled`,label:`Scheduled`}]}],defaultQuery:`status = "active" OR trigger = "scheduled"`},render:e=>(0,J.jsx)(q.Root,{...e,children:(0,J.jsx)(q.View,{value:`advanced`,children:(0,J.jsx)(q.Query,{})})})},$={args:{defaultExpanded:!0,defaultView:`advanced`,fields:[{type:`enum`,id:`status`,label:`Status`,operators:[{value:`=`,label:`equals`}],options:[{value:`active`,label:`Active`}]}],locale:{label:`Refine results`,expand:`Show refinements`,collapse:`Hide refinements`}},render:e=>(0,J.jsxs)(q.Root,{...e,children:[(0,J.jsxs)(q.Toolbar,{children:[(0,J.jsx)(q.Search,{locale:{label:`Find`,placeholder:`Press ‘/’ to find`}}),(0,J.jsx)(q.ViewSwitch,{locale:{views:{filters:`Quick filters`,builder:`Guided query`,advanced:`Query editor`}}}),(0,J.jsx)(q.ClearAll,{locale:{label:`Reset`}})]}),(0,J.jsx)(q.View,{value:`advanced`,children:(0,J.jsx)(q.Query,{locale:{label:`Query editor`,placeholder:`status = "Active"`,help:`Syntax`}})})]})},tn=[`Default`,`AdvancedQuery`,`LockedViews`,`Localized`],X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:"The canonical layout. `fields` describes what can be filtered; `defaultConditions` seeds the\ndocument with a search, an enum, a compound-field and a date-preset condition — one of each shape.\nOnly the advanced query renders for now; the other parts are in progress.",...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:"The advanced view shows the conditions as query text. Edit it: a query joined by `AND` goes back\nto the conditions, and one that breaks the rules shows why under the field.",...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:"A query with `OR` or parentheses cannot be shown as conditions, so it becomes the only source:\nthe conditions are ignored and the filters and builder views lock until the query is cleared.",...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:"`Root` takes its own strings through `locale`; each part takes its own `locale` too.",...$.parameters?.docs?.description}}}})))()}nn();export{Z as AdvancedQuery,X as Default,$ as Localized,Q as LockedViews,tn as __namedExportsOrder,en as default};