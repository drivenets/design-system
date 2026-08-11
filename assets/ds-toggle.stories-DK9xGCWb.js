import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{t as i}from"./compiler-runtime-Ct8J1Lnh.js";import{t as a}from"./classnames-Bkdxq3RN.js";import{t as o}from"./ds-icon-BW3ZMuEi.js";import{t as s}from"./ds-icon-m9JGPUU6.js";import{Hn as c,Ht as l,Ir as u,Ln as d,Lr as f,Mr as p,O as m,Rt as h,S as g,Wn as _,Yn as v,_ as y,a as ee,b,c as te,cn as x,d as S,f as C,g as w,l as T,n as E,p as D,r as O,s as k,t as A,u as j,ur as M,v as ne,x as re,y as ie}from"./runtime-zmVWNNs9.js";import{a as ae,i as oe,s as se}from"./use-event-DY8gMPEe.js";import{n as ce,t as le}from"./use-field-context-Df5mDFAO.js";import{n as ue,t as de}from"./ds-typography-1pV-E5z0.js";var fe,N,pe=t((()=>{u(),fe=f(`switch`).parts(`root`,`label`,`control`,`thumb`),N=fe.build()})),me,he,ge,_e,P,ve,F,ye=t((()=>{me=e=>e.ids?.root??`switch:${e.id}`,he=e=>e.ids?.label??`switch:${e.id}:label`,ge=e=>e.ids?.thumb??`switch:${e.id}:thumb`,_e=e=>e.ids?.control??`switch:${e.id}:control`,P=e=>e.ids?.hiddenInput??`switch:${e.id}:input`,ve=e=>e.getById(me(e)),F=e=>e.getById(P(e))}));function be(e,t){let{context:n,send:r,prop:i,scope:a}=e,o=!!i(`disabled`),s=!!i(`readOnly`),c=!!i(`required`),u=!!n.get(`checked`),d=!o&&n.get(`focused`),f=!o&&n.get(`focusVisible`),m={"data-active":p(!o&&n.get(`active`)),"data-focus":p(d),"data-focus-visible":p(f),"data-readonly":p(s),"data-hover":p(n.get(`hovered`)),"data-disabled":p(o),"data-state":u?`checked`:`unchecked`,"data-invalid":p(i(`invalid`)),"data-required":p(c)};return{checked:u,disabled:o,focused:d,setChecked(e){r({type:`CHECKED.SET`,checked:e,isTrusted:!1})},toggleChecked(){r({type:`CHECKED.TOGGLE`,checked:u,isTrusted:!1})},getRootProps(){return t.label({...N.root.attrs,...m,dir:i(`dir`),id:me(a),htmlFor:P(a),onPointerMove(){o||r({type:`CONTEXT.SET`,context:{hovered:!0}})},onPointerLeave(){o||r({type:`CONTEXT.SET`,context:{hovered:!1}})},onClick(e){o||(v(e)===F(a)&&e.stopPropagation(),M()&&F(a)?.focus())}})},getLabelProps(){return t.element({...N.label.attrs,...m,dir:i(`dir`),id:he(a)})},getThumbProps(){return t.element({...N.thumb.attrs,...m,dir:i(`dir`),id:ge(a),"aria-hidden":!0})},getControlProps(){return t.element({...N.control.attrs,...m,dir:i(`dir`),id:_e(a),"aria-hidden":!0})},getHiddenInputProps(){return t.input({id:P(a),type:`checkbox`,required:i(`required`),defaultChecked:u,disabled:o,"aria-labelledby":he(a),"aria-invalid":i(`invalid`),name:i(`name`),form:i(`form`),value:i(`value`),style:l,onFocus(){let e=ae();r({type:`CONTEXT.SET`,context:{focused:!0,focusVisible:e}})},onBlur(){r({type:`CONTEXT.SET`,context:{focused:!1,focusVisible:!1}})},onClick(e){if(s){e.preventDefault();return}let t=e.currentTarget.checked;r({type:`CHECKED.SET`,checked:t,isTrusted:!0})}})}}}var xe=t((()=>{h(),oe(),pe(),ye()})),Se,Ce,we=t((()=>{b(),h(),oe(),ye(),{not:Se}=re(),Ce=g({props({props:e}){return{defaultChecked:!1,label:`switch`,value:`on`,...e}},initialState(){return`ready`},context({prop:e,bindable:t}){return{checked:t(()=>({defaultValue:e(`defaultChecked`),value:e(`checked`),onChange(t){e(`onCheckedChange`)?.({checked:t})}})),fieldsetDisabled:t(()=>({defaultValue:!1})),focusVisible:t(()=>({defaultValue:!1})),active:t(()=>({defaultValue:!1})),focused:t(()=>({defaultValue:!1})),hovered:t(()=>({defaultValue:!1}))}},computed:{isDisabled:({context:e,prop:t})=>t(`disabled`)||e.get(`fieldsetDisabled`)},watch({track:e,prop:t,context:n,action:r}){e([()=>t(`disabled`)],()=>{r([`removeFocusIfNeeded`])}),e([()=>n.get(`checked`)],()=>{r([`syncInputElement`])})},effects:[`trackFormControlState`,`trackPressEvent`,`trackFocusVisible`],on:{"CHECKED.TOGGLE":[{guard:Se(`isTrusted`),actions:[`toggleChecked`,`dispatchChangeEvent`]},{actions:[`toggleChecked`]}],"CHECKED.SET":[{guard:Se(`isTrusted`),actions:[`setChecked`,`dispatchChangeEvent`]},{actions:[`setChecked`]}],"CONTEXT.SET":{actions:[`setContext`]}},states:{ready:{}},implementations:{guards:{isTrusted:({event:e})=>!!e.isTrusted},effects:{trackPressEvent({computed:e,scope:t,context:n}){if(!e(`isDisabled`))return x({pointerNode:ve(t),keyboardNode:F(t),isValidKey:e=>e.key===` `,onPress:()=>n.set(`active`,!1),onPressStart:()=>n.set(`active`,!0),onPressEnd:()=>n.set(`active`,!1)})},trackFocusVisible({computed:e,scope:t}){if(!e(`isDisabled`))return se({root:t.getRootNode()})},trackFormControlState({context:e,send:t,scope:n}){return _(F(n),{onFieldsetDisabledChange(t){e.set(`fieldsetDisabled`,t)},onFormReset(){t({type:`CHECKED.SET`,checked:!!e.initial(`checked`),src:`form-reset`})}})}},actions:{setContext({context:e,event:t}){for(let n in t.context)e.set(n,t.context[n])},syncInputElement({context:e,scope:t}){let n=F(t);n&&c(n,!!e.get(`checked`))},removeFocusIfNeeded({context:e,prop:t}){t(`disabled`)&&e.set(`focused`,!1)},setChecked({context:e,event:t}){e.set(`checked`,t.checked)},toggleChecked({context:e}){e.set(`checked`,!e.get(`checked`))},dispatchChangeEvent({context:e,scope:t}){queueMicrotask(()=>{d(F(t),{checked:e.get(`checked`)})})}}}})})),Te=t((()=>{})),Ee=t((()=>{xe(),we(),Te()})),De,I,L=t((()=>{ie(),[De,I]=ne({name:`SwitchContext`,hookName:`useSwitchContext`,providerName:`<SwitchProvider />`})})),Oe,ke=t((()=>{L(),Oe=e=>e.children(I())})),Ae,je,Me,Ne=t((()=>{D(),L(),Ae=e(n(),1),O(),je=r(),Me=(0,Ae.forwardRef)((e,t)=>{let n=m(I().getControlProps(),e);return(0,je.jsx)(C.span,{...n,ref:t})}),Me.displayName=`SwitchControl`})),Pe,Fe,Ie,Le=t((()=>{D(),le(),L(),Pe=e(n(),1),O(),Fe=r(),Ie=(0,Pe.forwardRef)((e,t)=>{let n=m(I().getHiddenInputProps(),e),r=ce();return(0,Fe.jsx)(C.input,{"aria-describedby":r?.ariaDescribedby,...n,ref:t})}),Ie.displayName=`SwitchHiddenInput`})),Re,ze,Be,Ve=t((()=>{D(),L(),Re=e(n(),1),O(),ze=r(),Be=(0,Re.forwardRef)((e,t)=>{let n=m(I().getLabelProps(),e);return(0,ze.jsx)(C.span,{...n,ref:t})}),Be.displayName=`SwitchLabel`})),He,Ue,We=t((()=>{j(),te(),le(),Ee(),He=e(n(),1),O(),Ue=e=>{let t=(0,He.useId)(),{getRootNode:n}=S(),{dir:r}=T(),i=ce(),a={id:t,ids:{label:i?.ids.label,hiddenInput:i?.ids.control},dir:r,disabled:i?.disabled,readOnly:i?.readOnly,invalid:i?.invalid,required:i?.required,getRootNode:n,...e};return be(k(Ce,a),ee)}})),Ge,Ke,qe,Je,Ye=t((()=>{y(),D(),L(),We(),Ge=e(n(),1),O(),Ke=r(),qe=w(),Je=(0,Ge.forwardRef)((e,t)=>{let[n,r]=qe(e,[`checked`,`defaultChecked`,`disabled`,`form`,`id`,`ids`,`invalid`,`label`,`name`,`onCheckedChange`,`readOnly`,`required`,`value`]),i=Ue(n),a=m(i.getRootProps(),r);return(0,Ke.jsx)(De,{value:i,children:(0,Ke.jsx)(C.label,{...a,ref:t})})}),Je.displayName=`SwitchRoot`})),Xe,Ze,Qe,$e,et=t((()=>{y(),D(),L(),Xe=e(n(),1),O(),Ze=r(),Qe=w(),$e=(0,Xe.forwardRef)((e,t)=>{let[{value:n},r]=Qe(e,[`value`]),i=m(n.getRootProps(),r);return(0,Ze.jsx)(De,{value:n,children:(0,Ze.jsx)(C.label,{...i,ref:t})})}),$e.displayName=`SwitchRootProvider`})),tt,nt,rt,it=t((()=>{D(),L(),tt=e(n(),1),O(),nt=r(),rt=(0,tt.forwardRef)((e,t)=>{let n=m(I().getThumbProps(),e);return(0,nt.jsx)(C.span,{...n,ref:t})}),rt.displayName=`SwitchThumb`})),R,at=t((()=>{E(),ke(),Ne(),Le(),Ve(),Ye(),et(),it(),R=A({Context:()=>Oe,Control:()=>Me,HiddenInput:()=>Ie,Label:()=>Be,Root:()=>Je,RootProvider:()=>$e,Thumb:()=>rt})})),ot=t((()=>{at()})),st,ct,lt,ut,dt,ft,z,pt=t((()=>{st=`_root_1vu2r_1`,ct=`_small_1vu2r_14`,lt=`_iconCheck_1vu2r_44`,ut=`_iconClose_1vu2r_47`,dt=`_labelInfo_1vu2r_105`,ft=`_icon_1vu2r_44`,z={root:st,small:ct,iconCheck:lt,iconClose:ut,labelInfo:dt,icon:ft}})),mt,B,V,H,ht=t((()=>{mt=i(),ot(),B=e(a(),1),pt(),s(),de(),V=r(),H=e=>{let t=(0,mt.c)(48),n,r,i,a,s,c,l,u,d,f,p,m;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],d=t[9],f=t[10],p=t[11],m=t[12]):({ref:d,label:a,name:c,labelInfo:s,className:i,style:p,onChange:l,onValueChange:u,size:m,children:r,checked:n,...f}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=s,t[6]=c,t[7]=l,t[8]=u,t[9]=d,t[10]=f,t[11]=p,t[12]=m);let h;t[13]===p?h=t[14]:(h=p===void 0?{}:p,t[13]=p,t[14]=h);let g=h,_=(m===void 0?`default`:m)===`small`,v=_?`tiny`:`small`,y;t[15]===Symbol.for(`react.memo_cache_sentinel`)?(y=(0,B.default)(z.icon,z.iconCheck),t[15]=y):y=t[15];let ee=y,b;t[16]===Symbol.for(`react.memo_cache_sentinel`)?(b=(0,B.default)(z.icon,z.iconClose),t[16]=b):b=t[16];let te=b,x;t[17]!==i||t[18]!==_?(x=(0,B.default)(z.root,{[z.small]:_},i),t[17]=i,t[18]=_,t[19]=x):x=t[19];let S=x,C;t[20]===u?C=t[21]:(C=e=>{u?.(e.checked)},t[20]=u,t[21]=C);let w=C,T=d,E;t[22]===v?E=t[23]:(E=(0,V.jsx)(o,{icon:`check`,size:v,className:ee}),t[22]=v,t[23]=E);let D;t[24]===Symbol.for(`react.memo_cache_sentinel`)?(D=(0,V.jsx)(R.Thumb,{}),t[24]=D):D=t[24];let O;t[25]===v?O=t[26]:(O=(0,V.jsx)(o,{icon:`close`,size:v,className:te}),t[25]=v,t[26]=O);let k;t[27]!==O||t[28]!==E?(k=(0,V.jsxs)(R.Control,{children:[E,D,O]}),t[27]=O,t[28]=E,t[29]=k):k=t[29];let A;t[30]!==r||t[31]!==_||t[32]!==a||t[33]!==s?(A=a?(0,V.jsxs)(R.Label,{children:[(0,V.jsx)(ue,{variant:_?`body-xs-md`:`body-sm-md`,children:a}),!!s&&(0,V.jsx)(ue,{variant:`body-xs-reg`,className:z.labelInfo,children:s})]}):r,t[30]=r,t[31]=_,t[32]=a,t[33]=s,t[34]=A):A=t[34];let j;t[35]===Symbol.for(`react.memo_cache_sentinel`)?(j=(0,V.jsx)(R.HiddenInput,{}),t[35]=j):j=t[35];let M;return t[36]!==n||t[37]!==w||t[38]!==a||t[39]!==c||t[40]!==l||t[41]!==f||t[42]!==S||t[43]!==g||t[44]!==k||t[45]!==A||t[46]!==T?(M=(0,V.jsxs)(R.Root,{ref:T,style:g,className:S,label:a,checked:n,name:c,onCheckedChange:w,onClick:l,...f,children:[k,A,j]}),t[36]=n,t[37]=w,t[38]=a,t[39]=c,t[40]=l,t[41]=f,t[42]=S,t[43]=g,t[44]=k,t[45]=A,t[46]=T,t[47]=M):M=t[47],M},H.displayName=`DsToggle`})),gt,_t=t((()=>{gt=[`default`,`small`]})),vt,U,W,G,yt,K,bt,q,J,Y,X,Z,Q,$,xt;t((()=>{vt=e(n(),1),ht(),_t(),U=r(),{expect:W,userEvent:G,waitFor:yt,within:K}=__STORYBOOK_MODULE_TEST__,bt={title:`Components/Toggle`,component:H,parameters:{layout:`centered`},argTypes:{checked:{control:`boolean`,description:`Whether it's checked or not`},label:{control:`text`,description:`The label text to display next to the toggle`},labelInfo:{control:`text`,description:`The label info text to display below the label`},size:{control:`select`,options:gt,description:`Size of the toggle`},disabled:{control:`boolean`,description:`Whether the toggle is disabled`},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},onChange:{table:{disable:!0},control:!1},onValueChange:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},q=`Text for label`,J=`Text for info`,Y={args:{label:q,labelInfo:J,className:`custom-toggle`},play:async({canvasElement:e})=>{let t=K(e),n=t.getByRole(`checkbox`,{name:/Text for label/});await W(n).toBeInTheDocument(),await W(n).not.toBeChecked(),await W(t.getByText(J)).toBeInTheDocument(),await G.click(n),await yt(async()=>{await W(n).toBeChecked()})}},X={render:function(){let[e,t]=(0,vt.useState)(!0);return(0,U.jsx)(H,{label:q,labelInfo:J,checked:e,onValueChange:t})},play:async({canvasElement:e})=>{let t=K(e).getByRole(`checkbox`,{name:/Text for label/});await W(t).toBeInTheDocument(),await W(t).toBeChecked(),await G.click(t),await W(t).not.toBeChecked()}},Z={render:function(){return(0,U.jsx)(H,{label:q,labelInfo:J,size:`small`})}},Q={args:{label:q,labelInfo:J,disabled:!0},play:async({canvasElement:e})=>{let t=K(e),n=t.getByRole(`checkbox`,{name:/Text for label/});await W(n).toBeInTheDocument(),await W(n).toBeDisabled(),await W(n).not.toBeChecked(),await W(t.getByText(J)).toBeInTheDocument(),await G.click(n,{pointerEventsCheck:0}),await W(n).not.toBeChecked(),await W(n).toBeDisabled()}},$={render:function(){return(0,U.jsx)(H,{size:`small`,children:(0,U.jsx)(`span`,{style:{color:`red`},children:`Custom label totally!`})})},args:{label:q,labelInfo:J,disabled:!0},play:async({canvasElement:e})=>{let t=K(e).getByRole(`checkbox`,{name:`Custom label totally!`});await W(t).toBeInTheDocument(),await W(t).not.toBeChecked(),await G.click(t),await yt(async()=>{await W(t).toBeChecked()})}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    className: 'custom-toggle'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: /Text for label/
    });
    await expect(toggle).toBeInTheDocument();
    await expect(toggle).not.toBeChecked();
    await expect(canvas.getByText(labelInfo)).toBeInTheDocument();
    await userEvent.click(toggle);
    await waitFor(async () => {
      await expect(toggle).toBeChecked();
    });
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [checked, setChecked] = useState(true);
    return <DsToggle label={label} labelInfo={labelInfo} checked={checked} onValueChange={setChecked} />;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: /Text for label/
    });
    await expect(toggle).toBeInTheDocument();

    // Starts checked (controlled via props)
    await expect(toggle).toBeChecked();
    await userEvent.click(toggle);
    await expect(toggle).not.toBeChecked();
  }
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DsToggle label={label} labelInfo={labelInfo} size="small" />;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    label,
    labelInfo,
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: /Text for label/
    });
    await expect(toggle).toBeInTheDocument();

    // Disabled checkbox
    await expect(toggle).toBeDisabled();
    await expect(toggle).not.toBeChecked();
    await expect(canvas.getByText(labelInfo)).toBeInTheDocument();
    await userEvent.click(toggle, {
      pointerEventsCheck: 0
    });

    // State should remain unchanged
    await expect(toggle).not.toBeChecked();
    await expect(toggle).toBeDisabled();
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    return <DsToggle size="small">
                <span style={{
        color: 'red'
      }}>
                    Custom label totally!
                </span>
            </DsToggle>;
  },
  args: {
    label,
    labelInfo,
    disabled: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const toggle = canvas.getByRole('checkbox', {
      name: 'Custom label totally!'
    });
    await expect(toggle).toBeInTheDocument();
    await expect(toggle).not.toBeChecked();
    await userEvent.click(toggle);
    await waitFor(async () => {
      await expect(toggle).toBeChecked();
    });
  }
}`,...$.parameters?.docs?.source}}},xt=[`Default`,`Controlled`,`Small`,`Disabled`,`ChildrenCustomLabels`]}))();export{$ as ChildrenCustomLabels,X as Controlled,Y as Default,Q as Disabled,Z as Small,xt as __namedExportsOrder,bt as default};