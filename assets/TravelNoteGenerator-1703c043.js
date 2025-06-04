import{u as Ce,a as Te,r as E,j as Ee,K as Ie,c as S,o as u,d as w,e as o,f as s,w as f,L as Z,G as $e,H as L,F as H,m as ee,l as A,t as j,E as v,M as Se,h as I,N as ze,O as Ve,C as G,P as Le,Q as Ae,R as De,J as Ne,q as Me,i as Ue}from"./index-c9faa4d3.js";import{h as Re}from"./html2canvas.esm-85f1a6b6.js";import{_ as Pe}from"./_plugin-vue_export-helper-c27b6911.js";const Fe={class:"dashboard-container"},Be={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Oe={style:{display:"flex","justify-content":"space-between","align-items":"center"}},He={class:"back-icon"},je={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},Ge={class:"dashboard-card left-column",style:{padding:"30px"}},Ye={class:"form-section"},We={class:"form-section"},Ke={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},qe={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},Je={key:0,class:"image-preview"},Qe=["src","alt"],Xe=["onClick"],Ze={class:"form-section"},et={class:"form-section"},tt={style:{"margin-top":"30px"}},ot={class:"button-content"},lt={class:"button-icon"},at={class:"button-text"},nt={class:"main-text"},st={class:"sub-text"},it={class:"dashboard-card right-column",style:{padding:"30px"}},rt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},dt={key:0,class:"result-actions"},ct={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},ut={key:1,style:{"text-align":"center",padding:"60px 20px"}},pt={key:2,class:"generate-result"},mt=["innerHTML"],gt={class:"image-preview-container"},vt=["src"],ft={class:"save-tips"},xt={class:"tip-text"},yt={class:"tip-title"},ht={key:0,class:"tip-desc"},wt={key:1,class:"wechat-tips"},bt={key:2,class:"wechat-tips"},_t={__name:"TravelNoteGenerator",setup(kt){const se=Ce(),Y=Te(),R=E(!1),y=E([]),$=E(!1),b=E(""),te=E(),z=E(!1),D=E(!1),oe=E(),P=E(!1),F=E(""),a=E({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),ie=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],re=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],de=Ee(()=>{if(!b.value)return"";let t=b.value;return t=t.replace(/\[图(\d+)\]/g,(e,n)=>{const d=parseInt(n)-1;return d>=0&&d<y.value.length?`<img src="${y.value[d].preview}" alt="图片${n}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`:e}),t}),ce=()=>{var t;z.value||(t=te.value)==null||t.click()},ue=t=>{const e=Array.from(t.target.files);le(e)},pe=t=>{if(t.preventDefault(),R.value=!1,z.value)return;const e=Array.from(t.dataTransfer.files);le(e)},le=async t=>{const e=t.filter(n=>n.type.startsWith("image/"));if(y.value.length+e.length>9){v.warning("最多只能上传9张图片");return}if(e.length===0){v.warning("请选择有效的图片文件");return}z.value=!0,v.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const n of e)try{const d=await me(n),m=new FileReader;m.onload=i=>{y.value.push({file:d,preview:i.target.result,name:n.name,originalSize:n.size,compressedSize:d.size})},m.readAsDataURL(d)}catch(d){console.error("图片压缩失败:",d),v.error(`图片 ${n.name} 压缩失败: ${d.message}`)}v.success(`成功压缩 ${e.length} 张图片`)}finally{z.value=!1}},me=t=>new Promise((e,n)=>{const d=document.createElement("canvas"),m=d.getContext("2d"),i=new Image;i.onload=()=>{let{width:r,height:p}=i;const k=1920;r>p?r>k&&(p=p*k/r,r=k):p>k&&(r=r*k/p,p=k),d.width=r,d.height=p,m.drawImage(i,0,0,r,p);const T=l=>{d.toBlob(C=>{if(!C){n(new Error("图片压缩失败"));return}if(C.size<=1024*1024||l<=.1){const V=new File([C],t.name,{type:C.type,lastModified:Date.now()});e(V)}else T(Math.max(.1,l-.1))},t.type==="image/png"?"image/jpeg":t.type,l)};T(.8)},i.onerror=()=>{n(new Error("图片加载失败"))};const g=new FileReader;g.onload=r=>{i.src=r.target.result},g.onerror=()=>{n(new Error("文件读取失败"))},g.readAsDataURL(t)}),ge=t=>{y.value.splice(t,1)},ve=async()=>{if(y.value.length===0){v.warning("请先上传图片");return}$.value=!0,b.value="";try{const t=new FormData;y.value.forEach((m,i)=>{t.append("images",m.file)}),t.append("model_selection",a.value.model),t.append("location",a.value.location),t.append("date",a.value.date),t.append("companions",a.value.companions),t.append("special_exp",a.value.specialExp),t.append("emotion_keywords",a.value.emotionKeywords),t.append("other_info",a.value.otherInfo),t.append("writing_style",a.value.writingStyle),a.value.writingStyle==="自定义"&&t.append("custom_style_input",a.value.customStyle);const e=await fetch(Se("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${Y.token}`},body:t});if(!e.ok){if(e.status===401){const i=window.location.hash||window.location.pathname;localStorage.getItem("token")&&!i.includes("login")&&(localStorage.removeItem("token"),Y.logout(),se.push("/login"),v.error("登录已过期，请重新登录"));return}const m=await e.text();throw new Error(`生成失败: ${m}`)}const n=e.body.getReader(),d=new TextDecoder;for(;;){const{done:m,value:i}=await n.read();if(m)break;const g=d.decode(i,{stream:!0});if(g.includes("___FINAL_CONTENT___")){const r=g.match(/___FINAL_CONTENT___\n([\s\S]*?)\n___END_FINAL_CONTENT___/);r&&r[1]&&(b.value=r[1],console.log("接收到最终完整内容，已替换显示"))}else b.value+=g}}catch(t){console.error("生成游记失败:",t),v.error("生成游记失败，请重试")}finally{$.value=!1}},fe=()=>{$.value=!1,v.info("已取消生成")},xe=async()=>{try{if(!navigator.clipboard.write){await navigator.clipboard.writeText(b.value),v.success("内容已复制到剪贴板（纯文本格式）");return}let t=b.value;const e=[],n=[];for(let i=0;i<y.value.length;i++){const g=y.value[i],r=fetch(g.preview).then(p=>p.blob()).then(p=>(n[i]=p,p));e.push(r)}await Promise.all(e),t=t.replace(/\[图(\d+)\]/g,(i,g)=>{const r=parseInt(g)-1;return r>=0&&r<y.value.length?`<img src="${y.value[r].preview}" alt="图片${g}" style="max-width: 300px; height: auto; border-radius: 8px; margin: 8px 0;" />`:i});const d=`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        ${t.replace(/\n/g,"<br>")}
      </div>
    `,m=new ClipboardItem({"text/html":new Blob([d],{type:"text/html"}),"text/plain":new Blob([b.value],{type:"text/plain"})});await navigator.clipboard.write([m]),v.success("图文内容已复制到剪贴板")}catch(t){console.error("复制失败:",t);try{await navigator.clipboard.writeText(b.value),v.success("内容已复制到剪贴板（纯文本格式）")}catch{v.error("复制失败，请手动选择复制")}}},ye=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,h=()=>/micromessenger/i.test(navigator.userAgent),W=()=>/Android/i.test(navigator.userAgent),he=async()=>{if(!b.value||!oe.value){v.warning("没有可分享的内容");return}D.value=!0,v.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div"),e=h()?540:600,n=h()?20:30;t.style.cssText=`
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
    `;const m=document.createElement("div");m.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const i=document.createElement("div");i.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,i.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',m.appendChild(i),d.appendChild(m);const g=document.createElement("div");g.style.cssText=`
      font-size: ${h()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,g.textContent="✨ AI智能旅行游记";const r=document.createElement("div");r.style.cssText=`
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
    `;const T=Y.user,l=(T==null?void 0:T.username)||(T==null?void 0:T.email)||"旅行者";k.textContent=l.charAt(0).toUpperCase();const C=document.createElement("span");C.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,C.textContent=l,p.appendChild(k),p.appendChild(C);const V=document.createElement("div");if(V.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,a.value.location){const c=document.createElement("div");c.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,c.innerHTML=`📍 ${a.value.location}`,V.appendChild(c)}const K=document.createElement("div");K.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `;const _e=a.value.date||new Date().toLocaleDateString("zh-CN");K.innerHTML=`🕒 ${we(_e)}`,V.appendChild(K),r.appendChild(p),r.appendChild(V);const q=document.createElement("div");q.style.cssText=`
      font-size: ${h()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let N=b.value;N=N.replace(/\[图(\d+)\]/g,(c,_)=>{const x=parseInt(_)-1;if(x>=0&&x<y.value.length){const B=y.value[x],O=h()?"480px":"540px";return`<img src="${B.preview}" alt="图片${_}" style="width: 100%; max-width: ${O}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}return c}),N=N.replace(/\n/g,"<br>"),q.innerHTML=N;const J=document.createElement("div");J.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,J.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,t.appendChild(d),t.appendChild(g),t.appendChild(r),t.appendChild(q),t.appendChild(J),document.body.appendChild(t);const ae=t.querySelectorAll("img");console.log(`Found ${ae.length} images in container`);const ke=Array.from(ae).map((c,_)=>new Promise(x=>{if(console.log(`Checking image ${_+1}:`,c.src.substring(0,50)+"..."),c.src.startsWith("data:"))if(c.complete&&c.naturalWidth>0)console.log(`Image ${_+1} already loaded (base64)`),x();else{const B=()=>{console.log(`Image ${_+1} loaded successfully`),x()},O=()=>{console.warn(`Image ${_+1} failed to load`),x()};c.addEventListener("load",B,{once:!0}),c.addEventListener("error",O,{once:!0}),setTimeout(()=>{c.removeEventListener("load",B),c.removeEventListener("error",O),console.log(`Image ${_+1} load timeout, continuing...`),x()},5e3)}else c.complete?x():(c.onload=x,c.onerror=x)}));await Promise.all(ke),console.log("All images processed");const M=t.scrollHeight;let Q=h()?1.5:2,X=h()?.8:.9;M>8e3?(Q=h()?1.2:1.5,X=h()?.7:.85,v.info("内容较长，正在优化图片质量以确保生成成功...")):M>5e3&&(Q=h()?1.3:1.8,X=h()?.75:.87);const ne={useCORS:!0,allowTaint:!0,scale:Q,backgroundColor:"#ffffff",logging:!0,width:e,height:M,scrollX:0,scrollY:0,windowWidth:e,windowHeight:M,foreignObjectRendering:!1,imageTimeout:15e3,onclone:c=>{console.log("Document cloned for html2canvas");const _=c.querySelectorAll("img");console.log(`Found ${_.length} images in cloned document`)}};console.log("html2canvas options:",ne),console.log("Container dimensions:",{width:e,height:M}),await new Promise(c=>setTimeout(c,500));const U=await Re(t,ne);if(console.log("Canvas generated:",{width:U.width,height:U.height}),U.width===0||U.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(t),U.toBlob(c=>{if(c){const _=URL.createObjectURL(c);if(ye()&&(!h()||h()&&W()))F.value=_,P.value=!0,v.success("图片已生成，请长按图片保存到相册");else{const x=document.createElement("a");x.href=_,x.download=`旅行游记_${a.value.location||"未知地点"}_${new Date().toLocaleDateString()}.jpg`,document.body.appendChild(x),x.click(),document.body.removeChild(x),URL.revokeObjectURL(_),h()?v.success("图片已下载到微信下载文件夹"):v.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",X)}catch(t){console.error("生成分享图片失败:",t),v.error("生成分享图片失败，请重试")}finally{D.value=!1}};Ie(()=>{});function we(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}function be(){return h()||W(),"保存图片到相册"}return(t,e)=>{const n=S("el-icon"),d=S("el-option"),m=S("el-select"),i=S("el-input"),g=S("el-col"),r=S("el-date-picker"),p=S("el-row"),k=S("el-button"),T=S("el-dialog");return u(),w(H,null,[o("div",Fe,[o("div",Be,[o("div",Oe,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=l=>t.$router.push("/dashboard"))},[o("div",He,[s(n,{size:"18"},{default:f(()=>[s(I(ze))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])])]),o("div",je,[o("div",Ge,[e[24]||(e[24]=o("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),o("div",Ye,[e[18]||(e[18]=o("div",{class:"section-title"},"选择AI模型",-1)),s(m,{modelValue:a.value.model,"onUpdate:modelValue":e[1]||(e[1]=l=>a.value.model=l),placeholder:"请选择模型",style:{width:"100%"}},{default:f(()=>[(u(),w(H,null,ee(ie,l=>s(d,{key:l.value,label:l.label,value:l.value,disabled:l.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),o("div",We,[e[20]||(e[20]=o("div",{class:"section-title"},"上传旅行照片",-1)),o("div",{class:Z(["upload-area",{dragover:R.value,compressing:z.value}]),onDrop:pe,onDragover:e[2]||(e[2]=$e(l=>R.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=l=>R.value=!1),onClick:e[4]||(e[4]=l=>!z.value&&ce())},[z.value?(u(),L(n,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:f(()=>[s(I(G))]),_:1})):(u(),L(n,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:f(()=>[s(I(Ve))]),_:1})),z.value?(u(),w("p",qe," 正在压缩图片，请稍候... ")):(u(),w("p",Ke," 点击或拖拽上传图片 ")),e[19]||(e[19]=o("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),o("input",{ref_key:"fileInput",ref:te,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:ue},null,544),y.value.length>0?(u(),w("div",Je,[(u(!0),w(H,null,ee(y.value,(l,C)=>(u(),w("div",{key:C,class:"image-item"},[o("img",{src:l.preview,alt:`图片${C+1}`},null,8,Qe),o("button",{class:"remove-btn",onClick:V=>ge(C)},"×",8,Xe)]))),128))])):A("",!0)]),o("div",Ze,[e[21]||(e[21]=o("div",{class:"section-title"},"写作风格",-1)),s(m,{modelValue:a.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=l=>a.value.writingStyle=l),placeholder:"请选择写作风格",style:{width:"100%"}},{default:f(()=>[(u(),w(H,null,ee(re,l=>s(d,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a.value.writingStyle==="自定义"?(u(),L(i,{key:0,modelValue:a.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=l=>a.value.customStyle=l),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):A("",!0)]),o("div",et,[e[22]||(e[22]=o("div",{class:"section-title"},"旅行信息",-1)),s(p,{gutter:12},{default:f(()=>[s(g,{xs:24,sm:12},{default:f(()=>[s(i,{modelValue:a.value.location,"onUpdate:modelValue":e[7]||(e[7]=l=>a.value.location=l),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),s(g,{xs:24,sm:12},{default:f(()=>[s(r,{modelValue:a.value.date,"onUpdate:modelValue":e[8]||(e[8]=l=>a.value.date=l),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),s(i,{modelValue:a.value.companions,"onUpdate:modelValue":e[9]||(e[9]=l=>a.value.companions=l),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:a.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=l=>a.value.specialExp=l),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:a.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=l=>a.value.emotionKeywords=l),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),s(i,{modelValue:a.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=l=>a.value.otherInfo=l),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),o("div",tt,[o("div",{class:Z(["generate-button",{generating:$.value,disabled:y.value.length===0}]),onClick:ve},[o("div",ot,[o("div",lt,[$.value?(u(),L(n,{key:1,size:"24",class:"rotating"},{default:f(()=>[s(I(G))]),_:1})):(u(),L(n,{key:0,size:"24"},{default:f(()=>[s(I(Le))]),_:1}))]),o("div",at,[o("span",nt,j($.value?"正在生成中...":"生成游记"),1),o("span",st,j($.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),$.value?(u(),w("div",{key:0,class:"cancel-button",onClick:fe},[s(n,{size:"16"},{default:f(()=>[s(I(Ae))]),_:1}),e[23]||(e[23]=o("span",null,"取消生成",-1))])):A("",!0)])]),o("div",it,[o("div",rt,[e[26]||(e[26]=o("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),b.value?(u(),w("div",dt,[o("div",{class:"action-btn copy",onClick:xe},[s(n,{size:"16"},{default:f(()=>[s(I(De))]),_:1}),e[25]||(e[25]=o("span",null,"复制",-1))]),o("div",{class:Z(["action-btn share",{generating:D.value}]),onClick:he},[D.value?(u(),L(n,{key:1,size:"16",class:"rotating"},{default:f(()=>[s(I(G))]),_:1})):(u(),L(n,{key:0,size:"16"},{default:f(()=>[s(I(Ne))]),_:1})),o("span",null,j(D.value?"生成中...":"分享图片"),1)],2)])):A("",!0)]),!b.value&&!$.value?(u(),w("div",ct,[s(n,{size:"64"},{default:f(()=>[s(I(Me))]),_:1}),e[27]||(e[27]=o("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):A("",!0),$.value?(u(),w("div",ut,[s(n,{size:"64",class:"rotating"},{default:f(()=>[s(I(G))]),_:1}),e[28]||(e[28]=o("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):A("",!0),b.value?(u(),w("div",pt,[o("div",{class:"result-content",innerHTML:de.value,ref_key:"resultContentRef",ref:oe},null,8,mt)])):A("",!0)])])]),s(T,{modelValue:P.value,"onUpdate:modelValue":e[14]||(e[14]=l=>P.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(F.value),F.value=""})},{footer:f(()=>[s(k,{onClick:e[13]||(e[13]=l=>P.value=!1),type:"primary"},{default:f(()=>e[32]||(e[32]=[Ue("知道了")])),_:1,__:[32]})]),default:f(()=>[o("div",gt,[o("img",{src:F.value,alt:"分享图片",class:"preview-image"},null,8,vt),o("div",ft,[e[31]||(e[31]=o("div",{class:"tip-icon"},"💾",-1)),o("div",xt,[o("p",yt,j(be()),1),h()?W()?(u(),w("div",wt,e[29]||(e[29]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),o("p",{class:"tip-desc"},"• 如果无法保存，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"●●●"分享给朋友',-1)]))):(u(),w("div",bt,e[30]||(e[30]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),o("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(u(),w("p",ht,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])],64)}}},It=Pe(_t,[["__scopeId","data-v-9ddf4d58"]]);export{It as default};
