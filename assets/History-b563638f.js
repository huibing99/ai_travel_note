import{u as be,a as we,r as _,j as ke,k as Ce,c as m,o as g,d as h,e as a,f as l,w as n,t as v,F as ae,m as ne,l as A,p as ge,E as b,h as z,N as ve,C as $e,q as ze,i as f,D as Ee,G as Te,H as se,I as Me,x as Ue,J as Le,n as Ve}from"./index-7d002858.js";import{h as Ie}from"./html2canvas.esm-85f1a6b6.js";import{_ as Se}from"./_plugin-vue_export-helper-c27b6911.js";const Re={class:"dashboard-container"},Ne={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},De={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ye={class:"back-icon"},Ae={class:"mobile-only"},Be={class:"mobile-history-header"},He={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},je={class:"mobile-hidden"},Oe={class:"mobile-only"},Pe={class:"mobile-search-section"},Fe={class:"mobile-filters"},qe={class:"dashboard-card",style:{padding:"30px"}},We={key:0,style:{"text-align":"center",padding:"60px"}},Je={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Ge={style:{margin:"20px 0 0 0","font-size":"16px"}},Ke={key:2},Qe={class:"notes-grid"},Xe=["onClick"],Ze={class:"card-header"},et={class:"location-title"},tt={class:"card-tags"},lt={class:"card-content"},ot={class:"card-footer"},at={class:"date-info"},nt={key:0,class:"companions-info"},st={key:0,style:{"text-align":"center","margin-top":"30px"}},it={key:0,class:"note-detail"},rt={style:{"margin-bottom":"20px"}},dt={class:"generate-result"},ct=["innerHTML"],ut={class:"image-preview-container"},pt=["src"],mt={class:"save-tips"},gt={class:"tip-text"},vt={key:0,class:"tip-desc"},ft={key:1,class:"wechat-tips"},_t={__name:"History",setup(ht){be();const fe=we(),Q=_(!1),q=_([]),X=_(0),W=_(1),Z=_(10),E=_(""),R=_(""),k=_([]),J=_(!1),c=_(null),B=_(!1),H=_(!1),j=_(""),ee=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ie=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,d=()=>/micromessenger/i.test(navigator.userAgent),_e=ke(()=>{var i;if(!((i=c.value)!=null&&i.content))return"";let t=c.value.content,e=[];try{c.value.image_urls?(console.log("原始image_urls数据:",c.value.image_urls),e=JSON.parse(c.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(w){console.warn("解析图片URL失败:",w),console.warn("原始数据:",c.value.image_urls)}return console.log("游记内容中的图片标记:",t.match(/\[图(\d+)\]/g)),t=t.replace(/\[图(\d+)\]/g,(w,x)=>{const u=parseInt(x)-1;return console.log(`处理图片标记 ${w}, index: ${u}, imageUrls长度: ${e.length}`),u>=0&&u<e.length&&e[u]?(console.log(`显示实际图片: ${e[u]}`),`<img src="${e[u]}" alt="图片${x}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${w}`),`<div class="image-placeholder" style="
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
      </div>`)}),t}),C=async()=>{Q.value=!0;try{const t={page:W.value,limit:Z.value};E.value&&(t.search=E.value),R.value&&(t.model=R.value),k.value&&k.value.length===2&&(t.start_date=k.value[0],t.end_date=k.value[1]);const e=await ge.get("/travel-notes",{params:t});q.value=e.data.items||e.data,X.value=e.data.total||q.value.length}catch(t){console.error("加载游记失败:",t),b.error("加载游记失败")}finally{Q.value=!1}};let te=null;const re=()=>{te&&clearTimeout(te),te=setTimeout(()=>{W.value=1,C()},500)},de=t=>{c.value=t,J.value=!0},he=async(t,e)=>{switch(t){case"view":de(e);break;case"share":ce(e);break;case"delete":await xe(e);break}},ce=async t=>{if(!t.content){b.warning("没有可分享的内容");return}B.value=!0,b.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),i=d()?540:600,w=d()?20:30;e.style.cssText=`
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
      min-height: auto;
      height: auto;
      overflow: visible;
    `;const x=document.createElement("div");x.style.cssText=`
      font-size: ${d()?"28px":"32px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 18px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,x.textContent=`✨ ${t.location||"旅行游记"}`;const u=document.createElement("div");u.style.cssText=`
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
    `;const T=document.createElement("div");T.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
    `;const N=document.createElement("div");N.style.cssText=`
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
    `;const $=fe.user,M=($==null?void 0:$.username)||($==null?void 0:$.email)||"旅行者";N.textContent=M.charAt(0).toUpperCase();const U=document.createElement("span");U.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,U.textContent=M,T.appendChild(N),T.appendChild(U);const D=document.createElement("div");if(D.style.cssText=`
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
      `,s.innerHTML=`📍 ${t.location}`,D.appendChild(s)}const O=document.createElement("div");O.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,O.innerHTML=`🕒 ${pe(t.travel_date||t.created_at)}`,D.appendChild(O),u.appendChild(T),u.appendChild(D);const L=document.createElement("div");L.className="share-content",L.style.cssText=`
      font-size: ${d()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let V=t.content,y=[];try{t.image_urls&&(y=JSON.parse(t.image_urls))}catch(s){console.warn("解析图片URL失败:",s)}V=V.replace(/\[图(\d+)\]/g,(s,p)=>{const r=parseInt(p)-1;if(r>=0&&r<y.length&&y[r]){const I=d()?"480px":"540px";return`<img src="${y[r]}" alt="图片${p}" style="width: 100%; max-width: ${I}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${p}</div>`}),V=V.replace(/\n/g,"<br>"),L.innerHTML=V;const P=document.createElement("div");P.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,P.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(x),e.appendChild(u),e.appendChild(L),e.appendChild(P),document.body.appendChild(e);const F=e.querySelectorAll("img");console.log(`Found ${F.length} images in container`);const G=Array.from(F).map((s,p)=>new Promise(r=>{if(console.log(`Checking image ${p+1}:`,s.src.substring(0,50)+"..."),s.complete&&s.naturalWidth>0)console.log(`Image ${p+1} already loaded`),r();else{const I=()=>{console.log(`Image ${p+1} loaded successfully`),r()},S=()=>{console.warn(`Image ${p+1} failed to load`),r()};s.addEventListener("load",I,{once:!0}),s.addEventListener("error",S,{once:!0}),setTimeout(()=>{s.removeEventListener("load",I),s.removeEventListener("error",S),console.log(`Image ${p+1} load timeout, continuing...`),r()},1e4)}}));await Promise.all(G),console.log("All images processed");const o=e.scrollHeight;let Y=d()?1.5:2,oe=d()?.8:.9;o>8e3?(Y=d()?1.2:1.5,oe=d()?.7:.85,b.info("内容较长，正在优化图片质量以确保生成成功...")):o>5e3&&(Y=d()?1.3:1.8,oe=d()?.75:.87);const me={useCORS:!0,allowTaint:!0,scale:Y,backgroundColor:"#ffffff",logging:!0,width:i,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:s=>{console.log("Document cloned for html2canvas");const p=s.querySelectorAll("img");console.log(`Found ${p.length} images in cloned document`);const r=s.createElement("style");r.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${d()?"26px":"28px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,s.head.appendChild(r),s.querySelectorAll(".share-content").forEach(S=>{S.style.fontSize=d()?"30px":"32px",S.style.lineHeight="1.8",S.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",S.style.fontSize)})}};console.log("html2canvas options:",me),console.log("Container dimensions:",{width:i}),await new Promise(s=>setTimeout(s,500));const K=await Ie(e,me);if(console.log("Canvas generated:",{width:K.width,height:K.height}),K.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),K.toBlob(s=>{if(s){const p=URL.createObjectURL(s);if(ie()&&(!d()||d()))if(d()){const r=new FileReader;r.onload=function(I){j.value=I.target.result,H.value=!0,b.success("图片已生成，请长按图片保存到相册或转发给朋友")},r.readAsDataURL(s),URL.revokeObjectURL(p)}else j.value=p,H.value=!0,b.success("图片已生成，请长按图片保存到相册或转发给朋友");else{const r=document.createElement("a");r.href=p,r.download=`旅行游记_${t.location||"未知地点"}_${pe(t.travel_date||t.created_at)}.jpg`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(p),d()?b.success("图片已生成并下载"):b.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",oe)}catch(e){console.error("生成分享图片失败:",e),b.error("生成分享图片失败，请重试")}finally{B.value=!1}},xe=async t=>{try{await Ve.confirm(`确定要删除游记"${t.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await ge.delete(`/travel-notes/${t.id}`),b.success("删除成功"),C()}catch(e){e!=="cancel"&&b.error("删除失败")}},le=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ye=(t,e=120)=>{if(!t)return"暂无内容";const i=t.replace(/<[^>]*>/g,"");return i.length>e?i.substring(0,e)+"...":i},ue=t=>{const e=ee.find(i=>i.value===t);return e?e.label:t},pe=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return Ce(()=>{C()}),(t,e)=>{var G;const i=m("el-icon"),w=m("el-input"),x=m("el-col"),u=m("el-option"),T=m("el-select"),N=m("el-date-picker"),$=m("el-row"),M=m("el-button"),U=m("el-dropdown-item"),D=m("el-dropdown-menu"),O=m("el-dropdown"),L=m("el-tag"),V=m("el-pagination"),y=m("el-descriptions-item"),P=m("el-descriptions"),F=m("el-dialog");return g(),h("div",Re,[a("div",Ne,[a("div",De,[e[17]||(e[17]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=o=>t.$router.push("/dashboard"))},[a("div",Ye,[l(i,{size:"18"},{default:n(()=>[l(z(ve))]),_:1})]),e[16]||(e[16]=a("span",{class:"back-text"},"返回首页",-1))])]),a("div",Ae,[a("div",Be,[e[18]||(e[18]=a("div",{class:"mobile-history-title"},[a("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=o=>t.$router.push("/dashboard"))},[l(i,{size:"16"},{default:n(()=>[l(z(ve))]),_:1})])])])]),a("div",He,[a("div",je,[l($,{gutter:16},{default:n(()=>[l(x,{span:8},{default:n(()=>[l(w,{modelValue:E.value,"onUpdate:modelValue":e[2]||(e[2]=o=>E.value=o),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:re},null,8,["modelValue"])]),_:1}),l(x,{span:8},{default:n(()=>[l(T,{modelValue:R.value,"onUpdate:modelValue":e[3]||(e[3]=o=>R.value=o),placeholder:"筛选模型",clearable:"",onChange:C},{default:n(()=>[l(u,{label:"全部模型",value:""}),(g(),h(ae,null,ne(ee,o=>l(u,{key:o.value,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(x,{span:8},{default:n(()=>[l(N,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=o=>k.value=o),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C},null,8,["modelValue"])]),_:1})]),_:1})]),a("div",Oe,[a("div",Pe,[l(w,{modelValue:E.value,"onUpdate:modelValue":e[5]||(e[5]=o=>E.value=o),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:re,class:"mobile-search-input"},null,8,["modelValue"])]),a("div",Fe,[l(T,{modelValue:R.value,"onUpdate:modelValue":e[6]||(e[6]=o=>R.value=o),placeholder:"筛选模型",clearable:"",onChange:C,class:"mobile-filter-select"},{default:n(()=>[l(u,{label:"全部模型",value:""}),(g(),h(ae,null,ne(ee,o=>l(u,{key:o.value,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l(N,{modelValue:k.value,"onUpdate:modelValue":e[7]||(e[7]=o=>k.value=o),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C,class:"mobile-date-picker"},null,8,["modelValue"])])])]),a("div",qe,[Q.value?(g(),h("div",We,[l(i,{size:"48",class:"rotating"},{default:n(()=>[l(z($e))]),_:1}),e[19]||(e[19]=a("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):q.value.length===0?(g(),h("div",Je,[l(i,{size:"64"},{default:n(()=>[l(z(ze))]),_:1}),a("p",Ge,v(E.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(g(),h("div",Ke,[a("div",Qe,[(g(!0),h(ae,null,ne(q.value,o=>(g(),h("div",{key:o.id,class:"note-card-small",onClick:Y=>de(o)},[a("div",Ze,[a("div",et,[a("h3",null,v(o.location||"未知地点"),1)]),l(O,{onCommand:Y=>he(Y,o),onClick:e[8]||(e[8]=Te(()=>{},["stop"]))},{dropdown:n(()=>[l(D,null,{default:n(()=>[l(U,{command:"view"},{default:n(()=>e[20]||(e[20]=[f("查看详情")])),_:1,__:[20]}),l(U,{command:"share"},{default:n(()=>e[21]||(e[21]=[f("分享图片")])),_:1,__:[21]}),l(U,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[f("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[l(M,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[l(i,null,{default:n(()=>[l(z(Ee))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),a("div",tt,[o.model_used?(g(),se(L,{key:0,size:"small",type:"info"},{default:n(()=>[f(v(ue(o.model_used)),1)]),_:2},1024)):A("",!0),o.writing_style?(g(),se(L,{key:1,size:"small",type:"success"},{default:n(()=>[f(v(o.writing_style),1)]),_:2},1024)):A("",!0)]),a("div",lt,[a("p",null,v(ye(o.content,120)),1)]),a("div",ot,[a("div",at,[l(i,null,{default:n(()=>[l(z(Me))]),_:1}),a("span",null,v(le(o.travel_date||o.created_at)),1)]),o.companions?(g(),h("div",nt,[l(i,null,{default:n(()=>[l(z(Ue))]),_:1}),a("span",null,v(o.companions),1)])):A("",!0)])],8,Xe))),128))]),X.value>Z.value?(g(),h("div",st,[l(V,{"current-page":W.value,"onUpdate:currentPage":e[9]||(e[9]=o=>W.value=o),"page-size":Z.value,total:X.value,layout:"prev, pager, next, jumper",onCurrentChange:C},null,8,["current-page","page-size","total"])])):A("",!0)]))]),l(F,{modelValue:J.value,"onUpdate:modelValue":e[12]||(e[12]=o=>J.value=o),title:((G=c.value)==null?void 0:G.location)||"游记详情",width:ie()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[l(M,{onClick:e[10]||(e[10]=o=>J.value=!1)},{default:n(()=>e[23]||(e[23]=[f("关闭")])),_:1,__:[23]}),l(M,{type:"primary",onClick:e[11]||(e[11]=o=>ce(c.value)),loading:B.value},{default:n(()=>[B.value?A("",!0):(g(),se(i,{key:0},{default:n(()=>[l(z(Le))]),_:1})),f(" "+v(B.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[c.value?(g(),h("div",it,[a("div",rt,[l(P,{column:2,border:""},{default:n(()=>[l(y,{label:"地点"},{default:n(()=>[f(v(c.value.location||"未知"),1)]),_:1}),l(y,{label:"旅行日期"},{default:n(()=>[f(v(le(c.value.travel_date)),1)]),_:1}),l(y,{label:"同行者"},{default:n(()=>[f(v(c.value.companions||"未填写"),1)]),_:1}),l(y,{label:"创建时间"},{default:n(()=>[f(v(le(c.value.created_at)),1)]),_:1}),l(y,{label:"使用模型"},{default:n(()=>[f(v(ue(c.value.model_used)),1)]),_:1}),l(y,{label:"写作风格"},{default:n(()=>[f(v(c.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),a("div",dt,[a("div",{class:"result-content",innerHTML:_e.value},null,8,ct)])])):A("",!0)]),_:1},8,["modelValue","title","width"]),l(F,{modelValue:H.value,"onUpdate:modelValue":e[14]||(e[14]=o=>H.value=o),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(j.value),j.value=""})},{footer:n(()=>[l(M,{onClick:e[13]||(e[13]=o=>H.value=!1),type:"primary"},{default:n(()=>e[27]||(e[27]=[f("知道了")])),_:1,__:[27]})]),default:n(()=>[a("div",ut,[a("img",{src:j.value,alt:"分享图片",class:"preview-image"},null,8,pt),a("div",mt,[e[26]||(e[26]=a("div",{class:"tip-icon"},"💾",-1)),a("div",gt,[e[25]||(e[25]=a("p",{class:"tip-title"},"保存图片到相册",-1)),d()?(g(),h("div",ft,e[24]||(e[24]=[a("p",{class:"tip-desc"},"• 长按图片，保存图片或转发给朋友",-1)]))):(g(),h("p",vt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},wt=Se(_t,[["__scopeId","data-v-1498c025"]]);export{wt as default};
