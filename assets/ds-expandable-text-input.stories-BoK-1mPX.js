import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-CCq6bv3x.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{i as a}from"./ds-icon.types-DO-j-_np.js";import{t as o}from"./ds-icon-BdpcGtWb.js";import{n as s,t as c}from"./ds-button-DTe3MvSO.js";import{n as l,r as u}from"./ds-text-input.types--S9JnRD6.js";import{t as d}from"./ds-text-input-DBo7TxWw.js";import{n as f,t as p}from"./merge-refs-WLAYJAaZ.js";import{t as m}from"./filters-DB1rWuMZ.js";import{n as h,t as g}from"./ds-table-BIxG3WfU.js";var _,v,y,b,x,S,C,w=t((()=>{_=`_expandableInput_14f8h_1`,v=`_expanded_14f8h_5`,y=`_trigger_14f8h_9`,b=`_clearTrigger_14f8h_28`,x=`_dirty_14f8h_34`,S=`_inputExpander_14f8h_38`,C={expandableInput:_,expanded:v,trigger:y,clearTrigger:b,dirty:x,inputExpander:S}}));function T({onClear:e,onExpandChange:t,icon:n,size:r,...i}){let o=!!(i.value??i.defaultValue),[c,l]=(0,D.useState)(o),[d,p]=(0,D.useState)(o),m=(0,D.useRef)(null),h=e=>{l(e),t?.(e),e||p(!1)},g=r===`small`?`tiny`:`small`;return(0,k.jsx)(u,{...i,size:r,ref:f(m,i.ref),tabIndex:c?0:-1,className:(0,O.default)(i.className,C.expandableInput,c&&C.expanded,d&&C.dirty),onChange:e=>{i.onChange?.(e),p(!!e.target.value)},onBlur:e=>{i.onBlur?.(e),(i.value??m.current?.value)||h(!1)},slots:{inputWrapper:E,startAdornment:(0,k.jsx)(`button`,{type:`button`,className:C.trigger,"aria-label":`Open text input`,"aria-hidden":c,tabIndex:c?-1:0,onClick:()=>{i.disabled||(h(!0),m.current?.focus())},children:(0,k.jsx)(a,{icon:n,size:`small`})}),endAdornment:(0,k.jsx)(s,{design:`v1.2`,size:g,buttonType:`tertiary`,variant:`filled`,className:C.clearTrigger,onClick:()=>{h(!1),m.current&&(m.current.blur(),m.current.value=``),e?.()},children:`Clear`})}})}function E({children:e}){return(0,k.jsx)(`div`,{className:C.inputExpander,children:e})}var D,O,k,A=t((()=>{D=e(n(),1),d(),o(),O=e(i(),1),w(),p(),c(),k=r(),T.__docgenInfo={description:``,methods:[],displayName:`DsExpandableTextInput`,props:{icon:{required:!0,tsType:{name:`union`,raw:`IconName | FunctionComponent<SVGProps<SVGSVGElement>>`,elements:[{name:`union`,raw:`MaterialIconName | CustomIconName`,elements:[{name:`unknown`},{name:`unknown`}]},{name:`FunctionComponent`,elements:[{name:`SVGProps`,elements:[{name:`SVGSVGElement`}],raw:`SVGProps<SVGSVGElement>`}],raw:`FunctionComponent<SVGProps<SVGSVGElement>>`}]},description:`The icon to display inside the expandable input trigger button`},onClear:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Callback fired when the clear action is triggered`},onExpandChange:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(expanded: boolean) => void`,signature:{arguments:[{type:{name:`boolean`},name:`expanded`}],return:{name:`void`}}},description:`Callback fired when the expanded state changes`}},composes:[`Omit`]}})),j=t((()=>{})),M=t((()=>{m(),h(),j()})),N,P,F,I,L,R,z,B,V,H,U,W,G;t((()=>{A(),d(),N=e(n(),1),M(),c(),P=r(),F={title:`Design System/ExpandableTextInput`,component:T,parameters:{layout:`centered`,docs:{description:{component:`An expandable animated text input`}}},argTypes:{size:{control:{type:`select`},options:l,description:`The size of the input field`},onExpandChange:{action:`expand change`},disabled:{control:`boolean`,description:`Whether the input is disabled`},placeholder:{control:`text`,description:`The placeholder text`}}},I={args:{icon:`search`}},L={args:{icon:`search`,size:`small`}},R={args:{icon:`search_insights`}},z={args:{icon:`search`,placeholder:`Type to search`}},B={args:{value:`query`},render:function(e){let[t,n]=(0,N.useState)(e.value);return(0,P.jsx)(T,{icon:`search`,value:t,onChange:e=>n(e.target.value),onClear:()=>n(``)})}},V={args:{icon:`search`,defaultValue:`initial search`}},H=[{accessorKey:`firstName`,header:`First Name`,cell:e=>e.getValue()},{accessorKey:`lastName`,header:`Last Name`,cell:e=>e.getValue()},{accessorKey:`age`,header:`Age`,cell:e=>e.getValue()}],U=[{id:`1`,firstName:`Tanner`,lastName:`Linsley`,age:33},{id:`2`,firstName:`Kevin`,lastName:`Fine`,age:28},{id:`3`,firstName:`John`,lastName:`Doe`,age:45},{id:`4`,firstName:`Jane`,lastName:`Smith`,age:30},{id:`5`,firstName:`Peter`,lastName:`Jones`,age:22}],W={render:function(){let[e,t]=(0,N.useState)(``);return(0,P.jsxs)(`div`,{style:{width:`500px`},children:[(0,P.jsxs)(`div`,{style:{marginBottom:`20px`,display:`flex`,justifyContent:`end`,gap:`8px`},children:[(0,P.jsx)(T,{icon:`search`,placeholder:`Type to search...`,value:e,onChange:e=>t(e.target.value),onClear:()=>t(``)}),(0,P.jsx)(s,{size:`small`,children:`Click`})]}),(0,P.jsx)(g,{columns:H,data:U,columnFilters:[{id:`firstName`,value:e}]})]})}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search'
  }
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    size: 'small'
  }
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search_insights'
  }
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    placeholder: 'Type to search'
  }
}`,...z.parameters?.docs?.source}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  args: {
    value: 'query'
  },
  render: function Render(args) {
    const [value, setValue] = useState(args.value);
    return <DsExpandableTextInput icon="search" value={value} onChange={e => setValue(e.target.value)} onClear={() => setValue('')} />;
  }
}`,...B.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'search',
    defaultValue: 'initial search'
  }
}`,...V.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [search, setSearch] = useState('');
    return <div style={{
      width: '500px'
    }}>
                <div style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'end',
        gap: '8px'
      }}>
                    <DsExpandableTextInput icon="search" placeholder="Type to search..." value={search} onChange={e => setSearch(e.target.value)} onClear={() => setSearch('')} />

                    <DsButton size="small">Click</DsButton>
                </div>
                <DsTable columns={columns} data={people} columnFilters={[{
        id: 'firstName',
        value: search
      }]} />
            </div>;
  }
}`,...W.parameters?.docs?.source}}},G=[`Default`,`SmallSize`,`CustomIcon`,`Placeholder`,`Controlled`,`DefaultValue`,`WithTable`]}))();export{B as Controlled,R as CustomIcon,I as Default,V as DefaultValue,z as Placeholder,L as SmallSize,W as WithTable,G as __namedExportsOrder,F as default};