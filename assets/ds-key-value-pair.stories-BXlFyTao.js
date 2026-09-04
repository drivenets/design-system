import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./classnames-Cm4Wq5Eu.js";import{n as o,t as s}from"./ds-icon-BRZFUTMz.js";import{r as c}from"./ds-tooltip.types-7Q2c6r4V.js";import{t as l}from"./ds-select-DT2vAnFB.js";import{n as u,t as d}from"./ds-slider-Biheo9fZ.js";import{n as f,t as p}from"./ds-typography-BLoO5j9q.js";import{t as m}from"./ds-tooltip-DZx4AkAX.js";import{n as h,t as g}from"./ds-stack-GU0hZWeR.js";import{r as _}from"./ds-text-input.types-LoNcVPp4.js";import{t as v}from"./ds-text-input-D0lDEuO4.js";import{t as y}from"./ds-select-SKBUZeSG.js";import{t as b}from"./ds-textarea-zkHYKwdy.js";import{t as x}from"./ds-textarea-CcJwWJ2H.js";import{t as S}from"./ds-tag-BChxSDTB.js";import{t as ee}from"./ds-tag-DDuMGK6C.js";var C,w,T,te,ne,E,re=t((()=>{C=`_root_ca2g0_1`,w=`_label_ca2g0_17`,T=`_valueContainer_ca2g0_30`,te=`_valueDisplay_ca2g0_41`,ne=`_editorSlot_ca2g0_52`,E={root:C,label:w,valueContainer:T,valueDisplay:te,editorSlot:ne}})),ie,ae,D,O,oe=t((()=>{ie=i(),ae=e(a(),1),p(),re(),D=r(),O=e=>{let t=(0,ie.c)(22),{ref:n,keyLabel:r,value:i,readOnly:a,orientation:o,editInput:s,className:c,style:l}=e,u=a!==void 0&&a,d=o===void 0?`vertical`:o,p=!u&&!!s,m;t[0]===c?m=t[1]:(m=(0,ae.default)(E.root,c),t[0]=c,t[1]=m);let h=u||void 0,g;t[2]===r?g=t[3]:(g=(0,D.jsx)(f,{variant:`body-sm-md`,className:E.label,children:r}),t[2]=r,t[3]=g);let _=p?0:void 0,v=p||void 0,y;t[4]===i?y=t[5]:(y=(0,D.jsx)(f,{variant:`body-sm-reg`,asChild:!0,children:(0,D.jsx)(`div`,{className:E.valueDisplay,children:i})}),t[4]=i,t[5]=y);let b;t[6]!==s||t[7]!==p?(b=p&&(0,D.jsx)(`div`,{className:E.editorSlot,children:s}),t[6]=s,t[7]=p,t[8]=b):b=t[8];let x;t[9]!==_||t[10]!==v||t[11]!==y||t[12]!==b?(x=(0,D.jsxs)(`div`,{className:E.valueContainer,tabIndex:_,"data-editable":v,children:[y,b]}),t[9]=_,t[10]=v,t[11]=y,t[12]=b,t[13]=x):x=t[13];let S;return t[14]!==d||t[15]!==n||t[16]!==l||t[17]!==x||t[18]!==m||t[19]!==h||t[20]!==g?(S=(0,D.jsxs)(`div`,{ref:n,className:m,"data-orientation":d,"data-readonly":h,style:l,children:[g,x]}),t[14]=d,t[15]=n,t[16]=l,t[17]=x,t[18]=m,t[19]=h,t[20]=g,t[21]=S):S=t[21],S},O.displayName=`DsKeyValuePair`})),k,se=t((()=>{k=[`vertical`,`horizontal`]})),A,j,M,N,P,F,I,L,R,z,B,V,ce=t((()=>{A=`_editableVerticalDemo_kby19_1`,j=`_editableHorizontalDemo_kby19_5`,M=`_mediumInput_kby19_9`,N=`_descriptionTextarea_kby19_13`,P=`_fullTextValue_kby19_17`,F=`_valueWithIcon_kby19_24`,I=`_iconLabel_kby19_30`,L=`_pairsColumn_kby19_36`,R=`_responsivePairs_kby19_49`,z=`_statusBadge_kby19_65`,B=`_tagGroup_kby19_77`,V={editableVerticalDemo:A,editableHorizontalDemo:j,mediumInput:M,descriptionTextarea:N,fullTextValue:P,valueWithIcon:F,iconLabel:I,pairsColumn:L,responsivePairs:R,statusBadge:z,tagGroup:B}})),H,U,W,G,K,q,J,Y,X,Z,Q,$,le;t((()=>{H=e(n(),1),oe(),se(),h(),u(),v(),x(),y(),s(),ee(),m(),ce(),U=r(),W={title:`Components/KeyValuePair`,component:O,parameters:{layout:`centered`},argTypes:{orientation:{control:`select`,options:k},readOnly:{control:`boolean`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}}}},G={args:{keyLabel:`Start time`,value:`2024-05-23 16:47`,readOnly:!0,orientation:`vertical`}},K={args:{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}},q={args:{keyLabel:(0,U.jsxs)(`span`,{className:V.iconLabel,children:[(0,U.jsx)(o,{icon:`info`,size:`tiny`}),`Serial Number`]}),value:`99887766`,readOnly:!0,orientation:`horizontal`}},J={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,H.useState)(`99887766`);return(0,U.jsx)(O,{keyLabel:`Serial Number`,value:e,orientation:`vertical`,className:V.editableVerticalDemo,editInput:(0,U.jsx)(_,{value:e,onValueChange:t,size:`small`})})}},Y={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,H.useState)(`Cisco RTR-X2000`);return(0,U.jsx)(O,{keyLabel:`Model`,value:e,orientation:`horizontal`,className:V.editableHorizontalDemo,editInput:(0,U.jsx)(_,{value:e,onValueChange:t,size:`small`})})}},X={name:`Editable with trailing icon and tooltip`,parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,H.useState)(`Editable value`);return(0,U.jsx)(O,{keyLabel:`Editable`,orientation:`horizontal`,className:V.editableHorizontalDemo,value:(0,U.jsxs)(`span`,{className:V.valueWithIcon,children:[e,(0,U.jsx)(c,{content:`Additional info about this field`,children:(0,U.jsx)(o,{icon:`info`,size:`tiny`})})]}),editInput:(0,U.jsxs)(`span`,{className:V.valueWithIcon,children:[(0,U.jsx)(_,{value:e,onValueChange:t,size:`small`,className:V.mediumInput}),(0,U.jsx)(c,{content:`Additional info about this field`,children:(0,U.jsx)(o,{icon:`info`,size:`tiny`})})]})})}},Z={parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,H.useState)(`99887766`),[n,r]=(0,H.useState)(`cisco`),i=[{label:`Cisco Systems`,value:`cisco`},{label:`Juniper Networks`,value:`juniper`},{label:`Arista Networks`,value:`arista`},{label:`Nokia`,value:`nokia`}];return(0,U.jsxs)(`div`,{className:V.pairsColumn,children:[(0,U.jsx)(O,{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}),(0,U.jsx)(O,{keyLabel:`SN`,value:e,orientation:`horizontal`,editInput:(0,U.jsx)(_,{value:e,onValueChange:t,size:`small`})}),(0,U.jsx)(O,{keyLabel:`Model`,value:`Cisco RTR-X2000`,readOnly:!0,orientation:`horizontal`}),(0,U.jsx)(O,{keyLabel:`MFR`,value:i.find(e=>e.value===n)?.label??n,orientation:`horizontal`,editInput:(0,U.jsx)(l,{options:i,value:n,onValueChange:r,size:`small`})})]})}},Q={name:`Responsive container width`,tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:function(){let[e,t]=(0,H.useState)(400),[n,r]=(0,H.useState)(`99887766`),[i,a]=(0,H.useState)(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.`);return(0,U.jsxs)(g,{direction:`column`,gap:16,children:[(0,U.jsx)(d,{label:`Container width`,value:e,min:200,max:700,onValueChange:e=>{t(e)},formatValue:e=>`${String(e)}px`}),(0,U.jsxs)(`div`,{className:V.responsivePairs,style:{"--responsive-pairs-width":`${String(e)}px`},children:[(0,U.jsx)(O,{keyLabel:`MAC`,value:`00:1A:2B:3C:4D:5E`,readOnly:!0,orientation:`horizontal`}),(0,U.jsx)(O,{keyLabel:`Serial Number`,value:n,orientation:`horizontal`,editInput:(0,U.jsx)(_,{value:n,onValueChange:r,size:`small`})}),(0,U.jsx)(O,{keyLabel:`Model`,value:`Cisco RTR-X2000`,readOnly:!0,orientation:`horizontal`}),(0,U.jsx)(O,{keyLabel:`Firmware Version`,value:`v4.2.1-build.2847`,readOnly:!0,orientation:`horizontal`}),(0,U.jsx)(O,{keyLabel:`Description`,value:i,orientation:`horizontal`,editInput:(0,U.jsx)(b,{value:i,onValueChange:a,rows:4,className:V.descriptionTextarea})})]})]})}},$={name:`Value types (Figma reference)`,parameters:{docs:{source:{type:`code`}}},render:function(){let[e,t]=(0,H.useState)(`Editable value`),[n,r]=(0,H.useState)(`cisco`),[i,a]=(0,H.useState)(`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris.`),[s,c]=(0,H.useState)(``),u=[{label:`Cisco Systems`,value:`cisco`},{label:`Juniper Networks`,value:`juniper`},{label:`Arista Networks`,value:`arista`},{label:`Nokia`,value:`nokia`}];return(0,U.jsxs)(`div`,{className:V.pairsColumn,children:[(0,U.jsx)(O,{keyLabel:`Read-only`,value:`Read only value`,readOnly:!0,orientation:`horizontal`}),(0,U.jsx)(O,{keyLabel:`Editable`,value:e,orientation:`horizontal`,editInput:(0,U.jsx)(_,{value:e,onValueChange:t,size:`small`,className:V.mediumInput})}),(0,U.jsx)(O,{keyLabel:`MFR`,value:u.find(e=>e.value===n)?.label??n,orientation:`horizontal`,editInput:(0,U.jsx)(l,{options:u,value:n,onValueChange:r,size:`small`})}),(0,U.jsx)(O,{keyLabel:`Status`,value:(0,U.jsxs)(`span`,{className:V.statusBadge,children:[(0,U.jsx)(o,{icon:`check_circle`,size:`tiny`}),`Active`]}),readOnly:!0,orientation:`horizontal`}),(0,U.jsx)(O,{keyLabel:`Tags`,value:(0,U.jsxs)(`span`,{className:V.tagGroup,children:[(0,U.jsx)(S,{label:`Tag-name`,size:`small`}),(0,U.jsx)(S,{label:`Tag-name`,size:`small`}),(0,U.jsx)(S,{label:`Tag-name`,size:`small`})]}),readOnly:!0,orientation:`horizontal`}),(0,U.jsx)(O,{keyLabel:`Description`,value:(0,U.jsx)(`span`,{className:V.fullTextValue,children:i}),orientation:`horizontal`,editInput:(0,U.jsx)(b,{value:i,onValueChange:a,rows:4,className:V.descriptionTextarea})}),(0,U.jsx)(O,{keyLabel:`Empty Value`,value:s||void 0,orientation:`horizontal`,editInput:(0,U.jsx)(_,{value:s,onValueChange:c,size:`small`})})]})}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source}}},le=[`ReadOnlyVertical`,`ReadOnlyHorizontal`,`CustomLabel`,`EditableVertical`,`EditableHorizontal`,`WithTrailingIcon`,`Group`,`ResponsiveWidth`,`ValueTypes`]}))();export{q as CustomLabel,Y as EditableHorizontal,J as EditableVertical,Z as Group,K as ReadOnlyHorizontal,G as ReadOnlyVertical,Q as ResponsiveWidth,$ as ValueTypes,X as WithTrailingIcon,le as __namedExportsOrder,W as default};