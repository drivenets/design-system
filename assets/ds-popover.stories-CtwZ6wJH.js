import{j as e}from"./jsx-runtime-u17CrQMm.js";import{D as W}from"./ds-button-CwiAaFJr.js";import{D as C}from"./ds-icon-CDAdMGrd.js";import{r as c}from"./iframe-Dzch3Es7.js";import{a as Y,c as Z,P as O,e as m,b,d as z}from"./index-CABlI4As.js";import{u as E}from"./index-D86CbGmZ.js";import{P as J,D as Q}from"./index-DOgYiTL2.js";import{h as X,R as ee,u as oe,F as te}from"./Combination-Y5OyYruG.js";import{u as re}from"./index-BLNDtneh.js";import{c as N,R as ne,A as I,a as se,C as ae}from"./index-De4O1gR1.js";import{c as ie}from"./index-d4XVdUri.js";import"./ds-button-legacy-BPynAJnI.js";import"./ds-button-new-BY3Ex_Il.js";import"./preload-helper-PPVm8Dsz.js";import"./index-Da2xP1Gr.js";import"./index-BPeGhiFY.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-B9q0jr9I.js";var D="Popover",[B]=Z(D,[N]),g=N(),[ce,p]=B(D),S=o=>{const{__scopePopover:a,children:t,open:s,defaultOpen:r,onOpenChange:n,modal:i=!1}=o,l=g(a),v=c.useRef(null),[f,x]=c.useState(!1),[P,u]=Y({prop:s,defaultProp:r??!1,onChange:n,caller:D});return e.jsx(ne,{...l,children:e.jsx(ce,{scope:a,contentId:re(),triggerRef:v,open:P,onOpenChange:u,onOpenToggle:c.useCallback(()=>u(T=>!T),[u]),hasCustomAnchor:f,onCustomAnchorAdd:c.useCallback(()=>x(!0),[]),onCustomAnchorRemove:c.useCallback(()=>x(!1),[]),modal:i,children:t})})};S.displayName=D;var k="PopoverAnchor",le=c.forwardRef((o,a)=>{const{__scopePopover:t,...s}=o,r=p(k,t),n=g(t),{onCustomAnchorAdd:i,onCustomAnchorRemove:l}=r;return c.useEffect(()=>(i(),()=>l()),[i,l]),e.jsx(I,{...n,...s,ref:a})});le.displayName=k;var F="PopoverTrigger",M=c.forwardRef((o,a)=>{const{__scopePopover:t,...s}=o,r=p(F,t),n=g(t),i=E(a,r.triggerRef),l=e.jsx(O.button,{type:"button","aria-haspopup":"dialog","aria-expanded":r.open,"aria-controls":r.contentId,"data-state":K(r.open),...s,ref:i,onClick:m(o.onClick,r.onOpenToggle)});return r.hasCustomAnchor?l:e.jsx(I,{asChild:!0,...n,children:l})});M.displayName=F;var j="PopoverPortal",[pe,ue]=B(j,{forceMount:void 0}),V=o=>{const{__scopePopover:a,forceMount:t,children:s,container:r}=o,n=p(j,a);return e.jsx(pe,{scope:a,forceMount:t,children:e.jsx(b,{present:t||n.open,children:e.jsx(J,{asChild:!0,container:r,children:s})})})};V.displayName=j;var d="PopoverContent",q=c.forwardRef((o,a)=>{const t=ue(d,o.__scopePopover),{forceMount:s=t.forceMount,...r}=o,n=p(d,o.__scopePopover);return e.jsx(b,{present:s||n.open,children:n.modal?e.jsx(ve,{...r,ref:a}):e.jsx(fe,{...r,ref:a})})});q.displayName=d;var de=z("PopoverContent.RemoveScroll"),ve=c.forwardRef((o,a)=>{const t=p(d,o.__scopePopover),s=c.useRef(null),r=E(a,s),n=c.useRef(!1);return c.useEffect(()=>{const i=s.current;if(i)return X(i)},[]),e.jsx(ee,{as:de,allowPinchZoom:!0,children:e.jsx(L,{...o,ref:r,trapFocus:t.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(o.onCloseAutoFocus,i=>{i.preventDefault(),n.current||t.triggerRef.current?.focus()}),onPointerDownOutside:m(o.onPointerDownOutside,i=>{const l=i.detail.originalEvent,v=l.button===0&&l.ctrlKey===!0,f=l.button===2||v;n.current=f},{checkForDefaultPrevented:!1}),onFocusOutside:m(o.onFocusOutside,i=>i.preventDefault(),{checkForDefaultPrevented:!1})})})}),fe=c.forwardRef((o,a)=>{const t=p(d,o.__scopePopover),s=c.useRef(!1),r=c.useRef(!1);return e.jsx(L,{...o,ref:a,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:n=>{o.onCloseAutoFocus?.(n),n.defaultPrevented||(s.current||t.triggerRef.current?.focus(),n.preventDefault()),s.current=!1,r.current=!1},onInteractOutside:n=>{o.onInteractOutside?.(n),n.defaultPrevented||(s.current=!0,n.detail.originalEvent.type==="pointerdown"&&(r.current=!0));const i=n.target;t.triggerRef.current?.contains(i)&&n.preventDefault(),n.detail.originalEvent.type==="focusin"&&r.current&&n.preventDefault()}})}),L=c.forwardRef((o,a)=>{const{__scopePopover:t,trapFocus:s,onOpenAutoFocus:r,onCloseAutoFocus:n,disableOutsidePointerEvents:i,onEscapeKeyDown:l,onPointerDownOutside:v,onFocusOutside:f,onInteractOutside:x,...P}=o,u=p(d,t),T=g(t);return oe(),e.jsx(te,{asChild:!0,loop:!0,trapped:s,onMountAutoFocus:r,onUnmountAutoFocus:n,children:e.jsx(Q,{asChild:!0,disableOutsidePointerEvents:i,onInteractOutside:x,onEscapeKeyDown:l,onPointerDownOutside:v,onFocusOutside:f,onDismiss:()=>u.onOpenChange(!1),children:e.jsx(ae,{"data-state":K(u.open),role:"dialog",id:u.contentId,...T,...P,ref:a,style:{...P.style,"--radix-popover-content-transform-origin":"var(--radix-popper-transform-origin)","--radix-popover-content-available-width":"var(--radix-popper-available-width)","--radix-popover-content-available-height":"var(--radix-popper-available-height)","--radix-popover-trigger-width":"var(--radix-popper-anchor-width)","--radix-popover-trigger-height":"var(--radix-popper-anchor-height)"}})})})}),U="PopoverClose",G=c.forwardRef((o,a)=>{const{__scopePopover:t,...s}=o,r=p(U,t);return e.jsx(O.button,{type:"button",...s,ref:a,onClick:m(o.onClick,()=>r.onOpenChange(!1))})});G.displayName=U;var he="PopoverArrow",H=c.forwardRef((o,a)=>{const{__scopePopover:t,...s}=o,r=g(t);return e.jsx(se,{...r,...s,ref:a})});H.displayName=he;function K(o){return o?"open":"closed"}var me=S,ge=M,xe=V,Pe=q,_=G,Ce=H;const ye="_content_hxhyv_1",we="_arrow_hxhyv_14",A={content:ye,arrow:we},$=({trigger:o,children:a,className:t,align:s="center",side:r="top"})=>e.jsxs(me,{children:[e.jsx(ge,{asChild:!0,children:o}),e.jsx(xe,{children:e.jsxs(Pe,{side:r,align:s,sideOffset:8,collisionPadding:16,className:ie(A.content,t),children:[a,e.jsx(Ce,{className:A.arrow})]})})]});$.__docgenInfo={description:"",methods:[],displayName:"DsPopover",props:{trigger:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The element that triggers the popover"},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The content to be rendered inside the popover"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},align:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:"The alignment of the popover content",defaultValue:{value:"'center'",computed:!1}},side:{required:!1,tsType:{name:"union",raw:"'top' | 'right' | 'bottom' | 'left'",elements:[{name:"literal",value:"'top'"},{name:"literal",value:"'right'"},{name:"literal",value:"'bottom'"},{name:"literal",value:"'left'"}]},description:"The position of the popover relative to the trigger element",defaultValue:{value:"'top'",computed:!1}}}};const{expect:y,screen:h,userEvent:w,within:Re}=__STORYBOOK_MODULE_TEST__,Ue={title:"Design System/Popover",component:$,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{trigger:{control:"object",description:"Element that triggers the popover"},children:{control:"object",description:"Content displayed within the popover"},className:{control:"text",description:"Additional CSS classes for the popover content"},align:{control:{type:"select",options:["start","center","end"]},description:"Alignment of the popover relative to the trigger",table:{defaultValue:{summary:"center"}}},side:{control:{type:"select",options:["top","right","bottom","left"]},description:"Preferred side of the popover relative to the trigger",table:{defaultValue:{summary:"top"}}}}},R={args:{trigger:e.jsxs(W,{children:[e.jsx(C,{icon:"info"})," Open Popover"]}),children:e.jsxs("div",{children:[e.jsx("strong",{children:"ID:"})," 123456, Dallas, USA",e.jsx("p",{children:"Facility Types: Tier 1, Tier 2"}),e.jsx("p",{children:"Devices: 11, 2898"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-end",gap:"8px"},children:[e.jsx(_,{asChild:!0,children:e.jsx(C,{className:"action-icon",icon:"fullscreen"})}),e.jsx(_,{asChild:!0,children:e.jsx(C,{className:"action-icon",icon:"view_list"})}),e.jsx(_,{asChild:!0,children:e.jsx(C,{className:"action-icon",icon:"star"})})]})]})},play:async({canvasElement:o})=>{const t=await Re(o).findByText(/open popover/i);await w.click(t),await y(await h.findByText(/ID:/i)).toBeVisible(),await w.click(document.body),await y(h.queryByText(/ID:/i)).not.toBeInTheDocument(),await w.click(t),await y(await h.findByText(/ID:/i)).toBeVisible();const s=await h.findByText(/fullscreen/i);await w.click(s),await y(h.queryByText(/ID:/i)).not.toBeInTheDocument()}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    trigger: <DsButton>
                <DsIcon icon="info" /> Open Popover
            </DsButton>,
    children: <div>
                <strong>ID:</strong> 123456, Dallas, USA
                <p>Facility Types: Tier 1, Tier 2</p>
                <p>Devices: 11, 2898</p>
                <div style={{
        display: 'flex',
        justifyContent: 'flex-end',
        gap: '8px'
      }}>
                    <PopoverClose asChild>
                        <DsIcon className="action-icon" icon="fullscreen" />
                    </PopoverClose>
                    <PopoverClose asChild>
                        <DsIcon className="action-icon" icon="view_list" />
                    </PopoverClose>
                    <PopoverClose asChild>
                        <DsIcon className="action-icon" icon="star" />
                    </PopoverClose>
                </div>
            </div>
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Click the trigger button to open the popover
    const triggerButton = await canvas.findByText(/open popover/i);
    await userEvent.click(triggerButton);

    // Verify that the popover content is visible
    await expect(await screen.findByText(/ID:/i)).toBeVisible();

    // Click outside the popover to close it
    await userEvent.click(document.body);
    await expect(screen.queryByText(/ID:/i)).not.toBeInTheDocument();

    // Reopen the popover
    await userEvent.click(triggerButton);
    await expect(await screen.findByText(/ID:/i)).toBeVisible();

    // Click on the 'Fullscreen' action icon to close the popover
    const fullscreenButton = await screen.findByText(/fullscreen/i);
    await userEvent.click(fullscreenButton);
    await expect(screen.queryByText(/ID:/i)).not.toBeInTheDocument();
  }
}`,...R.parameters?.docs?.source}}};const Ge=["Default"];export{R as Default,Ge as __namedExportsOrder,Ue as default};
