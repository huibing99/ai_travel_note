import{u as pe,a as me,r as v,j as ge,k as ve,c as d,o as u,d as x,e as o,f as a,w as n,t as p,F as W,l as X,H as U,n as oe,E as C,h as T,N as ne,B as fe,p as _e,i as m,C as xe,D as be,G as Q,I as ye,v as he,J as we,m as ke}from"./index-1ffcd50d.js";import{h as Ce}from"./html2canvas.esm-85f1a6b6.js";import{_ as Te}from"./_plugin-vue_export-helper-c27b6911.js";const Ve={class:"dashboard-container"},$e={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},ze={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Me={class:"back-icon"},Ee={class:"mobile-only"},Ue={class:"mobile-history-header"},De={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Le={class:"mobile-hidden"},Ne={class:"mobile-only"},Ye={class:"mobile-search-section"},Ie={class:"mobile-filters"},Re={class:"dashboard-card",style:{padding:"30px"}},Se={key:0,style:{"text-align":"center",padding:"60px"}},Be={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},He={style:{margin:"20px 0 0 0","font-size":"16px"}},je={key:2},Ae={class:"notes-grid"},Pe=["onClick"],Oe={class:"card-header"},Fe={class:"location-title"},Je={class:"card-tags"},qe={class:"card-content"},Ge={class:"card-footer"},Ke={class:"date-info"},We={key:0,class:"companions-info"},Xe={key:0,style:{"text-align":"center","margin-top":"30px"}},Qe={key:0,class:"note-detail"},Ze={style:{"margin-bottom":"20px"}},et={class:"generate-result"},tt=["innerHTML"],lt={class:"image-preview-container"},at=["src"],ot={__name:"History",setup(nt){pe();const se=me(),P=v(!1),R=v([]),O=v(0),S=v(1),F=v(10),V=v(""),E=v(""),h=v([]),B=v(!1),i=v(null),D=v(!1),H=v(!1),j=v(""),J=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ie=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,re=ge(()=>{var s;if(!((s=i.value)!=null&&s.content))return"";let l=i.value.content,e=[];try{i.value.image_urls?(console.log("原始image_urls数据:",i.value.image_urls),e=JSON.parse(i.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(f){console.warn("解析图片URL失败:",f),console.warn("原始数据:",i.value.image_urls)}return console.log("游记内容中的图片标记:",l.match(/\[图(\d+)\]/g)),l=l.replace(/\[图(\d+)\]/g,(f,_)=>{const c=parseInt(_)-1;return console.log(`处理图片标记 ${f}, index: ${c}, imageUrls长度: ${e.length}`),c>=0&&c<e.length&&e[c]?(console.log(`显示实际图片: ${e[c]}`),`<img src="${e[c]}" alt="图片${_}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`):(console.log(`显示占位符: ${f}`),`<div class="image-placeholder" style="
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
          <div>图片 ${_}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),l}),w=async()=>{P.value=!0;try{const l={page:S.value,limit:F.value};V.value&&(l.search=V.value),E.value&&(l.model=E.value),h.value&&h.value.length===2&&(l.start_date=h.value[0],l.end_date=h.value[1]);const e=await oe.get("/travel-notes",{params:l});R.value=e.data.items||e.data,O.value=e.data.total||R.value.length}catch(l){console.error("加载游记失败:",l),C.error("加载游记失败")}finally{P.value=!1}};let q=null;const Z=()=>{q&&clearTimeout(q),q=setTimeout(()=>{S.value=1,w()},500)},ee=l=>{i.value=l,B.value=!0},de=async(l,e)=>{switch(l){case"view":ee(e);break;case"share":te(e);break;case"delete":await ce(e);break}},te=async l=>{if(!l.content){C.warning("没有可分享的内容");return}D.value=!0,C.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div");e.style.cssText=`
      position: fixed;
      top: -9999px;
      left: -9999px;
      width: 600px;
      background: #fff;
      padding: 30px;
      border-radius: 16px;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      line-height: 1.6;
      color: #333;
    `;const s=document.createElement("div");s.style.cssText=`
      font-size: 24px;
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 20px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,s.textContent=`✨ ${l.location||"旅行游记"}`;const f=document.createElement("div");f.style.cssText=`
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 12px 16px;
      background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
      border-radius: 8px;
      margin-bottom: 20px;
      border-left: 4px solid #667eea;
      font-size: 13px;
      color: #495057;
    `;const _=document.createElement("div");_.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
    `;const c=document.createElement("div");c.style.cssText=`
      width: 24px;
      height: 24px;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-weight: 600;
      font-size: 12px;
    `;const b=se.user,L=(b==null?void 0:b.username)||(b==null?void 0:b.email)||"旅行者";c.textContent=L.charAt(0).toUpperCase();const N=document.createElement("span");N.style.cssText=`
      font-weight: 600;
      color: #333;
    `,N.textContent=L,_.appendChild(c),_.appendChild(N);const y=document.createElement("div");if(y.style.cssText=`
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 12px;
    `,l.location){const r=document.createElement("div");r.style.cssText=`
        display: flex;
        align-items: center;
        gap: 4px;
        padding: 4px 8px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 12px;
        color: #667eea;
        font-weight: 500;
      `,r.innerHTML=`📍 ${l.location}`,y.appendChild(r)}const $=document.createElement("div");$.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 12px;
      color: #43e97b;
      font-weight: 500;
    `,$.innerHTML=`🕒 ${ae(l.travel_date||l.created_at)}`,y.appendChild($),f.appendChild(_),f.appendChild(y);const Y=document.createElement("div");Y.style.cssText=`
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
    `;let z=l.content,M=[];try{l.image_urls&&(M=JSON.parse(l.image_urls))}catch(r){console.warn("解析图片URL失败:",r)}z=z.replace(/\[图(\d+)\]/g,(r,t)=>{const g=parseInt(t)-1;return g>=0&&g<M.length&&M[g]?`<img src="${M[g]}" alt="图片${t}" style="width: 100%; max-width: 540px; height: auto; border-radius: 12px; margin: 16px 0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);" />`:`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${t}</div>`}),z=z.replace(/\n/g,"<br>"),Y.innerHTML=z;const I=document.createElement("div");I.style.cssText=`
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
      font-size: 14px;
      color: #999;
    `,I.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">由AI智能生成</div>
      <div>让每一次旅行都有精彩的故事</div>
    `,e.appendChild(s),e.appendChild(f),e.appendChild(Y),e.appendChild(I),document.body.appendChild(e);const k=e.querySelectorAll("img"),K=Array.from(k).map(r=>new Promise(t=>{r.complete?t():(r.onload=t,r.onerror=t)}));await Promise.all(K);const A=await Ce(e,{useCORS:!0,allowTaint:!0,scale:2,backgroundColor:"#ffffff",logging:!1,width:600,height:e.scrollHeight,scrollX:0,scrollY:0});document.body.removeChild(e),A.toBlob(r=>{if(r){const t=URL.createObjectURL(r);if(ie())j.value=t,H.value=!0,C.success("图片已生成，请长按图片保存到相册");else{const g=document.createElement("a");g.href=t,g.download=`旅行游记_${l.location||"未知地点"}_${ae(l.travel_date||l.created_at)}.png`,document.body.appendChild(g),g.click(),document.body.removeChild(g),URL.revokeObjectURL(t),C.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",.9)}catch(e){console.error("生成分享图片失败:",e),C.error("生成分享图片失败，请重试")}finally{D.value=!1}},ce=async l=>{try{await ke.confirm(`确定要删除游记"${l.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await oe.delete(`/travel-notes/${l.id}`),C.success("删除成功"),w()}catch(e){e!=="cancel"&&C.error("删除失败")}},G=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ue=(l,e=120)=>{if(!l)return"暂无内容";const s=l.replace(/<[^>]*>/g,"");return s.length>e?s.substring(0,e)+"...":s},le=l=>{const e=J.find(s=>s.value===l);return e?e.label:l},ae=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return ve(()=>{w()}),(l,e)=>{var r;const s=d("el-icon"),f=d("el-input"),_=d("el-col"),c=d("el-option"),b=d("el-select"),L=d("el-date-picker"),N=d("el-row"),y=d("el-button"),$=d("el-dropdown-item"),Y=d("el-dropdown-menu"),z=d("el-dropdown"),M=d("el-tag"),I=d("el-pagination"),k=d("el-descriptions-item"),K=d("el-descriptions"),A=d("el-dialog");return u(),x("div",Ve,[o("div",$e,[o("div",ze,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=t=>l.$router.push("/dashboard"))},[o("div",Me,[a(s,{size:"18"},{default:n(()=>[a(T(ne))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])]),o("div",Ee,[o("div",Ue,[e[18]||(e[18]=o("div",{class:"mobile-history-title"},[o("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=t=>l.$router.push("/dashboard"))},[a(s,{size:"16"},{default:n(()=>[a(T(ne))]),_:1})])])])]),o("div",De,[o("div",Le,[a(N,{gutter:16},{default:n(()=>[a(_,{span:8},{default:n(()=>[a(f,{modelValue:V.value,"onUpdate:modelValue":e[2]||(e[2]=t=>V.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:Z},null,8,["modelValue"])]),_:1}),a(_,{span:8},{default:n(()=>[a(b,{modelValue:E.value,"onUpdate:modelValue":e[3]||(e[3]=t=>E.value=t),placeholder:"筛选模型",clearable:"",onChange:w},{default:n(()=>[a(c,{label:"全部模型",value:""}),(u(),x(W,null,X(J,t=>a(c,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(_,{span:8},{default:n(()=>[a(L,{modelValue:h.value,"onUpdate:modelValue":e[4]||(e[4]=t=>h.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:w},null,8,["modelValue"])]),_:1})]),_:1})]),o("div",Ne,[o("div",Ye,[a(f,{modelValue:V.value,"onUpdate:modelValue":e[5]||(e[5]=t=>V.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:Z,class:"mobile-search-input"},null,8,["modelValue"])]),o("div",Ie,[a(b,{modelValue:E.value,"onUpdate:modelValue":e[6]||(e[6]=t=>E.value=t),placeholder:"筛选模型",clearable:"",onChange:w,class:"mobile-filter-select"},{default:n(()=>[a(c,{label:"全部模型",value:""}),(u(),x(W,null,X(J,t=>a(c,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a(L,{modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=t=>h.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:w,class:"mobile-date-picker"},null,8,["modelValue"])])])]),o("div",Re,[P.value?(u(),x("div",Se,[a(s,{size:"48",class:"rotating"},{default:n(()=>[a(T(fe))]),_:1}),e[19]||(e[19]=o("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):R.value.length===0?(u(),x("div",Be,[a(s,{size:"64"},{default:n(()=>[a(T(_e))]),_:1}),o("p",He,p(V.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(u(),x("div",je,[o("div",Ae,[(u(!0),x(W,null,X(R.value,t=>(u(),x("div",{key:t.id,class:"note-card-small",onClick:g=>ee(t)},[o("div",Oe,[o("div",Fe,[o("h3",null,p(t.location||"未知地点"),1)]),a(z,{onCommand:g=>de(g,t),onClick:e[8]||(e[8]=be(()=>{},["stop"]))},{dropdown:n(()=>[a(Y,null,{default:n(()=>[a($,{command:"view"},{default:n(()=>e[20]||(e[20]=[m("查看详情")])),_:1,__:[20]}),a($,{command:"share"},{default:n(()=>e[21]||(e[21]=[m("分享图片")])),_:1,__:[21]}),a($,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[m("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[a(y,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[a(s,null,{default:n(()=>[a(T(xe))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),o("div",Je,[t.model_used?(u(),Q(M,{key:0,size:"small",type:"info"},{default:n(()=>[m(p(le(t.model_used)),1)]),_:2},1024)):U("",!0),t.writing_style?(u(),Q(M,{key:1,size:"small",type:"success"},{default:n(()=>[m(p(t.writing_style),1)]),_:2},1024)):U("",!0)]),o("div",qe,[o("p",null,p(ue(t.content,120)),1)]),o("div",Ge,[o("div",Ke,[a(s,null,{default:n(()=>[a(T(ye))]),_:1}),o("span",null,p(G(t.travel_date||t.created_at)),1)]),t.companions?(u(),x("div",We,[a(s,null,{default:n(()=>[a(T(he))]),_:1}),o("span",null,p(t.companions),1)])):U("",!0)])],8,Pe))),128))]),O.value>F.value?(u(),x("div",Xe,[a(I,{"current-page":S.value,"onUpdate:currentPage":e[9]||(e[9]=t=>S.value=t),"page-size":F.value,total:O.value,layout:"prev, pager, next, jumper",onCurrentChange:w},null,8,["current-page","page-size","total"])])):U("",!0)]))]),a(A,{modelValue:B.value,"onUpdate:modelValue":e[12]||(e[12]=t=>B.value=t),title:((r=i.value)==null?void 0:r.location)||"游记详情",width:"50%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[a(y,{onClick:e[10]||(e[10]=t=>B.value=!1)},{default:n(()=>e[23]||(e[23]=[m("关闭")])),_:1,__:[23]}),a(y,{type:"primary",onClick:e[11]||(e[11]=t=>te(i.value)),loading:D.value},{default:n(()=>[D.value?U("",!0):(u(),Q(s,{key:0},{default:n(()=>[a(T(we))]),_:1})),m(" "+p(D.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[i.value?(u(),x("div",Qe,[o("div",Ze,[a(K,{column:2,border:""},{default:n(()=>[a(k,{label:"地点"},{default:n(()=>[m(p(i.value.location||"未知"),1)]),_:1}),a(k,{label:"旅行日期"},{default:n(()=>[m(p(G(i.value.travel_date)),1)]),_:1}),a(k,{label:"同行者"},{default:n(()=>[m(p(i.value.companions||"未填写"),1)]),_:1}),a(k,{label:"创建时间"},{default:n(()=>[m(p(G(i.value.created_at)),1)]),_:1}),a(k,{label:"使用模型"},{default:n(()=>[m(p(le(i.value.model_used)),1)]),_:1}),a(k,{label:"写作风格"},{default:n(()=>[m(p(i.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),o("div",et,[o("div",{class:"result-content",innerHTML:re.value},null,8,tt)])])):U("",!0)]),_:1},8,["modelValue","title"]),a(A,{modelValue:H.value,"onUpdate:modelValue":e[14]||(e[14]=t=>H.value=t),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{l.URL.revokeObjectURL(j.value),j.value=""})},{footer:n(()=>[a(y,{onClick:e[13]||(e[13]=t=>H.value=!1),type:"primary"},{default:n(()=>e[25]||(e[25]=[m("知道了")])),_:1,__:[25]})]),default:n(()=>[o("div",lt,[o("img",{src:j.value,alt:"分享图片",class:"preview-image"},null,8,at),e[24]||(e[24]=o("div",{class:"save-tips"},[o("div",{class:"tip-icon"},"💾"),o("div",{class:"tip-text"},[o("p",{class:"tip-title"},"长按图片保存到相册"),o("p",{class:"tip-desc"},'在图片上长按，选择"保存图片"或"存储图像"')])],-1))])]),_:1},8,["modelValue"])])}}},dt=Te(ot,[["__scopeId","data-v-138321f4"]]);export{dt as default};
