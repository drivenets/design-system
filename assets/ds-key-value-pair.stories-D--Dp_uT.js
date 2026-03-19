import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-1UwOlSWK.js";import{t as r}from"./jsx-runtime-6sF1Ejqi.js";import{t as i}from"./classnames-Ce489xFf.js";import{i as a}from"./ds-icon.types-DfRGdZ8f.js";import{t as o}from"./ds-icon-C6ILb6x3.js";import{t as s}from"./ds-typography-DI6mMftn.js";import{t as c}from"./ds-typography-no8iUrhx.js";import{t as l}from"./ds-tooltip-BwXKwLvV.js";import{t as ee}from"./ds-tooltip-6yFcOmfy.js";import{r as u}from"./ds-text-input.types-B_bl-WkP.js";import{t as te}from"./ds-text-input-CwA2aeIW.js";import{t as ne}from"./ds-textarea-C1VK5kwA.js";import{t as re}from"./ds-textarea-Dh1Bge8O.js";import{i as d}from"./ds-tag.types-3vvzpg_I.js";import{t as ie}from"./ds-tag-oiSIH-Yk.js";import{t as f}from"./ds-select-DJk8WcYZ.js";import{t as ae}from"./ds-select-Db-KPtmc.js";var p,m,h,g,_,v,oe=t((()=>{p=`_root_jvtyx_1`,m=`_label_jvtyx_17`,h=`_valueContainer_jvtyx_30`,g=`_valueDisplay_jvtyx_41`,_=`_editorSlot_jvtyx_51`,v={root:p,label:m,valueContainer:h,valueDisplay:g,editorSlot:_}})),y,b,x,se=t((()=>{y=e(i(),1),c(),oe(),b=r(),x=({ref:e,keyLabel:t,value:n,readOnly:r=!1,orientation:i=`vertical`,editInput:a,className:o,style:c})=>{let l=!r&&!!a;return(0,b.jsxs)(`div`,{ref:e,className:(0,y.default)(v.root,o),"data-orientation":i,"data-readonly":r||void 0,style:c,children:[(0,b.jsx)(s,{variant:`body-sm-md`,className:v.label,children:t}),(0,b.jsxs)(`div`,{className:v.valueContainer,tabIndex:l?0:void 0,"data-editable":l||void 0,children:[(0,b.jsx)(s,{variant:`body-sm-reg`,asChild:!0,children:(0,b.jsx)(`div`,{className:v.valueDisplay,children:n})}),l&&(0,b.jsx)(`div`,{className:v.editorSlot,children:a})]})]})},x.__docgenInfo={description:``,methods:[],displayName:`DsKeyValuePair`,props:{keyLabel:{required:!0,tsType:{name:`ReactNode`},description:``},value:{required:!1,tsType:{name:`ReactNode`},description:`Shown when the editor is not active (read-only or not hovered).`},readOnly:{required:!1,tsType:{name:`boolean`},description:`@default false`,defaultValue:{value:`false`,computed:!1}},orientation:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof dsKeyValuePairOrientations)[number]`},description:`@default 'vertical'`,defaultValue:{value:`'vertical'`,computed:!1}},editInput:{required:!1,tsType:{name:`ReactNode`},description:`Editor content revealed on hover/focus when not read-only.`},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLDivElement`}],raw:`Ref<HTMLDivElement>`},description:``},className:{required:!1,tsType:{name:`string`},description:``},style:{required:!1,tsType:{name:`CSSProperties`},description:``}}}})),S,ce=t((()=>{S=[`vertical`,`horizontal`]})),C,w,T,E,D,O,k,A,j,M,N,P,F,I,L,le=t((()=>{C=`_editableVerticalDemo_6opwz_1`,w=`_editableHorizontalDemo_6opwz_5`,T=`_narrowInput_6opwz_9`,E=`_mediumInput_6opwz_13`,D=`_descriptionTextarea_6opwz_17`,O=`_valueWithIcon_6opwz_21`,k=`_iconLabel_6opwz_27`,A=`_pairsColumn_6opwz_33`,j=`_responsiveDemo_6opwz_40`,M=`_responsiveSlider_6opwz_46`,N=`_responsiveSliderInput_6opwz_55`,P=`_responsivePairs_6opwz_59`,F=`_statusBadge_6opwz_68`,I=`_tagGroup_6opwz_80`,L={editableVerticalDemo:C,editableHorizontalDemo:w,narrowInput:T,mediumInput:E,descriptionTextarea:D,valueWithIcon:O,iconLabel:k,pairsColumn:A,responsiveDemo:j,responsiveSlider:M,responsiveSliderInput:N,responsivePairs:P,statusBadge:F,tagGroup:I}})),R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,ue,$,de;t((()=>{R=e(n(),1),se(),ce(),te(),re(),ae(),o(),ie(),ee(),le(),z=r(),B=[{label:`Cisco Systems`,value:`cisco`},{label:`Juniper Networks`,value:`juniper`},{label:`Arista Networks`,value:`arista`},{label:`Nokia`,value:`nokia`}],V={title:`Design System/KeyValuePair`,component:x,parameters:{layout:`centered`},argTypes:{orientation:{control:`select`,options:S},readOnly:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},H={args:{keyLabel:`Start time`,value:`2024-05-23 16:47`,readOnly:!0,orientation:`vertical`}},U={args:{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}},W={args:{keyLabel:(0,z.jsxs)(`span`,{className:L.iconLabel,children:[(0,z.jsx)(a,{icon:`info`,size:`tiny`}),`Serial Number`]}),value:`99887766`,readOnly:!0,orientation:`horizontal`}},G={render:function(){let[e,t]=(0,R.useState)(`99887766`);return(0,z.jsx)(x,{keyLabel:`Serial Number`,value:e,orientation:`vertical`,className:L.editableVerticalDemo,editInput:(0,z.jsx)(u,{value:e,onValueChange:t,size:`small`})})}},K={render:function(){let[e,t]=(0,R.useState)(`Cisco RTR-X2000`);return(0,z.jsx)(x,{keyLabel:`Model`,value:e,orientation:`horizontal`,className:L.editableHorizontalDemo,editInput:(0,z.jsx)(u,{value:e,onValueChange:t,size:`small`})})}},q={name:`Editable with trailing icon + tooltip`,render:function(){let[e,t]=(0,R.useState)(`Editable value`);return(0,z.jsx)(x,{keyLabel:`Editable`,orientation:`horizontal`,className:L.editableHorizontalDemo,value:(0,z.jsxs)(`span`,{className:L.valueWithIcon,children:[e,(0,z.jsx)(l,{content:`Additional info about this field`,children:(0,z.jsx)(a,{icon:`info`,size:`tiny`})})]}),editInput:(0,z.jsxs)(`span`,{className:L.valueWithIcon,children:[(0,z.jsx)(u,{value:e,onValueChange:t,size:`small`,className:L.mediumInput}),(0,z.jsx)(l,{content:`Additional info about this field`,children:(0,z.jsx)(a,{icon:`info`,size:`tiny`})})]})})}},J={render:function(){let[e,t]=(0,R.useState)(`99887766`),[n,r]=(0,R.useState)(`cisco`);return(0,z.jsxs)(`div`,{className:L.pairsColumn,children:[(0,z.jsx)(x,{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}),(0,z.jsx)(x,{keyLabel:`SN`,value:e,orientation:`horizontal`,editInput:(0,z.jsx)(u,{value:e,onValueChange:t,size:`small`,className:L.narrowInput})}),(0,z.jsx)(x,{keyLabel:`Model`,value:`Cisco RTR-X2000`,readOnly:!0,orientation:`horizontal`}),(0,z.jsx)(x,{keyLabel:`MFR`,value:B.find(e=>e.value===n)?.label??n,orientation:`horizontal`,editInput:(0,z.jsx)(f,{options:B,value:n,onValueChange:r,size:`small`})})]})}},Y=200,X=700,Z=400,Q={name:`Responsive container width`,render:function(){let[e,t]=(0,R.useState)(Z),[n,r]=(0,R.useState)(`99887766`);return(0,z.jsxs)(`div`,{className:L.responsiveDemo,children:[(0,z.jsxs)(`div`,{className:L.responsiveSlider,children:[(0,z.jsxs)(`span`,{children:[Y,`px`]}),(0,z.jsx)(`input`,{type:`range`,min:Y,max:X,value:e,onChange:e=>t(Number(e.target.value)),className:L.responsiveSliderInput}),(0,z.jsxs)(`span`,{children:[X,`px`]}),(0,z.jsxs)(`span`,{children:[`(`,e,`px)`]})]}),(0,z.jsxs)(`div`,{className:L.responsivePairs,style:{width:e},children:[(0,z.jsx)(x,{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}),(0,z.jsx)(x,{keyLabel:`Serial Number`,value:n,orientation:`horizontal`,editInput:(0,z.jsx)(u,{value:n,onValueChange:r,size:`small`,className:L.narrowInput})}),(0,z.jsx)(x,{keyLabel:`Model`,value:`Cisco RTR-X2000`,readOnly:!0,orientation:`horizontal`}),(0,z.jsx)(x,{keyLabel:`Firmware Version`,value:`v4.2.1-build.2847`,readOnly:!0,orientation:`horizontal`})]})]})}},ue=`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.`,$={name:`Value types (Figma reference)`,render:function(){let[e,t]=(0,R.useState)(`Editable value`),[n,r]=(0,R.useState)(`cisco`),[i,o]=(0,R.useState)(ue),[s,c]=(0,R.useState)(``);return(0,z.jsxs)(`div`,{className:L.pairsColumn,children:[(0,z.jsx)(x,{keyLabel:`Read-only`,value:`Read only value`,readOnly:!0,orientation:`horizontal`}),(0,z.jsx)(x,{keyLabel:`Editable`,value:e,orientation:`horizontal`,editInput:(0,z.jsx)(u,{value:e,onValueChange:t,size:`small`,className:L.mediumInput})}),(0,z.jsx)(x,{keyLabel:`MFR`,value:B.find(e=>e.value===n)?.label??n,orientation:`horizontal`,editInput:(0,z.jsx)(f,{options:B,value:n,onValueChange:r,size:`small`})}),(0,z.jsx)(x,{keyLabel:`Status`,value:(0,z.jsxs)(`span`,{className:L.statusBadge,children:[(0,z.jsx)(a,{icon:`check_circle`,size:`tiny`}),`Active`]}),readOnly:!0,orientation:`horizontal`}),(0,z.jsx)(x,{keyLabel:`Tags`,value:(0,z.jsxs)(`span`,{className:L.tagGroup,children:[(0,z.jsx)(d,{label:`Tag-name`,size:`small`}),(0,z.jsx)(d,{label:`Tag-name`,size:`small`}),(0,z.jsx)(d,{label:`Tag-name`,size:`small`})]}),readOnly:!0,orientation:`horizontal`}),(0,z.jsx)(x,{keyLabel:`Description`,value:i,orientation:`horizontal`,editInput:(0,z.jsx)(ne,{value:i,onValueChange:o,rows:4,className:L.descriptionTextarea})}),(0,z.jsx)(x,{keyLabel:`Empty Value`,value:s||void 0,orientation:`horizontal`,editInput:(0,z.jsx)(u,{value:s,onValueChange:c,size:`small`})})]})}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  args: {
    keyLabel: 'Start time',
    value: '2024-05-23 16:47',
    readOnly: true,
    orientation: 'vertical'
  }
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  args: {
    keyLabel: 'MAC',
    value: '00:1A:2B:3C:4D:5E',
    readOnly: true,
    orientation: 'horizontal'
  }
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  args: {
    keyLabel: <span className={storyStyles.iconLabel}>
                <DsIcon icon="info" size="tiny" />
                Serial Number
            </span>,
    value: '99887766',
    readOnly: true,
    orientation: 'horizontal'
  }
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [serial, setSerial] = useState('99887766');
    return <DsKeyValuePair keyLabel="Serial Number" value={serial} orientation="vertical" className={storyStyles.editableVerticalDemo} editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" />} />;
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [model, setModel] = useState('Cisco RTR-X2000');
    return <DsKeyValuePair keyLabel="Model" value={model} orientation="horizontal" className={storyStyles.editableHorizontalDemo} editInput={<DsTextInput value={model} onValueChange={setModel} size="small" />} />;
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Editable with trailing icon + tooltip',
  render: function Render() {
    const [val, setVal] = useState('Editable value');
    return <DsKeyValuePair keyLabel="Editable" orientation="horizontal" className={storyStyles.editableHorizontalDemo} value={<span className={storyStyles.valueWithIcon}>
                        {val}
                        <DsTooltip content="Additional info about this field">
                            <DsIcon icon="info" size="tiny" />
                        </DsTooltip>
                    </span>} editInput={<span className={storyStyles.valueWithIcon}>
                        <DsTextInput value={val} onValueChange={setVal} size="small" className={storyStyles.mediumInput} />
                        <DsTooltip content="Additional info about this field">
                            <DsIcon icon="info" size="tiny" />
                        </DsTooltip>
                    </span>} />;
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [serial, setSerial] = useState('99887766');
    const [manufacturer, setManufacturer] = useState('cisco');
    return <div className={storyStyles.pairsColumn}>
                <DsKeyValuePair keyLabel="MAC" value="00:1A:2B:3C:4D:5E" readOnly orientation="horizontal" />
                <DsKeyValuePair keyLabel="SN" value={serial} orientation="horizontal" editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" className={storyStyles.narrowInput} />} />
                <DsKeyValuePair keyLabel="Model" value="Cisco RTR-X2000" readOnly orientation="horizontal" />
                <DsKeyValuePair keyLabel="MFR" value={MANUFACTURER_OPTIONS.find(o => o.value === manufacturer)?.label ?? manufacturer} orientation="horizontal" editInput={<DsSelect options={MANUFACTURER_OPTIONS} value={manufacturer} onValueChange={setManufacturer} size="small" />} />
            </div>;
  }
}`,...J.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Responsive container width',
  render: function Render() {
    const [width, setWidth] = useState(DEFAULT_WIDTH);
    const [serial, setSerial] = useState('99887766');
    return <div className={storyStyles.responsiveDemo}>
                <div className={storyStyles.responsiveSlider}>
                    <span>{MIN_WIDTH}px</span>
                    <input type="range" min={MIN_WIDTH} max={MAX_WIDTH} value={width} onChange={e => setWidth(Number(e.target.value))} className={storyStyles.responsiveSliderInput} />
                    <span>{MAX_WIDTH}px</span>
                    <span>({width}px)</span>
                </div>

                <div className={storyStyles.responsivePairs} style={{
        width
      }}>
                    <DsKeyValuePair keyLabel="MAC" value="00:1A:2B:3C:4D:5E" readOnly orientation="horizontal" />
                    <DsKeyValuePair keyLabel="Serial Number" value={serial} orientation="horizontal" editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" className={storyStyles.narrowInput} />} />
                    <DsKeyValuePair keyLabel="Model" value="Cisco RTR-X2000" readOnly orientation="horizontal" />
                    <DsKeyValuePair keyLabel="Firmware Version" value="v4.2.1-build.2847" readOnly orientation="horizontal" />
                </div>
            </div>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Value types (Figma reference)',
  render: function Render() {
    const [editable, setEditable] = useState('Editable value');
    const [manufacturer, setManufacturer] = useState('cisco');
    const [description, setDescription] = useState(LONG_TEXT);
    const [empty, setEmpty] = useState('');
    return <div className={storyStyles.pairsColumn}>
                <DsKeyValuePair keyLabel="Read-only" value="Read only value" readOnly orientation="horizontal" />

                <DsKeyValuePair keyLabel="Editable" value={editable} orientation="horizontal" editInput={<DsTextInput value={editable} onValueChange={setEditable} size="small" className={storyStyles.mediumInput} />} />

                <DsKeyValuePair keyLabel="MFR" value={MANUFACTURER_OPTIONS.find(o => o.value === manufacturer)?.label ?? manufacturer} orientation="horizontal" editInput={<DsSelect options={MANUFACTURER_OPTIONS} value={manufacturer} onValueChange={setManufacturer} size="small" />} />

                <DsKeyValuePair keyLabel="Status" value={<span className={storyStyles.statusBadge}>
                            <DsIcon icon="check_circle" size="tiny" />
                            Active
                        </span>} readOnly orientation="horizontal" />

                <DsKeyValuePair keyLabel="Tags" value={<span className={storyStyles.tagGroup}>
                            <DsTag label="Tag-name" size="small" />
                            <DsTag label="Tag-name" size="small" />
                            <DsTag label="Tag-name" size="small" />
                        </span>} readOnly orientation="horizontal" />

                <DsKeyValuePair keyLabel="Description" value={description} orientation="horizontal" editInput={<DsTextarea value={description} onValueChange={setDescription} rows={4} className={storyStyles.descriptionTextarea} />} />

                <DsKeyValuePair keyLabel="Empty Value" value={empty || undefined} orientation="horizontal" editInput={<DsTextInput value={empty} onValueChange={setEmpty} size="small" />} />
            </div>;
  }
}`,...$.parameters?.docs?.source}}},de=[`ReadOnlyVertical`,`ReadOnlyHorizontal`,`CustomLabel`,`EditableVertical`,`EditableHorizontal`,`WithTrailingIcon`,`Group`,`ResponsiveWidth`,`ValueTypes`]}))();export{W as CustomLabel,K as EditableHorizontal,G as EditableVertical,J as Group,U as ReadOnlyHorizontal,H as ReadOnlyVertical,Q as ResponsiveWidth,$ as ValueTypes,q as WithTrailingIcon,de as __namedExportsOrder,V as default};