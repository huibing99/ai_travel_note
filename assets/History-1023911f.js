import{u as $e,a as Ee,r as h,j as Te,k as ze,c as p,o as c,d as v,e as o,f as a,w as n,t as f,F as ne,m as se,l as H,p as _e,E as w,h as z,N as he,C as Me,q as Ve,i as _,D as Le,G as Ue,H as ie,I as Ie,x as Se,J as Ne,n as De}from"./index-c9faa4d3.js";import{h as Re}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ye}from"./_plugin-vue_export-helper-c27b6911.js";const Ae={class:"dashboard-container"},He={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Be={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},je={class:"back-icon"},Pe={class:"mobile-only"},Oe={class:"mobile-history-header"},Fe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},qe={class:"mobile-hidden"},We={class:"mobile-only"},Je={class:"mobile-search-section"},Ge={class:"mobile-filters"},Ke={class:"dashboard-card",style:{padding:"30px"}},Qe={key:0,style:{"text-align":"center",padding:"60px"}},Xe={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Ze={style:{margin:"20px 0 0 0","font-size":"16px"}},et={key:2},tt={class:"notes-grid"},lt=["onClick"],ot={class:"card-header"},at={class:"location-title"},nt={class:"card-tags"},st={class:"card-content"},it={class:"card-footer"},rt={class:"date-info"},dt={key:0,class:"companions-info"},ct={key:0,style:{"text-align":"center","margin-top":"30px"}},ut={key:0,class:"note-detail"},pt={style:{"margin-bottom":"20px"}},mt={class:"generate-result"},gt=["innerHTML"],vt={class:"image-preview-container"},ft=["src"],_t={class:"save-tips"},ht={class:"tip-text"},xt={key:0,class:"tip-desc"},yt={key:1,class:"wechat-tips"},bt={key:2,class:"wechat-tips"},wt={__name:"History",setup(kt){$e();const xe=Ee(),Q=h(!1),O=h([]),X=h(0),F=h(1),Z=h(10),M=h(""),I=h(""),C=h([]),q=h(!1),u=h(null),B=h(!1),W=h(!1),J=h(""),ee=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],re=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,d=()=>/micromessenger/i.test(navigator.userAgent),de=()=>/Android/i.test(navigator.userAgent),ye=Te(()=>{var i;if(!((i=u.value)!=null&&i.content))return"";let t=u.value.content,e=[];try{u.value.image_urls?(console.log("原始image_urls数据:",u.value.image_urls),e=JSON.parse(u.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(y){console.warn("解析图片URL失败:",y),console.warn("原始数据:",u.value.image_urls)}return console.log("游记内容中的图片标记:",t.match(/\[图(\d+)\]/g)),t=t.replace(/\[图(\d+)\]/g,(y,x)=>{const m=parseInt(x)-1;return console.log(`处理图片标记 ${y}, index: ${m}, imageUrls长度: ${e.length}`),m>=0&&m<e.length&&e[m]?(console.log(`显示实际图片: ${e[m]}`),`<img src="${e[m]}" alt="图片${x}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${y}`),`<div class="image-placeholder" style="
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
      </div>`)}),t}),$=async()=>{Q.value=!0;try{const t={page:F.value,limit:Z.value};M.value&&(t.search=M.value),I.value&&(t.model=I.value),C.value&&C.value.length===2&&(t.start_date=C.value[0],t.end_date=C.value[1]);const e=await _e.get("/travel-notes",{params:t});O.value=e.data.items||e.data,X.value=e.data.total||O.value.length}catch(t){console.error("加载游记失败:",t),w.error("加载游记失败")}finally{Q.value=!1}};let te=null;const ce=()=>{te&&clearTimeout(te),te=setTimeout(()=>{F.value=1,$()},500)},ue=t=>{u.value=t,q.value=!0},be=async(t,e)=>{switch(t){case"view":ue(e);break;case"share":pe(e);break;case"delete":await we(e);break}},pe=async t=>{if(!t.content){w.warning("没有可分享的内容");return}B.value=!0,w.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),i=d()?540:600,y=d()?20:30;e.style.cssText=`
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
    `;const m=document.createElement("div");m.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const S=document.createElement("div");S.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,S.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',m.appendChild(S),x.appendChild(m),e.appendChild(x);const N=document.createElement("div");N.style.cssText=`
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
    `;const E=xe.user,G=(E==null?void 0:E.username)||(E==null?void 0:E.email)||"旅行者";V.textContent=G.charAt(0).toUpperCase();const R=document.createElement("span");R.style.cssText=`
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
    `,b.innerHTML=`🕒 ${ge(t.travel_date||t.created_at)}`,Y.appendChild(b),D.appendChild(k),D.appendChild(Y);const A=document.createElement("div");A.className="share-content",A.style.cssText=`
      font-size: ${d()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let T=t.content,L=[];try{t.image_urls&&(L=JSON.parse(t.image_urls))}catch(s){console.warn("解析图片URL失败:",s)}T=T.replace(/\[图(\d+)\]/g,(s,g)=>{const r=parseInt(g)-1;if(r>=0&&r<L.length&&L[r]){const P=d()?"480px":"540px";return`<img src="${L[r]}" alt="图片${g}" style="width: 100%; max-width: ${P}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${g}</div>`}),T=T.replace(/\n/g,"<br>"),A.innerHTML=T;const l=document.createElement("div");l.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,l.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(N),e.appendChild(D),e.appendChild(A),e.appendChild(l),document.body.appendChild(e);const j=e.querySelectorAll("img");console.log(`Found ${j.length} images in container`);const Ce=Array.from(j).map((s,g)=>new Promise(r=>{if(console.log(`Checking image ${g+1}:`,s.src.substring(0,50)+"..."),s.complete&&s.naturalWidth>0)console.log(`Image ${g+1} already loaded`),r();else{const P=()=>{console.log(`Image ${g+1} loaded successfully`),r()},U=()=>{console.warn(`Image ${g+1} failed to load`),r()};s.addEventListener("load",P,{once:!0}),s.addEventListener("error",U,{once:!0}),setTimeout(()=>{s.removeEventListener("load",P),s.removeEventListener("error",U),console.log(`Image ${g+1} load timeout, continuing...`),r()},1e4)}}));await Promise.all(Ce),console.log("All images processed");const ve=e.scrollHeight;let oe=d()?1.5:2,ae=d()?.8:.9;ve>8e3?(oe=d()?1.2:1.5,ae=d()?.7:.85,w.info("内容较长，正在优化图片质量以确保生成成功...")):ve>5e3&&(oe=d()?1.3:1.8,ae=d()?.75:.87);const fe={useCORS:!0,allowTaint:!0,scale:oe,backgroundColor:"#ffffff",logging:!0,width:i,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:s=>{console.log("Document cloned for html2canvas");const g=s.querySelectorAll("img");console.log(`Found ${g.length} images in cloned document`);const r=s.createElement("style");r.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${d()?"26px":"28px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,s.head.appendChild(r),s.querySelectorAll(".share-content").forEach(U=>{U.style.fontSize=d()?"30px":"32px",U.style.lineHeight="1.8",U.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",U.style.fontSize)})}};console.log("html2canvas options:",fe),console.log("Container dimensions:",{width:i}),await new Promise(s=>setTimeout(s,500));const K=await Re(e,fe);if(console.log("Canvas generated:",{width:K.width,height:K.height}),K.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),K.toBlob(s=>{if(s){const g=URL.createObjectURL(s);if(re()&&(!d()||d()&&de()))J.value=g,W.value=!0,w.success("图片已生成，请长按图片保存到相册");else{const r=document.createElement("a");r.href=g,r.download=`旅行游记_${t.location||"未知地点"}_${ge(t.travel_date||t.created_at)}.jpg`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(g),d()?w.success("图片已生成，点击右上角●●●可转发给朋友"):w.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",ae)}catch(e){console.error("生成分享图片失败:",e),w.error("生成分享图片失败，请重试")}finally{B.value=!1}},we=async t=>{try{await De.confirm(`确定要删除游记"${t.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await _e.delete(`/travel-notes/${t.id}`),w.success("删除成功"),$()}catch(e){e!=="cancel"&&w.error("删除失败")}},le=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ke=(t,e=120)=>{if(!t)return"暂无内容";const i=t.replace(/<[^>]*>/g,"");return i.length>e?i.substring(0,e)+"...":i},me=t=>{const e=ee.find(i=>i.value===t);return e?e.label:t},ge=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return ze(()=>{$()}),(t,e)=>{var L;const i=p("el-icon"),y=p("el-input"),x=p("el-col"),m=p("el-option"),S=p("el-select"),N=p("el-date-picker"),D=p("el-row"),k=p("el-button"),V=p("el-dropdown-item"),E=p("el-dropdown-menu"),G=p("el-dropdown"),R=p("el-tag"),Y=p("el-pagination"),b=p("el-descriptions-item"),A=p("el-descriptions"),T=p("el-dialog");return c(),v("div",Ae,[o("div",He,[o("div",Be,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=l=>t.$router.push("/dashboard"))},[o("div",je,[a(i,{size:"18"},{default:n(()=>[a(z(he))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])]),o("div",Pe,[o("div",Oe,[e[18]||(e[18]=o("div",{class:"mobile-history-title"},[o("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=l=>t.$router.push("/dashboard"))},[a(i,{size:"16"},{default:n(()=>[a(z(he))]),_:1})])])])]),o("div",Fe,[o("div",qe,[a(D,{gutter:16},{default:n(()=>[a(x,{span:8},{default:n(()=>[a(y,{modelValue:M.value,"onUpdate:modelValue":e[2]||(e[2]=l=>M.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ce},null,8,["modelValue"])]),_:1}),a(x,{span:8},{default:n(()=>[a(S,{modelValue:I.value,"onUpdate:modelValue":e[3]||(e[3]=l=>I.value=l),placeholder:"筛选模型",clearable:"",onChange:$},{default:n(()=>[a(m,{label:"全部模型",value:""}),(c(),v(ne,null,se(ee,l=>a(m,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(x,{span:8},{default:n(()=>[a(N,{modelValue:C.value,"onUpdate:modelValue":e[4]||(e[4]=l=>C.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$},null,8,["modelValue"])]),_:1})]),_:1})]),o("div",We,[o("div",Je,[a(y,{modelValue:M.value,"onUpdate:modelValue":e[5]||(e[5]=l=>M.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ce,class:"mobile-search-input"},null,8,["modelValue"])]),o("div",Ge,[a(S,{modelValue:I.value,"onUpdate:modelValue":e[6]||(e[6]=l=>I.value=l),placeholder:"筛选模型",clearable:"",onChange:$,class:"mobile-filter-select"},{default:n(()=>[a(m,{label:"全部模型",value:""}),(c(),v(ne,null,se(ee,l=>a(m,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a(N,{modelValue:C.value,"onUpdate:modelValue":e[7]||(e[7]=l=>C.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$,class:"mobile-date-picker"},null,8,["modelValue"])])])]),o("div",Ke,[Q.value?(c(),v("div",Qe,[a(i,{size:"48",class:"rotating"},{default:n(()=>[a(z(Me))]),_:1}),e[19]||(e[19]=o("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):O.value.length===0?(c(),v("div",Xe,[a(i,{size:"64"},{default:n(()=>[a(z(Ve))]),_:1}),o("p",Ze,f(M.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(c(),v("div",et,[o("div",tt,[(c(!0),v(ne,null,se(O.value,l=>(c(),v("div",{key:l.id,class:"note-card-small",onClick:j=>ue(l)},[o("div",ot,[o("div",at,[o("h3",null,f(l.location||"未知地点"),1)]),a(G,{onCommand:j=>be(j,l),onClick:e[8]||(e[8]=Ue(()=>{},["stop"]))},{dropdown:n(()=>[a(E,null,{default:n(()=>[a(V,{command:"view"},{default:n(()=>e[20]||(e[20]=[_("查看详情")])),_:1,__:[20]}),a(V,{command:"share"},{default:n(()=>e[21]||(e[21]=[_("分享图片")])),_:1,__:[21]}),a(V,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[_("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[a(k,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[a(i,null,{default:n(()=>[a(z(Le))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),o("div",nt,[l.model_used?(c(),ie(R,{key:0,size:"small",type:"info"},{default:n(()=>[_(f(me(l.model_used)),1)]),_:2},1024)):H("",!0),l.writing_style?(c(),ie(R,{key:1,size:"small",type:"success"},{default:n(()=>[_(f(l.writing_style),1)]),_:2},1024)):H("",!0)]),o("div",st,[o("p",null,f(ke(l.content,120)),1)]),o("div",it,[o("div",rt,[a(i,null,{default:n(()=>[a(z(Ie))]),_:1}),o("span",null,f(le(l.travel_date||l.created_at)),1)]),l.companions?(c(),v("div",dt,[a(i,null,{default:n(()=>[a(z(Se))]),_:1}),o("span",null,f(l.companions),1)])):H("",!0)])],8,lt))),128))]),X.value>Z.value?(c(),v("div",ct,[a(Y,{"current-page":F.value,"onUpdate:currentPage":e[9]||(e[9]=l=>F.value=l),"page-size":Z.value,total:X.value,layout:"prev, pager, next, jumper",onCurrentChange:$},null,8,["current-page","page-size","total"])])):H("",!0)]))]),a(T,{modelValue:q.value,"onUpdate:modelValue":e[12]||(e[12]=l=>q.value=l),title:((L=u.value)==null?void 0:L.location)||"游记详情",width:re()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[a(k,{onClick:e[10]||(e[10]=l=>q.value=!1)},{default:n(()=>e[23]||(e[23]=[_("关闭")])),_:1,__:[23]}),a(k,{type:"primary",onClick:e[11]||(e[11]=l=>pe(u.value)),loading:B.value},{default:n(()=>[B.value?H("",!0):(c(),ie(i,{key:0},{default:n(()=>[a(z(Ne))]),_:1})),_(" "+f(B.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[u.value?(c(),v("div",ut,[o("div",pt,[a(A,{column:2,border:""},{default:n(()=>[a(b,{label:"地点"},{default:n(()=>[_(f(u.value.location||"未知"),1)]),_:1}),a(b,{label:"旅行日期"},{default:n(()=>[_(f(le(u.value.travel_date)),1)]),_:1}),a(b,{label:"同行者"},{default:n(()=>[_(f(u.value.companions||"未填写"),1)]),_:1}),a(b,{label:"创建时间"},{default:n(()=>[_(f(le(u.value.created_at)),1)]),_:1}),a(b,{label:"使用模型"},{default:n(()=>[_(f(me(u.value.model_used)),1)]),_:1}),a(b,{label:"写作风格"},{default:n(()=>[_(f(u.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),o("div",mt,[o("div",{class:"result-content",innerHTML:ye.value},null,8,gt)])])):H("",!0)]),_:1},8,["modelValue","title","width"]),a(T,{modelValue:W.value,"onUpdate:modelValue":e[14]||(e[14]=l=>W.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(J.value),J.value=""})},{footer:n(()=>[a(k,{onClick:e[13]||(e[13]=l=>W.value=!1),type:"primary"},{default:n(()=>e[28]||(e[28]=[_("知道了")])),_:1,__:[28]})]),default:n(()=>[o("div",vt,[o("img",{src:J.value,alt:"分享图片",class:"preview-image"},null,8,ft),o("div",_t,[e[27]||(e[27]=o("div",{class:"tip-icon"},"💾",-1)),o("div",ht,[e[26]||(e[26]=o("p",{class:"tip-title"},"保存图片到相册",-1)),d()?de()?(c(),v("div",yt,e[24]||(e[24]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),o("p",{class:"tip-desc"},"• 如果无法保存，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"●●●"分享给朋友',-1)]))):(c(),v("div",bt,e[25]||(e[25]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),o("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(c(),v("p",xt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},Tt=Ye(wt,[["__scopeId","data-v-5a8fa457"]]);export{Tt as default};
