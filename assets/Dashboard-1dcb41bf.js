import{u as me,a as fe,r as k,j as ge,k as _e,c as b,o as _,d as C,e as t,t as d,h as i,f as s,w as o,F as ve,l as xe,m as se,E as h,n as F,p as H,q as oe,s as ae,v as M,x as le,y as ne,z as J,A as ye,i as p,B as be,C as he,D as we,G,H as B,I as ke,J as Ce}from"./index-68f51315.js";import{h as ze}from"./html2canvas.esm-85f1a6b6.js";import{_ as $e}from"./_plugin-vue_export-helper-c27b6911.js";const Te={class:"dashboard-container"},Ee={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Ne={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Le={style:{flex:"1"}},Ie={style:{margin:"8px 0 0 0",color:"#666"}},Ue={style:{display:"flex","align-items":"center",gap:"20px","justify-content":"flex-end"}},Me={style:{display:"flex",gap:"16px"}},Be={class:"mini-stat"},De={style:{"font-weight":"600",color:"#333"}},Re={class:"mini-stat"},Ae={style:{"font-weight":"600",color:"#333"}},je={class:"user-menu-trigger"},Se={class:"user-avatar"},He={class:"user-info"},Ve={class:"username"},Oe={class:"mobile-only"},Pe={class:"mobile-header-row"},qe={class:"mobile-title-section"},Fe={style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}},Je={class:"mobile-right-section"},Ge={class:"mobile-stats-compact"},We={class:"mobile-stat-item-compact"},Xe={class:"stat-number-compact"},Ye={class:"mobile-stat-item-compact"},Ke={class:"stat-number-compact"},Qe={class:"mobile-user-menu-compact"},Ze={class:"mobile-user-avatar-compact"},et={class:"dashboard-card",style:{padding:"30px"}},tt={class:"quick-actions"},st={class:"action-icon"},ot={class:"action-arrow"},at={class:"action-icon"},lt={class:"action-arrow"},nt={class:"action-icon"},it={class:"action-arrow"},dt={class:"dashboard-card",style:{padding:"30px"}},rt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px"}},ct={key:0,style:{"text-align":"center",padding:"40px"}},ut={key:1,style:{"text-align":"center",padding:"40px",color:"#999"}},pt={key:2},mt={class:"notes-grid"},ft=["onClick"],gt={class:"card-header"},_t={class:"location-title"},vt={class:"card-tags"},xt={class:"card-content"},yt={class:"card-footer"},bt={class:"date-info"},ht={key:0,class:"companions-info"},wt={key:0,class:"note-detail"},kt={style:{"margin-bottom":"20px"}},Ct={class:"generate-result"},zt=["innerHTML"],$t={class:"image-preview-container"},Tt=["src"],Et={__name:"Dashboard",setup(Nt){const W=me(),z=fe(),V=k({totalNotes:0,remainingUses:0,totalImages:0,daysActive:0}),O=k([]),P=k(!1),D=k(!1),r=k(null),I=k(!1),R=k(!1),A=k(""),ie=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,de=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],re=ge(()=>{var l;if(!((l=r.value)!=null&&l.content))return"";let a=r.value.content,e=[];try{r.value.image_urls?(console.log("原始image_urls数据:",r.value.image_urls),e=JSON.parse(r.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(c){console.warn("解析图片URL失败:",c),console.warn("原始数据:",r.value.image_urls)}return console.log("游记内容中的图片标记:",a.match(/\[图(\d+)\]/g)),a=a.replace(/\[图(\d+)\]/g,(c,u)=>{const m=parseInt(u)-1;return console.log(`处理图片标记 ${c}, index: ${m}, imageUrls长度: ${e.length}`),m>=0&&m<e.length&&e[m]?(console.log(`显示实际图片: ${e[m]}`),`<img src="${e[m]}" alt="图片${u}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`):(console.log(`显示占位符: ${c}`),`<div class="image-placeholder" style="
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
          <div>图片 ${u}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),a}),X=async a=>{switch(a){case"profile":W.push("/profile");break;case"logout":try{await se.confirm("确定要退出登录吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),z.logout(),W.push("/login"),h.success("已退出登录")}catch{}break}},Y=async()=>{try{const a=await F.get("/users/stats");V.value=a.data}catch(a){console.error("加载统计数据失败:",a)}},K=async()=>{P.value=!0;try{const a=await F.get("/travel-notes",{params:{page:1,limit:3}});O.value=a.data.items||a.data}catch(a){console.error("加载最近游记失败:",a),h.error("加载最近游记失败")}finally{P.value=!1}},Q=a=>{r.value=a,D.value=!0},ce=async(a,e)=>{switch(a){case"view":Q(e);break;case"share":Z(e);break;case"delete":await ue(e);break}},Z=async a=>{if(!a.content){h.warning("没有可分享的内容");return}I.value=!0,h.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div");e.style.cssText=`
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
    `;const l=document.createElement("div");l.style.cssText=`
      font-size: 24px;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,l.textContent=`✨ ${a.location||"旅行游记"}`;const c=document.createElement("div");c.style.cssText=`
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
    `;const u=document.createElement("div");u.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
    `;const m=document.createElement("div");m.style.cssText=`
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
    `;const v=z.user,U=(v==null?void 0:v.username)||(v==null?void 0:v.email)||"旅行者";m.textContent=U.charAt(0).toUpperCase();const x=document.createElement("span");x.style.cssText=`
      font-weight: 600;
      color: #333;
    `,x.textContent=U,u.appendChild(m),u.appendChild(x);const T=document.createElement("div");if(T.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
    `,a.location){const f=document.createElement("div");f.style.cssText=`
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 12px;
        color: #667eea;
        font-weight: 500;
      `,f.innerHTML=`📍 ${a.location}`,T.appendChild(f)}const E=document.createElement("div");E.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 12px;
      color: #43e97b;
      font-weight: 500;
    `,E.innerHTML=`🕒 ${ee(a.travel_date||a.created_at)}`,T.appendChild(E),c.appendChild(u),c.appendChild(T);const N=document.createElement("div");N.style.cssText=`
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
    `;let w=a.content,$=[];try{a.image_urls&&($=JSON.parse(a.image_urls))}catch(f){console.warn("解析图片URL失败:",f)}w=w.replace(/\[图(\d+)\]/g,(f,g)=>{const y=parseInt(g)-1;return y>=0&&y<$.length&&$[y]?`<img src="${$[y]}" alt="图片${g}" style="width: 100%; max-width: 540px; height: auto; border-radius: 12px; margin: 16px 0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);" />`:`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${g}</div>`}),w=w.replace(/\n/g,"<br>"),N.innerHTML=w;const L=document.createElement("div");L.style.cssText=`
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
      font-size: 14px;
      color: #999;
    `,L.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">由AI智能生成</div>
      <div>让每一次旅行都有精彩的故事</div>
    `,e.appendChild(l),e.appendChild(c),e.appendChild(N),e.appendChild(L),document.body.appendChild(e);const j=e.querySelectorAll("img"),n=Array.from(j).map(f=>new Promise(g=>{f.complete?g():(f.onload=g,f.onerror=g)}));await Promise.all(n);const S=await ze(e,{useCORS:!0,allowTaint:!0,scale:2,backgroundColor:"#ffffff",logging:!1,width:600,height:e.scrollHeight,scrollX:0,scrollY:0});document.body.removeChild(e),S.toBlob(f=>{if(f){const g=URL.createObjectURL(f);if(ie())A.value=g,R.value=!0,h.success("图片已生成，请长按图片保存到相册");else{const y=document.createElement("a");y.href=g,y.download=`旅行游记_${a.location||"未知地点"}_${ee(a.travel_date||a.created_at)}.png`,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(g),h.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",.9)}catch(e){console.error("生成分享图片失败:",e),h.error("生成分享图片失败，请重试")}finally{I.value=!1}},q=a=>a?new Date(a).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ee=a=>a?new Date(a).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",ue=async a=>{try{await se.confirm(`确定要删除游记"${a.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await F.delete(`/travel-notes/${a.id}`),h.success("删除成功"),K(),Y()}catch(e){e!=="cancel"&&h.error("删除失败")}},pe=(a,e=120)=>{if(!a)return"暂无内容";const l=a.replace(/<[^>]*>/g,"");return l.length>e?l.substring(0,e)+"...":l},te=a=>{const e=de.find(l=>l.value===a);return e?e.label:a};return _e(()=>{Y(),K()}),(a,e)=>{var N,w,$,L,j;const l=b("el-icon"),c=b("el-button"),u=b("el-dropdown-item"),m=b("el-dropdown-menu"),v=b("el-dropdown"),U=b("el-tag"),x=b("el-descriptions-item"),T=b("el-descriptions"),E=b("el-dialog");return _(),C("div",Te,[t("div",Ee,[t("div",Ne,[t("div",Le,[e[12]||(e[12]=t("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 🏞️ 智能旅行游记生成器 ",-1)),t("p",Ie," 欢迎回来，"+d((N=i(z).user)==null?void 0:N.username)+"！ ",1)]),t("div",Ue,[t("div",Me,[t("div",Be,[s(l,{style:{color:"#667eea","font-size":"16px"}},{default:o(()=>[s(i(H))]),_:1}),t("span",De,d(V.value.totalNotes),1),e[13]||(e[13]=t("span",{style:{color:"#666","font-size":"12px"}},"篇游记",-1))]),t("div",Re,[s(l,{style:{color:"#f093fb","font-size":"16px"}},{default:o(()=>[s(i(oe))]),_:1}),t("span",Ae,d(((w=i(z).user)==null?void 0:w.remaining_trials)||0),1),e[14]||(e[14]=t("span",{style:{color:"#666","font-size":"12px"}},"次剩余",-1))])]),s(c,{onClick:e[0]||(e[0]=n=>a.$router.push("/generator")),type:"primary",size:"large"},{default:o(()=>[s(l,null,{default:o(()=>[s(i(ae))]),_:1}),e[15]||(e[15]=t("span",null,"开始创作",-1))]),_:1,__:[15]}),s(v,{onCommand:X,trigger:"click"},{dropdown:o(()=>[s(m,{class:"custom-dropdown"},{default:o(()=>[s(u,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(l,null,{default:o(()=>[s(i(M))]),_:1}),e[17]||(e[17]=t("span",null,"个人资料",-1))]),_:1,__:[17]}),s(u,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(l,null,{default:o(()=>[s(i(le))]),_:1}),e[18]||(e[18]=t("span",null,"退出登录",-1))]),_:1,__:[18]})]),_:1})]),default:o(()=>{var n;return[t("div",je,[t("div",Se,[s(l,{size:"20"},{default:o(()=>[s(i(M))]),_:1})]),t("div",He,[t("span",Ve,d((n=i(z).user)==null?void 0:n.username),1),e[16]||(e[16]=t("span",{class:"user-role"},"用户",-1))]),s(l,{class:"dropdown-arrow",size:"14"},{default:o(()=>[s(i(ne))]),_:1})])]}),_:1})])]),t("div",Oe,[t("div",Pe,[t("div",qe,[e[19]||(e[19]=t("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 🏞️ 智能旅行游记生成器 ",-1)),t("p",Fe," 欢迎回来，"+d(($=i(z).user)==null?void 0:$.username)+"！ ",1)]),t("div",Je,[t("div",Ge,[t("div",We,[s(l,{style:{color:"#667eea"}},{default:o(()=>[s(i(H))]),_:1}),t("span",Xe,d(V.value.totalNotes),1),e[20]||(e[20]=t("span",{class:"stat-label-compact"},"游记",-1))]),t("div",Ye,[s(l,{style:{color:"#f093fb"}},{default:o(()=>[s(i(oe))]),_:1}),t("span",Ke,d(((L=i(z).user)==null?void 0:L.remaining_trials)||0),1),e[21]||(e[21]=t("span",{class:"stat-label-compact"},"剩余",-1))])]),s(v,{onCommand:X,trigger:"click"},{dropdown:o(()=>[s(m,{class:"custom-dropdown"},{default:o(()=>[s(u,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(l,null,{default:o(()=>[s(i(M))]),_:1}),e[22]||(e[22]=t("span",null,"个人资料",-1))]),_:1,__:[22]}),s(u,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(l,null,{default:o(()=>[s(i(le))]),_:1}),e[23]||(e[23]=t("span",null,"退出登录",-1))]),_:1,__:[23]})]),_:1})]),default:o(()=>[t("div",Qe,[t("div",Ze,[s(l,{size:"16"},{default:o(()=>[s(i(M))]),_:1})]),s(l,{class:"mobile-dropdown-arrow-compact",size:"10"},{default:o(()=>[s(i(ne))]),_:1})])]),_:1})])])])]),t("div",et,[e[27]||(e[27]=t("h2",{style:{margin:"0 0 24px 0",color:"#333"}},"快速操作",-1)),t("div",tt,[t("div",{class:"action-card primary",onClick:e[1]||(e[1]=n=>a.$router.push("/generator"))},[t("div",st,[s(l,{size:"28"},{default:o(()=>[s(i(ae))]),_:1})]),e[24]||(e[24]=t("div",{class:"action-content"},[t("h3",null,"创建新游记"),t("p",null,"上传照片，AI为您生成精彩游记")],-1)),t("div",ot,[s(l,null,{default:o(()=>[s(i(J))]),_:1})])]),t("div",{class:"action-card secondary",onClick:e[2]||(e[2]=n=>a.$router.push("/history"))},[t("div",at,[s(l,{size:"28"},{default:o(()=>[s(i(H))]),_:1})]),e[25]||(e[25]=t("div",{class:"action-content"},[t("h3",null,"查看历史记录"),t("p",null,"浏览您的所有旅行游记")],-1)),t("div",lt,[s(l,null,{default:o(()=>[s(i(J))]),_:1})])]),t("div",{class:"action-card tertiary",onClick:e[3]||(e[3]=n=>a.$router.push("/profile"))},[t("div",nt,[s(l,{size:"28"},{default:o(()=>[s(i(ye))]),_:1})]),e[26]||(e[26]=t("div",{class:"action-content"},[t("h3",null,"账户设置"),t("p",null,"管理您的个人信息和偏好")],-1)),t("div",it,[s(l,null,{default:o(()=>[s(i(J))]),_:1})])])])]),t("div",dt,[t("div",rt,[e[29]||(e[29]=t("h2",{style:{margin:"0",color:"#333"}},"最近的游记",-1)),s(c,{type:"text",onClick:e[4]||(e[4]=n=>a.$router.push("/history"))},{default:o(()=>e[28]||(e[28]=[p(" 查看全部 ")])),_:1,__:[28]})]),P.value?(_(),C("div",ct,[s(l,{size:"48",class:"rotating"},{default:o(()=>[s(i(be))]),_:1}),e[30]||(e[30]=t("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):O.value.length===0?(_(),C("div",ut,[s(l,{size:"48"},{default:o(()=>[s(i(H))]),_:1}),e[31]||(e[31]=t("p",{style:{margin:"16px 0 0 0"}},"还没有游记，快去创建第一篇吧！",-1))])):(_(),C("div",pt,[t("div",mt,[(_(!0),C(ve,null,xe(O.value,n=>(_(),C("div",{key:n.id,class:"note-card-small",onClick:S=>Q(n)},[t("div",gt,[t("div",_t,[t("h3",null,d(n.location||"未知地点"),1)]),s(v,{onCommand:S=>ce(S,n),onClick:e[5]||(e[5]=we(()=>{},["stop"]))},{dropdown:o(()=>[s(m,null,{default:o(()=>[s(u,{command:"view"},{default:o(()=>e[32]||(e[32]=[p("查看详情")])),_:1,__:[32]}),s(u,{command:"share"},{default:o(()=>e[33]||(e[33]=[p("分享图片")])),_:1,__:[33]}),s(u,{command:"delete",divided:""},{default:o(()=>e[34]||(e[34]=[p("删除")])),_:1,__:[34]})]),_:1})]),default:o(()=>[s(c,{circle:"",size:"small",class:"more-btn"},{default:o(()=>[s(l,null,{default:o(()=>[s(i(he))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),t("div",vt,[n.model_used?(_(),G(U,{key:0,size:"small",type:"info"},{default:o(()=>[p(d(te(n.model_used)),1)]),_:2},1024)):B("",!0),n.writing_style?(_(),G(U,{key:1,size:"small",type:"success"},{default:o(()=>[p(d(n.writing_style),1)]),_:2},1024)):B("",!0)]),t("div",xt,[t("p",null,d(pe(n.content,120)),1)]),t("div",yt,[t("div",bt,[s(l,null,{default:o(()=>[s(i(ke))]),_:1}),t("span",null,d(q(n.travel_date||n.created_at)),1)]),n.companions?(_(),C("div",ht,[s(l,null,{default:o(()=>[s(i(M))]),_:1}),t("span",null,d(n.companions),1)])):B("",!0)])],8,ft))),128))])]))]),s(E,{modelValue:D.value,"onUpdate:modelValue":e[8]||(e[8]=n=>D.value=n),title:((j=r.value)==null?void 0:j.location)||"游记详情",width:"50%",top:"3vh",class:"note-detail-dialog"},{footer:o(()=>[s(c,{onClick:e[6]||(e[6]=n=>D.value=!1)},{default:o(()=>e[35]||(e[35]=[p("关闭")])),_:1,__:[35]}),s(c,{type:"primary",onClick:e[7]||(e[7]=n=>Z(r.value)),loading:I.value},{default:o(()=>[I.value?B("",!0):(_(),G(l,{key:0},{default:o(()=>[s(i(Ce))]),_:1})),p(" "+d(I.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:o(()=>[r.value?(_(),C("div",wt,[t("div",kt,[s(T,{column:2,border:""},{default:o(()=>[s(x,{label:"地点"},{default:o(()=>[p(d(r.value.location||"未知"),1)]),_:1}),s(x,{label:"旅行日期"},{default:o(()=>[p(d(q(r.value.travel_date)),1)]),_:1}),s(x,{label:"同行者"},{default:o(()=>[p(d(r.value.companions||"未填写"),1)]),_:1}),s(x,{label:"创建时间"},{default:o(()=>[p(d(q(r.value.created_at)),1)]),_:1}),s(x,{label:"使用模型"},{default:o(()=>[p(d(te(r.value.model_used)),1)]),_:1}),s(x,{label:"写作风格"},{default:o(()=>[p(d(r.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),t("div",Ct,[t("div",{class:"result-content",innerHTML:re.value},null,8,zt)])])):B("",!0)]),_:1},8,["modelValue","title"]),s(E,{modelValue:R.value,"onUpdate:modelValue":e[10]||(e[10]=n=>R.value=n),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[11]||(e[11]=()=>{a.URL.revokeObjectURL(A.value),A.value=""})},{footer:o(()=>[s(c,{onClick:e[9]||(e[9]=n=>R.value=!1),type:"primary"},{default:o(()=>e[37]||(e[37]=[p("知道了")])),_:1,__:[37]})]),default:o(()=>[t("div",$t,[t("img",{src:A.value,alt:"分享图片",class:"preview-image"},null,8,Tt),e[36]||(e[36]=t("div",{class:"save-tips"},[t("div",{class:"tip-icon"},"💾"),t("div",{class:"tip-text"},[t("p",{class:"tip-title"},"长按图片保存到相册"),t("p",{class:"tip-desc"},'在图片上长按，选择"保存图片"或"存储图像"')])],-1))])]),_:1},8,["modelValue"])])}}},Mt=$e(Et,[["__scopeId","data-v-766f8bea"]]);export{Mt as default};
