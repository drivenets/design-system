import{j as e}from"./jsx-runtime-u17CrQMm.js";import{r as p}from"./iframe-DBZSe9Ua.js";import{D as k}from"./ds-drawer-DbGEXf41.js";import{D as De}from"./ds-comment-card-AkuJ8NQP.js";import{D as A}from"./ds-button-BlsPsfO4.js";import{D as F}from"./ds-icon-GWJIdMij.js";import{D as Te}from"./ds-text-input-BYVgK4_j.js";import{D as Se}from"./ds-tag-filter-sfWaE2VH.js";import{D as R}from"./ds-modal-B5BgsF3S.js";import{D as b}from"./ds-tabs-DNeqqdaD.js";import{D as u}from"./ds-typography-BfWjwnoV.js";import{D as M}from"./ds-checkbox-Bg0hxMb1.js";import{D as le}from"./ds-date-input-DfE1CqUW.js";import"./preload-helper-PPVm8Dsz.js";import"./index-4ULLhwzm.js";import"./portal-BVHJgc6R.js";import"./create-split-props-u5h9OPvL.js";import"./index-B_N646qb.js";import"./index-CmSjiGS4.js";import"./use-locale-context-DcbFQMjj.js";import"./create-anatomy-BHJMHo9S.js";import"./dialog-title-boTcOjR8.js";import"./render-strategy-PEJbRLDC.js";import"./use-presence-CgEpmGRX.js";import"./set-Cm5F6no6.js";import"./raf-CC9hSMXO.js";import"./computed-style-8P_myl47.js";import"./event-CBXSxTbR.js";import"./dismissable-layer-C6OTJ3pB.js";import"./ds-avatar-group-2KPhF94u.js";import"./ds-avatar-CrmTOhQP.js";import"./ds-tooltip-KoJfAEDv.js";import"./index-C8E51ZSe.js";import"./index-GvWsARhA.js";import"./index-BVrcr7NP.js";import"./index-DS8gfSPf.js";import"./index-WVv7Gy32.js";import"./floating-ui.dom-D3zTlarL.js";import"./index-DMBvpMRN.js";import"./mutation-observer-Cu1ou0At.js";import"./ds-tag-Cc17IrF_.js";import"./ds-dropdown-menu-cgYnRdWm.js";import"./Combination-BOq8z_Cr.js";import"./index-DvEfVbO5.js";import"./get-styles-CJMTPcpD.js";import"./typeahead-BC5lkw4Z.js";import"./query-CjgVAlRR.js";import"./initial-focus-BQ7aDuf7.js";import"./equal-DfFTejAs.js";import"./navigate-yZ8WzvPj.js";import"./format-relative-time-B216dNqo.js";import"./ds-button-legacy-D58HAVEm.js";import"./ds-button-new-CvBbVAj1.js";import"./tabs-root-DODjB-dk.js";import"./number-Bu-e0fmS.js";import"./resize-observer-DJHqhCyH.js";import"./index-Dim58NC3.js";import"./memo-BRlFl984.js";import"./form-DWg3RG8Y.js";const xe="_headerActions_3bq4o_1",ke="_divider_3bq4o_7",je="_searchInput_3bq4o_13",Ie="_body_3bq4o_17",Re="_emptyState_3bq4o_35",_e="_emptyIcon_3bq4o_48",Fe="_filterTagsToolbar_3bq4o_52",Ae="_tagFilter_3bq4o_57",j={headerActions:xe,divider:ke,searchInput:je,body:Ie,emptyState:Re,emptyIcon:_e,filterTagsToolbar:Fe,tagFilter:Ae},E={authors:[],labels:[],statuses:[]},qe=(s,a,t)=>s.filter(n=>{if(a.statuses.length>0){const c=[];if(n.isResolved?c.push("resolved"):c.push("unresolved"),t(n)&&c.push("action-required"),!a.statuses.some(v=>c.includes(v)))return!1}if(a.authors.length>0&&!a.authors.includes(n.author.id))return!1;if(a.dateFrom){const c=new Date(a.dateFrom);if(n.createdAt<c)return!1}if(a.dateTo){const c=new Date(a.dateTo);if(c.setHours(23,59,59,999),n.createdAt>c)return!1}return!(a.labels.length>0&&(!n.labels||!a.labels.some(c=>n.labels?.includes(c))))}),Be=(s,a)=>{const t=[];if(s.statuses.forEach(n=>{const c=n==="action-required"?"Action required":n.charAt(0).toUpperCase()+n.slice(1);t.push({id:`status-${n}`,label:`Status: ${c}`,filterId:"statuses",value:n})}),s.authors.forEach(n=>{const c=a.get(n)||n;t.push({id:`author-${n}`,label:`Author: ${c}`,filterId:"authors",value:n})}),s.dateFrom||s.dateTo){const n=s.dateFrom||"...",c=s.dateTo||"...";t.push({id:"date-range",label:`Date: ${n} to ${c}`,filterId:"date",value:"range"})}return s.labels.forEach(n=>{t.push({id:`label-${n}`,label:`Label: ${n}`,filterId:"labels",value:n})}),t},Ne=(s,a)=>{const t={...s};switch(a.filterId){case"statuses":t.statuses=t.statuses.filter(n=>n!==a.value);break;case"authors":t.authors=t.authors.filter(n=>n!==a.value);break;case"labels":t.labels=t.labels.filter(n=>n!==a.value);break;case"date":t.dateFrom=void 0,t.dateTo=void 0;break}return t},Me="_modal_1ht28_1",Le="_header_1ht28_5",Ee="_headerLeft_1ht28_12",Oe="_body_1ht28_18",He="_tabs_1ht28_24",Qe="_tabList_1ht28_30",Je="_tabContent_1ht28_40",We="_badge_1ht28_52",Ke="_dot_1ht28_59",Ue="_filterSection_1ht28_66",$e="_dateField_1ht28_72",Pe="_dateLabel_1ht28_78",ze="_emptyMessage_1ht28_82",Ve="_footer_1ht28_86",i={modal:Me,header:Le,headerLeft:Ee,body:Oe,tabs:He,tabList:Qe,tabContent:Je,badge:We,dot:Ke,filterSection:Ue,dateField:$e,dateLabel:Pe,emptyMessage:ze,footer:Ve},me=({open:s,onOpenChange:a,filters:t,onFiltersChange:n,onApply:c,onClearAll:g,availableAuthors:v,availableLabels:S})=>{const[l,q]=p.useState("statuses"),m=(o,h)=>{n({...t,statuses:h?[...t.statuses,o]:t.statuses.filter(w=>w!==o)})},B=(o,h)=>{n({...t,authors:h?[...t.authors,o]:t.authors.filter(w=>w!==o)})},I=(o,h)=>{n({...t,labels:h?[...t.labels,o]:t.labels.filter(w=>w!==o)})},X=o=>{n({...t,dateFrom:o})},Z=o=>{n({...t,dateTo:o})},y={statuses:t.statuses.length,authors:t.authors.length,dateRange:(t.dateFrom?1:0)+(t.dateTo?1:0),labels:t.labels.length};return e.jsxs(R,{open:s,onOpenChange:a,className:i.modal,children:[e.jsxs(R.Header,{className:i.header,children:[e.jsxs("div",{className:i.headerLeft,children:[e.jsx(F,{icon:"filter_list",size:"small"}),e.jsx(R.Title,{children:"Filters"})]}),e.jsx(R.CloseTrigger,{})]}),e.jsx(R.Body,{className:i.body,children:e.jsxs(b.Root,{value:l,onValueChange:o=>{o&&q(o)},orientation:"vertical",className:i.tabs,children:[e.jsxs(b.List,{className:i.tabList,children:[e.jsxs(b.Tab,{value:"statuses",children:[e.jsx(u,{variant:"body-sm-md",children:"Status"}),y.statuses>0&&e.jsxs("div",{className:i.badge,children:[e.jsx("span",{className:i.dot}),e.jsx(u,{variant:"body-sm-reg",children:y.statuses})]})]}),e.jsxs(b.Tab,{value:"authors",children:[e.jsx(u,{variant:"body-sm-md",children:"Author"}),y.authors>0&&e.jsxs("div",{className:i.badge,children:[e.jsx("span",{className:i.dot}),e.jsx(u,{variant:"body-sm-reg",children:y.authors})]})]}),e.jsxs(b.Tab,{value:"dateRange",children:[e.jsx(u,{variant:"body-sm-md",children:"Date range"}),y.dateRange>0&&e.jsxs("div",{className:i.badge,children:[e.jsx("span",{className:i.dot}),e.jsx(u,{variant:"body-sm-reg",children:y.dateRange})]})]}),e.jsxs(b.Tab,{value:"labels",children:[e.jsx(u,{variant:"body-sm-md",children:"Labels"}),y.labels>0&&e.jsxs("div",{className:i.badge,children:[e.jsx("span",{className:i.dot}),e.jsx(u,{variant:"body-sm-reg",children:y.labels})]})]})]}),e.jsx(b.Content,{value:"statuses",className:i.tabContent,children:e.jsxs("div",{className:i.filterSection,children:[e.jsx(M,{label:"Unresolved",checked:t.statuses.includes("unresolved"),onCheckedChange:o=>m("unresolved",o===!0)}),e.jsx(M,{label:"Resolved",checked:t.statuses.includes("resolved"),onCheckedChange:o=>m("resolved",o===!0)}),e.jsx(M,{label:"Action required",checked:t.statuses.includes("action-required"),onCheckedChange:o=>m("action-required",o===!0)})]})}),e.jsx(b.Content,{value:"authors",className:i.tabContent,children:e.jsx("div",{className:i.filterSection,children:v.length===0?e.jsx(u,{variant:"body-sm-reg",className:i.emptyMessage,children:"No authors available"}):v.map(o=>e.jsx(M,{label:o.name,checked:t.authors.includes(o.id),onCheckedChange:h=>B(o.id,h===!0)},o.id))})}),e.jsx(b.Content,{value:"dateRange",className:i.tabContent,children:e.jsxs("div",{className:i.filterSection,children:[e.jsxs("div",{className:i.dateField,children:[e.jsx(u,{variant:"body-sm-md",className:i.dateLabel,children:"From"}),e.jsx(le,{value:t.dateFrom,onValueChange:X,max:t.dateTo,placeholder:"Select start date",disablePortal:!0})]}),e.jsxs("div",{className:i.dateField,children:[e.jsx(u,{variant:"body-sm-md",className:i.dateLabel,children:"To"}),e.jsx(le,{value:t.dateTo,onValueChange:Z,min:t.dateFrom,placeholder:"Select end date",disablePortal:!0})]})]})}),e.jsx(b.Content,{value:"labels",className:i.tabContent,children:e.jsx("div",{className:i.filterSection,children:S.length===0?e.jsx(u,{variant:"body-sm-reg",className:i.emptyMessage,children:"No labels available"}):S.map(o=>e.jsx(M,{label:o,checked:t.labels.includes(o),onCheckedChange:h=>I(o,h===!0)},o))})})]})}),e.jsxs(R.Footer,{className:i.footer,children:[e.jsxs(A,{design:"v1.2",variant:"filled",buttonType:"secondary",onClick:g,children:[e.jsx(F,{icon:"close",size:"tiny"}),"Clear all"]}),e.jsx(R.Actions,{children:e.jsx(A,{design:"v1.2",variant:"filled",buttonType:"primary",onClick:c,children:"Apply"})})]})]})};me.__docgenInfo={description:"",methods:[],displayName:"CommentsFilterModal",props:{open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},filters:{required:!0,tsType:{name:"CommentsFilterState"},description:""},onFiltersChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(filters: CommentsFilterState) => void",signature:{arguments:[{type:{name:"CommentsFilterState"},name:"filters"}],return:{name:"void"}}},description:""},onApply:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onClearAll:{required:!0,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},availableAuthors:{required:!0,tsType:{name:"Array",elements:[{name:"signature",type:"object",raw:"{ id: string; name: string }",signature:{properties:[{key:"id",value:{name:"string",required:!0}},{key:"name",value:{name:"string",required:!0}}]}}],raw:"Array<{ id: string; name: string }>"},description:""},availableLabels:{required:!0,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""}}};const Y=({open:s,onOpenChange:a,comments:t,showResolved:n=!1,onShowResolvedChange:c,searchQuery:g="",onSearchChange:v,onCommentClick:S,onResolveComment:l,onToggleActionRequired:q,onForward:m,onMarkUnread:B,onCopyLink:I,onDelete:X,noCommentsMessage:Z,className:y,style:o})=>{const[h,w]=p.useState(!1),[oe,ee]=p.useState(E),[L,te]=p.useState(E),ne=new Map,re=new Set;t.forEach(r=>{ne.set(r.author.id,r.author.name),r.labels?.forEach(f=>re.add(f))});const de=Array.from(ne.entries()).map(([r,f])=>({id:r,name:f})),ue=Array.from(re);let x=t;if(n||(x=x.filter(r=>!r.isResolved)),x=qe(x,L,r=>r.isActionRequired||!1),g){const r=g.toLowerCase();x=x.filter(f=>{const N=f.messages.some(Ce=>Ce.content.toLowerCase().includes(r)),fe=f.author.name.toLowerCase().includes(r),be=`#${String(f.numericId)}`.includes(r);return N||fe||be})}const pe=t.filter(r=>!r.isResolved).length,ie=t.filter(r=>r.isResolved).length,he=ie>0,ae=Be(L,ne),ge=()=>{c?.(!n)},ve=()=>{ee(L),w(!0)},ye=()=>{te(oe),w(!1)},ce=()=>{ee(E),te(E),w(!1)},we=r=>{const f=ae.find(N=>N.id===r.id);if(f){const N=Ne(L,f);te(N)}};return e.jsxs(e.Fragment,{children:[e.jsxs(k,{open:s,onOpenChange:a,position:"start",columns:4,className:y,style:o,children:[e.jsxs(k.Header,{children:[e.jsxs(k.Title,{children:[pe," Comments"]}),e.jsxs("div",{className:j.headerActions,children:[e.jsx(A,{design:"v1.2",buttonType:"tertiary",size:"small","aria-label":"More actions",children:e.jsx(F,{icon:"more_vert",size:"tiny"})}),e.jsx("div",{className:j.divider}),e.jsx(k.CloseTrigger,{})]})]}),e.jsxs(k.Toolbar,{children:[e.jsx(Te,{placeholder:"Search",value:g,onValueChange:v,className:j.searchInput,slots:{startAdornment:e.jsx(F,{icon:"search",size:"tiny"})}}),e.jsx(A,{design:"v1.2",buttonType:"tertiary",size:"small","aria-label":"Filter",onClick:ve,children:e.jsx(F,{icon:"filter_list",size:"tiny"})})]}),he&&e.jsx(k.Toolbar,{children:e.jsxs(A,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:ge,children:[n?"Hide":"Show"," resolved (",ie,")"]})}),ae.length>0&&e.jsx(k.Toolbar,{className:j.filterTagsToolbar,children:e.jsx(Se,{items:ae,onClearAll:ce,onItemDelete:we,className:j.tagFilter})}),e.jsx(k.Body,{className:j.body,children:x.length===0?e.jsx("div",{className:j.emptyState,children:Z||e.jsxs(e.Fragment,{children:[e.jsx(F,{icon:"chat_bubble_outline",size:"large",className:j.emptyIcon}),e.jsx("span",{children:"No comments yet"})]})}):x.map(r=>e.jsx(De,{comment:r,overflow:"displayed",onClick:()=>S?.(r),onResolve:()=>l?.(r.id),onToggleActionRequired:()=>q?.(r.id),onForward:()=>m?.(r.id),onMarkUnread:()=>B?.(r.id),onCopyLink:()=>I?.(r.id),onDelete:()=>X?.(r.id)},r.id))})]}),e.jsx(me,{open:h,onOpenChange:w,filters:oe,onFiltersChange:ee,onApply:ye,onClearAll:ce,availableAuthors:de,availableLabels:ue})]})};Y.__docgenInfo={description:"",methods:[],displayName:"DsCommentsDrawer",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLElement"}],raw:"Ref<HTMLElement>"},description:""},open:{required:!0,tsType:{name:"boolean"},description:""},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:""},comments:{required:!0,tsType:{name:"Array",elements:[{name:"CommentData"}],raw:"CommentData[]"},description:""},showResolved:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},onShowResolvedChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(show: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"show"}],return:{name:"void"}}},description:""},searchQuery:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},onSearchChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(query: string) => void",signature:{arguments:[{type:{name:"string"},name:"query"}],return:{name:"void"}}},description:""},onCommentClick:{required:!1,tsType:{name:"signature",type:"function",raw:"(comment: CommentData) => void",signature:{arguments:[{type:{name:"CommentData"},name:"comment"}],return:{name:"void"}}},description:""},onResolveComment:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"}],return:{name:"void"}}},description:""},onToggleActionRequired:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"}],return:{name:"void"}}},description:""},onForward:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"}],return:{name:"void"}}},description:""},onMarkUnread:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"}],return:{name:"void"}}},description:""},onCopyLink:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"}],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(commentId: string) => void",signature:{arguments:[{type:{name:"string"},name:"commentId"}],return:{name:"void"}}},description:""},noCommentsMessage:{required:!1,tsType:{name:"ReactNode"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};const Ge="_storyWrapper_1iwkl_1",Ye="_filterDemo_1iwkl_9",Xe="_filterDemoTitle_1iwkl_14",Ze="_filterDemoText_1iwkl_18",et="_filterDemoList_1iwkl_23",_={storyWrapper:Ge,filterDemo:Ye,filterDemoTitle:Xe,filterDemoText:Ze,filterDemoList:et},{expect:d,fn:C,userEvent:se,within:D}=__STORYBOOK_MODULE_TEST__,T=()=>[{id:"comment-1",numericId:63,author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},createdAt:new Date(Date.now()-1440*60*1e3),isResolved:!1,labels:["Bug","High Priority"],messages:[{id:"msg-1",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"We need to review the resource allocation for this project. I think we should consider adjusting the timeline to ensure we have enough resources for the development phase.",createdAt:new Date(Date.now()-1440*60*1e3),isInitialMessage:!0},{id:"msg-2",author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},content:"Thanks for the feedback!",createdAt:new Date(Date.now()-720*60*1e3)},{id:"msg-3",author:{id:"user-3",name:"Jane S.",avatarSrc:"https://i.pravatar.cc/40?img=3"},content:"I agree with this approach.",createdAt:new Date(Date.now()-360*60*1e3)}]},{id:"comment-2",numericId:64,author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},createdAt:new Date(Date.now()-2880*60*1e3),isResolved:!1,labels:["Feature Request"],messages:[{id:"msg-4",author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},content:"Could we add a dark mode feature to the application? This would improve usability for users working in low-light environments.",createdAt:new Date(Date.now()-2880*60*1e3),isInitialMessage:!0}]},{id:"comment-3",numericId:65,author:{id:"user-3",name:"Jane S.",avatarSrc:"https://i.pravatar.cc/40?img=3"},createdAt:new Date(Date.now()-4320*60*1e3),isResolved:!1,labels:["Documentation","Enhancement"],messages:[{id:"msg-5",author:{id:"user-3",name:"Jane S.",avatarSrc:"https://i.pravatar.cc/40?img=3"},content:"The API documentation needs to be updated to reflect the recent changes we made to the authentication system. This will help developers integrate with our service more easily.",createdAt:new Date(Date.now()-4320*60*1e3),isInitialMessage:!0},{id:"msg-6",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"Good point!",createdAt:new Date(Date.now()-3600*60*1e3)},{id:"msg-7",author:{id:"user-4",name:"Bob M.",avatarSrc:"https://i.pravatar.cc/40?img=4"},content:"I will look into this.",createdAt:new Date(Date.now()-2880*60*1e3)},{id:"msg-8",author:{id:"user-3",name:"Jane S.",avatarSrc:"https://i.pravatar.cc/40?img=3"},content:"Thanks everyone!",createdAt:new Date(Date.now()-2160*60*1e3)}]},{id:"comment-4",numericId:66,author:{id:"user-4",name:"Bob M.",avatarSrc:"https://i.pravatar.cc/40?img=4"},createdAt:new Date(Date.now()-5760*60*1e3),isResolved:!1,labels:["Question"],messages:[{id:"msg-9",author:{id:"user-4",name:"Bob M.",avatarSrc:"https://i.pravatar.cc/40?img=4"},content:"Should we consider migrating to the new version of the framework? It offers better performance and security features that could benefit our application.",createdAt:new Date(Date.now()-5760*60*1e3),isInitialMessage:!0}]},{id:"comment-5",numericId:67,author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},createdAt:new Date(Date.now()-7200*60*1e3),isResolved:!0,labels:["Bug"],messages:[{id:"msg-10",author:{id:"user-1",name:"Karen J.",avatarSrc:"https://i.pravatar.cc/40?img=1"},content:"This has been resolved.",createdAt:new Date(Date.now()-7200*60*1e3),isInitialMessage:!0}]},{id:"comment-6",numericId:68,author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},createdAt:new Date(Date.now()-8640*60*1e3),isResolved:!0,labels:["Documentation"],messages:[{id:"msg-11",author:{id:"user-2",name:"John D.",avatarSrc:"https://i.pravatar.cc/40?img=2"},content:"Documentation updated.",createdAt:new Date(Date.now()-8640*60*1e3),isInitialMessage:!0}]}],rn={title:"Design System/Comments/CommentsDrawer",component:Y,parameters:{layout:"fullscreen",docs:{description:{component:`
Side panel for viewing and managing all comments.

