(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(t,e,n){t.exports=n(62)},40:function(t,e,n){},50:function(t,e,n){},51:function(t,e,n){},52:function(t,e,n){},61:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),c=n(4),l=n(5),s=n(7),u=n(6),d=n(8),h=(n(40),n(13)),m=(n(50),function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).scrollToTop=function(){h.animateScroll.scrollToTop()},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navi",id:"navibar"},i.a.createElement("div",{className:"navi-content"},i.a.createElement("h5",{className:"navi-logo",onClick:this.scrollToTop},"Sander Vermeer"),i.a.createElement("ul",{className:"navi-items"},i.a.createElement("li",{className:"navi-item",id:"blue"},i.a.createElement(h.Link,{activeClass:"activeGold",to:"projectsSection",spy:!0,smooth:!0,offset:-80,duration:500},"projects")),i.a.createElement("li",{className:"navi-item"},i.a.createElement(h.Link,{activeClass:"activePurple",to:"contactSection",spy:!0,smooth:!0,offset:-80,duration:500},"contact")))))}}]),e}(a.Component)),p=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.title,n=(t.subtitle,t.dark),a=t.id,r={minHeight:"calc(100vh - 80px)",backgroundColor:n?"#eee":"#fff"},o={color:this.props.color};return i.a.createElement("div",{style:r,id:a},i.a.createElement("div",{style:{paddingTop:"60px",paddingBottom:"0px"}},i.a.createElement("h1",{style:{textAlign:"center",fontSize:"62px"}},e,i.a.createElement("span",{style:o},"."))),i.a.createElement("div",{style:{position:"relative",margin:"0px auto",padding:"0px"}},this.props.children))}}]),e}(a.Component),b=(n(51),function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t={height:this.props.height,background:"url(".concat(this.props.imgUrl,")"),backgroundColor:"#FF6663"},e={position:"relative",top:"".concat(this.props.height-60,"px"),left:"20px",color:"gold",fontSize:"30px",backgroundColor:"black",width:"100%"};return i.a.createElement("div",{style:t},i.a.createElement("h2",{style:e},this.props.title))}}]),e}(a.Component)),g=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{fontFamily:"sans-serif",fontWeight:"bold",paddingTop:"1.5em",paddingBottom:"1.5em",paddingLeft:"10px",margin:0}},this.props.text)}}]),e}(a.Component),f=function(t){function e(){var t,n;Object(c.a)(this,e);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(t=Object(u.a)(e)).call.apply(t,[this].concat(i)))).state={width:600},n.getHeight=function(){return n.state.width},n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t={height:this.state.height,width:this.state.width};return i.a.createElement("div",null,i.a.createElement("a",{href:this.props.targetUrl,target:"_blank"},i.a.createElement("div",{className:"card",style:t,id:this.props.id,height:this.state.height,width:this.state.width},i.a.createElement(b,{title:this.props.title,height:.65*this.state.width,imgUrl:this.props.imgUrl}),i.a.createElement(g,{text:this.props.text}))))}}]),e}(a.Component),v=(a.Component,function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{minHeight:"500px"}},i.a.createElement("h2",null,"Contact info"))}}]),e}(a.Component)),x=n(63),j=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement(x.a,{style:{padding:"80px 40px"}},i.a.createElement("h1",{className:"display-3"},"I'm Sander Vermeer."),i.a.createElement("p",{className:"lead"},"I'm a Dutch based developer, designer and allround tinkerer."),i.a.createElement("p",null,"I specialise in C++, Java, JavaScript and also like to fool around with Arduino. Check out some of my projects ",i.a.createElement(h.Link,{activeClass:"activeGold",to:"projectsSection",spy:!0,smooth:!0,offset:-80,duration:500,style:{cursor:"pointer"}},i.a.createElement("span",{style:{textDecoration:"underline"}},"below."))," "))}}]),e}(a.Component),E=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{style:{backgroundColor:"#CCC",padding:"20px 40px"}},i.a.createElement("p",null,"copyright Sander Vermeer ",(new Date).getFullYear()," (c)."))}}]),e}(a.Component),y=n(2),k=n(34),O=n(66),w=n(67),T=n(68),C=n(64),U=n(65),I=(n(52),function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t=this.props,e=t.title,n=t.text,a=t.imgUrl,r=t.button1Url,o=t.button1Text,c=t.button2Url,l=t.button2Text;return i.a.createElement(x.a,{fluid:!0,style:{minHeight:"calc(100vh - 260px)"}},i.a.createElement(C.a,{style:{minHeight:"72vh"},className:"d-flex flex-wrap align-items-center m-4"},i.a.createElement(U.a,{style:{padding:"2vw 0px 2vw 2vw"}},i.a.createElement("img",{src:a,className:"img-fluid float-right",alt:e,style:{maxHeight:"700px"}})),i.a.createElement(U.a,{style:{marginLeft:"1vw",marginRight:"4vw"}},i.a.createElement("h1",null,e),i.a.createElement("p",{className:"lead"},n),i.a.createElement("a",{className:"projectButton",href:r,target:"_blank"},i.a.createElement("h4",null,o)),i.a.createElement("a",{className:"projectButton",href:c,target:"_blank"},i.a.createElement("h4",null,l)))))}}]),e}(a.Component)),S=[{imgUrl:"./img/monosynth-card.png",title:"Monosynth-1, an analogue modelled synthesizer VST (C++)",text:"This is a software synthesizer, made to be used as a VST plug-in or standalone application. It's realised in C++ using the Juce framework. It features 3 oscillators, 3 different filter models, 3 envelope generators, an LFO and a simple yet powerfull sequencer. ",button1Text:"github",button1Url:"https://github.com/mohragk/VermeerMonosynth-1"},{imgUrl:"./img/fourier-card.png",title:"A visualisation of the Fourier Series in P5.js",text:"A rendering of harmonics in audio signals. Switch between square wave, saw wave and triangle wave and add harmonics. Use the keyboard to play some notes.",button1Url:"https://editor.p5js.org/mohragk/full/BkMiw4KxV",button1Text:"demo",button2Url:"https://editor.p5js.org/mohragk/sketches/BkMiw4KxV",button2Text:"edit"},{imgUrl:"./img/shifter-card.png",title:"DIY sequential shifter using Arduino",text:"A simple, robust up-down shifter, designed to work with racing games. The control board is programmed in Arduino and extended to work with a (future) handbrake. A GUI was created for setting different variables for said handbrake.",button1Url:"https://www.youtube.com/watch?v=0ZPwsYKEWEM",button1Text:"youtube",button2Url:"https://github.com/mohragk/Shifter_Handbrake_DIY",button2Text:"github"},{imgUrl:"./img/wordyclock-card.png",title:"Wordy Clock",text:"A clock that literally tells time.",button1Url:"https://editor.p5js.org/mohragk/full/cuRLIK3Pq",button1Text:"demo",button2Url:"https://editor.p5js.org/mohragk/sketches/cuRLIK3Pq",button2Text:"edit"},{imgUrl:"./img/matrix-card.png",title:"Matrix Effect made in P5.js",text:"A contemporary remake of a classic.",button1Url:"https://editor.p5js.org/mohragk/full/Sk2QPOsWE",button1Text:"demo",button2Url:"https://editor.p5js.org/mohragk/sketches/Sk2QPOsWE",button2Text:"edit"}],N=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={activeIndex:0},n.next=n.next.bind(Object(y.a)(Object(y.a)(n))),n.previous=n.previous.bind(Object(y.a)(Object(y.a)(n))),n.goToIndex=n.goToIndex.bind(Object(y.a)(Object(y.a)(n))),n.onExiting=n.onExiting.bind(Object(y.a)(Object(y.a)(n))),n.onExited=n.onExited.bind(Object(y.a)(Object(y.a)(n))),n}return Object(d.a)(e,t),Object(l.a)(e,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var t=this.state.activeIndex===S.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:t})}}},{key:"previous",value:function(){if(!this.animating){var t=0===this.state.activeIndex?S.length-1:this.state.activeIndex-1;this.setState({activeIndex:t})}}},{key:"goToIndex",value:function(t){this.animating||this.setState({activeIndex:t})}},{key:"render",value:function(){var t=this,e=this.state.activeIndex,n=S.map(function(e){return i.a.createElement(k.a,{onExiting:t.onExiting,onExited:t.onExited,key:e.src},i.a.createElement(I,{imgUrl:e.imgUrl,title:e.title,text:e.text,button1Text:e.button1Text,button1Url:e.button1Url,button2Text:e.button2Text,button2Url:e.button2Url}))});return i.a.createElement(O.a,{activeIndex:e,next:this.next,previous:this.previous,interval:!1},i.a.createElement(w.a,{items:S,activeIndex:e,onClickHandler:this.goToIndex,className:".hide-600-up"}),n,i.a.createElement(T.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),i.a.createElement(T.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),e}(a.Component),A=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(d.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,null),i.a.createElement(p,{title:"hello",dark:!1,color:"skyblue",id:"helloSection"},i.a.createElement(j,null)),i.a.createElement(p,{title:"projects",dark:!0,color:"gold",id:"projectsSection"},i.a.createElement(N,null)),i.a.createElement(p,{title:"contact",dark:!1,color:"crimson",id:"contactSection"},i.a.createElement(v,null)),i.a.createElement(E,null))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(60),n(61);o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.f85b49e9.chunk.js.map