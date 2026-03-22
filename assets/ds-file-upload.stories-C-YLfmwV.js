import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-Bowpj2Im.js";import{r}from"./react-BuOCHV3p.js";import{t as i}from"./jsx-runtime-Cw9gq7QB.js";import{c as a,l as o,n as s,s as c}from"./blocks-CUxBEDqq.js";import{t as l}from"./classnames-BKwtnCRs.js";import{t as u}from"./compiler-runtime-D1S0sxXa.js";import{i as d}from"./ds-icon.types-CDSzrCw1.js";import{t as f}from"./ds-icon-B9LMLd-3.js";import{t as p}from"./ds-typography-DjAcMKBU.js";import{t as m}from"./ds-typography-CAc8mbMz.js";import{n as h,t as g}from"./ds-button-Clm8l7Dp.js";import{t as _}from"./ds-tooltip-D1sDJm0c.js";import{t as v}from"./ds-tooltip-4J2bCQU0.js";import{D as y,E as b,O as x,d as ee,k as te,l as ne,t as S,u as re}from"./dist-BGlRdQEz.js";import{t as C}from"./mdx-react-shim-CEOFcyUV.js";function w(e){return T[e]||e||`File validation failed`}var T,E=t((()=>{T={FILE_TOO_LARGE:`File size exceeds the maximum limit`,FILE_INVALID_TYPE:`File type is not allowed`,TOO_MANY_FILES:`Too many files selected`,FILE_TOO_SMALL:`File size is too small`,FILE_INVALID:`File is invalid`,FILE_EXISTS:`File already exists`}})),D,O,k,A,j,M,N,P,F,I,L,ie,ae,R,oe,se,z,B,ce=t((()=>{D=`_fileItem_hpxvh_1`,O=`_fileItemContent_hpxvh_5`,k=`_fileItemError_hpxvh_22`,A=`_progressRange_hpxvh_25`,j=`_fileItemCompleted_hpxvh_28`,M=`_fileItemUploading_hpxvh_31`,N=`_fileItemInterrupted_hpxvh_34`,P=`_filePreview_hpxvh_38`,F=`_fileInfo_hpxvh_42`,I=`_fileName_hpxvh_50`,L=`_progressContainer_hpxvh_65`,ie=`_progressBar_hpxvh_72`,ae=`_progressTrack_hpxvh_77`,R=`_progressText_hpxvh_92`,oe=`_completedText_hpxvh_105`,se=`_interruptedText_hpxvh_118`,z=`_errorMessage_hpxvh_131`,B={fileItem:D,fileItemContent:O,fileItemError:k,progressRange:A,fileItemCompleted:j,fileItemUploading:M,fileItemInterrupted:N,filePreview:P,fileInfo:F,fileName:I,progressContainer:L,progressBar:ie,progressTrack:ae,progressText:R,completedText:oe,interruptedText:se,errorMessage:z}}));function le(e){return(0,U.jsxs)(`div`,{className:B.errorMessage,children:[(0,U.jsx)(d,{icon:`cancel`,size:`tiny`,filled:!0}),w(e)]},e)}var V,H,U,ue,de=t((()=>{V=u(),H=e(l(),1),S(),v(),g(),f(),E(),ce(),U=i(),ue=e=>{let t=(0,V.c)(61),{id:n,name:r,progress:i,hideProgress:a,status:o,errors:s,onCancel:c,onRetry:l,onRemove:u,onDelete:f}=e,p=a===void 0?!1:a,m=o===`error`,g=o===`completed`,v=o===`uploading`,y=o===`interrupted`||o===`cancelled`,b;t[0]!==m||t[1]!==g||t[2]!==v||t[3]!==y?(b=(0,H.default)(B.fileItemContent,{[B.fileItemError]:m,[B.fileItemCompleted]:g,[B.fileItemUploading]:v,[B.fileItemInterrupted]:y}),t[0]=m,t[1]=g,t[2]=v,t[3]=y,t[4]=b):b=t[4];let x=b,te;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(te=(0,U.jsx)(d,{className:B.filePreview,icon:`upload_file`,size:`tiny`}),t[5]=te):te=t[5];let S;t[6]===r?S=t[7]:(S=(0,U.jsx)(`div`,{className:B.fileName,title:r,children:r}),t[6]=r,t[7]=S);let C=o===`error`?1:i,w;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(w=(0,U.jsx)(ne,{className:B.progressTrack,children:(0,U.jsx)(ee,{className:B.progressRange})}),t[8]=w):w=t[8];let T;t[9]===C?T=t[10]:(T=(0,U.jsx)(re,{value:C,className:B.progressBar,children:w}),t[9]=C,t[10]=T);let E;t[11]!==T||t[12]!==S?(E=(0,U.jsxs)(`div`,{className:B.fileInfo,children:[S,T]}),t[11]=T,t[12]=S,t[13]=E):E=t[13];let D;t[14]!==n||t[15]!==r||t[16]!==l||t[17]!==o?(D=(o===`interrupted`||o===`cancelled`)&&l&&(0,U.jsx)(_,{content:`Retry`,children:(0,U.jsx)(h,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Retry ${r} upload`,onClick:()=>l(n),children:(0,U.jsx)(d,{icon:`refresh`,size:`small`})})}),t[14]=n,t[15]=r,t[16]=l,t[17]=o,t[18]=D):D=t[18];let O;t[19]!==n||t[20]!==r||t[21]!==u||t[22]!==o?(O=(o===`pending`||o===`error`||o===`interrupted`)&&(0,U.jsx)(_,{content:`Remove`,children:(0,U.jsx)(h,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Remove ${r} upload`,onClick:()=>u?.(n),children:(0,U.jsx)(d,{icon:`do_not_disturb_on`,size:`small`})})}),t[19]=n,t[20]=r,t[21]=u,t[22]=o,t[23]=O):O=t[23];let k;t[24]!==n||t[25]!==r||t[26]!==c||t[27]!==o?(k=o===`uploading`&&c&&(0,U.jsx)(_,{content:`Cancel`,children:(0,U.jsx)(h,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Cancel ${r} upload`,onClick:()=>c(n),children:(0,U.jsx)(d,{icon:`close`,size:`small`})})}),t[24]=n,t[25]=r,t[26]=c,t[27]=o,t[28]=k):k=t[28];let A;t[29]!==n||t[30]!==r||t[31]!==f||t[32]!==o?(A=o===`completed`&&(0,U.jsx)(_,{content:`Delete`,children:(0,U.jsx)(h,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Delete ${r}`,onClick:()=>f?.(n),children:(0,U.jsx)(d,{icon:`delete`,size:`small`})})}),t[29]=n,t[30]=r,t[31]=f,t[32]=o,t[33]=A):A=t[33];let j;t[34]!==x||t[35]!==E||t[36]!==D||t[37]!==O||t[38]!==k||t[39]!==A?(j=(0,U.jsxs)(`div`,{className:x,children:[te,E,D,O,k,A]}),t[34]=x,t[35]=E,t[36]=D,t[37]=O,t[38]=k,t[39]=A,t[40]=j):j=t[40];let M;t[41]===o?M=t[42]:(M=o===`completed`&&(0,U.jsxs)(`div`,{className:B.completedText,children:[(0,U.jsx)(d,{icon:`check_circle`,size:`tiny`,filled:!0}),`Upload complete`]}),t[41]=o,t[42]=M);let N;t[43]===o?N=t[44]:(N=o===`interrupted`&&(0,U.jsxs)(`div`,{className:B.interruptedText,children:[(0,U.jsx)(d,{icon:`info`,size:`tiny`,filled:!0}),`Upload interrupted`]}),t[43]=o,t[44]=N);let P;t[45]===o?P=t[46]:(P=o===`cancelled`&&(0,U.jsxs)(`div`,{className:B.interruptedText,children:[(0,U.jsx)(d,{icon:`info`,size:`tiny`,filled:!0}),`Upload cancelled`]}),t[45]=o,t[46]=P);let F;t[47]!==s||t[48]!==o?(F=o===`error`&&s?.length&&s.map(le),t[47]=s,t[48]=o,t[49]=F):F=t[49];let I;t[50]!==p||t[51]!==i||t[52]!==o?(I=!p&&o===`uploading`&&(0,U.jsxs)(`span`,{className:B.progressText,children:[`Uploading...(`,Math.round(i),`%)`]}),t[50]=p,t[51]=i,t[52]=o,t[53]=I):I=t[53];let L;return t[54]!==j||t[55]!==M||t[56]!==N||t[57]!==P||t[58]!==F||t[59]!==I?(L=(0,U.jsxs)(`div`,{className:B.fileItem,children:[j,M,N,P,F,I]}),t[54]=j,t[55]=M,t[56]=N,t[57]=P,t[58]=F,t[59]=I,t[60]=L):L=t[60],L}})),fe=t((()=>{de()})),pe,me,he=t((()=>{pe=[`application/pdf`,`text/csv`,`application/zip`,`application/x-zip-compressed`],me=25e6})),ge,_e=t((()=>{ge={"image/png":[`.png`],"image/gif":[`.gif`],"image/jpeg":[`.jpg`,`.jpeg`],"image/svg+xml":[`.svg`],"image/webp":[`.webp`],"image/avif":[`.avif`],"image/heic":[`.heic`,`.heif`],"image/bmp":[`.bmp`],"application/pdf":[`.pdf`],"application/zip":[`.zip`],"application/json":[`.json`],"application/xml":[`.xml`],"application/msword":[`.doc`],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[`.docx`],"application/vnd.ms-excel":[`.xls`],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[`.xlsx`],"application/vnd.ms-powerpoint":[`.ppt`],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[`.pptx`],"application/rtf":[`.rtf`],"application/x-rar":[`.rar`],"application/x-7z-compressed":[`.7z`],"application/x-tar":[`.tar`],"application/vnd.microsoft.portable-executable":[`.exe`,`.dll`],"text/css":[`.css`],"text/csv":[`.csv`],"text/html":[`.html`,`.htm`],"text/markdown":[`.md`,`.markdown`],"text/plain":[`.txt`],"font/ttf":[`.ttf`],"font/otf":[`.otf`],"font/woff":[`.woff`],"font/woff2":[`.woff2`],"font/eot":[`.eot`],"font/svg":[`.svg`],"video/mp4":[`.mp4`],"video/webm":[`.webm`],"video/ogg":[`.ogv`],"video/quicktime":[`.mov`],"video/x-msvideo":[`.avi`],"audio/mpeg":[`.mp3`],"audio/ogg":[`.ogg`,`.oga`],"audio/wav":[`.wav`],"audio/webm":[`.weba`],"audio/aac":[`.aac`],"audio/flac":[`.flac`],"audio/x-m4a":[`.m4a`],"image/*":[`.png`,`.jpg`,`.jpeg`,`.gif`,`.webp`,`.svg`,`.bmp`,`.avif`,`.heic`,`.heif`],"audio/*":[`.mp3`,`.wav`,`.ogg`,`.oga`,`.m4a`,`.flac`,`.aac`,`.weba`],"video/*":[`.mp4`,`.webm`,`.ogv`,`.mov`,`.avi`],"text/*":[`.txt`,`.html`,`.htm`,`.css`,`.csv`,`.md`,`.markdown`],"application/*":[`.pdf`,`.zip`,`.json`,`.xml`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.rtf`,`.rar`,`.7z`,`.tar`],"font/*":[`.ttf`,`.otf`,`.woff`,`.woff2`,`.eot`]}}));function ve(e){return e.flatMap(e=>typeof e==`string`?ge[e]??[]:e.extensions)}function ye(e){return e.map(e=>typeof e==`string`?e:e.mimeType)}var be=t((()=>{_e()}));function xe(e){if(e===0)return`0 B`;let t=1e3,n=[`B`,`KB`,`MB`,`GB`,`TB`,`PB`],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**+r).toFixed(2)} ${String(n[r])}`}var Se=t((()=>{}));function Ce(e,t,n){let r=ve(e),i=[...new Set(r)].map(e=>e.toUpperCase()).join(`, `),a=xe(t),o=[];return i&&o.push(`Only ${i} files`),t<1/0&&o.push(`File size ${a} max`),n===1?o.push(`Only 1 file`):n>1&&o.push(`Up to ${String(n)} files`),o.join(`. `)+`.`}var we=t((()=>{be(),Se()})),Te,Ee,De,Oe,ke,Ae,je,Me,W,Ne=t((()=>{Te=`_fileUploadRoot_baybr_1`,Ee=`_dropzone_baybr_7`,De=`_dropzoneCompact_baybr_19`,Oe=`_dropzoneIcon_baybr_23`,ke=`_dropzoneText_baybr_26`,Ae=`_fileList_baybr_57`,je=`_infoText_baybr_67`,Me=`_errorText_baybr_72`,W={fileUploadRoot:Te,dropzone:Ee,dropzoneCompact:De,dropzoneIcon:Oe,dropzoneText:ke,fileList:Ae,infoText:je,errorText:Me}})),Pe,Fe,G,Ie,Le=t((()=>{Pe=u(),Fe=e(l(),1),S(),f(),m(),g(),fe(),he(),we(),be(),Ne(),G=i(),Ie=e=>{let t=(0,Pe.c)(52),{style:n,className:r,files:i,acceptedFiles:a,errorText:o,dropzoneText:s,triggerText:c,hideProgress:l,hideInfoText:u,disableDrop:f,onFileAccept:m,onFileReject:g,onFileRemove:_,onFileDelete:v,onFileCancel:ee,onFileRetry:ne,accept:S,maxFiles:re,maxFileSize:C,compact:w,disabled:T}=e,E;t[0]===n?E=t[1]:(E=n===void 0?{}:n,t[0]=n,t[1]=E);let D=E,O=s===void 0?`Drag and drop files here or `:s,k=c===void 0?`Select file...`:c,A=l===void 0?!1:l,j=u===void 0?!1:u,M=f===void 0?!1:f,N=S===void 0?pe:S,P=re===void 0?5:re,F=C===void 0?me:C,I=w===void 0?!1:w,L=T===void 0?!1:T,ie;t[2]!==N||t[3]!==F||t[4]!==P?(ie=Ce(N,F,P),t[2]=N,t[3]=F,t[4]=P,t[5]=ie):ie=t[5];let ae=ie,R;t[6]===r?R=t[7]:(R=(0,Fe.default)(W.fileUploadRoot,r),t[6]=r,t[7]=R);let oe;t[8]===N?oe=t[9]:(oe=ye(N),t[8]=N,t[9]=oe);let se=!M,z;t[10]===I?z=t[11]:(z=(0,Fe.default)(W.dropzone,{[W.dropzoneCompact]:I}),t[10]=I,t[11]=z);let B;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(B=(0,G.jsx)(d,{icon:`upload`,className:W.dropzoneIcon}),t[12]=B):B=t[12];let ce;t[13]===O?ce=t[14]:(ce=(0,G.jsx)(p,{className:W.dropzoneText,variant:`body-xs-reg`,children:O}),t[13]=O,t[14]=ce);let le;t[15]!==L||t[16]!==k?(le=(0,G.jsx)(b,{asChild:!0,children:(0,G.jsx)(h,{design:`v1.2`,variant:`ghost`,size:`small`,disabled:L,children:k})}),t[15]=L,t[16]=k,t[17]=le):le=t[17];let V;t[18]!==z||t[19]!==ce||t[20]!==le?(V=(0,G.jsxs)(te,{className:z,children:[B,ce,le]}),t[18]=z,t[19]=ce,t[20]=le,t[21]=V):V=t[21];let H;t[22]!==L||t[23]!==o||t[24]!==j||t[25]!==ae?(H=ae&&!j&&!L&&!o&&(0,G.jsx)(p,{className:W.infoText,variant:`body-xs-reg`,children:ae}),t[22]=L,t[23]=o,t[24]=j,t[25]=ae,t[26]=H):H=t[26];let U;t[27]===o?U=t[28]:(U=o&&(0,G.jsxs)(p,{className:W.errorText,variant:`body-xs-reg`,children:[(0,G.jsx)(d,{icon:`error`,size:`tiny`}),o]}),t[27]=o,t[28]=U);let de;t[29]!==i||t[30]!==A||t[31]!==ee||t[32]!==v||t[33]!==_||t[34]!==ne?(de=!!i?.length&&(0,G.jsx)(`div`,{className:W.fileList,children:i.map(e=>(0,G.jsx)(ue,{id:e.id,name:e.name,progress:e.progress,hideProgress:A,status:e.status,errors:e.errors,onRemove:_,onDelete:v,onCancel:ee,onRetry:ne},e.id))}),t[29]=i,t[30]=A,t[31]=ee,t[32]=v,t[33]=_,t[34]=ne,t[35]=de):de=t[35];let fe;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(fe=(0,G.jsx)(x,{}),t[36]=fe):fe=t[36];let he;return t[37]!==a||t[38]!==L||t[39]!==F||t[40]!==P||t[41]!==m||t[42]!==g||t[43]!==D||t[44]!==R||t[45]!==oe||t[46]!==se||t[47]!==V||t[48]!==H||t[49]!==U||t[50]!==de?(he=(0,G.jsxs)(y,{style:D,className:R,maxFiles:P,maxFileSize:F,accept:oe,disabled:L,allowDrop:se,acceptedFiles:a,onFileAccept:m,onFileReject:g,children:[V,H,U,de,fe]}),t[37]=a,t[38]=L,t[39]=F,t[40]=P,t[41]=m,t[42]=g,t[43]=D,t[44]=R,t[45]=oe,t[46]=se,t[47]=V,t[48]=H,t[49]=U,t[50]=de,t[51]=he):he=t[51],he}})),Re=t((()=>{Le()}));function ze(e,t,n){return{...e,id:`${e.name}-${String(Date.now())}-${String(Math.random())}`,name:e.name,size:e.size,type:e.type,progress:0,status:t,errors:n}}var Be=t((()=>{}));function Ve(e,t){return e.name===t.name&&e.size===t.size&&e.type===t.type}var He=t((()=>{})),Ue,We,Ge,Ke=t((()=>{Ue=class extends Error{constructor(e){super(e),this.name=this.constructor.name}},We=class extends Ue{isRetryable=!0},Ge=class extends Ue{isRetryable=!1}}));function qe({adapter:e,autoUpload:t=!0,maxConcurrent:n=3,maxFiles:r,metadata:i,onFileUploadComplete:a,onFileUploadError:o,onAllFileUploadsComplete:s}){let[c]=(0,Je.useState)(()=>new Map),[l,u]=(0,Je.useState)([]),d=l.filter(e=>e.status!==`error`);l.length&&!l.some(e=>e.status===`uploading`)&&s?.();let f=e=>e.filter(e=>!d.some(t=>Ve(t,e))),p=e=>e.filter(e=>{if(e.id)return!1;let t=l.filter(t=>Ve(t,e));return t.length?!t.some(e=>e.errors?.includes(`FILE_EXISTS`)):!1}),m=e=>{let t=e.map(e=>({file:e,errors:[`FILE_EXISTS`]}));t.length&&y(t)},h=e=>{if(r===void 0)return e;let t=r-d.length,n,i;if(t<=0)n=[],i=e;else if(e.length>t)n=e.slice(0,t),i=e.slice(t);else return e;return y(i.map(e=>({file:e,errors:[`TOO_MANY_FILES`]}))),n},g=e=>{let t=e.map(e=>ze(e,`pending`));return u(e=>[...e,...t]),t},_=e=>{t&&e.forEach(e=>{te(e)})},v=e=>{let t=f(e);m(p(e));let n=g(h(t));return _(n),n},y=e=>{let t=e.map(({file:e,errors:t})=>ze(e,`error`,t));u(e=>[...e,...t])},b=(e,t)=>{u(n=>n.map(n=>n.id===e?{...n,progress:t}:n))},x=(e,t,n)=>{u(r=>r.map(r=>r.id===e?{...r,status:t,errors:n?[...r.errors||[],n]:r.errors}:r))},ee=async e=>{let t=d.find(t=>t.id===e);t&&await te(t)},te=async t=>{let n=t.id,r=new AbortController;c.set(n,r),x(t.id,`uploading`);try{let o=await e.upload({file:t,fileId:n,metadata:i,signal:r.signal,onProgress:e=>{b(n,e)}});x(n,`completed`),b(n,100),a?.(n,o)}catch(e){let t=e instanceof Error?e.message:`Upload failed`,r=`interrupted`;e instanceof Ue&&(r=e.isRetryable?`interrupted`:`error`),x(n,r,t),o?.(n,t)}finally{c.delete(n)}},ne=async()=>{let e=l.filter(e=>e.status===`pending`);for(let t=0;t<e.length;t+=n){let r=e.slice(t,t+n);await Promise.allSettled(r.map(e=>ee(e.id)))}},S=async t=>{c.get(t)?.abort(),c.delete(t),e.cancel&&await e.cancel(t),x(t,`cancelled`)},re=async e=>{x(e,`pending`),b(e,0),await ee(e)},C=e=>{c.get(e)?.abort(),c.delete(e),u(t=>t.filter(t=>t.id!==e))},w=async t=>{e.delete&&await e.delete(t),C(t)};return{files:l,acceptedFiles:d,addFiles:v,addRejectedFiles:y,removeFile:C,deleteFile:w,uploadFile:ee,uploadAll:ne,cancelUpload:S,retryUpload:re,clearFiles:()=>{c.forEach(e=>e.abort()),c.clear(),u([])},getProps:e=>({files:l,acceptedFiles:d,onFileAccept:t=>{let n=v(t.files);e?.onFilesAdded?.(n)},onFileReject:e=>{y(e.files.map(e=>({file:e.file,errors:e.errors})))},onFileRemove:t=>{C(t),e?.onFileRemoved?.(t)},onFileDelete:async t=>{await w(t),e?.onFileDeleted?.(t)},onFileCancel:async t=>{await S(t),e?.onFileUploadCanceled?.(t)},onFileRetry:async t=>{await re(t),e?.onFileUploadRetried?.(t)}})}}var Je,Ye=t((()=>{Je=e(n(),1),Be(),He(),Ke()})),Xe=t((()=>{Ye()})),Ze,Qe,$e,et=t((()=>{Ze=u(),Re(),Xe(),Qe=i(),$e=e=>{let t=(0,Ze.c)(33),n,r,i,a,o,s,c,l,u,d,f,p,m;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11],p=t[12],m=t[13]):({adapter:n,autoUpload:p,maxConcurrent:m,metadata:r,onFileUploadComplete:c,onFileUploadError:l,onFilesAdded:d,onFileRemoved:o,onFileDeleted:a,onFileUploadCanceled:s,onFileUploadRetried:u,onAllFileUploadsComplete:i,...f}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m);let h=p===void 0?!0:p,g=m===void 0?3:m,_;t[14]!==n||t[15]!==h||t[16]!==g||t[17]!==r||t[18]!==i||t[19]!==c||t[20]!==l||t[21]!==f.maxFiles?(_={adapter:n,autoUpload:h,maxConcurrent:g,maxFiles:f.maxFiles,metadata:r,onFileUploadComplete:c,onFileUploadError:l,onAllFileUploadsComplete:i},t[14]=n,t[15]=h,t[16]=g,t[17]=r,t[18]=i,t[19]=c,t[20]=l,t[21]=f.maxFiles,t[22]=_):_=t[22];let{getProps:v}=qe(_),y;t[23]!==v||t[24]!==a||t[25]!==o||t[26]!==s||t[27]!==u||t[28]!==d?(y=v({onFilesAdded:d,onFileRemoved:o,onFileDeleted:a,onFileUploadCanceled:s,onFileUploadRetried:u}),t[23]=v,t[24]=a,t[25]=o,t[26]=s,t[27]=u,t[28]=d,t[29]=y):y=t[29];let b=y,x;return t[30]!==b||t[31]!==f?(x=(0,Qe.jsx)(Ie,{...b,...f}),t[30]=b,t[31]=f,t[32]=x):x=t[32],x}}));async function tt(e){let t=at(e);await q(()=>K(t.queryByText(/Uploading/i)).toBeInTheDocument(),{timeout:1e3}),await q(()=>K(t.queryByText(/complete/i)).toBeInTheDocument(),{timeout:5e3});let n=t.getByLabelText(/delete/i);await it.click(n),await q(()=>K(t.queryByText(`test-document.pdf`)).not.toBeInTheDocument())}async function nt(e){let t=at(e);await q(()=>K(t.queryByText(/Uploading/i)).toBeInTheDocument(),{timeout:1e3}),await q(()=>K(t.queryByText(/interrupted|lost|failed/i)).toBeInTheDocument(),{timeout:5e3});let n=t.getByLabelText(/retry/i);await it.click(n),await q(()=>K(t.queryByText(/complete/i)).toBeInTheDocument(),{timeout:5e3});let r=t.getByLabelText(/delete/i);await it.click(r)}async function rt(e){let t=at(e);await q(()=>K(t.queryByText(/failed|error|unsupported/i)).toBeInTheDocument(),{timeout:2e3});let n=t.getByLabelText(/remove/i);await it.click(n),await q(()=>K(t.queryByText(`test-document.pdf`)).not.toBeInTheDocument())}var K,it,q,at,J,ot,st=t((()=>{({expect:K,userEvent:it,waitFor:q,within:at}=__STORYBOOK_MODULE_TEST__),J=(e={})=>{let{name:t=`test-document.pdf`,type:n=`application/pdf`,size:r=1024*100}=e,i=new File([`test content`],t,{type:n});return Object.defineProperty(i,`size`,{value:r,writable:!1}),i},ot=e=>async({canvasElement:t})=>{let n=J(),r=t.querySelector(`input[type="file"]`);if(!r)throw Error(`File input not found`);switch(await it.upload(r,n),e){case`normal`:await tt(t);break;case`interrupted`:await nt(t);break;case`error`:await rt(t);break}}})),ct,Y,lt=t((()=>{Ke(),ct=class{interruptedRuns=-1;uploads=new Map;config;constructor(e={}){this.config=e}async upload(e){let{scenario:t=`success`,duration:n=2e3,steps:r=20,interruptAt:i=30,errorMessage:a=`Upload failed`,delay:o=0}=this.config,{file:s,fileId:c,onProgress:l,signal:u}=e;this.uploads.set(c,{cancelled:!1});let d=()=>u?.aborted||this.uploads.get(c)?.cancelled?(this.uploads.delete(c),!0):!1;if(o>0&&(await this.sleep(o),d()))throw new We(`Upload cancelled`);if(t===`error`)throw new Ge(a||`Unsupported file type`);let f=n/r;for(let e=0;e<=r;e++){if(d())throw new We(`Upload cancelled`);await this.sleep(f);let n=Math.min(e/r*100,100);if(l?.(n),t===`interrupted`&&n>=i&&this.interruptedRuns%2)throw this.uploads.delete(c),this.interruptedRuns++,new We(a||`Network connection lost`)}return this.interruptedRuns++,this.uploads.delete(c),{url:`mock://uploaded/${s.name}`,metadata:{fileName:s.name,fileSize:s.size,fileType:s.type,uploadedAt:new Date().toISOString()}}}cancel(e){let t=this.uploads.get(e);t&&(t.cancelled=!0)}sleep(e){return new Promise(t=>setTimeout(t,e))}},Y={normal:()=>new ct({scenario:`success`,duration:2e3+Math.random()*1e3,steps:20}),fast:()=>new ct({scenario:`success`,duration:800,steps:10}),slow:()=>new ct({scenario:`success`,duration:1e4,steps:30}),interrupted:(e=30)=>new ct({scenario:`interrupted`,duration:1e3,steps:20,interruptAt:e,errorMessage:`Network connection lost`}),error:e=>new ct({scenario:`error`,errorMessage:e||`Unsupported file type`}),custom:e=>new ct(e)}})),ut=t((()=>{})),dt=t((()=>{et(),Re(),ut(),Xe()})),ft,pt=t((()=>{ft=`import type {
	FileMetadata,
	FileUploadAdapter,
	FileUploadOptions,
	FileUploadResult,
} from '../../ds-file-upload-api.types';
import { FatalFileUploadError, RetryableFileUploadError } from '../../errors/file-upload-errors';

/**
 * Simple file upload adapter example using XMLHttpRequest
 * This adapter posts files to a backend endpoint using FormData
 *
 * @param uploadEndpoint - backend URL to POST files to
 * @returns a FileUploadAdapter implementation
 *
 * Expected backend response format:
 * {
 *   "url": "https://example.com/files/uploaded-file.pdf",
 *   "metadata": { ... } // optional
 * }
 */
