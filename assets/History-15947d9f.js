import{u as $e,a as Ee,r as h,j as Te,k as ze,c as m,o as c,d as v,e as o,f as a,w as n,t as f,F as se,m as ie,l as B,p as _e,E as y,h as z,N as he,C as Me,q as Le,i as _,D as Ue,G as Ve,H as re,I as Ie,x as Se,J as Re,n as Ne}from"./index-b2caebe8.js";import{h as De}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ae}from"./_plugin-vue_export-helper-c27b6911.js";const Ye={class:"dashboard-container"},He={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Be={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},je={class:"back-icon"},Oe={class:"mobile-only"},Pe={class:"mobile-history-header"},Fe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},qe={class:"mobile-hidden"},We={class:"mobile-only"},Je={class:"mobile-search-section"},Ge={class:"mobile-filters"},Ke={class:"dashboard-card",style:{padding:"30px"}},Qe={key:0,style:{"text-align":"center",padding:"60px"}},Xe={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Ze={style:{margin:"20px 0 0 0","font-size":"16px"}},et={key:2},tt={class:"notes-grid"},lt=["onClick"],ot={class:"card-header"},at={class:"location-title"},nt={class:"card-tags"},st={class:"card-content"},it={class:"card-footer"},rt={class:"date-info"},dt={key:0,class:"companions-info"},ct={key:0,style:{"text-align":"center","margin-top":"30px"}},ut={key:0,class:"note-detail"},pt={style:{"margin-bottom":"20px"}},mt={class:"generate-result"},gt=["innerHTML"],vt={class:"image-preview-container"},ft=["src"],_t={class:"save-tips"},ht={class:"tip-text"},xt={key:0,class:"tip-desc"},yt={key:1,class:"wechat-tips"},bt={key:2,class:"wechat-tips"},wt={__name:"History",setup(kt){$e();const xe=Ee(),Q=h(!1),q=h([]),X=h(0),W=h(1),Z=h(10),M=h(""),S=h(""),C=h([]),J=h(!1),u=h(null),j=h(!1),O=h(!1),P=h(""),ee=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],de=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,d=()=>/micromessenger/i.test(navigator.userAgent),te=()=>/Android/i.test(navigator.userAgent),ye=Te(()=>{var i;if(!((i=u.value)!=null&&i.content))return"";let t=u.value.content,e=[];try{u.value.image_urls?(console.log("原始image_urls数据:",u.value.image_urls),e=JSON.parse(u.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(b){console.warn("解析图片URL失败:",b),console.warn("原始数据:",u.value.image_urls)}return console.log("游记内容中的图片标记:",t.match(/\[图(\d+)\]/g)),t=t.replace(/\[图(\d+)\]/g,(b,x)=>{const g=parseInt(x)-1;return console.log(`处理图片标记 ${b}, index: ${g}, imageUrls长度: ${e.length}`),g>=0&&g<e.length&&e[g]?(console.log(`显示实际图片: ${e[g]}`),`<img src="${e[g]}" alt="图片${x}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${b}`),`<div class="image-placeholder" style="
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
      </div>`)}),t}),$=async()=>{Q.value=!0;try{const t={page:W.value,limit:Z.value};M.value&&(t.search=M.value),S.value&&(t.model=S.value),C.value&&C.value.length===2&&(t.start_date=C.value[0],t.end_date=C.value[1]);const e=await _e.get("/travel-notes",{params:t});q.value=e.data.items||e.data,X.value=e.data.total||q.value.length}catch(t){console.error("加载游记失败:",t),y.error("加载游记失败")}finally{Q.value=!1}};let le=null;const ce=()=>{le&&clearTimeout(le),le=setTimeout(()=>{W.value=1,$()},500)},ue=t=>{u.value=t,J.value=!0},be=async(t,e)=>{switch(t){case"view":ue(e);break;case"share":pe(e);break;case"delete":await we(e);break}},pe=async t=>{if(!t.content){y.warning("没有可分享的内容");return}j.value=!0,y.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),i=d()?540:600,b=d()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${i}px;
      background: #fff;
      padding: ${b}px;
      padding-top: ${b+100}px;
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
    `;const R=document.createElement("div");R.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,R.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',g.appendChild(R),x.appendChild(g),e.appendChild(x);const N=document.createElement("div");N.style.cssText=`
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
    `;const L=document.createElement("div");L.style.cssText=`
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
    `;const E=xe.user,G=(E==null?void 0:E.username)||(E==null?void 0:E.email)||"旅行者";L.textContent=G.charAt(0).toUpperCase();const A=document.createElement("span");A.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,A.textContent=G,k.appendChild(L),k.appendChild(A);const Y=document.createElement("div");if(Y.style.cssText=`
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
      `,s.innerHTML=`📍 ${t.location}`,Y.appendChild(s)}const w=document.createElement("div");w.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,w.innerHTML=`🕒 ${ge(t.travel_date||t.created_at)}`,Y.appendChild(w),D.appendChild(k),D.appendChild(Y);const H=document.createElement("div");H.className="share-content",H.style.cssText=`
      font-size: ${d()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let T=t.content,U=[];try{t.image_urls&&(U=JSON.parse(t.image_urls))}catch(s){console.warn("解析图片URL失败:",s)}T=T.replace(/\[图(\d+)\]/g,(s,p)=>{const r=parseInt(p)-1;if(r>=0&&r<U.length&&U[r]){const V=d()?"480px":"540px";return`<img src="${U[r]}" alt="图片${p}" style="width: 100%; max-width: ${V}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${p}</div>`}),T=T.replace(/\n/g,"<br>"),H.innerHTML=T;const l=document.createElement("div");l.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,l.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(N),e.appendChild(D),e.appendChild(H),e.appendChild(l),document.body.appendChild(e);const F=e.querySelectorAll("img");console.log(`Found ${F.length} images in container`);const Ce=Array.from(F).map((s,p)=>new Promise(r=>{if(console.log(`Checking image ${p+1}:`,s.src.substring(0,50)+"..."),s.complete&&s.naturalWidth>0)console.log(`Image ${p+1} already loaded`),r();else{const V=()=>{console.log(`Image ${p+1} loaded successfully`),r()},I=()=>{console.warn(`Image ${p+1} failed to load`),r()};s.addEventListener("load",V,{once:!0}),s.addEventListener("error",I,{once:!0}),setTimeout(()=>{s.removeEventListener("load",V),s.removeEventListener("error",I),console.log(`Image ${p+1} load timeout, continuing...`),r()},1e4)}}));await Promise.all(Ce),console.log("All images processed");const ve=e.scrollHeight;let ae=d()?1.5:2,ne=d()?.8:.9;ve>8e3?(ae=d()?1.2:1.5,ne=d()?.7:.85,y.info("内容较长，正在优化图片质量以确保生成成功...")):ve>5e3&&(ae=d()?1.3:1.8,ne=d()?.75:.87);const fe={useCORS:!0,allowTaint:!0,scale:ae,backgroundColor:"#ffffff",logging:!0,width:i,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:s=>{console.log("Document cloned for html2canvas");const p=s.querySelectorAll("img");console.log(`Found ${p.length} images in cloned document`);const r=s.createElement("style");r.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${d()?"26px":"28px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,s.head.appendChild(r),s.querySelectorAll(".share-content").forEach(I=>{I.style.fontSize=d()?"30px":"32px",I.style.lineHeight="1.8",I.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",I.style.fontSize)})}};console.log("html2canvas options:",fe),console.log("Container dimensions:",{width:i}),await new Promise(s=>setTimeout(s,500));const K=await De(e,fe);if(console.log("Canvas generated:",{width:K.width,height:K.height}),K.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),K.toBlob(s=>{if(s){const p=URL.createObjectURL(s);if(de()&&(!d()||d()&&te()))if(d()&&te()){const r=new FileReader;r.onload=function(V){P.value=V.target.result,O.value=!0,y.success("图片已生成，请长按图片保存到相册")},r.readAsDataURL(s),URL.revokeObjectURL(p)}else P.value=p,O.value=!0,y.success("图片已生成，请长按图片保存到相册");else{const r=document.createElement("a");r.href=p,r.download=`旅行游记_${t.location||"未知地点"}_${ge(t.travel_date||t.created_at)}.jpg`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(p),d()?y.success("图片已生成，点击右上角●●●可转发给朋友"):y.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",ne)}catch(e){console.error("生成分享图片失败:",e),y.error("生成分享图片失败，请重试")}finally{j.value=!1}},we=async t=>{try{await Ne.confirm(`确定要删除游记"${t.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await _e.delete(`/travel-notes/${t.id}`),y.success("删除成功"),$()}catch(e){e!=="cancel"&&y.error("删除失败")}},oe=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ke=(t,e=120)=>{if(!t)return"暂无内容";const i=t.replace(/<[^>]*>/g,"");return i.length>e?i.substring(0,e)+"...":i},me=t=>{const e=ee.find(i=>i.value===t);return e?e.label:t},ge=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return ze(()=>{$()}),(t,e)=>{var U;const i=m("el-icon"),b=m("el-input"),x=m("el-col"),g=m("el-option"),R=m("el-select"),N=m("el-date-picker"),D=m("el-row"),k=m("el-button"),L=m("el-dropdown-item"),E=m("el-dropdown-menu"),G=m("el-dropdown"),A=m("el-tag"),Y=m("el-pagination"),w=m("el-descriptions-item"),H=m("el-descriptions"),T=m("el-dialog");return c(),v("div",Ye,[o("div",He,[o("div",Be,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=l=>t.$router.push("/dashboard"))},[o("div",je,[a(i,{size:"18"},{default:n(()=>[a(z(he))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])]),o("div",Oe,[o("div",Pe,[e[18]||(e[18]=o("div",{class:"mobile-history-title"},[o("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=l=>t.$router.push("/dashboard"))},[a(i,{size:"16"},{default:n(()=>[a(z(he))]),_:1})])])])]),o("div",Fe,[o("div",qe,[a(D,{gutter:16},{default:n(()=>[a(x,{span:8},{default:n(()=>[a(b,{modelValue:M.value,"onUpdate:modelValue":e[2]||(e[2]=l=>M.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ce},null,8,["modelValue"])]),_:1}),a(x,{span:8},{default:n(()=>[a(R,{modelValue:S.value,"onUpdate:modelValue":e[3]||(e[3]=l=>S.value=l),placeholder:"筛选模型",clearable:"",onChange:$},{default:n(()=>[a(g,{label:"全部模型",value:""}),(c(),v(se,null,ie(ee,l=>a(g,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(x,{span:8},{default:n(()=>[a(N,{modelValue:C.value,"onUpdate:modelValue":e[4]||(e[4]=l=>C.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$},null,8,["modelValue"])]),_:1})]),_:1})]),o("div",We,[o("div",Je,[a(b,{modelValue:M.value,"onUpdate:modelValue":e[5]||(e[5]=l=>M.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ce,class:"mobile-search-input"},null,8,["modelValue"])]),o("div",Ge,[a(R,{modelValue:S.value,"onUpdate:modelValue":e[6]||(e[6]=l=>S.value=l),placeholder:"筛选模型",clearable:"",onChange:$,class:"mobile-filter-select"},{default:n(()=>[a(g,{label:"全部模型",value:""}),(c(),v(se,null,ie(ee,l=>a(g,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a(N,{modelValue:C.value,"onUpdate:modelValue":e[7]||(e[7]=l=>C.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$,class:"mobile-date-picker"},null,8,["modelValue"])])])]),o("div",Ke,[Q.value?(c(),v("div",Qe,[a(i,{size:"48",class:"rotating"},{default:n(()=>[a(z(Me))]),_:1}),e[19]||(e[19]=o("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):q.value.length===0?(c(),v("div",Xe,[a(i,{size:"64"},{default:n(()=>[a(z(Le))]),_:1}),o("p",Ze,f(M.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(c(),v("div",et,[o("div",tt,[(c(!0),v(se,null,ie(q.value,l=>(c(),v("div",{key:l.id,class:"note-card-small",onClick:F=>ue(l)},[o("div",ot,[o("div",at,[o("h3",null,f(l.location||"未知地点"),1)]),a(G,{onCommand:F=>be(F,l),onClick:e[8]||(e[8]=Ve(()=>{},["stop"]))},{dropdown:n(()=>[a(E,null,{default:n(()=>[a(L,{command:"view"},{default:n(()=>e[20]||(e[20]=[_("查看详情")])),_:1,__:[20]}),a(L,{command:"share"},{default:n(()=>e[21]||(e[21]=[_("分享图片")])),_:1,__:[21]}),a(L,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[_("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[a(k,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[a(i,null,{default:n(()=>[a(z(Ue))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),o("div",nt,[l.model_used?(c(),re(A,{key:0,size:"small",type:"info"},{default:n(()=>[_(f(me(l.model_used)),1)]),_:2},1024)):B("",!0),l.writing_style?(c(),re(A,{key:1,size:"small",type:"success"},{default:n(()=>[_(f(l.writing_style),1)]),_:2},1024)):B("",!0)]),o("div",st,[o("p",null,f(ke(l.content,120)),1)]),o("div",it,[o("div",rt,[a(i,null,{default:n(()=>[a(z(Ie))]),_:1}),o("span",null,f(oe(l.travel_date||l.created_at)),1)]),l.companions?(c(),v("div",dt,[a(i,null,{default:n(()=>[a(z(Se))]),_:1}),o("span",null,f(l.companions),1)])):B("",!0)])],8,lt))),128))]),X.value>Z.value?(c(),v("div",ct,[a(Y,{"current-page":W.value,"onUpdate:currentPage":e[9]||(e[9]=l=>W.value=l),"page-size":Z.value,total:X.value,layout:"prev, pager, next, jumper",onCurrentChange:$},null,8,["current-page","page-size","total"])])):B("",!0)]))]),a(T,{modelValue:J.value,"onUpdate:modelValue":e[12]||(e[12]=l=>J.value=l),title:((U=u.value)==null?void 0:U.location)||"游记详情",width:de()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[a(k,{onClick:e[10]||(e[10]=l=>J.value=!1)},{default:n(()=>e[23]||(e[23]=[_("关闭")])),_:1,__:[23]}),a(k,{type:"primary",onClick:e[11]||(e[11]=l=>pe(u.value)),loading:j.value},{default:n(()=>[j.value?B("",!0):(c(),re(i,{key:0},{default:n(()=>[a(z(Re))]),_:1})),_(" "+f(j.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[u.value?(c(),v("div",ut,[o("div",pt,[a(H,{column:2,border:""},{default:n(()=>[a(w,{label:"地点"},{default:n(()=>[_(f(u.value.location||"未知"),1)]),_:1}),a(w,{label:"旅行日期"},{default:n(()=>[_(f(oe(u.value.travel_date)),1)]),_:1}),a(w,{label:"同行者"},{default:n(()=>[_(f(u.value.companions||"未填写"),1)]),_:1}),a(w,{label:"创建时间"},{default:n(()=>[_(f(oe(u.value.created_at)),1)]),_:1}),a(w,{label:"使用模型"},{default:n(()=>[_(f(me(u.value.model_used)),1)]),_:1}),a(w,{label:"写作风格"},{default:n(()=>[_(f(u.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),o("div",mt,[o("div",{class:"result-content",innerHTML:ye.value},null,8,gt)])])):B("",!0)]),_:1},8,["modelValue","title","width"]),a(T,{modelValue:O.value,"onUpdate:modelValue":e[14]||(e[14]=l=>O.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(P.value),P.value=""})},{footer:n(()=>[a(k,{onClick:e[13]||(e[13]=l=>O.value=!1),type:"primary"},{default:n(()=>e[28]||(e[28]=[_("知道了")])),_:1,__:[28]})]),default:n(()=>[o("div",vt,[o("img",{src:P.value,alt:"分享图片",class:"preview-image"},null,8,ft),o("div",_t,[e[27]||(e[27]=o("div",{class:"tip-icon"},"💾",-1)),o("div",ht,[e[26]||(e[26]=o("p",{class:"tip-title"},"保存图片到相册",-1)),d()?te()?(c(),v("div",yt,e[24]||(e[24]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),o("p",{class:"tip-desc"},'• 点击右上角"●●●"分享给朋友或朋友圈',-1),o("p",{class:"tip-desc"},"• 如果长按无效，请尝试截屏保存",-1)]))):(c(),v("div",bt,e[25]||(e[25]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),o("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(c(),v("p",xt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},Tt=Ae(wt,[["__scopeId","data-v-1fb63e8a"]]);export{Tt as default};
