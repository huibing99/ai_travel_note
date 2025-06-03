import{u as be,a as we,r as T,j as ke,k as ze,c as z,o as d,d as r,e as t,h as n,t as c,f as s,w as o,l as k,F as Ce,m as $e,n as Ae,p as ne,E as h,q as J,s as O,v as ie,x as le,y as D,z as de,A as re,i as u,B as G,C as Te,D as Ne,G as Ee,H as Ie,I as K,J as Le,K as Me}from"./index-f556d4a6.js";import{h as Ue}from"./html2canvas.esm-85f1a6b6.js";import{_ as Be}from"./_plugin-vue_export-helper-c27b6911.js";const De={class:"dashboard-container"},Re={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},He={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ve={style:{flex:"1"}},je={style:{margin:"8px 0 0 0",color:"#666"}},Se={key:0},Oe={key:1},Pe={style:{display:"flex","align-items":"center",gap:"20px","justify-content":"flex-end"}},We={key:0,style:{display:"flex",gap:"16px"}},qe={class:"mini-stat"},Fe={style:{"font-weight":"600",color:"#333"}},Je={class:"mini-stat"},Ge={style:{"font-weight":"600",color:"#333"}},Ke={key:1},Xe={class:"user-menu-trigger"},Ye={class:"user-avatar"},Qe={class:"user-info"},Ze={class:"username"},et={key:2},tt={class:"mobile-only"},st={class:"mobile-header-row"},ot={class:"mobile-title-section"},at={style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}},nt={key:0},it={key:1},lt={class:"mobile-right-section"},dt={key:0,class:"mobile-stats-compact"},rt={class:"mobile-stat-item-compact"},ct={class:"stat-number-compact"},pt={class:"mobile-stat-item-compact"},ut={class:"stat-number-compact"},mt={key:1},gt={class:"mobile-user-menu-compact"},ft={class:"mobile-user-avatar-compact"},_t={key:2},vt={key:0,class:"dashboard-card",style:{padding:"30px"}},xt={class:"quick-actions"},yt={class:"action-icon"},ht={class:"action-arrow"},bt={class:"action-icon"},wt={class:"action-arrow"},kt={class:"action-icon"},zt={class:"action-arrow"},Ct={key:1,class:"dashboard-card",style:{padding:"30px"}},$t={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px"}},At={key:0,style:{"text-align":"center",padding:"40px"}},Tt={key:1,style:{"text-align":"center",padding:"40px",color:"#999"}},Nt={key:2},Et={class:"notes-grid"},It=["onClick"],Lt={class:"card-header"},Mt={class:"location-title"},Ut={class:"card-tags"},Bt={class:"card-content"},Dt={class:"card-footer"},Rt={class:"date-info"},Ht={key:0,class:"companions-info"},Vt={key:2,class:"dashboard-card",style:{padding:"40px","text-align":"center"}},jt={class:"login-guide"},St={class:"guide-actions",style:{display:"flex",gap:"16px","justify-content":"center","flex-wrap":"wrap"}},Ot={key:0,class:"note-detail"},Pt={style:{"margin-bottom":"20px"}},Wt={class:"generate-result"},qt=["innerHTML"],Ft={class:"image-preview-container"},Jt=["src"],Gt={class:"save-tips"},Kt={class:"tip-text"},Xt={class:"tip-title"},Yt={key:0,class:"tip-desc"},Qt={key:1,class:"wechat-tips"},Zt={__name:"Dashboard",setup(es){const C=be(),p=we(),P=T({totalNotes:0,remainingUses:0,totalImages:0,daysActive:0}),W=T([]),q=T(!1),R=T(!1),g=T(null),B=T(!1),H=T(!1),V=T(""),ce=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,v=()=>/micromessenger/i.test(navigator.userAgent),pe=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ue=ke(()=>{var i;if(!((i=g.value)!=null&&i.content))return"";let a=g.value.content,e=[];try{g.value.image_urls?(console.log("原始image_urls数据:",g.value.image_urls),e=JSON.parse(g.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(m){console.warn("解析图片URL失败:",m),console.warn("原始数据:",g.value.image_urls)}return console.log("游记内容中的图片标记:",a.match(/\[图(\d+)\]/g)),a=a.replace(/\[图(\d+)\]/g,(m,f)=>{const _=parseInt(f)-1;return console.log(`处理图片标记 ${m}, index: ${_}, imageUrls长度: ${e.length}`),_>=0&&_<e.length&&e[_]?(console.log(`显示实际图片: ${e[_]}`),`<img src="${e[_]}" alt="图片${f}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`):(console.log(`显示占位符: ${m}`),`<div class="image-placeholder" style="
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
          <div>图片 ${f}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),a}),X=async a=>{switch(a){case"profile":C.push("/profile");break;case"logout":try{await ne.confirm("确定要退出登录吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),p.logout(),C.push("/login"),h.success("已退出登录")}catch{}break}},Y=async()=>{try{const a=await J.get("/users/stats");P.value=a.data}catch(a){console.error("加载统计数据失败:",a)}},Q=async()=>{q.value=!0;try{const a=await J.get("/travel-notes",{params:{page:1,limit:3}});W.value=a.data.items||a.data}catch(a){console.error("加载最近游记失败:",a),h.error("加载最近游记失败")}finally{q.value=!1}},Z=a=>{g.value=a,R.value=!0},me=async(a,e)=>{switch(a){case"view":Z(e);break;case"share":ee(e);break;case"delete":await ge(e);break}},ee=async a=>{if(!a.content){h.warning("没有可分享的内容");return}B.value=!0,h.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),i=v()?540:600,m=v()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${i}px;
      background: #fff;
      padding: ${m}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      max-height: ${v()?"3000px":"none"};
      overflow: hidden;
    `;const f=document.createElement("div");f.style.cssText=`
      font-size: ${v()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,f.textContent=`✨ ${a.location||"旅行游记"}`;const _=document.createElement("div");_.style.cssText=`
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
    `;const $=document.createElement("div");$.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const I=document.createElement("div");I.style.cssText=`
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
    `;const x=p.user,j=(x==null?void 0:x.username)||(x==null?void 0:x.email)||"旅行者";I.textContent=j.charAt(0).toUpperCase();const L=document.createElement("span");L.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,L.textContent=j,$.appendChild(I),$.appendChild(L);const N=document.createElement("div");if(N.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,a.location){const y=document.createElement("div");y.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,y.innerHTML=`📍 ${a.location}`,N.appendChild(y)}const M=document.createElement("div");M.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `,M.innerHTML=`🕒 ${te(a.travel_date||a.created_at)}`,N.appendChild(M),_.appendChild($),_.appendChild(N);const U=document.createElement("div");U.style.cssText=`
      font-size: ${v()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let A=a.content,E=[];try{a.image_urls&&(E=JSON.parse(a.image_urls))}catch(y){console.warn("解析图片URL失败:",y)}A=A.replace(/\[图(\d+)\]/g,(y,b)=>{const w=parseInt(b)-1;if(w>=0&&w<E.length&&E[w]){const he=v()?"480px":"540px";return`<img src="${E[w]}" alt="图片${b}" style="width: 100%; max-width: ${he}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${b}</div>`}),A=A.replace(/\n/g,"<br>"),U.innerHTML=A;const l=document.createElement("div");l.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,l.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(f),e.appendChild(_),e.appendChild(U),e.appendChild(l),document.body.appendChild(e);const S=e.querySelectorAll("img"),ve=Array.from(S).map(y=>new Promise(b=>{y.complete?b():(y.onload=b,y.onerror=b)}));await Promise.all(ve);const xe={useCORS:!0,allowTaint:!0,scale:v()?1.5:2,backgroundColor:"#ffffff",logging:!1,width:i,height:Math.min(e.scrollHeight,v()?3e3:5e3),scrollX:0,scrollY:0,windowWidth:i,windowHeight:Math.min(e.scrollHeight,v()?3e3:5e3)},ye=await Ue(e,xe);document.body.removeChild(e),ye.toBlob(y=>{if(y){const b=URL.createObjectURL(y);if(ce())V.value=b,H.value=!0,v()?h.success("图片已生成！如保存不完整，请尝试截屏保存"):h.success("图片已生成，请长按图片保存到相册");else{const w=document.createElement("a");w.href=b,w.download=`旅行游记_${a.location||"未知地点"}_${te(a.travel_date||a.created_at)}.png`,document.body.appendChild(w),w.click(),document.body.removeChild(w),URL.revokeObjectURL(b),h.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",v()?.8:.9)}catch(e){console.error("生成分享图片失败:",e),h.error("生成分享图片失败，请重试")}finally{B.value=!1}},F=a=>a?new Date(a).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",te=a=>a?new Date(a).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",ge=async a=>{try{await ne.confirm(`确定要删除游记"${a.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await J.delete(`/travel-notes/${a.id}`),h.success("删除成功"),Q(),Y()}catch(e){e!=="cancel"&&h.error("删除失败")}},fe=(a,e=120)=>{if(!a)return"暂无内容";const i=a.replace(/<[^>]*>/g,"");return i.length>e?i.substring(0,e)+"...":i},se=a=>{const e=pe.find(i=>i.value===a);return e?e.label:a},oe=()=>{if(!p.isAuthenticated){h.warning("请先登录后再创作游记"),C.push("/login");return}C.push("/generator")},ae=()=>{if(!p.isAuthenticated){h.warning("请先登录后再查看历史记录"),C.push("/login");return}C.push("/history")},_e=()=>{if(!p.isAuthenticated){h.warning("请先登录后再访问个人资料"),C.push("/login");return}C.push("/profile")};return ze(()=>{p.isAuthenticated&&(Y(),Q())}),(a,e)=>{var N,M,U,A,E;const i=z("el-icon"),m=z("el-button"),f=z("el-dropdown-item"),_=z("el-dropdown-menu"),$=z("el-dropdown"),I=z("el-tag"),x=z("el-descriptions-item"),j=z("el-descriptions"),L=z("el-dialog");return d(),r("div",De,[t("div",Re,[t("div",He,[t("div",Ve,[e[11]||(e[11]=t("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," ✨ 智能旅行游记生成器 ",-1)),t("p",je,[n(p).isAuthenticated?(d(),r("span",Se,"欢迎回来，"+c((N=n(p).user)==null?void 0:N.username)+"！",1)):(d(),r("span",Oe,"欢迎使用智能旅行游记生成器"))])]),t("div",Pe,[n(p).isAuthenticated?(d(),r("div",We,[t("div",qe,[s(i,{style:{color:"#667eea","font-size":"16px"}},{default:o(()=>[s(n(O))]),_:1}),t("span",Fe,c(P.value.totalNotes),1),e[12]||(e[12]=t("span",{style:{color:"#666","font-size":"12px"}},"篇游记",-1))]),t("div",Je,[s(i,{style:{color:"#f093fb","font-size":"16px"}},{default:o(()=>[s(n(ie))]),_:1}),t("span",Ge,c(((M=n(p).user)==null?void 0:M.remaining_trials)||0),1),e[13]||(e[13]=t("span",{style:{color:"#666","font-size":"12px"}},"次剩余",-1))])])):k("",!0),s(m,{onClick:oe,type:"primary",size:"large"},{default:o(()=>[s(i,null,{default:o(()=>[s(n(le))]),_:1}),e[14]||(e[14]=t("span",null,"开始创作",-1))]),_:1,__:[14]}),n(p).isAuthenticated?(d(),r("div",Ke,[s($,{onCommand:X,trigger:"click"},{dropdown:o(()=>[s(_,{class:"custom-dropdown"},{default:o(()=>[s(f,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(i,null,{default:o(()=>[s(n(D))]),_:1}),e[16]||(e[16]=t("span",null,"个人资料",-1))]),_:1,__:[16]}),s(f,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(i,null,{default:o(()=>[s(n(de))]),_:1}),e[17]||(e[17]=t("span",null,"退出登录",-1))]),_:1,__:[17]})]),_:1})]),default:o(()=>{var l;return[t("div",Xe,[t("div",Ye,[s(i,{size:"20"},{default:o(()=>[s(n(D))]),_:1})]),t("div",Qe,[t("span",Ze,c((l=n(p).user)==null?void 0:l.username),1),e[15]||(e[15]=t("span",{class:"user-role"},"用户",-1))]),s(i,{class:"dropdown-arrow",size:"14"},{default:o(()=>[s(n(re))]),_:1})])]}),_:1})])):(d(),r("div",et,[s(m,{onClick:e[0]||(e[0]=l=>a.$router.push("/login")),type:"success",size:"large"},{default:o(()=>e[18]||(e[18]=[u(" 登录 ")])),_:1,__:[18]})]))])]),t("div",tt,[t("div",st,[t("div",ot,[e[19]||(e[19]=t("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 🏞️ 智能旅行游记生成器 ",-1)),t("p",at,[n(p).isAuthenticated?(d(),r("span",nt,"欢迎回来，"+c((U=n(p).user)==null?void 0:U.username)+"！",1)):(d(),r("span",it,"欢迎使用智能旅行游记生成器"))])]),t("div",lt,[n(p).isAuthenticated?(d(),r("div",dt,[t("div",rt,[s(i,{style:{color:"#667eea"}},{default:o(()=>[s(n(O))]),_:1}),t("span",ct,c(P.value.totalNotes),1),e[20]||(e[20]=t("span",{class:"stat-label-compact"},"游记",-1))]),t("div",pt,[s(i,{style:{color:"#f093fb"}},{default:o(()=>[s(n(ie))]),_:1}),t("span",ut,c(((A=n(p).user)==null?void 0:A.remaining_trials)||0),1),e[21]||(e[21]=t("span",{class:"stat-label-compact"},"剩余",-1))])])):k("",!0),n(p).isAuthenticated?(d(),r("div",mt,[s($,{onCommand:X,trigger:"click"},{dropdown:o(()=>[s(_,{class:"custom-dropdown"},{default:o(()=>[s(f,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(i,null,{default:o(()=>[s(n(D))]),_:1}),e[22]||(e[22]=t("span",null,"个人资料",-1))]),_:1,__:[22]}),s(f,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(i,null,{default:o(()=>[s(n(de))]),_:1}),e[23]||(e[23]=t("span",null,"退出登录",-1))]),_:1,__:[23]})]),_:1})]),default:o(()=>[t("div",gt,[t("div",ft,[s(i,{size:"16"},{default:o(()=>[s(n(D))]),_:1})]),s(i,{class:"mobile-dropdown-arrow-compact",size:"10"},{default:o(()=>[s(n(re))]),_:1})])]),_:1})])):(d(),r("div",_t,[s(m,{onClick:e[1]||(e[1]=l=>a.$router.push("/login")),type:"success",size:"small"},{default:o(()=>e[24]||(e[24]=[u(" 登录 ")])),_:1,__:[24]})]))])])])]),n(p).isAuthenticated?(d(),r("div",vt,[e[28]||(e[28]=t("h2",{style:{margin:"0 0 24px 0",color:"#333"}},"快速操作",-1)),t("div",xt,[t("div",{class:"action-card primary",onClick:oe},[t("div",yt,[s(i,{size:"28"},{default:o(()=>[s(n(le))]),_:1})]),e[25]||(e[25]=t("div",{class:"action-content"},[t("h3",null,"创建新游记"),t("p",null,"上传照片，AI为您生成精彩游记")],-1)),t("div",ht,[s(i,null,{default:o(()=>[s(n(G))]),_:1})])]),t("div",{class:"action-card secondary",onClick:ae},[t("div",bt,[s(i,{size:"28"},{default:o(()=>[s(n(O))]),_:1})]),e[26]||(e[26]=t("div",{class:"action-content"},[t("h3",null,"查看历史记录"),t("p",null,"浏览您的所有旅行游记")],-1)),t("div",wt,[s(i,null,{default:o(()=>[s(n(G))]),_:1})])]),t("div",{class:"action-card tertiary",onClick:_e},[t("div",kt,[s(i,{size:"28"},{default:o(()=>[s(n(Te))]),_:1})]),e[27]||(e[27]=t("div",{class:"action-content"},[t("h3",null,"账户设置"),t("p",null,"管理您的个人信息和偏好")],-1)),t("div",zt,[s(i,null,{default:o(()=>[s(n(G))]),_:1})])])])])):k("",!0),n(p).isAuthenticated?(d(),r("div",Ct,[t("div",$t,[e[30]||(e[30]=t("h2",{style:{margin:"0",color:"#333"}},"最近的游记",-1)),s(m,{type:"text",onClick:ae},{default:o(()=>e[29]||(e[29]=[u(" 查看全部 ")])),_:1,__:[29]})]),q.value?(d(),r("div",At,[s(i,{size:"48",class:"rotating"},{default:o(()=>[s(n(Ne))]),_:1}),e[31]||(e[31]=t("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):W.value.length===0?(d(),r("div",Tt,[s(i,{size:"48"},{default:o(()=>[s(n(O))]),_:1}),e[32]||(e[32]=t("p",{style:{margin:"16px 0 0 0"}},"还没有游记，快去创建第一篇吧！",-1))])):(d(),r("div",Nt,[t("div",Et,[(d(!0),r(Ce,null,$e(W.value,l=>(d(),r("div",{key:l.id,class:"note-card-small",onClick:S=>Z(l)},[t("div",Lt,[t("div",Mt,[t("h3",null,c(l.location||"未知地点"),1)]),s($,{onCommand:S=>me(S,l),onClick:e[2]||(e[2]=Ie(()=>{},["stop"]))},{dropdown:o(()=>[s(_,null,{default:o(()=>[s(f,{command:"view"},{default:o(()=>e[33]||(e[33]=[u("查看详情")])),_:1,__:[33]}),s(f,{command:"share"},{default:o(()=>e[34]||(e[34]=[u("分享图片")])),_:1,__:[34]}),s(f,{command:"delete",divided:""},{default:o(()=>e[35]||(e[35]=[u("删除")])),_:1,__:[35]})]),_:1})]),default:o(()=>[s(m,{circle:"",size:"small",class:"more-btn"},{default:o(()=>[s(i,null,{default:o(()=>[s(n(Ee))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),t("div",Ut,[l.model_used?(d(),K(I,{key:0,size:"small",type:"info"},{default:o(()=>[u(c(se(l.model_used)),1)]),_:2},1024)):k("",!0),l.writing_style?(d(),K(I,{key:1,size:"small",type:"success"},{default:o(()=>[u(c(l.writing_style),1)]),_:2},1024)):k("",!0)]),t("div",Bt,[t("p",null,c(fe(l.content,120)),1)]),t("div",Dt,[t("div",Rt,[s(i,null,{default:o(()=>[s(n(Le))]),_:1}),t("span",null,c(F(l.travel_date||l.created_at)),1)]),l.companions?(d(),r("div",Ht,[s(i,null,{default:o(()=>[s(n(D))]),_:1}),t("span",null,c(l.companions),1)])):k("",!0)])],8,It))),128))])]))])):k("",!0),n(p).isAuthenticated?k("",!0):(d(),r("div",Vt,[t("div",jt,[e[38]||(e[38]=Ae('<div class="guide-icon" style="font-size:64px;margin-bottom:20px;" data-v-c94462de>🎯</div><h2 style="margin:0 0 16px 0;color:#333;font-size:24px;" data-v-c94462de>开启您的智能旅行游记之旅</h2><p style="color:#666;font-size:16px;line-height:1.6;margin-bottom:32px;max-width:500px;margin-left:auto;margin-right:auto;" data-v-c94462de> 登录账号即可使用AI智能生成功能，将您的旅行照片转化为精彩的游记故事。 </p><div class="guide-features" style="display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:20px;margin-bottom:32px;" data-v-c94462de><div class="feature-item" style="padding:20px;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);border-radius:12px;color:white;" data-v-c94462de><div style="font-size:32px;margin-bottom:12px;" data-v-c94462de>🤖</div><h4 style="margin:0 0 8px 0;font-size:16px;" data-v-c94462de>AI智能生成</h4><p style="margin:0;font-size:14px;opacity:0.9;" data-v-c94462de>上传照片，AI为您创作精彩游记</p></div><div class="feature-item" style="padding:20px;background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%);border-radius:12px;color:white;" data-v-c94462de><div style="font-size:32px;margin-bottom:12px;" data-v-c94462de>📚</div><h4 style="margin:0 0 8px 0;font-size:16px;" data-v-c94462de>记录管理</h4><p style="margin:0;font-size:14px;opacity:0.9;" data-v-c94462de>保存和管理您的所有旅行回忆</p></div><div class="feature-item" style="padding:20px;background:linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);border-radius:12px;color:white;" data-v-c94462de><div style="font-size:32px;margin-bottom:12px;" data-v-c94462de>🎨</div><h4 style="margin:0 0 8px 0;font-size:16px;" data-v-c94462de>多样风格</h4><p style="margin:0;font-size:14px;opacity:0.9;" data-v-c94462de>支持多种写作风格和AI模型</p></div></div>',4)),t("div",St,[s(m,{onClick:e[3]||(e[3]=l=>a.$router.push("/login")),type:"primary",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[36]||(e[36]=[u(" 立即登录 ")])),_:1,__:[36]}),s(m,{onClick:e[4]||(e[4]=l=>a.$router.push("/register")),type:"success",plain:"",size:"large",style:{padding:"12px 32px"}},{default:o(()=>e[37]||(e[37]=[u(" 注册账号 ")])),_:1,__:[37]})])])])),s(L,{modelValue:R.value,"onUpdate:modelValue":e[7]||(e[7]=l=>R.value=l),title:((E=g.value)==null?void 0:E.location)||"游记详情",width:"90%",top:"3vh",class:"note-detail-dialog"},{footer:o(()=>[s(m,{onClick:e[5]||(e[5]=l=>R.value=!1)},{default:o(()=>e[39]||(e[39]=[u("关闭")])),_:1,__:[39]}),s(m,{type:"primary",onClick:e[6]||(e[6]=l=>ee(g.value)),loading:B.value},{default:o(()=>[B.value?k("",!0):(d(),K(i,{key:0},{default:o(()=>[s(n(Me))]),_:1})),u(" "+c(B.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:o(()=>[g.value?(d(),r("div",Ot,[t("div",Pt,[s(j,{column:2,border:""},{default:o(()=>[s(x,{label:"地点"},{default:o(()=>[u(c(g.value.location||"未知"),1)]),_:1}),s(x,{label:"旅行日期"},{default:o(()=>[u(c(F(g.value.travel_date)),1)]),_:1}),s(x,{label:"同行者"},{default:o(()=>[u(c(g.value.companions||"未填写"),1)]),_:1}),s(x,{label:"创建时间"},{default:o(()=>[u(c(F(g.value.created_at)),1)]),_:1}),s(x,{label:"使用模型"},{default:o(()=>[u(c(se(g.value.model_used)),1)]),_:1}),s(x,{label:"写作风格"},{default:o(()=>[u(c(g.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),t("div",Wt,[t("div",{class:"result-content",innerHTML:ue.value},null,8,qt)])])):k("",!0)]),_:1},8,["modelValue","title"]),s(L,{modelValue:H.value,"onUpdate:modelValue":e[9]||(e[9]=l=>H.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[10]||(e[10]=()=>{a.URL.revokeObjectURL(V.value),V.value=""})},{footer:o(()=>[s(m,{onClick:e[8]||(e[8]=l=>H.value=!1),type:"primary"},{default:o(()=>e[42]||(e[42]=[u("知道了")])),_:1,__:[42]})]),default:o(()=>[t("div",Ft,[t("img",{src:V.value,alt:"分享图片",class:"preview-image"},null,8,Jt),t("div",Gt,[e[41]||(e[41]=t("div",{class:"tip-icon"},"💾",-1)),t("div",Kt,[t("p",Xt,c(v()?"保存图片到相册":"长按图片保存到相册"),1),v()?(d(),r("div",Qt,e[40]||(e[40]=[t("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),t("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),t("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(d(),r("p",Yt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},as=Be(Zt,[["__scopeId","data-v-c94462de"]]);export{as as default};
