import{a as e,n as t}from"./chunk-BneVvdWh.js";import{a as n}from"./iframe-BtUy5DzV.js";import{r}from"./react-DAO-m2aI.js";import{t as i}from"./jsx-runtime-6sF1Ejqi.js";import{c as a,l as o,n as s,s as c}from"./blocks-BNhQMKLG.js";import{t as l}from"./classnames-Ce489xFf.js";import{i as u}from"./ds-icon.types-X5ul5i9A.js";import{t as d}from"./ds-icon-BOH4c93P.js";import{t as f}from"./ds-typography-CxNsLysB.js";import{t as ee}from"./ds-typography-D0JoYwMO.js";import{n as p,t as m}from"./ds-button-DwJBDRHG.js";import{t as h}from"./ds-tooltip-CXkvtjDK.js";import{t as te}from"./ds-tooltip-MXKixcq4.js";import{D as ne,E as g,O as _,d as v,k as re,l as y,t as b,u as x}from"./dist-DGYSaA8O.js";import{t as ie}from"./mdx-react-shim-UyUsmcBA.js";function S(e){return C[e]||e||`File validation failed`}var C,ae=t((()=>{C={FILE_TOO_LARGE:`File size exceeds the maximum limit`,FILE_INVALID_TYPE:`File type is not allowed`,TOO_MANY_FILES:`Too many files selected`,FILE_TOO_SMALL:`File size is too small`,FILE_INVALID:`File is invalid`,FILE_EXISTS:`File already exists`}})),oe,se,ce,le,ue,de,fe,pe,me,he,ge,_e,ve,ye,be,xe,Se,w,Ce=t((()=>{oe=`_fileItem_hpxvh_1`,se=`_fileItemContent_hpxvh_5`,ce=`_fileItemError_hpxvh_22`,le=`_progressRange_hpxvh_25`,ue=`_fileItemCompleted_hpxvh_28`,de=`_fileItemUploading_hpxvh_31`,fe=`_fileItemInterrupted_hpxvh_34`,pe=`_filePreview_hpxvh_38`,me=`_fileInfo_hpxvh_42`,he=`_fileName_hpxvh_50`,ge=`_progressContainer_hpxvh_65`,_e=`_progressBar_hpxvh_72`,ve=`_progressTrack_hpxvh_77`,ye=`_progressText_hpxvh_92`,be=`_completedText_hpxvh_105`,xe=`_interruptedText_hpxvh_118`,Se=`_errorMessage_hpxvh_131`,w={fileItem:oe,fileItemContent:se,fileItemError:ce,progressRange:le,fileItemCompleted:ue,fileItemUploading:de,fileItemInterrupted:fe,filePreview:pe,fileInfo:me,fileName:he,progressContainer:ge,progressBar:_e,progressTrack:ve,progressText:ye,completedText:be,interruptedText:xe,errorMessage:Se}})),we,T,Te,Ee=t((()=>{we=e(l(),1),b(),te(),m(),d(),ae(),Ce(),T=i(),Te=({id:e,name:t,progress:n,hideProgress:r=!1,status:i,errors:a,onCancel:o,onRetry:s,onRemove:c,onDelete:l})=>{let d=(0,we.default)(w.fileItemContent,{[w.fileItemError]:i===`error`,[w.fileItemCompleted]:i===`completed`,[w.fileItemUploading]:i===`uploading`,[w.fileItemInterrupted]:i===`interrupted`||i===`cancelled`});return(0,T.jsxs)(`div`,{className:w.fileItem,children:[(0,T.jsxs)(`div`,{className:d,children:[(0,T.jsx)(u,{className:w.filePreview,icon:`upload_file`,size:`tiny`}),(0,T.jsxs)(`div`,{className:w.fileInfo,children:[(0,T.jsx)(`div`,{className:w.fileName,title:t,children:t}),(0,T.jsx)(x,{value:i===`error`?1:n,className:w.progressBar,children:(0,T.jsx)(y,{className:w.progressTrack,children:(0,T.jsx)(v,{className:w.progressRange})})})]}),(i===`interrupted`||i===`cancelled`)&&s&&(0,T.jsx)(h,{content:`Retry`,children:(0,T.jsx)(p,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Retry ${t} upload`,onClick:()=>s(e),children:(0,T.jsx)(u,{icon:`refresh`,size:`small`})})}),(i===`pending`||i===`error`||i===`interrupted`)&&(0,T.jsx)(h,{content:`Remove`,children:(0,T.jsx)(p,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Remove ${t} upload`,onClick:()=>c?.(e),children:(0,T.jsx)(u,{icon:`do_not_disturb_on`,size:`small`})})}),i===`uploading`&&o&&(0,T.jsx)(h,{content:`Cancel`,children:(0,T.jsx)(p,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Cancel ${t} upload`,onClick:()=>o(e),children:(0,T.jsx)(u,{icon:`close`,size:`small`})})}),i===`completed`&&(0,T.jsx)(h,{content:`Delete`,children:(0,T.jsx)(p,{type:`button`,design:`v1.2`,buttonType:`tertiary`,"aria-label":`Delete ${t}`,onClick:()=>l?.(e),children:(0,T.jsx)(u,{icon:`delete`,size:`small`})})})]}),i===`completed`&&(0,T.jsxs)(`div`,{className:w.completedText,children:[(0,T.jsx)(u,{icon:`check_circle`,size:`tiny`,filled:!0}),`Upload complete`]}),i===`interrupted`&&(0,T.jsxs)(`div`,{className:w.interruptedText,children:[(0,T.jsx)(u,{icon:`info`,size:`tiny`,filled:!0}),`Upload interrupted`]}),i===`cancelled`&&(0,T.jsxs)(`div`,{className:w.interruptedText,children:[(0,T.jsx)(u,{icon:`info`,size:`tiny`,filled:!0}),`Upload cancelled`]}),i===`error`&&a?.length&&a.map(e=>(0,T.jsxs)(`div`,{className:w.errorMessage,children:[(0,T.jsx)(u,{icon:`cancel`,size:`tiny`,filled:!0}),S(e)]},e)),!r&&i===`uploading`&&(0,T.jsxs)(`span`,{className:w.progressText,children:[`Uploading...(`,Math.round(n),`%)`]})]})},Te.__docgenInfo={description:`Individual file upload item component
Displays a single file with its upload status, progress, and action buttons`,methods:[],displayName:`FileUploadItem`,props:{id:{required:!0,tsType:{name:`string`},description:`Unique identifier for the file`},name:{required:!0,tsType:{name:`string`},description:`Name of the file`},progress:{required:!0,tsType:{name:`number`},description:`Upload progress percentage (0-100)`},status:{required:!0,tsType:{name:`union`,raw:`'pending' | 'uploading' | 'interrupted' | 'completed' | 'error' | 'cancelled'`,elements:[{name:`literal`,value:`'pending'`},{name:`literal`,value:`'uploading'`},{name:`literal`,value:`'interrupted'`},{name:`literal`,value:`'completed'`},{name:`literal`,value:`'error'`},{name:`literal`,value:`'cancelled'`}]},description:`Current status of the file upload`},errors:{required:!1,tsType:{name:`Array`,elements:[{name:`string`}],raw:`string[]`},description:`Array of error messages if any`},hideProgress:{required:!1,tsType:{name:`boolean`},description:`Whether to hide progress bar`,defaultValue:{value:`false`,computed:!1}},onCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Callback when cancel button is clicked`},onRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Callback when retry button is clicked`},onRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Callback when remove button is clicked (for pending/error states)`},onDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Callback when delete button is clicked (for completed state)`}}}})),De=t((()=>{Ee()})),Oe,ke,Ae=t((()=>{Oe=[`application/pdf`,`text/csv`,`application/zip`,`application/x-zip-compressed`],ke=25e6})),je,Me=t((()=>{je={"image/png":[`.png`],"image/gif":[`.gif`],"image/jpeg":[`.jpg`,`.jpeg`],"image/svg+xml":[`.svg`],"image/webp":[`.webp`],"image/avif":[`.avif`],"image/heic":[`.heic`,`.heif`],"image/bmp":[`.bmp`],"application/pdf":[`.pdf`],"application/zip":[`.zip`],"application/json":[`.json`],"application/xml":[`.xml`],"application/msword":[`.doc`],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[`.docx`],"application/vnd.ms-excel":[`.xls`],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[`.xlsx`],"application/vnd.ms-powerpoint":[`.ppt`],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[`.pptx`],"application/rtf":[`.rtf`],"application/x-rar":[`.rar`],"application/x-7z-compressed":[`.7z`],"application/x-tar":[`.tar`],"application/vnd.microsoft.portable-executable":[`.exe`,`.dll`],"text/css":[`.css`],"text/csv":[`.csv`],"text/html":[`.html`,`.htm`],"text/markdown":[`.md`,`.markdown`],"text/plain":[`.txt`],"font/ttf":[`.ttf`],"font/otf":[`.otf`],"font/woff":[`.woff`],"font/woff2":[`.woff2`],"font/eot":[`.eot`],"font/svg":[`.svg`],"video/mp4":[`.mp4`],"video/webm":[`.webm`],"video/ogg":[`.ogv`],"video/quicktime":[`.mov`],"video/x-msvideo":[`.avi`],"audio/mpeg":[`.mp3`],"audio/ogg":[`.ogg`,`.oga`],"audio/wav":[`.wav`],"audio/webm":[`.weba`],"audio/aac":[`.aac`],"audio/flac":[`.flac`],"audio/x-m4a":[`.m4a`],"image/*":[`.png`,`.jpg`,`.jpeg`,`.gif`,`.webp`,`.svg`,`.bmp`,`.avif`,`.heic`,`.heif`],"audio/*":[`.mp3`,`.wav`,`.ogg`,`.oga`,`.m4a`,`.flac`,`.aac`,`.weba`],"video/*":[`.mp4`,`.webm`,`.ogv`,`.mov`,`.avi`],"text/*":[`.txt`,`.html`,`.htm`,`.css`,`.csv`,`.md`,`.markdown`],"application/*":[`.pdf`,`.zip`,`.json`,`.xml`,`.doc`,`.docx`,`.xls`,`.xlsx`,`.ppt`,`.pptx`,`.rtf`,`.rar`,`.7z`,`.tar`],"font/*":[`.ttf`,`.otf`,`.woff`,`.woff2`,`.eot`]}}));function Ne(e){return e.flatMap(e=>typeof e==`string`?je[e]??[]:e.extensions)}function Pe(e){return e.map(e=>typeof e==`string`?e:e.mimeType)}var Fe=t((()=>{Me()}));function Ie(e){if(e===0)return`0 B`;let t=1e3,n=[`B`,`KB`,`MB`,`GB`,`TB`,`PB`],r=Math.floor(Math.log(e)/Math.log(t));return`${(e/t**+r).toFixed(2)} ${String(n[r])}`}var Le=t((()=>{}));function Re(e,t,n){let r=Ne(e),i=[...new Set(r)].map(e=>e.toUpperCase()).join(`, `),a=Ie(t),o=[];return i&&o.push(`Only ${i} files`),t<1/0&&o.push(`File size ${a} max`),n===1?o.push(`Only 1 file`):n>1&&o.push(`Up to ${String(n)} files`),o.join(`. `)+`.`}var ze=t((()=>{Fe(),Le()})),Be,Ve,He,Ue,We,Ge,Ke,qe,E,Je=t((()=>{Be=`_fileUploadRoot_baybr_1`,Ve=`_dropzone_baybr_7`,He=`_dropzoneCompact_baybr_19`,Ue=`_dropzoneIcon_baybr_23`,We=`_dropzoneText_baybr_26`,Ge=`_fileList_baybr_57`,Ke=`_infoText_baybr_67`,qe=`_errorText_baybr_72`,E={fileUploadRoot:Be,dropzone:Ve,dropzoneCompact:He,dropzoneIcon:Ue,dropzoneText:We,fileList:Ge,infoText:Ke,errorText:qe}})),Ye,D,O,Xe=t((()=>{Ye=e(l(),1),b(),d(),ee(),m(),De(),Ae(),ze(),Fe(),Je(),D=i(),O=({style:e={},className:t,files:n,acceptedFiles:r,errorText:i,dropzoneText:a=`Drag and drop files here or `,triggerText:o=`Select file...`,hideProgress:s=!1,hideInfoText:c=!1,disableDrop:l=!1,onFileAccept:d,onFileReject:ee,onFileRemove:m,onFileDelete:h,onFileCancel:te,onFileRetry:v,accept:y=Oe,maxFiles:b=5,maxFileSize:x=ke,compact:ie=!1,disabled:S=!1})=>{let C=Re(y,x,b);return(0,D.jsxs)(ne,{style:e,className:(0,Ye.default)(E.fileUploadRoot,t),maxFiles:b,maxFileSize:x,accept:Pe(y),disabled:S,allowDrop:!l,acceptedFiles:r,onFileAccept:d,onFileReject:ee,children:[(0,D.jsxs)(re,{className:(0,Ye.default)(E.dropzone,{[E.dropzoneCompact]:ie}),children:[(0,D.jsx)(u,{icon:`upload`,className:E.dropzoneIcon}),(0,D.jsx)(f,{className:E.dropzoneText,variant:`body-xs-reg`,children:a}),(0,D.jsx)(g,{asChild:!0,children:(0,D.jsx)(p,{design:`v1.2`,variant:`ghost`,size:`small`,disabled:S,children:o})})]}),C&&!c&&!S&&!i&&(0,D.jsx)(f,{className:E.infoText,variant:`body-xs-reg`,children:C}),i&&(0,D.jsxs)(f,{className:E.errorText,variant:`body-xs-reg`,children:[(0,D.jsx)(u,{icon:`error`,size:`tiny`}),i]}),!!n?.length&&(0,D.jsx)(`div`,{className:E.fileList,children:n.map(e=>(0,D.jsx)(Te,{id:e.id,name:e.name,progress:e.progress,hideProgress:s,status:e.status,errors:e.errors,onRemove:m,onDelete:h,onCancel:te,onRetry:v},e.id))}),(0,D.jsx)(_,{})]})},O.__docgenInfo={description:`Design system base File Upload component
Used in conjunction with the useFileUpload hook`,methods:[],displayName:`FileUpload`,props:{errorText:{required:!1,tsType:{name:`string`},description:`Error text displayed when validation fails`},dropzoneText:{required:!1,tsType:{name:`string`},description:`Text displayed in the dropzone area`,defaultValue:{value:`'Drag and drop files here or '`,computed:!1}},triggerText:{required:!1,tsType:{name:`string`},description:`Text for the upload trigger button`,defaultValue:{value:`'Select file...'`,computed:!1}},hideProgress:{required:!1,tsType:{name:`boolean`},description:`Whether to hide upload progress
@default false`,defaultValue:{value:`false`,computed:!1}},hideInfoText:{required:!1,tsType:{name:`boolean`},description:`Whether to hide the info text (file types, size limits, etc.)
@default false`,defaultValue:{value:`false`,computed:!1}},disableDrop:{required:!1,tsType:{name:`boolean`},description:`Whether to disable drag and drop functionality
@default false`,defaultValue:{value:`false`,computed:!1}},maxFiles:{required:!1,tsType:{name:`number`},description:`The maximum number of files that can be uploaded`,defaultValue:{value:`5`,computed:!1}},maxFileSize:{required:!1,tsType:{name:`number`},description:`Maximum file size in bytes
@default 25MB`,defaultValue:{value:`25_000_000`,computed:!1}},onFileAccept:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(details: FileUploadFileAcceptDetails) => void`,signature:{arguments:[{type:{name:`FileUploadFileAcceptDetails`},name:`details`}],return:{name:`void`}}},description:`Callback when files are accepted`},onFileReject:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(details: FileUploadFileRejectDetails) => void`,signature:{arguments:[{type:{name:`FileUploadFileRejectDetails`},name:`details`}],return:{name:`void`}}},description:`Callback when files are rejected`},className:{required:!1,tsType:{name:`string`},description:`Additional CSS class names`},style:{required:!1,tsType:{name:`CSSProperties`},description:`Additional styles`,defaultValue:{value:`{}`,computed:!1}},accept:{required:!1,tsType:{name:`Array`,elements:[{name:`union`,raw:`| FileUploadFileMimeType
| {
		mimeType: FileUploadFileMimeType;
		extensions: [FileExtension, ...FileExtension[]];
  }`,elements:[{name:`FileUploadFileMimeType`},{name:`signature`,type:`object`,raw:`{
mimeType: FileUploadFileMimeType;
extensions: [FileExtension, ...FileExtension[]];
}`,signature:{properties:[{key:`mimeType`,value:{name:`FileUploadFileMimeType`,required:!0}},{key:`extensions`,value:{name:`tuple`,raw:`[FileExtension, ...FileExtension[]]`,elements:[{name:`literal`,value:"`.${string}`"},{name:`unknown`}],required:!0}}]}}]}],raw:`AcceptedFileType[]`},description:`The file types that are accepted
Use shorthand for common MIME types (extensions provided automatically)
or explicit form for custom types
@example ['application/pdf', 'image/png']
@example ['application/pdf', { mimeType: 'application/x-custom', extensions: ['.custom'] }]`,defaultValue:{value:`[
	'application/pdf',
	'text/csv',
	'application/zip',
	'application/x-zip-compressed',
]`,computed:!1}},files:{required:!1,tsType:{name:`Array`,elements:[{name:`UploadedFile`}],raw:`UploadedFile[]`},description:`File states to display (managed externally)`},onFileRemove:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Callback when files are removed`},onFileDelete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Callback when files are deleted`},onFileCancel:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Callback when files upload is canceled`},onFileRetry:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Callback when files upload is retried`},acceptedFiles:{required:!1,tsType:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},description:`Controlled accepted files`},disabled:{required:!1,tsType:{name:`boolean`},description:`Whether the file upload is disabled`,defaultValue:{value:`false`,computed:!1}},compact:{required:!1,tsType:{name:`boolean`},description:`Whether the file upload layout is compact (inline)`,defaultValue:{value:`false`,computed:!1}}}}})),Ze=t((()=>{Xe()}));function Qe(e,t,n){return{...e,id:`${e.name}-${String(Date.now())}-${String(Math.random())}`,name:e.name,size:e.size,type:e.type,progress:0,status:t,errors:n}}var $e=t((()=>{}));function et(e,t){return e.name===t.name&&e.size===t.size&&e.type===t.type}var tt=t((()=>{})),k,A,nt,rt=t((()=>{k=class extends Error{constructor(e){super(e),this.name=this.constructor.name}},A=class extends k{isRetryable=!0},nt=class extends k{isRetryable=!1}}));function it({adapter:e,autoUpload:t=!0,maxConcurrent:n=3,maxFiles:r,metadata:i,onFileUploadComplete:a,onFileUploadError:o,onAllFileUploadsComplete:s}){let[c]=(0,at.useState)(()=>new Map),[l,u]=(0,at.useState)([]),d=l.filter(e=>e.status!==`error`);l.length&&!l.some(e=>e.status===`uploading`)&&s?.();let f=e=>e.filter(e=>!d.some(t=>et(t,e))),ee=e=>e.filter(e=>{if(e.id)return!1;let t=l.filter(t=>et(t,e));return t.length?!t.some(e=>e.errors?.includes(`FILE_EXISTS`)):!1}),p=e=>{let t=e.map(e=>({file:e,errors:[`FILE_EXISTS`]}));t.length&&g(t)},m=e=>{if(r===void 0)return e;let t=r-d.length,n,i;if(t<=0)n=[],i=e;else if(e.length>t)n=e.slice(0,t),i=e.slice(t);else return e;return g(i.map(e=>({file:e,errors:[`TOO_MANY_FILES`]}))),n},h=e=>{let t=e.map(e=>Qe(e,`pending`));return u(e=>[...e,...t]),t},te=e=>{t&&e.forEach(e=>{y(e)})},ne=e=>{let t=f(e);p(ee(e));let n=h(m(t));return te(n),n},g=e=>{let t=e.map(({file:e,errors:t})=>Qe(e,`error`,t));u(e=>[...e,...t])},_=(e,t)=>{u(n=>n.map(n=>n.id===e?{...n,progress:t}:n))},v=(e,t,n)=>{u(r=>r.map(r=>r.id===e?{...r,status:t,errors:n?[...r.errors||[],n]:r.errors}:r))},re=async e=>{let t=d.find(t=>t.id===e);t&&await y(t)},y=async t=>{let n=t.id,r=new AbortController;c.set(n,r),v(t.id,`uploading`);try{let o=await e.upload({file:t,fileId:n,metadata:i,signal:r.signal,onProgress:e=>{_(n,e)}});v(n,`completed`),_(n,100),a?.(n,o)}catch(e){let t=e instanceof Error?e.message:`Upload failed`,r=`interrupted`;e instanceof k&&(r=e.isRetryable?`interrupted`:`error`),v(n,r,t),o?.(n,t)}finally{c.delete(n)}},b=async()=>{let e=l.filter(e=>e.status===`pending`);for(let t=0;t<e.length;t+=n){let r=e.slice(t,t+n);await Promise.allSettled(r.map(e=>re(e.id)))}},x=async t=>{c.get(t)?.abort(),c.delete(t),e.cancel&&await e.cancel(t),v(t,`cancelled`)},ie=async e=>{v(e,`pending`),_(e,0),await re(e)},S=e=>{c.get(e)?.abort(),c.delete(e),u(t=>t.filter(t=>t.id!==e))},C=async t=>{e.delete&&await e.delete(t),S(t)};return{files:l,acceptedFiles:d,addFiles:ne,addRejectedFiles:g,removeFile:S,deleteFile:C,uploadFile:re,uploadAll:b,cancelUpload:x,retryUpload:ie,clearFiles:()=>{c.forEach(e=>e.abort()),c.clear(),u([])},getProps:e=>({files:l,acceptedFiles:d,onFileAccept:t=>{let n=ne(t.files);e?.onFilesAdded?.(n)},onFileReject:e=>{g(e.files.map(e=>({file:e.file,errors:e.errors})))},onFileRemove:t=>{S(t),e?.onFileRemoved?.(t)},onFileDelete:async t=>{await C(t),e?.onFileDeleted?.(t)},onFileCancel:async t=>{await x(t),e?.onFileUploadCanceled?.(t)},onFileRetry:async t=>{await ie(t),e?.onFileUploadRetried?.(t)}})}}var at,ot=t((()=>{at=e(n(),1),$e(),tt(),rt()})),st=t((()=>{ot()})),ct,lt,ut=t((()=>{Ze(),st(),ct=i(),lt=({adapter:e,autoUpload:t=!0,maxConcurrent:n=3,metadata:r,onFileUploadComplete:i,onFileUploadError:a,onFilesAdded:o,onFileRemoved:s,onFileDeleted:c,onFileUploadCanceled:l,onFileUploadRetried:u,onAllFileUploadsComplete:d,...f})=>{let{getProps:ee}=it({adapter:e,autoUpload:t,maxConcurrent:n,maxFiles:f.maxFiles,metadata:r,onFileUploadComplete:i,onFileUploadError:a,onAllFileUploadsComplete:d});return(0,ct.jsx)(O,{...ee({onFilesAdded:o,onFileRemoved:s,onFileDeleted:c,onFileUploadCanceled:l,onFileUploadRetried:u}),...f})},lt.__docgenInfo={description:`Design system File Upload component (with state management)`,methods:[],displayName:`DsFileUpload`,props:{adapter:{required:!0,tsType:{name:`FileUploadAdapter`},description:`Upload adapter implementation`},autoUpload:{required:!1,tsType:{name:`boolean`},description:`Whether to start upload automatically when files are added
@default true`,defaultValue:{value:`true`,computed:!1}},maxConcurrent:{required:!1,tsType:{name:`number`},description:`Maximum number of concurrent uploads`,defaultValue:{value:`3`,computed:!1}},metadata:{required:!1,tsType:{name:`Record`,elements:[{name:`string`},{name:`unknown`}],raw:`Record<string, unknown>`},description:`Additional metadata to attach to uploads`},onFileUploadComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string, result: FileUploadResult) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`},{type:{name:`FileUploadResult`},name:`result`}],return:{name:`void`}}},description:`Called when a file upload completes successfully`},onFileUploadError:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string, error: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`},{type:{name:`string`},name:`error`}],return:{name:`void`}}},description:`Called when a file upload fails`},onFilesAdded:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(files: File[]) => void`,signature:{arguments:[{type:{name:`Array`,elements:[{name:`File`}],raw:`File[]`},name:`files`}],return:{name:`void`}}},description:`Called when files are added (before upload)`},onFileRemoved:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Called when a file is removed`},onFileDeleted:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Called when a file is deleted`},onFileUploadCanceled:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Called when a file upload is canceled`},onFileUploadRetried:{required:!1,tsType:{name:`signature`,type:`function`,raw:`(fileId: string) => void`,signature:{arguments:[{type:{name:`string`},name:`fileId`}],return:{name:`void`}}},description:`Called when a file upload is retried`},onAllFileUploadsComplete:{required:!1,tsType:{name:`signature`,type:`function`,raw:`() => void`,signature:{arguments:[],return:{name:`void`}}},description:`Called when all file uploads are complete`}},composes:[`Omit`]}}));async function dt(e){let t=mt(e);await N(()=>j(t.queryByText(/Uploading/i)).toBeInTheDocument(),{timeout:1e3}),await N(()=>j(t.queryByText(/complete/i)).toBeInTheDocument(),{timeout:5e3});let n=t.getByLabelText(/delete/i);await M.click(n),await N(()=>j(t.queryByText(`test-document.pdf`)).not.toBeInTheDocument())}async function ft(e){let t=mt(e);await N(()=>j(t.queryByText(/Uploading/i)).toBeInTheDocument(),{timeout:1e3}),await N(()=>j(t.queryByText(/interrupted|lost|failed/i)).toBeInTheDocument(),{timeout:5e3});let n=t.getByLabelText(/retry/i);await M.click(n),await N(()=>j(t.queryByText(/complete/i)).toBeInTheDocument(),{timeout:5e3});let r=t.getByLabelText(/delete/i);await M.click(r)}async function pt(e){let t=mt(e);await N(()=>j(t.queryByText(/failed|error|unsupported/i)).toBeInTheDocument(),{timeout:2e3});let n=t.getByLabelText(/remove/i);await M.click(n),await N(()=>j(t.queryByText(`test-document.pdf`)).not.toBeInTheDocument())}var j,M,N,mt,P,ht,gt=t((()=>{({expect:j,userEvent:M,waitFor:N,within:mt}=__STORYBOOK_MODULE_TEST__),P=(e={})=>{let{name:t=`test-document.pdf`,type:n=`application/pdf`,size:r=1024*100}=e,i=new File([`test content`],t,{type:n});return Object.defineProperty(i,`size`,{value:r,writable:!1}),i},ht=e=>async({canvasElement:t})=>{let n=P(),r=t.querySelector(`input[type="file"]`);if(!r)throw Error(`File input not found`);switch(await M.upload(r,n),e){case`normal`:await dt(t);break;case`interrupted`:await ft(t);break;case`error`:await pt(t);break}}})),F,I,_t=t((()=>{rt(),F=class{interruptedRuns=-1;uploads=new Map;config;constructor(e={}){this.config=e}async upload(e){let{scenario:t=`success`,duration:n=2e3,steps:r=20,interruptAt:i=30,errorMessage:a=`Upload failed`,delay:o=0}=this.config,{file:s,fileId:c,onProgress:l,signal:u}=e;this.uploads.set(c,{cancelled:!1});let d=()=>u?.aborted||this.uploads.get(c)?.cancelled?(this.uploads.delete(c),!0):!1;if(o>0&&(await this.sleep(o),d()))throw new A(`Upload cancelled`);if(t===`error`)throw new nt(a||`Unsupported file type`);let f=n/r;for(let e=0;e<=r;e++){if(d())throw new A(`Upload cancelled`);await this.sleep(f);let n=Math.min(e/r*100,100);if(l?.(n),t===`interrupted`&&n>=i&&this.interruptedRuns%2)throw this.uploads.delete(c),this.interruptedRuns++,new A(a||`Network connection lost`)}return this.interruptedRuns++,this.uploads.delete(c),{url:`mock://uploaded/${s.name}`,metadata:{fileName:s.name,fileSize:s.size,fileType:s.type,uploadedAt:new Date().toISOString()}}}cancel(e){let t=this.uploads.get(e);t&&(t.cancelled=!0)}sleep(e){return new Promise(t=>setTimeout(t,e))}},I={normal:()=>new F({scenario:`success`,duration:2e3+Math.random()*1e3,steps:20}),fast:()=>new F({scenario:`success`,duration:800,steps:10}),slow:()=>new F({scenario:`success`,duration:1e4,steps:30}),interrupted:(e=30)=>new F({scenario:`interrupted`,duration:1e3,steps:20,interruptAt:e,errorMessage:`Network connection lost`}),error:e=>new F({scenario:`error`,errorMessage:e||`Unsupported file type`}),custom:e=>new F(e)}})),vt=t((()=>{})),yt=t((()=>{ut(),Ze(),vt(),st()})),bt,xt=t((()=>{bt=`import type {
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
`}));function St(e){let t={a:`a`,code:`code`,h1:`h1`,h2:`h2`,hr:`hr`,p:`p`,strong:`strong`,...r(),...e.components};return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(t.h1,{id:`file-upload`,children:`File Upload`}),`
`,(0,L.jsxs)(t.p,{children:[`To use the file upload component you need to provide an adapter that implements the `,(0,L.jsx)(t.code,{children:`FileUploadAdapter`}),` interface.
See sample adapter below implemented using the native `,(0,L.jsx)(t.a,{href:`https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest`,rel:`nofollow`,children:(0,L.jsx)(t.code,{children:`XMLHttpRequest`})}),` API but you can also use fetch, axios etc.`]}),`
`,(0,L.jsx)(t.hr,{}),`
`,(0,L.jsxs)(t.p,{children:[`This is a minimal interactive story showing how to write and use a simple upload adapter. Click on `,(0,L.jsx)(t.strong,{children:`Show code`}),` to see the usage example.`]}),`
`,(0,L.jsx)(s,{children:(0,L.jsx)(a,{name:`Default`})}),`
`,(0,L.jsx)(t.h2,{id:`example-fileuploadadapter`,children:`Example FileUploadAdapter`}),`
`,(0,L.jsx)(c,{code:bt,language:`ts`,dark:!0})]})}function Ct(e={}){let{wrapper:t}={...r(),...e.components};return t?(0,L.jsx)(t,{...e,children:(0,L.jsx)(St,{...e})}):St(e)}var L,wt=t((()=>{L=i(),ie(),o(),yt(),xt()})),R,z,B,V,H,U,Tt,W,G,K,q,J,Y,X,Z,Q,$,Et;t((()=>{m(),ut(),st(),gt(),_t(),Ze(),wt(),R=i(),{expect:z,fn:B,userEvent:V,waitFor:H,within:U}=__STORYBOOK_MODULE_TEST__,Tt={title:`Design System/FileUpload`,component:lt,parameters:{layout:`centered`,docs:{page:Ct,source:{code:`
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
);`}}},argTypes:{errorText:{control:`text`},dropzoneText:{control:`text`},triggerText:{control:`text`},hideProgress:{control:`boolean`},hideInfoText:{control:`boolean`},disableDrop:{control:`boolean`},maxFiles:{control:`number`},accept:{control:`object`},disabled:{control:`boolean`},compact:{control:`boolean`}}},W={args:{adapter:I.normal(),style:{width:`500px`},onFilesAdded:e=>{console.log(`Files added:`,e.map(e=>e.name))},onFileUploadComplete:(e,t)=>{console.log(`File upload complete:`,e,t.url)},onFileUploadError:(e,t)=>{console.error(`File upload failed:`,e,t)},onFileRemoved:e=>{console.log(`File removed:`,e)},onFileDeleted:e=>{console.log(`File deleted:`,e)},onFileUploadCanceled:e=>{console.log(`File upload canceled:`,e)},onFileUploadRetried:e=>{console.log(`File upload retried:`,e)},onAllFileUploadsComplete:()=>{console.log(`All file uploads complete!`)}}},G={args:{adapter:I.fast(),autoUpload:!1,hideProgress:!1,style:{width:`500px`},onFilesAdded:B(),onFileUploadComplete:B(),onAllFileUploadsComplete:B()},render:function(e){let{getProps:t,files:n,uploadAll:r,clearFiles:i}=it({adapter:e.adapter,autoUpload:e.autoUpload,onFileUploadComplete:e.onFileUploadComplete,onAllFileUploadsComplete:e.onAllFileUploadsComplete}),a=n.some(e=>e.status===`uploading`),o=n.length>0;return(0,R.jsxs)(`div`,{style:{width:`500px`},children:[(0,R.jsx)(O,{...t({onFilesAdded:e.onFilesAdded}),...e}),o&&(0,R.jsxs)(`div`,{style:{marginTop:`16px`,display:`flex`,gap:`8px`},children:[(0,R.jsx)(p,{design:`v1.2`,size:`small`,onClick:()=>r(),disabled:a,children:a?`Uploading...`:`Upload All`}),(0,R.jsx)(p,{design:`v1.2`,variant:`ghost`,size:`small`,onClick:()=>i(),disabled:a,children:`Clear All`})]})]})},play:async({canvasElement:e,args:t})=>{let n=U(e),r=P({name:`document-1.pdf`}),i=P({name:`document-2.pdf`}),a=e.querySelector(`input[type="file"]`);if(!a)throw Error(`File input not found`);await V.upload(a,[r,i]),await H(async()=>{await z(n.getByText(r.name)).toBeInTheDocument(),await z(n.getByText(i.name)).toBeInTheDocument()});let o=n.getByRole(`button`,{name:/upload all/i});await V.click(o),await H(async()=>{await z(n.queryAllByText(/complete/i).length).toBe(2),await z(t.onFileUploadComplete).toHaveBeenCalledWith(z.any(String),z.objectContaining({metadata:z.objectContaining({fileName:r.name})})),await z(t.onFileUploadComplete).toHaveBeenCalledWith(z.any(String),z.objectContaining({metadata:z.objectContaining({fileName:i.name})})),await z(t.onAllFileUploadsComplete).toHaveBeenCalled()},{timeout:1e4})}},K={args:{adapter:I.fast(),compact:!0,maxFiles:1,accept:[`application/pdf`,`text/csv`,{mimeType:`application/vnd.openxmlformats-officedocument.spreadsheetml.sheet`,extensions:[`.xlsx`]}],dropzoneText:`Drag and drop your document here or`,triggerText:`Choose document`,style:{width:`400px`},onFilesAdded:B()}},q={args:{adapter:I.normal(),disabled:!0,style:{width:`500px`}}},J={args:{adapter:I.error(`Unsupported file type`),style:{width:`500px`}},play:ht(`error`)},Y={args:{adapter:I.interrupted(30),style:{width:`500px`}},play:ht(`interrupted`)},X={args:{adapter:I.fast(),maxFiles:1,style:{width:`400px`}},play:async({canvasElement:e})=>{let t=U(e),n=P({name:`first-file.pdf`}),r=P({name:`second-file.pdf`}),i=e.querySelector(`input[type="file"]`);if(!i)throw Error(`File input not found`);await V.upload(i,n),await H(async()=>{await z(t.getByText(`first-file.pdf`)).toBeInTheDocument(),await z(t.queryByText(/complete/i)).toBeInTheDocument()},{timeout:3e3}),await V.upload(i,r),await H(async()=>(await z(t.getByText(`second-file.pdf`)).toBeInTheDocument(),z(t.queryAllByText(/too many files|maximum|limit/i).length).toBeGreaterThan(0)))}},Z={args:{adapter:I.fast(),style:{width:`500px`},onFilesAdded:B()},play:async({canvasElement:e})=>{let t=U(e),n=P({name:`duplicate-test.pdf`}),r=e.querySelector(`input[type="file"]`);if(!r)throw Error(`File input not found`);await V.upload(r,n),await H(async()=>{await z(t.getByText(`duplicate-test.pdf`)).toBeInTheDocument(),await z(t.queryByText(/complete/i)).toBeInTheDocument()},{timeout:3e3}),await V.upload(r,n),await H(async()=>(await z(t.queryAllByText(`duplicate-test.pdf`).length).toBe(2),z(t.queryAllByText(/already exists|file exists|duplicate/i).length).toBeGreaterThan(0)))}},Q={args:{adapter:I.fast(),hideInfoText:!0,style:{width:`500px`}},play:async({canvasElement:e})=>{let t=U(e);await z(t.getByRole(`button`,{name:/select file/i})).toBeInTheDocument(),await z(t.queryByText(/only.*files/i)).not.toBeInTheDocument()}},$={args:{adapter:I.slow(),style:{width:`500px`},onFileUploadCanceled:B()},play:async({canvasElement:e})=>{let t=U(e),n=P({name:`cancel-test.pdf`}),r=e.querySelector(`input[type="file"]`);if(!r)throw Error(`File input not found`);await V.upload(r,n),await H(async()=>{await z(t.getByText(`cancel-test.pdf`)).toBeInTheDocument(),await z(t.queryByText(/uploading/i)).toBeInTheDocument()},{timeout:1e3}),await new Promise(e=>setTimeout(e,500));let i=t.getByLabelText(/cancel/i);await V.click(i),await H(async()=>{await z(t.queryByText(/cancelled|canceled/i)).toBeInTheDocument()},{timeout:2e3})}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source},description:{story:`Default auto-upload behavior
Files automatically upload when dropped or selected`,...W.parameters?.docs?.description}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source},description:{story:`Manual upload mode - files must be uploaded manually
Good for review workflows or batch operations
Advance use case which demonstrates use of (base) FileUpload with useFileUpload`,...G.parameters?.docs?.description}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.normal(),
    disabled: true,
    style: {
      width: '500px'
    }
  }
}`,...q.parameters?.docs?.source},description:{story:`Disabled state`,...q.parameters?.docs?.description}}},J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.error('Unsupported file type'),
    style: {
      width: '500px'
    }
  },
  play: createTestPlayFunction('error')
}`,...J.parameters?.docs?.source},description:{story:`Upload error scenario - file fails validation immediately`,...J.parameters?.docs?.description}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.interrupted(30),
    style: {
      width: '500px'
    }
  },
  play: createTestPlayFunction('interrupted')
}`,...Y.parameters?.docs?.source},description:{story:`Upload interrupted scenario - network fails mid-upload
Demonstrates retry functionality`,...Y.parameters?.docs?.description}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source},description:{story:`Duplicate files scenario - uploading the same file twice
Demonstrates duplicate detection and FILE_EXISTS error`,...Z.parameters?.docs?.description}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source},description:{story:`Hidden info text - hides the file type and size limit information`,...Q.parameters?.docs?.description}}},$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
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
}`,...$.parameters?.docs?.source},description:{story:`Cancel upload scenario - cancel an ongoing upload
Demonstrates upload cancellation functionality`,...$.parameters?.docs?.description}}},Et=[`Default`,`Manual`,`Compact`,`Disabled`,`UploadError`,`UploadInterrupted`,`MaxFiles`,`DuplicateFiles`,`HiddenInfoText`,`CancelUpload`]}))();export{$ as CancelUpload,K as Compact,W as Default,q as Disabled,Z as DuplicateFiles,Q as HiddenInfoText,G as Manual,X as MaxFiles,J as UploadError,Y as UploadInterrupted,Et as __namedExportsOrder,Tt as default};