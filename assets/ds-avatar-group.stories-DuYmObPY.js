import{j as a}from"./jsx-runtime-u17CrQMm.js";import{c as h}from"./index-DK2miGf9.js";import{D as _}from"./ds-avatar-BG3PQiKS.js";import{D as y}from"./ds-tooltip-C9RPDvQJ.js";import{D as w}from"./ds-typography-BIpYH5_L.js";import"./iframe-DeS_gruE.js";import"./preload-helper-PPVm8Dsz.js";import"./create-split-props-u5h9OPvL.js";import"./use-locale-context-DqliWOM8.js";import"./index-DZJWk2CT.js";import"./index-CKsoJxS5.js";import"./index-CVnASS4r.js";import"./index-CJVKzZ5Z.js";import"./index-C2qyF9-4.js";import"./index-CQCW1hAM.js";import"./index-D-BG38wZ.js";import"./index-DqISX7u-.js";import"./floating-ui.dom-CGTwz-PJ.js";import"./index-CwSwTJsd.js";import"./index-BGhn06NL.js";const A="_avatarGroup_1a1cf_1",D="_avatarItem_1a1cf_5",G="_xsm_1a1cf_11",T="_sm_1a1cf_14",j="_moreAvatar_1a1cf_17",b="_circle_1a1cf_30",C="_rounded_1a1cf_33",I="_regular_1a1cf_36",B="_md_1a1cf_36",S="_lg_1a1cf_36",E="_xl_1a1cf_36",H="_tooltipList_1a1cf_75",n={avatarGroup:A,avatarItem:D,xsm:G,sm:T,moreAvatar:j,circle:b,rounded:C,regular:I,md:B,lg:S,xl:E,tooltipList:H},i=({avatars:e,size:l="regular",type:t="circle",max:r=5,className:f})=>{const x=e.slice(0,r),g=e.slice(r),u=e.length-r;return a.jsxs("div",{className:h(n.avatarGroup,f),children:[x.map((s,v)=>a.jsx(_,{...s,size:l,type:t,className:n.avatarItem},`${s.name}-${String(v)}`)),u>0&&a.jsx(y,{content:a.jsx("div",{className:n.tooltipList,children:g.map((s,v)=>a.jsx("div",{children:a.jsx(w,{variant:"body-xs-reg",children:s.name})},`${s.name}-${String(v)}`))}),children:a.jsxs("div",{className:h(n.moreAvatar,n[l],n[t]),children:["+",u]})})]})};i.__docgenInfo={description:"DsAvatarGroup component for displaying a list of avatars with overlap",methods:[],displayName:"DsAvatarGroup",props:{avatars:{required:!0,tsType:{name:"Array",elements:[{name:"Omit",elements:[{name:"DsAvatarProps"},{name:"union",raw:"'size' | 'type'",elements:[{name:"literal",value:"'size'"},{name:"literal",value:"'type'"}]}],raw:"Omit<DsAvatarProps, 'size' | 'type'>"}],raw:"Omit<DsAvatarProps, 'size' | 'type'>[]"},description:"Array of avatar items"},size:{required:!1,tsType:{name:"union",raw:"'xsm' | 'sm' | 'regular' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xsm'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},description:`Size of the avatars in the group
@default 'regular'`,defaultValue:{value:"'regular'",computed:!1}},type:{required:!1,tsType:{name:"union",raw:"'circle' | 'rounded'",elements:[{name:"literal",value:"'circle'"},{name:"literal",value:"'rounded'"}]},description:`Shape of the avatars in the group
@default 'circle'`,defaultValue:{value:"'circle'",computed:!1}},max:{required:!1,tsType:{name:"number"},description:`Maximum number of avatars to show before collapsing
@default 5`,defaultValue:{value:"5",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Custom class name"}}};const N="_variantsContainer_eijoh_1",z={variantsContainer:N},{expect:o,userEvent:O,within:d}=__STORYBOOK_MODULE_TEST__,ra={title:"Design System/Avatar Group",component:i,parameters:{layout:"centered"},tags:["autodocs"]},p=[{name:"Alice Freeman",src:"https://i.pravatar.cc/150?u=alice"},{name:"Bob Smith",src:"https://i.pravatar.cc/150?u=bob"},{name:"Charlie Davis",src:"https://i.pravatar.cc/150?u=charlie"},{name:"Diana Prince",src:"https://i.pravatar.cc/150?u=diana"},{name:"Edward Norton",src:"https://i.pravatar.cc/150?u=edward"},{name:"Fiona Gallagher",src:"https://i.pravatar.cc/150?u=fiona"},{name:"George Miller",src:"https://i.pravatar.cc/150?u=george"},{name:"Hannah Abbott",src:"https://i.pravatar.cc/150?u=hannah"}],c={args:{avatars:p},play:async({canvasElement:e})=>{const t=d(e).getByText("+3");await o(t).toBeInTheDocument(),await O.hover(t);const r=await d(document.body).findByRole("tooltip");await o(r).toHaveTextContent("Fiona Gallagher"),await o(r).toHaveTextContent("George Miller"),await o(r).toHaveTextContent("Hannah Abbott")}},m={render:()=>a.jsxs("div",{className:z.variantsContainer,children:[a.jsxs("div",{children:[a.jsx("h3",{children:"Default Group (max 5)"}),a.jsx(i,{avatars:p})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Small Rounded Group"}),a.jsx(i,{avatars:p,size:"sm",type:"rounded"})]}),a.jsxs("div",{children:[a.jsx("h3",{children:"Large Group (max 3)"}),a.jsx(i,{avatars:p,size:"lg",max:3})]})]}),play:async({canvasElement:e})=>{const t=d(e).getAllByText(/^\+\d+$/);await o(t.length).toBeGreaterThan(0)}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    avatars: sampleAvatars
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Check that overflow indicator is present (8 total - 5 max = +3)
    const overflowIndicator = canvas.getByText('+3');
    await expect(overflowIndicator).toBeInTheDocument();

    // Hover over the +3 to check tooltip with names
    await userEvent.hover(overflowIndicator);

    // Check that hidden avatar names appear in tooltip (tooltips render in document.body)
    const tooltip = await within(document.body).findByRole('tooltip');
    await expect(tooltip).toHaveTextContent('Fiona Gallagher');
    await expect(tooltip).toHaveTextContent('George Miller');
    await expect(tooltip).toHaveTextContent('Hannah Abbott');
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.variantsContainer}>
            <div>
                <h3>Default Group (max 5)</h3>
                <DsAvatarGroup avatars={sampleAvatars} />
            </div>
            <div>
                <h3>Small Rounded Group</h3>
                <DsAvatarGroup avatars={sampleAvatars} size="sm" type="rounded" />
            </div>
            <div>
                <h3>Large Group (max 3)</h3>
                <DsAvatarGroup avatars={sampleAvatars} size="lg" max={3} />
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Check that overflow indicators are present
    const overflowIndicators = canvas.getAllByText(/^\\+\\d+$/);
    await expect(overflowIndicators.length).toBeGreaterThan(0);
  }
}`,...m.parameters?.docs?.source}}};const na=["Default","Variants"];export{c as Default,m as Variants,na as __namedExportsOrder,ra as default};
