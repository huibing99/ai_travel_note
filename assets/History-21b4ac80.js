import{u as we,a as ke,r as h,j as Ce,k as $e,c as g,o as u,d as x,e as a,f as o,w as n,t as v,F as ae,p as ne,l as M,s as ve,E as y,h as k,P as fe,G as Ee,v as Te,i as f,H as ze,I as Me,J as se,K as Le,z as Ue,L as Ve,M as Ie,q as Se}from"./index-c2b892de.js";import{h as Re}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ne}from"./_plugin-vue_export-helper-c27b6911.js";const De={class:"dashboard-container"},Ye={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Ae={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Be={class:"back-icon"},He={class:"mobile-only"},je={class:"mobile-history-header"},Pe={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Oe={class:"mobile-hidden"},Fe={class:"mobile-only"},qe={class:"mobile-search-section"},We={class:"mobile-filters"},Je={class:"dashboard-card",style:{padding:"30px"}},Ge={key:0,style:{"text-align":"center",padding:"60px"}},Ke={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Qe={style:{margin:"20px 0 0 0","font-size":"16px"}},Xe={key:2},Ze={class:"notes-grid"},et=["onClick"],tt={class:"card-header"},lt={class:"location-title"},ot={key:0,class:"location-subtitle"},at={class:"card-tags"},nt={class:"card-content"},st={class:"card-footer"},it={class:"date-info"},rt={key:0,class:"companions-info"},dt={key:0,style:{"text-align":"center","margin-top":"30px"}},ct={key:0,class:"note-detail"},ut={style:{"margin-bottom":"20px"}},pt={class:"generate-result"},mt={key:0,class:"result-title"},gt=["innerHTML"],vt={class:"image-preview-container"},ft=["src"],_t={class:"save-tips"},xt={class:"tip-text"},yt={key:0,class:"tip-desc"},ht={key:1,class:"wechat-tips"},bt={__name:"History",setup(wt){we();const _e=ke(),X=h(!1),W=h([]),Z=h(0),J=h(1),ee=h(10),L=h(""),N=h(""),C=h([]),G=h(!1),d=h(null),B=h(!1),H=h(!1),j=h(""),te=[{label:"模型1",value:"gemini-2.0-flash"},{label:"模型2",value:"gemini-2.5-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ie=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,c=()=>/micromessenger/i.test(navigator.userAgent),xe=Ce(()=>{var s;if(!((s=d.value)!=null&&s.content))return"";let l=d.value.content,e=[];try{d.value.image_urls?(console.log("原始image_urls数据:",d.value.image_urls),e=JSON.parse(d.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(_){console.warn("解析图片URL失败:",_),console.warn("原始数据:",d.value.image_urls)}return console.log("游记内容中的图片标记:",l.match(/\[图(\d+)\]/g)),l=l.replace(/\[图(\d+)\]/g,(_,b)=>{const p=parseInt(b)-1;return console.log(`处理图片标记 ${_}, index: ${p}, imageUrls长度: ${e.length}`),p>=0&&p<e.length&&e[p]?(console.log(`显示实际图片: ${e[p]}`),`<img src="${e[p]}" alt="图片${b}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${_}`),`<div class="image-placeholder" style="
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
      </div>`)}),l}),$=async()=>{X.value=!0;try{const l={page:J.value,limit:ee.value};L.value&&(l.search=L.value),N.value&&(l.model=N.value),C.value&&C.value.length===2&&(l.start_date=C.value[0],l.end_date=C.value[1]);const e=await ve.get("/travel-notes",{params:l});W.value=e.data.items||e.data,Z.value=e.data.total||W.value.length}catch(l){console.error("加载游记失败:",l),y.error("加载游记失败")}finally{X.value=!1}};let le=null;const re=()=>{le&&clearTimeout(le),le=setTimeout(()=>{J.value=1,$()},500)},de=l=>{d.value=l,G.value=!0},ye=async(l,e)=>{switch(l){case"view":de(e);break;case"copy":me(e);break;case"share":ce(e);break;case"delete":await he(e);break}},ce=async l=>{if(!l.content){y.warning("没有可分享的内容");return}B.value=!0,y.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),s=c()?540:600,_=c()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${s}px;
      background: #fff;
      padding: ${_}px;.00
      padding-top: ${_+80}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
      min-height: auto;
      height: auto;
      overflow: visible;
    `;const b=document.createElement("div");b.style.cssText=`
      font-size: ${c()?"28px":"32px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 18px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,b.textContent=`✨ ${l.title||l.location||"旅行游记"}`;const p=document.createElement("div");p.style.cssText=`
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
    `;const U=document.createElement("div");U.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
    `;const D=document.createElement("div");D.style.cssText=`
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
    `;const E=_e.user,T=(E==null?void 0:E.username)||(E==null?void 0:E.email)||"旅行者";D.textContent=T.charAt(0).toUpperCase();const z=document.createElement("span");z.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 16px;
    `,z.textContent=T,U.appendChild(D),U.appendChild(z);const Y=document.createElement("div");if(Y.style.cssText=`
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 14px;
    `,l.location){const i=document.createElement("div");i.style.cssText=`
        display: flex;
        align-items: center;
        gap: 3px;
        padding: 5px 10px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 14px;
      `,i.innerHTML=`📍 ${l.location}`,Y.appendChild(i)}const P=document.createElement("div");P.style.cssText=`
      display: flex;
      align-items: center;
      gap: 3px;
      padding: 5px 10px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 14px;
    `,P.innerHTML=`🕒 ${pe(l.travel_date||l.created_at)}`,Y.appendChild(P),p.appendChild(U),p.appendChild(Y);const V=document.createElement("div");V.className="share-content",V.style.cssText=`
      font-size: ${c()?"30px":"32px"};
      line-height: 1.8;
      margin-bottom: 18px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let I=l.content,w=[];try{l.image_urls&&(w=JSON.parse(l.image_urls))}catch(i){console.warn("解析图片URL失败:",i)}I=I.replace(/\[图(\d+)\]/g,(i,m)=>{const r=parseInt(m)-1;if(r>=0&&r<w.length&&w[r]){const S=c()?"480px":"540px";return`<img src="${w[r]}" alt="图片${m}" style="width: 100%; max-width: ${S}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${m}</div>`}),I=I.replace(/\n/g,"<br>"),V.innerHTML=I;const O=document.createElement("div");O.style.cssText=`
      margin-top: 22px;
      padding-top: 18px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 16px;
      color: #999;
    `,O.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 6px;">由AI智能生成</div>
      <div style="font-size: 15px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(b),e.appendChild(p),e.appendChild(V),e.appendChild(O),document.body.appendChild(e);const F=e.querySelectorAll("img");console.log(`Found ${F.length} images in container`);const K=Array.from(F).map((i,m)=>new Promise(r=>{if(console.log(`Checking image ${m+1}:`,i.src.substring(0,50)+"..."),i.complete&&i.naturalWidth>0)console.log(`Image ${m+1} already loaded`),r();else{const S=()=>{console.log(`Image ${m+1} loaded successfully`),r()},R=()=>{console.warn(`Image ${m+1} failed to load`),r()};i.addEventListener("load",S,{once:!0}),i.addEventListener("error",R,{once:!0}),setTimeout(()=>{i.removeEventListener("load",S),i.removeEventListener("error",R),console.log(`Image ${m+1} load timeout, continuing...`),r()},1e4)}}));await Promise.all(K),console.log("All images processed");const q=e.scrollHeight;let t=c()?1.5:2,A=c()?.8:.9;q>8e3?(t=c()?1.2:1.5,A=c()?.7:.85,y.info("内容较长，正在优化图片质量以确保生成成功...")):q>5e3&&(t=c()?1.3:1.8,A=c()?.75:.87);const ge={useCORS:!0,allowTaint:!0,scale:t,backgroundColor:"#ffffff",logging:!0,width:s,scrollX:0,scrollY:0,foreignObjectRendering:!1,imageTimeout:15e3,onclone:i=>{console.log("Document cloned for html2canvas");const m=i.querySelectorAll("img");console.log(`Found ${m.length} images in cloned document`);const r=i.createElement("style");r.textContent=`
          * {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
          .share-content {
            font-size: ${c()?"26px":"28px"} !important;
            line-height: 1.8 !important;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif !important;
          }
        `,i.head.appendChild(r),i.querySelectorAll(".share-content").forEach(R=>{R.style.fontSize=c()?"30px":"32px",R.style.lineHeight="1.8",R.style.fontFamily='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',console.log("设置内容元素字体大小:",R.style.fontSize)})}};console.log("html2canvas options:",ge),console.log("Container dimensions:",{width:s}),await new Promise(i=>setTimeout(i,500));const Q=await Re(e,ge);if(console.log("Canvas generated:",{width:Q.width,height:Q.height}),Q.width===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),Q.toBlob(i=>{if(i){const m=URL.createObjectURL(i);if(ie()&&(!c()||c()))if(c()){const r=new FileReader;r.onload=function(S){j.value=S.target.result,H.value=!0,y.success("图片已生成，请长按图片保存到相册或转发给朋友")},r.readAsDataURL(i),URL.revokeObjectURL(m)}else j.value=m,H.value=!0,y.success("图片已生成，请长按图片保存到相册或转发给朋友");else{const r=document.createElement("a");r.href=m,r.download=`旅行游记_${l.location||"未知地点"}_${pe(l.travel_date||l.created_at)}.jpg`,document.body.appendChild(r),r.click(),document.body.removeChild(r),URL.revokeObjectURL(m),c()?y.success("图片已生成并下载"):y.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/jpeg",A)}catch(e){console.error("生成分享图片失败:",e),y.error("生成分享图片失败，请重试")}finally{B.value=!1}},he=async l=>{try{await Se.confirm(`确定要删除游记"${l.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await ve.delete(`/travel-notes/${l.id}`),y.success("删除成功"),$()}catch(e){e!=="cancel"&&y.error("删除失败")}},oe=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",be=(l,e=120)=>{if(!l)return"暂无内容";const s=l.replace(/<[^>]*>/g,"");return s.length>e?s.substring(0,e)+"...":s},ue=l=>{const e=te.find(s=>s.value===l);return e?e.label:l},pe=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间",me=async l=>{if(!l.content){y.warning("没有可复制的文字内容");return}try{let e=l.content;e=e.replace(/\[图\d+\]/g,""),e=e.replace(/<[^>]*>/g,""),e=e.trim(),await navigator.clipboard.writeText(e),y.success("文字内容已复制到剪贴板")}catch{try{let s=l.content.replace(/\[图\d+\]/g,"").replace(/<[^>]*>/g,"").trim();const _=document.createElement("textarea");_.value=s,document.body.appendChild(_),_.select(),document.execCommand("copy"),document.body.removeChild(_),y.success("文字内容已复制到剪贴板")}catch(s){console.error("复制失败:",s),y.error("复制失败，请手动选择复制")}}};return $e(()=>{$()}),(l,e)=>{var K,q;const s=g("el-icon"),_=g("el-input"),b=g("el-col"),p=g("el-option"),U=g("el-select"),D=g("el-date-picker"),E=g("el-row"),T=g("el-button"),z=g("el-dropdown-item"),Y=g("el-dropdown-menu"),P=g("el-dropdown"),V=g("el-tag"),I=g("el-pagination"),w=g("el-descriptions-item"),O=g("el-descriptions"),F=g("el-dialog");return u(),x("div",De,[a("div",Ye,[a("div",Ae,[e[18]||(e[18]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=t=>l.$router.push("/dashboard"))},[a("div",Be,[o(s,{size:"18"},{default:n(()=>[o(k(fe))]),_:1})]),e[17]||(e[17]=a("span",{class:"back-text"},"返回首页",-1))])]),a("div",He,[a("div",je,[e[19]||(e[19]=a("div",{class:"mobile-history-title"},[a("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=t=>l.$router.push("/dashboard"))},[o(s,{size:"16"},{default:n(()=>[o(k(fe))]),_:1})])])])]),a("div",Pe,[a("div",Oe,[o(E,{gutter:16},{default:n(()=>[o(b,{span:8},{default:n(()=>[o(_,{modelValue:L.value,"onUpdate:modelValue":e[2]||(e[2]=t=>L.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:re},null,8,["modelValue"])]),_:1}),o(b,{span:8},{default:n(()=>[o(U,{modelValue:N.value,"onUpdate:modelValue":e[3]||(e[3]=t=>N.value=t),placeholder:"筛选模型",clearable:"",onChange:$},{default:n(()=>[o(p,{label:"全部模型",value:""}),(u(),x(ae,null,ne(te,t=>o(p,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(b,{span:8},{default:n(()=>[o(D,{modelValue:C.value,"onUpdate:modelValue":e[4]||(e[4]=t=>C.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$},null,8,["modelValue"])]),_:1})]),_:1})]),a("div",Fe,[a("div",qe,[o(_,{modelValue:L.value,"onUpdate:modelValue":e[5]||(e[5]=t=>L.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:re,class:"mobile-search-input"},null,8,["modelValue"])]),a("div",We,[o(U,{modelValue:N.value,"onUpdate:modelValue":e[6]||(e[6]=t=>N.value=t),placeholder:"筛选模型",clearable:"",onChange:$,class:"mobile-filter-select"},{default:n(()=>[o(p,{label:"全部模型",value:""}),(u(),x(ae,null,ne(te,t=>o(p,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),o(D,{modelValue:C.value,"onUpdate:modelValue":e[7]||(e[7]=t=>C.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:$,class:"mobile-date-picker"},null,8,["modelValue"])])])]),a("div",Je,[X.value?(u(),x("div",Ge,[o(s,{size:"48",class:"rotating"},{default:n(()=>[o(k(Ee))]),_:1}),e[20]||(e[20]=a("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):W.value.length===0?(u(),x("div",Ke,[o(s,{size:"64"},{default:n(()=>[o(k(Te))]),_:1}),a("p",Qe,v(L.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(u(),x("div",Xe,[a("div",Ze,[(u(!0),x(ae,null,ne(W.value,t=>(u(),x("div",{key:t.id,class:"note-card-small",onClick:A=>de(t)},[a("div",tt,[a("div",lt,[a("h3",null,v(t.title||t.location||"未知地点"),1),t.title&&t.location?(u(),x("p",ot,v(t.location),1)):M("",!0)]),o(P,{onCommand:A=>ye(A,t),onClick:e[8]||(e[8]=Me(()=>{},["stop"]))},{dropdown:n(()=>[o(Y,null,{default:n(()=>[o(z,{command:"view"},{default:n(()=>e[21]||(e[21]=[f("查看详情")])),_:1,__:[21]}),o(z,{command:"copy"},{default:n(()=>e[22]||(e[22]=[f("复制文字")])),_:1,__:[22]}),o(z,{command:"share"},{default:n(()=>e[23]||(e[23]=[f("分享图片")])),_:1,__:[23]}),o(z,{command:"delete",divided:""},{default:n(()=>e[24]||(e[24]=[f("删除")])),_:1,__:[24]})]),_:1})]),default:n(()=>[o(T,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[o(s,null,{default:n(()=>[o(k(ze))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),a("div",at,[t.model_used?(u(),se(V,{key:0,size:"small",type:"info"},{default:n(()=>[f(v(ue(t.model_used)),1)]),_:2},1024)):M("",!0),t.writing_style?(u(),se(V,{key:1,size:"small",type:"success"},{default:n(()=>[f(v(t.writing_style),1)]),_:2},1024)):M("",!0)]),a("div",nt,[a("p",null,v(be(t.content,120)),1)]),a("div",st,[a("div",it,[o(s,null,{default:n(()=>[o(k(Le))]),_:1}),a("span",null,v(oe(t.travel_date||t.created_at)),1)]),t.companions?(u(),x("div",rt,[o(s,null,{default:n(()=>[o(k(Ue))]),_:1}),a("span",null,v(t.companions),1)])):M("",!0)])],8,et))),128))]),Z.value>ee.value?(u(),x("div",dt,[o(I,{"current-page":J.value,"onUpdate:currentPage":e[9]||(e[9]=t=>J.value=t),"page-size":ee.value,total:Z.value,layout:"prev, pager, next, jumper",onCurrentChange:$},null,8,["current-page","page-size","total"])])):M("",!0)]))]),o(F,{modelValue:G.value,"onUpdate:modelValue":e[13]||(e[13]=t=>G.value=t),title:((K=d.value)==null?void 0:K.title)||((q=d.value)==null?void 0:q.location)||"游记详情",width:ie()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[o(T,{onClick:e[10]||(e[10]=t=>G.value=!1)},{default:n(()=>e[25]||(e[25]=[f("关闭")])),_:1,__:[25]}),o(T,{onClick:e[11]||(e[11]=t=>me(d.value))},{default:n(()=>[o(s,null,{default:n(()=>[o(k(Ve))]),_:1}),e[26]||(e[26]=f(" 复制文字 "))]),_:1,__:[26]}),o(T,{type:"primary",onClick:e[12]||(e[12]=t=>ce(d.value)),loading:B.value},{default:n(()=>[B.value?M("",!0):(u(),se(s,{key:0},{default:n(()=>[o(k(Ie))]),_:1})),f(" "+v(B.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>{var t;return[d.value?(u(),x("div",ct,[a("div",ut,[o(O,{column:2,border:""},{default:n(()=>[o(w,{label:"地点"},{default:n(()=>[f(v(d.value.location||"未知"),1)]),_:1}),o(w,{label:"旅行日期"},{default:n(()=>[f(v(oe(d.value.travel_date)),1)]),_:1}),o(w,{label:"同行者"},{default:n(()=>[f(v(d.value.companions||"未填写"),1)]),_:1}),o(w,{label:"创建时间"},{default:n(()=>[f(v(oe(d.value.created_at)),1)]),_:1}),o(w,{label:"使用模型"},{default:n(()=>[f(v(ue(d.value.model_used)),1)]),_:1}),o(w,{label:"写作风格"},{default:n(()=>[f(v(d.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),a("div",pt,[(t=d.value)!=null&&t.title?(u(),x("div",mt,[a("h2",null,v(d.value.title),1)])):M("",!0),a("div",{class:"result-content",innerHTML:xe.value},null,8,gt)])])):M("",!0)]}),_:1},8,["modelValue","title","width"]),o(F,{modelValue:H.value,"onUpdate:modelValue":e[15]||(e[15]=t=>H.value=t),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[16]||(e[16]=()=>{l.URL.revokeObjectURL(j.value),j.value=""})},{footer:n(()=>[o(T,{onClick:e[14]||(e[14]=t=>H.value=!1),type:"primary"},{default:n(()=>e[30]||(e[30]=[f("知道了")])),_:1,__:[30]})]),default:n(()=>[a("div",vt,[a("img",{src:j.value,alt:"分享图片",class:"preview-image"},null,8,ft),a("div",_t,[e[29]||(e[29]=a("div",{class:"tip-icon"},"💾",-1)),a("div",xt,[e[28]||(e[28]=a("p",{class:"tip-title"},"保存图片到相册",-1)),c()?(u(),x("div",ht,e[27]||(e[27]=[a("p",{class:"tip-desc"},"• 长按图片，保存图片或转发给朋友",-1)]))):(u(),x("p",yt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},Et=Ne(bt,[["__scopeId","data-v-f6f1398e"]]);export{Et as default};
