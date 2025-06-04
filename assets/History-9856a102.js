import{u as Ce,a as $e,r as _,j as Ee,k as Te,c as u,o as p,d as h,e as a,f as o,w as n,t as v,F as ne,m as se,l as B,p as ve,E as w,h as z,N as _e,C as ze,q as Me,i as m,D as Ve,G as Le,H as ie,I as Ue,x as Ie,J as Se,n as Ne}from"./index-cfebb45a.js";import{h as De}from"./html2canvas.esm-85f1a6b6.js";import{_ as Re}from"./_plugin-vue_export-helper-c27b6911.js";const Ye={class:"dashboard-container"},He={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Be={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ae={class:"back-icon"},Pe={class:"mobile-only"},je={class:"mobile-history-header"},Oe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Fe={class:"mobile-hidden"},qe={class:"mobile-only"},We={class:"mobile-search-section"},Je={class:"mobile-filters"},Ge={class:"dashboard-card",style:{padding:"30px"}},Ke={key:0,style:{"text-align":"center",padding:"60px"}},Qe={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Xe={style:{margin:"20px 0 0 0","font-size":"16px"}},Ze={key:2},et={class:"notes-grid"},tt=["onClick"],lt={class:"card-header"},ot={class:"location-title"},at={class:"card-tags"},nt={class:"card-content"},st={class:"card-footer"},it={class:"date-info"},rt={key:0,class:"companions-info"},dt={key:0,style:{"text-align":"center","margin-top":"30px"}},ct={key:0,class:"note-detail"},ut={style:{"margin-bottom":"20px"}},pt={class:"generate-result"},mt=["innerHTML"],gt={class:"image-preview-container"},ft=["src"],vt={class:"save-tips"},_t={class:"tip-text"},ht={class:"tip-title"},xt={key:0,class:"tip-desc"},yt={key:1,class:"wechat-tips"},bt={__name:"History",setup(wt){Ce();const he=$e(),Q=_(!1),O=_([]),X=_(0),F=_(1),Z=_(10),M=_(""),I=_(""),C=_([]),q=_(!1),c=_(null),A=_(!1),W=_(!1),J=_(""),ee=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],re=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,d=()=>/micromessenger/i.test(navigator.userAgent),xe=Ee(()=>{var i;if(!((i=c.value)!=null&&i.content))return"";let t=c.value.content,e=[];try{c.value.image_urls?(console.log("原始image_urls数据:",c.value.image_urls),e=JSON.parse(c.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(y){console.warn("解析图片URL失败:",y),console.warn("原始数据:",c.value.image_urls)}return console.log("游记内容中的图片标记:",t.match(/\[图(\d+)\]/g)),t=t.replace(/\[图(\d+)\]/g,(y,x)=>{const g=parseInt(x)-1;return console.log(`处理图片标记 ${y}, index: ${g}, imageUrls长度: ${e.length}`),g>=0&&g<e.length&&e[g]?(console.log(`显示实际图片: ${e[g]}`),`<img src="${e[g]}" alt="图片${x}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${y}`),`<div class="image-placeholder" style="
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
      </div>`)}),t}),$=async()=>{Q.value=!0;try{const t={page:F.value,limit:Z.value};M.value&&(t.search=M.value),I.value&&(t.model=I.value),C.value&&C.value.length===2&&(t.start_date=C.value[0],t.end_date=C.value[1]);const e=await ve.get("/travel-notes",{params:t});O.value=e.data.items||e.data,X.value=e.data.total||O.value.length}catch(t){console.error("加载游记失败:",t),w.error("加载游记失败")}finally{Q.value=!1}};let te=null;const de=()=>{te&&clearTimeout(te),te=setTimeout(()=>{F.value=1,$()},500)},ce=t=>{c.value=t,q.value=!0},ye=async(t,e)=>{switch(t){case"view":ce(e);break;case"share":ue(e);break;case"delete":await be(e);break}},ue=async t=>{if(!t.content){w.warning("没有可分享的内容");return}A.value=!0,w.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),i=d()?540:600,y=d()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${i}px;
      background: #fff;
      padding: ${y}px;
      padding-top: ${y+100}px;
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
    `;const g=document.createElement("div");g.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const S=document.createElement("div");S.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,S.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',g.appendChild(S),x.appendChild(g),e.appendChild(x);const N=document.createElement("div");N.style.cssText=`
      font-size: ${d()?"28px":"32px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 18px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,N.textContent=`✨ ${t.location||"旅行游记"}`;const D=document.createElement("div");D.style.cssText=`
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
    `;const k=document.createElement("div");k.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
    `;const V=document.createElement("div");V.style.cssText=`
      width: 28px;
      height: 28px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 14px;
    `;const E=he.user,G=(E==null?void 0:E.username)||(E==null?void 0:E.email)||"旅行者";V.textContent=G.charAt(0).toUpperCase();const R=document.createElement("span");R.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,R.textContent=G,k.appendChild(V),k.appendChild(R);const Y=document.createElement("div");if(Y.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    `,t.location){const s=document.createElement("div");s.style.cssText=`
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px 10px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 14px;
      `,s.innerHTML=`📍 ${t.location}`,Y.appendChild(s)}const b=document.createElement("div");b.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,b.innerHTML=`🕒 ${me(t.travel_date||t.created_at)}`,Y.appendChild(b),D.appendChild(k),D.appendChild(Y);const H=document.createElement("div");H.className="share-content",H.style.cssText=`
      font-size: ${d()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let T=t.content,L=[];try{t.image_urls&&(L=JSON.parse(t.image_urls))}catch(s){console.warn("解析图片URL失败:",s)}T=T.replace(/\[图(\d+)\]/g,(s,f)=>{const r=parseInt(f)-1;if(r>=0&&r<L.length&&L[r]){const j=d()?"480px":"540px";return`<img src="${L[r]}" alt="图片${f}" style="width: 100%; max-width: ${j}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${f}</div>`}),T=T.replace(/\n/g,"<br>"),H.innerHTML=T;const l=document.createElement("div");l.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,l.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(N),e.appendChild(D),e.appendChild(H),e.appendChild(l),document.body.appendChild(e);const P=e.querySelectorAll("img");console.log(`Found ${P.length} images in container`);const ke=Array.from(P).map((s,f)=>new Promise(r=>{if(console.log(`Checking image ${f+1}:`,s.src.substring(0,50)+"..."),s.complete&&s.naturalWidth>0)console.log(`Image ${f+1} already loaded`),r();else{const j=()=>{console.log(`Image ${f+1} loaded successfully`),r()},U=()=>{console.warn(`Image ${f+1} failed to load`),r()};s.addEventListener("load",j,{once:!0}),s.addEventListener("error",U,{once:!0}),setTimeout(()=>{s.removeEventListener("load",j),s.removeEventListener("error",U),console.log(`Image ${f+1} load timeout, continuing...`),r()},1e4)}}));await Promise.all(ke),console.log("All images processed");const ge=e.scrollHeight;let oe=d()?1.5:2,ae=d()?.8:.9;ge>8e3?(oe=d()?1.2:1.5,ae=d()?.7:.85,w.info("内容较长，正在优化图片质量以确保生成成功...")):ge>5e3&&(oe=d()?1.3:1.8,ae=d()?.75:.87);const fe={useCORS:!0,allowTaint:!0,scale:oe,backgroundColor:"#ffffff",logging:!0,width:i,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:s=>{console.log("Document cloned for html2canvas");const f=s.querySelectorAll("img");console.log(`Found ${f.length} images in cloned document`);const r=s.createElement("style");r.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${d()?"30px":"32px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,s.head.appendChild(r),s.querySelectorAll(".share-content").forEach(U=>{U.style.fontSize=d()?"30px":"32px",U.style.lineHeight="1.8",U.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",U.style.fontSize)})}};console.log("html2canvas options:",fe),console.log("Container dimensions:",{width:i}),await new Promise(s=>setTimeout(s,500));const K=await De(e,fe);if(console.log("Canvas generated:",{width:K.width,height:K.height}),K.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),K.toBlob(s=>{if(s){const f=URL.createObjectURL(s);if(re()&&!d())J.value=f,W.value=!0,w.success("图片已生成，请长按图片保存到相册");else{const r=document.createElement("a");r.href=f,r.download=`旅行游记_${t.location||"未知地点"}_${me(t.travel_date||t.created_at)}.png`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(f),d()?w.success("图片已生成，点击右上角●●●可转发给朋友"):w.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",ae)}catch(e){console.error("生成分享图片失败:",e),w.error("生成分享图片失败，请重试")}finally{A.value=!1}},be=async t=>{try{await Ne.confirm(`确定要删除游记"${t.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await ve.delete(`/travel-notes/${t.id}`),w.success("删除成功"),$()}catch(e){e!=="cancel"&&w.error("删除失败")}},le=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",we=(t,e=120)=>{if(!t)return"暂无内容";const i=t.replace(/<[^>]*>/g,"");return i.length>e?i.substring(0,e)+"...":i},pe=t=>{const e=ee.find(i=>i.value===t);return e?e.label:t},me=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return Te(()=>{$()}),(t,e)=>{var L;const i=u("el-icon"),y=u("el-input"),x=u("el-col"),g=u("el-option"),S=u("el-select"),N=u("el-date-picker"),D=u("el-row"),k=u("el-button"),V=u("el-dropdown-item"),E=u("el-dropdown-menu"),G=u("el-dropdown"),R=u("el-tag"),Y=u("el-pagination"),b=u("el-descriptions-item"),H=u("el-descriptions"),T=u("el-dialog");return p(),h("div",Ye,[a("div",He,[a("div",Be,[e[17]||(e[17]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=l=>t.$router.push("/dashboard"))},[a("div",Ae,[o(i,{size:"18"},{default:n(()=>[o(z(_e))]),_:1})]),e[16]||(e[16]=a("span",{class:"back-text"},"返回首页",-1))])]),a("div",Pe,[a("div",je,[e[18]||(e[18]=a("div",{class:"mobile-history-title"},[a("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=l=>t.$router.push("/dashboard"))},[o(i,{size:"16"},{default:n(()=>[o(z(_e))]),_:1})])])])]),a("div",Oe,[a("div",Fe,[o(D,{gutter:16},{default:n(()=>[o(x,{span:8},{default:n(()=>[o(y,{modelValue:M.value,"onUpdate:modelValue":e[2]||(e[2]=l=>M.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:de},null,8,["modelValue"])]),_:1}),o(x,{span:8},{default:n(()=>[o(S,{modelValue:I.value,"onUpdate:modelValue":e[3]||(e[3]=l=>I.value=l),placeholder:"筛选模型",clearable:"",onChange:$},{default:n(()=>[o(g,{label:"全部模型",value:""}),(p(),h(ne,null,se(ee,l=>o(g,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(x,{span:8},{default:n(()=>[o(N,{modelValue:C.value,"onUpdate:modelValue":e[4]||(e[4]=l=>C.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$},null,8,["modelValue"])]),_:1})]),_:1})]),a("div",qe,[a("div",We,[o(y,{modelValue:M.value,"onUpdate:modelValue":e[5]||(e[5]=l=>M.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:de,class:"mobile-search-input"},null,8,["modelValue"])]),a("div",Je,[o(S,{modelValue:I.value,"onUpdate:modelValue":e[6]||(e[6]=l=>I.value=l),placeholder:"筛选模型",clearable:"",onChange:$,class:"mobile-filter-select"},{default:n(()=>[o(g,{label:"全部模型",value:""}),(p(),h(ne,null,se(ee,l=>o(g,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),o(N,{modelValue:C.value,"onUpdate:modelValue":e[7]||(e[7]=l=>C.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$,class:"mobile-date-picker"},null,8,["modelValue"])])])]),a("div",Ge,[Q.value?(p(),h("div",Ke,[o(i,{size:"48",class:"rotating"},{default:n(()=>[o(z(ze))]),_:1}),e[19]||(e[19]=a("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):O.value.length===0?(p(),h("div",Qe,[o(i,{size:"64"},{default:n(()=>[o(z(Me))]),_:1}),a("p",Xe,v(M.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(p(),h("div",Ze,[a("div",et,[(p(!0),h(ne,null,se(O.value,l=>(p(),h("div",{key:l.id,class:"note-card-small",onClick:P=>ce(l)},[a("div",lt,[a("div",ot,[a("h3",null,v(l.location||"未知地点"),1)]),o(G,{onCommand:P=>ye(P,l),onClick:e[8]||(e[8]=Le(()=>{},["stop"]))},{dropdown:n(()=>[o(E,null,{default:n(()=>[o(V,{command:"view"},{default:n(()=>e[20]||(e[20]=[m("查看详情")])),_:1,__:[20]}),o(V,{command:"share"},{default:n(()=>e[21]||(e[21]=[m("分享图片")])),_:1,__:[21]}),o(V,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[m("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[o(k,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[o(i,null,{default:n(()=>[o(z(Ve))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),a("div",at,[l.model_used?(p(),ie(R,{key:0,size:"small",type:"info"},{default:n(()=>[m(v(pe(l.model_used)),1)]),_:2},1024)):B("",!0),l.writing_style?(p(),ie(R,{key:1,size:"small",type:"success"},{default:n(()=>[m(v(l.writing_style),1)]),_:2},1024)):B("",!0)]),a("div",nt,[a("p",null,v(we(l.content,120)),1)]),a("div",st,[a("div",it,[o(i,null,{default:n(()=>[o(z(Ue))]),_:1}),a("span",null,v(le(l.travel_date||l.created_at)),1)]),l.companions?(p(),h("div",rt,[o(i,null,{default:n(()=>[o(z(Ie))]),_:1}),a("span",null,v(l.companions),1)])):B("",!0)])],8,tt))),128))]),X.value>Z.value?(p(),h("div",dt,[o(Y,{"current-page":F.value,"onUpdate:currentPage":e[9]||(e[9]=l=>F.value=l),"page-size":Z.value,total:X.value,layout:"prev, pager, next, jumper",onCurrentChange:$},null,8,["current-page","page-size","total"])])):B("",!0)]))]),o(T,{modelValue:q.value,"onUpdate:modelValue":e[12]||(e[12]=l=>q.value=l),title:((L=c.value)==null?void 0:L.location)||"游记详情",width:re()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[o(k,{onClick:e[10]||(e[10]=l=>q.value=!1)},{default:n(()=>e[23]||(e[23]=[m("关闭")])),_:1,__:[23]}),o(k,{type:"primary",onClick:e[11]||(e[11]=l=>ue(c.value)),loading:A.value},{default:n(()=>[A.value?B("",!0):(p(),ie(i,{key:0},{default:n(()=>[o(z(Se))]),_:1})),m(" "+v(A.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[c.value?(p(),h("div",ct,[a("div",ut,[o(H,{column:2,border:""},{default:n(()=>[o(b,{label:"地点"},{default:n(()=>[m(v(c.value.location||"未知"),1)]),_:1}),o(b,{label:"旅行日期"},{default:n(()=>[m(v(le(c.value.travel_date)),1)]),_:1}),o(b,{label:"同行者"},{default:n(()=>[m(v(c.value.companions||"未填写"),1)]),_:1}),o(b,{label:"创建时间"},{default:n(()=>[m(v(le(c.value.created_at)),1)]),_:1}),o(b,{label:"使用模型"},{default:n(()=>[m(v(pe(c.value.model_used)),1)]),_:1}),o(b,{label:"写作风格"},{default:n(()=>[m(v(c.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),a("div",pt,[a("div",{class:"result-content",innerHTML:xe.value},null,8,mt)])])):B("",!0)]),_:1},8,["modelValue","title","width"]),o(T,{modelValue:W.value,"onUpdate:modelValue":e[14]||(e[14]=l=>W.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(J.value),J.value=""})},{footer:n(()=>[o(k,{onClick:e[13]||(e[13]=l=>W.value=!1),type:"primary"},{default:n(()=>e[26]||(e[26]=[m("知道了")])),_:1,__:[26]})]),default:n(()=>[a("div",gt,[a("img",{src:J.value,alt:"分享图片",class:"preview-image"},null,8,ft),a("div",vt,[e[25]||(e[25]=a("div",{class:"tip-icon"},"💾",-1)),a("div",_t,[a("p",ht,v(d()?"分享给朋友":"长按图片保存到相册"),1),d()?(p(),h("div",yt,e[24]||(e[24]=[a("p",{class:"tip-desc"},[m("• 点击右上角 "),a("strong",null,"●●●"),m(" 转发给朋友")],-1),a("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),a("p",{class:"tip-desc"},"• 或者截屏保存到相册",-1)]))):(p(),h("p",xt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},Et=Re(bt,[["__scopeId","data-v-9b9f53e4"]]);export{Et as default};
