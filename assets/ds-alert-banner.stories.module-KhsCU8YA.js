import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-6sF1Ejqi.js";import{t as r}from"./classnames-Ce489xFf.js";import{i}from"./ds-icon.types-DQ8-N5BP.js";import{t as a}from"./ds-icon-BuPOExGD.js";import{t as o}from"./ds-typography-CeoK6wAc.js";import{t as s}from"./ds-typography-JyFwGtGS.js";var c,l,u,d,f,p,m,h,g,_,v,y,b,x,S,C=t((()=>{c=`_alertBanner_1hjx6_1`,l=`_inline_1hjx6_1`,u=`_title_1hjx6_13`,d=`_global_1hjx6_16`,f=`_description_1hjx6_26`,p=`_hidden_1hjx6_32`,m=`_icon_1hjx6_35`,h=`_actions_1hjx6_47`,g=`_closeButton_1hjx6_52`,_=`_infoNeutral_1hjx6_57`,v=`_infoBlue_1hjx6_64`,y=`_warning_1hjx6_71`,b=`_error_1hjx6_78`,x=`_success_1hjx6_85`,S={alertBanner:c,inline:l,title:u,global:d,description:f,hidden:p,icon:m,actions:h,closeButton:g,infoNeutral:_,infoBlue:v,warning:y,error:b,success:x}})),w,T,E,D,O,k,A=t((()=>{w=e(r(),1),C(),a(),s(),T=n(),E=({open:e,onOpenChange:t,inline:n=!1,variant:r=`info-blue`,icon:a,closable:o=!1,className:s,style:c={},children:l})=>{let u={"info-neutral":S.infoNeutral,"info-blue":S.infoBlue,warning:S.warning,error:S.error,success:S.success}[r],d=(0,w.default)(S.alertBanner,n&&S.inline,!n&&S.global,u,{[S.hidden]:!e},s);return e?(0,T.jsxs)(`div`,{className:d,style:c,children:[a&&(0,T.jsx)(i,{className:S.icon,icon:a,size:`small`,filled:!0}),l,o&&(0,T.jsx)(`button`,{type:`button`,className:S.closeButton,onClick:()=>{t(!1)},"aria-label":`Close alert`,"data-close":!0,children:(0,T.jsx)(i,{icon:`close`,size:`small`})})]}):null},D=({style:e,className:t,children:n})=>(0,T.jsx)(o,{style:e,className:(0,w.default)(S.title,t),variant:`body-md-md`,children:n}),O=({style:e,className:t,children:n})=>(0,T.jsx)(o,{style:e,className:(0,w.default)(S.description,t),variant:`body-sm-reg`,children:n}),k=({style:e,className:t,children:n})=>(0,T.jsx)(`div`,{style:e,className:(0,w.default)(S.actions,t),children:n}),E.Title=D,E.Body=O,E.Actions=k,E.__docgenInfo={description:`Design system AlertBanner component
Controlled component that displays alert messages with different variants`,methods:[{name:`Title`,docblock:null,modifiers:[`static`],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}},{key:`children`,value:{name:`ReactNode`,required:!0}}]}}}],returns:null},{name:`Body`,docblock:null,modifiers:[`static`],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}},{key:`children`,value:{name:`ReactNode`,required:!0}}]}}}],returns:null},{name:`Actions`,docblock:null,modifiers:[`static`],params:[{name:`{
	style,
	className,
	children,
}: {
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,optional:!1,type:{name:`signature`,type:`object`,raw:`{
	style?: CSSProperties;
	className?: string;
	children: ReactNode;
}`,signature:{properties:[{key:`style`,value:{name:`CSSProperties`,required:!1}},{key:`className`,value:{name:`string`,required:!1}},{key:`children`,value:{name:`ReactNode`,required:!0}}]}}}],returns:null}],displayName:`DsAlertBanner`,props:{open:{required:!0,tsType:{name:`boolean`},description:`Controls whether the alert banner is visible`},onOpenChange:{required:!0,tsType:{name:`signature`,type:`function`,raw:`(open: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`open`}],return:{name:`void`}}},description:`Callback fired when the alert banner should be closed`},inline:{required:!1,tsType:{name:`boolean`},description:`Whether the alert banner should be inline (normal document flow) instead of global (designed for top of the page)
@default false`,defaultValue:{value:`false`,computed:!1}},variant:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof alertBannerVariants)[number]`},description:`The variant of the alert banner
@default 'info-blue'`,defaultValue:{value:`'info-blue'`,computed:!1}},icon:{required:!1,tsType:{name:`union`,raw:`IconName | FunctionComponent<SVGProps<SVGSVGElement>>`,elements:[{name:`union`,raw:`MaterialIconName | CustomIconName`,elements:[{name:`unknown`},{name:`unknown`}]},{name:`FunctionComponent`,elements:[{name:`SVGProps`,elements:[{name:`SVGSVGElement`}],raw:`SVGProps<SVGSVGElement>`}],raw:`FunctionComponent<SVGProps<SVGSVGElement>>`}]},description:`Optional icon to display using DsIcon`},closable:{required:!1,tsType:{name:`boolean`},description:`Whether the alert banner can be closed with an X button`,defaultValue:{value:`false`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`ReactCSSProperties`,raw:`React.CSSProperties`},description:`Additional styles to apply to the component`,defaultValue:{value:`{}`,computed:!1}},children:{required:!1,tsType:{name:`ReactNode`},description:`Optional children to be rendered inside the component (typically action buttons)`}}}})),j,M=t((()=>{j=[`info-neutral`,`info-blue`,`warning`,`error`,`success`]})),N,P,F,I,L,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$=t((()=>{N=`_globalMessages_2ywt5_1`,P=`_customBody_2ywt5_6`,F=`_trigger_2ywt5_15`,I=`_inlineAlertBanner_2ywt5_19`,L=`_inlineActions_2ywt5_25`,R=`_primary_2ywt5_30`,z=`_customBodyContainer_2ywt5_41`,B=`_customBodyText_2ywt5_47`,V=`_customBodyList_2ywt5_52`,H=`_infoBox_2ywt5_58`,U=`_securityCard_2ywt5_67`,W=`_securityCardCritical_2ywt5_75`,G=`_securityCardHigh_2ywt5_80`,K=`_securityCardTitle_2ywt5_85`,q=`_securityCardTitleCritical_2ywt5_89`,J=`_securityCardTitleHigh_2ywt5_93`,Y=`_securityCardScore_2ywt5_97`,X=`_recommendationsBox_2ywt5_102`,Z=`_securityCardsContainer_2ywt5_111`,Q={globalMessages:N,customBody:P,trigger:F,inlineAlertBanner:I,inlineActions:L,primary:R,customBodyContainer:z,customBodyText:B,customBodyList:V,infoBox:H,securityCard:U,securityCardCritical:W,securityCardHigh:G,securityCardTitle:K,securityCardTitleCritical:q,securityCardTitleHigh:J,securityCardScore:Y,recommendationsBox:X,securityCardsContainer:Z}}));export{E as a,M as i,$ as n,A as o,j as r,Q as t};