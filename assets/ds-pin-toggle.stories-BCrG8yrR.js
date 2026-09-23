import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-CIo2UmkR.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-icon-DGGihbrn.js";import{n as c,t as l}from"./ds-stack-DBH-wF-7.js";var u,d;function f(){return(f=t((()=>{u=`_root_z5j36_1`,d={root:u}})))()}var p,m,h,g,_;function v(){return(v=t((()=>{p=i(),m=e(a(),1),f(),s(),h=r(),g=Object.freeze({pin:`Pin`}),_=e=>{let t=(0,p.c)(27),n,r,i,a,s,c,l,u,f,_;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],s=t[5],c=t[6],l=t[7],u=t[8],f=t[9],_=t[10]):({ref:c,className:n,style:u,itemLabel:r,pinned:f,disabled:_,locale:i,onPinnedChange:s,onClick:a,...l}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=s,t[6]=c,t[7]=l,t[8]=u,t[9]=f,t[10]=_);let v=f!==void 0&&f,y=_!==void 0&&_,b=`${i?.pin??g.pin} ${r}`,x;t[11]===n?x=t[12]:(x=(0,m.default)(d.root,n),t[11]=n,t[12]=x);let S;t[13]!==a||t[14]!==s||t[15]!==v?(S=e=>{a?.(e),s?.(!v)},t[13]=a,t[14]=s,t[15]=v,t[16]=S):S=t[16];let C;t[17]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,h.jsx)(o,{icon:`keep`,size:`tiny`,variant:`rounded`,filled:!0,"aria-hidden":!0}),t[17]=C):C=t[17];let w;return t[18]!==y||t[19]!==v||t[20]!==c||t[21]!==l||t[22]!==u||t[23]!==b||t[24]!==x||t[25]!==S?(w=(0,h.jsx)(`button`,{...l,ref:c,type:`button`,disabled:y,"aria-pressed":v,"aria-label":b,className:x,style:u,onClick:S,children:C}),t[18]=y,t[19]=v,t[20]=c,t[21]=l,t[22]=u,t[23]=b,t[24]=x,t[25]=S,t[26]=w):w=t[26],w},_.displayName=`DsPinToggle`})))()}function y(){return(y=t((()=>{v()})))()}var b,x,S,C,w,T,E,D,O;function k(){return(k=t((()=>{b=n(),y(),c(),x=r(),S={title:`Components/PinToggle`,component:_,parameters:{layout:`centered`},argTypes:{itemLabel:{control:`text`,description:"Row name composed into the accessible name as `Pin {itemLabel}`"},pinned:{control:`boolean`,description:"Controlled pinned state, reported as `aria-pressed`"},disabled:{control:`boolean`,description:`Disables the pin, preventing user interaction`},locale:{control:!1,description:"Override for the `Pin` verb in the accessible name"},onPinnedChange:{description:"Called on activation with the negation of `pinned`"},className:{table:{disable:!0},control:!1},style:{table:{disable:!0},control:!1},ref:{table:{disable:!0},control:!1}}},C={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,b.useState)(!1);return(0,x.jsx)(_,{itemLabel:`Notifications`,pinned:e,onPinnedChange:t})}},w={args:{itemLabel:`Notifications`,pinned:!0}},T={args:{itemLabel:`Notifications`,pinned:!0,disabled:!0}},E={args:{itemLabel:`Notifications`,locale:{pin:`Keep`}}},D={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,x.jsxs)(l,{direction:`row`,gap:`var(--xs)`,children:[(0,x.jsx)(_,{itemLabel:`unpinned row`}),(0,x.jsx)(_,{itemLabel:`pinned row`,pinned:!0}),(0,x.jsx)(_,{itemLabel:`disabled row`,disabled:!0}),(0,x.jsx)(_,{itemLabel:`disabled pinned row`,pinned:!0,disabled:!0})]})},O=[`Default`,`Pinned`,`Disabled`,`Localized`,`States`],C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [pinned, setPinned] = useState(false);
    return <DsPinToggle itemLabel="Notifications" pinned={pinned} onPinnedChange={setPinned} />;
  }
}`,...C.parameters?.docs?.source}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  args: {
    itemLabel: 'Notifications',
    pinned: true
  }
}`,...w.parameters?.docs?.source}}},T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  args: {
    itemLabel: 'Notifications',
    pinned: true,
    disabled: true
  }
}`,...T.parameters?.docs?.source}}},E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  args: {
    itemLabel: 'Notifications',
    locale: {
      pin: 'Keep'
    }
  }
}`,...E.parameters?.docs?.source}}},D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="row" gap="var(--xs)">
            <DsPinToggle itemLabel="unpinned row" />
            <DsPinToggle itemLabel="pinned row" pinned />
            <DsPinToggle itemLabel="disabled row" disabled />
            <DsPinToggle itemLabel="disabled pinned row" pinned disabled />
        </DsStack>
}`,...D.parameters?.docs?.source}}}})))()}k();export{C as Default,T as Disabled,E as Localized,w as Pinned,D as States,O as __namedExportsOrder,S as default};