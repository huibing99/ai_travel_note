import{u as _e,a as ke,r as I,j as Ce,K as Ee,c as z,o as u,d as w,e as o,f as s,w as v,L as X,G as Ie,H as D,F as O,m as Z,l as L,t as G,E as g,M as Te,h as T,N as $e,O as ze,C as Y,P as Se,Q as Ve,R as De,J as Le,q as Ae,i as Ue}from"./index-489e93e0.js";import{h as Me}from"./html2canvas.esm-85f1a6b6.js";import{_ as Re}from"./_plugin-vue_export-helper-c27b6911.js";const Pe={class:"dashboard-container"},Fe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Be={style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ne={class:"back-icon"},He={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},Oe={class:"dashboard-card left-column",style:{padding:"30px"}},Ge={class:"form-section"},Ye={class:"form-section"},je={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},We={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},Ke={key:0,class:"image-preview"},qe=["src","alt"],Je=["onClick"],Qe={class:"form-section"},Xe={class:"form-section"},Ze={style:{"margin-top":"30px"}},et={class:"button-content"},tt={class:"button-icon"},ot={class:"button-text"},at={class:"main-text"},lt={class:"sub-text"},nt={class:"dashboard-card right-column",style:{padding:"30px"}},st={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},it={key:0,class:"result-actions"},rt={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},dt={key:1,style:{"text-align":"center",padding:"60px 20px"}},ct={key:2,class:"generate-result"},ut=["innerHTML"],pt={class:"image-preview-container"},mt=["src"],gt={class:"save-tips"},vt={class:"tip-text"},ft={class:"tip-title"},xt={key:0,class:"tip-desc"},yt={key:1,class:"wechat-tips"},ht={__name:"TravelNoteGenerator",setup(wt){const ne=_e(),j=ke(),P=I(!1),y=I([]),$=I(!1),_=I(""),ee=I(),S=I(!1),A=I(!1),te=I(),F=I(!1),B=I(""),l=I({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),se=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ie=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],re=Ce(()=>{if(!_.value)return"";let t=_.value;return t=t.replace(/\[图(\d+)\]/g,(e,n)=>{const r=parseInt(n)-1;return r>=0&&r<y.value.length?`<img src="${y.value[r].preview}" alt="图片${n}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`:e}),t}),de=()=>{var t;S.value||(t=ee.value)==null||t.click()},ce=t=>{const e=Array.from(t.target.files);oe(e)},ue=t=>{if(t.preventDefault(),P.value=!1,S.value)return;const e=Array.from(t.dataTransfer.files);oe(e)},oe=async t=>{const e=t.filter(n=>n.type.startsWith("image/"));if(y.value.length+e.length>9){g.warning("最多只能上传9张图片");return}if(e.length===0){g.warning("请选择有效的图片文件");return}S.value=!0,g.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const n of e)try{const r=await pe(n),m=new FileReader;m.onload=i=>{y.value.push({file:r,preview:i.target.result,name:n.name,originalSize:n.size,compressedSize:r.size})},m.readAsDataURL(r)}catch(r){console.error("图片压缩失败:",r),g.error(`图片 ${n.name} 压缩失败: ${r.message}`)}g.success(`成功压缩 ${e.length} 张图片`)}finally{S.value=!1}},pe=t=>new Promise((e,n)=>{const r=document.createElement("canvas"),m=r.getContext("2d"),i=new Image;i.onload=()=>{let{width:c,height:p}=i;const k=1920;c>p?c>k&&(p=p*k/c,c=k):p>k&&(c=c*k/p,p=k),r.width=c,r.height=p,m.drawImage(i,0,0,c,p);const E=a=>{r.toBlob(C=>{if(!C){n(new Error("图片压缩失败"));return}if(C.size<=1024*1024||a<=.1){const V=new File([C],t.name,{type:C.type,lastModified:Date.now()});e(V)}else E(Math.max(.1,a-.1))},t.type==="image/png"?"image/jpeg":t.type,a)};E(.8)},i.onerror=()=>{n(new Error("图片加载失败"))};const f=new FileReader;f.onload=c=>{i.src=c.target.result},f.onerror=()=>{n(new Error("文件读取失败"))},f.readAsDataURL(t)}),me=t=>{y.value.splice(t,1)},ge=async()=>{if(y.value.length===0){g.warning("请先上传图片");return}$.value=!0,_.value="";try{const t=new FormData;y.value.forEach((m,i)=>{t.append("images",m.file)}),t.append("model_selection",l.value.model),t.append("location",l.value.location),t.append("date",l.value.date),t.append("companions",l.value.companions),t.append("special_exp",l.value.specialExp),t.append("emotion_keywords",l.value.emotionKeywords),t.append("other_info",l.value.otherInfo),t.append("writing_style",l.value.writingStyle),l.value.writingStyle==="自定义"&&t.append("custom_style_input",l.value.customStyle);const e=await fetch(Te("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${j.token}`},body:t});if(!e.ok){if(e.status===401){const i=window.location.hash||window.location.pathname;localStorage.getItem("token")&&!i.includes("login")&&(localStorage.removeItem("token"),j.logout(),ne.push("/login"),g.error("登录已过期，请重新登录"));return}const m=await e.text();throw new Error(`生成失败: ${m}`)}const n=e.body.getReader(),r=new TextDecoder;for(;;){const{done:m,value:i}=await n.read();if(m)break;const f=r.decode(i,{stream:!0});_.value+=f}}catch(t){console.error("生成游记失败:",t),g.error("生成游记失败，请重试")}finally{$.value=!1}},ve=()=>{$.value=!1,g.info("已取消生成")},fe=async()=>{try{if(!navigator.clipboard.write){await navigator.clipboard.writeText(_.value),g.success("内容已复制到剪贴板（纯文本格式）");return}let t=_.value;const e=[],n=[];for(let i=0;i<y.value.length;i++){const f=y.value[i],c=fetch(f.preview).then(p=>p.blob()).then(p=>(n[i]=p,p));e.push(c)}await Promise.all(e),t=t.replace(/\[图(\d+)\]/g,(i,f)=>{const c=parseInt(f)-1;return c>=0&&c<y.value.length?`<img src="${y.value[c].preview}" alt="图片${f}" style="max-width: 300px; height: auto; border-radius: 8px; margin: 8px 0;" />`:i});const r=`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        ${t.replace(/\n/g,"<br>")}
      </div>
    `,m=new ClipboardItem({"text/html":new Blob([r],{type:"text/html"}),"text/plain":new Blob([_.value],{type:"text/plain"})});await navigator.clipboard.write([m]),g.success("图文内容已复制到剪贴板")}catch(t){console.error("复制失败:",t);try{await navigator.clipboard.writeText(_.value),g.success("内容已复制到剪贴板（纯文本格式）")}catch{g.error("复制失败，请手动选择复制")}}},xe=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,h=()=>/micromessenger/i.test(navigator.userAgent),ye=async()=>{if(!_.value||!te.value){g.warning("没有可分享的内容");return}A.value=!0,g.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div"),e=h()?540:600,n=h()?20:30;t.style.cssText=`
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
    `;const r=document.createElement("div");r.style.cssText=`
      margin-bottom: 30px;
      text-align: right;
      padding: 0;
      background: transparent;
    `;const m=document.createElement("div");m.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const i=document.createElement("div");i.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,i.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',m.appendChild(i),r.appendChild(m);const f=document.createElement("div");f.style.cssText=`
      font-size: ${h()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,f.textContent="✨ AI智能旅行游记";const c=document.createElement("div");c.style.cssText=`
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
    `;const E=j.user,a=(E==null?void 0:E.username)||(E==null?void 0:E.email)||"旅行者";k.textContent=a.charAt(0).toUpperCase();const C=document.createElement("span");C.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,C.textContent=a,p.appendChild(k),p.appendChild(C);const V=document.createElement("div");if(V.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,l.value.location){const d=document.createElement("div");d.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,d.innerHTML=`📍 ${l.value.location}`,V.appendChild(d)}const W=document.createElement("div");W.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `;const we=l.value.date||new Date().toLocaleDateString("zh-CN");W.innerHTML=`🕒 ${he(we)}`,V.appendChild(W),c.appendChild(p),c.appendChild(V);const K=document.createElement("div");K.style.cssText=`
      font-size: ${h()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let U=_.value;U=U.replace(/\[图(\d+)\]/g,(d,b)=>{const x=parseInt(b)-1;if(x>=0&&x<y.value.length){const N=y.value[x],H=h()?"480px":"540px";return`<img src="${N.preview}" alt="图片${b}" style="width: 100%; max-width: ${H}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}return d}),U=U.replace(/\n/g,"<br>"),K.innerHTML=U;const q=document.createElement("div");q.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,q.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,t.appendChild(r),t.appendChild(f),t.appendChild(c),t.appendChild(K),t.appendChild(q),document.body.appendChild(t);const ae=t.querySelectorAll("img");console.log(`Found ${ae.length} images in container`);const be=Array.from(ae).map((d,b)=>new Promise(x=>{if(console.log(`Checking image ${b+1}:`,d.src.substring(0,50)+"..."),d.src.startsWith("data:"))if(d.complete&&d.naturalWidth>0)console.log(`Image ${b+1} already loaded (base64)`),x();else{const N=()=>{console.log(`Image ${b+1} loaded successfully`),x()},H=()=>{console.warn(`Image ${b+1} failed to load`),x()};d.addEventListener("load",N,{once:!0}),d.addEventListener("error",H,{once:!0}),setTimeout(()=>{d.removeEventListener("load",N),d.removeEventListener("error",H),console.log(`Image ${b+1} load timeout, continuing...`),x()},5e3)}else d.complete?x():(d.onload=x,d.onerror=x)}));await Promise.all(be),console.log("All images processed");const M=t.scrollHeight;let J=h()?1.5:2,Q=h()?.8:.9;M>8e3?(J=h()?1.2:1.5,Q=h()?.7:.85,g.info("内容较长，正在优化图片质量以确保生成成功...")):M>5e3&&(J=h()?1.3:1.8,Q=h()?.75:.87);const le={useCORS:!0,allowTaint:!0,scale:J,backgroundColor:"#ffffff",logging:!0,width:e,height:M,scrollX:0,scrollY:0,windowWidth:e,windowHeight:M,foreignObjectRendering:!1,imageTimeout:15e3,onclone:d=>{console.log("Document cloned for html2canvas");const b=d.querySelectorAll("img");console.log(`Found ${b.length} images in cloned document`)}};console.log("html2canvas options:",le),console.log("Container dimensions:",{width:e,height:M}),await new Promise(d=>setTimeout(d,500));const R=await Me(t,le);if(console.log("Canvas generated:",{width:R.width,height:R.height}),R.width===0||R.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(t),R.toBlob(d=>{if(d){const b=URL.createObjectURL(d);if(xe()&&!h())B.value=b,F.value=!0,g.success("图片已生成，请长按图片保存到相册");else{const x=document.createElement("a");x.href=b,x.download=`旅行游记_${l.value.location||"未知地点"}_${new Date().toLocaleDateString()}.png`,document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(b),h()?g.success("图片已下载到微信下载文件夹"):g.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",Q)}catch(t){console.error("生成分享图片失败:",t),g.error("生成分享图片失败，请重试")}finally{A.value=!1}};Ee(()=>{});function he(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}return(t,e)=>{const n=z("el-icon"),r=z("el-option"),m=z("el-select"),i=z("el-input"),f=z("el-col"),c=z("el-date-picker"),p=z("el-row"),k=z("el-button"),E=z("el-dialog");return u(),w(O,null,[o("div",Pe,[o("div",Fe,[o("div",Be,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=a=>t.$router.push("/dashboard"))},[o("div",Ne,[s(n,{size:"18"},{default:v(()=>[s(T($e))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])])]),o("div",He,[o("div",Oe,[e[24]||(e[24]=o("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),o("div",Ge,[e[18]||(e[18]=o("div",{class:"section-title"},"选择AI模型",-1)),s(m,{modelValue:l.value.model,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.model=a),placeholder:"请选择模型",style:{width:"100%"}},{default:v(()=>[(u(),w(O,null,Z(se,a=>s(r,{key:a.value,label:a.label,value:a.value,disabled:a.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),o("div",Ye,[e[20]||(e[20]=o("div",{class:"section-title"},"上传旅行照片",-1)),o("div",{class:X(["upload-area",{dragover:P.value,compressing:S.value}]),onDrop:ue,onDragover:e[2]||(e[2]=Ie(a=>P.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=a=>P.value=!1),onClick:e[4]||(e[4]=a=>!S.value&&de())},[S.value?(u(),D(n,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:v(()=>[s(T(Y))]),_:1})):(u(),D(n,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:v(()=>[s(T(ze))]),_:1})),S.value?(u(),w("p",We," 正在压缩图片，请稍候... ")):(u(),w("p",je," 点击或拖拽上传图片 ")),e[19]||(e[19]=o("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),o("input",{ref_key:"fileInput",ref:ee,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:ce},null,544),y.value.length>0?(u(),w("div",Ke,[(u(!0),w(O,null,Z(y.value,(a,C)=>(u(),w("div",{key:C,class:"image-item"},[o("img",{src:a.preview,alt:`图片${C+1}`},null,8,qe),o("button",{class:"remove-btn",onClick:V=>me(C)},"×",8,Je)]))),128))])):L("",!0)]),o("div",Qe,[e[21]||(e[21]=o("div",{class:"section-title"},"写作风格",-1)),s(m,{modelValue:l.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.writingStyle=a),placeholder:"请选择写作风格",style:{width:"100%"}},{default:v(()=>[(u(),w(O,null,Z(ie,a=>s(r,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l.value.writingStyle==="自定义"?(u(),D(i,{key:0,modelValue:l.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value.customStyle=a),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):L("",!0)]),o("div",Xe,[e[22]||(e[22]=o("div",{class:"section-title"},"旅行信息",-1)),s(p,{gutter:12},{default:v(()=>[s(f,{xs:24,sm:12},{default:v(()=>[s(i,{modelValue:l.value.location,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.location=a),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),s(f,{xs:24,sm:12},{default:v(()=>[s(c,{modelValue:l.value.date,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.date=a),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),s(i,{modelValue:l.value.companions,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.companions=a),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:l.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=a=>l.value.specialExp=a),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:l.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=a=>l.value.emotionKeywords=a),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:l.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=a=>l.value.otherInfo=a),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),o("div",Ze,[o("div",{class:X(["generate-button",{generating:$.value,disabled:y.value.length===0}]),onClick:ge},[o("div",et,[o("div",tt,[$.value?(u(),D(n,{key:1,size:"24",class:"rotating"},{default:v(()=>[s(T(Y))]),_:1})):(u(),D(n,{key:0,size:"24"},{default:v(()=>[s(T(Se))]),_:1}))]),o("div",ot,[o("span",at,G($.value?"正在生成中...":"生成游记"),1),o("span",lt,G($.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),$.value?(u(),w("div",{key:0,class:"cancel-button",onClick:ve},[s(n,{size:"16"},{default:v(()=>[s(T(Ve))]),_:1}),e[23]||(e[23]=o("span",null,"取消生成",-1))])):L("",!0)])]),o("div",nt,[o("div",st,[e[26]||(e[26]=o("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),_.value?(u(),w("div",it,[o("div",{class:"action-btn copy",onClick:fe},[s(n,{size:"16"},{default:v(()=>[s(T(De))]),_:1}),e[25]||(e[25]=o("span",null,"复制",-1))]),o("div",{class:X(["action-btn share",{generating:A.value}]),onClick:ye},[A.value?(u(),D(n,{key:1,size:"16",class:"rotating"},{default:v(()=>[s(T(Y))]),_:1})):(u(),D(n,{key:0,size:"16"},{default:v(()=>[s(T(Le))]),_:1})),o("span",null,G(A.value?"生成中...":"分享图片"),1)],2)])):L("",!0)]),!_.value&&!$.value?(u(),w("div",rt,[s(n,{size:"64"},{default:v(()=>[s(T(Ae))]),_:1}),e[27]||(e[27]=o("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):L("",!0),$.value?(u(),w("div",dt,[s(n,{size:"64",class:"rotating"},{default:v(()=>[s(T(Y))]),_:1}),e[28]||(e[28]=o("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):L("",!0),_.value?(u(),w("div",ct,[o("div",{class:"result-content",innerHTML:re.value,ref_key:"resultContentRef",ref:te},null,8,ut)])):L("",!0)])])]),s(E,{modelValue:F.value,"onUpdate:modelValue":e[14]||(e[14]=a=>F.value=a),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(B.value),B.value=""})},{footer:v(()=>[s(k,{onClick:e[13]||(e[13]=a=>F.value=!1),type:"primary"},{default:v(()=>e[31]||(e[31]=[Ue("知道了")])),_:1,__:[31]})]),default:v(()=>[o("div",pt,[o("img",{src:B.value,alt:"分享图片",class:"preview-image"},null,8,mt),o("div",gt,[e[30]||(e[30]=o("div",{class:"tip-icon"},"💾",-1)),o("div",vt,[o("p",ft,G(h()?"保存图片到相册":"长按图片保存到相册"),1),h()?(u(),w("div",yt,e[29]||(e[29]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),o("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(u(),w("p",xt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])],64)}}},Ct=Re(ht,[["__scopeId","data-v-0cd0abe9"]]);export{Ct as default};
