import{u as de,a as ue,r as _,j as ce,K as pe,c as E,o as p,d as b,e as l,f as i,w as m,L as B,D as me,G as z,F as R,l as N,H as S,t as F,E as g,M as ge,h as k,N as ve,O as fe,B as P,P as xe,Q as ye,R as be,J as he,p as we,i as _e}from"./index-68f51315.js";import{h as ke}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ce}from"./_plugin-vue_export-helper-c27b6911.js";const Ie={class:"dashboard-container"},Ve={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Ee={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Te={class:"back-icon"},ze={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},Se={class:"dashboard-card left-column",style:{padding:"30px"}},De={class:"form-section"},$e={class:"form-section"},Ue={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},Le={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},Ae={key:0,class:"image-preview"},Me=["src","alt"],Re=["onClick"],Pe={class:"form-section"},Be={class:"form-section"},Ne={style:{"margin-top":"30px"}},Fe={class:"button-content"},Ge={class:"button-icon"},He={class:"button-text"},Oe={class:"main-text"},Ye={class:"sub-text"},je={class:"dashboard-card right-column",style:{padding:"30px"}},Ke={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},Je={key:0,class:"result-actions"},We={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},Qe={key:1,style:{"text-align":"center",padding:"60px 20px"}},Xe={key:2,class:"generate-result"},qe=["innerHTML"],Ze={class:"image-preview-container"},et=["src"],tt={__name:"TravelNoteGenerator",setup(lt){de();const G=ue(),L=_(!1),v=_([]),C=_(!1),y=_(""),H=_(),T=_(!1),U=_(!1),O=_(),A=_(!1),M=_(""),n=_({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),j=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],K=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],J=ce(()=>{if(!y.value)return"";let t=y.value;return t=t.replace(/\[图(\d+)\]/g,(e,o)=>{const r=parseInt(o)-1;return r>=0&&r<v.value.length?`<img src="${v.value[r].preview}" alt="图片${o}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`:e}),t}),W=()=>{var t;T.value||(t=H.value)==null||t.click()},Q=t=>{const e=Array.from(t.target.files);Y(e)},X=t=>{if(t.preventDefault(),L.value=!1,T.value)return;const e=Array.from(t.dataTransfer.files);Y(e)},Y=async t=>{const e=t.filter(o=>o.type.startsWith("image/"));if(v.value.length+e.length>9){g.warning("最多只能上传9张图片");return}if(e.length===0){g.warning("请选择有效的图片文件");return}T.value=!0,g.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const o of e)try{const r=await q(o),c=new FileReader;c.onload=s=>{v.value.push({file:r,preview:s.target.result,name:o.name,originalSize:o.size,compressedSize:r.size})},c.readAsDataURL(r)}catch(r){console.error("图片压缩失败:",r),g.error(`图片 ${o.name} 压缩失败: ${r.message}`)}g.success(`成功压缩 ${e.length} 张图片`)}finally{T.value=!1}},q=t=>new Promise((e,o)=>{const r=document.createElement("canvas"),c=r.getContext("2d"),s=new Image;s.onload=()=>{let{width:d,height:u}=s;const h=1920;d>u?d>h&&(u=u*h/d,d=h):u>h&&(d=d*h/u,u=h),r.width=d,r.height=u,c.drawImage(s,0,0,d,u);const D=a=>{r.toBlob(x=>{if(!x){o(new Error("图片压缩失败"));return}if(x.size<=1024*1024||a<=.1){const $=new File([x],t.name,{type:x.type,lastModified:Date.now()});e($)}else D(Math.max(.1,a-.1))},t.type==="image/png"?"image/jpeg":t.type,a)};D(.8)},s.onerror=()=>{o(new Error("图片加载失败"))};const f=new FileReader;f.onload=d=>{s.src=d.target.result},f.onerror=()=>{o(new Error("文件读取失败"))},f.readAsDataURL(t)}),Z=t=>{v.value.splice(t,1)},ee=async()=>{if(v.value.length===0){g.warning("请先上传图片");return}C.value=!0,y.value="";try{const t=new FormData;v.value.forEach((c,s)=>{t.append("images",c.file)}),t.append("model_selection",n.value.model),t.append("location",n.value.location),t.append("date",n.value.date),t.append("companions",n.value.companions),t.append("special_exp",n.value.specialExp),t.append("emotion_keywords",n.value.emotionKeywords),t.append("other_info",n.value.otherInfo),t.append("writing_style",n.value.writingStyle),n.value.writingStyle==="自定义"&&t.append("custom_style_input",n.value.customStyle);const e=await fetch(ge("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${G.token}`},body:t});if(!e.ok){const c=await e.text();throw new Error(`生成失败: ${c}`)}const o=e.body.getReader(),r=new TextDecoder;for(;;){const{done:c,value:s}=await o.read();if(c)break;const f=r.decode(s,{stream:!0});y.value+=f}}catch(t){console.error("生成游记失败:",t),g.error("生成游记失败，请重试")}finally{C.value=!1}},te=()=>{C.value=!1,g.info("已取消生成")},le=async()=>{try{if(!navigator.clipboard.write){await navigator.clipboard.writeText(y.value),g.success("内容已复制到剪贴板（纯文本格式）");return}let t=y.value;const e=[],o=[];for(let s=0;s<v.value.length;s++){const f=v.value[s],d=fetch(f.preview).then(u=>u.blob()).then(u=>(o[s]=u,u));e.push(d)}await Promise.all(e),t=t.replace(/\[图(\d+)\]/g,(s,f)=>{const d=parseInt(f)-1;return d>=0&&d<v.value.length?`<img src="${v.value[d].preview}" alt="图片${f}" style="max-width: 300px; height: auto; border-radius: 8px; margin: 8px 0;" />`:s});const r=`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        ${t.replace(/\n/g,"<br>")}
      </div>
    `,c=new ClipboardItem({"text/html":new Blob([r],{type:"text/html"}),"text/plain":new Blob([y.value],{type:"text/plain"})});await navigator.clipboard.write([c]),g.success("图文内容已复制到剪贴板")}catch(t){console.error("复制失败:",t);try{await navigator.clipboard.writeText(y.value),g.success("内容已复制到剪贴板（纯文本格式）")}catch{g.error("复制失败，请手动选择复制")}}},ae=async()=>{if(!y.value||!O.value){g.warning("没有可分享的内容");return}U.value=!0,g.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div");t.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: 600px;
      background: #fff;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `;const e=document.createElement("div");e.style.cssText=`
      font-size: 24px;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,e.textContent="✨ AI智能旅行游记";const o=document.createElement("div");o.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 8px;
      margin-bottom: 20px;
      border-left: 4px solid #667eea;
      font-size: 13px;
      color: #495057;
    `;const r=document.createElement("div");r.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
    `;const c=document.createElement("div");c.style.cssText=`
      width: 24px;
      height: 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 12px;
    `;const s=G.user,f=(s==null?void 0:s.username)||(s==null?void 0:s.email)||"旅行者";c.textContent=f.charAt(0).toUpperCase();const d=document.createElement("span");d.style.cssText=`
      font-weight: 600;
      color: #333;
    `,d.textContent=f,r.appendChild(c),r.appendChild(d);const u=document.createElement("div");if(u.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
    `,n.value.location){const w=document.createElement("div");w.style.cssText=`
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 12px;
        color: #667eea;
        font-weight: 500;
      `,w.innerHTML=`📍 ${n.value.location}`,u.appendChild(w)}const h=document.createElement("div");h.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 12px;
      color: #43e97b;
      font-weight: 500;
    `;const D=n.value.date||new Date().toLocaleDateString("zh-CN");h.innerHTML=`🕒 ${oe(D)}`,u.appendChild(h),o.appendChild(r),o.appendChild(u);const a=document.createElement("div");a.style.cssText=`
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
    `;let x=y.value;x=x.replace(/\[图(\d+)\]/g,(w,I)=>{const V=parseInt(I)-1;return V>=0&&V<v.value.length?`<img src="${v.value[V].preview}" alt="图片${I}" style="width: 100%; max-width: 540px; height: auto; border-radius: 12px; margin: 16px 0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);" />`:w}),x=x.replace(/\n/g,"<br>"),a.innerHTML=x;const $=document.createElement("div");$.style.cssText=`
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
      font-size: 14px;
      color: #999;
    `,$.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">由AI智能生成</div>
      <div>让每一次旅行都有精彩的故事</div>
    `,t.appendChild(e),t.appendChild(o),t.appendChild(a),t.appendChild($),document.body.appendChild(t);const se=t.querySelectorAll("img"),ie=Array.from(se).map(w=>new Promise(I=>{w.complete?I():(w.onload=I,w.onerror=I)}));await Promise.all(ie);const re=await ke(t,{useCORS:!0,allowTaint:!0,scale:2,backgroundColor:"#ffffff",logging:!1,width:600,height:t.scrollHeight,scrollX:0,scrollY:0});document.body.removeChild(t),re.toBlob(w=>{if(w){const I=URL.createObjectURL(w);if(ne())M.value=I,A.value=!0,g.success("图片已生成，请长按图片保存到相册");else{const V=document.createElement("a");V.href=I,V.download=`旅行游记_${n.value.location||"未知地点"}_${new Date().toLocaleDateString()}.png`,document.body.appendChild(V),V.click(),document.body.removeChild(V),URL.revokeObjectURL(I),g.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",.9)}catch(t){console.error("生成分享图片失败:",t),g.error("生成分享图片失败，请重试")}finally{U.value=!1}};pe(()=>{});function oe(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}const ne=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768;return(t,e)=>{const o=E("el-icon"),r=E("el-option"),c=E("el-select"),s=E("el-input"),f=E("el-col"),d=E("el-date-picker"),u=E("el-row"),h=E("el-button"),D=E("el-dialog");return p(),b(R,null,[l("div",Ie,[l("div",Ve,[l("div",Ee,[e[17]||(e[17]=l("div",{style:{flex:"1"}},[l("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),l("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),l("div",{class:"back-button",onClick:e[0]||(e[0]=a=>t.$router.push("/dashboard"))},[l("div",Te,[i(o,{size:"18"},{default:m(()=>[i(k(ve))]),_:1})]),e[16]||(e[16]=l("span",{class:"back-text"},"返回首页",-1))])])]),l("div",ze,[l("div",Se,[e[24]||(e[24]=l("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),l("div",De,[e[18]||(e[18]=l("div",{class:"section-title"},"选择AI模型",-1)),i(c,{modelValue:n.value.model,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value.model=a),placeholder:"请选择模型",style:{width:"100%"}},{default:m(()=>[(p(),b(R,null,N(j,a=>i(r,{key:a.value,label:a.label,value:a.value,disabled:a.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),l("div",$e,[e[20]||(e[20]=l("div",{class:"section-title"},"上传旅行照片",-1)),l("div",{class:B(["upload-area",{dragover:L.value,compressing:T.value}]),onDrop:X,onDragover:e[2]||(e[2]=me(a=>L.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=a=>L.value=!1),onClick:e[4]||(e[4]=a=>!T.value&&W())},[T.value?(p(),z(o,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:m(()=>[i(k(P))]),_:1})):(p(),z(o,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:m(()=>[i(k(fe))]),_:1})),T.value?(p(),b("p",Le," 正在压缩图片，请稍候... ")):(p(),b("p",Ue," 点击或拖拽上传图片 ")),e[19]||(e[19]=l("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),l("input",{ref_key:"fileInput",ref:H,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:Q},null,544),v.value.length>0?(p(),b("div",Ae,[(p(!0),b(R,null,N(v.value,(a,x)=>(p(),b("div",{key:x,class:"image-item"},[l("img",{src:a.preview,alt:`图片${x+1}`},null,8,Me),l("button",{class:"remove-btn",onClick:$=>Z(x)},"×",8,Re)]))),128))])):S("",!0)]),l("div",Pe,[e[21]||(e[21]=l("div",{class:"section-title"},"写作风格",-1)),i(c,{modelValue:n.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=a=>n.value.writingStyle=a),placeholder:"请选择写作风格",style:{width:"100%"}},{default:m(()=>[(p(),b(R,null,N(K,a=>i(r,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),n.value.writingStyle==="自定义"?(p(),z(s,{key:0,modelValue:n.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=a=>n.value.customStyle=a),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):S("",!0)]),l("div",Be,[e[22]||(e[22]=l("div",{class:"section-title"},"旅行信息",-1)),i(u,{gutter:12},{default:m(()=>[i(f,{xs:24,sm:12},{default:m(()=>[i(s,{modelValue:n.value.location,"onUpdate:modelValue":e[7]||(e[7]=a=>n.value.location=a),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),i(f,{xs:24,sm:12},{default:m(()=>[i(d,{modelValue:n.value.date,"onUpdate:modelValue":e[8]||(e[8]=a=>n.value.date=a),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),i(s,{modelValue:n.value.companions,"onUpdate:modelValue":e[9]||(e[9]=a=>n.value.companions=a),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:n.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=a=>n.value.specialExp=a),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:n.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=a=>n.value.emotionKeywords=a),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:n.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=a=>n.value.otherInfo=a),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),l("div",Ne,[l("div",{class:B(["generate-button",{generating:C.value,disabled:v.value.length===0}]),onClick:ee},[l("div",Fe,[l("div",Ge,[C.value?(p(),z(o,{key:1,size:"24",class:"rotating"},{default:m(()=>[i(k(P))]),_:1})):(p(),z(o,{key:0,size:"24"},{default:m(()=>[i(k(xe))]),_:1}))]),l("div",He,[l("span",Oe,F(C.value?"正在生成中...":"生成游记"),1),l("span",Ye,F(C.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),C.value?(p(),b("div",{key:0,class:"cancel-button",onClick:te},[i(o,{size:"16"},{default:m(()=>[i(k(ye))]),_:1}),e[23]||(e[23]=l("span",null,"取消生成",-1))])):S("",!0)])]),l("div",je,[l("div",Ke,[e[26]||(e[26]=l("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),y.value?(p(),b("div",Je,[l("div",{class:"action-btn copy",onClick:le},[i(o,{size:"16"},{default:m(()=>[i(k(be))]),_:1}),e[25]||(e[25]=l("span",null,"复制",-1))]),l("div",{class:B(["action-btn share",{generating:U.value}]),onClick:ae},[U.value?(p(),z(o,{key:1,size:"16",class:"rotating"},{default:m(()=>[i(k(P))]),_:1})):(p(),z(o,{key:0,size:"16"},{default:m(()=>[i(k(he))]),_:1})),l("span",null,F(U.value?"生成中...":"分享图片"),1)],2)])):S("",!0)]),!y.value&&!C.value?(p(),b("div",We,[i(o,{size:"64"},{default:m(()=>[i(k(we))]),_:1}),e[27]||(e[27]=l("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):S("",!0),C.value?(p(),b("div",Qe,[i(o,{size:"64",class:"rotating"},{default:m(()=>[i(k(P))]),_:1}),e[28]||(e[28]=l("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):S("",!0),y.value?(p(),b("div",Xe,[l("div",{class:"result-content",innerHTML:J.value,ref_key:"resultContentRef",ref:O},null,8,qe)])):S("",!0)])])]),i(D,{modelValue:A.value,"onUpdate:modelValue":e[14]||(e[14]=a=>A.value=a),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(M.value),M.value=""})},{footer:m(()=>[i(h,{onClick:e[13]||(e[13]=a=>A.value=!1),type:"primary"},{default:m(()=>e[30]||(e[30]=[_e("知道了")])),_:1,__:[30]})]),default:m(()=>[l("div",Ze,[l("img",{src:M.value,alt:"分享图片",class:"preview-image"},null,8,et),e[29]||(e[29]=l("div",{class:"save-tips"},[l("div",{class:"tip-icon"},"💾"),l("div",{class:"tip-text"},[l("p",{class:"tip-title"},"长按图片保存到相册"),l("p",{class:"tip-desc"},'在图片上长按，选择"保存图片"或"存储图像"')])],-1))])]),_:1},8,["modelValue"])],64)}}},it=Ce(tt,[["__scopeId","data-v-f997e0e5"]]);export{it as default};
