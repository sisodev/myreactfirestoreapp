(this.webpackJsonpmyreactfirestoreapp=this.webpackJsonpmyreactfirestoreapp||[]).push([[0],{216:function(e,t,a){e.exports=a(412)},221:function(e,t,a){},222:function(e,t,a){},412:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(90),i=a.n(c),l=(a(221),a(20)),o=a(21),s=a(23),u=a(22),m=a(24),d=a(5),p=a(31),h=(a(222),a(6)),f=a(39),E=a.n(f),b=(a(143),Object(h.b)((function(e){return{auth:e.firebase.profile}}),(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){e({type:"SIGNOUT_SUCCESS"})})).catch((function(t){e({type:"SIGNOUT_ERROR",err:t})}))}))}}}))((function(e){var t=e.auth;return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/create"},"New Project")),r.a.createElement("li",null,r.a.createElement("a",{onClick:e.signOut},"Log Out")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/",className:"btn btn-floating pink lighten-1"},t.initial)))}))),g=function(){return r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signup"},"Sign Up")),r.a.createElement("li",null,r.a.createElement(d.c,{to:"/signin"},"Log In")))},v=Object(h.b)((function(e){return{auth:e.firebase.auth}}))((function(e){var t=e.auth.uid?r.a.createElement(b,null):r.a.createElement(g,null);return r.a.createElement("nav",{className:"nav-wrapper grey darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(d.b,{to:"/",className:"brand-logo"},"Project Plan"),t))})),j=a(14),N=a(25),O=a(50),y=a.n(O),C=function(e){var t=e.notifications;return r.a.createElement("div",{className:"section"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("span",{className:"card-title"},"Notifications"),r.a.createElement("ul",{className:"notifications"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("span",{className:"pink-text"},e.user),r.a.createElement("span",null,e.content),r.a.createElement("div",{className:"grey-text note-date"},y()(e.time.toDate()).fromNow()))}))))))},S=function(e){var t=e.project;return r.a.createElement("div",{className:"card z-depth-0 project-summary"},r.a.createElement("div",{className:"card-content gray-text text-darken-3"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,"Posted by the ",t.authorFirstName," ",t.authorLastName),r.a.createElement("p",{className:"grey-text"},y()(t.createdAt.toDate()).calendar()," ")))},w=function(e){var t=e.projects;return r.a.createElement("div",{className:"project-list section"},t&&t.map((function(e){return r.a.createElement(d.b,{to:"/project/"+e.id,key:e.id},r.a.createElement(S,{project:e}))})))},R=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.notifications;return e.auth.uid?r.a.createElement("div",{className:"dashboaed contaier"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m6"},r.a.createElement(w,{projects:t})),r.a.createElement("div",{className:"col s12 m5 offset-m1"},r.a.createElement(C,{notifications:a})))):r.a.createElement(p.a,{to:"/signin"})}}]),t}(n.Component),F=Object(j.d)(Object(N.firestoreConnect)([{collection:"projects",limit:3,orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]),Object(h.b)((function(e){return console.log(e),{projects:e.firestore.ordered.projects,notifications:e.firestore.ordered.notifications,auth:e.firebase.auth}})))(R);var x=Object(j.d)(Object(N.firestoreConnect)(["projects"]),Object(h.b)((function(e,t){console.log(e);var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}})))((function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"container project-details "},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"content"},r.a.createElement("span",{className:"card-title"},t.title),r.a.createElement("p",null,t.content)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"posted by ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,y()(t.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading...")):r.a.createElement(p.a,{to:"/signin"})})),I=a(30),P=a(12),U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:""},a.handleChange=function(e){e.preventDefault(),a.setState(Object(P.a)({},a.state,Object(I.a)({},e.target.id,e.target.value)))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.authError;return t.auth.uid?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),t}(n.Component),k=Object(h.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t){E.a.auth().signInWithEmailAndPassword(a.email,a.password).then((function(){e({type:"LOGIN_SUCCESS"})})).catch((function(t){e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))(U),_=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",firstname:"",lastname:""},a.handleChange=function(e){e.preventDefault(),a.setState(Object(P.a)({},a.state,Object(I.a)({},e.target.id,e.target.value)))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.auth,n=t.authError;return a.uid?r.a.createElement(p.a,{to:"/"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"firstname"},"Firstname"),r.a.createElement("input",{type:"text",id:"firstname",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"lastname"},"Lastname"),r.a.createElement("input",{type:"text",id:"lastname",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Sign Up"),r.a.createElement("div",{className:"red-text center"},n?r.a.createElement("p",null,n):null))))}}]),t}(n.Component),A=Object(h.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,i=r(),l=c();i.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(t){return l.collection("users").doc(t.user.uid).set({firstName:a.firstname,lastName:a.lastname,initial:a.firstname[0]+a.lastname[0]}).then((function(){e({type:"SIGNUP_SUCCESS"})})).catch((function(t){e({type:"SIGNUP_ERROR",err:t})}))}))}));var a}}}))(_),L=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={title:"",content:""},a.handleChange=function(e){e.preventDefault(),a.setState(Object(P.a)({},a.state,Object(I.a)({},e.target.id,e.target.value)))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this;return this.props.auth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:function(t){return e.handleSubmit(t)},className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Create New Project"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{type:"text",id:"title",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"content"},"Project Content"),r.a.createElement("textarea",{id:"content",className:"materialize-textarea",onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn pink lighten-1 z-depth-0"},"Create Project")))):r.a.createElement(p.a,{to:"/signin"})}}]),t}(n.Component),T=Object(h.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,i=c.firstName,l=c.lastName,o=a().firebase.auth.uid;r.collection("projects").add(Object(P.a)({},e,{authorFirstName:i,authorLastName:l,authorId:o,createdAt:new Date})).then((function(){t({type:"CREATE_PROJECT",project:e})})).catch((function(e){t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))}}}))(L),G=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement(d.a,null,r.a.createElement(v,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/",component:F,exact:!0}),r.a.createElement(p.b,{path:"/project/:id",component:x}),r.a.createElement(p.b,{path:"/signin",component:k}),r.a.createElement(p.b,{path:"/signup",component:A}),r.a.createElement(p.b,{path:"/create",component:T})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var z=a(215),D={authError:null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login success"),Object(P.a)({},e,{authError:null});case"LOGIN_ERROR":return console.log("login error"),Object(P.a)({},e,{authError:"Login Failed"});case"SIGNOUT_SUCCESS":return console.log("signout success"),e;case"SIGNOUT_ERROR":return console.log("signout error"),e;case"SIGNUP_SUCCESS":return console.log("signup success"),Object(P.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signup error"),Object(P.a)({},e,{authError:t.err.message});default:return e}},B={},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("project created",t.project),e;case"CREATE_PROJECT_ERROR":return console.log(t.err),e;default:return e}},Q=a(51),K=Object(j.c)({auth:J,project:W,firestore:Q.firestoreReducer,firebase:N.firebaseReducer}),V=(a(407),a(409),{apiKey:"AIzaSyAiVz6Qjep4zx3O8Qc3yWvmbIxUU0OaddU",authDomain:"netninja-mario-plan-5e5d3.firebaseapp.com",databaseURL:"https://netninja-mario-plan-5e5d3.firebaseio.com",projectId:"netninja-mario-plan-5e5d3",storageBucket:"netninja-mario-plan-5e5d3.appspot.com",messagingSenderId:"877786261661",appId:"1:877786261661:web:559823aa2082da6909cc74"});E.a.initializeApp(V),E.a.firestore().settings({});var $=Object(j.e)(K,Object(j.d)(Object(j.a)(z.a.withExtraArgument({getFirebase:N.getFirebase,getFirestore:Q.getFirestore})),Object(Q.reduxFirestore)(E.a,V))),q={firebase:E.a,config:{userProfile:"users",useFirestoreForProfile:!0},dispatch:$.dispatch,createFirestoreInstance:Q.createFirestoreInstance,presence:"presence",sessions:"sessions"};i.a.render(r.a.createElement(h.a,{store:$},r.a.createElement(N.ReactReduxFirebaseProvider,q,r.a.createElement((function(e){var t=e.children,a=Object(h.c)((function(e){return e.firebase.auth}));return Object(N.isLoaded)(a)?t:r.a.createElement("div",null,"Loading screen")}),null,r.a.createElement(G,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[216,1,2]]]);
//# sourceMappingURL=main.fed89dd6.chunk.js.map