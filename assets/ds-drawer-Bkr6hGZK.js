import{j as s}from"./jsx-runtime-u17CrQMm.js";import{r as N}from"./iframe-Bhdmiu3A.js";import{c as n}from"./index-CTg8sGNP.js";import{D as h}from"./ds-icon-C_aPqn2p.js";import{D as v}from"./ds-typography-DPWIUNz-.js";import{P as S}from"./portal-rVIkCr2r.js";import{D as b,a as k,b as C,c as w,d as q,e as P}from"./dialog-title-C2k_Ghaf.js";const T="_backdrop_10mt8_1",j="_positioner_10mt8_30",R="_drawer_10mt8_37",x="_content_10mt8_160",D="_header_10mt8_167",O="_title_10mt8_177",V="_closeTrigger_10mt8_182",A="_toolbar_10mt8_189",B="_body_10mt8_197",F="_footer_10mt8_202",W="_actions_10mt8_209",t={backdrop:T,"fade-in-backdrop":"_fade-in-backdrop_10mt8_1","fade-out-backdrop":"_fade-out-backdrop_10mt8_1",positioner:j,drawer:R,"position-end":"_position-end_10mt8_49","slide-in-drawer-end":"_slide-in-drawer-end_10mt8_1","slide-out-drawer-end":"_slide-out-drawer-end_10mt8_1","position-start":"_position-start_10mt8_60","slide-in-drawer-start":"_slide-in-drawer-start_10mt8_1","slide-out-drawer-start":"_slide-out-drawer-start_10mt8_1","cols-1":"_cols-1_10mt8_71","cols-2":"_cols-2_10mt8_74","cols-3":"_cols-3_10mt8_77","cols-4":"_cols-4_10mt8_80","cols-5":"_cols-5_10mt8_83","cols-6":"_cols-6_10mt8_86","cols-7":"_cols-7_10mt8_89","cols-8":"_cols-8_10mt8_92","cols-9":"_cols-9_10mt8_95","cols-10":"_cols-10_10mt8_98","cols-11":"_cols-11_10mt8_101","cols-12":"_cols-12_10mt8_104",content:x,header:D,title:O,closeTrigger:V,toolbar:A,body:B,footer:F,actions:W},l=({open:e,onOpenChange:a,columns:r=4,position:i="end",backdrop:o=!1,closeOnEscape:c=!0,closeOnInteractOutside:d=!1,portal:m=!1,style:u,className:p,children:_})=>{const y=g=>{a(g.open)},f=m?S:N.Fragment;return s.jsx(b,{open:e,onOpenChange:y,modal:o,closeOnEscape:c,closeOnInteractOutside:d,preventScroll:o,children:s.jsxs(f,{children:[o&&s.jsx(k,{className:t.backdrop}),s.jsx(C,{className:t.positioner,children:s.jsx(w,{style:u,className:n(t.drawer,t[`position-${i}`],p,t[`cols-${String(r)}`]),children:s.jsx("div",{className:t.content,children:_})})})]})})},E=({style:e,className:a,children:r})=>s.jsx("div",{style:e,className:n(t.header,a),children:r}),H=({style:e,className:a,children:r})=>s.jsx(q,{className:n(t.title,a),style:e,asChild:!0,children:s.jsx(v,{variant:"heading3",children:r})}),I=({style:e,className:a})=>s.jsx(P,{style:e,className:n(t.closeTrigger,a),children:s.jsx(h,{icon:"close",size:"small"})}),z=({style:e,className:a,children:r})=>s.jsx("div",{style:e,className:n(t.toolbar,a),children:r}),$=({style:e,className:a,children:r})=>s.jsx("div",{style:e,className:n(t.body,a),children:r}),U=({style:e,className:a,children:r})=>s.jsx("div",{style:e,className:n(t.footer,a),children:r}),G=({style:e,className:a,children:r})=>s.jsx("div",{style:e,className:n(t.actions,a),children:r});l.Header=E;l.Title=H;l.CloseTrigger=I;l.Toolbar=z;l.Body=$;l.Footer=U;l.Actions=G;l.__docgenInfo={description:`Composable drawer component.
Supports grid-based sizing, flexible positioning, and compound components.
Use columns prop to control drawer width (1-12 grid columns).`,methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"Title",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"CloseTrigger",docblock:null,modifiers:["static"],params:[{name:"{ style, className }: { style?: CSSProperties; className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ style?: CSSProperties; className?: string }",signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}}],returns:null},{name:"Toolbar",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"Footer",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null}],displayName:"DsDrawer",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the drawer is open"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:"Callback when the drawer open state changes"},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:`Number of grid columns the drawer should span (1-12)
@default 4`,defaultValue:{value:"4",computed:!1}},position:{required:!1,tsType:{name:"union",raw:"'start' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`Position of the drawer
@default 'end'`,defaultValue:{value:"'end'",computed:!1}},backdrop:{required:!1,tsType:{name:"boolean"},description:`Whether to show backdrop overlay
@default false`,defaultValue:{value:"false",computed:!1}},portal:{required:!1,tsType:{name:"boolean"},description:`Whether to append the drawer to the body instead of rendering in place
@default false`,defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional CSS styles"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},children:{required:!0,tsType:{name:"ReactNode"},description:"Children components"},closeOnEscape:{defaultValue:{value:"true",computed:!1},required:!1},closeOnInteractOutside:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Pick"]};export{l as D};
