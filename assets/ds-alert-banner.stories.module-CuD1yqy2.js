import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as r}from"./index-C6HRAoS7.js";import{D as l}from"./ds-icon-CO0Wg4wL.js";import{D as c}from"./ds-typography-BTCzuXcV.js";const C="_alertBanner_1hjx6_1",g="_inline_1hjx6_1",b="_title_1hjx6_13",w="_global_1hjx6_16",B="_description_1hjx6_26",S="_hidden_1hjx6_32",N="_icon_1hjx6_35",x="_actions_1hjx6_47",j="_closeButton_1hjx6_52",T="_infoNeutral_1hjx6_57",v="_infoBlue_1hjx6_64",q="_warning_1hjx6_71",V="_error_1hjx6_78",k="_success_1hjx6_85",e={alertBanner:C,inline:g,title:b,global:w,description:B,hidden:S,icon:N,actions:x,closeButton:j,infoNeutral:T,infoBlue:v,warning:q,error:V,success:k},o=({open:n,onOpenChange:s,inline:t=!1,variant:d="info-blue",icon:i,closable:u=!1,className:m,style:y={},children:_})=>{const p={"info-neutral":e.infoNeutral,"info-blue":e.infoBlue,warning:e.warning,error:e.error,success:e.success}[d],f=r(e.alertBanner,t&&e.inline,!t&&e.global,p,{[e.hidden]:!n},m),h=()=>{s(!1)};return n?a.jsxs("div",{className:f,style:y,children:[i&&a.jsx(l,{className:e.icon,icon:i,size:"small",filled:!0}),_,u&&a.jsx("button",{type:"button",className:e.closeButton,onClick:h,"aria-label":"Close alert","data-close":!0,children:a.jsx(l,{icon:"close",size:"small"})})]}):null},P=({style:n,className:s,children:t})=>a.jsx(c,{style:n,className:r(e.title,s),variant:"body-md-md",children:t}),R=({style:n,className:s,children:t})=>a.jsx(c,{style:n,className:r(e.description,s),variant:"body-sm-reg",children:t}),G=({style:n,className:s,children:t})=>a.jsx("div",{style:n,className:r(e.actions,s),children:t});o.Title=P;o.Body=R;o.Actions=G;o.__docgenInfo={description:`Design system AlertBanner component
Controlled component that displays alert messages with different variants`,methods:[{name:"Title",docblock:null,modifiers:["static"],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"Actions",docblock:null,modifiers:["static"],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:"signature",type:"object",raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null}],displayName:"DsAlertBanner",props:{open:{required:!0,tsType:{name:"boolean"},description:"Controls whether the alert banner is visible"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback fired when the alert banner should be closed"},inline:{required:!1,tsType:{name:"boolean"},description:`Whether the alert banner should be inline (normal document flow) instead of global (designed for top of the page)
@default false`,defaultValue:{value:"false",computed:!1}},variant:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof alertBannerVariants)[number]"},description:`The variant of the alert banner
@default 'info-blue'`,defaultValue:{value:"'info-blue'",computed:!1}},icon:{required:!1,tsType:{name:"union",raw:"IconName | FunctionComponent<SVGProps<SVGSVGElement>>",elements:[{name:"union",raw:"MaterialIconName | CustomIconName",elements:[{name:"unknown"},{name:"unknown"}]},{name:"FunctionComponent",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"FunctionComponent<SVGProps<SVGSVGElement>>"}]},description:"Optional icon to display using DsIcon"},closable:{required:!1,tsType:{name:"boolean"},description:"Whether the alert banner can be closed with an X button",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"ReactCSSProperties",raw:"React.CSSProperties"},description:"Additional styles to apply to the component",defaultValue:{value:"{}",computed:!1}},children:{required:!1,tsType:{name:"ReactNode"},description:"Optional children to be rendered inside the component (typically action buttons)"}}};const se=["info-neutral","info-blue","warning","error","success"],A="_globalMessages_2ywt5_1",D="_customBody_2ywt5_6",H="_trigger_2ywt5_15",I="_inlineAlertBanner_2ywt5_19",E="_primary_2ywt5_30",M="_customBodyContainer_2ywt5_41",F="_customBodyText_2ywt5_47",L="_customBodyList_2ywt5_52",O="_infoBox_2ywt5_58",z="_securityCard_2ywt5_67",W="_securityCardCritical_2ywt5_75",X="_securityCardHigh_2ywt5_80",$="_securityCardTitle_2ywt5_85",J="_securityCardTitleCritical_2ywt5_89",K="_securityCardTitleHigh_2ywt5_93",Q="_securityCardScore_2ywt5_97",U="_recommendationsBox_2ywt5_102",Y="_securityCardsContainer_2ywt5_111",ae={globalMessages:A,customBody:D,trigger:H,inlineAlertBanner:I,primary:E,customBodyContainer:M,customBodyText:F,customBodyList:L,infoBox:O,securityCard:z,securityCardCritical:W,securityCardHigh:X,securityCardTitle:$,securityCardTitleCritical:J,securityCardTitleHigh:K,securityCardScore:Q,recommendationsBox:U,securityCardsContainer:Y};export{o as D,se as a,ae as s};
