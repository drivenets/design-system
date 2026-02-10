import{j as e}from"./jsx-runtime-u17CrQMm.js";import{c as f}from"./index-DA3TTJQo.js";import{T as L,a as I,b as j,c as v,d as A,e as S}from"./core-table-CoEY8mPk.js";import"./iframe-C3gMQG0U.js";import"./preload-helper-PPVm8Dsz.js";const q=Object.freeze({xsm:24,sm:32,regular:40,md:48,lg:64,xl:80}),B=Object.freeze({"body-md-reg":20,"body-md-md":20,"body-md-semi-bold":20,"body-md-bold":20,"body-md-link":20,"body-sm-reg":18,"body-sm-md":18,"body-sm-semi-bold":18,"body-sm-bold":18,"body-sm-link":18,"body-xs-reg":16,"body-xs-md":16,"body-xs-semi-bold":16,"body-xs-bold":16,"body-xs-link":16,"code-sm-reg":18,"code-sm-semi-bold":18,"code-xs-reg":16,"code-xs-semi-bold":16,heading1:64,heading2:54,heading3:48,heading4:36}),w=Object.freeze({default:4,round:999}),E=8,M="_skeleton_109kt_1",$="_shimmer_109kt_1",O="_gray_109kt_5",P="_blue_109kt_12",W="_text_109kt_19",U="_circle_109kt_27",F="_rectangle_109kt_33",G="_container_109kt_38",l={skeleton:M,shimmer:$,gray:O,blue:P,text:W,circle:U,rectangle:F,container:G},N=({typographyVariant:t="body-sm-reg",color:i="gray",lines:o=1,width:n,radius:r="default",className:c,style:m})=>{const k=B[t],R=typeof r=="number"?r:w[r],z=()=>n!==void 0?n:"100%",H=f(l.skeleton,l.text,l[i],c),D=b=>({height:k,width:typeof b=="number"?String(b)+"px":b,borderRadius:R,...m});return e.jsx("div",{"aria-hidden":"true",className:l.container,style:{gap:E},children:Array.from({length:o},(b,V)=>e.jsx("span",{className:H,style:D(z())},V))})};N.__docgenInfo={description:`Text skeleton component - matches typography variants
It renders pill-shaped lines that match the height of text content`,methods:[],displayName:"DsSkeletonText",props:{color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof skeletonColorVariants)[number]"},description:`Color variant of the skeleton
@default 'gray'`,defaultValue:{value:"'gray'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional inline styles"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLSpanElement"}],raw:"Ref<HTMLSpanElement>"},description:"Ref to the skeleton element"},typographyVariant:{required:!1,tsType:{name:"union",raw:"keyof typeof semanticElementMap",elements:[{name:"literal",value:"'body-md-reg'"},{name:"literal",value:"'body-md-md'"},{name:"literal",value:"'body-md-semi-bold'"},{name:"literal",value:"'body-md-bold'"},{name:"literal",value:"'body-md-link'"},{name:"literal",value:"'body-sm-reg'"},{name:"literal",value:"'body-sm-md'"},{name:"literal",value:"'body-sm-semi-bold'"},{name:"literal",value:"'body-sm-bold'"},{name:"literal",value:"'body-sm-link'"},{name:"literal",value:"'body-xs-reg'"},{name:"literal",value:"'body-xs-md'"},{name:"literal",value:"'body-xs-semi-bold'"},{name:"literal",value:"'body-xs-bold'"},{name:"literal",value:"'body-xs-link'"},{name:"literal",value:"'code-sm-reg'"},{name:"literal",value:"'code-sm-semi-bold'"},{name:"literal",value:"'code-xs-reg'"},{name:"literal",value:"'code-xs-semi-bold'"},{name:"literal",value:"heading1"},{name:"literal",value:"heading2"},{name:"literal",value:"heading3"},{name:"literal",value:"heading4"}]},description:`Typography variant - determines the height of the skeleton
@default 'body-sm-reg'`,defaultValue:{value:"'body-sm-reg'",computed:!1}},lines:{required:!1,tsType:{name:"number"},description:`Number of lines to render
@default 1`,defaultValue:{value:"1",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:`Width of skeleton. Last line will have varied width if not specified.
Can be a number (px) or string ('50%', '200px')
@default '100%' (last line varies between 40-80%)`},radius:{required:!1,tsType:{name:"union",raw:"SkeletonRadiusVariant | number",elements:[{name:"unknown[number]",raw:"(typeof skeletonRadiusVariants)[number]"},{name:"number"}]},description:`Border radius: 'default' (4px), 'round' (pill-shaped), or custom px value
@default 'default'`,defaultValue:{value:"'default'",computed:!1}}}};const _=({size:t="regular",color:i="gray",className:o,style:n})=>{const r=typeof t=="number"?t:q[t],c={width:`${String(r)}px`,height:`${String(r)}px`,...n};return e.jsx("span",{className:f(l.skeleton,l.circle,l[i],o),style:c,"aria-hidden":"true"})};_.__docgenInfo={description:`Circle skeleton component - for avatars and icons
Matches DsAvatar sizes`,methods:[],displayName:"DsSkeletonCircle",props:{color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof skeletonColorVariants)[number]"},description:`Color variant of the skeleton
@default 'gray'`,defaultValue:{value:"'gray'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional inline styles"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLSpanElement"}],raw:"Ref<HTMLSpanElement>"},description:"Ref to the skeleton element"},size:{required:!1,tsType:{name:"union",raw:"DsAvatarSize | number",elements:[{name:"union",raw:"'xsm' | 'sm' | 'regular' | 'md' | 'lg' | 'xl'",elements:[{name:"literal",value:"'xsm'"},{name:"literal",value:"'sm'"},{name:"literal",value:"'regular'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"},{name:"literal",value:"'xl'"}]},{name:"number"}]},description:`Size of the circle - matches DsAvatar sizes or custom pixel value
@default 'regular'`,defaultValue:{value:"'regular'",computed:!1}}}};const C=({width:t,height:i,radius:o="default",color:n="gray",className:r,style:c})=>{const m=typeof o=="number"?o:w[o],k={width:typeof t=="number"?`${String(t)}px`:t,height:typeof i=="number"?`${String(i)}px`:i,borderRadius:`${String(m)}px`,...c};return e.jsx("span",{className:f(l.skeleton,l.rectangle,l[n],r),style:k,"aria-hidden":"true"})};C.__docgenInfo={description:"Rectangle skeleton component - for buttons, images, and custom shapes",methods:[],displayName:"DsSkeletonRect",props:{color:{required:!1,tsType:{name:"unknown[number]",raw:"(typeof skeletonColorVariants)[number]"},description:`Color variant of the skeleton
@default 'gray'`,defaultValue:{value:"'gray'",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional inline styles"},ref:{required:!1,tsType:{name:"Ref",elements:[{name:"HTMLSpanElement"}],raw:"Ref<HTMLSpanElement>"},description:"Ref to the skeleton element"},width:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Width of rectangle. Can be number (px) or string ('50%', '200px')"},height:{required:!0,tsType:{name:"union",raw:"string | number",elements:[{name:"string"},{name:"number"}]},description:"Height of rectangle. Can be number (px) or string ('50%', '200px')"},radius:{required:!1,tsType:{name:"union",raw:"SkeletonRadiusVariant | number",elements:[{name:"unknown[number]",raw:"(typeof skeletonRadiusVariants)[number]"},{name:"number"}]},description:`Border radius: 'default' (4px), 'round' (pill-shaped), or custom px value
@default 'default'`,defaultValue:{value:"'default'",computed:!1}}}};const s={Text:N,Circle:_,Rect:C},K="_verticalStack_1avtn_1",Y="_section_1avtn_7",J="_sectionSmall_1avtn_13",Q="_sizesRow_1avtn_19",X="_shapeRow_1avtn_26",Z="_sizeItem_1avtn_32",ee="_label_1avtn_36",ae="_sectionLabel_1avtn_42",se="_cardContainer_1avtn_46",te="_cardHeader_1avtn_53",ne="_cardHeaderContent_1avtn_59",le="_cardHeaderSubtitle_1avtn_63",re="_cardActions_1avtn_67",ie="_tableContainer_1avtn_79",oe="_tableNameCell_1avtn_86",a={verticalStack:K,section:Y,sectionSmall:J,sizesRow:Q,shapeRow:X,sizeItem:Z,label:ee,sectionLabel:ae,cardContainer:se,cardHeader:te,cardHeaderContent:ne,cardHeaderSubtitle:le,cardActions:re,tableContainer:ie,tableNameCell:oe},{expect:d,within:T}=__STORYBOOK_MODULE_TEST__,ue={title:"Design System/Skeleton",tags:["autodocs"],parameters:{layout:"padded"}},p={render:()=>e.jsxs("div",{className:a.verticalStack,"data-testid":"color-variants",children:[e.jsxs("div",{children:[e.jsx("h4",{className:a.sectionLabel,children:"gray (default)"}),e.jsx(s.Text,{color:"gray"}),e.jsx(s.Circle,{color:"gray"}),e.jsx(s.Rect,{width:40,height:40,color:"gray"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a.sectionLabel,children:"Blue"}),e.jsx(s.Text,{color:"blue"}),e.jsx(s.Circle,{color:"blue"}),e.jsx(s.Rect,{width:40,height:40,color:"blue"})]})]}),play:async({canvasElement:t})=>{const o=T(t).getByTestId("color-variants"),n=o.querySelectorAll(`.${l.gray}`),r=o.querySelectorAll(`.${l.blue}`);await d(n).toHaveLength(3),await d(r).toHaveLength(3)}},h={render:()=>e.jsxs("div",{className:a.verticalStack,children:[e.jsxs("div",{children:[e.jsx("h4",{className:a.sectionLabel,children:"Typography Variants"}),e.jsxs("div",{className:a.section,children:[e.jsx(s.Text,{typographyVariant:"heading1"}),e.jsx(s.Text,{typographyVariant:"heading3"}),e.jsx(s.Text,{typographyVariant:"body-md-reg"}),e.jsx(s.Text,{typographyVariant:"body-sm-reg"})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a.sectionLabel,children:"Multiple Lines"}),e.jsx(s.Text,{typographyVariant:"body-md-reg",lines:3})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a.sectionLabel,children:"Custom Width"}),e.jsxs("div",{className:a.sectionSmall,children:[e.jsx(s.Text,{typographyVariant:"body-md-reg",width:"80%"}),e.jsx(s.Text,{typographyVariant:"body-md-reg",width:200})]})]}),e.jsxs("div",{children:[e.jsx("h4",{className:a.sectionLabel,children:"Border Radius"}),e.jsxs("div",{className:a.sectionSmall,children:[e.jsx(s.Text,{typographyVariant:"body-md-reg",radius:"round"}),e.jsx(s.Text,{typographyVariant:"body-md-reg",radius:"default"}),e.jsx(s.Text,{typographyVariant:"body-md-reg",radius:12})]})]})]})},u={render:()=>e.jsxs("div",{className:a.sizesRow,"data-testid":"circle-sizes",children:[e.jsxs("div",{className:a.sizeItem,children:[e.jsx(s.Circle,{size:"xsm"}),e.jsx("p",{className:a.label,children:"xsm (24px)"})]}),e.jsxs("div",{className:a.sizeItem,children:[e.jsx(s.Circle,{size:"sm"}),e.jsx("p",{className:a.label,children:"sm (32px)"})]}),e.jsxs("div",{className:a.sizeItem,children:[e.jsx(s.Circle,{size:"regular"}),e.jsx("p",{className:a.label,children:"regular (40px)"})]}),e.jsxs("div",{className:a.sizeItem,children:[e.jsx(s.Circle,{size:"md"}),e.jsx("p",{className:a.label,children:"md (48px)"})]}),e.jsxs("div",{className:a.sizeItem,children:[e.jsx(s.Circle,{size:"lg"}),e.jsx("p",{className:a.label,children:"lg (64px)"})]}),e.jsxs("div",{className:a.sizeItem,children:[e.jsx(s.Circle,{size:"xl"}),e.jsx("p",{className:a.label,children:"xl (80px)"})]}),e.jsxs("div",{className:a.sizeItem,children:[e.jsx(s.Circle,{size:100}),e.jsx("p",{className:a.label,children:"custom (100px)"})]})]}),play:async({canvasElement:t})=>{const n=T(t).getByTestId("circle-sizes").querySelectorAll(`.${l.circle}`);await d(n).toHaveLength(7);const r=["24px","32px","40px","48px","64px","80px","100px"];n.forEach((c,m)=>{d(c).toHaveStyle({width:r[m],height:r[m]})})}},y={render:()=>e.jsxs("div",{className:a.section,"data-testid":"rectangle-shapes",children:[e.jsxs("div",{className:a.shapeRow,children:[e.jsx(s.Rect,{width:120,height:40}),e.jsx("span",{className:a.label,children:"Button"})]}),e.jsxs("div",{className:a.shapeRow,children:[e.jsx(s.Rect,{width:80,height:24,radius:"round"}),e.jsx("span",{className:a.label,children:"Badge"})]}),e.jsxs("div",{className:a.shapeRow,children:[e.jsx(s.Rect,{width:200,height:150,radius:8}),e.jsx("span",{className:a.label,children:"Image"})]})]}),play:async({canvasElement:t})=>{const n=T(t).getByTestId("rectangle-shapes").querySelectorAll(`.${l.rectangle}`);await d(n).toHaveLength(3),await d(n[0]).toHaveStyle({width:"120px",height:"40px",borderRadius:"4px"}),await d(n[1]).toHaveStyle({width:"80px",height:"24px",borderRadius:"999px"}),await d(n[2]).toHaveStyle({width:"200px",height:"150px",borderRadius:"8px"})}},x={render:()=>e.jsxs("div",{className:a.cardContainer,children:[e.jsxs("div",{className:a.cardHeader,children:[e.jsx(s.Circle,{size:"lg"}),e.jsxs("div",{className:a.cardHeaderContent,children:[e.jsx(s.Text,{typographyVariant:"heading4",width:"60%"}),e.jsx("div",{className:a.cardHeaderSubtitle,children:e.jsx(s.Text,{typographyVariant:"body-sm-reg",width:"80%"})})]})]}),e.jsx(s.Text,{typographyVariant:"body-md-reg",lines:3}),e.jsxs("div",{className:a.cardActions,children:[e.jsx(s.Rect,{width:100,height:36,radius:4}),e.jsx(s.Rect,{width:100,height:36,radius:4})]})]})},g={render:()=>e.jsx("div",{className:a.tableContainer,children:e.jsxs(L,{children:[e.jsx(I,{children:e.jsxs(j,{children:[e.jsx(v,{children:"Name"}),e.jsx(v,{children:"Status"}),e.jsx(v,{children:"Progress"}),e.jsx(v,{children:"Actions"})]})}),e.jsx(A,{children:Array.from({length:5}).map((t,i)=>e.jsxs(j,{children:[e.jsx(S,{children:e.jsxs("div",{className:a.tableNameCell,children:[e.jsx(s.Circle,{size:"sm"}),e.jsx(s.Text,{width:120})]})}),e.jsx(S,{children:e.jsx(s.Rect,{width:80,height:24,radius:"round"})}),e.jsx(S,{children:e.jsx(s.Rect,{width:100,height:8,radius:4})}),e.jsx(S,{children:e.jsx(s.Rect,{width:32,height:32,radius:4})})]},i))})]})})};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.verticalStack} data-testid="color-variants">
            <div>
                <h4 className={styles.sectionLabel}>gray (default)</h4>
                <DsSkeleton.Text color="gray" />
                <DsSkeleton.Circle color="gray" />
                <DsSkeleton.Rect width={40} height={40} color="gray" />
            </div>
            <div>
                <h4 className={styles.sectionLabel}>Blue</h4>
                <DsSkeleton.Text color="blue" />
                <DsSkeleton.Circle color="blue" />
                <DsSkeleton.Rect width={40} height={40} color="blue" />
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('color-variants');
    const graySkeletons = container.querySelectorAll(\`.\${skeletonStyles.gray}\`);
    const blueSkeletons = container.querySelectorAll(\`.\${skeletonStyles.blue}\`);
    await expect(graySkeletons).toHaveLength(3);
    await expect(blueSkeletons).toHaveLength(3);
  }
}`,...p.parameters?.docs?.source},description:{story:"Color variants - gray (default) and blue",...p.parameters?.docs?.description}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.verticalStack}>
            <div>
                <h4 className={styles.sectionLabel}>Typography Variants</h4>
                <div className={styles.section}>
                    <DsSkeleton.Text typographyVariant="heading1" />
                    <DsSkeleton.Text typographyVariant="heading3" />
                    <DsSkeleton.Text typographyVariant="body-md-reg" />
                    <DsSkeleton.Text typographyVariant="body-sm-reg" />
                </div>
            </div>
            <div>
                <h4 className={styles.sectionLabel}>Multiple Lines</h4>
                <DsSkeleton.Text typographyVariant="body-md-reg" lines={3} />
            </div>
            <div>
                <h4 className={styles.sectionLabel}>Custom Width</h4>
                <div className={styles.sectionSmall}>
                    <DsSkeleton.Text typographyVariant="body-md-reg" width="80%" />
                    <DsSkeleton.Text typographyVariant="body-md-reg" width={200} />
                </div>
            </div>
            <div>
                <h4 className={styles.sectionLabel}>Border Radius</h4>
                <div className={styles.sectionSmall}>
                    <DsSkeleton.Text typographyVariant="body-md-reg" radius="round" />
                    <DsSkeleton.Text typographyVariant="body-md-reg" radius="default" />
                    <DsSkeleton.Text typographyVariant="body-md-reg" radius={12} />
                </div>
            </div>
        </div>
}`,...h.parameters?.docs?.source},description:{story:"Text skeleton - typography variants, multiple lines, width, and radius options",...h.parameters?.docs?.description}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.sizesRow} data-testid="circle-sizes">
            <div className={styles.sizeItem}>
                <DsSkeleton.Circle size="xsm" />
                <p className={styles.label}>xsm (24px)</p>
            </div>
            <div className={styles.sizeItem}>
                <DsSkeleton.Circle size="sm" />
                <p className={styles.label}>sm (32px)</p>
            </div>
            <div className={styles.sizeItem}>
                <DsSkeleton.Circle size="regular" />
                <p className={styles.label}>regular (40px)</p>
            </div>
            <div className={styles.sizeItem}>
                <DsSkeleton.Circle size="md" />
                <p className={styles.label}>md (48px)</p>
            </div>
            <div className={styles.sizeItem}>
                <DsSkeleton.Circle size="lg" />
                <p className={styles.label}>lg (64px)</p>
            </div>
            <div className={styles.sizeItem}>
                <DsSkeleton.Circle size="xl" />
                <p className={styles.label}>xl (80px)</p>
            </div>
            <div className={styles.sizeItem}>
                <DsSkeleton.Circle size={100} />
                <p className={styles.label}>custom (100px)</p>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('circle-sizes');
    const circles = container.querySelectorAll(\`.\${skeletonStyles.circle}\`);
    await expect(circles).toHaveLength(7);

    // Verify sizes match avatar size mapping
    const expectedSizes = ['24px', '32px', '40px', '48px', '64px', '80px', '100px'];
    circles.forEach((circle, index) => {
      void expect(circle).toHaveStyle({
        width: expectedSizes[index],
        height: expectedSizes[index]
      });
    });
  }
}`,...u.parameters?.docs?.source},description:{story:"Circle skeleton with avatar sizes",...u.parameters?.docs?.description}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.section} data-testid="rectangle-shapes">
            <div className={styles.shapeRow}>
                <DsSkeleton.Rect width={120} height={40} />
                <span className={styles.label}>Button</span>
            </div>
            <div className={styles.shapeRow}>
                <DsSkeleton.Rect width={80} height={24} radius="round" />
                <span className={styles.label}>Badge</span>
            </div>
            <div className={styles.shapeRow}>
                <DsSkeleton.Rect width={200} height={150} radius={8} />
                <span className={styles.label}>Image</span>
            </div>
        </div>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const container = canvas.getByTestId('rectangle-shapes');
    const rectangles = container.querySelectorAll(\`.\${skeletonStyles.rectangle}\`);
    await expect(rectangles).toHaveLength(3);

    // Button skeleton
    await expect(rectangles[0]).toHaveStyle({
      width: '120px',
      height: '40px',
      borderRadius: '4px'
    });

    // Badge skeleton (round radius)
    await expect(rectangles[1]).toHaveStyle({
      width: '80px',
      height: '24px',
      borderRadius: '999px'
    });

    // Image skeleton (custom radius)
    await expect(rectangles[2]).toHaveStyle({
      width: '200px',
      height: '150px',
      borderRadius: '8px'
    });
  }
}`,...y.parameters?.docs?.source},description:{story:"Rectangle skeleton - buttons, badges, images",...y.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <DsSkeleton.Circle size="lg" />
                <div className={styles.cardHeaderContent}>
                    <DsSkeleton.Text typographyVariant="heading4" width="60%" />
                    <div className={styles.cardHeaderSubtitle}>
                        <DsSkeleton.Text typographyVariant="body-sm-reg" width="80%" />
                    </div>
                </div>
            </div>
            <DsSkeleton.Text typographyVariant="body-md-reg" lines={3} />
            <div className={styles.cardActions}>
                <DsSkeleton.Rect width={100} height={36} radius={4} />
                <DsSkeleton.Rect width={100} height={36} radius={4} />
            </div>
        </div>
}`,...x.parameters?.docs?.source},description:{story:"Card skeleton composition example",...x.parameters?.docs?.description}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: () => <div className={styles.tableContainer}>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead>Progress</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {Array.from({
          length: 5
        }).map((_, i) => <TableRow key={i}>
                            <TableCell>
                                <div className={styles.tableNameCell}>
                                    <DsSkeleton.Circle size="sm" />
                                    <DsSkeleton.Text width={120} />
                                </div>
                            </TableCell>
                            <TableCell>
                                <DsSkeleton.Rect width={80} height={24} radius="round" />
                            </TableCell>
                            <TableCell>
                                <DsSkeleton.Rect width={100} height={8} radius={4} />
                            </TableCell>
                            <TableCell>
                                <DsSkeleton.Rect width={32} height={32} radius={4} />
                            </TableCell>
                        </TableRow>)}
                </TableBody>
            </Table>
        </div>
}`,...g.parameters?.docs?.source},description:{story:"Table skeleton composition - shows a loading state for tabular data",...g.parameters?.docs?.description}}};const ye=["ColorVariants","TextVariants","CircleSizes","RectangleShapes","CardSkeleton","TableSkeleton"];export{x as CardSkeleton,u as CircleSizes,p as ColorVariants,y as RectangleShapes,g as TableSkeleton,h as TextVariants,ye as __namedExportsOrder,ue as default};
