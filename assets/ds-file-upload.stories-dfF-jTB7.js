import{j as r}from"./jsx-runtime-u17CrQMm.js";import{D as N}from"./ds-button-CtaFLJyF.js";import{c as xe}from"./index-CI5Pb9HH.js";import{D as P}from"./ds-icon-DIuKbzlJ.js";import{D as ge}from"./ds-typography-BbSFr2sw.js";import{D as re}from"./ds-tooltip-DSmxXcvB.js";import{P as at,a as it,b as nt}from"./progress-track-CLiNP0PA.js";import{r as $}from"./iframe-B1gKZKuc.js";import{c as qe}from"./create-split-props-u5h9OPvL.js";import{c as ot,a as ce,u as rt,b as lt}from"./use-locale-context-DyIBVjNs.js";import{Q as me,d as st,L as dt,r as pt,E as ct,C as Ae,H as G,w as pe,j as v,v as mt,aW as ut,g as ft,aX as gt,o as yt,p as Me,P as xt,U as ht}from"./index-1kKNXetD.js";import{f as Ft}from"./index-DJ4NnFZ2.js";import{u as Oe}from"./use-field-context-DQSvRXOx.js";import{useMDXComponents as Ne}from"./index-Dd4jhHqa.js";import{f as vt,h as wt,i as _t}from"./blocks-BB4Xm9B6.js";import"./ds-button-legacy-Cer8cJ74.js";import"./ds-button-new-BBUcOz9i.js";import"./index-HtJxfs_E.js";import"./index-BhARklHb.js";import"./index-CrebszRC.js";import"./index-DOIMq0Xz.js";import"./index-CcgyKgzY.js";import"./index-BBSc6elT.js";import"./index-C2B67tLG.js";import"./index-BQu11pnq.js";import"./floating-ui.dom-BjS6HMTz.js";import"./index-D5ZZ1tXY.js";import"./preload-helper-PPVm8Dsz.js";import"./index-CziOPQvZ.js";var Tt=e=>typeof e.getAsEntry=="function"?e.getAsEntry():typeof e.webkitGetAsEntry=="function"?e.webkitGetAsEntry():null,$e=e=>e.isDirectory,he=e=>e.isFile,Fe=(e,t)=>(Object.defineProperty(e,"relativePath",{value:t?`${t}/${e.name}`:e.name}),e),bt=(e,t)=>Promise.all(Array.from(e).filter(a=>a.kind==="file").map(a=>{const n=Tt(a);if(!n)return null;if($e(n)&&t)return We(n.createReader(),`${n.name}`);if(he(n)&&typeof a.getAsFile=="function"){const i=a.getAsFile();return Promise.resolve(i?Fe(i,""):null)}if(he(n))return new Promise(i=>{n.file(d=>{i(Fe(d,""))})})}).filter(a=>a)),We=(e,t="")=>new Promise(a=>{const n=[],i=()=>{e.readEntries(d=>{if(d.length===0){a(Promise.all(n).then(m=>m.flat()));return}const c=d.map(m=>{if(!m)return null;if($e(m))return We(m.createReader(),`${t}${m.name}`);if(he(m))return new Promise(o=>{m.file(l=>{o(Fe(l,t))})})}).filter(m=>m);n.push(Promise.all(c)),i()})};i()});function It(e){return e==="audio/*"||e==="video/*"||e==="image/*"||e==="text/*"||/\w+\/[-+.\w]+/g.test(e)}function Et(e){return/^.*\.[\w]+$/.test(e)}var Ce=e=>It(e)||Et(e);function Ut(e){if(e!=null)return typeof e=="string"?e:Array.isArray(e)?e.filter(Ce).join(","):Object.entries(e).reduce((t,[a,n])=>[...t,a,...n],[]).filter(Ce).join(",")}var le=(e,t)=>e.name===t.name&&e.size===t.size&&e.type===t.type,Z=e=>e!=null;function jt(e,t,a){if(Z(e.size))if(Z(t)&&Z(a)){if(e.size>a)return[!1,"FILE_TOO_LARGE"];if(e.size<t)return[!1,"FILE_TOO_SMALL"]}else{if(Z(t)&&e.size<t)return[!1,"FILE_TOO_SMALL"];if(Z(a)&&e.size>a)return[!1,"FILE_TOO_LARGE"]}return[!0,null]}var Dt="3g2_video/3gpp2[3gp,3gpp_video/3gpp[3mf_model/3mf[7z_application/x-7z-compressed[aac_audio/aac[ac_application/pkix-attr-cert[adp_audio/adpcm[adts_audio/aac[ai_application/postscript[aml_application/automationml-aml+xml[amlx_application/automationml-amlx+zip[amr_audio/amr[apk_application/vnd.android.package-archive[apng_image/apng[appcache,manifest_text/cache-manifest[appinstaller_application/appinstaller[appx_application/appx[appxbundle_application/appxbundle[asc_application/pgp-keys[atom_application/atom+xml[atomcat_application/atomcat+xml[atomdeleted_application/atomdeleted+xml[atomsvc_application/atomsvc+xml[au,snd_audio/basic[avi_video/x-msvideo[avci_image/avci[avcs_image/avcs[avif_image/avif[aw_application/applixware[bdoc_application/bdoc[bin,bpk,buffer,deb,deploy,dist,distz,dll,dmg,dms,dump,elc,exe,img,iso,lrf,mar,msi,msm,msp,pkg,so_application/octet-stream[bmp,dib_image/bmp[btf,btif_image/prs.btif[bz2_application/x-bzip2[c_text/x-c[ccxml_application/ccxml+xml[cdfx_application/cdfx+xml[cdmia_application/cdmi-capability[cdmic_application/cdmi-container[cdmid_application/cdmi-domain[cdmio_application/cdmi-object[cdmiq_application/cdmi-queue[cer_application/pkix-cert[cgm_image/cgm[cjs_application/node[class_application/java-vm[coffee,litcoffee_text/coffeescript[conf,def,in,ini,list,log,text,txt_text/plain[cpp,cxx,cc_text/x-c++src[cpl_application/cpl+xml[cpt_application/mac-compactpro[crl_application/pkix-crl[css_text/css[csv_text/csv[cu_application/cu-seeme[cwl_application/cwl[cww_application/prs.cww[davmount_application/davmount+xml[dbk_application/docbook+xml[doc_application/msword[docx_application/vnd.openxmlformats-officedocument.wordprocessingml.document[dsc_text/prs.lines.tag[dssc_application/dssc+der[dtd_application/xml-dtd[dwd_application/atsc-dwd+xml[ear,jar,war_application/java-archive[ecma_application/ecmascript[emf_image/emf[eml,mime_message/rfc822[emma_application/emma+xml[emotionml_application/emotionml+xml[eot_application/vnd.ms-fontobject[eps,ps_application/postscript[epub_application/epub+zip[exi_application/exi[exp_application/express[exr_image/aces[ez_application/andrew-inset[fdf_application/fdf[fdt_application/fdt+xml[fits_image/fits[flac_audio/flac[flv_video/x-flv[g3_image/g3fax[geojson_application/geo+json[gif_image/gif[glb_model/gltf-binary[gltf_model/gltf+json[gml_application/gml+xml[go_text/x-go[gpx_application/gpx+xml[gz_application/gzip[h_text/x-h[h261_video/h261[h263_video/h263[h264_video/h264[heic_image/heic[heics_image/heic-sequence[heif_image/heif[heifs_image/heif-sequence[htm,html,shtml_text/html[ico_image/x-icon[icns_image/x-icns[ics,ifb_text/calendar[iges,igs_model/iges[ink,inkml_application/inkml+xml[ipa_application/octet-stream[java_text/x-java-source[jp2,jpg2_image/jp2[jpeg,jpe,jpg_image/jpeg[jpf,jpx_image/jpx[jpm,jpgm_image/jpm[jpgv_video/jpeg[jph_image/jph[js,mjs_text/javascript[json_application/json[json5_application/json5[jsonld_application/ld+json[jsx_text/jsx[jxl_image/jxl[jxr_image/jxr[ktx_image/ktx[ktx2_image/ktx2[less_text/less[m1v,m2v,mpe,mpeg,mpg_video/mpeg[m4a_audio/mp4[m4v_video/x-m4v[md,markdown_text/markdown[mid,midi,kar,rmi_audio/midi[mkv_video/x-matroska[mp2,mp2a,mp3,mpga,m3a,m2a_audio/mpeg[mp4,mp4v,mpg4_video/mp4[mp4a_audio/mp4[mp4s,m4p_application/mp4[odp_application/vnd.oasis.opendocument.presentation[oda_application/oda[ods_application/vnd.oasis.opendocument.spreadsheet[odt_application/vnd.oasis.opendocument.text[oga,ogg,opus,spx_audio/ogg[ogv_video/ogg[ogx_application/ogg[otf_font/otf[p12,pfx_application/x-pkcs12[pdf_application/pdf[pem_application/x-pem-file[php_text/x-php[png_image/png[ppt_application/vnd.ms-powerpoint[pptx_application/vnd.openxmlformats-officedocument.presentationml.presentation[pskcxml_application/pskc+xml[psd_image/vnd.adobe.photoshop[py_text/x-python[qt,mov_video/quicktime[rar_application/vnd.rar[rdf_application/rdf+xml[rtf_text/rtf[sass_text/x-sass[scss_text/x-scss[sgm,sgml_text/sgml[sh_application/x-sh[svg,svgz_image/svg+xml[swf_application/x-shockwave-flash[tar_application/x-tar[tif,tiff_image/tiff[toml_application/toml[ts_video/mp2t[tsx_text/tsx[tsv_text/tab-separated-values[ttc_font/collection[ttf_font/ttf[vtt_text/vtt[wasm_application/wasm[wav_audio/wav[weba_audio/webm[webm_video/webm[webmanifest_application/manifest+json[webp_image/webp[wma_audio/x-ms-wma[wmv_video/x-ms-wmv[woff_font/woff[woff2_font/woff2[xls_application/vnd.ms-excel[xlsx_application/vnd.openxmlformats-officedocument.spreadsheetml.sheet[xml_application/xml[xz_application/x-xz[yaml,yml_text/yaml[zip_application/zip",At=new Map(Dt.split("[").flatMap(e=>{const[t,a]=e.split("_");return t.split(",").map(n=>[n,a])}));function Ct(e){const t=e.split(".").pop();return t&&At.get(t)||null}function Pt(e,t){if(e&&t){const a=Array.isArray(t)?t:typeof t=="string"?t.split(","):[];if(a.length===0)return!0;const n=e.name||"",i=(e.type||Ct(n)||"").toLowerCase(),d=i.replace(/\/.*$/,"");return a.some(c=>{const m=c.trim().toLowerCase();return m.charAt(0)==="."?n.toLowerCase().endsWith(m):m.endsWith("/*")?d===m.replace(/\/.*$/,""):i===m})}return!0}function kt(e,t){const a=e.type==="application/x-moz-file"||Pt(e,t);return[a,a?null:"FILE_INVALID_TYPE"]}const[Rt,we]=ot({name:"FileUploadContext",hookName:"useFileUploadContext",providerName:"<FileUploadProvider />"}),Bt=qe(),Ve=$.forwardRef((e,t)=>{const[a,n]=Bt(e,["disableClick"]),i=we(),d=me(i.getDropzoneProps(a),n);return r.jsx(ce.div,{...d,ref:t})});Ve.displayName="FileUploadDropzone";const He=$.forwardRef((e,t)=>{const a=we(),n=me(a.getHiddenInputProps(),e),i=Oe();return r.jsx(ce.input,{"aria-describedby":i?.ariaDescribedby,...n,ref:t})});He.displayName="FileUploadHiddenInput";var St=yt("file-upload").parts("root","dropzone","item","itemDeleteTrigger","itemGroup","itemName","itemPreview","itemPreviewImage","itemSizeText","label","trigger","clearTrigger"),C=St.build(),Ge=e=>e.ids?.root??`file:${e.id}`,Xe=e=>e.ids?.dropzone??`file:${e.id}:dropzone`,ve=e=>e.ids?.hiddenInput??`file:${e.id}:input`,Lt=e=>e.ids?.trigger??`file:${e.id}:trigger`,zt=e=>e.ids?.label??`file:${e.id}:label`,qt=(e,t)=>e.ids?.item?.(t)??`file:${e.id}:item:${t}`,Mt=(e,t)=>e.ids?.itemName?.(t)??`file:${e.id}:item-name:${t}`,Ot=(e,t)=>e.ids?.itemSizeText?.(t)??`file:${e.id}:item-size:${t}`,Nt=(e,t)=>e.ids?.itemPreview?.(t)??`file:${e.id}:item-preview:${t}`,$t=(e,t)=>e.ids?.itemDeleteTrigger?.(t)??`file:${e.id}:item-delete:${t}`,Y=e=>gt(`${e.name}-${e.size}`),Wt=e=>e.getById(Ge(e)),Pe=e=>e.getById(ve(e)),Vt=e=>e.getById(Xe(e));function ke(e){const t=pe(e);return e.dataTransfer?e.dataTransfer.types.some(a=>a==="Files"||a==="application/x-moz-file"):!!t&&"files"in t}function Ht(e,t,a){const{prop:n,computed:i}=e;return!i("multiple")&&t>1?!1:!i("multiple")&&t+a.length===2?!0:!(t+a.length>n("maxFiles"))}function Re(e,t,a=[],n=[]){const{prop:i,computed:d}=e,c=[],m=[],o={acceptedFiles:a,rejectedFiles:n};return t.forEach(l=>{const[w,x]=kt(l,d("acceptAttr")),[b,A]=jt(l,i("minFileSize"),i("maxFileSize")),U=i("validate")?.(l,o),j=U?U.length===0:!0;if(w&&b&&j)c.push(l);else{const k=[x,A];j||k.push(...U??[]),m.push({file:l,errors:k.filter(Boolean)})}}),Ht(e,c.length,a)||(c.forEach(l=>{m.push({file:l,errors:["TOO_MANY_FILES"]})}),c.splice(0)),{acceptedFiles:c,rejectedFiles:m}}function Gt(e,t){const a=ft(e);try{if("DataTransfer"in a){const n=new a.DataTransfer;t.forEach(i=>{n.items.add(i)}),e.files=n.files}}catch{}}var B="accepted",Xt="button, a[href], input:not([type='file']), select, textarea, [tabindex], [contenteditable]";function Be(e,t){if(!e||e.getAttribute("type")==="file")return!1;const a=e.closest(Xt);return a!=t&&G(t,a)}function Zt(e,t){const{state:a,send:n,prop:i,computed:d,scope:c,context:m}=e,o=!!i("disabled"),l=!!i("readOnly"),w=!!i("required"),x=i("allowDrop"),b=i("translations"),A=a.matches("dragging"),U=a.matches("focused")&&!o,j=m.get("acceptedFiles"),k=i("maxFiles");return{dragging:A,focused:U,disabled:o,readOnly:l,transforming:m.get("transforming"),maxFilesReached:j.length>=k,remainingFiles:Math.max(0,k-j.length),openFilePicker(){o||l||n({type:"OPEN"})},deleteFile(f,p=B){o||l||n({type:"FILE.DELETE",file:f,itemType:p})},acceptedFiles:j,rejectedFiles:m.get("rejectedFiles"),setFiles(f){o||l||n({type:"FILES.SET",files:f,count:f.length})},clearRejectedFiles(){o||l||n({type:"REJECTED_FILES.CLEAR"})},clearFiles(){o||l||n({type:"FILES.CLEAR"})},getFileSize(f){return Ft(f.size,i("locale"))},createFileUrl(f,p){const g=c.getWin(),T=g.URL.createObjectURL(f);return p(T),()=>g.URL.revokeObjectURL(T)},setClipboardFiles(f){if(o||l)return!1;const g=Array.from(f?.items??[]).reduce((T,E)=>{if(E.kind!=="file")return T;const V=E.getAsFile();return V?[...T,V]:T},[]);return g.length?(n({type:"FILE.SELECT",files:g}),!0):!1},getRootProps(){return t.element({...C.root.attrs,dir:i("dir"),id:Ge(c),"data-disabled":v(o),"data-readonly":v(l),"data-dragging":v(A)})},getDropzoneProps(f={}){return t.element({...C.dropzone.attrs,dir:i("dir"),id:Xe(c),tabIndex:o||l||f.disableClick?void 0:0,role:f.disableClick?"application":"button","aria-label":b.dropzone,"aria-disabled":o||l||void 0,"data-invalid":v(i("invalid")),"data-disabled":v(o),"data-readonly":v(l),"data-dragging":v(A),onKeyDown(p){if(o||l||p.defaultPrevented)return;const g=pe(p);G(p.currentTarget,g)&&(Be(g,p.currentTarget)||f.disableClick||p.key!=="Enter"&&p.key!==" "||n({type:"DROPZONE.CLICK",src:"keydown"}))},onClick(p){if(o||l||p.defaultPrevented||f.disableClick)return;const g=pe(p);G(p.currentTarget,g)&&(Be(g,p.currentTarget)||(p.currentTarget.localName==="label"&&p.preventDefault(),n({type:"DROPZONE.CLICK"})))},onDragOver(p){if(o||l||!x)return;p.preventDefault(),p.stopPropagation();try{p.dataTransfer.dropEffect="copy"}catch{}if(!ke(p))return;const T=p.dataTransfer.items.length;n({type:"DROPZONE.DRAG_OVER",count:T})},onDragLeave(p){o||l||x&&(G(p.currentTarget,p.relatedTarget)||n({type:"DROPZONE.DRAG_LEAVE"}))},onDrop(p){o||l||(x&&(p.preventDefault(),p.stopPropagation()),!ke(p))||bt(p.dataTransfer.items,i("directory")).then(T=>{n({type:"DROPZONE.DROP",files:ut(T)})})},onFocus(){o||l||n({type:"DROPZONE.FOCUS"})},onBlur(){o||l||n({type:"DROPZONE.BLUR"})}})},getTriggerProps(){return t.button({...C.trigger.attrs,dir:i("dir"),id:Lt(c),disabled:o||l,"data-disabled":v(o),"data-readonly":v(l),"data-invalid":v(i("invalid")),type:"button",onClick(f){o||l||(G(Vt(c),f.currentTarget)&&f.stopPropagation(),n({type:"OPEN"}))}})},getHiddenInputProps(){return t.input({id:ve(c),tabIndex:-1,disabled:o||l,type:"file",required:i("required"),capture:i("capture"),name:i("name"),accept:d("acceptAttr"),webkitdirectory:i("directory")?"":void 0,multiple:d("multiple")||i("maxFiles")>1,"aria-hidden":!0,onClick(f){f.stopPropagation(),f.currentTarget.value=""},onInput(f){if(o||l)return;const{files:p}=f.currentTarget;n({type:"FILE.SELECT",files:p?Array.from(p):[]})},style:mt})},getItemGroupProps(f={}){const{type:p=B}=f;return t.element({...C.itemGroup.attrs,dir:i("dir"),"data-disabled":v(o),"data-type":p})},getItemProps(f){const{file:p,type:g=B}=f;return t.element({...C.item.attrs,dir:i("dir"),id:qt(c,Y(p)),"data-disabled":v(o),"data-type":g})},getItemNameProps(f){const{file:p,type:g=B}=f;return t.element({...C.itemName.attrs,dir:i("dir"),id:Mt(c,Y(p)),"data-disabled":v(o),"data-type":g})},getItemSizeTextProps(f){const{file:p,type:g=B}=f;return t.element({...C.itemSizeText.attrs,dir:i("dir"),id:Ot(c,Y(p)),"data-disabled":v(o),"data-type":g})},getItemPreviewProps(f){const{file:p,type:g=B}=f;return t.element({...C.itemPreview.attrs,dir:i("dir"),id:Nt(c,Y(p)),"data-disabled":v(o),"data-type":g})},getItemPreviewImageProps(f){const{file:p,url:g,type:T=B}=f;if(!p.type.startsWith("image/"))throw new Error("Preview Image is only supported for image files");return t.img({...C.itemPreviewImage.attrs,alt:b.itemPreview?.(p),src:g,"data-disabled":v(o),"data-type":T})},getItemDeleteTriggerProps(f){const{file:p,type:g=B}=f;return t.button({...C.itemDeleteTrigger.attrs,dir:i("dir"),id:$t(c,Y(p)),type:"button",disabled:o||l,"data-disabled":v(o),"data-readonly":v(l),"data-type":g,"aria-label":b.deleteFile?.(p),onClick(){o||l||n({type:"FILE.DELETE",file:p,itemType:g})}})},getLabelProps(){return t.label({...C.label.attrs,dir:i("dir"),id:zt(c),htmlFor:ve(c),"data-disabled":v(o),"data-required":v(w)})},getClearTriggerProps(){return t.button({...C.clearTrigger.attrs,dir:i("dir"),type:"button",disabled:o||l,hidden:j.length===0,"data-disabled":v(o),"data-readonly":v(l),onClick(f){f.defaultPrevented||o||l||n({type:"FILES.CLEAR"})}})}}}var Yt=st({props({props:e}){return{minFileSize:0,maxFileSize:Number.POSITIVE_INFINITY,maxFiles:1,allowDrop:!0,preventDocumentDrop:!0,defaultAcceptedFiles:[],...e,translations:{dropzone:"dropzone",itemPreview:t=>`preview of ${t.name}`,deleteFile:t=>`delete file ${t.name}`,...e.translations}}},initialState(){return"idle"},context({prop:e,bindable:t,getContext:a}){return{acceptedFiles:t(()=>({defaultValue:e("defaultAcceptedFiles"),value:e("acceptedFiles"),isEqual:(n,i)=>n.length===i?.length&&n.every((d,c)=>le(d,i[c])),hash(n){return n.map(i=>`${i.name}-${i.size}`).join(",")},onChange(n){const i=a();e("onFileAccept")?.({files:n}),e("onFileChange")?.({acceptedFiles:n,rejectedFiles:i.get("rejectedFiles")})}})),rejectedFiles:t(()=>({defaultValue:[],isEqual:(n,i)=>n.length===i?.length&&n.every((d,c)=>le(d.file,i[c].file)),onChange(n){const i=a();e("onFileReject")?.({files:n}),e("onFileChange")?.({acceptedFiles:i.get("acceptedFiles"),rejectedFiles:n})}})),transforming:t(()=>({defaultValue:!1}))}},computed:{acceptAttr:({prop:e})=>Ut(e("accept")),multiple:({prop:e})=>e("maxFiles")>1},watch({track:e,context:t,action:a}){e([()=>t.hash("acceptedFiles")],()=>{a(["syncInputElement"])})},on:{"FILES.SET":{actions:["setFiles"]},"FILE.SELECT":{actions:["setEventFiles"]},"FILE.DELETE":{actions:["removeFile"]},"FILES.CLEAR":{actions:["clearFiles"]},"REJECTED_FILES.CLEAR":{actions:["clearRejectedFiles"]}},effects:["preventDocumentDrop"],states:{idle:{on:{OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.FOCUS":{target:"focused"},"DROPZONE.DRAG_OVER":{target:"dragging"}}},focused:{on:{"DROPZONE.BLUR":{target:"idle"},OPEN:{actions:["openFilePicker"]},"DROPZONE.CLICK":{actions:["openFilePicker"]},"DROPZONE.DRAG_OVER":{target:"dragging"}}},dragging:{on:{"DROPZONE.DROP":{target:"idle",actions:["setEventFiles"]},"DROPZONE.DRAG_LEAVE":{target:"idle"}}}},implementations:{effects:{preventDocumentDrop({prop:e,scope:t}){if(!e("preventDocumentDrop")||!e("allowDrop")||e("disabled"))return;const a=t.getDoc(),n=d=>{d?.preventDefault()},i=d=>{G(Wt(t),pe(d))||d.preventDefault()};return ct(Ae(a,"dragover",n,!1),Ae(a,"drop",i,!1))}},actions:{syncInputElement({scope:e,context:t}){queueMicrotask(()=>{const a=Pe(e);if(!a)return;Gt(a,t.get("acceptedFiles"));const n=e.getWin();a.dispatchEvent(new n.Event("change",{bubbles:!0}))})},openFilePicker({scope:e}){pt(()=>{Pe(e)?.click()})},setFiles(e){const{computed:t,context:a,event:n}=e,{acceptedFiles:i,rejectedFiles:d}=Re(e,n.files);a.set("acceptedFiles",t("multiple")?i:i.length>0?[i[0]]:[]),a.set("rejectedFiles",d)},setEventFiles(e){const{computed:t,context:a,event:n,prop:i}=e,d=a.get("acceptedFiles"),c=a.get("rejectedFiles"),{acceptedFiles:m,rejectedFiles:o}=Re(e,n.files,d,c),l=x=>{if(t("multiple")){a.set("acceptedFiles",b=>[...b,...x]),a.set("rejectedFiles",o);return}if(x.length){a.set("acceptedFiles",[x[0]]),a.set("rejectedFiles",o);return}o.length&&(a.set("acceptedFiles",a.get("acceptedFiles")),a.set("rejectedFiles",o))},w=i("transformFiles");w?(a.set("transforming",!0),w(m).then(l).catch(x=>{dt(`[zag-js/file-upload] error transforming files
${x}`)}).finally(()=>{a.set("transforming",!1)})):l(m)},removeFile({context:e,event:t}){if(t.itemType==="rejected"){const a=e.get("rejectedFiles").filter(n=>!le(n.file,t.file));e.set("rejectedFiles",a)}else{const a=e.get("acceptedFiles").filter(n=>!le(n,t.file));e.set("acceptedFiles",a)}},clearRejectedFiles({context:e}){e.set("rejectedFiles",[])},clearFiles({context:e}){e.set("acceptedFiles",[]),e.set("rejectedFiles",[])}}}});Me()(["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","dir","directory","disabled","getRootNode","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","readOnly","required","transformFiles","translations","validate"]);Me()(["file","type"]);const Kt=e=>{const t=$.useId(),{getRootNode:a}=rt(),{dir:n,locale:i}=lt(),d=Oe(),c={id:t,ids:{label:d?.ids.label,hiddenInput:d?.ids.control},dir:n,disabled:d?.disabled,locale:i,required:d?.required,invalid:d?.invalid,getRootNode:a,...e},m=xt(Yt,c);return Zt(m,ht)},Jt=qe(),Ze=$.forwardRef((e,t)=>{const[a,n]=Jt(e,["accept","acceptedFiles","allowDrop","capture","defaultAcceptedFiles","directory","disabled","id","ids","invalid","locale","maxFiles","maxFileSize","minFileSize","name","onFileAccept","onFileChange","onFileReject","preventDocumentDrop","readOnly","required","translations","transformFiles","validate"]),i=Kt(a),d=me(i.getRootProps(),n);return r.jsx(Rt,{value:i,children:r.jsx(ce.div,{...d,ref:t})})});Ze.displayName="FileUploadRoot";const Ye=$.forwardRef((e,t)=>{const a=we(),n=me(a.getTriggerProps(),e);return r.jsx(ce.button,{...n,ref:t})});Ye.displayName="FileUploadTrigger";const Qt={FILE_TOO_LARGE:"File size exceeds the maximum limit",FILE_INVALID_TYPE:"File type is not allowed",TOO_MANY_FILES:"Too many files selected",FILE_TOO_SMALL:"File size is too small",FILE_INVALID:"File is invalid",FILE_EXISTS:"File already exists"};function ea(e){return Qt[e]||e||"File validation failed"}const ta="_fileItem_hpxvh_1",aa="_fileItemContent_hpxvh_5",ia="_fileItemError_hpxvh_22",na="_progressRange_hpxvh_25",oa="_fileItemCompleted_hpxvh_28",ra="_fileItemUploading_hpxvh_31",la="_fileItemInterrupted_hpxvh_34",sa="_filePreview_hpxvh_38",da="_fileInfo_hpxvh_42",pa="_fileName_hpxvh_50",ca="_progressBar_hpxvh_72",ma="_progressTrack_hpxvh_77",ua="_progressText_hpxvh_92",fa="_completedText_hpxvh_105",ga="_interruptedText_hpxvh_118",ya="_errorMessage_hpxvh_131",I={fileItem:ta,fileItemContent:aa,fileItemError:ia,progressRange:na,fileItemCompleted:oa,fileItemUploading:ra,fileItemInterrupted:la,filePreview:sa,fileInfo:da,fileName:pa,progressBar:ca,progressTrack:ma,progressText:ua,completedText:fa,interruptedText:ga,errorMessage:ya},Ke=({id:e,name:t,progress:a,hideProgress:n=!1,status:i,errors:d,onCancel:c,onRetry:m,onRemove:o,onDelete:l})=>{const w=xe(I.fileItemContent,{[I.fileItemError]:i==="error",[I.fileItemCompleted]:i==="completed",[I.fileItemUploading]:i==="uploading",[I.fileItemInterrupted]:i==="interrupted"||i==="cancelled"});return r.jsxs("div",{className:I.fileItem,children:[r.jsxs("div",{className:w,children:[r.jsx(P,{className:I.filePreview,icon:"upload_file",size:"tiny"}),r.jsxs("div",{className:I.fileInfo,children:[r.jsx("div",{className:I.fileName,title:t,children:t}),r.jsx(at,{value:i==="error"?1:a,className:I.progressBar,children:r.jsx(it,{className:I.progressTrack,children:r.jsx(nt,{className:I.progressRange})})})]}),(i==="interrupted"||i==="cancelled")&&m&&r.jsx(re,{content:"Retry",children:r.jsx(N,{type:"button",design:"v1.2",buttonType:"tertiary","aria-label":`Retry ${t} upload`,onClick:()=>m(e),children:r.jsx(P,{icon:"refresh",size:"small"})})}),(i==="pending"||i==="error"||i==="interrupted")&&r.jsx(re,{content:"Remove",children:r.jsx(N,{type:"button",design:"v1.2",buttonType:"tertiary","aria-label":`Remove ${t} upload`,onClick:()=>o?.(e),children:r.jsx(P,{icon:"do_not_disturb_on",size:"small"})})}),i==="uploading"&&c&&r.jsx(re,{content:"Cancel",children:r.jsx(N,{type:"button",design:"v1.2",buttonType:"tertiary","aria-label":`Cancel ${t} upload`,onClick:()=>c(e),children:r.jsx(P,{icon:"close",size:"small"})})}),i==="completed"&&r.jsx(re,{content:"Delete",children:r.jsx(N,{type:"button",design:"v1.2",buttonType:"tertiary","aria-label":`Delete ${t}`,onClick:()=>l?.(e),children:r.jsx(P,{icon:"delete",size:"small"})})})]}),i==="completed"&&r.jsxs("div",{className:I.completedText,children:[r.jsx(P,{icon:"check_circle",size:"tiny",filled:!0}),"Upload complete"]}),i==="interrupted"&&r.jsxs("div",{className:I.interruptedText,children:[r.jsx(P,{icon:"info",size:"tiny",filled:!0}),"Upload interrupted"]}),i==="cancelled"&&r.jsxs("div",{className:I.interruptedText,children:[r.jsx(P,{icon:"info",size:"tiny",filled:!0}),"Upload cancelled"]}),i==="error"&&d?.length&&d.map(x=>r.jsxs("div",{className:I.errorMessage,children:[r.jsx(P,{icon:"cancel",size:"tiny",filled:!0}),ea(x)]},x)),!n&&i==="uploading"&&r.jsxs("span",{className:I.progressText,children:["Uploading...(",Math.round(a),"%)"]})]})};Ke.__docgenInfo={description:`Individual file upload item component
Displays a single file with its upload status, progress, and action buttons`,methods:[],displayName:"FileUploadItem",props:{id:{required:!0,tsType:{name:"string"},description:"Unique identifier for the file"},name:{required:!0,tsType:{name:"string"},description:"Name of the file"},progress:{required:!0,tsType:{name:"number"},description:"Upload progress percentage (0-100)"},status:{required:!0,tsType:{name:"union",raw:"'pending' | 'uploading' | 'interrupted' | 'completed' | 'error' | 'cancelled'",elements:[{name:"literal",value:"'pending'"},{name:"literal",value:"'uploading'"},{name:"literal",value:"'interrupted'"},{name:"literal",value:"'completed'"},{name:"literal",value:"'error'"},{name:"literal",value:"'cancelled'"}]},description:"Current status of the file upload"},errors:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"Array of error messages if any"},hideProgress:{required:!1,tsType:{name:"boolean"},description:"Whether to hide progress bar",defaultValue:{value:"false",computed:!1}},onCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when cancel button is clicked"},onRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when retry button is clicked"},onRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when remove button is clicked (for pending/error states)"},onDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when delete button is clicked (for completed state)"}}};const xa=["application/pdf","text/csv","application/zip","application/x-zip-compressed"],ha=25e6,Fa=5,va={"image/png":[".png"],"image/gif":[".gif"],"image/jpeg":[".jpg",".jpeg"],"image/svg+xml":[".svg"],"image/webp":[".webp"],"image/avif":[".avif"],"image/heic":[".heic",".heif"],"image/bmp":[".bmp"],"application/pdf":[".pdf"],"application/zip":[".zip"],"application/json":[".json"],"application/xml":[".xml"],"application/msword":[".doc"],"application/vnd.openxmlformats-officedocument.wordprocessingml.document":[".docx"],"application/vnd.ms-excel":[".xls"],"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":[".xlsx"],"application/vnd.ms-powerpoint":[".ppt"],"application/vnd.openxmlformats-officedocument.presentationml.presentation":[".pptx"],"application/rtf":[".rtf"],"application/x-rar":[".rar"],"application/x-7z-compressed":[".7z"],"application/x-tar":[".tar"],"application/vnd.microsoft.portable-executable":[".exe",".dll"],"text/css":[".css"],"text/csv":[".csv"],"text/html":[".html",".htm"],"text/markdown":[".md",".markdown"],"text/plain":[".txt"],"font/ttf":[".ttf"],"font/otf":[".otf"],"font/woff":[".woff"],"font/woff2":[".woff2"],"font/eot":[".eot"],"font/svg":[".svg"],"video/mp4":[".mp4"],"video/webm":[".webm"],"video/ogg":[".ogv"],"video/quicktime":[".mov"],"video/x-msvideo":[".avi"],"audio/mpeg":[".mp3"],"audio/ogg":[".ogg",".oga"],"audio/wav":[".wav"],"audio/webm":[".weba"],"audio/aac":[".aac"],"audio/flac":[".flac"],"audio/x-m4a":[".m4a"],"image/*":[".png",".jpg",".jpeg",".gif",".webp",".svg",".bmp",".avif",".heic",".heif"],"audio/*":[".mp3",".wav",".ogg",".oga",".m4a",".flac",".aac",".weba"],"video/*":[".mp4",".webm",".ogv",".mov",".avi"],"text/*":[".txt",".html",".htm",".css",".csv",".md",".markdown"],"application/*":[".pdf",".zip",".json",".xml",".doc",".docx",".xls",".xlsx",".ppt",".pptx",".rtf",".rar",".7z",".tar"],"font/*":[".ttf",".otf",".woff",".woff2",".eot"]};function wa(e){return e.flatMap(t=>typeof t=="string"?va[t]??[]:t.extensions)}function _a(e){return e.map(t=>typeof t=="string"?t:t.mimeType)}function Ta(e){if(e===0)return"0 B";const t=1e3,a=["B","KB","MB","GB","TB","PB"],n=Math.floor(Math.log(e)/Math.log(t));return`${(e/Math.pow(t,n)).toFixed(2)} ${String(a[n])}`}function ba(e,t,a){const n=wa(e),d=[...new Set(n)].map(o=>o.toUpperCase()).join(", "),c=Ta(t),m=[];return d&&m.push(`Only ${d} files`),t<1/0&&m.push(`File size ${c} max`),a===1?m.push("Only 1 file"):a>1&&m.push(`Up to ${String(a)} files`),m.join(". ")+"."}const Ia="_fileUploadRoot_baybr_1",Ea="_dropzone_baybr_7",Ua="_dropzoneCompact_baybr_19",ja="_dropzoneIcon_baybr_23",Da="_dropzoneText_baybr_26",Aa="_fileList_baybr_57",Ca="_infoText_baybr_67",Pa="_errorText_baybr_72",S={fileUploadRoot:Ia,dropzone:Ea,dropzoneCompact:Ua,dropzoneIcon:ja,dropzoneText:Da,fileList:Aa,infoText:Ca,errorText:Pa},_e=({style:e={},className:t,files:a,acceptedFiles:n,errorText:i,dropzoneText:d="Drag and drop files here or ",triggerText:c="Select file...",hideProgress:m=!1,disableDrop:o=!1,onFileAccept:l,onFileReject:w,onFileRemove:x,onFileDelete:b,onFileCancel:A,onFileRetry:U,accept:j=xa,maxFiles:k=Fa,maxFileSize:f=ha,compact:p=!1,disabled:g=!1})=>{const T=ba(j,f,k);return r.jsxs(Ze,{style:e,className:xe(S.fileUploadRoot,t),maxFiles:k,maxFileSize:f,accept:_a(j),disabled:g,allowDrop:!o,acceptedFiles:n,onFileAccept:l,onFileReject:w,children:[r.jsxs(Ve,{className:xe(S.dropzone,{[S.dropzoneCompact]:p}),children:[r.jsx(P,{icon:"upload",className:S.dropzoneIcon}),r.jsx(ge,{className:S.dropzoneText,variant:"body-xs-reg",children:d}),r.jsx(Ye,{asChild:!0,children:r.jsx(N,{design:"v1.2",variant:"ghost",size:"small",disabled:g,children:c})})]}),T&&!g&&!i&&r.jsx(ge,{className:S.infoText,variant:"body-xs-reg",children:T}),i&&r.jsxs(ge,{className:S.errorText,variant:"body-xs-reg",children:[r.jsx(P,{icon:"error",size:"tiny"}),i]}),!!a?.length&&r.jsx("div",{className:S.fileList,children:a.map(E=>r.jsx(Ke,{id:E.id,name:E.name,progress:E.progress,hideProgress:m,status:E.status,errors:E.errors,onRemove:x,onDelete:b,onCancel:A,onRetry:U},E.id))}),r.jsx(He,{})]})};_e.__docgenInfo={description:`Design system base File Upload component
Used in conjunction with the useFileUpload hook`,methods:[],displayName:"FileUpload",props:{errorText:{required:!1,tsType:{name:"string"},description:"Error text displayed when validation fails"},dropzoneText:{required:!1,tsType:{name:"string"},description:"Text displayed in the dropzone area",defaultValue:{value:"'Drag and drop files here or '",computed:!1}},triggerText:{required:!1,tsType:{name:"string"},description:"Text for the upload trigger button",defaultValue:{value:"'Select file...'",computed:!1}},hideProgress:{required:!1,tsType:{name:"boolean"},description:`Whether to hide upload progress
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
]`,computed:!1}},files:{required:!1,tsType:{name:"Array",elements:[{name:"UploadedFile"}],raw:"UploadedFile[]"},description:"File states to display (managed externally)"},onFileRemove:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when files are removed"},onFileDelete:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when files are deleted"},onFileCancel:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when files upload is canceled"},onFileRetry:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Callback when files upload is retried"},acceptedFiles:{required:!1,tsType:{name:"Array",elements:[{name:"File"}],raw:"File[]"},description:"Controlled accepted files"},disabled:{required:!1,tsType:{name:"boolean"},description:"Whether the file upload is disabled",defaultValue:{value:"false",computed:!1}},compact:{required:!1,tsType:{name:"boolean"},description:"Whether the file upload layout is compact (inline)",defaultValue:{value:"false",computed:!1}}}};function Se(e,t,a){return{...e,id:`${e.name}-${String(Date.now())}-${String(Math.random())}`,name:e.name,size:e.size,type:e.type,progress:0,status:t,errors:a}}function Le(e,t){return e.name===t.name&&e.size===t.size&&e.type===t.type}class Te extends Error{constructor(t){super(t),this.name=this.constructor.name}}class ye extends Te{isRetryable=!0}class ka extends Te{isRetryable=!1}function Je({adapter:e,autoUpload:t=!0,maxConcurrent:a=3,maxFiles:n,metadata:i,onFileUploadComplete:d,onFileUploadError:c,onAllFileUploadsComplete:m}){const[o]=$.useState(()=>new Map),[l,w]=$.useState([]),x=l.filter(s=>s.status!=="error");l.length&&!l.some(s=>s.status==="uploading")&&m?.();const b=s=>s.filter(u=>!x.some(y=>Le(y,u))),A=s=>s.filter(u=>{if(u.id)return!1;const h=l.filter(_=>Le(_,u));return h.length?!h.some(O=>O.errors?.includes("FILE_EXISTS")):!1}),U=s=>{const u=s.map(y=>({file:y,errors:["FILE_EXISTS"]}));u.length&&g(u)},j=s=>{if(n===void 0)return s;const u=x.length,y=n-u;let h,_;if(y<=0)h=[],_=s;else if(s.length>y)h=s.slice(0,y),_=s.slice(y);else return s;const O=_.map(De=>({file:De,errors:["TOO_MANY_FILES"]}));return g(O),h},k=s=>{const u=s.map(y=>Se(y,"pending"));return w(y=>[...y,...u]),u},f=s=>{t&&s.forEach(u=>{Ie(u)})},p=s=>{const u=b(s),y=A(s);U(y);const h=j(u),_=k(h);return f(_),_},g=s=>{const u=s.map(({file:y,errors:h})=>Se(y,"error",h));w(y=>[...y,...u])},T=(s,u)=>{w(y=>y.map(h=>h.id===s?{...h,progress:u}:h))},E=(s,u,y)=>{w(h=>h.map(_=>_.id===s?{..._,status:u,errors:y?[..._.errors||[],y]:_.errors}:_))},V=async s=>{const u=x.find(y=>y.id===s);u&&await Ie(u)},Ie=async s=>{const u=s.id,y=new AbortController;o.set(u,y),E(s.id,"uploading");try{const h=await e.upload({file:s,fileId:u,metadata:i,signal:y.signal,onProgress:_=>{T(u,_)}});E(u,"completed"),T(u,100),d?.(u,h)}catch(h){const _=h instanceof Error?h.message:"Upload failed";let O="interrupted";h instanceof Te&&(O=h.isRetryable?"interrupted":"error"),E(u,O,_),c?.(u,_)}finally{o.delete(u)}},tt=async()=>{const s=l.filter(u=>u.status==="pending");for(let u=0;u<s.length;u+=a){const y=s.slice(u,u+a);await Promise.allSettled(y.map(h=>V(h.id)))}},Ee=async s=>{o.get(s)?.abort(),o.delete(s),e.cancel&&await e.cancel(s),E(s,"cancelled")},Ue=async s=>{E(s,"pending"),T(s,0),await V(s)},fe=s=>{o.get(s)?.abort(),o.delete(s),w(u=>u.filter(y=>y.id!==s))},je=async s=>{e.delete&&await e.delete(s),fe(s)};return{files:l,acceptedFiles:x,addFiles:p,addRejectedFiles:g,removeFile:fe,deleteFile:je,uploadFile:V,uploadAll:tt,cancelUpload:Ee,retryUpload:Ue,clearFiles:()=>{o.forEach(s=>s.abort()),o.clear(),w([])},getProps:s=>({files:l,acceptedFiles:x,onFileAccept:D=>{const oe=p(D.files);s?.onFilesAdded?.(oe)},onFileReject:D=>{g(D.files.map(oe=>({file:oe.file,errors:oe.errors})))},onFileRemove:D=>{fe(D),s?.onFileRemoved?.(D)},onFileDelete:async D=>{await je(D),s?.onFileDeleted?.(D)},onFileCancel:async D=>{await Ee(D),s?.onFileUploadCanceled?.(D)},onFileRetry:async D=>{await Ue(D),s?.onFileUploadRetried?.(D)}})}}const Qe=({adapter:e,autoUpload:t=!0,maxConcurrent:a=3,metadata:n,onFileUploadComplete:i,onFileUploadError:d,onFilesAdded:c,onFileRemoved:m,onFileDeleted:o,onFileUploadCanceled:l,onFileUploadRetried:w,onAllFileUploadsComplete:x,...b})=>{const{getProps:A}=Je({adapter:e,autoUpload:t,maxConcurrent:a,maxFiles:b.maxFiles,metadata:n,onFileUploadComplete:i,onFileUploadError:d,onAllFileUploadsComplete:x}),U=A({onFilesAdded:c,onFileRemoved:m,onFileDeleted:o,onFileUploadCanceled:l,onFileUploadRetried:w});return r.jsx(_e,{...U,...b})};Qe.__docgenInfo={description:"Design system File Upload component (with state management)",methods:[],displayName:"DsFileUpload",props:{adapter:{required:!0,tsType:{name:"FileUploadAdapter"},description:"Upload adapter implementation"},autoUpload:{required:!1,tsType:{name:"boolean"},description:`Whether to start upload automatically when files are added
@default true`,defaultValue:{value:"true",computed:!1}},maxConcurrent:{required:!1,tsType:{name:"number"},description:"Maximum number of concurrent uploads",defaultValue:{value:"3",computed:!1}},metadata:{required:!1,tsType:{name:"Record",elements:[{name:"string"},{name:"unknown"}],raw:"Record<string, unknown>"},description:"Additional metadata to attach to uploads"},onFileUploadComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string, result: FileUploadResult) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"},{type:{name:"FileUploadResult"},name:"result"}],return:{name:"void"}}},description:"Called when a file upload completes successfully"},onFileUploadError:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string, error: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"},{type:{name:"string"},name:"error"}],return:{name:"void"}}},description:"Called when a file upload fails"},onFilesAdded:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"File"}],raw:"File[]"},name:"files"}],return:{name:"void"}}},description:"Called when files are added (before upload)"},onFileRemoved:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Called when a file is removed"},onFileDeleted:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Called when a file is deleted"},onFileUploadCanceled:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Called when a file upload is canceled"},onFileUploadRetried:{required:!1,tsType:{name:"signature",type:"function",raw:"(fileId: string) => void",signature:{arguments:[{type:{name:"string"},name:"fileId"}],return:{name:"void"}}},description:"Called when a file upload is retried"},onAllFileUploadsComplete:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:"Called when all file uploads are complete"}},composes:["Omit"]};const{expect:L,userEvent:ne,waitFor:z,within:be}=__STORYBOOK_MODULE_TEST__,W=(e={})=>{const{name:t="test-document.pdf",type:a="application/pdf",size:n=1024*100}=e,i=new File(["test content"],t,{type:a});return Object.defineProperty(i,"size",{value:n,writable:!1}),i},et=e=>async({canvasElement:t})=>{const a=W(),n=t.querySelector('input[type="file"]');if(!n)throw new Error("File input not found");switch(await ne.upload(n,a),e){case"normal":await Ra(t);break;case"interrupted":await Ba(t);break;case"error":await Sa(t);break}};async function Ra(e){const t=be(e);await z(()=>{const n=t.queryByText(/Uploading/i);return L(n).toBeInTheDocument()},{timeout:1e3}),await z(()=>{const n=t.queryByText(/complete/i);return L(n).toBeInTheDocument()},{timeout:5e3});const a=t.getByLabelText(/delete/i);await ne.click(a),await z(()=>{const n=t.queryByText("test-document.pdf");return L(n).not.toBeInTheDocument()})}async function Ba(e){const t=be(e);await z(()=>{const i=t.queryByText(/Uploading/i);return L(i).toBeInTheDocument()},{timeout:1e3}),await z(()=>{const i=t.queryByText(/interrupted|lost|failed/i);return L(i).toBeInTheDocument()},{timeout:5e3});const a=t.getByLabelText(/retry/i);await ne.click(a),await z(()=>{const i=t.queryByText(/complete/i);return L(i).toBeInTheDocument()},{timeout:5e3});const n=t.getByLabelText(/delete/i);await ne.click(n)}async function Sa(e){const t=be(e);await z(()=>{const n=t.queryByText(/failed|error|unsupported/i);return L(n).toBeInTheDocument()},{timeout:2e3});const a=t.getByLabelText(/remove/i);await ne.click(a),await z(()=>{const n=t.queryByText("test-document.pdf");return L(n).not.toBeInTheDocument()})}class H{interruptedRuns=-1;uploads=new Map;config;constructor(t={}){this.config=t}async upload(t){const{scenario:a="success",duration:n=2e3,steps:i=20,interruptAt:d=30,errorMessage:c="Upload failed",delay:m=0}=this.config,{file:o,fileId:l,onProgress:w,signal:x}=t;this.uploads.set(l,{cancelled:!1});const b=()=>x?.aborted||this.uploads.get(l)?.cancelled?(this.uploads.delete(l),!0):!1;if(m>0&&(await this.sleep(m),b()))throw new ye("Upload cancelled");if(a==="error")throw new ka(c||"Unsupported file type");const A=n/i;for(let U=0;U<=i;U++){if(b())throw new ye("Upload cancelled");await this.sleep(A);const j=Math.min(U/i*100,100);if(w?.(j),a==="interrupted"&&j>=d&&this.interruptedRuns%2)throw this.uploads.delete(l),this.interruptedRuns++,new ye(c||"Network connection lost")}return this.interruptedRuns++,this.uploads.delete(l),{url:`mock://uploaded/${o.name}`,metadata:{fileName:o.name,fileSize:o.size,fileType:o.type,uploadedAt:new Date().toISOString()}}}cancel(t){const a=this.uploads.get(t);a&&(a.cancelled=!0)}sleep(t){return new Promise(a=>setTimeout(a,t))}}const R={normal:()=>new H({scenario:"success",duration:2e3+Math.random()*1e3,steps:20}),fast:()=>new H({scenario:"success",duration:800,steps:10}),slow:()=>new H({scenario:"success",duration:1e4,steps:30}),interrupted:(e=30)=>new H({scenario:"interrupted",duration:1e3,steps:20,interruptAt:e,errorMessage:"Network connection lost"}),error:e=>new H({scenario:"error",errorMessage:e||"Unsupported file type"}),custom:e=>new H(e)},La=`import type {
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
`;function ze(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",hr:"hr",p:"p",strong:"strong",...Ne(),...e.components};return r.jsxs(r.Fragment,{children:[r.jsx(t.h1,{id:"file-upload",children:"File Upload"}),`
`,r.jsxs(t.p,{children:["To use the file upload component you need to provide an adapter that implements the ",r.jsx(t.code,{children:"FileUploadAdapter"}),` interface.
See sample adapter below implemented using the native `,r.jsx(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest",rel:"nofollow",children:r.jsx(t.code,{children:"XMLHttpRequest"})})," API but you can also use fetch, axios etc."]}),`
`,r.jsx(t.hr,{}),`
`,r.jsxs(t.p,{children:["This is a minimal interactive story showing how to write and use a simple upload adapter. Click on ",r.jsx(t.strong,{children:"Show code"})," to see the usage example."]}),`
`,r.jsx(vt,{children:r.jsx(wt,{name:"Default"})}),`
`,r.jsx(t.h2,{id:"example-fileuploadadapter",children:"Example FileUploadAdapter"}),`
`,r.jsx(_t,{code:La,language:"ts",dark:!0})]})}function za(e={}){const{wrapper:t}={...Ne(),...e.components};return t?r.jsx(t,{...e,children:r.jsx(ze,{...e})}):ze(e)}const{expect:F,fn:X,userEvent:q,waitFor:M,within:ue}=__STORYBOOK_MODULE_TEST__,yi={title:"Design System/FileUpload",component:Qe,parameters:{layout:"centered",docs:{page:za,source:{code:`
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
);`}}},tags:["autodocs"],argTypes:{errorText:{control:"text"},dropzoneText:{control:"text"},triggerText:{control:"text"},hideProgress:{control:"boolean"},disableDrop:{control:"boolean"},maxFiles:{control:"number"},accept:{control:"object"},disabled:{control:"boolean"},compact:{control:"boolean"}}},K={args:{adapter:R.normal(),style:{width:"500px"},onFilesAdded:e=>{console.log("Files added:",e.map(t=>t.name))},onFileUploadComplete:(e,t)=>{console.log("File upload complete:",e,t.url)},onFileUploadError:(e,t)=>{console.error("File upload failed:",e,t)},onFileRemoved:e=>{console.log("File removed:",e)},onFileDeleted:e=>{console.log("File deleted:",e)},onFileUploadCanceled:e=>{console.log("File upload canceled:",e)},onFileUploadRetried:e=>{console.log("File upload retried:",e)},onAllFileUploadsComplete:()=>{console.log("All file uploads complete!")}}},J={args:{adapter:R.fast(),autoUpload:!1,hideProgress:!1,style:{width:"500px"},onFilesAdded:X(),onFileUploadComplete:X(),onAllFileUploadsComplete:X()},render:function(t){const{getProps:a,files:n,uploadAll:i,clearFiles:d}=Je({adapter:t.adapter,autoUpload:t.autoUpload,onFileUploadComplete:t.onFileUploadComplete,onAllFileUploadsComplete:t.onAllFileUploadsComplete}),c=n.some(o=>o.status==="uploading"),m=n.length>0;return r.jsxs("div",{style:{width:"500px"},children:[r.jsx(_e,{...a({onFilesAdded:t.onFilesAdded}),...t}),m&&r.jsxs("div",{style:{marginTop:"16px",display:"flex",gap:"8px"},children:[r.jsx(N,{design:"v1.2",size:"small",onClick:()=>i(),disabled:c,children:c?"Uploading...":"Upload All"}),r.jsx(N,{design:"v1.2",variant:"ghost",size:"small",onClick:()=>d(),disabled:c,children:"Clear All"})]})]})},play:async({canvasElement:e,args:t})=>{const a=ue(e),n=W({name:"document-1.pdf"}),i=W({name:"document-2.pdf"}),d=e.querySelector('input[type="file"]');if(!d)throw new Error("File input not found");await q.upload(d,[n,i]),await M(async()=>{await F(a.getByText(n.name)).toBeInTheDocument(),await F(a.getByText(i.name)).toBeInTheDocument()});const c=a.getByRole("button",{name:/upload all/i});await q.click(c),await M(async()=>{const m=a.queryAllByText(/complete/i);await F(m.length).toBe(2),await F(t.onFileUploadComplete).toHaveBeenCalledWith(F.any(String),F.objectContaining({metadata:F.objectContaining({fileName:n.name})})),await F(t.onFileUploadComplete).toHaveBeenCalledWith(F.any(String),F.objectContaining({metadata:F.objectContaining({fileName:i.name})})),await F(t.onAllFileUploadsComplete).toHaveBeenCalled()},{timeout:1e4})}},se={args:{adapter:R.fast(),compact:!0,maxFiles:1,accept:["application/pdf","text/csv",{mimeType:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",extensions:[".xlsx"]}],dropzoneText:"Drag and drop your document here or",triggerText:"Choose document",style:{width:"400px"},onFilesAdded:X()}},Q={args:{adapter:R.normal(),disabled:!0,style:{width:"500px"}}},ee={args:{adapter:R.error("Unsupported file type"),style:{width:"500px"}},play:et("error")},te={args:{adapter:R.interrupted(30),style:{width:"500px"}},play:et("interrupted")},de={args:{adapter:R.fast(),maxFiles:1,style:{width:"400px"}},play:async({canvasElement:e})=>{const t=ue(e),a=W({name:"first-file.pdf"}),n=W({name:"second-file.pdf"}),i=e.querySelector('input[type="file"]');if(!i)throw new Error("File input not found");await q.upload(i,a),await M(async()=>{await F(t.getByText("first-file.pdf")).toBeInTheDocument(),await F(t.queryByText(/complete/i)).toBeInTheDocument()},{timeout:3e3}),await q.upload(i,n),await M(async()=>{await F(t.getByText("second-file.pdf")).toBeInTheDocument();const d=t.queryAllByText(/too many files|maximum|limit/i);return F(d.length).toBeGreaterThan(0)})}},ae={args:{adapter:R.fast(),style:{width:"500px"},onFilesAdded:X()},play:async({canvasElement:e})=>{const t=ue(e),a=W({name:"duplicate-test.pdf"}),n=e.querySelector('input[type="file"]');if(!n)throw new Error("File input not found");await q.upload(n,a),await M(async()=>{await F(t.getByText("duplicate-test.pdf")).toBeInTheDocument(),await F(t.queryByText(/complete/i)).toBeInTheDocument()},{timeout:3e3}),await q.upload(n,a),await M(async()=>{const i=t.queryAllByText("duplicate-test.pdf");await F(i.length).toBe(2);const d=t.queryAllByText(/already exists|file exists|duplicate/i);return F(d.length).toBeGreaterThan(0)})}},ie={args:{adapter:R.slow(),style:{width:"500px"},onFileUploadCanceled:X()},play:async({canvasElement:e})=>{const t=ue(e),a=W({name:"cancel-test.pdf"}),n=e.querySelector('input[type="file"]');if(!n)throw new Error("File input not found");await q.upload(n,a),await M(async()=>{await F(t.getByText("cancel-test.pdf")).toBeInTheDocument(),await F(t.queryByText(/uploading/i)).toBeInTheDocument()},{timeout:1e3}),await new Promise(d=>setTimeout(d,500));const i=t.getByLabelText(/cancel/i);await q.click(i),await M(async()=>{await F(t.queryByText(/cancelled|canceled/i)).toBeInTheDocument()},{timeout:2e3})}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
Advance use case which demonstrates use of (base) FileUpload with useFileUpload`,...J.parameters?.docs?.description}}};se.parameters={...se.parameters,docs:{...se.parameters?.docs,source:{originalSource:`{
  args: {
    adapter: MockAdapterPresets.fast(),
    compact: true,
    maxFiles: 1,
    accept: ['application/pdf', 'text/csv', {
      // cspell:disable-next-line
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
}`,...se.parameters?.docs?.source}}};Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
Demonstrates retry functionality`,...te.parameters?.docs?.description}}};de.parameters={...de.parameters,docs:{...de.parameters?.docs,source:{originalSource:`{
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
}`,...de.parameters?.docs?.source}}};ae.parameters={...ae.parameters,docs:{...ae.parameters?.docs,source:{originalSource:`{
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
}`,...ie.parameters?.docs?.source},description:{story:`Cancel upload scenario - cancel an ongoing upload
Demonstrates upload cancellation functionality`,...ie.parameters?.docs?.description}}};const xi=["Default","Manual","Compact","Disabled","UploadError","UploadInterrupted","MaxFiles","DuplicateFiles","CancelUpload"];export{ie as CancelUpload,se as Compact,K as Default,Q as Disabled,ae as DuplicateFiles,J as Manual,de as MaxFiles,ee as UploadError,te as UploadInterrupted,xi as __namedExportsOrder,yi as default};
