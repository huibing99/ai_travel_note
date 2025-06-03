import{u as Ee,a as ze,r as _,j as Ve,k as Me,c,o as u,d as x,e as a,f as o,w as n,t as v,F as ie,m as re,l as R,q as he,E as b,h as V,O as be,D as Le,s as Ie,i as p,G as Ue,H as De,I as de,J as Ne,y as Ye,K as He,p as Se}from"./index-9ad76b7c.js";import{h as Re}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ae}from"./_plugin-vue_export-helper-c27b6911.js";const Pe={class:"dashboard-container"},Be={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Oe={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},je={class:"back-icon"},We={class:"mobile-only"},qe={class:"mobile-history-header"},Fe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Je={class:"mobile-hidden"},Ge={class:"mobile-only"},Ke={class:"mobile-search-section"},Qe={class:"mobile-filters"},Xe={class:"dashboard-card",style:{padding:"30px"}},Ze={key:0,style:{"text-align":"center",padding:"60px"}},et={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},tt={style:{margin:"20px 0 0 0","font-size":"16px"}},lt={key:2},ot={class:"notes-grid"},at=["onClick"],nt={class:"card-header"},st={class:"location-title"},it={class:"card-tags"},rt={class:"card-content"},dt={class:"card-footer"},ct={class:"date-info"},ut={key:0,class:"companions-info"},pt={key:0,style:{"text-align":"center","margin-top":"30px"}},mt={key:0,class:"note-detail"},gt={style:{"margin-bottom":"20px"}},vt={class:"generate-result"},ft=["innerHTML"],_t={class:"image-preview-container"},xt=["src"],ht={class:"save-tips"},bt={class:"tip-text"},yt={class:"tip-title"},wt={key:0,class:"tip-desc"},kt={key:1,class:"wechat-tips"},Ct={__name:"History",setup(Tt){Ee();const ye=ze(),X=_(!1),W=_([]),Z=_(0),q=_(1),ee=_(10),M=_(""),U=_(""),k=_([]),F=_(!1),r=_(null),A=_(!1),J=_(!1),G=_(""),te=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ce=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,d=()=>/micromessenger/i.test(navigator.userAgent),we=Ve(()=>{var s;if(!((s=r.value)!=null&&s.content))return"";let t=r.value.content,e=[];try{r.value.image_urls?(console.log("原始image_urls数据:",r.value.image_urls),e=JSON.parse(r.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(y){console.warn("解析图片URL失败:",y),console.warn("原始数据:",r.value.image_urls)}return console.log("游记内容中的图片标记:",t.match(/\[图(\d+)\]/g)),t=t.replace(/\[图(\d+)\]/g,(y,h)=>{const f=parseInt(h)-1;return console.log(`处理图片标记 ${y}, index: ${f}, imageUrls长度: ${e.length}`),f>=0&&f<e.length&&e[f]?(console.log(`显示实际图片: ${e[f]}`),`<img src="${e[f]}" alt="图片${h}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${y}`),`<div class="image-placeholder" style="
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
      </div>`)}),t}),C=async()=>{X.value=!0;try{const t={page:q.value,limit:ee.value};M.value&&(t.search=M.value),U.value&&(t.model=U.value),k.value&&k.value.length===2&&(t.start_date=k.value[0],t.end_date=k.value[1]);const e=await he.get("/travel-notes",{params:t});W.value=e.data.items||e.data,Z.value=e.data.total||W.value.length}catch(t){console.error("加载游记失败:",t),b.error("加载游记失败")}finally{X.value=!1}};let le=null;const ue=()=>{le&&clearTimeout(le),le=setTimeout(()=>{q.value=1,C()},500)},pe=t=>{r.value=t,F.value=!0},ke=async(t,e)=>{switch(t){case"view":pe(e);break;case"share":me(e);break;case"delete":await Ce(e);break}},me=async t=>{if(!t.content){b.warning("没有可分享的内容");return}A.value=!0,b.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),s=d()?540:600,y=d()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${s}px;
      background: #fff;
      padding: ${y}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `;const h=document.createElement("div");h.style.cssText=`
      background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 50%, #fecfef 100%);
      border-radius: 12px;
      padding: 16px 20px;
      margin-bottom: 20px;
      text-align: center;
      border: 1px solid rgba(255, 182, 193, 0.3);
      position: relative;
      overflow: hidden;
    `;const f=document.createElement("div");f.style.cssText=`
      position: absolute;
      top: -10px;
      right: -10px;
      width: 60px;
      height: 60px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%);
      border-radius: 50%;
    `,h.appendChild(f);const T=document.createElement("div");T.style.cssText=`
      position: relative;
      z-index: 1;
    `;const D=document.createElement("div");D.style.cssText=`
      font-size: 24px;
      margin-bottom: 8px;
      line-height: 1;
    `,D.textContent="📤";const P=document.createElement("div");P.style.cssText=`
      font-size: 16px;
      font-weight: 700;
      color: #d63384;
      margin-bottom: 6px;
      line-height: 1.2;
    `,P.textContent="分享给朋友";const $=document.createElement("div");$.style.cssText=`
      font-size: 13px;
      color: #6f42c1;
      line-height: 1.3;
      font-weight: 500;
    `,$.innerHTML=d()?'点击右上角 <strong style="color: #d63384;">●●●</strong> 转发给朋友':"保存图片并分享给朋友",T.appendChild(D),T.appendChild(P),T.appendChild($),h.appendChild(T),e.appendChild(h);const L=document.createElement("div");L.style.cssText=`
      font-size: ${d()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,L.textContent=`✨ ${t.location||"旅行游记"}`;const N=document.createElement("div");N.style.cssText=`
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
    `;const Y=document.createElement("div");Y.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const H=document.createElement("div");H.style.cssText=`
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
    `;const E=ye.user,w=(E==null?void 0:E.username)||(E==null?void 0:E.email)||"旅行者";H.textContent=w.charAt(0).toUpperCase();const B=document.createElement("span");B.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,B.textContent=w,Y.appendChild(H),Y.appendChild(B);const I=document.createElement("div");if(I.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,t.location){const i=document.createElement("div");i.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,i.innerHTML=`📍 ${t.location}`,I.appendChild(i)}const S=document.createElement("div");S.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `,S.innerHTML=`🕒 ${ve(t.travel_date||t.created_at)}`,I.appendChild(S),N.appendChild(Y),N.appendChild(I);const l=document.createElement("div");l.style.cssText=`
      font-size: ${d()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let z=t.content,K=[];try{t.image_urls&&(K=JSON.parse(t.image_urls))}catch(i){console.warn("解析图片URL失败:",i)}z=z.replace(/\[图(\d+)\]/g,(i,m)=>{const g=parseInt(m)-1;if(g>=0&&g<K.length&&K[g]){const Q=d()?"480px":"540px";return`<img src="${K[g]}" alt="图片${m}" style="width: 100%; max-width: ${Q}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${m}</div>`}),z=z.replace(/\n/g,"<br>"),l.innerHTML=z;const ae=document.createElement("div");ae.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,ae.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(L),e.appendChild(N),e.appendChild(l),e.appendChild(ae),document.body.appendChild(e);const fe=e.querySelectorAll("img");console.log(`Found ${fe.length} images in container`);const $e=Array.from(fe).map((i,m)=>new Promise(g=>{if(console.log(`Checking image ${m+1}:`,i.src.substring(0,50)+"..."),i.complete&&i.naturalWidth>0)console.log(`Image ${m+1} already loaded`),g();else{const Q=()=>{console.log(`Image ${m+1} loaded successfully`),g()},xe=()=>{console.warn(`Image ${m+1} failed to load`),g()};i.addEventListener("load",Q,{once:!0}),i.addEventListener("error",xe,{once:!0}),setTimeout(()=>{i.removeEventListener("load",Q),i.removeEventListener("error",xe),console.log(`Image ${m+1} load timeout, continuing...`),g()},1e4)}}));await Promise.all($e),console.log("All images processed");const O=e.scrollHeight;let ne=d()?1.5:2,se=d()?.8:.9;O>8e3?(ne=d()?1.2:1.5,se=d()?.7:.85,b.info("内容较长，正在优化图片质量以确保生成成功...")):O>5e3&&(ne=d()?1.3:1.8,se=d()?.75:.87);const _e={useCORS:!0,allowTaint:!0,scale:ne,backgroundColor:"#ffffff",logging:!0,width:s,height:O,scrollX:0,scrollY:0,windowWidth:s,windowHeight:O,foreignObjectRendering:!1,imageTimeout:15e3,onclone:i=>{console.log("Document cloned for html2canvas");const m=i.querySelectorAll("img");console.log(`Found ${m.length} images in cloned document`)}};console.log("html2canvas options:",_e),console.log("Container dimensions:",{width:s,height:O}),await new Promise(i=>setTimeout(i,500));const j=await Re(e,_e);if(console.log("Canvas generated:",{width:j.width,height:j.height}),j.width===0||j.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),j.toBlob(i=>{if(i){const m=URL.createObjectURL(i);if(ce()&&!d())G.value=m,J.value=!0,b.success("图片已生成，请长按图片保存到相册");else{const g=document.createElement("a");g.href=m,g.download=`旅行游记_${t.location||"未知地点"}_${ve(t.travel_date||t.created_at)}.png`,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(m),d()?b.success("图片已生成，点击右上角●●●可转发给朋友"):b.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",se)}catch(e){console.error("生成分享图片失败:",e),b.error("生成分享图片失败，请重试")}finally{A.value=!1}},Ce=async t=>{try{await Se.confirm(`确定要删除游记"${t.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await he.delete(`/travel-notes/${t.id}`),b.success("删除成功"),C()}catch(e){e!=="cancel"&&b.error("删除失败")}},oe=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",Te=(t,e=120)=>{if(!t)return"暂无内容";const s=t.replace(/<[^>]*>/g,"");return s.length>e?s.substring(0,e)+"...":s},ge=t=>{const e=te.find(s=>s.value===t);return e?e.label:t},ve=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return Me(()=>{C()}),(t,e)=>{var S;const s=c("el-icon"),y=c("el-input"),h=c("el-col"),f=c("el-option"),T=c("el-select"),D=c("el-date-picker"),P=c("el-row"),$=c("el-button"),L=c("el-dropdown-item"),N=c("el-dropdown-menu"),Y=c("el-dropdown"),H=c("el-tag"),E=c("el-pagination"),w=c("el-descriptions-item"),B=c("el-descriptions"),I=c("el-dialog");return u(),x("div",Pe,[a("div",Be,[a("div",Oe,[e[17]||(e[17]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=l=>t.$router.push("/dashboard"))},[a("div",je,[o(s,{size:"18"},{default:n(()=>[o(V(be))]),_:1})]),e[16]||(e[16]=a("span",{class:"back-text"},"返回首页",-1))])]),a("div",We,[a("div",qe,[e[18]||(e[18]=a("div",{class:"mobile-history-title"},[a("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=l=>t.$router.push("/dashboard"))},[o(s,{size:"16"},{default:n(()=>[o(V(be))]),_:1})])])])]),a("div",Fe,[a("div",Je,[o(P,{gutter:16},{default:n(()=>[o(h,{span:8},{default:n(()=>[o(y,{modelValue:M.value,"onUpdate:modelValue":e[2]||(e[2]=l=>M.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ue},null,8,["modelValue"])]),_:1}),o(h,{span:8},{default:n(()=>[o(T,{modelValue:U.value,"onUpdate:modelValue":e[3]||(e[3]=l=>U.value=l),placeholder:"筛选模型",clearable:"",onChange:C},{default:n(()=>[o(f,{label:"全部模型",value:""}),(u(),x(ie,null,re(te,l=>o(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(h,{span:8},{default:n(()=>[o(D,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=l=>k.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C},null,8,["modelValue"])]),_:1})]),_:1})]),a("div",Ge,[a("div",Ke,[o(y,{modelValue:M.value,"onUpdate:modelValue":e[5]||(e[5]=l=>M.value=l),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ue,class:"mobile-search-input"},null,8,["modelValue"])]),a("div",Qe,[o(T,{modelValue:U.value,"onUpdate:modelValue":e[6]||(e[6]=l=>U.value=l),placeholder:"筛选模型",clearable:"",onChange:C,class:"mobile-filter-select"},{default:n(()=>[o(f,{label:"全部模型",value:""}),(u(),x(ie,null,re(te,l=>o(f,{key:l.value,label:l.label,value:l.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),o(D,{modelValue:k.value,"onUpdate:modelValue":e[7]||(e[7]=l=>k.value=l),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C,class:"mobile-date-picker"},null,8,["modelValue"])])])]),a("div",Xe,[X.value?(u(),x("div",Ze,[o(s,{size:"48",class:"rotating"},{default:n(()=>[o(V(Le))]),_:1}),e[19]||(e[19]=a("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):W.value.length===0?(u(),x("div",et,[o(s,{size:"64"},{default:n(()=>[o(V(Ie))]),_:1}),a("p",tt,v(M.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(u(),x("div",lt,[a("div",ot,[(u(!0),x(ie,null,re(W.value,l=>(u(),x("div",{key:l.id,class:"note-card-small",onClick:z=>pe(l)},[a("div",nt,[a("div",st,[a("h3",null,v(l.location||"未知地点"),1)]),o(Y,{onCommand:z=>ke(z,l),onClick:e[8]||(e[8]=De(()=>{},["stop"]))},{dropdown:n(()=>[o(N,null,{default:n(()=>[o(L,{command:"view"},{default:n(()=>e[20]||(e[20]=[p("查看详情")])),_:1,__:[20]}),o(L,{command:"share"},{default:n(()=>e[21]||(e[21]=[p("分享图片")])),_:1,__:[21]}),o(L,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[p("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[o($,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[o(s,null,{default:n(()=>[o(V(Ue))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),a("div",it,[l.model_used?(u(),de(H,{key:0,size:"small",type:"info"},{default:n(()=>[p(v(ge(l.model_used)),1)]),_:2},1024)):R("",!0),l.writing_style?(u(),de(H,{key:1,size:"small",type:"success"},{default:n(()=>[p(v(l.writing_style),1)]),_:2},1024)):R("",!0)]),a("div",rt,[a("p",null,v(Te(l.content,120)),1)]),a("div",dt,[a("div",ct,[o(s,null,{default:n(()=>[o(V(Ne))]),_:1}),a("span",null,v(oe(l.travel_date||l.created_at)),1)]),l.companions?(u(),x("div",ut,[o(s,null,{default:n(()=>[o(V(Ye))]),_:1}),a("span",null,v(l.companions),1)])):R("",!0)])],8,at))),128))]),Z.value>ee.value?(u(),x("div",pt,[o(E,{"current-page":q.value,"onUpdate:currentPage":e[9]||(e[9]=l=>q.value=l),"page-size":ee.value,total:Z.value,layout:"prev, pager, next, jumper",onCurrentChange:C},null,8,["current-page","page-size","total"])])):R("",!0)]))]),o(I,{modelValue:F.value,"onUpdate:modelValue":e[12]||(e[12]=l=>F.value=l),title:((S=r.value)==null?void 0:S.location)||"游记详情",width:ce()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[o($,{onClick:e[10]||(e[10]=l=>F.value=!1)},{default:n(()=>e[23]||(e[23]=[p("关闭")])),_:1,__:[23]}),o($,{type:"primary",onClick:e[11]||(e[11]=l=>me(r.value)),loading:A.value},{default:n(()=>[A.value?R("",!0):(u(),de(s,{key:0},{default:n(()=>[o(V(He))]),_:1})),p(" "+v(A.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[r.value?(u(),x("div",mt,[a("div",gt,[o(B,{column:2,border:""},{default:n(()=>[o(w,{label:"地点"},{default:n(()=>[p(v(r.value.location||"未知"),1)]),_:1}),o(w,{label:"旅行日期"},{default:n(()=>[p(v(oe(r.value.travel_date)),1)]),_:1}),o(w,{label:"同行者"},{default:n(()=>[p(v(r.value.companions||"未填写"),1)]),_:1}),o(w,{label:"创建时间"},{default:n(()=>[p(v(oe(r.value.created_at)),1)]),_:1}),o(w,{label:"使用模型"},{default:n(()=>[p(v(ge(r.value.model_used)),1)]),_:1}),o(w,{label:"写作风格"},{default:n(()=>[p(v(r.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),a("div",vt,[a("div",{class:"result-content",innerHTML:we.value},null,8,ft)])])):R("",!0)]),_:1},8,["modelValue","title","width"]),o(I,{modelValue:J.value,"onUpdate:modelValue":e[14]||(e[14]=l=>J.value=l),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(G.value),G.value=""})},{footer:n(()=>[o($,{onClick:e[13]||(e[13]=l=>J.value=!1),type:"primary"},{default:n(()=>e[26]||(e[26]=[p("知道了")])),_:1,__:[26]})]),default:n(()=>[a("div",_t,[a("img",{src:G.value,alt:"分享图片",class:"preview-image"},null,8,xt),a("div",ht,[e[25]||(e[25]=a("div",{class:"tip-icon"},"💾",-1)),a("div",bt,[a("p",yt,v(d()?"分享给朋友":"长按图片保存到相册"),1),d()?(u(),x("div",kt,e[24]||(e[24]=[a("p",{class:"tip-desc"},[p("• 点击右上角 "),a("strong",null,"●●●"),p(" 转发给朋友")],-1),a("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"到相册',-1),a("p",{class:"tip-desc"},"• 或者截屏保存到相册",-1)]))):(u(),x("p",wt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},Vt=Ae(Ct,[["__scopeId","data-v-e1f000f4"]]);export{Vt as default};
