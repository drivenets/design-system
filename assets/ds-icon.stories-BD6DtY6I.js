import{n as e}from"./rolldown-runtime-DaJ6WEGw.js";import{t}from"./jsx-runtime-cM__dR4X.js";import{a as n,c as r,i,l as a,n as o,o as s,s as c,t as l}from"./ds-icon-BRZFUTMz.js";import{n as u,t as d}from"./ds-typography-BLoO5j9q.js";import{n as f,t as p}from"./ds-stack-GU0hZWeR.js";var m,h,g,_,v,y,b,x,S,C,w,T;e((()=>{l(),f(),d(),a(),n(),m=t(),h={title:`Components/Icon`,component:o,parameters:{layout:`centered`},argTypes:{icon:{control:`text`,description:"Material icon name, custom `special-*` name, or SVG component"},size:{control:`select`,options:c,description:`Size of the icon`},variant:{control:`select`,options:r,description:`Material icon variant style`},filled:{control:`boolean`,description:`Whether the icon should be filled`},color:{control:`select`,options:s,description:`Semantic color token or raw CSS color`},onClick:{action:`clicked`},className:{table:{disable:!0}},style:{table:{disable:!0}}}},g={args:{icon:`home`,size:`medium`}},_={args:{icon:`favorite`,size:`medium`,filled:!0}},v={args:{icon:`settings`,size:`medium`,variant:`rounded`}},y={args:{icon:`check_circle`,size:`medium`,color:`success`}},b={args:{icon:`special-market`,size:`medium`}},x={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,m.jsx)(p,{gap:`var(--2xl)`,alignItems:`flex-end`,children:c.map(e=>(0,m.jsxs)(p,{direction:`column`,alignItems:`center`,gap:`var(--2xs)`,children:[(0,m.jsx)(o,{icon:`home`,size:e}),(0,m.jsx)(u,{variant:`body-xs-reg`,color:`secondary`,children:e})]},e))})},S={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,m.jsx)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--xl)`,children:s.map(e=>(0,m.jsxs)(p,{direction:`column`,alignItems:`center`,gap:`var(--2xs)`,width:`120px`,children:[(0,m.jsx)(o,{icon:`circle`,size:`medium`,filled:!0,color:e}),(0,m.jsx)(u,{variant:`body-xs-reg`,color:`secondary`,children:e})]},e))})},C={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,m.jsx)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--xl)`,children:[`home`,`search`,`settings`,`favorite`,`delete`,`check_circle`,`error`,`warning`,`info`,`add`,`close`,`edit`,`download`,`visibility`,`lock`,`notifications`,`account_circle`].map(e=>(0,m.jsxs)(p,{direction:`column`,alignItems:`center`,gap:`var(--2xs)`,width:`120px`,children:[(0,m.jsx)(o,{icon:e,size:`medium`}),(0,m.jsx)(u,{variant:`body-xs-reg`,color:`secondary`,children:e})]},e))})},w={tags:[`!manifest`],parameters:{docs:{canvas:{sourceState:`none`}}},render:()=>(0,m.jsx)(p,{direction:`row`,flexWrap:`wrap`,gap:`var(--xl)`,children:Object.keys(i).map(e=>(0,m.jsxs)(p,{direction:`column`,alignItems:`center`,gap:`var(--2xs)`,width:`140px`,children:[(0,m.jsx)(o,{icon:e,size:`medium`}),(0,m.jsx)(u,{variant:`body-xs-reg`,color:`secondary`,children:e})]},e))})},g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'home',
    size: 'medium'
  }
}`,...g.parameters?.docs?.source},description:{story:`Default outlined Material icon referenced by name.`,...g.parameters?.docs?.description}}},_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'favorite',
    size: 'medium',
    filled: true
  }
}`,..._.parameters?.docs?.source},description:{story:"Use `filled` for a solid glyph, e.g. to signal an active or selected state.",..._.parameters?.docs?.description}}},v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'settings',
    size: 'medium',
    variant: 'rounded'
  }
}`,...v.parameters?.docs?.source},description:{story:"The `rounded` variant renders softer, rounded Material glyphs.",...v.parameters?.docs?.description}}},y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'check_circle',
    size: 'medium',
    color: 'success'
  }
}`,...y.parameters?.docs?.source},description:{story:"Pass a semantic color token to tint the icon with a `--icon-*` value.",...y.parameters?.docs?.description}}},b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: {
    icon: 'special-market',
    size: 'medium'
  }
}`,...b.parameters?.docs?.source},description:{story:"DriveNets-specific SVG icons are referenced by their `special-*` name.",...b.parameters?.docs?.description}}},x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack gap="var(--2xl)" alignItems="flex-end">
            {iconSizes.map(size => <DsStack key={size} direction="column" alignItems="center" gap="var(--2xs)">
                    <DsIcon icon="home" size={size} />
                    <DsTypography variant="body-xs-reg" color="secondary">
                        {size}
                    </DsTypography>
                </DsStack>)}
        </DsStack>
}`,...x.parameters?.docs?.source},description:{story:"Reference of every icon size, from `tiny` to `extra-large`.",...x.parameters?.docs?.description}}},S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="row" flexWrap="wrap" gap="var(--xl)">
            {iconColors.map(color => <DsStack key={color} direction="column" alignItems="center" gap="var(--2xs)" width="120px">
                    <DsIcon icon="circle" size="medium" filled color={color} />
                    <DsTypography variant="body-xs-reg" color="secondary">
                        {color}
                    </DsTypography>
                </DsStack>)}
        </DsStack>
}`,...S.parameters?.docs?.source},description:{story:"Reference of the semantic color tokens available via the `color` prop.",...S.parameters?.docs?.description}}},C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => {
    const names = ['home', 'search', 'settings', 'favorite', 'delete', 'check_circle', 'error', 'warning', 'info', 'add', 'close', 'edit', 'download', 'visibility', 'lock', 'notifications', 'account_circle'] as const;
    return <DsStack direction="row" flexWrap="wrap" gap="var(--xl)">
                {names.map(name => <DsStack key={name} direction="column" alignItems="center" gap="var(--2xs)" width="120px">
                        <DsIcon icon={name} size="medium" />
                        <DsTypography variant="body-xs-reg" color="secondary">
                            {name}
                        </DsTypography>
                    </DsStack>)}
            </DsStack>;
  }
}`,...C.parameters?.docs?.source},description:{story:`Gallery of representative Material icons; any Material Symbols name is valid.`,...C.parameters?.docs?.description}}},w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  tags: ['!manifest'],
  parameters: {
    docs: {
      canvas: {
        sourceState: 'none'
      }
    }
  },
  render: () => <DsStack direction="row" flexWrap="wrap" gap="var(--xl)">
            {(Object.keys(customIcons) as CustomIconName[]).map(name => <DsStack key={name} direction="column" alignItems="center" gap="var(--2xs)" width="140px">
                    <DsIcon icon={name} size="medium" />
                    <DsTypography variant="body-xs-reg" color="secondary">
                        {name}
                    </DsTypography>
                </DsStack>)}
        </DsStack>
}`,...w.parameters?.docs?.source},description:{story:"Gallery of the DriveNets custom `special-*` icons.",...w.parameters?.docs?.description}}},T=[`Default`,`Filled`,`Rounded`,`Colored`,`CustomIcon`,`Sizes`,`Colors`,`MaterialIcons`,`CustomIcons`]}))();export{y as Colored,S as Colors,b as CustomIcon,w as CustomIcons,g as Default,_ as Filled,C as MaterialIcons,v as Rounded,x as Sizes,T as __namedExportsOrder,h as default};