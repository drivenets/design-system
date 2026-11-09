import{n as e}from"./rolldown-runtime-sJBDdmOt.js";import{n as t}from"./iframe-7xRBeY2k.js";import{n,t as r}from"./ds-stack-BsSSnxat.js";import{a as i,c as a,i as o,n as s,o as c,s as l,t as u}from"./ds-map-pin-2XahKdad.js";var d,f,p,m,h,g,_,v,y,b,x,S,C,w;function T(){return(T=e((()=>{o(),u(),n(),d=t(),f={title:`Components/MapPin`,component:s,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:a},color:{control:`select`,options:c},ring:{control:`select`,options:l},label:{control:`text`},count:{control:`number`},badge:{control:`text`},badgeBorder:{control:`select`,options:i},selected:{control:`boolean`},dragging:{control:`boolean`},"aria-label":{control:`text`},className:{table:{disable:!0}},style:{table:{disable:!0}},ref:{table:{disable:!0}},onClick:{table:{disable:!0}}}},p={args:{size:`large`,color:`blue`,label:`T1`,"aria-label":`Central office T1, Haifa North`}},m={args:{size:`medium`,color:`orange`,label:`FST`,"aria-label":`Access site FST, Haifa North`}},h={args:{size:`small`,color:`teal`,count:8,"aria-label":`8 fiber broadband customer sites`}},g={args:{size:`small`,color:`pink`,count:240,"aria-label":`240 carrier ethernet customer sites`}},_={args:{size:`large`,color:`blue`,ring:`dotted`,label:`T2`,"aria-label":`Central office T2, Haifa North, planned`}},v={args:{size:`medium`,color:`orange`,ring:`dashed`,label:`PFP`,"aria-label":`Access site PFP, Haifa North, designed`}},y={args:{size:`large`,color:`blue`,label:`T1`,badge:`oR`,"aria-label":`Central office T1, Haifa North, with optical router`}},b={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,d.jsx)(r,{direction:`row`,gap:`var(--standard)`,alignItems:`flex-end`,children:i.map(e=>(0,d.jsx)(s,{label:`T3`,badge:`oR`,badgeBorder:e,"aria-label":`Central office T3, optical router ${e}`},e))})},x={args:{size:`large`,color:`blue`,label:`T1`,selected:!0,"aria-label":`Central office T1, Haifa North`}},S={args:{size:`medium`,color:`blue`,label:`T3`,dragging:!0,"aria-label":`Central office T3, Haifa North`}},C={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,d.jsx)(r,{direction:`column`,gap:`var(--standard)`,children:c.map(e=>(0,d.jsx)(r,{direction:`row`,gap:`var(--standard)`,alignItems:`flex-end`,children:l.map(t=>(0,d.jsxs)(r,{direction:`row`,gap:`var(--sm)`,alignItems:`flex-end`,children:[(0,d.jsx)(s,{size:`large`,color:e,ring:t,label:`T1`,badge:`oR`,"aria-label":`${e} ${t}`}),(0,d.jsx)(s,{size:`small`,color:e,ring:t,count:8,"aria-label":`${e} ${t} count`}),(0,d.jsx)(s,{color:e,ring:t,label:`T4+`,selected:!0,"aria-label":`${e} ${t} selected`}),(0,d.jsx)(s,{color:e,ring:t,label:`T4+`,dragging:!0,"aria-label":`${e} ${t} dragging`})]},t))},e))})},w=[`Default`,`Color`,`Count`,`CappedCount`,`DottedRing`,`DashedRing`,`Badge`,`BadgeBorder`,`Selected`,`Dragging`,`AllVariants`],p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'blue',
    label: 'T1',
    'aria-label': 'Central office T1, Haifa North'
  }
}`,...p.parameters?.docs?.source},description:{story:`A pin with a short code. Hover it to see it lift from its tip.`,...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'orange',
    label: 'FST',
    'aria-label': 'Access site FST, Haifa North'
  }
}`,...m.parameters?.docs?.source},description:{story:`Use a different color for each kind of location, e.g. orange for access sites in Network View.`,...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    color: 'teal',
    count: 8,
    'aria-label': '8 fiber broadband customer sites'
  }
}`,...h.parameters?.docs?.source},description:{story:`Show a count when several items share one location.`,...h.parameters?.docs?.description}}},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'small',
    color: 'pink',
    count: 240,
    'aria-label': '240 carrier ethernet customer sites'
  }
}`,...g.parameters?.docs?.source},description:{story:`Counts above 99 are capped so the text fits the core.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'blue',
    ring: 'dotted',
    label: 'T2',
    'aria-label': 'Central office T2, Haifa North, planned'
  }
}`,..._.parameters?.docs?.source},description:{story:`A dotted ring marks a secondary status, e.g. a planned site in Network View.`,..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'orange',
    ring: 'dashed',
    label: 'PFP',
    'aria-label': 'Access site PFP, Haifa North, designed'
  }
}`,...v.parameters?.docs?.source},description:{story:`A dashed ring marks another status, e.g. a site still being designed in Network View.`,...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'blue',
    label: 'T1',
    badge: 'oR',
    'aria-label': 'Central office T1, Haifa North, with optical router'
  }
}`,...y.parameters?.docs?.source},description:{story:`A badge marks equipment at the location, e.g. an optical router in Network View.`,...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="row" gap="var(--standard)" alignItems="flex-end">
            {mapPinBadgeBorders.map(badgeBorder => <DsMapPin key={badgeBorder} label="T3" badge="oR" badgeBorder={badgeBorder} aria-label={\`Central office T3, optical router \${badgeBorder}\`} />)}
        </DsStack>
}`,...b.parameters?.docs?.source},description:{story:`The badge border shows the status of what it marks, independently of the pin's ring.`,...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'large',
    color: 'blue',
    label: 'T1',
    selected: true,
    'aria-label': 'Central office T1, Haifa North'
  }
}`,...x.parameters?.docs?.source},description:{story:`The selected pin gets an outline in its own color and stays above unselected pins.`,...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    color: 'blue',
    label: 'T3',
    dragging: true,
    'aria-label': 'Central office T3, Haifa North'
  }
}`,...S.parameters?.docs?.source},description:{story:"Set `dragging` while the user moves the pin; it renders above every other pin.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="column" gap="var(--standard)">
            {mapPinColors.map(color => <DsStack key={color} direction="row" gap="var(--standard)" alignItems="flex-end">
                    {mapPinRings.map(ring => <DsStack key={ring} direction="row" gap="var(--sm)" alignItems="flex-end">
                            <DsMapPin size="large" color={color} ring={ring} label="T1" badge="oR" aria-label={\`\${color} \${ring}\`} />
                            <DsMapPin size="small" color={color} ring={ring} count={8} aria-label={\`\${color} \${ring} count\`} />
                            <DsMapPin color={color} ring={ring} label="T4+" selected aria-label={\`\${color} \${ring} selected\`} />
                            <DsMapPin color={color} ring={ring} label="T4+" dragging aria-label={\`\${color} \${ring} dragging\`} />
                        </DsStack>)}
                </DsStack>)}
        </DsStack>
}`,...C.parameters?.docs?.source}}}})))()}T();export{C as AllVariants,y as Badge,b as BadgeBorder,g as CappedCount,m as Color,h as Count,v as DashedRing,p as Default,_ as DottedRing,S as Dragging,x as Selected,w as __namedExportsOrder,f as default};