import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BShqqFuQ.js";import{r}from"./react-Db3MViap.js";import{t as i}from"./jsx-runtime-Cw9gq7QB.js";import{c as a,l as o,n as s,s as c}from"./blocks-D00cqaOs.js";import{t as l}from"./classnames-BKwtnCRs.js";import{t as u}from"./compiler-runtime-AYNW_hyK.js";import{i as d}from"./ds-icon.types-0RM1pfT1.js";import{t as f}from"./ds-icon-BrU4uVj0.js";import{t as p}from"./ds-typography-DUaSuRnI.js";import{t as m}from"./ds-typography-DEgSHCec.js";import{n as h,t as g}from"./ds-button-B6qYftmU.js";import{t as _}from"./ds-tooltip-BbN8M9J2.js";import{t as v}from"./ds-tooltip-BujmrkR-.js";import{D as y,E as b,O as x,d as S,k as C,l as ee,t as w,u as te}from"./dist-BOlkvvQC.js";import{t as T}from"./mdx-react-shim-DIy0tUgF.js";function E(e){return D[e]||e||`File validation failed`}var D,O=t((()=>{D={FILE_TOO_LARGE:`File size exceeds the maximum limit`,FILE_INVALID_TYPE:`File type is not allowed`,TOO_MANY_FILES:`Too many files selected`,FILE_TOO_SMALL:`File size is too small`,FILE_INVALID:`File is invalid`,FILE_EXISTS:`File already exists`}})),k,A,j,M,N,P,F,I,L,R,z,ne,re,B,V,ie,H,U,W=t((()=>{k=`_fileItem_hpxvh_1`,A=`_fileItemContent_hpxvh_5`,j=`_fileItemError_hpxvh_22`,M=`_progressRange_hpxvh_25`,N=`_fileItemCompleted_hpxvh_28`,P=`_fileItemUploading_hpxvh_31`,F=`_fileItemInterrupted_hpxvh_34`,I=`_filePreview_hpxvh_38`,L=`_fileInfo_hpxvh_42`,R=`_fileName_hpxvh_50`,z=`_progressContainer_hpxvh_65`,ne=`_progressBar_hpxvh_72`,re=`_progressTrack_hpxvh_77`,B=`_progressText_hpxvh_92`,V=`_completedText_hpxvh_105`,ie=`_interruptedText_hpxvh_118`,H=`_errorMessage_hpxvh_131`,U={fileItem:k,fileItemContent:A,fileItemError:j,progressRange:M,fileItemCompleted:N,fileItemUploading:P,fileItemInterrupted:F,filePreview:I,fileInfo:L,fileName:R,progressContainer:z,progressBar:ne,progressTrack:re,progressText:B,completedText:V,interruptedText:ie,errorMessage:H}}));function ae(e){return(0,q.jsxs)(`div`,{className:U.errorMessage,children:[(0,q.jsx)(d,{icon:`cancel`,size:`tiny`,filled:!0}),E(e)]},e)}var G,K,q,oe,J=t((()=>{G=u(),K=e(l(),1),w(),v(),g(),f(),O(),W(),q=i(),oe=e=>{let t=(0,G.c)(61),{id:n,name:r,progress:i,hideProgress:a,status:o,errors:s,onCancel:c,onRetry:l,onRemove:u,onDelete:f}=e,p=a===void 0?!1:a,m=o===`error`,g=o===`completed`,v=o===`uploading`,y=o===`interrupted`||o===`cancelled`,b;t[0]!==m||t[1]!==g||t[2]!==v||t[3]!==y?(b=(0,K.default)(U.fileItemContent,{[U.fileItemError]:m,[U.fileItemCompleted]:g,[U.fileItemUploading]:v,[U.fileItemInterrupted]:y}),t[0]=m,t[1]=g,t[2]=v,t[3]=y,t[4]=b):b=t[4];let x=b,C;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,q.jsx)(d,{className:U.filePreview,icon:`upload_file`,size:`tiny`}),t[5]=C):C=t[5];let w;t[6]===r?w=t[7]:(w=(0,q.jsx)(`div`,{className:U.fileName,title:r,children:r}),t[6]=r,t[7]=w);let T=o===`error`?1:i,E;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,q.jsx)(ee,{className:U.progressTrack,children:(0,q.jsx)(S,{className:U.progressRange})}),t[8]=E):E=t[8];let D;t[9]===T?D=t[10]:(D=(0,q.jsx)(te,{value:T,className:U.progressBar,children:E}),t[9]=T,t[10]=D);let O;t[11]!==D||t[12]!==w?(O=(0,q.jsxs)(`div`,{className:U.fileInfo,children:[w,D]}),t[11]=D,t[12]=w,t[13]=O):O=t[13];let k;t[14]!==n||t[15]!==r||t[16]!==l||t[17]!==o?(k=(o===`interrupted`||o===`cancelled`)&&l&&(0,q.jsx)(_,{content:`Retry`,children:(0,q.jsx)(h,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Retry ${r} upload`,onClick:()=>l(n),children:(0,q.jsx)(d,{icon:`refresh`,size:`small`})})}),t[14]=n,t[15]=r,t[16]=l,t[17]=o,t[18]=k):k=t[18];let A;t[19]!==n||t[20]!==r||t[21]!==u||t[22]!==o?(A=(o===`pending`||o===`error`||o===`interrupted`)&&(0,q.jsx)(_,{content:`Remove`,children:(0,q.jsx)(h,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Remove ${r} upload`,onClick:()=>u?.(n),children:(0,q.jsx)(d,{icon:`do_not_disturb_on`,size:`small`})})}),t[19]=n,t[20]=r,t[21]=u,t[22]=o,t[23]=A):A=t[23];let j;t[24]!==n||t[25]!==r||t[26]!==c||t[27]!==o?(j=o===`uploading`&&c&&(0,q.jsx)(_,{content:`Cancel`,children:(0,q.jsx)(h,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Cancel ${r} upload`,onClick:()=>c(n),children:(0,q.jsx)(d,{icon:`close`,size:`small`})})}),t[24]=n,t[25]=r,t[26]=c,t[27]=o,t[28]=j):j=t[28];let M;t[29]!==n||t[30]!==r||t[31]!==f||t[32]!==o?(M=o===`completed`&&(0,q.jsx)(_,{content:`Delete`,children:(0,q.jsx)(h,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Delete ${r}`,onClick:()=>f?.(n),children:(0,q.jsx)(d,{icon:`delete`,size:`small`})})}),t[29]=n,t[30]=r,t[31]=f,t[32]=o,t[33]=M):M=t[33];let N;t[34]!==x||t[35]!==O||t[36]!==k||t[37]!==A||t[38]!==j||t[39]!==M?(N=(0,q.jsxs)(`div`,{className:x,children:[C,O,k,A,j,M]}),t[34]=x,t[35]=O,t[36]=k,t[37]=A,t[38]=j,t[39]=M,t[40]=N):N=t[40];let P;t[41]===o?P=t[42]:(P=o===`completed`&&(0,q.jsxs)(`div`,{className:U.completedText,children:[(0,q.jsx)(d,{icon:`check_circle`,size:`tiny`,filled:!0}),`Upload complete`]}),t[41]=o,t[42]=P);let F;t[43]===o?F=t[44]:(F=o===`interrupted`&&(0,q.jsxs)(`div`,{className:U.interruptedText,children:[(0,q.jsx)(d,{icon:`info`,size:`tiny`,filled:!0}),`Upload interrupted`]}),t[43]=o,t[44]=F);let I;t[45]===o?I=t[46]:(I=o===`cancelled`&&(0,q.jsxs)(`div`,{className:U.interruptedText,children:[(0,q.jsx)(d,{icon:`info`,size:`tiny`,filled:!0}),`Upload cancelled`]}),t[45]=o,t[46]=I);let L;t[47]!==s||t[48]!==o?(L=o===`error`&&s?.length&&s.map(ae),t[47]=s,t[48]=o,t[49]=L):L=t[49];let R;t[50]!==p||t[51]!==i||t[52]!==o?(R=!p&&o===`uploading`&&(0,q.jsxs)(`span`,{className:U.progressText,children:[`Uploading...(`,Math.round(i),`%)`]}),t[50]=p,t[51]=i,t[52]=o,t[53]=R):R=t[53];let z;return t[54]!==N||t[55]!==P||t[56]!==F||t[57]!==I||t[58]!==L||t[59]!==R?(z=(0,q.jsxs)(`div`,{className:U.fileItem,children:[N,P,F,I,L,R]}),t[54]=N,t[55]=P,t[56]=F,t[57]=I,t[58]=L,t[59]=R,t[60]=z):z=t[60],z}})),se=t((()=>{J()})),ce,le,ue=t((()=>{ce=[`application/pdf`,`text/csv`,`application/zip`,`application/x-zip-compressed`],le=25e6})),de,fe=t((()=>{de={"image/png":[`.png`],"image/gif":[`.gif`],"image/jpeg":[`.jpg`,`.jpeg`],"image/svg+xml":[`.svg`],"image/webp":[`.webp`],"image/avif":[`.avif`],"image/heic":[`.heic`,`.heif`],"image/bmp":[`.bmp`],"application/pdf":[`.pdf`],"application/zip":[`.zip`],"application/json":[`.json`],"application/xml":[`.xml`],"application/msword":[`.doc`],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[`.docx`],"application/vnd.ms-excel":[`.xls`],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[`.xlsx`],"application/vnd.ms-powerpoint":[`.ppt`],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[`.pptx`],"application/rtf":[`.rtf`],"application/x-rar":[`.rar`],"application/x-7z-compressed":[`.7z`],"application/x-tar":[`.tar`],"application/vnd.microsoft.portable-executable":[`.exe`,`.dll`],"text/css":[`.css`],"text/csv":[`.csv`],"text/html":[`.html`,`.htm`],"text/markdown":[`.md`,`.markdown`],"text/plain":[`.txt`],"font/ttf":[`.ttf`],"font/otf":[`.otf`],"font/woff":[`.woff`],"font/woff2":[`.woff2`],"font/eot":[`.eot`],"font/svg":[`.svg`],"video/mp4":[`.mp4`],"video/webm":[`.webm`],"video/ogg":[`.ogv`],"video/quicktime":[`.mov`],"video/x-msvideo":[`.avi`],"audio/mpeg":[`.mp3`],"audio/ogg":[`.ogg`,`.oga`],"audio/wav":[`.wav`],"audio/webm":[`.weba`],"audio/aac":[`.aac`],"audio/flac":[`.flac`],"audio/x-m4a":[`.m4a`],"image/*":[`.png`,`.jpg`,`.jpeg`,`.gif`,`.webp`,`.svg`,`.bmp`,`.avif`,`.heic`,`.heif`],"audio/*":[`.mp3`,`.wav`,`.ogg`,`.oga`,`.m4a`,`.flac`,`.aac`,`.weba`],"video/*":[`.mp4`,`.webm`,`.ogv`,`.mov`,`.avi`],"text/*":[`.txt`,`.html`,`.htm`,`.css`,`.csv`,`.md`,`.markdown`],"application/*":[`.pdf`,`.zip`,`.json`,`.xml`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.rtf`,`.rar`,`.7z`,`.tar`],"font/*":[`.ttf`,`.otf`,`.woff`,`.woff2`,`.eot`]}}));function pe(e){return e.flatMap(e=>typeof e==`string`?de[e]??[]:e.extensions)}function me(e){return e.map(e=>typeof e==`string`?e:e.mimeType)}var he=t((()=>{fe()}));function ge(e){if(e===0)return`0 B`;let t=1e3,n=[`B`,`KB`,`MB`,`GB`,`TB`,`PB`],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**+r).toFixed(2)} ${String(n[r])}`}var _e=t((()=>{}));function ve(e,t,n){let r=pe(e),i=[...new Set(r)].map(e=>e.toUpperCase()).join(`, `),a=ge(t),o=[];return i&&o.push(`Only ${i} files`),t<1/0&&o.push(`File size ${a} max`),n===1?o.push(`Only 1 file`):n>1&&o.push(`Up to ${String(n)} files`),o.join(`. `)+`.`}var ye=t((()=>{he(),_e()})),be,xe,Se,Ce,we,Te,Ee,De,Y,Oe=t((()=>{be=`_fileUploadRoot_baybr_1`,xe=`_dropzone_baybr_7`,Se=`_dropzoneCompact_baybr_19`,Ce=`_dropzoneIcon_baybr_23`,we=`_dropzoneText_baybr_26`,Te=`_fileList_baybr_57`,Ee=`_infoText_baybr_67`,De=`_errorText_baybr_72`,Y={fileUploadRoot:be,dropzone:xe,dropzoneCompact:Se,dropzoneIcon:Ce,dropzoneText:we,fileList:Te,infoText:Ee,errorText:De}})),ke,Ae,X,je,Me=t((()=>{ke=u(),Ae=e(l(),1),w(),f(),m(),g(),se(),ue(),ye(),he(),Oe(),X=i(),je=e=>{let t=(0,ke.c)(52),{style:n,className:r,files:i,acceptedFiles:a,errorText:o,dropzoneText:s,triggerText:c,hideProgress:l,hideInfoText:u,disableDrop:f,onFileAccept:m,onFileReject:g,onFileRemove:_,onFileDelete:v,onFileCancel:S,onFileRetry:ee,accept:w,maxFiles:te,maxFileSize:T,compact:E,disabled:D}=e,O;t[0]===n?O=t[1]:(O=n===void 0?{}:n,t[0]=n,t[1]=O);let k=O,A=s===void 0?`Drag and drop files here or `:s,j=c===void 0?`Select file...`:c,M=l===void 0?!1:l,N=u===void 0?!1:u,P=f===void 0?!1:f,F=w===void 0?ce:w,I=te===void 0?5:te,L=T===void 0?le:T,R=E===void 0?!1:E,z=D===void 0?!1:D,ne;t[2]!==F||t[3]!==L||t[4]!==I?(ne=ve(F,L,I),t[2]=F,t[3]=L,t[4]=I,t[5]=ne):ne=t[5];let re=ne,B;t[6]===r?B=t[7]:(B=(0,Ae.default)(Y.fileUploadRoot,r),t[6]=r,t[7]=B);let V;t[8]===F?V=t[9]:(V=me(F),t[8]=F,t[9]=V);let ie=!P,H;t[10]===R?H=t[11]:(H=(0,Ae.default)(Y.dropzone,{[Y.dropzoneCompact]:R}),t[10]=R,t[11]=H);let U;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(U=(0,X.jsx)(d,{icon:`upload`,className:Y.dropzoneIcon}),t[12]=U):U=t[12];let W;t[13]===A?W=t[14]:(W=(0,X.jsx)(p,{className:Y.dropzoneText,variant:`body-xs-reg`,children:A}),t[13]=A,t[14]=W);let ae;t[15]!==z||t[16]!==j?(ae=(0,X.jsx)(b,{asChild:!0,children:(0,X.jsx)(h,{design:`v1.2`,variant:`ghost`,size:`small`,disabled:z,children:j})}),t[15]=z,t[16]=j,t[17]=ae):ae=t[17];let G;t[18]!==H||t[19]!==W||t[20]!==ae?(G=(0,X.jsxs)(C,{className:H,children:[U,W,ae]}),t[18]=H,t[19]=W,t[20]=ae,t[21]=G):G=t[21];let K;t[22]!==z||t[23]!==o||t[24]!==N||t[25]!==re?(K=re&&!N&&!z&&!o&&(0,X.jsx)(p,{className:Y.infoText,variant:`body-xs-reg`,children:re}),t[22]=z,t[23]=o,t[24]=N,t[25]=re,t[26]=K):K=t[26];let q;t[27]===o?q=t[28]:(q=o&&(0,X.jsxs)(p,{className:Y.errorText,variant:`body-xs-reg`,children:[(0,X.jsx)(d,{icon:`error`,size:`tiny`}),o]}),t[27]=o,t[28]=q);let J;t[29]!==i||t[30]!==M||t[31]!==S||t[32]!==v||t[33]!==_||t[34]!==ee?(J=!!i?.length&&(0,X.jsx)(`div`,{className:Y.fileList,children:i.map(e=>(0,X.jsx)(oe,{id:e.id,name:e.name,progress:e.progress,hideProgress:M,status:e.status,errors:e.errors,onRemove:_,onDelete:v,onCancel:S,onRetry:ee},e.id))}),t[29]=i,t[30]=M,t[31]=S,t[32]=v,t[33]=_,t[34]=ee,t[35]=J):J=t[35];let se;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(se=(0,X.jsx)(x,{}),t[36]=se):se=t[36];let ue;return t[37]!==a||t[38]!==z||t[39]!==L||t[40]!==I||t[41]!==m||t[42]!==g||t[43]!==k||t[44]!==B||t[45]!==V||t[46]!==ie||t[47]!==G||t[48]!==K||t[49]!==q||t[50]!==J?(ue=(0,X.jsxs)(y,{style:k,className:B,maxFiles:I,maxFileSize:L,accept:V,disabled:z,allowDrop:ie,acceptedFiles:a,onFileAccept:m,onFileReject:g,children:[G,K,q,J,se]}),t[37]=a,t[38]=z,t[39]=L,t[40]=I,t[41]=m,t[42]=g,t[43]=k,t[44]=B,t[45]=V,t[46]=ie,t[47]=G,t[48]=K,t[49]=q,t[50]=J,t[51]=ue):ue=t[51],ue}})),Ne=t((()=>{Me()}));function Pe(e,t,n){return{...e,id:`${e.name}-${String(Date.now())}-${String(Math.random())}`,name:e.name,size:e.size,type:e.type,progress:0,status:t,errors:n,originalFile:e}}var Fe=t((()=>{}));function Ie(e,t){return e.name===t.name&&e.size===t.size&&e.type===t.type}var Le=t((()=>{})),Re,ze,Be,Ve=t((()=>{Re=class extends Error{constructor(e){super(e),this.name=this.constructor.name}},ze=class extends Re{isRetryable=!0},Be=class extends Re{isRetryable=!1}}));function He({adapter:e,autoUpload:t=!0,maxConcurrent:n=3,maxFiles:r,metadata:i,onFileUploadComplete:a,onFileUploadError:o,onAllFileUploadsComplete:s}){let[c]=(0,Ue.useState)(()=>new Map),[l,u]=(0,Ue.useState)([]),d=l.filter(e=>e.status!==`error`);l.length&&!l.some(e=>e.status===`uploading`)&&s?.();let f=e=>e.filter(e=>!d.some(t=>Ie(t,e))),p=e=>e.filter(e=>{if(e.id)return!1;let t=l.filter(t=>Ie(t,e));return t.length?!t.some(e=>e.errors?.includes(`FILE_EXISTS`)):!1}),m=e=>{let t=e.map(e=>({file:e,errors:[`FILE_EXISTS`]}));t.length&&y(t)},h=e=>{if(r===void 0)return e;let t=r-d.length,n,i;if(t<=0)n=[],i=e;else if(e.length>t)n=e.slice(0,t),i=e.slice(t);else return e;return y(i.map(e=>({file:e,errors:[`TOO_MANY_FILES`]}))),n},g=e=>{let t=e.map(e=>Pe(e,`pending`));return u(e=>[...e,...t]),t},_=e=>{t&&e.forEach(e=>{C(e)})},v=e=>{let t=f(e);m(p(e));let n=g(h(t));return _(n),n},y=e=>{let t=e.map(({file:e,errors:t})=>Pe(e,`error`,t));u(e=>[...e,...t])},b=(e,t)=>{u(n=>n.map(n=>n.id===e?{...n,progress:t}:n))},x=(e,t,n)=>{u(r=>r.map(r=>r.id===e?{...r,status:t,errors:n?[...r.errors||[],n]:r.errors}:r))},S=async e=>{let t=d.find(t=>t.id===e);t&&await C(t)},C=async t=>{let n=t.id,r=new AbortController;c.set(n,r),x(t.id,`uploading`);try{let o=await e.upload({file:t.originalFile,fileId:n,metadata:i,signal:r.signal,onProgress:e=>{b(n,e)}});x(n,`completed`),b(n,100),a?.(n,o)}catch(e){let t=e instanceof Error?e.message:`Upload failed`,r=`interrupted`;e instanceof Re&&(r=e.isRetryable?`interrupted`:`error`),x(n,r,t),o?.(n,t)}finally{c.delete(n)}},ee=async()=>{let e=l.filter(e=>e.status===`pending`);for(let t=0;t<e.length;t+=n){let r=e.slice(t,t+n);await Promise.allSettled(r.map(e=>S(e.id)))}},w=async t=>{c.get(t)?.abort(),c.delete(t),e.cancel&&await e.cancel(t),x(t,`cancelled`)},te=async e=>{x(e,`pending`),b(e,0),await S(e)},T=e=>{c.get(e)?.abort(),c.delete(e),u(t=>t.filter(t=>t.id!==e))},E=async t=>{e.delete&&await e.delete(t),T(t)};return{files:l,acceptedFiles:d,addFiles:v,addRejectedFiles:y,removeFile:T,deleteFile:E,uploadFile:S,uploadAll:ee,cancelUpload:w,retryUpload:te,clearFiles:()=>{c.forEach(e=>e.abort()),c.clear(),u([])},getProps:e=>({files:l,acceptedFiles:d,onFileAccept:t=>{let n=v(t.files);e?.onFilesAdded?.(n)},onFileReject:e=>{y(e.files.map(e=>({file:e.file,errors:e.errors})))},onFileRemove:t=>{T(t),e?.onFileRemoved?.(t)},onFileDelete:async t=>{await E(t),e?.onFileDeleted?.(t)},onFileCancel:async t=>{await w(t),e?.onFileUploadCanceled?.(t)},onFileRetry:async t=>{await te(t),e?.onFileUploadRetried?.(t)}})}}var Ue,We=t((()=>{Ue=e(n(),1),Fe(),Le(),Ve()})),Ge=t((()=>{We()})),Ke,qe,Je,Ye=t((()=>{Ke=u(),Ne(),Ge(),qe=i(),Je=e=>{let t=(0,Ke.c)(33),n,r,i,a,o,s,c,l,u,d,f,p,m;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11],p=t[12],m=t[13]):({adapter:n,autoUpload:p,maxConcurrent:m,metadata:r,onFileUploadComplete:c,onFileUploadError:l,onFilesAdded:d,onFileRemoved:o,onFileDeleted:a,onFileUploadCanceled:s,onFileUploadRetried:u,onAllFileUploadsComplete:i,...f}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m);let h=p===void 0?!0:p,g=m===void 0?3:m,_;t[14]!==n||t[15]!==h||t[16]!==g||t[17]!==r||t[18]!==i||t[19]!==c||t[20]!==l||t[21]!==f.maxFiles?(_={adapter:n,autoUpload:h,maxConcurrent:g,maxFiles:f.maxFiles,metadata:r,onFileUploadComplete:c,onFileUploadError:l,onAllFileUploadsComplete:i},t[14]=n,t[15]=h,t[16]=g,t[17]=r,t[18]=i,t[19]=c,t[20]=l,t[21]=f.maxFiles,t[22]=_):_=t[22];let{getProps:v}=He(_),y;t[23]!==v||t[24]!==a||t[25]!==o||t[26]!==s||t[27]!==u||t[28]!==d?(y=v({onFilesAdded:d,onFileRemoved:o,onFileDeleted:a,onFileUploadCanceled:s,onFileUploadRetried:u}),t[23]=v,t[24]=a,t[25]=o,t[26]=s,t[27]=u,t[28]=d,t[29]=y):y=t[29];let b=y,x;return t[30]!==b||t[31]!==f?(x=(0,qe.jsx)(je,{...b,...f}),t[30]=b,t[31]=f,t[32]=x):x=t[32],x}})),Z,Q,Xe=t((()=>{Ve(),Z=class{interruptedRuns=-1;uploads=new Map;config;constructor(e={}){this.config=e}async upload(e){let{scenario:t=`success`,duration:n=2e3,steps:r=20,interruptAt:i=30,errorMessage:a=`Upload failed`,delay:o=0}=this.config,{file:s,fileId:c,onProgress:l,signal:u}=e;this.uploads.set(c,{cancelled:!1});let d=()=>u?.aborted||this.uploads.get(c)?.cancelled?(this.uploads.delete(c),!0):!1;if(o>0&&(await this.sleep(o),d()))throw new ze(`Upload cancelled`);if(t===`error`)throw new Be(a||`Unsupported file type`);let f=n/r;for(let e=0;e<=r;e++){if(d())throw new ze(`Upload cancelled`);await this.sleep(f);let n=Math.min(e/r*100,100);if(l?.(n),t===`interrupted`&&n>=i&&this.interruptedRuns%2)throw this.uploads.delete(c),this.interruptedRuns++,new ze(a||`Network connection lost`)}return this.interruptedRuns++,this.uploads.delete(c),{url:`mock://uploaded/${s.name}`,metadata:{fileName:s.name,fileSize:s.size,fileType:s.type,uploadedAt:new Date().toISOString()}}}cancel(e){let t=this.uploads.get(e);t&&(t.cancelled=!0)}sleep(e){return new Promise(t=>setTimeout(t,e))}},Q={normal:()=>new Z({scenario:`success`,duration:2e3+Math.random()*1e3,steps:20}),fast:()=>new Z({scenario:`success`,duration:800,steps:10}),slow:()=>new Z({scenario:`success`,duration:1e4,steps:30}),interrupted:(e=30)=>new Z({scenario:`interrupted`,duration:1e3,steps:20,interruptAt:e,errorMessage:`Network connection lost`}),error:e=>new Z({scenario:`error`,errorMessage:e||`Unsupported file type`}),custom:e=>new Z(e)}})),Ze=t((()=>{})),Qe=t((()=>{Ye(),Ne(),Ze(),Ge()})),$e,et=t((()=>{$e=`import type {
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
`}));function tt(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,p:`p`,strong:`strong`,...r(),...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h1,{id:`file-upload`,children:`File Upload`}),`
`,(0,$.jsxs)(t.p,{children:[`To use the file upload component you need to provide an adapter that implements the `,(0,$.jsx)(t.code,{children:`FileUploadAdapter`}),` interface.
See sample adapter below implemented using the native `,(0,$.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`XMLHttpRequest`})}),` API but you can also use fetch, axios etc.`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsxs)(t.p,{children:[`This is a minimal interactive story showing how to write and use a simple upload adapter. Click on `,(0,$.jsx)(t.strong,{children:`Show code`}),` to see the usage example.`]}),`
`,(0,$.jsx)(s,{children:(0,$.jsx)(a,{name:`Default`})}),`
`,(0,$.jsx)(t.h2,{id:`example-fileuploadadapter`,children:`Example FileUploadAdapter`}),`
`,(0,$.jsx)(c,{code:$e,language:`ts`,dark:!0})]})}function nt(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(tt,{...e})}):tt(e)}var $,rt=t((()=>{$=i(),T(),o(),Qe(),et()})),it,at,ot,st,ct,lt,ut,dt,ft,pt,mt,ht,gt,_t;t((()=>{g(),Ye(),Ge(),Xe(),Ne(),rt(),it=i(),{fn:at}=__STORYBOOK_MODULE_TEST__,ot={title:`Design System/FileUpload`,component:Je,parameters:{layout:`centered`,docs:{page:nt,source:{code:`
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
);`}}},argTypes:{errorText:{control:`text`},dropzoneText:{control:`text`},triggerText:{control:`text`},hideProgress:{control:`boolean`},hideInfoText:{control:`boolean`},disableDrop:{control:`boolean`},maxFiles:{control:`number`},accept:{control:`object`},disabled:{control:`boolean`},compact:{control:`boolean`}}},st={args:{adapter:Q.normal(),style:{width:`500px`},onFilesAdded:e=>{console.log(`Files added:`,e.map(e=>e.name))},onFileUploadComplete:(e,t)=>{console.log(`File upload complete:`,e,t.url)},onFileUploadError:(e,t)=>{console.error(`File upload failed:`,e,t)},onFileRemoved:e=>{console.log(`File removed:`,e)},onFileDeleted:e=>{console.log(`File deleted:`,e)},onFileUploadCanceled:e=>{console.log(`File upload canceled:`,e)},onFileUploadRetried:e=>{console.log(`File upload retried:`,e)},onAllFileUploadsComplete:()=>{console.log(`All file uploads complete!`)}}},ct={args:{adapter:Q.fast(),autoUpload:!1,hideProgress:!1,style:{width:`500px`},onFilesAdded:at(),onFileUploadComplete:at(),onAllFileUploadsComplete:at()},render:function(e){let{getProps:t,files:n,uploadAll:r,clearFiles:i}=He({adapter:e.adapter,autoUpload:e.autoUpload,onFileUploadComplete:e.onFileUploadComplete,onAllFileUploadsComplete:e.onAllFileUploadsComplete}),a=n.some(e=>e.status===`uploading`),o=n.length>0;return(0,it.jsxs)(`div`,{style:{width:`500px`},children:[(0,it.jsx)(je,{...t({onFilesAdded:e.onFilesAdded}),...e}),o&&(0,it.jsxs)(`div`,{style:{marginTop:`16px`,display:`flex`,gap:`8px`},children:[(0,it.jsx)(h,{design:`v1.2`,size:`small`,onClick:()=>r(),disabled:a,children:a?`Uploading...`:`Upload All`}),(0,it.jsx)(h,{design:`v1.2`,variant:`ghost`,size:`small`,onClick:()=>i(),disabled:a,children:`Clear All`})]})]})}},lt={args:{adapter:Q.fast(),compact:!0,maxFiles:1,accept:[`application/pdf`,`text/csv`,{mimeType:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,extensions:[`.xlsx`]}],dropzoneText:`Drag and drop your document here or`,triggerText:`Choose document`,style:{width:`400px`},onFilesAdded:at()}},ut={args:{adapter:Q.normal(),disabled:!0,style:{width:`500px`}}},dt={args:{adapter:Q.error(`Unsupported file type`),style:{width:`500px`}}},ft={args:{adapter:Q.interrupted(30),style:{width:`500px`}}},pt={args:{adapter:Q.fast(),maxFiles:1,style:{width:`400px`}}},mt={args:{adapter:Q.fast(),style:{width:`500px`},onFilesAdded:at()}},ht={args:{adapter:Q.fast(),hideInfoText:!0,style:{width:`500px`}}},gt={args:{adapter:Q.slow(),style:{width:`500px`},onFileUploadCanceled:at()}},st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
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
}`,...st.parameters?.docs?.source},description:{story:`Default auto-upload behavior
Files automatically upload when dropped or selected`,...st.parameters?.docs?.description}}},ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
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
  }
}`,...ct.parameters?.docs?.source},description:{story:`Manual upload mode - files must be uploaded manually
Good for review workflows or batch operations
Advance use case which demonstrates use of (base) FileUpload with useFileUpload`,...ct.parameters?.docs?.description}}},lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
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
}`,...lt.parameters?.docs?.source}}},ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.normal(),
    disabled: true,
    style: {
      width: '500px'
    }
  }
}`,...ut.parameters?.docs?.source},description:{story:`Disabled state`,...ut.parameters?.docs?.description}}},dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.error('Unsupported file type'),
    style: {
      width: '500px'
    }
  }
}`,...dt.parameters?.docs?.source},description:{story:`Upload error scenario - file fails validation immediately`,...dt.parameters?.docs?.description}}},ft.parameters={...ft.parameters,docs:{...ft.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.interrupted(30),
    style: {
      width: '500px'
    }
  }
}`,...ft.parameters?.docs?.source},description:{story:`Upload interrupted scenario - network fails mid-upload
Demonstrates retry functionality`,...ft.parameters?.docs?.description}}},pt.parameters={...pt.parameters,docs:{...pt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    maxFiles: 1,
    style: {
      width: '400px'
    }
  }
}`,...pt.parameters?.docs?.source}}},mt.parameters={...mt.parameters,docs:{...mt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    style: {
      width: '500px'
    },
    onFilesAdded: fn()
  }
}`,...mt.parameters?.docs?.source},description:{story:`Duplicate files scenario - uploading the same file twice
Demonstrates duplicate detection and FILE_EXISTS error`,...mt.parameters?.docs?.description}}},ht.parameters={...ht.parameters,docs:{...ht.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    hideInfoText: true,
    style: {
      width: '500px'
    }
  }
}`,...ht.parameters?.docs?.source},description:{story:`Hidden info text - hides the file type and size limit information`,...ht.parameters?.docs?.description}}},gt.parameters={...gt.parameters,docs:{...gt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.slow(),
    style: {
      width: '500px'
    },
    onFileUploadCanceled: fn()
  }
}`,...gt.parameters?.docs?.source},description:{story:`Cancel upload scenario - cancel an ongoing upload
Demonstrates upload cancellation functionality`,...gt.parameters?.docs?.description}}},_t=[`Default`,`Manual`,`Compact`,`Disabled`,`UploadError`,`UploadInterrupted`,`MaxFiles`,`DuplicateFiles`,`HiddenInfoText`,`CancelUpload`]}))();export{gt as CancelUpload,lt as Compact,st as Default,ut as Disabled,mt as DuplicateFiles,ht as HiddenInfoText,ct as Manual,pt as MaxFiles,dt as UploadError,ft as UploadInterrupted,_t as __namedExportsOrder,ot as default};