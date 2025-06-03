import{u as we,a as ke,r as _,j as Ce,k as Te,c as m,o as g,d as x,e as a,f as o,w as n,t as f,F as ne,m as se,l as R,q as ve,E as y,h as E,O as fe,D as $e,s as Ee,i as v,G as ze,H as Ve,I as ie,J as Me,y as Le,K as Ie,p as Ue}from"./index-ecf26a20.js";import{h as De}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";const Ye={class:"dashboard-container"},He={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Se={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Re={class:"back-icon"},Ae={class:"mobile-only"},Pe={class:"mobile-history-header"},Be={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Oe={class:"mobile-hidden"},je={class:"mobile-only"},We={class:"mobile-search-section"},qe={class:"mobile-filters"},Fe={class:"dashboard-card",style:{padding:"30px"}},Je={key:0,style:{"text-align":"center",padding:"60px"}},Ge={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Ke={style:{margin:"20px 0 0 0","font-size":"16px"}},Qe={key:2},Xe={class:"notes-grid"},Ze=["onClick"],et={class:"card-header"},tt={class:"location-title"},lt={class:"card-tags"},ot={class:"card-content"},at={class:"card-footer"},nt={class:"date-info"},st={key:0,class:"companions-info"},it={key:0,style:{"text-align":"center","margin-top":"30px"}},rt={key:0,class:"note-detail"},dt={style:{"margin-bottom":"20px"}},ct={class:"generate-result"},ut=["innerHTML"],pt={class:"image-preview-container"},mt=["src"],gt={class:"save-tips"},vt={class:"tip-text"},ft={class:"tip-title"},_t={key:0,class:"tip-desc"},xt={key:1,class:"wechat-tips"},ht={__name:"History",setup(bt){we();const _e=ke(),Q=_(!1),W=_([]),X=_(0),q=_(1),Z=_(10),z=_(""),U=_(""),k=_([]),F=_(!1),u=_(null),A=_(!1),J=_(!1),G=_(""),ee=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],re=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,c=()=>/micromessenger/i.test(navigator.userAgent),xe=Ce(()=>{var i;if(!((i=u.value)!=null&&i.content))return"";let l=u.value.content,e=[];try{u.value.image_urls?(console.log("原始image_urls数据:",u.value.image_urls),e=JSON.parse(u.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(w){console.warn("解析图片URL失败:",w),console.warn("原始数据:",u.value.image_urls)}return console.log("游记内容中的图片标记:",l.match(/\[图(\d+)\]/g)),l=l.replace(/\[图(\d+)\]/g,(w,h)=>{const p=parseInt(h)-1;return console.log(`处理图片标记 ${w}, index: ${p}, imageUrls长度: ${e.length}`),p>=0&&p<e.length&&e[p]?(console.log(`显示实际图片: ${e[p]}`),`<img src="${e[p]}" alt="图片${h}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${w}`),`<div class="image-placeholder" style="
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
          <div>图片 ${h}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),l}),C=async()=>{Q.value=!0;try{const l={page:q.value,limit:Z.value};z.value&&(l.search=z.value),U.value&&(l.model=U.value),k.value&&k.value.length===2&&(l.start_date=k.value[0],l.end_date=k.value[1]);const e=await ve.get("/travel-notes",{params:l});W.value=e.data.items||e.data,X.value=e.data.total||W.value.length}catch(l){console.error("加载游记失败:",l),y.error("加载游记失败")}finally{Q.value=!1}};let te=null;const de=()=>{te&&clearTimeout(te),te=setTimeout(()=>{q.value=1,C()},500)},ce=l=>{u.value=l,F.value=!0},he=async(l,e)=>{switch(l){case"view":ce(e);break;case"share":ue(e);break;case"delete":await be(e);break}},ue=async l=>{if(!l.content){y.warning("没有可分享的内容");return}A.value=!0,c()?y.info("正在生成分享图片，生成后可点击右上角转发..."):y.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),i=c()?540:600,w=c()?20:30;if(e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${i}px;
      background: #fff;
      padding: ${w}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `,c()){const s=document.createElement("div");s.style.cssText=`
        background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
        border-radius: 12px;
        padding: 16px 20px;
        margin-bottom: 20px;
        text-align: center;
        border: 1px solid rgba(255, 182, 193, 0.3);
        position: relative;
        overflow: hidden;
      `;const d=document.createElement("div");d.style.cssText=`
        position: absolute;
        top: -10px;
        right: -10px;
        width: 60px;
        height: 60px;
        background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
        border-radius: 50%;
      `,s.appendChild(d);const r=document.createElement("div");r.style.cssText=`
        position: relative;
        z-index: 1;
      `;const $=document.createElement("div");$.style.cssText=`
        font-size: 24px;
        margin-bottom: 8px;
        line-height: 1;
      `,$.textContent="📤";const S=document.createElement("div");S.style.cssText=`
        font-size: 16px;
        font-weight: 700;
        color: #d63384;
        margin-bottom: 6px;
        line-height: 1.2;
      `,S.textContent="分享给朋友";const ae=document.createElement("div");ae.style.cssText=`
        font-size: 13px;
        color: #6f42c1;
        line-height: 1.3;
        font-weight: 500;
      `,ae.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',r.appendChild($),r.appendChild(S),r.appendChild(ae),s.appendChild(r),e.appendChild(s)}const h=document.createElement("div");h.style.cssText=`
      font-size: ${c()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,h.textContent=`✨ ${l.location||"旅行游记"}`;const p=document.createElement("div");p.style.cssText=`
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
    `;const V=document.createElement("div");V.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const D=document.createElement("div");D.style.cssText=`
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
    `;const T=_e.user,M=(T==null?void 0:T.username)||(T==null?void 0:T.email)||"旅行者";D.textContent=M.charAt(0).toUpperCase();const L=document.createElement("span");L.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,L.textContent=M,V.appendChild(D),V.appendChild(L);const N=document.createElement("div");if(N.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,l.location){const s=document.createElement("div");s.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,s.innerHTML=`📍 ${l.location}`,N.appendChild(s)}const P=document.createElement("div");P.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `,P.innerHTML=`🕒 ${me(l.travel_date||l.created_at)}`,N.appendChild(P),p.appendChild(V),p.appendChild(N);const Y=document.createElement("div");Y.style.cssText=`
      font-size: ${c()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let I=l.content,b=[];try{l.image_urls&&(b=JSON.parse(l.image_urls))}catch(s){console.warn("解析图片URL失败:",s)}I=I.replace(/\[图(\d+)\]/g,(s,d)=>{const r=parseInt(d)-1;if(r>=0&&r<b.length&&b[r]){const $=c()?"480px":"540px";return`<img src="${b[r]}" alt="图片${d}" style="width: 100%; max-width: ${$}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${d}</div>`}),I=I.replace(/\n/g,"<br>"),Y.innerHTML=I;const B=document.createElement("div");B.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,B.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(h),e.appendChild(p),e.appendChild(Y),e.appendChild(B),document.body.appendChild(e);const O=e.querySelectorAll("img");console.log(`Found ${O.length} images in container`);const K=Array.from(O).map((s,d)=>new Promise(r=>{if(console.log(`Checking image ${d+1}:`,s.src.substring(0,50)+"..."),s.complete&&s.naturalWidth>0)console.log(`Image ${d+1} already loaded`),r();else{const $=()=>{console.log(`Image ${d+1} loaded successfully`),r()},S=()=>{console.warn(`Image ${d+1} failed to load`),r()};s.addEventListener("load",$,{once:!0}),s.addEventListener("error",S,{once:!0}),setTimeout(()=>{s.removeEventListener("load",$),s.removeEventListener("error",S),console.log(`Image ${d+1} load timeout, continuing...`),r()},1e4)}}));await Promise.all(K),console.log("All images processed");const t=e.scrollHeight;let H=c()?1.5:2,oe=c()?.8:.9;t>8e3?(H=c()?1.2:1.5,oe=c()?.7:.85,y.info("内容较长，正在优化图片质量以确保生成成功...")):t>5e3&&(H=c()?1.3:1.8,oe=c()?.75:.87);const ge={useCORS:!0,allowTaint:!0,scale:H,backgroundColor:"#ffffff",logging:!0,width:i,height:t,scrollX:0,scrollY:0,windowWidth:i,windowHeight:t,foreignObjectRendering:!1,imageTimeout:15e3,onclone:s=>{console.log("Document cloned for html2canvas");const d=s.querySelectorAll("img");console.log(`Found ${d.length} images in cloned document`)}};console.log("html2canvas options:",ge),console.log("Container dimensions:",{width:i,height:t}),await new Promise(s=>setTimeout(s,500));const j=await De(e,ge);if(console.log("Canvas generated:",{width:j.width,height:j.height}),j.width===0||j.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),j.toBlob(s=>{if(s){const d=URL.createObjectURL(s);if(re()&&!c())G.value=d,J.value=!0,y.success("图片已生成，请长按图片保存到相册");else{const r=document.createElement("a");r.href=d,r.download=`旅行游记_${l.location||"未知地点"}_${me(l.travel_date||l.created_at)}.png`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(d),c()?y.success("图片已生成，点击右上角●●●可转发给朋友"):y.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",oe)}catch(e){console.error("生成分享图片失败:",e),y.error("生成分享图片失败，请重试")}finally{A.value=!1}},be=async l=>{try{await Ue.confirm(`确定要删除游记"${l.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await ve.delete(`/travel-notes/${l.id}`),y.success("删除成功"),C()}catch(e){e!=="cancel"&&y.error("删除失败")}},le=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ye=(l,e=120)=>{if(!l)return"暂无内容";const i=l.replace(/<[^>]*>/g,"");return i.length>e?i.substring(0,e)+"...":i},pe=l=>{const e=ee.find(i=>i.value===l);return e?e.label:l},me=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return Te(()=>{C()}),(l,e)=>{var K;const i=m("el-icon"),w=m("el-input"),h=m("el-col"),p=m("el-option"),V=m("el-select"),D=m("el-date-picker"),T=m("el-row"),M=m("el-button"),L=m("el-dropdown-item"),N=m("el-dropdown-menu"),P=m("el-dropdown"),Y=m("el-tag"),I=m("el-pagination"),b=m("el-descriptions-item"),B=m("el-descriptions"),O=m("el-dialog");return g(),x("div",Ye,[a("div",He,[a("div",Se,[e[17]||(e[17]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=t=>l.$router.push("/dashboard"))},[a("div",Re,[o(i,{size:"18"},{default:n(()=>[o(E(fe))]),_:1})]),e[16]||(e[16]=a("span",{class:"back-text"},"返回首页",-1))])]),a("div",Ae,[a("div",Pe,[e[18]||(e[18]=a("div",{class:"mobile-history-title"},[a("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=t=>l.$router.push("/dashboard"))},[o(i,{size:"16"},{default:n(()=>[o(E(fe))]),_:1})])])])]),a("div",Be,[a("div",Oe,[o(T,{gutter:16},{default:n(()=>[o(h,{span:8},{default:n(()=>[o(w,{modelValue:z.value,"onUpdate:modelValue":e[2]||(e[2]=t=>z.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:de},null,8,["modelValue"])]),_:1}),o(h,{span:8},{default:n(()=>[o(V,{modelValue:U.value,"onUpdate:modelValue":e[3]||(e[3]=t=>U.value=t),placeholder:"筛选模型",clearable:"",onChange:C},{default:n(()=>[o(p,{label:"全部模型",value:""}),(g(),x(ne,null,se(ee,t=>o(p,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(h,{span:8},{default:n(()=>[o(D,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=t=>k.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C},null,8,["modelValue"])]),_:1})]),_:1})]),a("div",je,[a("div",We,[o(w,{modelValue:z.value,"onUpdate:modelValue":e[5]||(e[5]=t=>z.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:de,class:"mobile-search-input"},null,8,["modelValue"])]),a("div",qe,[o(V,{modelValue:U.value,"onUpdate:modelValue":e[6]||(e[6]=t=>U.value=t),placeholder:"筛选模型",clearable:"",onChange:C,class:"mobile-filter-select"},{default:n(()=>[o(p,{label:"全部模型",value:""}),(g(),x(ne,null,se(ee,t=>o(p,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),o(D,{modelValue:k.value,"onUpdate:modelValue":e[7]||(e[7]=t=>k.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C,class:"mobile-date-picker"},null,8,["modelValue"])])])]),a("div",Fe,[Q.value?(g(),x("div",Je,[o(i,{size:"48",class:"rotating"},{default:n(()=>[o(E($e))]),_:1}),e[19]||(e[19]=a("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):W.value.length===0?(g(),x("div",Ge,[o(i,{size:"64"},{default:n(()=>[o(E(Ee))]),_:1}),a("p",Ke,f(z.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(g(),x("div",Qe,[a("div",Xe,[(g(!0),x(ne,null,se(W.value,t=>(g(),x("div",{key:t.id,class:"note-card-small",onClick:H=>ce(t)},[a("div",et,[a("div",tt,[a("h3",null,f(t.location||"未知地点"),1)]),o(P,{onCommand:H=>he(H,t),onClick:e[8]||(e[8]=Ve(()=>{},["stop"]))},{dropdown:n(()=>[o(N,null,{default:n(()=>[o(L,{command:"view"},{default:n(()=>e[20]||(e[20]=[v("查看详情")])),_:1,__:[20]}),o(L,{command:"share"},{default:n(()=>e[21]||(e[21]=[v("分享图片")])),_:1,__:[21]}),o(L,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[v("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[o(M,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[o(i,null,{default:n(()=>[o(E(ze))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),a("div",lt,[t.model_used?(g(),ie(Y,{key:0,size:"small",type:"info"},{default:n(()=>[v(f(pe(t.model_used)),1)]),_:2},1024)):R("",!0),t.writing_style?(g(),ie(Y,{key:1,size:"small",type:"success"},{default:n(()=>[v(f(t.writing_style),1)]),_:2},1024)):R("",!0)]),a("div",ot,[a("p",null,f(ye(t.content,120)),1)]),a("div",at,[a("div",nt,[o(i,null,{default:n(()=>[o(E(Me))]),_:1}),a("span",null,f(le(t.travel_date||t.created_at)),1)]),t.companions?(g(),x("div",st,[o(i,null,{default:n(()=>[o(E(Le))]),_:1}),a("span",null,f(t.companions),1)])):R("",!0)])],8,Ze))),128))]),X.value>Z.value?(g(),x("div",it,[o(I,{"current-page":q.value,"onUpdate:currentPage":e[9]||(e[9]=t=>q.value=t),"page-size":Z.value,total:X.value,layout:"prev, pager, next, jumper",onCurrentChange:C},null,8,["current-page","page-size","total"])])):R("",!0)]))]),o(O,{modelValue:F.value,"onUpdate:modelValue":e[12]||(e[12]=t=>F.value=t),title:((K=u.value)==null?void 0:K.location)||"游记详情",width:re()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[o(M,{onClick:e[10]||(e[10]=t=>F.value=!1)},{default:n(()=>e[23]||(e[23]=[v("关闭")])),_:1,__:[23]}),o(M,{type:"primary",onClick:e[11]||(e[11]=t=>ue(u.value)),loading:A.value},{default:n(()=>[A.value?R("",!0):(g(),ie(i,{key:0},{default:n(()=>[o(E(Ie))]),_:1})),v(" "+f(A.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[u.value?(g(),x("div",rt,[a("div",dt,[o(B,{column:2,border:""},{default:n(()=>[o(b,{label:"地点"},{default:n(()=>[v(f(u.value.location||"未知"),1)]),_:1}),o(b,{label:"旅行日期"},{default:n(()=>[v(f(le(u.value.travel_date)),1)]),_:1}),o(b,{label:"同行者"},{default:n(()=>[v(f(u.value.companions||"未填写"),1)]),_:1}),o(b,{label:"创建时间"},{default:n(()=>[v(f(le(u.value.created_at)),1)]),_:1}),o(b,{label:"使用模型"},{default:n(()=>[v(f(pe(u.value.model_used)),1)]),_:1}),o(b,{label:"写作风格"},{default:n(()=>[v(f(u.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),a("div",ct,[a("div",{class:"result-content",innerHTML:xe.value},null,8,ut)])])):R("",!0)]),_:1},8,["modelValue","title","width"]),o(O,{modelValue:J.value,"onUpdate:modelValue":e[14]||(e[14]=t=>J.value=t),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{l.URL.revokeObjectURL(G.value),G.value=""})},{footer:n(()=>[o(M,{onClick:e[13]||(e[13]=t=>J.value=!1),type:"primary"},{default:n(()=>e[26]||(e[26]=[v("知道了")])),_:1,__:[26]})]),default:n(()=>[a("div",pt,[a("img",{src:G.value,alt:"分享图片",class:"preview-image"},null,8,mt),a("div",gt,[e[25]||(e[25]=a("div",{class:"tip-icon"},"💾",-1)),a("div",vt,[a("p",ft,f(c()?"分享给朋友":"长按图片保存到相册"),1),c()?(g(),x("div",xt,e[24]||(e[24]=[a("p",{class:"tip-desc"},[v("• 点击右上角 "),a("strong",null,"●●●"),v(" 转发给朋友")],-1),a("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),a("p",{class:"tip-desc"},"• 或者截屏保存到相册",-1)]))):(g(),x("p",_t,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},Ct=Ne(ht,[["__scopeId","data-v-bcd20405"]]);export{Ct as default};
