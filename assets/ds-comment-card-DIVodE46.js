import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-6sF1Ejqi.js";import{t as r}from"./classnames-Ce489xFf.js";import{i}from"./ds-icon.types-DQ8-N5BP.js";import{t as a}from"./ds-icon-BuPOExGD.js";import{n as o,t as s}from"./ds-button-Ds1Mi7Ze.js";import{n as c,t as l}from"./ds-avatar-group-BJwjYm6Z.js";import{t as u}from"./ds-dropdown-menu-1G_c76wY.js";import{t as d}from"./ds-dropdown-menu-CjfMikdO.js";import{n as f,t as p}from"./format-relative-time-CEC7V4Aw.js";import{i as m}from"./ds-tag.types-CH9WqF4X.js";import{t as h}from"./ds-tag-C0_q89zW.js";var g,_,v,y,b,x,S,C,w,T,E,D,O,k,A,j,M,N,P,F=t((()=>{g=`_card_b668r_1`,_=`_actions_b668r_18`,v=`_sideColor_b668r_35`,y=`_actionRequired_b668r_40`,b=`_content_b668r_44`,x=`_header_b668r_51`,S=`_headerTop_b668r_59`,C=`_headerLeft_b668r_65`,w=`_commentInfo_b668r_73`,T=`_commentId_b668r_79`,E=`_authorInfo_b668r_85`,D=`_authorName_b668r_93`,O=`_timestamp_b668r_97`,k=`_body_b668r_124`,A=`_message_b668r_131`,j=`_truncated_b668r_137`,M=`_replyCount_b668r_145`,N=`_dropdownContent_b668r_151`,P={card:g,actions:_,sideColor:v,actionRequired:y,content:b,header:x,headerTop:S,headerLeft:C,commentInfo:w,commentId:T,authorInfo:E,authorName:D,timestamp:O,body:k,message:A,truncated:j,replyCount:M,dropdownContent:N}})),I=t((()=>{})),L=t((()=>{c(),I()})),R,z,B,V=t((()=>{R=e(r(),1),F(),L(),s(),a(),h(),d(),f(),z=n(),B=({ref:e,comment:t,disabled:n=!1,overflow:r=`hidden`,onClick:a,onResolve:s,onToggleActionRequired:c,onForward:d,onMarkUnread:f,onCopyLink:h,onDelete:g,formatTimestamp:_=p,className:v,style:y})=>{let{numericId:b,author:x,createdAt:S,messages:C,referenceTag:w,isActionRequired:T}=t,E=C.find(e=>e.isInitialMessage)||C[0],D=C.length-1,O=Array.from(new Map(C.map(e=>[e.author.id,e.author])).values()),k=()=>w?typeof w==`string`?(0,z.jsx)(m,{size:`small`,label:w,slots:{icon:(0,z.jsx)(i,{icon:`sell`,size:`tiny`})}}):w:null,A=O.map(e=>({name:e.name,src:e.avatarSrc})),j=e=>{e.stopPropagation(),s?.()},M=c||d||f||h||g;return(0,z.jsxs)(`button`,{ref:e,type:`button`,className:(0,R.default)(P.card,v),style:y,onClick:a,disabled:n,"data-disabled":n?``:void 0,"aria-label":`Comment #${String(b)} by ${x.name}${T?`, action required`:``}`,children:[(0,z.jsx)(`div`,{className:(0,R.default)(P.sideColor,{[P.actionRequired]:T})}),(0,z.jsxs)(`div`,{className:P.content,children:[(0,z.jsx)(`div`,{className:P.header,children:(0,z.jsxs)(`div`,{className:P.headerTop,children:[(0,z.jsxs)(`div`,{className:P.headerLeft,children:[(0,z.jsx)(l,{avatars:A,size:`sm`,max:4}),(0,z.jsxs)(`div`,{className:P.commentInfo,children:[(0,z.jsxs)(`span`,{className:P.commentId,children:[`#`,b]}),k()]}),(0,z.jsxs)(`div`,{className:P.authorInfo,children:[(0,z.jsx)(`span`,{className:P.authorName,children:x.name}),(0,z.jsx)(`span`,{className:P.timestamp,children:_(S)})]})]}),(0,z.jsxs)(`div`,{className:P.actions,children:[M&&(0,z.jsxs)(u.Root,{children:[(0,z.jsx)(u.Trigger,{asChild:!0,children:(0,z.jsx)(o,{design:`v1.2`,buttonType:`tertiary`,size:`tiny`,"aria-label":`More actions`,children:(0,z.jsx)(i,{icon:`more_vert`,size:`tiny`})})}),(0,z.jsxs)(u.Content,{className:P.dropdownContent,children:[c&&(0,z.jsx)(u.Item,{value:`toggle-action`,onClick:()=>c(),children:T?`Remove action requirement`:`Require action`}),d&&(0,z.jsx)(u.Item,{value:`forward`,onClick:()=>d(),children:`Forward`}),f&&(0,z.jsx)(u.Item,{value:`mark-unread`,onClick:()=>f(),children:`Mark as 'Unread'`}),h&&(0,z.jsx)(u.Item,{value:`copy-link`,onClick:()=>h(),children:`Copy link`}),g&&(0,z.jsx)(u.Item,{value:`delete`,onClick:()=>g(),children:`Delete`})]})]}),s&&(0,z.jsx)(o,{design:`v1.2`,buttonType:`tertiary`,size:`tiny`,onClick:j,"aria-label":`Resolve comment`,children:(0,z.jsx)(i,{icon:`check_circle`,size:`tiny`})})]})]})}),(0,z.jsxs)(`div`,{className:P.body,children:[(0,z.jsx)(`p`,{className:(0,R.default)(P.message,{[P.truncated]:r===`hidden`}),children:E?.content}),D>0&&(0,z.jsxs)(`span`,{className:P.replyCount,children:[D,` `,D===1?`reply`:`replies`]})]})]})]})},B.__docgenInfo={description:``,methods:[],displayName:`DsCommentCard`,props:{ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLButtonElement`}],raw:`Ref<HTMLButtonElement>`},description:``},comment:{required:!0,tsType:{name:`CommentData`},description:``},disabled:{required:!1,tsType:{name:`boolean`},description:``,defaultValue:{value:`false`,computed:!1}},overflow:{required:!1,tsType:{name:`union`,raw:`'hidden' | 'displayed'`,elements:[{name:`literal`,value:`'hidden'`},{name:`literal`,value:`'displayed'`}]},description:``,defaultValue:{value:`'hidden'`,computed:!1}},onClick:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onResolve:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onToggleActionRequired:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onForward:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onMarkUnread:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onCopyLink:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:``},formatTimestamp:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(date: Date) => string`,signature:{arguments:[{type:{name:`Date`},name:`date`}],return:{name:`string`}}},description:``,defaultValue:{value:`(date: Date): string => {
	const now = new Date();
	const diffMs = now.getTime() - date.getTime();

	if (diffMs < 0) {
		return 'Just now';
	}

	const diffSeconds = Math.floor(diffMs / MS_PER_SECOND);
	const diffMinutes = Math.floor(diffSeconds / SECONDS_PER_MINUTE);
	const diffHours = Math.floor(diffMinutes / MINUTES_PER_HOUR);
	const diffDays = Math.floor(diffHours / HOURS_PER_DAY);
	const diffWeeks = Math.floor(diffDays / DAYS_PER_WEEK);
	const diffMonths = Math.floor(diffDays / DAYS_PER_MONTH);
	const diffYears = Math.floor(diffMonths / MONTHS_PER_YEAR);

	if (diffSeconds < JUST_NOW_THRESHOLD_SECONDS) {
		return 'Just now';
	}

	if (diffMinutes < MINUTES_PER_HOUR) {
		return \`\${String(diffMinutes)}m ago\`;
	}

	if (diffHours < HOURS_PER_DAY) {
		return \`\${String(diffHours)}h ago\`;
	}

	if (diffDays < DAYS_PER_WEEK) {
		return \`\${String(diffDays)}d ago\`;
	}

	if (diffWeeks < 4) {
		return \`\${String(diffWeeks)}w ago\`;
	}

	if (diffYears >= 1) {
		return \`\${String(diffYears)}y ago\`;
	}

	return \`\${String(diffMonths)}mo ago\`;
}`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),H=t((()=>{})),U=t((()=>{V(),H()}));export{B as n,U as t};