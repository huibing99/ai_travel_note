import{u as Ce,a as Te,r as E,j as Ee,K as Ie,c as S,o as u,d as w,e as o,f as s,w as x,L as Z,G as $e,H as V,F as j,m as ee,l as A,t as G,E as m,M as Se,h as I,N as ze,O as Le,C as Y,P as Ve,Q as Ae,R as De,J as Ue,q as Ne,i as Re}from"./index-b2caebe8.js";import{h as Me}from"./html2canvas.esm-85f1a6b6.js";import{_ as Fe}from"./_plugin-vue_export-helper-c27b6911.js";const Pe={class:"dashboard-container"},Oe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Be={style:{display:"flex","justify-content":"space-between","align-items":"center"}},He={class:"back-icon"},je={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},Ge={class:"dashboard-card left-column",style:{padding:"30px"}},Ye={class:"form-section"},We={class:"form-section"},Ke={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},qe={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},Je={key:0,class:"image-preview"},Qe=["src","alt"],Xe=["onClick"],Ze={class:"form-section"},et={class:"form-section"},tt={style:{"margin-top":"30px"}},ot={class:"button-content"},at={class:"button-icon"},lt={class:"button-text"},nt={class:"main-text"},st={class:"sub-text"},it={class:"dashboard-card right-column",style:{padding:"30px"}},rt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},dt={key:0,class:"result-actions"},ct={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},ut={key:1,style:{"text-align":"center",padding:"60px 20px"}},pt={key:2,class:"generate-result"},mt=["innerHTML"],gt={class:"image-preview-container"},vt=["src"],ft={class:"save-tips"},xt={class:"tip-text"},yt={class:"tip-title"},ht={key:0,class:"tip-desc"},wt={key:1,class:"wechat-tips"},bt={key:2,class:"wechat-tips"},_t={__name:"TravelNoteGenerator",setup(kt){const se=Ce(),W=Te(),O=E(!1),h=E([]),$=E(!1),_=E(""),te=E(),z=E(!1),U=E(!1),oe=E(),N=E(!1),R=E(""),l=E({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),ie=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],re=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],de=Ee(()=>{if(!_.value)return"";let t=_.value;return t=t.replace(/\[图(\d+)\]/g,(e,n)=>{const d=parseInt(n)-1;return d>=0&&d<h.value.length?`<img src="${h.value[d].preview}" alt="图片${n}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`:e}),t}),ce=()=>{var t;z.value||(t=te.value)==null||t.click()},ue=t=>{const e=Array.from(t.target.files);ae(e)},pe=t=>{if(t.preventDefault(),O.value=!1,z.value)return;const e=Array.from(t.dataTransfer.files);ae(e)},ae=async t=>{const e=t.filter(n=>n.type.startsWith("image/"));if(h.value.length+e.length>9){m.warning("最多只能上传9张图片");return}if(e.length===0){m.warning("请选择有效的图片文件");return}z.value=!0,m.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const n of e)try{const d=await me(n),g=new FileReader;g.onload=i=>{h.value.push({file:d,preview:i.target.result,name:n.name,originalSize:n.size,compressedSize:d.size})},g.readAsDataURL(d)}catch(d){console.error("图片压缩失败:",d),m.error(`图片 ${n.name} 压缩失败: ${d.message}`)}m.success(`成功压缩 ${e.length} 张图片`)}finally{z.value=!1}},me=t=>new Promise((e,n)=>{const d=document.createElement("canvas"),g=d.getContext("2d"),i=new Image;i.onload=()=>{let{width:r,height:p}=i;const k=1920;r>p?r>k&&(p=p*k/r,r=k):p>k&&(r=r*k/p,p=k),d.width=r,d.height=p,g.drawImage(i,0,0,r,p);const T=a=>{d.toBlob(C=>{if(!C){n(new Error("图片压缩失败"));return}if(C.size<=1024*1024||a<=.1){const L=new File([C],t.name,{type:C.type,lastModified:Date.now()});e(L)}else T(Math.max(.1,a-.1))},t.type==="image/png"?"image/jpeg":t.type,a)};T(.8)},i.onerror=()=>{n(new Error("图片加载失败"))};const v=new FileReader;v.onload=r=>{i.src=r.target.result},v.onerror=()=>{n(new Error("文件读取失败"))},v.readAsDataURL(t)}),ge=t=>{h.value.splice(t,1)},ve=async()=>{if(h.value.length===0){m.warning("请先上传图片");return}$.value=!0,_.value="";try{const t=new FormData;h.value.forEach((g,i)=>{t.append("images",g.file)}),t.append("model_selection",l.value.model),t.append("location",l.value.location),t.append("date",l.value.date),t.append("companions",l.value.companions),t.append("special_exp",l.value.specialExp),t.append("emotion_keywords",l.value.emotionKeywords),t.append("other_info",l.value.otherInfo),t.append("writing_style",l.value.writingStyle),l.value.writingStyle==="自定义"&&t.append("custom_style_input",l.value.customStyle);const e=await fetch(Se("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${W.token}`},body:t});if(!e.ok){if(e.status===401){const i=window.location.hash||window.location.pathname;localStorage.getItem("token")&&!i.includes("login")&&(localStorage.removeItem("token"),W.logout(),se.push("/login"),m.error("登录已过期，请重新登录"));return}const g=await e.text();throw new Error(`生成失败: ${g}`)}const n=e.body.getReader(),d=new TextDecoder;for(;;){const{done:g,value:i}=await n.read();if(g)break;const v=d.decode(i,{stream:!0});if(v.includes("___FINAL_CONTENT___")){const r=v.match(/___FINAL_CONTENT___\n([\s\S]*?)\n___END_FINAL_CONTENT___/);r&&r[1]&&(_.value=r[1],console.log("接收到最终完整内容，已替换显示"))}else _.value+=v}}catch(t){console.error("生成游记失败:",t),m.error("生成游记失败，请重试")}finally{$.value=!1}},fe=()=>{$.value=!1,m.info("已取消生成")},xe=async()=>{try{if(!navigator.clipboard.write){await navigator.clipboard.writeText(_.value),m.success("内容已复制到剪贴板（纯文本格式）");return}let t=_.value;const e=[],n=[];for(let i=0;i<h.value.length;i++){const v=h.value[i],r=fetch(v.preview).then(p=>p.blob()).then(p=>(n[i]=p,p));e.push(r)}await Promise.all(e),t=t.replace(/\[图(\d+)\]/g,(i,v)=>{const r=parseInt(v)-1;return r>=0&&r<h.value.length?`<img src="${h.value[r].preview}" alt="图片${v}" style="max-width: 300px; height: auto; border-radius: 8px; margin: 8px 0;" />`:i});const d=`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        ${t.replace(/\n/g,"<br>")}
      </div>
    `,g=new ClipboardItem({"text/html":new Blob([d],{type:"text/html"}),"text/plain":new Blob([_.value],{type:"text/plain"})});await navigator.clipboard.write([g]),m.success("图文内容已复制到剪贴板")}catch(t){console.error("复制失败:",t);try{await navigator.clipboard.writeText(_.value),m.success("内容已复制到剪贴板（纯文本格式）")}catch{m.error("复制失败，请手动选择复制")}}},ye=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,y=()=>/micromessenger/i.test(navigator.userAgent),B=()=>/Android/i.test(navigator.userAgent),he=async()=>{if(!_.value||!oe.value){m.warning("没有可分享的内容");return}U.value=!0,m.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div"),e=y()?540:600,n=y()?20:30;t.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${e}px;
      background: #fff;
      padding: ${n}px;
      padding-top: ${n+60}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `;const d=document.createElement("div");d.style.cssText=`
      margin-bottom: 30px;
      text-align: right;
      padding: 0;
      background: transparent;
    `;const g=document.createElement("div");g.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const i=document.createElement("div");i.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,i.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',g.appendChild(i),d.appendChild(g);const v=document.createElement("div");v.style.cssText=`
      font-size: ${y()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,v.textContent="✨ AI智能旅行游记";const r=document.createElement("div");r.style.cssText=`
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
    `;const p=document.createElement("div");p.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const k=document.createElement("div");k.style.cssText=`
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
    `;const T=W.user,a=(T==null?void 0:T.username)||(T==null?void 0:T.email)||"旅行者";k.textContent=a.charAt(0).toUpperCase();const C=document.createElement("span");C.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,C.textContent=a,p.appendChild(k),p.appendChild(C);const L=document.createElement("div");if(L.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,l.value.location){const c=document.createElement("div");c.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,c.innerHTML=`📍 ${l.value.location}`,L.appendChild(c)}const K=document.createElement("div");K.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `;const _e=l.value.date||new Date().toLocaleDateString("zh-CN");K.innerHTML=`🕒 ${we(_e)}`,L.appendChild(K),r.appendChild(p),r.appendChild(L);const q=document.createElement("div");q.style.cssText=`
      font-size: ${y()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let M=_.value;M=M.replace(/\[图(\d+)\]/g,(c,b)=>{const f=parseInt(b)-1;if(f>=0&&f<h.value.length){const D=h.value[f],H=y()?"480px":"540px";return`<img src="${D.preview}" alt="图片${b}" style="width: 100%; max-width: ${H}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}return c}),M=M.replace(/\n/g,"<br>"),q.innerHTML=M;const J=document.createElement("div");J.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,J.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,t.appendChild(d),t.appendChild(v),t.appendChild(r),t.appendChild(q),t.appendChild(J),document.body.appendChild(t);const le=t.querySelectorAll("img");console.log(`Found ${le.length} images in container`);const ke=Array.from(le).map((c,b)=>new Promise(f=>{if(console.log(`Checking image ${b+1}:`,c.src.substring(0,50)+"..."),c.src.startsWith("data:"))if(c.complete&&c.naturalWidth>0)console.log(`Image ${b+1} already loaded (base64)`),f();else{const D=()=>{console.log(`Image ${b+1} loaded successfully`),f()},H=()=>{console.warn(`Image ${b+1} failed to load`),f()};c.addEventListener("load",D,{once:!0}),c.addEventListener("error",H,{once:!0}),setTimeout(()=>{c.removeEventListener("load",D),c.removeEventListener("error",H),console.log(`Image ${b+1} load timeout, continuing...`),f()},5e3)}else c.complete?f():(c.onload=f,c.onerror=f)}));await Promise.all(ke),console.log("All images processed");const F=t.scrollHeight;let Q=y()?1.5:2,X=y()?.8:.9;F>8e3?(Q=y()?1.2:1.5,X=y()?.7:.85,m.info("内容较长，正在优化图片质量以确保生成成功...")):F>5e3&&(Q=y()?1.3:1.8,X=y()?.75:.87);const ne={useCORS:!0,allowTaint:!0,scale:Q,backgroundColor:"#ffffff",logging:!0,width:e,height:F,scrollX:0,scrollY:0,windowWidth:e,windowHeight:F,foreignObjectRendering:!1,imageTimeout:15e3,onclone:c=>{console.log("Document cloned for html2canvas");const b=c.querySelectorAll("img");console.log(`Found ${b.length} images in cloned document`)}};console.log("html2canvas options:",ne),console.log("Container dimensions:",{width:e,height:F}),await new Promise(c=>setTimeout(c,500));const P=await Me(t,ne);if(console.log("Canvas generated:",{width:P.width,height:P.height}),P.width===0||P.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(t),P.toBlob(c=>{if(c){const b=URL.createObjectURL(c);if(ye()&&(!y()||y()&&B()))if(y()&&B()){const f=new FileReader;f.onload=function(D){R.value=D.target.result,N.value=!0,m.success("图片已生成，请长按图片保存到相册")},f.readAsDataURL(c),URL.revokeObjectURL(b)}else R.value=b,N.value=!0,m.success("图片已生成，请长按图片保存到相册");else{const f=document.createElement("a");f.href=b,f.download=`旅行游记_${l.value.location||"未知地点"}_${new Date().toLocaleDateString()}.jpg`,document.body.appendChild(f),f.click(),document.body.removeChild(f),URL.revokeObjectURL(b),y()?m.success("图片已下载到微信下载文件夹"):m.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",X)}catch(t){console.error("生成分享图片失败:",t),m.error("生成分享图片失败，请重试")}finally{U.value=!1}};Ie(()=>{});function we(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}function be(){return y()||B(),"保存图片到相册"}return(t,e)=>{const n=S("el-icon"),d=S("el-option"),g=S("el-select"),i=S("el-input"),v=S("el-col"),r=S("el-date-picker"),p=S("el-row"),k=S("el-button"),T=S("el-dialog");return u(),w(j,null,[o("div",Pe,[o("div",Oe,[o("div",Be,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=a=>t.$router.push("/dashboard"))},[o("div",He,[s(n,{size:"18"},{default:x(()=>[s(I(ze))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])])]),o("div",je,[o("div",Ge,[e[24]||(e[24]=o("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),o("div",Ye,[e[18]||(e[18]=o("div",{class:"section-title"},"选择AI模型",-1)),s(g,{modelValue:l.value.model,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.model=a),placeholder:"请选择模型",style:{width:"100%"}},{default:x(()=>[(u(),w(j,null,ee(ie,a=>s(d,{key:a.value,label:a.label,value:a.value,disabled:a.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),o("div",We,[e[20]||(e[20]=o("div",{class:"section-title"},"上传旅行照片",-1)),o("div",{class:Z(["upload-area",{dragover:O.value,compressing:z.value}]),onDrop:pe,onDragover:e[2]||(e[2]=$e(a=>O.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=a=>O.value=!1),onClick:e[4]||(e[4]=a=>!z.value&&ce())},[z.value?(u(),V(n,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:x(()=>[s(I(Y))]),_:1})):(u(),V(n,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:x(()=>[s(I(Le))]),_:1})),z.value?(u(),w("p",qe," 正在压缩图片，请稍候... ")):(u(),w("p",Ke," 点击或拖拽上传图片 ")),e[19]||(e[19]=o("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),o("input",{ref_key:"fileInput",ref:te,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:ue},null,544),h.value.length>0?(u(),w("div",Je,[(u(!0),w(j,null,ee(h.value,(a,C)=>(u(),w("div",{key:C,class:"image-item"},[o("img",{src:a.preview,alt:`图片${C+1}`},null,8,Qe),o("button",{class:"remove-btn",onClick:L=>ge(C)},"×",8,Xe)]))),128))])):A("",!0)]),o("div",Ze,[e[21]||(e[21]=o("div",{class:"section-title"},"写作风格",-1)),s(g,{modelValue:l.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.writingStyle=a),placeholder:"请选择写作风格",style:{width:"100%"}},{default:x(()=>[(u(),w(j,null,ee(re,a=>s(d,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l.value.writingStyle==="自定义"?(u(),V(i,{key:0,modelValue:l.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value.customStyle=a),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):A("",!0)]),o("div",et,[e[22]||(e[22]=o("div",{class:"section-title"},"旅行信息",-1)),s(p,{gutter:12},{default:x(()=>[s(v,{xs:24,sm:12},{default:x(()=>[s(i,{modelValue:l.value.location,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.location=a),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),s(v,{xs:24,sm:12},{default:x(()=>[s(r,{modelValue:l.value.date,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.date=a),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),s(i,{modelValue:l.value.companions,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.companions=a),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:l.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=a=>l.value.specialExp=a),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:l.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=a=>l.value.emotionKeywords=a),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:l.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=a=>l.value.otherInfo=a),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),o("div",tt,[o("div",{class:Z(["generate-button",{generating:$.value,disabled:h.value.length===0}]),onClick:ve},[o("div",ot,[o("div",at,[$.value?(u(),V(n,{key:1,size:"24",class:"rotating"},{default:x(()=>[s(I(Y))]),_:1})):(u(),V(n,{key:0,size:"24"},{default:x(()=>[s(I(Ve))]),_:1}))]),o("div",lt,[o("span",nt,G($.value?"正在生成中...":"生成游记"),1),o("span",st,G($.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),$.value?(u(),w("div",{key:0,class:"cancel-button",onClick:fe},[s(n,{size:"16"},{default:x(()=>[s(I(Ae))]),_:1}),e[23]||(e[23]=o("span",null,"取消生成",-1))])):A("",!0)])]),o("div",it,[o("div",rt,[e[26]||(e[26]=o("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),_.value?(u(),w("div",dt,[o("div",{class:"action-btn copy",onClick:xe},[s(n,{size:"16"},{default:x(()=>[s(I(De))]),_:1}),e[25]||(e[25]=o("span",null,"复制",-1))]),o("div",{class:Z(["action-btn share",{generating:U.value}]),onClick:he},[U.value?(u(),V(n,{key:1,size:"16",class:"rotating"},{default:x(()=>[s(I(Y))]),_:1})):(u(),V(n,{key:0,size:"16"},{default:x(()=>[s(I(Ue))]),_:1})),o("span",null,G(U.value?"生成中...":"分享图片"),1)],2)])):A("",!0)]),!_.value&&!$.value?(u(),w("div",ct,[s(n,{size:"64"},{default:x(()=>[s(I(Ne))]),_:1}),e[27]||(e[27]=o("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):A("",!0),$.value?(u(),w("div",ut,[s(n,{size:"64",class:"rotating"},{default:x(()=>[s(I(Y))]),_:1}),e[28]||(e[28]=o("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):A("",!0),_.value?(u(),w("div",pt,[o("div",{class:"result-content",innerHTML:de.value,ref_key:"resultContentRef",ref:oe},null,8,mt)])):A("",!0)])])]),s(T,{modelValue:N.value,"onUpdate:modelValue":e[14]||(e[14]=a=>N.value=a),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(R.value),R.value=""})},{footer:x(()=>[s(k,{onClick:e[13]||(e[13]=a=>N.value=!1),type:"primary"},{default:x(()=>e[32]||(e[32]=[Re("知道了")])),_:1,__:[32]})]),default:x(()=>[o("div",gt,[o("img",{src:R.value,alt:"分享图片",class:"preview-image"},null,8,vt),o("div",ft,[e[31]||(e[31]=o("div",{class:"tip-icon"},"💾",-1)),o("div",xt,[o("p",yt,G(be()),1),y()?B()?(u(),w("div",wt,e[29]||(e[29]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),o("p",{class:"tip-desc"},'• 点击右上角"●●●"分享给朋友或朋友圈',-1),o("p",{class:"tip-desc"},"• 如果长按无效，请尝试截屏保存",-1)]))):(u(),w("div",bt,e[30]||(e[30]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),o("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(u(),w("p",ht,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])],64)}}},It=Fe(_t,[["__scopeId","data-v-e563a405"]]);export{It as default};
