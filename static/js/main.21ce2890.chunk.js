(this["webpackJsonphooked-context"]=this["webpackJsonphooked-context"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a(14)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),s=a.n(o),c=(a(11),a(2)),i=a(1),l=(a(12),function(){return r.a.createElement("nav",{id:"navigation"},r.a.createElement("h1",{href:"#",className:"logo"},"HOOKED"))}),u=function(e){var t=e.song;return r.a.createElement("div",{className:"card"},r.a.createElement("img",{src:t.albumArt,alt:""}),r.a.createElement("div",{className:"content"},r.a.createElement("h2",null,t.name),r.a.createElement("span",null,"BY: ",t.artist)))},m={songs:[],isFetching:!1,hasError:!1},d=function(e,t){switch(t.type){case"FETCH_SONGS_REQUEST":return Object(i.a)({},e,{isFetching:!0,hasError:!1});case"FETCH_SONGS_SUCCESS":return Object(i.a)({},e,{isFetching:!1,songs:t.payload});case"FETCH_SONGS_FAILURE":return Object(i.a)({},e,{hasError:!0,isFetching:!1});default:return e}},h=function(){var e=Object(n.useContext)(f).state,t=Object(n.useReducer)(d,m),a=Object(c.a)(t,2),o=a[0],s=a[1];return Object(n.useState)((function(){s({type:"FETCH_SONGS_REQUEST"}),fetch("https://hookedbe.herokuapp.com/api/songs",{headers:{Authorization:"Bearer ".concat(e.token)}}).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){console.log(e),s({type:"FETCH_SONGS_SUCCESS",payload:e})})).catch((function(e){console.log(e),s({type:"FETCH_SONGS_FAILURE"})}))}),[e.token]),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"home"},o.isFetching?r.a.createElement("span",{className:"loader"},"LOADING..."):o.hasError?r.a.createElement("span",{className:"error"},"AN ERROR HAS OCCURED"):r.a.createElement(r.a.Fragment,null,o.songs.length>0&&o.songs.map((function(e){return r.a.createElement(u,{key:e.id.toString(),song:e})})))))},p=a(3),g=(a(13),{email:"",password:"",isSubmitting:!1,errorMessage:null}),E=function(){var e=r.a.useContext(f).dispatch,t=Object(n.useState)(g),a=Object(c.a)(t,2),o=a[0],s=a[1],l=function(e){s(Object(i.a)({},o,Object(p.a)({},e.target.name,e.target.value)))};return r.a.createElement("div",{className:"login-container"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){t.preventDefault(),s(Object(i.a)({},o,{isSubmitting:!0,errorMessage:null})),fetch("https://hookedbe.herokuapp.com/api/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:o.email,password:o.password})}).then((function(e){if(e.ok)return e.json();throw e})).then((function(t){e({type:"LOGIN",payload:t})})).catch((function(e){s(Object(i.a)({},o,{isSubmitting:!1,errorMessage:e.message||e.statusText}))}))}},r.a.createElement("h1",null,"Login"),r.a.createElement("label",{htmlFor:"email"},"Email Address",r.a.createElement("input",{type:"text",value:o.email,onChange:l,name:"email",id:"email"})),r.a.createElement("label",{htmlFor:"password"},"Password",r.a.createElement("input",{type:"password",value:o.password,onChange:l,name:"password",id:"password"})),o.errorMessage&&r.a.createElement("span",{className:"form-error"},o.errorMessage),r.a.createElement("button",{disabled:o.isSubmitting},o.isSubmitting?"Loading...":"Login")))))},f=r.a.createContext(),S={isAuthenticated:!1,user:null,token:null},O=function(e,t){switch(t.type){case"LOGIN":return localStorage.setItem("user",JSON.stringify(t.payload.user)),localStorage.setItem("token",JSON.stringify(t.payload.token)),Object(i.a)({},e,{isAuthenticated:!0,user:t.payload.user,token:t.payload.token});case"LOGOUT":return localStorage.clear(),Object(i.a)({},e,{isAuthenticated:!1,user:null,token:null});default:return e}};var b=function(){var e=Object(n.useReducer)(O,S),t=Object(c.a)(e,2),a=t[0],o=t[1];return r.a.createElement(f.Provider,{value:{state:a,dispatch:o}},r.a.createElement(l,null),r.a.createElement("div",{className:"App"},a.isAuthenticated?r.a.createElement(h,null):r.a.createElement(E,null),"  "))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(b,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[6,1,2]]]);
//# sourceMappingURL=main.21ce2890.chunk.js.map