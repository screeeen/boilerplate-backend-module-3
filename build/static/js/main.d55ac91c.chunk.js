(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a.p+"static/media/court.e778dbef.gif"},29:function(e,t,a){e.exports=a.p+"static/media/anim.509f6c2d.gif"},30:function(e,t,a){e.exports=a.p+"static/media/back.c7f74c8c.svg"},31:function(e,t,a){e.exports=a.p+"static/media/user.31354796.svg"},34:function(e,t,a){e.exports=a.p+"static/media/badge.40b071d3.svg"},35:function(e,t,a){e.exports=a.p+"static/media/basket.a6ac849a.svg"},36:function(e,t,a){e.exports=a.p+"static/media/upload.9cedc1c5.svg"},39:function(e,t,a){e.exports=a(67)},66:function(e,t,a){e.exports=a.p+"static/media/pitch.6177bc18.svg"},67:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(27),s=a.n(o),l=a(72),c=a(2),i=a(3),u=a(5),m=a(4),p=a(6),h=a(73),d=a(12),g=a(68),f=a(14),E=a.n(f),y=new(function(){function e(){Object(c.a)(this,e),this.auth=E.a.create({baseURL:"https://quick-compo.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"signup",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/signup",{username:t,password:a}).then(function(e){return e.data})}},{key:"login",value:function(e){var t=e.username,a=e.password;return this.auth.post("/auth/login",{username:t,password:a}).then(function(e){return e.data})}},{key:"logout",value:function(){return this.auth.post("/auth/logout",{}).then(function(e){return e.data})}},{key:"me",value:function(){return this.auth.get("/auth/me").then(function(e){return e.data})}}]),e}()),b=r.a.createContext(),v=b.Consumer,O=b.Provider,j=function(e){return function(t){function a(){return Object(c.a)(this,a),Object(u.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(p.a)(a,t),Object(i.a)(a,[{key:"render",value:function(){var t=this;return r.a.createElement(v,null,function(a){return r.a.createElement(e,Object.assign({login:a.login,signup:a.signup,user:a.user,logout:a.logout,isLoggedin:a.isLoggedin},t.props))})}}]),a}(n.Component)},S=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoggedin:!1,user:null,isLoading:!0,currentTournament:void 0,currentTournamentName:""},a.signup=function(e){var t=e.username,n=e.password;y.signup({username:t,password:n}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(e){var t=e.response.data;a.setState({message:t.statusMessage})})},a.login=function(e){var t=e.username,n=e.password;y.login({username:t,password:n}).then(function(e){a.setState({isLoggedin:!0,user:e})}).catch(function(){})},a.logout=function(){y.logout().then(function(){a.setState({isLoggedin:!1,user:null})}).catch(function(){})},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;y.me().then(function(t){e.setState({isLoggedin:!0,user:t,isLoading:!1})}).catch(function(){e.setState({isLoggedin:!1,user:null,isLoading:!1})})}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.isLoggedin,n=e.user;return t?r.a.createElement("div",null,"Loading"):r.a.createElement(O,{value:{isLoggedin:a,user:n,login:this.login,logout:this.logout,signup:this.signup}},this.props.children)}}]),t}(n.Component),I=a(28),T=a.n(I),N=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.signup({username:n,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"container login"},r.a.createElement("div",{className:"splashImg"},r.a.createElement("img",{src:T.a,alt:"img"})),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("label",null,"Username:"),r.a.createElement("input",{className:"input-field",type:"text",name:"username",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Password:"),r.a.createElement("input",{className:"input-field",type:"password",name:"password",value:a,onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Signup"})),r.a.createElement("p",null,"Already have account?",r.a.createElement(g.a,{to:"/login"}," Login")))}}]),t}(n.Component)),k=a(29),C=a.n(k),L=j(function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={username:"",password:""},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state,n=t.username,r=t.password;a.props.login({username:n,password:r})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.password;return r.a.createElement("div",{className:"container login"},r.a.createElement("div",{className:"splashImg"},r.a.createElement("img",{src:C.a,alt:"img"})),r.a.createElement("h1",null,"Quick Compo"),r.a.createElement("form",{onSubmit:this.handleFormSubmit},r.a.createElement("input",{className:"input-field",type:"text",name:"username",value:t,placeholder:"username",onChange:this.handleChange}),r.a.createElement("input",{className:"input-field",type:"password",name:"password",value:a,placeholder:"password",onChange:this.handleChange}),r.a.createElement("input",{className:"button",type:"submit",value:"Login"})))}}]),t}(n.Component)),w=a(19),R=a(69),A=a(70);var D=j(function(e){var t=e.component,a=e.isLoggedin,n=Object(w.a)(e,["component","isLoggedin"]);return r.a.createElement(R.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,e):r.a.createElement(A.a,{to:"/login"})}}))});var P=j(function(e){var t=e.component,a=e.isLoggedin,n=Object(w.a)(e,["component","isLoggedin"]);return r.a.createElement(R.a,Object.assign({},n,{render:function(e){return a?r.a.createElement(A.a,{to:"/tournaments"}):r.a.createElement(t,e)}}))}),x=a(15),M=a(37),U=a(16),_=a(32),F=a(30),Y=a.n(F),G=a(31),q=a.n(G),B=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.user,n=t.isLoggedin;return r.a.createElement("div",{className:"nav-bar"},r.a.createElement("button",{className:"back-button",onClick:function(){return e.props.history.go(-1)}},r.a.createElement("img",{src:Y.a,alt:"back"})),n?r.a.createElement("div",null,r.a.createElement("p",null,a.username)):null,r.a.createElement("button",{className:"back-button"},r.a.createElement("img",{src:q.a,alt:"user"})))}}]),t}(n.Component),W=j(Object(_.a)(B)),J=a(34),H=a.n(J),Q=(a(66),a(35)),V=a.n(Q),z=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={tournament:a.props.tournament},console.log("footer props",e),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"footer"},r.a.createElement("div",{className:"footer-button"},r.a.createElement(g.a,{to:{pathname:"/tournaments"}},r.a.createElement("img",{src:V.a,alt:"sports"}),"Tournaments")),r.a.createElement("div",{className:"footer-button"},r.a.createElement(g.a,{to:{pathname:"/leaderboard"}},r.a.createElement("img",{src:H.a,alt:"user"}),"Users")))}}]),t}(n.Component);var K=j(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"tournament-cell"},r.a.createElement("img",{src:e.img,alt:"pic"}),r.a.createElement(g.a,{to:{pathname:"/players",state:{tournamentId:e._id}}},r.a.createElement("p",{className:"tournament-name"},e.name)),r.a.createElement("p",null,"PLAYERS IN: ",e.players.length),r.a.createElement(g.a,{to:{pathname:"/tournaments/edit-tournament/".concat(e._id),state:{tournamentId:e._id}}},r.a.createElement("p",null,"EDIT"))))}),X=new(function(){function e(){Object(c.a)(this,e),this.calls=E.a.create({baseURL:"https://quick-compo.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"getPlayersOfTournament",value:function(e){return this.calls.get("/api/players/intoTournament/"+e).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"addPlayer",value:function(e){return this.calls.post("/api/players/add-player",e).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getPlayers",value:function(){return this.calls.get("/api/players").then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"modifyPlayer",value:function(e,t){return this.calls.put("/api/players/".concat(t),{score:e}).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getTournamentbyId",value:function(e){return this.calls.get("/api/tournaments/"+e).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"editTournament",value:function(e,t){return console.log("thing ",t),this.calls.put("/api/tournaments/edit/"+e,t).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"handleFormSubmitAddTournament",value:function(e){return this.calls.post("/api/tournaments/add-tournament",e).then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getTournaments",value:function(){return this.calls.get("/api/tournaments").then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getGames",value:function(){return this.calls.get("/api/games").then(function(e){return e}).catch(function(e){return console.log(e)})}},{key:"getRounds",value:function(e,t){return console.log("before: ",e,t),this.calls.post("/api/games/add-all-games",{tournamentId:e,players:t}).then(function(e){return e}).catch(function(e){return console.log(e)})}}]),e}()),Z=j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).generateTournamentsList=function(){return a.state.tournaments.slice(0).reverse().map(function(e,t){var a=e.name,n=e.img,o=e.players,s=e.games,l=e._id;return r.a.createElement(K,{className:"fadeIn",key:t,name:a,img:n,players:o,games:s,_id:l})})},a.checkIfLogged=function(){return a.state.loggedIn?r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("div",{className:"tournamentList"},r.a.createElement("button",null,r.a.createElement(g.a,{to:{pathname:"/tournaments/add-tournament"}},"ADD A NEW TOURNAMENT")),r.a.createElement("h2",null,"TOURNAMENTS"),a.generateTournamentsList()),r.a.createElement(z,{tournament:a.props.currentTournament})):r.a.createElement(M.a,{to:"/error"})},console.log("tournaments props ",e),a.state={loggedIn:!0,tournaments:[],currentTournamentId:"",currentTournamentName:"",currentTournamentImg:"",currentTournamentPlayers:[],currentTournamentGames:[]},a.updateCurrentTournament=a.updateCurrentTournament.bind(Object(x.a)(Object(x.a)(a))),console.log("tournaments this state ",a.state),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;X.getTournaments().then(function(t){var a=t.data;e.setState({tournaments:a})})}},{key:"updateCurrentTournament",value:function(e){var t=e.name,a=e.img,n=e.players,r=e.games,o=e.id;this.setState({currentTournamentId:o,currentTournamentName:t,currentTournamentImg:a,currentTournamentPlayers:n,currentTournamentGames:r})}},{key:"render",value:function(){return r.a.createElement(U.a,{exact:!0,path:"/tournaments",render:this.checkIfLogged})}}]),t}(n.Component)),$=new(function(){function e(){Object(c.a)(this,e),this.imageUploader=E.a.create({baseURL:"https://quick-compo.herokuapp.com/",withCredentials:!0})}return Object(i.a)(e,[{key:"uploadImage",value:function(e){return this.imageUploader.post("/api/tournaments/upload-image",e).then(function(e){return e.data})}}]),e}()),ee=j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),X.handleFormSubmitAddTournament(a.state).then(function(e){a.setState({name:"",img:"",redirect:!0})})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(A.a,{to:{pathname:"/tournaments",state:a.state}})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.fileOnchange=function(e){var t=e.target.files[0],n=new FormData;n.append("photo",t),$.uploadImage(n).then(function(e){a.setState({img:e,disable:!1})}).catch(function(e){return console.log(e)})},console.log("ADD TOURNAMENT props: ",e),a.state={name:"",img:"",players:[],games:[],redirect:!1,disable:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"tournament-form"},this.renderRedirect(),r.a.createElement(W,null),r.a.createElement("h2",null,"NEW TOURNAMENT"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:this.fileOnchange}),this.disable?r.a.createElement("img",{src:this.state.img,alt:"",disabled:!0}):r.a.createElement("img",{className:"tournament-image",src:this.state.img,alt:"",disabled:!0}),this.disable?r.a.createElement("input",{type:"submit",disabled:!0}):r.a.createElement("input",{type:"submit"})),r.a.createElement(z,null))}}]),t}(n.Component)),te=j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault(),X.editTournament(a.state.tournamentId,a.state).then(function(e){console.log("new torunament",e),a.setState({name:"",img:"",redirect:!0})})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(A.a,{to:"/tournaments"})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.fileOnchange=function(e){var t=e.target.files[0],n=new FormData;n.append("photo",t),console.log("shit",n,t),$.uploadImage(n).then(function(e){a.setState({img:e,disable:!1})}).catch(function(e){return console.log(e)})},console.log("EDIT TOURNAMENT props: ",e),a.state={name:"",img:"",players:[],games:[],redirect:!1,tournamentId:e.location.state},console.log("EDIT TOURNAMENT state: ",a.state),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.state.tournamentId),X.getTournamentbyId(this.props.location.state.tournamentId).then(function(t){var a=t.data,n=a.name,r=a.img,o=a.players,s=a.games,l=a._id;e.setState({name:n,img:r,players:o,games:s,tournamentId:l}),console.log("updated state",e.state)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement(W,null),r.a.createElement("h2",null,"EDIT TOURNAMENT"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"name",value:this.state.name,placeholder:this.state.name,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:this.fileOnchange}),this.disable?r.a.createElement("img",{src:this.state.img,alt:"",disabled:!0}):r.a.createElement("img",{className:"tournament-image",src:this.state.img,alt:"",disabled:!0}),this.disable?r.a.createElement("input",{type:"submit",disabled:!0}):r.a.createElement("input",{type:"submit"})),r.a.createElement(z,null))}}]),t}(n.Component));var ae=j(function(e){return r.a.createElement("div",{className:"tournament-cell"},r.a.createElement("img",{src:e.img,alt:"pic"}),r.a.createElement("p",null,e.name),e.score>0?r.a.createElement("p",null,"SCORE: ",e.score):r.a.createElement("p",null,"NO SCORES YET"))}),ne=a(36),re=a.n(ne),oe=a(71),se=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.name,r=t.img,o=t.position,s=t.score,l=a.props.location.state.tournamentId;console.log(""),X.addPlayer({name:n,img:r,position:o,score:s,tournamentId:l}).then(function(e){a.props.getPlayers(),a.setState({name:"",img:"",redirect:!1})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r))},a.fileOnchange=function(e){var t=e.target.files[0],n=new FormData;n.append("photo",t),$.uploadImage(n).then(function(e){a.setState({img:e,disable:!1})}).catch(function(e){return console.log(e)})},a.state={name:"",img:re.a,position:-1,score:0,tournament:a.props.currentTournament,redirect:!1,disable:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;X.getTournamentbyId(this.props.location.state.tournamentId).then(function(t){console.log("res ",t);var a=t.data,n=a.name,r=a.img,o=a.players,s=a.games,l=a._id;console.log(t.data),e.setState({tournamentName:n,tournamentImage:r,tournamentPlayers:o,tournamentGames:s,tournamentId:l}),console.log("updated state",e.state)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("img",{src:this.props.img,alt:""}),r.a.createElement("h2",null,"ADD A NEW PLAYER"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",name:"name",value:this.state.name,placeholder:"name of player",onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"file",onChange:this.fileOnchange}),this.disable?r.a.createElement("img",{src:this.state.img,alt:"",disabled:!0}):r.a.createElement("img",{className:"tournament-image",src:this.state.img,alt:"",disabled:!0}),this.disable?r.a.createElement("input",{type:"submit",disabled:!0}):r.a.createElement("input",{type:"submit"})))}}]),t}(n.Component),le=Object(oe.a)(j(se)),ce=j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).refreshPlayersList=function(){X.getPlayersOfTournament(a.props.location.state.tournamentId).then(function(e){var t=e.data.players;a.setState({playersIntoTournament:t})})},a.togglePlayButton=function(){var e=a.state.playersIntoTournament.length;if(e>=4&&e%2===0){var t=a.state.playersIntoTournament;return console.log("players into tournament",t,a.state.tournamentId),r.a.createElement(g.a,{to:{pathname:"/games",state:{tournament:a.state.tournamentId,players:t}}},r.a.createElement("button",null,"START GAMES"))}},a.generatePlayersList=function(){return a.state.playersIntoTournament.map(function(e,t){var a=e.name,n=e.img,o=e.position,s=e.score,l=e._id;return r.a.createElement(ae,{className:"fadeIn",key:t,name:a,img:n,position:o,score:s,_id:l})})},console.log("PLAYER LIST props",e),a.state={loggedIn:!0,tournament:a.props.currentTournament,tournamentId:a.props.location.state,playersIntoTournament:[]},console.log("PLAYER LIST state",a.state),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshPlayersList()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,null),this.togglePlayButton(),r.a.createElement(le,{getPlayers:this.refreshPlayersList}),r.a.createElement("div",null,r.a.createElement("h2",null,"PLAYERS"),this.generatePlayersList()),r.a.createElement(z,null))}}]),t}(n.Component)),ie=j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).state={tournament:e.tournament},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(g.a,{to:{pathname:"/game-edit/",state:{tournament:this.props.tournament.tournamentId,player1Id:this.props.player1Id,player2Id:this.props.player2Id,player1:this.props.player1,player2:this.props.player2,player1Score:this.props.player1Score,player2Score:this.props.player2Score,player1Img:this.props.player1Img,player2Img:this.props.player2Img}}},r.a.createElement("div",{className:"game-cell"},this.props.player1&&this.props.player2?r.a.createElement("div",null,r.a.createElement("div",{className:"player-card"},r.a.createElement("p",null,this.props.player1),r.a.createElement("img",{className:"tournament-image-small",src:this.props.player1Img,alt:""}),r.a.createElement("h2",null,"VS."),r.a.createElement("img",{className:"tournament-image-small",src:this.props.player2Img,alt:""}),r.a.createElement("p",null,this.props.player2)),r.a.createElement("div",{className:"gap"}),r.a.createElement("div",{className:"player-card scores-line"},r.a.createElement("p",null,"SCORE: ",this.props.player1Score),r.a.createElement("p",null,"SCORE: ",this.props.player2Score))):r.a.createElement("p",null,"NOT READY YET")))}}]),t}(n.Component)),ue=j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).refreshList=function(){var e=a.props.location.state,t=e.tournament,n=e.players;console.log("tutututotu: ",t,n),X.getRounds(t.tournamentId,n).then(function(e){var t=e.data.games;a.setState({games:t})},function(){a.generateList()})},a.generateList=function(){return a.state.games.map(function(e,t){var n=e.player1,o=e.player2,s=e.winner,l=e._id,c=a.props.location.state.tournament;return r.a.createElement(ie,{key:t,player1:n.name,player2:o.name,player1Id:n._id,player2Id:o._id,player1Img:n.img,player2Img:o.img,player1Score:n.score,player2Score:o.score,winner:s,_id:l,tournament:c})})},a.state={loggedIn:!0,tournament:a.props.currentTournament,games:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshList(),console.log("GAMES LIST props",this.props)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("h2",null,"GAMES"),r.a.createElement("div",{className:"games-tables"},this.generateList()),r.a.createElement(z,{tournament:this.props.currentTournament}))}}]),t}(n.Component)),me=j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).renderRedirect=function(){if(a.state.redirect)return a.props.history.go(-1)},a.handleSubmit=function(e){e.preventDefault();var t=a.state,n=t.player1Score,r=t.player2Score,o=t.player1Id,s=t.player2Id,l=t.tournament;console.log("sendind: ",n,r,o,s,l),X.modifyPlayer(n,o).then(function(e){console.log("updatedScores",e),a.setState({player1Score:0})}),X.modifyPlayer(r,s).then(function(e){console.log("updatedScores",e),a.setState({player2Score:0,redirect:!0})})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(d.a)({},n,r)),console.log("the state: ",a.state)},a.state={tournament:e.location.state.tournament,player1Id:e.location.state.player1Id,player2Id:e.location.state.player2Id,player1Img:e.location.state.player1Img,player2Img:e.location.state.player2Img,player1Score:0,player2Score:0,redirect:!1},console.log("game EDIT props ",e),a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.renderRedirect(),r.a.createElement(W,null),r.a.createElement("h2",null,"EDIT SCORES"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("img",{className:"tournament-image-small",src:this.props.location.state.player1Img,alt:""}),r.a.createElement("p",null,this.props.location.state.player1),r.a.createElement("input",{type:"number",name:"player1Score",value:this.state.player1Score,placeholder:this.state.player1Score,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("img",{className:"tournament-image-small",src:this.props.location.state.player2Img,alt:""}),r.a.createElement("p",null,this.props.location.state.player2),r.a.createElement("input",{type:"number",name:"player2Score",value:this.state.player2Score,placeholder:this.state.player2Score,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("button",{onClick:function(t){return e.handleSubmit(t)}},r.a.createElement("input",{type:"submit"}))),r.a.createElement(z,null))}}]),t}(n.Component)),pe=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component);var he=j(function(e){return r.a.createElement("div",null,r.a.createElement("div",{className:"tournament-cell"},r.a.createElement("img",{src:e.img,alt:"pic"}),r.a.createElement(g.a,{to:{pathname:"/players",state:{tournamentId:e._id}}},r.a.createElement("p",{className:"tournament-name"},e.name)),r.a.createElement("p",{className:"tournament-name"},"SCORE: ",e.score)))}),de=j(function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).refreshList=function(){X.getPlayers().then(function(e){var t=e.data;console.log("players???? ",t),a.setState({players:t})},function(){a.generateList()})},a.generateList=function(){return a.state.players.sort(function(e,t){return t.score-e.score}).map(function(e,t){var a=e.name,n=e.img,o=e.score;return r.a.createElement(he,{key:t,name:a,img:n,score:o})})},a.state={players:[]},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.refreshList(),console.log("Leaderboard props",this.props)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(W,null),r.a.createElement("h2",null,"HALL OF FAME"),r.a.createElement("div",{className:"games-tables"},this.generateList()),r.a.createElement(z,{tournament:this.props.currentTournament}))}}]),t}(n.Component)),ge=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(S,null,r.a.createElement("div",{className:"container"},r.a.createElement(h.a,null,r.a.createElement(P,{exact:!0,path:"/",component:N}),r.a.createElement(P,{exact:!0,path:"/signup",component:N}),r.a.createElement(P,{exact:!0,path:"/login",component:L}),r.a.createElement(D,{exact:!0,path:"/tournaments",component:Z}),r.a.createElement(D,{exact:!0,path:"/brackets",component:pe}),r.a.createElement(D,{exact:!0,path:"/tournaments/edit-tournament/:id",component:te}),r.a.createElement(D,{exact:!0,path:"/tournaments/add-tournament",component:ee}),r.a.createElement(D,{exact:!0,path:"/players",component:ce}),r.a.createElement(D,{exact:!0,path:"/games",component:ue}),r.a.createElement(D,{exact:!0,path:"/game-edit",component:me}),r.a.createElement(D,{exact:!0,path:"/leaderboard",component:de}))))}}]),t}(n.Component);s.a.render(r.a.createElement(l.a,null,r.a.createElement(ge,null)),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.d55ac91c.chunk.js.map