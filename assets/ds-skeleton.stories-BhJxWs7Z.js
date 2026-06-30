import{i as e}from"./preload-helper-xPQekRTU.js";import{t}from"./jsx-runtime-CaZkqeYb.js";import{c as n,d as r,f as i,l as a,m as o,n as s,o as c,p as l,s as u,t as d,u as f}from"./ds-skeleton-2u8PES4e.js";var p,m,h,g,_,v,y,b,x,S,C,w,T,E,D,O,k,A=e((()=>{p=`_verticalStack_1e7ag_1`,m=`_section_1e7ag_7`,h=`_sectionSmall_1e7ag_13`,g=`_sizesRow_1e7ag_19`,_=`_shapeRow_1e7ag_26`,v=`_sizeItem_1e7ag_32`,y=`_label_1e7ag_36`,b=`_sectionLabel_1e7ag_42`,x=`_cardContainer_1e7ag_46`,S=`_cardHeader_1e7ag_53`,C=`_cardHeaderContent_1e7ag_59`,w=`_cardHeaderSubtitle_1e7ag_63`,T=`_cardActions_1e7ag_67`,E=`_loadingContent_1e7ag_73`,D=`_tableContainer_1e7ag_79`,O=`_tableNameCell_1e7ag_86`,k={verticalStack:p,section:m,sectionSmall:h,sizesRow:g,shapeRow:_,sizeItem:v,label:y,sectionLabel:b,cardContainer:x,cardHeader:S,cardHeaderContent:C,cardHeaderSubtitle:w,cardActions:T,loadingContent:E,tableContainer:D,tableNameCell:O}})),j,M,N,P,F,I,L,R,z,B,V;e((()=>{d(),n(),A(),u(),j=t(),{expect:M,within:N}=__STORYBOOK_MODULE_TEST__,P={title:`Components/Skeleton`,component:s.Rect,parameters:{layout:`padded`}},F={render:()=>(0,j.jsxs)(`div`,{className:k.verticalStack,"data-testid":`color-variants`,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:k.sectionLabel,children:`gray (default)`}),(0,j.jsx)(s.Text,{color:`gray`}),(0,j.jsx)(s.Circle,{color:`gray`}),(0,j.jsx)(s.Rect,{width:40,height:40,color:`gray`})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:k.sectionLabel,children:`Blue`}),(0,j.jsx)(s.Text,{color:`blue`}),(0,j.jsx)(s.Circle,{color:`blue`}),(0,j.jsx)(s.Rect,{width:40,height:40,color:`blue`})]})]}),play:async({canvasElement:e})=>{let t=N(e).getByTestId(`color-variants`),n=t.querySelectorAll(`.${c.gray}`),r=t.querySelectorAll(`.${c.blue}`);await M(n).toHaveLength(3),await M(r).toHaveLength(3)}},I={render:()=>(0,j.jsxs)(`div`,{className:k.verticalStack,children:[(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:k.sectionLabel,children:`Typography Variants`}),(0,j.jsxs)(`div`,{className:k.section,children:[(0,j.jsx)(s.Text,{typographyVariant:`heading1`}),(0,j.jsx)(s.Text,{typographyVariant:`heading3`}),(0,j.jsx)(s.Text,{typographyVariant:`body-md-reg`}),(0,j.jsx)(s.Text,{typographyVariant:`body-sm-reg`})]})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:k.sectionLabel,children:`Multiple Lines`}),(0,j.jsx)(s.Text,{typographyVariant:`body-md-reg`,lines:3})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:k.sectionLabel,children:`Custom Width`}),(0,j.jsxs)(`div`,{className:k.sectionSmall,children:[(0,j.jsx)(s.Text,{typographyVariant:`body-md-reg`,width:`80%`}),(0,j.jsx)(s.Text,{typographyVariant:`body-md-reg`,width:200})]})]}),(0,j.jsxs)(`div`,{children:[(0,j.jsx)(`h4`,{className:k.sectionLabel,children:`Border Radius`}),(0,j.jsxs)(`div`,{className:k.sectionSmall,children:[(0,j.jsx)(s.Text,{typographyVariant:`body-md-reg`,radius:`round`}),(0,j.jsx)(s.Text,{typographyVariant:`body-md-reg`,radius:`default`}),(0,j.jsx)(s.Text,{typographyVariant:`body-md-reg`,radius:12})]})]})]})},L={render:()=>(0,j.jsxs)(`div`,{className:k.sizesRow,"data-testid":`circle-sizes`,children:[(0,j.jsxs)(`div`,{className:k.sizeItem,children:[(0,j.jsx)(s.Circle,{size:`xsm`}),(0,j.jsx)(`p`,{className:k.label,children:`xsm (24px)`})]}),(0,j.jsxs)(`div`,{className:k.sizeItem,children:[(0,j.jsx)(s.Circle,{size:`sm`}),(0,j.jsx)(`p`,{className:k.label,children:`sm (32px)`})]}),(0,j.jsxs)(`div`,{className:k.sizeItem,children:[(0,j.jsx)(s.Circle,{size:`regular`}),(0,j.jsx)(`p`,{className:k.label,children:`regular (40px)`})]}),(0,j.jsxs)(`div`,{className:k.sizeItem,children:[(0,j.jsx)(s.Circle,{size:`md`}),(0,j.jsx)(`p`,{className:k.label,children:`md (48px)`})]}),(0,j.jsxs)(`div`,{className:k.sizeItem,children:[(0,j.jsx)(s.Circle,{size:`lg`}),(0,j.jsx)(`p`,{className:k.label,children:`lg (64px)`})]}),(0,j.jsxs)(`div`,{className:k.sizeItem,children:[(0,j.jsx)(s.Circle,{size:`xl`}),(0,j.jsx)(`p`,{className:k.label,children:`xl (80px)`})]}),(0,j.jsxs)(`div`,{className:k.sizeItem,children:[(0,j.jsx)(s.Circle,{size:100}),(0,j.jsx)(`p`,{className:k.label,children:`custom (100px)`})]})]}),play:async({canvasElement:e})=>{let t=N(e).getByTestId(`circle-sizes`).querySelectorAll(`.${c.circle}`);await M(t).toHaveLength(7);let n=[`24px`,`32px`,`40px`,`48px`,`64px`,`80px`,`100px`];t.forEach((e,t)=>{M(e).toHaveStyle({width:n[t],height:n[t]})})}},R={render:()=>(0,j.jsxs)(`div`,{className:k.section,"data-testid":`rectangle-shapes`,children:[(0,j.jsxs)(`div`,{className:k.shapeRow,children:[(0,j.jsx)(s.Rect,{width:120,height:40}),(0,j.jsx)(`span`,{className:k.label,children:`Button`})]}),(0,j.jsxs)(`div`,{className:k.shapeRow,children:[(0,j.jsx)(s.Rect,{width:80,height:24,radius:`round`}),(0,j.jsx)(`span`,{className:k.label,children:`Badge`})]}),(0,j.jsxs)(`div`,{className:k.shapeRow,children:[(0,j.jsx)(s.Rect,{width:200,height:150,radius:8}),(0,j.jsx)(`span`,{className:k.label,children:`Image`})]})]}),play:async({canvasElement:e})=>{let t=N(e).getByTestId(`rectangle-shapes`).querySelectorAll(`.${c.rectangle}`);await M(t).toHaveLength(3),await M(t[0]).toHaveStyle({width:`120px`,height:`40px`,borderRadius:`4px`}),await M(t[1]).toHaveStyle({width:`80px`,height:`24px`,borderRadius:`999px`}),await M(t[2]).toHaveStyle({width:`200px`,height:`150px`,borderRadius:`8px`})}},z={render:()=>(0,j.jsxs)(`div`,{className:k.cardContainer,children:[(0,j.jsxs)(`div`,{className:k.cardHeader,children:[(0,j.jsx)(s.Circle,{size:`lg`}),(0,j.jsxs)(`div`,{className:k.cardHeaderContent,children:[(0,j.jsx)(s.Text,{typographyVariant:`heading4`,width:`60%`}),(0,j.jsx)(`div`,{className:k.cardHeaderSubtitle,children:(0,j.jsx)(s.Text,{typographyVariant:`body-sm-reg`,width:`80%`})})]})]}),(0,j.jsx)(s.Text,{typographyVariant:`body-md-reg`,lines:3}),(0,j.jsxs)(`div`,{className:k.cardActions,children:[(0,j.jsx)(s.Rect,{width:100,height:36,radius:4}),(0,j.jsx)(s.Rect,{width:100,height:36,radius:4})]})]})},B={render:()=>(0,j.jsx)(`div`,{className:k.tableContainer,children:(0,j.jsxs)(a,{children:[(0,j.jsx)(l,{children:(0,j.jsxs)(o,{children:[(0,j.jsx)(i,{children:`Name`}),(0,j.jsx)(i,{children:`Status`}),(0,j.jsx)(i,{children:`Progress`}),(0,j.jsx)(i,{children:`Actions`})]})}),(0,j.jsx)(f,{children:Array.from({length:5}).map((e,t)=>(0,j.jsxs)(o,{children:[(0,j.jsx)(r,{children:(0,j.jsxs)(`div`,{className:k.tableNameCell,children:[(0,j.jsx)(s.Circle,{size:`sm`}),(0,j.jsx)(s.Text,{width:120})]})}),(0,j.jsx)(r,{children:(0,j.jsx)(s.Rect,{width:80,height:24,radius:`round`})}),(0,j.jsx)(r,{children:(0,j.jsx)(s.Rect,{width:100,height:8,radius:4})}),(0,j.jsx)(r,{children:(0,j.jsx)(s.Rect,{width:32,height:32,radius:4})})]},t))})]})})},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source},description:{story:`Color variants - gray (default) and blue`,...F.parameters?.docs?.description}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source},description:{story:`Text skeleton - typography variants, multiple lines, width, and radius options`,...I.parameters?.docs?.description}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source},description:{story:`Circle skeleton with avatar sizes`,...L.parameters?.docs?.description}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source},description:{story:`Rectangle skeleton - buttons, badges, images`,...R.parameters?.docs?.description}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
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
}`,...z.parameters?.docs?.source},description:{story:`Card skeleton composition example`,...z.parameters?.docs?.description}}},B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
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
}`,...B.parameters?.docs?.source},description:{story:`Table skeleton composition - shows a loading state for tabular data`,...B.parameters?.docs?.description}}},V=[`ColorVariants`,`TextVariants`,`CircleSizes`,`RectangleShapes`,`CardSkeleton`,`TableSkeleton`]}))();export{z as CardSkeleton,L as CircleSizes,F as ColorVariants,R as RectangleShapes,B as TableSkeleton,I as TextVariants,V as __namedExportsOrder,P as default};