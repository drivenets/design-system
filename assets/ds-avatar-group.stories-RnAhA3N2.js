import{i as e}from"./preload-helper-xPQekRTU.js";import{k as t}from"./iframe-Mes93TAY.js";import{n,t as r}from"./ds-stack-D6YPPifU.js";import{n as i,t as a}from"./ds-avatar.types-BLo-OuLt.js";import{t as o}from"./ds-avatar-DkDK9c-9.js";import{n as s,t as c}from"./ds-avatar-group-BDCJC4Gf.js";var l,u,d,f,p,m,h,g;e((()=>{o(),n(),s(),l=t(),u={title:`Components/AvatarGroup`,component:c,parameters:{layout:`centered`},argTypes:{size:{control:`select`,options:a},type:{control:`radio`,options:i},className:{table:{disable:!0}}}},d={args:{avatars:[{name:`Alice Freeman`},{name:`Bob Smith`},{name:`Charlie Davis`}]}},f={args:{max:3,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`},{name:`Diana Prince`,src:`https://i.pravatar.cc/150?u=diana`},{name:`Edward Norton`,src:`https://i.pravatar.cc/150?u=edward`},{name:`Fiona Gallagher`,src:`https://i.pravatar.cc/150?u=fiona`}]}},p={args:{size:`sm`,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`}]}},m={args:{type:`rounded`,max:3,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`},{name:`Diana Prince`,src:`https://i.pravatar.cc/150?u=diana`},{name:`Edward Norton`,src:`https://i.pravatar.cc/150?u=edward`}]}},h={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:e=>(0,l.jsxs)(r,{direction:`row`,alignItems:`center`,gap:`var(--standard)`,children:[(0,l.jsx)(c,{...e,size:`xsm`,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`}]}),(0,l.jsx)(c,{...e,size:`sm`,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`}]}),(0,l.jsx)(c,{...e,size:`regular`,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`}]}),(0,l.jsx)(c,{...e,size:`md`,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`}]}),(0,l.jsx)(c,{...e,size:`lg`,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`}]}),(0,l.jsx)(c,{...e,size:`xl`,avatars:[{name:`Alice Freeman`,src:`https://i.pravatar.cc/150?u=alice`},{name:`Bob Smith`,src:`https://i.pravatar.cc/150?u=bob`},{name:`Charlie Davis`,src:`https://i.pravatar.cc/150?u=charlie`}]})]})},d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    avatars: [{
      name: 'Alice Freeman'
    }, {
      name: 'Bob Smith'
    }, {
      name: 'Charlie Davis'
    }]
  }
}`,...d.parameters?.docs?.source},description:{story:"When the number of avatars is at or below `max`, every member is shown with no\noverflow indicator. Use this for small, fixed-size groups such as assignees on\na card. Omit `src` to show initials until a profile picture is available.",...d.parameters?.docs?.description}}},f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  args: {
    max: 3,
    avatars: [{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }, {
      name: 'Diana Prince',
      src: 'https://i.pravatar.cc/150?u=diana'
    }, {
      name: 'Edward Norton',
      src: 'https://i.pravatar.cc/150?u=edward'
    }, {
      name: 'Fiona Gallagher',
      src: 'https://i.pravatar.cc/150?u=fiona'
    }]
  }
}`,...f.parameters?.docs?.source},description:{story:"When `avatars.length` exceeds `max`, the group collapses the remainder behind a\n`+N` indicator. Hovering the indicator reveals the hidden names in a tooltip.",...f.parameters?.docs?.description}}},p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: {
    size: 'sm',
    avatars: [{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }]
  }
}`,...p.parameters?.docs?.source},description:{story:'Use `size="sm"` in tighter layouts — for example table rows or compact metadata\nlines. `regular` is the default.',...p.parameters?.docs?.description}}},m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    type: 'rounded',
    max: 3,
    avatars: [{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }, {
      name: 'Diana Prince',
      src: 'https://i.pravatar.cc/150?u=diana'
    }, {
      name: 'Edward Norton',
      src: 'https://i.pravatar.cc/150?u=edward'
    }]
  }
}`,...m.parameters?.docs?.source},description:{story:"The `rounded` shape — useful for representing teams, organizations, or entities\nrather than individual people. Combined with `max`, overflow uses the same rounded\nindicator style.",...m.parameters?.docs?.description}}},h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: args => <DsStack direction="row" alignItems="center" gap="var(--standard)">
            <DsAvatarGroup {...args} size="xsm" avatars={[{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }]} />
            <DsAvatarGroup {...args} size="sm" avatars={[{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }]} />
            <DsAvatarGroup {...args} size="regular" avatars={[{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }]} />
            <DsAvatarGroup {...args} size="md" avatars={[{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }]} />
            <DsAvatarGroup {...args} size="lg" avatars={[{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }]} />
            <DsAvatarGroup {...args} size="xl" avatars={[{
      name: 'Alice Freeman',
      src: 'https://i.pravatar.cc/150?u=alice'
    }, {
      name: 'Bob Smith',
      src: 'https://i.pravatar.cc/150?u=bob'
    }, {
      name: 'Charlie Davis',
      src: 'https://i.pravatar.cc/150?u=charlie'
    }]} />
        </DsStack>
}`,...h.parameters?.docs?.source},description:{story:"Visual reference for every size token, from `xsm` to `xl`. Pick the size that\nmatches the surrounding density; `regular` is the default.",...h.parameters?.docs?.description}}},g=[`Default`,`Overflow`,`Small`,`Rounded`,`Sizes`]}))();export{d as Default,f as Overflow,m as Rounded,h as Sizes,p as Small,g as __namedExportsOrder,u as default};