import{u as _e,a as xe,r as v,j as he,k as be,c as d,o as c,d as f,e as o,f as l,w as n,t as u,F as ee,m as te,l as I,q as re,E as w,h as z,O as de,D as ye,s as we,i as p,G as ke,H as Ce,I as le,J as $e,y as ze,K as Me,p as Te}from"./index-f556d4a6.js";import{h as Ve}from"./html2canvas.esm-85f1a6b6.js";import{_ as Ee}from"./_plugin-vue_export-helper-c27b6911.js";const Ue={class:"dashboard-container"},De={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Le={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},Ne={class:"back-icon"},Ye={class:"mobile-only"},Ie={class:"mobile-history-header"},He={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Re={class:"mobile-hidden"},Se={class:"mobile-only"},Be={class:"mobile-search-section"},Ae={class:"mobile-filters"},Oe={class:"dashboard-card",style:{padding:"30px"}},Pe={key:0,style:{"text-align":"center",padding:"60px"}},je={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},We={style:{margin:"20px 0 0 0","font-size":"16px"}},qe={key:2},Fe={class:"notes-grid"},Je=["onClick"],Ge={class:"card-header"},Ke={class:"location-title"},Xe={class:"card-tags"},Qe={class:"card-content"},Ze={class:"card-footer"},et={class:"date-info"},tt={key:0,class:"companions-info"},lt={key:0,style:{"text-align":"center","margin-top":"30px"}},at={key:0,class:"note-detail"},ot={style:{"margin-bottom":"20px"}},nt={class:"generate-result"},st=["innerHTML"],it={class:"image-preview-container"},rt=["src"],dt={class:"save-tips"},ct={class:"tip-text"},ut={class:"tip-title"},pt={key:0,class:"tip-desc"},mt={key:1,class:"wechat-tips"},gt={__name:"History",setup(vt){_e();const ce=xe(),J=v(!1),B=v([]),G=v(0),A=v(1),K=v(10),M=v(""),D=v(""),k=v([]),O=v(!1),i=v(null),H=v(!1),P=v(!1),j=v(""),X=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],ue=()=>/Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=768,m=()=>/micromessenger/i.test(navigator.userAgent),pe=he(()=>{var s;if(!((s=i.value)!=null&&s.content))return"";let t=i.value.content,e=[];try{i.value.image_urls?(console.log("原始image_urls数据:",i.value.image_urls),e=JSON.parse(i.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(y){console.warn("解析图片URL失败:",y),console.warn("原始数据:",i.value.image_urls)}return console.log("游记内容中的图片标记:",t.match(/\[图(\d+)\]/g)),t=t.replace(/\[图(\d+)\]/g,(y,_)=>{const r=parseInt(_)-1;return console.log(`处理图片标记 ${y}, index: ${r}, imageUrls长度: ${e.length}`),r>=0&&r<e.length&&e[r]?(console.log(`显示实际图片: ${e[r]}`),`<img src="${e[r]}" alt="图片${_}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`):(console.log(`显示占位符: ${y}`),`<div class="image-placeholder" style="
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
      </div>`)}),t}),C=async()=>{J.value=!0;try{const t={page:A.value,limit:K.value};M.value&&(t.search=M.value),D.value&&(t.model=D.value),k.value&&k.value.length===2&&(t.start_date=k.value[0],t.end_date=k.value[1]);const e=await re.get("/travel-notes",{params:t});B.value=e.data.items||e.data,G.value=e.data.total||B.value.length}catch(t){console.error("加载游记失败:",t),w.error("加载游记失败")}finally{J.value=!1}};let Q=null;const ae=()=>{Q&&clearTimeout(Q),Q=setTimeout(()=>{A.value=1,C()},500)},oe=t=>{i.value=t,O.value=!0},me=async(t,e)=>{switch(t){case"view":oe(e);break;case"share":ne(e);break;case"delete":await ge(e);break}},ne=async t=>{if(!t.content){w.warning("没有可分享的内容");return}H.value=!0,w.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div"),s=m()?540:600,y=m()?20:30;e.style.cssText=`
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
      max-height: ${m()?"3000px":"none"};
      overflow: hidden;
    `;const _=document.createElement("div");_.style.cssText=`
      font-size: ${m()?"20px":"24px"};
      font-weight: 700;
      color: #2c3e50;
      margin-bottom: 16px;
      text-align: center;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    `,_.textContent=`✨ ${t.location||"旅行游记"}`;const r=document.createElement("div");r.style.cssText=`
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
    `;const T=document.createElement("div");T.style.cssText=`
      display: flex;
      align-items: center;
      gap: 6px;
    `;const L=document.createElement("div");L.style.cssText=`
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
    `;const $=ce.user,V=($==null?void 0:$.username)||($==null?void 0:$.email)||"旅行者";L.textContent=V.charAt(0).toUpperCase();const E=document.createElement("span");E.style.cssText=`
      font-weight: 600;
      color: #333;
      font-size: 12px;
    `,E.textContent=V,T.appendChild(L),T.appendChild(E);const N=document.createElement("div");if(N.style.cssText=`
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 10px;
    `,t.location){const g=document.createElement("div");g.style.cssText=`
        display: flex;
        align-items: center;
        gap: 2px;
        padding: 3px 6px;
        background: rgba(102, 126, 234, 0.1);
        border-radius: 8px;
        color: #667eea;
        font-weight: 500;
        font-size: 10px;
      `,g.innerHTML=`📍 ${t.location}`,N.appendChild(g)}const R=document.createElement("div");R.style.cssText=`
      display: flex;
      align-items: center;
      gap: 2px;
      padding: 3px 6px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 8px;
      color: #43e97b;
      font-weight: 500;
      font-size: 10px;
    `,R.innerHTML=`🕒 ${ie(t.travel_date||t.created_at)}`,N.appendChild(R),r.appendChild(T),r.appendChild(N);const Y=document.createElement("div");Y.style.cssText=`
      font-size: ${m()?"14px":"16px"};
      line-height: 1.6;
      margin-bottom: 16px;
      word-wrap: break-word;
      overflow-wrap: break-word;
    `;let U=t.content,x=[];try{t.image_urls&&(x=JSON.parse(t.image_urls))}catch(g){console.warn("解析图片URL失败:",g)}U=U.replace(/\[图(\d+)\]/g,(g,h)=>{const b=parseInt(h)-1;if(b>=0&&b<x.length&&x[b]){const fe=m()?"480px":"540px";return`<img src="${x[b]}" alt="图片${h}" style="width: 100%; max-width: ${fe}; height: auto; border-radius: 8px; margin: 12px 0; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); display: block;" />`}else return`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${h}</div>`}),U=U.replace(/\n/g,"<br>"),Y.innerHTML=U;const S=document.createElement("div");S.style.cssText=`
      margin-top: 20px;
      padding-top: 16px;
      border-top: 1px solid #f0f0f0;
      text-align: center;
      font-size: 12px;
      color: #999;
    `,S.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 4px;">由AI智能生成</div>
      <div style="font-size: 11px;">让每一次旅行都有精彩的故事</div>
    `,e.appendChild(_),e.appendChild(r),e.appendChild(Y),e.appendChild(S),document.body.appendChild(e);const W=e.querySelectorAll("img"),q=Array.from(W).map(g=>new Promise(h=>{g.complete?h():(g.onload=h,g.onerror=h)}));await Promise.all(q);const a={useCORS:!0,allowTaint:!0,scale:m()?1.5:2,backgroundColor:"#ffffff",logging:!1,width:s,height:Math.min(e.scrollHeight,m()?3e3:5e3),scrollX:0,scrollY:0,windowWidth:s,windowHeight:Math.min(e.scrollHeight,m()?3e3:5e3)},F=await Ve(e,a);document.body.removeChild(e),F.toBlob(g=>{if(g){const h=URL.createObjectURL(g);if(ue())j.value=h,P.value=!0,m()?w.success("图片已生成！如保存不完整，请尝试截屏保存"):w.success("图片已生成，请长按图片保存到相册");else{const b=document.createElement("a");b.href=h,b.download=`旅行游记_${t.location||"未知地点"}_${ie(t.travel_date||t.created_at)}.png`,document.body.appendChild(b),b.click(),document.body.removeChild(b),URL.revokeObjectURL(h),w.success("分享图片已生成并下载")}}else throw new Error("图片生成失败")},"image/png",m()?.8:.9)}catch(e){console.error("生成分享图片失败:",e),w.error("生成分享图片失败，请重试")}finally{H.value=!1}},ge=async t=>{try{await Te.confirm(`确定要删除游记"${t.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await re.delete(`/travel-notes/${t.id}`),w.success("删除成功"),C()}catch(e){e!=="cancel"&&w.error("删除失败")}},Z=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ve=(t,e=120)=>{if(!t)return"暂无内容";const s=t.replace(/<[^>]*>/g,"");return s.length>e?s.substring(0,e)+"...":s},se=t=>{const e=X.find(s=>s.value===t);return e?e.label:t},ie=t=>t?new Date(t).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return be(()=>{C()}),(t,e)=>{var q;const s=d("el-icon"),y=d("el-input"),_=d("el-col"),r=d("el-option"),T=d("el-select"),L=d("el-date-picker"),$=d("el-row"),V=d("el-button"),E=d("el-dropdown-item"),N=d("el-dropdown-menu"),R=d("el-dropdown"),Y=d("el-tag"),U=d("el-pagination"),x=d("el-descriptions-item"),S=d("el-descriptions"),W=d("el-dialog");return c(),f("div",Ue,[o("div",De,[o("div",Le,[e[17]||(e[17]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=a=>t.$router.push("/dashboard"))},[o("div",Ne,[l(s,{size:"18"},{default:n(()=>[l(z(de))]),_:1})]),e[16]||(e[16]=o("span",{class:"back-text"},"返回首页",-1))])]),o("div",Ye,[o("div",Ie,[e[18]||(e[18]=o("div",{class:"mobile-history-title"},[o("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=a=>t.$router.push("/dashboard"))},[l(s,{size:"16"},{default:n(()=>[l(z(de))]),_:1})])])])]),o("div",He,[o("div",Re,[l($,{gutter:16},{default:n(()=>[l(_,{span:8},{default:n(()=>[l(y,{modelValue:M.value,"onUpdate:modelValue":e[2]||(e[2]=a=>M.value=a),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ae},null,8,["modelValue"])]),_:1}),l(_,{span:8},{default:n(()=>[l(T,{modelValue:D.value,"onUpdate:modelValue":e[3]||(e[3]=a=>D.value=a),placeholder:"筛选模型",clearable:"",onChange:C},{default:n(()=>[l(r,{label:"全部模型",value:""}),(c(),f(ee,null,te(X,a=>l(r,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),l(_,{span:8},{default:n(()=>[l(L,{modelValue:k.value,"onUpdate:modelValue":e[4]||(e[4]=a=>k.value=a),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C},null,8,["modelValue"])]),_:1})]),_:1})]),o("div",Se,[o("div",Be,[l(y,{modelValue:M.value,"onUpdate:modelValue":e[5]||(e[5]=a=>M.value=a),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:ae,class:"mobile-search-input"},null,8,["modelValue"])]),o("div",Ae,[l(T,{modelValue:D.value,"onUpdate:modelValue":e[6]||(e[6]=a=>D.value=a),placeholder:"筛选模型",clearable:"",onChange:C,class:"mobile-filter-select"},{default:n(()=>[l(r,{label:"全部模型",value:""}),(c(),f(ee,null,te(X,a=>l(r,{key:a.value,label:a.label,value:a.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),l(L,{modelValue:k.value,"onUpdate:modelValue":e[7]||(e[7]=a=>k.value=a),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:C,class:"mobile-date-picker"},null,8,["modelValue"])])])]),o("div",Oe,[J.value?(c(),f("div",Pe,[l(s,{size:"48",class:"rotating"},{default:n(()=>[l(z(ye))]),_:1}),e[19]||(e[19]=o("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):B.value.length===0?(c(),f("div",je,[l(s,{size:"64"},{default:n(()=>[l(z(we))]),_:1}),o("p",We,u(M.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(c(),f("div",qe,[o("div",Fe,[(c(!0),f(ee,null,te(B.value,a=>(c(),f("div",{key:a.id,class:"note-card-small",onClick:F=>oe(a)},[o("div",Ge,[o("div",Ke,[o("h3",null,u(a.location||"未知地点"),1)]),l(R,{onCommand:F=>me(F,a),onClick:e[8]||(e[8]=Ce(()=>{},["stop"]))},{dropdown:n(()=>[l(N,null,{default:n(()=>[l(E,{command:"view"},{default:n(()=>e[20]||(e[20]=[p("查看详情")])),_:1,__:[20]}),l(E,{command:"share"},{default:n(()=>e[21]||(e[21]=[p("分享图片")])),_:1,__:[21]}),l(E,{command:"delete",divided:""},{default:n(()=>e[22]||(e[22]=[p("删除")])),_:1,__:[22]})]),_:1})]),default:n(()=>[l(V,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[l(s,null,{default:n(()=>[l(z(ke))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),o("div",Xe,[a.model_used?(c(),le(Y,{key:0,size:"small",type:"info"},{default:n(()=>[p(u(se(a.model_used)),1)]),_:2},1024)):I("",!0),a.writing_style?(c(),le(Y,{key:1,size:"small",type:"success"},{default:n(()=>[p(u(a.writing_style),1)]),_:2},1024)):I("",!0)]),o("div",Qe,[o("p",null,u(ve(a.content,120)),1)]),o("div",Ze,[o("div",et,[l(s,null,{default:n(()=>[l(z($e))]),_:1}),o("span",null,u(Z(a.travel_date||a.created_at)),1)]),a.companions?(c(),f("div",tt,[l(s,null,{default:n(()=>[l(z(ze))]),_:1}),o("span",null,u(a.companions),1)])):I("",!0)])],8,Je))),128))]),G.value>K.value?(c(),f("div",lt,[l(U,{"current-page":A.value,"onUpdate:currentPage":e[9]||(e[9]=a=>A.value=a),"page-size":K.value,total:G.value,layout:"prev, pager, next, jumper",onCurrentChange:C},null,8,["current-page","page-size","total"])])):I("",!0)]))]),l(W,{modelValue:O.value,"onUpdate:modelValue":e[12]||(e[12]=a=>O.value=a),title:((q=i.value)==null?void 0:q.location)||"游记详情",width:"90%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[l(V,{onClick:e[10]||(e[10]=a=>O.value=!1)},{default:n(()=>e[23]||(e[23]=[p("关闭")])),_:1,__:[23]}),l(V,{type:"primary",onClick:e[11]||(e[11]=a=>ne(i.value)),loading:H.value},{default:n(()=>[H.value?I("",!0):(c(),le(s,{key:0},{default:n(()=>[l(z(Me))]),_:1})),p(" "+u(H.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[i.value?(c(),f("div",at,[o("div",ot,[l(S,{column:2,border:""},{default:n(()=>[l(x,{label:"地点"},{default:n(()=>[p(u(i.value.location||"未知"),1)]),_:1}),l(x,{label:"旅行日期"},{default:n(()=>[p(u(Z(i.value.travel_date)),1)]),_:1}),l(x,{label:"同行者"},{default:n(()=>[p(u(i.value.companions||"未填写"),1)]),_:1}),l(x,{label:"创建时间"},{default:n(()=>[p(u(Z(i.value.created_at)),1)]),_:1}),l(x,{label:"使用模型"},{default:n(()=>[p(u(se(i.value.model_used)),1)]),_:1}),l(x,{label:"写作风格"},{default:n(()=>[p(u(i.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),o("div",nt,[o("div",{class:"result-content",innerHTML:pe.value},null,8,st)])])):I("",!0)]),_:1},8,["modelValue","title"]),l(W,{modelValue:P.value,"onUpdate:modelValue":e[14]||(e[14]=a=>P.value=a),title:"分享图片",width:"90%",class:"image-preview-dialog",onClose:e[15]||(e[15]=()=>{t.URL.revokeObjectURL(j.value),j.value=""})},{footer:n(()=>[l(V,{onClick:e[13]||(e[13]=a=>P.value=!1),type:"primary"},{default:n(()=>e[26]||(e[26]=[p("知道了")])),_:1,__:[26]})]),default:n(()=>[o("div",it,[o("img",{src:j.value,alt:"分享图片",class:"preview-image"},null,8,rt),o("div",dt,[e[25]||(e[25]=o("div",{class:"tip-icon"},"💾",-1)),o("div",ct,[o("p",ut,u(m()?"保存图片到相册":"长按图片保存到相册"),1),m()?(c(),f("div",mt,e[24]||(e[24]=[o("p",{class:"tip-desc"},'• 长按图片，选择"保存图片"',-1),o("p",{class:"tip-desc"},"• 如果长按无效，可以截屏保存",-1),o("p",{class:"tip-desc"},'• 或者点击右上角"..."分享给朋友',-1)]))):(c(),f("p",pt,'在图片上长按，选择"保存图片"或"存储图像"'))])])])]),_:1},8,["modelValue"])])}}},ht=Ee(gt,[["__scopeId","data-v-dc313320"]]);export{ht as default};
