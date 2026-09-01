import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{a as n,i as r,n as i,r as a,t as o}from"./ds-avatar.types-BXDv5f8l.js";import{n as s,t as c}from"./ds-stack-GU0hZWeR.js";var l,u,d,f,p,m,h,g;e((()=>{n(),a(),s(),l=t(),u={title:`Components/Avatar`,component:r,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:o},type:{control:`radio`,options:i},className:{table:{disable:!0}},style:{table:{disable:!0}}}},d={args:{name:`John Doe`}},f={args:{name:`Jane Smith`,src:`https://i.pravatar.cc/150?u=jane`,alt:`Jane Smith`}},p={args:{name:`Ada Lovelace`,src:`https://invalid.example/missing.png`}},m={args:{name:`Rose Oliver`,type:`rounded`}},h={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:e=>(0,l.jsxs)(c,{direction:`row`,alignItems:`center`,gap:`var(--standard)`,children:[(0,l.jsx)(r,{...e,size:`xsm`,name:`Extra Small`}),(0,l.jsx)(r,{...e,size:`sm`,name:`Sam Mitchell`}),(0,l.jsx)(r,{...e,size:`regular`,name:`Rachel Evans`}),(0,l.jsx)(r,{...e,size:`md`,name:`Mike Edwards`}),(0,l.jsx)(r,{...e,size:`lg`,name:`Laura Adams`}),(0,l.jsx)(r,{...e,size:`xl`,name:`Xavier Lee`})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'John Doe'
  }
}`,...d.parameters?.docs?.source},description:{story:"Without an image the avatar shows the initials derived from `name`, and the\nfull `name` appears in a tooltip on hover. This is the common state before a\nprofile picture is available.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Jane Smith',
    src: 'https://i.pravatar.cc/150?u=jane',
    alt: 'Jane Smith'
  }
}`,...f.parameters?.docs?.source},description:{story:"When `src` resolves, the image replaces the initials. Provide `alt` for\nscreen readers; it defaults to `name` when omitted.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Ada Lovelace',
    src: 'https://invalid.example/missing.png'
  }
}`,...p.parameters?.docs?.source},description:{story:"If the image fails to load the component falls back to the initials, so a\nbroken `src` never leaves an empty avatar. `onStatusChange` fires with\n`'error'` in this case.",...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    name: 'Rose Oliver',
    type: 'rounded'
  }
}`,...m.parameters?.docs?.source},description:{story:"The `rounded` shape — useful for representing teams, organizations,\nor entities rather than individual people.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: args => <DsStack direction="row" alignItems="center" gap="var(--standard)">
            <DsAvatar {...args} size="xsm" name="Extra Small" />
            <DsAvatar {...args} size="sm" name="Sam Mitchell" />
            <DsAvatar {...args} size="regular" name="Rachel Evans" />
            <DsAvatar {...args} size="md" name="Mike Edwards" />
            <DsAvatar {...args} size="lg" name="Laura Adams" />
            <DsAvatar {...args} size="xl" name="Xavier Lee" />
        </DsStack>
}`,...h.parameters?.docs?.source},description:{story:"Visual reference for every size token, from `xsm` to `xl`. Pick the size that\nmatches the surrounding density; `regular` is the default.",...h.parameters?.docs?.description}}},g=[`Default`,`WithImage`,`ImageFallback`,`Rounded`,`Sizes`]}))();export{d as Default,p as ImageFallback,m as Rounded,h as Sizes,f as WithImage,g as __namedExportsOrder,u as default};