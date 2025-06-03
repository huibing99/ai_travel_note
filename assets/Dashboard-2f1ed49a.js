import{u as Ae,a as Ee,r as A,j as Ie,k as Le,c as z,o as d,d as r,e as t,h as i,t as p,f as s,w as o,l as k,F as Ne,m as Me,n as De,p as _e,E as b,q as ee,s as F,v as ve,x as xe,y as j,z as ye,A as he,i as m,B as te,C as Ue,D as Be,G as Re,H as He,I as se,J as Se,K as je}from"./index-1766a76c.js";import{h as Ve}from"./html2canvas.esm-85f1a6b6.js";import{_ as Oe}from"./_plugin-vue_export-helper-c27b6911.js";const Pe={class:"dashboard-container"},qe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},We={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Fe={style:{flex:"1"}},Je={style:{margin:"8px 0 0 0",color:"#666"}},Ge={key:0},Ke={key:1},Qe={style:{display:"flex","align-items":"center",gap:"20px","justify-content":"flex-end"}},Xe={key:0,style:{display:"flex",gap:"16px"}},Ye={class:"mini-stat"},Ze={style:{"font-weight":"600",color:"#333"}},et={class:"mini-stat"},tt={style:{"font-weight":"600",color:"#333"}},st={key:1},ot={class:"user-menu-trigger"},nt={class:"user-avatar"},at={class:"user-info"},it={class:"username"},lt={key:2},dt={class:"mobile-only"},rt={class:"mobile-header-row"},ct={class:"mobile-title-section"},pt={style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}},ut={key:0},mt={key:1},gt={class:"mobile-right-section"},ft={key:0,class:"mobile-stats-compact"},_t={class:"mobile-stat-item-compact"},vt={class:"stat-number-compact"},xt={class:"mobile-stat-item-compact"},yt={class:"stat-number-compact"},ht={key:1},bt={class:"mobile-user-menu-compact"},wt={class:"mobile-user-avatar-compact"},kt={key:2},Ct={key:0,class:"dashboard-card",style:{padding:"30px"}},zt={class:"quick-actions"},$t={class:"action-icon"},Tt={class:"action-arrow"},At={class:"action-icon"},Et={class:"action-arrow"},It={class:"action-icon"},Lt={class:"action-arrow"},Nt={key:1,class:"dashboard-card",style:{padding:"30px"}},Mt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px"}},Dt={key:0,style:{"text-align":"center",padding:"40px"}},Ut={key:1,style:{"text-align":"center",padding:"40px",color:"#999"}},Bt={key:2},Rt={class:"notes-grid"},Ht=["onClick"],St={class:"card-header"},jt={class:"location-title"},Vt={class:"card-tags"},Ot={class:"card-content"},Pt={class:"card-footer"},qt={class:"date-info"},Wt={key:0,class:"companions-info"},Ft={key:2,class:"dashboard-card",style:{padding:"40px","text-align":"center"}},Jt={class:"login-guide"},Gt={class:"guide-actions",style:{display:"flex",gap:"16px","justify-content":"center","flex-wrap":"wrap","margin-bottom":"32px"}},Kt={key:0,class:"note-detail"},Qt={style:{"margin-bottom":"20px"}},Xt={class:"generate-result"},Yt=["innerHTML"],Zt={class:"image-preview-container"},es=["src"],ts={class:"save-tips"},ss={class:"tip-text"},os={class:"tip-title"},ns={key:0,class:"tip-desc"},as={key:1,class:"wechat-tips"},is={__name:"Dashboard",setup(ls){const $=Ae(),u=Ee(),J=A({totalNotes:0,remainingUses:0,totalImages:0,daysActive:0}),G=A([]),K=A(!1),V=A(!1),f=A(null),B=A(!1),O=A(!1),P=A(""),oe=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,_=()=>/micromessenger/i.test(navigator.userAgent),be=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],we=Ie(()=>{var a;if(!((a=f.value)!=null&&a.content))return"";let n=f.value.content,e=[];try{f.value.image_urls?(console.log("原始image_urls数据:",f.value.image_urls),e=JSON.parse(f.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(g){console.warn("解析图片URL失败:",g),console.warn("原始数据:",f.value.image_urls)}return console.log("游记内容中的图片标记:",n.match(/\[图(\d+)\]/g)),n=n.replace(/\[图(\d+)\]/g,(g,v)=>{const h=parseInt(v)-1;return console.log(`处理图片标记 ${g}, index: ${h}, imageUrls长度: ${e.length}`),h>=0&&h<e.length&&e[h]?(console.log(`显示实际图片: ${e[h]}`),`<img src="${e[h]}" alt="图片${v}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${g}`),`<div class="image-placeholder" style="
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
          <div>图片 ${v}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),n}),ne=async n=>{switch(n){case"profile":$.push("/profile");break;case"logout":try{await _e.confirm("确定要退出登录吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),u.logout(),$.push("/login"),b.success("已退出登录")}catch{}break}},ae=async()=>{try{const n=await ee.get("/users/stats");J.value=n.data}catch(n){console.error("加载统计数据失败:",n)}},ie=async()=>{K.value=!0;try{const n=await ee.get("/travel-notes",{params:{page:1,limit:3}});G.value=n.data.items||n.data}catch(n){console.error("加载最近游记失败:",n),b.error("加载最近游记失败")}finally{K.value=!1}},le=n=>{f.value=n,V.value=!0},ke=async(n,e)=>{switch(n){case"view":le(e);break;case"share":de(e);break;case"delete":await Ce(e);break}},de=async n=>{if(!n.content){b.warning("没有可分享的内容");return}B.value=!0,b.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),a=_()?540:600,g=_()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${a}px;
      background: #fff;
      padding: ${g}px;
      padding-top: ${g+30}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `;const v=document.createElement("div");v.style.cssText=`
      margin-bottom: 30px;
      text-align: right;
      padding: 0;
      background: transparent;
    `;const h=document.createElement("div");h.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const E=document.createElement("div");E.style.cssText=`
      font-size: 13px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,E.innerHTML=_()?'点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友':"保存图片并分享给朋友",h.appendChild(E),v.appendChild(h);const L=document.createElement("div");L.style.cssText=`
      font-size: ${_()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,L.textContent=`✨ ${n.location||"旅行游记"}`;const w=document.createElement("div");w.style.cssText=`
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
    `;const N=document.createElement("div");N.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const M=document.createElement("div");M.style.cssText=`
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
    `;const C=u.user,R=(C==null?void 0:C.username)||(C==null?void 0:C.email)||"旅行者";M.textContent=R.charAt(0).toUpperCase();const D=document.createElement("span");D.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,D.textContent=R,N.appendChild(M),N.appendChild(D);const I=document.createElement("div");if(I.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,n.location){const c=document.createElement("div");c.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,c.innerHTML=`📍 ${n.location}`,I.appendChild(c)}const U=document.createElement("div");U.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `,U.innerHTML=`🕒 ${re(n.travel_date||n.created_at)}`,I.appendChild(U),w.appendChild(N),w.appendChild(I);const l=document.createElement("div");l.style.cssText=`
      font-size: ${_()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let T=n.content,q=[];try{n.image_urls&&(q=JSON.parse(n.image_urls))}catch(c){console.warn("解析图片URL失败:",c)}T=T.replace(/\[图(\d+)\]/g,(c,x)=>{const y=parseInt(x)-1;if(y>=0&&y<q.length&&q[y]){const W=_()?"480px":"540px";return`<img src="${q[y]}" alt="图片${x}" style="width: 100%; max-width: ${W}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${x}</div>`}),T=T.replace(/\n/g,"<br>"),l.innerHTML=T;const X=document.createElement("div");X.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,X.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(v),e.appendChild(L),e.appendChild(w),e.appendChild(l),e.appendChild(X),document.body.appendChild(e);const me=e.querySelectorAll("img");console.log(`Found ${me.length} images in container`);const Te=Array.from(me).map((c,x)=>new Promise(y=>{if(console.log(`Checking image ${x+1}:`,c.src.substring(0,50)+"..."),c.complete&&c.naturalWidth>0)console.log(`Image ${x+1} already loaded`),y();else{const W=()=>{console.log(`Image ${x+1} loaded successfully`),y()},fe=()=>{console.warn(`Image ${x+1} failed to load`),y()};c.addEventListener("load",W,{once:!0}),c.addEventListener("error",fe,{once:!0}),setTimeout(()=>{c.removeEventListener("load",W),c.removeEventListener("error",fe),console.log(`Image ${x+1} load timeout, continuing...`),y()},1e4)}}));await Promise.all(Te),console.log("All images processed");const H=e.scrollHeight;let Y=_()?1.5:2,Z=_()?.8:.9;H>8e3?(Y=_()?1.2:1.5,Z=_()?.7:.85,b.info("内容较长，正在优化图片质量以确保生成成功...")):H>5e3&&(Y=_()?1.3:1.8,Z=_()?.75:.87);const ge={useCORS:!0,allowTaint:!0,scale:Y,backgroundColor:"#ffffff",logging:!0,width:a,height:H,scrollX:0,scrollY:0,windowWidth:a,windowHeight:H,foreignObjectRendering:!1,imageTimeout:15e3,onclone:c=>{console.log("Document cloned for html2canvas");const x=c.querySelectorAll("img");console.log(`Found ${x.length} images in cloned document`)}};console.log("html2canvas options:",ge),console.log("Container dimensions:",{width:a,height:H}),await new Promise(c=>setTimeout(c,500));const S=await Ve(e,ge);if(console.log("Canvas generated:",{width:S.width,height:S.height}),S.width===0||S.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),S.toBlob(c=>{if(c){const x=URL.createObjectURL(c);if(oe()&&!_())P.value=x,O.value=!0,b.success("图片已生成，请长按图片保存到相册");else{const y=document.createElement("a");y.href=x,y.download=`旅行游记_${n.location||"未知地点"}_${re(n.travel_date||n.created_at)}.png`,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(x),_()?b.success("图片已生成，点击右上角●●●可转发给朋友"):b.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",Z)}catch(e){console.error("生成分享图片失败:",e),b.error("生成分享图片失败，请重试")}finally{B.value=!1}},Q=n=>n?new Date(n).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",re=n=>n?new Date(n).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",Ce=async n=>{try{await _e.confirm(`确定要删除游记"${n.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await ee.delete(`/travel-notes/${n.id}`),b.success("删除成功"),ie(),ae()}catch(e){e!=="cancel"&&b.error("删除失败")}},ze=(n,e=120)=>{if(!n)return"暂无内容";const a=n.replace(/<[^>]*>/g,"");return a.length>e?a.substring(0,e)+"...":a},ce=n=>{const e=be.find(a=>a.value===n);return e?e.label:n},pe=()=>{if(!u.isAuthenticated){b.warning("请先登录后再创作游记"),$.push("/login");return}$.push("/generator")},ue=()=>{if(!u.isAuthenticated){b.warning("请先登录后再查看历史记录"),$.push("/login");return}$.push("/history")},$e=()=>{if(!u.isAuthenticated){b.warning("请先登录后再访问个人资料"),$.push("/login");return}$.push("/profile")};return Le(()=>{u.isAuthenticated&&(ae(),ie())}),(n,e)=>{var C,R,D,I,U;const a=z("el-icon"),g=z("el-button"),v=z("el-dropdown-item"),h=z("el-dropdown-menu"),E=z("el-dropdown"),L=z("el-tag"),w=z("el-descriptions-item"),N=z("el-descriptions"),M=z("el-dialog");return d(),r("div",Pe,[t("div",qe,[t("div",We,[t("div",Fe,[e[11]||(e[11]=t("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 ",-1)),t("p",Je,[i(u).isAuthenticated?(d(),r("span",Ge,"欢迎回来，"+p((C=i(u).user)==null?void 0:C.username)+"！",1)):(d(),r("span",Ke,"欢迎使用智能旅行游记生成器"))])]),t("div",Qe,[i(u).isAuthenticated?(d(),r("div",Xe,[t("div",Ye,[s(a,{style:{color:"#667eea","font-size":"16px"}},{default:o(()=>[s(i(F))]),_:1}),t("span",Ze,p(J.value.totalNotes),1),e[12]||(e[12]=t("span",{style:{color:"#666","font-size":"12px"}},"篇游记",-1))]),t("div",et,[s(a,{style:{color:"#f093fb","font-size":"16px"}},{default:o(()=>[s(i(ve))]),_:1}),t("span",tt,p(((R=i(u).user)==null?void 0:R.remaining_trials)||0),1),e[13]||(e[13]=t("span",{style:{color:"#666","font-size":"12px"}},"次剩余",-1))])])):k("",!0),s(g,{onClick:pe,type:"primary",size:"large"},{default:o(()=>[s(a,null,{default:o(()=>[s(i(xe))]),_:1}),e[14]||(e[14]=t("span",null,"开始创作",-1))]),_:1,__:[14]}),i(u).isAuthenticated?(d(),r("div",st,[s(E,{onCommand:ne,trigger:"click"},{dropdown:o(()=>[s(h,{class:"custom-dropdown"},{default:o(()=>[s(v,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(a,null,{default:o(()=>[s(i(j))]),_:1}),e[16]||(e[16]=t("span",null,"个人资料",-1))]),_:1,__:[16]}),s(v,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(a,null,{default:o(()=>[s(i(ye))]),_:1}),e[17]||(e[17]=t("span",null,"退出登录",-1))]),_:1,__:[17]})]),_:1})]),default:o(()=>{var l;return[t("div",ot,[t("div",nt,[s(a,{size:"20"},{default:o(()=>[s(i(j))]),_:1})]),t("div",at,[t("span",it,p((l=i(u).user)==null?void 0:l.username),1),e[15]||(e[15]=t("span",{class:"user-role"},"用户",-1))]),s(a,{class:"dropdown-arrow",size:"14"},{default:o(()=>[s(i(he))]),_:1})])]}),_:1})])):(d(),r("div",lt,[s(g,{onClick:e[0]||(e[0]=l=>n.$router.push("/login")),type:"success",size:"large"},{default:o(()=>e[18]||(e[18]=[m(" 登录 ")])),_:1,__:[18]})]))])]),t("div",dt,[t("div",rt,[t("div",ct,[e[19]||(e[19]=t("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 🏞️ 智能旅行游记生成器 ",-1)),t("p",pt,[i(u).isAuthenticated?(d(),r("span",ut,"欢迎回来，"+p((D=i(u).user)==null?void 0:D.username)+"！",1)):(d(),r("span",mt,"欢迎使用智能旅行游记生成器"))])]),t("div",gt,[i(u).isAuthenticated?(d(),r("div",ft,[t("div",_t,[s(a,{style:{color:"#667eea"}},{default:o(()=>[s(i(F))]),_:1}),t("span",vt,p(J.value.totalNotes),1),e[20]||(e[20]=t("span",{class:"stat-label-compact"},"游记",-1))]),t("div",xt,[s(a,{style:{color:"#f093fb"}},{default:o(()=>[s(i(ve))]),_:1}),t("span",yt,p(((I=i(u).user)==null?void 0:I.remaining_trials)||0),1),e[21]||(e[21]=t("span",{class:"stat-label-compact"},"剩余",-1))])])):k("",!0),i(u).isAuthenticated?(d(),r("div",ht,[s(E,{onCommand:ne,trigger:"click"},{dropdown:o(()=>[s(h,{class:"custom-dropdown"},{default:o(()=>[s(v,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(a,null,{default:o(()=>[s(i(j))]),_:1}),e[22]||(e[22]=t("span",null,"个人资料",-1))]),_:1,__:[22]}),s(v,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(a,null,{default:o(()=>[s(i(ye))]),_:1}),e[23]||(e[23]=t("span",null,"退出登录",-1))]),_:1,__:[23]})]),_:1})]),default:o(()=>[t("div",bt,[t("div",wt,[s(a,{size:"16"},{default:o(()=>[s(i(j))]),_:1})]),s(a,{class:"mobile-dropdown-arrow-compact",size:"10"},{default:o(()=>[s(i(he))]),_:1})])]),_:1})])):(d(),r("div",kt,[s(g,{onClick:e[1]||(e[1]=l=>n.$router.push("/login")),type:"success",size:"small"},{default:o(()=>e[24]||(e[24]=[m(" 登录 ")])),_:1,__:[24]})]))])])])]),i(u).isAuthenticated?(d(),r("div",Ct,[e[28]||(e[28]=t("h2",{style:{margin:"0 0 24px 0",color:"#333"}},"快速操作",-1)),t("div",zt,[t("div",{class:"action-card primary",onClick:pe},[t("div",$t,[s(a,{size:"28"},{default:o(()=>[s(i(xe))]),_:1})]),e[25]||(e[25]=t("div",{class:"action-content"},[t("h3",null,"创建新游记"),t("p",null,"上传照片，AI为您生成精彩游记")],-1)),t("div",Tt,[s(a,null,{default:o(()=>[s(i(te))]),_:1})])]),t("div",{class:"action-card secondary",onClick:ue},[t("div",At,[s(a,{size:"28"},{default:o(()=>[s(i(F))]),_:1})]),e[26]||(e[26]=t("div",{class:"action-content"},[t("h3",null,"查看历史记录"),t("p",null,"浏览您的所有旅行游记")],-1)),t("div",Et,[s(a,null,{default:o(()=>[s(i(te))]),_:1})])]),t("div",{class:"action-card tertiary",onClick:$e},[t("div",It,[s(a,{size:"28"},{default:o(()=>[s(i(Ue))]),_:1})]),e[27]||(e[27]=t("div",{class:"action-content"},[t("h3",null,"账户设置"),t("p",null,"管理您的个人信息和偏好")],-1)),t("div",Lt,[s(a,null,{default:o(()=>[s(i(te))]),_:1})])])])])):k("",!0),i(u).isAuthenticated?(d(),r("div",Nt,[t("div",Mt,[e[30]||(e[30]=t("h2",{style:{margin:"0",color:"#333"}},"最近的游记",-1)),s(g,{type:"text",onClick:ue},{default:o(()=>e[29]||(e[29]=[m(" 查看全部 ")])),_:1,__:[29]})]),K.value?(d(),r("div",Dt,[s(a,{size:"48",class:"rotating"},{default:o(()=>[s(i(Be))]),_:1}),e[31]||(e[31]=t("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):G.value.length===0?(d(),r("div",Ut,[s(a,{size:"48"},{default:o(()=>[s(i(F))]),_:1}),e[32]||(e[32]=t("p",{style:{margin:"16px 0 0 0"}},"还没有游记，快去创建第一篇吧！",-1))])):(d(),r("div",Bt,[t("div",Rt,[(d(!0),r(Ne,null,Me(G.value,l=>(d(),r("div",{key:l.id,class:"note-card-small",onClick:T=>le(l)},[t("div",St,[t("div",jt,[t("h3",null,p(l.location||"未知地点"),1)]),s(E,{onCommand:T=>ke(T,l),onClick:e[2]||(e[2]=He(()=>{},["stop"]))},{dropdown:o(()=>[s(h,null,{default:o(()=>[s(v,{command:"view"},{default:o(()=>e[33]||(e[33]=[m("查看详情")])),_:1,__:[33]}),s(v,{command:"share"},{default:o(()=>e[34]||(e[34]=[m("分享图片")])),_:1,__:[34]}),s(v,{command:"delete",divided:""},{default:o(()=>e[35]||(e[35]=[m("删除")])),_:1,__:[35]})]),_:1})]),default:o(()=>[s(g,{circle:"",size:"small",class:"more-btn"},{default:o(()=>[s(a,null,{default:o(()=>[s(i(Re))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),t("div",Vt,[l.model_used?(d(),se(L,{key:0,size:"small",type:"info"},{default:o(()=>[m(p(ce(l.model_used)),1)]),_:2},1024)):k("",!0),l.writing_style?(d(),se(L,{key:1,size:"small",type:"success"},{default:o(()=>[m(p(l.writing_style),1)]),_:2},1024)):k("",!0)]),t("div",Ot,[t("p",null,p(ze(l.content,120)),1)]),t("div",Pt,[t("div",qt,[s(a,null,{default:o(()=>[s(i(Se))]),_:1}),t("span",null,p(Q(l.travel_date||l.created_at)),1)]),l.companions?(d(),r("div",Wt,[s(a,null,{default:o(()=>[s(i(j))]),_:1}),t("span",null,p(l.companions),1)])):k("",!0)])],8,Ht))),128))])]))])):k("",!0),i(u).isAuthenticated?k("",!0):(d(),r("div",Ft,[t("div",Jt,[e[38]||(e[38]=t("div",{class:"guide-icon",style:{"font-size":"64px","margin-bottom":"20px"}},"🎯",-1)),e[39]||(e[39]=t("h2",{style:{margin:"0 0 16px 0",color:"#333","font-size":"24px"}},"开启您的智能旅行游记之旅",-1)),e[40]||(e[40]=t("p",{style:{color:"#666","font-size":"16px","line-height":"1.6","margin-bottom":"32px","max-width":"500px","margin-left":"auto","margin-right":"auto"}}," 登录账号即可使用AI智能生成功能，将您的旅行照片转化为精彩的游记故事。 ",-1)),t("div",Gt,[s(g,{onClick:e[3]||(e[3]=l=>n.$router.push("/login")),type:"primary",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[36]||(e[36]=[m(" 立即登录 ")])),_:1,__:[36]}),s(g,{onClick:e[4]||(e[4]=l=>n.$router.push("/register")),type:"success",plain:"",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[37]||(e[37]=[m(" 注册账号 ")])),_:1,__:[37]})]),e[41]||(e[41]=De('<div class="guide-features" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:20px;" data-v-bf8eb3dc><div class="feature-item" style="padding:20px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:12px;color:white;" data-v-bf8eb3dc><div style="font-size:32px;margin-bottom:12px;" data-v-bf8eb3dc>🤖</div><h4 style="margin:0 0 8px 0;font-size:16px;" data-v-bf8eb3dc>AI智能生成</h4><p style="margin:0;font-size:14px;opacity:0.9;" data-v-bf8eb3dc>上传照片，AI为您创作精彩游记</p></div><div class="feature-item" style="padding:20px;background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%);border-radius:12px;color:white;" data-v-bf8eb3dc><div style="font-size:32px;margin-bottom:12px;" data-v-bf8eb3dc>📚</div><h4 style="margin:0 0 8px 0;font-size:16px;" data-v-bf8eb3dc>记录管理</h4><p style="margin:0;font-size:14px;opacity:0.9;" data-v-bf8eb3dc>保存和管理您的所有旅行回忆</p></div><div class="feature-item" style="padding:20px;background:linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);border-radius:12px;color:white;" data-v-bf8eb3dc><div style="font-size:32px;margin-bottom:12px;" data-v-bf8eb3dc>🎨</div><h4 style="margin:0 0 8px 0;font-size:16px;" data-v-bf8eb3dc>多样风格</h4><p style="margin:0;font-size:14px;opacity:0.9;" data-v-bf8eb3dc>支持多种写作风格和AI模型</p></div></div>',1))])])),s(M,{modelValue:V.value,"onUpdate:modelValue":e[7]||(e[7]=l=>V.value=l),title:((U=f.value)==null?void 0:U.location)||"游记详情",width:oe()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:o(()=>[s(g,{onClick:e[5]||(e[5]=l=>V.value=!1)},{default:o(()=>e[42]||(e[42]=[m("关闭")])),_:1,__:[42]}),s(g,{type:"primary",onClick:e[6]||(e[6]=l=>de(f.value)),loading:B.value},{default:o(()=>[B.value?k("",!0):(d(),se(a,{key:0},{default:o(()=>[s(i(je))]),_:1})),m(" "+p(B.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:o(()=>[f.value?(d(),r("div",Kt,[t("div",Qt,[s(N,{column:2,border:""},{default:o(()=>[s(w,{label:"地点"},{default:o(()=>[m(p(f.value.location||"未知"),1)]),_:1}),s(w,{label:"旅行日期"},{default:o(()=>[m(p(Q(f.value.travel_date)),1)]),_:1}),s(w,{label:"同行者"},{default:o(()=>[m(p(f.value.companions||"未填写"),1)]),_:1}),s(w,{label:"创建时间"},{default:o(()=>[m(p(Q(f.value.created_at)),1)]),_:1}),s(w,{label:"使用模型"},{default:o(()=>[m(p(ce(f.value.model_used)),1)]),_:1}),s(w,{label:"写作风格"},{default:o(()=>[m(p(f.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),t("div",Xt,[t("div",{class:"result-content",innerHTML:we.value},null,8,Yt)])])):k("",!0)]),_:1},8,["modelValue","title","width"]),s(M,{modelValue:O.value,"onUpdate:modelValue":e[9]||(e[9]=l=>O.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[10]||(e[10]=()=>{n.URL.revokeObjectURL(P.value),P.value=""})},{footer:o(()=>[s(g,{onClick:e[8]||(e[8]=l=>O.value=!1),type:"primary"},{default:o(()=>e[45]||(e[45]=[m("知道了")])),_:1,__:[45]})]),default:o(()=>[t("div",Zt,[t("img",{src:P.value,alt:"分享图片",class:"preview-image"},null,8,es),t("div",ts,[e[44]||(e[44]=t("div",{class:"tip-icon"},"💾",-1)),t("div",ss,[t("p",os,p(_()?"保存图片到相册":"长按图片保存到相册"),1),_()?(d(),r("div",as,e[43]||(e[43]=[t("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),t("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),t("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(d(),r("p",ns,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},ps=Oe(is,[["__scopeId","data-v-bf8eb3dc"]]);export{ps as default};
