import{u as ye,a as we,r as _,j as ke,k as Ce,c,o as u,d as h,e as a,f as o,w as n,t as v,F as oe,m as ae,l as S,q as ge,E as y,h as T,O as ve,D as $e,s as Te,i as f,G as ze,H as Ee,I as ne,J as Ve,y as Me,K as Le,p as Ue}from"./index-06565afc.js";import{h as Ie}from"./html2canvas.esm-85f1a6b6.js";import{_ as De}from"./_plugin-vue_export-helper-c27b6911.js";const Ne={class:"dashboard-container"},Ye={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Se={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},He={class:"back-icon"},Re={class:"mobile-only"},Ae={class:"mobile-history-header"},Be={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Oe={class:"mobile-hidden"},Pe={class:"mobile-only"},je={class:"mobile-search-section"},We={class:"mobile-filters"},qe={class:"dashboard-card",style:{padding:"30px"}},Fe={key:0,style:{"text-align":"center",padding:"60px"}},Je={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Ge={style:{margin:"20px 0 0 0","font-size":"16px"}},Ke={key:2},Qe={class:"notes-grid"},Xe=["onClick"],Ze={class:"card-header"},et={class:"location-title"},tt={class:"card-tags"},lt={class:"card-content"},ot={class:"card-footer"},at={class:"date-info"},nt={key:0,class:"companions-info"},st={key:0,style:{"text-align":"center","margin-top":"30px"}},it={key:0,class:"note-detail"},rt={style:{"margin-bottom":"20px"}},dt={class:"generate-result"},ct=["innerHTML"],ut={class:"image-preview-container"},pt=["src"],mt={class:"save-tips"},gt={class:"tip-text"},vt={class:"tip-title"},ft={key:0,class:"tip-desc"},_t={key:1,class:"wechat-tips"},ht={__name:"History",setup(xt){ye();const fe=we(),K=_(!1),P=_([]),Q=_(0),j=_(1),X=_(10),z=_(""),U=_(""),k=_([]),W=_(!1),r=_(null),H=_(!1),q=_(!1),F=_(""),Z=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],se=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,p=()=>/micromessenger/i.test(navigator.userAgent),_e=ke(()=>{var s;if(!((s=r.value)!=null&&s.content))return"";let l=r.value.content,e=[];try{r.value.image_urls?(console.log("原始image_urls数据:",r.value.image_urls),e=JSON.parse(r.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(w){console.warn("解析图片URL失败:",w),console.warn("原始数据:",r.value.image_urls)}return console.log("游记内容中的图片标记:",l.match(/\[图(\d+)\]/g)),l=l.replace(/\[图(\d+)\]/g,(w,x)=>{const d=parseInt(x)-1;return console.log(`处理图片标记 ${w}, index: ${d}, imageUrls长度: ${e.length}`),d>=0&&d<e.length&&e[d]?(console.log(`显示实际图片: ${e[d]}`),`<img src="${e[d]}" alt="图片${x}" style="max-width: min(600px, 100%); height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1); display: block;" />`):(console.log(`显示占位符: ${w}`),`<div class="image-placeholder" style="
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
      </div>`)}),l}),C=async()=>{K.value=!0;try{const l={page:j.value,limit:X.value};z.value&&(l.search=z.value),U.value&&(l.model=U.value),k.value&&k.value.length===2&&(l.start_date=k.value[0],l.end_date=k.value[1]);const e=await ge.get("/travel-notes",{params:l});P.value=e.data.items||e.data,Q.value=e.data.total||P.value.length}catch(l){console.error("加载游记失败:",l),y.error("加载游记失败")}finally{K.value=!1}};let ee=null;const ie=()=>{ee&&clearTimeout(ee),ee=setTimeout(()=>{j.value=1,C()},500)},re=l=>{r.value=l,W.value=!0},he=async(l,e)=>{switch(l){case"view":re(e);break;case"share":de(e);break;case"delete":await xe(e);break}},de=async l=>{if(!l.content){y.warning("没有可分享的内容");return}H.value=!0,y.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),s=p()?540:600,w=p()?20:30;e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: ${s}px;
      background: #fff;
      padding: ${w}px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `;const x=document.createElement("div");x.style.cssText=`
      font-size: ${p()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,x.textContent=`✨ ${l.location||"旅行游记"}`;const d=document.createElement("div");d.style.cssText=`
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
    `;const E=document.createElement("div");E.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const I=document.createElement("div");I.style.cssText=`
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
    `;const $=fe.user,V=($==null?void 0:$.username)||($==null?void 0:$.email)||"旅行者";I.textContent=V.charAt(0).toUpperCase();const M=document.createElement("span");M.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,M.textContent=V,E.appendChild(I),E.appendChild(M);const D=document.createElement("div");if(D.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,l.location){const i=document.createElement("div");i.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,i.innerHTML=`📍 ${l.location}`,D.appendChild(i)}const R=document.createElement("div");R.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `,R.innerHTML=`🕒 ${ue(l.travel_date||l.created_at)}`,D.appendChild(R),d.appendChild(E),d.appendChild(D);const N=document.createElement("div");N.style.cssText=`
      font-size: ${p()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let L=l.content,b=[];try{l.image_urls&&(b=JSON.parse(l.image_urls))}catch(i){console.warn("解析图片URL失败:",i)}L=L.replace(/\[图(\d+)\]/g,(i,m)=>{const g=parseInt(m)-1;if(g>=0&&g<b.length&&b[g]){const G=p()?"480px":"540px";return`<img src="${b[g]}" alt="图片${m}" style="width: 100%; max-width: ${G}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${m}</div>`}),L=L.replace(/\n/g,"<br>"),N.innerHTML=L;const A=document.createElement("div");A.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,A.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(x),e.appendChild(d),e.appendChild(N),e.appendChild(A),document.body.appendChild(e);const B=e.querySelectorAll("img");console.log(`Found ${B.length} images in container`);const J=Array.from(B).map((i,m)=>new Promise(g=>{if(console.log(`Checking image ${m+1}:`,i.src.substring(0,50)+"..."),i.complete&&i.naturalWidth>0)console.log(`Image ${m+1} already loaded`),g();else{const G=()=>{console.log(`Image ${m+1} loaded successfully`),g()},me=()=>{console.warn(`Image ${m+1} failed to load`),g()};i.addEventListener("load",G,{once:!0}),i.addEventListener("error",me,{once:!0}),setTimeout(()=>{i.removeEventListener("load",G),i.removeEventListener("error",me),console.log(`Image ${m+1} load timeout, continuing...`),g()},1e4)}}));await Promise.all(J),console.log("All images processed");const t=e.scrollHeight;let Y=p()?1.5:2,le=p()?.8:.9;t>8e3?(Y=p()?1.2:1.5,le=p()?.7:.85,y.info("内容较长，正在优化图片质量以确保生成成功...")):t>5e3&&(Y=p()?1.3:1.8,le=p()?.75:.87);const pe={useCORS:!0,allowTaint:!0,scale:Y,backgroundColor:"#ffffff",logging:!0,width:s,height:t,scrollX:0,scrollY:0,windowWidth:s,windowHeight:t,foreignObjectRendering:!1,imageTimeout:15e3,onclone:i=>{console.log("Document cloned for html2canvas");const m=i.querySelectorAll("img");console.log(`Found ${m.length} images in cloned document`)}};console.log("html2canvas options:",pe),console.log("Container dimensions:",{width:s,height:t}),await new Promise(i=>setTimeout(i,500));const O=await Ie(e,pe);if(console.log("Canvas generated:",{width:O.width,height:O.height}),O.width===0||O.height===0)throw new Error("生成的图片尺寸为0，可能存在渲染问题");document.body.removeChild(e),O.toBlob(i=>{if(i){const m=URL.createObjectURL(i);if(se()&&!p())F.value=m,q.value=!0,y.success("图片已生成，请长按图片保存到相册");else{const g=document.createElement("a");g.href=m,g.download=`旅行游记_${l.location||"未知地点"}_${ue(l.travel_date||l.created_at)}.png`,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(m),p()?y.success("图片已下载到微信下载文件夹"):y.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",le)}catch(e){console.error("生成分享图片失败:",e),y.error("生成分享图片失败，请重试")}finally{H.value=!1}},xe=async l=>{try{await Ue.confirm(`确定要删除游记"${l.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await ge.delete(`/travel-notes/${l.id}`),y.success("删除成功"),C()}catch(e){e!=="cancel"&&y.error("删除失败")}},te=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",be=(l,e=120)=>{if(!l)return"暂无内容";const s=l.replace(/<[^>]*>/g,"");return s.length>e?s.substring(0,e)+"...":s},ce=l=>{const e=Z.find(s=>s.value===l);return e?e.label:l},ue=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return Ce(()=>{C()}),(l,e)=>{var J;const s=c("el-icon"),w=c("el-input"),x=c("el-col"),d=c("el-option"),E=c("el-select"),I=c("el-date-picker"),$=c("el-row"),V=c("el-button"),M=c("el-dropdown-item"),D=c("el-dropdown-menu"),R=c("el-dropdown"),N=c("el-tag"),L=c("el-pagination"),b=c("el-descriptions-item"),A=c("el-descriptions"),B=c("el-dialog");return u(),h("div",Ne,[a("div",Ye,[a("div",Se,[e[17]||(e[17]=a("div",{style:{flex:"1"}},[a("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"back-button",onClick:e[0]||(e[0]=t=>l.$router.push("/dashboard"))},[a("div",He,[o(s,{size:"18"},{default:n(()=>[o(T(ve))]),_:1})]),e[16]||(e[16]=a("span",{class:"back-text"},"返回首页",-1))])]),a("div",Re,[a("div",Ae,[e[18]||(e[18]=a("div",{class:"mobile-history-title"},[a("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),a("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),a("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=t=>l.$router.push("/dashboard"))},[o(s,{size:"16"},{default:n(()=>[o(T(ve))]),_:1})])])])]),a("div",Be,[a("div",Oe,[o($,{gutter:16},{default:n(()=>[o(x,{span:8},{default:n(()=>[o(w,{modelValue:z.value,"onUpdate:modelValue":e[2]||(e[2]=t=>z.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ie},null,8,["modelValue"])]),_:1}),o(x,{span:8},{default:n(()=>[o(E,{modelValue:U.value,"onUpdate:modelValue":e[3]||(e[3]=t=>U.value=t),placeholder:"筛选模型",clearable:"",onChange:C},{default:n(()=>[o(d,{label:"全部模型",value:""}),(u(),h(oe,null,ae(Z,t=>o(d,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),o(x,{span:8},{default:n(()=>[o(I,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=t=>k.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C},null,8,["modelValue"])]),_:1})]),_:1})]),a("div",Pe,[a("div",je,[o(w,{modelValue:z.value,"onUpdate:modelValue":e[5]||(e[5]=t=>z.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ie,class:"mobile-search-input"},null,8,["modelValue"])]),a("div",We,[o(E,{modelValue:U.value,"onUpdate:modelValue":e[6]||(e[6]=t=>U.value=t),placeholder:"筛选模型",clearable:"",onChange:C,class:"mobile-filter-select"},{default:n(()=>[o(d,{label:"全部模型",value:""}),(u(),h(oe,null,ae(Z,t=>o(d,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),o(I,{modelValue:k.value,"onUpdate:modelValue":e[7]||(e[7]=t=>k.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C,class:"mobile-date-picker"},null,8,["modelValue"])])])]),a("div",qe,[K.value?(u(),h("div",Fe,[o(s,{size:"48",class:"rotating"},{default:n(()=>[o(T($e))]),_:1}),e[19]||(e[19]=a("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):P.value.length===0?(u(),h("div",Je,[o(s,{size:"64"},{default:n(()=>[o(T(Te))]),_:1}),a("p",Ge,v(z.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(u(),h("div",Ke,[a("div",Qe,[(u(!0),h(oe,null,ae(P.value,t=>(u(),h("div",{key:t.id,class:"note-card-small",onClick:Y=>re(t)},[a("div",Ze,[a("div",et,[a("h3",null,v(t.location||"未知地点"),1)]),o(R,{onCommand:Y=>he(Y,t),onClick:e[8]||(e[8]=Ee(()=>{},["stop"]))},{dropdown:n(()=>[o(D,null,{default:n(()=>[o(M,{command:"view"},{default:n(()=>e[20]||(e[20]=[f("查看详情")])),_:1,__:[20]}),o(M,{command:"share"},{default:n(()=>e[21]||(e[21]=[f("分享图片")])),_:1,__:[21]}),o(M,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[f("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[o(V,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[o(s,null,{default:n(()=>[o(T(ze))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),a("div",tt,[t.model_used?(u(),ne(N,{key:0,size:"small",type:"info"},{default:n(()=>[f(v(ce(t.model_used)),1)]),_:2},1024)):S("",!0),t.writing_style?(u(),ne(N,{key:1,size:"small",type:"success"},{default:n(()=>[f(v(t.writing_style),1)]),_:2},1024)):S("",!0)]),a("div",lt,[a("p",null,v(be(t.content,120)),1)]),a("div",ot,[a("div",at,[o(s,null,{default:n(()=>[o(T(Ve))]),_:1}),a("span",null,v(te(t.travel_date||t.created_at)),1)]),t.companions?(u(),h("div",nt,[o(s,null,{default:n(()=>[o(T(Me))]),_:1}),a("span",null,v(t.companions),1)])):S("",!0)])],8,Xe))),128))]),Q.value>X.value?(u(),h("div",st,[o(L,{"current-page":j.value,"onUpdate:currentPage":e[9]||(e[9]=t=>j.value=t),"page-size":X.value,total:Q.value,layout:"prev, pager, next, jumper",onCurrentChange:C},null,8,["current-page","page-size","total"])])):S("",!0)]))]),o(B,{modelValue:W.value,"onUpdate:modelValue":e[12]||(e[12]=t=>W.value=t),title:((J=r.value)==null?void 0:J.location)||"游记详情",width:se()?"95%":"40%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[o(V,{onClick:e[10]||(e[10]=t=>W.value=!1)},{default:n(()=>e[23]||(e[23]=[f("关闭")])),_:1,__:[23]}),o(V,{type:"primary",onClick:e[11]||(e[11]=t=>de(r.value)),loading:H.value},{default:n(()=>[H.value?S("",!0):(u(),ne(s,{key:0},{default:n(()=>[o(T(Le))]),_:1})),f(" "+v(H.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[r.value?(u(),h("div",it,[a("div",rt,[o(A,{column:2,border:""},{default:n(()=>[o(b,{label:"地点"},{default:n(()=>[f(v(r.value.location||"未知"),1)]),_:1}),o(b,{label:"旅行日期"},{default:n(()=>[f(v(te(r.value.travel_date)),1)]),_:1}),o(b,{label:"同行者"},{default:n(()=>[f(v(r.value.companions||"未填写"),1)]),_:1}),o(b,{label:"创建时间"},{default:n(()=>[f(v(te(r.value.created_at)),1)]),_:1}),o(b,{label:"使用模型"},{default:n(()=>[f(v(ce(r.value.model_used)),1)]),_:1}),o(b,{label:"写作风格"},{default:n(()=>[f(v(r.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),a("div",dt,[a("div",{class:"result-content",innerHTML:_e.value},null,8,ct)])])):S("",!0)]),_:1},8,["modelValue","title","width"]),o(B,{modelValue:q.value,"onUpdate:modelValue":e[14]||(e[14]=t=>q.value=t),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{l.URL.revokeObjectURL(F.value),F.value=""})},{footer:n(()=>[o(V,{onClick:e[13]||(e[13]=t=>q.value=!1),type:"primary"},{default:n(()=>e[26]||(e[26]=[f("知道了")])),_:1,__:[26]})]),default:n(()=>[a("div",ut,[a("img",{src:F.value,alt:"分享图片",class:"preview-image"},null,8,pt),a("div",mt,[e[25]||(e[25]=a("div",{class:"tip-icon"},"💾",-1)),a("div",gt,[a("p",vt,v(p()?"保存图片到相册":"长按图片保存到相册"),1),p()?(u(),h("div",_t,e[24]||(e[24]=[a("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),a("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),a("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(u(),h("p",ft,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},kt=De(ht,[["__scopeId","data-v-e469046c"]]);export{kt as default};
