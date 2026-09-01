import{a as e,n as t}from"./rolldown-runtime-DaJ6WEGw.js";import{t as n}from"./react-BJoyWkjz.js";import{t as r}from"./jsx-runtime-cM__dR4X.js";import{n as i,t as a}from"./classnames-Cm4Wq5Eu.js";import{t as o}from"./ds-icon-DMuQRurV.js";import{t as s}from"./ds-icon-hk1K6-z2.js";import{l as c,m as l,t as u}from"./dist-D0pUbhFh.js";import{r as d}from"./ds-tooltip.types-7Q2c6r4V.js";import{n as f,t as p}from"./ds-typography-BLoO5j9q.js";import{t as m}from"./ds-tooltip-DZx4AkAX.js";import{n as h,t as g}from"./ds-button-v3-r44tD_RJ.js";import{n as _,t as v}from"./ds-stack-GU0hZWeR.js";import{n as y,t as b}from"./ds-button-DcPUTCrY.js";function x(e){return S[e]||e||`File validation failed`}var S,C=t((()=>{S={FILE_TOO_LARGE:`File size exceeds the maximum limit`,FILE_INVALID_TYPE:`File type is not allowed`,TOO_MANY_FILES:`Too many files selected`,FILE_TOO_SMALL:`File size is too small`,FILE_INVALID:`File is invalid`,FILE_EXISTS:`File already exists`}})),w,T,E,D,O,k,A,j,M,N,P,F,I,L,R,z,ee,B,V=t((()=>{w=`_fileItem_1p0sn_5`,T=`_fileItemContent_1p0sn_9`,E=`_fileItemError_1p0sn_26`,D=`_progressRange_1p0sn_29`,O=`_fileItemCompleted_1p0sn_32`,k=`_fileItemUploading_1p0sn_35`,A=`_fileItemInterrupted_1p0sn_38`,j=`_filePreview_1p0sn_42`,M=`_fileInfo_1p0sn_46`,N=`_fileName_1p0sn_54`,P=`_progressContainer_1p0sn_69`,F=`_progressBar_1p0sn_76`,I=`_progressTrack_1p0sn_81`,L=`_progressText_1p0sn_96`,R=`_completedText_1p0sn_109`,z=`_interruptedText_1p0sn_122`,ee=`_errorMessage_1p0sn_135`,B={fileItem:w,fileItemContent:T,fileItemError:E,progressRange:D,fileItemCompleted:O,fileItemUploading:k,fileItemInterrupted:A,filePreview:j,fileInfo:M,fileName:N,progressContainer:P,progressBar:F,progressTrack:I,progressText:L,completedText:R,interruptedText:z,errorMessage:ee}}));function te(e){return(0,U.jsxs)(`div`,{className:B.errorMessage,children:[(0,U.jsx)(o,{icon:`cancel`,size:`tiny`,filled:!0}),x(e)]},e)}var H,ne,U,re,ie=t((()=>{H=i(),ne=e(a(),1),u(),m(),b(),s(),C(),V(),U=r(),re=e=>{let t=(0,H.c)(61),{id:n,name:r,progress:i,hideProgress:a,status:s,errors:l,onCancel:u,onRetry:f,onRemove:p,onDelete:m}=e,h=a!==void 0&&a,g=s===`error`,_=s===`completed`,v=s===`uploading`,b=s===`interrupted`||s===`cancelled`,x;t[0]!==g||t[1]!==_||t[2]!==v||t[3]!==b?(x=(0,ne.default)(B.fileItemContent,{[B.fileItemError]:g,[B.fileItemCompleted]:_,[B.fileItemUploading]:v,[B.fileItemInterrupted]:b}),t[0]=g,t[1]=_,t[2]=v,t[3]=b,t[4]=x):x=t[4];let S=x,C;t[5]===Symbol.for(`react.memo_cache_sentinel`)?(C=(0,U.jsx)(o,{className:B.filePreview,icon:`upload_file`,size:`tiny`}),t[5]=C):C=t[5];let w;t[6]===r?w=t[7]:(w=(0,U.jsx)(`div`,{className:B.fileName,title:r,children:r}),t[6]=r,t[7]=w);let T=s===`error`?1:i,E;t[8]===Symbol.for(`react.memo_cache_sentinel`)?(E=(0,U.jsx)(c.Track,{className:B.progressTrack,children:(0,U.jsx)(c.Range,{className:B.progressRange})}),t[8]=E):E=t[8];let D;t[9]===T?D=t[10]:(D=(0,U.jsx)(c.Root,{value:T,className:B.progressBar,children:E}),t[9]=T,t[10]=D);let O;t[11]!==D||t[12]!==w?(O=(0,U.jsxs)(`div`,{className:B.fileInfo,children:[w,D]}),t[11]=D,t[12]=w,t[13]=O):O=t[13];let k;t[14]!==n||t[15]!==r||t[16]!==f||t[17]!==s?(k=(s===`interrupted`||s===`cancelled`)&&f&&(0,U.jsx)(d,{content:`Retry`,children:(0,U.jsx)(y,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Retry ${r} upload`,onClick:()=>f(n),children:(0,U.jsx)(o,{icon:`refresh`,size:`small`})})}),t[14]=n,t[15]=r,t[16]=f,t[17]=s,t[18]=k):k=t[18];let A;t[19]!==n||t[20]!==r||t[21]!==p||t[22]!==s?(A=(s===`pending`||s===`error`||s===`interrupted`)&&(0,U.jsx)(d,{content:`Remove`,children:(0,U.jsx)(y,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Remove ${r} upload`,onClick:()=>p?.(n),children:(0,U.jsx)(o,{icon:`do_not_disturb_on`,size:`small`})})}),t[19]=n,t[20]=r,t[21]=p,t[22]=s,t[23]=A):A=t[23];let j;t[24]!==n||t[25]!==r||t[26]!==u||t[27]!==s?(j=s===`uploading`&&u&&(0,U.jsx)(d,{content:`Cancel`,children:(0,U.jsx)(y,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Cancel ${r} upload`,onClick:()=>u(n),children:(0,U.jsx)(o,{icon:`close`,size:`small`})})}),t[24]=n,t[25]=r,t[26]=u,t[27]=s,t[28]=j):j=t[28];let M;t[29]!==n||t[30]!==r||t[31]!==m||t[32]!==s?(M=s===`completed`&&(0,U.jsx)(d,{content:`Delete`,children:(0,U.jsx)(y,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Delete ${r}`,onClick:()=>m?.(n),children:(0,U.jsx)(o,{icon:`delete`,size:`small`})})}),t[29]=n,t[30]=r,t[31]=m,t[32]=s,t[33]=M):M=t[33];let N;t[34]!==S||t[35]!==O||t[36]!==k||t[37]!==A||t[38]!==j||t[39]!==M?(N=(0,U.jsxs)(`div`,{className:S,children:[C,O,k,A,j,M]}),t[34]=S,t[35]=O,t[36]=k,t[37]=A,t[38]=j,t[39]=M,t[40]=N):N=t[40];let P;t[41]===s?P=t[42]:(P=s===`completed`&&(0,U.jsxs)(`div`,{className:B.completedText,children:[(0,U.jsx)(o,{icon:`check_circle`,size:`tiny`,filled:!0}),`Upload complete`]}),t[41]=s,t[42]=P);let F;t[43]===s?F=t[44]:(F=s===`interrupted`&&(0,U.jsxs)(`div`,{className:B.interruptedText,children:[(0,U.jsx)(o,{icon:`info`,size:`tiny`,filled:!0}),`Upload interrupted`]}),t[43]=s,t[44]=F);let I;t[45]===s?I=t[46]:(I=s===`cancelled`&&(0,U.jsxs)(`div`,{className:B.interruptedText,children:[(0,U.jsx)(o,{icon:`info`,size:`tiny`,filled:!0}),`Upload cancelled`]}),t[45]=s,t[46]=I);let L;t[47]!==l||t[48]!==s?(L=s===`error`&&l?.length&&l.map(te),t[47]=l,t[48]=s,t[49]=L):L=t[49];let R;t[50]!==h||t[51]!==i||t[52]!==s?(R=!h&&s===`uploading`&&(0,U.jsxs)(`span`,{className:B.progressText,children:[`Uploading...(`,Math.round(i),`%)`]}),t[50]=h,t[51]=i,t[52]=s,t[53]=R):R=t[53];let z;return t[54]!==N||t[55]!==P||t[56]!==F||t[57]!==I||t[58]!==L||t[59]!==R?(z=(0,U.jsxs)(`div`,{className:B.fileItem,children:[N,P,F,I,L,R]}),t[54]=N,t[55]=P,t[56]=F,t[57]=I,t[58]=L,t[59]=R,t[60]=z):z=t[60],z}})),ae=t((()=>{ie()})),oe,se,W=t((()=>{oe=[`application/pdf`,`text/csv`,`application/zip`,`application/x-zip-compressed`],se=25e6})),G,K=t((()=>{G={"image/png":[`.png`],"image/gif":[`.gif`],"image/jpeg":[`.jpg`,`.jpeg`],"image/svg+xml":[`.svg`],"image/webp":[`.webp`],"image/avif":[`.avif`],"image/heic":[`.heic`,`.heif`],"image/bmp":[`.bmp`],"application/pdf":[`.pdf`],"application/zip":[`.zip`],"application/json":[`.json`],"application/xml":[`.xml`],"application/msword":[`.doc`],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[`.docx`],"application/vnd.ms-excel":[`.xls`],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[`.xlsx`],"application/vnd.ms-powerpoint":[`.ppt`],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[`.pptx`],"application/rtf":[`.rtf`],"application/x-rar":[`.rar`],"application/x-7z-compressed":[`.7z`],"application/x-tar":[`.tar`],"application/vnd.microsoft.portable-executable":[`.exe`,`.dll`],"text/css":[`.css`],"text/csv":[`.csv`],"text/html":[`.html`,`.htm`],"text/markdown":[`.md`,`.markdown`],"text/plain":[`.txt`],"font/ttf":[`.ttf`],"font/otf":[`.otf`],"font/woff":[`.woff`],"font/woff2":[`.woff2`],"font/eot":[`.eot`],"font/svg":[`.svg`],"video/mp4":[`.mp4`],"video/webm":[`.webm`],"video/ogg":[`.ogv`],"video/quicktime":[`.mov`],"video/x-msvideo":[`.avi`],"audio/mpeg":[`.mp3`],"audio/ogg":[`.ogg`,`.oga`],"audio/wav":[`.wav`],"audio/webm":[`.weba`],"audio/aac":[`.aac`],"audio/flac":[`.flac`],"audio/x-m4a":[`.m4a`],"image/*":[`.png`,`.jpg`,`.jpeg`,`.gif`,`.webp`,`.svg`,`.bmp`,`.avif`,`.heic`,`.heif`],"audio/*":[`.mp3`,`.wav`,`.ogg`,`.oga`,`.m4a`,`.flac`,`.aac`,`.weba`],"video/*":[`.mp4`,`.webm`,`.ogv`,`.mov`,`.avi`],"text/*":[`.txt`,`.html`,`.htm`,`.css`,`.csv`,`.md`,`.markdown`],"application/*":[`.pdf`,`.zip`,`.json`,`.xml`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.rtf`,`.rar`,`.7z`,`.tar`],"font/*":[`.ttf`,`.otf`,`.woff`,`.woff2`,`.eot`]}}));function ce(e){return e.flatMap(e=>typeof e==`string`?G[e]??[]:e.extensions)}function le(e){return e.map(e=>typeof e==`string`?e:e.mimeType)}var ue=t((()=>{K()}));function de(e){if(e===0)return`0 B`;let t=1e3,n=[`B`,`KB`,`MB`,`GB`,`TB`,`PB`],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**r).toFixed(2)} ${String(n[r])}`}var fe=t((()=>{}));function pe(e,t,n){let r=ce(e),i=[...new Set(r)].map(e=>e.toUpperCase()).join(`, `),a=de(t),o=[];return i&&o.push(`Only ${i} files`),t<1/0&&o.push(`File size ${a} max`),n===1?o.push(`Only 1 file`):n>1&&o.push(`Up to ${String(n)} files`),o.join(`. `)+`.`}var me=t((()=>{ue(),fe()})),he,ge,_e,ve,ye,be,xe,Se,q,Ce=t((()=>{he=`_fileUploadRoot_dkxa6_5`,ge=`_dropzone_dkxa6_11`,_e=`_dropzoneCompact_dkxa6_23`,ve=`_dropzoneIcon_dkxa6_27`,ye=`_dropzoneText_dkxa6_30`,be=`_fileList_dkxa6_61`,xe=`_infoText_dkxa6_71`,Se=`_errorText_dkxa6_76`,q={fileUploadRoot:he,dropzone:ge,dropzoneCompact:_e,dropzoneIcon:ve,dropzoneText:ye,fileList:be,infoText:xe,errorText:Se}})),we,Te,J,Ee,De=t((()=>{we=i(),Te=e(a(),1),u(),s(),p(),b(),ae(),W(),me(),ue(),Ce(),J=r(),Ee=e=>{let t=(0,we.c)(52),{style:n,className:r,files:i,acceptedFiles:a,errorText:s,dropzoneText:c,triggerText:u,hideProgress:d,hideInfoText:p,disableDrop:m,onFileAccept:h,onFileReject:g,onFileRemove:_,onFileDelete:v,onFileCancel:b,onFileRetry:x,accept:S,maxFiles:C,maxFileSize:w,compact:T,disabled:E}=e,D;t[0]===n?D=t[1]:(D=n===void 0?{}:n,t[0]=n,t[1]=D);let O=D,k=c===void 0?`Drag and drop files here or `:c,A=u===void 0?`Select file...`:u,j=d!==void 0&&d,M=p!==void 0&&p,N=m!==void 0&&m,P=S===void 0?oe:S,F=C===void 0?5:C,I=w===void 0?se:w,L=T!==void 0&&T,R=E!==void 0&&E,z;t[2]!==P||t[3]!==I||t[4]!==F?(z=pe(P,I,F),t[2]=P,t[3]=I,t[4]=F,t[5]=z):z=t[5];let ee=z,B;t[6]===r?B=t[7]:(B=(0,Te.default)(q.fileUploadRoot,r),t[6]=r,t[7]=B);let V;t[8]===P?V=t[9]:(V=le(P),t[8]=P,t[9]=V);let te=!N,H;t[10]===L?H=t[11]:(H=(0,Te.default)(q.dropzone,{[q.dropzoneCompact]:L}),t[10]=L,t[11]=H);let ne;t[12]===Symbol.for(`react.memo_cache_sentinel`)?(ne=(0,J.jsx)(o,{icon:`upload`,className:q.dropzoneIcon}),t[12]=ne):ne=t[12];let U;t[13]===k?U=t[14]:(U=(0,J.jsx)(f,{className:q.dropzoneText,variant:`body-xs-reg`,children:k}),t[13]=k,t[14]=U);let ie;t[15]!==R||t[16]!==A?(ie=(0,J.jsx)(l.Trigger,{asChild:!0,children:(0,J.jsx)(y,{design:`v1.2`,variant:`ghost`,size:`small`,disabled:R,children:A})}),t[15]=R,t[16]=A,t[17]=ie):ie=t[17];let ae;t[18]!==H||t[19]!==U||t[20]!==ie?(ae=(0,J.jsxs)(l.Dropzone,{className:H,children:[ne,U,ie]}),t[18]=H,t[19]=U,t[20]=ie,t[21]=ae):ae=t[21];let W;t[22]!==R||t[23]!==s||t[24]!==M||t[25]!==ee?(W=ee&&!M&&!R&&!s&&(0,J.jsx)(f,{className:q.infoText,variant:`body-xs-reg`,children:ee}),t[22]=R,t[23]=s,t[24]=M,t[25]=ee,t[26]=W):W=t[26];let G;t[27]===s?G=t[28]:(G=s&&(0,J.jsxs)(f,{className:q.errorText,variant:`body-xs-reg`,children:[(0,J.jsx)(o,{icon:`error`,size:`tiny`}),s]}),t[27]=s,t[28]=G);let K;t[29]!==i||t[30]!==j||t[31]!==b||t[32]!==v||t[33]!==_||t[34]!==x?(K=!!i?.length&&(0,J.jsx)(`div`,{className:q.fileList,children:i.map(e=>(0,J.jsx)(re,{id:e.id,name:e.name,progress:e.progress,hideProgress:j,status:e.status,errors:e.errors,onRemove:_,onDelete:v,onCancel:b,onRetry:x},e.id))}),t[29]=i,t[30]=j,t[31]=b,t[32]=v,t[33]=_,t[34]=x,t[35]=K):K=t[35];let ce;t[36]===Symbol.for(`react.memo_cache_sentinel`)?(ce=(0,J.jsx)(l.HiddenInput,{}),t[36]=ce):ce=t[36];let ue;return t[37]!==a||t[38]!==R||t[39]!==I||t[40]!==F||t[41]!==h||t[42]!==g||t[43]!==O||t[44]!==B||t[45]!==V||t[46]!==te||t[47]!==ae||t[48]!==W||t[49]!==G||t[50]!==K?(ue=(0,J.jsxs)(l.Root,{style:O,className:B,maxFiles:F,maxFileSize:I,accept:V,disabled:R,allowDrop:te,acceptedFiles:a,onFileAccept:h,onFileReject:g,children:[ae,W,G,K,ce]}),t[37]=a,t[38]=R,t[39]=I,t[40]=F,t[41]=h,t[42]=g,t[43]=O,t[44]=B,t[45]=V,t[46]=te,t[47]=ae,t[48]=W,t[49]=G,t[50]=K,t[51]=ue):ue=t[51],ue}})),Oe=t((()=>{De()}));function ke(e,t,n){return{...e,id:`${e.name}-${String(Date.now())}-${String(Math.random())}`,name:e.name,size:e.size,type:e.type,progress:0,status:t,errors:n,originalFile:e}}var Ae=t((()=>{}));function je(e,t){return e.name===t.name&&e.size===t.size&&e.type===t.type}var Me=t((()=>{})),Ne,Pe,Fe,Ie=t((()=>{Ne=class extends Error{constructor(e){super(e),this.name=this.constructor.name}},Pe=class extends Ne{isRetryable=!0},Fe=class extends Ne{isRetryable=!1}}));function Le({adapter:e,autoUpload:t=!0,maxConcurrent:n=3,maxFiles:r,metadata:i,onFileUploadComplete:a,onFileUploadError:o,onAllFileUploadsComplete:s}){let[c]=(0,Re.useState)(()=>new Map),[l,u]=(0,Re.useState)([]),d=l.filter(e=>e.status!==`error`);l.length&&!l.some(e=>e.status===`uploading`)&&s?.();let f=e=>e.filter(e=>!d.some(t=>je(t,e))),p=e=>e.filter(e=>{if(e.id)return!1;let t=l.filter(t=>je(t,e));return t.length?!t.some(e=>e.errors?.includes(`FILE_EXISTS`)):!1}),m=e=>{let t=e.map(e=>({file:e,errors:[`FILE_EXISTS`]}));t.length&&y(t)},h=e=>{if(r===void 0)return e;let t=r-d.length,n,i;if(t<=0)n=[],i=e;else if(e.length>t)n=e.slice(0,t),i=e.slice(t);else return e;let a=i.map(e=>({file:e,errors:[`TOO_MANY_FILES`]}));return y(a),n},g=e=>{let t=e.map(e=>ke(e,`pending`));return u(e=>[...e,...t]),t},_=e=>{t&&e.forEach(e=>{C(e)})},v=e=>{let t=f(e),n=p(e);m(n);let r=h(t),i=g(r);return _(i),i},y=e=>{let t=e.map(({file:e,errors:t})=>ke(e,`error`,t));u(e=>[...e,...t])},b=(e,t)=>{u(n=>n.map(n=>n.id===e?{...n,progress:t}:n))},x=(e,t,n)=>{u(r=>r.map(r=>r.id===e?{...r,status:t,errors:n?[...r.errors||[],n]:r.errors}:r))},S=async e=>{let t=d.find(t=>t.id===e);t&&await C(t)},C=async t=>{let n=t.id,r=new AbortController;c.set(n,r),x(t.id,`uploading`);try{let o=await e.upload({file:t.originalFile,fileId:n,metadata:i,signal:r.signal,onProgress:e=>{b(n,e)}});x(n,`completed`),b(n,100),a?.(n,o)}catch(e){if(r.signal.aborted)return;let t=e instanceof Error?e.message:`Upload failed`,i=`interrupted`;e instanceof Ne&&(i=e.isRetryable?`interrupted`:`error`),x(n,i,t),o?.(n,t)}finally{c.delete(n)}},w=async()=>{let e=l.filter(e=>e.status===`pending`);for(let t=0;t<e.length;t+=n){let r=e.slice(t,t+n);await Promise.allSettled(r.map(e=>S(e.id)))}},T=async t=>{c.get(t)?.abort(),c.delete(t),e.cancel&&await e.cancel(t),x(t,`cancelled`)},E=async e=>{x(e,`pending`),b(e,0),await S(e)},D=e=>{c.get(e)?.abort(),c.delete(e),u(t=>t.filter(t=>t.id!==e))},O=async t=>{e.delete&&await e.delete(t),D(t)};return{files:l,acceptedFiles:d,addFiles:v,addRejectedFiles:y,removeFile:D,deleteFile:O,uploadFile:S,uploadAll:w,cancelUpload:T,retryUpload:E,clearFiles:()=>{c.forEach(e=>e.abort()),c.clear(),u([])},getProps:e=>({files:l,acceptedFiles:d,onFileAccept:t=>{let n=v(t.files);e?.onFilesAdded?.(n)},onFileReject:e=>{y(e.files.map(e=>({file:e.file,errors:e.errors})))},onFileRemove:t=>{D(t),e?.onFileRemoved?.(t)},onFileDelete:async t=>{await O(t),e?.onFileDeleted?.(t)},onFileCancel:async t=>{await T(t),e?.onFileUploadCanceled?.(t)},onFileRetry:async t=>{await E(t),e?.onFileUploadRetried?.(t)}})}}var Re,ze=t((()=>{Re=e(n(),1),Ae(),Me(),Ie()})),Be=t((()=>{ze()})),Ve,He,Y,Ue=t((()=>{Ve=i(),Oe(),Be(),He=r(),Y=e=>{let t=(0,Ve.c)(33),n,r,i,a,o,s,c,l,u,d,f,p,m;t[0]===e?(n=t[1],r=t[2],i=t[3],a=t[4],o=t[5],s=t[6],c=t[7],l=t[8],u=t[9],d=t[10],f=t[11],p=t[12],m=t[13]):({adapter:n,autoUpload:p,maxConcurrent:m,metadata:r,onFileUploadComplete:c,onFileUploadError:l,onFilesAdded:d,onFileRemoved:o,onFileDeleted:a,onFileUploadCanceled:s,onFileUploadRetried:u,onAllFileUploadsComplete:i,...f}=e,t[0]=e,t[1]=n,t[2]=r,t[3]=i,t[4]=a,t[5]=o,t[6]=s,t[7]=c,t[8]=l,t[9]=u,t[10]=d,t[11]=f,t[12]=p,t[13]=m);let h=p===void 0||p,g=m===void 0?3:m,_;t[14]!==n||t[15]!==h||t[16]!==g||t[17]!==r||t[18]!==i||t[19]!==c||t[20]!==l||t[21]!==f.maxFiles?(_={adapter:n,autoUpload:h,maxConcurrent:g,maxFiles:f.maxFiles,metadata:r,onFileUploadComplete:c,onFileUploadError:l,onAllFileUploadsComplete:i},t[14]=n,t[15]=h,t[16]=g,t[17]=r,t[18]=i,t[19]=c,t[20]=l,t[21]=f.maxFiles,t[22]=_):_=t[22];let{getProps:v}=Le(_),y;t[23]!==v||t[24]!==a||t[25]!==o||t[26]!==s||t[27]!==u||t[28]!==d?(y=v({onFilesAdded:d,onFileRemoved:o,onFileDeleted:a,onFileUploadCanceled:s,onFileUploadRetried:u}),t[23]=v,t[24]=a,t[25]=o,t[26]=s,t[27]=u,t[28]=d,t[29]=y):y=t[29];let b=y,x;return t[30]!==b||t[31]!==f?(x=(0,He.jsx)(Ee,{...b,...f}),t[30]=b,t[31]=f,t[32]=x):x=t[32],x},Y.displayName=`DsFileUpload`})),We,X,Ge=t((()=>{Ie(),We=class{interruptedRuns=-1;uploads=new Map;config;constructor(e={}){this.config=e}async upload(e){let{scenario:t=`success`,duration:n=2e3,steps:r=20,interruptAt:i=30,errorMessage:a=`Upload failed`,delay:o=0}=this.config,{file:s,fileId:c,onProgress:l,signal:u}=e;this.uploads.set(c,{cancelled:!1});let d=()=>u?.aborted||this.uploads.get(c)?.cancelled?(this.uploads.delete(c),!0):!1;if(o>0&&(await this.sleep(o),d()))throw new Pe(`Upload cancelled`);if(t===`error`)throw new Fe(a||`Unsupported file type`);let f=n/r;for(let e=0;e<=r;e++){if(d())throw new Pe(`Upload cancelled`);await this.sleep(f);let n=Math.min(e/r*100,100);if(l?.(n),t===`interrupted`&&n>=i&&this.interruptedRuns%2)throw this.uploads.delete(c),this.interruptedRuns++,new Pe(a||`Network connection lost`)}return this.interruptedRuns++,this.uploads.delete(c),{url:`mock://uploaded/${s.name}`,metadata:{fileName:s.name,fileSize:s.size,fileType:s.type,uploadedAt:new Date().toISOString()}}}cancel(e){let t=this.uploads.get(e);t&&(t.cancelled=!0)}sleep(e){return new Promise(t=>setTimeout(t,e))}},X={normal:()=>new We({scenario:`success`,duration:2e3+Math.random()*1e3,steps:20}),fast:()=>new We({scenario:`success`,duration:800,steps:10}),slow:()=>new We({scenario:`success`,duration:1e4,steps:30}),interrupted:(e=30)=>new We({scenario:`interrupted`,duration:1e3,steps:20,interruptAt:e,errorMessage:`Network connection lost`}),error:e=>new We({scenario:`error`,errorMessage:e||`Unsupported file type`}),custom:e=>new We(e)}})),Ke,qe=t((()=>{Ke=`import type {
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
`})),Je,Z,Ye,Q,Xe,Ze,Qe,$e,et,tt,nt,rt,$,it;t((()=>{Je=e(n(),1),h(),_(),Ue(),Be(),Ge(),Oe(),qe(),Z=r(),Ye={title:`Components/FileUpload`,component:Y,parameters:{layout:`centered`,docs:{description:{component:["Provide an `adapter` that implements the `FileUploadAdapter` interface — a single","`upload(options): Promise<FileUploadResult>` method — to connect the component to your",`upload backend. Create the adapter once and pass it in:`,``,"```tsx",`const adapter = getSimpleFileUploadAdapter('/api/upload');`,``,`<DsFileUpload adapter={adapter} />;`,"```",``,"`getSimpleFileUploadAdapter` below is a ready-to-copy implementation using the native","[`XMLHttpRequest`](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest) API",`(fetch, axios, or any other transport works too).`,``,`> The stories on this page pass an in-memory mock adapter so uploads run without a real`,`> backend. In your app, use a real adapter like the one below.`,``,`## Example FileUploadAdapter`,``,"```ts",Ke.trim(),"```"].join(`
`)}}},decorators:[e=>(0,Z.jsx)(v,{width:`31.25rem`,children:(0,Z.jsx)(e,{})})],argTypes:{errorText:{control:`text`},dropzoneText:{control:`text`},triggerText:{control:`text`},hideProgress:{control:`boolean`},hideInfoText:{control:`boolean`},disableDrop:{control:`boolean`},maxFiles:{control:`number`},accept:{control:`object`},disabled:{control:`boolean`},compact:{control:`boolean`},style:{table:{disable:!0}}}},Q={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.normal()})},Xe={parameters:{docs:{source:{type:`code`}}},render:function(){let{getProps:e,files:t,uploadAll:n,clearFiles:r}=Le({adapter:(0,Je.useMemo)(()=>X.fast(),[]),autoUpload:!1}),i=t.some(e=>e.status===`uploading`),a=t.length>0;return(0,Z.jsxs)(v,{direction:`column`,gap:`var(--sm)`,children:[(0,Z.jsx)(Ee,{...e(),hideProgress:!1}),a&&(0,Z.jsxs)(v,{gap:`var(--2xs)`,children:[(0,Z.jsx)(g,{variant:`primary`,size:`small`,onClick:()=>n(),disabled:i,children:i?`Uploading...`:`Upload All`}),(0,Z.jsx)(g,{variant:`tertiary`,size:`small`,onClick:()=>r(),disabled:i,children:`Clear All`})]})]})}},Ze={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.fast(),compact:!0,maxFiles:1,accept:[`application/pdf`,`text/csv`,{mimeType:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,extensions:[`.xlsx`]}],dropzoneText:`Drag and drop your document here or`,triggerText:`Choose document`})},Qe={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.normal(),disabled:!0})},$e={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.error(`Unsupported file type`)})},et={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.interrupted(30)})},tt={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.fast(),maxFiles:1})},nt={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.fast()})},rt={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.fast(),hideInfoText:!0})},$={parameters:{docs:{source:{type:`code`}}},render:()=>(0,Z.jsx)(Y,{adapter:X.slow()})},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.normal()} />
}`,...Q.parameters?.docs?.source},description:{story:"Default auto-upload behavior: files upload as soon as they are dropped or\nselected. Provide an `adapter` to connect the component to your upload\nbackend; the `onFile*` callbacks report progress and lifecycle events.",...Q.parameters?.docs?.description}}},Xe.parameters={...Xe.parameters,docs:{...Xe.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: function Render() {
    const adapter = useMemo(() => MockAdapterPresets.fast(), []);
    const {
      getProps,
      files,
      uploadAll,
      clearFiles
    } = useFileUpload({
      adapter,
      autoUpload: false
    });
    const isUploading = files.some(file => file.status === 'uploading');
    const hasFiles = files.length > 0;
    return <DsStack direction="column" gap="var(--sm)">
                <FileUpload {...getProps()} hideProgress={false} />
                {hasFiles && <DsStack gap="var(--2xs)">
                        <DsButtonV3 variant="primary" size="small" onClick={() => uploadAll()} disabled={isUploading}>
                            {isUploading ? 'Uploading...' : 'Upload All'}
                        </DsButtonV3>
                        <DsButtonV3 variant="tertiary" size="small" onClick={() => clearFiles()} disabled={isUploading}>
                            Clear All
                        </DsButtonV3>
                    </DsStack>}
            </DsStack>;
  }
}`,...Xe.parameters?.docs?.source},description:{story:'Manual upload mode (`autoUpload={false}`): files wait until the user triggers\nthe upload. This advanced example composes the base `FileUpload` with the\n`useFileUpload` hook to drive "Upload all" and "Clear all" actions.',...Xe.parameters?.docs?.description}}},Ze.parameters={...Ze.parameters,docs:{...Ze.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.fast()} compact maxFiles={1} accept={['application/pdf', 'text/csv', {
    mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    extensions: ['.xlsx']
  }]} dropzoneText="Drag and drop your document here or" triggerText="Choose document" />
}`,...Ze.parameters?.docs?.source},description:{story:"Compact layout for tight spaces, limited to a single file and a restricted set\nof document types via `accept`.",...Ze.parameters?.docs?.description}}},Qe.parameters={...Qe.parameters,docs:{...Qe.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.normal()} disabled />
}`,...Qe.parameters?.docs?.source},description:{story:`Disabled state — the dropzone and trigger cannot be interacted with.`,...Qe.parameters?.docs?.description}}},$e.parameters={...$e.parameters,docs:{...$e.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.error('Unsupported file type')} />
}`,...$e.parameters?.docs?.source},description:{story:`Upload error scenario where a file fails validation immediately, showing the
error state and message.`,...$e.parameters?.docs?.description}}},et.parameters={...et.parameters,docs:{...et.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.interrupted(30)} />
}`,...et.parameters?.docs?.source},description:{story:`Interrupted upload where the network fails mid-transfer, surfacing the retry
affordance.`,...et.parameters?.docs?.description}}},tt.parameters={...tt.parameters,docs:{...tt.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.fast()} maxFiles={1} />
}`,...tt.parameters?.docs?.source},description:{story:"Limit the number of files with `maxFiles`.",...tt.parameters?.docs?.description}}},nt.parameters={...nt.parameters,docs:{...nt.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.fast()} />
}`,...nt.parameters?.docs?.source},description:{story:"Duplicate detection: uploading the same file twice raises a `FILE_EXISTS`\nerror instead of adding a second entry.",...nt.parameters?.docs?.description}}},rt.parameters={...rt.parameters,docs:{...rt.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.fast()} hideInfoText />
}`,...rt.parameters?.docs?.source},description:{story:"Hide the file-type and size-limit hint with `hideInfoText`.",...rt.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  parameters: {
    docs: {
      source: {
        type: 'code'
      }
    }
  },
  render: () => <DsFileUpload adapter={MockAdapterPresets.slow()} />
}`,...$.parameters?.docs?.source},description:{story:`Cancel an in-progress upload, demonstrating the cancellation flow with a slow
adapter.`,...$.parameters?.docs?.description}}},it=[`Default`,`Manual`,`Compact`,`Disabled`,`UploadError`,`UploadInterrupted`,`MaxFiles`,`DuplicateFiles`,`HiddenInfoText`,`CancelUpload`]}))();export{$ as CancelUpload,Ze as Compact,Q as Default,Qe as Disabled,nt as DuplicateFiles,rt as HiddenInfoText,Xe as Manual,tt as MaxFiles,$e as UploadError,et as UploadInterrupted,it as __namedExportsOrder,Ye as default};