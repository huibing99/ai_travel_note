import{u as fe,a as xe,r as _,j as ye,L as he,c as E,o as c,d as x,e as o,f as i,w as m,M as G,H as we,I as $,F as B,m as Y,l as D,t as N,E as g,N as be,h as k,O as _e,P as ke,D as F,Q as Ce,R as Ie,S as ze,K as Te,s as Ve,i as Ee}from"./index-016ca33f.js";import{h as Se}from"./html2canvas.esm-85f1a6b6.js";import{_ as $e}from"./_plugin-vue_export-helper-c27b6911.js";const De={class:"dashboard-container"},Me={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Ue={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ae={class:"back-icon"},Le={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},Re={class:"dashboard-card left-column",style:{padding:"30px"}},Pe={class:"form-section"},Be={class:"form-section"},Ne={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},Fe={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},He={key:0,class:"image-preview"},Oe=["src","alt"],Ge=["onClick"],Ye={class:"form-section"},je={class:"form-section"},We={style:{"margin-top":"30px"}},Ke={class:"button-content"},Je={class:"button-icon"},Qe={class:"button-text"},Xe={class:"main-text"},qe={class:"sub-text"},Ze={class:"dashboard-card right-column",style:{padding:"30px"}},et={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},tt={key:0,class:"result-actions"},ot={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},at={key:1,style:{"text-align":"center",padding:"60px 20px"}},lt={key:2,class:"generate-result"},nt=["innerHTML"],st={class:"image-preview-container"},it=["src"],rt={class:"save-tips"},dt={class:"tip-text"},ct={class:"tip-title"},ut={key:0,class:"tip-desc"},pt={key:1,class:"wechat-tips"},mt={__name:"TravelNoteGenerator",setup(gt){const J=fe(),H=xe(),L=_(!1),f=_([]),C=_(!1),h=_(""),j=_(),S=_(!1),U=_(!1),W=_(),R=_(!1),P=_(""),l=_({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),Q=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],X=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],q=ye(()=>{if(!h.value)return"";let t=h.value;return t=t.replace(/\[图(\d+)\]/g,(e,n)=>{const r=parseInt(n)-1;return r>=0&&r<f.value.length?`<img src="${f.value[r].preview}" alt="图片${n}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`:e}),t}),Z=()=>{var t;S.value||(t=j.value)==null||t.click()},ee=t=>{const e=Array.from(t.target.files);K(e)},te=t=>{if(t.preventDefault(),L.value=!1,S.value)return;const e=Array.from(t.dataTransfer.files);K(e)},K=async t=>{const e=t.filter(n=>n.type.startsWith("image/"));if(f.value.length+e.length>9){g.warning("最多只能上传9张图片");return}if(e.length===0){g.warning("请选择有效的图片文件");return}S.value=!0,g.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const n of e)try{const r=await oe(n),u=new FileReader;u.onload=s=>{f.value.push({file:r,preview:s.target.result,name:n.name,originalSize:n.size,compressedSize:r.size})},u.readAsDataURL(r)}catch(r){console.error("图片压缩失败:",r),g.error(`图片 ${n.name} 压缩失败: ${r.message}`)}g.success(`成功压缩 ${e.length} 张图片`)}finally{S.value=!1}},oe=t=>new Promise((e,n)=>{const r=document.createElement("canvas"),u=r.getContext("2d"),s=new Image;s.onload=()=>{let{width:d,height:p}=s;const w=1920;d>p?d>w&&(p=p*w/d,d=w):p>w&&(d=d*w/p,p=w),r.width=d,r.height=p,u.drawImage(s,0,0,d,p);const T=a=>{r.toBlob(I=>{if(!I){n(new Error("图片压缩失败"));return}if(I.size<=1024*1024||a<=.1){const M=new File([I],t.name,{type:I.type,lastModified:Date.now()});e(M)}else T(Math.max(.1,a-.1))},t.type==="image/png"?"image/jpeg":t.type,a)};T(.8)},s.onerror=()=>{n(new Error("图片加载失败"))};const v=new FileReader;v.onload=d=>{s.src=d.target.result},v.onerror=()=>{n(new Error("文件读取失败"))},v.readAsDataURL(t)}),ae=t=>{f.value.splice(t,1)},le=async()=>{if(f.value.length===0){g.warning("请先上传图片");return}C.value=!0,h.value="";try{const t=new FormData;f.value.forEach((u,s)=>{t.append("images",u.file)}),t.append("model_selection",l.value.model),t.append("location",l.value.location),t.append("date",l.value.date),t.append("companions",l.value.companions),t.append("special_exp",l.value.specialExp),t.append("emotion_keywords",l.value.emotionKeywords),t.append("other_info",l.value.otherInfo),t.append("writing_style",l.value.writingStyle),l.value.writingStyle==="自定义"&&t.append("custom_style_input",l.value.customStyle);const e=await fetch(be("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${H.token}`},body:t});if(!e.ok){if(e.status===401){const s=window.location.hash||window.location.pathname;localStorage.getItem("token")&&!s.includes("login")&&(localStorage.removeItem("token"),H.logout(),J.push("/login"),g.error("登录已过期，请重新登录"));return}const u=await e.text();throw new Error(`生成失败: ${u}`)}const n=e.body.getReader(),r=new TextDecoder;for(;;){const{done:u,value:s}=await n.read();if(u)break;const v=r.decode(s,{stream:!0});h.value+=v}}catch(t){console.error("生成游记失败:",t),g.error("生成游记失败，请重试")}finally{C.value=!1}},ne=()=>{C.value=!1,g.info("已取消生成")},se=async()=>{try{if(!navigator.clipboard.write){await navigator.clipboard.writeText(h.value),g.success("内容已复制到剪贴板（纯文本格式）");return}let t=h.value;const e=[],n=[];for(let s=0;s<f.value.length;s++){const v=f.value[s],d=fetch(v.preview).then(p=>p.blob()).then(p=>(n[s]=p,p));e.push(d)}await Promise.all(e),t=t.replace(/\[图(\d+)\]/g,(s,v)=>{const d=parseInt(v)-1;return d>=0&&d<f.value.length?`<img src="${f.value[d].preview}" alt="图片${v}" style="max-width: 300px; height: auto; border-radius: 8px; margin: 8px 0;" />`:s});const r=`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        ${t.replace(/\n/g,"<br>")}
      </div>
    `,u=new ClipboardItem({"text/html":new Blob([r],{type:"text/html"}),"text/plain":new Blob([h.value],{type:"text/plain"})});await navigator.clipboard.write([u]),g.success("图文内容已复制到剪贴板")}catch(t){console.error("复制失败:",t);try{await navigator.clipboard.writeText(h.value),g.success("内容已复制到剪贴板（纯文本格式）")}catch{g.error("复制失败，请手动选择复制")}}},ie=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,y=()=>/micromessenger/i.test(navigator.userAgent),re=async()=>{if(!h.value||!W.value){g.warning("没有可分享的内容");return}U.value=!0,g.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div"),e=y()?540:600,n=y()?20:30;t.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${e}px;
      background: #fff;
      padding: ${n}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-height: ${y()?"3000px":"none"};
      overflow: hidden;
    `;const r=document.createElement("div");r.style.cssText=`
      font-size: ${y()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,r.textContent="✨ AI智能旅行游记";const u=document.createElement("div");u.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 14px;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 8px;
      margin-bottom: 16px;
      border-left: 4px solid #667eea;
      font-size: 12px;
      color: #495057;
    `;const s=document.createElement("div");s.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const v=document.createElement("div");v.style.cssText=`
      width: 20px;
      height: 20px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 10px;
    `;const d=H.user,p=(d==null?void 0:d.username)||(d==null?void 0:d.email)||"旅行者";v.textContent=p.charAt(0).toUpperCase();const w=document.createElement("span");w.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,w.textContent=p,s.appendChild(v),s.appendChild(w);const T=document.createElement("div");if(T.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,l.value.location){const b=document.createElement("div");b.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,b.innerHTML=`📍 ${l.value.location}`,T.appendChild(b)}const a=document.createElement("div");a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `;const I=l.value.date||new Date().toLocaleDateString("zh-CN");a.innerHTML=`🕒 ${de(I)}`,T.appendChild(a),u.appendChild(s),u.appendChild(T);const M=document.createElement("div");M.style.cssText=`
      font-size: ${y()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let A=h.value;A=A.replace(/\[图(\d+)\]/g,(b,z)=>{const V=parseInt(z)-1;if(V>=0&&V<f.value.length){const ge=f.value[V],ve=y()?"480px":"540px";return`<img src="${ge.preview}" alt="图片${z}" style="width: 100%; max-width: ${ve}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}return b}),A=A.replace(/\n/g,"<br>"),M.innerHTML=A;const O=document.createElement("div");O.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,O.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,t.appendChild(r),t.appendChild(u),t.appendChild(M),t.appendChild(O),document.body.appendChild(t);const ce=t.querySelectorAll("img"),ue=Array.from(ce).map(b=>new Promise(z=>{b.complete?z():(b.onload=z,b.onerror=z)}));await Promise.all(ue);const pe={useCORS:!0,allowTaint:!0,scale:y()?1.5:2,backgroundColor:"#ffffff",logging:!1,width:e,height:Math.min(t.scrollHeight,y()?3e3:5e3),scrollX:0,scrollY:0,windowWidth:e,windowHeight:Math.min(t.scrollHeight,y()?3e3:5e3)},me=await Se(t,pe);document.body.removeChild(t),me.toBlob(b=>{if(b){const z=URL.createObjectURL(b);if(ie()&&!y())P.value=z,R.value=!0,g.success("图片已生成，请长按图片保存到相册");else{const V=document.createElement("a");V.href=z,V.download=`旅行游记_${l.value.location||"未知地点"}_${new Date().toLocaleDateString()}.png`,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(z),y()?g.success("图片已下载到微信下载文件夹"):g.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",y()?.8:.9)}catch(t){console.error("生成分享图片失败:",t),g.error("生成分享图片失败，请重试")}finally{U.value=!1}};he(()=>{});function de(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}return(t,e)=>{const n=E("el-icon"),r=E("el-option"),u=E("el-select"),s=E("el-input"),v=E("el-col"),d=E("el-date-picker"),p=E("el-row"),w=E("el-button"),T=E("el-dialog");return c(),x(B,null,[o("div",De,[o("div",Me,[o("div",Ue,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=a=>t.$router.push("/dashboard"))},[o("div",Ae,[i(n,{size:"18"},{default:m(()=>[i(k(_e))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])])]),o("div",Le,[o("div",Re,[e[24]||(e[24]=o("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),o("div",Pe,[e[18]||(e[18]=o("div",{class:"section-title"},"选择AI模型",-1)),i(u,{modelValue:l.value.model,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.model=a),placeholder:"请选择模型",style:{width:"100%"}},{default:m(()=>[(c(),x(B,null,Y(Q,a=>i(r,{key:a.value,label:a.label,value:a.value,disabled:a.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),o("div",Be,[e[20]||(e[20]=o("div",{class:"section-title"},"上传旅行照片",-1)),o("div",{class:G(["upload-area",{dragover:L.value,compressing:S.value}]),onDrop:te,onDragover:e[2]||(e[2]=we(a=>L.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=a=>L.value=!1),onClick:e[4]||(e[4]=a=>!S.value&&Z())},[S.value?(c(),$(n,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:m(()=>[i(k(F))]),_:1})):(c(),$(n,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:m(()=>[i(k(ke))]),_:1})),S.value?(c(),x("p",Fe," 正在压缩图片，请稍候... ")):(c(),x("p",Ne," 点击或拖拽上传图片 ")),e[19]||(e[19]=o("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),o("input",{ref_key:"fileInput",ref:j,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:ee},null,544),f.value.length>0?(c(),x("div",He,[(c(!0),x(B,null,Y(f.value,(a,I)=>(c(),x("div",{key:I,class:"image-item"},[o("img",{src:a.preview,alt:`图片${I+1}`},null,8,Oe),o("button",{class:"remove-btn",onClick:M=>ae(I)},"×",8,Ge)]))),128))])):D("",!0)]),o("div",Ye,[e[21]||(e[21]=o("div",{class:"section-title"},"写作风格",-1)),i(u,{modelValue:l.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.writingStyle=a),placeholder:"请选择写作风格",style:{width:"100%"}},{default:m(()=>[(c(),x(B,null,Y(X,a=>i(r,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l.value.writingStyle==="自定义"?(c(),$(s,{key:0,modelValue:l.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value.customStyle=a),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):D("",!0)]),o("div",je,[e[22]||(e[22]=o("div",{class:"section-title"},"旅行信息",-1)),i(p,{gutter:12},{default:m(()=>[i(v,{xs:24,sm:12},{default:m(()=>[i(s,{modelValue:l.value.location,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.location=a),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),i(v,{xs:24,sm:12},{default:m(()=>[i(d,{modelValue:l.value.date,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.date=a),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),i(s,{modelValue:l.value.companions,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.companions=a),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:l.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=a=>l.value.specialExp=a),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:l.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=a=>l.value.emotionKeywords=a),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:l.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=a=>l.value.otherInfo=a),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),o("div",We,[o("div",{class:G(["generate-button",{generating:C.value,disabled:f.value.length===0}]),onClick:le},[o("div",Ke,[o("div",Je,[C.value?(c(),$(n,{key:1,size:"24",class:"rotating"},{default:m(()=>[i(k(F))]),_:1})):(c(),$(n,{key:0,size:"24"},{default:m(()=>[i(k(Ce))]),_:1}))]),o("div",Qe,[o("span",Xe,N(C.value?"正在生成中...":"生成游记"),1),o("span",qe,N(C.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),C.value?(c(),x("div",{key:0,class:"cancel-button",onClick:ne},[i(n,{size:"16"},{default:m(()=>[i(k(Ie))]),_:1}),e[23]||(e[23]=o("span",null,"取消生成",-1))])):D("",!0)])]),o("div",Ze,[o("div",et,[e[26]||(e[26]=o("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),h.value?(c(),x("div",tt,[o("div",{class:"action-btn copy",onClick:se},[i(n,{size:"16"},{default:m(()=>[i(k(ze))]),_:1}),e[25]||(e[25]=o("span",null,"复制",-1))]),o("div",{class:G(["action-btn share",{generating:U.value}]),onClick:re},[U.value?(c(),$(n,{key:1,size:"16",class:"rotating"},{default:m(()=>[i(k(F))]),_:1})):(c(),$(n,{key:0,size:"16"},{default:m(()=>[i(k(Te))]),_:1})),o("span",null,N(U.value?"生成中...":"分享图片"),1)],2)])):D("",!0)]),!h.value&&!C.value?(c(),x("div",ot,[i(n,{size:"64"},{default:m(()=>[i(k(Ve))]),_:1}),e[27]||(e[27]=o("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):D("",!0),C.value?(c(),x("div",at,[i(n,{size:"64",class:"rotating"},{default:m(()=>[i(k(F))]),_:1}),e[28]||(e[28]=o("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):D("",!0),h.value?(c(),x("div",lt,[o("div",{class:"result-content",innerHTML:q.value,ref_key:"resultContentRef",ref:W},null,8,nt)])):D("",!0)])])]),i(T,{modelValue:R.value,"onUpdate:modelValue":e[14]||(e[14]=a=>R.value=a),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(P.value),P.value=""})},{footer:m(()=>[i(w,{onClick:e[13]||(e[13]=a=>R.value=!1),type:"primary"},{default:m(()=>e[31]||(e[31]=[Ee("知道了")])),_:1,__:[31]})]),default:m(()=>[o("div",st,[o("img",{src:P.value,alt:"分享图片",class:"preview-image"},null,8,it),o("div",rt,[e[30]||(e[30]=o("div",{class:"tip-icon"},"💾",-1)),o("div",dt,[o("p",ct,N(y()?"保存图片到相册":"长按图片保存到相册"),1),y()?(c(),x("div",pt,e[29]||(e[29]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),o("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(c(),x("p",ut,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])],64)}}},yt=$e(mt,[["__scopeId","data-v-15a3cbff"]]);export{yt as default};
