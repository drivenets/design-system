import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-B_jYKNIh.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{i}from"./ds-icon.types-BHcwuqAv.js";import{t as a}from"./ds-icon-VSVjBPb0.js";import{t as o}from"./ds-typography-N9sdfKt2.js";import{t as s}from"./ds-typography-DFf1cqid.js";import{n as c,t as l}from"./ds-button-C3CFT11K.js";import{r as ee}from"./ds-text-input.types-DZZnAVeh.js";import{t as te}from"./ds-text-input-DKOr2pHs.js";import{r as u}from"./ds-checkbox.types-CGIJC0_G.js";import{t as ne}from"./ds-checkbox-DOJWioap.js";import{n as d,t as re}from"./ds-comment-card-DPIlvYRl.js";import{t as f}from"./ds-drawer-C43TPCWm.js";import{t as ie}from"./ds-drawer-Dr1GAeh8.js";import{n as ae,t as p}from"./ds-tag-filter-ClON9Np3.js";import{t as m}from"./ds-modal-C4yCkcBv.js";import{t as oe}from"./ds-modal-I0o5GXQA.js";import{n as se,t as h}from"./ds-tabs-CC08yfe4.js";import{t as g}from"./ds-date-input-B07VL0EZ.js";import{t as ce}from"./ds-date-input-Cb_sBWEd.js";var _,v,y,b,x,le,ue,S,C,de=t((()=>{_=`_headerActions_3bq4o_1`,v=`_divider_3bq4o_7`,y=`_searchInput_3bq4o_13`,b=`_body_3bq4o_17`,x=`_emptyState_3bq4o_35`,le=`_emptyIcon_3bq4o_48`,ue=`_filterTagsToolbar_3bq4o_52`,S=`_tagFilter_3bq4o_57`,C={headerActions:_,divider:v,searchInput:y,body:b,emptyState:x,emptyIcon:le,filterTagsToolbar:ue,tagFilter:S}})),fe=t((()=>{ae()})),w,pe,me,he,ge=t((()=>{w={authors:[],labels:[],statuses:[]},pe=(e,t,n)=>e.filter(e=>{if(t.statuses.length>0){let r=[];if(e.isResolved?r.push(`resolved`):r.push(`unresolved`),n(e)&&r.push(`action-required`),!t.statuses.some(e=>r.includes(e)))return!1}if(t.authors.length>0&&!t.authors.includes(e.author.id))return!1;if(t.dateFrom){let n=new Date(t.dateFrom);if(e.createdAt<n)return!1}if(t.dateTo){let n=new Date(t.dateTo);if(n.setHours(23,59,59,999),e.createdAt>n)return!1}return!(t.labels.length>0&&(!e.labels||!t.labels.some(t=>e.labels?.includes(t))))}),me=(e,t)=>{let n=[];if(e.statuses.forEach(e=>{let t=e===`action-required`?`Action required`:e.charAt(0).toUpperCase()+e.slice(1);n.push({id:`status-${e}`,label:`Status: ${t}`,filterId:`statuses`,value:e})}),e.authors.forEach(e=>{let r=t.get(e)||e;n.push({id:`author-${e}`,label:`Author: ${r}`,filterId:`authors`,value:e})}),e.dateFrom||e.dateTo){let t=e.dateFrom||`...`,r=e.dateTo||`...`;n.push({id:`date-range`,label:`Date: ${t} to ${r}`,filterId:`date`,value:`range`})}return e.labels.forEach(e=>{n.push({id:`label-${e}`,label:`Label: ${e}`,filterId:`labels`,value:e})}),n},he=(e,t)=>{let n={...e};switch(t.filterId){case`statuses`:n.statuses=n.statuses.filter(e=>e!==t.value);break;case`authors`:n.authors=n.authors.filter(e=>e!==t.value);break;case`labels`:n.labels=n.labels.filter(e=>e!==t.value);break;case`date`:n.dateFrom=void 0,n.dateTo=void 0;break}return n}})),T,E,D,_e,O,ve,ye,be,xe,Se,Ce,we,Te,Ee,k,De=t((()=>{T=`_modal_1ht28_1`,E=`_header_1ht28_5`,D=`_headerLeft_1ht28_12`,_e=`_body_1ht28_18`,O=`_tabs_1ht28_24`,ve=`_tabList_1ht28_30`,ye=`_tabContent_1ht28_40`,be=`_badge_1ht28_52`,xe=`_dot_1ht28_59`,Se=`_filterSection_1ht28_66`,Ce=`_dateField_1ht28_72`,we=`_dateLabel_1ht28_78`,Te=`_emptyMessage_1ht28_82`,Ee=`_footer_1ht28_86`,k={modal:T,header:E,headerLeft:D,body:_e,tabs:O,tabList:ve,tabContent:ye,badge:be,dot:xe,filterSection:Se,dateField:Ce,dateLabel:we,emptyMessage:Te,footer:Ee}})),Oe=t((()=>{se()})),ke,A,Ae,je=t((()=>{ke=e(n(),1),De(),oe(),Oe(),s(),ne(),l(),a(),ce(),A=r(),Ae=({open:e,onOpenChange:t,filters:n,onFiltersChange:r,onApply:a,onClearAll:s,availableAuthors:l,availableLabels:ee})=>{let[te,ne]=(0,ke.useState)(`statuses`),d=(e,t)=>{r({...n,statuses:t?[...n.statuses,e]:n.statuses.filter(t=>t!==e)})},re=(e,t)=>{r({...n,authors:t?[...n.authors,e]:n.authors.filter(t=>t!==e)})},f=(e,t)=>{r({...n,labels:t?[...n.labels,e]:n.labels.filter(t=>t!==e)})},ie=e=>{r({...n,dateFrom:e})},ae=e=>{r({...n,dateTo:e})},p={statuses:n.statuses.length,authors:n.authors.length,dateRange:(n.dateFrom?1:0)+(n.dateTo?1:0),labels:n.labels.length};return(0,A.jsxs)(m,{open:e,onOpenChange:t,className:k.modal,children:[(0,A.jsxs)(m.Header,{className:k.header,children:[(0,A.jsxs)(`div`,{className:k.headerLeft,children:[(0,A.jsx)(i,{icon:`filter_list`,size:`small`}),(0,A.jsx)(m.Title,{children:`Filters`})]}),(0,A.jsx)(m.CloseTrigger,{})]}),(0,A.jsx)(m.Body,{className:k.body,children:(0,A.jsxs)(h.Root,{value:te,onValueChange:e=>{e&&ne(e)},orientation:`vertical`,className:k.tabs,children:[(0,A.jsxs)(h.List,{className:k.tabList,children:[(0,A.jsxs)(h.Tab,{value:`statuses`,children:[(0,A.jsx)(o,{variant:`body-sm-md`,children:`Status`}),p.statuses>0&&(0,A.jsxs)(`div`,{className:k.badge,children:[(0,A.jsx)(`span`,{className:k.dot}),(0,A.jsx)(o,{variant:`body-sm-reg`,children:p.statuses})]})]}),(0,A.jsxs)(h.Tab,{value:`authors`,children:[(0,A.jsx)(o,{variant:`body-sm-md`,children:`Author`}),p.authors>0&&(0,A.jsxs)(`div`,{className:k.badge,children:[(0,A.jsx)(`span`,{className:k.dot}),(0,A.jsx)(o,{variant:`body-sm-reg`,children:p.authors})]})]}),(0,A.jsxs)(h.Tab,{value:`dateRange`,children:[(0,A.jsx)(o,{variant:`body-sm-md`,children:`Date range`}),p.dateRange>0&&(0,A.jsxs)(`div`,{className:k.badge,children:[(0,A.jsx)(`span`,{className:k.dot}),(0,A.jsx)(o,{variant:`body-sm-reg`,children:p.dateRange})]})]}),(0,A.jsxs)(h.Tab,{value:`labels`,children:[(0,A.jsx)(o,{variant:`body-sm-md`,children:`Labels`}),p.labels>0&&(0,A.jsxs)(`div`,{className:k.badge,children:[(0,A.jsx)(`span`,{className:k.dot}),(0,A.jsx)(o,{variant:`body-sm-reg`,children:p.labels})]})]})]}),(0,A.jsx)(h.Content,{value:`statuses`,className:k.tabContent,children:(0,A.jsxs)(`div`,{className:k.filterSection,children:[(0,A.jsx)(u,{label:`Unresolved`,checked:n.statuses.includes(`unresolved`),onCheckedChange:e=>d(`unresolved`,e===!0)}),(0,A.jsx)(u,{label:`Resolved`,checked:n.statuses.includes(`resolved`),onCheckedChange:e=>d(`resolved`,e===!0)}),(0,A.jsx)(u,{label:`Action required`,checked:n.statuses.includes(`action-required`),onCheckedChange:e=>d(`action-required`,e===!0)})]})}),(0,A.jsx)(h.Content,{value:`authors`,className:k.tabContent,children:(0,A.jsx)(`div`,{className:k.filterSection,children:l.length===0?(0,A.jsx)(o,{variant:`body-sm-reg`,className:k.emptyMessage,children:`No authors available`}):l.map(e=>(0,A.jsx)(u,{label:e.name,checked:n.authors.includes(e.id),onCheckedChange:t=>re(e.id,t===!0)},e.id))})}),(0,A.jsx)(h.Content,{value:`dateRange`,className:k.tabContent,children:(0,A.jsxs)(`div`,{className:k.filterSection,children:[(0,A.jsxs)(`div`,{className:k.dateField,children:[(0,A.jsx)(o,{variant:`body-sm-md`,className:k.dateLabel,children:`From`}),(0,A.jsx)(g,{value:n.dateFrom,onValueChange:ie,max:n.dateTo,placeholder:`Select start date`,disablePortal:!0})]}),(0,A.jsxs)(`div`,{className:k.dateField,children:[(0,A.jsx)(o,{variant:`body-sm-md`,className:k.dateLabel,children:`To`}),(0,A.jsx)(g,{value:n.dateTo,onValueChange:ae,min:n.dateFrom,placeholder:`Select end date`,disablePortal:!0})]})]})}),(0,A.jsx)(h.Content,{value:`labels`,className:k.tabContent,children:(0,A.jsx)(`div`,{className:k.filterSection,children:ee.length===0?(0,A.jsx)(o,{variant:`body-sm-reg`,className:k.emptyMessage,children:`No labels available`}):ee.map(e=>(0,A.jsx)(u,{label:e,checked:n.labels.includes(e),onCheckedChange:t=>f(e,t===!0)},e))})})]})}),(0,A.jsxs)(m.Footer,{className:k.footer,children:[(0,A.jsxs)(c,{design:`v1.2`,variant:`filled`,buttonType:`secondary`,onClick:s,children:[(0,A.jsx)(i,{icon:`close`,size:`tiny`}),`Clear all`]}),(0,A.jsx)(m.Actions,{children:(0,A.jsx)(c,{design:`v1.2`,variant:`filled`,buttonType:`primary`,onClick:a,children:`Apply`})})]})]})},Ae.__docgenInfo={description:``,methods:[],displayName:`CommentsFilterModal`,props:{open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},filters:{required:!0,tsType:{name:`CommentsFilterState`},description:``},onFiltersChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(filters: CommentsFilterState) => void`,signature:{arguments:[{type:{name:`CommentsFilterState`},name:`filters`}],return:{name:`void`}}},description:``},onApply:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onClearAll:{required:!0,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},availableAuthors:{required:!0,tsType:{name:`Array`,elements:[{name:`signature`,type:`object`,raw:`{ id: string; name: string }`,signature:{properties:[{key:`id`,value:{name:`string`,required:!0}},{key:`name`,value:{name:`string`,required:!0}}]}}],raw:`Array<{ id: string; name: string }>`},description:``},availableLabels:{required:!0,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:``}}}})),Me=t((()=>{je()})),j,M,N,Ne=t((()=>{j=e(n(),1),de(),ie(),re(),l(),a(),te(),fe(),ge(),Me(),M=r(),N=({open:e,onOpenChange:t,comments:n,showResolved:r=!1,onShowResolvedChange:a,searchQuery:o=``,onSearchChange:s,onCommentClick:l,onResolveComment:te,onToggleActionRequired:u,onForward:ne,onMarkUnread:re,onCopyLink:ie,onDelete:ae,noCommentsMessage:m,className:oe,style:se})=>{let[h,g]=(0,j.useState)(!1),[ce,_]=(0,j.useState)(w),[v,y]=(0,j.useState)(w),b=new Map,x=new Set;n.forEach(e=>{b.set(e.author.id,e.author.name),e.labels?.forEach(e=>x.add(e))});let le=Array.from(b.entries()).map(([e,t])=>({id:e,name:t})),ue=Array.from(x),S=n;if(r||(S=S.filter(e=>!e.isResolved)),S=pe(S,v,e=>e.isActionRequired||!1),o){let e=o.toLowerCase();S=S.filter(t=>{let n=t.messages.some(t=>t.content.toLowerCase().includes(e)),r=t.author.name.toLowerCase().includes(e),i=`#${String(t.numericId)}`.includes(e);return n||r||i})}let de=n.filter(e=>!e.isResolved).length,fe=n.filter(e=>e.isResolved).length,ge=fe>0,T=me(v,b),E=()=>{a?.(!r)},D=()=>{_(v),g(!0)},_e=()=>{y(ce),g(!1)},O=()=>{_(w),y(w),g(!1)},ve=e=>{let t=T.find(t=>t.id===e.id);t&&y(he(v,t))};return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsxs)(f,{open:e,onOpenChange:t,position:`start`,columns:4,className:oe,style:se,children:[(0,M.jsxs)(f.Header,{children:[(0,M.jsxs)(f.Title,{children:[de,` Comments`]}),(0,M.jsxs)(`div`,{className:C.headerActions,children:[(0,M.jsx)(c,{design:`v1.2`,buttonType:`tertiary`,size:`small`,"aria-label":`More actions`,children:(0,M.jsx)(i,{icon:`more_vert`,size:`tiny`})}),(0,M.jsx)(`div`,{className:C.divider}),(0,M.jsx)(f.CloseTrigger,{})]})]}),(0,M.jsxs)(f.Toolbar,{children:[(0,M.jsx)(ee,{placeholder:`Search`,value:o,onValueChange:s,className:C.searchInput,slots:{startAdornment:(0,M.jsx)(i,{icon:`search`,size:`tiny`})}}),(0,M.jsx)(c,{design:`v1.2`,buttonType:`tertiary`,size:`small`,"aria-label":`Filter`,onClick:D,children:(0,M.jsx)(i,{icon:`filter_list`,size:`tiny`})})]}),ge&&(0,M.jsx)(f.Toolbar,{children:(0,M.jsxs)(c,{design:`v1.2`,buttonType:`tertiary`,size:`small`,onClick:E,children:[r?`Hide`:`Show`,` resolved (`,fe,`)`]})}),T.length>0&&(0,M.jsx)(f.Toolbar,{className:C.filterTagsToolbar,children:(0,M.jsx)(p,{items:T,onClearAll:O,onItemDelete:ve,className:C.tagFilter})}),(0,M.jsx)(f.Body,{className:C.body,children:S.length===0?(0,M.jsx)(`div`,{className:C.emptyState,children:m||(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(i,{icon:`chat_bubble_outline`,size:`large`,className:C.emptyIcon}),(0,M.jsx)(`span`,{children:`No comments yet`})]})}):S.map(e=>(0,M.jsx)(d,{comment:e,overflow:`displayed`,onClick:()=>l?.(e),onResolve:()=>te?.(e.id),onToggleActionRequired:()=>u?.(e.id),onForward:()=>ne?.(e.id),onMarkUnread:()=>re?.(e.id),onCopyLink:()=>ie?.(e.id),onDelete:()=>ae?.(e.id)},e.id))})]}),(0,M.jsx)(Ae,{open:h,onOpenChange:g,filters:ce,onFiltersChange:_,onApply:_e,onClearAll:O,availableAuthors:le,availableLabels:ue})]})},N.__docgenInfo={description:``,methods:[],displayName:`DsCommentsDrawer`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLElement`}],raw:`Ref<HTMLElement>`},description:``},open:{required:!0,tsType:{name:`boolean`},description:``},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:``},comments:{required:!0,tsType:{name:`Array`,elements:[{name:`CommentData`}],raw:`CommentData[]`},description:``},showResolved:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},onShowResolvedChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(show: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`show`}],return:{name:`void`}}},description:``},searchQuery:{required:!1,tsType:{name:`string`},description:``,defaultValue:{value:`''`,computed:!1}},onSearchChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(query: string) => void`,signature:{arguments:[{type:{name:`string`},name:`query`}],return:{name:`void`}}},description:``},onCommentClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(comment: CommentData) => void`,signature:{arguments:[{type:{name:`CommentData`},name:`comment`}],return:{name:`void`}}},description:``},onResolveComment:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},onToggleActionRequired:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},onForward:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},onMarkUnread:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},onCopyLink:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(commentId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`commentId`}],return:{name:`void`}}},description:``},noCommentsMessage:{required:!1,tsType:{name:`ReactNode`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),Pe=t((()=>{})),Fe=t((()=>{})),Ie=t((()=>{Ne(),Pe(),Fe()})),Le,Re,ze,Be,Ve,P,He=t((()=>{Le=`_storyWrapper_1iwkl_1`,Re=`_filterDemo_1iwkl_9`,ze=`_filterDemoTitle_1iwkl_14`,Be=`_filterDemoText_1iwkl_18`,Ve=`_filterDemoList_1iwkl_23`,P={storyWrapper:Le,filterDemo:Re,filterDemoTitle:ze,filterDemoText:Be,filterDemoList:Ve}})),F,I,L,R,z,B,V,Ue,H,U,W,G,K,q,J,Y,X,Z,Q,$,We;t((()=>{F=e(n(),1),Ie(),l(),He(),I=r(),{expect:L,fn:R,userEvent:z,within:B}=__STORYBOOK_MODULE_TEST__,V=()=>[{id:`comment-1`,numericId:63,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,labels:[`Bug`,`High Priority`],messages:[{id:`msg-1`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase.`,createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:`msg-2`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Thanks for the feedback!`,createdAt:new Date(Date.now()-720*60*1e3)},{id:`msg-3`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`I agree with this approach.`,createdAt:new Date(Date.now()-360*60*1e3)}]},{id:`comment-2`,numericId:64,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-2880*60*1e3),isResolved:!1,labels:[`Feature Request`],messages:[{id:`msg-4`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Could we add a dark mode feature to the application? This would improve usability for users working in low-light environments.`,createdAt:new Date(Date.now()-2880*60*1e3),isInitialMessage:!0}]},{id:`comment-3`,numericId:65,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},createdAt:new Date(Date.now()-4320*60*1e3),isResolved:!1,labels:[`Documentation`,`Enhancement`],messages:[{id:`msg-5`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`The API documentation needs to be updated to reflect the recent changes we made to the authentication system. This will help developers integrate with our service more easily.`,createdAt:new Date(Date.now()-4320*60*1e3),isInitialMessage:!0},{id:`msg-6`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`Good point!`,createdAt:new Date(Date.now()-3600*60*1e3)},{id:`msg-7`,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},content:`I will look into this.`,createdAt:new Date(Date.now()-2880*60*1e3)},{id:`msg-8`,author:{id:`user-3`,name:`Jane S.`,avatarSrc:`https://i.pravatar.cc/40?img=3`},content:`Thanks everyone!`,createdAt:new Date(Date.now()-2160*60*1e3)}]},{id:`comment-4`,numericId:66,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},createdAt:new Date(Date.now()-5760*60*1e3),isResolved:!1,labels:[`Question`],messages:[{id:`msg-9`,author:{id:`user-4`,name:`Bob M.`,avatarSrc:`https://i.pravatar.cc/40?img=4`},content:`Should we consider migrating to the new version of the framework? It offers better performance and security features that could benefit our application.`,createdAt:new Date(Date.now()-5760*60*1e3),isInitialMessage:!0}]},{id:`comment-5`,numericId:67,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},createdAt:new Date(Date.now()-7200*60*1e3),isResolved:!0,labels:[`Bug`],messages:[{id:`msg-10`,author:{id:`user-1`,name:`Karen J.`,avatarSrc:`https://i.pravatar.cc/40?img=1`},content:`This has been resolved.`,createdAt:new Date(Date.now()-7200*60*1e3),isInitialMessage:!0}]},{id:`comment-6`,numericId:68,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},createdAt:new Date(Date.now()-8640*60*1e3),isResolved:!0,labels:[`Documentation`],messages:[{id:`msg-11`,author:{id:`user-2`,name:`John D.`,avatarSrc:`https://i.pravatar.cc/40?img=2`},content:`Documentation updated.`,createdAt:new Date(Date.now()-8640*60*1e3),isInitialMessage:!0}]}],Ue={title:`Design System/Comments/CommentsDrawer`,component:N,parameters:{layout:`fullscreen`,docs:{description:{component:`
Side panel for viewing and managing all comments.

**Features:**
- Displays list of comment cards
- Search functionality
- Filter button (integration point)
- Show/hide resolved comments
- Comment count in header
- Click to open comment bubble
- Hover syncs with indicators on screen
        `}}},argTypes:{open:{control:`boolean`,description:`Whether drawer is open`},showResolved:{control:`boolean`,description:`Whether to show resolved comments`},searchQuery:{control:`text`,description:`Search query`}},args:{onOpenChange:R(),onShowResolvedChange:R(),onSearchChange:R(),onCommentClick:R(),onResolveComment:R(),onToggleActionRequired:R(),onForward:R(),onMarkUnread:R(),onCopyLink:R(),onDelete:R()}},H={args:{open:!0,comments:V()},play:async({canvasElement:e})=>{await L(B(e).getByText(/4 Comments/i)).toBeInTheDocument()}},U={args:{open:!0,comments:V(),searchQuery:`Karen`},play:async({canvasElement:e})=>{await L(B(e).getByPlaceholderText(/search/i)).toBeInTheDocument()}},W={args:{open:!0,comments:[]},play:async({canvasElement:e})=>{await L(B(e).getByText(/no comments yet/i)).toBeInTheDocument()}},G={args:{open:!0,comments:V(),showResolved:!1},play:async({canvasElement:e,args:t})=>{let n=B(e).getByRole(`button`,{name:/show resolved/i});await L(n).toBeInTheDocument(),await L(n).toHaveTextContent(/\(2\)/),await z.click(n),await L(t.onShowResolvedChange).toHaveBeenCalledWith(!0)}},K={args:{open:!0,comments:V(),showResolved:!0},play:async({canvasElement:e,args:t})=>{let n=B(e).getByRole(`button`,{name:/hide resolved/i});await L(n).toBeInTheDocument(),await z.click(n),await L(t.onShowResolvedChange).toHaveBeenCalledWith(!1)}},q={args:{open:!0,comments:V()},play:async({canvasElement:e,args:t})=>{let n=B(e).getAllByRole(`button`,{name:/comment #/i}).at(0);await L(n).toBeDefined(),await z.click(n),await L(t.onCommentClick).toHaveBeenCalledOnce()}},J={args:{open:!0,comments:V(),searchQuery:`dark mode`},play:async({canvasElement:e})=>{let t=B(e);await L(t.getAllByRole(`button`,{name:/comment #/i})).toHaveLength(1),await L(t.getByText(/dark mode/i)).toBeInTheDocument()}},Y={args:{open:!0,comments:V(),searchQuery:`#65`},play:async({canvasElement:e})=>{await L(B(e).getAllByRole(`button`,{name:/comment #/i})).toHaveLength(1)}},X={args:{open:!0,comments:[],noCommentsMessage:`Nothing to see here!`},play:async({canvasElement:e})=>{await L(B(e).getByText(`Nothing to see here!`)).toBeInTheDocument()}},Z={args:{open:!0,comments:V().filter(e=>!e.isResolved)},play:async({canvasElement:e})=>{await L(B(e).queryByRole(`button`,{name:/show resolved/i})).not.toBeInTheDocument()}},Q={render:function(){let[e,t]=(0,F.useState)(!1),[n,r]=(0,F.useState)(``),[i,a]=(0,F.useState)(!1),[o,s]=(0,F.useState)(V());return(0,I.jsxs)(`div`,{className:P.storyWrapper,children:[(0,I.jsx)(c,{onClick:()=>t(!0),children:`Open Comments Drawer`}),(0,I.jsx)(N,{open:e,onOpenChange:t,comments:o,searchQuery:n,onSearchChange:r,showResolved:i,onShowResolvedChange:a,onCommentClick:e=>console.log(`Comment clicked:`,e.id),onResolveComment:e=>{s(t=>t.map(t=>t.id===e?{...t,isResolved:!0}:t))},onToggleActionRequired:e=>console.log(`Toggle action required:`,e),onForward:e=>console.log(`Forward:`,e),onMarkUnread:e=>console.log(`Mark unread:`,e),onCopyLink:e=>console.log(`Copy link:`,e),onDelete:e=>console.log(`Delete:`,e)})]})}},$={name:`With Filters (Interactive)`,parameters:{docs:{description:{story:`
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
                `}}},render:function(){let[e,t]=(0,F.useState)(!0),[n,r]=(0,F.useState)(``),[i,a]=(0,F.useState)(!1),[o]=(0,F.useState)(V());return(0,I.jsxs)(`div`,{className:P.storyWrapper,children:[(0,I.jsxs)(`div`,{className:P.filterDemo,children:[(0,I.jsx)(`h3`,{className:P.filterDemoTitle,children:`Filter Demonstration`}),(0,I.jsx)(`p`,{className:P.filterDemoText,children:`The drawer is open by default. Click the filter icon to explore filtering options.`}),(0,I.jsx)(`p`,{className:P.filterDemoText,children:(0,I.jsx)(`strong`,{children:`Try filtering by:`})}),(0,I.jsxs)(`ul`,{className:P.filterDemoList,children:[(0,I.jsx)(`li`,{children:`Author: "Karen J." to see 2 comments`}),(0,I.jsx)(`li`,{children:`Label: "Bug" to see 2 comments`}),(0,I.jsx)(`li`,{children:`Status: "Action required" to see 1 comment`}),(0,I.jsx)(`li`,{children:`Multiple filters at once (e.g., Author + Label)`})]})]}),(0,I.jsx)(N,{open:e,onOpenChange:t,comments:o,searchQuery:n,onSearchChange:r,showResolved:i,onShowResolvedChange:a,onCommentClick:e=>console.log(`Comment clicked:`,e.id),onResolveComment:e=>console.log(`Resolve:`,e),onToggleActionRequired:e=>console.log(`Toggle action required:`,e),onForward:e=>console.log(`Forward:`,e),onMarkUnread:e=>console.log(`Mark unread:`,e),onCopyLink:e=>console.log(`Copy link:`,e),onDelete:e=>console.log(`Delete:`,e)})]})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},We=[`Default`,`WithSearch`,`Empty`,`ShowResolvedToggle`,`HideResolvedToggle`,`CommentCardClick`,`SearchFiltering`,`SearchById`,`CustomEmptyMessage`,`NoResolvedComments`,`Interactive`,`WithFilters`]}))();export{q as CommentCardClick,X as CustomEmptyMessage,H as Default,W as Empty,K as HideResolvedToggle,Q as Interactive,Z as NoResolvedComments,Y as SearchById,J as SearchFiltering,G as ShowResolvedToggle,$ as WithFilters,U as WithSearch,We as __namedExportsOrder,Ue as default};