(this["webpackJsonppoll-app"]=this["webpackJsonppoll-app"]||[]).push([[0],{141:function(e,t,s){"use strict";s.r(t);var n=s(0),l=s(8),c=s.n(l),o=(s(98),s(38),s(39),s(27)),a=s(12),i=s(10),r=s(11),d=s(17),b=s.n(d),j=s(184),m=s(176),h=s(181),x=s(185),p=s(183),u=s(182),O=s(1);var g=function(e){return Object(O.jsx)(x.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:e.switcher,onClose:e.close,autoHideDuration:3e3,action:[Object(O.jsx)(u.a,{"arial-label":"Close",color:"inherit",onClick:e.close,children:"x"})],children:Object(O.jsx)(p.a,{onClose:e.close,severity:e.nottype,children:e.message})})};var f=function(){const e=Object(a.f)(),[t,s]=Object(n.useState)({id:Object(j.a)(),question:"",error:!1}),[l,c]=Object(n.useState)([{id:Object(j.a)(),options:"",error:!1},{id:Object(j.a)(),options:"",error:!1}]),[d,x]=Object(n.useState)({snackbaropen:!1,msg:"",not:"",Transition:m.a}),p=(e,t)=>0===e.trim().length&&t;Object(n.useEffect)((()=>{0==localStorage.getItem("deletepoll")&&(x({snackbaropen:!0,msg:"Poll deleted!",not:"success"}),localStorage.removeItem("deletepoll"))}));const u=e=>Object(O.jsx)(m.a,{...e,direction:"down"}),f=e=>()=>{x({snackbaropen:!0,msg:"Success, poll submitted!",not:"success",Transition:e})};return Object(O.jsxs)("div",{className:"ui-outer ",children:[Object(O.jsx)("div",{className:"ui-container py-5 px-5",children:Object(O.jsx)("form",{onSubmit:n=>{n.preventDefault();const o=t.question.trim().length>0,a=l.every((e=>e.options.length>0));if(o||s({...t,error:!0}),a){const s={question:t,options:l};b.a.post("http://localhost:5000/api",s).then((function(s){f(u),e.push("/new/?id=".concat(t.id))})).catch((function(e){console.log(e)})),localStorage.setItem("pollcreated",0)}else c([...l].map((e=>""===e.options?{...e,error:!0}:e)))},autoComplete:"off",children:Object(O.jsxs)("div",{className:"mx-auto",children:[Object(O.jsxs)("div",{className:"d-flex justify-content-between flex-column flex-md-row align-items-baseline",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Create Poll"}),Object(O.jsx)("p",{className:"mt-4 mb-0 text-large text-secondary font-medium",children:"Complete below fields to create a poll"})]}),Object(O.jsx)(o.b,{to:"/poll/?id=54bf4315-04a5-4b9d-882d-19e147942ed8",className:"text-decoration-none",children:Object(O.jsx)("span",{className:" align-self-end font-weight-normal",style:{fontSize:"1.3rem"},children:"View a Demo Poll"})})]}),Object(O.jsxs)("div",{className:"mt-4",children:[Object(O.jsxs)("div",{className:"d-flex flex-column ",children:[Object(O.jsx)("label",{className:"mb-3 w-100 font-weight-bold content-text",children:"Poll Question"}),Object(O.jsx)(h.a,{...p(t.question,t.error)&&{error:t.error,helperText:"Enter the question."},id:t.id,name:"question",multiline:!0,rows:3,className:" w-100 py-4 bg-light rounded-lg px-3 outline-none  border border-gray ",placeholder:"What's you favorite TV Show?",value:t.question,onChange:e=>((e,t)=>{s({id:e,question:t.target.value})})(t.id,e)})]}),Object(O.jsx)(g,{switcher:d.snackbaropen,close:e=>{x({snackbaropen:!1})},message:d.msg,nottype:d.not}),l.map(((e,t)=>Object(O.jsx)("div",{className:"options mt-2 flex-column ",children:Object(O.jsx)("div",{className:" mb-3",children:Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsxs)("label",{className:"mb-3 w-100 content-text font-weight-bold",children:["Option ",t+1]}),Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)(h.a,{...p(e.options,e.error)&&{error:e.error,helperText:"Enter atleast 2 options"},id:e.id,name:"options",className:" py-3 rounded-lg px-3 bg-light inputfield focus-shadow  focus-outline-none  border ",placeholder:"Option"+(t+1),value:e.options,onChange:t=>((e,t)=>{const s=l.map((s=>(e===s.id&&(s[t.target.name]=t.target.value),s)));c(s)})(e.id,t)}),Object(O.jsx)("button",{hidden:2===l.length,onClick:()=>(e=>{const t=[...l];t.splice(t.findIndex((t=>t.id===e)),1),c(t)})(e.id),className:" delete ml-2",children:Object(O.jsx)(i.a,{className:" text-danger",icon:r.j})})]})]})})},e.id))),Object(O.jsx)("button",{type:"button",onClick:()=>{c([...l,{id:Object(j.a)(),options:"",error:!1}]),x({snackbaropen:!0,msg:"Added another field!",not:"info"})},className:"px-5 py-3  bg-dark rounded-lg font-weight-bold  border-0 text-white ",children:Object(O.jsxs)("span",{className:"mr-3",children:["Add another option",Object(O.jsx)(i.a,{className:"ml-2",icon:r.f})]})})]}),Object(O.jsx)("div",{className:" mt-5 pt-3 ",children:Object(O.jsxs)("button",{type:"submit",className:"px-5 py-3 bg-success text-white font-weight-bold border-0 rounded-lg",children:[Object(O.jsx)(i.a,{className:"mr-2",icon:r.a}),"Create your poll"]})})]})})}),Object(O.jsx)("p",{className:"text-center font-weight-bold",style:{fontSize:"1.3rem",color:"skyblue"},children:"Built By Salman"}),Object(O.jsx)("p",{className:"text-center",children:Object(O.jsx)(i.a,{className:"display-4 text-dark",icon:r.i})})]})};var w=function(){return Object(O.jsx)("header",{className:"App-header",children:Object(O.jsx)("div",{className:"header",children:Object(O.jsxs)("div",{className:"d-flex flex-column align-items-center",children:[Object(O.jsx)("div",{className:"d-flex align-items-baseline",children:Object(O.jsxs)("a",{className:"page-link",href:"/",children:[Object(O.jsx)(i.a,{className:"mr-2",icon:r.g}),"Opinion Poll"]})}),Object(O.jsx)("p",{className:"mt-2 mb-0 font-italic",style:{fontSize:"1.125rem"},children:"Create anonymous polls for free"})]})})})};var N=function(){return Object(O.jsx)("div",{className:"ui-container py-5 px-5",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:" mb-5 heading",children:"What kind of movies do you like?"}),Object(O.jsxs)("div",{className:"flex flex-column w-75 mr-auto ml-auto",children:[Object(O.jsx)("div",{className:"py-3 w-100 mb-4 shadow-lg hover-zoom px-2  rounded bg-white",children:Object(O.jsxs)("div",{className:"flex align-items-center",children:[Object(O.jsx)("input",{type:"radio",id:"option1",name:"option",value:"adventure",className:"d-inline-block ml-3 mr-3"}),Object(O.jsx)("h4",{className:" font-weight-bold text-primary-dark d-inline-block",children:"Adventure"})]})}),Object(O.jsx)("div",{className:"py-3 w-100 mb-4 shadow-lg hover-zoom px-2  rounded bg-white",children:Object(O.jsxs)("div",{className:"flex align-items-center ",children:[Object(O.jsx)("input",{type:"radio",id:"option2",name:"option",value:"scifi",className:"d-inline-block ml-3 mr-3"}),Object(O.jsx)("h4",{className:" font-weight-bold text-primary-dark d-inline-block",children:"Sci-Fi"})]})}),Object(O.jsx)("div",{className:"py-3 w-100 mb-4 shadow-lg hover-zoom px-2  rounded bg-white",children:Object(O.jsxs)("div",{className:"flex align-items-center ",children:[Object(O.jsx)("input",{type:"radio",id:"option3",name:"option",value:"thriller",className:"d-inline-block ml-3 mr-3"}),Object(O.jsx)("h4",{className:" font-weight-bold text-primary-dark d-inline-block",children:"Thriller"})]})}),Object(O.jsx)("div",{className:"py-3 w-100 mb-4 shadow-lg hover-zoom px-2  rounded bg-white",children:Object(O.jsxs)("div",{className:"flex align-items-center ",children:[Object(O.jsx)("input",{type:"radio",id:"option4",name:"option",value:"scary",className:"d-inline-block ml-3 mr-3"}),Object(O.jsx)("h4",{className:" font-weight-bold text-primary-dark d-inline-block",children:"Scary"})]})}),Object(O.jsxs)("div",{className:"mt-5  ",children:[Object(O.jsx)("buttonx",{className:"focus-outline-none d-inline-block py-3 font-weight-bold focus-shadow  text-lg w-25 w-md-auto bg-success text-white px-2 shadow-lg hover-shadow-lg to-green-500 rounded-lg",children:"Submit your vote"}),Object(O.jsx)("div",{className:"mb-4 d-inline-block"}),Object(O.jsx)("a",{className:"",href:"/",children:Object(O.jsxs)("h5",{className:" mr-2 d-inline-block display-8 float-right text-secondary font-weight-normal",children:["View Results ",Object(O.jsx)(i.a,{icon:r.c})]})})]})]})]})})},y=s(24),v=s.n(y),k=s(62);var S=function(e){let{location:t}=e;const[s,l]=Object(n.useState)(""),[c,o]=Object(n.useState)(""),[a,d]=Object(n.useState)({snackbaropen:!1,msg:"",not:"",Transition:m.a});Object(n.useEffect)((()=>{const e={id:v.a.parse(t.search).id};b.a.post("http://localhost:5000/links",e).then((function(e){const t=e.data.pollid;l(t),o(e.data._id)})).catch((function(e){console.log(e)}))}),[]),Object(n.useEffect)((()=>{0==localStorage.getItem("pollcreated")&&(d({snackbaropen:!0,msg:"Poll created.",not:"success"}),localStorage.removeItem("pollcreated"))}));const j=e=>Object(O.jsx)(m.a,{...e,direction:"down"}),h=e=>()=>{d({snackbaropen:!0,msg:"Copied to Clipboard!",not:"info",Transition:e})};return Object(O.jsx)("div",{className:"ui-outer",children:Object(O.jsx)("div",{className:"ui-container py-5 ",children:Object(O.jsxs)("div",{className:"bg-white w-75 d-flex flex-column border border-gray mx-auto  rounded-lg shadow-lg",children:[Object(O.jsxs)("div",{className:"px-5 pt-5 pb-4 ",children:[Object(O.jsxs)("div",{className:"d-flex flex-column",children:[Object(O.jsx)("h5",{className:"text-primary-dark",children:"The link to your poll is"}),Object(O.jsxs)("div",{className:"d-flex w-100",children:[Object(O.jsx)(g,{switcher:a.snackbaropen,close:e=>{d({snackbaropen:!1})},message:a.msg,nottype:a.not}),Object(O.jsx)(k.CopyToClipboard,{text:"localhost:3000/poll/?id="+s,children:Object(O.jsx)("input",{type:"text",name:"lin",id:"pollURL",className:"w-100 cursor-pointer outline-none py-2 my-3 border px-4 bg-gray-200 text-secondary rounded",readOnly:!0,value:"localhost:3000/poll/?id="+s,onClick:h(j)})})]})]}),Object(O.jsxs)("div",{className:"d-flex flex-column mt-5 py-4 border-top border-gray",children:[Object(O.jsxs)("h5",{className:"text-primary-dark ",children:["The ",Object(O.jsx)("span",{className:"font-weight-bold",children:"admin"})," link to manage your poll is"]}),Object(O.jsxs)("p",{className:"text-sm mt-2 d-flex align-items-center text-warning py-1 font-weight-bold",children:[Object(O.jsx)(i.a,{icon:r.d}),"\xa0Don't share this link with your participants"]}),Object(O.jsx)("div",{className:"d-flex w-100",children:Object(O.jsxs)("div",{className:"w-100 position-relative py-2 px-4 my-3 border rounded cursor-pointer",children:[Object(O.jsx)("input",{type:"text",name:"lin",id:"link",className:"w-100 bg-transparent border-0 outline-none",readOnly:!0,value:"localhost:3000/poll-admin/id=?"+s+"&key="+c}),Object(O.jsx)(k.CopyToClipboard,{text:"localhost:3000/poll-admin/?id="+s+"&key="+c,children:Object(O.jsx)("div",{className:"position-absolute inset-0 text-dark text-center d-flex align-items-center justify-content-center bg-gray-200 hover-bg-gray font-weight-bold w-100 ",style:{opacity:"0.9"},onClick:h(j),children:"Click to copy"})})]})})]})]}),Object(O.jsx)("div",{className:" d-flex px-5 py-4 w-100",children:Object(O.jsxs)("div",{className:"ml-auto d-flex align-items-center",children:[Object(O.jsx)("a",{className:"w-100 font-weight-bold   border-right border-dark pr-4",target:"_blank",href:"/poll/?id="+s,children:"Visit your poll"}),Object(O.jsx)("a",{className:"w-100 pl-4 d-flex align-items-center font-weight-bold text-nowrap",target:"_blank",href:"/poll-admin/?id="+s+"&key="+c,children:"Visit admin page"})]})})]})})})};var C=function(e){let{location:t}=e;const s=Object(a.f)(),[l,c]=Object(n.useState)(""),[d,j]=Object(n.useState)([{id:"",options:"",count:0}]),[m,h]=Object(n.useState)(""),[x,p]=Object(n.useState)(""),[u,f]=Object(n.useState)({id:"",options:"",count:0}),[w,N]=Object(n.useState)({snackbaropen:!1,msg:"",not:""}),[y,k]=Object(n.useState)({id:"",selected:"",show:0});return Object(n.useEffect)((()=>{p(l.toLowerCase().trim().slice(0,2)+m.slice(0,4));var e=JSON.parse(localStorage.getItem(x));null!=e&&e.id===m&&s.push("/poll-result/?id="+m)})),Object(n.useEffect)((()=>{const e=v.a.parse(t.search).id;h(e),b.a.get("http://localhost:5000/getpoll/".concat(e)).then((function(e){let t=[];const s=e.data;c(s.question),s.options.map((e=>(t.push(e),t))),j(t)})).catch((function(e){console.log(e)}))}),[]),Object(O.jsx)("div",{className:"ui-outer",children:Object(O.jsx)("div",{className:"ui-container py-5 px-5",children:Object(O.jsxs)("div",{children:[Object(O.jsx)("h2",{className:" mb-5 w-100 heading",style:{wordWrap:"break-word"},children:l}),Object(O.jsx)("div",{className:"flex flex-column w-75 mr-auto ml-auto",children:Object(O.jsxs)("form",{children:[d.map((e=>Object(O.jsx)("div",{className:"py-3 w-100 mb-4 shadow-lg hover-zoom px-2  rounded bg-white  radio-label",children:Object(O.jsxs)("div",{className:"d-flex align-items-center",children:[Object(O.jsx)("input",{type:"radio",id:e.id,name:"option",value:e.options,checked:u.options===e.options,onChange:()=>function(e){let{option:t}=e;f({id:t.id,options:t.options,count:t.count+1,pollid:m}),k({id:m,selected:t.options,show:0})}({option:e}),className:"d-inline-block ml-3 mr-3"}),Object(O.jsx)("label",{htmlFor:e.id,className:"w-100",children:Object(O.jsx)("h4",{className:" font-weight-bold  text-primary-dark d-inline-block ",style:{wordWrap:"break-word",width:"93%"},children:e.options})})]})},e.id))),Object(O.jsx)(g,{switcher:w.snackbaropen,close:e=>{N({snackbaropen:!1})},message:w.msg,nottype:w.not}),Object(O.jsxs)("div",{className:"mt-5 d-flex flex-column flex-md-row",children:[Object(O.jsx)("div",{className:"col-0 col-md-8 d-flex px-0 justify-content-center justify-content-md-start",children:Object(O.jsx)("button",{type:"submit",onClick:e=>{e.preventDefault(),u.options.length>0?(e.preventDefault(),N({snackbaropen:!0,msg:"Thankyou for your vote!, vote submitted!",not:"success"}),localStorage.setItem(x,[JSON.stringify(y)]),b.a.post("http://localhost:5000/submitresponse",u).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))):N({snackbaropen:!0,msg:"Please, select a option!",not:"error"})},className:"focus-outline-none py-3 font-weight-bold focus-shadow w-50 bg-success border-0 text-white px-2 shadow-lg hover-shadow-lg rounded-lg",children:"Submit your vote"})}),Object(O.jsx)("div",{className:"col-0 col-md-4 mt-4 px-0",children:Object(O.jsx)(o.b,{to:"/poll-result/?id="+m,children:Object(O.jsxs)("h5",{className:" display-8 float-right text-secondary font-weight-normal",children:["View Results ",Object(O.jsx)(i.a,{icon:r.c})]})})})]})]})})]})})})},q=s(53),T=s.n(q),I=s(54),z=s.n(I),E=s(48),P=s(177),D=s(178),J=s(179),V=s(180);var W=function(e){return Object(O.jsxs)("div",{className:"d-flex flex-row flex-md-column",children:[Object(O.jsxs)(P.a,{url:e.url,title:JSON.stringify(e.question),via:"opinion poll",className:"bg-primary text-decoration-none font-weight-bold mb-4 mr-2 py-2 rounded-lg text-center  text-white ",children:[Object(O.jsx)(i.a,{className:"ml-3 mr-3",icon:E.c}),Object(O.jsx)("snap",{className:"d-none d-md-inline-block",children:"Share on Twitter"})]}),Object(O.jsxs)(D.a,{url:e.url,title:JSON.stringify(e.question),separator:" ",className:"bg-success text-decoration-none font-weight-bold mb-4 mr-2 py-2 rounded-lg text-center  text-white ",children:[Object(O.jsx)(i.a,{className:"ml-3 mr-3",icon:E.d}),Object(O.jsx)("snap",{className:"d-none d-md-inline-block",children:"Share on Whatsapp"})]}),Object(O.jsxs)(J.a,{url:e.url,title:JSON.stringify(e.question),className:"bg-info text-decoration-none font-weight-bold mb-4 mr-2 py-2 rounded-lg text-center  text-white ",children:[Object(O.jsx)(i.a,{className:"ml-3 mr-3",icon:E.b}),Object(O.jsx)("snap",{className:"d-none d-md-inline-block",children:"Share on Telegram"})]}),Object(O.jsxs)(V.a,{url:e.url,title:JSON.stringify(e.question),summary:"Opinion poll is a poll app made using react.js. You have been invited to vote! ",className:"bg-primary text-decoration-none font-weight-bold mb-4 mr-2 py-2 rounded-lg text-center  text-white ",children:[Object(O.jsx)(i.a,{className:"ml-3 mr-3",icon:E.a}),Object(O.jsx)("snap",{className:"d-none d-md-inline-block",children:"Share on LinkedIn"})]})]})};var A=function(e){let{location:t}=e;const[s,l]=Object(n.useState)(""),[c,o]=Object(n.useState)(""),[a,d]=Object(n.useState)([{id:"",options:"",count:0}]),[j,m]=Object(n.useState)(!1),[h,x]=Object(n.useState)("");let p=0;a.map((e=>p+=e.count));const[u,f]=Object(n.useState)({snackbaropen:!1,msg:"",not:""});var w=JSON.parse(localStorage.getItem(h));Object(n.useEffect)((()=>{x(c.toLowerCase().trim().slice(0,2)+s.slice(0,4)),null!=w&&w.id===s&&0===w.show&&(f({snackbaropen:!0,msg:"Thankyou for voting!",not:"success"}),localStorage.setItem(h,JSON.stringify({id:w.id,selected:w.selected,show:1})))})),Object(n.useEffect)((()=>{const e=v.a.parse(t.search).id;l(e),b.a.get("http://localhost:5000/getpoll/".concat(e)).then((function(e){let t=[];const s=e.data;o(s.question),s.options.map((e=>(t.push(e),t))),d(t)})).catch((function(e){console.log(e)}))}),[]);const N=()=>Object(O.jsx)("div",{className:"w-100 justify-content-center d-flex align-items-center position-fixed fixed-top",onClick:()=>{m(!1)},style:{height:"100%",zIndex:1,backgroundColor:"rgba(135,206,235 ,0.7)"},children:Object(O.jsxs)("div",{className:"d-flex flex-column align-items-center bg-white",children:[Object(O.jsx)("span",{className:"font-weight-bold ",children:"Scan QR Code"}),Object(O.jsx)(T.a,{value:"http://localhost:3000/poll/?id=".concat(s),size:290,level:"H",includeMargin:!0})]})}),y=()=>Object(O.jsx)("a",{className:"bg-success text-decoration-none font-weight-bold mb-5 px-2 py-4 rounded-lg text-center text-white ",href:"/poll/?id="+s,children:"Submit your vote"}),k=()=>Object(O.jsxs)("span",{className:"bg-info w-100 text-decoration-none font-weight-bold mb-5 px-2 py-3 rounded-lg text-center text-white ",style:{wordWrap:"break-word"},children:["You voted for ",w.selected]});return Object(O.jsxs)("div",{className:"ui-outer",children:[Object(O.jsx)("div",{className:"ui-container py-5 position-relative",children:Object(O.jsxs)("div",{className:"mb-5 mb-md-5 pb-md-0 my-4 ",children:[Object(O.jsx)("h2",{className:" mb-5 heading w-100",style:{wordWrap:"break-word"},children:c}),Object(O.jsxs)("div",{className:"d-flex flex-column flex-md-row",children:[Object(O.jsx)("div",{className:"d-flex w-100 col-12 col-md-8 flex-column",children:Object(O.jsx)("div",{style:{position:"relative"},children:Object(O.jsx)("div",{children:a.map((e=>Object(O.jsxs)("div",{className:"py-0 bg-white px-3  rounded-lg shadow-lg position-relative",children:[Object(O.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(O.jsx)("div",{className:"d-flex align-items-center",style:{width:"88%"},children:Object(O.jsx)("h2",{className:" font-weight-bold text-primary-dark",style:{wordWrap:"break-word",width:"80%"},children:e.options})}),Object(O.jsx)("div",{className:" ",children:Object(O.jsxs)("h2",{className:" font-weight-bold text-primary-dark",children:[0===p?0:(e.count/p*100).toFixed(0),"%"]})})]}),Object(O.jsx)("div",{className:"w-100 rounded-lg ",children:Object(O.jsx)("div",{className:"rounded-lg d-block mt-3",style:{width:"".concat(0===p?0:e.count/p*100,"%"),height:"0.5rem",backgroundColor:"".concat(z()())},children:"\xa0"})}),Object(O.jsxs)("p",{className:"mt-3 text-green",children:[e.count," Votes"]})]},e.id)))})})}),Object(O.jsxs)("div",{className:"d-flex flex-column w-100 col-12 col-md-4 mb-0 rounded-lg ",children:[Object(O.jsx)(g,{switcher:u.snackbaropen,close:e=>{f({snackbaropen:!1})},message:u.msg,nottype:u.not}),null!=w&&w.id===s?Object(O.jsx)(k,{}):Object(O.jsx)(y,{}),Object(O.jsx)("div",{className:"w-100 bg-white d-flex flex-column border-t border-gray-300 border-top-0 rounded-lg self-start px-3 py-3 ",children:Object(O.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("p",{className:"font-weight-normal text-secondary text-left mb-0 text-sm lg:text-base",children:"Total Votes"}),Object(O.jsx)("h3",{className:"count font-weight-bold text-primary-dark",children:p})]}),Object(O.jsxs)("div",{className:"d-flex flex-row flex-md-column",children:[Object(O.jsx)("p",{className:"font-weight-bold d-none d-md-inline-block mt-2 mb-4 text-primary-secondary text-left",children:"Share"}),Object(O.jsxs)("button",{className:"bg-warning font-weight-bold mb-4 px-0 py-2 rounded-lg text-center border-0 text-white mr-3 ",onClick:()=>{m(!0)},children:[Object(O.jsx)(i.a,{className:"ml-3 mr-3",icon:r.h}),Object(O.jsx)("snap",{className:"d-none d-md-inline-block ",children:"Share via QRcode"})]}),Object(O.jsx)(W,{url:"http://localhost:3000/poll/?id="+s,question:c})]})]})})]})]})]})}),j?Object(O.jsx)(N,{}):null]})};var F=function(e){let{location:t}=e;const[s,l]=Object(n.useState)(""),[c,o]=Object(n.useState)([{id:"",options:"",count:0}]),[d,j]=Object(n.useState)(""),[m,h]=Object(n.useState)(""),[x,p]=Object(n.useState)(!1),[u,f]=Object(n.useState)(!1),[w,N]=Object(n.useState)("");let y=0;c.map((e=>y+=e.count));const k=Object(a.f)(),[S,C]=Object(n.useState)({snackbaropen:!1,msg:"",not:""});var q=JSON.parse(localStorage.getItem(w));Object(n.useEffect)((()=>{N(s.toLowerCase().trim().slice(0,2)+m.slice(0,4)),null!=q&&q.id===m&&0===q.show&&(C({snackbaropen:!0,msg:"Thankyou for voting!",not:"success"}),localStorage.setItem(w,JSON.stringify({id:q.id,selected:q.selected,show:1}))),0==localStorage.getItem("polledited")&&(C({snackbaropen:!0,msg:"Changes saved!",not:"success"}),localStorage.removeItem("polledited"))})),Object(n.useEffect)((()=>{var e=v.a.parse(t.search);const s=e.id;h(e.id),j(e.key),b.a.get("http://localhost:5000/getpoll/".concat(s)).then((function(e){let t=[];const s=e.data;l(s.question),s.options.map((e=>(t.push(e),t))),o(t)})).catch((function(e){console.log(e)}))}),[]);const I=()=>{localStorage.removeItem(s.toLowerCase().trim().slice(0,2)+m.slice(0,4));const e={key:d};b.a.post("http://localhost:5000/deletepoll",e).then((e=>{console.log(e)})).catch((e=>{console.log(e)})),localStorage.setItem("deletepoll",0),k.push("/")},E=()=>Object(O.jsx)("div",{className:"w-100 justify-content-center d-flex align-items-center position-fixed fixed-top",style:{height:"100%",zIndex:1,backgroundColor:"rgba(135,206,235 ,0.7)"},children:Object(O.jsx)("div",{className:"d-flex flex-column align-items-center bg-white rounded-lg",style:{width:"30%"},children:Object(O.jsxs)("div",{className:"w-100 d-flex flex-column px-4 pt-4",children:[Object(O.jsx)("h5",{children:"Delete Poll"}),Object(O.jsx)("span",{className:"text-secondary",children:"Are you sure you want to delete the poll?"}),Object(O.jsxs)("div",{className:"px-3 py-3 d-flex justify-content-end",children:[Object(O.jsx)("button",{className:"border-light rounded-lg shadow-lg px-4 py-2 ",onClick:()=>f(!1),children:"Cancel"}),Object(O.jsx)("button",{className:"bg-danger border-0 rounded-lg shadow-lg text-light px-4 py-2 ml-3",onClick:I,children:"Delete"})]})]})})}),P=()=>Object(O.jsx)("div",{className:"w-100 justify-content-center d-flex align-items-center position-fixed fixed-top",onClick:()=>{p(!1)},style:{height:"100%",zIndex:1,backgroundColor:"rgba(135,206,235 ,0.7)"},children:Object(O.jsxs)("div",{className:"d-flex flex-column align-items-center bg-white",children:[Object(O.jsx)("span",{className:"font-weight-bold ",children:"Scan QR Code"}),Object(O.jsx)(T.a,{value:"http://localhost:3000/poll/?id=".concat(m),size:290,level:"H",includeMargin:!0})]})}),D=()=>Object(O.jsx)("a",{className:"bg-success text-decoration-none font-weight-bold mb-5 px-2 py-4 rounded-lg text-center text-white ",href:"/poll/?id="+m,children:"Submit your vote"}),J=()=>Object(O.jsxs)("span",{className:"bg-info w-100 text-decoration-none font-weight-bold mb-5 px-2 py-3 rounded-lg text-center text-white ",style:{wordWrap:"break-word"},children:["You voted for ",q.selected]});return Object(O.jsxs)("div",{className:"ui-outer",children:[Object(O.jsxs)("div",{className:"ui-container py-5",children:[Object(O.jsxs)("div",{className:"d-flex flex-column  flex-md-row justify-content-between align-items-md-center",children:[Object(O.jsxs)("div",{className:"d-flex flex-column mb-4 mb-md-0",children:[Object(O.jsx)("h2",{className:"heading-2",children:"Manage your poll"}),Object(O.jsx)("p",{className:"mt-4 text-secondary font-medium",children:"You can only edit your poll if it has no votes!"})]}),Object(O.jsxs)("div",{className:"d-flex align-items-center mr-4 mr-md-4 justify-content-around justify-content-md-center",children:[0===y?Object(O.jsx)("a",{"aria-label":"Edit Poll?",href:"/edit-poll/?id="+m+"&key="+d,className:"text-primary-dark p-2 outline-none rounded hover-shadow text-warning border-0 bg-transparent",style:{fontSize:"1.5rem"},children:Object(O.jsx)(i.a,{icon:r.e})}):null,Object(O.jsx)("button",{"aria-label":"Delete Poll?",role:"alert",className:"text-primary-dark p-2 outline-none rounded hover-shadow text-danger border-0 bg-transparent",style:{fontSize:"1.5rem"},onClick:()=>f(!0),children:Object(O.jsx)(i.a,{icon:r.j})})]})]}),Object(O.jsxs)("div",{className:"mb-5 mb-md-5 pb-md-0 my-4",children:[Object(O.jsx)("h2",{className:" mb-5 heading w-75",style:{wordWrap:"break-word"},children:s}),Object(O.jsxs)("div",{className:"d-flex w-100 flex-md-row flex-column ",children:[Object(O.jsx)("div",{className:"d-flex w-100 col-12 col-md-8 flex-column",children:Object(O.jsx)("div",{style:{position:"relative"},children:Object(O.jsx)("div",{children:c.map(((e,t)=>Object(O.jsxs)("div",{className:"py-0  bg-white px-3  rounded-lg shadow-lg position-relative",children:[Object(O.jsxs)("div",{className:"d-flex w-100 justify-content-between",children:[Object(O.jsx)("div",{className:"d-flex align-items-center",style:{width:"88%"},children:Object(O.jsx)("h2",{className:" font-weight-bold text-primary-dark",style:{wordWrap:"break-word",width:"80%"},children:e.options})}),Object(O.jsx)("div",{className:" ",children:Object(O.jsxs)("h2",{className:" font-weight-bold text-primary-dark",children:[0===y?0:(e.count/y*100).toFixed(0),"%"]})})]}),Object(O.jsx)("div",{className:"w-100 rounded-lg ",children:Object(O.jsx)("div",{className:"rounded-lg d-block mt-3",style:{width:"".concat(0===y?0:e.count/y*100,"%"),height:"0.5rem",backgroundColor:"".concat(z()())}})}),Object(O.jsxs)("p",{className:"mt-3 text-green",children:[e.count," Votes"]})]},t)))})})}),Object(O.jsxs)("div",{className:"d-flex flex-column w-100 col-12 col-md-4 mb-0 rounded-lg ",children:[Object(O.jsx)(g,{switcher:S.snackbaropen,close:e=>{C({snackbaropen:!1})},message:S.msg,nottype:S.not}),null!=q&&q.id===m?Object(O.jsx)(J,{}):Object(O.jsx)(D,{}),Object(O.jsx)("div",{className:"w-100 bg-white d-flex flex-column border-t border-gray-300 border-top-0 rounded-lg self-start px-3 py-3 ",children:Object(O.jsxs)("div",{className:"d-flex flex-column justify-content-between",children:[Object(O.jsxs)("div",{className:"",children:[Object(O.jsx)("p",{className:"font-weight-normal text-secondary text-left mb-0 text-sm lg:text-base",children:"Total Votes"}),Object(O.jsx)("h3",{className:"count font-weight-bold text-primary-dark",children:y})]}),Object(O.jsxs)("div",{className:"d-flex flex-row flex-md-column justify-content-center",children:[Object(O.jsx)("p",{className:"font-weight-bold d-none d-md-inline-block mt-2 mb-4 text-primary-secondary text-left",children:"Share"}),Object(O.jsxs)("button",{className:"bg-warning font-weight-bold mb-4 px-0 py-2 rounded-lg text-center border-0 text-white mr-3 ",onClick:()=>{p(!0)},children:[Object(O.jsx)(i.a,{className:"ml-3 mr-3",icon:r.h}),Object(O.jsx)("snap",{className:"d-none d-md-inline-block ",children:"Share via QRcode"})]}),Object(O.jsx)(W,{url:"http://localhost:3000/poll/?id="+m,question:s})]})]})})]})]})]})]}),u?Object(O.jsx)(E,{}):null,x?Object(O.jsx)(P,{}):null]})};var L=function(e){let{location:t}=e;const s=Object(a.f)(),[l,c]=Object(n.useState)(""),[d,g]=Object(n.useState)(""),[f,w]=Object(n.useState)({id:Object(j.a)(),question:"",error:!1}),[N,y]=Object(n.useState)([{id:Object(j.a)(),options:"",error:!1},{id:Object(j.a)(),options:"",error:!1}]),[k,S]=Object(n.useState)({snackbaropen:!1,snackbar2open:!1,Transition:m.a});Object(n.useEffect)((()=>{var e=v.a.parse(t.search);const s=e.id;c(e.id),g(e.key),b.a.get("http://localhost:5000/getpoll/".concat(s)).then((function(e){let t=[];const s=e.data;console.log(s),w({question:s.question}),s.options.map((e=>(t.push(e),t))),y(t)})).catch((function(e){console.log(e)}))}),[]);const C=e=>{S({snackbaropen:!1,snackbar2open:!1})},q=(e,t)=>0===e.trim().length&&t;return Object(O.jsx)("div",{className:"ui-outer",children:Object(O.jsx)("div",{className:"ui-container py-5 px-5",children:Object(O.jsx)("form",{onSubmit:e=>{e.preventDefault();const t=f.question.trim().length>0,n=N.every((e=>e.options.length>0));if(t||w({...f,error:!0}),n){const e={question:f,options:N,pollid:l};b.a.post("http://localhost:5000/editpoll",e).then((function(e){console.log(e.data._id)})).catch((function(e){console.log(e)})),localStorage.setItem("polledited",0),s.push("/poll-admin/?id=".concat(l,"&key=").concat(l))}else y([...N].map((e=>""===e.options?{...e,error:!0}:e)))},autoComplete:"off",children:Object(O.jsxs)("div",{className:"mx-auto",children:[Object(O.jsxs)("div",{className:"d-flex justify-content-between flex-column flex-md-row align-items-baseline",children:[Object(O.jsxs)("div",{children:[Object(O.jsx)("h3",{children:"Edit Poll"}),Object(O.jsx)("p",{className:"mt-4 mb-0 text-large text-secondary font-medium",children:"Edit below fields as you need."})]}),Object(O.jsx)(o.b,{to:"/poll-admin/?id="+l+"&key="+d,children:Object(O.jsx)("span",{className:"text-light bg-danger align-self-end font-weight-bold rounded-lg px-4 py-2",children:"Cancel"})})]}),Object(O.jsxs)("div",{className:"mt-4",children:[Object(O.jsxs)("div",{className:"flex flex-column question",children:[Object(O.jsx)("label",{className:"mb-3 w-100 font-weight-bold content-text",children:"Poll Question"}),Object(O.jsx)(h.a,{...q(f.question,f.error)&&{error:f.error,helperText:"Enter the question."},id:f.id,name:"question",multiline:!0,rows:3,className:"textareastyle w-100 py-4 rounded-lg px-3 outline-none  border border-gray ",placeholder:"What's you favorite TV Show?",defaultValue:f.question,onChange:e=>((e,t)=>{w({id:e,question:t.target.value})})(f.id,e)})]}),Object(O.jsx)(x.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:k.snackbaropen,onClose:C,autoHideDuration:2e3,TransitionComponent:k.Transition,action:[Object(O.jsx)(u.a,{"arial-label":"Close",color:"inherit",onClick:C,children:"x"})],children:Object(O.jsx)(p.a,{onClose:C,severity:"success",children:"Success, poll submitted!"})},k.Transition),Object(O.jsx)(x.a,{anchorOrigin:{vertical:"top",horizontal:"center"},open:k.snackbar2open,onClose:C,autoHideDuration:2e3,action:[Object(O.jsx)(u.a,{"arial-label":"Close",color:"inherit",onClick:C,children:"x"})],children:Object(O.jsx)(p.a,{onClose:C,severity:"info",children:"Added another field!"})}),N.map(((e,t)=>Object(O.jsx)("div",{className:"options mt-2 flex-column",children:Object(O.jsx)("div",{className:"flex align-items-center mb-3",children:Object(O.jsxs)("div",{className:"flex flex-column",children:[Object(O.jsxs)("label",{className:"mb-3 w-100 content-text font-weight-bold",children:["Option ",t+1]}),Object(O.jsxs)("div",{className:"flex align-items-center justify-content-between",children:[Object(O.jsx)(h.a,{...q(e.options,e.error)&&{error:e.error,helperText:"Enter atleast 2 options"},id:e.id,name:"options",className:" py-3 rounded-lg px-3 textareastyle inputfield focus-shadow transition-all duration-200 text-gray-700 focus-outline-none  border border-gray-300 focus:shadow-outline",placeholder:"Option"+(t+1),value:e.options,onChange:t=>((e,t)=>{const s=N.map((s=>(e===s.id&&(s[t.target.name]=t.target.value),s)));y(s)})(e.id,t)}),Object(O.jsx)("button",{hidden:2===N.length,onClick:()=>(e=>{const t=[...N];t.splice(t.findIndex((t=>t.id===e)),1),y(t)})(e.id),className:" delete ml-2",children:Object(O.jsx)(i.a,{className:" text-danger",icon:r.j})})]})]})})},e.id))),Object(O.jsx)("button",{type:"button",onClick:()=>{y([...N,{id:Object(j.a)(),options:"",error:!1}]),S({snackbar2open:!0})},className:"px-5 py-3 border-0  bg-dark rounded-lg font-weight-bold flex align-items-center justify-content-between text-white",children:Object(O.jsxs)("span",{className:"mr-3",children:["Add another option",Object(O.jsx)(i.a,{className:"ml-2",icon:r.f})]})})]}),Object(O.jsx)("div",{className:"flex justify-content-center mt-5 pt-3 ",children:Object(O.jsxs)("button",{type:"submit",className:"px-5 py-3 bg-success border-0 text-white font-weight-bold rounded-lg",children:[Object(O.jsx)(i.a,{className:"mr-2",icon:r.b}),"Save changes"]})})]})})})})};var R=function(){return Object(O.jsx)(o.a,{children:Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(w,{}),Object(O.jsxs)(a.c,{children:[Object(O.jsx)(a.a,{path:"/",exact:!0,component:f}),Object(O.jsx)(a.a,{path:"/demo-poll",component:N}),Object(O.jsx)(a.a,{path:"/new",component:S}),Object(O.jsx)(a.a,{path:"/poll",component:C}),Object(O.jsx)(a.a,{path:"/poll-result",component:A}),Object(O.jsx)(a.a,{path:"/poll-admin",component:F}),Object(O.jsx)(a.a,{path:"/edit-poll",component:L})]})]})})};var Q=e=>{e&&e instanceof Function&&s.e(3).then(s.bind(null,186)).then((t=>{let{getCLS:s,getFID:n,getFCP:l,getLCP:c,getTTFB:o}=t;s(e),n(e),l(e),c(e),o(e)}))};c.a.render(Object(O.jsx)(R,{}),document.getElementById("root")),Q()},38:function(e,t,s){},98:function(e,t,s){}},[[141,1,2]]]);
//# sourceMappingURL=main.dab40883.chunk.js.map