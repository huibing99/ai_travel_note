import{u as Ce,a as $e,r as _,j as Te,k as Ee,c as d,o as c,d as h,e as a,f as o,w as n,t as f,F as ne,m as se,l as S,p as fe,E as w,h as z,N as _e,C as ze,q as Ve,i as u,D as Me,G as Le,H as ie,I as Ue,x as De,J as Ie,n as Ne}from"./index-1b63e7ef.js";import{h as Ye}from"./html2canvas.esm-85f1a6b6.js";import{_ as He}from"./_plugin-vue_export-helper-c27b6911.js";const Se={class:"dashboard-container"},Re={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Ae={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Be={class:"back-icon"},Pe={class:"mobile-only"},je={class:"mobile-history-header"},Oe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},We={class:"mobile-hidden"},qe={class:"mobile-only"},Fe={class:"mobile-search-section"},Je={class:"mobile-filters"},Ge={class:"dashboard-card",style:{padding:"30px"}},Ke={key:0,style:{"text-align":"center",padding:"60px"}},Qe={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Xe={style:{margin:"20px 0 0 0","font-size":"16px"}},Ze={key:2},et={class:"notes-grid"},tt=["onClick"],lt={class:"card-header"},ot={class:"location-title"},at={class:"card-tags"},nt={class:"card-content"},st={class:"card-footer"},it={class:"date-info"},rt={key:0,class:"companions-info"},dt={key:0,style:{"text-align":"center","margin-top":"30px"}},ct={key:0,class:"note-detail"},ut={style:{"margin-bottom":"20px"}},pt={class:"generate-result"},mt=["innerHTML"],gt={class:"image-preview-container"},vt=["src"],ft={class:"save-tips"},_t={class:"tip-text"},ht={class:"tip-title"},xt={key:0,class:"tip-desc"},bt={key:1,class:"wechat-tips"},yt={__name:"History",setup(wt){Ce();const he=$e(),Q=_(!1),O=_([]),X=_(0),W=_(1),Z=_(10),V=_(""),U=_(""),C=_([]),q=_(!1),r=_(null),R=_(!1),F=_(!1),J=_(""),ee=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],re=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,p=()=>/micromessenger/i.test(navigator.userAgent),xe=Te(()=>{var s;if(!((s=r.value)!=null&&s.content))return"";let t=r.value.content,e=[];try{r.value.image_urls?(console.log("原始image_urls数据:",r.value.image_urls),e=JSON.parse(r.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(b){console.warn("解析图片URL失败:",b),console.warn("原始数据:",r.value.image_urls)}return console.log("游记内容中的图片标记:",t.match(/\[图(\d+)\]/g)),t=t.replace(/\[图(\d+)\]/g,(b,x)=>{const m=parseInt(x)-1;return console.log(`处理图片标记 ${b}, index: ${m}, imageUrls长度: ${e.length}`),m>=0&&m<e.length&&e[m]?(console.log(`显示实际图片: ${e[m]}`),`<img src="${e[m]}" alt="图片${x}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${b}`),`<div class="image-placeholder" style="
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
      </div>`)}),t}),$=async()=>{Q.value=!0;try{const t={page:W.value,limit:Z.value};V.value&&(t.search=V.value),U.value&&(t.model=U.value),C.value&&C.value.length===2&&(t.start_date=C.value[0],t.end_date=C.value[1]);const e=await fe.get("/travel-notes",{params:t});O.value=e.data.items||e.data,X.value=e.data.total||O.value.length}catch(t){console.error("加载游记失败:",t),w.error("加载游记失败")}finally{Q.value=!1}};let te=null;const de=()=>{te&&clearTimeout(te),te=setTimeout(()=>{W.value=1,$()},500)},ce=t=>{r.value=t,q.value=!0},be=async(t,e)=>{switch(t){case"view":ce(e);break;case"share":ue(e);break;case"delete":await ye(e);break}},ue=async t=>{if(!t.content){w.warning("没有可分享的内容");return}R.value=!0,w.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),s=p()?540:600,b=p()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${s}px;
      background: #fff;
      padding: ${b}px;
      padding-top: ${b+100}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `;const x=document.createElement("div");x.style.cssText=`
      margin-bottom: 30px;
      text-align: right;
      padding: 0;
      background: transparent;
    `;const m=document.createElement("div");m.style.cssText=`
      display: inline-block;
      text-align: right;
    `;const D=document.createElement("div");D.style.cssText=`
      font-size: 15px;
      color: #666;
      line-height: 1.3;
      font-weight: 500;
    `,D.innerHTML='点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友',m.appendChild(D),x.appendChild(m),e.appendChild(x);const I=document.createElement("div");I.style.cssText=`
      font-size: ${p()?"28px":"32px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 18px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,I.textContent=`✨ ${t.location||"旅行游记"}`;const N=document.createElement("div");N.style.cssText=`
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
    `;const M=document.createElement("div");M.style.cssText=`
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
    `;const T=he.user,G=(T==null?void 0:T.username)||(T==null?void 0:T.email)||"旅行者";M.textContent=G.charAt(0).toUpperCase();const Y=document.createElement("span");Y.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,Y.textContent=G,k.appendChild(M),k.appendChild(Y);const H=document.createElement("div");if(H.style.cssText=`
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
      `,i.innerHTML=`📍 ${t.location}`,H.appendChild(i)}const y=document.createElement("div");y.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,y.innerHTML=`🕒 ${me(t.travel_date||t.created_at)}`,H.appendChild(y),N.appendChild(k),N.appendChild(H);const A=document.createElement("div");A.style.cssText=`
      font-size: ${p()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let E=t.content,L=[];try{t.image_urls&&(L=JSON.parse(t.image_urls))}catch(i){console.warn("解析图片URL失败:",i)}E=E.replace(/\[图(\d+)\]/g,(i,g)=>{const v=parseInt(g)-1;if(v>=0&&v<L.length&&L[v]){const K=p()?"480px":"540px";return`<img src="${L[v]}" alt="图片${g}" style="width: 100%; max-width: ${K}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${g}</div>`}),E=E.replace(/\n/g,"<br>"),A.innerHTML=E;const l=document.createElement("div");l.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,l.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(I),e.appendChild(N),e.appendChild(A),e.appendChild(l),document.body.appendChild(e);const B=e.querySelectorAll("img");console.log(`Found ${B.length} images in container`);const ke=Array.from(B).map((i,g)=>new Promise(v=>{if(console.log(`Checking image ${g+1}:`,i.src.substring(0,50)+"..."),i.complete&&i.naturalWidth>0)console.log(`Image ${g+1} already loaded`),v();else{const K=()=>{console.log(`Image ${g+1} loaded successfully`),v()},ve=()=>{console.warn(`Image ${g+1} failed to load`),v()};i.addEventListener("load",K,{once:!0}),i.addEventListener("error",ve,{once:!0}),setTimeout(()=>{i.removeEventListener("load",K),i.removeEventListener("error",ve),console.log(`Image ${g+1} load timeout, continuing...`),v()},1e4)}}));await Promise.all(ke),console.log("All images processed");const P=e.scrollHeight;let oe=p()?1.5:2,ae=p()?.8:.9;P>8e3?(oe=p()?1.2:1.5,ae=p()?.7:.85,w.info("内容较长，正在优化图片质量以确保生成成功...")):P>5e3&&(oe=p()?1.3:1.8,ae=p()?.75:.87);const ge={useCORS:!0,allowTaint:!0,scale:oe,backgroundColor:"#ffffff",logging:!0,width:s,height:P,scrollX:0,scrollY:0,windowWidth:s,windowHeight:P,foreignObjectRendering:!1,imageTimeout:15e3,onclone:i=>{console.log("Document cloned for html2canvas");const g=i.querySelectorAll("img");console.log(`Found ${g.length} images in cloned document`)}};console.log("html2canvas options:",ge),console.log("Container dimensions:",{width:s,height:P}),await new Promise(i=>setTimeout(i,500));const j=await Ye(e,ge);if(console.log("Canvas generated:",{width:j.width,height:j.height}),j.width===0||j.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),j.toBlob(i=>{if(i){const g=URL.createObjectURL(i);if(re()&&!p())J.value=g,F.value=!0,w.success("图片已生成，请长按图片保存到相册");else{const v=document.createElement("a");v.href=g,v.download=`旅行游记_${t.location||"未知地点"}_${me(t.travel_date||t.created_at)}.png`,document.body.appendChild(v),v.click(),document.body.removeChild(v),URL.revokeObjectURL(g),p()?w.success("图片已生成，点击右上角●●●可转发给朋友"):w.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",ae)}catch(e){console.error("生成分享图片失败:",e),w.error("生成分享图片失败，请重试")}finally{R.value=!1}},ye=async t=>{try{await Ne.confirm(`确定要删除游记"${t.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await fe.delete(`/travel-notes/${t.id}`),w.success("删除成功"),$()}catch(e){e!=="cancel"&&w.error("删除失败")}},le=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",we=(t,e=120)=>{if(!t)return"暂无内容";const s=t.replace(/<[^>]*>/g,"");return s.length>e?s.substring(0,e)+"...":s},pe=t=>{const e=ee.find(s=>s.value===t);return e?e.label:t},me=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return Ee(()=>{$()}),(t,e)=>{var L;const s=d("el-icon"),b=d("el-input"),x=d("el-col"),m=d("el-option"),D=d("el-select"),I=d("el-date-picker"),N=d("el-row"),k=d("el-button"),M=d("el-dropdown-item"),T=d("el-dropdown-menu"),G=d("el-dropdown"),Y=d("el-tag"),H=d("el-pagination"),y=d("el-descriptions-item"),A=d("el-descriptions"),E=d("el-dialog");return c(),h("div",Se,[a("div",Re,[a("div",Ae,[e[17]||(e[17]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=l=>t.$router.push("/dashboard"))},[a("div",Be,[o(s,{size:"18"},{default:n(()=>[o(z(_e))]),_:1})]),e[16]||(e[16]=a("span",{class:"back-text"},"返回首页",-1))])]),a("div",Pe,[a("div",je,[e[18]||(e[18]=a("div",{class:"mobile-history-title"},[a("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=l=>t.$router.push("/dashboard"))},[o(s,{size:"16"},{default:n(()=>[o(z(_e))]),_:1})])])])]),a("div",Oe,[a("div",We,[o(N,{gutter:16},{default:n(()=>[o(x,{span:8},{default:n(()=>[o(b,{modelValue:V.value,"onUpdate:modelValue":e[2]||(e[2]=l=>V.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:de},null,8,["modelValue"])]),_:1}),o(x,{span:8},{default:n(()=>[o(D,{modelValue:U.value,"onUpdate:modelValue":e[3]||(e[3]=l=>U.value=l),placeholder:"筛选模型",clearable:"",onChange:$},{default:n(()=>[o(m,{label:"全部模型",value:""}),(c(),h(ne,null,se(ee,l=>o(m,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(x,{span:8},{default:n(()=>[o(I,{modelValue:C.value,"onUpdate:modelValue":e[4]||(e[4]=l=>C.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$},null,8,["modelValue"])]),_:1})]),_:1})]),a("div",qe,[a("div",Fe,[o(b,{modelValue:V.value,"onUpdate:modelValue":e[5]||(e[5]=l=>V.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:de,class:"mobile-search-input"},null,8,["modelValue"])]),a("div",Je,[o(D,{modelValue:U.value,"onUpdate:modelValue":e[6]||(e[6]=l=>U.value=l),placeholder:"筛选模型",clearable:"",onChange:$,class:"mobile-filter-select"},{default:n(()=>[o(m,{label:"全部模型",value:""}),(c(),h(ne,null,se(ee,l=>o(m,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),o(I,{modelValue:C.value,"onUpdate:modelValue":e[7]||(e[7]=l=>C.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$,class:"mobile-date-picker"},null,8,["modelValue"])])])]),a("div",Ge,[Q.value?(c(),h("div",Ke,[o(s,{size:"48",class:"rotating"},{default:n(()=>[o(z(ze))]),_:1}),e[19]||(e[19]=a("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):O.value.length===0?(c(),h("div",Qe,[o(s,{size:"64"},{default:n(()=>[o(z(Ve))]),_:1}),a("p",Xe,f(V.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(c(),h("div",Ze,[a("div",et,[(c(!0),h(ne,null,se(O.value,l=>(c(),h("div",{key:l.id,class:"note-card-small",onClick:B=>ce(l)},[a("div",lt,[a("div",ot,[a("h3",null,f(l.location||"未知地点"),1)]),o(G,{onCommand:B=>be(B,l),onClick:e[8]||(e[8]=Le(()=>{},["stop"]))},{dropdown:n(()=>[o(T,null,{default:n(()=>[o(M,{command:"view"},{default:n(()=>e[20]||(e[20]=[u("查看详情")])),_:1,__:[20]}),o(M,{command:"share"},{default:n(()=>e[21]||(e[21]=[u("分享图片")])),_:1,__:[21]}),o(M,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[u("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[o(k,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[o(s,null,{default:n(()=>[o(z(Me))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),a("div",at,[l.model_used?(c(),ie(Y,{key:0,size:"small",type:"info"},{default:n(()=>[u(f(pe(l.model_used)),1)]),_:2},1024)):S("",!0),l.writing_style?(c(),ie(Y,{key:1,size:"small",type:"success"},{default:n(()=>[u(f(l.writing_style),1)]),_:2},1024)):S("",!0)]),a("div",nt,[a("p",null,f(we(l.content,120)),1)]),a("div",st,[a("div",it,[o(s,null,{default:n(()=>[o(z(Ue))]),_:1}),a("span",null,f(le(l.travel_date||l.created_at)),1)]),l.companions?(c(),h("div",rt,[o(s,null,{default:n(()=>[o(z(De))]),_:1}),a("span",null,f(l.companions),1)])):S("",!0)])],8,tt))),128))]),X.value>Z.value?(c(),h("div",dt,[o(H,{"current-page":W.value,"onUpdate:currentPage":e[9]||(e[9]=l=>W.value=l),"page-size":Z.value,total:X.value,layout:"prev, pager, next, jumper",onCurrentChange:$},null,8,["current-page","page-size","total"])])):S("",!0)]))]),o(E,{modelValue:q.value,"onUpdate:modelValue":e[12]||(e[12]=l=>q.value=l),title:((L=r.value)==null?void 0:L.location)||"游记详情",width:re()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[o(k,{onClick:e[10]||(e[10]=l=>q.value=!1)},{default:n(()=>e[23]||(e[23]=[u("关闭")])),_:1,__:[23]}),o(k,{type:"primary",onClick:e[11]||(e[11]=l=>ue(r.value)),loading:R.value},{default:n(()=>[R.value?S("",!0):(c(),ie(s,{key:0},{default:n(()=>[o(z(Ie))]),_:1})),u(" "+f(R.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[r.value?(c(),h("div",ct,[a("div",ut,[o(A,{column:2,border:""},{default:n(()=>[o(y,{label:"地点"},{default:n(()=>[u(f(r.value.location||"未知"),1)]),_:1}),o(y,{label:"旅行日期"},{default:n(()=>[u(f(le(r.value.travel_date)),1)]),_:1}),o(y,{label:"同行者"},{default:n(()=>[u(f(r.value.companions||"未填写"),1)]),_:1}),o(y,{label:"创建时间"},{default:n(()=>[u(f(le(r.value.created_at)),1)]),_:1}),o(y,{label:"使用模型"},{default:n(()=>[u(f(pe(r.value.model_used)),1)]),_:1}),o(y,{label:"写作风格"},{default:n(()=>[u(f(r.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),a("div",pt,[a("div",{class:"result-content",innerHTML:xe.value},null,8,mt)])])):S("",!0)]),_:1},8,["modelValue","title","width"]),o(E,{modelValue:F.value,"onUpdate:modelValue":e[14]||(e[14]=l=>F.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(J.value),J.value=""})},{footer:n(()=>[o(k,{onClick:e[13]||(e[13]=l=>F.value=!1),type:"primary"},{default:n(()=>e[26]||(e[26]=[u("知道了")])),_:1,__:[26]})]),default:n(()=>[a("div",gt,[a("img",{src:J.value,alt:"分享图片",class:"preview-image"},null,8,vt),a("div",ft,[e[25]||(e[25]=a("div",{class:"tip-icon"},"💾",-1)),a("div",_t,[a("p",ht,f(p()?"分享给朋友":"长按图片保存到相册"),1),p()?(c(),h("div",bt,e[24]||(e[24]=[a("p",{class:"tip-desc"},[u("• 点击右上角 "),a("strong",null,"●●●"),u(" 转发给朋友")],-1),a("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),a("p",{class:"tip-desc"},"• 或者截屏保存到相册",-1)]))):(c(),h("p",xt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},Tt=He(yt,[["__scopeId","data-v-ed24440c"]]);export{Tt as default};
