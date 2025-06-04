import{u as Te,a as Ae,r as T,j as Ie,k as Le,c as z,o as d,d as c,e as t,h as a,t as p,f as s,w as o,l as k,F as Ne,m as Se,n as _e,E as b,p as ee,q as W,s as ve,v as ye,x as H,y as xe,z as he,i as g,A as te,B as Me,C as Ue,D as Be,G as Re,H as se,I as je,J as De}from"./index-6ced4153.js";import{h as He}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ve}from"./_plugin-vue_export-helper-c27b6911.js";const Oe={class:"dashboard-container"},Pe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Fe={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},qe={style:{flex:"1"}},We={style:{margin:"8px 0 0 0",color:"#666"}},Je={key:0},Ge={key:1},Qe={style:{display:"flex","align-items":"center",gap:"20px","justify-content":"flex-end"}},Xe={key:0,style:{display:"flex",gap:"16px"}},Ye={class:"mini-stat"},Ke={style:{"font-weight":"600",color:"#333"}},Ze={class:"mini-stat"},et={style:{"font-weight":"600",color:"#333"}},tt={key:1},st={class:"user-menu-trigger"},ot={class:"user-avatar"},nt={class:"user-info"},at={class:"username"},it={key:2},lt={class:"mobile-only"},dt={class:"mobile-header-row"},rt={class:"mobile-title-section"},ct={style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}},pt={key:0},ut={key:1},mt={class:"mobile-right-section"},gt={key:0,class:"mobile-stats-compact"},ft={class:"mobile-stat-item-compact"},_t={class:"stat-number-compact"},vt={class:"mobile-stat-item-compact"},yt={class:"stat-number-compact"},xt={key:1},ht={class:"mobile-user-menu-compact"},bt={class:"mobile-user-avatar-compact"},wt={key:0,class:"dashboard-card",style:{padding:"30px"}},kt={class:"quick-actions"},Ct={class:"action-icon"},zt={class:"action-arrow"},$t={class:"action-icon"},Et={class:"action-arrow"},Tt={class:"action-icon"},At={class:"action-arrow"},It={key:1,class:"dashboard-card",style:{padding:"30px"}},Lt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px"}},Nt={key:0,style:{"text-align":"center",padding:"40px"}},St={key:1,style:{"text-align":"center",padding:"40px",color:"#999"}},Mt={key:2},Ut={class:"notes-grid"},Bt=["onClick"],Rt={class:"card-header"},jt={class:"location-title"},Dt={class:"card-tags"},Ht={class:"card-content"},Vt={class:"card-footer"},Ot={class:"date-info"},Pt={key:0,class:"companions-info"},Ft={key:2,class:"dashboard-card",style:{padding:"40px","text-align":"center"}},qt={class:"login-guide"},Wt={class:"guide-actions",style:{display:"flex",gap:"16px","justify-content":"center","flex-wrap":"wrap","margin-bottom":"32px"}},Jt={class:"guide-features",style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"}},Gt={key:0,class:"note-detail"},Qt={style:{"margin-bottom":"20px"}},Xt={class:"generate-result"},Yt=["innerHTML"],Kt={class:"image-preview-container"},Zt=["src"],es={class:"save-tips"},ts={class:"tip-text"},ss={class:"tip-title"},os={key:0,class:"tip-desc"},ns={key:1,class:"wechat-tips"},as={__name:"Dashboard",setup(is){const $=Te(),u=Ae(),J=T({totalNotes:0,remainingUses:0,totalImages:0,daysActive:0}),G=T([]),Q=T(!1),V=T(!1),v=T(null),R=T(!1),O=T(!1),P=T(""),oe=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,f=()=>/micromessenger/i.test(navigator.userAgent),be=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],we=Ie(()=>{var i;if(!((i=v.value)!=null&&i.content))return"";let n=v.value.content,e=[];try{v.value.image_urls?(console.log("原始image_urls数据:",v.value.image_urls),e=JSON.parse(v.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(_){console.warn("解析图片URL失败:",_),console.warn("原始数据:",v.value.image_urls)}return console.log("游记内容中的图片标记:",n.match(/\[图(\d+)\]/g)),n=n.replace(/\[图(\d+)\]/g,(_,y)=>{const h=parseInt(y)-1;return console.log(`处理图片标记 ${_}, index: ${h}, imageUrls长度: ${e.length}`),h>=0&&h<e.length&&e[h]?(console.log(`显示实际图片: ${e[h]}`),`<img src="${e[h]}" alt="图片${y}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${_}`),`<div class="image-placeholder" style="
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
          <div>图片 ${y}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),n}),ne=async n=>{switch(n){case"profile":$.push("/profile");break;case"logout":try{await _e.confirm("确定要退出登录吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),u.logout(),$.push("/login"),b.success("已退出登录")}catch{}break}},ae=async()=>{try{const n=await ee.get("/users/stats");J.value=n.data}catch(n){console.error("加载统计数据失败:",n)}},ie=async()=>{Q.value=!0;try{const n=await ee.get("/travel-notes",{params:{page:1,limit:3}});G.value=n.data.items||n.data}catch(n){console.error("加载最近游记失败:",n),b.error("加载最近游记失败")}finally{Q.value=!1}},le=n=>{v.value=n,V.value=!0},ke=async(n,e)=>{switch(n){case"view":le(e);break;case"share":de(e);break;case"delete":await Ce(e);break}},de=async n=>{if(!n.content){b.warning("没有可分享的内容");return}R.value=!0,b.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),i=f()?540:600,_=f()?20:30;e.style.cssText=`
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
    `;const y=document.createElement("div");y.style.cssText=`
      margin-bottom: 30px;
      text-align: right;
      padding: 0;
      background: transparent;
    `;const h=document.createElement("div");h.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const A=document.createElement("div");A.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,A.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',h.appendChild(A),y.appendChild(h);const N=document.createElement("div");N.style.cssText=`
      font-size: ${f()?"28px":"32px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 18px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,N.textContent=`✨ ${n.location||"旅行游记"}`;const w=document.createElement("div");w.style.cssText=`
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
    `;const S=document.createElement("div");S.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
    `;const M=document.createElement("div");M.style.cssText=`
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    `;const C=u.user,j=(C==null?void 0:C.username)||(C==null?void 0:C.email)||"旅行者";M.textContent=j.charAt(0).toUpperCase();const U=document.createElement("span");U.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,U.textContent=j,S.appendChild(M),S.appendChild(U);const I=document.createElement("div");if(I.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    `,n.location){const r=document.createElement("div");r.style.cssText=`
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px 10px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 14px;
      `,r.innerHTML=`📍 ${n.location}`,I.appendChild(r)}const B=document.createElement("div");B.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,B.innerHTML=`🕒 ${re(n.travel_date||n.created_at)}`,I.appendChild(B),w.appendChild(S),w.appendChild(I);const l=document.createElement("div");l.className="share-content",l.style.cssText=`
      font-size: ${f()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let E=n.content,F=[];try{n.image_urls&&(F=JSON.parse(n.image_urls))}catch(r){console.warn("解析图片URL失败:",r)}E=E.replace(/\[图(\d+)\]/g,(r,x)=>{const m=parseInt(x)-1;if(m>=0&&m<F.length&&F[m]){const D=f()?"480px":"540px";return`<img src="${F[m]}" alt="图片${x}" style="width: 100%; max-width: ${D}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${x}</div>`}),E=E.replace(/\n/g,"<br>"),l.innerHTML=E;const Y=document.createElement("div");Y.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,Y.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(y),e.appendChild(N),e.appendChild(w),e.appendChild(l),e.appendChild(Y),document.body.appendChild(e);const me=e.querySelectorAll("img");console.log(`Found ${me.length} images in container`);const Ee=Array.from(me).map((r,x)=>new Promise(m=>{if(console.log(`Checking image ${x+1}:`,r.src.substring(0,50)+"..."),r.complete&&r.naturalWidth>0)console.log(`Image ${x+1} already loaded`),m();else{const D=()=>{console.log(`Image ${x+1} loaded successfully`),m()},L=()=>{console.warn(`Image ${x+1} failed to load`),m()};r.addEventListener("load",D,{once:!0}),r.addEventListener("error",L,{once:!0}),setTimeout(()=>{r.removeEventListener("load",D),r.removeEventListener("error",L),console.log(`Image ${x+1} load timeout, continuing...`),m()},1e4)}}));await Promise.all(Ee),console.log("All images processed");const ge=e.scrollHeight;let K=f()?1.5:2,Z=f()?.8:.9;ge>8e3?(K=f()?1.2:1.5,Z=f()?.7:.85,b.info("内容较长，正在优化图片质量以确保生成成功...")):ge>5e3&&(K=f()?1.3:1.8,Z=f()?.75:.87);const fe={useCORS:!0,allowTaint:!0,scale:K,backgroundColor:"#ffffff",logging:!0,width:i,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:r=>{console.log("Document cloned for html2canvas");const x=r.querySelectorAll("img");console.log(`Found ${x.length} images in cloned document`);const m=r.createElement("style");m.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${f()?"26px":"28px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,r.head.appendChild(m),r.querySelectorAll(".share-content").forEach(L=>{L.style.fontSize=f()?"30px":"32px",L.style.lineHeight="1.8",L.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",L.style.fontSize)})}};console.log("html2canvas options:",fe),console.log("Container dimensions:",{width:i}),await new Promise(r=>setTimeout(r,500));const q=await He(e,fe);if(console.log("Canvas generated:",{width:q.width,height:q.height}),q.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),q.toBlob(r=>{if(r){const x=URL.createObjectURL(r);if(oe()&&!f())P.value=x,O.value=!0,b.success("图片已生成，请长按图片保存到相册");else{const m=document.createElement("a");m.href=x,m.download=`旅行游记_${n.location||"未知地点"}_${re(n.travel_date||n.created_at)}.jpg`,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(x),f()?b.success("图片已生成，点击右上角●●●可转发给朋友"):b.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",Z)}catch(e){console.error("生成分享图片失败:",e),b.error("生成分享图片失败，请重试")}finally{R.value=!1}},X=n=>n?new Date(n).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",re=n=>n?new Date(n).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",Ce=async n=>{try{await _e.confirm(`确定要删除游记"${n.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await ee.delete(`/travel-notes/${n.id}`),b.success("删除成功"),ie(),ae()}catch(e){e!=="cancel"&&b.error("删除失败")}},ze=(n,e=120)=>{if(!n)return"暂无内容";const i=n.replace(/<[^>]*>/g,"");return i.length>e?i.substring(0,e)+"...":i},ce=n=>{const e=be.find(i=>i.value===n);return e?e.label:n},pe=()=>{if(!u.isAuthenticated){b.warning("请先登录后再创作游记"),$.push("/login");return}$.push("/generator")},ue=()=>{if(!u.isAuthenticated){b.warning("请先登录后再查看历史记录"),$.push("/login");return}$.push("/history")},$e=()=>{if(!u.isAuthenticated){b.warning("请先登录后再访问个人资料"),$.push("/login");return}$.push("/profile")};return Le(()=>{u.isAuthenticated&&(ae(),ie())}),(n,e)=>{var C,j,U,I,B;const i=z("el-icon"),_=z("el-button"),y=z("el-dropdown-item"),h=z("el-dropdown-menu"),A=z("el-dropdown"),N=z("el-tag"),w=z("el-descriptions-item"),S=z("el-descriptions"),M=z("el-dialog");return d(),c("div",Oe,[t("div",Pe,[t("div",Fe,[t("div",qe,[e[13]||(e[13]=t("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 ",-1)),t("p",We,[a(u).isAuthenticated?(d(),c("span",Je,"欢迎回来，"+p((C=a(u).user)==null?void 0:C.username)+"！",1)):(d(),c("span",Ge,"欢迎使用智能旅行游记生成器"))])]),t("div",Qe,[a(u).isAuthenticated?(d(),c("div",Xe,[t("div",Ye,[s(i,{style:{color:"#667eea","font-size":"16px"}},{default:o(()=>[s(a(W))]),_:1}),t("span",Ke,p(J.value.totalNotes),1),e[14]||(e[14]=t("span",{style:{color:"#666","font-size":"12px"}},"篇游记",-1))]),t("div",Ze,[s(i,{style:{color:"#f093fb","font-size":"16px"}},{default:o(()=>[s(a(ve))]),_:1}),t("span",et,p(((j=a(u).user)==null?void 0:j.remaining_trials)||0),1),e[15]||(e[15]=t("span",{style:{color:"#666","font-size":"12px"}},"次剩余",-1))])])):k("",!0),s(_,{onClick:pe,type:"primary",size:"large"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(ye))]),_:1}),e[16]||(e[16]=t("span",null,"开始创作",-1))]),_:1,__:[16]}),a(u).isAuthenticated?(d(),c("div",tt,[s(A,{onCommand:ne,trigger:"click"},{dropdown:o(()=>[s(h,{class:"custom-dropdown"},{default:o(()=>[s(y,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(H))]),_:1}),e[18]||(e[18]=t("span",null,"个人资料",-1))]),_:1,__:[18]}),s(y,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(xe))]),_:1}),e[19]||(e[19]=t("span",null,"退出登录",-1))]),_:1,__:[19]})]),_:1})]),default:o(()=>{var l;return[t("div",st,[t("div",ot,[s(i,{size:"20"},{default:o(()=>[s(a(H))]),_:1})]),t("div",nt,[t("span",at,p((l=a(u).user)==null?void 0:l.username),1),e[17]||(e[17]=t("span",{class:"user-role"},"用户",-1))]),s(i,{class:"dropdown-arrow",size:"14"},{default:o(()=>[s(a(he))]),_:1})])]}),_:1})])):(d(),c("div",it,[s(_,{onClick:e[0]||(e[0]=l=>n.$router.push("/login")),type:"success",size:"large"},{default:o(()=>e[20]||(e[20]=[g(" 登录 ")])),_:1,__:[20]})]))])]),t("div",lt,[t("div",dt,[t("div",rt,[e[21]||(e[21]=t("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," ✨ 智能旅行游记生成器 ",-1)),t("p",ct,[a(u).isAuthenticated?(d(),c("span",pt,"欢迎回来，"+p((U=a(u).user)==null?void 0:U.username)+"！",1)):(d(),c("span",ut,"欢迎使用智能旅行游记生成器"))])]),t("div",mt,[a(u).isAuthenticated?(d(),c("div",gt,[t("div",ft,[s(i,{style:{color:"#667eea"}},{default:o(()=>[s(a(W))]),_:1}),t("span",_t,p(J.value.totalNotes),1),e[22]||(e[22]=t("span",{class:"stat-label-compact"},"游记",-1))]),t("div",vt,[s(i,{style:{color:"#f093fb"}},{default:o(()=>[s(a(ve))]),_:1}),t("span",yt,p(((I=a(u).user)==null?void 0:I.remaining_trials)||0),1),e[23]||(e[23]=t("span",{class:"stat-label-compact"},"剩余",-1))])])):k("",!0),a(u).isAuthenticated?(d(),c("div",xt,[s(A,{onCommand:ne,trigger:"click"},{dropdown:o(()=>[s(h,{class:"custom-dropdown"},{default:o(()=>[s(y,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(H))]),_:1}),e[24]||(e[24]=t("span",null,"个人资料",-1))]),_:1,__:[24]}),s(y,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(xe))]),_:1}),e[25]||(e[25]=t("span",null,"退出登录",-1))]),_:1,__:[25]})]),_:1})]),default:o(()=>[t("div",ht,[t("div",bt,[s(i,{size:"16"},{default:o(()=>[s(a(H))]),_:1})]),s(i,{class:"mobile-dropdown-arrow-compact",size:"10"},{default:o(()=>[s(a(he))]),_:1})])]),_:1})])):k("",!0)])])])]),a(u).isAuthenticated?(d(),c("div",wt,[e[29]||(e[29]=t("h2",{style:{margin:"0 0 24px 0",color:"#333"}},"快速操作",-1)),t("div",kt,[t("div",{class:"action-card primary",onClick:pe},[t("div",Ct,[s(i,{size:"28"},{default:o(()=>[s(a(ye))]),_:1})]),e[26]||(e[26]=t("div",{class:"action-content"},[t("h3",null,"创建新游记"),t("p",null,"上传照片，AI为您生成精彩游记")],-1)),t("div",zt,[s(i,null,{default:o(()=>[s(a(te))]),_:1})])]),t("div",{class:"action-card secondary",onClick:ue},[t("div",$t,[s(i,{size:"28"},{default:o(()=>[s(a(W))]),_:1})]),e[27]||(e[27]=t("div",{class:"action-content"},[t("h3",null,"查看历史记录"),t("p",null,"浏览您的所有旅行游记")],-1)),t("div",Et,[s(i,null,{default:o(()=>[s(a(te))]),_:1})])]),t("div",{class:"action-card tertiary",onClick:$e},[t("div",Tt,[s(i,{size:"28"},{default:o(()=>[s(a(Me))]),_:1})]),e[28]||(e[28]=t("div",{class:"action-content"},[t("h3",null,"账户设置"),t("p",null,"管理您的个人信息和偏好")],-1)),t("div",At,[s(i,null,{default:o(()=>[s(a(te))]),_:1})])])])])):k("",!0),a(u).isAuthenticated?(d(),c("div",It,[t("div",Lt,[e[31]||(e[31]=t("h2",{style:{margin:"0",color:"#333"}},"最近的游记",-1)),s(_,{type:"text",onClick:ue},{default:o(()=>e[30]||(e[30]=[g(" 查看全部 ")])),_:1,__:[30]})]),Q.value?(d(),c("div",Nt,[s(i,{size:"48",class:"rotating"},{default:o(()=>[s(a(Ue))]),_:1}),e[32]||(e[32]=t("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):G.value.length===0?(d(),c("div",St,[s(i,{size:"48"},{default:o(()=>[s(a(W))]),_:1}),e[33]||(e[33]=t("p",{style:{margin:"16px 0 0 0"}},"还没有游记，快去创建第一篇吧！",-1))])):(d(),c("div",Mt,[t("div",Ut,[(d(!0),c(Ne,null,Se(G.value,l=>(d(),c("div",{key:l.id,class:"note-card-small",onClick:E=>le(l)},[t("div",Rt,[t("div",jt,[t("h3",null,p(l.location||"未知地点"),1)]),s(A,{onCommand:E=>ke(E,l),onClick:e[1]||(e[1]=Re(()=>{},["stop"]))},{dropdown:o(()=>[s(h,null,{default:o(()=>[s(y,{command:"view"},{default:o(()=>e[34]||(e[34]=[g("查看详情")])),_:1,__:[34]}),s(y,{command:"share"},{default:o(()=>e[35]||(e[35]=[g("分享图片")])),_:1,__:[35]}),s(y,{command:"delete",divided:""},{default:o(()=>e[36]||(e[36]=[g("删除")])),_:1,__:[36]})]),_:1})]),default:o(()=>[s(_,{circle:"",size:"small",class:"more-btn"},{default:o(()=>[s(i,null,{default:o(()=>[s(a(Be))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),t("div",Dt,[l.model_used?(d(),se(N,{key:0,size:"small",type:"info"},{default:o(()=>[g(p(ce(l.model_used)),1)]),_:2},1024)):k("",!0),l.writing_style?(d(),se(N,{key:1,size:"small",type:"success"},{default:o(()=>[g(p(l.writing_style),1)]),_:2},1024)):k("",!0)]),t("div",Ht,[t("p",null,p(ze(l.content,120)),1)]),t("div",Vt,[t("div",Ot,[s(i,null,{default:o(()=>[s(a(je))]),_:1}),t("span",null,p(X(l.travel_date||l.created_at)),1)]),l.companions?(d(),c("div",Pt,[s(i,null,{default:o(()=>[s(a(H))]),_:1}),t("span",null,p(l.companions),1)])):k("",!0)])],8,Bt))),128))])]))])):k("",!0),a(u).isAuthenticated?k("",!0):(d(),c("div",Ft,[t("div",qt,[e[42]||(e[42]=t("div",{class:"guide-icon",style:{"font-size":"64px","margin-bottom":"20px"}},"🎯",-1)),e[43]||(e[43]=t("h2",{style:{margin:"0 0 16px 0",color:"#333","font-size":"24px"}},"开启您的智能旅行游记之旅",-1)),e[44]||(e[44]=t("p",{style:{color:"#666","font-size":"16px","line-height":"1.6","margin-bottom":"32px","max-width":"500px","margin-left":"auto","margin-right":"auto"}}," 登录账号即可使用AI智能生成功能，将您的旅行照片转化为精彩的游记故事。 ",-1)),t("div",Wt,[s(_,{onClick:e[2]||(e[2]=l=>n.$router.push("/login")),type:"primary",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[37]||(e[37]=[g(" 立即登录 ")])),_:1,__:[37]}),s(_,{onClick:e[3]||(e[3]=l=>n.$router.push("/register")),type:"success",plain:"",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[38]||(e[38]=[g(" 注册账号 ")])),_:1,__:[38]})]),t("div",Jt,[t("div",{class:"feature-item",onClick:e[4]||(e[4]=l=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)","border-radius":"12px",color:"white"}},e[39]||(e[39]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"🤖",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"AI智能生成",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"上传照片，AI为您创作精彩游记",-1)])),t("div",{class:"feature-item",onClick:e[5]||(e[5]=l=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","border-radius":"12px",color:"white"}},e[40]||(e[40]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"📚",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"记录管理",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"保存和管理您的所有旅行回忆",-1)])),t("div",{class:"feature-item",onClick:e[6]||(e[6]=l=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","border-radius":"12px",color:"white"}},e[41]||(e[41]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"🎨",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"多样风格",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"支持多种写作风格和AI模型",-1)]))])])])),s(M,{modelValue:V.value,"onUpdate:modelValue":e[9]||(e[9]=l=>V.value=l),title:((B=v.value)==null?void 0:B.location)||"游记详情",width:oe()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:o(()=>[s(_,{onClick:e[7]||(e[7]=l=>V.value=!1)},{default:o(()=>e[45]||(e[45]=[g("关闭")])),_:1,__:[45]}),s(_,{type:"primary",onClick:e[8]||(e[8]=l=>de(v.value)),loading:R.value},{default:o(()=>[R.value?k("",!0):(d(),se(i,{key:0},{default:o(()=>[s(a(De))]),_:1})),g(" "+p(R.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:o(()=>[v.value?(d(),c("div",Gt,[t("div",Qt,[s(S,{column:2,border:""},{default:o(()=>[s(w,{label:"地点"},{default:o(()=>[g(p(v.value.location||"未知"),1)]),_:1}),s(w,{label:"旅行日期"},{default:o(()=>[g(p(X(v.value.travel_date)),1)]),_:1}),s(w,{label:"同行者"},{default:o(()=>[g(p(v.value.companions||"未填写"),1)]),_:1}),s(w,{label:"创建时间"},{default:o(()=>[g(p(X(v.value.created_at)),1)]),_:1}),s(w,{label:"使用模型"},{default:o(()=>[g(p(ce(v.value.model_used)),1)]),_:1}),s(w,{label:"写作风格"},{default:o(()=>[g(p(v.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),t("div",Xt,[t("div",{class:"result-content",innerHTML:we.value},null,8,Yt)])])):k("",!0)]),_:1},8,["modelValue","title","width"]),s(M,{modelValue:O.value,"onUpdate:modelValue":e[11]||(e[11]=l=>O.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[12]||(e[12]=()=>{n.URL.revokeObjectURL(P.value),P.value=""})},{footer:o(()=>[s(_,{onClick:e[10]||(e[10]=l=>O.value=!1),type:"primary"},{default:o(()=>e[48]||(e[48]=[g("知道了")])),_:1,__:[48]})]),default:o(()=>[t("div",Kt,[t("img",{src:P.value,alt:"分享图片",class:"preview-image"},null,8,Zt),t("div",es,[e[47]||(e[47]=t("div",{class:"tip-icon"},"💾",-1)),t("div",ts,[t("p",ss,p(f()?"保存图片到相册":"长按图片保存到相册"),1),f()?(d(),c("div",ns,e[46]||(e[46]=[t("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),t("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),t("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(d(),c("p",os,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},cs=Ve(as,[["__scopeId","data-v-aaef3068"]]);export{cs as default};
