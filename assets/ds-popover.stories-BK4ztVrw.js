import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-XhZZ1OAW.js";import{t as r}from"./jsx-runtime-Cw9gq7QB.js";import{t as i}from"./classnames-BKwtnCRs.js";import{t as a}from"./compiler-runtime-HhBVBVJi.js";import{i as o}from"./ds-icon.types-g8-Rf9jg.js";import{t as s}from"./ds-icon-D_O4z_J5.js";import{n as c,r as l}from"./dist-Bm34rzG4.js";import{n as u,t as d}from"./ds-button-Cdis1pDG.js";import{_ as f,f as p,g as m,h as ee,i as te,l as ne,m as re,n as ie,r as h,s as g,t as ae,u as oe}from"./dist-CbdhFRsj.js";import{i as se,n as ce,r as le,t as ue}from"./dist-BtVsrH2o2.js";import{n as de,t as fe}from"./dist-CSn_hkg22.js";import{a as pe,i as me,n as he,o as ge,r as _e,t as _}from"./dist-B5eZZLth.js";import{a as ve,c as ye,i as be,n as xe,o as Se,r as Ce,s as we,t as Te}from"./es2015-SCu5Tg84.js";function v(e){return e?`open`:`closed`}var y,b,x,S,Ee,C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,B,V,H,U,W,De,Oe,ke,Ae,G,je,Me=t((()=>{y=e(n(),1),f(),c(),ee(),se(),we(),Se(),fe(),ge(),ce(),te(),ne(),p(),ae(),be(),Te(),b=r(),x=`Popover`,[S,Ee]=re(x,[pe]),C=pe(),[w,T]=S(x),E=e=>{let{__scopePopover:t,children:n,open:r,defaultOpen:i,onOpenChange:a,modal:o=!1}=e,s=C(t),c=y.useRef(null),[l,u]=y.useState(!1),[d,f]=ie({prop:r,defaultProp:i??!1,onChange:a,caller:x});return(0,b.jsx)(me,{...s,children:(0,b.jsx)(w,{scope:t,contentId:de(),triggerRef:c,open:d,onOpenChange:f,onOpenToggle:y.useCallback(()=>f(e=>!e),[f]),hasCustomAnchor:l,onCustomAnchorAdd:y.useCallback(()=>u(!0),[]),onCustomAnchorRemove:y.useCallback(()=>u(!1),[]),modal:o,children:n})})},E.displayName=x,D=`PopoverAnchor`,O=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=T(D,n),a=C(n),{onCustomAnchorAdd:o,onCustomAnchorRemove:s}=i;return y.useEffect(()=>(o(),()=>s()),[o,s]),(0,b.jsx)(_,{...a,...r,ref:t})}),O.displayName=D,k=`PopoverTrigger`,A=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=T(k,n),a=C(n),o=l(t,i.triggerRef),s=(0,b.jsx)(g.button,{type:`button`,"aria-haspopup":`dialog`,"aria-expanded":i.open,"aria-controls":i.contentId,"data-state":v(i.open),...r,ref:o,onClick:m(e.onClick,i.onOpenToggle)});return i.hasCustomAnchor?s:(0,b.jsx)(_,{asChild:!0,...a,children:s})}),A.displayName=k,j=`PopoverPortal`,[M,N]=S(j,{forceMount:void 0}),P=e=>{let{__scopePopover:t,forceMount:n,children:r,container:i}=e,a=T(j,t);return(0,b.jsx)(M,{scope:t,forceMount:n,children:(0,b.jsx)(h,{present:n||a.open,children:(0,b.jsx)(ue,{asChild:!0,container:i,children:r})})})},P.displayName=j,F=`PopoverContent`,I=y.forwardRef((e,t)=>{let n=N(F,e.__scopePopover),{forceMount:r=n.forceMount,...i}=e,a=T(F,e.__scopePopover);return(0,b.jsx)(h,{present:r||a.open,children:a.modal?(0,b.jsx)(R,{...i,ref:t}):(0,b.jsx)(z,{...i,ref:t})})}),I.displayName=F,L=oe(`PopoverContent.RemoveScroll`),R=y.forwardRef((e,t)=>{let n=T(F,e.__scopePopover),r=y.useRef(null),i=l(t,r),a=y.useRef(!1);return y.useEffect(()=>{let e=r.current;if(e)return Ce(e)},[]),(0,b.jsx)(xe,{as:L,allowPinchZoom:!0,children:(0,b.jsx)(B,{...e,ref:i,trapFocus:n.open,disableOutsidePointerEvents:!0,onCloseAutoFocus:m(e.onCloseAutoFocus,e=>{e.preventDefault(),a.current||n.triggerRef.current?.focus()}),onPointerDownOutside:m(e.onPointerDownOutside,e=>{let t=e.detail.originalEvent,n=t.button===0&&t.ctrlKey===!0;a.current=t.button===2||n},{checkForDefaultPrevented:!1}),onFocusOutside:m(e.onFocusOutside,e=>e.preventDefault(),{checkForDefaultPrevented:!1})})})}),z=y.forwardRef((e,t)=>{let n=T(F,e.__scopePopover),r=y.useRef(!1),i=y.useRef(!1);return(0,b.jsx)(B,{...e,ref:t,trapFocus:!1,disableOutsidePointerEvents:!1,onCloseAutoFocus:t=>{e.onCloseAutoFocus?.(t),t.defaultPrevented||(r.current||n.triggerRef.current?.focus(),t.preventDefault()),r.current=!1,i.current=!1},onInteractOutside:t=>{e.onInteractOutside?.(t),t.defaultPrevented||(r.current=!0,t.detail.originalEvent.type===`pointerdown`&&(i.current=!0));let a=t.target;n.triggerRef.current?.contains(a)&&t.preventDefault(),t.detail.originalEvent.type===`focusin`&&i.current&&t.preventDefault()}})}),B=y.forwardRef((e,t)=>{let{__scopePopover:n,trapFocus:r,onOpenAutoFocus:i,onCloseAutoFocus:a,disableOutsidePointerEvents:o,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onInteractOutside:u,...d}=e,f=T(F,n),p=C(n);return ye(),(0,b.jsx)(ve,{asChild:!0,loop:!0,trapped:r,onMountAutoFocus:i,onUnmountAutoFocus:a,children:(0,b.jsx)(le,{asChild:!0,disableOutsidePointerEvents:o,onInteractOutside:u,onEscapeKeyDown:s,onPointerDownOutside:c,onFocusOutside:l,onDismiss:()=>f.onOpenChange(!1),children:(0,b.jsx)(_e,{"data-state":v(f.open),role:`dialog`,id:f.contentId,...p,...d,ref:t,style:{...d.style,"--radix-popover-content-transform-origin":`var(--radix-popper-transform-origin)`,"--radix-popover-content-available-width":`var(--radix-popper-available-width)`,"--radix-popover-content-available-height":`var(--radix-popper-available-height)`,"--radix-popover-trigger-width":`var(--radix-popper-anchor-width)`,"--radix-popover-trigger-height":`var(--radix-popper-anchor-height)`}})})})}),V=`PopoverClose`,H=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=T(V,n);return(0,b.jsx)(g.button,{type:`button`,...r,ref:t,onClick:m(e.onClick,()=>i.onOpenChange(!1))})}),H.displayName=V,U=`PopoverArrow`,W=y.forwardRef((e,t)=>{let{__scopePopover:n,...r}=e,i=C(n);return(0,b.jsx)(he,{...i,...r,ref:t})}),W.displayName=U,De=E,Oe=A,ke=P,Ae=I,G=H,je=W})),Ne,Pe,K,Fe=t((()=>{Ne=`_content_hxhyv_1`,Pe=`_arrow_hxhyv_14`,K={content:Ne,arrow:Pe}})),Ie,Le,q,Re,ze=t((()=>{Ie=a(),Me(),Le=e(i(),1),Fe(),q=r(),Re=e=>{let t=(0,Ie.c)(13),{trigger:n,children:r,className:i,align:a,side:o}=e,s=a===void 0?`center`:a,c=o===void 0?`top`:o,l;t[0]===n?l=t[1]:(l=(0,q.jsx)(Oe,{asChild:!0,children:n}),t[0]=n,t[1]=l);let u;t[2]===i?u=t[3]:(u=(0,Le.default)(K.content,i),t[2]=i,t[3]=u);let d;t[4]===Symbol.for(`react.memo_cache_sentinel`)?(d=(0,q.jsx)(je,{className:K.arrow}),t[4]=d):d=t[4];let f;t[5]!==s||t[6]!==r||t[7]!==c||t[8]!==u?(f=(0,q.jsx)(ke,{children:(0,q.jsxs)(Ae,{side:c,align:s,sideOffset:8,collisionPadding:16,className:u,children:[r,d]})}),t[5]=s,t[6]=r,t[7]=c,t[8]=u,t[9]=f):f=t[9];let p;return t[10]!==l||t[11]!==f?(p=(0,q.jsxs)(De,{children:[l,f]}),t[10]=l,t[11]=f,t[12]=p):p=t[12],p}})),Be=t((()=>{})),J,Y,X,Z,Ve,He,Q,$;t((()=>{d(),s(),Me(),ze(),Be(),J=r(),{expect:Y,screen:X,userEvent:Z,within:Ve}=__STORYBOOK_MODULE_TEST__,He={title:`Design System/Popover`,component:Re,parameters:{layout:`centered`},argTypes:{trigger:{control:`object`,description:`Element that triggers the popover`},children:{control:`object`,description:`Content displayed within the popover`},className:{control:`text`,description:`Additional CSS classes for the popover content`},align:{control:{type:`select`,options:[`start`,`center`,`end`]},description:`Alignment of the popover relative to the trigger`,table:{defaultValue:{summary:`center`}}},side:{control:{type:`select`,options:[`top`,`right`,`bottom`,`left`]},description:`Preferred side of the popover relative to the trigger`,table:{defaultValue:{summary:`top`}}}}},Q={args:{trigger:(0,J.jsxs)(u,{children:[(0,J.jsx)(o,{icon:`info`}),` Open Popover`]}),children:(0,J.jsxs)(`div`,{children:[(0,J.jsx)(`strong`,{children:`ID:`}),` 123456, Dallas, USA`,(0,J.jsx)(`p`,{children:`Facility Types: Tier 1, Tier 2`}),(0,J.jsx)(`p`,{children:`Devices: 11, 2898`}),(0,J.jsxs)(`div`,{style:{display:`flex`,justifyContent:`flex-end`,gap:`8px`},children:[(0,J.jsx)(G,{asChild:!0,children:(0,J.jsx)(o,{className:`action-icon`,icon:`fullscreen`})}),(0,J.jsx)(G,{asChild:!0,children:(0,J.jsx)(o,{className:`action-icon`,icon:`view_list`})}),(0,J.jsx)(G,{asChild:!0,children:(0,J.jsx)(o,{className:`action-icon`,icon:`star`})})]})]})},play:async({canvasElement:e})=>{let t=await Ve(e).findByText(/open popover/i);await Z.click(t),await Y(await X.findByText(/ID:/i)).toBeVisible(),await Z.click(document.body),await Y(X.queryByText(/ID:/i)).not.toBeInTheDocument(),await Z.click(t),await Y(await X.findByText(/ID:/i)).toBeVisible();let n=await X.findByText(/fullscreen/i);await Z.click(n),await Y(X.queryByText(/ID:/i)).not.toBeInTheDocument()}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`Default`]}))();export{Q as Default,$ as __namedExportsOrder,He as default};