**Features:**
- Displays list of comment cards
- Search functionality
- Filter button (integration point)
- Show/hide resolved comments
- Comment count in header
- Click to open comment bubble
- Hover syncs with indicators on screen
        `}}},tags:["autodocs"],argTypes:{open:{control:"boolean",description:"Whether drawer is open"},showResolved:{control:"boolean",description:"Whether to show resolved comments"},searchQuery:{control:"text",description:"Search query"}},args:{onOpenChange:C(),onShowResolvedChange:C(),onSearchChange:C(),onCommentClick:C(),onResolveComment:C(),onToggleActionRequired:C(),onForward:C(),onMarkUnread:C(),onCopyLink:C(),onDelete:C()}},O={args:{open:!0,comments:T()},play:async({canvasElement:s})=>{const t=D(s).getByText(/4 Comments/i);await d(t).toBeInTheDocument()}},H={args:{open:!0,comments:T(),searchQuery:"Karen"},play:async({canvasElement:s})=>{const t=D(s).getByPlaceholderText(/search/i);await d(t).toBeInTheDocument()}},Q={args:{open:!0,comments:[]},play:async({canvasElement:s})=>{const t=D(s).getByText(/no comments yet/i);await d(t).toBeInTheDocument()}},J={args:{open:!0,comments:T(),showResolved:!1},play:async({canvasElement:s,args:a})=>{const n=D(s).getByRole("button",{name:/show resolved/i});await d(n).toBeInTheDocument(),await d(n).toHaveTextContent(/\(2\)/),await se.click(n),await d(a.onShowResolvedChange).toHaveBeenCalledWith(!0)}},W={args:{open:!0,comments:T(),showResolved:!0},play:async({canvasElement:s,args:a})=>{const n=D(s).getByRole("button",{name:/hide resolved/i});await d(n).toBeInTheDocument(),await se.click(n),await d(a.onShowResolvedChange).toHaveBeenCalledWith(!1)}},K={args:{open:!0,comments:T()},play:async({canvasElement:s,args:a})=>{const n=D(s).getAllByRole("button",{name:/comment #/i}).at(0);await d(n).toBeDefined(),await se.click(n),await d(a.onCommentClick).toHaveBeenCalledOnce()}},U={args:{open:!0,comments:T(),searchQuery:"dark mode"},play:async({canvasElement:s})=>{const a=D(s),t=a.getAllByRole("button",{name:/comment #/i});await d(t).toHaveLength(1),await d(a.getByText(/dark mode/i)).toBeInTheDocument()}},$={args:{open:!0,comments:T(),searchQuery:"#65"},play:async({canvasElement:s})=>{const t=D(s).getAllByRole("button",{name:/comment #/i});await d(t).toHaveLength(1)}},P={args:{open:!0,comments:[],noCommentsMessage:"Nothing to see here!"},play:async({canvasElement:s})=>{const a=D(s);await d(a.getByText("Nothing to see here!")).toBeInTheDocument()}},z={args:{open:!0,comments:T().filter(s=>!s.isResolved)},play:async({canvasElement:s})=>{const a=D(s);await d(a.queryByRole("button",{name:/show resolved/i})).not.toBeInTheDocument()}},V={render:function(){const[a,t]=p.useState(!1),[n,c]=p.useState(""),[g,v]=p.useState(!1),[S,l]=p.useState(T()),q=m=>{l(B=>B.map(I=>I.id===m?{...I,isResolved:!0}:I))};return e.jsxs("div",{className:_.storyWrapper,children:[e.jsx(A,{onClick:()=>t(!0),children:"Open Comments Drawer"}),e.jsx(Y,{open:a,onOpenChange:t,comments:S,searchQuery:n,onSearchChange:c,showResolved:g,onShowResolvedChange:v,onCommentClick:m=>console.log("Comment clicked:",m.id),onResolveComment:q,onToggleActionRequired:m=>console.log("Toggle action required:",m),onForward:m=>console.log("Forward:",m),onMarkUnread:m=>console.log("Mark unread:",m),onCopyLink:m=>console.log("Copy link:",m),onDelete:m=>console.log("Delete:",m)})]})}},G={name:"With Filters (Interactive)",parameters:{docs:{description:{story:`
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
                `}}},render:function(){const[a,t]=p.useState(!0),[n,c]=p.useState(""),[g,v]=p.useState(!1),[S]=p.useState(T());return e.jsxs("div",{className:_.storyWrapper,children:[e.jsxs("div",{className:_.filterDemo,children:[e.jsx("h3",{className:_.filterDemoTitle,children:"Filter Demonstration"}),e.jsx("p",{className:_.filterDemoText,children:"The drawer is open by default. Click the filter icon to explore filtering options."}),e.jsx("p",{className:_.filterDemoText,children:e.jsx("strong",{children:"Try filtering by:"})}),e.jsxs("ul",{className:_.filterDemoList,children:[e.jsx("li",{children:'Author: "Karen J." to see 2 comments'}),e.jsx("li",{children:'Label: "Bug" to see 2 comments'}),e.jsx("li",{children:'Status: "Action required" to see 1 comment'}),e.jsx("li",{children:"Multiple filters at once (e.g., Author + Label)"})]})]}),e.jsx(Y,{open:a,onOpenChange:t,comments:S,searchQuery:n,onSearchChange:c,showResolved:g,onShowResolvedChange:v,onCommentClick:l=>console.log("Comment clicked:",l.id),onResolveComment:l=>console.log("Resolve:",l),onToggleActionRequired:l=>console.log("Toggle action required:",l),onForward:l=>console.log("Forward:",l),onMarkUnread:l=>console.log("Mark unread:",l),onCopyLink:l=>console.log("Copy link:",l),onDelete:l=>console.log("Delete:",l)})]})}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
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
}`,...O.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
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
}`,...P.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
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
}`,...V.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}};const cn=["Default","WithSearch","Empty","ShowResolvedToggle","HideResolvedToggle","CommentCardClick","SearchFiltering","SearchById","CustomEmptyMessage","NoResolvedComments","Interactive","WithFilters"];export{K as CommentCardClick,P as CustomEmptyMessage,O as Default,Q as Empty,W as HideResolvedToggle,V as Interactive,z as NoResolvedComments,$ as SearchById,U as SearchFiltering,J as ShowResolvedToggle,G as WithFilters,H as WithSearch,cn as __namedExportsOrder,rn as default};
