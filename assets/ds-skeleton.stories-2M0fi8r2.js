import{a as e,n as t}from"./chunk-BneVvdWh.js";import{t as n}from"./jsx-runtime-6sF1Ejqi.js";import{t as r}from"./classnames-Ce489xFf.js";import{a as i,i as a,n as o,o as s,r as ee,s as c,t as te}from"./core-table-Dn7D4DZ4.js";var l=t((()=>{})),u,ne,d,f=t((()=>{u=Object.freeze({xsm:24,sm:32,regular:40,md:48,lg:64,xl:80}),ne=Object.freeze({"body-md-reg":20,"body-md-md":20,"body-md-semi-bold":20,"body-md-bold":20,"body-md-link":20,"body-sm-reg":18,"body-sm-md":18,"body-sm-semi-bold":18,"body-sm-bold":18,"body-sm-link":18,"body-xs-reg":16,"body-xs-md":16,"body-xs-semi-bold":16,"body-xs-bold":16,"body-xs-link":16,"code-sm-reg":18,"code-sm-semi-bold":18,"code-xs-reg":16,"code-xs-semi-bold":16,heading1:64,heading2:54,heading3:48,heading4:36}),d=Object.freeze({default:4,round:999})})),re,ie,ae,p,m,h,oe,se,g,_=t((()=>{re=`_skeleton_109kt_1`,ie=`_shimmer_109kt_1`,ae=`_gray_109kt_5`,p=`_blue_109kt_12`,m=`_text_109kt_19`,h=`_circle_109kt_27`,oe=`_rectangle_109kt_33`,se=`_container_109kt_38`,g={skeleton:re,shimmer:ie,gray:ae,blue:p,text:m,circle:h,rectangle:oe,container:se}})),ce,v,y,le=t((()=>{ce=e(r(),1),f(),_(),v=n(),y=({typographyVariant:e=`body-sm-reg`,color:t=`gray`,lines:n=1,width:r,radius:i=`default`,className:a,style:o})=>{let s=ne[e],ee=typeof i==`number`?i:d[i],c=()=>r===void 0?`100%`:r,te=(0,ce.default)(g.skeleton,g.text,g[t],a),l=e=>({height:s,width:typeof e==`number`?String(e)+`px`:e,borderRadius:ee,...o});return(0,v.jsx)(`div`,{"aria-hidden":`true`,className:g.container,style:{gap:8},children:Array.from({length:n},(e,t)=>(0,v.jsx)(`span`,{className:te,style:l(c())},t))})},y.__docgenInfo={description:`Text skeleton component - matches typography variants
It renders pill-shaped lines that match the height of text content`,methods:[],displayName:`DsSkeletonText`,props:{color:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof skeletonColorVariants)[number]`},description:`Color variant of the skeleton
@default 'gray'`,defaultValue:{value:`'gray'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Additional inline styles`},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref to the skeleton element`},typographyVariant:{required:!1,tsType:{name:`union`,raw:`keyof typeof semanticElementMap`,elements:[{name:`literal`,value:`'body-md-reg'`},{name:`literal`,value:`'body-md-md'`},{name:`literal`,value:`'body-md-semi-bold'`},{name:`literal`,value:`'body-md-bold'`},{name:`literal`,value:`'body-md-link'`},{name:`literal`,value:`'body-sm-reg'`},{name:`literal`,value:`'body-sm-md'`},{name:`literal`,value:`'body-sm-semi-bold'`},{name:`literal`,value:`'body-sm-bold'`},{name:`literal`,value:`'body-sm-link'`},{name:`literal`,value:`'body-xs-reg'`},{name:`literal`,value:`'body-xs-md'`},{name:`literal`,value:`'body-xs-semi-bold'`},{name:`literal`,value:`'body-xs-bold'`},{name:`literal`,value:`'body-xs-link'`},{name:`literal`,value:`'code-sm-reg'`},{name:`literal`,value:`'code-sm-semi-bold'`},{name:`literal`,value:`'code-xs-reg'`},{name:`literal`,value:`'code-xs-semi-bold'`},{name:`literal`,value:`heading1`},{name:`literal`,value:`heading2`},{name:`literal`,value:`heading3`},{name:`literal`,value:`heading4`}]},description:`Typography variant - determines the height of the skeleton
@default 'body-sm-reg'`,defaultValue:{value:`'body-sm-reg'`,computed:!1}},lines:{required:!1,tsType:{name:`number`},description:`Number of lines to render
@default 1`,defaultValue:{value:`1`,computed:!1}},width:{required:!1,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Width of skeleton. Last line will have varied width if not specified.
Can be a number (px) or string ('50%', '200px')
@default '100%' (last line varies between 40-80%)`},radius:{required:!1,tsType:{name:`union`,raw:`SkeletonRadiusVariant | number`,elements:[{name:`unknown[number]`,raw:`(typeof skeletonRadiusVariants)[number]`},{name:`number`}]},description:`Border radius: 'default' (4px), 'round' (pill-shaped), or custom px value
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}}}}})),b,x,S,C=t((()=>{b=e(r(),1),f(),_(),x=n(),S=({size:e=`regular`,color:t=`gray`,className:n,style:r})=>{let i=typeof e==`number`?e:u[e],a={width:`${String(i)}px`,height:`${String(i)}px`,...r};return(0,x.jsx)(`span`,{className:(0,b.default)(g.skeleton,g.circle,g[t],n),style:a,"aria-hidden":`true`})},S.__docgenInfo={description:`Circle skeleton component - for avatars and icons
Matches DsAvatar sizes`,methods:[],displayName:`DsSkeletonCircle`,props:{color:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof skeletonColorVariants)[number]`},description:`Color variant of the skeleton
@default 'gray'`,defaultValue:{value:`'gray'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Additional inline styles`},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref to the skeleton element`},size:{required:!1,tsType:{name:`union`,raw:`DsAvatarSize | number`,elements:[{name:`union`,raw:`'xsm' | 'sm' | 'regular' | 'md' | 'lg' | 'xl'`,elements:[{name:`literal`,value:`'xsm'`},{name:`literal`,value:`'sm'`},{name:`literal`,value:`'regular'`},{name:`literal`,value:`'md'`},{name:`literal`,value:`'lg'`},{name:`literal`,value:`'xl'`}]},{name:`number`}]},description:`Size of the circle - matches DsAvatar sizes or custom pixel value
@default 'regular'`,defaultValue:{value:`'regular'`,computed:!1}}}}})),w,T,E,D=t((()=>{w=e(r(),1),f(),_(),T=n(),E=({width:e,height:t,radius:n=`default`,color:r=`gray`,className:i,style:a})=>{let o=typeof n==`number`?n:d[n],s={width:typeof e==`number`?`${String(e)}px`:e,height:typeof t==`number`?`${String(t)}px`:t,borderRadius:`${String(o)}px`,...a};return(0,T.jsx)(`span`,{className:(0,w.default)(g.skeleton,g.rectangle,g[r],i),style:s,"aria-hidden":`true`})},E.__docgenInfo={description:`Rectangle skeleton component - for buttons, images, and custom shapes`,methods:[],displayName:`DsSkeletonRect`,props:{color:{required:!1,tsType:{name:`unknown[number]`,raw:`(typeof skeletonColorVariants)[number]`},description:`Color variant of the skeleton
@default 'gray'`,defaultValue:{value:`'gray'`,computed:!1}},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Additional inline styles`},ref:{required:!1,tsType:{name:`Ref`,elements:[{name:`HTMLSpanElement`}],raw:`Ref<HTMLSpanElement>`},description:`Ref to the skeleton element`},width:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Width of rectangle. Can be number (px) or string ('50%', '200px')`},height:{required:!0,tsType:{name:`union`,raw:`string | number`,elements:[{name:`string`},{name:`number`}]},description:`Height of rectangle. Can be number (px) or string ('50%', '200px')`},radius:{required:!1,tsType:{name:`union`,raw:`SkeletonRadiusVariant | number`,elements:[{name:`unknown[number]`,raw:`(typeof skeletonRadiusVariants)[number]`},{name:`number`}]},description:`Border radius: 'default' (4px), 'round' (pill-shaped), or custom px value
@default 'default'`,defaultValue:{value:`'default'`,computed:!1}}}}})),O,ue=t((()=>{le(),C(),D(),O={Text:y,Circle:S,Rect:E}})),de=t((()=>{l(),ue(),le(),C(),D()})),k,A,j,M,N,P,F,I,fe,L,R,z,B,V,H,U,W,pe=t((()=>{k=`_verticalStack_1avtn_1`,A=`_section_1avtn_7`,j=`_sectionSmall_1avtn_13`,M=`_sizesRow_1avtn_19`,N=`_shapeRow_1avtn_26`,P=`_sizeItem_1avtn_32`,F=`_label_1avtn_36`,I=`_sectionLabel_1avtn_42`,fe=`_cardContainer_1avtn_46`,L=`_cardHeader_1avtn_53`,R=`_cardHeaderContent_1avtn_59`,z=`_cardHeaderSubtitle_1avtn_63`,B=`_cardActions_1avtn_67`,V=`_loadingContent_1avtn_73`,H=`_tableContainer_1avtn_79`,U=`_tableNameCell_1avtn_86`,W={verticalStack:k,section:A,sectionSmall:j,sizesRow:M,shapeRow:N,sizeItem:P,label:F,sectionLabel:I,cardContainer:fe,cardHeader:L,cardHeaderContent:R,cardHeaderSubtitle:z,cardActions:B,loadingContent:V,tableContainer:H,tableNameCell:U}})),G,K,q,me,J,Y,X,Z,Q,$,he;t((()=>{de(),te(),pe(),_(),G=n(),{expect:K,within:q}=__STORYBOOK_MODULE_TEST__,me={title:`Design System/Skeleton`,component:O.Rect,parameters:{layout:`padded`}},J={render:()=>(0,G.jsxs)(`div`,{className:W.verticalStack,"data-testid":`color-variants`,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h4`,{className:W.sectionLabel,children:`gray (default)`}),(0,G.jsx)(O.Text,{color:`gray`}),(0,G.jsx)(O.Circle,{color:`gray`}),(0,G.jsx)(O.Rect,{width:40,height:40,color:`gray`})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h4`,{className:W.sectionLabel,children:`Blue`}),(0,G.jsx)(O.Text,{color:`blue`}),(0,G.jsx)(O.Circle,{color:`blue`}),(0,G.jsx)(O.Rect,{width:40,height:40,color:`blue`})]})]}),play:async({canvasElement:e})=>{let t=q(e).getByTestId(`color-variants`),n=t.querySelectorAll(`.${g.gray}`),r=t.querySelectorAll(`.${g.blue}`);await K(n).toHaveLength(3),await K(r).toHaveLength(3)}},Y={render:()=>(0,G.jsxs)(`div`,{className:W.verticalStack,children:[(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h4`,{className:W.sectionLabel,children:`Typography Variants`}),(0,G.jsxs)(`div`,{className:W.section,children:[(0,G.jsx)(O.Text,{typographyVariant:`heading1`}),(0,G.jsx)(O.Text,{typographyVariant:`heading3`}),(0,G.jsx)(O.Text,{typographyVariant:`body-md-reg`}),(0,G.jsx)(O.Text,{typographyVariant:`body-sm-reg`})]})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h4`,{className:W.sectionLabel,children:`Multiple Lines`}),(0,G.jsx)(O.Text,{typographyVariant:`body-md-reg`,lines:3})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h4`,{className:W.sectionLabel,children:`Custom Width`}),(0,G.jsxs)(`div`,{className:W.sectionSmall,children:[(0,G.jsx)(O.Text,{typographyVariant:`body-md-reg`,width:`80%`}),(0,G.jsx)(O.Text,{typographyVariant:`body-md-reg`,width:200})]})]}),(0,G.jsxs)(`div`,{children:[(0,G.jsx)(`h4`,{className:W.sectionLabel,children:`Border Radius`}),(0,G.jsxs)(`div`,{className:W.sectionSmall,children:[(0,G.jsx)(O.Text,{typographyVariant:`body-md-reg`,radius:`round`}),(0,G.jsx)(O.Text,{typographyVariant:`body-md-reg`,radius:`default`}),(0,G.jsx)(O.Text,{typographyVariant:`body-md-reg`,radius:12})]})]})]})},X={render:()=>(0,G.jsxs)(`div`,{className:W.sizesRow,"data-testid":`circle-sizes`,children:[(0,G.jsxs)(`div`,{className:W.sizeItem,children:[(0,G.jsx)(O.Circle,{size:`xsm`}),(0,G.jsx)(`p`,{className:W.label,children:`xsm (24px)`})]}),(0,G.jsxs)(`div`,{className:W.sizeItem,children:[(0,G.jsx)(O.Circle,{size:`sm`}),(0,G.jsx)(`p`,{className:W.label,children:`sm (32px)`})]}),(0,G.jsxs)(`div`,{className:W.sizeItem,children:[(0,G.jsx)(O.Circle,{size:`regular`}),(0,G.jsx)(`p`,{className:W.label,children:`regular (40px)`})]}),(0,G.jsxs)(`div`,{className:W.sizeItem,children:[(0,G.jsx)(O.Circle,{size:`md`}),(0,G.jsx)(`p`,{className:W.label,children:`md (48px)`})]}),(0,G.jsxs)(`div`,{className:W.sizeItem,children:[(0,G.jsx)(O.Circle,{size:`lg`}),(0,G.jsx)(`p`,{className:W.label,children:`lg (64px)`})]}),(0,G.jsxs)(`div`,{className:W.sizeItem,children:[(0,G.jsx)(O.Circle,{size:`xl`}),(0,G.jsx)(`p`,{className:W.label,children:`xl (80px)`})]}),(0,G.jsxs)(`div`,{className:W.sizeItem,children:[(0,G.jsx)(O.Circle,{size:100}),(0,G.jsx)(`p`,{className:W.label,children:`custom (100px)`})]})]}),play:async({canvasElement:e})=>{let t=q(e).getByTestId(`circle-sizes`).querySelectorAll(`.${g.circle}`);await K(t).toHaveLength(7);let n=[`24px`,`32px`,`40px`,`48px`,`64px`,`80px`,`100px`];t.forEach((e,t)=>{K(e).toHaveStyle({width:n[t],height:n[t]})})}},Z={render:()=>(0,G.jsxs)(`div`,{className:W.section,"data-testid":`rectangle-shapes`,children:[(0,G.jsxs)(`div`,{className:W.shapeRow,children:[(0,G.jsx)(O.Rect,{width:120,height:40}),(0,G.jsx)(`span`,{className:W.label,children:`Button`})]}),(0,G.jsxs)(`div`,{className:W.shapeRow,children:[(0,G.jsx)(O.Rect,{width:80,height:24,radius:`round`}),(0,G.jsx)(`span`,{className:W.label,children:`Badge`})]}),(0,G.jsxs)(`div`,{className:W.shapeRow,children:[(0,G.jsx)(O.Rect,{width:200,height:150,radius:8}),(0,G.jsx)(`span`,{className:W.label,children:`Image`})]})]}),play:async({canvasElement:e})=>{let t=q(e).getByTestId(`rectangle-shapes`).querySelectorAll(`.${g.rectangle}`);await K(t).toHaveLength(3),await K(t[0]).toHaveStyle({width:`120px`,height:`40px`,borderRadius:`4px`}),await K(t[1]).toHaveStyle({width:`80px`,height:`24px`,borderRadius:`999px`}),await K(t[2]).toHaveStyle({width:`200px`,height:`150px`,borderRadius:`8px`})}},Q={render:()=>(0,G.jsxs)(`div`,{className:W.cardContainer,children:[(0,G.jsxs)(`div`,{className:W.cardHeader,children:[(0,G.jsx)(O.Circle,{size:`lg`}),(0,G.jsxs)(`div`,{className:W.cardHeaderContent,children:[(0,G.jsx)(O.Text,{typographyVariant:`heading4`,width:`60%`}),(0,G.jsx)(`div`,{className:W.cardHeaderSubtitle,children:(0,G.jsx)(O.Text,{typographyVariant:`body-sm-reg`,width:`80%`})})]})]}),(0,G.jsx)(O.Text,{typographyVariant:`body-md-reg`,lines:3}),(0,G.jsxs)(`div`,{className:W.cardActions,children:[(0,G.jsx)(O.Rect,{width:100,height:36,radius:4}),(0,G.jsx)(O.Rect,{width:100,height:36,radius:4})]})]})},$={render:()=>(0,G.jsx)(`div`,{className:W.tableContainer,children:(0,G.jsxs)(o,{children:[(0,G.jsx)(s,{children:(0,G.jsxs)(c,{children:[(0,G.jsx)(i,{children:`Name`}),(0,G.jsx)(i,{children:`Status`}),(0,G.jsx)(i,{children:`Progress`}),(0,G.jsx)(i,{children:`Actions`})]})}),(0,G.jsx)(ee,{children:Array.from({length:5}).map((e,t)=>(0,G.jsxs)(c,{children:[(0,G.jsx)(a,{children:(0,G.jsxs)(`div`,{className:W.tableNameCell,children:[(0,G.jsx)(O.Circle,{size:`sm`}),(0,G.jsx)(O.Text,{width:120})]})}),(0,G.jsx)(a,{children:(0,G.jsx)(O.Rect,{width:80,height:24,radius:`round`})}),(0,G.jsx)(a,{children:(0,G.jsx)(O.Rect,{width:100,height:8,radius:4})}),(0,G.jsx)(a,{children:(0,G.jsx)(O.Rect,{width:32,height:32,radius:4})})]},t))})]})})},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Color variants - gray (default) and blue`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source},description:{story:`Text skeleton - typography variants, multiple lines, width, and radius options`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source},description:{story:`Circle skeleton with avatar sizes`,...X.parameters?.docs?.description}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Rectangle skeleton - buttons, badges, images`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Card skeleton composition example`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Table skeleton composition - shows a loading state for tabular data`,...$.parameters?.docs?.description}}},he=[`ColorVariants`,`TextVariants`,`CircleSizes`,`RectangleShapes`,`CardSkeleton`,`TableSkeleton`]}))();export{Q as CardSkeleton,X as CircleSizes,J as ColorVariants,Z as RectangleShapes,$ as TableSkeleton,Y as TextVariants,he as __namedExportsOrder,me as default};