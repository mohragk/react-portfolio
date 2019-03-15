(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,n){e.exports=n(61)},40:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},60:function(e,t,n){},61:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(12),o=n.n(r),c=n(4),l=n(5),s=n(8),u=n(6),d=n(7),h=(n(40),n(14)),m=(n(50),function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).scrollToTop=function(){h.animateScroll.scrollToTop()},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("nav",{className:"navi",id:"navibar"},i.a.createElement("div",{className:"navi-content"},i.a.createElement("h5",{className:"navi-logo",onClick:this.scrollToTop},"Sander Vermeer"),i.a.createElement("ul",{className:"navi-items"},i.a.createElement("li",{className:"navi-item",id:"blue"},i.a.createElement(h.Link,{activeClass:"activeGold",to:"projectsSection",spy:!0,smooth:!0,offset:-80,duration:500},"projects")),i.a.createElement("li",{className:"navi-item"},i.a.createElement(h.Link,{activeClass:"activePurple",to:"contactSection",spy:!0,smooth:!0,offset:-80,duration:500},"contact")))))}}]),t}(a.Component)),p=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=(e.subtitle,e.dark),a=e.id,r={minHeight:"100vh",backgroundColor:n?"#eee":"#fff"},o={color:this.props.color};return i.a.createElement("div",{style:r,id:a},i.a.createElement("div",{style:{paddingTop:"60px",paddingBottom:"0px"}},i.a.createElement("h1",{style:{textAlign:"center",fontSize:"62px"}},t,i.a.createElement("span",{style:o},"."))),i.a.createElement("div",{style:{margin:"0px auto",padding:"0px"}},this.props.children))}}]),t}(a.Component),b=(n(51),function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={height:this.props.height,background:"url(".concat(this.props.imgUrl,")"),backgroundColor:"#FF6663"},t={position:"relative",top:"".concat(this.props.height-60,"px"),left:"20px",color:"gold",fontSize:"30px",backgroundColor:"black",width:"100%"};return i.a.createElement("div",{style:e},i.a.createElement("h2",{style:t},this.props.title))}}]),t}(a.Component)),g=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{fontFamily:"sans-serif",fontWeight:"bold",paddingTop:"1.5em",paddingBottom:"1.5em",paddingLeft:"10px",margin:0}},this.props.text)}}]),t}(a.Component),v=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={width:600},n.getHeight=function(){return n.state.width},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e={height:this.state.height,width:this.state.width};return i.a.createElement("div",null,i.a.createElement("a",{href:this.props.targetUrl,target:"_blank"},i.a.createElement("div",{className:"card",style:e,id:this.props.id,height:this.state.height,width:this.state.width},i.a.createElement(b,{title:this.props.title,height:.65*this.state.width,imgUrl:this.props.imgUrl}),i.a.createElement(g,{text:this.props.text}))))}}]),t}(a.Component),f=(a.Component,function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{minHeight:"500px"}},i.a.createElement("h2",null,"Contact info"))}}]),t}(a.Component)),j=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{minHeight:"500px",maxWidth:" 1200px",margin:"0px auto",marginTop:"200px"}},i.a.createElement("h1",{className:"display-3"},"I'm Sander Vermeer."),i.a.createElement("p",{className:"lead"},"I'm a Dutch based developer, designer and allround tinkerer."),i.a.createElement("p",null,"I specialise in C++, Java, JavaScript and also like to fool around with Arduino. Check out some of my projects ",i.a.createElement(h.Link,{activeClass:"activeGold",to:"projectsSection",spy:!0,smooth:!0,offset:-80,duration:500,style:{cursor:"pointer"}},i.a.createElement("span",{style:{textDecoration:"underline"}},"below."))," "),i.a.createElement("p",{className:"lead"}))}}]),t}(a.Component),x=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{style:{backgroundColor:"#CCC",padding:"20px 40px"}},i.a.createElement("p",null,"copyright Sander Vermeer ",(new Date).getFullYear()," (c)."))}}]),t}(a.Component),E=n(2),y=n(34),O=n(66),k=n(67),w=n(68),C=n(62),I=n(63),T=n(64),S=n(65),N=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.text,a=e.imgUrl,r={backgroundImage:"url(".concat(a,")"),backgroundSize:"contain",position:"absolute",backgroundPosition:"center",backgroundRepeat:"no-repeat",width:"100%",height:"100%",minWidth:"150px"};return i.a.createElement(C.a,{fluid:!0,style:{minHeight:"72vh",maxHeight:"72vh"}},i.a.createElement(I.a,{style:{minHeight:"72vh"},noGutters:!0},i.a.createElement(T.a,{style:{margin:"60px"}},i.a.createElement("div",{style:r})),i.a.createElement(T.a,{style:{marginLeft:"0px",marginRight:"60px"}},i.a.createElement("div",{style:{position:"relative",top:"50%",transform:"translateY(-50%)",minHeight:"50%"}},i.a.createElement("h1",null,t),i.a.createElement("p",{className:"lead"},n),i.a.createElement(S.a,{color:"primary",href:"www.google.com",target:"_blank"},"BUTTON")))))}}]),t}(a.Component),H=[{imgUrl:"./img/monosynth-card.png",title:"An anlogue modelled synthesizer VST, made with the Juce framework in C++.",text:"It features 3 oscillators, 3 filters and a simple, yet effective, sequencer."},{imgUrl:"./img/fourier-card.png",title:"A second project, yet unexplained.",text:"This would be the body of the text"},{title:"An anlogue modelled synthesizer VST, made with the Juce framework in C++.",text:"It features 3 oscillators, 3 filters and a simple, yet effective, sequencer."}],U=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={activeIndex:0},n.next=n.next.bind(Object(E.a)(Object(E.a)(n))),n.previous=n.previous.bind(Object(E.a)(Object(E.a)(n))),n.goToIndex=n.goToIndex.bind(Object(E.a)(Object(E.a)(n))),n.onExiting=n.onExiting.bind(Object(E.a)(Object(E.a)(n))),n.onExited=n.onExited.bind(Object(E.a)(Object(E.a)(n))),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"onExiting",value:function(){this.animating=!0}},{key:"onExited",value:function(){this.animating=!1}},{key:"next",value:function(){if(!this.animating){var e=this.state.activeIndex===H.length-1?0:this.state.activeIndex+1;this.setState({activeIndex:e})}}},{key:"previous",value:function(){if(!this.animating){var e=0===this.state.activeIndex?H.length-1:this.state.activeIndex-1;this.setState({activeIndex:e})}}},{key:"goToIndex",value:function(e){this.animating||this.setState({activeIndex:e})}},{key:"render",value:function(){var e=this,t=this.state.activeIndex,n=H.map(function(t){return i.a.createElement(y.a,{onExiting:e.onExiting,onExited:e.onExited,key:t.src},i.a.createElement(N,{imgUrl:t.imgUrl,title:t.title,text:t.text}))});return i.a.createElement(O.a,{activeIndex:t,next:this.next,previous:this.previous,interval:!1},i.a.createElement(k.a,{items:H,activeIndex:t,onClickHandler:this.goToIndex}),n,i.a.createElement(w.a,{direction:"prev",directionText:"Previous",onClickHandler:this.previous}),i.a.createElement(w.a,{direction:"next",directionText:"Next",onClickHandler:this.next}))}}]),t}(a.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(m,null),i.a.createElement(p,{title:"hello",dark:!1,color:"skyblue",id:"helloSection"},i.a.createElement(j,null)),i.a.createElement(p,{title:"projects",dark:!0,color:"gold",id:"projectsSection"},i.a.createElement(U,null)),i.a.createElement(p,{title:"contact",dark:!1,color:"crimson",id:"contactSection"},i.a.createElement(f,null)),i.a.createElement(x,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(59),n(60);o.a.render(i.a.createElement(A,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[35,1,2]]]);
//# sourceMappingURL=main.c72af0c5.chunk.js.map