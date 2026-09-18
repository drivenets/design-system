import{a as e,n as t}from"./rolldown-runtime-DkW27tQK.js";import{t as n}from"./react-BZJXY1be.js";import{n as r}from"./iframe-BE6vsRJN.js";import{n as i,t as a}from"./classnames-DavMFNTn.js";import{n as o,t as s}from"./ds-icon-BB8SEsRp.js";import{n as c,t as l}from"./ds-tooltip-I_JwNEQm.js";import{n as u,t as d}from"./ds-slider-CR7A2N2H.js";import{t as f}from"./ds-select-CsqamTV7.js";import{n as ee,t as p}from"./ds-typography-CBXzX4k5.js";import{n as m,t as h}from"./ds-stack-BCUF7Byn.js";import{t as g}from"./ds-text-input-CoXbRaWf.js";import{t as _}from"./ds-text-input-C0vwfqXC.js";import{t as v}from"./ds-select-kh7Ppe_2.js";import{t as y}from"./ds-textarea-CwNDKP9R.js";import{t as b}from"./ds-textarea-BtA_7FZV.js";import{t as x}from"./ds-tag-qF17bo7g.js";import{t as te}from"./ds-tag-CNawXngj.js";var S,C,ne,re,ie,w;function ae(){return(ae=t((()=>{S=`_root_ca2g0_1`,C=`_label_ca2g0_17`,ne=`_valueContainer_ca2g0_30`,re=`_valueDisplay_ca2g0_41`,ie=`_editorSlot_ca2g0_52`,w={root:S,label:C,valueContainer:ne,valueDisplay:re,editorSlot:ie}})))()}var oe,se,T,E;function D(){return(D=t((()=>{oe=i(),se=e(a(),1),p(),ae(),T=r(),E=e=>{let t=(0,oe.c)(22),{ref:n,keyLabel:r,value:i,readOnly:a,orientation:o,editInput:s,className:c,style:l}=e,u=a!==void 0&&a,d=o===void 0?`vertical`:o,f=!u&&!!s,p;t[0]===c?p=t[1]:(p=(0,se.default)(w.root,c),t[0]=c,t[1]=p);let m=u||void 0,h;t[2]===r?h=t[3]:(h=(0,T.jsx)(ee,{variant:`body-sm-md`,className:w.label,children:r}),t[2]=r,t[3]=h);let g=f?0:void 0,_=f||void 0,v;t[4]===i?v=t[5]:(v=(0,T.jsx)(ee,{variant:`body-sm-reg`,asChild:!0,children:(0,T.jsx)(`div`,{className:w.valueDisplay,children:i})}),t[4]=i,t[5]=v);let y;t[6]!==s||t[7]!==f?(y=f&&(0,T.jsx)(`div`,{className:w.editorSlot,children:s}),t[6]=s,t[7]=f,t[8]=y):y=t[8];let b;t[9]!==g||t[10]!==_||t[11]!==v||t[12]!==y?(b=(0,T.jsxs)(`div`,{className:w.valueContainer,tabIndex:g,"data-editable":_,children:[v,y]}),t[9]=g,t[10]=_,t[11]=v,t[12]=y,t[13]=b):b=t[13];let x;return t[14]!==d||t[15]!==n||t[16]!==l||t[17]!==b||t[18]!==p||t[19]!==m||t[20]!==h?(x=(0,T.jsxs)(`div`,{ref:n,className:p,"data-orientation":d,"data-readonly":m,style:l,children:[h,b]}),t[14]=d,t[15]=n,t[16]=l,t[17]=b,t[18]=p,t[19]=m,t[20]=h,t[21]=x):x=t[21],x},E.displayName=`DsKeyValuePair`})))()}var O;function k(){return(k=t((()=>{O=[`vertical`,`horizontal`]})))()}var A,j,M,N,P,F,I,L,R,z,B,V;function H(){return(H=t((()=>{A=`_editableVerticalDemo_kby19_1`,j=`_editableHorizontalDemo_kby19_5`,M=`_mediumInput_kby19_9`,N=`_descriptionTextarea_kby19_13`,P=`_fullTextValue_kby19_17`,F=`_valueWithIcon_kby19_24`,I=`_iconLabel_kby19_30`,L=`_pairsColumn_kby19_36`,R=`_responsivePairs_kby19_49`,z=`_statusBadge_kby19_65`,B=`_tagGroup_kby19_77`,V={editableVerticalDemo:A,editableHorizontalDemo:j,mediumInput:M,descriptionTextarea:N,fullTextValue:P,valueWithIcon:F,iconLabel:I,pairsColumn:L,responsivePairs:R,statusBadge:z,tagGroup:B}})))()}var U,W,ce,G,K,q,J,Y,X,Z,Q,$,le;function ue(){return(ue=t((()=>{U=n(),D(),k(),m(),u(),_(),b(),v(),s(),te(),l(),H(),W=r(),ce={title:`Components/KeyValuePair`,component:E,parameters:{layout:`centered`},argTypes:{orientation:{control:`select`,options:O},readOnly:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},G={args:{keyLabel:`Start time`,value:`2024-05-23 16:47`,readOnly:!0,orientation:`vertical`}},K={args:{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}},q={args:{keyLabel:(0,W.jsxs)(`span`,{className:V.iconLabel,children:[(0,W.jsx)(o,{icon:`info`,size:`tiny`}),`Serial Number`]}),value:`99887766`,readOnly:!0,orientation:`horizontal`}},J={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,U.useState)(`99887766`);return(0,W.jsx)(E,{keyLabel:`Serial Number`,value:e,orientation:`vertical`,className:V.editableVerticalDemo,editInput:(0,W.jsx)(g,{value:e,onValueChange:t,size:`small`})})}},Y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,U.useState)(`Cisco RTR-X2000`);return(0,W.jsx)(E,{keyLabel:`Model`,value:e,orientation:`horizontal`,className:V.editableHorizontalDemo,editInput:(0,W.jsx)(g,{value:e,onValueChange:t,size:`small`})})}},X={name:`Editable with trailing icon and tooltip`,parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,U.useState)(`Editable value`);return(0,W.jsx)(E,{keyLabel:`Editable`,orientation:`horizontal`,className:V.editableHorizontalDemo,value:(0,W.jsxs)(`span`,{className:V.valueWithIcon,children:[e,(0,W.jsx)(c,{content:`Additional info about this field`,children:(0,W.jsx)(o,{icon:`info`,size:`tiny`})})]}),editInput:(0,W.jsxs)(`span`,{className:V.valueWithIcon,children:[(0,W.jsx)(g,{value:e,onValueChange:t,size:`small`,className:V.mediumInput}),(0,W.jsx)(c,{content:`Additional info about this field`,children:(0,W.jsx)(o,{icon:`info`,size:`tiny`})})]})})}},Z={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,U.useState)(`99887766`),[n,r]=(0,U.useState)(`cisco`),i=[{label:`Cisco Systems`,value:`cisco`},{label:`Juniper Networks`,value:`juniper`},{label:`Arista Networks`,value:`arista`},{label:`Nokia`,value:`nokia`}];return(0,W.jsxs)(`div`,{className:V.pairsColumn,children:[(0,W.jsx)(E,{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}),(0,W.jsx)(E,{keyLabel:`SN`,value:e,orientation:`horizontal`,editInput:(0,W.jsx)(g,{value:e,onValueChange:t,size:`small`})}),(0,W.jsx)(E,{keyLabel:`Model`,value:`Cisco RTR-X2000`,readOnly:!0,orientation:`horizontal`}),(0,W.jsx)(E,{keyLabel:`MFR`,value:i.find(e=>e.value===n)?.label??n,orientation:`horizontal`,editInput:(0,W.jsx)(f,{options:i,value:n,onValueChange:r,size:`small`})})]})}},Q={name:`Responsive container width`,tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:function(){let[e,t]=(0,U.useState)(400),[n,r]=(0,U.useState)(`99887766`),[i,a]=(0,U.useState)(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.`);return(0,W.jsxs)(h,{direction:`column`,gap:16,children:[(0,W.jsx)(d,{label:`Container width`,value:e,min:200,max:700,onValueChange:e=>{t(e)},formatValue:e=>`${String(e)}px`}),(0,W.jsxs)(`div`,{className:V.responsivePairs,style:{"--responsive-pairs-width":`${String(e)}px`},children:[(0,W.jsx)(E,{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}),(0,W.jsx)(E,{keyLabel:`Serial Number`,value:n,orientation:`horizontal`,editInput:(0,W.jsx)(g,{value:n,onValueChange:r,size:`small`})}),(0,W.jsx)(E,{keyLabel:`Model`,value:`Cisco RTR-X2000`,readOnly:!0,orientation:`horizontal`}),(0,W.jsx)(E,{keyLabel:`Firmware Version`,value:`v4.2.1-build.2847`,readOnly:!0,orientation:`horizontal`}),(0,W.jsx)(E,{keyLabel:`Description`,value:i,orientation:`horizontal`,editInput:(0,W.jsx)(y,{value:i,onValueChange:a,rows:4,className:V.descriptionTextarea})})]})]})}},$={name:`Value types (Figma reference)`,parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,U.useState)(`Editable value`),[n,r]=(0,U.useState)(`cisco`),[i,a]=(0,U.useState)(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.`),[s,c]=(0,U.useState)(``),l=[{label:`Cisco Systems`,value:`cisco`},{label:`Juniper Networks`,value:`juniper`},{label:`Arista Networks`,value:`arista`},{label:`Nokia`,value:`nokia`}];return(0,W.jsxs)(`div`,{className:V.pairsColumn,children:[(0,W.jsx)(E,{keyLabel:`Read-only`,value:`Read only value`,readOnly:!0,orientation:`horizontal`}),(0,W.jsx)(E,{keyLabel:`Editable`,value:e,orientation:`horizontal`,editInput:(0,W.jsx)(g,{value:e,onValueChange:t,size:`small`,className:V.mediumInput})}),(0,W.jsx)(E,{keyLabel:`MFR`,value:l.find(e=>e.value===n)?.label??n,orientation:`horizontal`,editInput:(0,W.jsx)(f,{options:l,value:n,onValueChange:r,size:`small`})}),(0,W.jsx)(E,{keyLabel:`Status`,value:(0,W.jsxs)(`span`,{className:V.statusBadge,children:[(0,W.jsx)(o,{icon:`check_circle`,size:`tiny`}),`Active`]}),readOnly:!0,orientation:`horizontal`}),(0,W.jsx)(E,{keyLabel:`Tags`,value:(0,W.jsxs)(`span`,{className:V.tagGroup,children:[(0,W.jsx)(x,{label:`Tag-name`,size:`small`}),(0,W.jsx)(x,{label:`Tag-name`,size:`small`}),(0,W.jsx)(x,{label:`Tag-name`,size:`small`})]}),readOnly:!0,orientation:`horizontal`}),(0,W.jsx)(E,{keyLabel:`Description`,value:(0,W.jsx)(`span`,{className:V.fullTextValue,children:i}),orientation:`horizontal`,editInput:(0,W.jsx)(y,{value:i,onValueChange:a,rows:4,className:V.descriptionTextarea})}),(0,W.jsx)(E,{keyLabel:`Empty Value`,value:s||void 0,orientation:`horizontal`,editInput:(0,W.jsx)(g,{value:s,onValueChange:c,size:`small`})})]})}},le=[`ReadOnlyVertical`,`ReadOnlyHorizontal`,`CustomLabel`,`EditableVertical`,`EditableHorizontal`,`WithTrailingIcon`,`Group`,`ResponsiveWidth`,`ValueTypes`],G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  args: {
    keyLabel: 'Start time',
    value: '2024-05-23 16:47',
    readOnly: true,
    orientation: 'vertical'
  }
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  args: {
    keyLabel: 'MAC',
    value: '00:1A:2B:3C:4D:5E',
    readOnly: true,
    orientation: 'horizontal'
  }
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    keyLabel: <span className={storyStyles.iconLabel}>
                <DsIcon icon="info" size="tiny" />
                Serial Number
            </span>,
    value: '99887766',
    readOnly: true,
    orientation: 'horizontal'
  }
}`,...q.parameters?.docs?.source}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [serial, setSerial] = useState('99887766');
    return <DsKeyValuePair keyLabel="Serial Number" value={serial} orientation="vertical" className={storyStyles.editableVerticalDemo} editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" />} />;
  }
}`,...J.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [model, setModel] = useState('Cisco RTR-X2000');
    return <DsKeyValuePair keyLabel="Model" value={model} orientation="horizontal" className={storyStyles.editableHorizontalDemo} editInput={<DsTextInput value={model} onValueChange={setModel} size="small" />} />;
  }
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
  name: 'Editable with trailing icon and tooltip',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [serial, setSerial] = useState('99887766');
    const [manufacturer, setManufacturer] = useState('cisco');
    const manufacturerOptions: DsSelectOption[] = [{
      label: 'Cisco Systems',
      value: 'cisco'
    }, {
      label: 'Juniper Networks',
      value: 'juniper'
    }, {
      label: 'Arista Networks',
      value: 'arista'
    }, {
      label: 'Nokia',
      value: 'nokia'
    }];
    return <div className={storyStyles.pairsColumn}>
                <DsKeyValuePair keyLabel="MAC" value="00:1A:2B:3C:4D:5E" readOnly orientation="horizontal" />
                <DsKeyValuePair keyLabel="SN" value={serial} orientation="horizontal" editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" />} />
                <DsKeyValuePair keyLabel="Model" value="Cisco RTR-X2000" readOnly orientation="horizontal" />
                <DsKeyValuePair keyLabel="MFR" value={manufacturerOptions.find(o => o.value === manufacturer)?.label ?? manufacturer} orientation="horizontal" editInput={<DsSelect options={manufacturerOptions} value={manufacturer} onValueChange={setManufacturer} size="small" />} />
            </div>;
  }
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  name: 'Responsive container width',
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: function Render() {
    const [width, setWidth] = useState(400);
    const [serial, setSerial] = useState('99887766');
    const [description, setDescription] = useState(
    // cspell:disable-next-line
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.');
    return <DsStack direction="column" gap={16}>
                <DsSlider label="Container width" value={width} min={200} max={700} onValueChange={value => {
        setWidth(value as number);
      }} formatValue={current => \`\${String(current)}px\`} />

                <div className={storyStyles.responsivePairs} style={{
        '--responsive-pairs-width': \`\${String(width)}px\`
      } as CSSProperties}>
                    <DsKeyValuePair keyLabel="MAC" value="00:1A:2B:3C:4D:5E" readOnly orientation="horizontal" />
                    <DsKeyValuePair keyLabel="Serial Number" value={serial} orientation="horizontal" editInput={<DsTextInput value={serial} onValueChange={setSerial} size="small" />} />
                    <DsKeyValuePair keyLabel="Model" value="Cisco RTR-X2000" readOnly orientation="horizontal" />
                    <DsKeyValuePair keyLabel="Firmware Version" value="v4.2.1-build.2847" readOnly orientation="horizontal" />
                    <DsKeyValuePair keyLabel="Description" value={description} orientation="horizontal" editInput={<DsTextarea value={description} onValueChange={setDescription} rows={4} className={storyStyles.descriptionTextarea} />} />
                </div>
            </DsStack>;
  }
}`,...Q.parameters?.docs?.source}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  name: 'Value types (Figma reference)',
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const [editable, setEditable] = useState('Editable value');
    const [manufacturer, setManufacturer] = useState('cisco');
    const [description, setDescription] = useState(
    // cspell:disable-next-line
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.');
    const [empty, setEmpty] = useState('');
    const manufacturerOptions: DsSelectOption[] = [{
      label: 'Cisco Systems',
      value: 'cisco'
    }, {
      label: 'Juniper Networks',
      value: 'juniper'
    }, {
      label: 'Arista Networks',
      value: 'arista'
    }, {
      label: 'Nokia',
      value: 'nokia'
    }];
    return <div className={storyStyles.pairsColumn}>
                <DsKeyValuePair keyLabel="Read-only" value="Read only value" readOnly orientation="horizontal" />

                <DsKeyValuePair keyLabel="Editable" value={editable} orientation="horizontal" editInput={<DsTextInput value={editable} onValueChange={setEditable} size="small" className={storyStyles.mediumInput} />} />

                <DsKeyValuePair keyLabel="MFR" value={manufacturerOptions.find(o => o.value === manufacturer)?.label ?? manufacturer} orientation="horizontal" editInput={<DsSelect options={manufacturerOptions} value={manufacturer} onValueChange={setManufacturer} size="small" />} />

                <DsKeyValuePair keyLabel="Status" value={<span className={storyStyles.statusBadge}>
                            <DsIcon icon="check_circle" size="tiny" />
                            Active
                        </span>} readOnly orientation="horizontal" />

                <DsKeyValuePair keyLabel="Tags" value={<span className={storyStyles.tagGroup}>
                            <DsTag label="Tag-name" size="small" />
                            <DsTag label="Tag-name" size="small" />
                            <DsTag label="Tag-name" size="small" />
                        </span>} readOnly orientation="horizontal" />

                <DsKeyValuePair keyLabel="Description" value={<span className={storyStyles.fullTextValue}>{description}</span>} orientation="horizontal" editInput={<DsTextarea value={description} onValueChange={setDescription} rows={4} className={storyStyles.descriptionTextarea} />} />

                <DsKeyValuePair keyLabel="Empty Value" value={empty || undefined} orientation="horizontal" editInput={<DsTextInput value={empty} onValueChange={setEmpty} size="small" />} />
            </div>;
  }
}`,...$.parameters?.docs?.source}}}})))()}ue();export{q as CustomLabel,Y as EditableHorizontal,J as EditableVertical,Z as Group,K as ReadOnlyHorizontal,G as ReadOnlyVertical,Q as ResponsiveWidth,$ as ValueTypes,X as WithTrailingIcon,le as __namedExportsOrder,ce as default};