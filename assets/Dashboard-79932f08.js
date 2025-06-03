import{u as ce,a as ue,r as E,j as pe,k as me,c as b,o as _,d as w,e as t,t as d,h as n,f as s,w as o,F as fe,l as _e,m as ee,E as k,n as q,p as S,q as te,s as se,v as B,x as oe,y as ae,z as F,A as ge,i as m,B as ve,C as xe,D as ye,G as J,H as M,I as be,J as he}from"./index-fad95d91.js";import{h as we}from"./html2canvas.esm-85f1a6b6.js";import{_ as ke}from"./_plugin-vue_export-helper-c27b6911.js";const Ce={class:"dashboard-container"},ze={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},$e={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Te={style:{flex:"1"}},Ne={style:{margin:"8px 0 0 0",color:"#666"}},Ee={style:{display:"flex","align-items":"center",gap:"20px","justify-content":"flex-end"}},Le={style:{display:"flex",gap:"16px"}},De={class:"mini-stat"},Ie={style:{"font-weight":"600",color:"#333"}},Be={class:"mini-stat"},Me={style:{"font-weight":"600",color:"#333"}},Ue={class:"user-menu-trigger"},Re={class:"user-avatar"},Ae={class:"user-info"},Se={class:"username"},je={class:"mobile-only"},He={class:"mobile-header-row"},Oe={class:"mobile-title-section"},Ve={style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}},qe={class:"mobile-right-section"},Fe={class:"mobile-stats-compact"},Je={class:"mobile-stat-item-compact"},Pe={class:"stat-number-compact"},Ge={class:"mobile-stat-item-compact"},Xe={class:"stat-number-compact"},Ye={class:"mobile-user-menu-compact"},Ke={class:"mobile-user-avatar-compact"},Qe={class:"dashboard-card",style:{padding:"30px"}},We={class:"quick-actions"},Ze={class:"action-icon"},et={class:"action-arrow"},tt={class:"action-icon"},st={class:"action-arrow"},ot={class:"action-icon"},at={class:"action-arrow"},lt={class:"dashboard-card",style:{padding:"30px"}},nt={style:{display:"flex","justify-content":"space-between","align-items":"center","margin-bottom":"20px"}},it={key:0,style:{"text-align":"center",padding:"40px"}},dt={key:1,style:{"text-align":"center",padding:"40px",color:"#999"}},rt={key:2},ct={class:"notes-grid"},ut=["onClick"],pt={class:"card-header"},mt={class:"location-title"},ft={class:"card-tags"},_t={class:"card-content"},gt={class:"card-footer"},vt={class:"date-info"},xt={key:0,class:"companions-info"},yt={key:0,class:"note-detail"},bt={style:{"margin-bottom":"20px"}},ht={class:"generate-result"},wt=["innerHTML"],kt={__name:"Dashboard",setup(Ct){const P=ce(),C=ue(),j=E({totalNotes:0,remainingUses:0,totalImages:0,daysActive:0}),H=E([]),O=E(!1),U=E(!1),r=E(null),L=E(!1),le=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ne=pe(()=>{var l;if(!((l=r.value)!=null&&l.content))return"";let a=r.value.content,e=[];try{r.value.image_urls?(console.log("原始image_urls数据:",r.value.image_urls),e=JSON.parse(r.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(u){console.warn("解析图片URL失败:",u),console.warn("原始数据:",r.value.image_urls)}return console.log("游记内容中的图片标记:",a.match(/\[图(\d+)\]/g)),a=a.replace(/\[图(\d+)\]/g,(u,c)=>{const p=parseInt(c)-1;return console.log(`处理图片标记 ${u}, index: ${p}, imageUrls长度: ${e.length}`),p>=0&&p<e.length&&e[p]?(console.log(`显示实际图片: ${e[p]}`),`<img src="${e[p]}" alt="图片${c}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`):(console.log(`显示占位符: ${u}`),`<div class="image-placeholder" style="
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
          <div>图片 ${c}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),a}),G=async a=>{switch(a){case"profile":P.push("/profile");break;case"logout":try{await ee.confirm("确定要退出登录吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),C.logout(),P.push("/login"),k.success("已退出登录")}catch{}break}},X=async()=>{try{const a=await q.get("/users/stats");j.value=a.data}catch(a){console.error("加载统计数据失败:",a)}},Y=async()=>{O.value=!0;try{const a=await q.get("/travel-notes",{params:{page:1,limit:3}});H.value=a.data.items||a.data}catch(a){console.error("加载最近游记失败:",a),k.error("加载最近游记失败")}finally{O.value=!1}},K=a=>{r.value=a,U.value=!0},ie=async(a,e)=>{switch(a){case"view":K(e);break;case"share":Q(e);break;case"delete":await de(e);break}},Q=async a=>{if(!a.content){k.warning("没有可分享的内容");return}L.value=!0,k.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div");e.style.cssText=`
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
    `,l.textContent=`✨ ${a.location||"旅行游记"}`;const u=document.createElement("div");u.style.cssText=`
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
    `;const c=document.createElement("div");c.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
    `;const p=document.createElement("div");p.style.cssText=`
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
    `;const g=C.user,D=(g==null?void 0:g.username)||(g==null?void 0:g.email)||"旅行者";p.textContent=D.charAt(0).toUpperCase();const v=document.createElement("span");v.style.cssText=`
      font-weight: 600;
      color: #333;
    `,v.textContent=D,c.appendChild(p),c.appendChild(v);const $=document.createElement("div");if($.style.cssText=`
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
      `,f.innerHTML=`📍 ${a.location}`,$.appendChild(f)}const I=document.createElement("div");I.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 12px;
      color: #43e97b;
      font-weight: 500;
    `,I.innerHTML=`🕒 ${W(a.travel_date||a.created_at)}`,$.appendChild(I),u.appendChild(c),u.appendChild($);const T=document.createElement("div");T.style.cssText=`
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
    `;let h=a.content,z=[];try{a.image_urls&&(z=JSON.parse(a.image_urls))}catch(f){console.warn("解析图片URL失败:",f)}h=h.replace(/\[图(\d+)\]/g,(f,x)=>{const y=parseInt(x)-1;return y>=0&&y<z.length&&z[y]?`<img src="${z[y]}" alt="图片${x}" style="width: 100%; max-width: 540px; height: auto; border-radius: 12px; margin: 16px 0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);" />`:`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${x}</div>`}),h=h.replace(/\n/g,"<br>"),T.innerHTML=h;const N=document.createElement("div");N.style.cssText=`
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
      font-size: 14px;
      color: #999;
    `,N.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">由AI智能生成</div>
      <div>让每一次旅行都有精彩的故事</div>
    `,e.appendChild(l),e.appendChild(u),e.appendChild(T),e.appendChild(N),document.body.appendChild(e);const R=e.querySelectorAll("img"),i=Array.from(R).map(f=>new Promise(x=>{f.complete?x():(f.onload=x,f.onerror=x)}));await Promise.all(i);const A=await we(e,{useCORS:!0,allowTaint:!0,scale:2,backgroundColor:"#ffffff",logging:!1,width:600,height:e.scrollHeight,scrollX:0,scrollY:0});document.body.removeChild(e),A.toBlob(f=>{if(f){const x=URL.createObjectURL(f),y=document.createElement("a");y.href=x,y.download=`旅行游记_${a.location||"未知地点"}_${W(a.travel_date||a.created_at)}.png`,document.body.appendChild(y),y.click(),document.body.removeChild(y),URL.revokeObjectURL(x),k.success("分享图片已生成并下载")}else throw new Error("图片生成失败")},"image/png",.9)}catch(e){console.error("生成分享图片失败:",e),k.error("生成分享图片失败，请重试")}finally{L.value=!1}},V=a=>a?new Date(a).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",W=a=>a?new Date(a).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",de=async a=>{try{await ee.confirm(`确定要删除游记"${a.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await q.delete(`/travel-notes/${a.id}`),k.success("删除成功"),Y(),X()}catch(e){e!=="cancel"&&k.error("删除失败")}},re=(a,e=120)=>{if(!a)return"暂无内容";const l=a.replace(/<[^>]*>/g,"");return l.length>e?l.substring(0,e)+"...":l},Z=a=>{const e=le.find(l=>l.value===a);return e?e.label:a};return me(()=>{X(),Y()}),(a,e)=>{var T,h,z,N,R;const l=b("el-icon"),u=b("el-button"),c=b("el-dropdown-item"),p=b("el-dropdown-menu"),g=b("el-dropdown"),D=b("el-tag"),v=b("el-descriptions-item"),$=b("el-descriptions"),I=b("el-dialog");return _(),w("div",Ce,[t("div",ze,[t("div",$e,[t("div",Te,[e[9]||(e[9]=t("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 🏞️ 智能旅行游记生成器 ",-1)),t("p",Ne," 欢迎回来，"+d((T=n(C).user)==null?void 0:T.username)+"！ ",1)]),t("div",Ee,[t("div",Le,[t("div",De,[s(l,{style:{color:"#667eea","font-size":"16px"}},{default:o(()=>[s(n(S))]),_:1}),t("span",Ie,d(j.value.totalNotes),1),e[10]||(e[10]=t("span",{style:{color:"#666","font-size":"12px"}},"篇游记",-1))]),t("div",Be,[s(l,{style:{color:"#f093fb","font-size":"16px"}},{default:o(()=>[s(n(te))]),_:1}),t("span",Me,d(((h=n(C).user)==null?void 0:h.remaining_trials)||0),1),e[11]||(e[11]=t("span",{style:{color:"#666","font-size":"12px"}},"次剩余",-1))])]),s(u,{onClick:e[0]||(e[0]=i=>a.$router.push("/generator")),type:"primary",size:"large"},{default:o(()=>[s(l,null,{default:o(()=>[s(n(se))]),_:1}),e[12]||(e[12]=t("span",null,"开始创作",-1))]),_:1,__:[12]}),s(g,{onCommand:G,trigger:"click"},{dropdown:o(()=>[s(p,{class:"custom-dropdown"},{default:o(()=>[s(c,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(l,null,{default:o(()=>[s(n(B))]),_:1}),e[14]||(e[14]=t("span",null,"个人资料",-1))]),_:1,__:[14]}),s(c,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(l,null,{default:o(()=>[s(n(oe))]),_:1}),e[15]||(e[15]=t("span",null,"退出登录",-1))]),_:1,__:[15]})]),_:1})]),default:o(()=>{var i;return[t("div",Ue,[t("div",Re,[s(l,{size:"20"},{default:o(()=>[s(n(B))]),_:1})]),t("div",Ae,[t("span",Se,d((i=n(C).user)==null?void 0:i.username),1),e[13]||(e[13]=t("span",{class:"user-role"},"用户",-1))]),s(l,{class:"dropdown-arrow",size:"14"},{default:o(()=>[s(n(ae))]),_:1})])]}),_:1})])]),t("div",je,[t("div",He,[t("div",Oe,[e[16]||(e[16]=t("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 🏞️ 智能旅行游记生成器 ",-1)),t("p",Ve," 欢迎回来，"+d((z=n(C).user)==null?void 0:z.username)+"！ ",1)]),t("div",qe,[t("div",Fe,[t("div",Je,[s(l,{style:{color:"#667eea"}},{default:o(()=>[s(n(S))]),_:1}),t("span",Pe,d(j.value.totalNotes),1),e[17]||(e[17]=t("span",{class:"stat-label-compact"},"游记",-1))]),t("div",Ge,[s(l,{style:{color:"#f093fb"}},{default:o(()=>[s(n(te))]),_:1}),t("span",Xe,d(((N=n(C).user)==null?void 0:N.remaining_trials)||0),1),e[18]||(e[18]=t("span",{class:"stat-label-compact"},"剩余",-1))])]),s(g,{onCommand:G,trigger:"click"},{dropdown:o(()=>[s(p,{class:"custom-dropdown"},{default:o(()=>[s(c,{command:"profile",class:"dropdown-item"},{default:o(()=>[s(l,null,{default:o(()=>[s(n(B))]),_:1}),e[19]||(e[19]=t("span",null,"个人资料",-1))]),_:1,__:[19]}),s(c,{command:"logout",divided:"",class:"dropdown-item logout"},{default:o(()=>[s(l,null,{default:o(()=>[s(n(oe))]),_:1}),e[20]||(e[20]=t("span",null,"退出登录",-1))]),_:1,__:[20]})]),_:1})]),default:o(()=>[t("div",Ye,[t("div",Ke,[s(l,{size:"16"},{default:o(()=>[s(n(B))]),_:1})]),s(l,{class:"mobile-dropdown-arrow-compact",size:"10"},{default:o(()=>[s(n(ae))]),_:1})])]),_:1})])])])]),t("div",Qe,[e[24]||(e[24]=t("h2",{style:{margin:"0 0 24px 0",color:"#333"}},"快速操作",-1)),t("div",We,[t("div",{class:"action-card primary",onClick:e[1]||(e[1]=i=>a.$router.push("/generator"))},[t("div",Ze,[s(l,{size:"28"},{default:o(()=>[s(n(se))]),_:1})]),e[21]||(e[21]=t("div",{class:"action-content"},[t("h3",null,"创建新游记"),t("p",null,"上传照片，AI为您生成精彩游记")],-1)),t("div",et,[s(l,null,{default:o(()=>[s(n(F))]),_:1})])]),t("div",{class:"action-card secondary",onClick:e[2]||(e[2]=i=>a.$router.push("/history"))},[t("div",tt,[s(l,{size:"28"},{default:o(()=>[s(n(S))]),_:1})]),e[22]||(e[22]=t("div",{class:"action-content"},[t("h3",null,"查看历史记录"),t("p",null,"浏览您的所有旅行游记")],-1)),t("div",st,[s(l,null,{default:o(()=>[s(n(F))]),_:1})])]),t("div",{class:"action-card tertiary",onClick:e[3]||(e[3]=i=>a.$router.push("/profile"))},[t("div",ot,[s(l,{size:"28"},{default:o(()=>[s(n(ge))]),_:1})]),e[23]||(e[23]=t("div",{class:"action-content"},[t("h3",null,"账户设置"),t("p",null,"管理您的个人信息和偏好")],-1)),t("div",at,[s(l,null,{default:o(()=>[s(n(F))]),_:1})])])])]),t("div",lt,[t("div",nt,[e[26]||(e[26]=t("h2",{style:{margin:"0",color:"#333"}},"最近的游记",-1)),s(u,{type:"text",onClick:e[4]||(e[4]=i=>a.$router.push("/history"))},{default:o(()=>e[25]||(e[25]=[m(" 查看全部 ")])),_:1,__:[25]})]),O.value?(_(),w("div",it,[s(l,{size:"48",class:"rotating"},{default:o(()=>[s(n(ve))]),_:1}),e[27]||(e[27]=t("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):H.value.length===0?(_(),w("div",dt,[s(l,{size:"48"},{default:o(()=>[s(n(S))]),_:1}),e[28]||(e[28]=t("p",{style:{margin:"16px 0 0 0"}},"还没有游记，快去创建第一篇吧！",-1))])):(_(),w("div",rt,[t("div",ct,[(_(!0),w(fe,null,_e(H.value,i=>(_(),w("div",{key:i.id,class:"note-card-small",onClick:A=>K(i)},[t("div",pt,[t("div",mt,[t("h3",null,d(i.location||"未知地点"),1)]),s(g,{onCommand:A=>ie(A,i),onClick:e[5]||(e[5]=ye(()=>{},["stop"]))},{dropdown:o(()=>[s(p,null,{default:o(()=>[s(c,{command:"view"},{default:o(()=>e[29]||(e[29]=[m("查看详情")])),_:1,__:[29]}),s(c,{command:"share"},{default:o(()=>e[30]||(e[30]=[m("分享图片")])),_:1,__:[30]}),s(c,{command:"delete",divided:""},{default:o(()=>e[31]||(e[31]=[m("删除")])),_:1,__:[31]})]),_:1})]),default:o(()=>[s(u,{circle:"",size:"small",class:"more-btn"},{default:o(()=>[s(l,null,{default:o(()=>[s(n(xe))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),t("div",ft,[i.model_used?(_(),J(D,{key:0,size:"small",type:"info"},{default:o(()=>[m(d(Z(i.model_used)),1)]),_:2},1024)):M("",!0),i.writing_style?(_(),J(D,{key:1,size:"small",type:"success"},{default:o(()=>[m(d(i.writing_style),1)]),_:2},1024)):M("",!0)]),t("div",_t,[t("p",null,d(re(i.content,120)),1)]),t("div",gt,[t("div",vt,[s(l,null,{default:o(()=>[s(n(be))]),_:1}),t("span",null,d(V(i.travel_date||i.created_at)),1)]),i.companions?(_(),w("div",xt,[s(l,null,{default:o(()=>[s(n(B))]),_:1}),t("span",null,d(i.companions),1)])):M("",!0)])],8,ut))),128))])]))]),s(I,{modelValue:U.value,"onUpdate:modelValue":e[8]||(e[8]=i=>U.value=i),title:((R=r.value)==null?void 0:R.location)||"游记详情",width:"50%",top:"3vh",class:"note-detail-dialog"},{footer:o(()=>[s(u,{onClick:e[6]||(e[6]=i=>U.value=!1)},{default:o(()=>e[32]||(e[32]=[m("关闭")])),_:1,__:[32]}),s(u,{type:"primary",onClick:e[7]||(e[7]=i=>Q(r.value)),loading:L.value},{default:o(()=>[L.value?M("",!0):(_(),J(l,{key:0},{default:o(()=>[s(n(he))]),_:1})),m(" "+d(L.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:o(()=>[r.value?(_(),w("div",yt,[t("div",bt,[s($,{column:2,border:""},{default:o(()=>[s(v,{label:"地点"},{default:o(()=>[m(d(r.value.location||"未知"),1)]),_:1}),s(v,{label:"旅行日期"},{default:o(()=>[m(d(V(r.value.travel_date)),1)]),_:1}),s(v,{label:"同行者"},{default:o(()=>[m(d(r.value.companions||"未填写"),1)]),_:1}),s(v,{label:"创建时间"},{default:o(()=>[m(d(V(r.value.created_at)),1)]),_:1}),s(v,{label:"使用模型"},{default:o(()=>[m(d(Z(r.value.model_used)),1)]),_:1}),s(v,{label:"写作风格"},{default:o(()=>[m(d(r.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),t("div",ht,[t("div",{class:"result-content",innerHTML:ne.value},null,8,wt)])])):M("",!0)]),_:1},8,["modelValue","title"])])}}},Nt=ke(kt,[["__scopeId","data-v-233b3e33"]]);export{Nt as default};
