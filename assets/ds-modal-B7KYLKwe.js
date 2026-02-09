import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as r}from"./index-1uylLdSz.js";import{D as _}from"./ds-icon-CG8akOCs.js";import{D as f}from"./ds-typography-Dr08trYh.js";import{P as h}from"./portal-BOFLLrhg.js";import{D as v,a as N,b as S,c as C,d as b,e as k}from"./dialog-title-D1i9WbCt.js";const q="_overlay_1gte5_1",P="_modal_1gte5_31",j="_content_1gte5_68",R="_header_1gte5_74",x="_footer_1gte5_75",w="_body_1gte5_76",T="_title_1gte5_104",D="_actions_1gte5_117",t={overlay:q,"fade-in-overlay":"_fade-in-overlay_1gte5_1","fade-out-overlay":"_fade-out-overlay_1gte5_1",modal:P,"scale-in-modal":"_scale-in-modal_1gte5_1","scale-out-modal":"_scale-out-modal_1gte5_1",content:j,header:R,footer:x,body:w,title:T,actions:D,"cols-1":"_cols-1_1gte5_134","cols-2":"_cols-2_1gte5_138","cols-3":"_cols-3_1gte5_142","cols-4":"_cols-4_1gte5_146","cols-5":"_cols-5_1gte5_150","cols-6":"_cols-6_1gte5_154","cols-7":"_cols-7_1gte5_158","cols-8":"_cols-8_1gte5_162","cols-9":"_cols-9_1gte5_166","cols-10":"_cols-10_1gte5_170","cols-11":"_cols-11_1gte5_174","cols-12":"_cols-12_1gte5_178"},n=({open:a,columns:s=6,dividers:l=!1,style:o,className:i,modal:c=!0,closeOnEscape:d,closeOnInteractOutside:m=!1,children:u,onOpenChange:p})=>{const y=g=>{p(g.open)};return e.jsx(v,{open:a,onOpenChange:y,modal:c,closeOnEscape:d,closeOnInteractOutside:m,children:e.jsxs(h,{children:[e.jsx(N,{className:t.overlay}),e.jsx(S,{children:e.jsx(C,{style:o,className:r(t.modal,i,t[`cols-${s}`]),children:e.jsx("div",{className:t.content,"data-dividers":l||void 0,children:u})})})]})})},O=({style:a,className:s,children:l})=>e.jsx("div",{style:a,className:r(t.header,s),children:l}),A=({style:a,className:s,children:l})=>e.jsx(b,{className:r(t.title,s),style:a,asChild:!0,children:e.jsx(f,{variant:"heading3",children:l})}),B=({style:a,className:s})=>e.jsx(k,{style:a,className:s,children:e.jsx(_,{icon:"close",size:"small"})}),V=({style:a,className:s,children:l})=>e.jsx("div",{style:a,className:r(t.body,s),children:l}),F=({style:a,className:s,children:l})=>e.jsx("div",{style:a,className:r(t.footer,s),children:l}),H=({style:a,className:s,children:l})=>e.jsx("div",{style:a,className:r(t.actions,s),children:l});n.Header=O;n.Title=A;n.CloseTrigger=B;n.Body=V;n.Footer=F;n.Actions=H;n.__docgenInfo={description:`Composable modal dialog.
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
}`,signature:{properties:[{key:"style",value:{name:"CSSProperties",required:!1}},{key:"className",value:{name:"string",required:!1}},{key:"children",value:{name:"ReactNode",required:!0}}]}}}],returns:null}],displayName:"DsModal",props:{open:{required:!0,tsType:{name:"boolean"},description:"Whether the modal is open"},columns:{required:!1,tsType:{name:"union",raw:"1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"},{name:"literal",value:"3"},{name:"literal",value:"4"},{name:"literal",value:"5"},{name:"literal",value:"6"},{name:"literal",value:"7"},{name:"literal",value:"8"},{name:"literal",value:"9"},{name:"literal",value:"10"},{name:"literal",value:"11"},{name:"literal",value:"12"}]},description:`Number of grid columns for modal width
@default 6`,defaultValue:{value:"6",computed:!1}},dividers:{required:!1,tsType:{name:"boolean"},description:`Show full-width dividers between header, body, and footer sections
@default false`,defaultValue:{value:"false",computed:!1}},style:{required:!1,tsType:{name:"CSSProperties"},description:"Optional inline styles to apply to the component"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class name"},children:{required:!0,tsType:{name:"ReactNode"},description:"Modal body content"},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(open: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"open"}],return:{name:"void"}}},description:`Callback when modal open state changes
@param open - whether the modal is open`},modal:{defaultValue:{value:"true",computed:!1},required:!1},closeOnInteractOutside:{defaultValue:{value:"false",computed:!1},required:!1}},composes:["Pick"]};export{n as D};
