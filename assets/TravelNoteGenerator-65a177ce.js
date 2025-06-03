import{u as me,a as ge,r as S,j as ve,L as fe,c as z,o as d,d as x,e as o,f as i,w as p,M as E,H as xe,I as $,F as B,m as H,l as L,t as Y,E as m,N as ye,h as C,O as he,P as be,D as F,Q as we,R as _e,S as ke,K as Ce,s as Ie,T as Se,i as N}from"./index-e7e594b4.js";import{h as Te}from"./html2canvas.esm-85f1a6b6.js";import{_ as ze}from"./_plugin-vue_export-helper-c27b6911.js";const Ee={class:"dashboard-container"},De={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Ve={style:{display:"flex","justify-content":"space-between","align-items":"center"}},$e={class:"back-icon"},Le={class:"two-column-layout",style:{display:"grid","grid-template-columns":"1fr 1fr",gap:"20px"}},Ue={class:"dashboard-card left-column",style:{padding:"30px"}},Ae={class:"form-section"},Me={class:"form-section"},Re={key:2,style:{margin:"0",color:"#666"},class:"mobile-text-sm"},Pe={key:3,style:{margin:"0",color:"#667eea"},class:"mobile-text-sm"},Be={key:0,class:"image-preview"},Fe=["src","alt"],Ne=["onClick"],Oe={class:"form-section"},He={class:"form-section"},Ye={style:{"margin-top":"30px"}},Ge={class:"button-content"},je={class:"button-icon"},Ke={class:"button-text"},We={class:"main-text"},Je={class:"sub-text"},qe={class:"dashboard-card right-column",style:{padding:"30px"}},Qe={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px","flex-wrap":"wrap",gap:"10px"}},Xe={key:0,class:"result-actions"},Ze={key:0,style:{"text-align":"center",padding:"60px 20px",color:"#999"}},et={key:1,style:{"text-align":"center",padding:"60px 20px"}},tt={key:2,class:"generate-result"},ot=["innerHTML"],at=["src"],lt={class:"tip-text"},nt={key:0,class:"tip-desc"},st={key:1,class:"tip-desc"},it={__name:"TravelNoteGenerator",setup(rt){const W=me(),O=ge(),R=S(!1),f=S([]),T=S(!1),w=S(""),G=S(),D=S(!1),M=S(!1),j=S(),P=S(!1),V=S(""),l=S({model:"gemini-2.5-flash",writingStyle:"小红书爆款风",customStyle:"",location:"",date:"",companions:"",specialExp:"",emotionKeywords:"",otherInfo:""}),J=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],q=[{label:"小红书爆款风",value:"小红书爆款风"},{label:"鲁迅冷峻风",value:"鲁迅冷峻风"},{label:"知乎体硬核风",value:"知乎体硬核风"},{label:"文艺清新风",value:"文艺清新风"},{label:"幽默风趣风",value:"幽默风趣风"},{label:"人文考据风",value:"人文考据风"},{label:"感官沉浸风",value:"感官沉浸风"},{label:"极简主义风",value:"极简主义风"},{label:"自定义",value:"自定义"}],Q=ve(()=>{if(!w.value)return"";let t=w.value;return t=t.replace(/\[图(\d+)\]/g,(e,n)=>{const r=parseInt(n)-1;return r>=0&&r<f.value.length?`<img src="${f.value[r].preview}" alt="图片${n}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`:e}),t}),X=()=>{var t;D.value||(t=G.value)==null||t.click()},Z=t=>{const e=Array.from(t.target.files);K(e)},ee=t=>{if(t.preventDefault(),R.value=!1,D.value)return;const e=Array.from(t.dataTransfer.files);K(e)},K=async t=>{const e=t.filter(n=>n.type.startsWith("image/"));if(f.value.length+e.length>9){m.warning("最多只能上传9张图片");return}if(e.length===0){m.warning("请选择有效的图片文件");return}D.value=!0,m.info(`正在压缩 ${e.length} 张图片，请稍候...`);try{for(const n of e)try{const r=await te(n),g=new FileReader;g.onload=s=>{f.value.push({file:r,preview:s.target.result,name:n.name,originalSize:n.size,compressedSize:r.size})},g.readAsDataURL(r)}catch(r){console.error("图片压缩失败:",r),m.error(`图片 ${n.name} 压缩失败: ${r.message}`)}m.success(`成功压缩 ${e.length} 张图片`)}finally{D.value=!1}},te=t=>new Promise((e,n)=>{const r=document.createElement("canvas"),g=r.getContext("2d"),s=new Image;s.onload=()=>{let{width:c,height:u}=s;const _=1920;c>u?c>_&&(u=u*_/c,c=_):u>_&&(c=c*_/u,u=_),r.width=c,r.height=u,g.drawImage(s,0,0,c,u);const U=a=>{r.toBlob(y=>{if(!y){n(new Error("图片压缩失败"));return}if(y.size<=1024*1024||a<=.1){const A=new File([y],t.name,{type:y.type,lastModified:Date.now()});e(A)}else U(Math.max(.1,a-.1))},t.type==="image/png"?"image/jpeg":t.type,a)};U(.8)},s.onerror=()=>{n(new Error("图片加载失败"))};const v=new FileReader;v.onload=c=>{s.src=c.target.result},v.onerror=()=>{n(new Error("文件读取失败"))},v.readAsDataURL(t)}),oe=t=>{f.value.splice(t,1)},ae=async()=>{if(f.value.length===0){m.warning("请先上传图片");return}T.value=!0,w.value="";try{const t=new FormData;f.value.forEach((g,s)=>{t.append("images",g.file)}),t.append("model_selection",l.value.model),t.append("location",l.value.location),t.append("date",l.value.date),t.append("companions",l.value.companions),t.append("special_exp",l.value.specialExp),t.append("emotion_keywords",l.value.emotionKeywords),t.append("other_info",l.value.otherInfo),t.append("writing_style",l.value.writingStyle),l.value.writingStyle==="自定义"&&t.append("custom_style_input",l.value.customStyle);const e=await fetch(ye("/travel-notes/generate"),{method:"POST",headers:{Authorization:`Bearer ${O.token}`},body:t});if(!e.ok){if(e.status===401){const s=window.location.hash||window.location.pathname;localStorage.getItem("token")&&!s.includes("login")&&(localStorage.removeItem("token"),O.logout(),W.push("/login"),m.error("登录已过期，请重新登录"));return}const g=await e.text();throw new Error(`生成失败: ${g}`)}const n=e.body.getReader(),r=new TextDecoder;for(;;){const{done:g,value:s}=await n.read();if(g)break;const v=r.decode(s,{stream:!0});w.value+=v}}catch(t){console.error("生成游记失败:",t),m.error("生成游记失败，请重试")}finally{T.value=!1}},le=()=>{T.value=!1,m.info("已取消生成")},ne=async()=>{try{if(!navigator.clipboard.write){await navigator.clipboard.writeText(w.value),m.success("内容已复制到剪贴板（纯文本格式）");return}let t=w.value;const e=[],n=[];for(let s=0;s<f.value.length;s++){const v=f.value[s],c=fetch(v.preview).then(u=>u.blob()).then(u=>(n[s]=u,u));e.push(c)}await Promise.all(e),t=t.replace(/\[图(\d+)\]/g,(s,v)=>{const c=parseInt(v)-1;return c>=0&&c<f.value.length?`<img src="${f.value[c].preview}" alt="图片${v}" style="max-width: 300px; height: auto; border-radius: 8px; margin: 8px 0;" />`:s});const r=`
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333;">
        ${t.replace(/\n/g,"<br>")}
      </div>
    `,g=new ClipboardItem({"text/html":new Blob([r],{type:"text/html"}),"text/plain":new Blob([w.value],{type:"text/plain"})});await navigator.clipboard.write([g]),m.success("图文内容已复制到剪贴板")}catch(t){console.error("复制失败:",t);try{await navigator.clipboard.writeText(w.value),m.success("内容已复制到剪贴板（纯文本格式）")}catch{m.error("复制失败，请手动选择复制")}}},se=async()=>{if(!w.value||!j.value){m.warning("没有可分享的内容");return}M.value=!0,m.info("正在生成分享图片，请稍候...");try{const t=document.createElement("div");t.style.cssText=`
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
    `,e.textContent="✨ AI智能旅行游记";const n=document.createElement("div");n.style.cssText=`
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
    `;const g=document.createElement("div");g.style.cssText=`
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
    `;const s=O.user,v=(s==null?void 0:s.username)||(s==null?void 0:s.email)||"旅行者";g.textContent=v.charAt(0).toUpperCase();const c=document.createElement("span");c.style.cssText=`
      font-weight: 600;
      color: #333;
    `,c.textContent=v,r.appendChild(g),r.appendChild(c);const u=document.createElement("div");if(u.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
    `,l.value.location){const h=document.createElement("div");h.style.cssText=`
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 12px;
        color: #667eea;
        font-weight: 500;
      `,h.innerHTML=`📍 ${l.value.location}`,u.appendChild(h)}const _=document.createElement("div");_.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 12px;
      color: #43e97b;
      font-weight: 500;
    `;const U=l.value.date||new Date().toLocaleDateString("zh-CN");_.innerHTML=`🕒 ${ie(U)}`,u.appendChild(_),n.appendChild(r),n.appendChild(u);const a=document.createElement("div");a.style.cssText=`
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
    `;let y=w.value;y=y.replace(/\[图(\d+)\]/g,(h,I)=>{const b=parseInt(I)-1;return b>=0&&b<f.value.length?`<img src="${f.value[b].preview}" alt="图片${I}" style="width: 100%; max-width: 540px; height: auto; border-radius: 12px; margin: 16px 0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);" />`:h}),y=y.replace(/\n/g,"<br>"),a.innerHTML=y;const A=document.createElement("div");A.style.cssText=`
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
      font-size: 14px;
      color: #999;
    `,A.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">由AI智能生成</div>
      <div>让每一次旅行都有精彩的故事</div>
    `,t.appendChild(e),t.appendChild(n),t.appendChild(a),t.appendChild(A),document.body.appendChild(t);const ce=t.querySelectorAll("img"),ue=Array.from(ce).map(h=>new Promise(I=>{h.complete?I():(h.onload=I,h.onerror=I)}));await Promise.all(ue);const pe=await Te(t,{useCORS:!0,allowTaint:!0,scale:2,backgroundColor:"#ffffff",logging:!1,width:600,height:t.scrollHeight,scrollX:0,scrollY:0,foreignObjectRendering:!0,removeContainer:!0,imageTimeout:15e3,onclone:h=>{h.querySelectorAll("img").forEach(b=>{b.style.maxWidth="none",b.style.maxHeight="none",b.style.width="auto",b.style.height="auto"})}});document.body.removeChild(t),pe.toBlob(h=>{if(h){const I=URL.createObjectURL(h);if(k())V.value=I,P.value=!0,m.success('图片已生成，您可以长按图片保存，或点击"下载图片"按钮');else{const b=document.createElement("a");b.href=I,b.download=`旅行游记_${l.value.location||"未知地点"}_${new Date().toLocaleDateString()}.png`,document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(I),m.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",.9)}catch(t){console.error("生成分享图片失败:",t),m.error("生成分享图片失败，请重试")}finally{M.value=!1}};fe(()=>{});function ie(t){return new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"})}const k=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,re=t=>!0,de=()=>{if(V.value)try{const t=window.open();if(t)t.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>保存图片</title>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
          <style>
            body { 
              margin: 0; 
              padding: 20px; 
              background: #f5f5f5; 
              display: flex; 
              flex-direction: column; 
              align-items: center;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            }
            img { 
              max-width: 100%; 
              height: auto; 
              border-radius: 8px;
              box-shadow: 0 4px 20px rgba(0,0,0,0.1);
              background: white;
            }
            .instructions {
              margin-bottom: 20px;
              padding: 15px 20px;
              background: white;
              border-radius: 12px;
              text-align: center;
              color: #333;
              box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              max-width: 400px;
            }
            .instructions h3 {
              margin: 0 0 10px 0;
              color: #667eea;
              font-size: 18px;
            }
            .instructions p {
              margin: 5px 0;
              font-size: 14px;
              line-height: 1.5;
            }
            .download-btn {
              display: none;
              margin-top: 20px;
              padding: 12px 24px;
              background: #667eea;
              color: white;
              border: none;
              border-radius: 8px;
              font-size: 16px;
              cursor: pointer;
              text-decoration: none;
            }
            @media (min-width: 769px) {
              .download-btn { display: inline-block; }
            }
          </style>
        </head>
        <body>
          <div class="instructions">
            <h3>📱 保存图片到手机</h3>
            <p><strong>iOS系统：</strong>长按图片，选择"存储图像"</p>
            <p><strong>Android系统：</strong>长按图片，选择"保存图片"或"下载图像"</p>
          </div>
          <img src="${V.value}" alt="旅行游记分享图" />
          <a href="${V.value}" download="旅行游记_${l.value.location||"分享图"}_${new Date().toLocaleDateString().replace(/\//g,"-")}.png" class="download-btn">
            💾 点击下载图片
          </a>
        </body>
        </html>
      `),t.document.close(),m.success("已在新窗口打开图片，请按照提示保存");else{const e=document.createElement("a");e.href=V.value,e.download=`旅行游记_${l.value.location||"分享图"}_${new Date().toLocaleDateString().replace(/\//g,"-")}.png`,document.body.appendChild(e),e.click(),document.body.removeChild(e),m.success("开始下载图片")}}catch(t){console.error("下载图片失败:",t),m.error("下载失败，请尝试长按图片保存")}};return(t,e)=>{const n=z("el-icon"),r=z("el-option"),g=z("el-select"),s=z("el-input"),v=z("el-col"),c=z("el-date-picker"),u=z("el-row"),_=z("el-button"),U=z("el-dialog");return d(),x(B,null,[o("div",Ee,[o("div",De,[o("div",Ve,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 上传您的旅行照片，AI将为您生成精彩的旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=a=>t.$router.push("/dashboard"))},[o("div",$e,[i(n,{size:"18"},{default:p(()=>[i(C(he))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])])]),o("div",Le,[o("div",Ue,[e[24]||(e[24]=o("h2",{style:{margin:"0 0 20px 0",color:"#333"}},"创作设置",-1)),o("div",Ae,[e[18]||(e[18]=o("div",{class:"section-title"},"选择AI模型",-1)),i(g,{modelValue:l.value.model,"onUpdate:modelValue":e[1]||(e[1]=a=>l.value.model=a),placeholder:"请选择模型",style:{width:"100%"}},{default:p(()=>[(d(),x(B,null,H(J,a=>i(r,{key:a.value,label:a.label,value:a.value,disabled:a.disabled},null,8,["label","value","disabled"])),64))]),_:1},8,["modelValue"])]),o("div",Me,[e[20]||(e[20]=o("div",{class:"section-title"},"上传旅行照片",-1)),o("div",{class:E(["upload-area",{dragover:R.value,compressing:D.value}]),onDrop:ee,onDragover:e[2]||(e[2]=xe(a=>R.value=!0,["prevent"])),onDragleave:e[3]||(e[3]=a=>R.value=!1),onClick:e[4]||(e[4]=a=>!D.value&&X())},[D.value?(d(),$(n,{key:1,size:"48",style:{color:"#667eea","margin-bottom":"16px"},class:"rotating"},{default:p(()=>[i(C(F))]),_:1})):(d(),$(n,{key:0,size:"48",style:{color:"#999","margin-bottom":"16px"}},{default:p(()=>[i(C(be))]),_:1})),D.value?(d(),x("p",Pe," 正在压缩图片，请稍候... ")):(d(),x("p",Re," 点击或拖拽上传图片 ")),e[19]||(e[19]=o("p",{style:{margin:"8px 0 0 0","font-size":"12px",color:"#999"},class:"mobile-text-xs"}," 支持 JPG、PNG、JPEG 格式，最多上传9张 ",-1))],34),o("input",{ref_key:"fileInput",ref:G,type:"file",multiple:"",accept:"image/*",style:{display:"none"},onChange:Z},null,544),f.value.length>0?(d(),x("div",Be,[(d(!0),x(B,null,H(f.value,(a,y)=>(d(),x("div",{key:y,class:"image-item"},[o("img",{src:a.preview,alt:`图片${y+1}`},null,8,Fe),o("button",{class:"remove-btn",onClick:A=>oe(y)},"×",8,Ne)]))),128))])):L("",!0)]),o("div",Oe,[e[21]||(e[21]=o("div",{class:"section-title"},"写作风格",-1)),i(g,{modelValue:l.value.writingStyle,"onUpdate:modelValue":e[5]||(e[5]=a=>l.value.writingStyle=a),placeholder:"请选择写作风格",style:{width:"100%"}},{default:p(()=>[(d(),x(B,null,H(q,a=>i(r,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l.value.writingStyle==="自定义"?(d(),$(s,{key:0,modelValue:l.value.customStyle,"onUpdate:modelValue":e[6]||(e[6]=a=>l.value.customStyle=a),type:"textarea",rows:3,placeholder:"请描述您想要的写作风格...",style:{"margin-top":"12px"}},null,8,["modelValue"])):L("",!0)]),o("div",He,[e[22]||(e[22]=o("div",{class:"section-title"},"旅行信息",-1)),i(u,{gutter:12},{default:p(()=>[i(v,{xs:24,sm:12},{default:p(()=>[i(s,{modelValue:l.value.location,"onUpdate:modelValue":e[7]||(e[7]=a=>l.value.location=a),placeholder:"地点（如：浙江省杭州市西湖景区）","prefix-icon":"Location"},null,8,["modelValue"])]),_:1}),i(v,{xs:24,sm:12},{default:p(()=>[i(c,{modelValue:l.value.date,"onUpdate:modelValue":e[8]||(e[8]=a=>l.value.date=a),type:"date",placeholder:"选择日期",style:{width:"100%"},format:"YYYY-MM-DD","value-format":"YYYY-MM-DD"},null,8,["modelValue"])]),_:1})]),_:1}),i(s,{modelValue:l.value.companions,"onUpdate:modelValue":e[9]||(e[9]=a=>l.value.companions=a),placeholder:"同行者（如：家人、朋友、独行）","prefix-icon":"User",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:l.value.specialExp,"onUpdate:modelValue":e[10]||(e[10]=a=>l.value.specialExp=a),type:"textarea",rows:2,placeholder:"特色体验（如：品尝西湖醋鱼、游船、看日落）",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:l.value.emotionKeywords,"onUpdate:modelValue":e[11]||(e[11]=a=>l.value.emotionKeywords=a),placeholder:"情感关键词（如：悠闲、惊喜、温馨）","prefix-icon":"Star",style:{"margin-top":"12px"}},null,8,["modelValue"]),i(s,{modelValue:l.value.otherInfo,"onUpdate:modelValue":e[12]||(e[12]=a=>l.value.otherInfo=a),type:"textarea",rows:2,placeholder:"其他信息",style:{"margin-top":"12px"}},null,8,["modelValue"])]),o("div",Ye,[o("div",{class:E(["generate-button",{generating:T.value,disabled:f.value.length===0}]),onClick:ae},[o("div",Ge,[o("div",je,[T.value?(d(),$(n,{key:1,size:"24",class:"rotating"},{default:p(()=>[i(C(F))]),_:1})):(d(),$(n,{key:0,size:"24"},{default:p(()=>[i(C(we))]),_:1}))]),o("div",Ke,[o("span",We,Y(T.value?"正在生成中...":"生成游记"),1),o("span",Je,Y(T.value?"AI正在为您创作精彩游记":"点击开始AI创作之旅"),1)])])],2),T.value?(d(),x("div",{key:0,class:"cancel-button",onClick:le},[i(n,{size:"16"},{default:p(()=>[i(C(_e))]),_:1}),e[23]||(e[23]=o("span",null,"取消生成",-1))])):L("",!0)])]),o("div",qe,[o("div",Qe,[e[26]||(e[26]=o("h2",{style:{margin:"0",color:"#333"}},"生成结果",-1)),w.value?(d(),x("div",Xe,[o("div",{class:"action-btn copy",onClick:ne},[i(n,{size:"16"},{default:p(()=>[i(C(ke))]),_:1}),e[25]||(e[25]=o("span",null,"复制",-1))]),o("div",{class:E(["action-btn share",{generating:M.value}]),onClick:se},[M.value?(d(),$(n,{key:1,size:"16",class:"rotating"},{default:p(()=>[i(C(F))]),_:1})):(d(),$(n,{key:0,size:"16"},{default:p(()=>[i(C(Ce))]),_:1})),o("span",null,Y(M.value?"生成中...":"分享图片"),1)],2)])):L("",!0)]),!w.value&&!T.value?(d(),x("div",Ze,[i(n,{size:"64"},{default:p(()=>[i(C(Ie))]),_:1}),e[27]||(e[27]=o("p",{style:{margin:"20px 0 0 0","font-size":"16px"},class:"mobile-text-sm"}," 上传图片并填写信息后，点击生成按钮开始创作 ",-1))])):L("",!0),T.value?(d(),x("div",et,[i(n,{size:"64",class:"rotating"},{default:p(()=>[i(C(F))]),_:1}),e[28]||(e[28]=o("p",{style:{margin:"20px 0 0 0",color:"#666"},class:"mobile-text-sm"}," AI正在为您创作游记，请稍候... ",-1))])):L("",!0),w.value?(d(),x("div",tt,[o("div",{class:"result-content",innerHTML:Q.value,ref_key:"resultContentRef",ref:j},null,8,ot)])):L("",!0)])])]),i(U,{modelValue:P.value,"onUpdate:modelValue":e[14]||(e[14]=a=>P.value=a),title:"分享图片",width:k()?"100%":"90%",fullscreen:k(),class:E(["image-preview-dialog",{"mobile-fullscreen":k()}]),onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(V.value),V.value=""})},{footer:p(()=>[o("div",{class:E(["dialog-footer",{"mobile-footer":k()}])},[k()?(d(),$(_,{key:0,onClick:de,type:"success",size:"large",style:{"margin-right":"12px"}},{default:p(()=>[i(n,null,{default:p(()=>[i(C(Se))]),_:1}),e[32]||(e[32]=N(" 下载图片 "))]),_:1,__:[32]})):L("",!0),i(_,{onClick:e[13]||(e[13]=a=>P.value=!1),type:"primary",size:k()?"large":"default"},{default:p(()=>e[33]||(e[33]=[N(" 知道了 ")])),_:1,__:[33]},8,["size"])],2)]),default:p(()=>[o("div",{class:E(["image-preview-container",{"mobile-container":k()}])},[o("div",{class:E(["image-wrapper",{"mobile-wrapper":k()}])},[o("img",{src:V.value,alt:"分享图片",class:E(["preview-image",{"mobile-image":k()}]),onContextmenu:re},null,42,at)],2),o("div",{class:E(["save-tips",{"mobile-tips":k()}])},[e[31]||(e[31]=o("div",{class:"tip-icon"},"💾",-1)),o("div",lt,[e[30]||(e[30]=o("p",{class:"tip-title"},"保存图片到相册",-1)),k()?(d(),x("p",nt,e[29]||(e[29]=[N(' 方法1：长按上方图片，选择"保存图片"'),o("br",null,null,-1),N(' 方法2：点击下方"下载图片"按钮，然后在新页面长按保存 ')]))):(d(),x("p",st,' 在图片上长按，选择"保存图片"或"存储图像" '))])],2)],2)]),_:1},8,["modelValue","width","fullscreen","class"])],64)}}},mt=ze(it,[["__scopeId","data-v-93c63667"]]);export{mt as default};
