(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n.p+"static/media/user.31354796.svg"},29:function(e,t,n){e.exports=n.p+"static/media/court.e778dbef.gif"},30:function(e,t,n){e.exports=n.p+"static/media/anim.509f6c2d.gif"},31:function(e,t,n){e.exports=n.p+"static/media/back.c7f74c8c.svg"},34:function(e,t,n){e.exports=n.p+"static/media/badge.40b071d3.svg"},35:function(e,t,n){e.exports=n.p+"static/media/pitch.6177bc18.svg"},36:function(e,t,n){e.exports=n.p+"static/media/basket.a6ac849a.svg"},39:function(e,t,n){e.exports=n(66)},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(28),s=n.n(o),u=n(71),c=n(2),i=n(3),l=n(5),m=n(4),p=n(6),h=n(72),d=n(12),g=n(67),f=n(14),E=n.n(f),b=new(function(){function e(){Object(c.a)(this,e),this.auth=E.a.create({baseURL:"https://quick-compo.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/signup",{username:t,password:n}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,n=e.password;return this.auth.post("/auth/login",{username:t,password:n}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),v=r.a.createContext(),y=v.Consumer,O=v.Provider,j=function(e){return function(t){function n(){return Object(c.a)(this,n),Object(l.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(p.a)(n,t),Object(i.a)(n,[{key:"render",value:function(){var t=this;return r.a.createElement(y,null,function(n){return r.a.createElement(e,Object.assign({currentTournament:n.currentTournament,currentTournamentName:n.currentTournamentName,setCurrentTournament:n.setCurrentTournament,login:n.login,signup:n.signup,user:n.user,logout:n.logout,isLoggedin:n.isLoggedin},t.props))})}}]),n}(a.Component)},T=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0,currentTournament:void 0,currentTournamentName:""},n.setCurrentTournament=function(e,t,a){"set"===a?n.setState({currentTournament:e,currentTournamentName:t}):"clear"===a&&n.setState({currentTournament:void 0,currentTournamentName:""})},n.signup=function(e){var t=e.username,a=e.password;b.signup({username:t,password:a}).then(function(e){n.setState({isLoggedin:!0,user:e})}).catch(function(e){var t=e.response.data;n.setState({message:t.statusMessage})})},n.login=function(e){var t=e.username,a=e.password;b.login({username:t,password:a}).then(function(e){n.setState({isLoggedin:!0,user:e})}).catch(function(){})},n.logout=function(){b.logout().then(function(){n.setState({isLoggedin:!1,user:null})}).catch(function(){})},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;b.me().then(function(t){e.setState({isLoggedin:!0,user:t,isLoading:!1})}).catch(function(){e.setState({isLoggedin:!1,user:null,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,n=e.isLoggedin,a=e.user,o=e.currentTournament,s=e.currentTournamentName;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(O,{value:{isLoggedin:n,user:a,currentTournament:o,currentTournamentName:s,setCurrentTournament:this.setCurrentTournament,login:this.login,logout:this.logout,signup:this.signup}},this.props.children)}}]),t}(a.Component),N=n(29),S=n.n(N),C=j(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.signup({username:a,password:r})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",{className:"container login"},r.a.createElement("div",{className:"splashImg"},r.a.createElement("img",{src:S.a,alt:"img"})),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{className:"input-field",type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{className:"input-field",type:"password",name:"password",value:n,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(g.a,{to:"/login"}," Login")))}}]),t}(a.Component)),k=n(30),I=n.n(k),L=j(function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},n.handleFormSubmit=function(e){e.preventDefault();var t=n.state,a=t.username,r=t.password;n.props.login({username:a,password:r})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,n=e.password;return r.a.createElement("div",{className:"container login"},r.a.createElement("div",{className:"splashImg"},r.a.createElement("img",{src:I.a,alt:"img"})),r.a.createElement("h1",null,"Quick Compo"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{className:"input-field",type:"text",name:"username",value:t,placeholder:"username",onChange:this.handleChange}),r.a.createElement("input",{className:"input-field",type:"password",name:"password",value:n,placeholder:"password",onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})))}}]),t}(a.Component)),w=n(20),A=n(68),D=n(69);var x=j(function(e){var t=e.component,n=e.isLoggedin,a=Object(w.a)(e,["component","isLoggedin"]);return r.a.createElement(A.a,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(D.a,{to:"/login"})}}))});var P=j(function(e){var t=e.component,n=e.isLoggedin,a=Object(w.a)(e,["component","isLoggedin"]);return r.a.createElement(A.a,Object.assign({},a,{render:function(e){return n?r.a.createElement(D.a,{to:"/tournaments"}):r.a.createElement(t,e)}}))}),R=n(15),M=n(37),U=n(16),_=n(32),G=n(31),F=n.n(G),Y=n(19),W=n.n(Y),q=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.user,a=t.isLoggedin;return r.a.createElement("div",{className:"nav-bar"},r.a.createElement("button",{className:"back-button",onClick:function(){return e.props.history.go(-1)}},r.a.createElement("img",{src:F.a,alt:"back"})),a?r.a.createElement("div",null,r.a.createElement("p",null,n.username)):null,r.a.createElement("button",{className:"back-button"},r.a.createElement("img",{src:W.a,alt:"user"})))}}]),t}(a.Component),J=j(Object(_.a)(q)),B=n(34),Q=n.n(B),V=n(35),z=n.n(V),H=n(36),K=n.n(H),X=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-button"},r.a.createElement(g.a,{to:{pathname:"/Tournaments"}},r.a.createElement("img",{src:K.a,alt:"sports"}),"Tournaments")),r.a.createElement("div",{className:"footer-button"},r.a.createElement(g.a,{to:{pathname:"/Games"}},r.a.createElement("img",{src:z.a,alt:"user"}),"Games")),r.a.createElement("div",{className:"footer-button"},r.a.createElement(g.a,{to:{pathname:"/Players",state:this.props.currentTournament}},r.a.createElement("img",{src:Q.a,alt:"user"}),"Users")))}}]),t}(a.Component);var Z=j(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"tournament-cell"},r.a.createElement("img",{src:e.img,alt:"pic"}),r.a.createElement(g.a,{to:{pathname:"/players",state:{tournamentId:e._id}}},r.a.createElement("p",{className:"tournament-name"},e.name)),r.a.createElement("p",null,"PLAYERS IN: ",e.players.length),r.a.createElement(g.a,{to:{pathname:"/tournaments/edit-tournament/".concat(e._id),state:{tournamentId:e._id}}},r.a.createElement("p",null,"EDIT"))))}),$=new(function(){function e(){Object(c.a)(this,e),this.calls=E.a.create({baseURL:"https://quick-compo.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"getPlayersOfTournament",value:function(e){return this.calls.get("/api/players/intoTournament/"+e).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"addPlayer",value:function(e){return this.calls.post("/api/players/add-player",e).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getPlayers",value:function(){return this.calls.get("/api/players").then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getTournamentbyId",value:function(e){return this.calls.get("/api/tournaments/"+e).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"editTournament",value:function(e,t){return console.log("thing ",t),this.calls.put("/api/tournaments/edit/"+e,t).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"handleFormSubmitAddTournament",value:function(e){return this.calls.post("/api/tournaments/add-tournament",e).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getTournaments",value:function(){return this.calls.get("/api/tournaments").then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getGames",value:function(){return this.calls.get("/api/games").then(function(e){return e}).catch(function(e){return console.log(e)})}}]),e}()),ee=j(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).generateTournamentsList=function(){return n.state.tournaments.slice(0).reverse().map(function(e,t){var n=e.name,a=e.img,o=e.players,s=e.games,u=e._id;return r.a.createElement(Z,{className:"fadeIn",key:t,name:n,img:a,players:o,games:s,_id:u})})},n.checkIfLogged=function(){return n.state.loggedIn?r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement("div",{className:"tournamentList"},r.a.createElement("button",null,r.a.createElement(g.a,{to:{pathname:"/tournaments/add-tournament"}},"ADD A NEW TOURNAMENT")),r.a.createElement("h2",null,"TOURNAMENTS"),n.generateTournamentsList()),r.a.createElement(X,null)):r.a.createElement(M.a,{to:"/error"})},console.log("tournaments props ",e),n.state={loggedIn:!0,tournaments:[],currentTournamentId:"",currentTournamentName:"",currentTournamentImg:"",currentTournamentPlayers:[],currentTournamentGames:[]},n.updateCurrentTournament=n.updateCurrentTournament.bind(Object(R.a)(Object(R.a)(n))),console.log("tournaments this state ",n.state),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;$.getTournaments().then(function(t){var n=t.data;e.setState({tournaments:n})})}},{key:"updateCurrentTournament",value:function(e){var t=e.name,n=e.img,a=e.players,r=e.games,o=e.id;this.setState({currentTournamentId:o,currentTournamentName:t,currentTournamentImg:n,currentTournamentPlayers:a,currentTournamentGames:r})}},{key:"render",value:function(){return r.a.createElement(U.a,{exact:!0,path:"/tournaments",render:this.checkIfLogged})}}]),t}(a.Component)),te=new(function(){function e(){Object(c.a)(this,e),this.imageUploader=E.a.create({baseURL:"http://localhost:5000",withCredentials:!0})}return Object(i.a)(e,[{key:"uploadImage",value:function(e){return this.imageUploader.post("/api/tournaments/upload-image",e).then(function(e){return e.data})}}]),e}()),ne=j(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),$.handleFormSubmitAddTournament(n.state).then(function(e){n.props.setCurrentTournament(e.data._id,e.data.name,"set"),n.setState({name:"",img:"",redirect:!0})})},n.renderRedirect=function(){if(n.state.redirect)return r.a.createElement(D.a,{to:{pathname:"/tournaments",state:n.state}})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.fileOnchange=function(e){var t=e.target.files[0],a=new FormData;a.append("photo",t),te.uploadImage(a).then(function(e){n.setState({img:e,disable:!1})}).catch(function(e){return console.log(e)})},console.log("ADD TOURNAMENT props: ",e),n.state={name:"",img:"",players:[],games:[],redirect:!1,disable:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tournament-form"},this.renderRedirect(),r.a.createElement(J,null),r.a.createElement("h2",null,"NEW TOURNAMENT"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:this.fileOnchange}),this.disable?r.a.createElement("img",{src:this.state.img,alt:"",disabled:!0}):r.a.createElement("img",{className:"tournament-image",src:this.state.img,alt:"",disabled:!0}),this.disable?r.a.createElement("input",{type:"submit",disabled:!0}):r.a.createElement("input",{type:"submit"})),r.a.createElement(X,null))}}]),t}(a.Component)),ae=j(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),$.editTournament(n.state.tournamentId,n.state).then(function(e){console.log("new torunament",e),n.props.setCurrentTournament(e.data._id,e.name,"set"),n.setState({name:"",img:"",redirect:!0})})},n.renderRedirect=function(){if(n.state.redirect)return r.a.createElement(D.a,{to:"/tournaments"})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.fileOnchange=function(e){var t=e.target.files[0],a=new FormData;a.append("photo",t),console.log("shit",a,t),te.uploadImage(a).then(function(e){n.setState({img:e,disable:!1})}).catch(function(e){return console.log(e)})},console.log("EDIT TOURNAMENT props: ",e),n.state={name:"",img:"",players:[],games:[],redirect:!1,tournamentId:e.location.state},console.log("EDIT TOURNAMENT state: ",n.state),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;$.getTournamentbyId(this.state.tournamentId).then(function(t){var n=t.data,a=n.name,r=n.img,o=n.players,s=n.games,u=n._id;e.setState({name:a,img:r,players:o,games:s,tournamentId:u}),console.log("updated state",e.state)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement(J,null),r.a.createElement("h2",null,"EDIT TOURNAMENT"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"name",value:this.state.name,placeholder:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:this.fileOnchange}),this.disable?r.a.createElement("img",{src:this.state.img,alt:"",disabled:!0}):r.a.createElement("img",{className:"tournament-image",src:this.state.img,alt:"",disabled:!0}),this.disable?r.a.createElement("input",{type:"submit",disabled:!0}):r.a.createElement("input",{type:"submit"})),r.a.createElement(X,null))}}]),t}(a.Component));var re=j(function(e){return r.a.createElement("div",{className:"tournament-cell"},r.a.createElement("img",{src:e.img,alt:"pic"}),r.a.createElement("p",null,e.name),e.score>0?r.a.createElement("p",null,"SCORE: ",e.score):r.a.createElement("p",null,"NO SCORES YET"))}),oe=n(70),se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.img,o=t.position,s=t.score,u=n.props.location.state.tournamentId;console.log(""),$.addPlayer({name:a,img:r,position:o,score:s,tournamentId:u}).then(function(e){n.props.getPlayers(),n.setState({name:"",img:"",redirect:!1})})},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(d.a)({},a,r))},n.fileOnchange=function(e){var t=e.target.files[0],a=new FormData;a.append("photo",t),te.uploadImage(a).then(function(e){n.setState({img:e,disable:!1})}).catch(function(e){return console.log(e)})},n.state={name:"",img:W.a,position:-1,score:[],tournament:n.props.currentTournament,redirect:!1,disable:!1},n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;$.getTournamentbyId(this.props.location.state.tournamentId).then(function(t){console.log("res ",t);var n=t.data,a=n.name,r=n.img,o=n.players,s=n.games,u=n._id;console.log(t.data),e.setState({tournamentName:a,tournamentImage:r,tournamentPlayers:o,tournamentGames:s,tournamentId:u}),console.log("updated state",e.state)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("img",{src:this.props.img,alt:""}),r.a.createElement("div",{className:"tournament-tally"},r.a.createElement("img",{className:"tournament-image-small",src:this.state.tournamentImage,alt:""}),r.a.createElement("h2",null,this.props.currentTournamentName)),r.a.createElement("h2",null,"ADD A NEW PLAYER"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"name",value:this.state.name,placeholder:"name of player",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:this.fileOnchange}),this.disable?r.a.createElement("img",{src:this.state.img,alt:"",disabled:!0}):r.a.createElement("img",{className:"tournament-image",src:this.state.img,alt:"",disabled:!0}),this.disable?r.a.createElement("input",{type:"submit",disabled:!0}):r.a.createElement("input",{type:"submit"})))}}]),t}(a.Component),ue=Object(oe.a)(j(se)),ce=j(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).refreshPlayersList=function(){$.getPlayersOfTournament(n.props.location.state.tournamentId).then(function(e){var t=e.data.players;n.setState({playersIntoTournament:t})})},n.generatePlayersList=function(){return n.state.playersIntoTournament.map(function(e,t){var n=e.name,a=e.img,o=e.position,s=e.score,u=e._id;return console.log(e),r.a.createElement(re,{className:"fadeIn",key:t,name:n,img:a,position:o,score:s,_id:u})})},console.log("PLAYER LIST props",e),n.state={loggedIn:!0,tournament:n.props.currentTournament,tournamentId:n.props.location.state,playersIntoTournament:[]},console.log("PLAYER LIST state",n.state),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshPlayersList()}},{key:"render",value:function(){var e=this.state.playersIntoTournament;return console.log(e),r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement(ue,{getPlayers:this.refreshPlayersList}),r.a.createElement("div",null,r.a.createElement("h2",null,"PLAYERS"),this.generatePlayersList()),r.a.createElement(X,null))}}]),t}(a.Component));var ie=j(function(e){return r.a.createElement("div",{className:"game-cell"},e.player1&&e.player2?r.a.createElement("p",null,e.player1," VS. ",e.player2):r.a.createElement("p",null,"NOT READY YET"),-1!==e.winner?r.a.createElement("p",null,"WINNER: "):r.a.createElement("p",null,"NOT PLAYED"))}),le=j(function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).refreshList=function(){$.getGames().then(function(e){console.log(e.data);var t=e.data;n.setState({games:t})},function(){n.generateList()})},n.generateList=function(){return n.state.games.map(function(e,t){var n=e.player1,a=e.player2,o=e.winner,s=e._id;return console.log(e),r.a.createElement(ie,{key:t,player1:n,player2:a,winner:o,_id:s})})},console.log("GAMES LIST props",e),n.state={loggedIn:!0,tournament:n.props.currentTournament,games:[]},console.log("GAMES LIST state",n.state),n}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshList()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J,null),r.a.createElement("h2",null,"GAMES"),this.generateList(),r.a.createElement(X,null))}}]),t}(a.Component)),me=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component),pe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(T,null,r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(P,{exact:!0,path:"/",component:C}),r.a.createElement(P,{exact:!0,path:"/signup",component:C}),r.a.createElement(P,{exact:!0,path:"/login",component:L}),r.a.createElement(x,{exact:!0,path:"/tournaments",component:ee}),r.a.createElement(x,{exact:!0,path:"/brackets",component:me}),r.a.createElement(x,{exact:!0,path:"/tournaments/edit-tournament/:id",component:ae}),r.a.createElement(x,{exact:!0,path:"/tournaments/add-tournament",component:ne}),r.a.createElement(x,{exact:!0,path:"/players",component:ce}),r.a.createElement(x,{exact:!0,path:"/games",component:le}))))}}]),t}(a.Component);s.a.render(r.a.createElement(u.a,null,r.a.createElement(pe,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.6adbb92e.chunk.js.map