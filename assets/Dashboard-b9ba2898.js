import{u as Te,a as Ie,r as E,j as Le,k as Ne,c as z,o as r,d as c,e as t,h as a,t as m,f as s,w as o,l as k,F as Ue,m as Re,n as ve,E as h,p as te,q as W,s as ye,v as xe,x as V,y as he,z as be,i as f,A as se,B as Se,C as Me,D as Be,G as je,H as oe,I as De,J as He}from"./index-b2caebe8.js";import{h as Oe}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ve}from"./_plugin-vue_export-helper-c27b6911.js";const Fe={class:"dashboard-container"},Pe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},qe={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},We={style:{flex:"1"}},Je={style:{margin:"8px 0 0 0",color:"#666"}},Ge={key:0},Qe={key:1},Xe={style:{display:"flex","align-items":"center",gap:"20px","justify-content":"flex-end"}},Ye={key:0,style:{display:"flex",gap:"16px"}},Ke={class:"mini-stat"},Ze={style:{"font-weight":"600",color:"#333"}},et={class:"mini-stat"},tt={style:{"font-weight":"600",color:"#333"}},st={key:1},ot={class:"user-menu-trigger"},nt={class:"user-avatar"},at={class:"user-info"},it={class:"username"},lt={key:2},rt={class:"mobile-only"},dt={class:"mobile-header-row"},ct={class:"mobile-title-section"},pt={style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}},ut={key:0},mt={key:1},gt={class:"mobile-right-section"},ft={key:0,class:"mobile-stats-compact"},_t={class:"mobile-stat-item-compact"},vt={class:"stat-number-compact"},yt={class:"mobile-stat-item-compact"},xt={class:"stat-number-compact"},ht={key:1},bt={class:"mobile-user-menu-compact"},wt={class:"mobile-user-avatar-compact"},kt={key:0,class:"dashboard-card",style:{padding:"30px"}},Ct={class:"quick-actions"},zt={class:"action-icon"},$t={class:"action-arrow"},At={class:"action-icon"},Et={class:"action-arrow"},Tt={class:"action-icon"},It={class:"action-arrow"},Lt={key:1,class:"dashboard-card",style:{padding:"30px"}},Nt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px"}},Ut={key:0,style:{"text-align":"center",padding:"40px"}},Rt={key:1,style:{"text-align":"center",padding:"40px",color:"#999"}},St={key:2},Mt={class:"notes-grid"},Bt=["onClick"],jt={class:"card-header"},Dt={class:"location-title"},Ht={class:"card-tags"},Ot={class:"card-content"},Vt={class:"card-footer"},Ft={class:"date-info"},Pt={key:0,class:"companions-info"},qt={key:2,class:"dashboard-card",style:{padding:"40px","text-align":"center"}},Wt={class:"login-guide"},Jt={class:"guide-actions",style:{display:"flex",gap:"16px","justify-content":"center","flex-wrap":"wrap","margin-bottom":"32px"}},Gt={class:"guide-features",style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"}},Qt={key:0,class:"note-detail"},Xt={style:{"margin-bottom":"20px"}},Yt={class:"generate-result"},Kt=["innerHTML"],Zt={class:"image-preview-container"},es=["src"],ts={class:"save-tips"},ss={class:"tip-text"},os={key:0,class:"tip-desc"},ns={key:1,class:"wechat-tips"},as={key:2,class:"wechat-tips"},is={__name:"Dashboard",setup(ls){const $=Te(),u=Ie(),J=E({totalNotes:0,remainingUses:0,totalImages:0,daysActive:0}),G=E([]),Q=E(!1),F=E(!1),v=E(null),j=E(!1),D=E(!1),H=E(""),ne=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,g=()=>/micromessenger/i.test(navigator.userAgent),X=()=>/Android/i.test(navigator.userAgent),we=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ke=Le(()=>{var i;if(!((i=v.value)!=null&&i.content))return"";let n=v.value.content,e=[];try{v.value.image_urls?(console.log("原始image_urls数据:",v.value.image_urls),e=JSON.parse(v.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(_){console.warn("解析图片URL失败:",_),console.warn("原始数据:",v.value.image_urls)}return console.log("游记内容中的图片标记:",n.match(/\[图(\d+)\]/g)),n=n.replace(/\[图(\d+)\]/g,(_,x)=>{const b=parseInt(x)-1;return console.log(`处理图片标记 ${_}, index: ${b}, imageUrls长度: ${e.length}`),b>=0&&b<e.length&&e[b]?(console.log(`显示实际图片: ${e[b]}`),`<img src="${e[b]}" alt="图片${x}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${_}`),`<div class="image-placeholder" style="
        display: flex;
        align-items: center;
        justify-content: center;
        background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        border: 2px dashed #ddd;
        border-radius: 12px;
        padding: 40px 20px;
        margin: 16px 0;
        color: #666;
        font-size: 16px;
        font-weight: 500;
      ">
        <div style="text-align: center;">
          <div style="font-size: 48px; margin-bottom: 12px;">🖼️</div>
          <div>图片 ${x}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),n}),ae=async n=>{switch(n){case"profile":$.push("/profile");break;case"logout":try{await ve.confirm("确定要退出登录吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),u.logout(),$.push("/login"),h.success("已退出登录")}catch{}break}},ie=async()=>{try{const n=await te.get("/users/stats");J.value=n.data}catch(n){console.error("加载统计数据失败:",n)}},le=async()=>{Q.value=!0;try{const n=await te.get("/travel-notes",{params:{page:1,limit:3}});G.value=n.data.items||n.data}catch(n){console.error("加载最近游记失败:",n),h.error("加载最近游记失败")}finally{Q.value=!1}},re=n=>{v.value=n,F.value=!0},Ce=async(n,e)=>{switch(n){case"view":re(e);break;case"share":de(e);break;case"delete":await ze(e);break}},de=async n=>{if(!n.content){h.warning("没有可分享的内容");return}j.value=!0,h.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),i=g()?540:600,_=g()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${i}px;
      background: #fff;
      padding: ${_}px;
      padding-top: ${_+100}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      min-height: auto;
      height: auto;
      overflow: visible;
    `;const x=document.createElement("div");x.style.cssText=`
      margin-bottom: 30px;
      text-align: right;
      padding: 0;
      background: transparent;
    `;const b=document.createElement("div");b.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const T=document.createElement("div");T.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,T.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',b.appendChild(T),x.appendChild(b);const U=document.createElement("div");U.style.cssText=`
      font-size: ${g()?"28px":"32px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 18px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,U.textContent=`✨ ${n.location||"旅行游记"}`;const w=document.createElement("div");w.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 14px 18px;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 8px;
      margin-bottom: 18px;
      border-left: 4px solid #667eea;
      font-size: 16px;
      color: #495057;
    `;const R=document.createElement("div");R.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
    `;const S=document.createElement("div");S.style.cssText=`
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    `;const C=u.user,O=(C==null?void 0:C.username)||(C==null?void 0:C.email)||"旅行者";S.textContent=O.charAt(0).toUpperCase();const M=document.createElement("span");M.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,M.textContent=O,R.appendChild(S),R.appendChild(M);const I=document.createElement("div");if(I.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    `,n.location){const d=document.createElement("div");d.style.cssText=`
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px 10px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 14px;
      `,d.innerHTML=`📍 ${n.location}`,I.appendChild(d)}const B=document.createElement("div");B.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,B.innerHTML=`🕒 ${ce(n.travel_date||n.created_at)}`,I.appendChild(B),w.appendChild(R),w.appendChild(I);const l=document.createElement("div");l.className="share-content",l.style.cssText=`
      font-size: ${g()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let A=n.content,P=[];try{n.image_urls&&(P=JSON.parse(n.image_urls))}catch(d){console.warn("解析图片URL失败:",d)}A=A.replace(/\[图(\d+)\]/g,(d,y)=>{const p=parseInt(y)-1;if(p>=0&&p<P.length&&P[p]){const L=g()?"480px":"540px";return`<img src="${P[p]}" alt="图片${y}" style="width: 100%; max-width: ${L}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${y}</div>`}),A=A.replace(/\n/g,"<br>"),l.innerHTML=A;const K=document.createElement("div");K.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,K.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(x),e.appendChild(U),e.appendChild(w),e.appendChild(l),e.appendChild(K),document.body.appendChild(e);const ge=e.querySelectorAll("img");console.log(`Found ${ge.length} images in container`);const Ee=Array.from(ge).map((d,y)=>new Promise(p=>{if(console.log(`Checking image ${y+1}:`,d.src.substring(0,50)+"..."),d.complete&&d.naturalWidth>0)console.log(`Image ${y+1} already loaded`),p();else{const L=()=>{console.log(`Image ${y+1} loaded successfully`),p()},N=()=>{console.warn(`Image ${y+1} failed to load`),p()};d.addEventListener("load",L,{once:!0}),d.addEventListener("error",N,{once:!0}),setTimeout(()=>{d.removeEventListener("load",L),d.removeEventListener("error",N),console.log(`Image ${y+1} load timeout, continuing...`),p()},1e4)}}));await Promise.all(Ee),console.log("All images processed");const fe=e.scrollHeight;let Z=g()?1.5:2,ee=g()?.8:.9;fe>8e3?(Z=g()?1.2:1.5,ee=g()?.7:.85,h.info("内容较长，正在优化图片质量以确保生成成功...")):fe>5e3&&(Z=g()?1.3:1.8,ee=g()?.75:.87);const _e={useCORS:!0,allowTaint:!0,scale:Z,backgroundColor:"#ffffff",logging:!0,width:i,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:d=>{console.log("Document cloned for html2canvas");const y=d.querySelectorAll("img");console.log(`Found ${y.length} images in cloned document`);const p=d.createElement("style");p.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${g()?"26px":"28px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,d.head.appendChild(p),d.querySelectorAll(".share-content").forEach(N=>{N.style.fontSize=g()?"30px":"32px",N.style.lineHeight="1.8",N.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",N.style.fontSize)})}};console.log("html2canvas options:",_e),console.log("Container dimensions:",{width:i}),await new Promise(d=>setTimeout(d,500));const q=await Oe(e,_e);if(console.log("Canvas generated:",{width:q.width,height:q.height}),q.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),q.toBlob(d=>{if(d){const y=URL.createObjectURL(d);if(ne()&&(!g()||g()&&X()))if(g()&&X()){const p=new FileReader;p.onload=function(L){H.value=L.target.result,D.value=!0,h.success("图片已生成，请长按图片保存到相册")},p.readAsDataURL(d),URL.revokeObjectURL(y)}else H.value=y,D.value=!0,h.success("图片已生成，请长按图片保存到相册");else{const p=document.createElement("a");p.href=y,p.download=`旅行游记_${n.location||"未知地点"}_${ce(n.travel_date||n.created_at)}.jpg`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(y),g()?h.success("图片已生成，点击右上角●●●可转发给朋友"):h.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",ee)}catch(e){console.error("生成分享图片失败:",e),h.error("生成分享图片失败，请重试")}finally{j.value=!1}},Y=n=>n?new Date(n).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ce=n=>n?new Date(n).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",ze=async n=>{try{await ve.confirm(`确定要删除游记"${n.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await te.delete(`/travel-notes/${n.id}`),h.success("删除成功"),le(),ie()}catch(e){e!=="cancel"&&h.error("删除失败")}},$e=(n,e=120)=>{if(!n)return"暂无内容";const i=n.replace(/<[^>]*>/g,"");return i.length>e?i.substring(0,e)+"...":i},pe=n=>{const e=we.find(i=>i.value===n);return e?e.label:n},ue=()=>{if(!u.isAuthenticated){h.warning("请先登录后再创作游记"),$.push("/login");return}$.push("/generator")},me=()=>{if(!u.isAuthenticated){h.warning("请先登录后再查看历史记录"),$.push("/login");return}$.push("/history")},Ae=()=>{if(!u.isAuthenticated){h.warning("请先登录后再访问个人资料"),$.push("/login");return}$.push("/profile")};return Ne(()=>{u.isAuthenticated&&(ie(),le())}),(n,e)=>{var C,O,M,I,B;const i=z("el-icon"),_=z("el-button"),x=z("el-dropdown-item"),b=z("el-dropdown-menu"),T=z("el-dropdown"),U=z("el-tag"),w=z("el-descriptions-item"),R=z("el-descriptions"),S=z("el-dialog");return r(),c("div",Fe,[t("div",Pe,[t("div",qe,[t("div",We,[e[13]||(e[13]=t("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 ",-1)),t("p",Je,[a(u).isAuthenticated?(r(),c("span",Ge,"欢迎回来，"+m((C=a(u).user)==null?void 0:C.username)+"！",1)):(r(),c("span",Qe,"欢迎使用智能旅行游记生成器"))])]),t("div",Xe,[a(u).isAuthenticated?(r(),c("div",Ye,[t("div",Ke,[s(i,{style:{color:"#667eea","font-size":"16px"}},{default:o(()=>[s(a(W))]),_:1}),t("span",Ze,m(J.value.totalNotes),1),e[14]||(e[14]=t("span",{style:{color:"#666","font-size":"12px"}},"篇游记",-1))]),t("div",et,[s(i,{style:{color:"#f093fb","font-size":"16px"}},{default:o(()=>[s(a(ye))]),_:1}),t("span",tt,m(((O=a(u).user)==null?void 0:O.remaining_trials)||0),1),e[15]||(e[15]=t("span",{style:{color:"#666","font-size":"12px"}},"次剩余",-1))])])):k("",!0),s(_,{onClick:ue,type:"primary",size:"large"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(xe))]),_:1}),e[16]||(e[16]=t("span",null,"开始创作",-1))]),_:1,__:[16]}),a(u).isAuthenticated?(r(),c("div",st,[s(T,{onCommand:ae,trigger:"click"},{dropdown:o(()=>[s(b,{class:"custom-dropdown"},{default:o(()=>[s(x,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(V))]),_:1}),e[18]||(e[18]=t("span",null,"个人资料",-1))]),_:1,__:[18]}),s(x,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(he))]),_:1}),e[19]||(e[19]=t("span",null,"退出登录",-1))]),_:1,__:[19]})]),_:1})]),default:o(()=>{var l;return[t("div",ot,[t("div",nt,[s(i,{size:"20"},{default:o(()=>[s(a(V))]),_:1})]),t("div",at,[t("span",it,m((l=a(u).user)==null?void 0:l.username),1),e[17]||(e[17]=t("span",{class:"user-role"},"用户",-1))]),s(i,{class:"dropdown-arrow",size:"14"},{default:o(()=>[s(a(be))]),_:1})])]}),_:1})])):(r(),c("div",lt,[s(_,{onClick:e[0]||(e[0]=l=>n.$router.push("/login")),type:"success",size:"large"},{default:o(()=>e[20]||(e[20]=[f(" 登录 ")])),_:1,__:[20]})]))])]),t("div",rt,[t("div",dt,[t("div",ct,[e[21]||(e[21]=t("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," ✨ 智能旅行游记生成器 ",-1)),t("p",pt,[a(u).isAuthenticated?(r(),c("span",ut,"欢迎回来，"+m((M=a(u).user)==null?void 0:M.username)+"！",1)):(r(),c("span",mt,"欢迎使用智能旅行游记生成器"))])]),t("div",gt,[a(u).isAuthenticated?(r(),c("div",ft,[t("div",_t,[s(i,{style:{color:"#667eea"}},{default:o(()=>[s(a(W))]),_:1}),t("span",vt,m(J.value.totalNotes),1),e[22]||(e[22]=t("span",{class:"stat-label-compact"},"游记",-1))]),t("div",yt,[s(i,{style:{color:"#f093fb"}},{default:o(()=>[s(a(ye))]),_:1}),t("span",xt,m(((I=a(u).user)==null?void 0:I.remaining_trials)||0),1),e[23]||(e[23]=t("span",{class:"stat-label-compact"},"剩余",-1))])])):k("",!0),a(u).isAuthenticated?(r(),c("div",ht,[s(T,{onCommand:ae,trigger:"click"},{dropdown:o(()=>[s(b,{class:"custom-dropdown"},{default:o(()=>[s(x,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(V))]),_:1}),e[24]||(e[24]=t("span",null,"个人资料",-1))]),_:1,__:[24]}),s(x,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(he))]),_:1}),e[25]||(e[25]=t("span",null,"退出登录",-1))]),_:1,__:[25]})]),_:1})]),default:o(()=>[t("div",bt,[t("div",wt,[s(i,{size:"16"},{default:o(()=>[s(a(V))]),_:1})]),s(i,{class:"mobile-dropdown-arrow-compact",size:"10"},{default:o(()=>[s(a(be))]),_:1})])]),_:1})])):k("",!0)])])])]),a(u).isAuthenticated?(r(),c("div",kt,[e[29]||(e[29]=t("h2",{style:{margin:"0 0 24px 0",color:"#333"}},"快速操作",-1)),t("div",Ct,[t("div",{class:"action-card primary",onClick:ue},[t("div",zt,[s(i,{size:"28"},{default:o(()=>[s(a(xe))]),_:1})]),e[26]||(e[26]=t("div",{class:"action-content"},[t("h3",null,"创建新游记"),t("p",null,"上传照片，AI为您生成精彩游记")],-1)),t("div",$t,[s(i,null,{default:o(()=>[s(a(se))]),_:1})])]),t("div",{class:"action-card secondary",onClick:me},[t("div",At,[s(i,{size:"28"},{default:o(()=>[s(a(W))]),_:1})]),e[27]||(e[27]=t("div",{class:"action-content"},[t("h3",null,"查看历史记录"),t("p",null,"浏览您的所有旅行游记")],-1)),t("div",Et,[s(i,null,{default:o(()=>[s(a(se))]),_:1})])]),t("div",{class:"action-card tertiary",onClick:Ae},[t("div",Tt,[s(i,{size:"28"},{default:o(()=>[s(a(Se))]),_:1})]),e[28]||(e[28]=t("div",{class:"action-content"},[t("h3",null,"账户设置"),t("p",null,"管理您的个人信息和偏好")],-1)),t("div",It,[s(i,null,{default:o(()=>[s(a(se))]),_:1})])])])])):k("",!0),a(u).isAuthenticated?(r(),c("div",Lt,[t("div",Nt,[e[31]||(e[31]=t("h2",{style:{margin:"0",color:"#333"}},"最近的游记",-1)),s(_,{type:"text",onClick:me},{default:o(()=>e[30]||(e[30]=[f(" 查看全部 ")])),_:1,__:[30]})]),Q.value?(r(),c("div",Ut,[s(i,{size:"48",class:"rotating"},{default:o(()=>[s(a(Me))]),_:1}),e[32]||(e[32]=t("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):G.value.length===0?(r(),c("div",Rt,[s(i,{size:"48"},{default:o(()=>[s(a(W))]),_:1}),e[33]||(e[33]=t("p",{style:{margin:"16px 0 0 0"}},"还没有游记，快去创建第一篇吧！",-1))])):(r(),c("div",St,[t("div",Mt,[(r(!0),c(Ue,null,Re(G.value,l=>(r(),c("div",{key:l.id,class:"note-card-small",onClick:A=>re(l)},[t("div",jt,[t("div",Dt,[t("h3",null,m(l.location||"未知地点"),1)]),s(T,{onCommand:A=>Ce(A,l),onClick:e[1]||(e[1]=je(()=>{},["stop"]))},{dropdown:o(()=>[s(b,null,{default:o(()=>[s(x,{command:"view"},{default:o(()=>e[34]||(e[34]=[f("查看详情")])),_:1,__:[34]}),s(x,{command:"share"},{default:o(()=>e[35]||(e[35]=[f("分享图片")])),_:1,__:[35]}),s(x,{command:"delete",divided:""},{default:o(()=>e[36]||(e[36]=[f("删除")])),_:1,__:[36]})]),_:1})]),default:o(()=>[s(_,{circle:"",size:"small",class:"more-btn"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(Be))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),t("div",Ht,[l.model_used?(r(),oe(U,{key:0,size:"small",type:"info"},{default:o(()=>[f(m(pe(l.model_used)),1)]),_:2},1024)):k("",!0),l.writing_style?(r(),oe(U,{key:1,size:"small",type:"success"},{default:o(()=>[f(m(l.writing_style),1)]),_:2},1024)):k("",!0)]),t("div",Ot,[t("p",null,m($e(l.content,120)),1)]),t("div",Vt,[t("div",Ft,[s(i,null,{default:o(()=>[s(a(De))]),_:1}),t("span",null,m(Y(l.travel_date||l.created_at)),1)]),l.companions?(r(),c("div",Pt,[s(i,null,{default:o(()=>[s(a(V))]),_:1}),t("span",null,m(l.companions),1)])):k("",!0)])],8,Bt))),128))])]))])):k("",!0),a(u).isAuthenticated?k("",!0):(r(),c("div",qt,[t("div",Wt,[e[42]||(e[42]=t("div",{class:"guide-icon",style:{"font-size":"64px","margin-bottom":"20px"}},"🎯",-1)),e[43]||(e[43]=t("h2",{style:{margin:"0 0 16px 0",color:"#333","font-size":"24px"}},"开启您的智能旅行游记之旅",-1)),e[44]||(e[44]=t("p",{style:{color:"#666","font-size":"16px","line-height":"1.6","margin-bottom":"32px","max-width":"500px","margin-left":"auto","margin-right":"auto"}}," 登录账号即可使用AI智能生成功能，将您的旅行照片转化为精彩的游记故事。 ",-1)),t("div",Jt,[s(_,{onClick:e[2]||(e[2]=l=>n.$router.push("/login")),type:"primary",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[37]||(e[37]=[f(" 立即登录 ")])),_:1,__:[37]}),s(_,{onClick:e[3]||(e[3]=l=>n.$router.push("/register")),type:"success",plain:"",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[38]||(e[38]=[f(" 注册账号 ")])),_:1,__:[38]})]),t("div",Gt,[t("div",{class:"feature-item",onClick:e[4]||(e[4]=l=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)","border-radius":"12px",color:"white"}},e[39]||(e[39]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"🤖",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"AI智能生成",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"上传照片，AI为您创作精彩游记",-1)])),t("div",{class:"feature-item",onClick:e[5]||(e[5]=l=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","border-radius":"12px",color:"white"}},e[40]||(e[40]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"📚",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"记录管理",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"保存和管理您的所有旅行回忆",-1)])),t("div",{class:"feature-item",onClick:e[6]||(e[6]=l=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","border-radius":"12px",color:"white"}},e[41]||(e[41]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"🎨",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"多样风格",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"支持多种写作风格和AI模型",-1)]))])])])),s(S,{modelValue:F.value,"onUpdate:modelValue":e[9]||(e[9]=l=>F.value=l),title:((B=v.value)==null?void 0:B.location)||"游记详情",width:ne()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:o(()=>[s(_,{onClick:e[7]||(e[7]=l=>F.value=!1)},{default:o(()=>e[45]||(e[45]=[f("关闭")])),_:1,__:[45]}),s(_,{type:"primary",onClick:e[8]||(e[8]=l=>de(v.value)),loading:j.value},{default:o(()=>[j.value?k("",!0):(r(),oe(i,{key:0},{default:o(()=>[s(a(He))]),_:1})),f(" "+m(j.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:o(()=>[v.value?(r(),c("div",Qt,[t("div",Xt,[s(R,{column:2,border:""},{default:o(()=>[s(w,{label:"地点"},{default:o(()=>[f(m(v.value.location||"未知"),1)]),_:1}),s(w,{label:"旅行日期"},{default:o(()=>[f(m(Y(v.value.travel_date)),1)]),_:1}),s(w,{label:"同行者"},{default:o(()=>[f(m(v.value.companions||"未填写"),1)]),_:1}),s(w,{label:"创建时间"},{default:o(()=>[f(m(Y(v.value.created_at)),1)]),_:1}),s(w,{label:"使用模型"},{default:o(()=>[f(m(pe(v.value.model_used)),1)]),_:1}),s(w,{label:"写作风格"},{default:o(()=>[f(m(v.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),t("div",Yt,[t("div",{class:"result-content",innerHTML:ke.value},null,8,Kt)])])):k("",!0)]),_:1},8,["modelValue","title","width"]),s(S,{modelValue:D.value,"onUpdate:modelValue":e[11]||(e[11]=l=>D.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[12]||(e[12]=()=>{n.URL.revokeObjectURL(H.value),H.value=""})},{footer:o(()=>[s(_,{onClick:e[10]||(e[10]=l=>D.value=!1),type:"primary"},{default:o(()=>e[50]||(e[50]=[f("知道了")])),_:1,__:[50]})]),default:o(()=>[t("div",Zt,[t("img",{src:H.value,alt:"分享图片",class:"preview-image"},null,8,es),t("div",ts,[e[49]||(e[49]=t("div",{class:"tip-icon"},"💾",-1)),t("div",ss,[e[48]||(e[48]=t("p",{class:"tip-title"},"保存图片到相册",-1)),g()?X()?(r(),c("div",ns,e[46]||(e[46]=[t("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),t("p",{class:"tip-desc"},'• 点击右上角"●●●"分享给朋友或朋友圈',-1),t("p",{class:"tip-desc"},"• 如果长按无效，请尝试截屏保存",-1)]))):(r(),c("div",as,e[47]||(e[47]=[t("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),t("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),t("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(r(),c("p",os,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},ps=Ve(is,[["__scopeId","data-v-696ebc93"]]);export{ps as default};
