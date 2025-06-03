import{u as se,a as re,r as I,j as ie,K as de,c as S,o as p,d as y,e as l,f as r,w as v,L as M,D as ce,G as V,F as R,l as B,H as D,t as F,E as f,M as ue,h as b,N as pe,O as me,B as U,P as ge,Q as ve,R as fe,J as xe,p as ye}from"./index-fad95d91.js";import{h as he}from"./html2canvas.esm-85f1a6b6.js";import{_ as be}from"./_plugin-vue_export-helper-c27b6911.js";const we={class:"dashboard-container"},_e={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},ke={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ce={class:"back-icon"},Ie={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},Ee={class:"dashboard-card left-column",style:{padding:"30px"}},Te={class:"form-section"},ze={class:"form-section"},Se={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},Ve={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},De={key:0,class:"image-preview"},$e=["src","alt"],Le=["onClick"],Ae={class:"form-section"},Ue={class:"form-section"},Me={style:{"margin-top":"30px"}},Re={class:"button-content"},Be={class:"button-icon"},Fe={class:"button-text"},Ne={class:"main-text"},Pe={class:"sub-text"},Ge={class:"dashboard-card right-column",style:{padding:"30px"}},He={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},Ye={key:0,class:"result-actions"},Oe={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},je={key:1,style:{"text-align":"center",padding:"60px 20px"}},Ke={key:2,class:"generate-result"},Je=["innerHTML"],Qe={__name:"TravelNoteGenerator",setup(We){se();const N=re(),A=I(!1),m=I([]),w=I(!1),x=I(""),P=I(),E=I(!1),$=I(!1),G=I(),n=I({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),Y=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],O=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],j=ie(()=>{if(!x.value)return"";let t=x.value;return t=t.replace(/\[图(\d+)\]/g,(e,o)=>{const i=parseInt(o)-1;return i>=0&&i<m.value.length?`<img src="${m.value[i].preview}" alt="图片${o}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`:e}),t}),K=()=>{var t;E.value||(t=P.value)==null||t.click()},J=t=>{const e=Array.from(t.target.files);H(e)},Q=t=>{if(t.preventDefault(),A.value=!1,E.value)return;const e=Array.from(t.dataTransfer.files);H(e)},H=async t=>{const e=t.filter(o=>o.type.startsWith("image/"));if(m.value.length+e.length>9){f.warning("最多只能上传9张图片");return}if(e.length===0){f.warning("请选择有效的图片文件");return}E.value=!0,f.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const o of e)try{const i=await W(o),u=new FileReader;u.onload=s=>{m.value.push({file:i,preview:s.target.result,name:o.name,originalSize:o.size,compressedSize:i.size})},u.readAsDataURL(i)}catch(i){console.error("图片压缩失败:",i),f.error(`图片 ${o.name} 压缩失败: ${i.message}`)}f.success(`成功压缩 ${e.length} 张图片`)}finally{E.value=!1}},W=t=>new Promise((e,o)=>{const i=document.createElement("canvas"),u=i.getContext("2d"),s=new Image;s.onload=()=>{let{width:d,height:c}=s;const a=1920;d>c?d>a&&(c=c*a/d,d=a):c>a&&(d=d*a/c,c=a),i.width=d,i.height=c,u.drawImage(s,0,0,d,c);const T=z=>{i.toBlob(_=>{if(!_){o(new Error("图片压缩失败"));return}if(_.size<=1024*1024||z<=.1){const L=new File([_],t.name,{type:_.type,lastModified:Date.now()});e(L)}else T(Math.max(.1,z-.1))},t.type==="image/png"?"image/jpeg":t.type,z)};T(.8)},s.onerror=()=>{o(new Error("图片加载失败"))};const g=new FileReader;g.onload=d=>{s.src=d.target.result},g.onerror=()=>{o(new Error("文件读取失败"))},g.readAsDataURL(t)}),X=t=>{m.value.splice(t,1)},q=async()=>{if(m.value.length===0){f.warning("请先上传图片");return}w.value=!0,x.value="";try{const t=new FormData;m.value.forEach((u,s)=>{t.append("images",u.file)}),t.append("model_selection",n.value.model),t.append("location",n.value.location),t.append("date",n.value.date),t.append("companions",n.value.companions),t.append("special_exp",n.value.specialExp),t.append("emotion_keywords",n.value.emotionKeywords),t.append("other_info",n.value.otherInfo),t.append("writing_style",n.value.writingStyle),n.value.writingStyle==="自定义"&&t.append("custom_style_input",n.value.customStyle);const e=await fetch(ue("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${N.token}`},body:t});if(!e.ok){const u=await e.text();throw new Error(`生成失败: ${u}`)}const o=e.body.getReader(),i=new TextDecoder;for(;;){const{done:u,value:s}=await o.read();if(u)break;const g=i.decode(s,{stream:!0});x.value+=g}}catch(t){console.error("生成游记失败:",t),f.error("生成游记失败，请重试")}finally{w.value=!1}},Z=()=>{w.value=!1,f.info("已取消生成")},ee=async()=>{try{if(!navigator.clipboard.write){await navigator.clipboard.writeText(x.value),f.success("内容已复制到剪贴板（纯文本格式）");return}let t=x.value;const e=[],o=[];for(let s=0;s<m.value.length;s++){const g=m.value[s],d=fetch(g.preview).then(c=>c.blob()).then(c=>(o[s]=c,c));e.push(d)}await Promise.all(e),t=t.replace(/\[图(\d+)\]/g,(s,g)=>{const d=parseInt(g)-1;return d>=0&&d<m.value.length?`<img src="${m.value[d].preview}" alt="图片${g}" style="max-width: 300px; height: auto; border-radius: 8px; margin: 8px 0;" />`:s});const i=`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        ${t.replace(/\n/g,"<br>")}
      </div>
    `,u=new ClipboardItem({"text/html":new Blob([i],{type:"text/html"}),"text/plain":new Blob([x.value],{type:"text/plain"})});await navigator.clipboard.write([u]),f.success("图文内容已复制到剪贴板")}catch(t){console.error("复制失败:",t);try{await navigator.clipboard.writeText(x.value),f.success("内容已复制到剪贴板（纯文本格式）")}catch{f.error("复制失败，请手动选择复制")}}},te=async()=>{if(!x.value||!G.value){f.warning("没有可分享的内容");return}$.value=!0,f.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div");t.style.cssText=`
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
    `;const i=document.createElement("div");i.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
    `;const u=document.createElement("div");u.style.cssText=`
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
    `;const s=N.user,g=(s==null?void 0:s.username)||(s==null?void 0:s.email)||"旅行者";u.textContent=g.charAt(0).toUpperCase();const d=document.createElement("span");d.style.cssText=`
      font-weight: 600;
      color: #333;
    `,d.textContent=g,i.appendChild(u),i.appendChild(d);const c=document.createElement("div");if(c.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
    `,n.value.location){const h=document.createElement("div");h.style.cssText=`
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 12px;
        color: #667eea;
        font-weight: 500;
      `,h.innerHTML=`📍 ${n.value.location}`,c.appendChild(h)}const a=document.createElement("div");a.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 12px;
      color: #43e97b;
      font-weight: 500;
    `;const T=n.value.date||new Date().toLocaleDateString("zh-CN");a.innerHTML=`🕒 ${ae(T)}`,c.appendChild(a),o.appendChild(i),o.appendChild(c);const z=document.createElement("div");z.style.cssText=`
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
    `;let _=x.value;_=_.replace(/\[图(\d+)\]/g,(h,k)=>{const C=parseInt(k)-1;return C>=0&&C<m.value.length?`<img src="${m.value[C].preview}" alt="图片${k}" style="width: 100%; max-width: 540px; height: auto; border-radius: 12px; margin: 16px 0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);" />`:h}),_=_.replace(/\n/g,"<br>"),z.innerHTML=_;const L=document.createElement("div");L.style.cssText=`
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
      font-size: 14px;
      color: #999;
    `,L.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">由AI智能生成</div>
      <div>让每一次旅行都有精彩的故事</div>
    `,t.appendChild(e),t.appendChild(o),t.appendChild(z),t.appendChild(L),document.body.appendChild(t);const le=t.querySelectorAll("img"),oe=Array.from(le).map(h=>new Promise(k=>{h.complete?k():(h.onload=k,h.onerror=k)}));await Promise.all(oe);const ne=await he(t,{useCORS:!0,allowTaint:!0,scale:2,backgroundColor:"#ffffff",logging:!1,width:600,height:t.scrollHeight,scrollX:0,scrollY:0});document.body.removeChild(t),ne.toBlob(h=>{if(h){const k=URL.createObjectURL(h),C=document.createElement("a");C.href=k,C.download=`旅行游记_${n.value.location||"未知地点"}_${new Date().toLocaleDateString()}.png`,document.body.appendChild(C),C.click(),document.body.removeChild(C),URL.revokeObjectURL(k),f.success("分享图片已生成并下载")}else throw new Error("图片生成失败")},"image/png",.9)}catch(t){console.error("生成分享图片失败:",t),f.error("生成分享图片失败，请重试")}finally{$.value=!1}};de(()=>{});function ae(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}return(t,e)=>{const o=S("el-icon"),i=S("el-option"),u=S("el-select"),s=S("el-input"),g=S("el-col"),d=S("el-date-picker"),c=S("el-row");return p(),y("div",we,[l("div",_e,[l("div",ke,[e[14]||(e[14]=l("div",{style:{flex:"1"}},[l("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),l("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),l("div",{class:"back-button",onClick:e[0]||(e[0]=a=>t.$router.push("/dashboard"))},[l("div",Ce,[r(o,{size:"18"},{default:v(()=>[r(b(pe))]),_:1})]),e[13]||(e[13]=l("span",{class:"back-text"},"返回首页",-1))])])]),l("div",Ie,[l("div",Ee,[e[21]||(e[21]=l("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),l("div",Te,[e[15]||(e[15]=l("div",{class:"section-title"},"选择AI模型",-1)),r(u,{modelValue:n.value.model,"onUpdate:modelValue":e[1]||(e[1]=a=>n.value.model=a),placeholder:"请选择模型",style:{width:"100%"}},{default:v(()=>[(p(),y(R,null,B(Y,a=>r(i,{key:a.value,label:a.label,value:a.value,disabled:a.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),l("div",ze,[e[17]||(e[17]=l("div",{class:"section-title"},"上传旅行照片",-1)),l("div",{class:M(["upload-area",{dragover:A.value,compressing:E.value}]),onDrop:Q,onDragover:e[2]||(e[2]=ce(a=>A.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=a=>A.value=!1),onClick:e[4]||(e[4]=a=>!E.value&&K())},[E.value?(p(),V(o,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:v(()=>[r(b(U))]),_:1})):(p(),V(o,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:v(()=>[r(b(me))]),_:1})),E.value?(p(),y("p",Ve," 正在压缩图片，请稍候... ")):(p(),y("p",Se," 点击或拖拽上传图片 ")),e[16]||(e[16]=l("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),l("input",{ref_key:"fileInput",ref:P,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:J},null,544),m.value.length>0?(p(),y("div",De,[(p(!0),y(R,null,B(m.value,(a,T)=>(p(),y("div",{key:T,class:"image-item"},[l("img",{src:a.preview,alt:`图片${T+1}`},null,8,$e),l("button",{class:"remove-btn",onClick:z=>X(T)},"×",8,Le)]))),128))])):D("",!0)]),l("div",Ae,[e[18]||(e[18]=l("div",{class:"section-title"},"写作风格",-1)),r(u,{modelValue:n.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=a=>n.value.writingStyle=a),placeholder:"请选择写作风格",style:{width:"100%"}},{default:v(()=>[(p(),y(R,null,B(O,a=>r(i,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),n.value.writingStyle==="自定义"?(p(),V(s,{key:0,modelValue:n.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=a=>n.value.customStyle=a),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):D("",!0)]),l("div",Ue,[e[19]||(e[19]=l("div",{class:"section-title"},"旅行信息",-1)),r(c,{gutter:12},{default:v(()=>[r(g,{xs:24,sm:12},{default:v(()=>[r(s,{modelValue:n.value.location,"onUpdate:modelValue":e[7]||(e[7]=a=>n.value.location=a),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),r(g,{xs:24,sm:12},{default:v(()=>[r(d,{modelValue:n.value.date,"onUpdate:modelValue":e[8]||(e[8]=a=>n.value.date=a),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),r(s,{modelValue:n.value.companions,"onUpdate:modelValue":e[9]||(e[9]=a=>n.value.companions=a),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),r(s,{modelValue:n.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=a=>n.value.specialExp=a),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),r(s,{modelValue:n.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=a=>n.value.emotionKeywords=a),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),r(s,{modelValue:n.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=a=>n.value.otherInfo=a),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),l("div",Me,[l("div",{class:M(["generate-button",{generating:w.value,disabled:m.value.length===0}]),onClick:q},[l("div",Re,[l("div",Be,[w.value?(p(),V(o,{key:1,size:"24",class:"rotating"},{default:v(()=>[r(b(U))]),_:1})):(p(),V(o,{key:0,size:"24"},{default:v(()=>[r(b(ge))]),_:1}))]),l("div",Fe,[l("span",Ne,F(w.value?"正在生成中...":"生成游记"),1),l("span",Pe,F(w.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),w.value?(p(),y("div",{key:0,class:"cancel-button",onClick:Z},[r(o,{size:"16"},{default:v(()=>[r(b(ve))]),_:1}),e[20]||(e[20]=l("span",null,"取消生成",-1))])):D("",!0)])]),l("div",Ge,[l("div",He,[e[23]||(e[23]=l("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),x.value?(p(),y("div",Ye,[l("div",{class:"action-btn copy",onClick:ee},[r(o,{size:"16"},{default:v(()=>[r(b(fe))]),_:1}),e[22]||(e[22]=l("span",null,"复制",-1))]),l("div",{class:M(["action-btn share",{generating:$.value}]),onClick:te},[$.value?(p(),V(o,{key:1,size:"16",class:"rotating"},{default:v(()=>[r(b(U))]),_:1})):(p(),V(o,{key:0,size:"16"},{default:v(()=>[r(b(xe))]),_:1})),l("span",null,F($.value?"生成中...":"分享图片"),1)],2)])):D("",!0)]),!x.value&&!w.value?(p(),y("div",Oe,[r(o,{size:"64"},{default:v(()=>[r(b(ye))]),_:1}),e[24]||(e[24]=l("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):D("",!0),w.value?(p(),y("div",je,[r(o,{size:"64",class:"rotating"},{default:v(()=>[r(b(U))]),_:1}),e[25]||(e[25]=l("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):D("",!0),x.value?(p(),y("div",Ke,[l("div",{class:"result-content",innerHTML:j.value,ref_key:"resultContentRef",ref:G},null,8,Je)])):D("",!0)])])])}}},tt=be(Qe,[["__scopeId","data-v-28a8629c"]]);export{tt as default};
