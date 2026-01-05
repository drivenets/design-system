import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as n}from"./index-Cofx8SB_.js";import{D as _}from"./ds-icon-Cy3flkl6.js";import{D as g}from"./ds-typography-BUl_sA7Y.js";import{P as f}from"./portal-CvSRTqG1.js";import{a as h,b as N,c as v,d as j,e as S,D as C}from"./dialog-title-k5-WiWDZ.js";const b="_overlay_jlut5_37",k="_modal_jlut5_51",q="_content_jlut5_67",P="_header_jlut5_73",R="_footer_jlut5_74",x="_body_jlut5_75",T="_title_jlut5_94",D="_actions_jlut5_107",t={overlay:b,"fade-in-overlay":"_fade-in-overlay_jlut5_1","fade-out-overlay":"_fade-out-overlay_jlut5_1",modal:k,"scale-in-modal":"_scale-in-modal_jlut5_1","scale-out-modal":"_scale-out-modal_jlut5_1",content:q,header:P,footer:R,body:x,title:T,actions:D,"cols-1":"_cols-1_jlut5_118","cols-2":"_cols-2_jlut5_122","cols-3":"_cols-3_jlut5_126","cols-4":"_cols-4_jlut5_130","cols-5":"_cols-5_jlut5_134","cols-6":"_cols-6_jlut5_138","cols-7":"_cols-7_jlut5_142","cols-8":"_cols-8_jlut5_146","cols-9":"_cols-9_jlut5_150","cols-10":"_cols-10_jlut5_154","cols-11":"_cols-11_jlut5_158","cols-12":"_cols-12_jlut5_162"},r=({open:a,onOpenChange:s,columns:l=6,style:o,className:i,modal:c=!0,closeOnEscape:d,closeOnInteractOutside:u=!1,children:m})=>{const p=y=>{s(y.open)};return e.jsx(h,{open:a,onOpenChange:p,modal:c,closeOnEscape:d,closeOnInteractOutside:u,children:e.jsxs(f,{children:[e.jsx(N,{className:t.overlay}),e.jsx(v,{children:e.jsx(j,{style:o,className:n(t.modal,t[`cols-${String(l)}`],i),children:e.jsx("div",{className:n(t.content),children:m})})})]})})},w=({style:a,className:s,children:l})=>e.jsx("div",{style:a,className:n(t.header,s),children:l}),O=({style:a,className:s,children:l})=>e.jsx(S,{className:n(t.title,s),style:a,asChild:!0,children:e.jsx(g,{variant:"heading3",children:l})}),A=({style:a,className:s})=>e.jsx(C,{style:a,className:s,children:e.jsx(_,{icon:"close",size:"small"})}),B=({style:a,className:s,children:l})=>e.jsx("div",{style:a,className:n(t.body,s),children:l}),F=({style:a,className:s,children:l})=>e.jsx("div",{style:a,className:n(t.footer,s),children:l}),H=({style:a,className:s,children:l})=>e.jsx("div",{style:a,className:n(t.actions,s),children:l});r.Header=w;r.Title=O;r.CloseTrigger=A;r.Body=B;r.Footer=F;r.Actions=H;r.__docgenInfo={description:`Composable modal dialog.
Supports custom header, footer, and body content with grid-based sizing.
Use columns prop to control modal width (1-12 grid columns).`,methods:[{name:"Header",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null},{name:"CloseTrigger",docblock:null,modifiers:["static"],params:[{name:"{ style, className }: { style?: CSSProperties; className?: string }",optional:!1,type:{name:"signature",type:"object",raw:"{ style?: CSSProperties; className?: string }",signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}}]}}}],returns:null},{name:"Body",docblock:null,modifiers:["static"],params:[{name:`{
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
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null}],displayName:"DsModal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:`Callback when modal open state changes
@param open - whether the modal is open`},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:`Number of grid columns for modal width
@default 6`,defaultValue:{value:"6",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Optional inline styles to apply to the component"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},children:{required:!0,tsType:{name:"ReactNode"},description:"Modal body content"},modal:{defaultValue:{value:"true",computed:!1},required:!1},closeOnInteractOutside:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Pick"]};export{r as D};
