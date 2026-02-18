import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-CFg2X2TO.js";import{D as H}from"./ds-avatar-group-afLLjWDh.js";import{D as v}from"./ds-button-BSRbDzy_.js";import{D as p}from"./ds-icon-CLW5u7Mu.js";import{D as k}from"./ds-tag-B2QCvVAP.js";import{a as s}from"./ds-dropdown-menu-DozyBWMo.js";import{f as P}from"./format-relative-time-B216dNqo.js";const O="_card_b668r_1",A="_actions_b668r_18",Y="_sideColor_b668r_35",$="_actionRequired_b668r_40",U="_content_b668r_44",z="_header_b668r_51",L="_headerTop_b668r_59",W="_headerLeft_b668r_65",B="_commentInfo_b668r_73",J="_commentId_b668r_79",V="_authorInfo_b668r_85",K="_authorName_b668r_93",G="_timestamp_b668r_97",F="_body_b668r_124",Q="_message_b668r_131",X="_truncated_b668r_137",Z="_replyCount_b668r_145",ee="_dropdownContent_b668r_151",n={card:O,actions:A,sideColor:Y,actionRequired:$,content:U,header:z,headerTop:L,headerLeft:W,commentInfo:B,commentId:J,authorInfo:V,authorName:K,timestamp:G,body:F,message:Q,truncated:X,replyCount:Z,dropdownContent:ee},ne=({ref:T,comment:x,disabled:_=!1,overflow:b="hidden",onClick:j,onResolve:h,onToggleActionRequired:i,onForward:o,onMarkUnread:d,onCopyLink:c,onDelete:m,formatTimestamp:C=P,className:D,style:M})=>{const{numericId:g,author:y,createdAt:N,messages:r,referenceTag:a,isActionRequired:l}=x,R=r.find(t=>t.isInitialMessage)||r[0],u=r.length-1,S=Array.from(new Map(r.map(t=>[t.author.id,t.author])).values()),w=()=>a?typeof a=="string"?e.jsx(k,{size:"small",label:a,slots:{icon:e.jsx(p,{icon:"sell",size:"tiny"})}}):a:null,E=S.map(t=>({name:t.name,src:t.avatarSrc})),I=t=>{t.stopPropagation(),h?.()},q=i||o||d||c||m;return e.jsxs("button",{ref:T,type:"button",className:f(n.card,D),style:M,onClick:j,disabled:_,"data-disabled":_?"":void 0,"aria-label":`Comment #${String(g)} by ${y.name}${l?", action required":""}`,children:[e.jsx("div",{className:f(n.sideColor,{[n.actionRequired]:l})}),e.jsxs("div",{className:n.content,children:[e.jsx("div",{className:n.header,children:e.jsxs("div",{className:n.headerTop,children:[e.jsxs("div",{className:n.headerLeft,children:[e.jsx(H,{avatars:E,size:"sm",max:4}),e.jsxs("div",{className:n.commentInfo,children:[e.jsxs("span",{className:n.commentId,children:["#",g]}),w()]}),e.jsxs("div",{className:n.authorInfo,children:[e.jsx("span",{className:n.authorName,children:y.name}),e.jsx("span",{className:n.timestamp,children:C(N)})]})]}),e.jsxs("div",{className:n.actions,children:[q&&e.jsxs(s.Root,{children:[e.jsx(s.Trigger,{asChild:!0,children:e.jsx(v,{design:"v1.2",buttonType:"tertiary",size:"small","aria-label":"More actions",children:e.jsx(p,{icon:"more_vert",size:"tiny"})})}),e.jsxs(s.Content,{className:n.dropdownContent,children:[i&&e.jsx(s.Item,{value:"toggle-action",onClick:()=>i(),children:l?"Remove action requirement":"Require action"}),o&&e.jsx(s.Item,{value:"forward",onClick:()=>o(),children:"Forward"}),d&&e.jsx(s.Item,{value:"mark-unread",onClick:()=>d(),children:"Mark as 'Unread'"}),c&&e.jsx(s.Item,{value:"copy-link",onClick:()=>c(),children:"Copy link"}),m&&e.jsx(s.Item,{value:"delete",onClick:()=>m(),children:"Delete"})]})]}),h&&e.jsx(v,{design:"v1.2",buttonType:"tertiary",size:"small",onClick:I,"aria-label":"Resolve comment",children:e.jsx(p,{icon:"check_circle",size:"tiny"})})]})]})}),e.jsxs("div",{className:n.body,children:[e.jsx("p",{className:f(n.message,{[n.truncated]:b==="hidden"}),children:R?.content}),u>0&&e.jsxs("span",{className:n.replyCount,children:[u," ",u===1?"reply":"replies"]})]})]})]})};ne.__docgenInfo={description:"",methods:[],displayName:"DsCommentCard",props:{ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLButtonElement"}],raw:"Ref<HTMLButtonElement>"},description:""},comment:{required:!0,tsType:{name:"CommentData"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},overflow:{required:!1,tsType:{name:"union",raw:"'hidden' | 'displayed'",elements:[{name:"literal",value:"'hidden'"},{name:"literal",value:"'displayed'"}]},description:"",defaultValue:{value:"'hidden'",computed:!1}},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onResolve:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onToggleActionRequired:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onForward:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onMarkUnread:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onCopyLink:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},formatTimestamp:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date) => string",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"string"}}},description:"",defaultValue:{value:`(date: Date): string => {
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
}`,computed:!1}},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""}}};export{ne as D};