export function getSimpleFileUploadAdapter(uploadEndpoint: string): FileUploadAdapter {
	return {
		upload(options: FileUploadOptions): Promise<FileUploadResult> {
			const xhr = new XMLHttpRequest();
			const formData = new FormData();

			// Add file to form data
			formData.append('file', options.file);

			// Add metadata if provided
			if (options.metadata) {
				formData.append('metadata', JSON.stringify(options.metadata));
			}

			return new Promise((resolve, reject) => {
				// Track upload progress
				xhr.upload.addEventListener('progress', (e) => {
					if (e.lengthComputable && options.onProgress) {
						options.onProgress((e.loaded / e.total) * 100);
					}
				});

				// Handle successful completion
				xhr.addEventListener('load', () => {
					if (xhr.status >= 200 && xhr.status < 300) {
						try {
							const response = JSON.parse(xhr.responseText) as { url: string; metadata: FileMetadata };
							resolve({
								url: response.url,
								metadata: response.metadata,
							});
						} catch {
							reject(new FatalFileUploadError('Invalid server response'));
						}
					} else if (xhr.status >= 400 && xhr.status < 500) {
						// Client errors (bad request, unauthorized, etc.) are fatal
						reject(new FatalFileUploadError(\`Upload failed: \${xhr.statusText}\`));
					} else {
						// Server errors (5xx) are retryable
						reject(new RetryableFileUploadError(\`Server error: \${xhr.statusText}\`));
					}
				});

				// Handle network errors (retryable)
				xhr.addEventListener('error', () => {
					reject(new RetryableFileUploadError('Network error occurred'));
				});

				// Handle timeout (retryable)
				xhr.addEventListener('timeout', () => {
					reject(new RetryableFileUploadError('Upload timeout'));
				});

				// Handle cancellation (retryable - user can retry after canceling)
				options.signal?.addEventListener('abort', () => {
					xhr.abort();
					reject(new RetryableFileUploadError('Upload cancelled'));
				});

				// Send request
				xhr.open('POST', uploadEndpoint);
				xhr.send(formData);
			});
		},
	};
}
`}));function mt(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,p:`p`,strong:`strong`,...r(),...e.components};return(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(t.h1,{id:`file-upload`,children:`File Upload`}),`
`,(0,X.jsxs)(t.p,{children:[`To use the file upload component you need to provide an adapter that implements the `,(0,X.jsx)(t.code,{children:`FileUploadAdapter`}),` interface.
See sample adapter below implemented using the native `,(0,X.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest`,rel:`nofollow`,children:(0,X.jsx)(t.code,{children:`XMLHttpRequest`})}),` API but you can also use fetch, axios etc.`]}),`
`,(0,X.jsx)(t.hr,{}),`
`,(0,X.jsxs)(t.p,{children:[`This is a minimal interactive story showing how to write and use a simple upload adapter. Click on `,(0,X.jsx)(t.strong,{children:`Show code`}),` to see the usage example.`]}),`
`,(0,X.jsx)(s,{children:(0,X.jsx)(a,{name:`Default`})}),`
`,(0,X.jsx)(t.h2,{id:`example-fileuploadadapter`,children:`Example FileUploadAdapter`}),`
`,(0,X.jsx)(c,{code:ft,language:`ts`,dark:!0})]})}function ht(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,X.jsx)(t,{...e,children:(0,X.jsx)(mt,{...e})}):mt(e)}var X,gt=t((()=>{X=i(),C(),o(),dt(),pt()})),_t,Z,vt,Q,$,yt,bt,xt,St,Ct,wt,Tt,Et,Dt,Ot,kt,At,jt;t((()=>{g(),et(),Xe(),st(),lt(),Re(),gt(),_t=i(),{expect:Z,fn:vt,userEvent:Q,waitFor:$,within:yt}=__STORYBOOK_MODULE_TEST__,bt={title:`Design System/FileUpload`,component:$e,parameters:{layout:`centered`,docs:{page:ht,source:{code:`
const adapter = getSimpleFileUploadAdapter('/api/upload');

return (
    <DsFileUpload
        adapter={adapter}
        onFilesAdded={(files) => console.log('Files added:', files.map((f) => f.name))}
        onFileUploadComplete={(fileId, result) => console.log('File upload complete:', fileId, result.url)}
        onFileUploadError={(fileId, error) => console.error('File upload failed:', fileId, error)}
        onFileRemoved={(fileId) => console.log('File removed:', fileId)}
        onFileDeleted={(fileId) => console.log('File deleted:', fileId)}
        onFileUploadCanceled={(fileId) => console.log('File upload canceled:', fileId)}
        onFileUploadRetried={(fileId) => console.log('File upload retried:', fileId)}
        onAllFileUploadsComplete={() => console.log('All file uploads complete!')}
    />
);`}}},argTypes:{errorText:{control:`text`},dropzoneText:{control:`text`},triggerText:{control:`text`},hideProgress:{control:`boolean`},hideInfoText:{control:`boolean`},disableDrop:{control:`boolean`},maxFiles:{control:`number`},accept:{control:`object`},disabled:{control:`boolean`},compact:{control:`boolean`}}},xt={args:{adapter:Y.normal(),style:{width:`500px`},onFilesAdded:e=>{console.log(`Files added:`,e.map(e=>e.name))},onFileUploadComplete:(e,t)=>{console.log(`File upload complete:`,e,t.url)},onFileUploadError:(e,t)=>{console.error(`File upload failed:`,e,t)},onFileRemoved:e=>{console.log(`File removed:`,e)},onFileDeleted:e=>{console.log(`File deleted:`,e)},onFileUploadCanceled:e=>{console.log(`File upload canceled:`,e)},onFileUploadRetried:e=>{console.log(`File upload retried:`,e)},onAllFileUploadsComplete:()=>{console.log(`All file uploads complete!`)}}},St={args:{adapter:Y.fast(),autoUpload:!1,hideProgress:!1,style:{width:`500px`},onFilesAdded:vt(),onFileUploadComplete:vt(),onAllFileUploadsComplete:vt()},render:function(e){let{getProps:t,files:n,uploadAll:r,clearFiles:i}=qe({adapter:e.adapter,autoUpload:e.autoUpload,onFileUploadComplete:e.onFileUploadComplete,onAllFileUploadsComplete:e.onAllFileUploadsComplete}),a=n.some(e=>e.status===`uploading`),o=n.length>0;return(0,_t.jsxs)(`div`,{style:{width:`500px`},children:[(0,_t.jsx)(Ie,{...t({onFilesAdded:e.onFilesAdded}),...e}),o&&(0,_t.jsxs)(`div`,{style:{marginTop:`16px`,display:`flex`,gap:`8px`},children:[(0,_t.jsx)(h,{design:`v1.2`,size:`small`,onClick:()=>r(),disabled:a,children:a?`Uploading...`:`Upload All`}),(0,_t.jsx)(h,{design:`v1.2`,variant:`ghost`,size:`small`,onClick:()=>i(),disabled:a,children:`Clear All`})]})]})},play:async({canvasElement:e,args:t})=>{let n=yt(e),r=J({name:`document-1.pdf`}),i=J({name:`document-2.pdf`}),a=e.querySelector(`input[type="file"]`);if(!a)throw Error(`File input not found`);await Q.upload(a,[r,i]),await $(async()=>{await Z(n.getByText(r.name)).toBeInTheDocument(),await Z(n.getByText(i.name)).toBeInTheDocument()});let o=n.getByRole(`button`,{name:/upload all/i});await Q.click(o),await $(async()=>{await Z(n.queryAllByText(/complete/i).length).toBe(2),await Z(t.onFileUploadComplete).toHaveBeenCalledWith(Z.any(String),Z.objectContaining({metadata:Z.objectContaining({fileName:r.name})})),await Z(t.onFileUploadComplete).toHaveBeenCalledWith(Z.any(String),Z.objectContaining({metadata:Z.objectContaining({fileName:i.name})})),await Z(t.onAllFileUploadsComplete).toHaveBeenCalled()},{timeout:1e4})}},Ct={args:{adapter:Y.fast(),compact:!0,maxFiles:1,accept:[`application/pdf`,`text/csv`,{mimeType:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,extensions:[`.xlsx`]}],dropzoneText:`Drag and drop your document here or`,triggerText:`Choose document`,style:{width:`400px`},onFilesAdded:vt()}},wt={args:{adapter:Y.normal(),disabled:!0,style:{width:`500px`}}},Tt={args:{adapter:Y.error(`Unsupported file type`),style:{width:`500px`}},play:ot(`error`)},Et={args:{adapter:Y.interrupted(30),style:{width:`500px`}},play:ot(`interrupted`)},Dt={args:{adapter:Y.fast(),maxFiles:1,style:{width:`400px`}},play:async({canvasElement:e})=>{let t=yt(e),n=J({name:`first-file.pdf`}),r=J({name:`second-file.pdf`}),i=e.querySelector(`input[type="file"]`);if(!i)throw Error(`File input not found`);await Q.upload(i,n),await $(async()=>{await Z(t.getByText(`first-file.pdf`)).toBeInTheDocument(),await Z(t.queryByText(/complete/i)).toBeInTheDocument()},{timeout:3e3}),await Q.upload(i,r),await $(async()=>(await Z(t.getByText(`second-file.pdf`)).toBeInTheDocument(),Z(t.queryAllByText(/too many files|maximum|limit/i).length).toBeGreaterThan(0)))}},Ot={args:{adapter:Y.fast(),style:{width:`500px`},onFilesAdded:vt()},play:async({canvasElement:e})=>{let t=yt(e),n=J({name:`duplicate-test.pdf`}),r=e.querySelector(`input[type="file"]`);if(!r)throw Error(`File input not found`);await Q.upload(r,n),await $(async()=>{await Z(t.getByText(`duplicate-test.pdf`)).toBeInTheDocument(),await Z(t.queryByText(/complete/i)).toBeInTheDocument()},{timeout:3e3}),await Q.upload(r,n),await $(async()=>(await Z(t.queryAllByText(`duplicate-test.pdf`).length).toBe(2),Z(t.queryAllByText(/already exists|file exists|duplicate/i).length).toBeGreaterThan(0)))}},kt={args:{adapter:Y.fast(),hideInfoText:!0,style:{width:`500px`}},play:async({canvasElement:e})=>{let t=yt(e);await Z(t.getByRole(`button`,{name:/select file/i})).toBeInTheDocument(),await Z(t.queryByText(/only.*files/i)).not.toBeInTheDocument()}},At={args:{adapter:Y.slow(),style:{width:`500px`},onFileUploadCanceled:vt()},play:async({canvasElement:e})=>{let t=yt(e),n=J({name:`cancel-test.pdf`}),r=e.querySelector(`input[type="file"]`);if(!r)throw Error(`File input not found`);await Q.upload(r,n),await $(async()=>{await Z(t.getByText(`cancel-test.pdf`)).toBeInTheDocument(),await Z(t.queryByText(/uploading/i)).toBeInTheDocument()},{timeout:1e3}),await new Promise(e=>setTimeout(e,500));let i=t.getByLabelText(/cancel/i);await Q.click(i),await $(async()=>{await Z(t.queryByText(/cancelled|canceled/i)).toBeInTheDocument()},{timeout:2e3})}},xt.parameters={...xt.parameters,docs:{...xt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.normal(),
    style: {
      width: '500px'
    },
    onFilesAdded: files => {
      console.log('Files added:', files.map(f => f.name));
    },
    onFileUploadComplete: (fileId, result) => {
      console.log('File upload complete:', fileId, result.url);
    },
    onFileUploadError: (fileId, error) => {
      console.error('File upload failed:', fileId, error);
    },
    onFileRemoved: fileId => {
      console.log('File removed:', fileId);
    },
    onFileDeleted: fileId => {
      console.log('File deleted:', fileId);
    },
    onFileUploadCanceled: fileId => {
      console.log('File upload canceled:', fileId);
    },
    onFileUploadRetried: fileId => {
      console.log('File upload retried:', fileId);
    },
    onAllFileUploadsComplete: () => {
      console.log('All file uploads complete!');
    }
  }
}`,...xt.parameters?.docs?.source},description:{story:`Default auto-upload behavior
Files automatically upload when dropped or selected`,...xt.parameters?.docs?.description}}},St.parameters={...St.parameters,docs:{...St.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    autoUpload: false,
    hideProgress: false,
    style: {
      width: '500px'
    },
    onFilesAdded: fn(),
    onFileUploadComplete: fn(),
    onAllFileUploadsComplete: fn()
  },
  render: function Render(args) {
    const {
      getProps,
      files,
      uploadAll,
      clearFiles
    } = useFileUpload({
      adapter: args.adapter,
      autoUpload: args.autoUpload,
      onFileUploadComplete: args.onFileUploadComplete,
      onAllFileUploadsComplete: args.onAllFileUploadsComplete
    });
    const isUploading = files.some(file => file.status === 'uploading');
    const hasFiles = files.length > 0;
    return <div style={{
      width: '500px'
    }}>
                <FileUpload {...getProps({
        onFilesAdded: args.onFilesAdded
      })} {...args} />

                {hasFiles && <div style={{
        marginTop: '16px',
        display: 'flex',
        gap: '8px'
      }}>
                        <DsButton design="v1.2" size="small" onClick={() => uploadAll()} disabled={isUploading}>
                            {isUploading ? 'Uploading...' : 'Upload All'}
                        </DsButton>
                        <DsButton design="v1.2" variant="ghost" size="small" onClick={() => clearFiles()} disabled={isUploading}>
                            Clear All
                        </DsButton>
                    </div>}
            </div>;
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const file1 = getMockFile({
      name: 'document-1.pdf'
    });
    const file2 = getMockFile({
      name: 'document-2.pdf'
    });
    const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');
    if (!fileInput) {
      throw new Error('File input not found');
    }

    // Upload 2 files at once
    await userEvent.upload(fileInput, [file1, file2]);

    // Wait for files to appear in the list (they should be pending)
    await waitFor(async () => {
      await expect(canvas.getByText(file1.name)).toBeInTheDocument();
      await expect(canvas.getByText(file2.name)).toBeInTheDocument();
    });

    // Find and click "Upload All" button
    const uploadAllButton = canvas.getByRole('button', {
      name: /upload all/i
    });
    await userEvent.click(uploadAllButton);

    // Wait for all uploads to complete
    await waitFor(async () => {
      const completeTexts = canvas.queryAllByText(/complete/i);
      await expect(completeTexts.length).toBe(2);
      await expect(args.onFileUploadComplete).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
        metadata: expect.objectContaining({
          fileName: file1.name
        }) as FileMetadata
      }));
      await expect(args.onFileUploadComplete).toHaveBeenCalledWith(expect.any(String), expect.objectContaining({
        metadata: expect.objectContaining({
          fileName: file2.name
        }) as FileMetadata
      }));
      await expect(args.onAllFileUploadsComplete).toHaveBeenCalled();
    }, {
      timeout: 10000
    });
  }
}`,...St.parameters?.docs?.source},description:{story:`Manual upload mode - files must be uploaded manually
Good for review workflows or batch operations
Advance use case which demonstrates use of (base) FileUpload with useFileUpload`,...St.parameters?.docs?.description}}},Ct.parameters={...Ct.parameters,docs:{...Ct.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    compact: true,
    maxFiles: 1,
    accept: ['application/pdf', 'text/csv', {
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      extensions: ['.xlsx']
    }],
    dropzoneText: 'Drag and drop your document here or',
    triggerText: 'Choose document',
    style: {
      width: '400px'
    },
    onFilesAdded: fn()
  }
}`,...Ct.parameters?.docs?.source}}},wt.parameters={...wt.parameters,docs:{...wt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.normal(),
    disabled: true,
    style: {
      width: '500px'
    }
  }
}`,...wt.parameters?.docs?.source},description:{story:`Disabled state`,...wt.parameters?.docs?.description}}},Tt.parameters={...Tt.parameters,docs:{...Tt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.error('Unsupported file type'),
    style: {
      width: '500px'
    }
  },
  play: createTestPlayFunction('error')
}`,...Tt.parameters?.docs?.source},description:{story:`Upload error scenario - file fails validation immediately`,...Tt.parameters?.docs?.description}}},Et.parameters={...Et.parameters,docs:{...Et.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.interrupted(30),
    style: {
      width: '500px'
    }
  },
  play: createTestPlayFunction('interrupted')
}`,...Et.parameters?.docs?.source},description:{story:`Upload interrupted scenario - network fails mid-upload
Demonstrates retry functionality`,...Et.parameters?.docs?.description}}},Dt.parameters={...Dt.parameters,docs:{...Dt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    maxFiles: 1,
    style: {
      width: '400px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const file1 = getMockFile({
      name: 'first-file.pdf'
    });
    const file2 = getMockFile({
      name: 'second-file.pdf'
    });
    const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');
    if (!fileInput) {
      throw new Error('File input not found');
    }

    // Upload first file
    await userEvent.upload(fileInput, file1);

    // Wait for first file to complete
    await waitFor(async () => {
      await expect(canvas.getByText('first-file.pdf')).toBeInTheDocument();
      await expect(canvas.queryByText(/complete/i)).toBeInTheDocument();
    }, {
      timeout: 3000
    });

    // Attempt to upload second file (should be rejected due to maxFiles: 1)
    await userEvent.upload(fileInput, file2);

    // Wait for rejection error to appear
    await waitFor(async () => {
      await expect(canvas.getByText('second-file.pdf')).toBeInTheDocument();
      // Check for TOO_MANY_FILES error message
      const errorMessages = canvas.queryAllByText(/too many files|maximum|limit/i);
      return expect(errorMessages.length).toBeGreaterThan(0);
    });
  }
}`,...Dt.parameters?.docs?.source}}},Ot.parameters={...Ot.parameters,docs:{...Ot.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    style: {
      width: '500px'
    },
    onFilesAdded: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const mockFile = getMockFile({
      name: 'duplicate-test.pdf'
    });
    const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');
    if (!fileInput) {
      throw new Error('File input not found');
    }

    // Upload first time
    await userEvent.upload(fileInput, mockFile);

    // Wait for upload to complete
    await waitFor(async () => {
      await expect(canvas.getByText('duplicate-test.pdf')).toBeInTheDocument();
      await expect(canvas.queryByText(/complete/i)).toBeInTheDocument();
    }, {
      timeout: 3000
    });

    // Upload duplicate
    await userEvent.upload(fileInput, mockFile);

    // Wait for duplicate error to appear
    await waitFor(async () => {
      const allFileNames = canvas.queryAllByText('duplicate-test.pdf');
      // Should have 2 instances: one completed, one with error
      await expect(allFileNames.length).toBe(2);

      // Check for FILE_EXISTS error
      const errorMessages = canvas.queryAllByText(/already exists|file exists|duplicate/i);
      return expect(errorMessages.length).toBeGreaterThan(0);
    });
  }
}`,...Ot.parameters?.docs?.source},description:{story:`Duplicate files scenario - uploading the same file twice
Demonstrates duplicate detection and FILE_EXISTS error`,...Ot.parameters?.docs?.description}}},kt.parameters={...kt.parameters,docs:{...kt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    hideInfoText: true,
    style: {
      width: '500px'
    }
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await expect(canvas.getByRole('button', {
      name: /select file/i
    })).toBeInTheDocument();
    await expect(canvas.queryByText(/only.*files/i)).not.toBeInTheDocument();
  }
}`,...kt.parameters?.docs?.source},description:{story:`Hidden info text - hides the file type and size limit information`,...kt.parameters?.docs?.description}}},At.parameters={...At.parameters,docs:{...At.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.slow(),
    style: {
      width: '500px'
    },
    onFileUploadCanceled: fn()
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const mockFile = getMockFile({
      name: 'cancel-test.pdf'
    });
    const fileInput = canvasElement.querySelector<HTMLInputElement>('input[type="file"]');
    if (!fileInput) {
      throw new Error('File input not found');
    }

    // Upload file
    await userEvent.upload(fileInput, mockFile);

    // Wait for upload to start and reach some progress
    await waitFor(async () => {
      await expect(canvas.getByText('cancel-test.pdf')).toBeInTheDocument();
      await expect(canvas.queryByText(/uploading/i)).toBeInTheDocument();
    }, {
      timeout: 1000
    });

    // Wait a bit for progress
    await new Promise(resolve => setTimeout(resolve, 500));

    // Click cancel button
    const cancelButton = canvas.getByLabelText(/cancel/i);
    await userEvent.click(cancelButton);

    // Wait for cancelled status
    await waitFor(async () => {
      await expect(canvas.queryByText(/cancelled|canceled/i)).toBeInTheDocument();
    }, {
      timeout: 2000
    });
  }
}`,...At.parameters?.docs?.source},description:{story:`Cancel upload scenario - cancel an ongoing upload
Demonstrates upload cancellation functionality`,...At.parameters?.docs?.description}}},jt=[`Default`,`Manual`,`Compact`,`Disabled`,`UploadError`,`UploadInterrupted`,`MaxFiles`,`DuplicateFiles`,`HiddenInfoText`,`CancelUpload`]}))();export{At as CancelUpload,Ct as Compact,xt as Default,wt as Disabled,Ot as DuplicateFiles,kt as HiddenInfoText,St as Manual,Dt as MaxFiles,Tt as UploadError,Et as UploadInterrupted,jt as __namedExportsOrder,bt as default};