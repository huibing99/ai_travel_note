import{u as de,a as ce,r as _,j as ue,k as pe,c as d,o as u,d as x,e as o,f as a,w as n,t as p,F as G,l as K,H as D,n as te,E,h as C,N as le,B as me,p as ge,i as g,C as fe,D as ve,G as X,I as _e,v as xe,J as be,m as he}from"./index-fad95d91.js";import{h as ye}from"./html2canvas.esm-85f1a6b6.js";import{_ as we}from"./_plugin-vue_export-helper-c27b6911.js";const ke={class:"dashboard-container"},Ce={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Te={class:"mobile-hidden",style:{display:"flex","justify-content":"space-between","align-items":"center"}},ze={class:"back-icon"},$e={class:"mobile-only"},Ve={class:"mobile-history-header"},Ee={class:"dashboard-card",style:{padding:"20px","margin-bottom":"20px"}},Me={class:"mobile-hidden"},De={class:"mobile-only"},Ne={class:"mobile-search-section"},Ue={class:"mobile-filters"},Le={class:"dashboard-card",style:{padding:"30px"}},Ye={key:0,style:{"text-align":"center",padding:"60px"}},Ie={key:1,style:{"text-align":"center",padding:"60px",color:"#999"}},Se={style:{margin:"20px 0 0 0","font-size":"16px"}},He={key:2},Re={class:"notes-grid"},Be=["onClick"],je={class:"card-header"},Ae={class:"location-title"},Oe={class:"card-tags"},Pe={class:"card-content"},Fe={class:"card-footer"},Je={class:"date-info"},qe={key:0,class:"companions-info"},Ge={key:0,style:{"text-align":"center","margin-top":"30px"}},Ke={key:0,class:"note-detail"},Xe={style:{"margin-bottom":"20px"}},Qe={class:"generate-result"},We=["innerHTML"],Ze={__name:"History",setup(et){de();const ae=ce(),j=_(!1),S=_([]),A=_(0),H=_(1),O=_(10),T=_(""),M=_(""),h=_([]),R=_(!1),i=_(null),N=_(!1),P=[{label:"模型1",value:"gemini-2.5-flash"},{label:"模型2",value:"gemini-2.0-flash"},{label:"模型3",value:"gpt-4o-mini"},{label:"模型4",value:"qwen2.5-vl-32b-instruct"},{label:"模型5",value:"hunyuan-turbo-vision"}],oe=ue(()=>{var s;if(!((s=i.value)!=null&&s.content))return"";let l=i.value.content,e=[];try{i.value.image_urls?(console.log("原始image_urls数据:",i.value.image_urls),e=JSON.parse(i.value.image_urls),console.log("解析后的imageUrls:",e)):console.warn("selectedNote.image_urls为空或不存在")}catch(f){console.warn("解析图片URL失败:",f),console.warn("原始数据:",i.value.image_urls)}return console.log("游记内容中的图片标记:",l.match(/\[图(\d+)\]/g)),l=l.replace(/\[图(\d+)\]/g,(f,v)=>{const c=parseInt(v)-1;return console.log(`处理图片标记 ${f}, index: ${c}, imageUrls长度: ${e.length}`),c>=0&&c<e.length&&e[c]?(console.log(`显示实际图片: ${e[c]}`),`<img src="${e[c]}" alt="图片${v}" style="max-width: 100%; height: auto; border-radius: 8px; margin: 16px 0; box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);" />`):(console.log(`显示占位符: ${f}`),`<div class="image-placeholder" style="
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
          <div>图片 ${v}</div>
          <div style="font-size: 12px; color: #999; margin-top: 4px;">图片加载失败</div>
        </div>
      </div>`)}),l}),y=async()=>{j.value=!0;try{const l={page:H.value,limit:O.value};T.value&&(l.search=T.value),M.value&&(l.model=M.value),h.value&&h.value.length===2&&(l.start_date=h.value[0],l.end_date=h.value[1]);const e=await te.get("/travel-notes",{params:l});S.value=e.data.items||e.data,A.value=e.data.total||S.value.length}catch(l){console.error("加载游记失败:",l),E.error("加载游记失败")}finally{j.value=!1}};let F=null;const Q=()=>{F&&clearTimeout(F),F=setTimeout(()=>{H.value=1,y()},500)},W=l=>{i.value=l,R.value=!0},ne=async(l,e)=>{switch(l){case"view":W(e);break;case"share":Z(e);break;case"delete":await se(e);break}},Z=async l=>{if(!l.content){E.warning("没有可分享的内容");return}N.value=!0,E.info("正在生成分享图片，请稍候...");try{const e=document.createElement("div");e.style.cssText=`
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
    `;const v=document.createElement("div");v.style.cssText=`
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
    `;const b=ae.user,U=(b==null?void 0:b.username)||(b==null?void 0:b.email)||"旅行者";c.textContent=U.charAt(0).toUpperCase();const L=document.createElement("span");L.style.cssText=`
      font-weight: 600;
      color: #333;
    `,L.textContent=U,v.appendChild(c),v.appendChild(L);const w=document.createElement("div");if(w.style.cssText=`
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
      `,r.innerHTML=`📍 ${l.location}`,w.appendChild(r)}const z=document.createElement("div");z.style.cssText=`
      display: flex;
      align-items: center;
      gap: 4px;
      padding: 4px 8px;
      background: rgba(67, 233, 123, 0.1);
      border-radius: 12px;
      color: #43e97b;
      font-weight: 500;
    `,z.innerHTML=`🕒 ${re(l.travel_date||l.created_at)}`,w.appendChild(z),f.appendChild(v),f.appendChild(w);const Y=document.createElement("div");Y.style.cssText=`
      font-size: 16px;
      line-height: 1.8;
      margin-bottom: 20px;
    `;let $=l.content,V=[];try{l.image_urls&&(V=JSON.parse(l.image_urls))}catch(r){console.warn("解析图片URL失败:",r)}$=$.replace(/\[图(\d+)\]/g,(r,t)=>{const m=parseInt(t)-1;return m>=0&&m<V.length&&V[m]?`<img src="${V[m]}" alt="图片${t}" style="width: 100%; max-width: 540px; height: auto; border-radius: 12px; margin: 16px 0; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);" />`:`<div style="background: #f5f5f5; border: 2px dashed #ddd; border-radius: 8px; padding: 20px; margin: 16px 0; text-align: center; color: #999;">📷 图片${t}</div>`}),$=$.replace(/\n/g,"<br>"),Y.innerHTML=$;const I=document.createElement("div");I.style.cssText=`
      margin-top: 30px;
      padding-top: 20px;
      border-top: 2px solid #f0f0f0;
      text-align: center;
      font-size: 14px;
      color: #999;
    `,I.innerHTML=`
      <div style="font-weight: 600; color: #667eea; margin-bottom: 8px;">由AI智能生成</div>
      <div>让每一次旅行都有精彩的故事</div>
    `,e.appendChild(s),e.appendChild(f),e.appendChild(Y),e.appendChild(I),document.body.appendChild(e);const k=e.querySelectorAll("img"),J=Array.from(k).map(r=>new Promise(t=>{r.complete?t():(r.onload=t,r.onerror=t)}));await Promise.all(J);const q=await ye(e,{useCORS:!0,allowTaint:!0,scale:2,backgroundColor:"#ffffff",logging:!1,width:600,height:e.scrollHeight,scrollX:0,scrollY:0});document.body.removeChild(e),q.toBlob(r=>{if(r){const t=URL.createObjectURL(r),m=document.createElement("a");m.href=t,m.download=`旅行游记_${l.location||"未知地点"}_${B(l.travel_date||l.created_at)}.png`,document.body.appendChild(m),m.click(),document.body.removeChild(m),URL.revokeObjectURL(t),E.success("分享图片已生成并下载")}else throw new Error("图片生成失败")},"image/png",.9)}catch(e){console.error("生成分享图片失败:",e),E.error("生成分享图片失败，请重试")}finally{N.value=!1}},se=async l=>{try{await he.confirm(`确定要删除游记"${l.location||"未知地点"}"吗？此操作不可恢复。`,"确认删除",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}),await te.delete(`/travel-notes/${l.id}`),E.success("删除成功"),y()}catch(e){e!=="cancel"&&E.error("删除失败")}},B=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"long",day:"numeric"}):"未知",ie=(l,e=120)=>{if(!l)return"暂无内容";const s=l.replace(/<[^>]*>/g,"");return s.length>e?s.substring(0,e)+"...":s},ee=l=>{const e=P.find(s=>s.value===l);return e?e.label:l},re=l=>l?new Date(l).toLocaleDateString("zh-CN",{year:"numeric",month:"2-digit",day:"2-digit"}):"未知时间";return pe(()=>{y()}),(l,e)=>{var r;const s=d("el-icon"),f=d("el-input"),v=d("el-col"),c=d("el-option"),b=d("el-select"),U=d("el-date-picker"),L=d("el-row"),w=d("el-button"),z=d("el-dropdown-item"),Y=d("el-dropdown-menu"),$=d("el-dropdown"),V=d("el-tag"),I=d("el-pagination"),k=d("el-descriptions-item"),J=d("el-descriptions"),q=d("el-dialog");return u(),x("div",ke,[o("div",Ce,[o("div",Te,[e[14]||(e[14]=o("div",{style:{flex:"1"}},[o("h1",{class:"gradient-text",style:{"font-size":"24px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"8px 0 0 0",color:"#666"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"back-button",onClick:e[0]||(e[0]=t=>l.$router.push("/dashboard"))},[o("div",ze,[a(s,{size:"18"},{default:n(()=>[a(C(le))]),_:1})]),e[13]||(e[13]=o("span",{class:"back-text"},"返回首页",-1))])]),o("div",$e,[o("div",Ve,[e[15]||(e[15]=o("div",{class:"mobile-history-title"},[o("h1",{class:"gradient-text",style:{"font-size":"20px",margin:"0"}}," 📚 历史游记 "),o("p",{style:{margin:"4px 0 0 0",color:"#666","font-size":"14px"}}," 查看您创作的所有旅行游记 ")],-1)),o("div",{class:"mobile-back-button",onClick:e[1]||(e[1]=t=>l.$router.push("/dashboard"))},[a(s,{size:"16"},{default:n(()=>[a(C(le))]),_:1})])])])]),o("div",Ee,[o("div",Me,[a(L,{gutter:16},{default:n(()=>[a(v,{span:8},{default:n(()=>[a(f,{modelValue:T.value,"onUpdate:modelValue":e[2]||(e[2]=t=>T.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:Q},null,8,["modelValue"])]),_:1}),a(v,{span:8},{default:n(()=>[a(b,{modelValue:M.value,"onUpdate:modelValue":e[3]||(e[3]=t=>M.value=t),placeholder:"筛选模型",clearable:"",onChange:y},{default:n(()=>[a(c,{label:"全部模型",value:""}),(u(),x(G,null,K(P,t=>a(c,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"])]),_:1}),a(v,{span:8},{default:n(()=>[a(U,{modelValue:h.value,"onUpdate:modelValue":e[4]||(e[4]=t=>h.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:y},null,8,["modelValue"])]),_:1})]),_:1})]),o("div",De,[o("div",Ne,[a(f,{modelValue:T.value,"onUpdate:modelValue":e[5]||(e[5]=t=>T.value=t),placeholder:"搜索地点或内容...","prefix-icon":"Search",clearable:"",onInput:Q,class:"mobile-search-input"},null,8,["modelValue"])]),o("div",Ue,[a(b,{modelValue:M.value,"onUpdate:modelValue":e[6]||(e[6]=t=>M.value=t),placeholder:"筛选模型",clearable:"",onChange:y,class:"mobile-filter-select"},{default:n(()=>[a(c,{label:"全部模型",value:""}),(u(),x(G,null,K(P,t=>a(c,{key:t.value,label:t.label,value:t.value},null,8,["label","value"])),64))]),_:1},8,["modelValue"]),a(U,{modelValue:h.value,"onUpdate:modelValue":e[7]||(e[7]=t=>h.value=t),type:"daterange","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期",format:"YYYY-MM-DD","value-format":"YYYY-MM-DD",onChange:y,class:"mobile-date-picker"},null,8,["modelValue"])])])]),o("div",Le,[j.value?(u(),x("div",Ye,[a(s,{size:"48",class:"rotating"},{default:n(()=>[a(C(me))]),_:1}),e[16]||(e[16]=o("p",{style:{margin:"16px 0 0 0",color:"#666"}},"加载中...",-1))])):S.value.length===0?(u(),x("div",Ie,[a(s,{size:"64"},{default:n(()=>[a(C(ge))]),_:1}),o("p",Se,p(T.value?"没有找到相关游记":"还没有游记，快去创建第一篇吧！"),1)])):(u(),x("div",He,[o("div",Re,[(u(!0),x(G,null,K(S.value,t=>(u(),x("div",{key:t.id,class:"note-card-small",onClick:m=>W(t)},[o("div",je,[o("div",Ae,[o("h3",null,p(t.location||"未知地点"),1)]),a($,{onCommand:m=>ne(m,t),onClick:e[8]||(e[8]=ve(()=>{},["stop"]))},{dropdown:n(()=>[a(Y,null,{default:n(()=>[a(z,{command:"view"},{default:n(()=>e[17]||(e[17]=[g("查看详情")])),_:1,__:[17]}),a(z,{command:"share"},{default:n(()=>e[18]||(e[18]=[g("分享图片")])),_:1,__:[18]}),a(z,{command:"delete",divided:""},{default:n(()=>e[19]||(e[19]=[g("删除")])),_:1,__:[19]})]),_:1})]),default:n(()=>[a(w,{circle:"",size:"small",class:"more-btn"},{default:n(()=>[a(s,null,{default:n(()=>[a(C(fe))]),_:1})]),_:1})]),_:2},1032,["onCommand"])]),o("div",Oe,[t.model_used?(u(),X(V,{key:0,size:"small",type:"info"},{default:n(()=>[g(p(ee(t.model_used)),1)]),_:2},1024)):D("",!0),t.writing_style?(u(),X(V,{key:1,size:"small",type:"success"},{default:n(()=>[g(p(t.writing_style),1)]),_:2},1024)):D("",!0)]),o("div",Pe,[o("p",null,p(ie(t.content,120)),1)]),o("div",Fe,[o("div",Je,[a(s,null,{default:n(()=>[a(C(_e))]),_:1}),o("span",null,p(B(t.travel_date||t.created_at)),1)]),t.companions?(u(),x("div",qe,[a(s,null,{default:n(()=>[a(C(xe))]),_:1}),o("span",null,p(t.companions),1)])):D("",!0)])],8,Be))),128))]),A.value>O.value?(u(),x("div",Ge,[a(I,{"current-page":H.value,"onUpdate:currentPage":e[9]||(e[9]=t=>H.value=t),"page-size":O.value,total:A.value,layout:"prev, pager, next, jumper",onCurrentChange:y},null,8,["current-page","page-size","total"])])):D("",!0)]))]),a(q,{modelValue:R.value,"onUpdate:modelValue":e[12]||(e[12]=t=>R.value=t),title:((r=i.value)==null?void 0:r.location)||"游记详情",width:"50%",top:"3vh",class:"note-detail-dialog"},{footer:n(()=>[a(w,{onClick:e[10]||(e[10]=t=>R.value=!1)},{default:n(()=>e[20]||(e[20]=[g("关闭")])),_:1,__:[20]}),a(w,{type:"primary",onClick:e[11]||(e[11]=t=>Z(i.value)),loading:N.value},{default:n(()=>[N.value?D("",!0):(u(),X(s,{key:0},{default:n(()=>[a(C(be))]),_:1})),g(" "+p(N.value?"生成中...":"分享图片"),1)]),_:1},8,["loading"])]),default:n(()=>[i.value?(u(),x("div",Ke,[o("div",Xe,[a(J,{column:2,border:""},{default:n(()=>[a(k,{label:"地点"},{default:n(()=>[g(p(i.value.location||"未知"),1)]),_:1}),a(k,{label:"旅行日期"},{default:n(()=>[g(p(B(i.value.travel_date)),1)]),_:1}),a(k,{label:"同行者"},{default:n(()=>[g(p(i.value.companions||"未填写"),1)]),_:1}),a(k,{label:"创建时间"},{default:n(()=>[g(p(B(i.value.created_at)),1)]),_:1}),a(k,{label:"使用模型"},{default:n(()=>[g(p(ee(i.value.model_used)),1)]),_:1}),a(k,{label:"写作风格"},{default:n(()=>[g(p(i.value.writing_style||"未指定"),1)]),_:1})]),_:1})]),o("div",Qe,[o("div",{class:"result-content",innerHTML:oe.value},null,8,We)])])):D("",!0)]),_:1},8,["modelValue","title"])])}}},ot=we(Ze,[["__scopeId","data-v-5282d858"]]);export{ot as default};
