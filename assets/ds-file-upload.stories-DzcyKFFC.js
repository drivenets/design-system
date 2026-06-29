import{i as e,s as t}from"./preload-helper-xPQekRTU.js";import{X as n}from"./iframe-DKMae-Wr.js";import{c as r,k as i,l as a,n as o,s}from"./blocks-CQ3D_dN-.js";import{t as c}from"./jsx-runtime-CaZkqeYb.js";import{t as l}from"./classnames-Dm_LJ4P4.js";import{t as u}from"./compiler-runtime-vGF-DxYq.js";import{t as d}from"./ds-icon-DfQmiIla.js";import{t as f}from"./ds-icon-VZzDslgo.js";import{C as p,M as m,t as h}from"./dist-CuHPRZs1.js";import{n as g,t as _}from"./ds-typography-Cz--TX8N.js";import{n as v,t as y}from"./ds-button-Cap9oa-m.js";import{t as b}from"./ds-tooltip-BTyBXrzV.js";import{t as x}from"./ds-tooltip-JmcmUzh3.js";import{t as S}from"./mdx-react-shim-BVa6JLAK.js";function C(e){return w[e]||e||`File validation failed`}var w,T=e((()=>{w={FILE_TOO_LARGE:`File size exceeds the maximum limit`,FILE_INVALID_TYPE:`File type is not allowed`,TOO_MANY_FILES:`Too many files selected`,FILE_TOO_SMALL:`File size is too small`,FILE_INVALID:`File is invalid`,FILE_EXISTS:`File already exists`}})),E,D,O,k,A,j,M,N,P,F,I,L,R,z,ee,B,V,H,U=e((()=>{E=`_fileItem_1p0sn_5`,D=`_fileItemContent_1p0sn_9`,O=`_fileItemError_1p0sn_26`,k=`_progressRange_1p0sn_29`,A=`_fileItemCompleted_1p0sn_32`,j=`_fileItemUploading_1p0sn_35`,M=`_fileItemInterrupted_1p0sn_38`,N=`_filePreview_1p0sn_42`,P=`_fileInfo_1p0sn_46`,F=`_fileName_1p0sn_54`,I=`_progressContainer_1p0sn_69`,L=`_progressBar_1p0sn_76`,R=`_progressTrack_1p0sn_81`,z=`_progressText_1p0sn_96`,ee=`_completedText_1p0sn_109`,B=`_interruptedText_1p0sn_122`,V=`_errorMessage_1p0sn_135`,H={fileItem:E,fileItemContent:D,fileItemError:O,progressRange:k,fileItemCompleted:A,fileItemUploading:j,fileItemInterrupted:M,filePreview:N,fileInfo:P,fileName:F,progressContainer:I,progressBar:L,progressTrack:R,progressText:z,completedText:ee,interruptedText:B,errorMessage:V}}));function te(e){return(0,K.jsxs)(`div`,{className:H.errorMessage,children:[(0,K.jsx)(d,{icon:`cancel`,size:`tiny`,filled:!0}),C(e)]},e)}var W,G,K,ne,q=e((()=>{W=u(),G=t(l(),1),h(),x(),y(),f(),T(),U(),K=c(),ne=e=>{let t=(0,W.c)(61),{id:n,name:r,progress:i,hideProgress:a,status:o,errors:s,onCancel:c,onRetry:l,onRemove:u,onDelete:f}=e,m=a===void 0?!1:a,h=o===`error`,g=o===`completed`,_=o===`uploading`,y=o===`interrupted`||o===`cancelled`,x;t[0]!==h||t[1]!==g||t[2]!==_||t[3]!==y?(x=(0,G.default)(H.fileItemContent,{[H.fileItemError]:h,[H.fileItemCompleted]:g,[H.fileItemUploading]:_,[H.fileItemInterrupted]:y}),t[0]=h,t[1]=g,t[2]=_,t[3]=y,t[4]=x):x=t[4];let S=x,C;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,K.jsx)(d,{className:H.filePreview,icon:`upload_file`,size:`tiny`}),t[5]=C):C=t[5];let w;t[6]===r?w=t[7]:(w=(0,K.jsx)(`div`,{className:H.fileName,title:r,children:r}),t[6]=r,t[7]=w);let T=o===`error`?1:i,E;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,K.jsx)(p.Track,{className:H.progressTrack,children:(0,K.jsx)(p.Range,{className:H.progressRange})}),t[8]=E):E=t[8];let D;t[9]===T?D=t[10]:(D=(0,K.jsx)(p.Root,{value:T,className:H.progressBar,children:E}),t[9]=T,t[10]=D);let O;t[11]!==D||t[12]!==w?(O=(0,K.jsxs)(`div`,{className:H.fileInfo,children:[w,D]}),t[11]=D,t[12]=w,t[13]=O):O=t[13];let k;t[14]!==n||t[15]!==r||t[16]!==l||t[17]!==o?(k=(o===`interrupted`||o===`cancelled`)&&l&&(0,K.jsx)(b,{content:`Retry`,children:(0,K.jsx)(v,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Retry ${r} upload`,onClick:()=>l(n),children:(0,K.jsx)(d,{icon:`refresh`,size:`small`})})}),t[14]=n,t[15]=r,t[16]=l,t[17]=o,t[18]=k):k=t[18];let A;t[19]!==n||t[20]!==r||t[21]!==u||t[22]!==o?(A=(o===`pending`||o===`error`||o===`interrupted`)&&(0,K.jsx)(b,{content:`Remove`,children:(0,K.jsx)(v,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Remove ${r} upload`,onClick:()=>u?.(n),children:(0,K.jsx)(d,{icon:`do_not_disturb_on`,size:`small`})})}),t[19]=n,t[20]=r,t[21]=u,t[22]=o,t[23]=A):A=t[23];let j;t[24]!==n||t[25]!==r||t[26]!==c||t[27]!==o?(j=o===`uploading`&&c&&(0,K.jsx)(b,{content:`Cancel`,children:(0,K.jsx)(v,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Cancel ${r} upload`,onClick:()=>c(n),children:(0,K.jsx)(d,{icon:`close`,size:`small`})})}),t[24]=n,t[25]=r,t[26]=c,t[27]=o,t[28]=j):j=t[28];let M;t[29]!==n||t[30]!==r||t[31]!==f||t[32]!==o?(M=o===`completed`&&(0,K.jsx)(b,{content:`Delete`,children:(0,K.jsx)(v,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Delete ${r}`,onClick:()=>f?.(n),children:(0,K.jsx)(d,{icon:`delete`,size:`small`})})}),t[29]=n,t[30]=r,t[31]=f,t[32]=o,t[33]=M):M=t[33];let N;t[34]!==S||t[35]!==O||t[36]!==k||t[37]!==A||t[38]!==j||t[39]!==M?(N=(0,K.jsxs)(`div`,{className:S,children:[C,O,k,A,j,M]}),t[34]=S,t[35]=O,t[36]=k,t[37]=A,t[38]=j,t[39]=M,t[40]=N):N=t[40];let P;t[41]===o?P=t[42]:(P=o===`completed`&&(0,K.jsxs)(`div`,{className:H.completedText,children:[(0,K.jsx)(d,{icon:`check_circle`,size:`tiny`,filled:!0}),`Upload complete`]}),t[41]=o,t[42]=P);let F;t[43]===o?F=t[44]:(F=o===`interrupted`&&(0,K.jsxs)(`div`,{className:H.interruptedText,children:[(0,K.jsx)(d,{icon:`info`,size:`tiny`,filled:!0}),`Upload interrupted`]}),t[43]=o,t[44]=F);let I;t[45]===o?I=t[46]:(I=o===`cancelled`&&(0,K.jsxs)(`div`,{className:H.interruptedText,children:[(0,K.jsx)(d,{icon:`info`,size:`tiny`,filled:!0}),`Upload cancelled`]}),t[45]=o,t[46]=I);let L;t[47]!==s||t[48]!==o?(L=o===`error`&&s?.length&&s.map(te),t[47]=s,t[48]=o,t[49]=L):L=t[49];let R;t[50]!==m||t[51]!==i||t[52]!==o?(R=!m&&o===`uploading`&&(0,K.jsxs)(`span`,{className:H.progressText,children:[`Uploading...(`,Math.round(i),`%)`]}),t[50]=m,t[51]=i,t[52]=o,t[53]=R):R=t[53];let z;return t[54]!==N||t[55]!==P||t[56]!==F||t[57]!==I||t[58]!==L||t[59]!==R?(z=(0,K.jsxs)(`div`,{className:H.fileItem,children:[N,P,F,I,L,R]}),t[54]=N,t[55]=P,t[56]=F,t[57]=I,t[58]=L,t[59]=R,t[60]=z):z=t[60],z}})),J=e((()=>{q()})),re,ie,Y=e((()=>{re=[`application/pdf`,`text/csv`,`application/zip`,`application/x-zip-compressed`],ie=25e6})),ae,oe=e((()=>{ae={"image/png":[`.png`],"image/gif":[`.gif`],"image/jpeg":[`.jpg`,`.jpeg`],"image/svg+xml":[`.svg`],"image/webp":[`.webp`],"image/avif":[`.avif`],"image/heic":[`.heic`,`.heif`],"image/bmp":[`.bmp`],"application/pdf":[`.pdf`],"application/zip":[`.zip`],"application/json":[`.json`],"application/xml":[`.xml`],"application/msword":[`.doc`],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[`.docx`],"application/vnd.ms-excel":[`.xls`],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[`.xlsx`],"application/vnd.ms-powerpoint":[`.ppt`],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[`.pptx`],"application/rtf":[`.rtf`],"application/x-rar":[`.rar`],"application/x-7z-compressed":[`.7z`],"application/x-tar":[`.tar`],"application/vnd.microsoft.portable-executable":[`.exe`,`.dll`],"text/css":[`.css`],"text/csv":[`.csv`],"text/html":[`.html`,`.htm`],"text/markdown":[`.md`,`.markdown`],"text/plain":[`.txt`],"font/ttf":[`.ttf`],"font/otf":[`.otf`],"font/woff":[`.woff`],"font/woff2":[`.woff2`],"font/eot":[`.eot`],"font/svg":[`.svg`],"video/mp4":[`.mp4`],"video/webm":[`.webm`],"video/ogg":[`.ogv`],"video/quicktime":[`.mov`],"video/x-msvideo":[`.avi`],"audio/mpeg":[`.mp3`],"audio/ogg":[`.ogg`,`.oga`],"audio/wav":[`.wav`],"audio/webm":[`.weba`],"audio/aac":[`.aac`],"audio/flac":[`.flac`],"audio/x-m4a":[`.m4a`],"image/*":[`.png`,`.jpg`,`.jpeg`,`.gif`,`.webp`,`.svg`,`.bmp`,`.avif`,`.heic`,`.heif`],"audio/*":[`.mp3`,`.wav`,`.ogg`,`.oga`,`.m4a`,`.flac`,`.aac`,`.weba`],"video/*":[`.mp4`,`.webm`,`.ogv`,`.mov`,`.avi`],"text/*":[`.txt`,`.html`,`.htm`,`.css`,`.csv`,`.md`,`.markdown`],"application/*":[`.pdf`,`.zip`,`.json`,`.xml`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.rtf`,`.rar`,`.7z`,`.tar`],"font/*":[`.ttf`,`.otf`,`.woff`,`.woff2`,`.eot`]}}));function se(e){return e.flatMap(e=>typeof e==`string`?ae[e]??[]:e.extensions)}function ce(e){return e.map(e=>typeof e==`string`?e:e.mimeType)}var le=e((()=>{oe()}));function ue(e){if(e===0)return`0 B`;let t=1e3,n=[`B`,`KB`,`MB`,`GB`,`TB`,`PB`],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(2)} ${String(n[r])}`}var de=e((()=>{}));function fe(e,t,n){let r=se(e),i=[...new Set(r)].map(e=>e.toUpperCase()).join(`, `),a=ue(t),o=[];return i&&o.push(`Only ${i} files`),t<1/0&&o.push(`File size ${a} max`),n===1?o.push(`Only 1 file`):n>1&&o.push(`Up to ${String(n)} files`),o.join(`. `)+`.`}var pe=e((()=>{le(),de()})),me,he,ge,_e,ve,ye,be,xe,X,Se=e((()=>{me=`_fileUploadRoot_dkxa6_5`,he=`_dropzone_dkxa6_11`,ge=`_dropzoneCompact_dkxa6_23`,_e=`_dropzoneIcon_dkxa6_27`,ve=`_dropzoneText_dkxa6_30`,ye=`_fileList_dkxa6_61`,be=`_infoText_dkxa6_71`,xe=`_errorText_dkxa6_76`,X={fileUploadRoot:me,dropzone:he,dropzoneCompact:ge,dropzoneIcon:_e,dropzoneText:ve,fileList:ye,infoText:be,errorText:xe}})),Ce,we,Z,Te,Ee=e((()=>{Ce=u(),we=t(l(),1),h(),f(),_(),y(),J(),Y(),pe(),le(),Se(),Z=c(),Te=e=>{let t=(0,Ce.c)(52),{style:n,className:r,files:i,acceptedFiles:a,errorText:o,dropzoneText:s,triggerText:c,hideProgress:l,hideInfoText:u,disableDrop:f,onFileAccept:p,onFileReject:h,onFileRemove:_,onFileDelete:y,onFileCancel:b,onFileRetry:x,accept:S,maxFiles:C,maxFileSize:w,compact:T,disabled:E}=e,D;t[0]===n?D=t[1]:(D=n===void 0?{}:n,t[0]=n,t[1]=D);let O=D,k=s===void 0?`Drag and drop files here or `:s,A=c===void 0?`Select file...`:c,j=l===void 0?!1:l,M=u===void 0?!1:u,N=f===void 0?!1:f,P=S===void 0?re:S,F=C===void 0?5:C,I=w===void 0?ie:w,L=T===void 0?!1:T,R=E===void 0?!1:E,z;t[2]!==P||t[3]!==I||t[4]!==F?(z=fe(P,I,F),t[2]=P,t[3]=I,t[4]=F,t[5]=z):z=t[5];let ee=z,B;t[6]===r?B=t[7]:(B=(0,we.default)(X.fileUploadRoot,r),t[6]=r,t[7]=B);let V;t[8]===P?V=t[9]:(V=ce(P),t[8]=P,t[9]=V);let H=!N,U;t[10]===L?U=t[11]:(U=(0,we.default)(X.dropzone,{[X.dropzoneCompact]:L}),t[10]=L,t[11]=U);let te;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(te=(0,Z.jsx)(d,{icon:`upload`,className:X.dropzoneIcon}),t[12]=te):te=t[12];let W;t[13]===k?W=t[14]:(W=(0,Z.jsx)(g,{className:X.dropzoneText,variant:`body-xs-reg`,children:k}),t[13]=k,t[14]=W);let G;t[15]!==R||t[16]!==A?(G=(0,Z.jsx)(m.Trigger,{asChild:!0,children:(0,Z.jsx)(v,{design:`v1.2`,variant:`ghost`,size:`small`,disabled:R,children:A})}),t[15]=R,t[16]=A,t[17]=G):G=t[17];let K;t[18]!==U||t[19]!==W||t[20]!==G?(K=(0,Z.jsxs)(m.Dropzone,{className:U,children:[te,W,G]}),t[18]=U,t[19]=W,t[20]=G,t[21]=K):K=t[21];let q;t[22]!==R||t[23]!==o||t[24]!==M||t[25]!==ee?(q=ee&&!M&&!R&&!o&&(0,Z.jsx)(g,{className:X.infoText,variant:`body-xs-reg`,children:ee}),t[22]=R,t[23]=o,t[24]=M,t[25]=ee,t[26]=q):q=t[26];let J;t[27]===o?J=t[28]:(J=o&&(0,Z.jsxs)(g,{className:X.errorText,variant:`body-xs-reg`,children:[(0,Z.jsx)(d,{icon:`error`,size:`tiny`}),o]}),t[27]=o,t[28]=J);let Y;t[29]!==i||t[30]!==j||t[31]!==b||t[32]!==y||t[33]!==_||t[34]!==x?(Y=!!i?.length&&(0,Z.jsx)(`div`,{className:X.fileList,children:i.map(e=>(0,Z.jsx)(ne,{id:e.id,name:e.name,progress:e.progress,hideProgress:j,status:e.status,errors:e.errors,onRemove:_,onDelete:y,onCancel:b,onRetry:x},e.id))}),t[29]=i,t[30]=j,t[31]=b,t[32]=y,t[33]=_,t[34]=x,t[35]=Y):Y=t[35];let ae;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(ae=(0,Z.jsx)(m.HiddenInput,{}),t[36]=ae):ae=t[36];let oe;return t[37]!==a||t[38]!==R||t[39]!==I||t[40]!==F||t[41]!==p||t[42]!==h||t[43]!==O||t[44]!==B||t[45]!==V||t[46]!==H||t[47]!==K||t[48]!==q||t[49]!==J||t[50]!==Y?(oe=(0,Z.jsxs)(m.Root,{style:O,className:B,maxFiles:F,maxFileSize:I,accept:V,disabled:R,allowDrop:H,acceptedFiles:a,onFileAccept:p,onFileReject:h,children:[K,q,J,Y,ae]}),t[37]=a,t[38]=R,t[39]=I,t[40]=F,t[41]=p,t[42]=h,t[43]=O,t[44]=B,t[45]=V,t[46]=H,t[47]=K,t[48]=q,t[49]=J,t[50]=Y,t[51]=oe):oe=t[51],oe}})),De=e((()=>{Ee()}));function Oe(e,t,n){return{...e,id:`${e.name}-${String(Date.now())}-${String(Math.random())}`,name:e.name,size:e.size,type:e.type,progress:0,status:t,errors:n,originalFile:e}}var ke=e((()=>{}));function Ae(e,t){return e.name===t.name&&e.size===t.size&&e.type===t.type}var je=e((()=>{})),Me,Ne,Pe,Fe=e((()=>{Me=class extends Error{constructor(e){super(e),this.name=this.constructor.name}},Ne=class extends Me{isRetryable=!0},Pe=class extends Me{isRetryable=!1}}));function Ie({adapter:e,autoUpload:t=!0,maxConcurrent:n=3,maxFiles:r,metadata:i,onFileUploadComplete:a,onFileUploadError:o,onAllFileUploadsComplete:s}){let[c]=(0,Le.useState)(()=>new Map),[l,u]=(0,Le.useState)([]),d=l.filter(e=>e.status!==`error`);l.length&&!l.some(e=>e.status===`uploading`)&&s?.();let f=e=>e.filter(e=>!d.some(t=>Ae(t,e))),p=e=>e.filter(e=>{if(e.id)return!1;let t=l.filter(t=>Ae(t,e));return t.length?!t.some(e=>e.errors?.includes(`FILE_EXISTS`)):!1}),m=e=>{let t=e.map(e=>({file:e,errors:[`FILE_EXISTS`]}));t.length&&y(t)},h=e=>{if(r===void 0)return e;let t=r-d.length,n,i;if(t<=0)n=[],i=e;else if(e.length>t)n=e.slice(0,t),i=e.slice(t);else return e;return y(i.map(e=>({file:e,errors:[`TOO_MANY_FILES`]}))),n},g=e=>{let t=e.map(e=>Oe(e,`pending`));return u(e=>[...e,...t]),t},_=e=>{t&&e.forEach(e=>{C(e)})},v=e=>{let t=f(e);m(p(e));let n=g(h(t));return _(n),n},y=e=>{let t=e.map(({file:e,errors:t})=>Oe(e,`error`,t));u(e=>[...e,...t])},b=(e,t)=>{u(n=>n.map(n=>n.id===e?{...n,progress:t}:n))},x=(e,t,n)=>{u(r=>r.map(r=>r.id===e?{...r,status:t,errors:n?[...r.errors||[],n]:r.errors}:r))},S=async e=>{let t=d.find(t=>t.id===e);t&&await C(t)},C=async t=>{let n=t.id,r=new AbortController;c.set(n,r),x(t.id,`uploading`);try{let o=await e.upload({file:t.originalFile,fileId:n,metadata:i,signal:r.signal,onProgress:e=>{b(n,e)}});x(n,`completed`),b(n,100),a?.(n,o)}catch(e){let t=e instanceof Error?e.message:`Upload failed`,r=`interrupted`;e instanceof Me&&(r=e.isRetryable?`interrupted`:`error`),x(n,r,t),o?.(n,t)}finally{c.delete(n)}},w=async()=>{let e=l.filter(e=>e.status===`pending`);for(let t=0;t<e.length;t+=n){let r=e.slice(t,t+n);await Promise.allSettled(r.map(e=>S(e.id)))}},T=async t=>{c.get(t)?.abort(),c.delete(t),e.cancel&&await e.cancel(t),x(t,`cancelled`)},E=async e=>{x(e,`pending`),b(e,0),await S(e)},D=e=>{c.get(e)?.abort(),c.delete(e),u(t=>t.filter(t=>t.id!==e))},O=async t=>{e.delete&&await e.delete(t),D(t)};return{files:l,acceptedFiles:d,addFiles:v,addRejectedFiles:y,removeFile:D,deleteFile:O,uploadFile:S,uploadAll:w,cancelUpload:T,retryUpload:E,clearFiles:()=>{c.forEach(e=>e.abort()),c.clear(),u([])},getProps:e=>({files:l,acceptedFiles:d,onFileAccept:t=>{let n=v(t.files);e?.onFilesAdded?.(n)},onFileReject:e=>{y(e.files.map(e=>({file:e.file,errors:e.errors})))},onFileRemove:t=>{D(t),e?.onFileRemoved?.(t)},onFileDelete:async t=>{await O(t),e?.onFileDeleted?.(t)},onFileCancel:async t=>{await T(t),e?.onFileUploadCanceled?.(t)},onFileRetry:async t=>{await E(t),e?.onFileUploadRetried?.(t)}})}}var Le,Re=e((()=>{Le=t(n(),1),ke(),je(),Fe()})),ze=e((()=>{Re()})),Be,Ve,He,Ue=e((()=>{Be=u(),De(),ze(),Ve=c(),He=e=>{let t=(0,Be.c)(33),n,r,i,a,o,s,c,l,u,d,f,p,m;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11],p=t[12],m=t[13]):({adapter:n,autoUpload:p,maxConcurrent:m,metadata:r,onFileUploadComplete:c,onFileUploadError:l,onFilesAdded:d,onFileRemoved:o,onFileDeleted:a,onFileUploadCanceled:s,onFileUploadRetried:u,onAllFileUploadsComplete:i,...f}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m);let h=p===void 0?!0:p,g=m===void 0?3:m,_;t[14]!==n||t[15]!==h||t[16]!==g||t[17]!==r||t[18]!==i||t[19]!==c||t[20]!==l||t[21]!==f.maxFiles?(_={adapter:n,autoUpload:h,maxConcurrent:g,maxFiles:f.maxFiles,metadata:r,onFileUploadComplete:c,onFileUploadError:l,onAllFileUploadsComplete:i},t[14]=n,t[15]=h,t[16]=g,t[17]=r,t[18]=i,t[19]=c,t[20]=l,t[21]=f.maxFiles,t[22]=_):_=t[22];let{getProps:v}=Ie(_),y;t[23]!==v||t[24]!==a||t[25]!==o||t[26]!==s||t[27]!==u||t[28]!==d?(y=v({onFilesAdded:d,onFileRemoved:o,onFileDeleted:a,onFileUploadCanceled:s,onFileUploadRetried:u}),t[23]=v,t[24]=a,t[25]=o,t[26]=s,t[27]=u,t[28]=d,t[29]=y):y=t[29];let b=y,x;return t[30]!==b||t[31]!==f?(x=(0,Ve.jsx)(Te,{...b,...f}),t[30]=b,t[31]=f,t[32]=x):x=t[32],x}})),We,Q,Ge=e((()=>{Fe(),We=class{interruptedRuns=-1;uploads=new Map;config;constructor(e={}){this.config=e}async upload(e){let{scenario:t=`success`,duration:n=2e3,steps:r=20,interruptAt:i=30,errorMessage:a=`Upload failed`,delay:o=0}=this.config,{file:s,fileId:c,onProgress:l,signal:u}=e;this.uploads.set(c,{cancelled:!1});let d=()=>u?.aborted||this.uploads.get(c)?.cancelled?(this.uploads.delete(c),!0):!1;if(o>0&&(await this.sleep(o),d()))throw new Ne(`Upload cancelled`);if(t===`error`)throw new Pe(a||`Unsupported file type`);let f=n/r;for(let e=0;e<=r;e++){if(d())throw new Ne(`Upload cancelled`);await this.sleep(f);let n=Math.min(e/r*100,100);if(l?.(n),t===`interrupted`&&n>=i&&this.interruptedRuns%2)throw this.uploads.delete(c),this.interruptedRuns++,new Ne(a||`Network connection lost`)}return this.interruptedRuns++,this.uploads.delete(c),{url:`mock://uploaded/${s.name}`,metadata:{fileName:s.name,fileSize:s.size,fileType:s.type,uploadedAt:new Date().toISOString()}}}cancel(e){let t=this.uploads.get(e);t&&(t.cancelled=!0)}sleep(e){return new Promise(t=>setTimeout(t,e))}},Q={normal:()=>new We({scenario:`success`,duration:2e3+Math.random()*1e3,steps:20}),fast:()=>new We({scenario:`success`,duration:800,steps:10}),slow:()=>new We({scenario:`success`,duration:1e4,steps:30}),interrupted:(e=30)=>new We({scenario:`interrupted`,duration:1e3,steps:20,interruptAt:e,errorMessage:`Network connection lost`}),error:e=>new We({scenario:`error`,errorMessage:e||`Unsupported file type`}),custom:e=>new We(e)}})),Ke=e((()=>{})),qe=e((()=>{Ue(),De(),Ke(),ze(),Fe()})),Je,Ye=e((()=>{Je=`import type {
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
`}));function Xe(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,p:`p`,strong:`strong`,...i(),...e.components};return(0,$.jsxs)($.Fragment,{children:[(0,$.jsx)(t.h1,{id:`file-upload`,children:`File Upload`}),`
`,(0,$.jsxs)(t.p,{children:[`To use the file upload component you need to provide an adapter that implements the `,(0,$.jsx)(t.code,{children:`FileUploadAdapter`}),` interface.
See sample adapter below implemented using the native `,(0,$.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest`,rel:`nofollow`,children:(0,$.jsx)(t.code,{children:`XMLHttpRequest`})}),` API but you can also use fetch, axios etc.`]}),`
`,(0,$.jsx)(t.hr,{}),`
`,(0,$.jsxs)(t.p,{children:[`This is a minimal interactive story showing how to write and use a simple upload adapter. Click on `,(0,$.jsx)(t.strong,{children:`Show code`}),` to see the usage example.`]}),`
`,(0,$.jsx)(o,{children:(0,$.jsx)(r,{name:`Default`})}),`
`,(0,$.jsx)(t.h2,{id:`example-fileuploadadapter`,children:`Example FileUploadAdapter`}),`
`,(0,$.jsx)(s,{code:Je,language:`ts`,dark:!0})]})}function Ze(e={}){let{wrapper:t}={...i(),...e.components};return t?(0,$.jsx)(t,{...e,children:(0,$.jsx)(Xe,{...e})}):Xe(e)}var $,Qe=e((()=>{$=c(),S(),a(),qe(),Ye()})),$e,et,tt,nt,rt,it,at,ot,st,ct,lt,ut,dt,ft;e((()=>{y(),Ue(),ze(),Ge(),De(),Qe(),$e=c(),{fn:et}=__STORYBOOK_MODULE_TEST__,tt={title:`Components/FileUpload`,component:He,parameters:{layout:`centered`,docs:{page:Ze,source:{code:`
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
);`}}},argTypes:{errorText:{control:`text`},dropzoneText:{control:`text`},triggerText:{control:`text`},hideProgress:{control:`boolean`},hideInfoText:{control:`boolean`},disableDrop:{control:`boolean`},maxFiles:{control:`number`},accept:{control:`object`},disabled:{control:`boolean`},compact:{control:`boolean`}}},nt={args:{adapter:Q.normal(),style:{width:`500px`},onFilesAdded:e=>{console.log(`Files added:`,e.map(e=>e.name))},onFileUploadComplete:(e,t)=>{console.log(`File upload complete:`,e,t.url)},onFileUploadError:(e,t)=>{console.error(`File upload failed:`,e,t)},onFileRemoved:e=>{console.log(`File removed:`,e)},onFileDeleted:e=>{console.log(`File deleted:`,e)},onFileUploadCanceled:e=>{console.log(`File upload canceled:`,e)},onFileUploadRetried:e=>{console.log(`File upload retried:`,e)},onAllFileUploadsComplete:()=>{console.log(`All file uploads complete!`)}}},rt={args:{adapter:Q.fast(),autoUpload:!1,hideProgress:!1,style:{width:`500px`},onFilesAdded:et(),onFileUploadComplete:et(),onAllFileUploadsComplete:et()},render:function(e){let{getProps:t,files:n,uploadAll:r,clearFiles:i}=Ie({adapter:e.adapter,autoUpload:e.autoUpload,onFileUploadComplete:e.onFileUploadComplete,onAllFileUploadsComplete:e.onAllFileUploadsComplete}),a=n.some(e=>e.status===`uploading`),o=n.length>0;return(0,$e.jsxs)(`div`,{style:{width:`500px`},children:[(0,$e.jsx)(Te,{...t({onFilesAdded:e.onFilesAdded}),...e}),o&&(0,$e.jsxs)(`div`,{style:{marginTop:`16px`,display:`flex`,gap:`8px`},children:[(0,$e.jsx)(v,{design:`v1.2`,size:`small`,onClick:()=>r(),disabled:a,children:a?`Uploading...`:`Upload All`}),(0,$e.jsx)(v,{design:`v1.2`,variant:`ghost`,size:`small`,onClick:()=>i(),disabled:a,children:`Clear All`})]})]})}},it={args:{adapter:Q.fast(),compact:!0,maxFiles:1,accept:[`application/pdf`,`text/csv`,{mimeType:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,extensions:[`.xlsx`]}],dropzoneText:`Drag and drop your document here or`,triggerText:`Choose document`,style:{width:`400px`},onFilesAdded:et()}},at={args:{adapter:Q.normal(),disabled:!0,style:{width:`500px`}}},ot={args:{adapter:Q.error(`Unsupported file type`),style:{width:`500px`}}},st={args:{adapter:Q.interrupted(30),style:{width:`500px`}}},ct={args:{adapter:Q.fast(),maxFiles:1,style:{width:`400px`}}},lt={args:{adapter:Q.fast(),style:{width:`500px`},onFilesAdded:et()}},ut={args:{adapter:Q.fast(),hideInfoText:!0,style:{width:`500px`}}},dt={args:{adapter:Q.slow(),style:{width:`500px`},onFileUploadCanceled:et()}},nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
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
}`,...nt.parameters?.docs?.source},description:{story:`Default auto-upload behavior
Files automatically upload when dropped or selected`,...nt.parameters?.docs?.description}}},rt.parameters={...rt.parameters,docs:{...rt.parameters?.docs,source:{originalSource:`{
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
}`,...rt.parameters?.docs?.source},description:{story:`Manual upload mode - files must be uploaded manually
Good for review workflows or batch operations
Advance use case which demonstrates use of (base) FileUpload with useFileUpload`,...rt.parameters?.docs?.description}}},it.parameters={...it.parameters,docs:{...it.parameters?.docs,source:{originalSource:`{
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
}`,...it.parameters?.docs?.source}}},at.parameters={...at.parameters,docs:{...at.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.normal(),
    disabled: true,
    style: {
      width: '500px'
    }
  }
}`,...at.parameters?.docs?.source},description:{story:`Disabled state`,...at.parameters?.docs?.description}}},ot.parameters={...ot.parameters,docs:{...ot.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.error('Unsupported file type'),
    style: {
      width: '500px'
    }
  }
}`,...ot.parameters?.docs?.source},description:{story:`Upload error scenario - file fails validation immediately`,...ot.parameters?.docs?.description}}},st.parameters={...st.parameters,docs:{...st.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.interrupted(30),
    style: {
      width: '500px'
    }
  }
}`,...st.parameters?.docs?.source},description:{story:`Upload interrupted scenario - network fails mid-upload
Demonstrates retry functionality`,...st.parameters?.docs?.description}}},ct.parameters={...ct.parameters,docs:{...ct.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    maxFiles: 1,
    style: {
      width: '400px'
    }
  }
}`,...ct.parameters?.docs?.source}}},lt.parameters={...lt.parameters,docs:{...lt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    style: {
      width: '500px'
    },
    onFilesAdded: fn()
  }
}`,...lt.parameters?.docs?.source},description:{story:`Duplicate files scenario - uploading the same file twice
Demonstrates duplicate detection and FILE_EXISTS error`,...lt.parameters?.docs?.description}}},ut.parameters={...ut.parameters,docs:{...ut.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    hideInfoText: true,
    style: {
      width: '500px'
    }
  }
}`,...ut.parameters?.docs?.source},description:{story:`Hidden info text - hides the file type and size limit information`,...ut.parameters?.docs?.description}}},dt.parameters={...dt.parameters,docs:{...dt.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.slow(),
    style: {
      width: '500px'
    },
    onFileUploadCanceled: fn()
  }
}`,...dt.parameters?.docs?.source},description:{story:`Cancel upload scenario - cancel an ongoing upload
Demonstrates upload cancellation functionality`,...dt.parameters?.docs?.description}}},ft=[`Default`,`Manual`,`Compact`,`Disabled`,`UploadError`,`UploadInterrupted`,`MaxFiles`,`DuplicateFiles`,`HiddenInfoText`,`CancelUpload`]}))();export{dt as CancelUpload,it as Compact,nt as Default,at as Disabled,lt as DuplicateFiles,ut as HiddenInfoText,rt as Manual,ct as MaxFiles,ot as UploadError,st as UploadInterrupted,ft as __namedExportsOrder,tt as default};