import{u as we,a as ke,r as y,j as Ce,k as $e,c as m,o as g,d as h,e as a,f as l,w as n,t as x,F as ae,p as ne,l as A,s as fe,E as _,h as k,P as ve,G as Ee,v as Te,i as f,H as ze,I as Me,J as se,K as Le,z as Ue,L as Ve,M as Ie,q as Se}from"./index-d0342609.js";import{h as Re}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";const De={class:"dashboard-container"},Ye={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Ae={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Be={class:"back-icon"},He={class:"mobile-only"},je={class:"mobile-history-header"},Pe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Oe={class:"mobile-hidden"},Fe={class:"mobile-only"},qe={class:"mobile-search-section"},We={class:"mobile-filters"},Je={class:"dashboard-card",style:{padding:"30px"}},Ge={key:0,style:{"text-align":"center",padding:"60px"}},Ke={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Qe={style:{margin:"20px 0 0 0","font-size":"16px"}},Xe={key:2},Ze={class:"notes-grid"},et=["onClick"],tt={class:"card-header"},lt={class:"location-title"},ot={class:"card-tags"},at={class:"card-content"},nt={class:"card-footer"},st={class:"date-info"},it={key:0,class:"companions-info"},rt={key:0,style:{"text-align":"center","margin-top":"30px"}},dt={key:0,class:"note-detail"},ct={style:{"margin-bottom":"20px"}},ut={class:"generate-result"},pt=["innerHTML"],mt={class:"image-preview-container"},gt=["src"],ft={class:"save-tips"},vt={class:"tip-text"},_t={key:0,class:"tip-desc"},xt={key:1,class:"wechat-tips"},yt={__name:"History",setup(ht){we();const _e=ke(),Q=y(!1),q=y([]),X=y(0),W=y(1),Z=y(10),M=y(""),R=y(""),C=y([]),J=y(!1),c=y(null),B=y(!1),H=y(!1),j=y(""),ee=[{label:"模型1",value:"gemini-2.0-flash"},{label:"模型2",value:"gemini-2.5-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ie=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,d=()=>/micromessenger/i.test(navigator.userAgent),xe=Ce(()=>{var s;if(!((s=c.value)!=null&&s.content))return"";let t=c.value.content,e=[];try{c.value.image_urls?(console.log("原始image_urls数据:",c.value.image_urls),e=JSON.parse(c.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(v){console.warn("解析图片URL失败:",v),console.warn("原始数据:",c.value.image_urls)}return console.log("游记内容中的图片标记:",t.match(/\[图(\d+)\]/g)),t=t.replace(/\[图(\d+)\]/g,(v,b)=>{const u=parseInt(b)-1;return console.log(`处理图片标记 ${v}, index: ${u}, imageUrls长度: ${e.length}`),u>=0&&u<e.length&&e[u]?(console.log(`显示实际图片: ${e[u]}`),`<img src="${e[u]}" alt="图片${b}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${v}`),`<div class="image-placeholder" style="
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
          <div>图片 ${b}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),t}),$=async()=>{Q.value=!0;try{const t={page:W.value,limit:Z.value};M.value&&(t.search=M.value),R.value&&(t.model=R.value),C.value&&C.value.length===2&&(t.start_date=C.value[0],t.end_date=C.value[1]);const e=await fe.get("/travel-notes",{params:t});q.value=e.data.items||e.data,X.value=e.data.total||q.value.length}catch(t){console.error("加载游记失败:",t),_.error("加载游记失败")}finally{Q.value=!1}};let te=null;const re=()=>{te&&clearTimeout(te),te=setTimeout(()=>{W.value=1,$()},500)},de=t=>{c.value=t,J.value=!0},ye=async(t,e)=>{switch(t){case"view":de(e);break;case"copy":me(e);break;case"share":ce(e);break;case"delete":await he(e);break}},ce=async t=>{if(!t.content){_.warning("没有可分享的内容");return}B.value=!0,_.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),s=d()?540:600,v=d()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${s}px;
      background: #fff;
      padding: ${v}px;.00
      padding-top: ${v+80}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      min-height: auto;
      height: auto;
      overflow: visible;
    `;const b=document.createElement("div");b.style.cssText=`
      font-size: ${d()?"28px":"32px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 18px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,b.textContent=`✨ ${t.location||"旅行游记"}`;const u=document.createElement("div");u.style.cssText=`
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
    `;const L=document.createElement("div");L.style.cssText=`
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
    `;const E=_e.user,T=(E==null?void 0:E.username)||(E==null?void 0:E.email)||"旅行者";N.textContent=T.charAt(0).toUpperCase();const z=document.createElement("span");z.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,z.textContent=T,L.appendChild(N),L.appendChild(z);const D=document.createElement("div");if(D.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    `,t.location){const i=document.createElement("div");i.style.cssText=`
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px 10px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 14px;
      `,i.innerHTML=`📍 ${t.location}`,D.appendChild(i)}const P=document.createElement("div");P.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,P.innerHTML=`🕒 ${pe(t.travel_date||t.created_at)}`,D.appendChild(P),u.appendChild(L),u.appendChild(D);const U=document.createElement("div");U.className="share-content",U.style.cssText=`
      font-size: ${d()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let V=t.content,w=[];try{t.image_urls&&(w=JSON.parse(t.image_urls))}catch(i){console.warn("解析图片URL失败:",i)}V=V.replace(/\[图(\d+)\]/g,(i,p)=>{const r=parseInt(p)-1;if(r>=0&&r<w.length&&w[r]){const I=d()?"480px":"540px";return`<img src="${w[r]}" alt="图片${p}" style="width: 100%; max-width: ${I}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${p}</div>`}),V=V.replace(/\n/g,"<br>"),U.innerHTML=V;const O=document.createElement("div");O.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,O.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(b),e.appendChild(u),e.appendChild(U),e.appendChild(O),document.body.appendChild(e);const F=e.querySelectorAll("img");console.log(`Found ${F.length} images in container`);const G=Array.from(F).map((i,p)=>new Promise(r=>{if(console.log(`Checking image ${p+1}:`,i.src.substring(0,50)+"..."),i.complete&&i.naturalWidth>0)console.log(`Image ${p+1} already loaded`),r();else{const I=()=>{console.log(`Image ${p+1} loaded successfully`),r()},S=()=>{console.warn(`Image ${p+1} failed to load`),r()};i.addEventListener("load",I,{once:!0}),i.addEventListener("error",S,{once:!0}),setTimeout(()=>{i.removeEventListener("load",I),i.removeEventListener("error",S),console.log(`Image ${p+1} load timeout, continuing...`),r()},1e4)}}));await Promise.all(G),console.log("All images processed");const o=e.scrollHeight;let Y=d()?1.5:2,oe=d()?.8:.9;o>8e3?(Y=d()?1.2:1.5,oe=d()?.7:.85,_.info("内容较长，正在优化图片质量以确保生成成功...")):o>5e3&&(Y=d()?1.3:1.8,oe=d()?.75:.87);const ge={useCORS:!0,allowTaint:!0,scale:Y,backgroundColor:"#ffffff",logging:!0,width:s,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:i=>{console.log("Document cloned for html2canvas");const p=i.querySelectorAll("img");console.log(`Found ${p.length} images in cloned document`);const r=i.createElement("style");r.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${d()?"26px":"28px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,i.head.appendChild(r),i.querySelectorAll(".share-content").forEach(S=>{S.style.fontSize=d()?"30px":"32px",S.style.lineHeight="1.8",S.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",S.style.fontSize)})}};console.log("html2canvas options:",ge),console.log("Container dimensions:",{width:s}),await new Promise(i=>setTimeout(i,500));const K=await Re(e,ge);if(console.log("Canvas generated:",{width:K.width,height:K.height}),K.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),K.toBlob(i=>{if(i){const p=URL.createObjectURL(i);if(ie()&&(!d()||d()))if(d()){const r=new FileReader;r.onload=function(I){j.value=I.target.result,H.value=!0,_.success("图片已生成，请长按图片保存到相册或转发给朋友")},r.readAsDataURL(i),URL.revokeObjectURL(p)}else j.value=p,H.value=!0,_.success("图片已生成，请长按图片保存到相册或转发给朋友");else{const r=document.createElement("a");r.href=p,r.download=`旅行游记_${t.location||"未知地点"}_${pe(t.travel_date||t.created_at)}.jpg`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(p),d()?_.success("图片已生成并下载"):_.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",oe)}catch(e){console.error("生成分享图片失败:",e),_.error("生成分享图片失败，请重试")}finally{B.value=!1}},he=async t=>{try{await Se.confirm(`确定要删除游记"${t.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await fe.delete(`/travel-notes/${t.id}`),_.success("删除成功"),$()}catch(e){e!=="cancel"&&_.error("删除失败")}},le=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",be=(t,e=120)=>{if(!t)return"暂无内容";const s=t.replace(/<[^>]*>/g,"");return s.length>e?s.substring(0,e)+"...":s},ue=t=>{const e=ee.find(s=>s.value===t);return e?e.label:t},pe=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",me=async t=>{if(!t.content){_.warning("没有可复制的文字内容");return}try{let e=t.content;e=e.replace(/\[图\d+\]/g,""),e=e.replace(/<[^>]*>/g,""),e=e.trim(),await navigator.clipboard.writeText(e),_.success("文字内容已复制到剪贴板")}catch{try{let s=t.content.replace(/\[图\d+\]/g,"").replace(/<[^>]*>/g,"").trim();const v=document.createElement("textarea");v.value=s,document.body.appendChild(v),v.select(),document.execCommand("copy"),document.body.removeChild(v),_.success("文字内容已复制到剪贴板")}catch(s){console.error("复制失败:",s),_.error("复制失败，请手动选择复制")}}};return $e(()=>{$()}),(t,e)=>{var G;const s=m("el-icon"),v=m("el-input"),b=m("el-col"),u=m("el-option"),L=m("el-select"),N=m("el-date-picker"),E=m("el-row"),T=m("el-button"),z=m("el-dropdown-item"),D=m("el-dropdown-menu"),P=m("el-dropdown"),U=m("el-tag"),V=m("el-pagination"),w=m("el-descriptions-item"),O=m("el-descriptions"),F=m("el-dialog");return g(),h("div",De,[a("div",Ye,[a("div",Ae,[e[18]||(e[18]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=o=>t.$router.push("/dashboard"))},[a("div",Be,[l(s,{size:"18"},{default:n(()=>[l(k(ve))]),_:1})]),e[17]||(e[17]=a("span",{class:"back-text"},"返回首页",-1))])]),a("div",He,[a("div",je,[e[19]||(e[19]=a("div",{class:"mobile-history-title"},[a("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=o=>t.$router.push("/dashboard"))},[l(s,{size:"16"},{default:n(()=>[l(k(ve))]),_:1})])])])]),a("div",Pe,[a("div",Oe,[l(E,{gutter:16},{default:n(()=>[l(b,{span:8},{default:n(()=>[l(v,{modelValue:M.value,"onUpdate:modelValue":e[2]||(e[2]=o=>M.value=o),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:re},null,8,["modelValue"])]),_:1}),l(b,{span:8},{default:n(()=>[l(L,{modelValue:R.value,"onUpdate:modelValue":e[3]||(e[3]=o=>R.value=o),placeholder:"筛选模型",clearable:"",onChange:$},{default:n(()=>[l(u,{label:"全部模型",value:""}),(g(),h(ae,null,ne(ee,o=>l(u,{key:o.value,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(b,{span:8},{default:n(()=>[l(N,{modelValue:C.value,"onUpdate:modelValue":e[4]||(e[4]=o=>C.value=o),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$},null,8,["modelValue"])]),_:1})]),_:1})]),a("div",Fe,[a("div",qe,[l(v,{modelValue:M.value,"onUpdate:modelValue":e[5]||(e[5]=o=>M.value=o),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:re,class:"mobile-search-input"},null,8,["modelValue"])]),a("div",We,[l(L,{modelValue:R.value,"onUpdate:modelValue":e[6]||(e[6]=o=>R.value=o),placeholder:"筛选模型",clearable:"",onChange:$,class:"mobile-filter-select"},{default:n(()=>[l(u,{label:"全部模型",value:""}),(g(),h(ae,null,ne(ee,o=>l(u,{key:o.value,label:o.label,value:o.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l(N,{modelValue:C.value,"onUpdate:modelValue":e[7]||(e[7]=o=>C.value=o),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$,class:"mobile-date-picker"},null,8,["modelValue"])])])]),a("div",Je,[Q.value?(g(),h("div",Ge,[l(s,{size:"48",class:"rotating"},{default:n(()=>[l(k(Ee))]),_:1}),e[20]||(e[20]=a("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):q.value.length===0?(g(),h("div",Ke,[l(s,{size:"64"},{default:n(()=>[l(k(Te))]),_:1}),a("p",Qe,x(M.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(g(),h("div",Xe,[a("div",Ze,[(g(!0),h(ae,null,ne(q.value,o=>(g(),h("div",{key:o.id,class:"note-card-small",onClick:Y=>de(o)},[a("div",tt,[a("div",lt,[a("h3",null,x(o.location||"未知地点"),1)]),l(P,{onCommand:Y=>ye(Y,o),onClick:e[8]||(e[8]=Me(()=>{},["stop"]))},{dropdown:n(()=>[l(D,null,{default:n(()=>[l(z,{command:"view"},{default:n(()=>e[21]||(e[21]=[f("查看详情")])),_:1,__:[21]}),l(z,{command:"copy"},{default:n(()=>e[22]||(e[22]=[f("复制文字")])),_:1,__:[22]}),l(z,{command:"share"},{default:n(()=>e[23]||(e[23]=[f("分享图片")])),_:1,__:[23]}),l(z,{command:"delete",divided:""},{default:n(()=>e[24]||(e[24]=[f("删除")])),_:1,__:[24]})]),_:1})]),default:n(()=>[l(T,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[l(s,null,{default:n(()=>[l(k(ze))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),a("div",ot,[o.model_used?(g(),se(U,{key:0,size:"small",type:"info"},{default:n(()=>[f(x(ue(o.model_used)),1)]),_:2},1024)):A("",!0),o.writing_style?(g(),se(U,{key:1,size:"small",type:"success"},{default:n(()=>[f(x(o.writing_style),1)]),_:2},1024)):A("",!0)]),a("div",at,[a("p",null,x(be(o.content,120)),1)]),a("div",nt,[a("div",st,[l(s,null,{default:n(()=>[l(k(Le))]),_:1}),a("span",null,x(le(o.travel_date||o.created_at)),1)]),o.companions?(g(),h("div",it,[l(s,null,{default:n(()=>[l(k(Ue))]),_:1}),a("span",null,x(o.companions),1)])):A("",!0)])],8,et))),128))]),X.value>Z.value?(g(),h("div",rt,[l(V,{"current-page":W.value,"onUpdate:currentPage":e[9]||(e[9]=o=>W.value=o),"page-size":Z.value,total:X.value,layout:"prev, pager, next, jumper",onCurrentChange:$},null,8,["current-page","page-size","total"])])):A("",!0)]))]),l(F,{modelValue:J.value,"onUpdate:modelValue":e[13]||(e[13]=o=>J.value=o),title:((G=c.value)==null?void 0:G.location)||"游记详情",width:ie()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[l(T,{onClick:e[10]||(e[10]=o=>J.value=!1)},{default:n(()=>e[25]||(e[25]=[f("关闭")])),_:1,__:[25]}),l(T,{onClick:e[11]||(e[11]=o=>me(c.value))},{default:n(()=>[l(s,null,{default:n(()=>[l(k(Ve))]),_:1}),e[26]||(e[26]=f(" 复制文字 "))]),_:1,__:[26]}),l(T,{type:"primary",onClick:e[12]||(e[12]=o=>ce(c.value)),loading:B.value},{default:n(()=>[B.value?A("",!0):(g(),se(s,{key:0},{default:n(()=>[l(k(Ie))]),_:1})),f(" "+x(B.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[c.value?(g(),h("div",dt,[a("div",ct,[l(O,{column:2,border:""},{default:n(()=>[l(w,{label:"地点"},{default:n(()=>[f(x(c.value.location||"未知"),1)]),_:1}),l(w,{label:"旅行日期"},{default:n(()=>[f(x(le(c.value.travel_date)),1)]),_:1}),l(w,{label:"同行者"},{default:n(()=>[f(x(c.value.companions||"未填写"),1)]),_:1}),l(w,{label:"创建时间"},{default:n(()=>[f(x(le(c.value.created_at)),1)]),_:1}),l(w,{label:"使用模型"},{default:n(()=>[f(x(ue(c.value.model_used)),1)]),_:1}),l(w,{label:"写作风格"},{default:n(()=>[f(x(c.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),a("div",ut,[a("div",{class:"result-content",innerHTML:xe.value},null,8,pt)])])):A("",!0)]),_:1},8,["modelValue","title","width"]),l(F,{modelValue:H.value,"onUpdate:modelValue":e[15]||(e[15]=o=>H.value=o),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[16]||(e[16]=()=>{t.URL.revokeObjectURL(j.value),j.value=""})},{footer:n(()=>[l(T,{onClick:e[14]||(e[14]=o=>H.value=!1),type:"primary"},{default:n(()=>e[30]||(e[30]=[f("知道了")])),_:1,__:[30]})]),default:n(()=>[a("div",mt,[a("img",{src:j.value,alt:"分享图片",class:"preview-image"},null,8,gt),a("div",ft,[e[29]||(e[29]=a("div",{class:"tip-icon"},"💾",-1)),a("div",vt,[e[28]||(e[28]=a("p",{class:"tip-title"},"保存图片到相册",-1)),d()?(g(),h("div",xt,e[27]||(e[27]=[a("p",{class:"tip-desc"},"• 长按图片，保存图片或转发给朋友",-1)]))):(g(),h("p",_t,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},Ct=Ne(yt,[["__scopeId","data-v-26bef9af"]]);export{Ct as default};
