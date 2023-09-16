import{C as N,d as te,r as s,o as oe,k as u,a as T,c as ne,j as l,l as o,e as a,y as b,h as m,b as S,m as re,q as de,F as se,E,p as ie,f as ue,_ as ce}from"./index-059ef627.js";import{u as pe}from"./setting-453cfe63.js";let me=(r,_,x="")=>N({url:`/admin/acl/role/${r}/${_}?roleName=${x}`,method:"get"}),fe=r=>r.id?N({url:"/admin/acl/role/update",method:"put",data:r}):N({url:"/admin/acl/role/save",method:"post",data:r}),_e=r=>N({url:`/admin/acl/role/remove/${r}`,method:"delete"}),ge=r=>N({url:`/admin/acl/permission/toAssign/${r}`,method:"get"}),ve=(r,_)=>N({url:`/admin/acl/permission/doAssign/?roleId=${r}&permissionId=${_}`,method:"post"});const ye=r=>(ie("data-v-3610d153"),r=r(),ue(),r),he={class:"dialog-footer"},ke=ye(()=>S("h4",null,"分配菜单与按钮的权限",-1)),Ce={style:{flex:"auto"}},be=te({__name:"role",setup(r){let _=s([]),x=s(""),g=s(1),v=s(5),V=s(""),y=async()=>{const t=await me(g.value,v.value,V.value);t.code==200&&(_.value=t.data.records,x.value=t.data.total)};oe(()=>y());let j=t=>{v.value=t,y()},M=t=>{g.value=t,y()},$=()=>{y()};const P=pe();let R=()=>{P.refsh=!P.refsh},f=s(!1),w=s(),D=()=>{var t;f.value=!0,c.value={roleName:"",id:""},c.value.roleName="",(t=w.value)==null||t.clearValidate("roleName")},c=s({roleName:"",id:""}),H=async()=>{var e;await((e=w.value)==null?void 0:e.validate()),(await fe(c.value)).code==200&&(f.value=!1,E({type:"success",message:c.value.id?"修改成功":"新增成功"})),y()},O=t=>{var e;f.value=!0,c.value.roleName=t.roleName,c.value.id=t.id,(e=w.value)==null||e.clearValidate("roleName")},G={roleName:[{required:!0,trigger:"blur",validator:(t,e,d)=>{e.trim().length>1?d():d(new Error("不能低于1位"))}}]},J=async t=>{const e=await _e(t.id);y(),e.code==200&&E({type:"success",message:"删除成功"})},p=s(!1);const K={children:"children",label:"name"};let I=s([]),q=s(""),Q=async t=>{z.value=[],p.value=!0,q.value=t.id;const e=await ge(t.id);e.code==200&&(I.value=e.data,B(I.value,z.value))},B=(t,e)=>(t.forEach(d=>{d.select&&d.level==4&&e.push(d.id),d.children&&d.children.length>0&&B(d.children,e)}),e),z=s([]),W=()=>{f.value=!1,z.value=[]},A=s(),U=s([]),X=async()=>{const t=A.value.getCheckedNodes(),e=A.value.getHalfCheckedNodes();let d=t.map(k=>k.id),h=e.map(k=>k.id);console.log(d,111),console.log(h,222),U.value=d.concat(h),console.log(U.value,555),(await ve(q.value,U.value)).code==200&&(p.value=!1,E({type:"success",message:"更改角色权限成功"}))};return(t,e)=>{const d=u("el-input"),h=u("el-form-item"),i=u("el-button"),k=u("el-form"),F=u("el-card"),C=u("el-table-column"),Y=u("el-table"),Z=u("el-pagination"),ee=u("el-dialog"),le=u("el-tree"),ae=u("el-drawer");return T(),ne(se,null,[l(F,{style:{height:"80px"}},{default:o(()=>[l(k,{inline:"true",class:"like"},{default:o(()=>[l(h,{label:"用户名:"},{default:o(()=>[l(d,{modelValue:a(V),"onUpdate:modelValue":e[0]||(e[0]=n=>b(V)?V.value=n:V=n),onChange:a($)},null,8,["modelValue","onChange"])]),_:1}),l(h,null,{default:o(()=>[l(i,{type:"primary",onClick:a($)},{default:o(()=>[m(" 搜索")]),_:1},8,["onClick"]),l(i,{onClick:a(R)},{default:o(()=>[m("重置")]),_:1},8,["onClick"])]),_:1})]),_:1})]),_:1}),l(F,{style:{"margin-top":"10px"}},{default:o(()=>[l(i,{icon:"Plus",type:"primary",style:{"margin-bottom":"10px"},onClick:a(D)},{default:o(()=>[m("添加角色")]),_:1},8,["onClick"]),l(Y,{border:"",data:a(_)},{default:o(()=>[l(C,{label:"#",type:"index",align:"center",width:"80"}),l(C,{label:"id",width:"200",prop:"id",align:"center"}),l(C,{label:"角色名称",width:"200",prop:"roleName",align:"center"}),l(C,{label:"创建时间",width:"200",prop:"createTime"}),l(C,{label:"更新时间",width:"200",prop:"updateTime"}),l(C,{label:"操作"},{default:o(({row:n,$index:Ve})=>[l(i,{type:"primary",size:"small",icon:"User",onClick:L=>a(Q)(n)},{default:o(()=>[m("分配角色")]),_:2},1032,["onClick"]),l(i,{type:"primary",size:"small",icon:"Edit",onClick:L=>a(O)(n)},{default:o(()=>[m("编辑")]),_:2},1032,["onClick"]),l(i,{type:"primary",size:"small",icon:"Delete",onClick:L=>a(J)(n)},{default:o(()=>[m("删除")]),_:2},1032,["onClick"])]),_:1})]),_:1},8,["data"]),l(Z,{"current-page":a(g),"onUpdate:currentPage":e[1]||(e[1]=n=>b(g)?g.value=n:g=n),"page-size":a(v),"onUpdate:pageSize":e[2]||(e[2]=n=>b(v)?v.value=n:v=n),"page-sizes":[2,3,5,7,9],background:"true",layout:"prev, pager, next, jumper,->,total, sizes,",total:a(x),onSizeChange:a(j),onCurrentChange:a(M),style:{"margin-top":"20px"}},null,8,["current-page","page-size","total","onSizeChange","onCurrentChange"])]),_:1}),l(ee,{modelValue:a(f),"onUpdate:modelValue":e[4]||(e[4]=n=>b(f)?f.value=n:f=n),title:a(c).id?"修改":"新增",width:"30%"},{footer:o(()=>[S("span",he,[l(i,{onClick:a(W)},{default:o(()=>[m("取消")]),_:1},8,["onClick"]),l(i,{type:"primary",onClick:a(H)},{default:o(()=>[m(" 确定 ")]),_:1},8,["onClick"])])]),default:o(()=>[S("span",null,[l(k,{rules:a(G),model:a(c),ref_key:"ruleForm",ref:w},{default:o(()=>[l(h,{label:"角色名称",prop:"roleName"},{default:o(()=>[l(d,{modelValue:a(c).roleName,"onUpdate:modelValue":e[3]||(e[3]=n=>a(c).roleName=n)},null,8,["modelValue"])]),_:1})]),_:1},8,["rules","model"])])]),_:1},8,["modelValue","title"]),a(p)?(T(),re(ae,{key:0,modelValue:a(p),"onUpdate:modelValue":e[6]||(e[6]=n=>b(p)?p.value=n:p=n),direction:"rtl"},{header:o(()=>[ke]),default:o(()=>[l(le,{ref_key:"tree",ref:A,data:a(I),"show-checkbox":"","node-key":"id","default-expand-all":"","default-expanded-keys":[1,2,3],"default-checked-keys":a(z),props:K},null,8,["data","default-checked-keys"])]),footer:o(()=>[S("div",Ce,[l(i,{onClick:e[5]||(e[5]=n=>b(p)?p.value=!1:p=!1)},{default:o(()=>[m("取消")]),_:1}),l(i,{type:"primary",onClick:a(X)},{default:o(()=>[m("确认")]),_:1},8,["onClick"])])]),_:1},8,["modelValue"])):de("",!0)],64)}}});const ze=ce(be,[["__scopeId","data-v-3610d153"]]);export{ze as default};
