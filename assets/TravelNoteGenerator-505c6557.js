import{u as ue,a as ce,r as _,j as pe,L as me,c as V,o as p,d as h,e as a,f as i,w as m,M as N,H as ge,I as S,F as R,m as F,l as z,t as H,E as g,N as ve,h as k,O as fe,P as xe,D as P,Q as ye,R as he,S as we,K as be,s as _e,i as ke}from"./index-63cf17b6.js";import{h as Ce}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ie}from"./_plugin-vue_export-helper-c27b6911.js";const Te={class:"dashboard-container"},Ve={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Ee={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Se={class:"back-icon"},ze={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},De={class:"dashboard-card left-column",style:{padding:"30px"}},$e={class:"form-section"},Ue={class:"form-section"},Le={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},Ae={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},Me={key:0,class:"image-preview"},Re=["src","alt"],Pe=["onClick"],Be={class:"form-section"},Ne={class:"form-section"},Fe={style:{"margin-top":"30px"}},He={class:"button-content"},Ge={class:"button-icon"},Oe={class:"button-text"},Ye={class:"main-text"},je={class:"sub-text"},Ke={class:"dashboard-card right-column",style:{padding:"30px"}},Je={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},We={key:0,class:"result-actions"},Qe={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},Xe={key:1,style:{"text-align":"center",padding:"60px 20px"}},qe={key:2,class:"generate-result"},Ze=["innerHTML"],et={class:"image-preview-container"},tt=["src"],at={__name:"TravelNoteGenerator",setup(lt){const j=ue(),B=ce(),L=_(!1),f=_([]),C=_(!1),y=_(""),G=_(),E=_(!1),U=_(!1),O=_(),A=_(!1),M=_(""),n=_({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),K=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],J=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],W=pe(()=>{if(!y.value)return"";let t=y.value;return t=t.replace(/\[图(\d+)\]/g,(e,o)=>{const r=parseInt(o)-1;return r>=0&&r<f.value.length?`<img src="${f.value[r].preview}" alt="图片${o}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`:e}),t}),Q=()=>{var t;E.value||(t=G.value)==null||t.click()},X=t=>{const e=Array.from(t.target.files);Y(e)},q=t=>{if(t.preventDefault(),L.value=!1,E.value)return;const e=Array.from(t.dataTransfer.files);Y(e)},Y=async t=>{const e=t.filter(o=>o.type.startsWith("image/"));if(f.value.length+e.length>9){g.warning("最多只能上传9张图片");return}if(e.length===0){g.warning("请选择有效的图片文件");return}E.value=!0,g.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const o of e)try{const r=await Z(o),c=new FileReader;c.onload=s=>{f.value.push({file:r,preview:s.target.result,name:o.name,originalSize:o.size,compressedSize:r.size})},c.readAsDataURL(r)}catch(r){console.error("图片压缩失败:",r),g.error(`图片 ${o.name} 压缩失败: ${r.message}`)}g.success(`成功压缩 ${e.length} 张图片`)}finally{E.value=!1}},Z=t=>new Promise((e,o)=>{const r=document.createElement("canvas"),c=r.getContext("2d"),s=new Image;s.onload=()=>{let{width:d,height:u}=s;const w=1920;d>u?d>w&&(u=u*w/d,d=w):u>w&&(d=d*w/u,u=w),r.width=d,r.height=u,c.drawImage(s,0,0,d,u);const D=l=>{r.toBlob(x=>{if(!x){o(new Error("图片压缩失败"));return}if(x.size<=1024*1024||l<=.1){const $=new File([x],t.name,{type:x.type,lastModified:Date.now()});e($)}else D(Math.max(.1,l-.1))},t.type==="image/png"?"image/jpeg":t.type,l)};D(.8)},s.onerror=()=>{o(new Error("图片加载失败"))};const v=new FileReader;v.onload=d=>{s.src=d.target.result},v.onerror=()=>{o(new Error("文件读取失败"))},v.readAsDataURL(t)}),ee=t=>{f.value.splice(t,1)},te=async()=>{if(f.value.length===0){g.warning("请先上传图片");return}C.value=!0,y.value="";try{const t=new FormData;f.value.forEach((c,s)=>{t.append("images",c.file)}),t.append("model_selection",n.value.model),t.append("location",n.value.location),t.append("date",n.value.date),t.append("companions",n.value.companions),t.append("special_exp",n.value.specialExp),t.append("emotion_keywords",n.value.emotionKeywords),t.append("other_info",n.value.otherInfo),t.append("writing_style",n.value.writingStyle),n.value.writingStyle==="自定义"&&t.append("custom_style_input",n.value.customStyle);const e=await fetch(ve("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${B.token}`},body:t});if(!e.ok){if(e.status===401){const s=window.location.hash||window.location.pathname;localStorage.getItem("token")&&!s.includes("login")&&(localStorage.removeItem("token"),B.logout(),j.push("/login"),g.error("登录已过期，请重新登录"));return}const c=await e.text();throw new Error(`生成失败: ${c}`)}const o=e.body.getReader(),r=new TextDecoder;for(;;){const{done:c,value:s}=await o.read();if(c)break;const v=r.decode(s,{stream:!0});y.value+=v}}catch(t){console.error("生成游记失败:",t),g.error("生成游记失败，请重试")}finally{C.value=!1}},ae=()=>{C.value=!1,g.info("已取消生成")},le=async()=>{try{if(!navigator.clipboard.write){await navigator.clipboard.writeText(y.value),g.success("内容已复制到剪贴板（纯文本格式）");return}let t=y.value;const e=[],o=[];for(let s=0;s<f.value.length;s++){const v=f.value[s],d=fetch(v.preview).then(u=>u.blob()).then(u=>(o[s]=u,u));e.push(d)}await Promise.all(e),t=t.replace(/\[图(\d+)\]/g,(s,v)=>{const d=parseInt(v)-1;return d>=0&&d<f.value.length?`<img src="${f.value[d].preview}" alt="图片${v}" style="max-width: 300px; height: auto; border-radius: 8px; margin: 8px 0;" />`:s});const r=`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        ${t.replace(/\n/g,"<br>")}
      </div>
    `,c=new ClipboardItem({"text/html":new Blob([r],{type:"text/html"}),"text/plain":new Blob([y.value],{type:"text/plain"})});await navigator.clipboard.write([c]),g.success("图文内容已复制到剪贴板")}catch(t){console.error("复制失败:",t);try{await navigator.clipboard.writeText(y.value),g.success("内容已复制到剪贴板（纯文本格式）")}catch{g.error("复制失败，请手动选择复制")}}},oe=async()=>{if(!y.value||!O.value){g.warning("没有可分享的内容");return}U.value=!0,g.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div");t.style.cssText=`
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
    `;const s=B.user,v=(s==null?void 0:s.username)||(s==null?void 0:s.email)||"旅行者";c.textContent=v.charAt(0).toUpperCase();const d=document.createElement("span");d.style.cssText=`
      font-weight: 600;
      color: #333;
    `,d.textContent=v,r.appendChild(c),r.appendChild(d);const u=document.createElement("div");if(u.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
    `,n.value.location){const b=document.createElement("div");b.style.cssText=`
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 12px;
        color: #667eea;
        font-weight: 500;
      `,b.innerHTML=`📍 ${n.value.location}`,u.appendChild(b)}const w=document.createElement("div");w.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 12px;
      color: #43e97b;
      font-weight: 500;
    `;const D=n.value.date||new Date().toLocaleDateString("zh-CN");w.innerHTML=`🕒 ${ne(D)}`,u.appendChild(w),o.appendChild(r),o.appendChild(u);const l=document.createElement("div");l.style.cssText=`
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
    `;let x=y.value;x=x.replace(/\[图(\d+)\]/g,(b,I)=>{const T=parseInt(I)-1;return T>=0&&T<f.value.length?`<img src="${f.value[T].preview}" alt="图片${I}" style="width: 100%; max-width: 540px; height: auto; border-radius: 12px; margin: 16px 0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);" />`:b}),x=x.replace(/\n/g,"<br>"),l.innerHTML=x;const $=document.createElement("div");$.style.cssText=`
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
      font-size: 14px;
      color: #999;
    `,$.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">由AI智能生成</div>
      <div>让每一次旅行都有精彩的故事</div>
    `,t.appendChild(e),t.appendChild(o),t.appendChild(l),t.appendChild($),document.body.appendChild(t);const ie=t.querySelectorAll("img"),re=Array.from(ie).map(b=>new Promise(I=>{b.complete?I():(b.onload=I,b.onerror=I)}));await Promise.all(re);const de=await Ce(t,{useCORS:!0,allowTaint:!0,scale:2,backgroundColor:"#ffffff",logging:!1,width:600,height:t.scrollHeight,scrollX:0,scrollY:0});document.body.removeChild(t),de.toBlob(b=>{if(b){const I=URL.createObjectURL(b);if(se())M.value=I,A.value=!0,g.success("图片已生成，请长按图片保存到相册");else{const T=document.createElement("a");T.href=I,T.download=`旅行游记_${n.value.location||"未知地点"}_${new Date().toLocaleDateString()}.png`,document.body.appendChild(T),T.click(),document.body.removeChild(T),URL.revokeObjectURL(I),g.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",.9)}catch(t){console.error("生成分享图片失败:",t),g.error("生成分享图片失败，请重试")}finally{U.value=!1}};me(()=>{});function ne(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}const se=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768;return(t,e)=>{const o=V("el-icon"),r=V("el-option"),c=V("el-select"),s=V("el-input"),v=V("el-col"),d=V("el-date-picker"),u=V("el-row"),w=V("el-button"),D=V("el-dialog");return p(),h(R,null,[a("div",Te,[a("div",Ve,[a("div",Ee,[e[17]||(e[17]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=l=>t.$router.push("/dashboard"))},[a("div",Se,[i(o,{size:"18"},{default:m(()=>[i(k(fe))]),_:1})]),e[16]||(e[16]=a("span",{class:"back-text"},"返回首页",-1))])])]),a("div",ze,[a("div",De,[e[24]||(e[24]=a("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),a("div",$e,[e[18]||(e[18]=a("div",{class:"section-title"},"选择AI模型",-1)),i(c,{modelValue:n.value.model,"onUpdate:modelValue":e[1]||(e[1]=l=>n.value.model=l),placeholder:"请选择模型",style:{width:"100%"}},{default:m(()=>[(p(),h(R,null,F(K,l=>i(r,{key:l.value,label:l.label,value:l.value,disabled:l.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),a("div",Ue,[e[20]||(e[20]=a("div",{class:"section-title"},"上传旅行照片",-1)),a("div",{class:N(["upload-area",{dragover:L.value,compressing:E.value}]),onDrop:q,onDragover:e[2]||(e[2]=ge(l=>L.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=l=>L.value=!1),onClick:e[4]||(e[4]=l=>!E.value&&Q())},[E.value?(p(),S(o,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:m(()=>[i(k(P))]),_:1})):(p(),S(o,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:m(()=>[i(k(xe))]),_:1})),E.value?(p(),h("p",Ae," 正在压缩图片，请稍候... ")):(p(),h("p",Le," 点击或拖拽上传图片 ")),e[19]||(e[19]=a("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),a("input",{ref_key:"fileInput",ref:G,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:X},null,544),f.value.length>0?(p(),h("div",Me,[(p(!0),h(R,null,F(f.value,(l,x)=>(p(),h("div",{key:x,class:"image-item"},[a("img",{src:l.preview,alt:`图片${x+1}`},null,8,Re),a("button",{class:"remove-btn",onClick:$=>ee(x)},"×",8,Pe)]))),128))])):z("",!0)]),a("div",Be,[e[21]||(e[21]=a("div",{class:"section-title"},"写作风格",-1)),i(c,{modelValue:n.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=l=>n.value.writingStyle=l),placeholder:"请选择写作风格",style:{width:"100%"}},{default:m(()=>[(p(),h(R,null,F(J,l=>i(r,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),n.value.writingStyle==="自定义"?(p(),S(s,{key:0,modelValue:n.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=l=>n.value.customStyle=l),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):z("",!0)]),a("div",Ne,[e[22]||(e[22]=a("div",{class:"section-title"},"旅行信息",-1)),i(u,{gutter:12},{default:m(()=>[i(v,{xs:24,sm:12},{default:m(()=>[i(s,{modelValue:n.value.location,"onUpdate:modelValue":e[7]||(e[7]=l=>n.value.location=l),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),i(v,{xs:24,sm:12},{default:m(()=>[i(d,{modelValue:n.value.date,"onUpdate:modelValue":e[8]||(e[8]=l=>n.value.date=l),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),i(s,{modelValue:n.value.companions,"onUpdate:modelValue":e[9]||(e[9]=l=>n.value.companions=l),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:n.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=l=>n.value.specialExp=l),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:n.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=l=>n.value.emotionKeywords=l),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:n.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=l=>n.value.otherInfo=l),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),a("div",Fe,[a("div",{class:N(["generate-button",{generating:C.value,disabled:f.value.length===0}]),onClick:te},[a("div",He,[a("div",Ge,[C.value?(p(),S(o,{key:1,size:"24",class:"rotating"},{default:m(()=>[i(k(P))]),_:1})):(p(),S(o,{key:0,size:"24"},{default:m(()=>[i(k(ye))]),_:1}))]),a("div",Oe,[a("span",Ye,H(C.value?"正在生成中...":"生成游记"),1),a("span",je,H(C.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),C.value?(p(),h("div",{key:0,class:"cancel-button",onClick:ae},[i(o,{size:"16"},{default:m(()=>[i(k(he))]),_:1}),e[23]||(e[23]=a("span",null,"取消生成",-1))])):z("",!0)])]),a("div",Ke,[a("div",Je,[e[26]||(e[26]=a("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),y.value?(p(),h("div",We,[a("div",{class:"action-btn copy",onClick:le},[i(o,{size:"16"},{default:m(()=>[i(k(we))]),_:1}),e[25]||(e[25]=a("span",null,"复制",-1))]),a("div",{class:N(["action-btn share",{generating:U.value}]),onClick:oe},[U.value?(p(),S(o,{key:1,size:"16",class:"rotating"},{default:m(()=>[i(k(P))]),_:1})):(p(),S(o,{key:0,size:"16"},{default:m(()=>[i(k(be))]),_:1})),a("span",null,H(U.value?"生成中...":"分享图片"),1)],2)])):z("",!0)]),!y.value&&!C.value?(p(),h("div",Qe,[i(o,{size:"64"},{default:m(()=>[i(k(_e))]),_:1}),e[27]||(e[27]=a("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):z("",!0),C.value?(p(),h("div",Xe,[i(o,{size:"64",class:"rotating"},{default:m(()=>[i(k(P))]),_:1}),e[28]||(e[28]=a("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):z("",!0),y.value?(p(),h("div",qe,[a("div",{class:"result-content",innerHTML:W.value,ref_key:"resultContentRef",ref:O},null,8,Ze)])):z("",!0)])])]),i(D,{modelValue:A.value,"onUpdate:modelValue":e[14]||(e[14]=l=>A.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(M.value),M.value=""})},{footer:m(()=>[i(w,{onClick:e[13]||(e[13]=l=>A.value=!1),type:"primary"},{default:m(()=>e[30]||(e[30]=[ke("知道了")])),_:1,__:[30]})]),default:m(()=>[a("div",et,[a("img",{src:M.value,alt:"分享图片",class:"preview-image"},null,8,tt),e[29]||(e[29]=a("div",{class:"save-tips"},[a("div",{class:"tip-icon"},"💾"),a("div",{class:"tip-text"},[a("p",{class:"tip-title"},"长按图片保存到相册"),a("p",{class:"tip-desc"},'在图片上长按，选择"保存图片"或"存储图像"')])],-1))])]),_:1},8,["modelValue"])],64)}}},rt=Ie(at,[["__scopeId","data-v-d8215a27"]]);export{rt as default};
