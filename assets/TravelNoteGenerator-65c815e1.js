import{u as _e,a as be,r as E,j as ke,K as Ce,c as z,o as c,d as h,e as o,f as s,w as m,L as X,G as Ee,H as L,F as j,m as Z,l as D,t as B,E as v,M as Te,h as $,N as Ie,O as $e,C as G,P as ze,Q as Ve,J as Se,q as Le,i as De}from"./index-6ced4153.js";import{h as Ae}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";const Me={class:"dashboard-container"},Ue={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Re={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Fe={class:"back-icon"},Pe={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},Oe={class:"dashboard-card left-column",style:{padding:"30px"}},He={class:"form-section"},je={class:"form-section"},Be={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},Ge={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},Ye={key:0,class:"image-preview"},We=["src","alt"],Ke=["onClick"],qe={class:"form-section"},Je={class:"form-section"},Qe={style:{"margin-top":"30px"}},Xe={class:"button-content"},Ze={class:"button-icon"},et={class:"button-text"},tt={class:"main-text"},ot={class:"sub-text"},lt={class:"dashboard-card right-column",style:{padding:"30px"}},at={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},nt={key:0,class:"result-actions"},st={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},it={key:1,style:{"text-align":"center",padding:"60px 20px"}},rt={key:2,class:"generate-result"},dt=["innerHTML"],ct={class:"image-preview-container"},ut=["src"],pt={class:"save-tips"},mt={class:"tip-text"},gt={class:"tip-title"},vt={key:0,class:"tip-desc"},ft={key:1,class:"wechat-tips"},xt={__name:"TravelNoteGenerator",setup(yt){const ne=_e(),Y=be(),R=E(!1),_=E([]),T=E(!1),I=E(""),ee=E(),V=E(!1),A=E(!1),te=E(),F=E(!1),P=E(""),a=E({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),se=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ie=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],re=ke(()=>{if(!I.value)return"";let t=I.value;return t=t.replace(/\[图(\d+)\]/g,(e,n)=>{const i=parseInt(n)-1;return i>=0&&i<_.value.length?`<img src="${_.value[i].preview}" alt="图片${n}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`:e}),t}),de=()=>{var t;V.value||(t=ee.value)==null||t.click()},ce=t=>{const e=Array.from(t.target.files);oe(e)},ue=t=>{if(t.preventDefault(),R.value=!1,V.value)return;const e=Array.from(t.dataTransfer.files);oe(e)},oe=async t=>{const e=t.filter(n=>n.type.startsWith("image/"));if(_.value.length+e.length>9){v.warning("最多只能上传9张图片");return}if(e.length===0){v.warning("请选择有效的图片文件");return}V.value=!0,v.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const n of e)try{const i=await pe(n),p=new FileReader;p.onload=d=>{_.value.push({file:i,preview:d.target.result,name:n.name,originalSize:n.size,compressedSize:i.size})},p.readAsDataURL(i)}catch(i){console.error("图片压缩失败:",i),v.error(`图片 ${n.name} 压缩失败: ${i.message}`)}v.success(`成功压缩 ${e.length} 张图片`)}finally{V.value=!1}},pe=t=>new Promise((e,n)=>{const i=document.createElement("canvas"),p=i.getContext("2d"),d=new Image;d.onload=()=>{let{width:u,height:y}=d;const b=1920;u>y?u>b&&(y=y*b/u,u=b):y>b&&(u=u*b/y,y=b),i.width=u,i.height=y,p.drawImage(d,0,0,u,y);const C=l=>{i.toBlob(k=>{if(!k){n(new Error("图片压缩失败"));return}if(k.size<=1024*1024||l<=.1){const S=new File([k],t.name,{type:k.type,lastModified:Date.now()});e(S)}else C(Math.max(.1,l-.1))},t.type==="image/png"?"image/jpeg":t.type,l)};C(.8)},d.onerror=()=>{n(new Error("图片加载失败"))};const x=new FileReader;x.onload=u=>{d.src=u.target.result},x.onerror=()=>{n(new Error("文件读取失败"))},x.readAsDataURL(t)}),me=t=>{_.value.splice(t,1)},ge=async()=>{if(_.value.length===0){v.warning("请先上传图片");return}T.value=!0,I.value="";try{const t=new FormData;_.value.forEach((p,d)=>{t.append("images",p.file)}),t.append("model_selection",a.value.model),t.append("location",a.value.location),t.append("date",a.value.date),t.append("companions",a.value.companions),t.append("special_exp",a.value.specialExp),t.append("emotion_keywords",a.value.emotionKeywords),t.append("other_info",a.value.otherInfo),t.append("writing_style",a.value.writingStyle),a.value.writingStyle==="自定义"&&t.append("custom_style_input",a.value.customStyle);const e=await fetch(Te("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${Y.token}`},body:t});if(!e.ok){if(e.status===401){const d=window.location.hash||window.location.pathname;localStorage.getItem("token")&&!d.includes("login")&&(localStorage.removeItem("token"),Y.logout(),ne.push("/login"),v.error("登录已过期，请重新登录"));return}const p=await e.text();throw new Error(`生成失败: ${p}`)}const n=e.body.getReader(),i=new TextDecoder;for(;;){const{done:p,value:d}=await n.read();if(p)break;const x=i.decode(d,{stream:!0});if(x.includes("___FINAL_CONTENT___")){const u=x.match(/___FINAL_CONTENT___\n([\s\S]*?)\n___END_FINAL_CONTENT___/);u&&u[1]&&(I.value=u[1],console.log("接收到最终完整内容，已替换显示"))}else I.value+=x}}catch(t){console.error("生成游记失败:",t),v.error("生成游记失败，请重试")}finally{T.value=!1}},ve=()=>{T.value=!1,v.info("已取消生成")},fe=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,f=()=>/micromessenger/i.test(navigator.userAgent),xe=async()=>{if(!I.value||!te.value){v.warning("没有可分享的内容");return}A.value=!0,v.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div"),e=f()?540:600,n=f()?20:30;t.style.cssText=`
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
    `;const i=document.createElement("div");i.style.cssText=`
      margin-bottom: 30px;
      text-align: right;
      padding: 0;
      background: transparent;
    `;const p=document.createElement("div");p.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const d=document.createElement("div");d.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,d.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',p.appendChild(d),i.appendChild(p);const x=document.createElement("div");x.style.cssText=`
      font-size: ${f()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,x.textContent="✨ AI智能旅行游记";const u=document.createElement("div");u.style.cssText=`
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
    `;const y=document.createElement("div");y.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const b=document.createElement("div");b.style.cssText=`
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
    `;const C=Y.user,l=(C==null?void 0:C.username)||(C==null?void 0:C.email)||"旅行者";b.textContent=l.charAt(0).toUpperCase();const k=document.createElement("span");k.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,k.textContent=l,y.appendChild(b),y.appendChild(k);const S=document.createElement("div");if(S.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,a.value.location){const r=document.createElement("div");r.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,r.innerHTML=`📍 ${a.value.location}`,S.appendChild(r)}const W=document.createElement("div");W.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `;const he=a.value.date||new Date().toLocaleDateString("zh-CN");W.innerHTML=`🕒 ${ye(he)}`,S.appendChild(W),u.appendChild(y),u.appendChild(S);const K=document.createElement("div");K.style.cssText=`
      font-size: ${f()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let N=I.value;N=N.replace(/\[图(\d+)\]/g,(r,w)=>{const g=parseInt(w)-1;if(g>=0&&g<_.value.length){const O=_.value[g],H=f()?"480px":"540px";return`<img src="${O.preview}" alt="图片${w}" style="width: 100%; max-width: ${H}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}return r}),N=N.replace(/\n/g,"<br>"),K.innerHTML=N;const q=document.createElement("div");q.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,q.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,t.appendChild(i),t.appendChild(x),t.appendChild(u),t.appendChild(K),t.appendChild(q),document.body.appendChild(t);const le=t.querySelectorAll("img");console.log(`Found ${le.length} images in container`);const we=Array.from(le).map((r,w)=>new Promise(g=>{if(console.log(`Checking image ${w+1}:`,r.src.substring(0,50)+"..."),r.src.startsWith("data:"))if(r.complete&&r.naturalWidth>0)console.log(`Image ${w+1} already loaded (base64)`),g();else{const O=()=>{console.log(`Image ${w+1} loaded successfully`),g()},H=()=>{console.warn(`Image ${w+1} failed to load`),g()};r.addEventListener("load",O,{once:!0}),r.addEventListener("error",H,{once:!0}),setTimeout(()=>{r.removeEventListener("load",O),r.removeEventListener("error",H),console.log(`Image ${w+1} load timeout, continuing...`),g()},5e3)}else r.complete?g():(r.onload=g,r.onerror=g)}));await Promise.all(we),console.log("All images processed");const M=t.scrollHeight;let J=f()?1.5:2,Q=f()?.8:.9;M>8e3?(J=f()?1.2:1.5,Q=f()?.7:.85,v.info("内容较长，正在优化图片质量以确保生成成功...")):M>5e3&&(J=f()?1.3:1.8,Q=f()?.75:.87);const ae={useCORS:!0,allowTaint:!0,scale:J,backgroundColor:"#ffffff",logging:!0,width:e,height:M,scrollX:0,scrollY:0,windowWidth:e,windowHeight:M,foreignObjectRendering:!1,imageTimeout:15e3,onclone:r=>{console.log("Document cloned for html2canvas");const w=r.querySelectorAll("img");console.log(`Found ${w.length} images in cloned document`)}};console.log("html2canvas options:",ae),console.log("Container dimensions:",{width:e,height:M}),await new Promise(r=>setTimeout(r,500));const U=await Ae(t,ae);if(console.log("Canvas generated:",{width:U.width,height:U.height}),U.width===0||U.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(t),U.toBlob(r=>{if(r){const w=URL.createObjectURL(r);if(fe()&&!f())P.value=w,F.value=!0,v.success("图片已生成，请长按图片保存到相册");else{const g=document.createElement("a");g.href=w,g.download=`旅行游记_${a.value.location||"未知地点"}_${new Date().toLocaleDateString()}.jpg`,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(w),f()?v.success("图片已下载到微信下载文件夹"):v.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",Q)}catch(t){console.error("生成分享图片失败:",t),v.error("生成分享图片失败，请重试")}finally{A.value=!1}};Ce(()=>{});function ye(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}return(t,e)=>{const n=z("el-icon"),i=z("el-option"),p=z("el-select"),d=z("el-input"),x=z("el-col"),u=z("el-date-picker"),y=z("el-row"),b=z("el-button"),C=z("el-dialog");return c(),h(j,null,[o("div",Me,[o("div",Ue,[o("div",Re,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=l=>t.$router.push("/dashboard"))},[o("div",Fe,[s(n,{size:"18"},{default:m(()=>[s($(Ie))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])])]),o("div",Pe,[o("div",Oe,[e[24]||(e[24]=o("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),o("div",He,[e[18]||(e[18]=o("div",{class:"section-title"},"选择AI模型",-1)),s(p,{modelValue:a.value.model,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.model=l),placeholder:"请选择模型",style:{width:"100%"}},{default:m(()=>[(c(),h(j,null,Z(se,l=>s(i,{key:l.value,label:l.label,value:l.value,disabled:l.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),o("div",je,[e[20]||(e[20]=o("div",{class:"section-title"},"上传旅行照片",-1)),o("div",{class:X(["upload-area",{dragover:R.value,compressing:V.value}]),onDrop:ue,onDragover:e[2]||(e[2]=Ee(l=>R.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=l=>R.value=!1),onClick:e[4]||(e[4]=l=>!V.value&&de())},[V.value?(c(),L(n,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:m(()=>[s($(G))]),_:1})):(c(),L(n,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:m(()=>[s($($e))]),_:1})),V.value?(c(),h("p",Ge," 正在压缩图片，请稍候... ")):(c(),h("p",Be," 点击或拖拽上传图片 ")),e[19]||(e[19]=o("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),o("input",{ref_key:"fileInput",ref:ee,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:ce},null,544),_.value.length>0?(c(),h("div",Ye,[(c(!0),h(j,null,Z(_.value,(l,k)=>(c(),h("div",{key:k,class:"image-item"},[o("img",{src:l.preview,alt:`图片${k+1}`},null,8,We),o("button",{class:"remove-btn",onClick:S=>me(k)},"×",8,Ke)]))),128))])):D("",!0)]),o("div",qe,[e[21]||(e[21]=o("div",{class:"section-title"},"写作风格",-1)),s(p,{modelValue:a.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.writingStyle=l),placeholder:"请选择写作风格",style:{width:"100%"}},{default:m(()=>[(c(),h(j,null,Z(ie,l=>s(i,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a.value.writingStyle==="自定义"?(c(),L(d,{key:0,modelValue:a.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value.customStyle=l),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):D("",!0)]),o("div",Je,[e[22]||(e[22]=o("div",{class:"section-title"},"旅行信息",-1)),s(y,{gutter:12},{default:m(()=>[s(x,{xs:24,sm:12},{default:m(()=>[s(d,{modelValue:a.value.location,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value.location=l),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),s(x,{xs:24,sm:12},{default:m(()=>[s(u,{modelValue:a.value.date,"onUpdate:modelValue":e[8]||(e[8]=l=>a.value.date=l),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),s(d,{modelValue:a.value.companions,"onUpdate:modelValue":e[9]||(e[9]=l=>a.value.companions=l),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(d,{modelValue:a.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=l=>a.value.specialExp=l),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(d,{modelValue:a.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=l=>a.value.emotionKeywords=l),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(d,{modelValue:a.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=l=>a.value.otherInfo=l),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),o("div",Qe,[o("div",{class:X(["generate-button",{generating:T.value,disabled:_.value.length===0}]),onClick:ge},[o("div",Xe,[o("div",Ze,[T.value?(c(),L(n,{key:1,size:"24",class:"rotating"},{default:m(()=>[s($(G))]),_:1})):(c(),L(n,{key:0,size:"24"},{default:m(()=>[s($(ze))]),_:1}))]),o("div",et,[o("span",tt,B(T.value?"正在生成中...":"生成游记"),1),o("span",ot,B(T.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),T.value?(c(),h("div",{key:0,class:"cancel-button",onClick:ve},[s(n,{size:"16"},{default:m(()=>[s($(Ve))]),_:1}),e[23]||(e[23]=o("span",null,"取消生成",-1))])):D("",!0)])]),o("div",lt,[o("div",at,[e[25]||(e[25]=o("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),I.value?(c(),h("div",nt,[o("div",{class:X(["action-btn share",{generating:A.value}]),onClick:xe},[A.value?(c(),L(n,{key:1,size:"16",class:"rotating"},{default:m(()=>[s($(G))]),_:1})):(c(),L(n,{key:0,size:"16"},{default:m(()=>[s($(Se))]),_:1})),o("span",null,B(A.value?"生成中...":"分享图片"),1)],2)])):D("",!0)]),!I.value&&!T.value?(c(),h("div",st,[s(n,{size:"64"},{default:m(()=>[s($(Le))]),_:1}),e[26]||(e[26]=o("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):D("",!0),T.value?(c(),h("div",it,[s(n,{size:"64",class:"rotating"},{default:m(()=>[s($(G))]),_:1}),e[27]||(e[27]=o("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):D("",!0),I.value?(c(),h("div",rt,[o("div",{class:"result-content",innerHTML:re.value,ref_key:"resultContentRef",ref:te},null,8,dt)])):D("",!0)])])]),s(C,{modelValue:F.value,"onUpdate:modelValue":e[14]||(e[14]=l=>F.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(P.value),P.value=""})},{footer:m(()=>[s(b,{onClick:e[13]||(e[13]=l=>F.value=!1),type:"primary"},{default:m(()=>e[30]||(e[30]=[De("知道了")])),_:1,__:[30]})]),default:m(()=>[o("div",ct,[o("img",{src:P.value,alt:"分享图片",class:"preview-image"},null,8,ut),o("div",pt,[e[29]||(e[29]=o("div",{class:"tip-icon"},"💾",-1)),o("div",mt,[o("p",gt,B(f()?"保存图片到相册":"长按图片保存到相册"),1),f()?(c(),h("div",ft,e[28]||(e[28]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),o("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(c(),h("p",vt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])],64)}}},bt=Ne(xt,[["__scopeId","data-v-8c4982f6"]]);export{bt as default};
