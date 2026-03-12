import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as $}from"./ds-button-DUJHt8Ia.js";import{c as he}from"./index-Bm4Gdwiw.js";import{D as P}from"./ds-icon-DbCKjb5T.js";import{D as ye}from"./ds-typography-Dpk1RlKZ.js";import{D as se}from"./ds-tooltip-B6-yM2bi.js";import{P as at}from"./progress-root-CJWtfN5p.js";import{P as it,a as nt}from"./progress-track-SPl8pqJU.js";import{r as W}from"./iframe-ByIveL06.js";import{c as Me}from"./create-split-props-u5h9OPvL.js";import{c as ot,m as ue,a as fe,u as rt,b as lt}from"./use-locale-context-q7sJtfgv.js";import{u as Ne}from"./use-field-context-BJC9JhjA.js";import{k as st,Y as dt,g as pt,l as w,C as G,Z as ct,m as mt,D as ut,s as ft,u as gt,y as yt}from"./create-anatomy-Cj7KKSv4.js";import{g as me,e as Ce}from"./event-CBXSxTbR.js";import{r as xt}from"./raf-CC9hSMXO.js";import{v as ht}from"./visually-hidden-BShGFMbX.js";import{i as Ft}from"./cache-DQEOqL51.js";import{useMDXComponents as Oe}from"./index-Bpr_Gf0T.js";import{h as vt,i as wt,f as _t}from"./blocks-DmJN8E31.js";import"./ds-button-legacy-DUBeOvwD.js";import"./ds-button-new-Cc4jcDSd.js";import"./index-DNNzYmse.js";import"./index-xsX5p1nH.js";import"./index-DTZ0pzHf.js";import"./index-DriOsA20.js";import"./index-DzOxUZoY.js";import"./index-BQhE3VxO.js";import"./index-044-HCAb.js";import"./index-CQ3-Mnt1.js";import"./floating-ui.dom-o9At5h4Q.js";import"./index--PzZISUg.js";import"./memo-BRlFl984.js";import"./equal-DfFTejAs.js";import"./number-Bu-e0fmS.js";import"./preload-helper-PPVm8Dsz.js";import"./index-dcPwSjPP.js";var Tt=Ft(Intl.NumberFormat);function bt(e,t,a={}){return Tt(t,a).format(e)}var It=["","kilo","mega","giga","tera"],Et=["","kilo","mega","giga","tera","peta"],Ut=(e,t="en-US",a={})=>{if(Number.isNaN(e))return"";if(e===0)return"0 B";const{unitSystem:n="decimal",precision:i=3,unit:s="byte",unitDisplay:m="short"}=a,c=n==="binary"?1024:1e3,o=s==="bit"?It:Et,l=e<0;let x=Math.abs(e),_=0;for(;x>=c&&_<o.length-1;)x/=c,_++;const U=parseFloat(x.toPrecision(i)),I=l?-U:U;return bt(I,t,{style:"unit",unit:o[_]+s,unitDisplay:m})},jt=e=>typeof e.getAsEntry=="function"?e.getAsEntry():typeof e.webkitGetAsEntry=="function"?e.webkitGetAsEntry():null,$e=e=>e.isDirectory,Fe=e=>e.isFile,ve=(e,t)=>(Object.defineProperty(e,"relativePath",{value:t?`${t}/${e.name}`:e.name}),e),Dt=(e,t)=>Promise.all(Array.from(e).filter(a=>a.kind==="file").map(a=>{const n=jt(a);if(!n)return null;if($e(n)&&t)return We(n.createReader(),`${n.name}`);if(Fe(n)&&typeof a.getAsFile=="function"){const i=a.getAsFile();return Promise.resolve(i?ve(i,""):null)}if(Fe(n))return new Promise(i=>{n.file(s=>{i(ve(s,""))})})}).filter(a=>a)),We=(e,t="")=>new Promise(a=>{const n=[],i=()=>{e.readEntries(s=>{if(s.length===0){a(Promise.all(n).then(c=>c.flat()));return}const m=s.map(c=>{if(!c)return null;if($e(c))return We(c.createReader(),`${t}${c.name}`);if(Fe(c))return new Promise(o=>{c.file(l=>{o(ve(l,t))})})}).filter(c=>c);n.push(Promise.all(m)),i()})};i()});function At(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Ct(e){return/^.*\.[\w]+$/.test(e)}var ke=e=>At(e)||Ct(e);function kt(e){if(e!=null)return typeof e=="string"?e:Array.isArray(e)?e.filter(ke).join(","):Object.entries(e).reduce((t,[a,n])=>[...t,a,...n],[]).filter(ke).join(",")}var de=(e,t)=>e.name===t.name&&e.size===t.size&&e.type===t.type,X=e=>e!=null;function Pt(e,t,a){if(X(e.size))if(X(t)&&X(a)){if(e.size>a)return[!1,"FILE_TOO_LARGE"];if(e.size<t)return[!1,"FILE_TOO_SMALL"]}else{if(X(t)&&e.size<t)return[!1,"FILE_TOO_SMALL"];if(X(a)&&e.size>a)return[!1,"FILE_TOO_LARGE"]}return[!0,null]}var Rt="3g2_video/3gpp2[3gp,3gpp_video/3gpp[3mf_model/3mf[7z_application/x-7z-compressed[aac_audio/aac[ac_application/pkix-attr-cert[adp_audio/adpcm[adts_audio/aac[ai_application/postscript[aml_application/automationml-aml+xml[amlx_application/automationml-amlx+zip[amr_audio/amr[apk_application/vnd.android.package-archive[apng_image/apng[appcache,manifest_text/cache-manifest[appinstaller_application/appinstaller[appx_application/appx[appxbundle_application/appxbundle[asc_application/pgp-keys[atom_application/atom+xml[atomcat_application/atomcat+xml[atomdeleted_application/atomdeleted+xml[atomsvc_application/atomsvc+xml[au,snd_audio/basic[avi_video/x-msvideo[avci_image/avci[avcs_image/avcs[avif_image/avif[aw_application/applixware[bdoc_application/bdoc[bin,bpk,buffer,deb,deploy,dist,distz,dll,dmg,dms,dump,elc,exe,img,iso,lrf,mar,msi,msm,msp,pkg,so_application/octet-stream[bmp,dib_image/bmp[btf,btif_image/prs.btif[bz2_application/x-bzip2[c_text/x-c[ccxml_application/ccxml+xml[cdfx_application/cdfx+xml[cdmia_application/cdmi-capability[cdmic_application/cdmi-container[cdmid_application/cdmi-domain[cdmio_application/cdmi-object[cdmiq_application/cdmi-queue[cer_application/pkix-cert[cgm_image/cgm[cjs_application/node[class_application/java-vm[coffee,litcoffee_text/coffeescript[conf,def,in,ini,list,log,text,txt_text/plain[cpp,cxx,cc_text/x-c++src[cpl_application/cpl+xml[cpt_application/mac-compactpro[crl_application/pkix-crl[css_text/css[csv_text/csv[cu_application/cu-seeme[cwl_application/cwl[cww_application/prs.cww[davmount_application/davmount+xml[dbk_application/docbook+xml[doc_application/msword[docx_application/vnd.openxmlformats-officedocument.wordprocessingml.document[dsc_text/prs.lines.tag[dssc_application/dssc+der[dtd_application/xml-dtd[dwd_application/atsc-dwd+xml[ear,jar,war_application/java-archive[ecma_application/ecmascript[emf_image/emf[eml,mime_message/rfc822[emma_application/emma+xml[emotionml_application/emotionml+xml[eot_application/vnd.ms-fontobject[eps,ps_application/postscript[epub_application/epub+zip[exi_application/exi[exp_application/express[exr_image/aces[ez_application/andrew-inset[fdf_application/fdf[fdt_application/fdt+xml[fits_image/fits[flac_audio/flac[flv_video/x-flv[g3_image/g3fax[geojson_application/geo+json[gif_image/gif[glb_model/gltf-binary[gltf_model/gltf+json[gml_application/gml+xml[go_text/x-go[gpx_application/gpx+xml[gz_application/gzip[h_text/x-h[h261_video/h261[h263_video/h263[h264_video/h264[heic_image/heic[heics_image/heic-sequence[heif_image/heif[heifs_image/heif-sequence[htm,html,shtml_text/html[ico_image/x-icon[icns_image/x-icns[ics,ifb_text/calendar[iges,igs_model/iges[ink,inkml_application/inkml+xml[ipa_application/octet-stream[java_text/x-java-source[jp2,jpg2_image/jp2[jpeg,jpe,jpg_image/jpeg[jpf,jpx_image/jpx[jpm,jpgm_image/jpm[jpgv_video/jpeg[jph_image/jph[js,mjs_text/javascript[json_application/json[json5_application/json5[jsonld_application/ld+json[jsx_text/jsx[jxl_image/jxl[jxr_image/jxr[ktx_image/ktx[ktx2_image/ktx2[less_text/less[m1v,m2v,mpe,mpeg,mpg_video/mpeg[m4a_audio/mp4[m4v_video/x-m4v[md,markdown_text/markdown[mid,midi,kar,rmi_audio/midi[mkv_video/x-matroska[mp2,mp2a,mp3,mpga,m3a,m2a_audio/mpeg[mp4,mp4v,mpg4_video/mp4[mp4a_audio/mp4[mp4s,m4p_application/mp4[odp_application/vnd.oasis.opendocument.presentation[oda_application/oda[ods_application/vnd.oasis.opendocument.spreadsheet[odt_application/vnd.oasis.opendocument.text[oga,ogg,opus,spx_audio/ogg[ogv_video/ogg[ogx_application/ogg[otf_font/otf[p12,pfx_application/x-pkcs12[pdf_application/pdf[pem_application/x-pem-file[php_text/x-php[png_image/png[ppt_application/vnd.ms-powerpoint[pptx_application/vnd.openxmlformats-officedocument.presentationml.presentation[pskcxml_application/pskc+xml[psd_image/vnd.adobe.photoshop[py_text/x-python[qt,mov_video/quicktime[rar_application/vnd.rar[rdf_application/rdf+xml[rtf_text/rtf[sass_text/x-sass[scss_text/x-scss[sgm,sgml_text/sgml[sh_application/x-sh[svg,svgz_image/svg+xml[swf_application/x-shockwave-flash[tar_application/x-tar[tif,tiff_image/tiff[toml_application/toml[ts_video/mp2t[tsx_text/tsx[tsv_text/tab-separated-values[ttc_font/collection[ttf_font/ttf[vtt_text/vtt[wasm_application/wasm[wav_audio/wav[weba_audio/webm[webm_video/webm[webmanifest_application/manifest+json[webp_image/webp[wma_audio/x-ms-wma[wmv_video/x-ms-wmv[woff_font/woff[woff2_font/woff2[xls_application/vnd.ms-excel[xlsx_application/vnd.openxmlformats-officedocument.spreadsheetml.sheet[xml_application/xml[xz_application/x-xz[yaml,yml_text/yaml[zip_application/zip",Bt=new Map(Rt.split("[").flatMap(e=>{const[t,a]=e.split("_");return t.split(",").map(n=>[n,a])}));function St(e){const t=e.split(".").pop();return t&&Bt.get(t)||null}function Lt(e,t){if(e&&t){const a=Array.isArray(t)?t:typeof t=="string"?t.split(","):[];if(a.length===0)return!0;const n=e.name||"",i=(e.type||St(n)||"").toLowerCase(),s=i.replace(/\/.*$/,"");return a.some(m=>{const c=m.trim().toLowerCase();return c.charAt(0)==="."?n.toLowerCase().endsWith(c):c.endsWith("/*")?s===c.replace(/\/.*$/,""):i===c})}return!0}function qt(e,t){const a=e.type==="application/x-moz-file"||Lt(e,t);return[a,a?null:"FILE_INVALID_TYPE"]}const[zt,_e]=ot({name:"FileUploadContext",hookName:"useFileUploadContext",providerName:"<FileUploadProvider />"}),Mt=Me(),Ve=W.forwardRef((e,t)=>{const[a,n]=Mt(e,["disableClick"]),i=_e(),s=ue(i.getDropzoneProps(a),n);return r.jsx(fe.div,{...s,ref:t})});Ve.displayName="FileUploadDropzone";const He=W.forwardRef((e,t)=>{const a=_e(),n=ue(a.getHiddenInputProps(),e),i=Ne();return r.jsx(fe.input,{"aria-describedby":i?.ariaDescribedby,...n,ref:t})});He.displayName="FileUploadHiddenInput";var Nt=st("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger"),k=Nt.build(),Ge=e=>e.ids?.root??`file:${e.id}`,Ze=e=>e.ids?.dropzone??`file:${e.id}:dropzone`,we=e=>e.ids?.hiddenInput??`file:${e.id}:input`,Ot=e=>e.ids?.trigger??`file:${e.id}:trigger`,$t=e=>e.ids?.label??`file:${e.id}:label`,Wt=(e,t)=>e.ids?.item?.(t)??`file:${e.id}:item:${t}`,Vt=(e,t)=>e.ids?.itemName?.(t)??`file:${e.id}:item-name:${t}`,Ht=(e,t)=>e.ids?.itemSizeText?.(t)??`file:${e.id}:item-size:${t}`,Gt=(e,t)=>e.ids?.itemPreview?.(t)??`file:${e.id}:item-preview:${t}`,Zt=(e,t)=>e.ids?.itemDeleteTrigger?.(t)??`file:${e.id}:item-delete:${t}`,Y=e=>dt(`${e.name}-${e.size}`),Xt=e=>e.getById(Ge(e)),Pe=e=>e.getById(we(e)),Yt=e=>e.getById(Ze(e));function Re(e){const t=me(e);return e.dataTransfer?e.dataTransfer.types.some(a=>a==="Files"||a==="application/x-moz-file"):!!t&&"files"in t}function Kt(e,t,a){const{prop:n,computed:i}=e;return!i("multiple")&&t>1?!1:!i("multiple")&&t+a.length===2?!0:!(t+a.length>n("maxFiles"))}function Be(e,t,a=[],n=[]){const{prop:i,computed:s}=e,m=[],c=[],o={acceptedFiles:a,rejectedFiles:n};return t.forEach(l=>{const[v,x]=qt(l,s("acceptAttr")),[_,U]=Pt(l,i("minFileSize"),i("maxFileSize")),I=i("validate")?.(l,o),D=I?I.length===0:!0;if(v&&_&&D)m.push(l);else{const R=[x,U];D||R.push(...I??[]),c.push({file:l,errors:R.filter(Boolean)})}}),Kt(e,m.length,a)||(m.forEach(l=>{c.push({file:l,errors:["TOO_MANY_FILES"]})}),m.splice(0)),{acceptedFiles:m,rejectedFiles:c}}function Jt(e,t){const a=pt(e);try{if("DataTransfer"in a){const n=new a.DataTransfer;t.forEach(i=>{n.items.add(i)}),e.files=n.files}}catch{}}var S="accepted",Qt="button, a[href], input:not([type='file']), select, textarea, [tabindex], [contenteditable]";function Se(e,t){if(!e||e.getAttribute("type")==="file")return!1;const a=e.closest(Qt);return a!=t&&G(t,a)}function ea(e,t){const{state:a,send:n,prop:i,computed:s,scope:m,context:c}=e,o=!!i("disabled"),l=!!i("readOnly"),v=!!i("required"),x=i("allowDrop"),_=i("translations"),U=a.matches("dragging"),I=a.matches("focused")&&!o,D=c.get("acceptedFiles"),R=i("maxFiles");return{dragging:U,focused:I,disabled:o,readOnly:l,transforming:c.get("transforming"),maxFilesReached:D.length>=R,remainingFiles:Math.max(0,R-D.length),openFilePicker(){o||l||n({type:"OPEN"})},deleteFile(f,p=S){o||l||n({type:"FILE.DELETE",file:f,itemType:p})},acceptedFiles:D,rejectedFiles:c.get("rejectedFiles"),setFiles(f){o||l||n({type:"FILES.SET",files:f,count:f.length})},clearRejectedFiles(){o||l||n({type:"REJECTED_FILES.CLEAR"})},clearFiles(){o||l||n({type:"FILES.CLEAR"})},getFileSize(f){return Ut(f.size,i("locale"))},createFileUrl(f,p){const y=m.getWin(),b=y.URL.createObjectURL(f);return p(b),()=>y.URL.revokeObjectURL(b)},setClipboardFiles(f){if(o||l)return!1;const y=Array.from(f?.items??[]).reduce((b,C)=>{if(C.kind!=="file")return b;const A=C.getAsFile();return A?[...b,A]:b},[]);return y.length?(n({type:"FILE.SELECT",files:y}),!0):!1},getRootProps(){return t.element({...k.root.attrs,dir:i("dir"),id:Ge(m),"data-disabled":w(o),"data-readonly":w(l),"data-dragging":w(U)})},getDropzoneProps(f={}){return t.element({...k.dropzone.attrs,dir:i("dir"),id:Ze(m),tabIndex:o||l||f.disableClick?void 0:0,role:f.disableClick?"application":"button","aria-label":_.dropzone,"aria-disabled":o||l||void 0,"data-invalid":w(i("invalid")),"data-disabled":w(o),"data-readonly":w(l),"data-dragging":w(U),onKeyDown(p){if(o||l||p.defaultPrevented)return;const y=me(p);G(p.currentTarget,y)&&(Se(y,p.currentTarget)||f.disableClick||p.key!=="Enter"&&p.key!==" "||n({type:"DROPZONE.CLICK",src:"keydown"}))},onClick(p){if(o||l||p.defaultPrevented||f.disableClick)return;const y=me(p);G(p.currentTarget,y)&&(Se(y,p.currentTarget)||(p.currentTarget.localName==="label"&&p.preventDefault(),n({type:"DROPZONE.CLICK"})))},onDragOver(p){if(o||l||!x)return;p.preventDefault(),p.stopPropagation();try{p.dataTransfer.dropEffect="copy"}catch{}if(!Re(p))return;const b=p.dataTransfer.items.length;n({type:"DROPZONE.DRAG_OVER",count:b})},onDragLeave(p){o||l||x&&(G(p.currentTarget,p.relatedTarget)||n({type:"DROPZONE.DRAG_LEAVE"}))},onDrop(p){o||l||(x&&(p.preventDefault(),p.stopPropagation()),!Re(p))||Dt(p.dataTransfer.items,i("directory")).then(b=>{n({type:"DROPZONE.DROP",files:ct(b)})})},onFocus(){o||l||n({type:"DROPZONE.FOCUS"})},onBlur(){o||l||n({type:"DROPZONE.BLUR"})}})},getTriggerProps(){return t.button({...k.trigger.attrs,dir:i("dir"),id:Ot(m),disabled:o||l,"data-disabled":w(o),"data-readonly":w(l),"data-invalid":w(i("invalid")),type:"button",onClick(f){o||l||(G(Yt(m),f.currentTarget)&&f.stopPropagation(),n({type:"OPEN"}))}})},getHiddenInputProps(){return t.input({id:we(m),tabIndex:-1,disabled:o||l,type:"file",required:i("required"),capture:i("capture"),name:i("name"),accept:s("acceptAttr"),webkitdirectory:i("directory")?"":void 0,multiple:s("multiple")||i("maxFiles")>1,"aria-hidden":!0,onClick(f){f.stopPropagation(),f.currentTarget.value=""},onInput(f){if(o||l)return;const{files:p}=f.currentTarget;n({type:"FILE.SELECT",files:p?Array.from(p):[]})},style:ht})},getItemGroupProps(f={}){const{type:p=S}=f;return t.element({...k.itemGroup.attrs,dir:i("dir"),"data-disabled":w(o),"data-type":p})},getItemProps(f){const{file:p,type:y=S}=f;return t.element({...k.item.attrs,dir:i("dir"),id:Wt(m,Y(p)),"data-disabled":w(o),"data-type":y})},getItemNameProps(f){const{file:p,type:y=S}=f;return t.element({...k.itemName.attrs,dir:i("dir"),id:Vt(m,Y(p)),"data-disabled":w(o),"data-type":y})},getItemSizeTextProps(f){const{file:p,type:y=S}=f;return t.element({...k.itemSizeText.attrs,dir:i("dir"),id:Ht(m,Y(p)),"data-disabled":w(o),"data-type":y})},getItemPreviewProps(f){const{file:p,type:y=S}=f;return t.element({...k.itemPreview.attrs,dir:i("dir"),id:Gt(m,Y(p)),"data-disabled":w(o),"data-type":y})},getItemPreviewImageProps(f){const{file:p,url:y,type:b=S}=f;if(!p.type.startsWith("image/"))throw new Error("Preview Image is only supported for image files");return t.img({...k.itemPreviewImage.attrs,alt:_.itemPreview?.(p),src:y,"data-disabled":w(o),"data-type":b})},getItemDeleteTriggerProps(f){const{file:p,type:y=S}=f;return t.button({...k.itemDeleteTrigger.attrs,dir:i("dir"),id:Zt(m,Y(p)),type:"button",disabled:o||l,"data-disabled":w(o),"data-readonly":w(l),"data-type":y,"aria-label":_.deleteFile?.(p),onClick(){o||l||n({type:"FILE.DELETE",file:p,itemType:y})}})},getLabelProps(){return t.label({...k.label.attrs,dir:i("dir"),id:$t(m),htmlFor:we(m),"data-disabled":w(o),"data-required":w(v)})},getClearTriggerProps(){return t.button({...k.clearTrigger.attrs,dir:i("dir"),type:"button",disabled:o||l,hidden:D.length===0,"data-disabled":w(o),"data-readonly":w(l),onClick(f){f.defaultPrevented||o||l||n({type:"FILES.CLEAR"})}})}}}var ta=mt({props({props:e}){return{minFileSize:0,maxFileSize:Number.POSITIVE_INFINITY,maxFiles:1,allowDrop:!0,preventDocumentDrop:!0,defaultAcceptedFiles:[],...e,translations:{dropzone:"dropzone",itemPreview:t=>`preview of ${t.name}`,deleteFile:t=>`delete file ${t.name}`,...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{acceptedFiles:t(()=>({defaultValue:e("defaultAcceptedFiles"),value:e("acceptedFiles"),isEqual:(n,i)=>n.length===i?.length&&n.every((s,m)=>de(s,i[m])),hash(n){return n.map(i=>`${i.name}-${i.size}`).join(",")},onChange(n){const i=a();e("onFileAccept")?.({files:n}),e("onFileChange")?.({acceptedFiles:n,rejectedFiles:i.get("rejectedFiles")})}})),rejectedFiles:t(()=>({defaultValue:[],isEqual:(n,i)=>n.length===i?.length&&n.every((s,m)=>de(s.file,i[m].file)),onChange(n){const i=a();e("onFileReject")?.({files:n}),e("onFileChange")?.({acceptedFiles:i.get("acceptedFiles"),rejectedFiles:n})}})),transforming:t(()=>({defaultValue:!1}))}},computed:{acceptAttr:({prop:e})=>kt(e("accept")),multiple:({prop:e})=>e("maxFiles")>1},watch({track:e,context:t,action:a}){e([()=>t.hash("acceptedFiles")],()=>{a(["syncInputElement"])})},on:{"FILES.SET":{actions:["setFiles"]},"FILE.SELECT":{actions:["setEventFiles"]},"FILE.DELETE":{actions:["removeFile"]},"FILES.CLEAR":{actions:["clearFiles"]},"REJECTED_FILES.CLEAR":{actions:["clearRejectedFiles"]}},effects:["preventDocumentDrop"],states:{idle:{on:{OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.FOCUS":{target:"focused"},"DROPZONE.DRAG_OVER":{target:"dragging"}}},focused:{on:{"DROPZONE.BLUR":{target:"idle"},OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.DRAG_OVER":{target:"dragging"}}},dragging:{on:{"DROPZONE.DROP":{target:"idle",actions:["setEventFiles"]},"DROPZONE.DRAG_LEAVE":{target:"idle"}}}},implementations:{effects:{preventDocumentDrop({prop:e,scope:t}){if(!e("preventDocumentDrop")||!e("allowDrop")||e("disabled"))return;const a=t.getDoc(),n=s=>{s?.preventDefault()},i=s=>{G(Xt(t),me(s))||s.preventDefault()};return ft(Ce(a,"dragover",n,!1),Ce(a,"drop",i,!1))}},actions:{syncInputElement({scope:e,context:t}){queueMicrotask(()=>{const a=Pe(e);if(!a)return;Jt(a,t.get("acceptedFiles"));const n=e.getWin();a.dispatchEvent(new n.Event("change",{bubbles:!0}))})},openFilePicker({scope:e}){xt(()=>{Pe(e)?.click()})},setFiles(e){const{computed:t,context:a,event:n}=e,{acceptedFiles:i,rejectedFiles:s}=Be(e,n.files);a.set("acceptedFiles",t("multiple")?i:i.length>0?[i[0]]:[]),a.set("rejectedFiles",s)},setEventFiles(e){const{computed:t,context:a,event:n,prop:i}=e,s=a.get("acceptedFiles"),m=a.get("rejectedFiles"),{acceptedFiles:c,rejectedFiles:o}=Be(e,n.files,s,m),l=x=>{if(t("multiple")){a.set("acceptedFiles",_=>[..._,...x]),a.set("rejectedFiles",o);return}if(x.length){a.set("acceptedFiles",[x[0]]),a.set("rejectedFiles",o);return}o.length&&(a.set("acceptedFiles",a.get("acceptedFiles")),a.set("rejectedFiles",o))},v=i("transformFiles");v?(a.set("transforming",!0),v(c).then(l).catch(x=>{ut(`[zag-js/file-upload] error transforming files
${x}`)}).finally(()=>{a.set("transforming",!1)})):l(c)},removeFile({context:e,event:t}){if(t.itemType==="rejected"){const a=e.get("rejectedFiles").filter(n=>!de(n.file,t.file));e.set("rejectedFiles",a)}else{const a=e.get("acceptedFiles").filter(n=>!de(n,t.file));e.set("acceptedFiles",a)}},clearRejectedFiles({context:e}){e.set("rejectedFiles",[])},clearFiles({context:e}){e.set("acceptedFiles",[]),e.set("rejectedFiles",[])}}}});const aa=e=>{const t=W.useId(),{getRootNode:a}=rt(),{dir:n,locale:i}=lt(),s=Ne(),m={id:t,ids:{label:s?.ids.label,hiddenInput:s?.ids.control},dir:n,disabled:s?.disabled,locale:i,required:s?.required,invalid:s?.invalid,getRootNode:a,...e},c=gt(ta,m);return ea(c,yt)},ia=Me(),Xe=W.forwardRef((e,t)=>{const[a,n]=ia(e,["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","directory","disabled","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","readOnly","required","translations","transformFiles","validate"]),i=aa(a),s=ue(i.getRootProps(),n);return r.jsx(zt,{value:i,children:r.jsx(fe.div,{...s,ref:t})})});Xe.displayName="FileUploadRoot";const Ye=W.forwardRef((e,t)=>{const a=_e(),n=ue(a.getTriggerProps(),e);return r.jsx(fe.button,{...n,ref:t})});Ye.displayName="FileUploadTrigger";const na={FILE_TOO_LARGE:"File size exceeds the maximum limit",FILE_INVALID_TYPE:"File type is not allowed",TOO_MANY_FILES:"Too many files selected",FILE_TOO_SMALL:"File size is too small",FILE_INVALID:"File is invalid",FILE_EXISTS:"File already exists"};function oa(e){return na[e]||e||"File validation failed"}const ra="_fileItem_hpxvh_1",la="_fileItemContent_hpxvh_5",sa="_fileItemError_hpxvh_22",da="_progressRange_hpxvh_25",pa="_fileItemCompleted_hpxvh_28",ca="_fileItemUploading_hpxvh_31",ma="_fileItemInterrupted_hpxvh_34",ua="_filePreview_hpxvh_38",fa="_fileInfo_hpxvh_42",ga="_fileName_hpxvh_50",ya="_progressBar_hpxvh_72",xa="_progressTrack_hpxvh_77",ha="_progressText_hpxvh_92",Fa="_completedText_hpxvh_105",va="_interruptedText_hpxvh_118",wa="_errorMessage_hpxvh_131",E={fileItem:ra,fileItemContent:la,fileItemError:sa,progressRange:da,fileItemCompleted:pa,fileItemUploading:ca,fileItemInterrupted:ma,filePreview:ua,fileInfo:fa,fileName:ga,progressBar:ya,progressTrack:xa,progressText:ha,completedText:Fa,interruptedText:va,errorMessage:wa},Ke=({id:e,name:t,progress:a,hideProgress:n=!1,status:i,errors:s,onCancel:m,onRetry:c,onRemove:o,onDelete:l})=>{const v=he(E.fileItemContent,{[E.fileItemError]:i==="error",[E.fileItemCompleted]:i==="completed",[E.fileItemUploading]:i==="uploading",[E.fileItemInterrupted]:i==="interrupted"||i==="cancelled"});return r.jsxs("div",{className:E.fileItem,children:[r.jsxs("div",{className:v,children:[r.jsx(P,{className:E.filePreview,icon:"upload_file",size:"tiny"}),r.jsxs("div",{className:E.fileInfo,children:[r.jsx("div",{className:E.fileName,title:t,children:t}),r.jsx(at,{value:i==="error"?1:a,className:E.progressBar,children:r.jsx(it,{className:E.progressTrack,children:r.jsx(nt,{className:E.progressRange})})})]}),(i==="interrupted"||i==="cancelled")&&c&&r.jsx(se,{content:"Retry",children:r.jsx($,{type:"button",design:"v1.2",buttonType:"tertiary","aria-label":`Retry ${t} upload`,onClick:()=>c(e),children:r.jsx(P,{icon:"refresh",size:"small"})})}),(i==="pending"||i==="error"||i==="interrupted")&&r.jsx(se,{content:"Remove",children:r.jsx($,{type:"button",design:"v1.2",buttonType:"tertiary","aria-label":`Remove ${t} upload`,onClick:()=>o?.(e),children:r.jsx(P,{icon:"do_not_disturb_on",size:"small"})})}),i==="uploading"&&m&&r.jsx(se,{content:"Cancel",children:r.jsx($,{type:"button",design:"v1.2",buttonType:"tertiary","aria-label":`Cancel ${t} upload`,onClick:()=>m(e),children:r.jsx(P,{icon:"close",size:"small"})})}),i==="completed"&&r.jsx(se,{content:"Delete",children:r.jsx($,{type:"button",design:"v1.2",buttonType:"tertiary","aria-label":`Delete ${t}`,onClick:()=>l?.(e),children:r.jsx(P,{icon:"delete",size:"small"})})})]}),i==="completed"&&r.jsxs("div",{className:E.completedText,children:[r.jsx(P,{icon:"check_circle",size:"tiny",filled:!0}),"Upload complete"]}),i==="interrupted"&&r.jsxs("div",{className:E.interruptedText,children:[r.jsx(P,{icon:"info",size:"tiny",filled:!0}),"Upload interrupted"]}),i==="cancelled"&&r.jsxs("div",{className:E.interruptedText,children:[r.jsx(P,{icon:"info",size:"tiny",filled:!0}),"Upload cancelled"]}),i==="error"&&s?.length&&s.map(x=>r.jsxs("div",{className:E.errorMessage,children:[r.jsx(P,{icon:"cancel",size:"tiny",filled:!0}),oa(x)]},x)),!n&&i==="uploading"&&r.jsxs("span",{className:E.progressText,children:["Uploading...(",Math.round(a),"%)"]})]})};Ke.__docgenInfo={description:`Individual file upload item component
Displays a single file with its upload status, progress, and action buttons`,methods:[],displayName:"FileUploadItem",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the file"},name:{required:!0,tsType:{name:"string"},description:"Name of the file"},progress:{required:!0,tsType:{name:"number"},description:"Upload progress percentage (0-100)"},status:{required:!0,tsType:{name:"union",raw:"'pending' | 'uploading' | 'interrupted' | 'completed' | 'error' | 'cancelled'",elements:[{name:"literal",value:"'pending'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'interrupted'"},{name:"literal",value:"'completed'"},{name:"literal",value:"'error'"},{name:"literal",value:"'cancelled'"}]},description:"Current status of the file upload"},errors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of error messages if any"},hideProgress:{required:!1,tsType:{name:"boolean"},description:"Whether to hide progress bar",defaultValue:{value:"false",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when cancel button is clicked"},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when retry button is clicked"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when remove button is clicked (for pending/error states)"},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when delete button is clicked (for completed state)"}}};const _a=["application/pdf","text/csv","application/zip","application/x-zip-compressed"],Ta=25e6,ba=5,Ia={"image/png":[".png"],"image/gif":[".gif"],"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"image/webp":[".webp"],"image/avif":[".avif"],"image/heic":[".heic",".heif"],"image/bmp":[".bmp"],"application/pdf":[".pdf"],"application/zip":[".zip"],"application/json":[".json"],"application/xml":[".xml"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-powerpoint":[".ppt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"],"application/rtf":[".rtf"],"application/x-rar":[".rar"],"application/x-7z-compressed":[".7z"],"application/x-tar":[".tar"],"application/vnd.microsoft.portable-executable":[".exe",".dll"],"text/css":[".css"],"text/csv":[".csv"],"text/html":[".html",".htm"],"text/markdown":[".md",".markdown"],"text/plain":[".txt"],"font/ttf":[".ttf"],"font/otf":[".otf"],"font/woff":[".woff"],"font/woff2":[".woff2"],"font/eot":[".eot"],"font/svg":[".svg"],"video/mp4":[".mp4"],"video/webm":[".webm"],"video/ogg":[".ogv"],"video/quicktime":[".mov"],"video/x-msvideo":[".avi"],"audio/mpeg":[".mp3"],"audio/ogg":[".ogg",".oga"],"audio/wav":[".wav"],"audio/webm":[".weba"],"audio/aac":[".aac"],"audio/flac":[".flac"],"audio/x-m4a":[".m4a"],"image/*":[".png",".jpg",".jpeg",".gif",".webp",".svg",".bmp",".avif",".heic",".heif"],"audio/*":[".mp3",".wav",".ogg",".oga",".m4a",".flac",".aac",".weba"],"video/*":[".mp4",".webm",".ogv",".mov",".avi"],"text/*":[".txt",".html",".htm",".css",".csv",".md",".markdown"],"application/*":[".pdf",".zip",".json",".xml",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".rtf",".rar",".7z",".tar"],"font/*":[".ttf",".otf",".woff",".woff2",".eot"]};function Ea(e){return e.flatMap(t=>typeof t=="string"?Ia[t]??[]:t.extensions)}function Ua(e){return e.map(t=>typeof t=="string"?t:t.mimeType)}function ja(e){if(e===0)return"0 B";const t=1e3,a=["B","KB","MB","GB","TB","PB"],n=Math.floor(Math.log(e)/Math.log(t));return`${(e/Math.pow(t,n)).toFixed(2)} ${String(a[n])}`}function Da(e,t,a){const n=Ea(e),s=[...new Set(n)].map(o=>o.toUpperCase()).join(", "),m=ja(t),c=[];return s&&c.push(`Only ${s} files`),t<1/0&&c.push(`File size ${m} max`),a===1?c.push("Only 1 file"):a>1&&c.push(`Up to ${String(a)} files`),c.join(". ")+"."}const Aa="_fileUploadRoot_baybr_1",Ca="_dropzone_baybr_7",ka="_dropzoneCompact_baybr_19",Pa="_dropzoneIcon_baybr_23",Ra="_dropzoneText_baybr_26",Ba="_fileList_baybr_57",Sa="_infoText_baybr_67",La="_errorText_baybr_72",L={fileUploadRoot:Aa,dropzone:Ca,dropzoneCompact:ka,dropzoneIcon:Pa,dropzoneText:Ra,fileList:Ba,infoText:Sa,errorText:La},Te=({style:e={},className:t,files:a,acceptedFiles:n,errorText:i,dropzoneText:s="Drag and drop files here or ",triggerText:m="Select file...",hideProgress:c=!1,hideInfoText:o=!1,disableDrop:l=!1,onFileAccept:v,onFileReject:x,onFileRemove:_,onFileDelete:U,onFileCancel:I,onFileRetry:D,accept:R=_a,maxFiles:f=ba,maxFileSize:p=Ta,compact:y=!1,disabled:b=!1})=>{const C=Da(R,p,f);return r.jsxs(Xe,{style:e,className:he(L.fileUploadRoot,t),maxFiles:f,maxFileSize:p,accept:Ua(R),disabled:b,allowDrop:!l,acceptedFiles:n,onFileAccept:v,onFileReject:x,children:[r.jsxs(Ve,{className:he(L.dropzone,{[L.dropzoneCompact]:y}),children:[r.jsx(P,{icon:"upload",className:L.dropzoneIcon}),r.jsx(ye,{className:L.dropzoneText,variant:"body-xs-reg",children:s}),r.jsx(Ye,{asChild:!0,children:r.jsx($,{design:"v1.2",variant:"ghost",size:"small",disabled:b,children:m})})]}),C&&!o&&!b&&!i&&r.jsx(ye,{className:L.infoText,variant:"body-xs-reg",children:C}),i&&r.jsxs(ye,{className:L.errorText,variant:"body-xs-reg",children:[r.jsx(P,{icon:"error",size:"tiny"}),i]}),!!a?.length&&r.jsx("div",{className:L.fileList,children:a.map(A=>r.jsx(Ke,{id:A.id,name:A.name,progress:A.progress,hideProgress:c,status:A.status,errors:A.errors,onRemove:_,onDelete:U,onCancel:I,onRetry:D},A.id))}),r.jsx(He,{})]})};Te.__docgenInfo={description:`Design system base File Upload component
Used in conjunction with the useFileUpload hook`,methods:[],displayName:"FileUpload",props:{errorText:{required:!1,tsType:{name:"string"},description:"Error text displayed when validation fails"},dropzoneText:{required:!1,tsType:{name:"string"},description:"Text displayed in the dropzone area",defaultValue:{value:"'Drag and drop files here or '",computed:!1}},triggerText:{required:!1,tsType:{name:"string"},description:"Text for the upload trigger button",defaultValue:{value:"'Select file...'",computed:!1}},hideProgress:{required:!1,tsType:{name:"boolean"},description:`Whether to hide upload progress
@default false`,defaultValue:{value:"false",computed:!1}},hideInfoText:{required:!1,tsType:{name:"boolean"},description:`Whether to hide the info text (file types, size limits, etc.)
@default false`,defaultValue:{value:"false",computed:!1}},disableDrop:{required:!1,tsType:{name:"boolean"},description:`Whether to disable drag and drop functionality
@default false`,defaultValue:{value:"false",computed:!1}},maxFiles:{required:!1,tsType:{name:"number"},description:"The maximum number of files that can be uploaded",defaultValue:{value:"5",computed:!1}},maxFileSize:{required:!1,tsType:{name:"number"},description:`Maximum file size in bytes
@default 25MB`,defaultValue:{value:"25_000_000",computed:!1}},onFileAccept:{required:!1,tsType:{name:"signature",type:"function",raw:"(details: FileUploadFileAcceptDetails) => void",signature:{arguments:[{type:{name:"FileUploadFileAcceptDetails"},name:"details"}],return:{name:"void"}}},description:"Callback when files are accepted"},onFileReject:{required:!1,tsType:{name:"signature",type:"function",raw:"(details: FileUploadFileRejectDetails) => void",signature:{arguments:[{type:{name:"FileUploadFileRejectDetails"},name:"details"}],return:{name:"void"}}},description:"Callback when files are rejected"},className:{required:!1,tsType:{name:"string"},description:"Additional CSS class names"},style:{required:!1,tsType:{name:"CSSProperties"},description:"Additional styles",defaultValue:{value:"{}",computed:!1}},accept:{required:!1,tsType:{name:"Array",elements:[{name:"union",raw:`| FileUploadFileMimeType
| {
		mimeType: FileUploadFileMimeType;
		extensions: [FileExtension, ...FileExtension[]];
  }`,elements:[{name:"FileUploadFileMimeType"},{name:"signature",type:"object",raw:`{
mimeType: FileUploadFileMimeType;
extensions: [FileExtension, ...FileExtension[]];
}`,signature:{properties:[{key:"mimeType",value:{name:"FileUploadFileMimeType",required:!0}},{key:"extensions",value:{name:"tuple",raw:"[FileExtension, ...FileExtension[]]",elements:[{name:"literal",value:"`.${string}`"},{name:"unknown"}],required:!0}}]}}]}],raw:"AcceptedFileType[]"},description:`The file types that are accepted
Use shorthand for common MIME types (extensions provided automatically)
or explicit form for custom types
@example ['application/pdf', 'image/png']
@example ['application/pdf', { mimeType: 'application/x-custom', extensions: ['.custom'] }]`,defaultValue:{value:`[
	'application/pdf',
	'text/csv',
	'application/zip',
	'application/x-zip-compressed',
]`,computed:!1}},files:{required:!1,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:"File states to display (managed externally)"},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when files are removed"},onFileDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when files are deleted"},onFileCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when files upload is canceled"},onFileRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when files upload is retried"},acceptedFiles:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:"Controlled accepted files"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the file upload is disabled",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"Whether the file upload layout is compact (inline)",defaultValue:{value:"false",computed:!1}}}};function Le(e,t,a){return{...e,id:`${e.name}-${String(Date.now())}-${String(Math.random())}`,name:e.name,size:e.size,type:e.type,progress:0,status:t,errors:a}}function qe(e,t){return e.name===t.name&&e.size===t.size&&e.type===t.type}class be extends Error{constructor(t){super(t),this.name=this.constructor.name}}class xe extends be{isRetryable=!0}class qa extends be{isRetryable=!1}function Je({adapter:e,autoUpload:t=!0,maxConcurrent:a=3,maxFiles:n,metadata:i,onFileUploadComplete:s,onFileUploadError:m,onAllFileUploadsComplete:c}){const[o]=W.useState(()=>new Map),[l,v]=W.useState([]),x=l.filter(d=>d.status!=="error");l.length&&!l.some(d=>d.status==="uploading")&&c?.();const _=d=>d.filter(u=>!x.some(g=>qe(g,u))),U=d=>d.filter(u=>{if(u.id)return!1;const h=l.filter(T=>qe(T,u));return h.length?!h.some(O=>O.errors?.includes("FILE_EXISTS")):!1}),I=d=>{const u=d.map(g=>({file:g,errors:["FILE_EXISTS"]}));u.length&&y(u)},D=d=>{if(n===void 0)return d;const u=x.length,g=n-u;let h,T;if(g<=0)h=[],T=d;else if(d.length>g)h=d.slice(0,g),T=d.slice(g);else return d;const O=T.map(Ae=>({file:Ae,errors:["TOO_MANY_FILES"]}));return y(O),h},R=d=>{const u=d.map(g=>Le(g,"pending"));return v(g=>[...g,...u]),u},f=d=>{t&&d.forEach(u=>{Ee(u)})},p=d=>{const u=_(d),g=U(d);I(g);const h=D(u),T=R(h);return f(T),T},y=d=>{const u=d.map(({file:g,errors:h})=>Le(g,"error",h));v(g=>[...g,...u])},b=(d,u)=>{v(g=>g.map(h=>h.id===d?{...h,progress:u}:h))},C=(d,u,g)=>{v(h=>h.map(T=>T.id===d?{...T,status:u,errors:g?[...T.errors||[],g]:T.errors}:T))},A=async d=>{const u=x.find(g=>g.id===d);u&&await Ee(u)},Ee=async d=>{const u=d.id,g=new AbortController;o.set(u,g),C(d.id,"uploading");try{const h=await e.upload({file:d,fileId:u,metadata:i,signal:g.signal,onProgress:T=>{b(u,T)}});C(u,"completed"),b(u,100),s?.(u,h)}catch(h){const T=h instanceof Error?h.message:"Upload failed";let O="interrupted";h instanceof be&&(O=h.isRetryable?"interrupted":"error"),C(u,O,T),m?.(u,T)}finally{o.delete(u)}},tt=async()=>{const d=l.filter(u=>u.status==="pending");for(let u=0;u<d.length;u+=a){const g=d.slice(u,u+a);await Promise.allSettled(g.map(h=>A(h.id)))}},Ue=async d=>{o.get(d)?.abort(),o.delete(d),e.cancel&&await e.cancel(d),C(d,"cancelled")},je=async d=>{C(d,"pending"),b(d,0),await A(d)},ge=d=>{o.get(d)?.abort(),o.delete(d),v(u=>u.filter(g=>g.id!==d))},De=async d=>{e.delete&&await e.delete(d),ge(d)};return{files:l,acceptedFiles:x,addFiles:p,addRejectedFiles:y,removeFile:ge,deleteFile:De,uploadFile:A,uploadAll:tt,cancelUpload:Ue,retryUpload:je,clearFiles:()=>{o.forEach(d=>d.abort()),o.clear(),v([])},getProps:d=>({files:l,acceptedFiles:x,onFileAccept:j=>{const le=p(j.files);d?.onFilesAdded?.(le)},onFileReject:j=>{y(j.files.map(le=>({file:le.file,errors:le.errors})))},onFileRemove:j=>{ge(j),d?.onFileRemoved?.(j)},onFileDelete:async j=>{await De(j),d?.onFileDeleted?.(j)},onFileCancel:async j=>{await Ue(j),d?.onFileUploadCanceled?.(j)},onFileRetry:async j=>{await je(j),d?.onFileUploadRetried?.(j)}})}}const Qe=({adapter:e,autoUpload:t=!0,maxConcurrent:a=3,metadata:n,onFileUploadComplete:i,onFileUploadError:s,onFilesAdded:m,onFileRemoved:c,onFileDeleted:o,onFileUploadCanceled:l,onFileUploadRetried:v,onAllFileUploadsComplete:x,..._})=>{const{getProps:U}=Je({adapter:e,autoUpload:t,maxConcurrent:a,maxFiles:_.maxFiles,metadata:n,onFileUploadComplete:i,onFileUploadError:s,onAllFileUploadsComplete:x}),I=U({onFilesAdded:m,onFileRemoved:c,onFileDeleted:o,onFileUploadCanceled:l,onFileUploadRetried:v});return r.jsx(Te,{...I,..._})};Qe.__docgenInfo={description:"Design system File Upload component (with state management)",methods:[],displayName:"DsFileUpload",props:{adapter:{required:!0,tsType:{name:"FileUploadAdapter"},description:"Upload adapter implementation"},autoUpload:{required:!1,tsType:{name:"boolean"},description:`Whether to start upload automatically when files are added
@default true`,defaultValue:{value:"true",computed:!1}},maxConcurrent:{required:!1,tsType:{name:"number"},description:"Maximum number of concurrent uploads",defaultValue:{value:"3",computed:!1}},metadata:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"Additional metadata to attach to uploads"},onFileUploadComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string, result: FileUploadResult) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"},{type:{name:"FileUploadResult"},name:"result"}],return:{name:"void"}}},description:"Called when a file upload completes successfully"},onFileUploadError:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string, error: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"},{type:{name:"string"},name:"error"}],return:{name:"void"}}},description:"Called when a file upload fails"},onFilesAdded:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:"Called when files are added (before upload)"},onFileRemoved:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Called when a file is removed"},onFileDeleted:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Called when a file is deleted"},onFileUploadCanceled:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Called when a file upload is canceled"},onFileUploadRetried:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Called when a file upload is retried"},onAllFileUploadsComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when all file uploads are complete"}},composes:["Omit"]};const{expect:q,userEvent:oe,waitFor:z,within:Ie}=__STORYBOOK_MODULE_TEST__,V=(e={})=>{const{name:t="test-document.pdf",type:a="application/pdf",size:n=1024*100}=e,i=new File(["test content"],t,{type:a});return Object.defineProperty(i,"size",{value:n,writable:!1}),i},et=e=>async({canvasElement:t})=>{const a=V(),n=t.querySelector('input[type="file"]');if(!n)throw new Error("File input not found");switch(await oe.upload(n,a),e){case"normal":await za(t);break;case"interrupted":await Ma(t);break;case"error":await Na(t);break}};async function za(e){const t=Ie(e);await z(()=>{const n=t.queryByText(/Uploading/i);return q(n).toBeInTheDocument()},{timeout:1e3}),await z(()=>{const n=t.queryByText(/complete/i);return q(n).toBeInTheDocument()},{timeout:5e3});const a=t.getByLabelText(/delete/i);await oe.click(a),await z(()=>{const n=t.queryByText("test-document.pdf");return q(n).not.toBeInTheDocument()})}async function Ma(e){const t=Ie(e);await z(()=>{const i=t.queryByText(/Uploading/i);return q(i).toBeInTheDocument()},{timeout:1e3}),await z(()=>{const i=t.queryByText(/interrupted|lost|failed/i);return q(i).toBeInTheDocument()},{timeout:5e3});const a=t.getByLabelText(/retry/i);await oe.click(a),await z(()=>{const i=t.queryByText(/complete/i);return q(i).toBeInTheDocument()},{timeout:5e3});const n=t.getByLabelText(/delete/i);await oe.click(n)}async function Na(e){const t=Ie(e);await z(()=>{const n=t.queryByText(/failed|error|unsupported/i);return q(n).toBeInTheDocument()},{timeout:2e3});const a=t.getByLabelText(/remove/i);await oe.click(a),await z(()=>{const n=t.queryByText("test-document.pdf");return q(n).not.toBeInTheDocument()})}class H{interruptedRuns=-1;uploads=new Map;config;constructor(t={}){this.config=t}async upload(t){const{scenario:a="success",duration:n=2e3,steps:i=20,interruptAt:s=30,errorMessage:m="Upload failed",delay:c=0}=this.config,{file:o,fileId:l,onProgress:v,signal:x}=t;this.uploads.set(l,{cancelled:!1});const _=()=>x?.aborted||this.uploads.get(l)?.cancelled?(this.uploads.delete(l),!0):!1;if(c>0&&(await this.sleep(c),_()))throw new xe("Upload cancelled");if(a==="error")throw new qa(m||"Unsupported file type");const U=n/i;for(let I=0;I<=i;I++){if(_())throw new xe("Upload cancelled");await this.sleep(U);const D=Math.min(I/i*100,100);if(v?.(D),a==="interrupted"&&D>=s&&this.interruptedRuns%2)throw this.uploads.delete(l),this.interruptedRuns++,new xe(m||"Network connection lost")}return this.interruptedRuns++,this.uploads.delete(l),{url:`mock://uploaded/${o.name}`,metadata:{fileName:o.name,fileSize:o.size,fileType:o.type,uploadedAt:new Date().toISOString()}}}cancel(t){const a=this.uploads.get(t);a&&(a.cancelled=!0)}sleep(t){return new Promise(a=>setTimeout(a,t))}}const B={normal:()=>new H({scenario:"success",duration:2e3+Math.random()*1e3,steps:20}),fast:()=>new H({scenario:"success",duration:800,steps:10}),slow:()=>new H({scenario:"success",duration:1e4,steps:30}),interrupted:(e=30)=>new H({scenario:"interrupted",duration:1e3,steps:20,interruptAt:e,errorMessage:"Network connection lost"}),error:e=>new H({scenario:"error",errorMessage:e||"Unsupported file type"}),custom:e=>new H(e)},Oa=`import type {
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
`;function ze(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...Oe(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t.h1,{id:"file-upload",children:"File Upload"}),`
`,r.jsxs(t.p,{children:["To use the file upload component you need to provide an adapter that implements the ",r.jsx(t.code,{children:"FileUploadAdapter"}),` interface.
See sample adapter below implemented using the native `,r.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",rel:"nofollow",children:r.jsx(t.code,{children:"XMLHttpRequest"})})," API but you can also use fetch, axios etc."]}),`
`,r.jsx(t.hr,{}),`
`,r.jsxs(t.p,{children:["This is a minimal interactive story showing how to write and use a simple upload adapter. Click on ",r.jsx(t.strong,{children:"Show code"})," to see the usage example."]}),`
`,r.jsx(vt,{children:r.jsx(wt,{name:"Default"})}),`
`,r.jsx(t.h2,{id:"example-fileuploadadapter",children:"Example FileUploadAdapter"}),`
`,r.jsx(_t,{code:Oa,language:"ts",dark:!0})]})}function $a(e={}){const{wrapper:t}={...Oe(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(ze,{...e})}):ze(e)}const{expect:F,fn:Z,userEvent:M,waitFor:N,within:re}=__STORYBOOK_MODULE_TEST__,ji={title:"Design System/FileUpload",component:Qe,parameters:{layout:"centered",docs:{page:$a,source:{code:`
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
);`}}},argTypes:{errorText:{control:"text"},dropzoneText:{control:"text"},triggerText:{control:"text"},hideProgress:{control:"boolean"},hideInfoText:{control:"boolean"},disableDrop:{control:"boolean"},maxFiles:{control:"number"},accept:{control:"object"},disabled:{control:"boolean"},compact:{control:"boolean"}}},K={args:{adapter:B.normal(),style:{width:"500px"},onFilesAdded:e=>{console.log("Files added:",e.map(t=>t.name))},onFileUploadComplete:(e,t)=>{console.log("File upload complete:",e,t.url)},onFileUploadError:(e,t)=>{console.error("File upload failed:",e,t)},onFileRemoved:e=>{console.log("File removed:",e)},onFileDeleted:e=>{console.log("File deleted:",e)},onFileUploadCanceled:e=>{console.log("File upload canceled:",e)},onFileUploadRetried:e=>{console.log("File upload retried:",e)},onAllFileUploadsComplete:()=>{console.log("All file uploads complete!")}}},J={args:{adapter:B.fast(),autoUpload:!1,hideProgress:!1,style:{width:"500px"},onFilesAdded:Z(),onFileUploadComplete:Z(),onAllFileUploadsComplete:Z()},render:function(t){const{getProps:a,files:n,uploadAll:i,clearFiles:s}=Je({adapter:t.adapter,autoUpload:t.autoUpload,onFileUploadComplete:t.onFileUploadComplete,onAllFileUploadsComplete:t.onAllFileUploadsComplete}),m=n.some(o=>o.status==="uploading"),c=n.length>0;return r.jsxs("div",{style:{width:"500px"},children:[r.jsx(Te,{...a({onFilesAdded:t.onFilesAdded}),...t}),c&&r.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[r.jsx($,{design:"v1.2",size:"small",onClick:()=>i(),disabled:m,children:m?"Uploading...":"Upload All"}),r.jsx($,{design:"v1.2",variant:"ghost",size:"small",onClick:()=>s(),disabled:m,children:"Clear All"})]})]})},play:async({canvasElement:e,args:t})=>{const a=re(e),n=V({name:"document-1.pdf"}),i=V({name:"document-2.pdf"}),s=e.querySelector('input[type="file"]');if(!s)throw new Error("File input not found");await M.upload(s,[n,i]),await N(async()=>{await F(a.getByText(n.name)).toBeInTheDocument(),await F(a.getByText(i.name)).toBeInTheDocument()});const m=a.getByRole("button",{name:/upload all/i});await M.click(m),await N(async()=>{const c=a.queryAllByText(/complete/i);await F(c.length).toBe(2),await F(t.onFileUploadComplete).toHaveBeenCalledWith(F.any(String),F.objectContaining({metadata:F.objectContaining({fileName:n.name})})),await F(t.onFileUploadComplete).toHaveBeenCalledWith(F.any(String),F.objectContaining({metadata:F.objectContaining({fileName:i.name})})),await F(t.onAllFileUploadsComplete).toHaveBeenCalled()},{timeout:1e4})}},pe={args:{adapter:B.fast(),compact:!0,maxFiles:1,accept:["application/pdf","text/csv",{mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",extensions:[".xlsx"]}],dropzoneText:"Drag and drop your document here or",triggerText:"Choose document",style:{width:"400px"},onFilesAdded:Z()}},Q={args:{adapter:B.normal(),disabled:!0,style:{width:"500px"}}},ee={args:{adapter:B.error("Unsupported file type"),style:{width:"500px"}},play:et("error")},te={args:{adapter:B.interrupted(30),style:{width:"500px"}},play:et("interrupted")},ce={args:{adapter:B.fast(),maxFiles:1,style:{width:"400px"}},play:async({canvasElement:e})=>{const t=re(e),a=V({name:"first-file.pdf"}),n=V({name:"second-file.pdf"}),i=e.querySelector('input[type="file"]');if(!i)throw new Error("File input not found");await M.upload(i,a),await N(async()=>{await F(t.getByText("first-file.pdf")).toBeInTheDocument(),await F(t.queryByText(/complete/i)).toBeInTheDocument()},{timeout:3e3}),await M.upload(i,n),await N(async()=>{await F(t.getByText("second-file.pdf")).toBeInTheDocument();const s=t.queryAllByText(/too many files|maximum|limit/i);return F(s.length).toBeGreaterThan(0)})}},ae={args:{adapter:B.fast(),style:{width:"500px"},onFilesAdded:Z()},play:async({canvasElement:e})=>{const t=re(e),a=V({name:"duplicate-test.pdf"}),n=e.querySelector('input[type="file"]');if(!n)throw new Error("File input not found");await M.upload(n,a),await N(async()=>{await F(t.getByText("duplicate-test.pdf")).toBeInTheDocument(),await F(t.queryByText(/complete/i)).toBeInTheDocument()},{timeout:3e3}),await M.upload(n,a),await N(async()=>{const i=t.queryAllByText("duplicate-test.pdf");await F(i.length).toBe(2);const s=t.queryAllByText(/already exists|file exists|duplicate/i);return F(s.length).toBeGreaterThan(0)})}},ie={args:{adapter:B.fast(),hideInfoText:!0,style:{width:"500px"}},play:async({canvasElement:e})=>{const t=re(e);await F(t.getByRole("button",{name:/select file/i})).toBeInTheDocument(),await F(t.queryByText(/only.*files/i)).not.toBeInTheDocument()}},ne={args:{adapter:B.slow(),style:{width:"500px"},onFileUploadCanceled:Z()},play:async({canvasElement:e})=>{const t=re(e),a=V({name:"cancel-test.pdf"}),n=e.querySelector('input[type="file"]');if(!n)throw new Error("File input not found");await M.upload(n,a),await N(async()=>{await F(t.getByText("cancel-test.pdf")).toBeInTheDocument(),await F(t.queryByText(/uploading/i)).toBeInTheDocument()},{timeout:1e3}),await new Promise(s=>setTimeout(s,500));const i=t.getByLabelText(/cancel/i);await M.click(i),await N(async()=>{await F(t.queryByText(/cancelled|canceled/i)).toBeInTheDocument()},{timeout:2e3})}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`Default auto-upload behavior
Files automatically upload when dropped or selected`,...K.parameters?.docs?.description}}};J.parameters={...J.parameters,docs:{...J.parameters?.docs,source:{originalSource:`{
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
}`,...J.parameters?.docs?.source},description:{story:`Manual upload mode - files must be uploaded manually
Good for review workflows or batch operations
Advance use case which demonstrates use of (base) FileUpload with useFileUpload`,...J.parameters?.docs?.description}}};pe.parameters={...pe.parameters,docs:{...pe.parameters?.docs,source:{originalSource:`{
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
}`,...pe.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.normal(),
    disabled: true,
    style: {
      width: '500px'
    }
  }
}`,...Q.parameters?.docs?.source},description:{story:"Disabled state",...Q.parameters?.docs?.description}}};ee.parameters={...ee.parameters,docs:{...ee.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.error('Unsupported file type'),
    style: {
      width: '500px'
    }
  },
  play: createTestPlayFunction('error')
}`,...ee.parameters?.docs?.source},description:{story:"Upload error scenario - file fails validation immediately",...ee.parameters?.docs?.description}}};te.parameters={...te.parameters,docs:{...te.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.interrupted(30),
    style: {
      width: '500px'
    }
  },
  play: createTestPlayFunction('interrupted')
}`,...te.parameters?.docs?.source},description:{story:`Upload interrupted scenario - network fails mid-upload
Demonstrates retry functionality`,...te.parameters?.docs?.description}}};ce.parameters={...ce.parameters,docs:{...ce.parameters?.docs,source:{originalSource:`{
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
}`,...ce.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ae.parameters?.docs?.source},description:{story:`Duplicate files scenario - uploading the same file twice
Demonstrates duplicate detection and FILE_EXISTS error`,...ae.parameters?.docs?.description}}};ie.parameters={...ie.parameters,docs:{...ie.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source},description:{story:"Hidden info text - hides the file type and size limit information",...ie.parameters?.docs?.description}}};ne.parameters={...ne.parameters,docs:{...ne.parameters?.docs,source:{originalSource:`{
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
}`,...ne.parameters?.docs?.source},description:{story:`Cancel upload scenario - cancel an ongoing upload
Demonstrates upload cancellation functionality`,...ne.parameters?.docs?.description}}};const Di=["Default","Manual","Compact","Disabled","UploadError","UploadInterrupted","MaxFiles","DuplicateFiles","HiddenInfoText","CancelUpload"];export{ne as CancelUpload,pe as Compact,K as Default,Q as Disabled,ae as DuplicateFiles,ie as HiddenInfoText,J as Manual,ce as MaxFiles,ee as UploadError,te as UploadInterrupted,Di as __namedExportsOrder,ji as default};
