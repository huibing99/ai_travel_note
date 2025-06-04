import{u as ze,a as $e,r as E,j as Ae,k as Ee,c as C,o as d,d as c,e as t,h as a,t as m,f as s,w as o,l as k,F as Te,m as Ie,n as me,E as b,p as K,q,s as ge,v as fe,x as O,y as _e,z as ve,i as f,A as Z,B as Le,C as Ne,D as Ue,G as Re,H as ee,I as Se,J as Me}from"./index-c73c5a8c.js";import{h as Be}from"./html2canvas.esm-85f1a6b6.js";import{_ as je}from"./_plugin-vue_export-helper-c27b6911.js";const De={class:"dashboard-container"},He={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Oe={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ve={style:{flex:"1"}},Fe={style:{margin:"8px 0 0 0",color:"#666"}},Pe={key:0},qe={key:1},We={style:{display:"flex","align-items":"center",gap:"20px","justify-content":"flex-end"}},Je={key:0,style:{display:"flex",gap:"16px"}},Ge={class:"mini-stat"},Qe={style:{"font-weight":"600",color:"#333"}},Xe={class:"mini-stat"},Ye={style:{"font-weight":"600",color:"#333"}},Ke={key:1},Ze={class:"user-menu-trigger"},et={class:"user-avatar"},tt={class:"user-info"},st={class:"username"},ot={key:2},nt={class:"mobile-only"},at={class:"mobile-header-row"},lt={class:"mobile-title-section"},it={style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}},rt={key:0},dt={key:1},ct={class:"mobile-right-section"},pt={key:0,class:"mobile-stats-compact"},ut={class:"mobile-stat-item-compact"},mt={class:"stat-number-compact"},gt={class:"mobile-stat-item-compact"},ft={class:"stat-number-compact"},_t={key:1},vt={class:"mobile-user-menu-compact"},yt={class:"mobile-user-avatar-compact"},xt={key:0,class:"dashboard-card",style:{padding:"30px"}},ht={class:"quick-actions"},bt={class:"action-icon"},wt={class:"action-arrow"},kt={class:"action-icon"},Ct={class:"action-arrow"},zt={class:"action-icon"},$t={class:"action-arrow"},At={key:1,class:"dashboard-card",style:{padding:"30px"}},Et={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px"}},Tt={key:0,style:{"text-align":"center",padding:"40px"}},It={key:1,style:{"text-align":"center",padding:"40px",color:"#999"}},Lt={key:2},Nt={class:"notes-grid"},Ut=["onClick"],Rt={class:"card-header"},St={class:"location-title"},Mt={class:"card-tags"},Bt={class:"card-content"},jt={class:"card-footer"},Dt={class:"date-info"},Ht={key:0,class:"companions-info"},Ot={key:2,class:"dashboard-card",style:{padding:"40px","text-align":"center"}},Vt={class:"login-guide"},Ft={class:"guide-actions",style:{display:"flex",gap:"16px","justify-content":"center","flex-wrap":"wrap","margin-bottom":"32px"}},Pt={class:"guide-features",style:{display:"grid","grid-template-columns":"repeat(auto-fit, minmax(200px, 1fr))",gap:"20px"}},qt={key:0,class:"note-detail"},Wt={style:{"margin-bottom":"20px"}},Jt={class:"generate-result"},Gt=["innerHTML"],Qt={class:"image-preview-container"},Xt=["src"],Yt={class:"save-tips"},Kt={class:"tip-text"},Zt={key:0,class:"tip-desc"},es={key:1,class:"wechat-tips"},ts={__name:"Dashboard",setup(ss){const z=ze(),u=$e(),W=E({totalNotes:0,remainingUses:0,totalImages:0,daysActive:0}),J=E([]),G=E(!1),V=E(!1),v=E(null),B=E(!1),j=E(!1),D=E(""),te=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,g=()=>/micromessenger/i.test(navigator.userAgent),ye=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],xe=Ae(()=>{var l;if(!((l=v.value)!=null&&l.content))return"";let n=v.value.content,e=[];try{v.value.image_urls?(console.log("原始image_urls数据:",v.value.image_urls),e=JSON.parse(v.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(_){console.warn("解析图片URL失败:",_),console.warn("原始数据:",v.value.image_urls)}return console.log("游记内容中的图片标记:",n.match(/\[图(\d+)\]/g)),n=n.replace(/\[图(\d+)\]/g,(_,x)=>{const h=parseInt(x)-1;return console.log(`处理图片标记 ${_}, index: ${h}, imageUrls长度: ${e.length}`),h>=0&&h<e.length&&e[h]?(console.log(`显示实际图片: ${e[h]}`),`<img src="${e[h]}" alt="图片${x}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${_}`),`<div class="image-placeholder" style="
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
      </div>`)}),n}),se=async n=>{switch(n){case"profile":z.push("/profile");break;case"logout":try{await me.confirm("确定要退出登录吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),u.logout(),z.push("/login"),b.success("已退出登录")}catch{}break}},oe=async()=>{try{const n=await K.get("/users/stats");W.value=n.data}catch(n){console.error("加载统计数据失败:",n)}},ne=async()=>{G.value=!0;try{const n=await K.get("/travel-notes",{params:{page:1,limit:3}});J.value=n.data.items||n.data}catch(n){console.error("加载最近游记失败:",n),b.error("加载最近游记失败")}finally{G.value=!1}},ae=n=>{v.value=n,V.value=!0},he=async(n,e)=>{switch(n){case"view":ae(e);break;case"share":le(e);break;case"delete":await be(e);break}},le=async n=>{if(!n.content){b.warning("没有可分享的内容");return}B.value=!0,b.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),l=g()?540:600,_=g()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${l}px;
      background: #fff;
      padding: ${_}px;
      padding-top: ${_+80}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      min-height: auto;
      height: auto;
      overflow: visible;
    `;const x=document.createElement("div");x.style.cssText=`
      font-size: ${g()?"28px":"32px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 18px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,x.textContent=`✨ ${n.location||"旅行游记"}`;const h=document.createElement("div");h.style.cssText=`
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
    `;const $=document.createElement("div");$.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
    `;const R=document.createElement("div");R.style.cssText=`
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      flex-shrink: 0;
    `;const w=u.user,F=(w==null?void 0:w.username)||(w==null?void 0:w.email)||"旅行者";R.textContent=F.charAt(0).toUpperCase();const S=document.createElement("span");S.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,S.textContent=F,$.appendChild(R),$.appendChild(S);const T=document.createElement("div");if(T.style.cssText=`
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
      `,r.innerHTML=`📍 ${n.location}`,T.appendChild(r)}const M=document.createElement("div");M.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,M.innerHTML=`🕒 ${ie(n.travel_date||n.created_at)}`,T.appendChild(M),h.appendChild($),h.appendChild(T);const I=document.createElement("div");I.className="share-content",I.style.cssText=`
      font-size: ${g()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let A=n.content,L=[];try{n.image_urls&&(L=JSON.parse(n.image_urls))}catch(r){console.warn("解析图片URL失败:",r)}A=A.replace(/\[图(\d+)\]/g,(r,y)=>{const p=parseInt(y)-1;if(p>=0&&p<L.length&&L[p]){const N=g()?"480px":"540px";return`<img src="${L[p]}" alt="图片${y}" style="width: 100%; max-width: ${N}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${y}</div>`}),A=A.replace(/\n/g,"<br>"),I.innerHTML=A;const i=document.createElement("div");i.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,i.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(x),e.appendChild(h),e.appendChild(I),e.appendChild(i),document.body.appendChild(e);const H=e.querySelectorAll("img");console.log(`Found ${H.length} images in container`);const Ce=Array.from(H).map((r,y)=>new Promise(p=>{if(console.log(`Checking image ${y+1}:`,r.src.substring(0,50)+"..."),r.complete&&r.naturalWidth>0)console.log(`Image ${y+1} already loaded`),p();else{const N=()=>{console.log(`Image ${y+1} loaded successfully`),p()},U=()=>{console.warn(`Image ${y+1} failed to load`),p()};r.addEventListener("load",N,{once:!0}),r.addEventListener("error",U,{once:!0}),setTimeout(()=>{r.removeEventListener("load",N),r.removeEventListener("error",U),console.log(`Image ${y+1} load timeout, continuing...`),p()},1e4)}}));await Promise.all(Ce),console.log("All images processed");const pe=e.scrollHeight;let X=g()?1.5:2,Y=g()?.8:.9;pe>8e3?(X=g()?1.2:1.5,Y=g()?.7:.85,b.info("内容较长，正在优化图片质量以确保生成成功...")):pe>5e3&&(X=g()?1.3:1.8,Y=g()?.75:.87);const ue={useCORS:!0,allowTaint:!0,scale:X,backgroundColor:"#ffffff",logging:!0,width:l,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:r=>{console.log("Document cloned for html2canvas");const y=r.querySelectorAll("img");console.log(`Found ${y.length} images in cloned document`);const p=r.createElement("style");p.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${g()?"26px":"28px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,r.head.appendChild(p),r.querySelectorAll(".share-content").forEach(U=>{U.style.fontSize=g()?"30px":"32px",U.style.lineHeight="1.8",U.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",U.style.fontSize)})}};console.log("html2canvas options:",ue),console.log("Container dimensions:",{width:l}),await new Promise(r=>setTimeout(r,500));const P=await Be(e,ue);if(console.log("Canvas generated:",{width:P.width,height:P.height}),P.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),P.toBlob(r=>{if(r){const y=URL.createObjectURL(r);if(te()&&(!g()||g()))if(g()){const p=new FileReader;p.onload=function(N){D.value=N.target.result,j.value=!0,b.success("图片已生成，请长按图片保存到相册或转发给朋友")},p.readAsDataURL(r),URL.revokeObjectURL(y)}else D.value=y,j.value=!0,b.success("图片已生成，请长按图片保存到相册或转发给朋友");else{const p=document.createElement("a");p.href=y,p.download=`旅行游记_${n.location||"未知地点"}_${ie(n.travel_date||n.created_at)}.jpg`,document.body.appendChild(p),p.click(),document.body.removeChild(p),URL.revokeObjectURL(y),g()?b.success("图片已生成并下载"):b.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",Y)}catch(e){console.error("生成分享图片失败:",e),b.error("生成分享图片失败，请重试")}finally{B.value=!1}},Q=n=>n?new Date(n).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ie=n=>n?new Date(n).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",be=async n=>{try{await me.confirm(`确定要删除游记"${n.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await K.delete(`/travel-notes/${n.id}`),b.success("删除成功"),ne(),oe()}catch(e){e!=="cancel"&&b.error("删除失败")}},we=(n,e=120)=>{if(!n)return"暂无内容";const l=n.replace(/<[^>]*>/g,"");return l.length>e?l.substring(0,e)+"...":l},re=n=>{const e=ye.find(l=>l.value===n);return e?e.label:n},de=()=>{if(!u.isAuthenticated){b.warning("请先登录后再创作游记"),z.push("/login");return}z.push("/generator")},ce=()=>{if(!u.isAuthenticated){b.warning("请先登录后再查看历史记录"),z.push("/login");return}z.push("/history")},ke=()=>{if(!u.isAuthenticated){b.warning("请先登录后再访问个人资料"),z.push("/login");return}z.push("/profile")};return Ee(()=>{u.isAuthenticated&&(oe(),ne())}),(n,e)=>{var T,M,I,A,L;const l=C("el-icon"),_=C("el-button"),x=C("el-dropdown-item"),h=C("el-dropdown-menu"),$=C("el-dropdown"),R=C("el-tag"),w=C("el-descriptions-item"),F=C("el-descriptions"),S=C("el-dialog");return d(),c("div",De,[t("div",He,[t("div",Oe,[t("div",Ve,[e[13]||(e[13]=t("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 ",-1)),t("p",Fe,[a(u).isAuthenticated?(d(),c("span",Pe,"欢迎回来，"+m((T=a(u).user)==null?void 0:T.username)+"！",1)):(d(),c("span",qe,"欢迎使用智能旅行游记生成器"))])]),t("div",We,[a(u).isAuthenticated?(d(),c("div",Je,[t("div",Ge,[s(l,{style:{color:"#667eea","font-size":"16px"}},{default:o(()=>[s(a(q))]),_:1}),t("span",Qe,m(W.value.totalNotes),1),e[14]||(e[14]=t("span",{style:{color:"#666","font-size":"12px"}},"篇游记",-1))]),t("div",Xe,[s(l,{style:{color:"#f093fb","font-size":"16px"}},{default:o(()=>[s(a(ge))]),_:1}),t("span",Ye,m(((M=a(u).user)==null?void 0:M.remaining_trials)||0),1),e[15]||(e[15]=t("span",{style:{color:"#666","font-size":"12px"}},"次剩余",-1))])])):k("",!0),s(_,{onClick:de,type:"primary",size:"large"},{default:o(()=>[s(l,null,{default:o(()=>[s(a(fe))]),_:1}),e[16]||(e[16]=t("span",null,"开始创作",-1))]),_:1,__:[16]}),a(u).isAuthenticated?(d(),c("div",Ke,[s($,{onCommand:se,trigger:"click"},{dropdown:o(()=>[s(h,{class:"custom-dropdown"},{default:o(()=>[s(x,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(l,null,{default:o(()=>[s(a(O))]),_:1}),e[18]||(e[18]=t("span",null,"个人资料",-1))]),_:1,__:[18]}),s(x,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(l,null,{default:o(()=>[s(a(_e))]),_:1}),e[19]||(e[19]=t("span",null,"退出登录",-1))]),_:1,__:[19]})]),_:1})]),default:o(()=>{var i;return[t("div",Ze,[t("div",et,[s(l,{size:"20"},{default:o(()=>[s(a(O))]),_:1})]),t("div",tt,[t("span",st,m((i=a(u).user)==null?void 0:i.username),1),e[17]||(e[17]=t("span",{class:"user-role"},"用户",-1))]),s(l,{class:"dropdown-arrow",size:"14"},{default:o(()=>[s(a(ve))]),_:1})])]}),_:1})])):(d(),c("div",ot,[s(_,{onClick:e[0]||(e[0]=i=>n.$router.push("/login")),type:"success",size:"large"},{default:o(()=>e[20]||(e[20]=[f(" 登录 ")])),_:1,__:[20]})]))])]),t("div",nt,[t("div",at,[t("div",lt,[e[21]||(e[21]=t("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," ✨ 智能旅行游记生成器 ",-1)),t("p",it,[a(u).isAuthenticated?(d(),c("span",rt,"欢迎回来，"+m((I=a(u).user)==null?void 0:I.username)+"！",1)):(d(),c("span",dt,"欢迎使用智能旅行游记生成器"))])]),t("div",ct,[a(u).isAuthenticated?(d(),c("div",pt,[t("div",ut,[s(l,{style:{color:"#667eea"}},{default:o(()=>[s(a(q))]),_:1}),t("span",mt,m(W.value.totalNotes),1),e[22]||(e[22]=t("span",{class:"stat-label-compact"},"游记",-1))]),t("div",gt,[s(l,{style:{color:"#f093fb"}},{default:o(()=>[s(a(ge))]),_:1}),t("span",ft,m(((A=a(u).user)==null?void 0:A.remaining_trials)||0),1),e[23]||(e[23]=t("span",{class:"stat-label-compact"},"剩余",-1))])])):k("",!0),a(u).isAuthenticated?(d(),c("div",_t,[s($,{onCommand:se,trigger:"click"},{dropdown:o(()=>[s(h,{class:"custom-dropdown"},{default:o(()=>[s(x,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(l,null,{default:o(()=>[s(a(O))]),_:1}),e[24]||(e[24]=t("span",null,"个人资料",-1))]),_:1,__:[24]}),s(x,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(l,null,{default:o(()=>[s(a(_e))]),_:1}),e[25]||(e[25]=t("span",null,"退出登录",-1))]),_:1,__:[25]})]),_:1})]),default:o(()=>[t("div",vt,[t("div",yt,[s(l,{size:"16"},{default:o(()=>[s(a(O))]),_:1})]),s(l,{class:"mobile-dropdown-arrow-compact",size:"10"},{default:o(()=>[s(a(ve))]),_:1})])]),_:1})])):k("",!0)])])])]),a(u).isAuthenticated?(d(),c("div",xt,[e[29]||(e[29]=t("h2",{style:{margin:"0 0 24px 0",color:"#333"}},"快速操作",-1)),t("div",ht,[t("div",{class:"action-card primary",onClick:de},[t("div",bt,[s(l,{size:"28"},{default:o(()=>[s(a(fe))]),_:1})]),e[26]||(e[26]=t("div",{class:"action-content"},[t("h3",null,"创建新游记"),t("p",null,"上传照片，AI为您生成精彩游记")],-1)),t("div",wt,[s(l,null,{default:o(()=>[s(a(Z))]),_:1})])]),t("div",{class:"action-card secondary",onClick:ce},[t("div",kt,[s(l,{size:"28"},{default:o(()=>[s(a(q))]),_:1})]),e[27]||(e[27]=t("div",{class:"action-content"},[t("h3",null,"查看历史记录"),t("p",null,"浏览您的所有旅行游记")],-1)),t("div",Ct,[s(l,null,{default:o(()=>[s(a(Z))]),_:1})])]),t("div",{class:"action-card tertiary",onClick:ke},[t("div",zt,[s(l,{size:"28"},{default:o(()=>[s(a(Le))]),_:1})]),e[28]||(e[28]=t("div",{class:"action-content"},[t("h3",null,"账户设置"),t("p",null,"管理您的个人信息和偏好")],-1)),t("div",$t,[s(l,null,{default:o(()=>[s(a(Z))]),_:1})])])])])):k("",!0),a(u).isAuthenticated?(d(),c("div",At,[t("div",Et,[e[31]||(e[31]=t("h2",{style:{margin:"0",color:"#333"}},"最近的游记",-1)),s(_,{type:"text",onClick:ce},{default:o(()=>e[30]||(e[30]=[f(" 查看全部 ")])),_:1,__:[30]})]),G.value?(d(),c("div",Tt,[s(l,{size:"48",class:"rotating"},{default:o(()=>[s(a(Ne))]),_:1}),e[32]||(e[32]=t("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):J.value.length===0?(d(),c("div",It,[s(l,{size:"48"},{default:o(()=>[s(a(q))]),_:1}),e[33]||(e[33]=t("p",{style:{margin:"16px 0 0 0"}},"还没有游记，快去创建第一篇吧！",-1))])):(d(),c("div",Lt,[t("div",Nt,[(d(!0),c(Te,null,Ie(J.value,i=>(d(),c("div",{key:i.id,class:"note-card-small",onClick:H=>ae(i)},[t("div",Rt,[t("div",St,[t("h3",null,m(i.location||"未知地点"),1)]),s($,{onCommand:H=>he(H,i),onClick:e[1]||(e[1]=Re(()=>{},["stop"]))},{dropdown:o(()=>[s(h,null,{default:o(()=>[s(x,{command:"view"},{default:o(()=>e[34]||(e[34]=[f("查看详情")])),_:1,__:[34]}),s(x,{command:"share"},{default:o(()=>e[35]||(e[35]=[f("分享图片")])),_:1,__:[35]}),s(x,{command:"delete",divided:""},{default:o(()=>e[36]||(e[36]=[f("删除")])),_:1,__:[36]})]),_:1})]),default:o(()=>[s(_,{circle:"",size:"small",class:"more-btn"},{default:o(()=>[s(l,null,{default:o(()=>[s(a(Ue))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),t("div",Mt,[i.model_used?(d(),ee(R,{key:0,size:"small",type:"info"},{default:o(()=>[f(m(re(i.model_used)),1)]),_:2},1024)):k("",!0),i.writing_style?(d(),ee(R,{key:1,size:"small",type:"success"},{default:o(()=>[f(m(i.writing_style),1)]),_:2},1024)):k("",!0)]),t("div",Bt,[t("p",null,m(we(i.content,120)),1)]),t("div",jt,[t("div",Dt,[s(l,null,{default:o(()=>[s(a(Se))]),_:1}),t("span",null,m(Q(i.travel_date||i.created_at)),1)]),i.companions?(d(),c("div",Ht,[s(l,null,{default:o(()=>[s(a(O))]),_:1}),t("span",null,m(i.companions),1)])):k("",!0)])],8,Ut))),128))])]))])):k("",!0),a(u).isAuthenticated?k("",!0):(d(),c("div",Ot,[t("div",Vt,[e[42]||(e[42]=t("div",{class:"guide-icon",style:{"font-size":"64px","margin-bottom":"20px"}},"🎯",-1)),e[43]||(e[43]=t("h2",{style:{margin:"0 0 16px 0",color:"#333","font-size":"24px"}},"开启您的智能旅行游记之旅",-1)),e[44]||(e[44]=t("p",{style:{color:"#666","font-size":"16px","line-height":"1.6","margin-bottom":"32px","max-width":"500px","margin-left":"auto","margin-right":"auto"}}," 登录账号即可使用AI智能生成功能，将您的旅行照片转化为精彩的游记故事。 ",-1)),t("div",Ft,[s(_,{onClick:e[2]||(e[2]=i=>n.$router.push("/login")),type:"primary",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[37]||(e[37]=[f(" 立即登录 ")])),_:1,__:[37]}),s(_,{onClick:e[3]||(e[3]=i=>n.$router.push("/register")),type:"success",plain:"",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[38]||(e[38]=[f(" 注册账号 ")])),_:1,__:[38]})]),t("div",Pt,[t("div",{class:"feature-item",onClick:e[4]||(e[4]=i=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)","border-radius":"12px",color:"white"}},e[39]||(e[39]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"🤖",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"AI智能生成",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"上传照片，AI为您创作精彩游记",-1)])),t("div",{class:"feature-item",onClick:e[5]||(e[5]=i=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #f093fb 0%, #f5576c 100%)","border-radius":"12px",color:"white"}},e[40]||(e[40]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"📚",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"记录管理",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"保存和管理您的所有旅行回忆",-1)])),t("div",{class:"feature-item",onClick:e[6]||(e[6]=i=>n.$router.push("/login")),style:{padding:"20px",background:"linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)","border-radius":"12px",color:"white"}},e[41]||(e[41]=[t("div",{style:{"font-size":"32px","margin-bottom":"12px"}},"🎨",-1),t("h4",{style:{margin:"0 0 8px 0","font-size":"16px"}},"多样风格",-1),t("p",{style:{margin:"0","font-size":"14px",opacity:"0.9"}},"支持多种写作风格和AI模型",-1)]))])])])),s(S,{modelValue:V.value,"onUpdate:modelValue":e[9]||(e[9]=i=>V.value=i),title:((L=v.value)==null?void 0:L.location)||"游记详情",width:te()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:o(()=>[s(_,{onClick:e[7]||(e[7]=i=>V.value=!1)},{default:o(()=>e[45]||(e[45]=[f("关闭")])),_:1,__:[45]}),s(_,{type:"primary",onClick:e[8]||(e[8]=i=>le(v.value)),loading:B.value},{default:o(()=>[B.value?k("",!0):(d(),ee(l,{key:0},{default:o(()=>[s(a(Me))]),_:1})),f(" "+m(B.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:o(()=>[v.value?(d(),c("div",qt,[t("div",Wt,[s(F,{column:2,border:""},{default:o(()=>[s(w,{label:"地点"},{default:o(()=>[f(m(v.value.location||"未知"),1)]),_:1}),s(w,{label:"旅行日期"},{default:o(()=>[f(m(Q(v.value.travel_date)),1)]),_:1}),s(w,{label:"同行者"},{default:o(()=>[f(m(v.value.companions||"未填写"),1)]),_:1}),s(w,{label:"创建时间"},{default:o(()=>[f(m(Q(v.value.created_at)),1)]),_:1}),s(w,{label:"使用模型"},{default:o(()=>[f(m(re(v.value.model_used)),1)]),_:1}),s(w,{label:"写作风格"},{default:o(()=>[f(m(v.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),t("div",Jt,[t("div",{class:"result-content",innerHTML:xe.value},null,8,Gt)])])):k("",!0)]),_:1},8,["modelValue","title","width"]),s(S,{modelValue:j.value,"onUpdate:modelValue":e[11]||(e[11]=i=>j.value=i),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[12]||(e[12]=()=>{n.URL.revokeObjectURL(D.value),D.value=""})},{footer:o(()=>[s(_,{onClick:e[10]||(e[10]=i=>j.value=!1),type:"primary"},{default:o(()=>e[49]||(e[49]=[f("知道了")])),_:1,__:[49]})]),default:o(()=>[t("div",Qt,[t("img",{src:D.value,alt:"分享图片",class:"preview-image"},null,8,Xt),t("div",Yt,[e[48]||(e[48]=t("div",{class:"tip-icon"},"💾",-1)),t("div",Kt,[e[47]||(e[47]=t("p",{class:"tip-title"},"保存图片到相册",-1)),g()?(d(),c("div",es,e[46]||(e[46]=[t("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),t("p",{class:"tip-desc"},'• 点击右上角"●●●"分享给朋友或朋友圈',-1),t("p",{class:"tip-desc"},"• 如果长按无效，请尝试截屏保存",-1)]))):(d(),c("p",Zt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},ls=je(ts,[["__scopeId","data-v-51017c71"]]);export{ls as default};
